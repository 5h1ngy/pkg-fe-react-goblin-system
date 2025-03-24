import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{E as K}from"./empty-state-HnvlaAc5.js";import{r as a}from"./index-2yJIXLcc.js";import{P as Q}from"./portal-Dd2-cvLO.js";import{c as j}from"./create-slot-recipe-context-c444gZ9K.js";import{u as l,P as U,a as X,b as Y,c as Z}from"./popover-root-provider-B6kSJWSU.js";import{I as i,J as d,H as rr,w as or,L as er,M as tr,N as sr,O as nr,v as C}from"./use-environment-context-KKmzfobL.js";import{u as T}from"./index-CYPJOs-1.js";import{G as y}from"./iconBase-F1NH6Jz0.js";import{I as ar}from"./icon-button-rke3f8fi.js";import{m as ir,c as dr}from"./index-BxKTMkBW.js";import{F as cr}from"./flex-kF3Sjibk.js";import{I as pr}from"./icon-C9K7CyD2.js";import"./v-stack-Bai6qWRu.js";import"./stack-6nd5Ls_2.js";import"./create-recipe-context-DAYCaBKX.js";import"./index-D-es_Zdh.js";import"./index-Bn05qqr6.js";import"./index-BUSip0OD.js";import"./floating-ui.dom-DTz9C7ph.js";const A=a.forwardRef((r,e)=>{const o=l(),s=i(o.getAnchorProps(),r);return t.jsx(d.div,{...s,ref:e})});A.displayName="PopoverAnchor";const N=a.forwardRef((r,e)=>{const o=l(),s=i(o.getArrowProps(),r);return t.jsx(d.div,{...s,ref:e})});N.displayName="PopoverArrow";const b=a.forwardRef((r,e)=>{const o=l(),s=i(o.getArrowTipProps(),r);return t.jsx(d.div,{...s,ref:e})});b.displayName="PopoverArrowTip";const L=a.forwardRef((r,e)=>{const o=l(),s=i(o.getDescriptionProps(),r);return t.jsx(d.div,{...s,ref:e})});L.displayName="PopoverDescription";const k=a.forwardRef((r,e)=>{const o=l(),s=i(o.getIndicatorProps(),r);return t.jsx(d.div,{...s,ref:e})});k.displayName="PopoverIndicator";const I=a.forwardRef((r,e)=>{const o=l(),s=T(),n=i(o.getPositionerProps(),r);return s.unmounted?null:t.jsx(d.div,{...n,ref:e})});I.displayName="PopoverPositioner";const $=a.forwardRef((r,e)=>{const o=l(),s=i(o.getTitleProps(),r);return t.jsx(d.div,{...s,ref:e})});$.displayName="PopoverTitle";const _=a.forwardRef((r,e)=>{const o=l(),s=T(),n=i({...o.getTriggerProps(),"aria-controls":s.unmounted?void 0:o.getTriggerProps()["aria-controls"]},r);return t.jsx(d.button,{...n,ref:e})});_.displayName="PopoverTrigger";const[E,u]=rr({name:"ProgressContext",hookName:"useProgressContext",providerName:"<ProgressProvider />"}),S=a.forwardRef((r,e)=>{const o=u(),s=i(o.getLabelProps(),r);return t.jsx(d.label,{...s,ref:e})});S.displayName="ProgressLabel";const M=a.forwardRef((r,e)=>{const o=u(),s=i(o.getRangeProps(),r);return t.jsx(d.div,{...s,ref:e})});M.displayName="ProgressRange";const lr=(r={})=>{const{getRootNode:e}=or(),{dir:o}=er(),s={id:a.useId(),dir:o,getRootNode:e,value:r.defaultValue,...r},n={...s,value:r.value,onValueChange:tr(r.onValueChange,{sync:!0})},[p,P]=sr(ir(s),{context:n});return dr(p,P,nr)},V=a.forwardRef((r,e)=>{const[o,s]=C()(r,["defaultValue","id","ids","max","min","onValueChange","orientation","translations","value"]),n=lr(o),p=i(n.getRootProps(),s);return t.jsx(E,{value:n,children:t.jsx(d.div,{...p,ref:e})})});V.displayName="ProgressRoot";const q=a.forwardRef((r,e)=>{const[{value:o},s]=C()(r,["value"]),n=i(o.getRootProps(),s);return t.jsx(E,{value:o,children:t.jsx(d.div,{...n,ref:e})})});q.displayName="ProgressRootProvider";const B=a.forwardRef((r,e)=>{const o=u(),s=i(o.getTrackProps(),r);return t.jsx(d.div,{...s,ref:e})});B.displayName="ProgressTrack";const D=a.forwardRef((r,e)=>{const{children:o,...s}=r,n=u(),p=i(n.getValueTextProps(),s);return t.jsx(d.span,{...p,ref:e,children:o||n.percentAsString})});D.displayName="ProgressValueText";const{withRootProvider:O,withContext:c}=j({key:"popover"});O(Y);const gr=O(U),ur=c(_,"trigger",{forwardAsChild:!0}),mr=c(I,"positioner",{forwardAsChild:!0}),Pr=c(X,"content",{forwardAsChild:!0}),z=c(b,"arrowTip",{forwardAsChild:!0}),fr=c(N,"arrow",{forwardAsChild:!0,defaultProps:{children:t.jsx(z,{})}});c(Z,"closeTrigger",{forwardAsChild:!0});c(k,"indicator",{forwardAsChild:!0});c($,"title",{forwardAsChild:!0});c(L,"description",{forwardAsChild:!0});c("footer","footer");c("header","header");c("div","body");c(A,void 0,{forwardAsChild:!0});const{withProvider:H,withContext:m}=j({key:"progress"});H(q,"root",{forwardAsChild:!0});const hr=H(V,"root"),vr=m(S,"label",{forwardAsChild:!0}),xr=m(B,"track",{forwardAsChild:!0}),wr=m(M,"range",{forwardAsChild:!0});m(D,"valueText",{forwardAsChild:!0});function Rr(r){return y({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},child:[]}]})(r)}const F=a.forwardRef(function(e,o){const{showArrow:s,children:n,portalled:p=!0,content:P,portalRef:J,...f}=e;return t.jsxs(gr,{...f,positioning:{...f.positioning,gutter:4},children:[t.jsx(ur,{asChild:!0,children:n}),t.jsx(Q,{disabled:!p,container:J,children:t.jsx(mr,{children:t.jsxs(Pr,{width:"auto",px:"2",py:"1",textStyle:"xs",rounded:"sm",ref:o,children:[s&&t.jsx(fr,{children:t.jsx(z,{})}),P]})})})]})});F.__docgenInfo={description:"",methods:[],displayName:"ToggleTip",props:{showArrow:{required:!1,tsType:{name:"boolean"},description:""},portalled:{required:!1,tsType:{name:"boolean"},description:""},portalRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const W=a.forwardRef(function(e,o){return t.jsx(xr,{...e,ref:o,children:t.jsx(wr,{})})}),jr=hr,Cr=a.forwardRef(function(e,o){const{children:s,info:n,...p}=e;return t.jsxs(vr,{...p,ref:o,children:[s,n&&t.jsx(F,{content:n,children:t.jsx(ar,{variant:"ghost","aria-label":"info",size:"2xs",ms:"1",children:t.jsx(Rr,{})})})]})});W.__docgenInfo={description:"",methods:[],displayName:"ProgressBar"};Cr.__docgenInfo={description:"",methods:[],displayName:"ProgressLabel",props:{info:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function Tr(r){return y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9"},child:[]},{tag:"path",attr:{d:"M17 12a5 5 0 1 0 -5 5"},child:[]}]})(r)}const G=()=>t.jsx(cr,{position:"fixed",flexDirection:"column",justifyContent:"center",width:"100%",height:"100vh",children:t.jsx(K,{icon:t.jsx(pr,{as:Tr,boxSize:6}),title:"Fetching...",description:"Wait please!",children:t.jsx(jr,{width:"25vw",value:null,children:t.jsx(W,{})})})});G.__docgenInfo={description:"",methods:[],displayName:"Loading"};const Wr={title:"layouts/Loading",component:G,parameters:{docs:{autodocs:"tag"}},tags:["autodocs"]},g={args:{}};var h,v,x,w,R;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    // Se un giorno \`LoadingLayout\` accettasse parametri,
    // potresti gestirli da qui.
  }
}`,...(x=(v=g.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:`Storia di base che mostra il layout di caricamento.
Include una barra di progresso e un’icona di “loader”.`,...(R=(w=g.parameters)==null?void 0:w.docs)==null?void 0:R.description}}};const Gr=["Default"];export{g as Default,Gr as __namedExportsOrder,Wr as default};
