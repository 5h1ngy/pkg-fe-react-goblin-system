import{j as i}from"./jsx-runtime-DiklIkkE.js";import{T as ce}from"./ThemeProvider-CSjwFnpO.js";import{d as r,l as y}from"./styled-components.browser.esm-Dz5yS7sT.js";import"./index-DRjF_FHU.js";import"./theme-_dwbflR3.js";const pe=e=>e===1?y`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `:y`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,l=y`
  /* Base styles */
  margin: 0;
  padding: ${e=>e.p||"0"};
  padding-left: ${e=>e.px||e.p||"0"};
  padding-right: ${e=>e.px||e.p||"0"};
  padding-top: ${e=>e.py||e.p||"0"};
  padding-bottom: ${e=>e.py||e.p||"0"};
  
  /* Margin */
  margin-bottom: ${e=>e.mb||"0"};
  margin-top: ${e=>e.mt||"0"};
  margin-left: ${e=>e.ml||"0"};
  margin-right: ${e=>e.mr||"0"};
  
  /* Font weight */
  font-weight: ${e=>{var a,t,H,w,j,b,T,S,C,z;switch(e.weight){case"light":return((t=(a=e.theme.typography)==null?void 0:a.fontWeight)==null?void 0:t.light)||300;case"regular":return((w=(H=e.theme.typography)==null?void 0:H.fontWeight)==null?void 0:w.regular)||400;case"medium":return((b=(j=e.theme.typography)==null?void 0:j.fontWeight)==null?void 0:b.medium)||500;case"semibold":return((S=(T=e.theme.typography)==null?void 0:T.fontWeight)==null?void 0:S.semibold)||600;case"bold":default:return((z=(C=e.theme.typography)==null?void 0:C.fontWeight)==null?void 0:z.bold)||700}}};
  
  /* Typography enhancements for Ant Design 2025 */
  font-family: ${e=>{var a;return((a=e.theme.typography)==null?void 0:a.fontFamily)||"'Inter Variable', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', sans-serif"}};
  letter-spacing: ${e=>e.letterSpacing||"-0.015em"};
  font-feature-settings: ${e=>e.fontFeatureSettings||"'cv11', 'salt', 'ss01'"};
  
  /* Color */
  color: ${e=>{var a,t;return e.color?e.color.startsWith("#")||e.color.startsWith("rgb")?e.color:((t=e.theme.colors)==null?void 0:t[e.color])||e.color:((a=e.theme.colors)==null?void 0:a.textPrimary)||"rgba(0, 0, 0, 0.85)"}};
  
  /* Text alignment */
  text-align: ${e=>e.align||"inherit"};
  
  /* Text transformation */
  text-transform: ${e=>e.transform||"none"};
  
  /* Line height */
  line-height: ${e=>e.lineHeight||"1.4"};
  
  /* Text truncation */
  ${e=>e.truncate&&pe(e.truncate)};
  
  /* Animation for entry (optional) */
  ${e=>e.animated&&y`
    animation: fadeIn 0.3s ease-in-out;
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}
`,$=r.h1`
  ${l}
  font-size: ${e=>{var a,t;return((t=(a=e.theme.typography)==null?void 0:a.fontSize)==null?void 0:t.xxl)||"24px"}};
`,me=r.h2`
  ${l}
  font-size: ${e=>{var a,t;return((t=(a=e.theme.typography)==null?void 0:a.fontSize)==null?void 0:t.xl)||"20px"}};
`,he=r.h3`
  ${l}
  font-size: ${e=>{var a,t;return((t=(a=e.theme.typography)==null?void 0:a.fontSize)==null?void 0:t.lg)||"18px"}};
`,ue=r.h4`
  ${l}
  font-size: ${e=>{var a,t;return((t=(a=e.theme.typography)==null?void 0:a.fontSize)==null?void 0:t.md)||"16px"}};
`,xe=r.h5`
  ${l}
  font-size: ${e=>{var a,t;return((t=(a=e.theme.typography)==null?void 0:a.fontSize)==null?void 0:t.sm)||"14px"}};
`,fe=r.h6`
  ${l}
  font-size: ${e=>{var a,t;return((t=(a=e.theme.typography)==null?void 0:a.fontSize)==null?void 0:t.xs)||"12px"}};
`,n=({level:e=1,children:a,...t})=>{switch(e){case 1:return i.jsx($,{...t,children:a});case 2:return i.jsx(me,{...t,children:a});case 3:return i.jsx(he,{...t,children:a});case 4:return i.jsx(ue,{...t,children:a});case 5:return i.jsx(xe,{...t,children:a});case 6:return i.jsx(fe,{...t,children:a});default:return i.jsx($,{...t,children:a})}};n.__docgenInfo={description:`Heading component for displaying headings with different levels and styles

Features:
- Six heading levels (h1-h6)
- Customizable font weight and features
- Text alignment and animation
- Color customization
- Margin and padding control
- Optional font feature settings`,methods:[],displayName:"Heading",props:{level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Heading level (h1-h6)",defaultValue:{value:"1",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'light' | 'regular' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight"},color:{required:!1,tsType:{name:"string"},description:"Text color - can use theme colors or custom colors"},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Align text: left, center, right"},transform:{required:!1,tsType:{name:"union",raw:"'none' | 'uppercase' | 'lowercase' | 'capitalize'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'uppercase'"},{name:"literal",value:"'lowercase'"},{name:"literal",value:"'capitalize'"}]},description:"Transform text: none, uppercase, lowercase, capitalize"},mb:{required:!1,tsType:{name:"string"},description:"Add margin bottom"},mt:{required:!1,tsType:{name:"string"},description:"Add margin top"},ml:{required:!1,tsType:{name:"string"},description:"Add margin left"},mr:{required:!1,tsType:{name:"string"},description:"Add margin right"},p:{required:!1,tsType:{name:"string"},description:"Add padding"},px:{required:!1,tsType:{name:"string"},description:"Add padding horizontal (left and right)"},py:{required:!1,tsType:{name:"string"},description:"Add padding vertical (top and bottom)"},truncate:{required:!1,tsType:{name:"number"},description:"Truncate text with ellipsis after specified number of lines"},lineHeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Line height"},letterSpacing:{required:!1,tsType:{name:"string"},description:"Letter spacing"},fontFeatureSettings:{required:!1,tsType:{name:"string"},description:"Optional font feature settings"},animated:{required:!1,tsType:{name:"boolean"},description:"Optional animation for entry"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const be={title:"Components/Typography/Heading",component:n,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>i.jsx(ce,{children:i.jsx("div",{style:{width:"100%",maxWidth:"800px"},children:i.jsx(e,{})})})]},v={args:{children:"Default Heading"}},o=()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[i.jsx(n,{level:1,children:"Heading Level 1 (h1)"}),i.jsx(n,{level:2,children:"Heading Level 2 (h2)"}),i.jsx(n,{level:3,children:"Heading Level 3 (h3)"}),i.jsx(n,{level:4,children:"Heading Level 4 (h4)"}),i.jsx(n,{level:5,children:"Heading Level 5 (h5)"}),i.jsx(n,{level:6,children:"Heading Level 6 (h6)"})]}),s=()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx(n,{level:2,color:"primary",children:"Primary Color Heading"}),i.jsx(n,{level:2,color:"secondary",children:"Secondary Color Heading"}),i.jsx(n,{level:2,color:"error",children:"Error Color Heading"}),i.jsx(n,{level:2,color:"#ff5722",children:"Custom Color Heading (#ff5722)"}),i.jsx("div",{style:{backgroundColor:"#333",padding:"16px"},children:i.jsx(n,{level:2,color:"white",children:"White Heading on Dark Background"})})]}),d=()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx(n,{level:2,weight:"regular",children:"Regular Weight Heading (400)"}),i.jsx(n,{level:2,weight:"medium",children:"Medium Weight Heading (500)"}),i.jsx(n,{level:2,weight:"bold",children:"Bold Weight Heading (700)"})]}),g=()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[i.jsx(n,{level:2,align:"left",children:"Left Aligned Heading"}),i.jsx(n,{level:2,align:"center",children:"Center Aligned Heading"}),i.jsx(n,{level:2,align:"right",children:"Right Aligned Heading"})]}),c=()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx(n,{level:3,transform:"uppercase",children:"Uppercase Heading"}),i.jsx(n,{level:3,transform:"lowercase",children:"LOWERCASE HEADING"}),i.jsx(n,{level:3,transform:"capitalize",children:"capitalize each word in heading"})]}),p=()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx(n,{level:2,fontSize:"24px",children:"Custom 24px Heading"}),i.jsx(n,{level:2,fontSize:"32px",children:"Custom 32px Heading"}),i.jsx(n,{level:2,fontSize:"3rem",children:"Custom 3rem Heading"})]}),m=()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",border:"1px dashed #ccc",padding:"16px"},children:[i.jsx(n,{level:2,margin:"0 0 24px 0",children:"Heading with Bottom Margin"}),i.jsx("div",{style:{padding:"8px",backgroundColor:"#f0f0f0"},children:"Content below heading"})]}),h=()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[i.jsxs("div",{children:[i.jsx(n,{level:2,children:"Default Line Height"}),i.jsx("div",{style:{backgroundColor:"#f0f0f0",height:"2px",marginTop:"4px"}})]}),i.jsxs("div",{children:[i.jsx(n,{level:2,lineHeight:"1",children:"Tight Line Height (1)"}),i.jsx("div",{style:{backgroundColor:"#f0f0f0",height:"2px",marginTop:"4px"}})]}),i.jsxs("div",{children:[i.jsx(n,{level:2,lineHeight:"2",children:"Spacious Line Height (2)"}),i.jsx("div",{style:{backgroundColor:"#f0f0f0",height:"2px",marginTop:"4px"}})]})]}),u=()=>i.jsxs("div",{style:{maxWidth:"300px",border:"1px solid #eee",padding:"16px"},children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Without truncation:"}),i.jsx(n,{level:3,children:"This is a very long heading that will wrap to multiple lines when it exceeds the container width"})]}),i.jsxs("div",{style:{marginTop:"24px"},children:[i.jsx("strong",{children:"With truncation:"}),i.jsx(n,{level:3,truncate:!0,children:"This is a very long heading that will be truncated with an ellipsis when it exceeds the container width"})]})]}),x=()=>i.jsxs("div",{children:[i.jsx("p",{style:{marginBottom:"16px"},children:"Resize the window to see how this heading responds to different viewport sizes:"}),i.jsx(n,{level:2,style:{fontSize:"clamp(1.5rem, 5vw, 3rem)",transition:"font-size 0.3s ease"},children:"Responsive Sized Heading"})]}),f=()=>i.jsxs("div",{style:{border:"1px solid #eee",borderRadius:"8px",padding:"24px"},children:[i.jsx(n,{level:1,style:{borderBottom:"2px solid #1890ff",paddingBottom:"8px"},children:"Page Title"}),i.jsxs("div",{style:{marginTop:"32px"},children:[i.jsx(n,{level:2,color:"secondary",children:"Section Heading"}),i.jsx("p",{style:{marginTop:"16px"},children:"This example shows how headings can be used in a typical page layout. The main title uses level 1 (h1) with a bottom border for emphasis, while section headings use level 2 (h2) with a different color."})]}),i.jsxs("div",{style:{marginTop:"32px"},children:[i.jsx(n,{level:3,children:"Subsection"}),i.jsx("p",{style:{marginTop:"16px"},children:"Smaller subsections use level 3 (h3) headings to create a clear hierarchy of content on the page."})]})]});o.__docgenInfo={description:"",methods:[],displayName:"HeadingLevels"};s.__docgenInfo={description:"",methods:[],displayName:"Colors"};d.__docgenInfo={description:"",methods:[],displayName:"Weights"};g.__docgenInfo={description:"",methods:[],displayName:"Alignment"};c.__docgenInfo={description:"",methods:[],displayName:"Transformations"};p.__docgenInfo={description:"",methods:[],displayName:"CustomFontSize"};m.__docgenInfo={description:"",methods:[],displayName:"CustomMargin"};h.__docgenInfo={description:"",methods:[],displayName:"LineHeight"};u.__docgenInfo={description:"",methods:[],displayName:"Truncation"};x.__docgenInfo={description:"",methods:[],displayName:"ResponsiveHeading"};f.__docgenInfo={description:"",methods:[],displayName:"PageHeadingExample"};var L,W,D;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Default Heading'
  }
}`,...(D=(W=v.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var _,A,R;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '24px'
}}>
    <Heading level={1}>Heading Level 1 (h1)</Heading>
    <Heading level={2}>Heading Level 2 (h2)</Heading>
    <Heading level={3}>Heading Level 3 (h3)</Heading>
    <Heading level={4}>Heading Level 4 (h4)</Heading>
    <Heading level={5}>Heading Level 5 (h5)</Heading>
    <Heading level={6}>Heading Level 6 (h6)</Heading>
  </div>`,...(R=(A=o.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var k,I,q;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
}}>
    <Heading level={2} color="primary">Primary Color Heading</Heading>
    <Heading level={2} color="secondary">Secondary Color Heading</Heading>
    <Heading level={2} color="error">Error Color Heading</Heading>
    <Heading level={2} color="#ff5722">Custom Color Heading (#ff5722)</Heading>
    <div style={{
    backgroundColor: '#333',
    padding: '16px'
  }}>
      <Heading level={2} color="white">White Heading on Dark Background</Heading>
    </div>
  </div>`,...(q=(I=s.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var B,N,E;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
}}>
    <Heading level={2} weight="regular">Regular Weight Heading (400)</Heading>
    <Heading level={2} weight="medium">Medium Weight Heading (500)</Heading>
    <Heading level={2} weight="bold">Bold Weight Heading (700)</Heading>
  </div>`,...(E=(N=d.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var F,M,P;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '24px'
}}>
    <Heading level={2} align="left">Left Aligned Heading</Heading>
    <Heading level={2} align="center">Center Aligned Heading</Heading>
    <Heading level={2} align="right">Right Aligned Heading</Heading>
  </div>`,...(P=(M=g.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var O,U,V;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
}}>
    <Heading level={3} transform="uppercase">Uppercase Heading</Heading>
    <Heading level={3} transform="lowercase">LOWERCASE HEADING</Heading>
    <Heading level={3} transform="capitalize">capitalize each word in heading</Heading>
  </div>`,...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var G,Y,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
}}>
    <Heading level={2} fontSize="24px">Custom 24px Heading</Heading>
    <Heading level={2} fontSize="32px">Custom 32px Heading</Heading>
    <Heading level={2} fontSize="3rem">Custom 3rem Heading</Heading>
  </div>`,...(J=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Q,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  border: '1px dashed #ccc',
  padding: '16px'
}}>
    <Heading level={2} margin="0 0 24px 0">
      Heading with Bottom Margin
    </Heading>
    <div style={{
    padding: '8px',
    backgroundColor: '#f0f0f0'
  }}>
      Content below heading
    </div>
  </div>`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ie;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '32px'
}}>
    <div>
      <Heading level={2}>Default Line Height</Heading>
      <div style={{
      backgroundColor: '#f0f0f0',
      height: '2px',
      marginTop: '4px'
    }}></div>
    </div>
    
    <div>
      <Heading level={2} lineHeight="1">Tight Line Height (1)</Heading>
      <div style={{
      backgroundColor: '#f0f0f0',
      height: '2px',
      marginTop: '4px'
    }}></div>
    </div>
    
    <div>
      <Heading level={2} lineHeight="2">Spacious Line Height (2)</Heading>
      <div style={{
      backgroundColor: '#f0f0f0',
      height: '2px',
      marginTop: '4px'
    }}></div>
    </div>
  </div>`,...(ie=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ie.source}}};var ne,ae,te;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`() => <div style={{
  maxWidth: '300px',
  border: '1px solid #eee',
  padding: '16px'
}}>
    <div>
      <strong>Without truncation:</strong>
      <Heading level={3}>
        This is a very long heading that will wrap to multiple lines when it exceeds the container width
      </Heading>
    </div>
    
    <div style={{
    marginTop: '24px'
  }}>
      <strong>With truncation:</strong>
      <Heading level={3} truncate>
        This is a very long heading that will be truncated with an ellipsis when it exceeds the container width
      </Heading>
    </div>
  </div>`,...(te=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,le,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`() => <div>
    <p style={{
    marginBottom: '16px'
  }}>
      Resize the window to see how this heading responds to different viewport sizes:
    </p>
    <Heading level={2} style={{
    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
    transition: 'font-size 0.3s ease'
  }}>
      Responsive Sized Heading
    </Heading>
  </div>`,...(oe=(le=x.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var se,de,ge;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`() => <div style={{
  border: '1px solid #eee',
  borderRadius: '8px',
  padding: '24px'
}}>
    <Heading level={1} style={{
    borderBottom: '2px solid #1890ff',
    paddingBottom: '8px'
  }}>
      Page Title
    </Heading>
    
    <div style={{
    marginTop: '32px'
  }}>
      <Heading level={2} color="secondary">Section Heading</Heading>
      <p style={{
      marginTop: '16px'
    }}>
        This example shows how headings can be used in a typical page layout.
        The main title uses level 1 (h1) with a bottom border for emphasis,
        while section headings use level 2 (h2) with a different color.
      </p>
    </div>
    
    <div style={{
    marginTop: '32px'
  }}>
      <Heading level={3}>Subsection</Heading>
      <p style={{
      marginTop: '16px'
    }}>
        Smaller subsections use level 3 (h3) headings to create a clear
        hierarchy of content on the page.
      </p>
    </div>
  </div>`,...(ge=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};const Te=["Basic","HeadingLevels","Colors","Weights","Alignment","Transformations","CustomFontSize","CustomMargin","LineHeight","Truncation","ResponsiveHeading","PageHeadingExample"];export{g as Alignment,v as Basic,s as Colors,p as CustomFontSize,m as CustomMargin,o as HeadingLevels,h as LineHeight,f as PageHeadingExample,x as ResponsiveHeading,c as Transformations,u as Truncation,d as Weights,Te as __namedExportsOrder,be as default};
