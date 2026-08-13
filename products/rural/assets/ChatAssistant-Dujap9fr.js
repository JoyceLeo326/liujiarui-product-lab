var mt=Object.defineProperty;var _t=(t,e,s)=>e in t?mt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var R=(t,e,s)=>_t(t,typeof e!="symbol"?e+"":e,s);import{a as L,f as Y,B as Je,b as xt,a3 as wt,I as N,O as x,L as I,R as F,P as g,M as d,W as yt,X as D,Z as P,$ as de,u as m,Y as q,Q as vt,F as me,ab as _e,ag as G,H as S,aE as St,c as $t,i as Rt,aF as Tt,ao as le,n as Ct,a9 as Re}from"./vendor-vue-C6y1XkyA.js";import{d as V,_ as We}from"./index-B2L4IlZA.js";import{g as zt}from"./exercise-D2y_IuCZ.js";import{t as Ye,r as je,x as At,y as It,A as Et,g as Pt,q as Bt,B as Dt,C as et,w as Lt,D as Mt,F as Ot,d as Nt,G as Zt,H as jt,i as Ht,I as He,o as Qt,J as qt,k as fe,K as Ut,L as Xt,M as Vt,u as Ft,N as Gt,O as Kt,E as ie}from"./vendor-element-DhlrQvLc.js";import"./vendor-utils-DZ_Kha3d.js";function Ae(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var se=Ae();function tt(t){se=t}var ee={exec:()=>null};function ne(t){let e=[];return s=>{let r=Math.max(0,Math.min(3,s-1)),n=e[r];return n||(n=t(r),e[r]=n),n}}function v(t,e=""){let s=typeof t=="string"?t:t.source,r={replace:(n,a)=>{let c=typeof a=="string"?a:a.source;return c=c.replace(M.caret,"$1"),s=s.replace(n,c),r},getRegex:()=>new RegExp(s,e)};return r}var Jt=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),M={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:ne(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:ne(t=>new RegExp(`^ {0,${t}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:ne(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:ne(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:ne(t=>new RegExp(`^ {0,${t}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:ne(t=>new RegExp(`^ {0,${t}}>`))},Wt=/^(?:[ \t]*(?:\n|$))+/,Yt=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,es=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ue=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ts=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ie=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,st=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,nt=v(st).replace(/bull/g,Ie).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ss=v(st).replace(/bull/g,Ie).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ee=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ns=/^[^\n]+/,Pe=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,rs=v(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Pe).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),as=v(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ie).getRegex(),ve="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Be=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ls=v("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Be).replace("tag",ve).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),rt=v(Ee).replace("hr",ue).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ve).getRegex(),is=v(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",rt).getRegex(),De={blockquote:is,code:Yt,def:rs,fences:es,heading:ts,hr:ue,html:ls,lheading:nt,list:as,newline:Wt,paragraph:rt,table:ee,text:ns},Qe=v("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ue).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ve).getRegex(),os={...De,lheading:ss,table:Qe,paragraph:v(Ee).replace("hr",ue).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Qe).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ve).getRegex()},cs={...De,html:v(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Be).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ee,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:v(Ee).replace("hr",ue).replace("heading",` *#{1,6} *[^
]`).replace("lheading",nt).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},us=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ps=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,at=/^( {2,}|\\)\n(?!\s*$)/,hs=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,re=/[\p{P}\p{S}]/u,Se=/[\s\p{P}\p{S}]/u,Le=/[^\s\p{P}\p{S}]/u,ds=v(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Se).getRegex(),lt=/(?!~)[\p{P}\p{S}]/u,fs=/(?!~)[\s\p{P}\p{S}]/u,gs=/(?:[^\s\p{P}\p{S}]|~)/u,ks=v(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Jt?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),it=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,bs=v(it,"u").replace(/punct/g,re).getRegex(),ms=v(it,"u").replace(/punct/g,lt).getRegex(),ot="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",_s=v(ot,"gu").replace(/notPunctSpace/g,Le).replace(/punctSpace/g,Se).replace(/punct/g,re).getRegex(),xs=v(ot,"gu").replace(/notPunctSpace/g,gs).replace(/punctSpace/g,fs).replace(/punct/g,lt).getRegex(),ws=v("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Le).replace(/punctSpace/g,Se).replace(/punct/g,re).getRegex(),ys=v(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,re).getRegex(),vs="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Ss=v(vs,"gu").replace(/notPunctSpace/g,Le).replace(/punctSpace/g,Se).replace(/punct/g,re).getRegex(),$s=v(/\\(punct)/,"gu").replace(/punct/g,re).getRegex(),Rs=v(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ts=v(Be).replace("(?:-->|$)","-->").getRegex(),Cs=v("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ts).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),xe=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,zs=v(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",xe).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ct=v(/^!?\[(label)\]\[(ref)\]/).replace("label",xe).replace("ref",Pe).getRegex(),ut=v(/^!?\[(ref)\](?:\[\])?/).replace("ref",Pe).getRegex(),As=v("reflink|nolink(?!\\()","g").replace("reflink",ct).replace("nolink",ut).getRegex(),qe=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Me={_backpedal:ee,anyPunctuation:$s,autolink:Rs,blockSkip:ks,br:at,code:ps,del:ee,delLDelim:ee,delRDelim:ee,emStrongLDelim:bs,emStrongRDelimAst:_s,emStrongRDelimUnd:ws,escape:us,link:zs,nolink:ut,punctuation:ds,reflink:ct,reflinkSearch:As,tag:Cs,text:hs,url:ee},Is={...Me,link:v(/^!?\[(label)\]\((.*?)\)/).replace("label",xe).getRegex(),reflink:v(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",xe).getRegex()},Te={...Me,emStrongRDelimAst:xs,emStrongLDelim:ms,delLDelim:ys,delRDelim:Ss,url:v(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",qe).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:v(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",qe).getRegex()},Es={...Te,br:v(at).replace("{2,}","*").getRegex(),text:v(Te.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ge={normal:De,gfm:os,pedantic:cs},oe={normal:Me,gfm:Te,breaks:Es,pedantic:Is},Ps={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ue=t=>Ps[t];function Q(t,e){if(e){if(M.escapeTest.test(t))return t.replace(M.escapeReplace,Ue)}else if(M.escapeTestNoEncode.test(t))return t.replace(M.escapeReplaceNoEncode,Ue);return t}function Xe(t){try{t=encodeURI(t).replace(M.percentDecode,"%")}catch{return null}return t}function Ve(t,e){var a;let s=t.replace(M.findPipe,(c,i,l)=>{let h=!1,o=i;for(;--o>=0&&l[o]==="\\";)h=!h;return h?"|":" |"}),r=s.split(M.splitPipe),n=0;if(r[0].trim()||r.shift(),r.length>0&&!((a=r.at(-1))!=null&&a.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(M.slashPipe,"|");return r}function J(t,e,s){let r=t.length;if(r===0)return"";let n=0;for(;n<r&&t.charAt(r-n-1)===e;)n++;return t.slice(0,r-n)}function Fe(t){let e=t.split(`
`),s=e.length-1;for(;s>=0&&M.blankLine.test(e[s]);)s--;return e.length-s<=2?t:e.slice(0,s+1).join(`
`)}function Bs(t,e){if(t.indexOf(e[1])===-1)return-1;let s=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])s++;else if(t[r]===e[1]&&(s--,s<0))return r;return s>0?-2:-1}function Ds(t,e=0){let s=e,r="";for(let n of t)if(n==="	"){let a=4-s%4;r+=" ".repeat(a),s+=a}else r+=n,s++;return r}function Ge(t,e,s,r,n){let a=e.href,c=e.title||null,i=t[1].replace(n.other.outputLinkReplace,"$1");r.state.inLink=!0;let l={type:t[0].charAt(0)==="!"?"image":"link",raw:s,href:a,title:c,text:i,tokens:r.inlineTokens(i)};return r.state.inLink=!1,l}function Ls(t,e,s){let r=t.match(s.other.indentCodeCompensation);if(r===null)return e;let n=r[1];return e.split(`
`).map(a=>{let c=a.match(s.other.beginningSpace);if(c===null)return a;let[i]=c;return i.length>=n.length?a.slice(n.length):a}).join(`
`)}var we=class{constructor(t){R(this,"options");R(this,"rules");R(this,"lexer");this.options=t||se}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let s=this.options.pedantic?e[0]:Fe(e[0]),r=s.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:s,codeBlockStyle:"indented",text:r}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let s=e[0],r=Ls(s,e[3]||"",this.rules);return{type:"code",raw:s,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let s=e[2].trim();if(this.rules.other.endingHash.test(s)){let r=J(s,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(s=r.trim())}return{type:"heading",raw:J(e[0],`
`),depth:e[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:J(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let s=J(e[0],`
`).split(`
`),r="",n="",a=[];for(;s.length>0;){let c=!1,i=[],l;for(l=0;l<s.length;l++)if(this.rules.other.blockquoteStart.test(s[l]))i.push(s[l]),c=!0;else if(!c)i.push(s[l]);else break;s=s.slice(l);let h=i.join(`
`),o=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${h}`:h,n=n?`${n}
${o}`:o;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(o,a,!0),this.lexer.state.top=f,s.length===0)break;let p=a.at(-1);if((p==null?void 0:p.type)==="code")break;if((p==null?void 0:p.type)==="blockquote"){let k=p,u=k.raw+`
`+s.join(`
`),T=this.blockquote(u);a[a.length-1]=T,r=r.substring(0,r.length-k.raw.length)+T.raw,n=n.substring(0,n.length-k.text.length)+T.text;break}else if((p==null?void 0:p.type)==="list"){let k=p,u=k.raw+`
`+s.join(`
`),T=this.list(u);a[a.length-1]=T,r=r.substring(0,r.length-p.raw.length)+T.raw,n=n.substring(0,n.length-k.raw.length)+T.raw,s=u.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:a,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let s=e[1].trim(),r=s.length>1,n={type:"list",raw:"",ordered:r,start:r?+s.slice(0,-1):"",loose:!1,items:[]};s=r?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=r?s:"[*+-]");let a=this.rules.other.listItemRegex(s),c=!1;for(;t;){let l=!1,h="",o="";if(!(e=a.exec(t))||this.rules.block.hr.test(t))break;h=e[0],t=t.substring(h.length);let f=Ds(e[2].split(`
`,1)[0],e[1].length),p=t.split(`
`,1)[0],k=!f.trim(),u=0;if(this.options.pedantic?(u=2,o=f.trimStart()):k?u=e[1].length+1:(u=f.search(this.rules.other.nonSpaceChar),u=u>4?1:u,o=f.slice(u),u+=e[1].length),k&&this.rules.other.blankLine.test(p)&&(h+=p+`
`,t=t.substring(p.length+1),l=!0),!l){let T=this.rules.other.nextBulletRegex(u),w=this.rules.other.hrRegex(u),E=this.rules.other.fencesBeginRegex(u),_=this.rules.other.headingBeginRegex(u),A=this.rules.other.htmlBeginRegex(u),B=this.rules.other.blockquoteBeginRegex(u);for(;t;){let O=t.split(`
`,1)[0],H;if(p=O,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),H=p):H=p.replace(this.rules.other.tabCharGlobal,"    "),E.test(p)||_.test(p)||A.test(p)||B.test(p)||T.test(p)||w.test(p))break;if(H.search(this.rules.other.nonSpaceChar)>=u||!p.trim())o+=`
`+H.slice(u);else{if(k||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||E.test(f)||_.test(f)||w.test(f))break;o+=`
`+p}k=!p.trim(),h+=O+`
`,t=t.substring(O.length+1),f=H.slice(u)}}n.loose||(c?n.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(c=!0)),n.items.push({type:"list_item",raw:h,task:!!this.options.gfm&&this.rules.other.listIsTask.test(o),loose:!1,text:o,tokens:[]}),n.raw+=h}let i=n.items.at(-1);if(i)i.raw=i.raw.trimEnd(),i.text=i.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let l of n.items){this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]);let h=l.tokens[0];if(l.task&&((h==null?void 0:h.type)==="text"||(h==null?void 0:h.type)==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),h.raw=h.raw.replace(this.rules.other.listReplaceTask,""),h.text=h.text.replace(this.rules.other.listReplaceTask,"");for(let f=this.lexer.inlineQueue.length-1;f>=0;f--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)){this.lexer.inlineQueue[f].src=this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask,"");break}let o=this.rules.other.listTaskCheckbox.exec(l.raw);if(o){let f={type:"checkbox",raw:o[0]+" ",checked:o[0]!=="[ ]"};l.checked=f.checked,n.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=f.raw+l.tokens[0].raw,l.tokens[0].text=f.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(f)):l.tokens.unshift({type:"paragraph",raw:f.raw,text:f.raw,tokens:[f]}):l.tokens.unshift(f)}}else l.task&&(l.task=!1);if(!n.loose){let o=l.tokens.filter(p=>p.type==="space"),f=o.length>0&&o.some(p=>this.rules.other.anyLine.test(p.raw));n.loose=f}}if(n.loose)for(let l of n.items){l.loose=!0;for(let h of l.tokens)h.type==="text"&&(h.type="paragraph")}return n}}html(t){let e=this.rules.block.html.exec(t);if(e){let s=Fe(e[0]);return{type:"html",block:!0,raw:s,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:s}}}def(t){let e=this.rules.block.def.exec(t);if(e){let s=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:s,raw:J(e[0],`
`),href:r,title:n}}}table(t){var c;let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let s=Ve(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=(c=e[3])!=null&&c.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:J(e[0],`
`),header:[],align:[],rows:[]};if(s.length===r.length){for(let i of r)this.rules.other.tableAlignRight.test(i)?a.align.push("right"):this.rules.other.tableAlignCenter.test(i)?a.align.push("center"):this.rules.other.tableAlignLeft.test(i)?a.align.push("left"):a.align.push(null);for(let i=0;i<s.length;i++)a.header.push({text:s[i],tokens:this.lexer.inline(s[i]),header:!0,align:a.align[i]});for(let i of n)a.rows.push(Ve(i,a.header.length).map((l,h)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:a.align[h]})));return a}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let s=e[1].trim();return{type:"heading",raw:J(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:s,tokens:this.lexer.inline(s)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let s=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:s,tokens:this.lexer.inline(s)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let s=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let a=J(s.slice(0,-1),"\\");if((s.length-a.length)%2===0)return}else{let a=Bs(e[2],"()");if(a===-2)return;if(a>-1){let c=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,c).trim(),e[3]=""}}let r=e[2],n="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(r);a&&(r=a[1],n=a[3])}else n=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?r=r.slice(1):r=r.slice(1,-1)),Ge(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let s;if((s=this.rules.inline.reflink.exec(t))||(s=this.rules.inline.nolink.exec(t))){let r=(s[2]||s[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=e[r.toLowerCase()];if(!n){let a=s[0].charAt(0);return{type:"text",raw:a,text:a}}return Ge(s,n,s[0],this.lexer,this.rules)}}emStrong(t,e,s=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&s.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!s||this.rules.inline.punctuation.exec(s))){let n=[...r[0]].length-1,a,c,i=n,l=0,h=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*t.length+n);(r=h.exec(e))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(c=[...a].length,r[3]||r[4]){i+=c;continue}else if((r[5]||r[6])&&n%3&&!((n+c)%3)){l+=c;continue}if(i-=c,i>0)continue;c=Math.min(c,c+i+l);let o=[...r[0]][0].length,f=t.slice(0,n+r.index+o+c);if(Math.min(n,c)%2){let k=f.slice(1,-1);return{type:"em",raw:f,text:k,tokens:this.lexer.inlineTokens(k)}}let p=f.slice(2,-2);return{type:"strong",raw:f,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let s=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(s),n=this.rules.other.startingSpaceChar.test(s)&&this.rules.other.endingSpaceChar.test(s);return r&&n&&(s=s.substring(1,s.length-1)),{type:"codespan",raw:e[0],text:s}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,s=""){let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!s||this.rules.inline.punctuation.exec(s))){let n=[...r[0]].length-1,a,c,i=n,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*t.length+n);(r=l.exec(e))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a||(c=[...a].length,c!==n))continue;if(r[3]||r[4]){i+=c;continue}if(i-=c,i>0)continue;c=Math.min(c,c+i);let h=[...r[0]][0].length,o=t.slice(0,n+r.index+h+c),f=o.slice(n,-n);return{type:"del",raw:o,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let s,r;return e[2]==="@"?(s=e[1],r="mailto:"+s):(s=e[1],r=s),{type:"link",raw:e[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}url(t){var s;let e;if(e=this.rules.inline.url.exec(t)){let r,n;if(e[2]==="@")r=e[0],n="mailto:"+r;else{let a;do a=e[0],e[0]=((s=this.rules.inline._backpedal.exec(e[0]))==null?void 0:s[0])??"";while(a!==e[0]);r=e[0],e[1]==="www."?n="http://"+e[0]:n=e[0]}return{type:"link",raw:e[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let s=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:s}}}},Z=class Ce{constructor(e){R(this,"tokens");R(this,"options");R(this,"state");R(this,"inlineQueue");R(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||se,this.options.tokenizer=this.options.tokenizer||new we,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let s={other:M,block:ge.normal,inline:oe.normal};this.options.pedantic?(s.block=ge.pedantic,s.inline=oe.pedantic):this.options.gfm&&(s.block=ge.gfm,this.options.breaks?s.inline=oe.breaks:s.inline=oe.gfm),this.tokenizer.rules=s}static get rules(){return{block:ge,inline:oe}}static lex(e,s){return new Ce(s).lex(e)}static lexInline(e,s){return new Ce(s).inlineTokens(e)}lex(e){e=e.replace(M.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let s=0;s<this.inlineQueue.length;s++){let r=this.inlineQueue[s];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,s=[],r=!1){var a,c,i;this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(M.tabCharGlobal,"    ").replace(M.spaceLine,""));let n=1/0;for(;e;){if(e.length<n)n=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let l;if((c=(a=this.options.extensions)==null?void 0:a.block)!=null&&c.some(o=>(l=o.call({lexer:this},e,s))?(e=e.substring(l.raw.length),s.push(l),!0):!1))continue;if(l=this.tokenizer.space(e)){e=e.substring(l.raw.length);let o=s.at(-1);l.raw.length===1&&o!==void 0?o.raw+=`
`:s.push(l);continue}if(l=this.tokenizer.code(e)){e=e.substring(l.raw.length);let o=s.at(-1);(o==null?void 0:o.type)==="paragraph"||(o==null?void 0:o.type)==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+l.raw,o.text+=`
`+l.text,this.inlineQueue.at(-1).src=o.text):s.push(l);continue}if(l=this.tokenizer.fences(e)){e=e.substring(l.raw.length),s.push(l);continue}if(l=this.tokenizer.heading(e)){e=e.substring(l.raw.length),s.push(l);continue}if(l=this.tokenizer.hr(e)){e=e.substring(l.raw.length),s.push(l);continue}if(l=this.tokenizer.blockquote(e)){e=e.substring(l.raw.length),s.push(l);continue}if(l=this.tokenizer.list(e)){e=e.substring(l.raw.length),s.push(l);continue}if(l=this.tokenizer.html(e)){e=e.substring(l.raw.length),s.push(l);continue}if(l=this.tokenizer.def(e)){e=e.substring(l.raw.length);let o=s.at(-1);(o==null?void 0:o.type)==="paragraph"||(o==null?void 0:o.type)==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+l.raw,o.text+=`
`+l.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title},s.push(l));continue}if(l=this.tokenizer.table(e)){e=e.substring(l.raw.length),s.push(l);continue}if(l=this.tokenizer.lheading(e)){e=e.substring(l.raw.length),s.push(l);continue}let h=e;if((i=this.options.extensions)!=null&&i.startBlock){let o=1/0,f=e.slice(1),p;this.options.extensions.startBlock.forEach(k=>{p=k.call({lexer:this},f),typeof p=="number"&&p>=0&&(o=Math.min(o,p))}),o<1/0&&o>=0&&(h=e.substring(0,o+1))}if(this.state.top&&(l=this.tokenizer.paragraph(h))){let o=s.at(-1);r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+l.raw,o.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):s.push(l),r=h.length!==e.length,e=e.substring(l.raw.length);continue}if(l=this.tokenizer.text(e)){e=e.substring(l.raw.length);let o=s.at(-1);(o==null?void 0:o.type)==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+l.raw,o.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):s.push(l);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,s}inline(e,s=[]){return this.inlineQueue.push({src:e,tokens:s}),s}inlineTokens(e,s=[]){var h,o,f,p,k;this.tokenizer.lexer=this;let r=e,n=null;if(this.tokens.links){let u=Object.keys(this.tokens.links);if(u.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(r))!==null;)u.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(r))!==null;)r=r.slice(0,n.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let a;for(;(n=this.tokenizer.rules.inline.blockSkip.exec(r))!==null;)a=n[2]?n[2].length:0,r=r.slice(0,n.index+a)+"["+"a".repeat(n[0].length-a-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=((o=(h=this.options.hooks)==null?void 0:h.emStrongMask)==null?void 0:o.call({lexer:this},r))??r;let c=!1,i="",l=1/0;for(;e;){if(e.length<l)l=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}c||(i=""),c=!1;let u;if((p=(f=this.options.extensions)==null?void 0:f.inline)!=null&&p.some(w=>(u=w.call({lexer:this},e,s))?(e=e.substring(u.raw.length),s.push(u),!0):!1))continue;if(u=this.tokenizer.escape(e)){e=e.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.tag(e)){e=e.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.link(e)){e=e.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(u.raw.length);let w=s.at(-1);u.type==="text"&&(w==null?void 0:w.type)==="text"?(w.raw+=u.raw,w.text+=u.text):s.push(u);continue}if(u=this.tokenizer.emStrong(e,r,i)){e=e.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.codespan(e)){e=e.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.br(e)){e=e.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.del(e,r,i)){e=e.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.autolink(e)){e=e.substring(u.raw.length),s.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(e))){e=e.substring(u.raw.length),s.push(u);continue}let T=e;if((k=this.options.extensions)!=null&&k.startInline){let w=1/0,E=e.slice(1),_;this.options.extensions.startInline.forEach(A=>{_=A.call({lexer:this},E),typeof _=="number"&&_>=0&&(w=Math.min(w,_))}),w<1/0&&w>=0&&(T=e.substring(0,w+1))}if(u=this.tokenizer.inlineText(T)){e=e.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(i=u.raw.slice(-1)),c=!0;let w=s.at(-1);(w==null?void 0:w.type)==="text"?(w.raw+=u.raw,w.text+=u.text):s.push(u);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return s}infiniteLoopError(e){let s="Infinite loop on byte: "+e;if(this.options.silent)console.error(s);else throw new Error(s)}},ye=class{constructor(t){R(this,"options");R(this,"parser");this.options=t||se}space(t){return""}code({text:t,lang:e,escaped:s}){var a;let r=(a=(e||"").match(M.notSpaceStart))==null?void 0:a[0],n=t.replace(M.endingNewline,"")+`
`;return r?'<pre><code class="language-'+Q(r)+'">'+(s?n:Q(n,!0))+`</code></pre>
`:"<pre><code>"+(s?n:Q(n,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,s=t.start,r="";for(let c=0;c<t.items.length;c++){let i=t.items[c];r+=this.listitem(i)}let n=e?"ol":"ul",a=e&&s!==1?' start="'+s+'"':"";return"<"+n+a+`>
`+r+"</"+n+`>
`}listitem(t){return`<li>${this.parser.parse(t.tokens)}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",s="";for(let n=0;n<t.header.length;n++)s+=this.tablecell(t.header[n]);e+=this.tablerow({text:s});let r="";for(let n=0;n<t.rows.length;n++){let a=t.rows[n];s="";for(let c=0;c<a.length;c++)s+=this.tablecell(a[c]);r+=this.tablerow({text:s})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),s=t.header?"th":"td";return(t.align?`<${s} align="${t.align}">`:`<${s}>`)+e+`</${s}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Q(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:s}){let r=this.parser.parseInline(s),n=Xe(t);if(n===null)return r;t=n;let a='<a href="'+t+'"';return e&&(a+=' title="'+Q(e)+'"'),a+=">"+r+"</a>",a}image({href:t,title:e,text:s,tokens:r}){r&&(s=this.parser.parseInline(r,this.parser.textRenderer));let n=Xe(t);if(n===null)return Q(s);t=n;let a=`<img src="${t}" alt="${Q(s)}"`;return e&&(a+=` title="${Q(e)}"`),a+=">",a}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Q(t.text)}},Oe=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},j=class ze{constructor(e){R(this,"options");R(this,"renderer");R(this,"textRenderer");this.options=e||se,this.options.renderer=this.options.renderer||new ye,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Oe}static parse(e,s){return new ze(s).parse(e)}static parseInline(e,s){return new ze(s).parseInline(e)}parse(e){var r,n;this.renderer.parser=this;let s="";for(let a=0;a<e.length;a++){let c=e[a];if((n=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&n[c.type]){let l=c,h=this.options.extensions.renderers[l.type].call({parser:this},l);if(h!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){s+=h||"";continue}}let i=c;switch(i.type){case"space":{s+=this.renderer.space(i);break}case"hr":{s+=this.renderer.hr(i);break}case"heading":{s+=this.renderer.heading(i);break}case"code":{s+=this.renderer.code(i);break}case"table":{s+=this.renderer.table(i);break}case"blockquote":{s+=this.renderer.blockquote(i);break}case"list":{s+=this.renderer.list(i);break}case"checkbox":{s+=this.renderer.checkbox(i);break}case"html":{s+=this.renderer.html(i);break}case"def":{s+=this.renderer.def(i);break}case"paragraph":{s+=this.renderer.paragraph(i);break}case"text":{s+=this.renderer.text(i);break}default:{let l='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}parseInline(e,s=this.renderer){var n,a;this.renderer.parser=this;let r="";for(let c=0;c<e.length;c++){let i=e[c];if((a=(n=this.options.extensions)==null?void 0:n.renderers)!=null&&a[i.type]){let h=this.options.extensions.renderers[i.type].call({parser:this},i);if(h!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=h||"";continue}}let l=i;switch(l.type){case"escape":{r+=s.text(l);break}case"html":{r+=s.html(l);break}case"link":{r+=s.link(l);break}case"image":{r+=s.image(l);break}case"checkbox":{r+=s.checkbox(l);break}case"strong":{r+=s.strong(l);break}case"em":{r+=s.em(l);break}case"codespan":{r+=s.codespan(l);break}case"br":{r+=s.br(l);break}case"del":{r+=s.del(l);break}case"text":{r+=s.text(l);break}default:{let h='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(h),"";throw new Error(h)}}}return r}},be,ce=(be=class{constructor(t){R(this,"options");R(this,"block");this.options=t||se}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?Z.lex:Z.lexInline}provideParser(t=this.block){return t?j.parse:j.parseInline}},R(be,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),R(be,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),be),Ms=class{constructor(...t){R(this,"defaults",Ae());R(this,"options",this.setOptions);R(this,"parse",this.parseMarkdown(!0));R(this,"parseInline",this.parseMarkdown(!1));R(this,"Parser",j);R(this,"Renderer",ye);R(this,"TextRenderer",Oe);R(this,"Lexer",Z);R(this,"Tokenizer",we);R(this,"Hooks",ce);this.use(...t)}walkTokens(t,e){var r,n;let s=[];for(let a of t)switch(s=s.concat(e.call(this,a)),a.type){case"table":{let c=a;for(let i of c.header)s=s.concat(this.walkTokens(i.tokens,e));for(let i of c.rows)for(let l of i)s=s.concat(this.walkTokens(l.tokens,e));break}case"list":{let c=a;s=s.concat(this.walkTokens(c.items,e));break}default:{let c=a;(n=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&n[c.type]?this.defaults.extensions.childTokens[c.type].forEach(i=>{let l=c[i].flat(1/0);s=s.concat(this.walkTokens(l,e))}):c.tokens&&(s=s.concat(this.walkTokens(c.tokens,e)))}}return s}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(s=>{let r={...s};if(r.async=this.defaults.async||r.async||!1,s.extensions&&(s.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let a=e.renderers[n.name];a?e.renderers[n.name]=function(...c){let i=n.renderer.apply(this,c);return i===!1&&(i=a.apply(this,c)),i}:e.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=e[n.level];a?a.unshift(n.tokenizer):e[n.level]=[n.tokenizer],n.start&&(n.level==="block"?e.startBlock?e.startBlock.push(n.start):e.startBlock=[n.start]:n.level==="inline"&&(e.startInline?e.startInline.push(n.start):e.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(e.childTokens[n.name]=n.childTokens)}),r.extensions=e),s.renderer){let n=this.defaults.renderer||new ye(this.defaults);for(let a in s.renderer){if(!(a in n))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let c=a,i=s.renderer[c],l=n[c];n[c]=(...h)=>{let o=i.apply(n,h);return o===!1&&(o=l.apply(n,h)),o||""}}r.renderer=n}if(s.tokenizer){let n=this.defaults.tokenizer||new we(this.defaults);for(let a in s.tokenizer){if(!(a in n))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let c=a,i=s.tokenizer[c],l=n[c];n[c]=(...h)=>{let o=i.apply(n,h);return o===!1&&(o=l.apply(n,h)),o}}r.tokenizer=n}if(s.hooks){let n=this.defaults.hooks||new ce;for(let a in s.hooks){if(!(a in n))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let c=a,i=s.hooks[c],l=n[c];ce.passThroughHooks.has(a)?n[c]=h=>{if(this.defaults.async&&ce.passThroughHooksRespectAsync.has(a))return(async()=>{let f=await i.call(n,h);return l.call(n,f)})();let o=i.call(n,h);return l.call(n,o)}:n[c]=(...h)=>{if(this.defaults.async)return(async()=>{let f=await i.apply(n,h);return f===!1&&(f=await l.apply(n,h)),f})();let o=i.apply(n,h);return o===!1&&(o=l.apply(n,h)),o}}r.hooks=n}if(s.walkTokens){let n=this.defaults.walkTokens,a=s.walkTokens;r.walkTokens=function(c){let i=[];return i.push(a.call(this,c)),n&&(i=i.concat(n.call(this,c))),i}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return Z.lex(t,e??this.defaults)}parser(t,e){return j.parse(t,e??this.defaults)}parseMarkdown(t){return(e,s)=>{let r={...s},n={...this.defaults,...r},a=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&r.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=t),n.async)return(async()=>{let c=n.hooks?await n.hooks.preprocess(e):e,i=await(n.hooks?await n.hooks.provideLexer(t):t?Z.lex:Z.lexInline)(c,n),l=n.hooks?await n.hooks.processAllTokens(i):i;n.walkTokens&&await Promise.all(this.walkTokens(l,n.walkTokens));let h=await(n.hooks?await n.hooks.provideParser(t):t?j.parse:j.parseInline)(l,n);return n.hooks?await n.hooks.postprocess(h):h})().catch(a);try{n.hooks&&(e=n.hooks.preprocess(e));let c=(n.hooks?n.hooks.provideLexer(t):t?Z.lex:Z.lexInline)(e,n);n.hooks&&(c=n.hooks.processAllTokens(c)),n.walkTokens&&this.walkTokens(c,n.walkTokens);let i=(n.hooks?n.hooks.provideParser(t):t?j.parse:j.parseInline)(c,n);return n.hooks&&(i=n.hooks.postprocess(i)),i}catch(c){return a(c)}}}onError(t,e){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+Q(s.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(s);throw s}}},te=new Ms;function $(t,e){return te.parse(t,e)}$.options=$.setOptions=function(t){return te.setOptions(t),$.defaults=te.defaults,tt($.defaults),$};$.getDefaults=Ae;$.defaults=se;$.use=function(...t){return te.use(...t),$.defaults=te.defaults,tt($.defaults),$};$.walkTokens=function(t,e){return te.walkTokens(t,e)};$.parseInline=te.parseInline;$.Parser=j;$.parser=j.parse;$.Renderer=ye;$.TextRenderer=Oe;$.Lexer=Z;$.lexer=Z.lex;$.Tokenizer=we;$.Hooks=ce;$.parse=$;$.options;$.setOptions;$.use;$.walkTokens;$.parseInline;j.parse;Z.lex;$.setOptions({breaks:!0,gfm:!0});function Os(t){if(!t)return"";try{return $.parse(t,{async:!1}).replace(/<table>/g,'<table class="md-table">').replace(/<blockquote>/g,'<blockquote class="md-quote">')}catch{return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}}const K={healthCheck:()=>V.get("/health"),createSession:()=>V.post("/chat/session"),listSessions:()=>V.get("/chat/sessions"),getMessages:t=>V.get(`/chat/sessions/${t}/messages`,{skipErrorMessage:!0}),sendMessage:(t,e)=>V.post(`/chat/sessions/${t}/message`,{message:e}),streamChat:(t,e)=>{const s="/api";return new EventSource(`${s}/chat/sessions/${t}/stream?message=${encodeURIComponent(e)}`)},deleteSession:t=>V.delete(`/chat/sessions/${t}`,{skipErrorMessage:!0}),submitFeedback:t=>V.post("/chat/feedback",t),feedbackStats:()=>V.get("/chat/feedback/stats"),evaluate:(t,e,s)=>V.post("/chat/evaluate",{query:t,response:e,recent_assistant_msgs:s||null},{skipErrorMessage:!0})};function ke(t){if(!t.response)return!0;const e=t.response.status;return!!(e>=500||[502,503,504].includes(e))}const Ns="chat_mock_enabled";localStorage.getItem(Ns);function Zs(){const t=localStorage.getItem("mock_sessions");if(!t)return null;try{return JSON.parse(t)}catch{return null}}function js(t){localStorage.setItem("mock_sessions",JSON.stringify(t))}function Ke(){localStorage.removeItem("mock_sessions")}function Hs(){const t=localStorage.getItem("mock_messages");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}function Qs(t){localStorage.setItem("mock_messages",JSON.stringify(t))}const qs={帮我设计一份小学五年级数学分数的教案:t=>`好的，我来为您设计一份小学五年级数学《分数的意义》教案：

