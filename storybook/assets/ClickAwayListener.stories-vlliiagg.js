import{j as s}from"./jsx-runtime-CDt2p4po.js";import{r as c}from"./index-GiUgBvb1.js";import{c as d,al as a}from"./componentDocs-DuKQuNPh.js";import"./icons-DOidKO06.js";import"./index-CROobee-.js";const k={title:"Utils/ClickAwayListener",component:a,tags:["autodocs"],parameters:{docs:{description:{component:d.ClickAwayListener}}}},e={render:()=>{const[r,i]=c.useState(!0);return s.jsx(a,{onClickAway:()=>i(!1),children:s.jsx("div",{style:{padding:"1rem",background:r?"#e3f2fd":"#f5f5f5",borderRadius:"0.5rem"},children:r?"Click outside me":"Closed"})})}};var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div style={{
        padding: '1rem',
        background: open ? '#e3f2fd' : '#f5f5f5',
        borderRadius: '0.5rem'
      }}>
          {open ? 'Click outside me' : 'Closed'}
        </div>
      </ClickAwayListener>;
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const C=["Basic"];export{e as Basic,C as __namedExportsOrder,k as default};
