import{jsx as t}from"react/jsx-runtime";import{lazy as e,Suspense as r,useRef as a,useEffect as o}from"react";import n from"gsap";import{useLocation as i,useNavigate as u}from"react-router-dom";function c(e){return r=>{const i=a(null);return o((()=>{i.current&&n.fromTo(i.current,{opacity:0},{opacity:1,duration:1})}),[]),t("div",{ref:i,style:{width:"100%",display:"flex",justifyContent:"center"},children:t(e,{...r})})}}var s={withDynamicLayouts:function(a,o){const n=e((async()=>{await new Promise((t=>setTimeout(t,500)));const t=a.layoutName,e=t.charAt(0).toLowerCase()+t.slice(1);return{default:c((await import(`./../layouts/${e}/${a.layoutName}Layout.ts`)).default)}}));return t(r,{fallback:a.loader,children:t(n,{...o})})},withDynamicPages:function(a,o){const n=e((async()=>{await new Promise((t=>setTimeout(t,500)));const t=a.pageName,e=t.charAt(0).toLowerCase()+t.slice(1);return{default:c((await import(`./../pages/${e}/${a.pageName}Page.ts`)).default)}}));return t(r,{fallback:a.loader,children:t(n,{...o})})},withRouter:function(e){return r=>{const a=i(),o=u();return t(e,{...r,router:{location:a,navigate:o}})}}};export{s as default};
