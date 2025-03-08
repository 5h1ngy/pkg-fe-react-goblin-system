import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DR1jFbPG.js";import"./index-CFahbR6w.js";function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(n.h1,{id:"introduction-to-layouts",children:"Introduction to Layouts"}),`
`,r.jsxs(n.p,{children:["This section showcases the ",r.jsx(n.strong,{children:"three main layouts"})," used in your project:"]}),`
`,r.jsxs(n.ol,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Error"})," – Used to display error or fallback screens."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Loading"})," – Shows a global loading screen."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Transformer"})," – A more advanced layout featuring GSAP animations, router integration, and contextual logic."]}),`
`]}),`
`,r.jsx(n.hr,{}),`
`,r.jsx(n.h2,{id:"folder-structure",children:"Folder Structure"}),`
`,r.jsxs(n.p,{children:["A simplified overview of the folder structure in ",r.jsx(n.code,{children:"src/layouts"})," is as follows:"]}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{children:`src/\r
└── layouts/\r
    ├── Error/\r
    │   ├── Error.tsx\r
    │   └── index.ts\r
    ├── Loading/\r
    │   ├── Loading.tsx\r
    │   └── index.ts\r
    └── Transformer/\r
        ├── Header.tsx\r
        ├── Body.tsx\r
        ├── Transformer.tsx\r
        ├── index.ts\r
        └── shared/\r
            ├── Provider.tsx\r
            └── ...
`})}),`
`,r.jsxs(n.p,{children:["Each folder contains an ",r.jsx(n.code,{children:"index.ts"})," entry point (which re-exports the main component) to be directly imported in your stories."]}),`
`,r.jsx(n.hr,{}),`
`,r.jsx(n.h2,{id:"error-layout",children:"Error Layout"}),`
`,r.jsxs(n.p,{children:["The ",r.jsx(n.strong,{children:"Error layout"})," displays an error or fallback state when something goes wrong. Typically, it includes:"]}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["An ",r.jsx(n.code,{children:"EmptyState"})," component that shows an error icon and message."]}),`
`,r.jsx(n.li,{children:"A full-screen Flex layout from Chakra UI that centers the content."}),`
`]}),`
`,r.jsxs(n.p,{children:[r.jsx(n.strong,{children:"Typical Usage"}),":"]}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`import ErrorLayout from '@/layouts/Error';\r
\r
function App() {\r
  return (\r
    // ...\r
    <ErrorLayout />\r
  );\r
}
`})}),`
`,r.jsx(n.hr,{}),`
`,r.jsx(n.h2,{id:"loading-layout",children:"Loading Layout"}),`
`,r.jsxs(n.p,{children:["The ",r.jsx(n.strong,{children:"Loading layout"})," provides a global loading screen, ideal for initial data fetching or asynchronous routing. It features:"]}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsx(n.li,{children:"A loader icon."}),`
`,r.jsx(n.li,{children:"A progress bar or indicator."}),`
`]}),`
`,r.jsxs(n.p,{children:[r.jsx(n.strong,{children:"Typical Usage"}),":"]}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`import LoadingLayout from '@/layouts/Loading';\r
\r
function App() {\r
  return (\r
    // ...\r
    <LoadingLayout />\r
  );\r
}
`})}),`
`,r.jsx(n.hr,{}),`
`,r.jsx(n.h2,{id:"transformer-layout",children:"Transformer Layout"}),`
`,r.jsxs(n.p,{children:["The ",r.jsx(n.strong,{children:"Transformer layout"})," is more sophisticated and leverages:"]}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"React Router"}),": Uses hooks like ",r.jsx(n.code,{children:"useLocation"})," and ",r.jsx(n.code,{children:"useNavigate"})," for navigation."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Custom Context"}),": Provided via a custom Provider (",r.jsx(n.code,{children:"Provider.tsx"}),") exposing properties such as ",r.jsx(n.code,{children:"navbarItems"})," and ",r.jsx(n.code,{children:"background"}),"."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"GSAP Animations"}),": Includes a circle that follows the mouse and smooth section transitions."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Header & Body"}),": Contains a header with navigation logic, a body for content, and a customizable background."]}),`
`]}),`
`,r.jsx(n.h3,{id:"key-points",children:"Key Points"}),`
`,r.jsxs(n.ol,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Router Context"}),": To work correctly in Storybook, wrap your component with a Router (e.g., ",r.jsx(n.code,{children:"MemoryRouter"}),")."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Navbar Items"}),": Pass an array of items (",r.jsx(n.code,{children:"navbarItems"}),", ",r.jsx(n.code,{children:"navbarSubItems"}),") to populate the navigation menu."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Background"}),": Configure a background image (with a separate version for dark mode) and control the blur using the ",r.jsx(n.code,{children:"opacity"})," property."]}),`
`]}),`
`,r.jsxs(n.p,{children:[r.jsx(n.strong,{children:"Typical Usage"}),":"]}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`import TransformerLayout from '@/layouts/Transformer';\r
\r
function App() {\r
  return (\r
    <TransformerLayout\r
      navigationScroll\r
      navbarItems={[{ icon: '🏠', label: 'Home', value: '/home' }]}\r
      background={{\r
        opacity: 10,\r
        image: 'white_background.png',\r
        imageDark: 'dark_background.png',\r
      }}\r
    >\r
      <div>Main Content</div>\r
    </TransformerLayout>\r
  );\r
}
`})}),`
`,r.jsx(n.hr,{}),`
`,r.jsx(n.h2,{id:"tips-for-storybook",children:"Tips for Storybook"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Router Decorator"}),": If your layout uses ",r.jsx(n.code,{children:"react-router-dom"}),", include a decorator with ",r.jsx(n.code,{children:"MemoryRouter"})," or ",r.jsx(n.code,{children:"BrowserRouter"}),". For example:",`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`decorators: [\r
  (Story) => (\r
    <MemoryRouter>\r
      <Story />\r
    </MemoryRouter>\r
  ),\r
],
`})}),`
`]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Args"}),": Test different configurations (backgrounds, navbar items, etc.) by using Storybook’s args."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"AutoDocs"}),": In your ",r.jsx(n.code,{children:".stories.tsx"})," files, set ",r.jsx(n.code,{children:"parameters.docs.autodocs = 'tag'"})," to enable automatic documentation."]}),`
`]}),`
`,r.jsx(n.hr,{}),`
`,r.jsx(n.h2,{id:"next-steps",children:"Next Steps"}),`
`,r.jsx(n.p,{children:"Now that you understand the structure and basic functionality of the layouts:"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["Explore each layout’s story in the Storybook sidebar under ",r.jsx(n.code,{children:"layouts/"}),"."]}),`
`,r.jsx(n.li,{children:"Customize the props in the stories to test different variants."}),`
`,r.jsx(n.li,{children:"Integrate the layouts into your pages and verify their behavior across different devices (desktop/mobile)."}),`
`]}),`
`,r.jsx(n.p,{children:"If you encounter provider or context-related issues, ensure that your Storybook decorators are properly configured."})]})}function d(e={}){const{wrapper:n}={...s(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(o,{...e})}):o(e)}export{d as default};