## 一、教学目标
1. **知识与技能**：理解分数的意义，知道分数各部分的名称，能正确读写分数
2. **过程与方法**：通过动手操作、合作探究，建立分数的概念
3. **情感态度与价值观**：感受数学与生活的联系，培养学习数学的兴趣

## 二、教学重难点
- **重点**：理解分数的意义，认识分数各部分名称
- **难点**：理解"平均分"和单位"1"的概念

## 三、教学准备
- 圆形、长方形纸片若干
- 多媒体课件（分蛋糕动画）
- 学习单

## 四、教学过程

### （一）情境导入（5分钟）
播放动画：把4个苹果平均分给2个小朋友，每人得几个？把2个苹果平均分给2个小朋友呢？把1个苹果平均分给2个小朋友呢？

引出问题：半个苹果怎么用数表示？→ 引入分数

### （二）探究新知（20分钟）
1. **认识几分之一**
   - 动手折纸：用圆形纸片折出它的1/2
   - 展示不同的折法，强调"平均分"
   - 认识分数线、分子、分母

2. **认识几分之几**
   - 折出1/4、3/4等
   - 比较1/2和1/4的大小
   - 小组活动：用不同形状的纸折出相同的分数

### （三）巩固练习（10分钟）
1. **基础练习**：看图写分数
2. **提高练习**：判断图形中的阴影部分能否用分数表示
3. **拓展练习**：生活中的分数（一半、四分之一等）

