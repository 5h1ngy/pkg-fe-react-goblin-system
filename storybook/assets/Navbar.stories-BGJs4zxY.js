import{j as t}from"./jsx-runtime-DiklIkkE.js";import{T as H}from"./ThemeProvider-CSjwFnpO.js";import{r as D}from"./index-DRjF_FHU.js";import{l as z,d as n}from"./styled-components.browser.esm-Dz5yS7sT.js";import{B as N}from"./Button-CKDzLx83.js";import"./theme-_dwbflR3.js";const M=n.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
  background-color: ${e=>e.bgColor||e.theme.colors.bgElevated};
  color: ${e=>e.textColor||e.theme.colors.textPrimary};
  width: 100%;
  z-index: 1000;
  box-shadow: ${e=>e.theme.shadows.sm};
  
  ${e=>e.fixed&&z`
    position: fixed;
    top: 0;
    left: 0;
  `}
  
  @media (max-width: ${e=>e.mobileBreakpoint}) {
    padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
  }
`,U=n.div`
  display: flex;
  align-items: center;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  margin-right: ${e=>e.theme.spacing.lg};
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  img {
    max-height: 40px;
  }
`,V=n.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${e=>e.mobileBreakpoint}) {
    flex-basis: 100%;
    flex-grow: 1;
    overflow: hidden;
    max-height: ${e=>e.expanded?"1000px":"0"};
    transition: max-height 0.3s ease-in-out;
  }
`,O=n.ul`
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    width: 100%;
  }
`,Y=n.li`
  margin: 0 ${e=>e.theme.spacing.sm};
  
  a, button {
    display: block;
    padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
    color: ${e=>e.active?e.theme.colors.primary:"inherit"};
    text-decoration: none;
    border-radius: ${e=>e.theme.radii.sm};
    background: none;
    border: none;
    font-size: ${e=>e.theme.typography.fontSize.md};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    opacity: ${e=>e.disabled?.6:1};
    font-weight: ${e=>e.active?e.theme.typography.fontWeight.medium:"inherit"};
    transition: color 0.2s, background-color 0.2s;
    
    &:hover, &:focus {
      ${e=>!e.disabled&&z`
        color: ${e.theme.colors.primary};
        background-color: ${`${e.theme.colors.primary}11`};
      `}
    }
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    margin: ${e=>e.theme.spacing.xs} 0;
    width: 100%;
    
    a, button {
      width: 100%;
      text-align: left;
    }
  }
`,G=n.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    margin-top: ${e=>e.theme.spacing.md};
    justify-content: flex-start;
  }
`,J=n.button`
  display: none;
  background: none;
  border: none;
  padding: ${e=>e.theme.spacing.sm};
  color: inherit;
  cursor: pointer;
  border-radius: ${e=>e.theme.radii.sm};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>`${e.theme.colors.primary}33`};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
  }
  
  /* Hamburger icon with animated transition */
  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: currentColor;
    border-radius: 3px;
    transition: transform 0.2s ease-in-out;
    
    &:nth-child(1) {
      transform: ${e=>e.expanded?"translateY(9px) rotate(45deg)":"none"};
    }
    
    &:nth-child(2) {
      opacity: ${e=>e.expanded?0:1};
    }
    
    &:nth-child(3) {
      transform: ${e=>e.expanded?"translateY(-9px) rotate(-45deg)":"none"};
    }
  }
`,r=({active:e=!1,children:i,disabled:a=!1,onClick:d,href:c,className:f})=>{const x=c?t.jsx("a",{href:c,onClick:a?void 0:d,children:i}):t.jsx("button",{type:"button",onClick:a?void 0:d,disabled:a,children:i});return t.jsx(Y,{active:e,disabled:a,className:f,children:x})},E=({brand:e,children:i,rightItems:a,fixed:d=!1,bgColor:c,textColor:f,className:x,mobileBreakpoint:g="768px",expanded:v,onToggle:o})=>{const[L,_]=D.useState(!1),b=typeof v<"u",s=b?v:L,W=()=>{b||_(!s),o==null||o(!s)};return t.jsxs(M,{fixed:d,bgColor:c,textColor:f,className:x,mobileBreakpoint:g,children:[e&&t.jsx(U,{children:e}),t.jsxs(J,{"aria-label":s?"Close menu":"Open menu",expanded:s,onClick:W,children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]}),t.jsxs(V,{expanded:s,mobileBreakpoint:g,children:[i&&t.jsx(O,{children:i}),a&&t.jsx(G,{children:a})]})]})};r.__docgenInfo={description:`NavItem component for navigation items in the navbar

Features:
- Support for active state
- Link or button rendering based on props
- Disabled state`,methods:[],displayName:"NavItem",props:{active:{required:!1,tsType:{name:"boolean"},description:"Whether the item is active/current",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Nav item content"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the item is disabled",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},href:{required:!1,tsType:{name:"string"},description:"URL for link items"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};E.__docgenInfo={description:`Navbar component for site navigation

