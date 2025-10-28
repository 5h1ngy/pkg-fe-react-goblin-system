import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as b}from"./index-GiUgBvb1.js";import{c as T,aa as o,a9 as n,ab as t}from"./componentDocs-CT397LOo.js";import"./icons-C2y5CVOK.js";import"./index-CROobee-.js";const P={title:"Navigation/Tabs",component:o,tags:["autodocs"],parameters:{docs:{description:{component:T.Tabs}}}},a={render:()=>{const[u,c]=b.useState("one");return e.jsxs(e.Fragment,{children:[e.jsxs(o,{value:u,onChange:(i,m)=>c(m),children:[e.jsx(n,{value:"one",label:"Item One"}),e.jsx(n,{value:"two",label:"Item Two"}),e.jsx(n,{value:"three",label:"Item Three"})]}),e.jsx(t,{value:"one",children:"Panel One"}),e.jsx(t,{value:"two",children:"Panel Two"}),e.jsx(t,{value:"three",children:"Panel Three"})]})}};var r,l,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('one');
    return <>
        <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
          <Tab value="one" label="Item One" />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>
        <TabPanel value="one">Panel One</TabPanel>
        <TabPanel value="two">Panel Two</TabPanel>
        <TabPanel value="three">Panel Three</TabPanel>
      </>;
  }
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const j=["Basic"];export{a as Basic,j as __namedExportsOrder,P as default};
