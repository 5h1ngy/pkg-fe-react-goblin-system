import{j as r}from"./jsx-runtime-DiklIkkE.js";import{d as i}from"./styled-components.browser.esm-Dz5yS7sT.js";const c=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${t=>t.verticalCenter?"center":"flex-start"};
  text-align: center;
  padding: ${t=>{var e;return((e=t.theme.spacing)==null?void 0:e.xl)||"2rem"}};
  width: 100%;
  min-height: ${t=>t.verticalCenter?"100%":"auto"};
  border-radius: ${t=>{var e;return((e=t.theme.borderRadius)==null?void 0:e.lg)||"8px"}};
  background-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.background)||"#ffffff"}};
  transition: all 0.3s ease;
`,m=i.div`
  font-size: 4rem;
  margin-bottom: ${t=>{var e;return((e=t.theme.spacing)==null?void 0:e.lg)||"1.5rem"}};
  color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primary)||"#1890ff"}};
  
  svg {
    width: 4rem;
    height: 4rem;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`,l=i.h3`
  font-size: ${t=>{var e,n;return((n=(e=t.theme.typography)==null?void 0:e.fontSize)==null?void 0:n.xl)||"1.5rem"}};
  font-weight: ${t=>{var e,n;return((n=(e=t.theme.typography)==null?void 0:e.fontWeight)==null?void 0:n.semibold)||"600"}};
  margin: 0 0 ${t=>{var e;return((e=t.theme.spacing)==null?void 0:e.sm)||"0.5rem"}};
  color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.textPrimary)||"rgba(0, 0, 0, 0.85)"}};
  letter-spacing: -0.01em;
`,d=i.p`
  font-size: ${t=>{var e,n;return((n=(e=t.theme.typography)==null?void 0:e.fontSize)==null?void 0:n.md)||"1rem"}};
  color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.textSecondary)||"rgba(0, 0, 0, 0.65)"}};
  margin: 0 0 ${t=>{var e;return((e=t.theme.spacing)==null?void 0:e.lg)||"1.5rem"}};
  max-width: 480px;
  line-height: 1.6;
`,p=i.div`
  margin-top: ${t=>{var e;return((e=t.theme.spacing)==null?void 0:e.md)||"1rem"}};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${t=>{var e;return((e=t.theme.spacing)==null?void 0:e.md)||"1rem"}};
  
  & > * {
    margin-bottom: ${t=>{var e;return((e=t.theme.spacing)==null?void 0:e.sm)||"0.5rem"}};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,h=({icon:t,title:e,description:n,children:o,verticalCenter:a=!1,className:s})=>r.jsxs(c,{verticalCenter:a,className:s,children:[t&&r.jsx(m,{children:t}),r.jsx(l,{children:e}),n&&r.jsx(d,{children:n}),o&&r.jsx(p,{children:o})]});h.__docgenInfo={description:`EmptyState component for displaying placeholder content
when there's no data or an error occurs

Features:
- Customizable icon, title, and description
- Support for action buttons or other children
- Option to center vertically in container
- Ant Design styling with modern rounded aesthetics`,methods:[],displayName:"EmptyState",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display at the top of the empty state"},title:{required:!0,tsType:{name:"string"},description:"Main title text"},description:{required:!1,tsType:{name:"string"},description:"Optional description text"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional action elements (buttons, links)"},verticalCenter:{required:!1,tsType:{name:"boolean"},description:"Center the content vertically",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};export{h as E};
