import{j as e}from"./jsx-runtime-DiklIkkE.js";import{E as s}from"./EmptyState-CBuBFJz4.js";import{B as a}from"./Button-CKDzLx83.js";import"./index-DRjF_FHU.js";import"./styled-components.browser.esm-Dz5yS7sT.js";const L={title:"Components/Feedback/EmptyState",component:s,parameters:{layout:"centered"},argTypes:{icon:{control:"object"},title:{control:"text"},description:{control:"text"},verticalCenter:{control:"boolean"}},tags:["autodocs"]},i=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),v=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M15 9L9 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9 9L15 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),r={args:{icon:e.jsx(i,{}),title:"No data available",description:"There are no items to display at this moment."}},t={args:{icon:e.jsx(v,{}),title:"Something went wrong",description:"We encountered an error while processing your request. Please try again later."}},o={render:()=>e.jsxs(s,{icon:e.jsx(i,{}),title:"No files found",description:"You don't have any files in this folder yet.",children:[e.jsx(a,{variant:"primary",children:"Upload Files"}),e.jsx(a,{variant:"secondary",children:"Create New Folder"})]})},n={render:()=>e.jsx("div",{style:{height:"400px",border:"1px dashed #ccc"},children:e.jsx(s,{icon:e.jsx(i,{}),title:"Empty Folder",description:"This folder is empty.",verticalCenter:!0})})};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    icon: <FolderIcon />,
    title: 'No data available',
    description: 'There are no items to display at this moment.'
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon: <ErrorIcon />,
    title: 'Something went wrong',
    description: 'We encountered an error while processing your request. Please try again later.'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,x,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <EmptyState icon={<FolderIcon />} title="No files found" description="You don't have any files in this folder yet.">
      <Button variant="primary">Upload Files</Button>
      <Button variant="secondary">Create New Folder</Button>
    </EmptyState>
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var g,C,j;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '400px',
    border: '1px dashed #ccc'
  }}>
      <EmptyState icon={<FolderIcon />} title="Empty Folder" description="This folder is empty." verticalCenter />
    </div>
}`,...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const S=["NoData","Error","WithAction","VerticalCentered"];export{t as Error,r as NoData,n as VerticalCentered,o as WithAction,S as __namedExportsOrder,L as default};
