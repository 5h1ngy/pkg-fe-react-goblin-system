import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as d}from"./index-GiUgBvb1.js";import{c as m,a4 as r,a5 as o}from"./componentDocs-CT397LOo.js";import{A as u,M as S,P as f}from"./icons-C2y5CVOK.js";import"./index-CROobee-.js";const O={title:"Navigation/SpeedDial",component:r,tags:["autodocs"],parameters:{docs:{description:{component:m.SpeedDial}}},args:{icon:e.jsx(u,{"aria-hidden":!0}),ariaLabel:"Speed dial"}},a={render:s=>{const[p,c]=d.useState(!1);return e.jsxs(r,{...s,open:p,defaultOpen:!1,onClick:()=>c(l=>!l),children:[e.jsx(o,{icon:e.jsx(S,{"aria-hidden":!0}),tooltipTitle:"Email"}),e.jsx(o,{icon:e.jsx(f,{"aria-hidden":!0}),tooltipTitle:"Call"})]})}};var t,n,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <SpeedDial {...args} open={open} defaultOpen={false} onClick={() => setOpen(prev => !prev)}>
        <SpeedDialAction icon={<MailIcon aria-hidden />} tooltipTitle="Email" />
        <SpeedDialAction icon={<PhoneIcon aria-hidden />} tooltipTitle="Call" />
      </SpeedDial>;
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const A=["Basic"];export{a as Basic,A as __namedExportsOrder,O as default};
