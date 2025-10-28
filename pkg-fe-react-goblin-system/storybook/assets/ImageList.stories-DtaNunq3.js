import{j as e}from"./jsx-runtime-CDt2p4po.js";import{c as n,P as m,Q as i}from"./componentDocs-CT397LOo.js";import"./index-GiUgBvb1.js";import"./icons-C2y5CVOK.js";import"./index-CROobee-.js";const I={title:"Layout/ImageList",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.ImageList}}}},s={render:()=>e.jsx(m,{cols:3,gap:1,variant:"masonry",children:Array.from({length:6}).map((p,a)=>e.jsx(i,{children:e.jsx("img",{src:`https://picsum.photos/seed/imagelist-${a}/400/300`,alt:`Example ${a}`,loading:"lazy"})},a))})};var t,r,o;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <ImageList cols={3} gap={1} variant="masonry">
      {Array.from({
      length: 6
    }).map((_, index) => <ImageListItem key={index}>
          <img src={\`https://picsum.photos/seed/imagelist-\${index}/400/300\`} alt={\`Example \${index}\`} loading="lazy" />
        </ImageListItem>)}
    </ImageList>
}`,...(o=(r=s.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const y=["Masonry"];export{s as Masonry,y as __namedExportsOrder,I as default};
