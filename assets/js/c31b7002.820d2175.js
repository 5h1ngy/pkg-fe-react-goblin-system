"use strict";(self.webpackChunkreact_goblin_system_docs=self.webpackChunkreact_goblin_system_docs||[]).push([[683],{3023:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>d});var s=i(3696);const t={},r=s.createContext(t);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(r.Provider,{value:e},n.children)}},8850:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"components/feedback/spinner","title":"Spinner","description":"The Spinner component is a loading indicator that signals to users that an operation is in progress.","source":"@site/docs/components/feedback/spinner.md","sourceDirName":"components/feedback","slug":"/components/feedback/spinner","permalink":"/pkg-fe-react-goblin-system/docs/components/feedback/spinner","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2}}');var t=i(2540),r=i(3023);const l={sidebar_position:2},d="Spinner",o={},c=[{value:"Importing",id:"importing",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Variants",id:"variants",level:2},{value:"Sizes",id:"sizes",level:3},{value:"Colors",id:"colors",level:3},{value:"Positioning",id:"positioning",level:3},{value:"With Label",id:"with-label",level:3},{value:"Advanced Examples",id:"advanced-examples",level:2},{value:"Full-screen Spinner",id:"full-screen-spinner",level:3},{value:"Conditional Loading Component",id:"conditional-loading-component",level:3},{value:"Button with Loading State",id:"button-with-loading-state",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"Technical Notes",id:"technical-notes",level:2},{value:"Customization",id:"customization",level:2}];function a(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"spinner",children:"Spinner"})}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.code,{children:"Spinner"})," component is a loading indicator that signals to users that an operation is in progress."]}),"\n",(0,t.jsx)(e.h2,{id:"importing",children:"Importing"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"import { Spinner } from 'pkg-fe-react-goblin-system';\n"})}),"\n",(0,t.jsx)(e.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"<Spinner />\n"})}),"\n",(0,t.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Property"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Default"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"size"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"'small' | 'medium' | 'large'"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"'medium'"})}),(0,t.jsx)(e.td,{children:"Size of the spinner"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"color"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"string"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"'primary'"})}),(0,t.jsx)(e.td,{children:"Color of the spinner (supports theme colors or CSS values)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"$centered"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"boolean"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"false"})}),(0,t.jsx)(e.td,{children:"Centers the spinner in its container"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"thickness"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"number"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"2"})}),(0,t.jsx)(e.td,{children:"Thickness of the spinner lines"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"visible"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"boolean"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"true"})}),(0,t.jsx)(e.td,{children:"Controls the visibility of the spinner"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"label"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"string"})}),(0,t.jsx)(e.td,{children:"-"}),(0,t.jsx)(e.td,{children:"Accessible text for the spinner"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"labelPosition"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"'top' | 'bottom' | 'left' | 'right'"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"'bottom'"})}),(0,t.jsx)(e.td,{children:"Position of the label text"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"variants",children:"Variants"}),"\n",(0,t.jsx)(e.h3,{id:"sizes",children:"Sizes"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:'<Spinner size="small" />\n<Spinner size="medium" />\n<Spinner size="large" />\n'})}),"\n",(0,t.jsx)(e.h3,{id:"colors",children:"Colors"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:'<Spinner color="primary" />\n<Spinner color="secondary" />\n<Spinner color="error" />\n<Spinner color="#FF5722" />\n'})}),"\n",(0,t.jsx)(e.h3,{id:"positioning",children:"Positioning"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"<Spinner $centered />\n"})}),"\n",(0,t.jsx)(e.h3,{id:"with-label",children:"With Label"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:'<Spinner label="Loading..." />\n<Spinner label="Please wait..." labelPosition="top" />\n<Spinner label="Processing" labelPosition="right" />\n'})}),"\n",(0,t.jsx)(e.h2,{id:"advanced-examples",children:"Advanced Examples"}),"\n",(0,t.jsx)(e.h3,{id:"full-screen-spinner",children:"Full-screen Spinner"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"<div style={{ \n  position: 'fixed', \n  top: 0, \n  left: 0, \n  width: '100%', \n  height: '100%', \n  backgroundColor: 'rgba(255, 255, 255, 0.8)',\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center',\n  zIndex: 1000\n}}>\n  <Spinner size=\"large\" label=\"Loading page...\" />\n</div>\n"})}),"\n",(0,t.jsx)(e.h3,{id:"conditional-loading-component",children:"Conditional Loading Component"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"function LoadingContent({ isLoading, children }) {\n  if (isLoading) {\n    return (\n      <div style={{ \n        minHeight: '200px', \n        display: 'flex', \n        alignItems: 'center', \n        justifyContent: 'center'\n      }}>\n        <Spinner label=\"Loading data...\" />\n      </div>\n    );\n  }\n\n  return children;\n}\n\n// Usage\nfunction MyComponent() {\n  const [isLoading, setIsLoading] = React.useState(true);\n  const [data, setData] = React.useState(null);\n  \n  React.useEffect(() => {\n    // Simulate an API request\n    setTimeout(() => {\n      setData({ /* data */ });\n      setIsLoading(false);\n    }, 2000);\n  }, []);\n  \n  return (\n    <LoadingContent isLoading={isLoading}>\n      {/* Content to display when loading is complete */}\n      <div>Data loaded!</div>\n    </LoadingContent>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"button-with-loading-state",children:"Button with Loading State"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:'function LoadingButton({ isLoading, children, ...props }) {\n  return (\n    <Button \n      disabled={isLoading}\n      {...props}\n    >\n      {isLoading ? (\n        <>\n          <Spinner \n            size="small" \n            color="currentColor" \n            style={{ marginRight: \'8px\' }}\n          />\n          Loading...\n        </>\n      ) : children}\n    </Button>\n  );\n}\n\n// Usage\nfunction FormWithLoading() {\n  const [isSubmitting, setIsSubmitting] = React.useState(false);\n  \n  const handleSubmit = async () => {\n    setIsSubmitting(true);\n    try {\n      // Simulate an API request\n      await new Promise(resolve => setTimeout(resolve, 2000));\n      // Success\n    } finally {\n      setIsSubmitting(false);\n    }\n  };\n  \n  return (\n    <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>\n      {/* Form fields */}\n      <LoadingButton \n        isLoading={isSubmitting} \n        type="submit"\n        variant="primary"\n      >\n        Submit\n      </LoadingButton>\n    </form>\n  );\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.code,{children:"Spinner"})," component follows accessibility best practices:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Includes an ",(0,t.jsx)(e.code,{children:"aria-label"})," attribute for screen readers"]}),"\n",(0,t.jsxs)(e.li,{children:["Provides a way to add descriptive text via the ",(0,t.jsx)(e.code,{children:"label"})," prop"]}),"\n",(0,t.jsx)(e.li,{children:"Maintains sufficient contrast ratios for visibility"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"technical-notes",children:"Technical Notes"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Uses the ",(0,t.jsx)(e.code,{children:"$"})," prefix for boolean props like ",(0,t.jsx)(e.code,{children:"$centered"})," to prevent them from being passed directly to the DOM"]}),"\n",(0,t.jsx)(e.li,{children:"The animation is implemented using CSS keyframes via styled-components"}),"\n",(0,t.jsx)(e.li,{children:"The spinner is rendered as an SVG for better resolution and scalability on all devices"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"customization",children:"Customization"}),"\n",(0,t.jsx)(e.p,{children:"You can customize the appearance of the Spinner component through the theme:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"const customTheme = {\n  components: {\n    Spinner: {\n      sizes: {\n        small: '16px',\n        medium: '24px',\n        large: '40px',\n      },\n      defaultColor: 'primary',\n      animation: {\n        duration: '1s',\n        timingFunction: 'linear',\n      },\n      // Other customizations...\n    }\n  }\n};\n\n<ThemeProvider theme={customTheme}>\n  <Spinner />\n</ThemeProvider>\n"})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}}}]);