### （四）课堂小结（5分钟）
- 今天我们学习了什么？
- 分数各部分的名称是什么？
- 什么时候可以用分数表示？

### （五）课后作业
1. 完成课本第X页练习题
2. 在生活中找3个可以用分数表示的例子
3. （选做）用不同形状的纸折出1/8，并涂色表示

## 五、板书设计
┌─────────────────────────────────┐
│         分数的意义               │
│                                 │
│     ┌───────────────┐           │
│     │       1       │           │
│     │   ───────     │ 分数线    │
│     │       2       │           │
│     │  分子   分母  │           │
│     └───────────────┘           │
│                                 │
│  把一个物体平均分成几份，        │
│  表示这样的1份或几份的数          │
└─────────────────────────────────┘

## 六、教学反思
（课后填写）`,生成10道四则运算练习题:()=>`好的，为您生成10道四则运算练习题（适合小学中高年级）：

# 📝 四则运算专项练习

**班级：__________  姓名：__________  得分：__________**

---

## 一、直接写出得数（每题5分，共30分）

| 题号 | 算式 | 答案 |
|:---:|:---|:---:|
| 1 | 45 + 38 = | ______ |
| 2 | 72 - 29 = | ______ |
| 3 | 25 × 4 = | ______ |
| 4 | 96 ÷ 8 = | ______ |
| 5 | 125 × 8 = | ______ |
| 6 | 360 ÷ 6 = | ______ |

## 二、脱式计算（每题10分，共40分）

**7.** 56 + 37 - 18 = __________

**8.** (34 + 26) × 2 = __________

**9.** 81 ÷ 9 + 15 = __________

**10.** 47 + 53 - 29 = __________

## 三、列式计算（每题15分，共30分）

**11.** 甲数是128，乙数比甲数的2倍少35，乙数是多少？

**12.** 商店运来450千克苹果，卖出一些后还剩180千克，卖出了多少千克？

---

# ✅ 参考答案

**一、直接写出得数**
1. **83**  2. **43**  3. **100**  4. **12**  5. **1000**  6. **60**

**二、脱式计算**
7. **75**  
   计算：56 + 37 = 93，93 - 18 = 75
   
8. **120**  
   计算：34 + 26 = 60，60 × 2 = 120
   
9. **24**  
   计算：81 ÷ 9 = 9，9 + 15 = 24
   
10. **71**  
    计算：47 + 53 = 100，100 - 29 = 71

**三、列式计算**
11. **221**  
    列式：128 × 2 - 35 = 256 - 35 = 221
    
12. **270**  
    列式：450 - 180 = 270（千克）

---

💡 **答题建议**：
- 认真审题，注意运算顺序
- 草稿纸上规范书写
- 做完后仔细检查`,"如何提高学生的课堂参与度？":()=>`# 📚 提高学生课堂参与度的实用策略

作为乡村教师，课堂参与度直接影响教学效果。以下是经过实践验证的有效方法：

## 一、创设情境，激发兴趣 🎯

### 1. 生活化导入
- **数学课**：用买菜、测量教室等生活场景引入
- **语文课**：联系学生熟悉的本地故事、习俗
- **英语课**：使用学生感兴趣的话题（动漫、运动）

### 2. 问题链设计
❌ 传统："同学们，这道题怎么做？"  
✅ 改进："如果小明有5个苹果，给了小红2个，他又买了3个，现在有几个？谁能帮帮他？"

**技巧**：问题要有情境、有挑战性、与学生相关

---

## 二、互动式教学方法 🤝

### 1. 小组合作学习
【分组原则】
├── 异质分组（成绩好/中/差混合）
├── 4-6人一组最佳
├── 明确角色分工（组长、记录员、汇报员）
└── 定期轮换角色

**活动示例**：
- 数学：小组讨论解题思路，每组展示不同方法
- 语文：分角色朗读课文，小组编排课本剧
- 英语：情景对话练习，小组竞赛

### 2. 课堂小游戏
| 学科 | 游戏类型 | 示例 |
|------|---------|------|
| 数学 | 竞赛抢答 | 口算比赛、24点游戏 |
| 语文 | 成语接龙 | 根据意思猜成语 |
| 英语 | 单词接龙 | Simon Says |

### 3. 动手操作活动
- **数学**：用小棒、计数器演示算理
- **科学**：简单实验观察
- **美术**：手工制作与课程结合

---

## 三、差异化教学策略 📊

### 1. 分层提问法
将问题分为三个层次：
- **基础题**（★）：面向全体学生，确保都能参与
- **提高题**（★★）：面向中等及以上学生
- **挑战题**（★★★）：面向学有余力的学生

**示例**（分数的认识）：
- ★：这个图形被平均分成了几份？
- ★★：阴影部分用分数怎么表示？
- ★★★：如果再涂2份，现在是几分之几？

### 2. 多样化表达方式
允许学生用不同方式展示理解：
- 口头回答
- 板演演示
- 动手操作
- 画图说明
- 小组讨论后代表发言

---

## 四、即时反馈与鼓励机制 🌟

### 1. 正向激励语言
❌ "你错了，坐下想想"  
✅ "你的思路很有创意，再想想这个地方..."  
✅ "虽然答案不完全对，但你的方法很有价值！"

### 2. 积分奖励制度
【参与方式与积分】
━━━━━━━━━━━━━━━━━━━━━
主动回答问题      →  +2分
回答正确          →  +3分
帮助同学解答      →  +2分
提出有价值的问题  →  +3分
小组合作表现好    →  +2分
━━━━━━━━━━━━━━━━━━━━━

**积分用途**：
- 周积分前三名：免一次作业
- 月积分兑换：小奖品（铅笔、本子）
- 学期表彰：颁发"课堂之星"证书

### 3. 进步关注
不仅表扬优秀生，更要关注：
- 从不举手到第一次举手的学生
- 答错后能纠正的学生
- 帮助他人的学生

---

## 五、技术辅助工具 💻

### 1. 简易教具
- **计数棒、计数器**：数学演示
- **单词卡片**：英语教学
- **图片挂图**：语文、科学

### 2. 多媒体资源
即使在农村学校也可以利用：
- 手机投屏功能
- 免费教育APP（希沃白板、钉钉）
- 录制微课视频循环播放

### 3. 互动白板应用
如果有条件，可以使用：
- 投票功能：全班选择答案
- 抽签功能：随机点名
- 计时器：控制活动时间

---

## 六、针对乡村特殊情况的建议 🏫

### 1. 利用本土资源
- 结合农业生产讲数学（面积计算、产量统计）
- 用本地故事、民俗丰富语文教学
- 邀请家长参与课堂（传统手工艺人、老党员讲故事）

### 2. 关爱留守儿童
- 多给这些孩子发言机会
- 课后辅导时多鼓励
- 通过他们了解外出务工父母的故事，融入作文教学

### 3. 复式班教学策略
如果需要同时教多个年级：
- 自主学习+教师轮流指导
- 大带小（高年级辅导低年级）
- 设计跨年级的合作任务

---

## 七、常见问题及解决方案 ⚠️

| 问题 | 原因 | 解决方案 |
|------|------|---------|
| 学生不敢发言 | 害怕出错 | 先让同桌交流，再全班分享 |
| 只有几个活跃学生 | 问题太难或太易 | 分层设计问题 |
| 小组讨论混乱 | 规则不明 | 明确分工和时间限制 |
| 课堂纪律差 | 活动过于兴奋 | 建立活动信号（拍手、倒计时）|

---

## 八、持续改进方法 📈

1. **课后反思**：每节课记录哪些环节参与度高/低
2. **学生反馈**：定期询问学生喜欢什么样的课堂活动
3. **同事观摩**：邀请其他老师听课提意见
4. **记录案例**：记下成功的互动案例，形成自己的教学库

---

**记住**：提高参与度不是一朝一夕的事，需要持续尝试和调整。关键是真正尊重每个学生，让他们感受到课堂是安全、有趣、有价值的！💪`,分析学生作业中的常见错误:()=>`# 🔍 学生作业常见错误分析与应对策略

根据多年教学经验，我整理了各学科作业中的典型错误及针对性解决方法。

---

## 📐 数学学科错误分析

### 错误类型一：计算粗心 ❌

**具体表现**：
✗ 45 + 38 = 73（漏进位）
✗ 72 - 29 = 57（退位错）
✗ 125 × 4 = 500（漏乘0）
✗ 96 ÷ 8 = 11（余数处理错）

**错误原因**：
- 基础口算不熟练
- 书写潦草导致看错数字
- 注意力不集中，跳步骤

**应对策略**：
1. **每天口算训练**（10道/天，限时完成）
2. **规范书写格式**：要求数位对齐，草稿纸也要工整
3. **养成检查习惯**：逆运算验算（加法用减法检查）
4. **错题本制度**：记录每次粗心错的题，考前重点复习

---

### 错误类型二：概念混淆 🔄

**典型案例**：

#### 案例1：周长与面积混淆
题目：长方形长8厘米，宽5厘米，求周长和面积。

学生错误答案：
- 周长：40平方厘米（×）
- 面积：26厘米（×）

正确答案：
- 周长：(8+5)×2 = 26（厘米）
- 面积：8×5 = 40（平方厘米）

**根本原因**：不理解两个概念的物理意义

**教学对策**：
直观演示：
1. 用绳子围一圈 → 感受周长（长度单位）
2. 用方格纸铺满 → 感受面积（面积单位）

记忆口诀："周长是一条线，围着图形转圈圈；面积是一张面，铺满图形算一遍。"

