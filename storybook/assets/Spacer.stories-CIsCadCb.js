import{j as e}from"./jsx-runtime-DiklIkkE.js";import{T as _}from"./ThemeProvider-CSjwFnpO.js";import{d as C}from"./styled-components.browser.esm-Dz5yS7sT.js";import"./index-DRjF_FHU.js";import"./theme-_dwbflR3.js";const s=C.div`
  display: block;
  transition: all 0.3s ease;
  ${o=>{var a,d,x,p;return o.horizontal?`
      display: inline-block;
      width: ${o.size||((a=o.theme.spacing)==null?void 0:a.md)||"1rem"};
      height: 1px;
      min-width: ${o.size||((d=o.theme.spacing)==null?void 0:d.md)||"1rem"};
    `:`
      width: 100%;
      height: ${o.size||((x=o.theme.spacing)==null?void 0:x.md)||"1rem"};
      min-height: ${o.size||((p=o.theme.spacing)==null?void 0:p.md)||"1rem"};
    `}}
  
  /* Flex grow setting */
  ${o=>o.grow&&`
    flex-grow: 1;
  `}
`,H={title:"Components/Layout/Spacer",component:s,parameters:{layout:"centered"},tags:["autodocs"],decorators:[o=>e.jsx(_,{children:e.jsx(o,{})})]},i=({children:o,color:a="#1890ff"})=>e.jsx("div",{style:{backgroundColor:a,color:"white",padding:"12px 24px",borderRadius:"4px",fontWeight:500},children:o}),l=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e.jsx(i,{children:"Block"}),e.jsx(s,{size:"xs"}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"xs spacing (4px)"}),e.jsx(i,{children:"Block"}),e.jsx(s,{size:"sm"}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"sm spacing (8px)"}),e.jsx(i,{children:"Block"}),e.jsx(s,{size:"md"}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"md spacing (16px)"}),e.jsx(i,{children:"Block"}),e.jsx(s,{size:"lg"}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"lg spacing (24px)"}),e.jsx(i,{children:"Block"}),e.jsx(s,{size:"xl"}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"xl spacing (32px)"}),e.jsx(i,{children:"Block"})]}),c=()=>e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(i,{children:"Block"}),e.jsx(s,{size:"xs",orientation:"vertical"}),e.jsx(i,{children:"xs (4px)"}),e.jsx(s,{size:"sm",orientation:"vertical"}),e.jsx(i,{children:"sm (8px)"}),e.jsx(s,{size:"md",orientation:"vertical"}),e.jsx(i,{children:"md (16px)"}),e.jsx(s,{size:"lg",orientation:"vertical"}),e.jsx(i,{children:"lg (24px)"}),e.jsx(s,{size:"xl",orientation:"vertical"}),e.jsx(i,{children:"xl (32px)"})]}),t=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginBottom:"32px"},children:[e.jsx(i,{children:"Block"}),e.jsx(s,{size:48}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"Custom size (48px)"}),e.jsx(i,{children:"Block"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(i,{children:"Block"}),e.jsx(s,{size:48,orientation:"vertical"}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"Custom size (48px)"}),e.jsx(i,{children:"Block"})]})]}),n=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e.jsx(i,{children:"Block"}),e.jsx(s,{size:{xs:"sm",sm:"md",md:"lg",lg:"xl",xl:"xl"}}),e.jsxs("div",{style:{fontSize:"12px",color:"#666"},children:["Responsive sizing:",e.jsx("br",{}),"- xs screens: sm spacing (8px)",e.jsx("br",{}),"- sm screens: md spacing (16px)",e.jsx("br",{}),"- md screens: lg spacing (24px)",e.jsx("br",{}),"- lg and xl screens: xl spacing (32px)"]}),e.jsx(i,{children:"Block"})]}),r=()=>e.jsxs("div",{style:{width:"100%",maxWidth:"600px",padding:"24px",border:"1px solid #eee",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:[e.jsx("div",{style:{fontSize:"24px",fontWeight:"bold"},children:"Page Title"}),e.jsx(s,{size:"md"}),e.jsx("div",{style:{fontSize:"16px",color:"#666"},children:"This example shows how Spacer components can be used in a typical layout to create consistent spacing between elements."}),e.jsx(s,{size:"lg"}),e.jsx(i,{children:"Section 1"}),e.jsx(s,{size:"md"}),e.jsx(i,{color:"#52c41a",children:"Section 2"}),e.jsx(s,{size:"md"}),e.jsx(i,{color:"#722ed1",children:"Section 3"}),e.jsx(s,{size:"xl"}),e.jsx("div",{style:{fontSize:"18px",fontWeight:"bold"},children:"Another Header"}),e.jsx(s,{size:"md"}),e.jsx(i,{color:"#fa8c16",children:"Section 4"}),e.jsx(s,{size:"sm"}),e.jsx("div",{style:{fontSize:"12px",fontStyle:"italic",color:"#999"},children:"A small note with less spacing above"})]});l.__docgenInfo={description:"",methods:[],displayName:"HorizontalSizes"};c.__docgenInfo={description:"",methods:[],displayName:"VerticalSizes"};t.__docgenInfo={description:"",methods:[],displayName:"CustomSize"};n.__docgenInfo={description:"",methods:[],displayName:"ResponsiveSizing"};r.__docgenInfo={description:"",methods:[],displayName:"InLayout"};var m,g,z;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}}>
    <Block>Block</Block>
    <Spacer size="xs" />
    <div style={{
    fontSize: '12px',
    color: '#666'
  }}>xs spacing (4px)</div>
    <Block>Block</Block>
    <Spacer size="sm" />
    <div style={{
    fontSize: '12px',
    color: '#666'
  }}>sm spacing (8px)</div>
    <Block>Block</Block>
    <Spacer size="md" />
    <div style={{
    fontSize: '12px',
    color: '#666'
  }}>md spacing (16px)</div>
    <Block>Block</Block>
    <Spacer size="lg" />
    <div style={{
    fontSize: '12px',
    color: '#666'
  }}>lg spacing (24px)</div>
    <Block>Block</Block>
    <Spacer size="xl" />
    <div style={{
    fontSize: '12px',
    color: '#666'
  }}>xl spacing (32px)</div>
    <Block>Block</Block>
  </div>`,...(z=(g=l.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var h,v,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  alignItems: 'center'
}}>
    <Block>Block</Block>
    <Spacer size="xs" orientation="vertical" />
    <Block>xs (4px)</Block>
    <Spacer size="sm" orientation="vertical" />
    <Block>sm (8px)</Block>
    <Spacer size="md" orientation="vertical" />
    <Block>md (16px)</Block>
    <Spacer size="lg" orientation="vertical" />
    <Block>lg (24px)</Block>
    <Spacer size="xl" orientation="vertical" />
    <Block>xl (32px)</Block>
  </div>`,...(k=(v=c.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var S,f,B;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`() => <div>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '32px'
  }}>
      <Block>Block</Block>
      <Spacer size={48} />
      <div style={{
      fontSize: '12px',
      color: '#666'
    }}>Custom size (48px)</div>
      <Block>Block</Block>
    </div>
    
    <div style={{
    display: 'flex',
    alignItems: 'center'
  }}>
      <Block>Block</Block>
      <Spacer size={48} orientation="vertical" />
      <div style={{
      fontSize: '12px',
      color: '#666'
    }}>Custom size (48px)</div>
      <Block>Block</Block>
    </div>
  </div>`,...(B=(f=t.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var j,y,u;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}}>
    <Block>Block</Block>
    <Spacer size={{
    xs: 'sm',
    sm: 'md',
    md: 'lg',
    lg: 'xl',
    xl: 'xl'
  }} />
    <div style={{
    fontSize: '12px',
    color: '#666'
  }}>
      Responsive sizing:<br />
      - xs screens: sm spacing (8px)<br />
      - sm screens: md spacing (16px)<br />
      - md screens: lg spacing (24px)<br />
      - lg and xl screens: xl spacing (32px)
    </div>
    <Block>Block</Block>
  </div>`,...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var b,I,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`() => <div style={{
  width: '100%',
  maxWidth: '600px',
  padding: '24px',
  border: '1px solid #eee',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9'
}}>
    <div style={{
    fontSize: '24px',
    fontWeight: 'bold'
  }}>Page Title</div>
    <Spacer size="md" />
    
    <div style={{
    fontSize: '16px',
    color: '#666'
  }}>
      This example shows how Spacer components can be used in a typical layout
      to create consistent spacing between elements.
    </div>
    <Spacer size="lg" />
    
    <Block>Section 1</Block>
    <Spacer size="md" />
    
    <Block color="#52c41a">Section 2</Block>
    <Spacer size="md" />
    
    <Block color="#722ed1">Section 3</Block>
    <Spacer size="xl" />
    
    <div style={{
    fontSize: '18px',
    fontWeight: 'bold'
  }}>Another Header</div>
    <Spacer size="md" />
    
    <Block color="#fa8c16">Section 4</Block>
    <Spacer size="sm" />
    
    <div style={{
    fontSize: '12px',
    fontStyle: 'italic',
    color: '#999'
  }}>
      A small note with less spacing above
    </div>
  </div>`,...(w=(I=r.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const N=["HorizontalSizes","VerticalSizes","CustomSize","ResponsiveSizing","InLayout"];export{t as CustomSize,l as HorizontalSizes,r as InLayout,n as ResponsiveSizing,c as VerticalSizes,N as __namedExportsOrder,H as default};
