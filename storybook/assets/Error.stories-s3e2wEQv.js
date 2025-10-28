import{j as r}from"./jsx-runtime-DiklIkkE.js";import{d as s}from"./styled-components.browser.esm-Dz5yS7sT.js";import{G as c}from"./iconBase-C-rbaPBb.js";import{E as d}from"./EmptyState-CBuBFJz4.js";import{B as l}from"./Button-CKDzLx83.js";import"./index-DRjF_FHU.js";function m(e){return c({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"},child:[]},{tag:"path",attr:{d:"M11 7h2v7h-2zm0 8h2v2h-2z"},child:[]}]})(e)}const p=()=>r.jsx(m,{size:40}),h=s.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${e=>e.theme.colors.background};
  z-index: 1000;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
`,u=s(l)`
  margin-top: ${e=>e.theme.spacing.md};
  min-width: 120px;
`,a=()=>r.jsx(h,{children:r.jsx(d,{icon:r.jsx(p,{}),title:"Something went wrong",description:"We encountered an error while processing your request. Please try again or contact support if the issue persists.",verticalCenter:!0,children:r.jsx(u,{variant:"primary",size:"medium",onClick:()=>window.location.reload(),children:"Try Again"})})});a.__docgenInfo={description:`Componente Error Page
Visualizza una pagina di errore a schermo intero con un messaggio centrato
Styled according to Ant Design principles with modern, rounded aesthetics`,methods:[],displayName:"Error"};const v={title:"Pages/Error",component:a,parameters:{layout:"fullscreen"},decorators:[e=>r.jsx("div",{style:{height:"100vh"},children:r.jsx(e,{})})],tags:["autodocs"]},t={args:{}};var o,n,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,v as default};
