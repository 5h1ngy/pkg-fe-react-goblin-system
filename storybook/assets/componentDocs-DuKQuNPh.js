import{j as i}from"./jsx-runtime-CDt2p4po.js";import{r as m}from"./index-GiUgBvb1.js";import{n as $n,d,l as w,S as In,b as Cn,e as Pn,f as qn,g as kn,h as Nn,i as Ln,A as zn,E as An,m as M,j as Rn}from"./icons-DOidKO06.js";import{r as jn}from"./index-CROobee-.js";const b=()=>$n(),Mn=["margin","marginTop","marginBottom","marginLeft","marginRight","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd","gap","columnGap","rowGap"],_n=(e,n)=>{const a={...e};return Mn.forEach(t=>{const r=a[t];typeof r=="number"&&(a[t]=n.spacing(r))}),a},U=e=>e?Array.isArray(e)?e.flatMap(n=>U(n)):[e]:[],h=(e,n,a)=>{const t=U(n).filter(Boolean);if(!t.length)return a;const r=t.reduce((o,l)=>{const s=typeof l=="function"?l(e):l;return{...o,..._n(s,e)}},{});return a?{...r,...a}:r},N=(...e)=>e.filter(Boolean),En=d.div``;function Bn({component:e,sx:n,style:a,...t},r){const o=e??"div",l=b(),s=h(l,n,a);return i.jsx(En,{as:o,ref:r,style:s,...t})}const X=m.forwardRef(Bn);X.displayName="Box";X.__docgenInfo={description:"",methods:[],displayName:"Box",props:{component:{required:!1,tsType:{name:"E"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Gn=d.div`
  width: 100%;
`,Y=m.forwardRef(function({maxWidth:n="lg",disableGutters:a=!1,fixed:t=!1,sx:r,style:o,...l},s){const u=b(),p=n?`${u.breakpoints.values[n]}px`:void 0,c={width:"100%",marginInline:"auto",paddingInline:a?0:u.spacing(2),maxWidth:p?t?p:`min(${p}, 100%)`:void 0},f=h(u,N(c,r),o);return i.jsx(Gn,{ref:s,style:f,...l})});Y.displayName="Container";Y.__docgenInfo={description:"",methods:[],displayName:"Container",props:{component:{required:!1,tsType:{name:"E"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | false",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"false"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},disableGutters:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const K=m.createContext({spacing:0,columns:12}),Vn=()=>m.useContext(K),Hn=d.div`
  box-sizing: border-box;

  ${({$container:e,$wrap:n})=>e&&w`
      display: flex;
      flex-wrap: ${n};
    `}

  ${({$container:e,$spacing:n,theme:a})=>e&&w`
      margin: calc(-1 * ${a.spacing(n/2)});
    `}

  ${({$item:e,$spacing:n,theme:a})=>e&&w`
      padding: ${a.spacing(n/2)};
      flex-basis: 100%;
      max-width: 100%;
    `}

  ${({$sizes:e,$columns:n,theme:a})=>Object.entries(e).map(([t,r])=>{if(r===void 0||r===!1)return"";if(r==="auto"){const u=w`
          flex: 0 0 auto;
          max-width: none;
        `;return t==="xs"?u:w`
              ${a.breakpoints.up(t)} {
                ${u}
              }
            `}const l=`${(typeof r=="number"?Math.min(Math.max(r,0),n):n)/n*100}%`,s=w`
        flex-basis: ${l};
        max-width: ${l};
      `;return t==="xs"?s:w`
            ${a.breakpoints.up(t)} {
              ${s}
            }
          `})}

  ${({$justifyContent:e})=>e&&w`
      justify-content: ${e};
    `}

  ${({$alignItems:e})=>e&&w`
      align-items: ${e};
    `}
`,J=m.forwardRef(function({component:n="div",container:a=!1,item:t=!1,columns:r=12,spacing:o,wrap:l="wrap",justifyContent:s,alignItems:u,xs:p,sm:c,md:f,lg:y,xl:g,sx:T,style:I,...C},$){const v=b(),x=Vn(),S=a?r:x.columns,P=o??x.spacing??0,Tn={xs:p??(t?!0:void 0),sm:c,md:f,lg:y,xl:g},wn=h(v,T,I),O=i.jsx(Hn,{as:n,ref:$,$container:a,$item:t,$columns:S,$spacing:P,$sizes:Tn,$wrap:l,$justifyContent:s,$alignItems:u,style:wn,...C});return a?i.jsx(K.Provider,{value:{spacing:P,columns:S},children:O}):O});J.displayName="Grid";J.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{component:{required:!1,tsType:{name:"ElementType"},description:"",defaultValue:{value:"'div'",computed:!1}},container:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},item:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},columns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}},spacing:{required:!1,tsType:{name:"number"},description:""},wrap:{required:!1,tsType:{name:"CSSProperties['flexWrap']",raw:"CSSProperties['flexWrap']"},description:"",defaultValue:{value:"'wrap'",computed:!1}},justifyContent:{required:!1,tsType:{name:"CSSProperties['justifyContent']",raw:"CSSProperties['justifyContent']"},description:""},alignItems:{required:!1,tsType:{name:"CSSProperties['alignItems']",raw:"CSSProperties['alignItems']"},description:""},xs:{required:!1,tsType:{name:"union",raw:"number | boolean | 'auto'",elements:[{name:"number"},{name:"boolean"},{name:"literal",value:"'auto'"}]},description:""},sm:{required:!1,tsType:{name:"union",raw:"number | boolean | 'auto'",elements:[{name:"number"},{name:"boolean"},{name:"literal",value:"'auto'"}]},description:""},md:{required:!1,tsType:{name:"union",raw:"number | boolean | 'auto'",elements:[{name:"number"},{name:"boolean"},{name:"literal",value:"'auto'"}]},description:""},lg:{required:!1,tsType:{name:"union",raw:"number | boolean | 'auto'",elements:[{name:"number"},{name:"boolean"},{name:"literal",value:"'auto'"}]},description:""},xl:{required:!1,tsType:{name:"union",raw:"number | boolean | 'auto'",elements:[{name:"number"},{name:"boolean"},{name:"literal",value:"'auto'"}]},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const Dn=d.div`
  display: flex;
  flex-direction: ${({$direction:e})=>e};
  gap: ${({$gap:e})=>e};
  align-items: ${({$alignItems:e})=>e};
  justify-content: ${({$justifyContent:e})=>e};
`;function On({component:e,direction:n="column",spacing:a=0,divider:t,alignItems:r,justifyContent:o,sx:l,style:s,children:u,...p},c){const f=e??"div",y=b(),g=y.spacing(a),T=h(y,l,s),I=m.Children.toArray(u),C=t&&I.length>1?I.flatMap(($,v)=>{if(v===I.length-1)return $;const x=m.isValidElement(t)&&!t.key?m.cloneElement(t,{key:`divider-${v}`}):t;return[$,i.jsx(m.Fragment,{children:x},`stack-divider-${v}`)]}):u;return i.jsx(Dn,{as:f,ref:c,$direction:n,$gap:g,$alignItems:r,$justifyContent:o,style:T,...p,children:C})}const Q=m.forwardRef(On);Q.displayName="Stack";Q.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{component:{required:!1,tsType:{name:"E"},description:""},direction:{required:!1,tsType:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"},description:"",defaultValue:{value:"'column'",computed:!1}},spacing:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},divider:{required:!1,tsType:{name:"ReactNode"},description:""},alignItems:{required:!1,tsType:{name:"CSSProperties['alignItems']",raw:"CSSProperties['alignItems']"},description:""},justifyContent:{required:!1,tsType:{name:"CSSProperties['justifyContent']",raw:"CSSProperties['justifyContent']"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Z=m.createContext({variant:"standard"}),Wn=()=>m.useContext(Z),Fn=d.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  ${({$variant:e,$cols:n,$gap:a,$rowHeight:t})=>e==="masonry"?w`
          column-count: ${n};
          column-gap: ${a};

          & > li {
            break-inside: avoid;
            margin-bottom: ${a};
          }
        `:w`
          display: grid;
          grid-template-columns: repeat(${n}, minmax(0, 1fr));
          gap: ${a};
          ${t&&t!=="auto"?w`
                grid-auto-rows: ${t}px;
              `:""}
        `}
`,ee=m.forwardRef(function({cols:n=3,gap:a=2,rowHeight:t=164,variant:r="standard",children:o,...l},s){const p=b().spacing(a),c=i.jsx(Fn,{ref:s,$gap:p,$cols:n,$rowHeight:t,$variant:r,...l,children:o});return i.jsx(Z.Provider,{value:{variant:r},children:c})});ee.displayName="ImageList";ee.__docgenInfo={description:"",methods:[],displayName:"ImageList",props:{cols:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},rowHeight:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"164",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'masonry' | 'woven' | 'quilted'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'masonry'"},{name:"literal",value:"'woven'"},{name:"literal",value:"'quilted'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}}},composes:["Omit"]};const Un=d.li`
  position: relative;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.shape.borderRadius}px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  ${({$variant:e,$cols:n,$rows:a})=>e!=="masonry"&&w`
      grid-column: span ${n};
      grid-row: span ${a};
    `}
`,ne=m.forwardRef(function({cols:n=1,rows:a=1,...t},r){const{variant:o}=Wn();return i.jsx(Un,{ref:r,$variant:o,$cols:n,$rows:a,...t})});ne.displayName="ImageListItem";ne.__docgenInfo={description:"",methods:[],displayName:"ImageListItem",props:{cols:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}},composes:["HTMLAttributes"]};const Xn=d.div`
  position: absolute;
  left: 0;
  right: 0;
  ${({$position:e})=>e==="top"?"top: 0;":"bottom: 0;"}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: linear-gradient(
    ${({$position:e})=>e==="top"?"180deg":"0deg"},
    rgba(0, 0, 0, 0.6) 0%,
    transparent 100%
  );
  color: #fff;
`,Yn=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`,ae=({title:e,subtitle:n,position:a="bottom",actionIcon:t,...r})=>i.jsxs(Xn,{$position:a,...r,children:[i.jsxs(Yn,{children:[i.jsx("span",{children:e}),n&&i.jsx("small",{children:n})]}),t]});ae.displayName="ImageListItemBar";ae.__docgenInfo={description:"",methods:[],displayName:"ImageListItemBar",props:{title:{required:!0,tsType:{name:"ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},actionIcon:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const q=(e,n)=>{if(n==="inherit")return{main:"inherit",contrastText:"inherit",dark:"inherit"};if(n==="default")return{main:e.palette.grey[500],contrastText:e.palette.text.primary,dark:e.palette.grey[700]};const a={primary:"primary",secondary:"secondary",success:"success",info:"info",warning:"warning",error:"error"},t=e.palette[a[n]];return{main:t.main,contrastText:t.contrastText,dark:t.dark}},Kn={small:"0.8125rem",medium:"0.875rem",large:"0.9375rem"},Jn={small:[1.1,2.6],medium:[1.4,3.2],large:[1.7,3.8]},Qn=(e,n)=>{const[a,t]=Jn[n];return`${e.spacing(a)} ${e.spacing(t)}`},te=d.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing(1.4)};
  border-radius: ${({theme:e})=>e.shape.borderRadius}px;
  border: 1px solid transparent;
  font-weight: ${({theme:e})=>e.typography.fontWeightMedium};
  font-size: ${({$size:e})=>Kn[e]};
  padding: ${({theme:e,$size:n})=>Qn(e,n)};
  text-transform: ${({theme:e})=>e.typography.button.textTransform};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.create(["background-color","box-shadow","transform"])};
  width: ${({$fullWidth:e})=>e?"100%":"auto"};

  ${({$variant:e,theme:n,$color:a})=>{const t=q(n,a??"primary");switch(e){case"outlined":return w`
          border-color: ${t.main};
          color: ${t.main};
          background: transparent;

          &:hover {
            background: ${n.palette.action.hover};
            color: ${t.dark};
            border-color: ${t.dark};
          }
        `;case"contained":return w`
          background: ${t.main};
          color: ${t.contrastText};
          border-color: ${t.main};

          &:hover {
            background: ${t.dark};
            transform: translateY(-1px);
          }
        `;default:return w`
          background: transparent;
          color: ${t.main};

          &:hover {
            background: ${n.palette.action.hover};
            color: ${t.dark};
          }
        `}}}

  ${({$variant:e,$disableElevation:n,theme:a})=>e==="contained"&&w`
      box-shadow: ${n?"none":a.shadows[Math.min(2,a.shadows.length-1)]};

      &:hover {
        box-shadow: ${n?"none":a.shadows[Math.min(3,a.shadows.length-1)]};
      }
    `}

  &:disabled {
    background: ${({theme:e})=>e.palette.action.disabledBackground};
    border-color: ${({theme:e})=>e.palette.action.disabledBackground};
    color: ${({theme:e})=>e.palette.action.disabled};
    opacity: 1;
    cursor: not-allowed;
    pointer-events: none;
  }
`,k=m.forwardRef(function({variant:n="text",color:a="primary",size:t="medium",fullWidth:r,startIcon:o,endIcon:l,disableElevation:s,sx:u,style:p,children:c,...f},y){const g=b(),T=h(g,u,p);return i.jsxs(te,{ref:y,$variant:n,$color:a,$size:t,$fullWidth:r,$disableElevation:s,style:T,...f,children:[o,c,l]})});k.displayName="Button";k.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'outlined' | 'contained'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'contained'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'inherit'
| 'default'
| 'primary'
| 'secondary'
| 'success'
| 'info'
| 'warning'
| 'error'`,elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},startIcon:{required:!1,tsType:{name:"ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactNode"},description:""},disableElevation:{required:!1,tsType:{name:"boolean"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["ButtonHTMLAttributes"]};const Zn=d(te)`
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
`,ie=m.forwardRef(function({variant:n="text",color:a="primary",size:t="medium",disableElevation:r,sx:o,style:l,...s},u){const p=b(),c=h(p,N({width:40,height:40,borderRadius:"50%",padding:0},o),l);return i.jsx(Zn,{ref:u,$variant:n,$color:a,$size:t,$fullWidth:!1,$disableElevation:r,style:c,...s})});ie.displayName="IconButton";ie.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{variant:{required:!1,tsType:{name:"ButtonProps['variant']",raw:"ButtonProps['variant']"},description:"",defaultValue:{value:"'text'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'inherit'
| 'default'
| 'primary'
| 'secondary'
| 'success'
| 'info'
| 'warning'
| 'error'`,elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},startIcon:{required:!1,tsType:{name:"ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactNode"},description:""},disableElevation:{required:!1,tsType:{name:"boolean"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["ButtonHTMLAttributes"]};const re=d.div`
  display: inline-flex;
  flex-direction: ${({$orientation:e})=>e==="vertical"?"column":"row"};
  width: ${({$fullWidth:e})=>e?"100%":"auto"};

  & > button {
    border-radius: 0;
  }

  & > button:first-child {
    border-top-left-radius: ${({$orientation:e,theme:n})=>n.shape.borderRadius}px;
    border-bottom-left-radius: ${({$orientation:e,theme:n})=>e==="vertical"?0:n.shape.borderRadius}px;
    border-top-right-radius: ${({$orientation:e,theme:n})=>e==="vertical"?n.shape.borderRadius:0}px;
  }

  & > button:last-child {
    border-top-right-radius: ${({theme:e})=>e.shape.borderRadius}px;
    border-bottom-right-radius: ${({$orientation:e,theme:n})=>n.shape.borderRadius}px;
    border-bottom-left-radius: ${({$orientation:e,theme:n})=>e==="vertical"?n.shape.borderRadius:0}px;
  }
`,oe=({orientation:e="horizontal",variant:n="outlined",color:a="primary",size:t="medium",fullWidth:r,children:o,sx:l,style:s,...u})=>{const p=b(),c=h(p,l,s),f=m.Children.map(o,y=>m.isValidElement(y)?m.cloneElement(y,{variant:n,color:a,size:t,fullWidth:r}):y);return i.jsx(re,{$orientation:e,$fullWidth:r,style:c,...u,children:f})};oe.displayName="ButtonGroup";oe.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'text' | 'outlined' | 'contained'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'contained'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},color:{required:!1,tsType:{name:"ButtonProps['color']",raw:"ButtonProps['color']"},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const le=m.forwardRef(function({size:n="medium",sx:a,color:t="secondary",variant:r="contained",disableElevation:o,...l},s){const u=n==="small"?40:n==="large"?72:56,p={width:u,height:u,borderRadius:"50%",padding:0};return i.jsx(k,{ref:s,variant:r,color:t,disableElevation:o,size:n,sx:N(p,a),...l})});le.displayName="Fab";le.__docgenInfo={description:"",methods:[],displayName:"Fab",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'outlined' | 'contained'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'contained'"}]},description:"",defaultValue:{value:"'contained'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'inherit'
| 'default'
| 'primary'
| 'secondary'
| 'success'
| 'info'
| 'warning'
| 'error'`,elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'secondary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},startIcon:{required:!1,tsType:{name:"ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactNode"},description:""},disableElevation:{required:!1,tsType:{name:"boolean"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["ButtonHTMLAttributes"]};const _=d.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({$size:e})=>e==="small"?32:40}px;
  height: ${({$size:e})=>e==="small"?32:40}px;
  position: relative;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
`,E=d.input`
  opacity: 0;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: inherit;
`,ea=d.span`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid ${({theme:e})=>e.palette.divider};
  transition: ${({theme:e})=>e.transitions.create(["background-color","border-color"])};
  background: ${({$checked:e,theme:n,$color:a})=>e?q(n,a).main:"transparent"};
  border-color: ${({$checked:e,theme:n,$color:a})=>e?q(n,a).main:n.palette.divider};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e,$color:n})=>q(e,n).contrastText};

  &::after {
    content: '';
    width: 6px;
    height: 12px;
    border: 2px solid currentColor;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
    opacity: ${({$checked:e})=>e?1:0};
    transition: opacity 0.2s ease;
  }
`,se=({color:e="primary",size:n="medium",checked:a,disabled:t,onChange:r,indeterminate:o,inputProps:l})=>i.jsxs(_,{$size:n,$disabled:t,children:[i.jsx(ea,{$checked:o?!0:a,$color:e}),i.jsx(E,{type:"checkbox",checked:a,disabled:t,"aria-checked":o?"mixed":a,onChange:s=>r==null?void 0:r(s,s.target.checked),...l})]});se.displayName="Checkbox";se.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{color:{required:!1,tsType:{name:"union",raw:`| 'inherit'
| 'default'
| 'primary'
| 'secondary'
| 'success'
| 'info'
| 'warning'
| 'error'`,elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"},{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},inputProps:{required:!1,tsType:{name:"InputHTMLAttributes",elements:[{name:"HTMLInputElement"}],raw:"InputHTMLAttributes<HTMLInputElement>"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:""}}};const na=d.span`
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 2px solid ${({theme:e})=>e.palette.divider};
  display: grid;
  place-items: center;
  transition: ${({theme:e})=>e.transitions.create(["border-color"])};
  border-color: ${({$checked:e,theme:n,$color:a})=>e?q(n,a).main:n.palette.divider};

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({theme:e,$color:n})=>q(e,n).main};
    opacity: ${({$checked:e})=>e?1:0};
    transition: opacity 0.2s ease;
  }
`,de=({color:e="primary",size:n="medium",checked:a,disabled:t,onChange:r,inputProps:o,value:l,name:s})=>i.jsxs(_,{$size:n,$disabled:t,children:[i.jsx(na,{$checked:a,$color:e}),i.jsx(E,{type:"radio",checked:a,disabled:t,onChange:u=>r==null?void 0:r(u,u.target.checked),value:l,name:s,...o})]});de.displayName="Radio";de.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{color:{required:!1,tsType:{name:"union",raw:`| 'inherit'
| 'default'
| 'primary'
| 'secondary'
| 'success'
| 'info'
| 'warning'
| 'error'`,elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"},{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},inputProps:{required:!1,tsType:{name:"InputHTMLAttributes",elements:[{name:"HTMLInputElement"}],raw:"InputHTMLAttributes<HTMLInputElement>"},description:""},value:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""}}};const aa=d.span`
  width: 36px;
  height: 20px;
  border-radius: 999px;
  background: ${({$checked:e,theme:n,$color:a})=>e?q(n,a).main:n.palette.grey[400]};
  position: relative;
  transition: ${({theme:e})=>e.transitions.create(["background-color"])};
`,ta=d.span`
  position: absolute;
  top: 2px;
  left: ${({$checked:e})=>e?"18px":"2px"};
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  transition: ${({theme:e})=>e.transitions.create(["left"])};
`,ue=({color:e="primary",checked:n,disabled:a,onChange:t,inputProps:r})=>i.jsxs(_,{$size:"medium",$disabled:a,children:[i.jsx(aa,{$checked:n,$color:e,children:i.jsx(ta,{$checked:n})}),i.jsx(E,{type:"checkbox",role:"switch",checked:n,disabled:a,onChange:o=>t==null?void 0:t(o,o.target.checked),...r})]});ue.displayName="Switch";ue.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{color:{required:!1,tsType:{name:"union",raw:`| 'inherit'
| 'default'
| 'primary'
| 'secondary'
| 'success'
| 'info'
| 'warning'
| 'error'`,elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"},{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},inputProps:{required:!1,tsType:{name:"InputHTMLAttributes",elements:[{name:"HTMLInputElement"}],raw:"InputHTMLAttributes<HTMLInputElement>"},description:""}}};const me=d.label`
  display: inline-flex;
  flex-direction: column;
  gap: 0.35rem;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  color: ${({theme:e})=>e.palette.text.primary};

  input,
  select,
  textarea {
    font: inherit;
  }

  ${({$variant:e,theme:n,$error:a,$disabled:t})=>{const r=a?n.palette.error.main:n.palette.divider;switch(e){case"filled":return w`
          input,
          select,
          textarea {
            background: ${n.palette.grey[100]};
            border: none;
            border-radius: ${n.shape.borderRadius}px ${n.shape.borderRadius}px 0 0;
            padding: 0.75rem 1rem;
            border-bottom: 1px solid ${r};
            opacity: ${t?.6:1};
          }
        `;case"standard":return w`
          input,
          select,
          textarea {
            border: none;
            border-bottom: 1px solid ${r};
            padding: 0.5rem 0;
            opacity: ${t?.6:1};
          }
        `;default:return w`
          input,
          select,
          textarea {
            border-radius: ${n.shape.borderRadius}px;
            border: 1px solid ${r};
            padding: 0.75rem 1rem;
            opacity: ${t?.6:1};
          }
        `}}}
`,pe=d.small`
  color: ${({$error:e,theme:n})=>e?n.palette.error.main:n.palette.text.secondary};
`,W=d.span`
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.palette.text.secondary};
`,ia=d.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: ${({$disabled:e})=>e?.6:1};
`,B=m.forwardRef(function({label:n,helperText:a,error:t,fullWidth:r,variant:o="outlined",startAdornment:l,endAdornment:s,multiline:u,rows:p=3,sx:c,style:f,onChange:y,...g},T){const I=m.useId(),C=b(),$=h(C,c,f),v=g,x=g;return i.jsxs(me,{htmlFor:I,$variant:o,$error:t,$fullWidth:r,$disabled:g.disabled,style:$,children:[n&&i.jsx("strong",{children:n}),i.jsxs(ia,{$disabled:g.disabled,children:[l&&i.jsx(W,{children:l}),u?i.jsx("textarea",{id:I,rows:p,ref:T,onChange:S=>y==null?void 0:y(S),...x}):i.jsx("input",{id:I,ref:T,onChange:S=>y==null?void 0:y(S),...v}),s&&i.jsx(W,{children:s})]}),a&&i.jsx(pe,{$error:t,children:a})]})});B.displayName="TextField";B.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},helperText:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'standard'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},startAdornment:{required:!1,tsType:{name:"ReactNode"},description:""},endAdornment:{required:!1,tsType:{name:"ReactNode"},description:""},multiline:{required:!1,tsType:{name:"boolean"},description:""},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}],raw:"ChangeEvent<HTMLInputElement | HTMLTextAreaElement>"},name:"event"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const ce=({label:e,helperText:n,error:a,fullWidth:t,variant:r="outlined",options:o,sx:l,style:s,...u})=>{const p=m.useId(),c=b(),f=h(c,l,s);return i.jsxs(me,{htmlFor:p,$variant:r,$error:a,$fullWidth:t,style:f,children:[e&&i.jsx("strong",{children:e}),i.jsx("select",{id:p,...u,children:o.map(y=>i.jsx("option",{value:y.value,children:y.label},y.value))}),n&&i.jsx(pe,{$error:a,children:n})]})};ce.displayName="Select";ce.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},helperText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'standard'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["SelectHTMLAttributes"]};const ra=d.input`
  width: 100%;
  cursor: pointer;
  accent-color: ${({theme:e})=>e.palette.primary.main};
`,fe=m.forwardRef(function({sx:n,style:a,valueLabelDisplay:t="auto",...r},o){const l=b(),s=h(l,n,a),[u,p]=m.useState(!1);return i.jsxs("div",{style:s,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[i.jsx(ra,{type:"range",ref:o,...r}),t!=="off"&&u&&i.jsx("small",{children:r.value})]})});fe.displayName="Slider";fe.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},step:{required:!1,tsType:{name:"number"},description:""},valueLabelDisplay:{required:!1,tsType:{name:"union",raw:"'auto' | 'on' | 'off'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'on'"},{name:"literal",value:"'off'"}]},description:"",defaultValue:{value:"'auto'",computed:!1}},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["InputHTMLAttributes"]};const oa=d.div`
  display: inline-flex;
  gap: 0.25rem;
  font-size: ${({$size:e})=>e==="small"?"1.25rem":e==="large"?"2rem":"1.5rem"};
  color: ${({theme:e})=>e.palette.warning.main};
`,ge=({max:e=5,precision:n=1,value:a,defaultValue:t=0,readOnly:r,onChange:o,size:l="medium",icon:s=i.jsx(In,{"aria-hidden":!0}),emptyIcon:u=i.jsx(Cn,{"aria-hidden":!0}),sx:p,style:c,className:f})=>{const y=b(),g=h(y,p,c),[T,I]=m.useState(t),C=a??T,$=(v,x)=>{if(r)return;const S=(x+1)*n;I(S),o==null||o(v,S)};return i.jsx(oa,{$size:l,style:g,className:f,children:Array.from({length:e}).map((v,x)=>{const S=x+1<=C;return i.jsx("button",{type:"button",onClick:P=>$(P,x),disabled:r,style:{background:"none",border:"none",padding:0,cursor:r?"default":"pointer",color:S?y.palette.warning.main:y.palette.grey[400]},children:S?s:u},x)})})};ge.displayName="Rating";ge.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},precision:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>, value: number) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"},{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"<StarIcon aria-hidden />",computed:!1}},emptyIcon:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"<StarBorderIcon aria-hidden />",computed:!1}},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["Omit"]};const ye=m.forwardRef(function({selected:n,value:a,sx:t,...r},o){return i.jsx(k,{ref:o,"data-value":a,"aria-pressed":n,sx:N({borderRadius:"999px"},n?{backgroundColor:"rgba(0,0,0,0.08)"}:void 0,t),...r})});ye.displayName="ToggleButton";ye.__docgenInfo={description:"",methods:[],displayName:"ToggleButton",props:{selected:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"string"},description:""}},composes:["Omit"]};const ve=({value:e,defaultValue:n,exclusive:a=!0,onChange:t,children:r,orientation:o="horizontal",sx:l,style:s,...u})=>{const p=b(),c=h(p,l,s),[f,y]=m.useState(n),g=e??f,T=(C,$)=>{if(a){y($),t==null||t(C,$);return}const v=Array.isArray(g)?g:[],S=v.includes($)?v.filter(P=>P!==$):[...v,$];y(S),t==null||t(C,S)},I=m.Children.map(r,C=>{if(!m.isValidElement(C))return C;const $=C.props.value,v=a?g===$:Array.isArray(g)&&g.includes($);return m.cloneElement(C,{selected:v,onClick:x=>T(x,$)})});return i.jsx(re,{$orientation:o,style:c,...u,children:I})};ve.displayName="ToggleButtonGroup";ve.__docgenInfo={description:"",methods:[],displayName:"ToggleButtonGroup",props:{value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},exclusive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLElement>, value: string | string[]) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"},{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["Omit"]};const la=d.ul`
  list-style: none;
  margin: ${({theme:e})=>`${e.spacing(.6)} 0 0`};
  padding: 0;
  border-radius: ${({theme:e})=>e.shape.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.palette.divider};
  max-height: 220px;
  overflow-y: auto;
  background: ${({theme:e})=>e.palette.background.paper};
  box-shadow: ${({theme:e})=>e.shadows[Math.min(3,e.shadows.length-1)]};
  position: absolute;
  left: 0;
  right: 0;
  z-index: ${({theme:e})=>e.zIndex.modal};

  li {
    padding: ${({theme:e})=>`${e.spacing(1.2)} ${e.spacing(2.2)}`};
    cursor: pointer;

    &:hover {
      background: ${({theme:e})=>e.palette.action.hover};
    }
  }
`,be=({options:e,onChange:n,sx:a,style:t,...r})=>{const o=b(),l=h(o,a,t),[s,u]=m.useState(r.value??""),[p,c]=m.useState(!1),f=m.useMemo(()=>e.filter(g=>g.label.toLowerCase().includes(s.toLowerCase())),[e,s]),y=g=>{const T={target:{value:g.label}};u(g.label),c(!1),n==null||n(T,g)};return i.jsxs("div",{style:{position:"relative",...l},children:[i.jsx(B,{...r,value:s,onChange:g=>{const T=g;u(T.target.value),c(!0),n==null||n(T,null)},onFocus:()=>c(!0)}),p&&f.length>0&&i.jsx(la,{children:f.map(g=>i.jsx("li",{onClick:()=>y(g),children:g.label},g.value))})]})};be.displayName="Autocomplete";be.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"AutocompleteOption"}],raw:"AutocompleteOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>, value: AutocompleteOption | null) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"},{type:{name:"union",raw:"AutocompleteOption | null",elements:[{name:"AutocompleteOption"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const sa=d.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,F=d.div`
  border: 1px solid ${({theme:e})=>e.palette.divider};
  border-radius: ${({theme:e})=>e.shape.borderRadius}px;
  width: 220px;
  min-height: 200px;
  display: flex;
  flex-direction: column;

  ul {
    flex: 1;
    margin: 0;
    padding: 0.5rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  li {
    padding: 0.35rem 0.5rem;
    border-radius: ${({theme:e})=>e.shape.borderRadius}px;
    cursor: pointer;

    &.selected {
      background: ${({theme:e})=>{var n;return((n=e.palette.action)==null?void 0:n.selected)??e.palette.grey[100]}};
    }
  }
`,he=({left:e,right:n,onChange:a,sx:t})=>{const r=b(),o=h(r,t),[l,s]=m.useState(e),[u,p]=m.useState(n),[c,f]=m.useState(new Set),[y,g]=m.useState(new Set),T=$=>{if($==="right"){const v=l.filter(P=>c.has(P.value)),x=l.filter(P=>!c.has(P.value)),S=[...u,...v];s(x),p(S),f(new Set),a==null||a(x,S)}else{const v=u.filter(P=>y.has(P.value)),x=u.filter(P=>!y.has(P.value)),S=[...l,...v];p(x),s(S),g(new Set),a==null||a(S,x)}},I=($,v,x)=>{const S=new Set($);S.has(x)?S.delete(x):S.add(x),v(S)},C=($,v,x)=>i.jsx("ul",{children:$.map(S=>i.jsx("li",{className:v.has(S.value)?"selected":void 0,onClick:()=>I(v,x,S.value),children:S.label},S.value))});return i.jsxs(sa,{style:o,children:[i.jsxs(F,{children:[i.jsx("strong",{style:{padding:"0.5rem 0.75rem"},children:"Available"}),C(l,c,f)]}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[i.jsx(k,{variant:"contained",onClick:()=>T("right"),children:">"}),i.jsx(k,{variant:"contained",onClick:()=>T("left"),children:"<"})]}),i.jsxs(F,{children:[i.jsx("strong",{style:{padding:"0.5rem 0.75rem"},children:"Chosen"}),C(u,y,g)]})]})};he.displayName="TransferList";he.__docgenInfo={description:"",methods:[],displayName:"TransferList",props:{left:{required:!0,tsType:{name:"Array",elements:[{name:"TransferListItem"}],raw:"TransferListItem[]"},description:""},right:{required:!0,tsType:{name:"Array",elements:[{name:"TransferListItem"}],raw:"TransferListItem[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(left: TransferListItem[], right: TransferListItem[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"TransferListItem"}],raw:"TransferListItem[]"},name:"left"},{type:{name:"Array",elements:[{name:"TransferListItem"}],raw:"TransferListItem[]"},name:"right"}],return:{name:"void"}}},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}}};const j=(e,n)=>{if(n==="inherit")return{main:"inherit",contrastText:"inherit"};if(n==="default")return{main:e.palette.background.paper,contrastText:e.palette.text.primary};const t={primary:"primary",secondary:"secondary",success:"success",info:"info",warning:"warning",error:"error"}[n];return e.palette[t]},da=d.header`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({theme:e,$color:n})=>n==="transparent"?"transparent":j(e,n??"primary").main};
  color: ${({theme:e,$color:n})=>n==="transparent"?e.palette.text.primary:j(e,n??"primary").contrastText};
  position: ${({$position:e})=>e??"fixed"};
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({theme:e})=>e.zIndex.appBar};
  box-shadow: ${({theme:e,$elevation:n})=>e.shadows[Math.min(n,e.shadows.length-1)]};
`,Se=({position:e="fixed",color:n="primary",elevation:a=4,sx:t,style:r,children:o,...l})=>{const s=b(),u=h(s,t,r);return i.jsx(da,{$position:e,$color:n,$elevation:a,style:u,...l,children:o})};Se.displayName="AppBar";Se.__docgenInfo={description:"",methods:[],displayName:"AppBar",props:{position:{required:!1,tsType:{name:"union",raw:"'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'",elements:[{name:"literal",value:"'fixed'"},{name:"literal",value:"'absolute'"},{name:"literal",value:"'sticky'"},{name:"literal",value:"'static'"},{name:"literal",value:"'relative'"}]},description:"",defaultValue:{value:"'fixed'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PaletteIntent | 'transparent'",elements:[{name:"union",raw:`| 'inherit'
| 'default'
| 'primary'
| 'secondary'
| 'success'
| 'info'
| 'warning'
| 'error'`,elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},{name:"literal",value:"'transparent'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},elevation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const ua=d.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 56px;
  padding: ${({$disableGutters:e})=>e?"0":"0 16px"};

  ${({theme:e})=>w`
    ${e.breakpoints.up("sm")} {
      min-height: 64px;
    }
  `}
`,xe=({disableGutters:e,children:n,sx:a,style:t,...r})=>{const o=b(),l=h(o,a,t);return i.jsx(ua,{$disableGutters:e,style:l,...r,children:n})};xe.displayName="Toolbar";xe.__docgenInfo={description:"",methods:[],displayName:"Toolbar",props:{disableGutters:{required:!1,tsType:{name:"boolean"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const Te=m.createContext(null),we=()=>{const e=m.useContext(Te);if(!e)throw new Error("Tab components must be used within <Tabs>");return e},ma=d.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid ${({theme:e})=>e.palette.divider};
  overflow-x: ${({$variant:e})=>e==="scrollable"?"auto":"visible"};
`,$e=({value:e,defaultValue:n=0,onChange:a,variant:t="standard",sx:r,style:o,children:l,...s})=>{const[u,p]=m.useState(n),c=b(),f=h(c,r,o),y=e??u,g=(T,I)=>{p(I),a==null||a(T,I)};return i.jsx(Te.Provider,{value:{value:y,onChange:g,variant:t},children:i.jsx(ma,{$variant:t,style:f,...s,children:l})})};$e.displayName="Tabs";$e.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLElement>, value: TabsValue) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"},{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'scrollable' | 'fullWidth'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'scrollable'"},{name:"literal",value:"'fullWidth'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["Omit"]};const pa=d.button`
  appearance: none;
  border: none;
  background: transparent;
  padding: 0.75rem 1.25rem;
  font: inherit;
  cursor: pointer;
  position: relative;
  color: ${({theme:e,$selected:n})=>n?e.palette.text.primary:e.palette.text.secondary};
  transition: ${({theme:e})=>e.transitions.create(["color"])};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    border-radius: 3px 3px 0 0;
    background: ${({theme:e})=>e.palette.primary.main};
    opacity: ${({$selected:e})=>e?1:0};
    transform: scaleX(${({$selected:e})=>e?1:.4});
    transition: ${({theme:e})=>e.transitions.create(["opacity","transform"])};
  }
`,Ie=({label:e,value:n,icon:a,sx:t,style:r,...o})=>{const l=we(),s=b(),u=h(s,t,r),p=n??(e==null?void 0:e.toString())??"",c=l.value===p;return i.jsxs(pa,{type:"button",role:"tab","aria-selected":c,$selected:c,onClick:f=>l.onChange(f,p),style:u,...o,children:[a,e]})};Ie.displayName="Tab";Ie.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{label:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["ButtonHTMLAttributes"]};const Ce=({value:e,hidden:n,children:a,...t})=>{const o=we().value===e;return!o&&n!==!1?null:i.jsx("div",{role:"tabpanel",hidden:!o&&n!==!1,...t,children:a})};Ce.displayName="TabPanel";Ce.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};const Pe=d.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: ${({theme:e})=>e.zIndex.drawer-1};
`,ca=d.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  width: ${({$width:e})=>e}px;
  ${({$anchor:e})=>e==="left"?"left: 0;":"right: 0;"}
  background: ${({theme:e})=>e.palette.background.paper};
  box-shadow: ${({theme:e})=>e.shadows[4]};
  transform: translateX(
    ${({$anchor:e,$open:n})=>n?"0":e==="left"?"-100%":"100%"}
  );
  transition: ${({theme:e})=>e.transitions.create(["transform"])};
  z-index: ${({theme:e})=>e.zIndex.drawer};
  display: flex;
  flex-direction: column;
`,qe=({open:e,onClose:n,anchor:a="left",variant:t="temporary",width:r=280,sx:o,style:l,children:s,...u})=>{const p=b(),c=h(p,o,l),f=i.jsx(ca,{$anchor:a,$open:e,$width:r,style:c,...u,children:s});return t==="permanent"?f:i.jsxs(i.Fragment,{children:[t==="temporary"&&e&&i.jsx(Pe,{onClick:n}),f]})};qe.displayName="Drawer";qe.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},anchor:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'temporary' | 'persistent' | 'permanent'",elements:[{name:"literal",value:"'temporary'"},{name:"literal",value:"'persistent'"},{name:"literal",value:"'permanent'"}]},description:"",defaultValue:{value:"'temporary'",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"280",computed:!1}},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const fa=d.nav`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  align-items: center;
  font-size: 0.875rem;
`,ke=({separator:e="/",children:n,sx:a,style:t,...r})=>{const o=b(),l=h(o,a,t),s=m.Children.toArray(n);return i.jsx(fa,{"aria-label":"breadcrumb",style:l,...r,children:s.map((u,p)=>i.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.35rem"},children:[u,p<s.length-1&&i.jsx("span",{children:e})]},p))})};ke.displayName="Breadcrumbs";ke.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{separator:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'/'",computed:!1}},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const ga=d.nav`
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;
`,L=d.button`
  min-width: 36px;
  height: 36px;
  border-radius: 18px;
  border: none;
  background: ${({$selected:e,theme:n})=>e?n.palette.primary.main:"transparent"};
  color: ${({$selected:e,theme:n})=>e?n.palette.primary.contrastText:n.palette.text.primary};
  cursor: pointer;
  font: inherit;
  padding: 0 0.5rem;

  &:hover {
    background: ${({$selected:e,theme:n})=>e?n.palette.primary.dark:n.palette.action.hover};
  }
`,z=(e,n)=>Array.from({length:n-e+1},(a,t)=>e+t),Ne=({count:e,page:n,defaultPage:a=1,onChange:t,siblingCount:r=1,boundaryCount:o=1,sx:l,style:s,...u})=>{const[p,c]=m.useState(a),f=b(),y=h(f,l,s),g=n??p,T=(v,x)=>{c(x),t==null||t(v,x)},I=Math.max(Math.min(g-r,e-r*2-1),o+1),C=Math.min(Math.max(g+r,r*2+o+2),e-o),$=[...z(1,o),...I>o+1?["ellipsis-start"]:[],...z(I,C),...C<e-o?["ellipsis-end"]:[],...z(e-o+1,e)];return i.jsxs(ga,{role:"navigation",style:y,...u,children:[i.jsx(L,{type:"button","aria-label":"Previous page",disabled:g===1,onClick:v=>T(v,g-1),children:i.jsx(Pn,{size:18,"aria-hidden":!0})}),$.map((v,x)=>typeof v=="string"?i.jsx("span",{children:i.jsx(qn,{size:18,"aria-hidden":!0})},String(v)+"-"+x):i.jsx(L,{type:"button",$selected:v===g,"aria-current":v===g?"page":void 0,onClick:S=>T(S,v),children:v},"page-"+v)),i.jsx(L,{type:"button","aria-label":"Next page",disabled:g===e,onClick:v=>T(v,g+1),children:i.jsx(kn,{size:18,"aria-hidden":!0})})]})};Ne.displayName="Pagination";Ne.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{count:{required:!0,tsType:{name:"number"},description:""},page:{required:!1,tsType:{name:"number"},description:""},defaultPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>, page: number) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"},{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["Omit"]};const Le=m.createContext(null),ya=()=>{const e=m.useContext(Le);if(!e)throw new Error("BottomNavigationAction must be used within BottomNavigation");return e},va=d.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${({theme:e})=>e.spacing(.8)};
  background: ${({theme:e})=>e.palette.background.paper};
  box-shadow: ${({theme:e})=>e.shadows[Math.min(3,e.shadows.length-1)]};
`,ze=({value:e,defaultValue:n=0,onChange:a,children:t,sx:r,style:o,...l})=>{const[s,u]=m.useState(n),p=e??s,c=b(),f=h(c,r,o),y=(g,T)=>{u(T),a==null||a(g,T)};return i.jsx(Le.Provider,{value:{value:p,onChange:y},children:i.jsx(va,{style:f,...l,children:t})})};ze.displayName="BottomNavigation";ze.__docgenInfo={description:"",methods:[],displayName:"BottomNavigation",props:{value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLElement>, value: string | number) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"},{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},showLabels:{required:!1,tsType:{name:"boolean"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["Omit"]};const ba=d.button`
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  color: ${({theme:e,$selected:n})=>n?e.palette.primary.main:e.palette.text.secondary};
`,Ae=({label:e,icon:n,value:a,showLabel:t,...r})=>{const o=ya(),l=a??(e==null?void 0:e.toString())??"",s=o.value===l;return i.jsxs(ba,{type:"button",$selected:s,onClick:u=>o.onChange(u,l),...r,children:[n,(t||s)&&e]})};Ae.displayName="BottomNavigationAction";Ae.__docgenInfo={description:"",methods:[],displayName:"BottomNavigationAction",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};const Re=m.createContext(null),ha=()=>{const e=m.useContext(Re);if(!e)throw new Error("Step components must be used within <Stepper>");return e},Sa=d.div`
  display: flex;
  gap: 1rem;
  position: relative;
  ${({$alternative:e})=>e&&w`
      align-items: flex-end;
    `}
`,je=({activeStep:e=0,alternativeLabel:n,children:a,...t})=>i.jsx(Re.Provider,{value:{activeStep:e,alternativeLabel:n},children:i.jsx(Sa,{$alternative:n,...t,children:a})});je.displayName="Stepper";je.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{activeStep:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},alternativeLabel:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};const xa=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  color: ${({theme:e,$active:n,$completed:a})=>n||a?e.palette.primary.main:e.palette.text.secondary};
`,Ta=d.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid
    ${({theme:e,$active:n})=>n?e.palette.primary.main:e.palette.divider};
  display: grid;
  place-items: center;
  background: ${({theme:e,$completed:n})=>n?e.palette.primary.main:"transparent"};
  color: ${({theme:e,$completed:n})=>n?e.palette.primary.contrastText:e.palette.text.secondary};
`,G=({children:e,optional:n,completed:a,active:t,icon:r,...o})=>{const l=a?i.jsx(Nn,{size:18,"aria-hidden":!0}):i.jsx(Ln,{size:18,"aria-hidden":!0});return i.jsxs(xa,{$completed:a,$active:t,...o,children:[i.jsx(Ta,{$completed:a,$active:t,children:r??l}),i.jsx("span",{children:e}),n&&i.jsx("small",{children:n})]})};G.displayName="StepLabel";G.__docgenInfo={description:"",methods:[],displayName:"StepLabel",props:{optional:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},completed:{required:!1,tsType:{name:"boolean"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const wa=d.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 12px;
    left: 50%;
    right: -50%;
    height: 2px;
    background: ${({theme:e})=>e.palette.divider};
  }

  &:last-child::after {
    display: none;
  }
`,Me=({index:e,completed:n,children:a,...t})=>{const r=ha(),o=r?r.activeStep===e:!1,l=n??(r?r.activeStep>e:!1),s=m.isValidElement(a)&&a.type===G?m.cloneElement(a,{completed:l,active:o}):a;return i.jsx(wa,{$completed:l,$active:o,...t,children:s})};Me.displayName="Step";Me.__docgenInfo={description:"",methods:[],displayName:"Step",props:{completed:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}},composes:["HTMLAttributes"]};const $a=d.a`
  color: ${({theme:e,$color:n})=>j(e,n??"primary").main};
  text-decoration: ${({$underline:e})=>e==="always"?"underline":"none"};

  &:hover {
    text-decoration: ${({$underline:e})=>e==="none"?"none":"underline"};
  }
`,_e=({color:e="primary",underline:n="hover",sx:a,style:t,...r})=>{const o=b(),l=h(o,a,t);return i.jsx($a,{$color:e,$underline:n,style:l,...r})};_e.displayName="Link";_e.__docgenInfo={description:"",methods:[],displayName:"Link",props:{color:{required:!1,tsType:{name:"union",raw:`| 'inherit'
| 'default'
| 'primary'
| 'secondary'
| 'success'
| 'info'
| 'warning'
| 'error'`,elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},underline:{required:!1,tsType:{name:"union",raw:"'none' | 'hover' | 'always'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'always'"}]},description:"",defaultValue:{value:"'hover'",computed:!1}},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["AnchorHTMLAttributes"]};const Ia=d.ul`
  position: absolute;
  min-width: 180px;
  margin: 0;
  padding: ${({theme:e})=>`${e.spacing(.6)} 0`};
  list-style: none;
  background: ${({theme:e})=>e.palette.background.paper};
  border: 1px solid ${({theme:e})=>e.palette.divider};
  border-radius: ${({theme:e})=>e.shape.borderRadius}px;
  box-shadow: ${({theme:e})=>e.shadows[Math.min(4,e.shadows.length-1)]};
  z-index: ${({theme:e})=>e.zIndex.modal};
`,Ee=({anchorEl:e,open:n,onClose:a,children:t,sx:r,style:o,...l})=>{const[s,u]=m.useState({top:0,left:0}),p=b(),c=h(p,r,o);return m.useEffect(()=>{if(e&&n){const f=e.getBoundingClientRect();u({top:f.bottom+window.scrollY,left:f.left+window.scrollX})}},[e,n]),m.useEffect(()=>{const f=y=>{y.key==="Escape"&&(a==null||a())};return n&&window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[n,a]),n?i.jsxs(i.Fragment,{children:[i.jsx(Pe,{onClick:a}),i.jsx(Ia,{role:"menu",style:{top:s.top,left:s.left,position:"absolute",...c},...l,children:t})]}):null};Ee.displayName="Menu";Ee.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{anchorEl:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const Ca=d.li`
  padding: ${({theme:e})=>`${e.spacing(1.2)} ${e.spacing(2.4)}`};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.6:1};
  border-radius: ${({theme:e})=>e.shape.borderRadius}px;

  &:hover {
    background: ${({theme:e,$disabled:n})=>n?"inherit":e.palette.action.hover};
  }
`,Be=({disabled:e,children:n,...a})=>i.jsx(Ca,{role:"menuitem",$disabled:e,...a,children:n});Be.displayName="MenuItem";Be.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};const Pa=d.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`,qa=d.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: ${({theme:e})=>e.palette.secondary.main};
  color: ${({theme:e})=>e.palette.secondary.contrastText};
  cursor: pointer;
  box-shadow: ${({theme:e})=>e.shadows[6]};
`,ka=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"auto":"none"};
  transform: ${({$open:e})=>e?"scale(1)":"scale(0.9)"};
  transition: ${({theme:e})=>e.transitions.create(["opacity","transform"])};
`;d.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: ${({theme:e})=>e.palette.background.paper};
  box-shadow: ${({theme:e})=>e.shadows[3]};
  cursor: pointer;
`;const Ge=({icon:e=i.jsx(zn,{"aria-hidden":!0}),open:n,defaultOpen:a=!1,direction:t="up",ariaLabel:r,children:o,...l})=>{const[s,u]=m.useState(a),p=n??s,c=()=>u(f=>!f);return i.jsxs(Pa,{"aria-label":r,$direction:t,...l,children:[i.jsx(ka,{$open:p,children:o}),i.jsx(qa,{type:"button",onClick:c,children:e})]})};Ge.displayName="SpeedDial";Ge.__docgenInfo={description:"",methods:[],displayName:"SpeedDial",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"<AddIcon aria-hidden />",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'up' | 'down' | 'left' | 'right'",elements:[{name:"literal",value:"'up'"},{name:"literal",value:"'down'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'up'",computed:!1}},ariaLabel:{required:!0,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const Na=d.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: ${({theme:e})=>e.palette.background.paper};
  box-shadow: ${({theme:e})=>e.shadows[3]};
  cursor: pointer;
`,Ve=({icon:e,tooltipTitle:n,...a})=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.jsx("span",{style:{background:"#000",color:"#fff",padding:"0.25rem 0.5rem",borderRadius:4},children:n}),i.jsx(Na,{...a,children:e})]});Ve.displayName="SpeedDialAction";Ve.__docgenInfo={description:"",methods:[],displayName:"SpeedDialAction",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},tooltipTitle:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const La=d.div`
  background: ${({theme:e})=>e.palette.background.paper};
  color: ${({theme:e})=>e.palette.text.primary};
  border-radius: ${({theme:e,$square:n})=>n?0:e.shape.borderRadius}px;
  padding: ${({theme:e})=>e.spacing(3)};
  border: ${({$variant:e,theme:n})=>e==="outlined"?`1px solid ${n.palette.divider}`:`1px solid ${n.palette.mode==="dark"?"rgba(255,255,255,0.06)":"rgba(15,23,42,0.06)"}`};
  box-shadow: ${({$variant:e,theme:n,$elevation:a})=>e==="elevation"?n.shadows[Math.min(a,n.shadows.length-1)]:"none"};
  transition: ${({theme:e})=>e.transitions.create(["box-shadow"])};
`,V=({elevation:e=1,variant:n="elevation",square:a,sx:t,style:r,...o})=>{const l=b(),s=h(l,t,r);return i.jsx(La,{$elevation:e,$variant:n,$square:a,style:s,...o})};V.displayName="Paper";V.__docgenInfo={description:"",methods:[],displayName:"Paper",props:{elevation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'elevation' | 'outlined'",elements:[{name:"literal",value:"'elevation'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'elevation'",computed:!1}},square:{required:!1,tsType:{name:"boolean"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""},as:{required:!1,tsType:{name:"ElementType"},description:""}},composes:["HTMLAttributes"]};const He=({raised:e,elevation:n=e?8:1,children:a,...t})=>i.jsx(V,{as:"article",elevation:n,...t,children:a});He.displayName="Card";He.__docgenInfo={description:"",methods:[],displayName:"Card",props:{elevation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"raised ? 8 : 1",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'elevation' | 'outlined'",elements:[{name:"literal",value:"'elevation'"},{name:"literal",value:"'outlined'"}]},description:""},square:{required:!1,tsType:{name:"boolean"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""},as:{required:!1,tsType:{name:"ElementType"},description:""},raised:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};const za=d.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};
`,Aa=za;Aa.displayName="CardContent";const Ra=d.div`
  display: flex;
  gap: ${({theme:e,$disableSpacing:n})=>n?0:e.spacing(1.4)};
  align-items: center;
  justify-content: flex-end;
  margin-top: ${({theme:e})=>e.spacing(2.4)};
`,De=({disableSpacing:e,children:n,...a})=>i.jsx(Ra,{$disableSpacing:e,...a,children:n});De.displayName="CardActions";De.__docgenInfo={description:"",methods:[],displayName:"CardActions",props:{disableSpacing:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};const ja=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing(2.2)};
  margin-bottom: ${({theme:e})=>e.spacing(3)};
  padding: 0 ${({theme:e})=>e.spacing(1)};
`,Oe=({avatar:e,title:n,subheader:a,action:t,...r})=>i.jsxs(ja,{...r,children:[e,i.jsxs("div",{style:{flex:1},children:[i.jsx("strong",{children:n}),a&&i.jsx("div",{style:{color:"rgba(0,0,0,0.6)",fontSize:"0.875rem"},children:a})]}),t]});Oe.displayName="CardHeader";Oe.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{avatar:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},subheader:{required:!1,tsType:{name:"ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const Ma=d.div`
  width: 100%;
  min-height: 200px;
  border-radius: ${({theme:e})=>e.shape.borderRadius}px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  ${({$image:e})=>e&&w`
      background-image: url(${e});
    `}
`,We=({image:e,component:n="div",children:a,...t})=>{if(n==="img"||n==="video"){const r=n;return i.jsx(r,{src:e,style:{width:"100%",borderRadius:8,display:"block"},...t,...n==="video"?{controls:!0}:{}})}return i.jsx(Ma,{$image:e,...t,children:a})};We.displayName="CardMedia";We.__docgenInfo={description:"",methods:[],displayName:"CardMedia",props:{image:{required:!1,tsType:{name:"string"},description:""},component:{required:!1,tsType:{name:"union",raw:"'div' | 'img' | 'video'",elements:[{name:"literal",value:"'div'"},{name:"literal",value:"'img'"},{name:"literal",value:"'video'"}]},description:"",defaultValue:{value:"'div'",computed:!1}}},composes:["HTMLAttributes"]};const Fe=m.createContext(null),_a=()=>{const e=m.useContext(Fe);if(!e)throw new Error("Accordion subcomponents must be used within <Accordion>");return e},Ea=d.div`
  border: 1px solid ${({theme:e})=>e.palette.divider};
  border-radius: ${({theme:e})=>e.shape.borderRadius}px;
  background: ${({theme:e})=>e.palette.background.paper};
  overflow: hidden;
  opacity: ${({$disabled:e})=>e?.6:1};
`,Ue=({expanded:e,defaultExpanded:n=!1,onChange:a,disabled:t,children:r,sx:o,style:l,...s})=>{const[u,p]=m.useState(n),c=e??u,f=b(),y=h(f,o,l),g=T=>{if(t)return;const I=!c;p(I),a==null||a(T,I)};return i.jsx(Fe.Provider,{value:{expanded:c,toggle:g},children:i.jsx(Ea,{$disabled:t,$expanded:c,style:y,...s,children:r})})};Ue.displayName="Accordion";Ue.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{expanded:{required:!1,tsType:{name:"boolean"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent, expanded: boolean) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"},{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["Omit"]};const Ba=d.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: transparent;
  padding: ${({theme:e})=>`${e.spacing(2)} ${e.spacing(2.6)}`};
  cursor: pointer;
  font: inherit;
  border-radius: ${({theme:e})=>e.shape.borderRadius}px;

  &:hover {
    background: ${({theme:e})=>e.palette.action.hover};
  }

  svg {
    transition: ${({theme:e})=>e.transitions.create(["transform"])};
    transform: rotate(${({$expanded:e})=>e?180:0}deg);
  }
`,Xe=({expandIcon:e=i.jsx(An,{}),children:n,...a})=>{const t=_a();return i.jsxs(Ba,{type:"button","aria-expanded":t.expanded,$expanded:t.expanded,onClick:r=>{r.preventDefault(),t.toggle(r)},...a,children:[i.jsx("span",{children:n}),i.jsx("span",{children:e})]})};Xe.displayName="AccordionSummary";Xe.__docgenInfo={description:"",methods:[],displayName:"AccordionSummary",props:{expandIcon:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"<ExpandMoreIcon />",computed:!1}}},composes:["HTMLAttributes"]};const Ga=d.div`
  padding: ${({theme:e})=>`${e.spacing(.5)} ${e.spacing(2.6)} ${e.spacing(2.2)}`};
  color: ${({theme:e})=>e.palette.text.secondary};
`,Va=Ga;Va.displayName="AccordionDetails";const A=(e,n)=>e.palette[n],Ha=d.div`
  border-radius: ${({theme:e})=>e.shape.borderRadius}px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid transparent;
  background: ${({theme:e,$severity:n,$variant:a})=>{const t=A(e,n);return a==="filled"?t.main:a==="outlined"?"transparent":`${t.main}22`}};
  color: ${({theme:e,$severity:n,$variant:a})=>{const t=A(e,n);return a==="filled"?t.contrastText:t.main}};
  border-color: ${({theme:e,$severity:n,$variant:a})=>a==="outlined"?A(e,n).main:"transparent"};
`,Ye=({severity:e="success",variant:n="standard",action:a,icon:t,onClose:r,children:o,sx:l,style:s,...u})=>{const p=b(),c=h(p,l,s);return i.jsxs(Ha,{$severity:e,$variant:n,role:"alert",style:c,...u,children:[t,i.jsx("div",{style:{flex:1},children:o}),a,r&&i.jsx("button",{onClick:r,style:{border:"none",background:"transparent",color:"inherit"}})]})};Ye.displayName="Alert";Ye.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'success'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'outlined' | 'filled'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},action:{required:!1,tsType:{name:"ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const Da=d.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({theme:e})=>e.zIndex.modal-1};
`,H=({open:e,children:n,sx:a,style:t,...r})=>{const o=b(),l=h(o,a,t);return e?i.jsx(Da,{style:l,...r,children:n}):null};H.displayName="Backdrop";H.__docgenInfo={description:"",methods:[],displayName:"Backdrop",props:{open:{required:!0,tsType:{name:"boolean"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const Oa=d.div`
  background: ${({theme:e})=>e.palette.background.paper};
  color: ${({theme:e})=>e.palette.text.primary};
  border-radius: ${({theme:e})=>e.shape.borderRadius}px;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  max-width: ${({theme:e,$maxWidth:n})=>`${e.breakpoints.values[n]}px`};
  box-shadow: ${({theme:e})=>e.shadows[Math.min(6,e.shadows.length-1)]};
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(18px);
`,Ke=({open:e,onClose:n,fullWidth:a,maxWidth:t="sm",children:r,...o})=>e?i.jsx(H,{open:e,onClick:n,children:i.jsx(Oa,{$fullWidth:a,$maxWidth:t,onClick:l=>l.stopPropagation(),...o,children:r})}):null;Ke.displayName="Dialog";Ke.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'sm'",computed:!1}}},composes:["HTMLAttributes"]};const Wa=d.h2`
  margin: 0;
  padding: ${({theme:e})=>`${e.spacing(2.2)} ${e.spacing(3)} ${e.spacing(1)}`};
  font-weight: ${({theme:e})=>e.typography.h6.fontWeight};
`,Fa=Wa;Fa.displayName="DialogTitle";const Ua=d.div`
  padding: ${({theme:e})=>`${e.spacing(2)} ${e.spacing(3)}`};
  flex: 1;
`,Xa=Ua;Xa.displayName="DialogContent";const Ya=d.div`
  padding: ${({theme:e})=>`${e.spacing(1.2)} ${e.spacing(3)} ${e.spacing(2.4)}`};
  display: flex;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing(1.2)};
`,Ka=Ya;Ka.displayName="DialogActions";const Ja=M`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(100%); }
`,Qa=d.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${({theme:e})=>e.palette.grey[200]};
  overflow: hidden;
`,Za=d.span`
  display: block;
  height: 100%;
  background: ${({theme:e})=>e.palette.primary.main};
  transform-origin: left;
  ${({$variant:e,$value:n})=>e==="determinate"?w`
          width: ${n??0}%;
        `:w`
          width: 50%;
          animation: ${Ja} 1.2s infinite;
        `}
`,Je=({variant:e="indeterminate",value:n,sx:a,style:t,...r})=>{const o=b(),l=h(o,a,t);return i.jsx(Qa,{style:l,...r,children:i.jsx(Za,{$variant:e,$value:n})})};Je.displayName="LinearProgress";Je.__docgenInfo={description:"",methods:[],displayName:"LinearProgress",props:{variant:{required:!1,tsType:{name:"union",raw:"'determinate' | 'indeterminate'",elements:[{name:"literal",value:"'determinate'"},{name:"literal",value:"'indeterminate'"}]},description:"",defaultValue:{value:"'indeterminate'",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const et=M`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,nt=d.svg`
  ${({$variant:e})=>e==="indeterminate"?w`
          animation: ${et} 1.4s linear infinite;
        `:w`
          animation: none;
        `}
`,Qe=({size:e=48,thickness:n=4,value:a=0,variant:t="indeterminate",sx:r,style:o,...l})=>{const s=b(),u=h(s,r,o),p=(e-n)/2,c=2*Math.PI*p,f=c-a/100*c;return i.jsx("div",{style:{width:e,height:e,...u},...l,children:i.jsxs(nt,{$variant:t,viewBox:`0 0 ${e} ${e}`,children:[i.jsx("circle",{cx:e/2,cy:e/2,r:p,fill:"none",stroke:s.palette.grey[200],strokeWidth:n}),i.jsx("circle",{cx:e/2,cy:e/2,r:p,fill:"none",stroke:s.palette.primary.main,strokeWidth:n,strokeDasharray:c,strokeDashoffset:t==="determinate"?f:c*.75,strokeLinecap:"round"})]})})};Qe.displayName="CircularProgress";Qe.__docgenInfo={description:"",methods:[],displayName:"CircularProgress",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"48",computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'indeterminate' | 'determinate'",elements:[{name:"literal",value:"'indeterminate'"},{name:"literal",value:"'determinate'"}]},description:"",defaultValue:{value:"'indeterminate'",computed:!1}},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const at=M`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`,tt=d.span`
  display: block;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.08) 25%,
    rgba(0, 0, 0, 0.15) 37%,
    rgba(0, 0, 0, 0.08) 63%
  );
  background-size: 200px 100%;
  animation: ${at} 1.4s ease infinite;
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e??"100%"};
  height: ${({$height:e,$variant:n})=>n==="text"?"1em":typeof e=="number"?`${e}px`:e??"100px"};
  border-radius: ${({$variant:e})=>e==="circular"?"50%":"4px"};
`,Ze=({variant:e="text",width:n,height:a,sx:t,style:r,...o})=>{const l=b(),s=h(l,t,r);return i.jsx(tt,{$variant:e,$width:n,$height:a,style:s,...o})};Ze.displayName="Skeleton";Ze.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'rectangular' | 'circular'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'circular'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const it=d.div`
  position: fixed;
  ${({$anchor:e,theme:n})=>`${e.vertical}: ${n.spacing(3)}; ${e.horizontal}: ${n.spacing(3)};`}
  min-width: 288px;
  max-width: 560px;
  background: ${({theme:e})=>e.palette.secondary.main};
  color: ${({theme:e})=>e.palette.secondary.contrastText};
  border-radius: ${({theme:e})=>e.shape.borderRadius+4}px;
  padding: ${({theme:e})=>`${e.spacing(1.2)} ${e.spacing(2.4)}`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing(1.2)};
  box-shadow: ${({theme:e})=>e.shadows[Math.min(4,e.shadows.length-1)]};
  z-index: ${({theme:e})=>e.zIndex.snackbar};
`,en=({open:e,message:n,autoHideDuration:a=4e3,onClose:t,action:r,anchorOrigin:o={vertical:"bottom",horizontal:"center"},...l})=>(m.useEffect(()=>{if(!e||!a)return;const s=setTimeout(()=>t==null?void 0:t(),a);return()=>clearTimeout(s)},[e,a,t]),e?i.jsxs(it,{role:"status",$anchor:o,...l,children:[i.jsx("span",{style:{flex:1},children:n}),r]}):null);en.displayName="Snackbar";en.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{open:{required:!0,tsType:{name:"boolean"},description:""},message:{required:!0,tsType:{name:"ReactNode"},description:""},autoHideDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},action:{required:!1,tsType:{name:"ReactNode"},description:""},anchorOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  vertical: 'top' | 'bottom'
  horizontal: 'left' | 'center' | 'right'
}`,signature:{properties:[{key:"vertical",value:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}],required:!0}},{key:"horizontal",value:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}],required:!0}}]}},description:"",defaultValue:{value:"{ vertical: 'bottom', horizontal: 'center' }",computed:!1}}},composes:["HTMLAttributes"]};const rt=d.span`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 0.35rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  z-index: ${({theme:e})=>e.zIndex.tooltip};
  ${({$placement:e})=>{switch(e){case"bottom":return w`
          top: calc(100% + 0.25rem);
          left: 50%;
          transform: translateX(-50%);
        `;case"left":return w`
          right: calc(100% + 0.25rem);
          top: 50%;
          transform: translateY(-50%);
        `;case"right":return w`
          left: calc(100% + 0.25rem);
          top: 50%;
          transform: translateY(-50%);
        `;case"top":default:return w`
          bottom: calc(100% + 0.25rem);
          left: 50%;
          transform: translateX(-50%);
        `}}}
`,nn=({title:e,placement:n="top",children:a})=>{const[t,r]=m.useState(!1),o=m.cloneElement(a,{onMouseEnter:l=>{var s,u;(u=(s=a.props).onMouseEnter)==null||u.call(s,l),r(!0)},onMouseLeave:l=>{var s,u;(u=(s=a.props).onMouseLeave)==null||u.call(s,l),r(!1)}});return i.jsxs("span",{style:{position:"relative",display:"inline-flex"},children:[o,t&&i.jsx(rt,{$placement:n,role:"tooltip",children:e})]})};nn.displayName="Tooltip";nn.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{title:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};const ot=d.div`
  width: 40px;
  height: 40px;
  border-radius: ${({$variant:e,theme:n})=>e==="circular"?"50%":e==="rounded"?n.shape.borderRadius:"0"};
  background: ${({theme:e})=>e.palette.grey[300]};
  color: ${({theme:e})=>e.palette.text.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,an=({src:e,alt:n,variant:a="circular",children:t,sx:r,style:o,...l})=>{const s=b(),u=h(s,r,o);return i.jsx(ot,{$variant:a,style:u,...l,children:e?i.jsx("img",{src:e,alt:n}):t})};an.displayName="Avatar";an.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'circular' | 'rounded' | 'square'",elements:[{name:"literal",value:"'circular'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'square'"}]},description:"",defaultValue:{value:"'circular'",computed:!1}},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const lt=d.span`
  position: relative;
  display: inline-flex;
