import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as t}from"./index-GiUgBvb1.js";import{c as m,ao as p,l as d}from"./componentDocs-DuKQuNPh.js";import"./icons-DOidKO06.js";import"./index-CROobee-.js";const x={title:"Utils/Popover",component:p,tags:["autodocs"],parameters:{docs:{description:{component:m.Popover}}}},o={render:()=>{const n=t.useRef(null),[l,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{ref:n,onClick:()=>r(i=>!i),children:"Toggle Popover"}),e.jsx(p,{anchorEl:n.current,open:l,onClose:()=>r(!1),children:e.jsx("div",{style:{padding:"1rem"},children:"Popover content"})})]})}};var s,a,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);
    return <>
        <Button ref={anchorRef} onClick={() => setOpen(prev => !prev)}>
          Toggle Popover
        </Button>
        <Popover anchorEl={anchorRef.current} open={open} onClose={() => setOpen(false)}>
          <div style={{
          padding: '1rem'
        }}>Popover content</div>
        </Popover>
      </>;
  }
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const P=["Basic"];export{o as Basic,P as __namedExportsOrder,x as default};
