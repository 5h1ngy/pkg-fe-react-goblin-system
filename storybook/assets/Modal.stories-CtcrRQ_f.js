import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as d}from"./index-GiUgBvb1.js";import{c as l,an as a,l as i}from"./componentDocs-CT397LOo.js";import"./icons-C2y5CVOK.js";import"./index-CROobee-.js";const f={title:"Utils/Modal",component:a,tags:["autodocs"],parameters:{docs:{description:{component:l.Modal}}}},o={render:p=>{const[c,t]=d.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t(!0),children:"Open Modal"}),e.jsx(a,{...p,open:c,onClose:()=>t(!1),children:e.jsx("p",{children:"Modal body content."})})]})}};var n,r,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <p>Modal body content.</p>
        </Modal>
      </>;
  }
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const j=["Basic"];export{o as Basic,j as __namedExportsOrder,f as default};