#### 案例2：乘法与加法原理混淆
题目：每个盒子装6个苹果，4个盒子一共多少个？

学生错误：6 + 4 = 10（个）（×）
正确：6 × 4 = 24（个）（✓）

**辨析方法**：
- 加法：合并两类东西（3个苹果 + 4个梨）
- 乘法：相同数量重复多次（4盒，每盒6个）

**关键词识别**：
- 看到"每"、"倍"、"一共几组"→ 乘法
- 看到"一共"、"合起来"→ 可能加法也可能乘法，需判断

---

### 错误类型三：解题步骤遗漏 📝

**常见遗漏**：

| 题型 | 常见遗漏 | 扣分情况 |
|------|---------|---------|
| 应用题 | 不写"答" | 扣1-2分 |
| 应用题 | 不写单位 | 扣1分 |
| 解方程 | 不写"解" | 扣1分 |
| 几何题 | 不写公式 | 扣过程分 |
| 应用题 | 单位换算遗漏 | 全错 |

**强制规范**：
应用题标准格式：
解：设未知数为x
     [列方程]
     x = ...
答：[完整句子，带单位]

几何题标准格式：
已知：[条件]
求：[目标]
解：[公式] = [计算] = [结果]
答：[结论]

---

## 📖 语文学科错误分析

### 错误类型一：错别字 😰

**高频错字统计**：

| 类型 | 易混字组 | 记忆技巧 |
|------|---------|---------|
| 形近字 | 己/已/巳 | 己开已半巳全闭 |
| | 戊/戌/戎 | 横戌点戊戊中空 |
| 同音字 | 在/再 | 在这里、再一次 |
| | 做/作 | 做事、作业 |
| | 的/地/得 | 形前名后动中间 |

**系统训练法**：
1. **每日一字**：每天讲解一组易混字
2. **语境辨析**：在句子中区分用法
3. **错字档案**：每人一本，记录自己常错的字
4. **互相批改**：同桌交换找错别字

---

### 错误类型二：标点符号误用 📌

**典型错误**：

#### 1. 引号使用错误
错误：老师说："今天不下雨了"。正确：老师说："今天不下雨了。"
规则：句号放在引号内（完整引用）

#### 2. 逗号句号位置不当
错误：今天天气很好，我们去公园玩吧。正确：今天天气很好。我们去公园玩吧。
规则：完整句子结束用句号

#### 3. 省略号与"等等"重复
错误：水果有苹果、香蕉、橘子等等……
正确：水果有苹果、香蕉、橘子等。
或：水果有苹果、香蕉、橘子……

**标点口诀**：
一句话说完，用个小圆圈（。句号）
中间要停顿，圆点带尖尾（，逗号）
并列词语间，逗号来站立（、顿号）
引用特殊词，蝌蚪前后翻（""引号）
话语没说完，六点紧相连（……省略号）

---

### 错误类型三：阅读理解失分 📚

**主要问题**：

1. **审题不清**
   - 问原因答成概括内容
   - 让找原句却自己概括
   
2. **答案不完整**
   - 只答一点，遗漏其他要点
   - 语言不规范，口语化严重

3. **脱离文本**
   - 凭主观臆断，不从原文找依据

**解题模板**：
概括主要内容：本文通过讲述了……（谁+做了什么+结果如何），表达了……（中心思想/作者情感）

理解句子含义：这句话运用了……修辞手法/描写手法，生动形象地写出了……（对象）的……特点，表达了……情感

赏析词语："××"一词的意思是……，在文中指……，生动准确地表现了……（人物性格/事物特征），体现了作者……用词的精准性。

谈感悟启示：读了这篇文章，我明白了……道理/受到了……启发。在今后的生活中，我应该……（联系实际）

---

## 📘 英语学科错误分析

### 错误类型一：语法错误 🔤

**高频错误TOP5**：

#### 1. 第三人称单数忘记变位
✗ He go to school every day.
✓ He goes to school every day.

✗ She like playing football.
✓ She likes playing football.

**记忆口诀**：
主语若是三单他她它，
动词要把-es/-s加。
一般动词直接加，
以o/s/x/ch/sh结尾加-es。
have变has是特殊。

#### 2. 时态混淆
时态标志词速查表：
┌──────────┬──────────────┬─────────────┐
│ 时态     │ 标志词       │ 例句        │
├──────────┼──────────────┼─────────────┤
│ 一般现在 │ always, often│ I play...   │
│ 一般过去 │ yesterday,  │ I played... │
│          │ last week    │             │
│ 现在进行 │ now, look,   │ I am playing│
│          │ listen       │             │
│ 一般将来 │ tomorrow,    │ I will play │
│          │ next week    │             │
└──────────┴──────────────┴─────────────┘

#### 3. 名词单复数错误
✗ I have three pencil.
✓ I have three pencils.

不规则复数需特别记忆：
man → men, woman → women
child → children, foot → feet
tooth → teeth, mouse → mice
sheep → sheep, deer → deer

---

### 错误类型二：中式英语 🇨🇳➡️🇺🇸

**典型例子**：
中式表达          地道表达
─────────────────────────────
I very like it.  → I like it very much.
Open the light.  → Turn on the light.
Give you.        → Here you are.
I am agree.      → I agree.
Good good study.  → Study hard.

**纠正常用语**：
日常纠错对话：
T: "I very like English."
T: "Very修饰什么词？"
S: "形容词或副词。"
T: "like是动词还是形容词？"
S: "动词。"
T: "那应该怎么说？"
S: "I like English very much."
T: "Excellent! Remember: very不修饰动词。"

---

## 🎯 统一应对策略

### 建立"三本"制度 📓

#### 1. 错题本（数学专用）
格式示例：
┌─────────────────────────────────────┐
│ 日期：2024-01-15                    │
│ 题目：45 + 38 = ?                   │
│ 我的答案：73                        │
│ 正确答案：83                        │
│ 错因：漏进位（个位5+8=13应写3进1）  │
│ 正确解法：                          │
│   45                                │
│ + 38                                │
│ ----                                │
│   83  （个位13写3进1，十位4+3+1=8）│
│ 同类题练习：56 + 27 = ? → 83       │
└─────────────────────────────────────┘

#### 2. 积累本（语文/英语通用）
- 错别字、易混词
- 优美句段摘抄
- 语法笔记
- 文化常识

#### 3. 反思本（全科通用）
本周反思（每周五写）：
1. 本周作业整体情况：______
2. 最容易犯的错误类型：______
3. 改进措施：______
4. 下周目标：______

### 课堂集体讲评模式 👥

对于共性错误，采用"五步法"：
Step 1: 展示错误（匿名展示典型错例）
Step 2: 学生找错（让大家发现问题所在）
Step 3: 分析原因（为什么会出现这种错误）
Step 4: 给出正解（正确的做法是什么）
Step 5: 巩固练习（当堂做2-3道同类题）

### 家校协同机制 🏠🏫

给家长的建议清单：
□ 每天检查作业签名
□ 关注错题本的整理情况
□ 发现反复出错的知识点及时告知老师
□ 不要只看分数，要看错在哪里
□ 营造安静的学习环境
□ 鼓励孩子自己先检查再上交

---

## 📊 数据追踪与预警

### 建立个人错误档案
为每位学生建立电子表格跟踪：

| 学生姓名 | 错误类型 | 频次 | 最近出错日期 | 是否改善 | 干预措施 |
|---------|---------|------|------------|---------|---------|
| 张三 | 计算粗心 | 高 | 01-15 | 否 | 加强口算 |
| 李四 | 概念混淆 | 中 | 01-12 | 是 | 保持关注 |
| 王五 | 步骤遗漏 | 低 | 01-10 | 是 | 已纠正 |

### 预警信号
⚠️ 当出现以下情况时需重点关注：
- 同一错误连续出现3次以上
- 简单题频繁出错（可能是注意力问题）
- 某一类错误突然增多（可能新知识未掌握）
- 作业质量明显下降（可能有情绪或其他原因）

---

**总结**：错误的本质是学习的契机。通过系统化的错误分析和针对性的干预，帮助学生从错误中学习，才能真正提升教学质量！🎯`};function Us(t,e=[]){const s=t.trim(),r=qs[s];return r?r(s):Xs(s,e)}function Xs(t,e=[]){t.toLowerCase();const s=e[0]||"";return/手机|电话|智能机/.test(t)?`# 📱 学生上课玩手机：针对性解决策略

## 一、先判断"为什么带手机" 🔍

乡村学生带手机的原因往往不是"贪玩"那么简单：

| 原因 | 占比 | 特征 |
|------|------|------|
| **留守儿童联系父母** | 40% | 只在课间打电话 |
| **缺乏娱乐方式** | 25% | 玩游戏、刷短视频 |
| **查资料/学习** | 15% | 偶尔看, 不是沉迷 |
| **跟风/社交** | 20% | 别人有我也要有 |

> 🎯 不同原因, 对策完全不同。一刀切"没收"是最差的方案。

## 二、"3 步管理法"（不靠没收） 👣

### 第 1 步：建立"手机公约"（第 1 周）

和学生**共同制定**规则（不是老师单方面宣布）：

