import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as c}from"./index-GiUgBvb1.js";import{c as u,Y as i,Z as a}from"./componentDocs-DuKQuNPh.js";import"./icons-DOidKO06.js";import"./index-CROobee-.js";const b={title:"Navigation/BottomNavigation",component:i,tags:["autodocs"],parameters:{docs:{description:{component:u.BottomNavigation}}}},e={render:()=>{const[l,m]=c.useState(0);return t.jsxs(i,{value:l,onChange:(v,o)=>typeof o=="number"&&m(o),children:[t.jsx(a,{label:"Recents",value:0}),t.jsx(a,{label:"Favorites",value:1}),t.jsx(a,{label:"Nearby",value:2})]})}};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <BottomNavigation value={value} onChange={(_, newValue) => typeof newValue === 'number' && setValue(newValue)}>
        <BottomNavigationAction label="Recents" value={0} />
        <BottomNavigationAction label="Favorites" value={1} />
        <BottomNavigationAction label="Nearby" value={2} />
      </BottomNavigation>;
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const x=["Basic"];export{e as Basic,x as __namedExportsOrder,b as default};
