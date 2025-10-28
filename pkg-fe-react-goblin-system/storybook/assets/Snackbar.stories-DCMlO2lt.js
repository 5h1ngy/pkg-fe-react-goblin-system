import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as m}from"./index-GiUgBvb1.js";import{c as u,s as o,l as i}from"./componentDocs-CT397LOo.js";import"./icons-C2y5CVOK.js";import"./index-CROobee-.js";const f={title:"Feedback/Snackbar",component:o,tags:["autodocs"],parameters:{docs:{description:{component:u.Snackbar}}}},s={render:c=>{const[p,r]=m.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>r(!0),children:"Show Snackbar"}),e.jsx(o,{...c,open:p,onClose:()=>r(!1)})]})},args:{message:"Saved successfully"}};var n,t,a;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <Button onClick={() => setOpen(true)}>Show Snackbar</Button>
        <Snackbar {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    message: 'Saved successfully'
  }
}`,...(a=(t=s.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const x=["Basic"];export{s as Basic,x as __namedExportsOrder,f as default};