`,st=d.span`
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  background: ${({theme:e,$color:n})=>{switch(n){case"primary":return e.palette.primary.main;case"secondary":return e.palette.secondary.main;case"error":return e.palette.error.main;default:return e.palette.grey[500]}}};
  color: #fff;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
`,tn=({badgeContent:e,max:n=99,color:a="default",children:t})=>{const r=typeof e=="number"&&e>n?`${n}+`:e;return i.jsxs(lt,{children:[t,i.jsx(st,{$color:a,children:r})]})};tn.displayName="Badge";tn.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{badgeContent:{required:!0,tsType:{name:"ReactNode"},description:""},color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"99",computed:!1}},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};const R=(e,n)=>{if(n==="default")return{main:e.palette.grey[300],contrastText:e.palette.text.primary,border:e.palette.grey[400]};const a=e.palette[n];return{main:a.main,contrastText:a.contrastText,border:a.main}},dt=d.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing(.9)};
  padding: ${({theme:e})=>`${e.spacing(.8)} ${e.spacing(1.8)}`};
  border-radius: 999px;
  font-size: 0.875rem;
  border: 1px solid transparent;
  background: ${({theme:e,$color:n,$variant:a})=>{const t=R(e,n);return a==="filled"?t.main:"transparent"}};
  color: ${({theme:e,$color:n,$variant:a})=>{const t=R(e,n);return a==="filled"?t.contrastText:t.main}};
  border-color: ${({theme:e,$color:n,$variant:a})=>a==="outlined"?R(e,n).border:"transparent"};
`,rn=({label:e,onDelete:n,color:a="default",variant:t="filled",sx:r,style:o,...l})=>{const s=b(),u=h(s,r,o);return i.jsxs(dt,{$color:a,$variant:t,style:u,...l,children:[e,n&&i.jsx("button",{type:"button",onClick:n,style:{border:"none",background:"transparent",color:"inherit",cursor:"pointer"},"aria-label":"Delete",children:i.jsx(Rn,{size:16,"aria-hidden":!0})})]})};rn.displayName="Chip";rn.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"ReactNode"},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'primary'
| 'secondary'
| 'success'
| 'info'
| 'warning'
| 'error'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const ut=d.hr`
  border: none;
  border-top: ${({theme:e,$orientation:n})=>n==="horizontal"?`1px solid ${e.palette.divider}`:"none"};
  border-left: ${({theme:e,$orientation:n})=>n==="vertical"?`1px solid ${e.palette.divider}`:"none"};
  margin: ${({$orientation:e})=>e==="horizontal"?"1rem 0":"0 1rem"};
  align-self: ${({$flex:e})=>e?"stretch":"auto"};
`,on=({orientation:e="horizontal",flexItem:n,sx:a,style:t,...r})=>{const o=b(),l=h(o,a,t);return i.jsx(ut,{$orientation:e,$flex:n,style:l,...r})};on.displayName="Divider";on.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},flexItem:{required:!1,tsType:{name:"boolean"},description:""},textAlign:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const mt=d.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,ln=e=>i.jsx(mt,{...e});ln.displayName="List";ln.__docgenInfo={description:"",methods:[],displayName:"List"};const pt=d.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-bottom: ${({$divider:e,theme:n})=>e?`1px solid ${n.palette.divider}`:"none"};
  cursor: ${({$button:e})=>e?"pointer":"default"};

  &:hover {
    background: ${({$button:e,theme:n})=>e?n.palette.action.hover:"transparent"};
  }
