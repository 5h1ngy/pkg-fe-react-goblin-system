import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as pe}from"./index-2yJIXLcc.js";import{G as re}from"./iconBase-F1NH6Jz0.js";import{S as g,F as C,a as ae}from"./index-CUk-I3yD.js";import{F as h}from"./flex-kF3Sjibk.js";import{I as S}from"./icon-button-rke3f8fi.js";import{I as p}from"./icon-C9K7CyD2.js";import"./text-CfAAMfeU.js";import"./create-recipe-context-DAYCaBKX.js";import"./box-Co8b1CQB.js";import"./config-BSDdsS5G.js";import"./image-OLBd0WsG.js";import"./card-DmY4cerO.js";import"./create-slot-recipe-context-c444gZ9K.js";function me(e){return re({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M752.145 0c8.685 0 17.572 3.434 24.237 10.099 13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"},child:[]}]})(e)}function ue(e){return re({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"},child:[]}]})(e)}const se=({items:e,isCircular:m=!0})=>{if(!e||e.length===0)return null;const[a,u]=pe.useState(0),te=()=>{a===0?m&&u(e.length-1):u(a-1)},ie=()=>{a===e.length-1?m&&u(0):u(a+1)},ne=(a-1+e.length)%e.length,oe=(a+1)%e.length,ce=!m&&a===0,le=!m&&a===e.length-1,de=e[a],f=e.length>1?e[ne]:void 0,x=e.length>1?e[oe]:void 0;return r.jsxs(h,{direction:"column",align:"center",justify:"center",gap:4,children:[r.jsxs(h,{direction:"row",align:"center",justify:"center",gap:4,wrap:"wrap",children:[f&&r.jsx(g,{...f,display:{base:"none",md:"flex"},compact:!0}),r.jsx(g,{...de}),x&&r.jsx(g,{...x,display:{base:"none",md:"flex"},compact:!0})]}),r.jsxs(h,{direction:"row",align:"center",justify:"center",gap:2,children:[r.jsx(S,{"aria-label":"Previous",variant:"ghost",onClick:te,disabled:ce,children:r.jsx(me,{})}),r.jsx(S,{"aria-label":"Next",variant:"ghost",onClick:ie,disabled:le,children:r.jsx(ue,{})})]})]})};se.__docgenInfo={description:"",methods:[],displayName:"SliderCards",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"SliderCardItem"}],raw:"SliderCardItem[]"},description:""},isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cardMaxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},cardMaxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}}};const ze={title:"Components/SliderCards",component:se,tags:["autodocs"],argTypes:{isCircular:{control:"boolean"}}},s=[{title:"Card 1",subTitle:"Prima card",description:"Descrizione della prima card",thumbnail:"https://via.placeholder.com/400x300",topics:["React","Storybook"],links:[{label:"Link",icon:r.jsx(p,{as:C}),onClick:()=>{}}]},{title:"Card 2",subTitle:"Seconda card",description:"Descrizione della seconda card",thumbnail:"https://via.placeholder.com/400x300",topics:["Chakra UI","TypeScript"],links:[{label:"Preferito",icon:r.jsx(p,{as:ae}),onClick:()=>{}}]},{title:"Card 3",subTitle:"Terza card",description:"Descrizione della terza card",thumbnail:"https://via.placeholder.com/400x300",topics:["UI Design","Accessibility"],links:[{label:"Scopri di più",icon:r.jsx(p,{as:C}),onClick:()=>{}}]}],t={args:{items:s,isCircular:!0}},i={args:{items:s,isCircular:!1}},n={args:{items:[s[0]],isCircular:!0}},o={args:{items:[s[0],s[1]],isCircular:!0}},c={args:{items:[],isCircular:!0}},l={args:{items:s.map(e=>({...e,thumbnail:void 0})),isCircular:!0}},d={args:{items:s.map(e=>({...e,topics:["React","TypeScript","ChakraUI","Storybook","UI","JSX"],links:[{label:"Link",icon:r.jsx(p,{as:C}),onClick:()=>{}},{label:"Preferito",icon:r.jsx(p,{as:ae}),onClick:()=>{}}]})),isCircular:!0}};var b,y,k,I,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    isCircular: true
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source},description:{story:"Storia base: Slider con più elementi e navigazione circolare attivata",...(v=(I=t.parameters)==null?void 0:I.docs)==null?void 0:v.description}}};var j,T,L,z,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    isCircular: false
  }
}`,...(L=(T=i.parameters)==null?void 0:T.docs)==null?void 0:L.source},description:{story:"Storia con navigazione non circolare",...(w=(z=i.parameters)==null?void 0:z.docs)==null?void 0:w.description}}};var N,F,P,U,A;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: [sampleItems[0]],
    isCircular: true
  }
}`,...(P=(F=n.parameters)==null?void 0:F.docs)==null?void 0:P.source},description:{story:"Storia con una sola card (senza navigazione)",...(A=(U=n.parameters)==null?void 0:U.docs)==null?void 0:A.description}}};var D,M,E,R,_;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: [sampleItems[0], sampleItems[1]],
    isCircular: true
  }
}`,...(E=(M=o.parameters)==null?void 0:M.docs)==null?void 0:E.source},description:{story:"Storia con due card (controllo comportamento per pochi elementi)",...(_=(R=o.parameters)==null?void 0:R.docs)==null?void 0:_.description}}};var q,B,H,W,G;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: [],
    isCircular: true
  }
}`,...(H=(B=c.parameters)==null?void 0:B.docs)==null?void 0:H.source},description:{story:"Storia senza elementi (deve restituire null senza errori)",...(G=(W=c.parameters)==null?void 0:W.docs)==null?void 0:G.description}}};var J,X,O,V,K;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    items: sampleItems.map(item => ({
      ...item,
      thumbnail: undefined
    })),
    isCircular: true
  }
}`,...(O=(X=l.parameters)==null?void 0:X.docs)==null?void 0:O.source},description:{story:"Storia con card che non hanno immagini (per testare fallback UI)",...(K=(V=l.parameters)==null?void 0:V.docs)==null?void 0:K.description}}};var Q,Y,Z,$,ee;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items: sampleItems.map(item => ({
      ...item,
      topics: ["React", "TypeScript", "ChakraUI", "Storybook", "UI", "JSX"],
      links: [{
        label: "Link",
        icon: <Icon as={FaLink} />,
        onClick: () => {}
      }, {
        label: "Preferito",
        icon: <Icon as={FaHeart} />,
        onClick: () => {}
      }]
    })),
    isCircular: true
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Storia con card aventi molti topics e link per verificare la gestione dello spazio",...(ee=($=d.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};const we=["Default","NonCircular","SingleCard","TwoCards","EmptyList","NoThumbnails","WithManyTopicsAndLinks"];export{t as Default,c as EmptyList,l as NoThumbnails,i as NonCircular,n as SingleCard,o as TwoCards,d as WithManyTopicsAndLinks,we as __namedExportsOrder,ze as default};
