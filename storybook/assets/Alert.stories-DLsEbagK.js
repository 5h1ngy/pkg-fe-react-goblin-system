import{j as o}from"./jsx-runtime-DiklIkkE.js";import{T as se}from"./ThemeProvider-CSjwFnpO.js";import{d as s,l as n}from"./styled-components.browser.esm-Dz5yS7sT.js";import{B as f}from"./Button-CKDzLx83.js";import"./index-DRjF_FHU.js";import"./theme-_dwbflR3.js";const ne=r=>{switch(r){case"success":return n`
        background-color: ${e=>{var t;return`${((t=e.theme.colors)==null?void 0:t.success)||"#52c41a"}11`}};
        border-color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t.success)||"#52c41a"}};
        color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t.success)||"#52c41a"}};
      `;case"error":return n`
        background-color: ${e=>{var t;return`${((t=e.theme.colors)==null?void 0:t.danger)||"#ff4d4f"}11`}};
        border-color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t.danger)||"#ff4d4f"}};
        color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t.danger)||"#ff4d4f"}};
      `;case"warning":return n`
        background-color: ${e=>{var t;return`${((t=e.theme.colors)==null?void 0:t.warning)||"#faad14"}11`}};
        border-color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t.warning)||"#faad14"}};
        color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t.warning)||"#faad14"}};
      `;default:return n`
        background-color: ${e=>{var t;return`${((t=e.theme.colors)==null?void 0:t.info)||"#1890ff"}11`}};
        border-color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t.info)||"#1890ff"}};
        color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t.info)||"#1890ff"}};
      `}},ae=s.div`
  display: flex;
  position: relative;
  padding: ${r=>{var e;return((e=r.theme.spacing)==null?void 0:e.md)||"1rem"}};
  border-radius: ${r=>{var e;return((e=r.theme.radii)==null?void 0:e.md)||"8px"}};
  border-left: 4px solid;
  margin-bottom: ${r=>r.mb||"0"};
  margin-top: ${r=>r.mt||"0"};
  width: ${r=>r.fullWidth?"100%":"auto"};
  box-shadow: ${r=>{var e;return r.withShadow?((e=r.theme.shadows)==null?void 0:e.sm)||"0 2px 8px rgba(0, 0, 0, 0.15)":"none"}};
  transition: all 0.3s ease;
  
  /* Apply type-specific styles */
  ${r=>ne(r.type)}
`,ie=s.div`
  display: flex;
  align-items: flex-start;
  margin-right: ${r=>{var e;return((e=r.theme.spacing)==null?void 0:e.sm)||"0.5rem"}};
  flex-shrink: 0;
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`,ce=s.div`
  flex: 1;
`,le=s.div`
  font-weight: ${r=>{var e,t;return((t=(e=r.theme.typography)==null?void 0:e.fontWeight)==null?void 0:t.bold)||"600"}};
  margin-bottom: ${r=>{var e;return((e=r.theme.spacing)==null?void 0:e.xs)||"0.25rem"}};
  letter-spacing: -0.01em;
`,de=s.div`
  color: ${r=>{var e;return((e=r.theme.colors)==null?void 0:e.textPrimary)||"rgba(0, 0, 0, 0.85)"}};
  line-height: 1.5;
`,ue=s.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${r=>{var e;return((e=r.theme.spacing)==null?void 0:e.xs)||"0.25rem"}};
  border-radius: ${r=>{var e;return((e=r.theme.radii)==null?void 0:e.sm)||"4px"}};
  color: inherit;
  opacity: 0.6;
  transition: all 0.2s ease;
  margin-left: ${r=>{var e;return((e=r.theme.spacing)==null?void 0:e.sm)||"0.5rem"}};
  
  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${r=>{var e;return`${((e=r.theme.colors)==null?void 0:e.primary)||"#1890ff"}33`}};
  }
`,pe=s.div`
  margin-top: ${r=>{var e;return((e=r.theme.spacing)==null?void 0:e.sm)||"0.5rem"}};
  display: flex;
  gap: ${r=>{var e;return((e=r.theme.spacing)==null?void 0:e.sm)||"0.5rem"}};