`,sn=({divider:e,button:n,...a})=>i.jsx(pt,{$divider:e,$button:n,...a});sn.displayName="ListItem";sn.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{divider:{required:!1,tsType:{name:"boolean"},description:""},button:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};const ct=d.span`
  display: inline-flex;
  min-width: 32px;
  color: ${({theme:e})=>e.palette.text.secondary};
`,dn=e=>i.jsx(ct,{...e});dn.displayName="ListItemIcon";dn.__docgenInfo={description:"",methods:[],displayName:"ListItemIcon"};const ft=d.span`
  flex: 1;
  color: ${({theme:e})=>e.palette.text.primary};
`,un=e=>i.jsx(ft,{...e});un.displayName="ListItemText";un.__docgenInfo={description:"",methods:[],displayName:"ListItemText"};const gt=d.table`
  width: 100%;
  border-collapse: collapse;
`,mn=e=>i.jsx(gt,{...e});mn.displayName="Table";mn.__docgenInfo={description:"",methods:[],displayName:"Table"};const yt=d.tbody``,pn=e=>i.jsx(yt,{...e});pn.displayName="TableBody";pn.__docgenInfo={description:"",methods:[],displayName:"TableBody"};const vt=d.td`
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: ${({$variant:e})=>e==="head"?600:400};
`,cn=({variant:e,...n})=>i.jsx(vt,{$variant:e,...n});cn.displayName="TableCell";cn.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{variant:{required:!1,tsType:{name:"union",raw:"'head' | 'body' | 'footer'",elements:[{name:"literal",value:"'head'"},{name:"literal",value:"'body'"},{name:"literal",value:"'footer'"}]},description:""}},composes:["HTMLAttributes"]};const bt=d.thead`
  background: ${({theme:e})=>e.palette.grey[100]};
