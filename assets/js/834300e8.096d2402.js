"use strict";(self.webpackChunkreact_goblin_system_docs=self.webpackChunkreact_goblin_system_docs||[]).push([[596],{3023:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(3696);const s={},d=t.createContext(s);function a(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(d.Provider,{value:n},e.children)}},9762:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"components/layout/container","title":"Container","description":"The Container component is a fundamental layout element that centers content horizontally with appropriate padding and responsive maximum width.","source":"@site/docs/components/layout/container.md","sourceDirName":"components/layout","slug":"/components/layout/container","permalink":"/pkg-fe-react-goblin-system/docs/components/layout/container","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docs","previous":{"title":"Components","permalink":"/pkg-fe-react-goblin-system/docs/components/"},"next":{"title":"Grid","permalink":"/pkg-fe-react-goblin-system/docs/components/layout/grid"}}');var s=i(2540),d=i(3023);const a={sidebar_position:1},o="Container",r={},l=[{value:"Importing",id:"importing",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Variants",id:"variants",level:2},{value:"Sizes",id:"sizes",level:3},{value:"Custom Size",id:"custom-size",level:3},{value:"Fluid Container",id:"fluid-container",level:3},{value:"Without Side Padding",id:"without-side-padding",level:3},{value:"Advanced Examples",id:"advanced-examples",level:2},{value:"Basic Page Layout",id:"basic-page-layout",level:3},{value:"Section Layout",id:"section-layout",level:3},{value:"Nested Containers",id:"nested-containers",level:3},{value:"Complex Layouts",id:"complex-layouts",level:2},{value:"Custom Component",id:"custom-component",level:2},{value:"Responsive Behavior",id:"responsive-behavior",level:2},{value:"Theme Customization",id:"theme-customization",level:2},{value:"Best Practices",id:"best-practices",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"container",children:"Container"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Container"})," component is a fundamental layout element that centers content horizontally with appropriate padding and responsive maximum width."]}),"\n",(0,s.jsx)(n.h2,{id:"importing",children:"Importing"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { Container } from 'pkg-fe-react-goblin-system';\n"})}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<Container>\n  <h1>Page Title</h1>\n  <p>Page content...</p>\n</Container>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"maxWidth"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'lg'"})}),(0,s.jsx)(n.td,{children:"Maximum width of the container"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"disableGutters"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsxs)(n.td,{children:["If ",(0,s.jsx)(n.code,{children:"true"}),", removes side padding"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"fluid"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsxs)(n.td,{children:["If ",(0,s.jsx)(n.code,{children:"true"}),", the container always occupies 100% of the available width"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"as"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"React.ElementType"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'div'"})}),(0,s.jsx)(n.td,{children:"HTML or React component to use"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"children"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactNode"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Container content"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"variants",children:"Variants"}),"\n",(0,s.jsx)(n.h3,{id:"sizes",children:"Sizes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<Container maxWidth="xs">Extra small container (max 576px)</Container>\n<Container maxWidth="sm">Small container (max 768px)</Container>\n<Container maxWidth="md">Medium container (max 992px)</Container>\n<Container maxWidth="lg">Large container (max 1200px, default)</Container>\n<Container maxWidth="xl">Extra large container (max 1400px)</Container>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"custom-size",children:"Custom Size"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<Container maxWidth="800px">\n  Container with custom maximum width of 800px\n</Container>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"fluid-container",children:"Fluid Container"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<Container fluid>\n  This container always occupies 100% of the available width,\n  while maintaining side padding.\n</Container>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"without-side-padding",children:"Without Side Padding"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<Container disableGutters>\n  Container without side padding\n</Container>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"advanced-examples",children:"Advanced Examples"}),"\n",(0,s.jsx)(n.h3,{id:"basic-page-layout",children:"Basic Page Layout"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<Container>\n  <Header />\n  <main>\n    <Heading level={1}>Page Title</Heading>\n    <Text>This is the main content of the page...</Text>\n  </main>\n  <Footer />\n</Container>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"section-layout",children:"Section Layout"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<>\n  {/* Full-width hero section */}\n  <Container fluid disableGutters>\n    <div style={{ backgroundColor: '#f0f0f0', padding: '48px 0' }}>\n      <Container>\n        <h1>Welcome to our Site</h1>\n        <p>Hero section content...</p>\n      </Container>\n    </div>\n  </Container>\n\n  {/* Main content with contained width */}\n  <Container maxWidth=\"md\">\n    <h2>Main Content</h2>\n    <p>Content with a medium-width container...</p>\n  </Container>\n</>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"nested-containers",children:"Nested Containers"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<Container fluid>\n  <div style={{ backgroundColor: '#f5f5f5', padding: '24px 0' }}>\n    <Container>\n      <h2>Nested Container</h2>\n      <p>\n        A fluid container can contain a regular container to create \n        full-width colored sections with contained content.\n      </p>\n    </Container>\n  </div>\n</Container>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"complex-layouts",children:"Complex Layouts"}),"\n",(0,s.jsxs)(n.p,{children:["For more complex layouts, consider using the ",(0,s.jsx)(n.code,{children:"Container"})," component in combination with the ",(0,s.jsx)(n.code,{children:"Grid"})," component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<Container>\n  <Grid container spacing="md">\n    <Grid item xs={12} md={6}>\n      <Card>Left column content</Card>\n    </Grid>\n    <Grid item xs={12} md={6}>\n      <Card>Right column content</Card>\n    </Grid>\n  </Grid>\n</Container>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"custom-component",children:"Custom Component"}),"\n",(0,s.jsxs)(n.p,{children:["You can change the HTML element using the ",(0,s.jsx)(n.code,{children:"as"})," prop:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<Container as="section">\n  This will render as a <section> element instead of a <div>\n</Container>\n\n<Container as="article">\n  This will render as an <article> element\n</Container>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Container"})," component is fully responsive by default:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"On small screens, it has appropriate side margins"}),"\n",(0,s.jsxs)(n.li,{children:["It will never exceed its ",(0,s.jsx)(n.code,{children:"maxWidth"})," on larger screens"]}),"\n",(0,s.jsxs)(n.li,{children:["When using ",(0,s.jsx)(n.code,{children:"fluid"}),", it will always be 100% width but still with appropriate side padding"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"theme-customization",children:"Theme Customization"}),"\n",(0,s.jsx)(n.p,{children:"The Container component can be customized through the theme:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const theme = {\n  components: {\n    Container: {\n      defaultProps: {\n        maxWidth: 'md',  // Change default max width\n      },\n      styleOverrides: {\n        root: {\n          // Override default padding\n          padding: '0 24px',\n          \n          // Add custom media queries\n          '@media (min-width: 768px)': {\n            padding: '0 32px',\n          },\n        },\n      },\n      variants: {\n        // Custom variant for content containers\n        content: {\n          backgroundColor: '#fff',\n          borderRadius: '8px',\n          padding: '24px',\n          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.code,{children:"Container"})," component as a top-level wrapper for your pages"]}),"\n",(0,s.jsxs)(n.li,{children:["Choose suitable sizes based on content: ",(0,s.jsx)(n.code,{children:"md"})," or ",(0,s.jsx)(n.code,{children:"lg"})," for general content, ",(0,s.jsx)(n.code,{children:"sm"})," for forms and reduced-width content"]}),"\n",(0,s.jsxs)(n.li,{children:["Combine ",(0,s.jsx)(n.code,{children:"Container fluid"})," with a nested ",(0,s.jsx)(n.code,{children:"Container"})," to create full-width sections with centered content"]}),"\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.code,{children:"disableGutters"})," property when you need to extend content to the edges (useful for headers, footers, or background elements)"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);