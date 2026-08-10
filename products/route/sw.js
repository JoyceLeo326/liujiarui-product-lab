const OWNED_CACHE_PREFIX = 'ai-route-planner-'
const APP_CACHE = `${OWNED_CACHE_PREFIX}v3`
const TILE_CACHE = `${OWNED_CACHE_PREFIX}tiles-v1`
const PRECACHE_URLS = ['./', './index.html']

const TILE_HOSTS = [
  'webrd01.is.autonavi.com',
  'webrd02.is.autonavi.com',
  'webrd03.is.autonavi.com',
  'webrd04.is.autonavi.com',
  'webst01.is.autonavi.com',
  'webst02.is.autonavi.com',
  'webst03.is.autonavi.com',
  'webst04.is.autonavi.com',
]

function isTileRequest(url) {
  return TILE_HOSTS.some((h) => url.hostname === h) && url.pathname.includes('appmaptile')
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(APP_CACHE).then((cache) => cache.addAll(PRECACHE_URLS))
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(
          names
            .filter(
              (name) =>
                name.startsWith(OWNED_CACHE_PREFIX) && name !== APP_CACHE && name !== TILE_CACHE
            )
            .map((name) => caches.delete(name))
        )
      )
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)

  if (event.request.url.includes('/api/')) return

  if (isTileRequest(url)) {
    event.respondWith(handleTileRequest(event.request))
    return
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached
      return fetch(event.request).then((response) => {
        if (
          response.ok &&
          (event.request.url.includes('/assets/') || event.request.url.includes('/src/'))
        ) {
          const clone = response.clone()
          caches.open(APP_CACHE).then((cache) => cache.put(event.request, clone))
        }
        return response
      })
    })
  )
})

async function handleTileRequest(request) {
  const cacheKey = normalizeTileUrl(request.url)

  const tileCache = await caches.open(TILE_CACHE)
  const cached = await tileCache.match(cacheKey)
  if (cached) {
    return cached
  }

  if (!navigator.onLine) {
    return new Response('', { status: 503, statusText: 'Offline - no cached tile' })
  }

  try {
    const response = await fetch(request)
    if (response.ok) {
      const contentType = response.headers.get('content-type') || ''
      if (
        contentType.includes('image') ||
        contentType.includes('octet-stream') ||
        contentType.includes('png') ||
        contentType.includes('jpeg')
      ) {
        const clone = response.clone()
        tileCache.put(cacheKey, clone)
        pruneTileCache()
      }
    }
    return response
  } catch (err) {
    return new Response('', { status: 503, statusText: 'Network error' })
  }
}

function normalizeTileUrl(url) {
  try {
    const u = new URL(url)
    u.searchParams.delete('scale')
    return u.toString()
  } catch {
    return url
  }
}

let pruneScheduled = false
async function pruneTileCache() {
  if (pruneScheduled) return
  pruneScheduled = true
  setTimeout(async () => {
    pruneScheduled = false
    try {
      const tileCache = await caches.open(TILE_CACHE)
      const keys = await tileCache.keys()
      if (keys.length > 5000) {
        const toDelete = keys.slice(0, Math.ceil(keys.length * 0.2))
        await Promise.all(toDelete.map((k) => tileCache.delete(k)))
      }
    } catch {
      // Cache pruning is best-effort and will be retried on the next schedule.
    }
  }, 10000)
}

self.addEventListener('message', (event) => {
  if (event.data?.type === 'CLEAR_TILE_CACHE') {
    event.waitUntil(
      caches.delete(TILE_CACHE).then(() => {
        event.source?.postMessage({ type: 'TILE_CACHE_CLEARED' })
      })
    )
  }
  if (event.data?.type === 'GET_TILE_CACHE_STATS') {
    event.waitUntil(
      caches.open(TILE_CACHE).then(async (cache) => {
        const keys = await cache.keys()
        event.source?.postMessage({
          type: 'TILE_CACHE_STATS',
          count: keys.length,
        })
      })
    )
  }
  if (event.data?.type === 'PREFETCH_TILES') {
    const { urls } = event.data
    if (urls && urls.length > 0) {
      event.waitUntil(prefetchUrls(urls))
    }
  }
})

async function prefetchUrls(urls) {
  const tileCache = await caches.open(TILE_CACHE)
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i]
    const cacheKey = normalizeTileUrl(url)
    const cached = await tileCache.match(cacheKey)
    if (cached) continue
    try {
      const response = await fetch(url, { mode: 'cors', credentials: 'omit' })
      if (response.ok) {
        await tileCache.put(cacheKey, response)
      }
    } catch {
      // Individual tile failures should not stop the remaining prefetch queue.
    }
    if (i % 4 === 3) {
      await new Promise((r) => setTimeout(r, 50))
    }
  }
}
