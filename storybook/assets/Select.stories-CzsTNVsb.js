import{j as a}from"./jsx-runtime-DiklIkkE.js";import{T as ue}from"./ThemeProvider-CSjwFnpO.js";import{r as fe}from"./index-DRjF_FHU.js";import{d as i,l}from"./styled-components.browser.esm-Dz5yS7sT.js";import"./theme-_dwbflR3.js";const he=o=>{switch(o){case"small":return l`
        font-size: ${e=>{var r,s;return((s=(r=e.theme.typography)==null?void 0:r.fontSize)==null?void 0:s.xs)||"12px"}};
        padding: ${e=>{var r;return((r=e.theme.spacing)==null?void 0:r.xs)||"4px"}} ${e=>{var r;return((r=e.theme.spacing)==null?void 0:r.sm)||"8px"}};
        height: 32px;
      `;case"large":return l`
        font-size: ${e=>{var r,s;return((s=(r=e.theme.typography)==null?void 0:r.fontSize)==null?void 0:s.md)||"16px"}};
        padding: ${e=>{var r;return((r=e.theme.spacing)==null?void 0:r.sm)||"8px"}} ${e=>{var r;return((r=e.theme.spacing)==null?void 0:r.lg)||"24px"}};
        height: 48px;
      `;case"medium":default:return l`
        font-size: ${e=>{var r,s;return((s=(r=e.theme.typography)==null?void 0:r.fontSize)==null?void 0:s.sm)||"14px"}};
        padding: ${e=>{var r;return((r=e.theme.spacing)==null?void 0:r.xs)||"4px"}} ${e=>{var r;return((r=e.theme.spacing)==null?void 0:r.md)||"16px"}};
        height: 40px;
      `}},ge=i.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  width: ${o=>o.fullWidth?"100%":"auto"};
  margin-bottom: ${o=>o.mb||"0"};
  margin-top: ${o=>o.mt||"0"};
  margin-left: ${o=>o.ml||"0"};
  margin-right: ${o=>o.mr||"0"};
`,be=i.label`
  display: block;
  margin-bottom: ${o=>{var e;return((e=o.theme.spacing)==null?void 0:e.xs)||"4px"}};
  font-size: ${o=>{var e,r;return((r=(e=o.theme.typography)==null?void 0:e.fontSize)==null?void 0:r.sm)||"14px"}};
  font-weight: ${o=>{var e,r;return((r=(e=o.theme.typography)==null?void 0:e.fontWeight)==null?void 0:r.medium)||"500"}};
  color: ${o=>{var e;return((e=o.theme.colors)==null?void 0:e.textPrimary)||"#000000"}};
  
  ${o=>o.required&&l`
    &::after {
      content: '*';
      color: ${e=>{var r;return((r=e.theme.colors)==null?void 0:r.danger)||"#ff4d4f"}};
      margin-left: ${e=>{var r;return((r=e.theme.spacing)==null?void 0:r.xs)||"4px"}};
    }
  `}
`,xe=i.div`
  position: relative;
  display: flex;
  width: 100%;
  
  /* Custom arrow indicator for select */
  &::after {
    content: '';
    position: absolute;
    right: ${o=>{var e;return((e=o.theme.spacing)==null?void 0:e.md)||"16px"}};
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${o=>{var e;return((e=o.theme.colors)==null?void 0:e.textSecondary)||"#8c8c8c"}};
    pointer-events: none;
  }
`,ye=i.select`
  /* Base styles */
  display: block;
  width: 100%;
  appearance: none;
  border-radius: ${o=>{var e;return((e=o.theme.radii)==null?void 0:e.md)||"6px"}};
  border: 1px solid ${o=>{var e;return((e=o.theme.colors)==null?void 0:e.borderBase)||"#d9d9d9"}};
  background-color: ${o=>{var e;return((e=o.theme.colors)==null?void 0:e.bgElevated)||"#ffffff"}};
  color: ${o=>{var e;return((e=o.theme.colors)==null?void 0:e.textPrimary)||"#000000"}};
  transition: all 0.2s ease-in-out;
  outline: none;
  cursor: pointer;
  padding-right: ${o=>{var e;return((e=o.theme.spacing)==null?void 0:e.xl)||"32px"}}; /* Space for custom arrow */
  
  /* Size variants */
  ${o=>he(o.size||"medium")}
  
  /* Focus state */
  &:focus {
    border-color: ${o=>{var e;return((e=o.theme.colors)==null?void 0:e.primary)||"#1890ff"}};
    box-shadow: 0 0 0 2px ${o=>{var e;return`${((e=o.theme.colors)==null?void 0:e.primary)||"#1890ff"}33`}};
  }
  
  /* Error state */
  ${o=>o.error&&l`
    border-color: ${e=>{var r;return((r=e.theme.colors)==null?void 0:r.danger)||"#ff4d4f"}};
    
    &:focus {
      box-shadow: 0 0 0 2px ${e=>{var r;return`${((r=e.theme.colors)==null?void 0:r.danger)||"#ff4d4f"}33`}};
    }
  `}
  
  /* Success state */
  ${o=>o.success&&l`
    border-color: ${e=>{var r;return((r=e.theme.colors)==null?void 0:r.success)||"#52c41a"}};
    
    &:focus {
      box-shadow: 0 0 0 2px ${e=>{var r;return`${((r=e.theme.colors)==null?void 0:r.success)||"#52c41a"}33`}};
    }
  `}
  
  /* Disabled state */
  &:disabled {
    background-color: ${o=>{var e;return((e=o.theme.colors)==null?void 0:e.bgContainer)||"#f5f5f5"}};
    border-color: ${o=>{var e;return((e=o.theme.colors)==null?void 0:e.borderLight)||"#e8e8e8"}};
    color: ${o=>{var e;return((e=o.theme.colors)==null?void 0:e.textDisabled)||"#bfbfbf"}};
    cursor: not-allowed;
  }
  
  /* Style for option elements */
  & option {
    background-color: ${o=>{var e;return((e=o.theme.colors)==null?void 0:e.bgElevated)||"#ffffff"}};
    color: ${o=>{var e;return((e=o.theme.colors)==null?void 0:e.textPrimary)||"#000000"}};
    padding: ${o=>{var e;return((e=o.theme.spacing)==null?void 0:e.sm)||"8px"}};
  }
  
  & option:disabled {
    color: ${o=>{var e;return((e=o.theme.colors)==null?void 0:e.textDisabled)||"#bfbfbf"}};
  }
