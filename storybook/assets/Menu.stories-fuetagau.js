import{j as e}from"./jsx-runtime-DiklIkkE.js";import{T as _}from"./ThemeProvider-CSjwFnpO.js";import{r as M}from"./index-DRjF_FHU.js";import{l as s,d as u}from"./styled-components.browser.esm-Dz5yS7sT.js";import{B as Z}from"./Button-CKDzLx83.js";import"./theme-_dwbflR3.js";const F=t=>{switch(t){case"top":return s`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: ${n=>n.theme.spacing.xs};
      `;case"right":return s`
        left: 100%;
        top: 0;
        margin-left: ${n=>n.theme.spacing.xs};
      `;case"left":return s`
        right: 100%;
        top: 0;
        margin-right: ${n=>n.theme.spacing.xs};
      `;case"bottom":default:return s`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: ${n=>n.theme.spacing.xs};
      `}},A=u.ul`
  list-style: none;
  padding: ${t=>t.theme.spacing.xs} 0;
  margin: 0;
  background-color: ${t=>t.theme.colors.bgElevated};
  border-radius: ${t=>t.theme.radii.md};
  width: ${t=>t.width||"auto"};
  z-index: 1050;
  
  ${t=>t.maxHeight&&s`
    max-height: ${t.maxHeight};
    overflow-y: auto;
  `}
  
  ${t=>t.withShadow&&s`
    box-shadow: ${n=>n.theme.shadows.md};
  `}
  
  ${t=>t.withBorder&&s`
    border: 1px solid ${n=>n.theme.colors.borderBase};
  `}
  
  ${t=>t.dropdown&&s`
    position: absolute;
    ${F(t.placement)}
  `}
`,z=u.li`
  position: relative;
  margin: 0;
  padding: 0;
  
  a, button {
    display: flex;
    align-items: center;
    text-decoration: none;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    padding: ${t=>`${t.theme.spacing.sm} ${t.theme.spacing.md}`};
    color: ${t=>t.active?t.theme.colors.primary:t.theme.colors.textPrimary};
    font-size: ${t=>t.theme.typography.fontSize.sm};
    cursor: ${t=>t.disabled?"not-allowed":"pointer"};
    opacity: ${t=>t.disabled?.6:1};
    transition: background-color 0.2s;
    
    &:hover, &:focus {
      ${t=>!t.disabled&&s`
        background-color: ${`${t.theme.colors.bgContainer}`};
        outline: none;
      `}
    }
  }
`,X=u.span`
  display: inline-flex;
  align-items: center;
  margin-right: ${t=>t.theme.spacing.sm};
  
  svg {
    width: 16px;
    height: 16px;
  }
`,U=u.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  
  svg {
    width: 14px;
    height: 14px;
  }
`,G=u.li`
  height: 1px;
  margin: ${t=>t.theme.spacing.xs} 0;
  background-color: ${t=>t.theme.colors.borderLight};