`,fn=e=>i.jsx(bt,{...e});fn.displayName="TableHead";fn.__docgenInfo={description:"",methods:[],displayName:"TableHead"};const ht=d.tr`
  border-bottom: 1px solid ${({theme:e})=>e.palette.divider};
`,gn=e=>i.jsx(ht,{...e});gn.displayName="TableRow";gn.__docgenInfo={description:"",methods:[],displayName:"TableRow"};const St=d.span`
  display: ${({$paragraph:e})=>e?"block":"inline"};
  margin: 0;
  margin-bottom: ${({$gutter:e})=>e?"0.35em":0};
  text-align: ${({$align:e})=>e??"inherit"};
  text-transform: ${({$variant:e})=>e==="overline"?"uppercase":"inherit"};
  letter-spacing: ${({theme:e,$variant:n})=>e.typography[n].letterSpacing??"normal"};
  font-size: ${({theme:e,$variant:n})=>e.typography[n].fontSize};
  font-weight: ${({theme:e,$variant:n})=>e.typography[n].fontWeight??e.typography.fontWeightRegular};
  line-height: ${({theme:e,$variant:n})=>e.typography[n].lineHeight??1.5};
  color: ${({theme:e,$color:n})=>{switch(n){case"primary":return e.palette.primary.main;case"secondary":return e.palette.secondary.main;case"error":return e.palette.error.main;case"textSecondary":return e.palette.text.secondary;case"textPrimary":return e.palette.text.primary;default:return"inherit"}}};
