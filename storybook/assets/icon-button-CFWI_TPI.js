import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-CFahbR6w.js";import{a as d,c as m,m as y,b as j}from"./create-recipe-context-_8bgquqP.js";const c=d("span"),f=d("div",{base:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},variants:{axis:{horizontal:{insetStart:"50%",translate:"-50%",_rtl:{translate:"50%"}},vertical:{top:"50%",translate:"0 -50%"},both:{insetStart:"50%",top:"50%",translate:"-50% -50%",_rtl:{translate:"50% -50%"}}}},defaultVariants:{axis:"both"}});f.displayName="AbsoluteCenter";const{withContext:C}=m({key:"spinner"}),R=C("span"),S=l.forwardRef(function(a,s){const{spinner:e=t.jsx(R,{size:"inherit",borderWidth:"0.125em",color:"inherit"}),spinnerPlacement:n="start",children:r,text:i,visible:p=!0,...o}=a;return p?i?t.jsxs(c,{ref:s,display:"contents",...o,children:[n==="start"&&e,i,n==="end"&&e]}):e?t.jsxs(c,{ref:s,display:"contents",...o,children:[t.jsx(f,{display:"inline-flex",children:e}),t.jsx(c,{opacity:0,children:r})]}):t.jsx(c,{ref:s,display:"contents",...o,children:r}):r}),{useRecipeResult:B,usePropsContext:g}=m({key:"button"}),v=l.forwardRef(function(a,s){const e=g(),n=l.useMemo(()=>y(e,a),[e,a]),r=B(n),{loading:i,loadingText:p,children:o,spinner:h,spinnerPlacement:b,...x}=r.props;return t.jsx(d.button,{type:"button",ref:s,...x,disabled:i||x.disabled,className:j(r.className,n.className),css:[r.styles,n.css],children:!n.asChild&&i?t.jsx(S,{spinner:h,text:p,spinnerPlacement:b,children:o}):o})}),k=l.forwardRef(function(a,s){return t.jsx(v,{px:"0",py:"0",_icon:{fontSize:"1.2em"},ref:s,...a})});export{f as A,v as B,k as I,R as S,c as a};
