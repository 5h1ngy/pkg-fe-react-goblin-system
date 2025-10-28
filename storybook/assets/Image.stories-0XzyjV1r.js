import{j as u}from"./jsx-runtime-DiklIkkE.js";import{R as l}from"./index-DRjF_FHU.js";import{d as Y}from"./styled-components.browser.esm-Dz5yS7sT.js";const me=Y.div`
  display: inline-block;
  overflow: hidden;
  border-radius: ${e=>e.borderRadius||"0"};
  width: ${e=>typeof e.width=="number"?`${e.width}px`:e.width||"auto"};
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"auto"};
  position: relative;
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.sm)||"0 1px 2px rgba(0, 0, 0, 0.05)"}};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.md)||"0 4px 6px rgba(0, 0, 0, 0.1)"}};
  }
`,pe=Y.img`
  width: 100%;
  height: 100%;
  object-fit: ${e=>e.fit||"cover"};
  object-position: ${e=>e.objectPosition||"center"};
  border-radius: ${e=>e.borderRadius||"0"};
  transition: opacity 0.3s ease, transform 0.3s ease;
`,K=({src:e,alt:t="",fit:Q="cover",borderRadius:d,fallbackSrc:m,objectPosition:X,loading:ee,nativeLazy:ae,width:te,height:oe,className:re,wrapperClassName:ie,...ne})=>{const[se,p]=l.useState(e),[ce,g]=l.useState(!1);l.useEffect(()=>{p(e),g(!1)},[e]);const le=()=>{!ce&&m&&(p(m),g(!0))},de=ae?"lazy":ee;return u.jsx(me,{borderRadius:d,width:te,height:oe,className:ie,children:u.jsx(pe,{src:se,alt:t,fit:Q,objectPosition:X,borderRadius:d,onError:le,loading:de,className:re,...ne})})};K.__docgenInfo={description:`Enhanced Image component with modern aesthetics

Features:
- Object-fit control
- Fallback image support
- Border radius
- Native lazy loading
- Smooth transitions and hover effects
- Ant Design styling with modern aesthetics`,methods:[],displayName:"Image",props:{fit:{required:!1,tsType:{name:"union",raw:"'cover' | 'contain' | 'fill' | 'none' | 'scale-down'",elements:[{name:"literal",value:"'cover'"},{name:"literal",value:"'contain'"},{name:"literal",value:"'fill'"},{name:"literal",value:"'none'"},{name:"literal",value:"'scale-down'"}]},description:"Optional fit mode",defaultValue:{value:"'cover'",computed:!1}},borderRadius:{required:!1,tsType:{name:"string"},description:"Optional border radius"},fallbackSrc:{required:!1,tsType:{name:"string"},description:"Optional fallback src if image fails to load"},objectPosition:{required:!1,tsType:{name:"string"},description:"Optional object-position value"},loading:{required:!1,tsType:{name:"union",raw:"'lazy' | 'eager'",elements:[{name:"literal",value:"'lazy'"},{name:"literal",value:"'eager'"}]},description:"Optional loading strategy"},nativeLazy:{required:!1,tsType:{name:"boolean"},description:'Whether to use HTML5 native loading="lazy"'},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Optional wrapper class name"},alt:{defaultValue:{value:"''",computed:!1},required:!1}}};const he={title:"Components/Graphics/Image",component:K,parameters:{layout:"centered",docs:{description:{component:"Un componente immagine avanzato con stile Ant Design che supporta varie modalità di adattamento e funzionalità aggiuntive."}}},tags:["autodocs"],argTypes:{src:{control:"text",description:"URL dell'immagine",type:{name:"string",required:!0}},alt:{control:"text",description:"Testo alternativo per l'immagine",type:{name:"string",required:!0}},fit:{control:{type:"select"},options:["cover","contain","fill","none","scale-down"],description:"Proprietà object-fit per controllare come l'immagine si adatta al contenitore"},borderRadius:{control:"text",description:"Raggio del bordo per l'immagine in formato CSS (px, %, em, ecc.)"},fallbackSrc:{control:"text",description:"URL dell'immagine di fallback se l'immagine principale non si carica"},objectPosition:{control:"text",description:"Proprietà object-position per controllare la posizione dell'immagine"},width:{control:"text",description:"Larghezza dell'immagine (px, %, vw, ecc.)"},height:{control:"text",description:"Altezza dell'immagine (px, %, vh, ecc.)"},loading:{control:{type:"select"},options:["lazy","eager"],description:"Strategia di caricamento dell'immagine"},nativeLazy:{control:"boolean",description:"Usa il caricamento lazy nativo del browser"},wrapperClassName:{control:"text",description:"Classe CSS da applicare al wrapper dell'immagine"}}},a={args:{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",alt:"Esempio di immagine",width:200,height:200}},o={args:{...a.args,fit:"contain",width:200,height:200}},r={args:{...a.args,borderRadius:"8px"}},i={args:{src:"https://not-a-valid-image-url.jpg",fallbackSrc:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",alt:"Immagine con fallback",width:200,height:200}},n={args:{...a.args,nativeLazy:!0}},s={args:{...a.args,width:300,height:150,fit:"cover"}},c={args:{...a.args,objectPosition:"top left",fit:"cover"}};var f,h,y,b,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    alt: 'Esempio di immagine',
    width: 200,
    height: 200
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"Esempio di base del componente Image",...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var j,w,z,x,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fit: 'contain',
    width: 200,
    height: 200
  }
}`,...(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source},description:{story:"Immagine con modalità object-fit 'contain'",...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.description}}};var I,k,P,R,E;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    borderRadius: '8px'
  }
}`,...(P=(k=r.parameters)==null?void 0:k.docs)==null?void 0:P.source},description:{story:"Immagine con bordi arrotondati",...(E=(R=r.parameters)==null?void 0:R.docs)==null?void 0:E.description}}};var C,L,U,q,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    src: 'https://not-a-valid-image-url.jpg',
    fallbackSrc: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    alt: 'Immagine con fallback',
    width: 200,
    height: 200
  }
}`,...(U=(L=i.parameters)==null?void 0:L.docs)==null?void 0:U.source},description:{story:"Immagine con fallback in caso di errore",...(T=(q=i.parameters)==null?void 0:q.docs)==null?void 0:T.description}}};var V,$,D,O,W;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    nativeLazy: true
  }
}`,...(D=($=n.parameters)==null?void 0:$.docs)==null?void 0:D.source},description:{story:"Immagine caricata in modalità lazy",...(W=(O=n.parameters)==null?void 0:O.docs)==null?void 0:W.description}}};var Z,N,A,F,J;s.parameters={...s.parameters,docs:{...(Z=s.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 150,
    fit: 'cover'
  }
}`,...(A=(N=s.parameters)==null?void 0:N.docs)==null?void 0:A.source},description:{story:"Immagine in dimensioni personalizzate",...(J=(F=s.parameters)==null?void 0:F.docs)==null?void 0:J.description}}};var _,M,H,B,G;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    objectPosition: 'top left',
    fit: 'cover'
  }
}`,...(H=(M=c.parameters)==null?void 0:M.docs)==null?void 0:H.source},description:{story:"Immagine con posizionamento personalizzato",...(G=(B=c.parameters)==null?void 0:B.docs)==null?void 0:G.description}}};const ye=["Default","ContainMode","Rounded","WithFallback","LazyLoading","CustomSize","CustomPosition"];export{o as ContainMode,c as CustomPosition,s as CustomSize,a as Default,n as LazyLoading,r as Rounded,i as WithFallback,ye as __namedExportsOrder,he as default};