Features:
- Responsive design with mobile hamburger menu
- Support for brand/logo
- Right-aligned items
- Fixed positioning option
- Customizable colors`,methods:[],displayName:"Navbar",props:{brand:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Brand/logo element to display"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Nav items to display"},rightItems:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Right aligned items"},fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position at top of viewport",defaultValue:{value:"false",computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:"Navbar background color"},textColor:{required:!1,tsType:{name:"string"},description:"Navbar text color"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},mobileBreakpoint:{required:!1,tsType:{name:"string"},description:"Override the mobile breakpoint (default is 768px)",defaultValue:{value:"'768px'",computed:!1}},expanded:{required:!1,tsType:{name:"boolean"},description:"Controls if the navbar is expanded on mobile"},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:"Callback when mobile menu button is clicked"}}};const re={title:"Components/Navigation/Navbar",component:E,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[e=>t.jsx(H,{children:t.jsx(e,{})})]},l={args:{brand:t.jsx("a",{href:"#",children:"Brand Logo"}),children:t.jsxs(t.Fragment,{children:[t.jsx(r,{href:"#",active:!0,children:"Home"}),t.jsx(r,{href:"#",children:"Features"}),t.jsx(r,{href:"#",children:"Pricing"}),t.jsx(r,{href:"#",children:"About"}),t.jsx(r,{href:"#",disabled:!0,children:"Disabled"})]})}},m={args:{brand:t.jsx("a",{href:"#",children:"Brand Logo"}),children:t.jsxs(t.Fragment,{children:[t.jsx(r,{href:"#",active:!0,children:"Home"}),t.jsx(r,{href:"#",children:"Features"}),t.jsx(r,{href:"#",children:"Pricing"}),t.jsx(r,{href:"#",children:"About"})]}),rightItems:t.jsxs(t.Fragment,{children:[t.jsx(N,{size:"small",variant:"outline",mr:"8px",children:"Login"}),t.jsx(N,{size:"small",variant:"primary",children:"Sign Up"})]})}},h={args:{brand:t.jsx("a",{href:"#",children:"Fixed Navbar"}),children:t.jsxs(t.Fragment,{children:[t.jsx(r,{href:"#",active:!0,children:"Home"}),t.jsx(r,{href:"#",children:"Features"}),t.jsx(r,{href:"#",children:"Pricing"}),t.jsx(r,{href:"#",children:"About"})]}),fixed:!0},decorators:[e=>t.jsx(H,{children:t.jsxs("div",{children:[t.jsx(e,{}),t.jsxs("div",{style:{padding:"20px",marginTop:"70px"},children:[t.jsx("h1",{children:"Content below fixed navbar"}),t.jsx("p",{children:"Scroll down to see the navbar stay fixed at the top."}),Array(10).fill(0).map((i,a)=>t.jsxs("p",{children:["This is paragraph ",a+1," to demonstrate scrolling content."]},a))]})]})})]},p={args:{brand:t.jsx("a",{href:"#",children:"Colored Navbar"}),children:t.jsxs(t.Fragment,{children:[t.jsx(r,{href:"#",active:!0,children:"Home"}),t.jsx(r,{href:"#",children:"Features"}),t.jsx(r,{href:"#",children:"Pricing"}),t.jsx(r,{href:"#",children:"About"})]}),bgColor:"#2c3e50",textColor:"#ecf0f1"}},u={args:{brand:t.jsx("a",{href:"#",children:"Mobile Expanded"}),children:t.jsxs(t.Fragment,{children:[t.jsx(r,{href:"#",active:!0,children:"Home"}),t.jsx(r,{href:"#",children:"Features"}),t.jsx(r,{href:"#",children:"Pricing"}),t.jsx(r,{href:"#",children:"About"})]}),expanded:!0}};var y,j,I;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    brand: <a href="#">Brand Logo</a>,
    children: <>
        <NavItem href="#" active>Home</NavItem>
        <NavItem href="#">Features</NavItem>
        <NavItem href="#">Pricing</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#" disabled>Disabled</NavItem>
      </>
  }
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var $,w,C;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    brand: <a href="#">Brand Logo</a>,
    children: <>
        <NavItem href="#" active>Home</NavItem>
        <NavItem href="#">Features</NavItem>
        <NavItem href="#">Pricing</NavItem>
        <NavItem href="#">About</NavItem>
      </>,
    rightItems: <>
        <Button size="small" variant="outline" mr="8px">Login</Button>
        <Button size="small" variant="primary">Sign Up</Button>
      </>
  }
}`,...(C=(w=m.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,F,R;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    brand: <a href="#">Fixed Navbar</a>,
    children: <>
        <NavItem href="#" active>Home</NavItem>
        <NavItem href="#">Features</NavItem>
        <NavItem href="#">Pricing</NavItem>
        <NavItem href="#">About</NavItem>
      </>,
    fixed: true
  },
  decorators: [Story => <ThemeProvider>
        <div>
          <Story />
          <div style={{
        padding: '20px',
        marginTop: '70px'
      }}>
            <h1>Content below fixed navbar</h1>
            <p>Scroll down to see the navbar stay fixed at the top.</p>
            {Array(10).fill(0).map((_, i) => <p key={i}>
                This is paragraph {i + 1} to demonstrate scrolling content.
              </p>)}
          </div>
        </div>
      </ThemeProvider>]
}`,...(R=(F=h.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var S,T,q;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    brand: <a href="#">Colored Navbar</a>,
    children: <>
        <NavItem href="#" active>Home</NavItem>
        <NavItem href="#">Features</NavItem>
        <NavItem href="#">Pricing</NavItem>
        <NavItem href="#">About</NavItem>
      </>,
    bgColor: '#2c3e50',
    textColor: '#ecf0f1'
  }
}`,...(q=(T=p.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var A,B,P;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    brand: <a href="#">Mobile Expanded</a>,
    children: <>
        <NavItem href="#" active>Home</NavItem>
        <NavItem href="#">Features</NavItem>
        <NavItem href="#">Pricing</NavItem>
        <NavItem href="#">About</NavItem>
      </>,
    expanded: true
  }
}`,...(P=(B=u.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const ae=["Default","WithRightItems","Fixed","CustomColors","ExpandedMobile"];export{p as CustomColors,l as Default,u as ExpandedMobile,h as Fixed,m as WithRightItems,ae as __namedExportsOrder,re as default};
