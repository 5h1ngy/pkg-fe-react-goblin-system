import{j as a}from"./jsx-runtime-CDt2p4po.js";import{r as m}from"./index-GiUgBvb1.js";import{c as i,a9 as s,aa as p}from"./componentDocs-DuKQuNPh.js";import"./icons-DOidKO06.js";import"./index-CROobee-.js";const j={title:"Navigation/Tab",component:s,tags:["autodocs"],parameters:{docs:{description:{component:i.Tab}}}},e={render:o=>{const[l,c]=m.useState(o.value??"one");return a.jsxs(p,{value:l,onChange:(d,u)=>c(u),children:[a.jsx(s,{...o}),a.jsx(s,{value:"two",label:"Second"})]})},args:{value:"one",label:"First"}};var r,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'one');
    return <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
        <Tab {...args} />
        <Tab value="two" label="Second" />
      </Tabs>;
  },
  args: {
    value: 'one',
    label: 'First'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const S=["Basic"];export{e as Basic,S as __namedExportsOrder,j as default};