`,me=()=>o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M12 4L4 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M4 4L12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),he=r=>{switch(r){case"success":return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M22 4L12 14.01L9 11.01",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]});case"error":return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M15 9L9 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M9 9L15 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]});case"warning":return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M10.29 3.86L1.82 18C1.64537 18.3024 1.55296 18.6453 1.55199 18.9945C1.55101 19.3437 1.6415 19.6871 1.81442 19.9905C1.98734 20.2939 2.23637 20.5467 2.53748 20.7238C2.83858 20.9009 3.1808 20.9961 3.53 21H20.47C20.8192 20.9961 21.1614 20.9009 21.4625 20.7238C21.7636 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.4471 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3438 2.89725 12 2.89725C11.6563 2.89725 11.3183 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 9V13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 17H12.01",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]});case"info":default:return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 16V12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 8H12.01",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}},J=({type:r="info",title:e,children:t,closable:K=!1,onClose:Q,icon:U,mb:X,mt:ee,fullWidth:re=!1,withShadow:te=!1,className:oe,action:w})=>{const y=U||he(r);return o.jsxs(ae,{type:r,mb:X,mt:ee,fullWidth:re,withShadow:te,className:oe,role:"alert",children:[y&&o.jsx(ie,{children:y}),o.jsxs(ce,{children:[e&&o.jsx(le,{children:e}),o.jsx(de,{children:t}),w&&o.jsx(pe,{children:w})]}),K&&o.jsx(ue,{onClick:Q,"aria-label":"Close alert",type:"button",children:o.jsx(me,{})})]})};J.__docgenInfo={description:`Alert component for displaying important messages with different severity levels

Features:
- Four severity types: success, error, warning, info
- Optional title and close button
- Custom icon support
- Action buttons or links
- Ant Design styling with modern rounded aesthetics`,methods:[],displayName:"Alert",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:"Alert type/severity",defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Alert title (optional)"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Main message content"},closable:{required:!1,tsType:{name:"boolean"},description:"Whether the alert can be closed/dismissed",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when close button is clicked"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display before the alert content"},mb:{required:!1,tsType:{name:"string"},description:"Add margin bottom"},mt:{required:!1,tsType:{name:"string"},description:"Add margin top"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Make alert take full width of its container",defaultValue:{value:"false",computed:!1}},withShadow:{required:!1,tsType:{name:"boolean"},description:"Add box shadow to the alert",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Action buttons or links to display"}}};const Ce={title:"Components/Feedback/Alert",component:J,parameters:{layout:"centered"},tags:["autodocs"],decorators:[r=>o.jsx(se,{children:o.jsx("div",{style:{width:"500px"},children:o.jsx(r,{})})})]},a={args:{type:"info",children:"This is an information alert message."}},i={args:{type:"success",children:"Your action was completed successfully!"}},c={args:{type:"warning",children:"Warning: This action may have consequences."}},l={args:{type:"error",children:"An error occurred while processing your request."}},d={args:{type:"info",title:"Information",children:"This is an information alert with a title."}},u={args:{type:"success",children:"This alert can be closed.",closable:!0,onClose:()=>console.log("Alert closed")}},p={args:{type:"warning",title:"Attention Required",children:"Your account needs verification before proceeding.",action:o.jsx(f,{size:"small",variant:"primary",children:"Verify Now"})}},m={args:{type:"error",title:"Error Detected",children:"We encountered a problem with your submission.",action:o.jsxs(o.Fragment,{children:[o.jsx(f,{size:"small",variant:"primary",children:"Try Again"}),o.jsx(f,{size:"small",variant:"ghost",children:"Cancel"})]})}},h={args:{type:"info",children:"This alert has a shadow effect.",withShadow:!0}},g={args:{type:"success",children:"This is a full-width alert.",fullWidth:!0}};var x,k,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'info',
    children: 'This is an information alert message.'
  }
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var b,v,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'success',
    children: 'Your action was completed successfully!'
  }
}`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var W,L,$;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    children: 'Warning: This action may have consequences.'
  }
}`,...($=(L=c.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var T,A,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'error',
    children: 'An error occurred while processing your request.'
  }
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var q,M,R;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Information',
    children: 'This is an information alert with a title.'
  }
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var B,I,N;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'success',
    children: 'This alert can be closed.',
    closable: true,
    onClose: () => console.log('Alert closed')
  }
}`,...(N=(I=u.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var V,z,E;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: 'Attention Required',
    children: 'Your account needs verification before proceeding.',
    action: <Button size="small" variant="primary">
        Verify Now
      </Button>
  }
}`,...(E=(z=p.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var F,D,Y;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: 'Error Detected',
    children: 'We encountered a problem with your submission.',
    action: <>
        <Button size="small" variant="primary">
          Try Again
        </Button>
        <Button size="small" variant="ghost">
          Cancel
        </Button>
      </>
  }
}`,...(Y=(D=m.parameters)==null?void 0:D.docs)==null?void 0:Y.source}}};var _,H,Z;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'info',
    children: 'This alert has a shadow effect.',
    withShadow: true
  }
}`,...(Z=(H=h.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var O,P,G;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'success',
    children: 'This is a full-width alert.',
    fullWidth: true
  }
}`,...(G=(P=g.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};const be=["Info","Success","Warning","Error","WithTitle","Closable","WithAction","WithMultipleActions","WithShadow","FullWidth"];export{u as Closable,l as Error,g as FullWidth,a as Info,i as Success,c as Warning,p as WithAction,m as WithMultipleActions,h as WithShadow,d as WithTitle,be as __namedExportsOrder,Ce as default};