`,xt={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",button:"span",caption:"span",overline:"span"},yn=({variant:e="body1",color:n="initial",align:a="inherit",gutterBottom:t,paragraph:r,sx:o,style:l,component:s,children:u,...p})=>{const c=b(),f=h(c,o,l),y=m.useMemo(()=>s??xt[e]??"span",[s,e]);return i.jsx(St,{as:y,$variant:e,$color:n,$align:a,$gutter:t,$paragraph:r,style:f,...p,children:u})};yn.displayName="Typography";yn.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'subtitle1'
| 'subtitle2'
| 'body1'
| 'body2'
| 'button'
| 'caption'
| 'overline'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'subtitle1'"},{name:"literal",value:"'subtitle2'"},{name:"literal",value:"'body1'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'button'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'overline'"}]},description:"",defaultValue:{value:"'body1'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'initial'
| 'inherit'
| 'primary'
| 'secondary'
| 'textPrimary'
| 'textSecondary'
| 'error'`,elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'inherit'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'textPrimary'"},{name:"literal",value:"'textSecondary'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'initial'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'inherit' | 'left' | 'center' | 'right' | 'justify'",elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'justify'"}]},description:"",defaultValue:{value:"'inherit'",computed:!1}},gutterBottom:{required:!1,tsType:{name:"boolean"},description:""},paragraph:{required:!1,tsType:{name:"boolean"},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""},component:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:""}},composes:["HTMLAttributes"]};const vn=({children:e,onClickAway:n})=>{const a=m.useRef(null);return m.useEffect(()=>{const t=r=>{!a.current||a.current.contains(r.target)||n(r)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[n]),i.jsx("div",{ref:a,children:e})};vn.displayName="ClickAwayListener";vn.__docgenInfo={description:"",methods:[],displayName:"ClickAwayListener",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClickAway:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent | TouchEvent) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent | TouchEvent",elements:[{name:"MouseEvent"},{name:"TouchEvent"}]},name:"event"}],return:{name:"void"}}},description:""}}};const Tt=d.div`
  overflow: hidden;
  transition: height ${({$timeout:e})=>e}ms ease;
  height: ${({$height:e,$in:n})=>n?`${e}px`:"0"};
`,bn=({in:e=!1,timeout:n=300,children:a,sx:t,style:r,...o})=>{const l=m.useRef(null),[s,u]=m.useState(0),p=b(),c=h(p,t,r);return m.useEffect(()=>{l.current&&u(l.current.scrollHeight)},[a]),i.jsx(Tt,{$in:e,$height:s,$timeout:n,style:c,...o,children:i.jsx("div",{ref:l,children:a})})};bn.displayName="Collapse";bn.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{in:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},timeout:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const D=({children:e,container:n})=>typeof document>"u"?null:jn.createPortal(e,n??document.body);D.displayName="Portal";const hn=d.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({theme:e})=>e.zIndex.modal};
`,wt=d.div`
  background: ${({theme:e})=>e.palette.background.paper};
  border-radius: ${({theme:e})=>e.shape.borderRadius}px;
  box-shadow: ${({theme:e})=>e.shadows[Math.min(6,e.shadows.length-1)]};
  padding: ${({theme:e})=>e.spacing(3.2)};
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
`,Sn=({open:e,onClose:n,children:a,sx:t,style:r,...o})=>{const l=b(),s=h(l,t,r);return e?i.jsx(D,{children:i.jsx(hn,{onClick:n,children:i.jsx(wt,{onClick:u=>u.stopPropagation(),style:s,...o,children:a})})}):null};Sn.displayName="Modal";Sn.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const $t=d.div`
  position: absolute;
  background: ${({theme:e})=>e.palette.background.paper};
  border-radius: ${({theme:e})=>e.shape.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.palette.divider};
  box-shadow: ${({theme:e})=>e.shadows[Math.min(4,e.shadows.length-1)]};
  padding: ${({theme:e})=>e.spacing(2)};
  z-index: ${({theme:e})=>e.zIndex.modal};
  min-width: 200px;
`,xn=({open:e,anchorEl:n,onClose:a,children:t,sx:r,style:o,...l})=>{const[s,u]=m.useState({top:0,left:0}),p=b(),c=h(p,r,o);return m.useEffect(()=>{if(n&&e){const f=n.getBoundingClientRect();u({top:f.bottom+window.scrollY,left:f.left+window.scrollX})}},[n,e]),e?i.jsx(D,{children:i.jsx(hn,{onClick:a,children:i.jsx($t,{onClick:f=>f.stopPropagation(),style:{top:s.top,left:s.left,position:"absolute",...c},...l,children:t})})}):null};xn.displayName="Popover";xn.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{open:{required:!0,tsType:{name:"boolean"},description:""},anchorEl:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},sx:{required:!1,tsType:{name:"union",raw:"SxInput | SxInput[]",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]},{name:"Array",elements:[{name:"union",raw:`| CSSProperties
| ((theme: GoblinTheme) => CSSProperties)
| false
| null
| undefined`,elements:[{name:"CSSProperties"},{name:"unknown"},{name:"literal",value:"false"},{name:"null"},{name:"undefined"}]}],raw:"SxInput[]"}]},description:""}},composes:["HTMLAttributes"]};const kt={Avatar:"Avatar visualizza l’identità di un utente replicando il comportamento di MUI. Supporta varianti circolari, arrotondate o quadrate, fallback testuale e immagini con gestione degli errori, mantenendo proporzioni e spaziature del Goblin Theme.",Badge:"Badge sovrappone contatori o stati secondari all’elemento figlio. Espone colori tematici, varianti “standard” e “dot” e offset automatico, integrandosi con il sistema di z-index e contrasti del Goblin Theme.",Chip:"Chip rappresenta tag e selettori compatti. Gestisce varianti filled/outlined, colori di stato, avatar/icon opzionali e azione di cancellazione con feedback accessibile, con spaziature e raggi coerenti al design 2025.",Divider:"Divider separa contenuti in modo neutro o verticale, supportando allineamenti testuali e proprietà decorative. Utilizza colori di bordo adattivi alle palette light/dark e rispetta i ritmi spaziali tipici dei layout Material UI.",List:"List fornisce il contenitore semantico per elenchi nav/dati con padding responsive, densità configurabile e background governato dal Goblin Theme. Ottimizzata per incapsulare ListItem e componenti accessori.",ListItem:"ListItem gestisce righe di elenco interattive o statiche con supporto per stati attivi, disabilitati e selezione. Integra controlli secondari, icone e tipografia coerente con le specifiche Material UI mantenendo l’impronta Goblin.",ListItemIcon:"ListItemIcon applica dimensioni e allineamenti ottimali alle icone nei ListItem, assicurando ritmo verticale regolare e contrasto cromatico adeguato in ogni palette.",ListItemText:"ListItemText presenta titoli e descrizioni con gerarchia tipografica conforme al Goblin Theme. Supporta primary/secondary text e preserva wrapping ed ellissi in modo accessibile.",Table:"Table replica la data table MUI ma con stile proprietario Goblin 2025: background modulare, bordi soft, zebra striping opzionale e integrazione con TableHead, TableBody e TableRow per pieno controllo semantico.",TableBody:"TableBody incapsula le righe dati e gestisce hover, selezione e densità. È pensata per lavorare con TableRow e garantire contrasti corretti nelle modalità light/dark.",TableCell:"TableCell racchiude le celle con padding scalabile, ruolo semantico (th/td) e opzioni per allineamento e sizing. Gestisce automaticamente colori di bordo e tipografia per header e body.",TableHead:"TableHead organizza l’intestazione con supporto per sticky behavior, sort indicator e tipografia forte. Utilizza pattern a contrasto elevato coerente con il Goblin Theme.",TableRow:"TableRow definisce righe cliccabili o statiche con gestione di stati hover/selected e densità compatta. Le transizioni sono morbide e rispettano il spacing system.",Typography:"Typography espone l’intero set di varianti testuali (display, heading, body, caption, overline) con mapping semantico personalizzabile. Integra il nuovo sistema tipografico Goblin con controlli di colore e allineamento.",Alert:"Alert comunica messaggi contestuali con severità multipla, icone opzionali e azioni contestuali. Colori, spessori e ombre seguono le direttive del design language Goblin ispirate a Material UI per feedback visivi equilibrati.",Backdrop:"Backdrop crea layer modali semi-trasparenti con gestione z-index e click-away configurabile. Il colore si adatta alla modalità corrente per enfatizzare la gerarchia visiva.",CircularProgress:"CircularProgress mostra avanzamento indeterminato o determinato con transizioni fluide. Il componente sincronizza colori, stroke e dimensioni con il sistema Goblin per risultati coerenti.",Dialog:"Dialog offre finestre modali complesse con gestione focus-trap, dimensioni responsive e cornici morbide. Integra sottocomponenti per header, contenuto e azioni secondo pattern enterprise.",DialogActions:"DialogActions allinea pulsanti e controlli di chiusura con spaziature aggiornate, gestendo layout a destra o distribuito e supportando densità compatta.",DialogContent:"DialogContent fornisce container scrollabile con padding generoso e gestione responsive per inserimenti di form, liste o testo ricco nel corpo del Dialog.",DialogTitle:"DialogTitle applica tipografia headline, controllo di margini e compatibilità con icone di chiusura per l’intestazione del Dialog, mantenendo leggibilità elevata.",LinearProgress:"LinearProgress visualizza avanzamenti lineari determinati o indeterminati con palette tematica, bordi arrotondati e animazioni fluide conformi alle specifiche 2025.",Skeleton:"Skeleton crea placeholder caricamento per testo, blocchi rettangolari o elementi circolari. Utilizza gradienti morbidi e animazioni coperte per ridurre il flickering in entrambe le modalità cromatiche.",Snackbar:"Snackbar mostra notifiche effimere in basso/alto con supporto per azioni inline e icone. Background, radius e ombre sono stati aggiornati per aderire alla nuova estetica Goblin.",Tooltip:"Tooltip fornisce contenuti descrittivi su hover/focus con offset dinamico, arrow opzionale e contrasto ottimizzato per leggere in contesti scuri o chiari.",Autocomplete:"Autocomplete combina TextField e menu dinamico con filtraggio client, highlighting e supporto per opzioni personalizzate. Le dimensioni e le ombre del pannello richiamano la libreria Material UI.",Button:"Button è la call-to-action principale: gestisce varianti text/outlined/contained, dimensioni responsive, colori tematici, stato loading e disabilitazione con focus ring accessibile.",ButtonGroup:"ButtonGroup coordina più pulsanti condividendo bordi, separatori e stati. Supporta orientamento orizzontale/verticale e applica radius continuo coerente al design system.",Checkbox:"Checkbox implementa la selezione binaria con stati checked/indeterminate, colori contestuali e dimensioni compatte. Include focus ring e animazioni morbide per stato dark/light.",Fab:"Fab (Floating Action Button) mette in risalto azioni principali con forma circolare, ombre elevate e icone centrali. Adatta dimensioni e colori per overlay su contenuti.",IconButton:"IconButton fornisce pulsanti solo icona con dimensioni dinamiche, cerchiature morbide e feedback hover/active. Ideale per toolbar, navigatori e gestioni compatte.",Radio:"Radio forma gruppi di scelta esclusiva con indicatori animati e dimensioni basate su Goblin Theme. Supporta stati di errore, disabilitazione e layout verticali/orizzontali.",Rating:"Rating gestisce votazioni con icone custom, precisione frazionata, lettura assistiva e palette tematiche. Pensato per esperienze di feedback rapido.",Select:"Select replica i menu a tendina MUI con pannelli modellati sul linguaggio Material UI: paddings generosi, arrow morbida, supporto per placeholder e stati di errore/disabled coerenti.",Slider:"Slider permette la selezione di valori continui o discreti con thumb arrotondati, track contrastata e tooltips modulari. Supporta intervalli, step e marks personalizzati.",Switch:"Switch offre toggling binario con animazioni scorrevoli, supporto per icone e colori tematici. Mantiene contrasto elevato in ambienti scuri e chiari.",TextField:"TextField è l’input di base con varianti filled/outlined/standard, gestione degli helper text, stati di errore e integrazione completa con form e icone start/end.",ToggleButton:"ToggleButton gestisce pulsanti selettivi singoli con stati pressed/disabled e sincronizzazione colore con palette Goblin. Perfetto per moduli compatti.",ToggleButtonGroup:"ToggleButtonGroup organizza ToggleButton con comportamenti esclusivi o multipli, gestendo radius condivisi, spacing e aria selettiva in modo accessibile.",TransferList:"TransferList permette lo spostamento di elementi tra due liste con controlli di filtro, selezione multipla e azioni di bulk transfer, seguendo pattern enterprise MUI.",Box:"Box è il wrapper layout flessibile con supporto per proprietà `sx`, spacing, border e background rapidi. È la base per costruire strutture coerenti nel Goblin Theme.",Container:"Container fornisce larghezze massime responsive, padding orizzontali e modalità fixed/fluid, centrale per layout a griglia nello stile Material UI.",Grid:"Grid implementa il sistema 12 colonne con breakpoints dinamici, spacing responsive e wrap controllato. Gestisce container/item e colonne auto densità.",ImageList:"ImageList supporta layout masonry o standard per gallerie, con gestione gap, numero colonne e lazy loading coerente con le linee guida moderne.",ImageListItem:"ImageListItem incapsula immagini e overlay, gestendo aspect-ratio, placeholder e alt text per accessibilità.",ImageListItemBar:"ImageListItemBar mostra titoli/sottotitoli e azioni sopra immagini, con gradienti calibrati per entrambe le modalità cromatiche.",Stack:"Stack semplifica layout verticali/orizzontali con gap personalizzati, wrapping condizionale e allineamenti cross-axis, replicando l’API MUI aggiornata.",AppBar:"AppBar rappresenta le top-nav con elevazione, colori tematici e supporto per position fixed, sticky o static. Integra densità compatta per desktop/mobile.",BottomNavigation:"BottomNavigation offre navigazione primaria mobile con indicatori animati, supporto per icone/testo e background compatibile con contenuti sovrastanti.",BottomNavigationAction:"BottomNavigationAction gestisce la singola voce bottom nav con stati attivi, badge opzionali e colori coerenti con il tema.",Breadcrumbs:"Breadcrumbs visualizza il path gerarchico con separatori personalizzabili e handle overflow tramite collassamento automatico.",Drawer:"Drawer fornisce pannelli scorrevoli permanenti o temporanei con controllo anchor, larghezze e overlay. Le animazioni e le ombre seguono il nuovo standard Goblin.",Link:"Link espone testi navigabili con tipografia coerente, gestione focus visibile e integrazione con react-router o anchor tradizionali.",Menu:"Menu costruisce pannelli contestuali o dropdown con gestione del focus, posizionamento dinamico e densità modulare.",MenuItem:"MenuItem rappresenta la singola azione in un menu; include stati hover/selected, icone opzionali e compatibilità con controlli embedded.",Pagination:"Pagination permette la navigazione tra pagine con bottoni numerici e frecce, controlla breakpoints e mostra ellissi secondo la densità tipica di Material UI.",SpeedDial:"SpeedDial aggrega azioni secondarie in un FAB espandibile con animazioni radiali e gestione focus/tastiera appropriata.",SpeedDialAction:"SpeedDialAction definisce ogni azione del dial, completa di tooltip, icona e sequenza di apparizione sincronizzata.",Step:"Step rappresenta la singola fase in uno Stepper, gestendo stati completed/active/disabled e label opzionali.",StepLabel:"StepLabel combina iconografia e testo per lo step, allineandosi con la tipografia del tema e mostrando stati secondari (es. opzionale).",Stepper:"Stepper crea flussi progressivi orizzontali o verticali, con supporto per alternative label, linearità e contenuti personalizzati in stile Material UI.",Tab:"Tab rappresenta la singola scheda con indicatori morbidi, tipografia compatta e supporto per icone o badge.",TabPanel:"TabPanel gestisce la visualizzazione condizionale del contenuto associato a ciascuna tab, mantenendo semantica e focus management corretti.",Tabs:"Tabs controlla l’interazione tra soglie, indicatori e scroll. Supporta varianti standard, scrollable e fullWidth con integrazione contestuale.",Toolbar:"Toolbar fornisce un contenitore orizzontale centrato per comandi di primo livello, rispettando gli spessori e le densità tipiche delle top-nav Material UI.",Accordion:"Accordion gestisce contenuti espandibili con animazioni smoothing, icone orientabili e confinamento dei bordi secondo le nuove curvature soft.",AccordionDetails:"AccordionDetails ospita il contenuto espanso, applicando padding rilassato e colori di testo secondari per enfatizzare la gerarchia.",AccordionSummary:"AccordionSummary agisce come trigger dell’Accordion con focus ring evidente, hover state e icona rotante coerente con la palette.",Card:"Card offre contenitori informativi con elevazione modulare, corners arrotondati e supporto a layout modulare (header, media, contenuto, azioni).",CardActions:"CardActions allinea pulsanti e link con spacing crescente, mantenendo gli edge morbidi e la gerarchia adatta a call-to-action contestuali.",CardContent:"CardContent incapsula contenuti principali della card, con tipografia ottimizzata e gap verticali aggiornati alle specifiche 2025.",CardHeader:"CardHeader combina avatar, titolo e sottotitolo con spacing calibrati e supporto per azioni nell’area extra, seguendo il pattern Material UI reinterpretato dal tema Goblin.",CardMedia:"CardMedia visualizza media responsive (immagini, video) con gestione aspect ratio e overlay opzionali in linea con le linee guida moderne.",Paper:"Paper è la superficie di base per pannelli e card. Offre varianti elevation/outlined, ombre morbide e bordi soft allineati al Goblin Theme.",ClickAwayListener:"ClickAwayListener intercetta click fuori dal target per chiudere popover, menu o tooltip. Garantisce compatibilità SSR e clean-up corretto.",Collapse:"Collapse fornisce espansioni verticali animate con timing personalizzabile e gestione auto-height, utili per accordion personalizzati.",Modal:"Modal gestisce overlay modali a schermo intero con focus trap, scrolling lock e superfici aggiornate alle nuove linee guida.",Popover:"Popover posiziona pannelli contestuali ancorati a un elemento con calcolo automatico delle coordinate e supporto per modalità portal.",Portal:"Portal sposta i nodi React fuori dal flusso DOM corrente, utile per overlay, tooltip e modali mantenendo l’albero logico pulito."};export{_e as $,an as A,tn as B,rn as C,on as D,ue as E,le as F,B as G,ye as H,ie as I,ve as J,he as K,ln as L,X as M,Y as N,J as O,ee as P,ne as Q,de as R,Ze as S,yn as T,ae as U,Q as V,Se as W,xe as X,ze as Y,Ae as Z,ke as _,sn as a,qe as a0,Ee as a1,Be as a2,Ne as a3,Ge as a4,Ve as a5,Me as a6,je as a7,G as a8,Ie as a9,$e as aa,Ce as ab,Ue as ac,Xe as ad,Va as ae,He as af,Oe as ag,We as ah,Aa as ai,De as aj,V as ak,vn as al,bn as am,Sn as an,xn as ao,D as ap,dn as b,kt as c,un as d,mn as e,fn as f,gn as g,cn as h,pn as i,Ye as j,H as k,k as l,Qe as m,Ke as n,Fa as o,Xa as p,Ka as q,Je as r,en as s,nn as t,be as u,oe as v,se as w,ge as x,ce as y,fe as z};
