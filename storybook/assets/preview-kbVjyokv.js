import{j as l}from"./jsx-runtime-DiklIkkE.js";import{d as S}from"./index-DrFu-skq.js";import{r as f}from"./index-DRjF_FHU.js";import{f as b,o as _}from"./styled-components.browser.esm-Dz5yS7sT.js";import{l as k,d as z}from"./theme-_dwbflR3.js";import"react-redux";const{useParameter:P,addons:w,useEffect:M,useMemo:Y,definePreview:J}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:G}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var O=Object.defineProperty,v=(e,t)=>{for(var o in t)O(e,o,{get:t[o],enumerable:!0})},R={};v(R,{initialGlobals:()=>I});var p="themes",F=`storybook/${p}`,x="theme",y={},L={REGISTER_THEMES:`${F}/REGISTER_THEMES`},I={[x]:""},D={};v(D,{initializeThemeState:()=>T,pluckThemeFromContext:()=>E,useThemeParameters:()=>C});function E({globals:e}){return e[x]||""}function C(e){return G(S`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),e?e.parameters[p]??y:P(p,y)}function T(e,t){w.getChannel().emit(L.REGISTER_THEMES,{defaultTheme:t,themes:e})}var A="html",u=e=>e.split(" ").filter(Boolean),j=({themes:e,defaultTheme:t,parentSelector:o=A})=>(T(Object.keys(e),t),(d,m)=>{let{themeOverride:h}=m.parameters[p]??{},r=E(m);return M(()=>{let i=h||r||t,a=document.querySelector(o);if(!a)return;Object.entries(e).filter(([s])=>s!==i).forEach(([s,c])=>{let g=u(c);g.length>0&&a.classList.remove(...g)});let n=u(e[i]);n.length>0&&a.classList.add(...n)},[h,r]),d()});const N=b`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: ${({theme:e})=>e.typography.fontFamily};
    font-size: ${({theme:e})=>e.typography.fontSize.md};
    line-height: ${({theme:e})=>e.typography.lineHeight.md};
    color: ${({theme:e})=>e.colors.textPrimary};
    background-color: ${({theme:e})=>e.colors.bgDefault};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    line-height: ${({theme:e})=>e.typography.lineHeight.sm};
    color: ${({theme:e})=>e.colors.textPrimary};
  }

  p {
    margin-top: 0;
    margin-bottom: ${({theme:e})=>e.spacing.md};
  }

  a {
    color: ${({theme:e})=>e.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /* Remove transition for prefers-reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`,U=b`
  body {
    font-family: ${e=>{var t;return((t=e.theme.typography)==null?void 0:t.fontFamily)||"'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', sans-serif"}};
    font-size: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontSize)==null?void 0:o.md)||"16px"}};
    line-height: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.lineHeight)==null?void 0:o.md)||1.6}};
    color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t.textPrimary)||"rgba(0, 0, 0, 0.85)"}};
    background-color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t.background)||"#f0f2f5"}};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  }

  /* Modern heading styles */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${e=>{var t;return((t=e.theme.typography)==null?void 0:t.fontFamily)||"'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', sans-serif"}};
    margin-top: 0;
    margin-bottom: ${e=>{var t;return((t=e.theme.spacing)==null?void 0:t.md)||"16px"}};
    font-weight: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontWeight)==null?void 0:o.semibold)||600}};
    line-height: 1.4;
    color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t.textPrimary)||"rgba(0, 0, 0, 0.85)"}};
    letter-spacing: -0.015em;
    font-feature-settings: 'cv11', 'salt', 'ss01';
  }

  h1 {
    font-size: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontSize)==null?void 0:o.xxl)||"24px"}};
    font-weight: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontWeight)==null?void 0:o.bold)||700}};
  }

  h2 {
    font-size: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontSize)==null?void 0:o.xl)||"20px"}};
    font-weight: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontWeight)==null?void 0:o.bold)||700}};
  }

  h3 {
    font-size: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontSize)==null?void 0:o.lg)||"18px"}};
    font-weight: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontWeight)==null?void 0:o.semibold)||600}};
  }

  h4 {
    font-size: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontSize)==null?void 0:o.md)||"16px"}};
    font-weight: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontWeight)==null?void 0:o.semibold)||600}};
  }

  h5 {
    font-size: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontSize)==null?void 0:o.sm)||"14px"}};
    font-weight: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontWeight)==null?void 0:o.semibold)||600}};
  }

  h6 {
    font-size: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontSize)==null?void 0:o.xs)||"12px"}};
    font-weight: ${e=>{var t,o;return((o=(t=e.theme.typography)==null?void 0:t.fontWeight)==null?void 0:o.semibold)||600}};
  }

  /* Code and monospace content */
  code, pre, kbd, samp {
    font-family: ${e=>{var t;return((t=e.theme.typography)==null?void 0:t.fontFamilyMono)||"'JetBrains Mono', 'SF Mono', SFMono-Regular, ui-monospace, Menlo, Monaco, 'Cascadia Mono', monospace"}};
    font-size: 90%;
    font-feature-settings: 'liga' 0;
  }

  /* Links */
  a {
    color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t.primary)||"#1890ff"}};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${e=>{var t;return(t=e.theme.colors)!=null&&t.primary?`${e.theme.colors.primary}dd`:"#40a9ff"}};
      text-decoration: underline;
    }
  }

  /* Smooth text transitions for theme changes */
  * {
    transition: color 0.2s ease, background-color 0.2s ease;
  }
`;function $({children:e,initialTheme:t="light",useSystemPreference:o=!1,disableGlobalStyles:d=!1,disableGlobalFonts:m=!1}){const[h,r]=f.useState(t);f.useEffect(()=>{if(!o||typeof window>"u")return;const a=window.matchMedia("(prefers-color-scheme: dark)").matches;r(a?"dark":"light");const n=window.matchMedia("(prefers-color-scheme: dark)"),s=c=>{r(c.matches?"dark":"light")};return n.addEventListener("change",s),()=>n.removeEventListener("change",s)},[o]);const i=h==="light"?k:z;return l.jsxs(_,{theme:i,children:[!d&&l.jsx(N,{theme:i}),!m&&l.jsx(U,{}),e]})}$.__docgenInfo={description:`GoblinProvider - Provider principale per la libreria Goblin System
Applica automaticamente tema, stili globali e font moderni

Esempio di utilizzo base:
\`\`\`tsx
import { GoblinProvider } from 'pkg-fe-react-goblin-system';

function App() {
  return (
    <GoblinProvider>
      // contenuto dell'app
    </GoblinProvider>
  );
}
\`\`\``,methods:[],displayName:"GoblinProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Componenti figli che avranno accesso al provider"},initialTheme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Tema iniziale (light o dark) - default: light",defaultValue:{value:"'light'",computed:!1}},useSystemPreference:{required:!1,tsType:{name:"boolean"},description:"Usa le preferenze di sistema per il tema se true",defaultValue:{value:"false",computed:!1}},disableGlobalStyles:{required:!1,tsType:{name:"boolean"},description:"Disabilita gli stili globali se true",defaultValue:{value:"false",computed:!1}},disableGlobalFonts:{required:!1,tsType:{name:"boolean"},description:"Disabilita i font globali se true",defaultValue:{value:"false",computed:!1}}}};f.createContext(void 0);const Q={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[e=>l.jsx($,{children:l.jsx(e,{})}),j({defaultTheme:"light",themes:{light:"",dark:"dark"}})]};export{Q as default};
