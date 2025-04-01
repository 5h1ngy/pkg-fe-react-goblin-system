import{j as e}from"./jsx-runtime-DiklIkkE.js";import{d as s}from"./styled-components.browser.esm-Dz5yS7sT.js";import{BiErrorCircle as c}from"react-icons/bi";import{E as d}from"./EmptyState-CBuBFJz4.js";import{B as m}from"./Button-CKDzLx83.js";import"./index-DRjF_FHU.js";const l=()=>e.jsx(c,{size:40}),p=s.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${r=>r.theme.colors.background};
  z-index: 1000;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
`,u=s(m)`
  margin-top: ${r=>r.theme.spacing.md};
  min-width: 120px;
`,a=()=>e.jsx(p,{children:e.jsx(d,{icon:e.jsx(l,{}),title:"Something went wrong",description:"We encountered an error while processing your request. Please try again or contact support if the issue persists.",verticalCenter:!0,children:e.jsx(u,{variant:"primary",size:"medium",onClick:()=>window.location.reload(),children:"Try Again"})})});a.__docgenInfo={description:`Componente Error Page
Visualizza una pagina di errore a schermo intero con un messaggio centrato
Styled according to Ant Design principles with modern, rounded aesthetics`,methods:[],displayName:"Error"};const E={title:"Pages/Error",component:a,parameters:{layout:"fullscreen"},decorators:[r=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(r,{})})],tags:["autodocs"]},t={args:{}};var o,n,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,E as default};
