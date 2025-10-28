import{j as o}from"./jsx-runtime-CDt2p4po.js";import{r as c}from"./index-GiUgBvb1.js";import{c as p,n as i,l as t,o as g,p as d,T as m,q as u}from"./componentDocs-DuKQuNPh.js";import"./icons-DOidKO06.js";import"./index-CROobee-.js";const f={title:"Feedback/Dialog",component:i,tags:["autodocs"],parameters:{docs:{description:{component:p.Dialog}}}},e={render:()=>{const[l,n]=c.useState(!0);return o.jsxs(o.Fragment,{children:[o.jsx(t,{onClick:()=>n(!0),children:"Open dialog"}),o.jsxs(i,{open:l,onClose:()=>n(!1),children:[o.jsx(g,{children:"Dialog title"}),o.jsx(d,{children:o.jsx(m,{variant:"body2",children:"Dialog content."})}),o.jsx(u,{children:o.jsx(t,{variant:"text",onClick:()=>n(!1),children:"Close"})})]})]})}};var a,s,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogContent>
            <Typography variant="body2">Dialog content.</Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="text" onClick={() => setOpen(false)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const y=["Basic"];export{e as Basic,y as __namedExportsOrder,f as default};
