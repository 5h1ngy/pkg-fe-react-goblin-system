import{j as e}from"./jsx-runtime-DiklIkkE.js";import{d as i}from"./styled-components.browser.esm-Dz5yS7sT.js";import{G as c}from"./iconBase-C-rbaPBb.js";import{E as d}from"./EmptyState-CBuBFJz4.js";import{S as l}from"./Spinner-BjE5C36u.js";import"./index-DRjF_FHU.js";function m(t){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9"},child:[]},{tag:"path",attr:{d:"M17 12a5 5 0 1 0 -5 5"},child:[]}]})(t)}const p=()=>e.jsx(m,{size:32}),u=i.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${t=>t.theme.colors.background};
  z-index: 1000;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
`,g=i.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  width: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`,s=()=>e.jsx(u,{children:e.jsx(d,{icon:e.jsx(p,{}),title:"Loading Content",description:"Please wait while we prepare your data...",verticalCenter:!0,children:e.jsx(g,{children:e.jsx(l,{type:"dots",size:"large",color:"primary",mb:"1rem"})})})});s.__docgenInfo={description:`Componente Loading Page
Visualizza una pagina di caricamento a schermo intero con un messaggio centrato e uno spinner
Styled according to Ant Design principles with modern, rounded aesthetics`,methods:[],displayName:"Loading"};const v={title:"Pages/Loading",component:s,parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(t,{})})],tags:["autodocs"]},o={args:{}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {}
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const w=["Default"];export{o as Default,w as __namedExportsOrder,v as default};
