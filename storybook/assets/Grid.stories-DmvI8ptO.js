import{j as n}from"./jsx-runtime-CDt2p4po.js";import{c as a,O as o,M as d}from"./componentDocs-CT397LOo.js";import"./index-GiUgBvb1.js";import"./icons-C2y5CVOK.js";import"./index-CROobee-.js";const l={title:"Layout/Grid",component:o,tags:["autodocs"],parameters:{docs:{description:{component:a.Grid}}}},e={render:()=>n.jsx(o,{container:!0,spacing:2,children:Array.from({length:4}).map((m,r)=>n.jsx(o,{item:!0,xs:12,sm:6,children:n.jsxs(d,{sx:{padding:2,borderRadius:"0.5rem",backgroundColor:r%2===0?"#e3f2fd":"#e8f5e9",textAlign:"center"},children:["Item ",r+1]})},r))})};var s,t,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Grid container spacing={2}>
      {Array.from({
      length: 4
    }).map((_, index) => <Grid key={index} item xs={12} sm={6}>
          <Box sx={{
        padding: 2,
        borderRadius: '0.5rem',
        backgroundColor: index % 2 === 0 ? '#e3f2fd' : '#e8f5e9',
        textAlign: 'center'
      }}>
            Item {index + 1}
          </Box>
        </Grid>)}
    </Grid>
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const f=["Responsive"];export{e as Responsive,f as __namedExportsOrder,l as default};
