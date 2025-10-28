import{j as a}from"./jsx-runtime-DiklIkkE.js";import{T as he}from"./ThemeProvider-CSjwFnpO.js";import{r as ge}from"./index-DRjF_FHU.js";import{d as i,l as o}from"./styled-components.browser.esm-Dz5yS7sT.js";import"./theme-_dwbflR3.js";const xe=r=>{switch(r){case"small":return o`
        font-size: ${e=>{var s,t;return((t=(s=e.theme.typography)==null?void 0:s.fontSize)==null?void 0:t.xs)||"12px"}};
        padding: ${e=>{var s;return((s=e.theme.spacing)==null?void 0:s.xs)||"4px"}};
        height: 32px;
      `;case"large":return o`
        font-size: ${e=>{var s,t;return((t=(s=e.theme.typography)==null?void 0:s.fontSize)==null?void 0:t.md)||"16px"}};
        padding: ${e=>{var s;return((s=e.theme.spacing)==null?void 0:s.sm)||"8px"}};
        height: 48px;
      `;case"medium":default:return o`
        font-size: ${e=>{var s,t;return((t=(s=e.theme.typography)==null?void 0:s.fontSize)==null?void 0:t.sm)||"14px"}};
        padding: ${e=>{var s;return((s=e.theme.spacing)==null?void 0:s.xs)||"4px"}} ${e=>{var s;return((s=e.theme.spacing)==null?void 0:s.sm)||"8px"}};
        height: 40px;
      `}},be=i.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  width: ${r=>r.fullWidth?"100%":"auto"};
  margin-bottom: ${r=>r.mb||"0"};
  margin-top: ${r=>r.mt||"0"};
  margin-left: ${r=>r.ml||"0"};
  margin-right: ${r=>r.mr||"0"};
`,ye=i.label`
  display: block;
  margin-bottom: ${r=>{var e;return((e=r.theme.spacing)==null?void 0:e.xs)||"4px"}};
  font-size: ${r=>{var e,s;return((s=(e=r.theme.typography)==null?void 0:e.fontSize)==null?void 0:s.sm)||"14px"}};
  font-weight: ${r=>{var e,s;return((s=(e=r.theme.typography)==null?void 0:e.fontWeight)==null?void 0:s.medium)||"500"}};
  color: ${r=>{var e;return((e=r.theme.colors)==null?void 0:e.textPrimary)||"#000000"}};
  
  ${r=>r.required&&o`
    &::after {
      content: '*';
      color: ${e=>{var s;return((s=e.theme.colors)==null?void 0:s.danger)||"#ff4d4f"}};
      margin-left: ${e=>{var s;return((s=e.theme.spacing)==null?void 0:s.xs)||"4px"}};
    }
  `}
`,$e=i.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,ze=i.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: ${r=>{var e;return((e=r.theme.spacing)==null?void 0:e.sm)||"8px"}};
  top: 50%;
  transform: translateY(-50%);
  color: ${r=>{var e;return((e=r.theme.colors)==null?void 0:e.textSecondary)||"#666666"}};
  pointer-events: none;
`,Se=i.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: ${r=>{var e;return((e=r.theme.spacing)==null?void 0:e.sm)||"8px"}};
  top: 50%;
  transform: translateY(-50%);
  color: ${r=>{var e;return((e=r.theme.colors)==null?void 0:e.textSecondary)||"#666666"}};
  pointer-events: none;
  
  /* Allow clicking if it's a button or interactive element */
  button, a, [role="button"] {
    pointer-events: auto;
  }
`,we=i.input`
  /* Base styles */
  display: block;
  width: 100%;
  border-radius: ${r=>{var e;return((e=r.theme.radii)==null?void 0:e.md)||"6px"}};
  border: 1px solid ${r=>{var e;return((e=r.theme.colors)==null?void 0:e.borderBase)||"#d9d9d9"}};
  background-color: ${r=>{var e;return((e=r.theme.colors)==null?void 0:e.bgElevated)||"#ffffff"}};
  color: ${r=>{var e;return((e=r.theme.colors)==null?void 0:e.textPrimary)||"#000000"}};
  transition: all 0.2s ease-in-out;
  outline: none;
  
  /* Size variants */
  ${r=>xe(r.size||"medium")}
  
  /* Adjust padding if has prefix/suffix */
  ${r=>r.prefix&&o`
    padding-left: 2.5rem;
  `}
  
  ${r=>r.suffix&&o`
    padding-right: 2.5rem;
  `}
  
  /* Focus state */
  &:focus {
    border-color: ${r=>{var e;return((e=r.theme.colors)==null?void 0:e.primary)||"#1890ff"}};
    box-shadow: 0 0 0 2px ${r=>{var e;return`${((e=r.theme.colors)==null?void 0:e.primary)||"#1890ff"}33`}};
  }
  
  /* Error state */
  ${r=>r.error&&o`
    border-color: ${e=>{var s;return((s=e.theme.colors)==null?void 0:s.danger)||"#ff4d4f"}};
    
    &:focus {
      box-shadow: 0 0 0 2px ${e=>{var s;return`${((s=e.theme.colors)==null?void 0:s.danger)||"#ff4d4f"}33`}};
    }
  `}
  
  /* Success state */
  ${r=>r.success&&o`
    border-color: ${e=>{var s;return((s=e.theme.colors)==null?void 0:s.success)||"#52c41a"}};
    
    &:focus {
      box-shadow: 0 0 0 2px ${e=>{var s;return`${((s=e.theme.colors)==null?void 0:s.success)||"#52c41a"}33`}};
    }
  `}
  
  /* Disabled state */
  &:disabled {
    background-color: ${r=>{var e;return((e=r.theme.colors)==null?void 0:e.bgContainer)||"#f5f5f5"}};
    border-color: ${r=>{var e;return((e=r.theme.colors)==null?void 0:e.borderLight)||"#d9d9d9"}};
    color: ${r=>{var e;return((e=r.theme.colors)==null?void 0:e.textDisabled)||"#bfbfbf"}};
    cursor: not-allowed;
  }
  
  /* Placeholder styling */
  &::placeholder {
    color: ${r=>{var e;return((e=r.theme.colors)==null?void 0:e.textDisabled)||"#bfbfbf"}};
  }
