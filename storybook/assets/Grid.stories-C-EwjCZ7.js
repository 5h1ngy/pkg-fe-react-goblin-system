import{j as n}from"./jsx-runtime-DiklIkkE.js";import{T as z}from"./ThemeProvider-CSjwFnpO.js";import{d as W}from"./styled-components.browser.esm-Dz5yS7sT.js";import"./index-DRjF_FHU.js";import"./theme-_dwbflR3.js";const t=W.div`
  display: flex;
  flex-wrap: ${l=>l.wrap===!1?"nowrap":"wrap"};
  justify-content: ${l=>l.justify||"flex-start"};
  align-items: ${l=>l.align||"stretch"};
  margin: ${l=>{const i=l.gutter?`calc(-${l.gutter} / 2)`:"0";return l.m||i}};
  margin-top: ${l=>{const i=l.gutterY?`calc(-${l.gutterY} / 2)`:"0";return l.mt||l.my||l.m||i}};
  margin-right: ${l=>l.mr||l.mx||l.m||"0"};
  margin-bottom: ${l=>l.mb||l.my||l.m||"0"};
  margin-left: ${l=>l.ml||l.mx||l.m||"0"};
  
  /* Padding */
  padding: ${l=>l.p||"0"};
  padding-top: ${l=>l.pt||l.py||l.p||"0"};
  padding-right: ${l=>l.pr||l.px||l.p||"0"};
  padding-bottom: ${l=>l.pb||l.py||l.p||"0"};
  padding-left: ${l=>l.pl||l.px||l.p||"0"};
  
  /* Apply margin to child columns based on gutter */
  ${l=>l.gutter&&`
    > * {
      padding-left: calc(${l.gutter} / 2);
      padding-right: calc(${l.gutter} / 2);
    }
  `}
  
  /* Apply margin to child columns based on vertical gutter */
  ${l=>l.gutterY&&`
    > * {
      padding-top: calc(${l.gutterY} / 2);
      padding-bottom: calc(${l.gutterY} / 2);
    }
  `}
`,P=W.div`
  /* Base flex settings */
  flex: ${l=>l.flex?l.flex:l.span?`0 0 ${l.span/12*100}%`:"1 0 0%"};
  
  /* Base width calculation */
  max-width: ${l=>l.span?`${l.span/12*100}%`:"100%"};
  
  /* Offset */
  margin-left: ${l=>l.offset?`${l.offset/12*100}%`:"0"};
  
  /* Order */
  order: ${l=>l.order||0};
  
  /* Responsive breakpoints */
  @media (min-width: ${l=>l.theme.breakpoints.xs}) {
    ${l=>l.xs&&`
      flex: 0 0 ${l.xs/12*100}%;
      max-width: ${l.xs/12*100}%;
    `}
  }
  
  @media (min-width: ${l=>l.theme.breakpoints.sm}) {
    ${l=>l.sm&&`
      flex: 0 0 ${l.sm/12*100}%;
      max-width: ${l.sm/12*100}%;
    `}
  }
  
  @media (min-width: ${l=>l.theme.breakpoints.md}) {
    ${l=>l.md&&`
      flex: 0 0 ${l.md/12*100}%;
      max-width: ${l.md/12*100}%;
    `}
  }
  
  @media (min-width: ${l=>l.theme.breakpoints.lg}) {
    ${l=>l.lg&&`
      flex: 0 0 ${l.lg/12*100}%;
      max-width: ${l.lg/12*100}%;
    `}
  }
  
  @media (min-width: ${l=>l.theme.breakpoints.xl}) {
    ${l=>l.xl&&`
      flex: 0 0 ${l.xl/12*100}%;
      max-width: ${l.xl/12*100}%;
    `}
  }
  
  /* Padding */
  padding: ${l=>l.p||"0"};
  padding-top: ${l=>l.pt||l.py||l.p||"0"};
  padding-right: ${l=>l.pr||l.px||l.p||"0"};
  padding-bottom: ${l=>l.pb||l.py||l.p||"0"};
  padding-left: ${l=>l.pl||l.px||l.p||"0"};
  
  /* Margin */
  margin: ${l=>l.m||"0"};
  margin-top: ${l=>l.mt||l.my||l.m||"0"};
  margin-right: ${l=>l.mr||l.mx||l.m||"0"};
  margin-bottom: ${l=>l.mb||l.my||l.m||"0"};
  margin-left: ${l=>l.ml||l.mx||l.m||"0"};
  
  /* Background and border radius */
  background-color: ${l=>l.bg||"transparent"};
  border-radius: ${l=>l.borderRadius||"0"};
`,e=P,F={title:"Components/Layout/Grid",component:t,parameters:{layout:"centered"},tags:["autodocs"],decorators:[l=>n.jsx(z,{children:n.jsx("div",{style:{width:"100%",maxWidth:"1000px"},children:n.jsx(l,{})})})]},s=({children:l,height:i="80px"})=>n.jsx("div",{style:{backgroundColor:"#e6f7ff",border:"1px solid #1890ff",borderRadius:"4px",padding:"16px",height:i,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",fontWeight:500},children:l}),o=()=>n.jsxs(t,{gutter:16,children:[n.jsx(e,{span:8,children:n.jsx(s,{children:"Column 1"})}),n.jsx(e,{span:8,children:n.jsx(s,{children:"Column 2"})}),n.jsx(e,{span:8,children:n.jsx(s,{children:"Column 3"})})]}),r=()=>n.jsxs(t,{gutter:16,children:[n.jsx(e,{span:6,children:n.jsx(s,{children:"span=6"})}),n.jsx(e,{span:12,children:n.jsx(s,{children:"span=12"})}),n.jsx(e,{span:6,children:n.jsx(s,{children:"span=6"})})]}),m=()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"16px"},children:"Gutter: 8px"}),n.jsxs(t,{gutter:8,children:[n.jsx(e,{span:6,children:n.jsx(s,{children:"Column"})}),n.jsx(e,{span:6,children:n.jsx(s,{children:"Column"})}),n.jsx(e,{span:6,children:n.jsx(s,{children:"Column"})}),n.jsx(e,{span:6,children:n.jsx(s,{children:"Column"})})]})]}),n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"16px"},children:"Gutter: 16px"}),n.jsxs(t,{gutter:16,children:[n.jsx(e,{span:6,children:n.jsx(s,{children:"Column"})}),n.jsx(e,{span:6,children:n.jsx(s,{children:"Column"})}),n.jsx(e,{span:6,children:n.jsx(s,{children:"Column"})}),n.jsx(e,{span:6,children:n.jsx(s,{children:"Column"})})]})]}),n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"16px"},children:"Gutter: 32px"}),n.jsxs(t,{gutter:32,children:[n.jsx(e,{span:6,children:n.jsx(s,{children:"Column"})}),n.jsx(e,{span:6,children:n.jsx(s,{children:"Column"})}),n.jsx(e,{span:6,children:n.jsx(s,{children:"Column"})}),n.jsx(e,{span:6,children:n.jsx(s,{children:"Column"})})]})]})]}),d=()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsxs(t,{gutter:16,children:[n.jsx(e,{span:8,children:n.jsx(s,{children:"span=8"})}),n.jsx(e,{span:8,offset:8,children:n.jsx(s,{children:"span=8 offset=8"})})]}),n.jsxs(t,{gutter:16,children:[n.jsx(e,{span:6,offset:6,children:n.jsx(s,{children:"span=6 offset=6"})}),n.jsx(e,{span:6,offset:6,children:n.jsx(s,{children:"span=6 offset=6"})})]}),n.jsx(t,{gutter:16,children:n.jsx(e,{span:12,offset:6,children:n.jsx(s,{children:"span=12 offset=6"})})})]}),a=()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"16px"},children:"Align: flex-start"}),n.jsxs(t,{gutter:16,align:"flex-start",children:[n.jsx(e,{span:8,children:n.jsx(s,{height:"120px",children:"Column 1"})}),n.jsx(e,{span:8,children:n.jsx(s,{height:"80px",children:"Column 2"})}),n.jsx(e,{span:8,children:n.jsx(s,{height:"160px",children:"Column 3"})})]})]}),n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"16px"},children:"Align: center"}),n.jsxs(t,{gutter:16,align:"center",children:[n.jsx(e,{span:8,children:n.jsx(s,{height:"120px",children:"Column 1"})}),n.jsx(e,{span:8,children:n.jsx(s,{height:"80px",children:"Column 2"})}),n.jsx(e,{span:8,children:n.jsx(s,{height:"160px",children:"Column 3"})})]})]}),n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"16px"},children:"Align: flex-end"}),n.jsxs(t,{gutter:16,align:"flex-end",children:[n.jsx(e,{span:8,children:n.jsx(s,{height:"120px",children:"Column 1"})}),n.jsx(e,{span:8,children:n.jsx(s,{height:"80px",children:"Column 2"})}),n.jsx(e,{span:8,children:n.jsx(s,{height:"160px",children:"Column 3"})})]})]})]}),u=()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"16px"},children:"Justify: flex-start"}),n.jsxs(t,{gutter:16,justify:"flex-start",children:[n.jsx(e,{span:4,children:n.jsx(s,{children:"Column 1"})}),n.jsx(e,{span:4,children:n.jsx(s,{children:"Column 2"})}),n.jsx(e,{span:4,children:n.jsx(s,{children:"Column 3"})})]})]}),n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"16px"},children:"Justify: center"}),n.jsxs(t,{gutter:16,justify:"center",children:[n.jsx(e,{span:4,children:n.jsx(s,{children:"Column 1"})}),n.jsx(e,{span:4,children:n.jsx(s,{children:"Column 2"})}),n.jsx(e,{span:4,children:n.jsx(s,{children:"Column 3"})})]})]}),n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"16px"},children:"Justify: flex-end"}),n.jsxs(t,{gutter:16,justify:"flex-end",children:[n.jsx(e,{span:4,children:n.jsx(s,{children:"Column 1"})}),n.jsx(e,{span:4,children:n.jsx(s,{children:"Column 2"})}),n.jsx(e,{span:4,children:n.jsx(s,{children:"Column 3"})})]})]}),n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"16px"},children:"Justify: space-between"}),n.jsxs(t,{gutter:16,justify:"space-between",children:[n.jsx(e,{span:4,children:n.jsx(s,{children:"Column 1"})}),n.jsx(e,{span:4,children:n.jsx(s,{children:"Column 2"})}),n.jsx(e,{span:4,children:n.jsx(s,{children:"Column 3"})})]})]})]}),C=()=>n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"16px"},children:"Resize the browser window to see the responsive behavior"}),n.jsxs(t,{gutter:16,children:[n.jsx(e,{xs:24,sm:12,md:8,lg:6,xl:4,children:n.jsx(s,{children:"Col"})}),n.jsx(e,{xs:24,sm:12,md:8,lg:6,xl:4,children:n.jsx(s,{children:"Col"})}),n.jsx(e,{xs:24,sm:12,md:8,lg:6,xl:4,children:n.jsx(s,{children:"Col"})}),n.jsx(e,{xs:24,sm:12,md:8,lg:6,xl:4,children:n.jsx(s,{children:"Col"})}),n.jsx(e,{xs:24,sm:12,md:8,lg:6,xl:4,children:n.jsx(s,{children:"Col"})}),n.jsx(e,{xs:24,sm:12,md:8,lg:6,xl:4,children:n.jsx(s,{children:"Col"})})]})]}),x=()=>n.jsxs(t,{gutter:16,children:[n.jsx(e,{span:8,children:n.jsx(s,{children:"Col-8"})}),n.jsx(e,{span:16,children:n.jsxs(t,{gutter:8,children:[n.jsx(e,{span:8,children:n.jsx(s,{children:"Col-8"})}),n.jsx(e,{span:8,children:n.jsx(s,{children:"Col-8"})}),n.jsx(e,{span:8,children:n.jsx(s,{children:"Col-8"})})]})})]});o.__docgenInfo={description:"",methods:[],displayName:"BasicGrid"};r.__docgenInfo={description:"",methods:[],displayName:"DifferentWidths"};m.__docgenInfo={description:"",methods:[],displayName:"GutterOptions"};d.__docgenInfo={description:"",methods:[],displayName:"ColumnOffset"};a.__docgenInfo={description:"",methods:[],displayName:"AlignmentOptions"};u.__docgenInfo={description:"",methods:[],displayName:"JustificationOptions"};C.__docgenInfo={description:"",methods:[],displayName:"ResponsiveGrid"};x.__docgenInfo={description:"",methods:[],displayName:"NestedGrid"};var c,p,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Row gutter={16}>
    <Column span={8}>
      <Cell>Column 1</Cell>
    </Column>
    <Column span={8}>
      <Cell>Column 2</Cell>
    </Column>
    <Column span={8}>
      <Cell>Column 3</Cell>
    </Column>
  </Row>`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,j,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Row gutter={16}>
    <Column span={6}>
      <Cell>span=6</Cell>
    </Column>
    <Column span={12}>
      <Cell>span=12</Cell>
    </Column>
    <Column span={6}>
      <Cell>span=6</Cell>
    </Column>
  </Row>`,...(f=(j=r.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var y,w,$;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '32px'
}}>
    <div>
      <p style={{
      marginBottom: '16px'
    }}>Gutter: 8px</p>
      <Row gutter={8}>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
      </Row>
    </div>
    
    <div>
      <p style={{
      marginBottom: '16px'
    }}>Gutter: 16px</p>
      <Row gutter={16}>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
      </Row>
    </div>
    
    <div>
      <p style={{
      marginBottom: '16px'
    }}>Gutter: 32px</p>
      <Row gutter={32}>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
      </Row>
    </div>
  </div>`,...($=(w=m.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var v,R,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
}}>
    <Row gutter={16}>
      <Column span={8}>
        <Cell>span=8</Cell>
      </Column>
      <Column span={8} offset={8}>
        <Cell>span=8 offset=8</Cell>
      </Column>
    </Row>
    <Row gutter={16}>
      <Column span={6} offset={6}>
        <Cell>span=6 offset=6</Cell>
      </Column>
      <Column span={6} offset={6}>
        <Cell>span=6 offset=6</Cell>
      </Column>
    </Row>
    <Row gutter={16}>
      <Column span={12} offset={6}>
        <Cell>span=12 offset=6</Cell>
      </Column>
    </Row>
  </div>`,...(b=(R=d.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var B,G,_;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '32px'
}}>
    <div>
      <p style={{
      marginBottom: '16px'
    }}>Align: flex-start</p>
      <Row gutter={16} align="flex-start">
        <Column span={8}>
          <Cell height="120px">Column 1</Cell>
        </Column>
        <Column span={8}>
          <Cell height="80px">Column 2</Cell>
        </Column>
        <Column span={8}>
          <Cell height="160px">Column 3</Cell>
        </Column>
      </Row>
    </div>
    
    <div>
      <p style={{
      marginBottom: '16px'
    }}>Align: center</p>
      <Row gutter={16} align="center">
        <Column span={8}>
          <Cell height="120px">Column 1</Cell>
        </Column>
        <Column span={8}>
          <Cell height="80px">Column 2</Cell>
        </Column>
        <Column span={8}>
          <Cell height="160px">Column 3</Cell>
        </Column>
      </Row>
    </div>
    
    <div>
      <p style={{
      marginBottom: '16px'
    }}>Align: flex-end</p>
      <Row gutter={16} align="flex-end">
        <Column span={8}>
          <Cell height="120px">Column 1</Cell>
        </Column>
        <Column span={8}>
          <Cell height="80px">Column 2</Cell>
        </Column>
        <Column span={8}>
          <Cell height="160px">Column 3</Cell>
        </Column>
      </Row>
    </div>
  </div>`,...(_=(G=a.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var O,A,D;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '32px'
}}>
    <div>
      <p style={{
      marginBottom: '16px'
    }}>Justify: flex-start</p>
      <Row gutter={16} justify="flex-start">
        <Column span={4}>
          <Cell>Column 1</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 2</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 3</Cell>
        </Column>
      </Row>
    </div>
    
    <div>
      <p style={{
      marginBottom: '16px'
    }}>Justify: center</p>
      <Row gutter={16} justify="center">
        <Column span={4}>
          <Cell>Column 1</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 2</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 3</Cell>
        </Column>
      </Row>
    </div>
    
    <div>
      <p style={{
      marginBottom: '16px'
    }}>Justify: flex-end</p>
      <Row gutter={16} justify="flex-end">
        <Column span={4}>
          <Cell>Column 1</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 2</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 3</Cell>
        </Column>
      </Row>
    </div>
    
    <div>
      <p style={{
      marginBottom: '16px'
    }}>Justify: space-between</p>
      <Row gutter={16} justify="space-between">
        <Column span={4}>
          <Cell>Column 1</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 2</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 3</Cell>
        </Column>
      </Row>
    </div>
  </div>`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var J,N,k;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`() => <div>
    <p style={{
    marginBottom: '16px'
  }}>Resize the browser window to see the responsive behavior</p>
    <Row gutter={16}>
      <Column xs={24} sm={12} md={8} lg={6} xl={4}>
        <Cell>Col</Cell>
      </Column>
      <Column xs={24} sm={12} md={8} lg={6} xl={4}>
        <Cell>Col</Cell>
      </Column>
      <Column xs={24} sm={12} md={8} lg={6} xl={4}>
        <Cell>Col</Cell>
      </Column>
      <Column xs={24} sm={12} md={8} lg={6} xl={4}>
        <Cell>Col</Cell>
      </Column>
      <Column xs={24} sm={12} md={8} lg={6} xl={4}>
        <Cell>Col</Cell>
      </Column>
      <Column xs={24} sm={12} md={8} lg={6} xl={4}>
        <Cell>Col</Cell>
      </Column>
    </Row>
  </div>`,...(k=(N=C.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var I,S,Y;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Row gutter={16}>
    <Column span={8}>
      <Cell>Col-8</Cell>
    </Column>
    <Column span={16}>
      <Row gutter={8}>
        <Column span={8}>
          <Cell>Col-8</Cell>
        </Column>
        <Column span={8}>
          <Cell>Col-8</Cell>
        </Column>
        <Column span={8}>
          <Cell>Col-8</Cell>
        </Column>
      </Row>
    </Column>
  </Row>`,...(Y=(S=x.parameters)==null?void 0:S.docs)==null?void 0:Y.source}}};const H=["BasicGrid","DifferentWidths","GutterOptions","ColumnOffset","AlignmentOptions","JustificationOptions","ResponsiveGrid","NestedGrid"];export{a as AlignmentOptions,o as BasicGrid,d as ColumnOffset,r as DifferentWidths,m as GutterOptions,u as JustificationOptions,x as NestedGrid,C as ResponsiveGrid,H as __namedExportsOrder,F as default};
