import{j as t}from"./jsx-runtime-DiklIkkE.js";import{T as fe}from"./ThemeProvider-CSjwFnpO.js";import{r as C,R as h}from"./index-DRjF_FHU.js";import{d as m,l}from"./styled-components.browser.esm-Dz5yS7sT.js";import"./theme-_dwbflR3.js";const be=e=>{switch(e){case"small":return l`
        width: 14px;
        height: 14px;
      `;case"large":return l`
        width: 20px;
        height: 20px;
      `;case"medium":default:return l`
        width: 16px;
        height: 16px;
      `}},he=m.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: ${e=>e.mb||"0"};
  margin-top: ${e=>e.mt||"0"};
  margin-left: ${e=>e.ml||"0"};
  margin-right: ${e=>e.mr||"0"};
`,xe=m.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`,ye=m.div`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${e=>{var r;return((r=e.theme.colors)==null?void 0:r.bgElevated)||"#ffffff"}};
  border: 1px solid ${e=>{var r,a;return e.checked?((r=e.theme.colors)==null?void 0:r.primary)||"#1890ff":((a=e.theme.colors)==null?void 0:a.borderBase)||"#d9d9d9"}};
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  
  /* Size variant */
  ${e=>be(e.size)}
  
  /* Error state */
  ${e=>e.error&&l`
    border-color: ${r=>{var a;return((a=r.theme.colors)==null?void 0:a.danger)||"#ff4d4f"}};
  `}
  
  /* Disabled state */
  ${e=>e.disabled&&l`
    opacity: 0.5;
    background-color: ${r=>{var a;return((a=r.theme.colors)==null?void 0:a.bgContainer)||"#f5f5f5"}};
  `}
  
  /* Focus style applied when parent is focused */
  input:focus + & {
    box-shadow: 0 0 0 2px ${e=>{var r;return`${((r=e.theme.colors)==null?void 0:r.primary)||"#1890ff"}33`}};
  }
  
  /* Inner circle when checked */
  &::after {
    content: '';
    display: ${e=>e.checked?"block":"none"};
    width: ${e=>{switch(e.size){case"small":return"6px";case"large":return"10px";case"medium":default:return"8px"}}};
    height: ${e=>{switch(e.size){case"small":return"6px";case"large":return"10px";case"medium":default:return"8px"}}};
    border-radius: 50%;
    background-color: ${e=>{var r;return((r=e.theme.colors)==null?void 0:r.primary)||"#1890ff"}};
  }
`,ve=m.label`
  display: inline-flex;
  align-items: center;
  user-select: none;
  color: ${e=>{var r,a;return e.disabled?((r=e.theme.colors)==null?void 0:r.textDisabled)||"#bfbfbf":((a=e.theme.colors)==null?void 0:a.textPrimary)||"#000000"}};
  margin-left: ${e=>{var r;return((r=e.theme.spacing)==null?void 0:r.sm)||"8px"}};
  
  /* Size variant */
  font-size: ${e=>{var r,a,i,n,d,u;switch(e.size){case"small":return((a=(r=e.theme.typography)==null?void 0:r.fontSize)==null?void 0:a.xs)||"12px";case"large":return((n=(i=e.theme.typography)==null?void 0:i.fontSize)==null?void 0:n.md)||"16px";default:return((u=(d=e.theme.typography)==null?void 0:d.fontSize)==null?void 0:u.sm)||"14px"}}};
  
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,me=m.div`
  color: ${e=>{var r;return((r=e.theme.colors)==null?void 0:r.danger)||"#ff4d4f"}};
  font-size: ${e=>{var r,a;return((a=(r=e.theme.typography)==null?void 0:r.fontSize)==null?void 0:a.xs)||"12px"}};
  margin-top: ${e=>{var r;return((r=e.theme.spacing)==null?void 0:r.xs)||"4px"}};
`,Re=m.div`
  display: flex;
  flex-direction: ${e=>e.layout==="horizontal"?"row":"column"};
  margin-bottom: ${e=>e.mb||"0"};
  margin-top: ${e=>e.mt||"0"};
  margin-left: ${e=>e.ml||"0"};
  margin-right: ${e=>e.mr||"0"};
  
  ${e=>e.layout==="horizontal"&&l`
    & > * {
      margin-right: ${r=>{var a;return((a=r.theme.spacing)==null?void 0:a.md)||"16px"}};
      
      &:last-child {
        margin-right: 0;
      }
    }
  `}
  
  ${e=>e.layout==="vertical"&&l`
    & > * {
      margin-bottom: ${r=>{var a;return((a=r.theme.spacing)==null?void 0:a.sm)||"8px"}};
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  `}
`,o=C.forwardRef(({label:e,error:r=!1,errorText:a,size:i="medium",mb:n,mt:d,ml:u,mr:g,checked:f=!1,defaultChecked:j,disabled:p=!1,className:O,onChange:V,...k},G)=>{const b=C.useId();return t.jsxs("div",{children:[t.jsxs(he,{mb:n,mt:d,ml:u,mr:g,className:O,children:[t.jsx(xe,{id:b,ref:G,checked:f,defaultChecked:j,disabled:p,onChange:V,...k}),t.jsx(ye,{checked:f,disabled:p,error:r,size:i}),e&&t.jsx(ve,{htmlFor:b,disabled:p,size:i,children:e})]}),r&&a&&t.jsx(me,{children:a})]})}),c=({children:e,name:r,defaultValue:a,value:i,onChange:n,layout:d="vertical",error:u=!1,errorText:g,size:f="medium",disabled:j=!1,mb:p,mt:O,ml:V,mr:k})=>{const[G,b]=h.useState(a),pe=i!==void 0?i:G,ce=s=>{const E=s.target.value;i===void 0&&b(E),n&&n(E)},ge=h.Children.map(e,s=>h.isValidElement(s)?h.cloneElement(s,{name:r,checked:s.props.value===pe,size:f,disabled:j||s.props.disabled,onChange:ce}):s);return t.jsxs("div",{children:[t.jsx(Re,{layout:d,mb:p,mt:O,ml:V,mr:k,children:ge}),u&&g&&t.jsx(me,{children:g})]})};o.displayName="Radio";o.Group=c;c.__docgenInfo={description:`RadioGroup component for grouping multiple radio buttons