`,$e=i.div`
  color: ${o=>{var e;return((e=o.theme.colors)==null?void 0:e.danger)||"#ff4d4f"}};
  font-size: ${o=>{var e,r;return((r=(e=o.theme.typography)==null?void 0:e.fontSize)==null?void 0:r.xs)||"12px"}};
  margin-top: ${o=>{var e;return((e=o.theme.spacing)==null?void 0:e.xs)||"4px"}};
`,$=fe.forwardRef(({options:o,size:e="medium",error:r=!1,success:s=!1,errorText:S,fullWidth:te=!1,mb:ae,mt:le,ml:ie,mr:ne,disabled:de=!1,readOnly:pe=!1,required:v=!1,label:w,placeholder:q,...ce},me)=>a.jsxs(ge,{fullWidth:te,mb:ae,mt:le,ml:ie,mr:ne,children:[w&&a.jsx(be,{required:v,children:w}),a.jsx(xe,{children:a.jsxs(ye,{ref:me,size:e,error:r,success:s,disabled:de||pe,required:v,"aria-invalid":r?"true":"false",...ce,children:[q&&a.jsx("option",{value:"",disabled:!0,children:q}),o.map(n=>a.jsx("option",{value:n.value,disabled:n.disabled,children:n.label},n.value))]})}),r&&S&&a.jsx($e,{children:S})]}));$.displayName="Select";$.__docgenInfo={description:`Select component for dropdowns

Features:
- Multiple size options (small, medium, large)
- Error and success states
- Customizable options
- Placeholder support
- Disabled options
- Label support
- Ant Design styling with modern rounded aesthetics`,methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"Options to display in the select dropdown"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Select size variant",defaultValue:{value:"'medium'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Shows error styling",defaultValue:{value:"false",computed:!1}},success:{required:!1,tsType:{name:"boolean"},description:"Success state styling",defaultValue:{value:"false",computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:"Text to show when error is true"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Makes select take full width of container",defaultValue:{value:"false",computed:!1}},mb:{required:!1,tsType:{name:"string"},description:"Add margin bottom"},mt:{required:!1,tsType:{name:"string"},description:"Add margin top"},ml:{required:!1,tsType:{name:"string"},description:"Add margin left"},mr:{required:!1,tsType:{name:"string"},description:"Add margin right"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the select",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Makes the select read-only",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"If true, shows a required asterisk",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label for the select"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text (shown as first disabled option)"}},composes:["Omit"]};const Oe={title:"Components/Form/Select",component:$,parameters:{layout:"centered"},tags:["autodocs"],decorators:[o=>a.jsx(ue,{children:a.jsx(o,{})})]},t=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}],Se=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3",disabled:!0},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}],d={args:{options:t}},p={args:{label:"Select an option",options:t}},c={args:{placeholder:"Select an option",options:t}},m={args:{size:"small",options:t}},u={args:{size:"medium",options:t}},f={args:{size:"large",options:t}},h={args:{disabled:!0,options:t,placeholder:"Disabled select"}},g={args:{options:Se,placeholder:"Select with disabled option"}},b={args:{options:t,error:!0,errorText:"Please select a valid option"}},x={args:{options:t,required:!0,label:"Required field"}},y={args:{options:t,fullWidth:!0,placeholder:"Full width select"}};var z,T,O;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    options: options
  }
}`,...(O=(T=d.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var D,W,j;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Select an option',
    options: options
  }
}`,...(j=(W=p.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var E,P,k;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    options: options
  }
}`,...(k=(P=c.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var L,F,V;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'small',
    options: options
  }
}`,...(V=(F=m.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var A,R,C;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    options: options
  }
}`,...(C=(R=u.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var M,_,B;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'large',
    options: options
  }
}`,...(B=(_=f.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var I,N,Y;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options: options,
    placeholder: 'Disabled select'
  }
}`,...(Y=(N=h.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var G,H,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    options: optionsWithDisabled,
    placeholder: 'Select with disabled option'
  }
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    options: options,
    error: true,
    errorText: 'Please select a valid option'
  }
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    options: options,
    required: true,
    label: 'Required field'
  }
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,re,se;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    options: options,
    fullWidth: true,
    placeholder: 'Full width select'
  }
}`,...(se=(re=y.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const De=["Default","WithLabel","WithPlaceholder","Small","Medium","Large","Disabled","DisabledOptions","WithError","Required","FullWidth"];export{d as Default,h as Disabled,g as DisabledOptions,y as FullWidth,f as Large,u as Medium,x as Required,m as Small,b as WithError,p as WithLabel,c as WithPlaceholder,De as __namedExportsOrder,Oe as default};
