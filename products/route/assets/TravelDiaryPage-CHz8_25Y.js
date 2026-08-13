import{r as n,j as e}from"./vendor-react-bRt1Q4d5.js";import{a as D,b as k,L as S,E as w,c as u,n as C}from"./index-ClKEbRZf.js";import{D as W}from"./DemoDataBanner-C9lLFXJe.js";import{z as y,aq as T,x as g,F as z,n as E,ag as R,J as L}from"./vendor-icons-D8YzsmEW.js";import"./vendor-map-DxrAJfz9.js";const $=[{key:"xiaohongshu",label:"小红书风",icon:T,desc:"emoji+短句+标签，适合分享"},{key:"moments",label:"朋友圈风",icon:g,desc:"简洁+照片排版"},{key:"travelogue",label:"游记风",icon:z,desc:"长文+分段+攻略感"}],I={route_id:"route_demo",route_name:"城市美食探索之旅",total_time:"4小时",total_distance:"2.5公里",poi_list:[{name:"老字号面馆",category:"美食",rating:4.7,visit_duration:"1小时",comment:"招牌牛肉面必点"},{name:"艺术咖啡馆",category:"休闲",rating:4.5,visit_duration:"1.5小时",comment:"环境超棒，适合拍照"},{name:"江边公园",category:"景点",rating:4.3,visit_duration:"1小时",comment:"傍晚散步很惬意"},{name:"夜市小吃街",category:"美食",rating:4.8,visit_duration:"2小时",comment:"各种小吃应有尽有"}]},p={xiaohongshu:{diary_id:"diary_fallback",route_id:"route_demo",style:"xiaohongshu",title:"🔥城市美食探索之旅 | 本地人私藏路线大公开",content:`✨ 今天走了一条很舒服的路线，分享给大家～

📍 路线：城市美食探索之旅
⏱ 总耗时：4小时
📏 总距离：2.5公里

📋 行程安排：
📍 1. 老字号面馆（1小时）
📍 2. 艺术咖啡馆（1.5小时）
📍 3. 江边公园（1小时）
📍 4. 夜市小吃街（2小时）

🌟 亮点推荐：
⭐ 夜市小吃街（评分4.8，强烈推荐）
⭐ 老字号面馆（评分4.7，强烈推荐）

💡 小贴士：建议上午早点出发，避开人流高峰～
#拾光路线 #本地生活 #城市美食探索之旅`,hashtags:["#本地路线","#周末去哪儿","#旅行攻略"],photo_layout:[],share_url:"/share/diary/route_demo"},moments:{diary_id:"diary_fallback",route_id:"route_demo",style:"moments",title:"📸 城市美食探索之旅",content:`今日路线：城市美食探索之旅
📍 老字号面馆
📍 艺术咖啡馆
📍 江边公园
📍 夜市小吃街

⭐ 夜市小吃街（评分4.8，强烈推荐） ⭐ 老字号面馆（评分4.7，强烈推荐）`,hashtags:["#本地路线","#周末去哪儿","#旅行攻略"],photo_layout:[],share_url:"/share/diary/route_demo"},travelogue:{diary_id:"diary_fallback",route_id:"route_demo",style:"travelogue",title:"【游记】城市美食探索之旅——一场说走就走的旅行",content:`## 前言

今天规划了一条4小时的路线，全程2.5公里，体验非常棒！

## 行程详情

### 1. 老字号面馆
- **类别**：美食
- **停留时间**：1小时
- **评分**：⭐⭐⭐⭐⭐ 4.7

### 2. 艺术咖啡馆
- **类别**：休闲
- **停留时间**：1.5小时
- **评分**：⭐⭐⭐⭐⭐ 4.5

### 3. 江边公园
- **类别**：景点
- **停留时间**：1小时
- **评分**：⭐⭐⭐⭐⭐ 4.3

### 4. 夜市小吃街
- **类别**：美食
- **停留时间**：2小时
- **评分**：⭐⭐⭐⭐⭐ 4.8

## 总结

这条路线安排合理，节奏适中，强烈推荐给想来体验的朋友们！`,hashtags:["#本地路线","#周末去哪儿","#旅行攻略"],photo_layout:[],share_url:"/share/diary/route_demo"}};function K(){var h;const{t:a}=D(),b=k(t=>t.currentRoute),[r,l]=n.useState(null),[o,c]=n.useState(!1),[i,f]=n.useState("xiaohongshu"),[d,x]=n.useState(!1),[j,m]=n.useState(!1),v=b||I,_=async()=>{c(!0),m(!1);try{const t=await C.generate(v,null,null,i);l(t)}catch{const t=p[i]||p.xiaohongshu;l(t),m(!0)}c(!1)},N=()=>{var s;if(!r)return;const t=`${r.title}

${r.content}

${((s=r.hashtags)==null?void 0:s.join(" "))||""}`;navigator.clipboard.writeText(t),x(!0),setTimeout(()=>x(!1),2e3)};return e.jsxs("div",{className:"max-w-3xl mx-auto p-4 md:p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center",children:e.jsx(y,{size:20,className:"text-white"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold text-text-primary",children:a("travelDiary.title")}),e.jsx("p",{className:"text-sm text-text-light",children:a("travelDiary.subtitle")})]})]}),o&&e.jsx(S,{text:a("travelDiary.loadingText")}),e.jsx(W,{visible:j}),!o&&!r&&e.jsx(w,{icon:e.jsx(y,{}),title:a("travelDiary.emptyTitle"),description:a("travelDiary.emptyDesc")}),e.jsxs("div",{className:"bg-surface-card rounded-2xl border border-border p-6 space-y-5",children:[e.jsx("h2",{className:"text-lg font-semibold text-text-primary",children:a("travelDiary.selectStyle")}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:$.map(t=>e.jsxs("button",{onClick:()=>f(t.key),className:u("p-4 rounded-xl border-2 transition-all text-left",i===t.key?"border-brand bg-brand-light/30":"border-border bg-surface hover:border-brand/30"),children:[e.jsx(t.icon,{size:24,className:u("mb-2",i===t.key?"text-brand":"text-text-light")}),e.jsx("p",{className:"text-sm font-medium text-text-primary",children:a(`travelDiary.styles.${t.key}`)}),e.jsx("p",{className:"text-xs text-text-light mt-1",children:a(`travelDiary.${t.key}Desc`)})]},t.key))})]}),e.jsxs("button",{onClick:_,disabled:o,className:"w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2",children:[e.jsx(E,{size:18}),a(o?"travelDiary.generating":"travelDiary.generate")]}),r&&e.jsx("div",{className:"bg-surface-card rounded-2xl border border-border overflow-hidden",children:e.jsxs("div",{className:"p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-text-primary",children:r.title}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:N,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface text-text-secondary hover:text-text-primary transition-all text-sm",children:[d?e.jsx(R,{size:14,className:"text-success"}):e.jsx(L,{size:14}),a(d?"travelDiary.copied":"travelDiary.copy")]}),e.jsxs("button",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface text-text-secondary hover:text-text-primary transition-all text-sm",children:[e.jsx(g,{size:14}),a("travelDiary.share")]})]})]}),e.jsx("div",{className:"prose prose-sm max-w-none",children:r.content.split(`
`).map((t,s)=>t.startsWith("## ")?e.jsx("h3",{className:"text-base font-bold text-text-primary mt-4 mb-2",children:t.replace("## ","")},s):t.startsWith("### ")?e.jsx("h4",{className:"text-sm font-semibold text-text-primary mt-3 mb-1",children:t.replace("### ","")},s):t.startsWith("📍")||t.startsWith("✅")||t.startsWith("⭐")||t.startsWith("👍")||t.startsWith("💡")?e.jsx("p",{className:"text-sm text-text-secondary py-0.5",children:t},s):t.startsWith("#")?e.jsx("p",{className:"text-sm text-brand mt-2",children:t},s):t.trim()===""?e.jsx("br",{},s):t.startsWith("- **")?e.jsx("p",{className:"text-sm text-text-secondary ml-4",children:t},s):e.jsx("p",{className:"text-sm text-text-secondary",children:t},s))}),((h=r.hashtags)==null?void 0:h.length)>0&&e.jsx("div",{className:"flex flex-wrap gap-2 pt-2 border-t border-border",children:r.hashtags.map((t,s)=>e.jsx("span",{className:"px-3 py-1 bg-brand-light/30 text-brand text-xs rounded-full",children:t},s))})]})})]})}export{K as default};
