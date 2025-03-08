import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DR1jFbPG.js";import"./index-CFahbR6w.js";function r(i){const n={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"components-overview",children:"Components Overview"}),`
`,e.jsx(n.p,{children:"This page provides a guide and usage examples for the two main components included in this project:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"LiquidTable"}),": A dynamic table component designed for data display with support for multi-selection, pagination, and the ability to hide columns."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"LiquidSearchForm"}),": A search form that is automatically generated from a Zod schema, simplifying the creation and validation of input fields."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"liquidtable",children:"LiquidTable"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"LiquidTable"})," allows you to display data in a dynamic table. Its features include:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Automatic rendering of rows based on an array of objects."}),`
`,e.jsx(n.li,{children:"Multiple row selection via an integrated ActionBar."}),`
`,e.jsx(n.li,{children:"Optional pagination to handle large datasets."}),`
`,e.jsxs(n.li,{children:["The ability to hide specific columns using the ",e.jsx(n.code,{children:"hiddenFields"})," prop."]}),`
`]}),`
`,e.jsx(n.h3,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import LiquidTable from '@/components/LiquidTable/LiquidTable';\r
\r
const items = [\r
  { id: '1', firstName: 'Mario', lastName: 'Rossi', age: 30 },\r
  { id: '2', firstName: 'Luigi', lastName: 'Bianchi', age: 40 },\r
];\r
\r
const pagination = {\r
  offset: 1,           // Current page\r
  size: 10,            // Rows per page\r
  totalOccurrences: 2, // Total number of rows\r
  totalPages: 1,       // Total number of pages\r
};\r
\r
function MyTable() {\r
  return (\r
    <LiquidTable\r
      items={items}\r
      hiddenFields={['age']} // Hide the "age" column\r
      pagination={pagination}\r
    />\r
  );\r
}\r
\r
export default MyTable;
`})}),`
`,e.jsx(n.h3,{id:"props-details",children:"Props Details"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"items"}),": An array of objects representing the rows of the table."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"hiddenFields"}),": An array of strings indicating which fields should be hidden."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"pagination"}),": An object with the following properties:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"offset"}),": The current page number."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"size"}),": The number of rows per page."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"totalOccurrences"}),": The total number of rows."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"totalPages"}),": The total number of pages."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"liquidsearchform",children:"LiquidSearchForm"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"LiquidSearchForm"})," is designed to automatically generate a search form based on a Zod schema. This approach centralizes the definition of the form’s structure and validation rules, making it easier to maintain and extend."]}),`
`,e.jsx(n.h3,{id:"usage-example-1",children:"Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import LiquidSearchForm from '@/components/LiquidSearchForm/LiquidSearchForm';\r
import { z } from 'zod';\r
import { withMeta } from '@/components/Factory/DynamicForm/DynamicForm';\r
\r
const schema = z.object({\r
  searchTerm: withMeta(\r
    z.string().optional(),\r
    { label: 'Search', step: 0 }\r
  ),\r
  category: withMeta(\r
    z.enum(['all', 'books', 'electronics']).default('all'),\r
    { label: 'Category', step: 0 }\r
  ),\r
}).superRefine(() => {});\r
\r
function MySearchForm() {\r
  return <LiquidSearchForm schema={schema} />;\r
}\r
\r
export default MySearchForm;
`})}),`
`,e.jsx(n.h3,{id:"props-details-1",children:"Props Details"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"schema"}),": A Zod object that defines the form fields and their validation rules.",e.jsx(n.br,{}),`
`,e.jsx(n.em,{children:"(For example, the schema above includes an optional text field for search input and a selection field for the category.)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"defaultValues"})," (Optional): An object used to pre-populate the form with initial values."]}),`
`]})]})}function l(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{l as default};
