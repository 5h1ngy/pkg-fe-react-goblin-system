import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{D as b,z as e,w as a}from"./DynamicForm-J8A9ZIio.js";import"./index-CFahbR6w.js";import"./create-recipe-context-_8bgquqP.js";import"./index-BHL8jL0s.js";import"./index-chp1rBSu.js";import"./floating-ui.dom-DTz9C7ph.js";import"./index-DTyY48lw.js";import"./checkbox-CG2T94UG.js";import"./stack-C7r7ZhPl.js";import"./attr-C3Jtgmrz.js";import"./use-environment-context-C3WQxcjj.js";import"./checkbox.anatomy-DVTTplQt.js";import"./box-CKOsCi38.js";import"./icon-button-CFWI_TPI.js";import"./omit-DMKC3Nzx.js";import"./v-stack-DNJm09El.js";import"./flex-DSRmREoO.js";const V={title:"Components/Factory/DynamicForm",component:b,tags:["autodocs"],parameters:{layout:"centered"}},h=e.object({name:a(e.string().min(2),{label:"Name"}),age:a(e.number().min(18),{label:"Age"})}).superRefine(()=>{}),o={args:{width:"400px",schema:h,defaultValues:{name:"",age:18},onNext:(t,n)=>console.log(`Next step: ${t}, Complete: ${n}`),onBack:(t,n)=>console.log(`Back step: ${t}, Complete: ${n}`),render:(t,n,p,m)=>s.jsxs(s.Fragment,{children:[t,s.jsx("button",{onClick:()=>p==null?void 0:p(),children:"Next"}),s.jsx("button",{onClick:()=>m==null?void 0:m(),children:"Back"})]})}},r={args:{...o.args,schema:e.object({step1:a(e.string().min(3),{label:"Step 1",step:0}),step2:a(e.string().min(3),{label:"Step 2",step:1})}).superRefine(()=>{})}};var i,c,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    width: '400px',
    schema,
    defaultValues: {
      name: '',
      age: 18
    },
    onNext: (step, complete) => console.log(\`Next step: \${step}, Complete: \${complete}\`),
    onBack: (step, complete) => console.log(\`Back step: \${step}, Complete: \${complete}\`),
    render: (rows, _onSubmit, next, back) => <>
        {rows}
        <button onClick={() => next?.()}>Next</button>
        <button onClick={() => back?.()}>Back</button>
      </>
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    schema: z.object({
      step1: withMeta(z.string().min(3), {
        label: 'Step 1',
        step: 0
      }),
      step2: withMeta(z.string().min(3), {
        label: 'Step 2',
        step: 1
      })
    }).superRefine(() => {})
  }
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const W=["Default","WithSteps"];export{o as Default,r as WithSteps,W as __namedExportsOrder,V as default};
