import{j as n}from"./jsx-runtime-DiklIkkE.js";import{T as N}from"./ThemeProvider-CSjwFnpO.js";import{d as E}from"./styled-components.browser.esm-Dz5yS7sT.js";import{T as m}from"./Text-KC_a2r1h.js";import"./index-DRjF_FHU.js";import"./theme-_dwbflR3.js";const c=E.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  
  /* Max width based on prop or theme breakpoints */
  max-width: ${e=>e.fluid?"100%":e.maxWidth?e.maxWidth:e.theme.breakpoints.lg};
  
  /* Padding */
  padding: ${e=>e.disableGutters?"0":e.p||e.theme.spacing.md};
  padding-top: ${e=>e.disableGutters?"0":e.pt||e.py||e.p||e.theme.spacing.md};
  padding-right: ${e=>e.disableGutters?"0":e.pr||e.px||e.p||e.theme.spacing.md};
  padding-bottom: ${e=>e.disableGutters?"0":e.pb||e.py||e.p||e.theme.spacing.md};
  padding-left: ${e=>e.disableGutters?"0":e.pl||e.px||e.p||e.theme.spacing.md};
  
  /* Margin */
  margin: ${e=>e.m||""};
  margin-top: ${e=>e.mt||e.my||e.m||""};
  margin-right: ${e=>e.mr||e.mx||e.m||""};
  margin-bottom: ${e=>e.mb||e.my||e.m||""};
  margin-left: ${e=>e.ml||e.mx||e.m||""};
  
  /* Background and border radius */
  background-color: ${e=>e.bg||"transparent"};
  border-radius: ${e=>e.borderRadius||e.theme.radii.sm};
`,L={title:"Components/Layout/Container",component:c,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>n.jsx(N,{children:n.jsx(e,{})})]},a={args:{children:n.jsx("div",{style:{padding:"20px",background:"#f0f0f0"},children:"Container content"})}},r={args:{fluid:!0,children:n.jsx("div",{style:{padding:"20px",background:"#f0f0f0",width:"100%"},children:"Fluid container takes up full width"})}},i={args:{maxWidth:"600px",children:n.jsx("div",{style:{padding:"20px",background:"#f0f0f0",width:"100%"},children:"Container with 600px max width"})}},d={args:{padding:"32px",children:n.jsx("div",{style:{padding:"20px",background:"#f0f0f0"},children:"Container with 32px padding"})}},o={args:{disableGutters:!0,children:n.jsx("div",{style:{padding:"20px",background:"#f0f0f0"},children:"Container without gutters (no margin)"})}},s={args:{style:{backgroundColor:"#e6f7ff",border:"1px solid #1890ff",borderRadius:"8px"},children:n.jsx("div",{style:{padding:"20px"},children:"Container with custom styling"})}},t=()=>n.jsx(c,{style:{width:"100%",maxWidth:"800px"},children:n.jsxs("div",{style:{padding:"20px",background:"#f5f5f5",borderRadius:"8px"},children:[n.jsx(m,{variant:"body1",style:{marginBottom:"16px"},children:"This is a container with nested content. Containers are useful for maintaining consistent widths and centering content on the page."}),n.jsx(c,{style:{backgroundColor:"#e6f7ff",borderRadius:"4px",marginBottom:"16px"},children:n.jsx("div",{style:{padding:"16px"},children:n.jsx(m,{variant:"body2",children:"You can nest containers to create more complex layouts."})})}),n.jsx(c,{style:{backgroundColor:"#f6ffed",borderRadius:"4px"},children:n.jsx("div",{style:{padding:"16px"},children:n.jsx(m,{variant:"body2",children:"Each container can have its own styling and behavior."})})})]})});t.__docgenInfo={description:"",methods:[],displayName:"WithNestedContent"};var l,g,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      padding: '20px',
      background: '#f0f0f0'
    }}>Container content</div>
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,h,p;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    fluid: true,
    children: <div style={{
      padding: '20px',
      background: '#f0f0f0',
      width: '100%'
    }}>Fluid container takes up full width</div>
  }
}`,...(p=(h=r.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var f,b,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    maxWidth: '600px',
    children: <div style={{
      padding: '20px',
      background: '#f0f0f0',
      width: '100%'
    }}>Container with 600px max width</div>
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,C,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    padding: '32px',
    children: <div style={{
      padding: '20px',
      background: '#f0f0f0'
    }}>Container with 32px padding</div>
  }
}`,...(w=(C=d.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var k,j,$;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disableGutters: true,
    children: <div style={{
      padding: '20px',
      background: '#f0f0f0'
    }}>Container without gutters (no margin)</div>
  }
}`,...($=(j=o.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var T,W,R;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    style: {
      backgroundColor: '#e6f7ff',
      border: '1px solid #1890ff',
      borderRadius: '8px'
    },
    children: <div style={{
      padding: '20px'
    }}>Container with custom styling</div>
  }
}`,...(R=(W=s.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var G,S,B;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Container style={{
    width: '100%',
    maxWidth: '800px'
  }}>
      <div style={{
      padding: '20px',
      background: '#f5f5f5',
      borderRadius: '8px'
    }}>
        <Text variant="body1" style={{
        marginBottom: '16px'
      }}>
          This is a container with nested content. Containers are useful for maintaining consistent 
          widths and centering content on the page.
        </Text>
        <Container style={{
        backgroundColor: '#e6f7ff',
        borderRadius: '4px',
        marginBottom: '16px'
      }}>
          <div style={{
          padding: '16px'
        }}>
            <Text variant="body2">
              You can nest containers to create more complex layouts.
            </Text>
          </div>
        </Container>
        <Container style={{
        backgroundColor: '#f6ffed',
        borderRadius: '4px'
      }}>
          <div style={{
          padding: '16px'
        }}>
            <Text variant="body2">
              Each container can have its own styling and behavior.
            </Text>
          </div>
        </Container>
      </div>
    </Container>;
}`,...(B=(S=t.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const O=["Basic","Fluid","CustomMaxWidth","CustomPadding","NoGutters","CustomStyle","WithNestedContent"];export{a as Basic,i as CustomMaxWidth,d as CustomPadding,s as CustomStyle,r as Fluid,o as NoGutters,t as WithNestedContent,O as __namedExportsOrder,L as default};
