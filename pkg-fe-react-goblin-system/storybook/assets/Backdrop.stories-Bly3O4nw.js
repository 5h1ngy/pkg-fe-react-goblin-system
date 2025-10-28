import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as p}from"./index-GiUgBvb1.js";import{c as d,k as a,l as i}from"./componentDocs-CT397LOo.js";import"./icons-C2y5CVOK.js";import"./index-CROobee-.js";const f={title:"Feedback/Backdrop",component:a,tags:["autodocs"],parameters:{docs:{description:{component:d.Backdrop}}}},t={render:()=>{const[c,o]=p.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"text",onClick:()=>o(!0),children:"Show Backdrop"}),e.jsx(a,{open:c,onClick:()=>o(!1),children:e.jsx("div",{style:{color:"#fff"},children:"Backdrop content"})})]})}};var r,s,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <>
        <Button variant="text" onClick={() => setOpen(true)}>
          Show Backdrop
        </Button>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <div style={{
          color: '#fff'
        }}>Backdrop content</div>
        </Backdrop>
      </>;
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const x=["Basic"];export{t as Basic,x as __namedExportsOrder,f as default};
