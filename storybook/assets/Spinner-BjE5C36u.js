import{j as r}from"./jsx-runtime-DiklIkkE.js";import{l as x,d as a,m as l}from"./styled-components.browser.esm-Dz5yS7sT.js";const h=l`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,$=l`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`,y=l`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`,n=e=>{if(typeof e=="number")return e;switch(e){case"small":return 16;case"large":return 40;case"medium":default:return 24}},d=(e,i)=>{var s;return e?i.colors&&i.colors[e]?i.colors[e]:{primary:"#1890ff",secondary:"#7c4dff",success:"#52c41a",danger:"#ff4d4f",warning:"#faad14",info:"#1890ff"}[e]||e:((s=i.colors)==null?void 0:s.primary)||"#1890ff"},w=a.div`
  display: inline-block;
  position: relative;
  margin-bottom: ${e=>e.mb||"0"};
  margin-top: ${e=>e.mt||"0"};
  margin-left: ${e=>e.ml||"0"};
  margin-right: ${e=>e.mr||"0"};
  transition: all 0.3s ease-in-out;
  
  ${e=>e.$centered&&x`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `}
`,v=a.div`
  display: inline-block;
  width: ${e=>`${n(e.size)}px`};
  height: ${e=>`${n(e.size)}px`};
  border: ${e=>`${n(e.size)/8}px solid`};
  border-color: ${e=>d(e.color,e.theme)};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${h} 0.75s linear infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`,j=a.div`
  display: inline-block;
  width: ${e=>`${n(e.size)}px`};
  height: ${e=>`${n(e.size)}px`};
  background-color: ${e=>d(e.color,e.theme)};
  border-radius: 50%;
  animation: ${$} 1s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`,S=a.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${e=>`${n(e.size)*3.5}px`};
  height: ${e=>`${n(e.size)}px`};
`,o=a.div`
  width: ${e=>`${n(e.size)/2}px`};
  height: ${e=>`${n(e.size)/2}px`};
  margin: 0 ${e=>`${n(e.size)/4}px`};
  background-color: ${e=>d(e.color,e.theme)};
  border-radius: 50%;
  animation: ${y} 1.4s ease-in-out infinite;
  animation-delay: ${e=>`${e.index*.16}s`};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
`,T=a.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`,q=({size:e="medium",type:i="border",color:t,label:s="Loading...",centered:m=!1,mb:c,mt:p,ml:u,mr:f,className:g,...b})=>r.jsxs(w,{$centered:m,mb:c,mt:p,ml:u,mr:f,className:g,role:"status",...b,children:[i==="border"&&r.jsx(v,{size:e,color:t}),i==="grow"&&r.jsx(j,{size:e,color:t}),i==="dots"&&r.jsxs(S,{size:e,children:[r.jsx(o,{size:e,color:t,index:0}),r.jsx(o,{size:e,color:t,index:1}),r.jsx(o,{size:e,color:t,index:2})]}),s&&r.jsx(T,{children:s})]});q.__docgenInfo={description:`Spinner component for indicating loading states

Features:
- Multiple sizes (small, medium, large, custom)
- Multiple animation types (border, grow, dots)
- Custom color support
- Accessible labeling
- Centered positioning option
- Ant Design styling with modern rounded aesthetics`,methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | number",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"number"}]},description:"Size of the spinner",defaultValue:{value:"'medium'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'border' | 'grow' | 'dots'",elements:[{name:"literal",value:"'border'"},{name:"literal",value:"'grow'"},{name:"literal",value:"'dots'"}]},description:"Type of spinner animation",defaultValue:{value:"'border'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Color of the spinner"},label:{required:!1,tsType:{name:"string"},description:"Label for screen readers",defaultValue:{value:"'Loading...'",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Center the spinner in its container",defaultValue:{value:"false",computed:!1}},mb:{required:!1,tsType:{name:"string"},description:"Add margin bottom"},mt:{required:!1,tsType:{name:"string"},description:"Add margin top"},ml:{required:!1,tsType:{name:"string"},description:"Add margin left"},mr:{required:!1,tsType:{name:"string"},description:"Add margin right"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};export{q as S};
