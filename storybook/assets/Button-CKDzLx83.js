import{j as i}from"./jsx-runtime-DiklIkkE.js";import{l as a,d as p}from"./styled-components.browser.esm-Dz5yS7sT.js";const u=r=>{switch(r){case"small":return a`
        font-size: ${t=>{var e,o;return((o=(e=t.theme.typography)==null?void 0:e.fontSize)==null?void 0:o.xs)||"12px"}};
        padding: ${t=>{var e;return((e=t.theme.spacing)==null?void 0:e.xs)||"4px"}} ${t=>{var e;return((e=t.theme.spacing)==null?void 0:e.sm)||"8px"}};
        height: 32px;
      `;case"large":return a`
        font-size: ${t=>{var e,o;return((o=(e=t.theme.typography)==null?void 0:e.fontSize)==null?void 0:o.md)||"16px"}};
        padding: ${t=>{var e;return((e=t.theme.spacing)==null?void 0:e.sm)||"8px"}} ${t=>{var e;return((e=t.theme.spacing)==null?void 0:e.md)||"16px"}};
        height: 48px;
      `;case"medium":default:return a`
        font-size: ${t=>{var e,o;return((o=(e=t.theme.typography)==null?void 0:e.fontSize)==null?void 0:o.sm)||"14px"}};
        padding: ${t=>{var e;return((e=t.theme.spacing)==null?void 0:e.sm)||"8px"}} ${t=>{var e;return((e=t.theme.spacing)==null?void 0:e.md)||"16px"}};
        height: 40px;
      `}},f=r=>{switch(r){case"primary":return a`
        background-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primary)||"#1890ff"}};
        color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.white)||"#ffffff"}};
        border: 1px solid ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primary)||"#1890ff"}};
        
        &:hover:not(:disabled) {
          background-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primaryHover)||"#40a9ff"}};
          border-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primaryHover)||"#40a9ff"}};
        }
        
        &:active:not(:disabled) {
          background-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primaryActive)||"#096dd9"}};
          border-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primaryActive)||"#096dd9"}};
        }
      `;case"secondary":return a`
        background-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.secondary)||"#7c4dff"}};
        color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.white)||"#ffffff"}};
        border: 1px solid ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.secondary)||"#7c4dff"}};
        
        &:hover:not(:disabled) {
          background-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.secondaryHover)||"#9370ff"}};
          border-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.secondaryHover)||"#9370ff"}};
        }
        
        &:active:not(:disabled) {
          background-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.secondaryActive)||"#651fff"}};
          border-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.secondaryActive)||"#651fff"}};
        }
      `;case"outline":return a`
        background-color: transparent;
        color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primary)||"#1890ff"}};
        border: 1px solid ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primary)||"#1890ff"}};
        
        &:hover:not(:disabled) {
          color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primaryHover)||"#40a9ff"}};
          border-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primaryHover)||"#40a9ff"}};
          background-color: ${t=>{var e;return`${((e=t.theme.colors)==null?void 0:e.primary)||"#1890ff"}10`}};
        }
        
        &:active:not(:disabled) {
          color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primaryActive)||"#096dd9"}};
          border-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primaryActive)||"#096dd9"}};
          background-color: ${t=>{var e;return`${((e=t.theme.colors)==null?void 0:e.primary)||"#1890ff"}20`}};
        }
      `;case"text":return a`
        background-color: transparent;
        color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.textPrimary)||"#000000"}};
        border: 1px solid transparent;
        
        &:hover:not(:disabled) {
          background-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.bgContainer)||"#f5f5f5"}};
        }
        
        &:active:not(:disabled) {
          background-color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.bgContainerActive)||"#e0e0e0"}};
        }
      `;case"link":return a`
        background-color: transparent;
        color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primary)||"#1890ff"}};
        border: 1px solid transparent;
        padding: 0;
        height: auto;
        
        &:hover:not(:disabled) {
          color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primaryHover)||"#40a9ff"}};
          text-decoration: underline;
        }
        
        &:active:not(:disabled) {
          color: ${t=>{var e;return((e=t.theme.colors)==null?void 0:e.primaryActive)||"#096dd9"}};
        }
      `;default:return a``}},h=p.button`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${r=>{var t;return r.rounded?"50px":((t=r.theme.radii)==null?void 0:t.md)||"6px"}};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-family: ${r=>{var t;return((t=r.theme.typography)==null?void 0:t.fontFamily)||"inherit"}};
  font-weight: ${r=>{var t,e;return((e=(t=r.theme.typography)==null?void 0:t.fontWeight)==null?void 0:e.medium)||"500"}};
  white-space: nowrap;
  box-sizing: border-box;
  position: relative;
  
  /* Apply size styles */
  ${r=>u(r.size||"medium")}
  
  /* Apply variant styles */
  ${r=>f(r.variant||"primary")}
  
  /* Block style */
  ${r=>r.block&&a`
    width: 100%;
    display: flex;
  `}
  
  /* Margin styles */
  margin-top: ${r=>r.mt||"0"};
  margin-bottom: ${r=>r.mb||"0"};
  margin-left: ${r=>r.ml||"0"};
  margin-right: ${r=>r.mr||"0"};
  
  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none;
  }
  
  /* Focus state */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${r=>{var t,e;return r.variant==="primary"||r.variant==="secondary"?`${((t=r.theme.colors)==null?void 0:t.white)||"#ffffff"}33`:`${((e=r.theme.colors)==null?void 0:e.primary)||"#1890ff"}33`}};
  }
  
  /* Icon spacing */
  .left-icon {
    margin-right: ${r=>{var t;return((t=r.theme.spacing)==null?void 0:t.xs)||"4px"}};
  }
  
  .right-icon {
    margin-left: ${r=>{var t;return((t=r.theme.spacing)==null?void 0:t.xs)||"4px"}};
  }
  
  /* Loading styles */
  .button-loader {
    margin-right: ${r=>{var t;return((t=r.theme.spacing)==null?void 0:t.xs)||"4px"}};
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,y=({children:r,leftIcon:t,rightIcon:e,type:o="button",disabled:s=!1,loading:n=!1,...l})=>{const d=n?i.jsx("span",{className:"button-loader","aria-hidden":"true",children:"◠"}):null,c=t?i.jsx("span",{className:"left-icon",children:t}):null,m=e?i.jsx("span",{className:"right-icon",children:e}):null;return i.jsxs(h,{type:o,disabled:s||n,"aria-busy":n,...l,children:[n&&d,!n&&c,r,!n&&m]})};y.__docgenInfo={description:`Button component with various style options

Features:
- Multiple style variants (primary, secondary, outline, text, link)
- Three size options (small, medium, large)
- Loading state
- Disabled state
- Block (full-width) option
- Left and right icon support
- Ant Design styling with modern rounded aesthetics`,methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline' | 'text' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'text'"},{name:"literal",value:"'link'"}]},description:"Button variant style"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Button size"},block:{required:!1,tsType:{name:"boolean"},description:"Set button to full width of container"},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Make button appear disabled",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display before button text"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display after button text"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"Button type attribute",defaultValue:{value:"'button'",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"Makes button have a rounded shape"},mb:{required:!1,tsType:{name:"string"},description:"Add margin bottom"},mt:{required:!1,tsType:{name:"string"},description:"Add margin top"},ml:{required:!1,tsType:{name:"string"},description:"Add margin left"},mr:{required:!1,tsType:{name:"string"},description:"Add margin right"}}};export{y as B};
