import{j as e}from"./jsx-runtime-DiklIkkE.js";import{d as i}from"./styled-components.browser.esm-Dz5yS7sT.js";import{TbLoader3 as c}from"react-icons/tb";import{E as d}from"./EmptyState-CBuBFJz4.js";import{S as l}from"./Spinner-BjE5C36u.js";import"./index-DRjF_FHU.js";const m=()=>e.jsx(c,{size:32}),p=i.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${o=>o.theme.colors.background};
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
`,s=()=>e.jsx(p,{children:e.jsx(d,{icon:e.jsx(m,{}),title:"Loading Content",description:"Please wait while we prepare your data...",verticalCenter:!0,children:e.jsx(g,{children:e.jsx(l,{type:"dots",size:"large",color:"primary",mb:"1rem"})})})});s.__docgenInfo={description:`Componente Loading Page
Visualizza una pagina di caricamento a schermo intero con un messaggio centrato e uno spinner
Styled according to Ant Design principles with modern, rounded aesthetics`,methods:[],displayName:"Loading"};const v={title:"Pages/Loading",component:s,parameters:{layout:"fullscreen"},decorators:[o=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(o,{})})],tags:["autodocs"]},t={args:{}};var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {}
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,v as default};