\`\`\`
📋 班级手机公约（示例）
1. 上课期间手机统一放入"手机休息站"（教室后方置物架）
2. 课间可以使用手机（但不超过 10 分钟）
3. 需要联系家长时, 向老师申请取用
4. 违反公约 → 手机暂存至放学, 不公开批评
5. 连续 1 周遵守公约 → 获得"自律之星"加分
\`\`\`

### 第 2 步：设置"手机休息站"（第 2 周起）

- 教室后方放一个带编号的置物架/收纳袋
- 进教室时自觉放入, 编号对应座位
- **关键**：老师也放手机进去（以身作则）

### 第 3 步：替代方案（持续）

手机上瘾的本质是**缺乏替代活动**：

| 替代方案 | 时间 | 效果 |
|---------|------|------|
| 课间桌游角 | 课间 | 替代手机游戏 |
| 班级图书角 | 自由时间 | 替代短视频 |
| 体育活动 | 大课间 | 释放精力 |
| 手工/画画 | 午休 | 培养兴趣 |

## 三、留守儿童特殊情况 💝

如果学生带手机是为了联系在外打工的父母：

1. **不要没收** — 这是他和父母唯一的联系方式
2. **约定时间** — "每天放学后可以打 10 分钟电话"
3. **提供帮助** — 如果家里没有信号, 允许在学校打
4. **情感替代** — 增加老师与该学生的日常交流, 部分替代手机的情感功能

## 四、游戏沉迷干预 🎮

如果学生已经沉迷手机游戏：

### "递减法"（比一刀切有效）
- 第 1 周：允许课间玩 10 分钟 → 减到 5 分钟
- 第 2 周：课间不玩, 只放学后玩 → 减到 30 分钟
- 第 3 周：只在周末玩 → 逐步脱敏

### "替代法"
- 找到游戏满足的心理需求（成就感？社交？）
- 用现实活动替代（班级比赛、小组合作任务）
- 关键：让他体验到**现实中的成就感 > 游戏中的**

## 五、家长配合要点 🏠

- 与家长沟通时**不要指责**（"你家孩子天天玩手机"）
- 用"三明治话术"：先说进步 → 再提手机问题 → 最后给建议
- 建议家长：睡前收手机、周末限时、多陪伴
- 留守儿童监护人（爷爷奶奶）：教他们设置"学生模式"

> 💡 **核心理念**：手机不是敌人, 缺乏自控力和替代活动才是问题。管理手机 = 建规则 + 给替代 + 递减依赖。`:/不写作业|不交作业|不完成作业|欠作业|作业不交|作业没写|作业没做|不做法|不写题/.test(t)?`# 📝 学生不写作业：从"不交"到"主动交"的转化策略

## 一、先分清"为什么不写" 🔍

| 原因 | 典型表现 | 误判风险 |
|------|---------|---------|
| **不会做** | 交白卷或只写几道简单的 | 常被误认为"懒" |
| **忘了/没时间** | 偶尔不交, 态度不抗拒 | 需确认是否有家庭原因 |
| **觉得没意义** | "写不写都一样" | 需调整作业设计 |
| **对抗/逆反** | 故意不交, 态度强硬 | 需先解决情绪问题 |
| **家庭环境差** | 回家要干农活/带弟妹 | 需调整作业量 |

> ⚠️ **最常见错误**：把所有"不写作业"都归结为"懒", 实际上 60% 以上是"不会做"或"没条件做"。

## 二、"5 步转化法" 👣

### 第 1 步：1 对 1 了解原因（第 1 天）

私下问 3 句话：
1. "作业是不是有不会的？"（排除能力问题）
2. "回家后几点开始写作业？"（排除时间问题）
3. "写作业时有人能帮你吗？"（排除支持问题）

### 第 2 步：对症下药（第 1-2 周）

| 原因 | 对策 |
|------|------|
| 不会做 | 降低难度 + 同桌互助 + 课后 10 分钟辅导 |
| 忘了 | 建立作业记录本 + 微信群提醒 |
| 没意义 | 作业生活化（如：算自家田地面积） |
| 逆反 | 先解决情绪, 不催作业 |
| 没条件 | 允许在校完成 + 减少作业量 |

### 第 3 步：建立"作业打卡"机制（第 3 周起）

\`\`\`
📋 每日作业打卡表
| 姓名 | 周一 | 周二 | 周三 | 周四 | 周五 |
|------|------|------|------|------|------|
| 张三 | ✓ | ✓ | ✓ | ✓ | ✓ |
| 李四 | ✓ | ✗ | ✓ | ✓ | ✓ |
\`\`\`

- **连续 5 天全交** → "作业之星"贴纸 + 当众表扬
- **连续 3 天未交** → 私下沟通, 不公开批评

### 第 4 步：分层作业（持续）

\`\`\`
🌱 基础层（必做, 10 分钟可完成）
🌿 提高层（选做, 15 分钟）
🌳 挑战层（加分项, 自愿）
\`\`\`

> 关键：让每个学生都有**能完成**的作业, 避免"全不会 → 全不交"的恶性循环。

### 第 5 步：家长协同（每月 1 次）

- 不告状式沟通（"你孩子又不交作业"）
- 改为："孩子这周交了 3 次作业, 比上周多了 1 次, 咱们一起鼓励他"
- 对留守儿童监护人：简化要求, 重点确认"孩子有没有坐下来写"

## 三、课堂即时策略 ⚡

- **课内作业法**：每天留 10 分钟让学生在课堂开始写作业（老师在旁辅导）
- **同伴监督**：同桌互相检查, 都交了双方加分
- **"先做后玩"**：课间活动前先检查作业进度

## 四、避免 3 个常见错误 ❌

1. **罚抄** — 惩罚性作业只会让学生更讨厌写作业
2. **当众点名** — "XXX 又没交作业"会让学生破罐子破摔
3. **只盯结果** — 写了一半也要肯定, 再鼓励完成

> 💡 **核心理念**：不写作业是"症状"不是"病因"。找到原因, 对症下药, 比催 100 遍更有效。`:/说话|交头接耳|讲小话|窃窃私语|闲聊|聊天|讲话/.test(t)?`# 🤫 学生上课说话：精准干预策略

## 一、区分"说话类型" 🔍

不是所有"说话"都需要制止：

| 类型 | 表现 | 是否需要干预 |
|------|------|------------|
| **讨论型** | 围绕学习内容讨论 | ❌ 鼓励 |
| **求助型** | 问同桌题目 | ❌ 引导为举手提问 |
| **社交型** | 聊与课堂无关的事 | ✅ 需干预 |
| **干扰型** | 大声说话影响他人 | ✅ 立即干预 |

## 二、"3 秒干预法"（不打断教学节奏） ⚡

### 第 1 秒：非语言信号
- 眼神接触 + 微微摇头
- 走近说话的学生（物理距离 = 无声警告）

### 第 2 秒：转移注意力
- 点名回答一个**简单**的问题（不是惩罚, 是让他参与进来）
- "刚才 XX 说的, 谁能补充一下？"

### 第 3 秒：正面引导
- 表扬安静的同学："第 3 组的同学听得很认真"
- 不说"不要说话", 改说"请安静听"

## 三、长期策略 📅

### "发言卡"制度
每人每节课发 2 张发言卡：
- 想说话 → 举手用卡
- 用完 → 本节课只能听
- 没用完 → 积分奖励
> 效果：让学生学会"想好了再说", 而不是随意插嘴

### "说话区"设置
- 课堂讨论环节：允许自由发言
- 教师讲授环节：安静听讲
- 明确边界比一味禁止更有效

## 四、特殊情况 ⚠️

- **多动/注意力缺陷学生**：允许他站着听课或捏减压球, 不要强制静坐
- **听不懂而聊天**：降低内容难度, 增加互动环节
- **社交需求旺盛**：安排小组合作任务, 把"说话欲"转化为"讨论力"

> 💡 **核心理念**：说话不是问题, 说话的时机才是。给发言机会 + 明确规则, 比禁止说话有效 10 倍。`:/睡觉|瞌睡|打盹|犯困|昏昏欲睡|趴桌/.test(t)?`# 😴 学生上课睡觉：原因分析与应对策略

## 一、先找原因（不是所有睡觉都是"懒"） 🔍

| 原因 | 占比 | 判断方法 |
|------|------|---------|
| **睡眠不足** | 50% | 问"昨晚几点睡的" |
| **课程太难/太简单** | 20% | 只在某科睡觉 |
| **身体不适** | 10% | 面色差、频繁打哈欠 |
| **教室环境** | 15% | 午后 + 闷热 + 不通风 |
| **厌学** | 5% | 故意趴着, 不听劝 |

### 乡村特有原因
- 家里农忙, 晚上帮忙干活到很晚
- 留守儿童没人管作息
- 冬天教室冷, 穿不暖犯困
- 午饭没吃饱, 下午低血糖

## 二、即时应对（不打断教学） ⚡

- **轻拍桌面**或走到他身边（不用叫醒, 走近自然醒）
- 让他**站起来回答一个简单问题**（不是惩罚, 是"唤醒"）
- 课后私下问："昨晚是不是没睡好？"（不是"你怎么又睡觉"）

## 三、长期解决 📅

### 作息调整
- 与家长沟通孩子作息（目标：晚 9 点前入睡）
- 午休时间保证 20-30 分钟（趴桌也行）

### 课堂调整
- 午后第 1 节课：安排活动类/互动类内容
- 每 15 分钟换一次教学活动（避免单调）
- 教室通风 + 适当光照

### 特殊关怀
- 留守儿童：老师定期关注其生活作息
- 农忙季节：适当减少作业量
- 家庭困难学生：了解是否有早餐问题

> 💡 **核心理念**：上课睡觉是"信号"不是"罪"。找到背后的原因, 比叫醒他 100 次更有用。`:/不听话|调皮|纪律|管不住|课堂|打架|玩手机|睡觉|走神|分心|厌学|逃学|厌课/.test(t)?s.includes("课堂管理")||s.includes('让学生"听话"')?`# 🔄 课堂管理深度方案：针对你的追问

看来你对课堂管理还有更具体的需求, 我来帮你深入分析：

## 一、按场景精准匹配 🎯

### 场景 A：学生上课走神/分心
- **即时法**：走到他身边讲课（物理靠近 = 注意力回归）
- **提问法**：点他回答一个**简单**的问题（重建参与感）
- **任务法**：让他负责板书/发本子（给"事做"就不走神）

### 场景 B：学生打架/冲突
1. **立即分开**（不问原因, 先分开）
2. **冷处理 10 分钟**（让双方冷静）
3. **分别谈话**（各听一面之词）
4. **当面调解**（让双方说出感受, 找到共识点）
5. **跟进观察**（之后 1 周持续关注）

### 场景 C：学生逃学/厌学
- 先家访了解原因（不是"叫家长来"）
- 常见原因：被欺负、跟不上、家庭变故
- 对策：消除原因 + 建立归属感（给他一个班级角色）

## 二、一周改善计划 📅

| 时间 | 动作 | 目标 |
|------|------|------|
| 周一 | 观察 1 天, 记录 3 个问题行为 | 找到规律 |
| 周二 | 和问题学生私下谈 5 分钟 | 建立信任 |
| 周三 | 试行"班级公约" | 建立规则 |
| 周四 | 给"刺头"学生一个专属任务 | 任务赋能 |
| 周五 | 全班表扬本周进步（含问题学生） | 正向强化 |

## 三、关键提醒 ⚠️

- **不要只管"坏行为"** — 忽视好行为 = 好行为消失
- **表扬 : 批评 = 5 : 1** — 每批评 1 次, 至少表扬 5 次
- **坚持 21 天** — 任何管理策略至少坚持 3 周才能见效

> 💡 如果你告诉我**具体是哪种行为问题**, 我可以给出更精准的方案。比如"上课玩手机"、"不写作业"、"上课说话"等。`:`# 🎒 课堂管理：让学生"听话"的实用策略

乡村学生"不听话"背后往往有深层原因：渴望关注、基础薄弱、缺乏成就感、家庭因素等。以下是经一线验证的有效方法：

## 一、先"诊断"再"开方" 🔍

不同学生"不听话"的原因不同，先观察判断：
- **吸引注意型**：故意捣乱 → 想被老师看见
- **能力不足型**：跟不上 → 自暴自弃
- **家庭缺失型**：缺爱 → 行为异常
- **习惯不良型**：一二年级未养成规则意识

## 二、低成本高回报的"3 招组合拳" 👊

### 1. 正向锚定（30秒/次）
找到学生**一个**具体优点，当众/私下真诚表扬。
> ❌ "你最近表现不错"  
> ✅ "今天你坐得很直，能坚持一整节课，老师很欣赏"

### 2. 任务赋能（每周1次）
给"刺头"学生**专属任务**：摆作业、关灯、发作业本、记录积分。
- 心理学原理：被需要 = 被重视 = 行为收敛
- 关键：任务要有**仪式感**（"老师小助手"胸牌）

### 3. 暂停冷静（1-3分钟）
冲突发生时不说教，让学生"出去接杯水/站一会儿"，情绪过了再谈。
- 避免当众批评（15岁以下学生当众被批评会破罐子破摔）

## 三、长期机制 📅

### "班级银行"积分制
\`\`\`
+ 上课积极发言      +2分
+ 主动帮助同学      +3分
+ 一周无违纪        +5分
- 课堂捣乱          -2分（扣分要私下、不公开）
\`\`\`
每周一公布积分榜前 5 名（保护后 5 名隐私），攒够 50 分可兑换小奖励。

### "悄悄话"沟通
每周随机抽 3 名学生（不一定是不听话的）单独谈 3 分钟，建立情感连接。
> "老师看你这周很认真，有什么困难想跟老师说吗？"

## 四、家校协同（避免告状式沟通） 🏠

联系家长时遵循 **"三明治话术"**：
1. **夸**：先说 1-2 个孩子最近的具体进步
2. **建**：客观描述 1 个问题（"孩子这周上课走神 3 次"）
3. **请**：提一个家长可执行的小建议（"能否每天陪孩子读 10 分钟书"）

## 五、特殊情况应对 ⚠️

| 情况 | 应对 |
|------|------|
| 公开顶撞 | 立即冷处理，课后单独沟通 |
| 屡教不改 | 联系班主任/心理老师，必要时家访 |
| 涉及心理/家庭 | 转介学校心理辅导，不擅自介入 |

---

> 💡 **关键理念**：学生不是要"管住"，而是要"看见"。看见他的优点，给他能成功的任务，他的"不听话"自然会减少。

需要我针对某个具体场景（如"上课玩手机"、"不写作业"）给出更详细的方案吗？`:/作业|批改|错题|试卷|习题|默写|听写/.test(t)?`# ✏️ 作业批改与错题管理高效方法

## 一、批改提速 5 个小技巧 ⚡

### 1. 符号标记法
用 **3 种符号**代替写完整评语：
- ✓ 优 + 圈出关键亮点
- △ 待改进 + 简短批注（< 10 字）
- ? 重点问题（课堂讲评）

### 2. 抽样精批 + 全部浏览
50 份作业不必每份都精批：
- **精批 10 份**（抓共性问题）
- **浏览 30 份**（看完成度）
- **略过 10 份**（重点学生）

### 3. 拍照留存高频错题
每周用手机拍 3-5 道典型错题，期末复习直接打印给学生。

## 二、错题本高效使用 📓

### 三栏式错题本
| 原题 | 错因 | 正解 |
|------|------|------|
| 45+38=73 | 漏进位 | (5+8=13, 写3进1) |

### 错因分类
- **概念性**（不理解）：需重讲
- **方法性**（会但没用对）：需同类题训练
- **粗心性**（会但抄错）：需规范习惯

## 三、作业设计"3 原则" 🎯

1. **分层**：基础题 60% + 提高题 30% + 拓展题 10%
2. **精炼**：宁可少做 5 道，做透 1 道
3. **生活化**：结合乡村学生实际（如：算自家玉米地面积）

## 四、讲评课的"5 步法" 👨‍🏫

1. **展示错例**（匿名，保护学生）
2. **学生找错**（小组讨论）
3. **分析错因**（为什么错）
4. **给出正解**（应该怎么想）
5. **变式训练**（再做 2 道同类题）

需要我针对**具体学科**（数学/语文/英语）出一份作业批改清单吗？`:/怎么教|如何教|教案|教学设计|备课|导入|讲解|巩固|备课/.test(t)?`# 📚 教学设计与备课高效指南

## 一、备课的"3 步法" ✍️

### 第 1 步：明确"教什么、为什么教"
- **教学目标**：知识 + 过程方法 + 情感（每节课至少明确 1 个核心目标）
- **重难点**：根据班级学情确定（不是照搬教参）

### 第 2 步：设计"怎么教"
- **导入**（3-5 分钟）：情境 / 问题 / 旧知复习
- **新授**（15-20 分钟）：讲解 → 示范 → 互动
- **练习**（10 分钟）：基础 → 提高 → 拓展
- **小结**（3-5 分钟）：学生总结 + 老师补充
- **作业**：分层（基础必做 + 拓展选做）

### 第 3 步：预想"学生会怎么错"
提前准备 3-5 个学生**可能出错**的点及应对策略。

## 二、不同课型的核心环节 🎯

| 课型 | 核心 | 时间分配 |
|------|------|---------|
| 新授课 | 讲清概念 + 及时练习 | 讲授 60% + 练习 40% |
| 练习课 | 典型错例 + 同类变式 | 讲评 30% + 练习 70% |
| 复习课 | 知识框架 + 综合应用 | 梳理 30% + 应用 70% |

## 三、乡村教学"接地气"建议 🌾

- **教具**：就地取材（树枝算术、石子记数、玉米棒认数）
- **情境**：联系学生生活（赶集、种地、做饭）
- **节奏**：放慢 30%，多给学生"消化"时间

## 四、试讲 / 磨课建议 🎤

- 自己**试讲一遍**（计时）
- 录视频回看（找口头禅、卡壳处）
- 邀请 1-2 位同事听课反馈

---

需要我针对**具体学科 + 具体课题**生成一份完整教案吗？告诉我**学科、年级、课题**，我立即帮你生成。`:/学困|后进|差生|跟不上|基础差|留级|补课/.test(t)?`# 🌱 学困生转化：让"后进生"也能进步

## 一、矫正认知误区 ⚠️

❌ "他就是笨" → ✅ "他可能某方面没被激活"  
❌ "家长不配合" → ✅ "我们沟通方式要调整"

## 二、"5 步转化法" 实操 📋

### Step 1: 找"最近发展区"（第 1 周）
- 出 5 道**略低于**他现有水平的题
- 全对 = 找到"成功区"；错 3 道以内 = 跳一跳能摘到
- **目标**：让学困生在课堂上有"我能做到"的体验

### Step 2: 配"小老师"（持续）
- 让学困生和一名中等生结成**同桌互助对**
- 中等生讲题的过程 = 自己再学一遍
- 每周轮换，避免标签化

### Step 3: 分层作业（每天）
- 基础题（必做）：让他能独立完成
- 提高题（选做）：完成后加分
- 拓展题（挑战）：完成后盖章"学习之星"

### Step 4: 定期"小型表彰"（每 2 周）
不要等到期末，**每 2 周**表扬一次：
- "进步最大奖"
- "作业最工整奖"
- "发言最积极奖"
> 关键：表扬要**具体**（"你这 3 道应用题都做对了！"）

### Step 5: 家长沟通（每月 1 次）
沟通内容聚焦：
1. 本月进步点（哪怕很小）
2. 家庭可配合的 1 件事
3. 下阶段目标

## 三、避免 3 个常见错误 ❌

1. **不要当众批评**（会破罐子破摔）
2. **不要只盯分数**（分数低 ≠ 能力差）
3. **不要包办**（培养他"自己能行"的信念）

## 四、何时需要专业介入 🆘

出现以下情况，建议联系学校心理老师：
- 持续情绪低落 2 周以上
- 自我伤害倾向
- 突发行为剧变
- 家庭重大变故`:/家长|家校|沟通|父母|留守儿童|隔代/.test(t)?`# 🏠 乡村家校沟通实用指南

## 一、乡村家长沟通的"3 个特点" 🌾

1. **文化水平差异大**：有的家长是高中文化，有的是文盲
2. **时间不固定**：农忙时可能联系不上
3. **留守儿童多**：爷爷奶奶辈监护，沟通需更耐心

## 二、5 种高效沟通方式 📞

### 1. "三明治"反馈法
\`\`\`
[第 1 层] 夸：1-2 个具体进步
[第 2 层] 提：1 个客观问题
[第 3 层] 请：1 个可执行建议
\`\`\`

### 2. 微信群"3 段式"通知
- **作业类**：拍照 + 时长 + 签字要求
- **通知类**：时间 + 地点 + 带什么
- **表扬类**：每周一次"班级小红花"

### 3. 单独沟通"5 分钟原则"
- 不超过 5 分钟
- 聚焦 1-2 个具体点
- 结束前确认家长理解

### 4. 家长会"3 必讲"
1. 班级整体情况（数据说话）
2. 孩子共性进步
3. 家庭可配合的事（具体可操作）

### 5. 家访"寒暄 5 分钟"
- 不直接进主题
- 聊家庭、聊农活、聊孩子小时候
- 再谈孩子学校表现

## 三、留守儿童特别关注 💝

- **每月 1 次**视频连线家长（在教室进行）
- 生日时**全班送祝福**（小卡片）
- 期末**给在外家长写一封信**
- 设立"代理家长"日（老师轮流陪伴）

## 四、敏感话题沟通 🔒

- 孩子成绩不理想：不与"别人家孩子"比较
- 孩子行为问题：先听家长说，再共商对策
- 家庭变故：表达关心，避免过度追问

---

> 💡 核心心法：**家长不是"对手"，而是"队友"**。保持尊重、真诚、可操作，家校协同才能真正发力。`:/心理|情绪|压力|焦虑|抑郁|自卑|内向|孤僻|厌学|想不开/.test(t)?`# 💚 学生心理与情绪支持

## 一、识别"预警信号" 🚨

### 学业方面
- 成绩突然大幅下降
- 连续请假 / 迟到
- 作业突然不交

### 情绪方面
- 持续低落 2 周以上
- 易怒 / 哭泣 / 退缩
- 自我否定语言（"我不行""没意思"）

### 行为方面
- 突然攻击同学
- 自伤行为
- 暴食 / 厌食

## 二、不同情况的应对 🛠️

### 一般情绪问题
1. **倾听**（不打断、不评判）
2. **正常化**（"我理解你现在的感受"）
3. **共商**（"我们一起想想办法"）

### 中度问题
- 寻求学校心理老师介入
- 与家长沟通
- 建立"一对一"关注记录

### 严重问题
- 立即联系学校领导
- 转介专业心理咨询
- 启动危机干预流程

## 三、日常预防：营造"心理安全"班级 🌈

- 班级公约：不嘲笑、不歧视
- 每周 1 次"心情分享"（自愿）
- 设置"心理信箱"（匿名）
- 老师以身作则：承认错误、表达感受

## 四、自我保护 🧘

老师不是万能的：
- 不接超出能力范围的个案
- 不替家长做重大决定
- 定期与同事 / 督导交流
- 照顾好自己的心理状态

> ⚠️ **重要提醒**：如有自伤 / 他伤 / 危及生命的风险，请**立即**联系学校心理老师和家长，必要时拨打 24 小时心理援助热线：**400-161-9995**。`:/不好好学|不爱学|不爱学习|不想学|不学习|没兴趣|学习兴趣|学习动力|学习积极性|学习态度|不肯学|不愿意学|学习没劲|学习困难|学习习惯/.test(t)?`# 🌟 激发学生学习动力：从"不想学"到"我要学"

乡村学生"不想学"的原因往往不在"学不会"，而在"觉得没意义 / 没成就感 / 没动力"。下面是一线验证的"4 步激发法"：

## 一、先"诊断不开心的根因" 🔍

学生不爱学习，常见 5 种根因（不同根因对策不同）：

| 根因类型 | 典型表现 | 关键信号 |
|---------|---------|---------|
| **意义缺失型** | "学了有什么用" | 经常问"为什么学这个" |
| **挫败累积型** | 怕答错、怕被笑 | 举手越来越少 |
| **目标模糊型** | 不知道为谁学 | 成绩波动大、随大流 |
| **关系疏离型** | 不喜欢某科老师 | 只在特定课堂走神 |
| **家庭支持弱** | 回家无人辅导 | 留守儿童、家庭变故 |

> 🎯 **关键动作**：先找 3-5 个"不想学"的学生谈 5 分钟，定位到根因再"开方"。

## 二、"4 步激发法"实操 👣

### 第 1 步：让学习"看得见意义"（每天 2 分钟）

把抽象的"学知识"翻译成"看得到的好处"：

❌ "认真听讲，学到知识"  
✅ "会算这道题，你就能帮家里算卖菜的账"  
✅ "会写这段话，你就能给在外打工的爸妈写一封信"

> 工具：每节课开头花 30 秒说"今天学的，能用来做什么"。

### 第 2 步：把"大目标"切成"小台阶"（每节课）

差生最怕的是"做不到"。把任务切成 3 层：

\`\`\`
🌱 必做（10 分钟内能完成）→ 让他体验"我能行"
🌿 选做（跳一跳能摘到）→ 完成后 +1 颗星
🌳 挑战（能力上限）→ 完成后全班表扬
\`\`\`

> 例：数学应用题
> - 🌱 列出已知条件
> - 🌿 写出算式
> - 🌳 自己编一道类似的题

### 第 3 步：制造"成功瞬间"（每 2 天 1 次）

学生不会因为"你很棒"就爱学习，但会因为**真实的成功**而改变态度。

**低成本做法**：
- 课前私下告诉学生："今天我准备叫你回答一个你会的问题"
- 让他答对后，全班鼓掌（不是客套，是真诚的）
- 课后单独说："今天你第三题做对了，进步很大"

### 第 4 步：建立"学习-奖励"的直接关联 💰

让努力**立刻**有回报（不是考好才有）：

| 行为 | 积分 | 兑换 |
|------|------|------|
| 上课主动回答 1 次 | +2 | 攒 10 分 = 免 1 次作业 |
| 作业全部完成 | +3 | 攒 30 分 = 换文具 |
| 主动帮助同学 | +2 | 月冠军 = 班级光荣榜 |
| 坚持 1 周不迟到 | +5 | 学期末 = 奖状 + 奖品 |

> ⚠️ 注意：奖励不能只用"分数"，要包含**公开认可 + 实物 + 体验**（如当小老师、带回家的小礼物）。

## 三、让课堂"好玩起来" 🎮

### 1. 学科游戏化（5-10 分钟/节课）

- **数学**：口算 PK、24 点、数学谜语
- **语文**：成语接龙、故事接力、辩论赛
- **英语**：单词卡片大战、角色扮演

### 2. 让学生"当老师"（每周 1 次）

- 选 1 个简单知识点，让学生上台讲
- 准备 5 分钟 → 讲 3 分钟 → 同学提问
- **效果**：备课的学生会突然"开窍"——因为他必须真懂

### 3. 班级"项目式"任务

把一个单元变成一个"项目"：
- 数学 → "设计我们班的小花园"（面积、计算）
- 语文 → "给村里写一份村史"（采访、写作）
- 英语 → "用英语介绍我们的家乡"（词汇、对话）

> 学生一旦觉得"学的东西跟我的生活有关"，动力就来了。

## 四、4 类"不想学"学生的具体对策 🎯

### 1. "学了没用"型
- 每周 1 次"知识用在生活里"分享
- 请家长/村干部讲"我当年学的知识帮了我什么"
- 寒暑假作业：完成 1 个真实生活任务（如帮家里记账）

### 2. "学不会"型
- 降低难度起点（从 70 分内容开始）
- 同桌互助（不让他成为"最差"那个）
- 关键：用"小目标达成"重建信心

### 3. "不想让爸妈管我"型
- 找到他**真正在乎的人**（爷爷奶奶、好朋友）
- 让那个人成为"鼓励者"
- 不再把"学习"和"父母期望"绑定

### 4. "受欺负 / 没朋友"型
- 安全感比学习重要
- 优先解决人际关系
- 联系班主任 + 心理老师

## 五、长期机制 📅

### 班级"3 件好事"墙
- 每天下课前 2 分钟：每人说 1 件"今天学到的"
- 写在小纸条上，贴到墙上
- 月底全班回顾，看到自己**真实进步**

### "我的成长档案"袋
- 每人一个档案袋，装入：最佳作业、进步试卷、自我反思
- 期末时学生**自己**翻看，惊讶于自己的成长

### 家长沟通：从"分数"转向"进步"
- ❌ "你孩子又考差了"
- ✅ "这周孩子主动举手 3 次，比上周多 2 次，咱们一起保持"

## 六、避免 3 个常见错误 ❌

1. **不要靠"吓"**（"不学习以后只能去搬砖"）— 短期有效，长期适得其反
2. **不要比较**（"你看 XXX 多努力"）— 让学生更厌学
3. **不要包办**（"我替你着急"）— 学生要自己找到意义

> 💡 **核心理念**：学生不是"不想学"，而是**还没找到学习的理由**。老师的任务不是"逼他学"，而是**帮他看见学习的意义 + 让他体验我能行**。

---

需要我针对**具体年级 / 具体学科 / 具体学生情况**进一步展开吗？告诉我你面对的"不想学"的学生类型，我给更针对性的方案。`:/技巧|方法|怎么做|怎样|如何|怎么|窍门/.test(t)?`# 🎯 高效教学方法与技巧

## 一、备课技巧 ✍️

1. **写"极简教案"**：1 张 A4 纸 写清楚 5 环节
2. **预想 3 个学生错误**：提前准备应对
3. **找 1 个生活例子**：把抽象变具体
4. **做 1 个教具**：能动手的记忆更深

## 二、导入技巧 🎬

| 导入类型 | 适用场景 | 示例 |
|---------|---------|------|
| 情境导入 | 新单元 | "小明遇到一个问题..." |
| 复习导入 | 关联知识 | "我们昨天学的..." |
| 提问导入 | 探究课 | "谁能猜到今天学什么？" |
| 实验导入 | 科学课 | 现场演示 → 提问 |

## 三、讲授技巧 📢

### "3 遍法"
- **第 1 遍**：慢、清晰、留停顿
- **第 2 遍**：举 1 个例子
- **第 3 遍**：请学生复述

### "讲到 3 处停"
讲到 3 个关键处就停下来：
- 提问
- 板书
- 让学生记笔记

## 四、提问技巧 ❓

### 候答时间
- 简单问题：3 秒
- 思考问题：5-8 秒
- **不要少于 3 秒**（否则学生没时间思考）

### 追问策略
- 学生答对 → "为什么？"
- 学生答错 → "你的思路很好，某个地方再想想"
- 学生答不出 → 换个角度提示

## 五、课堂节奏控制 ⏱️

- 每 8-10 分钟换一个活动（避免疲劳）
- 动静结合（讲 10 分 + 做 5 分 + 讨论 5 分）
- 重点内容**重复 2-3 次**

## 六、作业布置技巧 📝

1. **分层**（基础 + 提高 + 选做）
2. **精炼**（宁可少做 5 道，做透 1 道）
3. **讲评跟上**（不批改的作业 = 没布置）

---

需要我针对**具体学科**或**具体教学环节**展开吗？告诉我你的具体困惑，我给更针对性的建议。`:/班级|班干部|班委|班主任|班长|小组长/.test(t)?`# 🏫 班级管理与班干部培养

## 一、班级岗位设置 👥

### 必设岗位
- 班长（1 人）
- 学习委员（1-2 人）
- 纪律委员（1-2 人）
- 劳动委员（1-2 人）
- 文艺委员（1 人）
- 体育委员（1 人）

### 特色岗位
- 图书管理员
- 电灯/门窗管理员
- 绿植养护员
- 班级银行行长
- 心理气象员

## 二、班干部选拔与培养 🎯

### 选拔：3 步法
1. **自荐**（第 1 周）
2. **试用**（第 2-3 周，每 1 周轮换）
3. **定岗**（第 4 周，结合自荐 + 同学评价 + 老师观察）

### 培养：每周 1 次"班委会议"（15 分钟）
- 总结上周工作
- 反馈同学意见
- 部署本周重点
- 表扬优秀班委

## 三、班级文化建设 🌈

### 班级公约（共创）
- 学生提议 → 班级讨论 → 投票通过
- 控制在 5-8 条（多了记不住）
- 张贴墙上，定期回顾

### 班级文化布置
- 班级愿景（学生共创）
- 光荣榜 / 进步墙
- 阅读角 / 植物角
- 班级日记（轮流写）

## 四、班级活动设计 🎉

### 每月 1 次主题活动
| 月份 | 主题 | 示例 |
|------|------|------|
| 9 月 | 收心 + 习惯 | 课堂常规比赛 |
| 10 月 | 爱国 + 集体 | 合唱比赛 |
| 11 月 | 阅读 + 表达 | 讲故事比赛 |
| 12 月 | 迎新 + 感恩 | 班级元旦晚会 |
| 1-2 月 | 复习 + 陪伴 | 期末表彰 |
| 3 月 | 雷锋 + 公益 | 学雷锋活动 |
| 4 月 | 体育 + 健康 | 运动会 |
| 5 月 | 劳动 + 实践 | 农事体验 |
| 6 月 | 复习 + 成长 | 毕业典礼 |

## 五、棘手情况应对 ⚠️

- **班干部犯错误**：私下沟通，不当众撤职
- **班干部冲突**：让他们自己协商，老师做裁判
- **班干部撂挑子**：先了解原因，再决定是否调整

> 💡 核心理念：班干部是"小老师"不是"小监工"，培养服务意识和领导力比管人能力更重要。`:/考试|测验|评价|打分|成绩|分数|排名|评语|操行/.test(t)?`# 📊 教学评价与考试设计

## 一、评价的"3 个维度" 🎯

1. **过程性评价**（40%）：课堂表现、作业、笔记、参与度
2. **阶段性评价**（30%）：单元测试、小测验
3. **结果性评价**（30%）：期中/期末

## 二、避免"分数至上" ⚠️

- 不公开排名（用"等级 + 评语"）
- 不单纯以分数评价学生
- 关注**进步幅度**（"比上次进步 5 分"比"排第 5"更有意义）

## 三、试卷设计原则 📝

### 试题结构
- 基础题 60%（考查双基）
- 提高题 30%（考查能力）
- 拓展题 10%（考查综合）

### 命题注意点
1. 题干清晰，无歧义
2. 题量适中（避免疲劳）
3. 难度梯度合理
4. 兼顾不同层次学生

## 四、试卷讲评高效流程 👨‍🏫

1. **数据统计**（哪些题错得多）
2. **错因归类**（概念 / 方法 / 粗心）
3. **典型讲解**（重点讲共性错题）
4. **变式训练**（再做 2-3 道同类）
5. **个别辅导**（错得多的学生单独讲）

## 五、学生评语怎么写 ✍️

### "3 段式"评语
1. **进步点**（具体不空泛）
   > ✅ "你这学期的计算准确率提高了 15%"
2. **待改进**（可操作）
   > ✅ "应用题的审题习惯需加强"
3. **下阶段期待**（激励）
   > ✅ "期待下学期看到你更精彩的发言"

### 避免评语
- ❌ "希望继续努力"（空泛）
- ❌ "再粗心就完了"（打击）
- ❌ "你和 XX 一样就好了"（比较）

## 六、特殊情况处理 🔧

### 学生分数差距大
- 不公布具体分数（用 A/B/C 等级）
- 与家长沟通时**先说进步**

### 学生作弊
- 私下谈话，了解原因
- 不当众批评
- 后续关注心理状态

### 学生突然退步
- 主动沟通，了解情况
- 联合家长、班委一起关注`:`# 👋 你好！我是乡教小助

我看到你提了"**${t.length>30?t.slice(0,30)+"...":t}**"这个问题。

## 我能帮你什么？

我专注于**乡村教学一线问题**，主要能给你：

### 🎯 教学问题类
- 学生管理（不听话、厌学、纪律）
- 课堂管理（提问、节奏、互动）
- 教学设计（备课、导入、巩固）
- 教法技巧（讲授、提问、批改）

### 📚 学科教学类
- 数学、语文、英语等学科的
  - 教案设计
  - 习题生成
  - 错题分析
  - 复习策略

### 👨‍👩‍👧 家校协同类
- 家长沟通话术
- 留守儿童关注
- 家庭配合策略

### 💚 学生成长类
- 学困生转化
- 心理健康关注
- 行为问题应对

### 📊 评价反馈类
- 试卷设计
- 多元评价
- 学生评语

---

## 为了更好帮助你 ✨

可以告诉我：
1. 你现在带的是**哪个年级、哪个学科**？
2. 你遇到的具体**场景或困惑**是什么？
3. 有没有**已经尝试过的方法**（效果如何）？

越具体的问题，我能给越针对性的建议！

> 💡 试试这样问：
> - "三年级学生上课走神怎么办？"
> - "如何让 5 年级数学应用题课堂更活跃？"
> - "小学语文阅读理解怎么教？"
> - "留守儿童家庭作业不交，家长不配合怎么办？"`}function Vs(t){const e=(t||"").trim();if(!e)return null;let s=e.match(/(?:出|来|给|写|做|生成?)\s*(\d+)\s*道?\s*(.+?)(?:练习题|习题|题目|题|卷子)?\s*[，。,.！!？?]*$/);const r=!!s;if(s||(s=e.match(/(?:生成?|我要|帮我|请|给我)?\s*([^，。,.!?？;；\n]{1,30}?)\s*(练习题|习题|题目|题组|卷子|测试|测验)/)),!s)return null;let n,a=5;if(r){const k=s[1];new RegExp(k+"\\s*年级").test(e)||(a=Math.max(1,Math.min(20,parseInt(k)||5))),n=(s[2]||"").trim()}else n=(s[1]||"").trim();const c=e.match(/([一二三四五六七八九]\s*年级|高一|高二|高三|初[一二三]|[1-9]\s*年级)/),i={1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九"},l=c?c[1].replace(/\s+/g,""):"三年级",h=l.replace(/^(\d+)/,(k,u)=>i[u]||u),o=["语文","数学","英语","物理","化学","生物","政治","历史","地理","信息科技"];let f="数学";for(const k of o)if(e.includes(k)){f=k;break}let p=n;p=p.replace(/^(?:请|帮我|我要|给我)/,"").trim(),p=p.replace(/^生成?/,"").trim(),p=p.replace(/^(?:出|来|给|写|做)/,"").trim(),p=p.replace(/^(\d+\s*道)/,"").trim(),p=p.replace(/(练习题|习题|题目|题组|卷子|测试|测验|题)$/g,"").trim();for(const k of[h,l,f,"年级","学科","的","一些","几个","关于"])p=p.replace(new RegExp(k,"g"),"").trim();return p=p.replace(/^\d+$/g,"").trim(),p||(p="基础练习"),{subject:f,grade:h,knowledge:p,count:a}}function Fs(t,e="",s=""){if(!t||typeof t!="object")return t;const r=t.type||t.question_type||"fill";if(!t.question&&!t.content&&(t.question="（题目内容缺失，请重新生成）"),t.content&&!t.question&&(t.question=t.content),r==="choice"||r==="multiple_choice"||r==="single_choice"){const n=Array.isArray(t.options)?t.options:[],a=[];for(let c=0;c<Math.max(n.length,4)&&a.length<4;c++){let i=String(n[c]??"").trim();i||(i=`（选项${"ABCD"[a.length]}待补充）`),/^[A-D][.、\s)]\s*/.test(i)||(i=`${"ABCD"[a.length]}. ${i}`),a.includes(i)||a.push(i)}for(;a.length<4;)a.push(`${"ABCD"[a.length]}. （选项待补充）`);t.options=a}if(!t.answer&&t.answer!==0&&(r==="choice"||r==="multiple_choice"||r==="single_choice"?t.answer="A":r==="judge"?t.answer="✓":t.answer="（待补充）"),!t.explanation&&!t.analysis){const n=s||t.knowledge_point||"本题";t.explanation=`本题考查【${n}】。
【答案推导】根据题目条件，运用"${n}"的核心概念进行分步推理。
【知识点链接】${n}是${e||"本"}学科的重要基础内容，建议在课堂上与该知识点其他典型题进行对比练习。
【易错点提示】注意审清题意，规范作答步骤，避免因小失大。`}else t.analysis&&!t.explanation&&(t.explanation=t.analysis);return!t.knowledge_point&&s&&(t.knowledge_point=s),(!Array.isArray(t.common_mistakes)||t.common_mistakes.length===0)&&(t.common_mistakes=["审题不仔细，遗漏关键条件","对核心概念理解不到位","解题步骤不规范"]),t}function Gs(t,e,s,r,n){var h;const a=[];a.push(`### 【${e}】${s}《${r}》练习题`),a.push(""),a.push(`共 ${n} 题，含选择题/填空题/判断题等多种题型。`),a.push("");const i=(t&&(t.questions||((h=t.data)==null?void 0:h.questions))||[]).map(o=>Fs(o,e,r));if(!i.length)return a.push("（未生成题目）"),a.join(`
`);const l={choice:"选择题",fill:"填空题",judge:"判断题",application:"应用题",multiple_choice:"选择题"};return i.forEach((o,f)=>{const p=o.type||o.question_type||"fill",k=l[p]||"题",u=o.question||o.content||"";if(a.push(`**${f+1}.（${k}）** ${u}`),(o.options||[]).forEach(w=>a.push(`   ${w}`)),o.answer&&a.push(`   **✅ 答案**: ${o.answer}`),o.explanation||o.analysis){const w=String(o.explanation||o.analysis).split(`
`).filter(Boolean);a.push("   **📝 解析**:"),w.forEach(E=>a.push(`   ${E}`))}o.knowledge_point&&a.push(`   **🔗 知识点**: ${o.knowledge_point}`),Array.isArray(o.common_mistakes)&&o.common_mistakes.length&&a.push(`   **⚠️ 常见错误**: ${o.common_mistakes.join("; ")}`),a.push("")}),a.join(`
`)}function Ks(){const t=L([]),e=L(null),s=L([]),r=L(!1),n=L(!1),a=L(!1),c=Y(()=>t.value.find(p=>p.id===e.value));async function i(){try{const p=await K.listSessions();t.value=p,a.value=!1}catch(p){if(ke(p)){a.value=!0;const k=Zs();t.value=k?[k]:[]}else console.warn("[Chat] 加载会话列表失败（业务错误，后端可达）:",p),a.value=!1}}async function l(){var k;if(!a.value)try{const u=await K.createSession();return t.value.unshift(u),e.value=u.id,s.value=[],u}catch(u){ke(u)?a.value=!0:console.warn("[Chat] 创建会话失败（业务错误，已降级到本地模式）:",((k=u==null?void 0:u.response)==null?void 0:k.status)||"unknown")}const p={id:"mock-"+Date.now(),title:"新对话",created_at:new Date().toISOString(),message_count:0};return t.value.unshift(p),e.value=p.id,s.value=[],Ke(),js(p),p}async function h(p){var k;if(e.value=p,n.value=!0,!a.value)try{s.value=await K.getMessages(p),n.value=!1;return}catch(u){if(ke(u))a.value=!0;else{if(((k=u==null?void 0:u.response)==null?void 0:k.status)===404){console.warn("[Chat] 会话不存在或已被删除, 自动移除:",p),t.value=t.value.filter(w=>w.id!==p),e.value===p&&(e.value=null,s.value=[]),n.value=!1;return}console.warn("[Chat] 加载消息失败（业务错误，后端可达）:",u)}}s.value=Hs(),n.value=!1}async function o(p){if(!e.value)try{if(!await l())return}catch(_){console.warn("[Chat] createSession 异常，已降级:",_==null?void 0:_.message);return}const k={id:Date.now().toString(),role:"user",content:p,created_at:new Date().toISOString()};if(s.value.push(k),r.value=!0,!a.value){const _=Vs(p);if(_)try{const A=await zt({subject:_.subject,grade:_.grade,knowledge:_.knowledge,count:_.count,difficulty:"medium",questionTypes:["choice","fill","judge"]}),B=Gs(A==null?void 0:A.data,_.subject,_.grade,_.knowledge,_.count);s.value.push({id:Date.now().toString()+"-ex",role:"assistant",content:B,created_at:new Date().toISOString()}),r.value=!1,await i();return}catch(A){console.warn("[Chat] 习题路由失败, 回退到chat:",A)}}if(!a.value)try{const _=await K.sendMessage(e.value,p);s.value.push({id:Date.now().toString()+"-resp",role:"assistant",content:_.content,quality:_.quality||null,created_at:new Date().toISOString()}),r.value=!1,await i();return}catch(_){ke(_)?a.value=!0:console.warn("[Chat] 发送消息失败（业务错误，后端可达）:",_)}await new Promise(_=>setTimeout(_,800));const u=s.value.filter(_=>_.role==="assistant").slice(-3).map(_=>_.content),T=Us(p,u),E=await K.evaluate(p,T,u).then(_=>(_==null?void 0:_.score)||null).catch(()=>null);s.value.push({id:Date.now().toString()+"-mock",role:"assistant",content:T,quality:E,created_at:new Date().toISOString()}),r.value=!1,Qs([...s.value])}async function f(p){var k;if(!a.value)try{await K.deleteSession(p)}catch(u){((k=u==null?void 0:u.response)==null?void 0:k.status)!==404&&console.warn("[Chat] 删除会话失败:",u)}t.value=t.value.filter(u=>u.id!==p),e.value===p&&(e.value=null,s.value=[],Ke()),await i()}return{sessions:t,currentSessionId:e,currentSession:c,messages:s,isStreaming:r,loading:n,apiUnavailable:a,loadSessions:i,createSession:l,selectSession:h,sendMessage:o,deleteSession:f}}const Js={class:"banner-content"},Ws={key:0,class:"pulse-ring"},Ys={class:"banner-text"},en={class:"banner-title"},tn={class:"banner-description"},sn={key:0,class:"banner-details"},nn={key:0,class:"detail-item"},rn={key:1,class:"detail-item"},an={key:2,class:"detail-item"},ln={class:"monospace"},on={class:"banner-actions"},cn={key:0,class:"retry-progress"},un={key:0,class:"troubleshoot-panel"},pn={class:"panel-title"},hn={class:"suggestion-list"},dn={class:"suggestion-number"},fn={class:"suggestion-text"},gn={class:"panel-footer"},kn=Je({__name:"OfflineStatusBanner",props:{visible:{type:Boolean,default:!1},variant:{default:"warning"},title:{default:"后端服务未连接"},description:{default:"网络连接暂时不可用，当前内容仍可继续编辑"},apiUrl:{default:""},lastErrorTime:{default:null},retryCount:{default:0},isRetrying:{type:Boolean,default:!1},retryProgress:{default:0},allowDismiss:{type:Boolean,default:!0},showDetails:{type:Boolean,default:!0},showTroubleshoot:{type:Boolean,default:!0},autoHideDuration:{default:0},onRetry:{},onDismiss:{}},emits:["retry","dismiss","update:visible"],setup(t,{emit:e}){const s=t,r=e,n=L(!1);let a=null;const c=Y(()=>s.isRetrying?"正在重新连接...":s.title),i=Y(()=>{switch(s.variant){case"error":return Nt;case"info":return Ot;case"success":return Mt;default:return Lt}}),l=Y(()=>({"is-error":s.variant==="error"&&!s.isRetrying,"is-warning":s.variant==="warning"&&!s.isRetrying,"is-spinning":s.isRetrying,"is-success":s.variant==="success"})),h=Y(()=>(s.variant==="warning"||s.variant==="error")&&!s.isRetrying),o=Y(()=>s.isRetrying?`连接中 ${Math.round(s.retryProgress||0)}%`:s.retryCount>0?`重新连接 (${s.retryCount})`:"重新连接"),f=Y(()=>["检查后端服务是否已启动（端口 8000）","确认网络连接正常，无防火墙拦截","刷新页面或清除浏览器缓存后重试","查看浏览器控制台获取详细错误信息"]);function p(){n.value=!n.value}async function k(){r("retry"),s.onRetry&&await s.onRetry()}function u(){r("dismiss"),r("update:visible",!1)}function T(_){return new Date(_).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}function w(){window.open("#/help/connection-troubleshooting","_blank")}async function E(){const _=[`时间: ${new Date().toLocaleString()}`,`状态: ${s.title}`,`API地址: ${s.apiUrl||"未知"}`,`重试次数: ${s.retryCount}`,`最后错误: ${s.lastErrorTime?T(s.lastErrorTime):"无"}`].join(`
`);try{await navigator.clipboard.writeText(_)}catch(A){console.error("复制失败:",A)}}return xt(()=>s.visible,_=>{_&&s.autoHideDuration>0&&(a&&clearTimeout(a),a=setTimeout(()=>{r("update:visible",!1)},s.autoHideDuration))},{immediate:!0}),wt(()=>{a&&clearTimeout(a)}),(_,A)=>{const B=G("el-icon"),O=G("el-button"),H=G("el-tooltip");return S(),N(de,{name:"offline-fade"},{default:x(()=>[t.visible?(S(),I("div",{key:0,class:F(["offline-status-banner",{"is-collapsed":n.value,[t.variant]:!0}]),role:"status","aria-live":"polite"},[g("div",Js,[g("div",{class:F(["banner-icon",l.value])},[d(B,{size:24},{default:x(()=>[(S(),N(yt(i.value)))]),_:1}),h.value?(S(),I("span",Ws)):D("",!0)],2),g("div",Ys,[g("h4",en,P(c.value),1),g("p",tn,P(t.description),1),d(de,{name:"expand"},{default:x(()=>[!n.value&&t.showDetails?(S(),I("div",sn,[t.lastErrorTime?(S(),I("div",nn,[d(B,null,{default:x(()=>[d(m(Ye))]),_:1}),g("span",null,"上次连接失败: "+P(T(t.lastErrorTime)),1)])):D("",!0),t.retryCount>0?(S(),I("div",rn,[d(B,null,{default:x(()=>[d(m(je))]),_:1}),g("span",null,"已尝试重连 "+P(t.retryCount)+" 次",1)])):D("",!0),t.apiUrl?(S(),I("div",an,[d(B,null,{default:x(()=>[d(m(At))]),_:1}),g("span",ln,P(t.apiUrl),1)])):D("",!0)])):D("",!0)]),_:1})]),g("div",on,[d(O,{type:"primary",size:"small",round:"",loading:t.isRetrying,onClick:k,class:"retry-btn"},{icon:x(()=>[d(B,null,{default:x(()=>[d(m(je))]),_:1})]),default:x(()=>[q(" "+P(o.value),1)]),_:1},8,["loading"]),t.showDetails?(S(),N(O,{key:0,size:"small",text:"",type:"info",onClick:p,class:"toggle-btn"},{default:x(()=>[d(B,null,{default:x(()=>[n.value?(S(),N(m(It),{key:0})):(S(),N(m(Et),{key:1}))]),_:1})]),_:1})):D("",!0),t.allowDismiss?(S(),N(H,{key:1,content:"关闭提示（仍处于离线模式）",placement:"bottom"},{default:x(()=>[d(O,{size:"small",text:"",type:"info",onClick:u,class:"dismiss-btn"},{default:x(()=>[d(B,null,{default:x(()=>[d(m(Pt))]),_:1})]),_:1})]),_:1})):D("",!0)])]),d(de,{name:"progress"},{default:x(()=>[t.isRetrying?(S(),I("div",cn,[g("div",{class:"progress-bar",style:vt({width:t.retryProgress+"%"})},null,4)])):D("",!0)]),_:1}),d(de,{name:"slide-up"},{default:x(()=>[!n.value&&t.showTroubleshoot?(S(),I("div",un,[g("h5",pn,[d(B,null,{default:x(()=>[d(m(Bt))]),_:1}),A[0]||(A[0]=q(" 故障排除建议 ",-1))]),g("ul",hn,[(S(!0),I(me,null,_e(f.value,($e,pe)=>(S(),I("li",{key:pe,class:"suggestion-item"},[g("span",dn,P(pe+1),1),g("span",fn,P($e),1)]))),128))]),g("div",gn,[d(O,{size:"small",text:"",type:"primary",onClick:w},{default:x(()=>[d(B,null,{default:x(()=>[d(m(Dt))]),_:1}),A[1]||(A[1]=q(" 查看详细文档 ",-1))]),_:1}),d(O,{size:"small",text:"",type:"info",onClick:E},{default:x(()=>[d(B,null,{default:x(()=>[d(m(et))]),_:1}),A[2]||(A[2]=q(" 复制错误信息 ",-1))]),_:1})])])):D("",!0)]),_:1})],2)):D("",!0)]),_:1})}}}),bn=We(kn,[["__scopeId","data-v-20ffb956"]]),mn={class:"chat-app"},_n={class:"sidebar-brand"},xn={class:"brand-icon"},wn={class:"brand-name"},yn={class:"sidebar-search"},vn={class:"sidebar-sessions"},Sn=["onClick","onKeydown"],$n={class:"session-card-icon"},Rn={class:"session-card-body"},Tn={class:"session-card-title"},Cn={class:"session-card-meta"},zn=["aria-label","onClick"],An={key:0,class:"sidebar-empty"},In={class:"sidebar-empty-icon"},En={class:"chat-main"},Pn={class:"chat-topbar"},Bn={class:"topbar-left"},Dn={class:"topbar-info"},Ln={class:"topbar-status"},Mn={class:"topbar-right"},On={key:0,class:"welcome-view"},Nn={class:"welcome-avatar"},Zn={class:"welcome-title"},jn={class:"welcome-desc"},Hn={class:"welcome-cards"},Qn=["onClick","onKeydown"],qn={class:"msg-avatar"},Un={class:"msg-row"},Xn={class:"msg-author"},Vn={key:0,class:"msg-bubble"},Fn={key:1},Gn=["innerHTML"],Kn={class:"msg-feedback"},Jn=["disabled","title","aria-label","onClick"],Wn=["disabled","title","aria-label","onClick"],Yn={style:{"text-align":"right","margin-top":"8px"}},er={key:1,class:"msg assistant"},tr={class:"msg-avatar"},sr={class:"chat-inputbar"},nr={class:"inputbar-box"},rr=["disabled"],ar=Je({__name:"ChatAssistant",setup(t){const{t:e}=St(),{sessions:s,currentSessionId:r,messages:n,isStreaming:a,loadSessions:c,createSession:i,selectSession:l,sendMessage:h,deleteSession:o,apiUnavailable:f}=Ks(),p=L(!0),k=L(""),u=L(""),T=L(null),w=L(!1),E=L(0),_=L(0),A=L(null),B=["帮我设计一份小学五年级数学分数的教案","生成10道四则运算练习题","如何提高学生的课堂参与度？","分析学生作业中的常见错误"];async function O(){await i(),k.value=""}async function H(){const z=k.value.trim();!z||a.value||(k.value="",await h(z),await dt())}async function $e(z){z.shiftKey||(z.preventDefault(),await H())}async function pe(z){await o(z)}async function pt(){if(w.value)return!1;w.value=!0,E.value=0,_.value++;const z=setInterval(()=>{E.value<90&&(E.value+=10)},200);try{return await K.healthCheck(),await c(),clearInterval(z),E.value=100,setTimeout(()=>{w.value=!1,E.value=0},500),!0}catch{return clearInterval(z),w.value=!1,E.value=0,A.value=Date.now(),!1}}function ht(){console.log("用户关闭了离线提示")}async function dt(){await Ct(),T.value&&(T.value.scrollTop=T.value.scrollHeight)}const he=L({});async function Ne(z,y){if(z.rating!==void 0)return;z.rating=y;const C=n.value.findIndex(W=>W.id===z.id),U=C>0?n.value[C-1]:null;try{await K.submitFeedback({message_id:z.id,session_id:r.value||void 0,rating:y,reason:he.value[z.id]||void 0,query:(U==null?void 0:U.role)==="user"?U.content:void 0,response:z.content}),ie.success(y===1?"已收到您的点赞，谢谢反馈！":"已收到反馈，我们会持续优化")}catch(W){console.warn("[Feedback] 上报失败:",W),ie.warning("反馈已记录本地（网络异常）")}}async function ft(z){try{await K.submitFeedback({message_id:z.id,session_id:r.value||void 0,rating:-1,reason:he.value[z.id]||""}),ie.success("感谢您的反馈")}catch(y){console.warn("[Feedback-reason] 上报失败:",y)}}async function gt(z){try{await navigator.clipboard.writeText(z.content||""),ie.success("已复制到剪贴板")}catch{const C=document.createElement("textarea");C.value=z.content||"",document.body.appendChild(C),C.select();try{document.execCommand("copy")}catch{}document.body.removeChild(C),ie.success("已复制")}}return $t(()=>{c()}),(z,y)=>{const C=G("el-icon"),U=G("el-input"),W=G("el-tag"),kt=G("el-tooltip"),Ze=G("el-button"),bt=G("el-popover");return S(),I("div",mn,[g("aside",{class:F(["chat-sidebar",{"is-closed":!p.value}])},[g("div",_n,[g("div",xn,[d(C,{size:22},{default:x(()=>[d(m(Zt))]),_:1})]),g("span",wn,P(m(e)("chat.history")),1),g("button",{class:"brand-add","aria-label":"新建对话",onClick:O},[d(C,null,{default:x(()=>[d(m(jt))]),_:1})])]),g("div",yn,[d(U,{modelValue:u.value,"onUpdate:modelValue":y[0]||(y[0]=b=>u.value=b),placeholder:"搜索对话...",size:"small",clearable:"","prefix-icon":m(Ht)},null,8,["modelValue","prefix-icon"])]),g("nav",vn,[(S(!0),I(me,null,_e(m(s),b=>(S(),I("div",{key:b.id,class:F(["session-card",{active:b.id===m(r)}]),role:"button",tabindex:"0",onClick:X=>m(l)(b.id),onKeydown:[le(X=>m(l)(b.id),["enter"]),le(Re(X=>m(l)(b.id),["prevent"]),["space"])]},[g("div",$n,[d(C,null,{default:x(()=>[d(m(He))]),_:1})]),g("div",Rn,[g("div",Tn,P(b.title),1),g("div",Cn,[d(C,{size:12},{default:x(()=>[d(m(Ye))]),_:1}),g("span",null,P(b.message_count)+" 条",1)])]),g("button",{class:"session-card-delete","aria-label":`删除对话：${b.title}`,onClick:Re(X=>pe(b.id),["stop"])},[d(C,null,{default:x(()=>[d(m(Xt))]),_:1})],8,zn)],42,Sn))),128)),m(s).length===0?(S(),I("div",An,[g("div",In,[d(C,{size:40},{default:x(()=>[d(m(He))]),_:1})]),y[5]||(y[5]=g("p",null,"暂无对话记录",-1)),d(W,null,{default:x(()=>[...y[4]||(y[4]=[q("开始新对话",-1)])]),_:1})])):D("",!0)])],2),g("main",En,[g("header",Pn,[g("div",Bn,[g("button",{class:"topbar-menu","aria-label":"打开或收起对话历史",onClick:y[1]||(y[1]=b=>p.value=!p.value)},[d(C,{size:20},{default:x(()=>[d(m(Qt))]),_:1})]),g("div",Dn,[y[6]||(y[6]=g("div",{class:"topbar-name"},"AI 教学助手",-1)),g("div",Ln,[g("span",{class:F(["status-badge",{thinking:m(a)}])},null,2),q(" "+P(m(a)?"AI 思考中":"在线"),1)])])]),g("div",Mn,[d(kt,{content:"新对话",placement:"bottom"},{default:x(()=>[g("button",{class:"topbar-action","aria-label":"新建对话",onClick:O},[d(C,{size:18},{default:x(()=>[d(m(qt))]),_:1})])]),_:1})])]),d(bn,{visible:m(f),"onUpdate:visible":y[2]||(y[2]=b=>Rt(f)?f.value=b:null),"is-retrying":w.value,"retry-progress":E.value,"retry-count":_.value,"last-error-time":A.value,"api-url":"/api/chat/sessions",variant:"warning",onRetry:pt,onDismiss:ht},null,8,["visible","is-retrying","retry-progress","retry-count","last-error-time"]),g("div",{class:"chat-messages",ref_key:"messagesRef",ref:T},[m(n).length===0?(S(),I("div",On,[g("div",Nn,[d(C,{size:48},{default:x(()=>[d(m(fe))]),_:1})]),g("h1",Zn,P(m(e)("chat.welcome")),1),g("p",jn,P(m(e)("chat.welcomeDesc")),1),g("div",Hn,[(S(),I(me,null,_e(B,b=>g("div",{key:b,class:"welcome-card",role:"button",tabindex:"0",onClick:X=>m(h)(b),onKeydown:[le(X=>m(h)(b),["enter"]),le(Re(X=>m(h)(b),["prevent"]),["space"])]},[d(C,null,{default:x(()=>[d(m(fe))]),_:1}),g("span",null,P(b),1),d(C,{class:"card-arrow"},{default:x(()=>[d(m(Vt))]),_:1})],40,Qn)),64))])])):D("",!0),(S(!0),I(me,null,_e(m(n),b=>{var X;return S(),I("div",{key:b.id,class:F(["msg",b.role])},[g("div",qn,[d(C,{size:18},{default:x(()=>[b.role==="assistant"?(S(),N(m(fe),{key:0})):(S(),N(m(Ft),{key:1}))]),_:2},1024)]),g("div",Un,[g("div",Xn,P(b.role==="assistant"?"AI 助手":"你"),1),b.role==="user"?(S(),I("div",Vn,P(b.content),1)):(S(),I("div",Fn,[g("div",{class:"msg-bubble",innerHTML:m(Os)(b.content)},null,8,Gn),g("div",Kn,[(X=b.quality)!=null&&X.is_template?(S(),N(W,{key:0,type:"warning",size:"small",effect:"plain"},{default:x(()=>[...y[7]||(y[7]=[q(" ⚠️ 模板化回复 ",-1)])]),_:1})):b.quality?(S(),N(W,{key:1,type:b.quality.overall>=75?"success":b.quality.overall>=50?"info":"warning",size:"small",effect:"plain"},{default:x(()=>[q(" 质量 "+P(b.quality.overall)+"分 ",1)]),_:2},1032,["type"])):D("",!0),g("button",{class:F(["feedback-btn",{active:b.rating===1}]),disabled:b.rating!==void 0,title:b.rating===1?"已点赞":"有帮助","aria-label":b.rating===1?"已标记为有帮助":"标记为有帮助",onClick:ae=>Ne(b,1)},[d(C,null,{default:x(()=>[d(m(Gt))]),_:1})],10,Jn),g("button",{class:F(["feedback-btn feedback-btn-down",{active:b.rating===-1}]),disabled:b.rating!==void 0,title:b.rating===-1?"已点踩":"回答不准","aria-label":b.rating===-1?"已标记为回答不准":"标记为回答不准",onClick:ae=>Ne(b,-1)},[d(C,null,{default:x(()=>[d(m(Kt))]),_:1})],10,Wn),b.rating===-1?(S(),N(bt,{key:2,placement:"top-end",width:260,trigger:"click"},{reference:x(()=>[...y[8]||(y[8]=[g("button",{class:"feedback-reason-link"},"填写原因",-1)])]),default:x(()=>[d(U,{modelValue:he.value[b.id],"onUpdate:modelValue":ae=>he.value[b.id]=ae,type:"textarea",rows:3,placeholder:"简单说说哪里不准，方便我们改进（可选）"},null,8,["modelValue","onUpdate:modelValue"]),g("div",Yn,[d(Ze,{size:"small",type:"primary",onClick:ae=>ft(b)},{default:x(()=>[...y[9]||(y[9]=[q("提交",-1)])]),_:1},8,["onClick"])])]),_:2},1024)):D("",!0),b.content?(S(),N(Ze,{key:3,link:"",size:"small",class:"copy-btn",onClick:ae=>gt(b)},{default:x(()=>[d(C,null,{default:x(()=>[d(m(et))]),_:1}),y[10]||(y[10]=q(" 复制 ",-1))]),_:1},8,["onClick"])):D("",!0)])]))])],2)}),128)),m(a)?(S(),I("div",er,[g("div",tr,[d(C,{size:18},{default:x(()=>[d(m(fe))]),_:1})]),y[11]||(y[11]=Tt('<div class="msg-row" data-v-1b8de4bb><div class="msg-author" data-v-1b8de4bb>AI 助手</div><div class="msg-bubble typing-bubble" data-v-1b8de4bb><span class="typing-dot" data-v-1b8de4bb></span><span class="typing-dot" data-v-1b8de4bb></span><span class="typing-dot" data-v-1b8de4bb></span></div></div>',1))])):D("",!0)],512),g("div",sr,[g("div",nr,[d(U,{modelValue:k.value,"onUpdate:modelValue":y[3]||(y[3]=b=>k.value=b),type:"textarea",rows:1,class:"inputbar-field",placeholder:m(e)("chat.placeholder"),disabled:m(a),autosize:"",onKeydown:le($e,["enter"])},null,8,["modelValue","placeholder","disabled"]),g("button",{class:F(["inputbar-send",{active:k.value.trim()}]),disabled:!k.value.trim()||m(a),"aria-label":"发送消息",onClick:H},[d(C,{size:20},{default:x(()=>[d(m(Ut))]),_:1})],10,rr)]),y[12]||(y[12]=g("div",{class:"inputbar-hint"},"Enter 发送 · Shift + Enter 换行",-1))])])])}}}),hr=We(ar,[["__scopeId","data-v-1b8de4bb"]]);export{hr as default};
