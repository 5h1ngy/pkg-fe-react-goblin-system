import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as d}from"./index-GiUgBvb1.js";import{c as m,ab as n,aa as b,a9 as t}from"./componentDocs-DuKQuNPh.js";import"./icons-DOidKO06.js";import"./index-CROobee-.js";const j={title:"Navigation/TabPanel",component:n,tags:["autodocs"],parameters:{docs:{description:{component:m.TabPanel}}}},a={render:l=>{const[c,u]=d.useState("one");return e.jsxs(e.Fragment,{children:[e.jsxs(b,{value:c,onChange:(p,i)=>u(i),children:[e.jsx(t,{value:"one",label:"First"}),e.jsx(t,{value:"two",label:"Second"})]}),e.jsx(n,{...l,value:"one",hidden:!1,children:"First content"}),e.jsx(n,{value:"two",children:"Second content"})]})}};var s,o,r;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number>('one');
    return <>
        <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
          <Tab value="one" label="First" />
          <Tab value="two" label="Second" />
        </Tabs>
        <TabPanel {...args} value="one" hidden={false}>
          First content
        </TabPanel>
        <TabPanel value="two">Second content</TabPanel>
      </>;
  }
}`,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const P=["Basic"];export{a as Basic,P as __namedExportsOrder,j as default};