Features:
- Horizontal or vertical layout
- Controlled and uncontrolled usage
- Error state with error message
- Propagates size and disabled state to children
- Ant Design styling with modern rounded aesthetics`,methods:[],displayName:"RadioGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children radio buttons"},name:{required:!0,tsType:{name:"string"},description:"Name attribute to group radio buttons"},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Default value for uncontrolled group"},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Current value for controlled group"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:"Callback fired when value changes"},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Radio buttons layout - horizontal or vertical",defaultValue:{value:"'vertical'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:"Text to show when error is true"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of all radio buttons in the group",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables all radio buttons in the group",defaultValue:{value:"false",computed:!1}},mb:{required:!1,tsType:{name:"string"},description:"Add margin bottom"},mt:{required:!1,tsType:{name:"string"},description:"Add margin top"},ml:{required:!1,tsType:{name:"string"},description:"Add margin left"},mr:{required:!1,tsType:{name:"string"},description:"Add margin right"}}};o.__docgenInfo={description:`Radio component for selecting single items in a list

Features:
- Multiple size options (small, medium, large)
- Error state with error message
- Disabled state
- Label support
- Ant Design styling with modern rounded aesthetics`,methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Label text for the radio button"},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:"Text to show when error is true"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the radio button",defaultValue:{value:"'medium'",computed:!1}},mb:{required:!1,tsType:{name:"string"},description:"Add margin bottom"},mt:{required:!1,tsType:{name:"string"},description:"Add margin top"},ml:{required:!1,tsType:{name:"string"},description:"Add margin left"},mr:{required:!1,tsType:{name:"string"},description:"Add margin right"},checked:{required:!1,tsType:{name:"boolean"},description:"Controls checked state",defaultValue:{value:"false",computed:!1}},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state for uncontrolled components"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the radio button",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Value of the radio button"},name:{required:!1,tsType:{name:"string"},description:"Name attribute to group radio buttons"}},composes:["Omit"]};const qe={title:"Components/Form/Radio",component:o,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>t.jsx(fe,{children:t.jsx(e,{})})]},x={args:{label:"Radio option"}},y={args:{label:"Selected option",checked:!0}},v={args:{label:"Disabled option",disabled:!0}},R={args:{label:"Radio with error",error:!0,errorText:"This field is required"}},z={args:{label:"Small radio",size:"small"}},w={args:{label:"Medium radio",size:"medium"}},T={args:{label:"Large radio",size:"large"}},S={render:()=>t.jsxs(c,{name:"options-vertical",defaultValue:"option1",children:[t.jsx(o,{value:"option1",label:"Option 1"}),t.jsx(o,{value:"option2",label:"Option 2"}),t.jsx(o,{value:"option3",label:"Option 3"}),t.jsx(o,{value:"option4",label:"Option 4",disabled:!0})]})},$={render:()=>t.jsxs(c,{name:"options-horizontal",defaultValue:"option2",layout:"horizontal",children:[t.jsx(o,{value:"option1",label:"Option 1"}),t.jsx(o,{value:"option2",label:"Option 2"}),t.jsx(o,{value:"option3",label:"Option 3"})]})},q={render:()=>t.jsxs(c,{name:"options-error",error:!0,errorText:"Please select an option",children:[t.jsx(o,{value:"option1",label:"Option 1"}),t.jsx(o,{value:"option2",label:"Option 2"}),t.jsx(o,{value:"option3",label:"Option 3"})]})};var D,A,N;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Radio option'
  }
}`,...(N=(A=x.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var L,_,F;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Selected option',
    checked: true
  }
}`,...(F=(_=y.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var M,P,H;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Disabled option',
    disabled: true
  }
}`,...(H=(P=v.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var I,B,J;R.parameters={...R.parameters,docs:{...(I=R.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Radio with error',
    error: true,
    errorText: 'This field is required'
  }
}`,...(J=(B=R.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,Q,U;z.parameters={...z.parameters,docs:{...(K=z.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Small radio',
    size: 'small'
  }
}`,...(U=(Q=z.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Medium radio',
    size: 'medium'
  }
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Large radio',
    size: 'large'
  }
}`,...(re=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,oe;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <RadioGroup name="options-vertical" defaultValue="option1">
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
      <Radio value="option4" label="Option 4" disabled />
    </RadioGroup>
}`,...(oe=(te=S.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ie,ne,se;$.parameters={...$.parameters,docs:{...(ie=$.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <RadioGroup name="options-horizontal" defaultValue="option2" layout="horizontal">
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
}`,...(se=(ne=$.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var le,de,ue;q.parameters={...q.parameters,docs:{...(le=q.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <RadioGroup name="options-error" error={true} errorText="Please select an option">
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
}`,...(ue=(de=q.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const je=["Default","Checked","Disabled","Error","SmallSize","MediumSize","LargeSize","RadioGroupVertical","RadioGroupHorizontal","RadioGroupError"];export{y as Checked,x as Default,v as Disabled,R as Error,T as LargeSize,w as MediumSize,q as RadioGroupError,$ as RadioGroupHorizontal,S as RadioGroupVertical,z as SmallSize,je as __namedExportsOrder,qe as default};
