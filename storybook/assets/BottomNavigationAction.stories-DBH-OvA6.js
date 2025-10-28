import{j as a}from"./jsx-runtime-CDt2p4po.js";import{r as u}from"./index-GiUgBvb1.js";import{c as l,Z as e,Y as v}from"./componentDocs-CT397LOo.js";import"./icons-C2y5CVOK.js";import"./index-CROobee-.js";const b={title:"Navigation/BottomNavigationAction",component:e,tags:["autodocs"],parameters:{docs:{description:{component:l.BottomNavigationAction}}}},t={render:o=>{const[i,c]=u.useState(o.value??0);return a.jsxs(v,{value:i,onChange:(p,m)=>c(m),children:[a.jsx(e,{...o}),a.jsx(e,{label:"Next",value:1})]})},args:{label:"Current",value:0}};var r,s,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 0);
    return <BottomNavigation value={value} onChange={(_, newValue) => setValue(newValue as number)}>
        <BottomNavigationAction {...args} />
        <BottomNavigationAction label="Next" value={1} />
      </BottomNavigation>;
  },
  args: {
    label: 'Current',
    value: 0
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const j=["Basic"];export{t as Basic,j as __namedExportsOrder,b as default};
