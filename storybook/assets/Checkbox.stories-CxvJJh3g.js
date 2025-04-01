import{j as r}from"./jsx-runtime-DiklIkkE.js";import{T as oe}from"./ThemeProvider-CSjwFnpO.js";import{r as y}from"./index-DRjF_FHU.js";import{d as p,l as n}from"./styled-components.browser.esm-Dz5yS7sT.js";import"./theme-_dwbflR3.js";const re=e=>{switch(e){case"small":return n`
        width: 14px;
        height: 14px;
      `;case"large":return n`
        width: 20px;
        height: 20px;
      `;case"medium":default:return n`
        width: 16px;
        height: 16px;
      `}},ae=p.div`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  margin-bottom: ${e=>e.mb||"0"};
  margin-top: ${e=>e.mt||"0"};
  margin-left: ${e=>e.ml||"0"};
  margin-right: ${e=>e.mr||"0"};
`,se=p.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`,ce=p.div`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${e=>{var t,o;return e.checked||e.indeterminate?((t=e.theme.colors)==null?void 0:t.primary)||"#1890ff":((o=e.theme.colors)==null?void 0:o.bgElevated)||"#ffffff"}};
  border: 1px solid ${e=>{var t,o;return e.checked||e.indeterminate?((t=e.theme.colors)==null?void 0:t.primary)||"#1890ff":((o=e.theme.colors)==null?void 0:o.borderBase)||"#d9d9d9"}};
  border-radius: ${e=>{var t;return((t=e.theme.radii)==null?void 0:t.sm)||"2px"}};
  transition: all 0.2s ease-in-out;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  
  /* Size variant */
  ${e=>re(e.size)}
  
  /* Error state */
  ${e=>e.error&&n`
    border-color: ${t=>{var o;return((o=t.theme.colors)==null?void 0:o.danger)||"#ff4d4f"}};
  `}
  
  /* Disabled state */
  ${e=>e.disabled&&n`
    opacity: 0.5;
    background-color: ${t=>{var o;return((o=t.theme.colors)==null?void 0:o.bgContainer)||"#f5f5f5"}};
  `}
  
  /* Focus style applied when parent is focused */
  input:focus + & {
    box-shadow: 0 0 0 2px ${e=>{var t;return`${((t=e.theme.colors)==null?void 0:t.primary)||"#1890ff"}33`}};
  }
  
  /* Check/indeterminate mark */
  &::after {
    content: '';
    display: ${e=>e.checked||e.indeterminate?"block":"none"};
    width: ${e=>e.indeterminate?"8px":"5px"};
    height: ${e=>e.indeterminate?"2px":"8px"};
    border-style: solid;
    border-color: white;
    
    ${e=>e.indeterminate?n`
          border-width: 0 0 2px 0;
          transform: rotate(0deg);
        `:n`
          border-width: 0 2px 2px 0;
          transform: rotate(45deg) translate(-1px, -1px);
        `}
  }
`,ne=p.label`
  display: inline-flex;
  align-items: center;
  margin-left: ${e=>{switch(e.size){case"small":return"6px";case"large":return"10px";default:return"8px"}}};
  font-size: ${e=>{var t,o,s,c,i,m;switch(e.size){case"small":return((o=(t=e.theme.typography)==null?void 0:t.fontSize)==null?void 0:o.xs)||"12px";case"large":return((c=(s=e.theme.typography)==null?void 0:s.fontSize)==null?void 0:c.md)||"16px";default:return((m=(i=e.theme.typography)==null?void 0:i.fontSize)==null?void 0:m.sm)||"14px"}}};
  color: ${e=>{var t,o;return e.disabled?((t=e.theme.colors)==null?void 0:t.textDisabled)||"#bfbfbf":((o=e.theme.colors)==null?void 0:o.textPrimary)||"#000000"}};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  user-select: none;
`,ie=p.div`
  color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t.danger)||"#ff4d4f"}};
  font-size: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontSize)==null?void 0:o.xs)||"12px"}};
  margin-top: ${e=>{var t;return((t=e.theme.spacing)==null?void 0:t.xs)||"4px"}};
  margin-left: 24px;
`,a=y.forwardRef(({label:e,error:t=!1,errorText:o,size:s="medium",mb:c,mt:i,ml:m,mr:Q,checked:S,defaultChecked:X,indeterminate:$=!1,disabled:v=!1,className:Y,onChange:Z,...ee},u)=>{const j=y.useId(),te=x=>{typeof u=="function"?u(x):u&&(u.current=x),x&&(x.indeterminate=$)};return r.jsxs("div",{children:[r.jsxs(ae,{mb:c,mt:i,ml:m,mr:Q,className:Y,children:[r.jsx(se,{id:j,ref:te,checked:S,defaultChecked:X,disabled:v,onChange:Z,...ee}),r.jsx(ce,{checked:!!S,disabled:v,error:t,indeterminate:$,size:s}),e&&r.jsx(ne,{htmlFor:j,disabled:v,size:s,children:e})]}),t&&o&&r.jsx(ie,{children:o})]})});a.displayName="Checkbox";a.__docgenInfo={description:`Checkbox component for boolean selections

