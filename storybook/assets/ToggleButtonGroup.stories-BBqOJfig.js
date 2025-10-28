import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as c}from"./index-GiUgBvb1.js";import{c as p,J as a,H as o}from"./componentDocs-DuKQuNPh.js";import"./icons-DOidKO06.js";import"./index-CROobee-.js";const T={title:"Inputs/ToggleButtonGroup",component:a,tags:["autodocs"],parameters:{docs:{description:{component:p.ToggleButtonGroup}}}},t={render:()=>{const[l,g]=c.useState("left");return e.jsxs(a,{value:l,onChange:(i,r)=>typeof r=="string"&&g(r),children:[e.jsx(o,{value:"left",children:"Left"}),e.jsx(o,{value:"center",children:"Center"}),e.jsx(o,{value:"right",children:"Right"})]})}};var n,s,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('left');
    return <ToggleButtonGroup value={value} onChange={(_, newValue) => typeof newValue === 'string' && setValue(newValue)}>
        <ToggleButton value="left">Left</ToggleButton>
        <ToggleButton value="center">Center</ToggleButton>
        <ToggleButton value="right">Right</ToggleButton>
      </ToggleButtonGroup>;
  }
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const x=["Exclusive"];export{t as Exclusive,x as __namedExportsOrder,T as default};
