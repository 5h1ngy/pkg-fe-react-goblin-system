import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as l}from"./index-GiUgBvb1.js";import{c as d,am as s,l as m,T as u}from"./componentDocs-CT397LOo.js";import"./icons-C2y5CVOK.js";import"./index-CROobee-.js";const h={title:"Utils/Collapse",component:s,tags:["autodocs"],parameters:{docs:{description:{component:d.Collapse}}}},t={render:a=>{const[p,i]=l.useState(!0);return e.jsxs("div",{children:[e.jsx(m,{variant:"text",onClick:()=>i(c=>!c),children:"Toggle"}),e.jsx(s,{...a,in:p,children:e.jsx(u,{variant:"body2",children:"Collapsible content"})})]})}};var o,n,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <div>
        <Button variant="text" onClick={() => setOpen(prev => !prev)}>
          Toggle
        </Button>
        <Collapse {...args} in={open}>
          <Typography variant="body2">Collapsible content</Typography>
        </Collapse>
      </div>;
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const j=["Basic"];export{t as Basic,j as __namedExportsOrder,h as default};
