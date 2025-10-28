import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as c}from"./index-GiUgBvb1.js";import{c as d,a0 as p,T as o}from"./componentDocs-DuKQuNPh.js";import"./icons-DOidKO06.js";import"./index-CROobee-.js";const h={title:"Navigation/Drawer",component:p,tags:["autodocs"],parameters:{docs:{description:{component:d.Drawer}}}},r={render:()=>{const[i,t]=c.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>t(!0),children:"Open Drawer"}),e.jsx(p,{open:i,onClose:()=>t(!1),children:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx(o,{variant:"h6",children:"Navigation"}),e.jsx(o,{variant:"body2",children:"Drawer content goes here."})]})})]})}};var a,n,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <>
        <button onClick={() => setOpen(true)}>Open Drawer</button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <div style={{
          padding: '1rem'
        }}>
            <Typography variant="h6">Navigation</Typography>
            <Typography variant="body2">Drawer content goes here.</Typography>
          </div>
        </Drawer>
      </>;
  }
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const x=["Temporary"];export{r as Temporary,x as __namedExportsOrder,h as default};