`,ve=i.div`
  color: ${r=>{var e;return((e=r.theme.colors)==null?void 0:e.danger)||"#ff4d4f"}};
  font-size: ${r=>{var e,s;return((s=(e=r.theme.typography)==null?void 0:e.fontSize)==null?void 0:s.xs)||"12px"}};
  margin-top: ${r=>{var e;return((e=r.theme.spacing)==null?void 0:e.xs)||"4px"}};
`,z=ge.forwardRef(({size:r="medium",error:e=!1,success:s=!1,errorText:t,prefix:y,suffix:$,fullWidth:ie=!1,mb:ne,mt:le,ml:de,mr:ce,disabled:pe=!1,readOnly:me=!1,required:S=!1,label:w,...ue},fe)=>a.jsxs(be,{fullWidth:ie,mb:ne,mt:le,ml:de,mr:ce,children:[w&&a.jsx(ye,{required:S,children:w}),a.jsxs($e,{children:[y&&a.jsx(ze,{children:y}),a.jsx(we,{ref:fe,size:r,error:e,success:s,disabled:pe,readOnly:me,required:S,prefix:!!y,suffix:!!$,"aria-invalid":e?"true":"false",...ue}),$&&a.jsx(Se,{children:$})]}),e&&t&&a.jsx(ve,{children:t})]}));z.displayName="Input";z.__docgenInfo={description:`Input component for text-based form inputs

Features:
- Multiple size options (small, medium, large)
- Error and success states
- Prefix and suffix support
- Fully controlled or uncontrolled usage
- Label and error text support
- Ant Design styling with modern rounded aesthetics`,methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Input size variant",defaultValue:{value:"'medium'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Shows error styling",defaultValue:{value:"false",computed:!1}},success:{required:!1,tsType:{name:"boolean"},description:"Success state styling",defaultValue:{value:"false",computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:"Text to show when error is true"},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Prefix content before input"},suffix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Suffix content after input"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Makes input take full width of container",defaultValue:{value:"false",computed:!1}},mb:{required:!1,tsType:{name:"string"},description:"Add margin bottom"},mt:{required:!1,tsType:{name:"string"},description:"Add margin top"},ml:{required:!1,tsType:{name:"string"},description:"Add margin left"},mr:{required:!1,tsType:{name:"string"},description:"Add margin right"},value:{required:!1,tsType:{name:"string"},description:"Optional value for controlled inputs"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value for uncontrolled inputs"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the input",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Makes the input read-only",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"If true, shows a required asterisk",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label for the input"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"}},composes:["Omit"]};const je={title:"Components/Form/Input",component:z,parameters:{layout:"centered"},tags:["autodocs"],decorators:[r=>a.jsx(he,{children:a.jsx(r,{})})]},n={args:{placeholder:"Enter text",size:"medium"}},l={args:{label:"Username",placeholder:"Enter username",size:"medium"}},d={args:{placeholder:"Small input",size:"small"}},c={args:{placeholder:"Medium input",size:"medium"}},p={args:{placeholder:"Large input",size:"large"}},m={args:{placeholder:"Disabled input",size:"medium",disabled:!0}},u={args:{placeholder:"Input with error",size:"medium",error:!0,errorText:"This field is required"}},f={args:{placeholder:"Input with success",size:"medium",success:!0}},h={args:{placeholder:"Enter amount",size:"medium",prefix:"$"}},g={args:{placeholder:"Enter weight",size:"medium",suffix:"kg"}},x={args:{placeholder:"Enter password",size:"medium",type:"password"}},b={args:{placeholder:"Full width input",size:"medium",fullWidth:!0}};var v,T,q;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text',
    size: 'medium'
  }
}`,...(q=(T=n.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var E,W,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    size: 'medium'
  }
}`,...(I=(W=l.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var j,D,P;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small input',
    size: 'small'
  }
}`,...(P=(D=d.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var k,L,R;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: 'Medium input',
    size: 'medium'
  }
}`,...(R=(L=c.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var F,V,A;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    placeholder: 'Large input',
    size: 'large'
  }
}`,...(A=(V=p.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var M,N,O;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    size: 'medium',
    disabled: true
  }
}`,...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,C,B;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: 'Input with error',
    size: 'medium',
    error: true,
    errorText: 'This field is required'
  }
}`,...(B=(C=u.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var U,Y,G;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    placeholder: 'Input with success',
    size: 'medium',
    success: true
  }
}`,...(G=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var H,J,K;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter amount',
    size: 'medium',
    prefix: '$'
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter weight',
    size: 'medium',
    suffix: 'kg'
  }
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,se;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter password',
    size: 'medium',
    type: 'password'
  }
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,ae,oe;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    placeholder: 'Full width input',
    size: 'medium',
    fullWidth: true
  }
}`,...(oe=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const De=["Default","WithLabel","Small","Medium","Large","Disabled","WithError","WithSuccess","WithPrefix","WithSuffix","Password","FullWidth"];export{n as Default,m as Disabled,b as FullWidth,p as Large,c as Medium,x as Password,d as Small,u as WithError,l as WithLabel,h as WithPrefix,f as WithSuccess,g as WithSuffix,De as __namedExportsOrder,je as default};
