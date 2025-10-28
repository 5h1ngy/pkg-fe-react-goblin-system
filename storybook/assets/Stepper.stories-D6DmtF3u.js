import{j as a}from"./jsx-runtime-CDt2p4po.js";import{c as i,a7 as n,a6 as c,a8 as d}from"./componentDocs-DuKQuNPh.js";import"./index-GiUgBvb1.js";import"./icons-DOidKO06.js";import"./index-CROobee-.js";const v={title:"Navigation/Stepper",component:n,tags:["autodocs"],parameters:{docs:{description:{component:i.Stepper}}}},t={render:s=>a.jsx(n,{...s,activeStep:1,alternativeLabel:!0,children:[0,1,2].map(e=>a.jsx(c,{index:e,children:a.jsx(d,{optional:e===2?"Optional":void 0,children:`Step ${e+1}`})},e))})};var r,p,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Stepper {...args} activeStep={1} alternativeLabel>
      {[0, 1, 2].map(index => <Step key={index} index={index}>
          <StepLabel optional={index === 2 ? 'Optional' : undefined}>{\`Step \${index + 1}\`}</StepLabel>
        </Step>)}
    </Stepper>
}`,...(o=(p=t.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};const b=["Basic"];export{t as Basic,b as __namedExportsOrder,v as default};
