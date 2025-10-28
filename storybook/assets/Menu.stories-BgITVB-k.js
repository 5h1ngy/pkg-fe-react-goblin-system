import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as s}from"./index-GiUgBvb1.js";import{c as p,a1 as l,a2 as t}from"./componentDocs-DuKQuNPh.js";import"./icons-DOidKO06.js";import"./index-CROobee-.js";const g={title:"Navigation/Menu",component:l,tags:["autodocs"],parameters:{docs:{description:{component:p.Menu}}}},n={render:()=>{const o=s.useRef(null),[m,r]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{ref:o,onClick:()=>r(!0),children:"Open Menu"}),e.jsxs(l,{anchorEl:o.current,open:m,onClose:()=>r(!1),children:[e.jsx(t,{children:"Profile"}),e.jsx(t,{children:"Settings"}),e.jsx(t,{children:"Logout"})]})]})}};var u,a,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);
    return <>
        <button ref={buttonRef} onClick={() => setOpen(true)}>
          Open Menu
        </button>
        <Menu anchorEl={buttonRef.current} open={open} onClose={() => setOpen(false)}>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </>;
  }
}`,...(c=(a=n.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const h=["Basic"];export{n as Basic,h as __namedExportsOrder,g as default};