Features:
- Multiple size options (small, medium, large)
- Error state and message
- Indeterminate state support
- Accessible labeling
- Controlled and uncontrolled modes
- Ant Design styling with modern rounded aesthetics`,methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Label text for the checkbox"},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:"Text to show when error is true"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the checkbox",defaultValue:{value:"'medium'",computed:!1}},mb:{required:!1,tsType:{name:"string"},description:"Add margin bottom"},mt:{required:!1,tsType:{name:"string"},description:"Add margin top"},ml:{required:!1,tsType:{name:"string"},description:"Add margin left"},mr:{required:!1,tsType:{name:"string"},description:"Add margin right"},checked:{required:!1,tsType:{name:"boolean"},description:"Controls checked state"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state for uncontrolled components"},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Indeterminate state (partially checked)",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the checkbox",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const ue={title:"Components/Form/Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>r.jsx(oe,{children:r.jsx(e,{})})],args:{id:"checkbox-example",label:"Checkbox label",onChange:()=>{}}},b={args:{id:"basic-checkbox",label:"Basic checkbox"}},l=()=>{const[e,t]=y.useState(!1);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(a,{id:"controlled-checkbox",label:`Controlled checkbox (${e?"Checked":"Unchecked"})`,checked:e,onChange:o=>t(o.target.checked)}),r.jsx("button",{onClick:()=>t(!e),style:{padding:"8px 16px",backgroundColor:"#f0f0f0",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Toggle checkbox"})]})},f={args:{id:"checked-checkbox",label:"Checked checkbox",defaultChecked:!0}},g={args:{id:"disabled-checkbox",label:"Disabled checkbox",disabled:!0}},k={args:{id:"disabled-checked-checkbox",label:"Disabled and checked checkbox",disabled:!0,defaultChecked:!0}},C={args:{id:"error-checkbox",label:"Checkbox with error",error:"This field is required"}},d=()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(a,{id:"small-checkbox",label:"Small checkbox",size:"small"}),r.jsx(a,{id:"medium-checkbox",label:"Medium checkbox",size:"medium"}),r.jsx(a,{id:"large-checkbox",label:"Large checkbox",size:"large"})]}),h=()=>{const[e,t]=y.useState(["option1"]),o=s=>{const c=s.target.value;s.target.checked?t([...e,c]):t(e.filter(i=>i!==c))};return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx("div",{style:{marginBottom:"8px",fontWeight:500},children:"Select your favorite fruits:"}),r.jsx(a,{id:"option1",value:"option1",label:"Apple",checked:e.includes("option1"),onChange:o}),r.jsx(a,{id:"option2",value:"option2",label:"Banana",checked:e.includes("option2"),onChange:o}),r.jsx(a,{id:"option3",value:"option3",label:"Orange",checked:e.includes("option3"),onChange:o}),r.jsx(a,{id:"option4",value:"option4",label:"Strawberry",checked:e.includes("option4"),onChange:o}),r.jsxs("div",{style:{marginTop:"16px"},children:["Selected options: ",e.join(", ")]})]})};l.__docgenInfo={description:"",methods:[],displayName:"Controlled"};d.__docgenInfo={description:"",methods:[],displayName:"Sizes"};h.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup"};var w,T,z;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'basic-checkbox',
    label: 'Basic checkbox'
  }
}`,...(z=(T=b.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var D,q,E;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  }}>
      <Checkbox id="controlled-checkbox" label={\`Controlled checkbox (\${checked ? 'Checked' : 'Unchecked'})\`} checked={checked} onChange={e => setChecked(e.target.checked)} />
      <button onClick={() => setChecked(!checked)} style={{
      padding: '8px 16px',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      cursor: 'pointer'
    }}>
        Toggle checkbox
      </button>
    </div>;
}`,...(E=(q=l.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var R,B,_;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: 'checked-checkbox',
    label: 'Checked checkbox',
    defaultChecked: true
  }
}`,...(_=(B=f.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var A,I,N;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: 'disabled-checkbox',
    label: 'Disabled checkbox',
    disabled: true
  }
}`,...(N=(I=g.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var L,F,M;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'disabled-checked-checkbox',
    label: 'Disabled and checked checkbox',
    disabled: true,
    defaultChecked: true
  }
}`,...(M=(F=k.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var O,V,W;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: 'error-checkbox',
    label: 'Checkbox with error',
    error: 'This field is required'
  }
}`,...(W=(V=C.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var G,H,P;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Checkbox id="small-checkbox" label="Small checkbox" size="small" />
      <Checkbox id="medium-checkbox" label="Medium checkbox" size="medium" />
      <Checkbox id="large-checkbox" label="Large checkbox" size="large" />
    </div>;
}`,...(P=(H=d.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var U,J,K;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<string[]>(['option1']);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(item => item !== value));
    }
  };
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <div style={{
      marginBottom: '8px',
      fontWeight: 500
    }}>
        Select your favorite fruits:
      </div>
      <Checkbox id="option1" value="option1" label="Apple" checked={selected.includes('option1')} onChange={handleChange} />
      <Checkbox id="option2" value="option2" label="Banana" checked={selected.includes('option2')} onChange={handleChange} />
      <Checkbox id="option3" value="option3" label="Orange" checked={selected.includes('option3')} onChange={handleChange} />
      <Checkbox id="option4" value="option4" label="Strawberry" checked={selected.includes('option4')} onChange={handleChange} />
      <div style={{
      marginTop: '16px'
    }}>
        Selected options: {selected.join(', ')}
      </div>
    </div>;
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const xe=["Basic","Controlled","Checked","Disabled","DisabledChecked","WithError","Sizes","CheckboxGroup"];export{b as Basic,h as CheckboxGroup,f as Checked,l as Controlled,g as Disabled,k as DisabledChecked,d as Sizes,C as WithError,xe as __namedExportsOrder,ue as default};
