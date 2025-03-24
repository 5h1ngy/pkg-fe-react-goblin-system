import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as b,z as e,w as a}from"./DynamicForm-MTWup2VI.js";import"./index-2yJIXLcc.js";import"./create-recipe-context-DAYCaBKX.js";import"./index-D-es_Zdh.js";import"./index-Bn05qqr6.js";import"./floating-ui.dom-DTz9C7ph.js";import"./index-DpIKLhr9.js";import"./checkbox-D7JvntL_.js";import"./create-slot-recipe-context-c444gZ9K.js";import"./attr-C3Jtgmrz.js";import"./use-environment-context-KKmzfobL.js";import"./checkbox.anatomy-ytVEQb2t.js";import"./box-Co8b1CQB.js";import"./icon-button-rke3f8fi.js";import"./omit-C1wxjnA0.js";import"./icon-C9K7CyD2.js";import"./v-stack-Bai6qWRu.js";import"./stack-6nd5Ls_2.js";import"./flex-kF3Sjibk.js";const A={title:"Components/Factory/DynamicForm",component:b,tags:["autodocs"],parameters:{layout:"centered"}},h=e.object({name:a(e.string().min(2),{label:"Name"}),age:a(e.number().min(18),{label:"Age"})}).superRefine(()=>{}),o={args:{width:"400px",schema:h,defaultValues:{name:"",age:18},onNext:(t,n)=>console.log(`Next step: ${t}, Complete: ${n}`),onBack:(t,n)=>console.log(`Back step: ${t}, Complete: ${n}`),render:(t,n,p,m)=>r.jsxs(r.Fragment,{children:[t,r.jsx("button",{onClick:()=>p==null?void 0:p(),children:"Next"}),r.jsx("button",{onClick:()=>m==null?void 0:m(),children:"Back"})]})}},s={args:{...o.args,schema:e.object({step1:a(e.string().min(3),{label:"Step 1",step:0}),step2:a(e.string().min(3),{label:"Step 2",step:1})}).superRefine(()=>{})}};var i,c,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const O=["Default","WithSteps"];export{o as Default,s as WithSteps,O as __namedExportsOrder,A as default};
