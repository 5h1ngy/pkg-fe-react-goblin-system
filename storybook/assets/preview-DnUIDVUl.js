const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DocsRenderer-CFRXHY34-CGVGs5ye.js","assets/iframe-oe_AdXmH.js","assets/index-DRjF_FHU.js","assets/jsx-runtime-DiklIkkE.js","assets/index-Bx0Ph3cE.js","assets/index-FTTXbSiM.js","assets/index-DrFu-skq.js","assets/client-DT_lSbt4.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-oe_AdXmH.js";var s=Object.defineProperty,i=(e,r)=>{for(var t in r)s(e,t,{get:r[t],enumerable:!0})},_={};i(_,{parameters:()=>n});var d=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-CGVGs5ye.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>d[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