`,J=u.li`
  padding: ${t=>`${t.theme.spacing.sm} ${t.theme.spacing.md}`};
  font-weight: ${t=>t.theme.typography.fontWeight.bold};
  color: ${t=>t.theme.colors.textSecondary};
  font-size: ${t=>t.theme.typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 1px;
`,L=({children:t,isOpen:n=!0,onClose:o,className:i,dropdown:c=!1,triggerRef:a,placement:w="bottom",width:j,maxHeight:l,withShadow:m=!0,withBorder:p=!1})=>{const k=M.useRef(null);return M.useEffect(()=>{const b=I=>{n&&(a!=null&&a.current&&a.current.contains(I.target)||k.current&&!k.current.contains(I.target)&&(o==null||o()))};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[n,o,a]),n?e.jsx(A,{ref:k,dropdown:c,className:i,placement:w,width:j,maxHeight:l,withShadow:m,withBorder:p,role:"menu",children:t}):null},r=({children:t,onClick:n,active:o=!1,disabled:i=!1,href:c,icon:a,hasSubmenu:w=!1,className:j})=>{const l=p=>{if(i){p.preventDefault();return}n==null||n(p)},m=e.jsxs(e.Fragment,{children:[a&&e.jsx(X,{children:a}),e.jsx("span",{children:t}),w&&e.jsx(U,{children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9 18L15 12L9 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]});return e.jsx(z,{active:o,disabled:i,className:j,role:"menuitem",children:c?e.jsx("a",{href:c,onClick:l,children:m}):e.jsx("button",{type:"button",onClick:l,disabled:i,children:m})})},d=({className:t})=>e.jsx(G,{className:t,role:"separator"}),v=({children:t,className:n})=>e.jsx(J,{className:n,children:t});r.__docgenInfo={description:`MenuItem component for Menu

Features:
- Support for active state
- Support for icons
- Disabled state
- Link or button rendering`,methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Item content"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:"Callback when item is clicked"},active:{required:!1,tsType:{name:"boolean"},description:"Whether the item is active",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the item is disabled",defaultValue:{value:"false",computed:!1}},href:{required:!1,tsType:{name:"string"},description:"URL if item is a link"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display before the label"},hasSubmenu:{required:!1,tsType:{name:"boolean"},description:"Indicates presence of a submenu",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSS class"}}};d.__docgenInfo={description:"MenuDivider component for visual separation in menus",methods:[],displayName:"MenuDivider",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};v.__docgenInfo={description:"MenuTitle component for section titles in menus",methods:[],displayName:"MenuTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Title content"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};L.__docgenInfo={description:`Menu component for navigation

Features:
- Can be used as dropdown or sidebar navigation
- Support for icons
- Support for dividers and section titles
- Positioning options`,methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Menu items"},isOpen:{required:!1,tsType:{name:"boolean"},description:"Determines if the menu is rendered",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler for when menu is closed"},className:{required:!1,tsType:{name:"string"},description:"CSS class applied to the container"},dropdown:{required:!1,tsType:{name:"boolean"},description:"Whether the menu is a dropdown menu",defaultValue:{value:"false",computed:!1}},triggerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"Parent element that triggers the menu"},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Placement of dropdown relative to trigger",defaultValue:{value:"'bottom'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:"Width of the menu"},maxHeight:{required:!1,tsType:{name:"string"},description:"Max height of the menu with scrolling"},withShadow:{required:!1,tsType:{name:"boolean"},description:"Add a box shadow to the menu",defaultValue:{value:"true",computed:!1}},withBorder:{required:!1,tsType:{name:"boolean"},description:"Add a border to the menu",defaultValue:{value:"false",computed:!1}}}};const r1={title:"Components/Navigation/Menu",component:L,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx(_,{children:e.jsx(t,{})})]},C={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Profile"}),e.jsx(r,{children:"Settings"}),e.jsx(r,{children:"Help"}),e.jsx(r,{children:"Logout"})]}),width:"200px"}},h={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{icon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),children:"Profile"}),e.jsx(r,{icon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),children:"Settings"}),e.jsx(r,{icon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),children:"Notifications"}),e.jsx(d,{}),e.jsx(r,{icon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M16 17L21 12L16 7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M21 12H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),children:"Logout"})]}),width:"200px"}},g={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(v,{children:"Account"}),e.jsx(r,{children:"Profile"}),e.jsx(r,{children:"Settings"}),e.jsx(d,{}),e.jsx(v,{children:"Content"}),e.jsx(r,{children:"Documents"}),e.jsx(r,{children:"Projects"}),e.jsx(d,{}),e.jsx(r,{children:"Logout"})]}),width:"200px"}},f={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Dashboard"}),e.jsx(r,{hasSubmenu:!0,children:"Projects"}),e.jsx(r,{hasSubmenu:!0,children:"Settings"}),e.jsx(d,{}),e.jsx(r,{children:"Help"}),e.jsx(r,{children:"Logout"})]}),width:"200px"}},x={render:function(){const[n,o]=M.useState(!1),i=M.useRef(null);return e.jsxs("div",{style:{padding:"100px"},children:[e.jsx(Z,{ref:i,onClick:()=>o(!n),children:"Open Menu"}),e.jsxs(L,{isOpen:n,onClose:()=>o(!1),triggerRef:i,dropdown:!0,placement:"bottom",width:"200px",children:[e.jsx(r,{children:"Profile"}),e.jsx(r,{children:"Settings"}),e.jsx(d,{}),e.jsx(r,{children:"Logout"})]})]})}};var y,S,T;C.parameters={...C.parameters,docs:{...(y=C.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: <>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Help</MenuItem>
        <MenuItem>Logout</MenuItem>
      </>,
    width: '200px'
  }
}`,...(T=(S=C.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var $,R,W;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: <>
        <MenuItem icon={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}>
          Profile
        </MenuItem>
        <MenuItem icon={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}>
          Settings
        </MenuItem>
        <MenuItem icon={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}>
          Notifications
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}>
          Logout
        </MenuItem>
      </>,
    width: '200px'
  }
}`,...(W=(R=h.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var H,q,V;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: <>
        <MenuTitle>Account</MenuTitle>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuDivider />
        <MenuTitle>Content</MenuTitle>
        <MenuItem>Documents</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuDivider />
        <MenuItem>Logout</MenuItem>
      </>,
    width: '200px'
  }
}`,...(V=(q=g.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var N,B,D;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: <>
        <MenuItem>Dashboard</MenuItem>
        <MenuItem hasSubmenu>
          Projects
        </MenuItem>
        <MenuItem hasSubmenu>
          Settings
        </MenuItem>
        <MenuDivider />
        <MenuItem>Help</MenuItem>
        <MenuItem>Logout</MenuItem>
      </>,
    width: '200px'
  }
}`,...(D=(B=f.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var P,O,E;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);
    return <div style={{
      padding: '100px'
    }}>
        <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
          Open Menu
        </Button>
        
        <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} triggerRef={buttonRef} dropdown placement="bottom" width="200px">
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuDivider />
          <MenuItem>Logout</MenuItem>
        </Menu>
      </div>;
  }
}`,...(E=(O=x.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const o1=["Basic","WithIcons","WithSections","WithSubmenu","Dropdown"];export{C as Basic,x as Dropdown,h as WithIcons,g as WithSections,f as WithSubmenu,o1 as __namedExportsOrder,r1 as default};
