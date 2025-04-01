import{j as C}from"./jsx-runtime-DiklIkkE.js";import{r as P,a as Kn,R as Hn}from"./index-DRjF_FHU.js";import"./index-Bx0Ph3cE.js";import{d as D}from"./styled-components.browser.esm-Dz5yS7sT.js";import{CiGlobe as Qn}from"react-icons/ci";import{IoMdClose as Zn}from"react-icons/io";import{HiOutlineMenu as Jn}from"react-icons/hi";/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xt(){return xt=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},xt.apply(this,arguments)}var Ue;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Ue||(Ue={}));const Wr="popstate";function es(s){s===void 0&&(s={});function e(r,i){let{pathname:n,search:o,hash:a}=r.location;return or("",{pathname:n,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:Ri(i)}return rs(e,t,null,s)}function ge(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function ts(){return Math.random().toString(36).substr(2,8)}function Gr(s,e){return{usr:s.state,key:s.key,idx:e}}function or(s,e,t,r){return t===void 0&&(t=null),xt({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?Xt(e):e,{state:t,key:e&&e.key||r||ts()})}function Ri(s){let{pathname:e="/",search:t="",hash:r=""}=s;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xt(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substr(t),s=s.substr(0,t));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function rs(s,e,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:n=!1}=r,o=i.history,a=Ue.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(xt({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Ue.Pop;let m=c(),g=m==null?null:m-u;u=m,l&&l({action:a,location:f.location,delta:g})}function d(m,g){a=Ue.Push;let x=or(f.location,m,g);u=c()+1;let b=Gr(x,u),y=f.createHref(x);try{o.pushState(b,"",y)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;i.location.assign(y)}n&&l&&l({action:a,location:f.location,delta:1})}function p(m,g){a=Ue.Replace;let x=or(f.location,m,g);u=c();let b=Gr(x,u),y=f.createHref(x);o.replaceState(b,"",y),n&&l&&l({action:a,location:f.location,delta:0})}function _(m){let g=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof m=="string"?m:Ri(m);return x=x.replace(/ $/,"%20"),ge(g,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,g)}let f={get action(){return a},get location(){return s(i,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Wr,h),l=m,()=>{i.removeEventListener(Wr,h),l=null}},createHref(m){return e(i,m)},createURL:_,encodeLocation(m){let g=_(m);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:p,go(m){return o.go(m)}};return f}var Kr;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Kr||(Kr={}));function is(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=s.charAt(t);return r&&r!=="/"?null:s.slice(t)||"/"}function ns(s,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:i=""}=typeof s=="string"?Xt(s):s;return{pathname:t?t.startsWith("/")?t:ss(t,e):e,search:cs(r),hash:fs(i)}}function ss(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Ht(s,e,t,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function os(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function as(s,e){let t=os(s);return e?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function ls(s,e,t,r){r===void 0&&(r=!1);let i;typeof s=="string"?i=Xt(s):(i=xt({},s),ge(!i.pathname||!i.pathname.includes("?"),Ht("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),Ht("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),Ht("#","search","hash",i)));let n=s===""||i.pathname==="",o=n?"/":i.pathname,a;if(o==null)a=t;else{let h=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=ns(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(n||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const us=s=>s.join("/").replace(/\/\/+/g,"/"),cs=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,fs=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Ai=["post","put","patch","delete"];new Set(Ai);const hs=["get",...Ai];new Set(hs);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nt(){return Nt=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},Nt.apply(this,arguments)}const Mi=P.createContext(null),Tr=P.createContext(null),kr=P.createContext(null),Sr=P.createContext({outlet:null,matches:[],isDataRoute:!1});function Cr(){return P.useContext(kr)!=null}function Pr(){return Cr()||ge(!1),P.useContext(kr).location}function Ei(s){P.useContext(Tr).static||P.useLayoutEffect(s)}function ds(){let{isDataRoute:s}=P.useContext(Sr);return s?xs():ps()}function ps(){Cr()||ge(!1);let s=P.useContext(Mi),{basename:e,future:t,navigator:r}=P.useContext(Tr),{matches:i}=P.useContext(Sr),{pathname:n}=Pr(),o=JSON.stringify(as(i,t.v7_relativeSplatPath)),a=P.useRef(!1);return Ei(()=>{a.current=!0}),P.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=ls(u,JSON.parse(o),n,c.relative==="path");s==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:us([e,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[e,r,o,n,s])}var Di=function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s}(Di||{}),zi=function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s}(zi||{});function _s(s){let e=P.useContext(Mi);return e||ge(!1),e}function ms(s){let e=P.useContext(Sr);return e||ge(!1),e}function gs(s){let e=ms(),t=e.matches[e.matches.length-1];return t.route.id||ge(!1),t.route.id}function xs(){let{router:s}=_s(Di.UseNavigateStable),e=gs(zi.UseNavigateStable),t=P.useRef(!1);return Ei(()=>{t.current=!0}),P.useCallback(function(i,n){n===void 0&&(n={}),t.current&&(typeof i=="number"?s.navigate(i):s.navigate(i,Nt({fromRouteId:e},n)))},[s,e])}function vs(s,e){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function ys(s){let{basename:e="/",children:t=null,location:r,navigationType:i=Ue.Pop,navigator:n,static:o=!1,future:a}=s;Cr()&&ge(!1);let l=e.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:n,static:o,future:Nt({v7_relativeSplatPath:!1},a)}),[l,a,n,o]);typeof r=="string"&&(r=Xt(r));let{pathname:c="/",search:h="",hash:d="",state:p=null,key:_="default"}=r,f=P.useMemo(()=>{let m=is(c,l);return m==null?null:{location:{pathname:m,search:h,hash:d,state:p,key:_},navigationType:i}},[l,c,h,d,p,_,i]);return f==null?null:P.createElement(Tr.Provider,{value:u},P.createElement(kr.Provider,{children:t,value:f}))}new Promise(()=>{});/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const bs="6";try{window.__reactRouterVersion=bs}catch{}const ws="startTransition",Hr=Kn[ws];function Ts(s){let{basename:e,children:t,future:r,window:i}=s,n=P.useRef();n.current==null&&(n.current=es({window:i,v5Compat:!0}));let o=n.current,[a,l]=P.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=P.useCallback(h=>{u&&Hr?Hr(()=>l(h)):l(h)},[l,u]);return P.useLayoutEffect(()=>o.listen(c),[o,c]),P.useEffect(()=>vs(r),[r]),P.createElement(ys,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o,future:r})}var Qr;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Qr||(Qr={}));var Zr;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Zr||(Zr={}));function we(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ii(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ae={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},rt={duration:.5,overwrite:!1,delay:0},Or,W,I,xe=1e8,H=1/xe,ar=Math.PI*2,ks=ar/4,Ss=0,Li=Math.sqrt,Cs=Math.cos,Ps=Math.sin,Y=function(e){return typeof e=="string"},N=function(e){return typeof e=="function"},Se=function(e){return typeof e=="number"},Rr=function(e){return typeof e>"u"},ye=function(e){return typeof e=="object"},J=function(e){return e!==!1},Ar=function(){return typeof window<"u"},At=function(e){return N(e)||Y(e)},Fi=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Q=Array.isArray,lr=/(?:-?\.?\d|\.)+/gi,Ni=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,He=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Qt=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ji=/[+-]=-?[.\d]+/,Bi=/[^,'"\[\]\s]+/gi,Os=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,L,de,ur,Mr,le={},jt={},Ui,$i=function(e){return(jt=it(e,le))&&ie},Er=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},vt=function(e,t){return!t&&console.warn(e)},Vi=function(e,t){return e&&(le[e]=t)&&jt&&(jt[e]=t)||le},yt=function(){return 0},Rs={suppressEvents:!0,isStart:!0,kill:!1},It={suppressEvents:!0,kill:!1},As={suppressEvents:!0},Dr={},Ae=[],cr={},qi,ne={},Zt={},Jr=30,Lt=[],zr="",Ir=function(e){var t=e[0],r,i;if(ye(t)||N(t)||(e=[e]),!(r=(t._gsap||{}).harness)){for(i=Lt.length;i--&&!Lt[i].targetTest(t););r=Lt[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new _n(e[i],r)))||e.splice(i,1);return e},Ve=function(e){return e._gsap||Ir(fe(e))[0]._gsap},Yi=function(e,t,r){return(r=e[t])&&N(r)?e[t]():Rr(r)&&e.getAttribute&&e.getAttribute(t)||r},ee=function(e,t){return(e=e.split(",")).forEach(t)||e},j=function(e){return Math.round(e*1e5)/1e5||0},$=function(e){return Math.round(e*1e7)/1e7||0},Ze=function(e,t){var r=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),r==="+"?e+i:r==="-"?e-i:r==="*"?e*i:e/i},Ms=function(e,t){for(var r=t.length,i=0;e.indexOf(t[i])<0&&++i<r;);return i<r},Bt=function(){var e=Ae.length,t=Ae.slice(0),r,i;for(cr={},Ae.length=0,r=0;r<e;r++)i=t[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Xi=function(e,t,r,i){Ae.length&&!W&&Bt(),e.render(t,r,W&&t<0&&(e._initted||e._startAt)),Ae.length&&!W&&Bt()},Wi=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Bi).length<2?t:Y(e)?e.trim():e},Gi=function(e){return e},ue=function(e,t){for(var r in t)r in e||(e[r]=t[r]);return e},Es=function(e){return function(t,r){for(var i in r)i in t||i==="duration"&&e||i==="ease"||(t[i]=r[i])}},it=function(e,t){for(var r in t)e[r]=t[r];return e},ei=function s(e,t){for(var r in t)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=ye(t[r])?s(e[r]||(e[r]={}),t[r]):t[r]);return e},Ut=function(e,t){var r={},i;for(i in e)i in t||(r[i]=e[i]);return r},_t=function(e){var t=e.parent||L,r=e.keyframes?Es(Q(e.keyframes)):ue;if(J(e.inherit))for(;t;)r(e,t.vars.defaults),t=t.parent||t._dp;return e},Ds=function(e,t){for(var r=e.length,i=r===t.length;i&&r--&&e[r]===t[r];);return r<0},Ki=function(e,t,r,i,n){var o=e[i],a;if(n)for(a=t[n];o&&o[n]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[r],e[r]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Wt=function(e,t,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var n=t._prev,o=t._next;n?n._next=o:e[r]===t&&(e[r]=o),o?o._prev=n:e[i]===t&&(e[i]=n),t._next=t._prev=t.parent=null},De=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qe=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},zs=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},fr=function(e,t,r,i){return e._startAt&&(W?e._startAt.revert(It):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Is=function s(e){return!e||e._ts&&s(e.parent)},ti=function(e){return e._repeat?nt(e._tTime,e=e.duration()+e._rDelay)*e:0},nt=function(e,t){var r=Math.floor(e=$(e/t));return e&&r===e?r-1:r},$t=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Gt=function(e){return e._end=$(e._start+(e._tDur/Math.abs(e._ts||e._rts||H)||0))},Kt=function(e,t){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=$(r._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Gt(e),r._dirty||qe(r,e)),e},Hi=function(e,t){var r;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(r=$t(e.rawTime(),t),(!t._dur||Ot(0,t.totalDuration(),r)-t._tTime>H)&&t.render(r,!0)),qe(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-1e-8}},pe=function(e,t,r,i){return t.parent&&De(t),t._start=$((Se(r)?r:r||e!==L?ce(e,r,t):e._time)+t._delay),t._end=$(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ki(e,t,"_first","_last",e._sort?"_start":0),hr(t)||(e._recent=t),i||Hi(e,t),e._ts<0&&Kt(e,e._tTime),e},Qi=function(e,t){return(le.ScrollTrigger||Er("scrollTrigger",t))&&le.ScrollTrigger.create(t,e)},Zi=function(e,t,r,i,n){if(Fr(e,t,n),!e._initted)return 1;if(!r&&e._pt&&!W&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&qi!==se.frame)return Ae.push(e),e._lazy=[n,i],1},Ls=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},hr=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Fs=function(e,t,r,i){var n=e.ratio,o=t<0||!t&&(!e._start&&Ls(e)&&!(!e._initted&&hr(e))||(e._ts<0||e._dp._ts<0)&&!hr(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=Ot(0,e._tDur,t),c=nt(l,a),e._yoyo&&c&1&&(o=1-o),c!==nt(e._tTime,a)&&(n=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==n||W||i||e._zTime===H||!t&&e._zTime){if(!e._initted&&Zi(e,t,i,r,l))return;for(h=e._zTime,e._zTime=t||(r?H:0),r||(r=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&fr(e,t,r,!0),e._onUpdate&&!r&&oe(e,"onUpdate"),l&&e._repeat&&!r&&e.parent&&oe(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&De(e,1),!r&&!W&&(oe(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ns=function(e,t,r){var i;if(r>t)for(i=e._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},st=function(e,t,r,i){var n=e._repeat,o=$(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=n?n<0?1e10:$(o*(n+1)+e._rDelay*n):o,a>0&&!i&&Kt(e,e._tTime=e._tDur*a),e.parent&&Gt(e),r||qe(e.parent,e),e},ri=function(e){return e instanceof Z?qe(e):st(e,e._dur)},js={_start:0,endTime:yt,totalDuration:yt},ce=function s(e,t,r){var i=e.labels,n=e._recent||js,o=e.duration()>=xe?n.endTime(!1):e._dur,a,l,u;return Y(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?n:r).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&r&&(l=l/100*(Q(r)?r[0]:r).totalDuration()),a>1?s(e,t.substr(0,a-1),r)+l:o+l)):t==null?o:+t},mt=function(e,t,r){var i=Se(t[1]),n=(i?2:1)+(e<2?0:1),o=t[n],a,l;if(i&&(o.duration=t[1]),o.parent=r,e){for(a=o,l=r;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=J(l.vars.inherit)&&l.parent;o.immediateRender=J(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[n-1]}return new U(t[0],o,t[n+1])},Ie=function(e,t){return e||e===0?t(e):t},Ot=function(e,t,r){return r<e?e:r>t?t:r},G=function(e,t){return!Y(e)||!(t=Os.exec(e))?"":t[1]},Bs=function(e,t,r){return Ie(r,function(i){return Ot(e,t,i)})},dr=[].slice,Ji=function(e,t){return e&&ye(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ye(e[0]))&&!e.nodeType&&e!==de},Us=function(e,t,r){return r===void 0&&(r=[]),e.forEach(function(i){var n;return Y(i)&&!t||Ji(i,1)?(n=r).push.apply(n,fe(i)):r.push(i)})||r},fe=function(e,t,r){return I&&!t&&I.selector?I.selector(e):Y(e)&&!r&&(ur||!ot())?dr.call((t||Mr).querySelectorAll(e),0):Q(e)?Us(e,r):Ji(e)?dr.call(e,0):e?[e]:[]},pr=function(e){return e=fe(e)[0]||vt("Invalid scope")||{},function(t){var r=e.current||e.nativeElement||e;return fe(t,r.querySelectorAll?r:r===e?vt("Invalid scope")||Mr.createElement("div"):e)}},en=function(e){return e.sort(function(){return .5-Math.random()})},tn=function(e){if(N(e))return e;var t=ye(e)?e:{each:e},r=Ye(t.ease),i=t.from||0,n=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,u=t.axis,c=i,h=i;return Y(i)?c=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(c=i[0],h=i[1]),function(d,p,_){var f=(_||t).length,m=o[f],g,x,b,y,v,T,k,S,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,xe])[1],!w){for(k=-1e8;k<(k=_[w++].getBoundingClientRect().left)&&w<f;);w<f&&w--}for(m=o[f]=[],g=l?Math.min(w,f)*c-.5:i%w,x=w===xe?0:l?f*h/w-.5:i/w|0,k=0,S=xe,T=0;T<f;T++)b=T%w-g,y=x-(T/w|0),m[T]=v=u?Math.abs(u==="y"?y:b):Li(b*b+y*y),v>k&&(k=v),v<S&&(S=v);i==="random"&&en(m),m.max=k-S,m.min=S,m.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(w>f?f-1:u?u==="y"?f/w:w:Math.max(w,f/w))||0)*(i==="edges"?-1:1),m.b=f<0?n-f:n,m.u=G(t.amount||t.each)||0,r=r&&f<0?hn(r):r}return f=(m[d]-m.min)/m.max||0,$(m.b+(r?r(f):f)*m.v)+m.u}},_r=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var i=$(Math.round(parseFloat(r)/e)*e*t);return(i-i%1)/t+(Se(r)?0:G(r))}},rn=function(e,t){var r=Q(e),i,n;return!r&&ye(e)&&(i=r=e.radius||xe,e.values?(e=fe(e.values),(n=!Se(e[0]))&&(i*=i)):e=_r(e.increment)),Ie(t,r?N(e)?function(o){return n=e(o),Math.abs(n-o)<=i?n:o}:function(o){for(var a=parseFloat(n?o.x:o),l=parseFloat(n?o.y:0),u=xe,c=0,h=e.length,d,p;h--;)n?(d=e[h].x-a,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-a),d<u&&(u=d,c=h);return c=!i||u<=i?e[c]:o,n||c===o||Se(o)?c:c+G(o)}:_r(e))},nn=function(e,t,r,i){return Ie(Q(e)?!t:r===!0?!!(r=0):!i,function(){return Q(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(t-e+r*.99))/r)*r*i)/i})},$s=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(i){return t.reduce(function(n,o){return o(n)},i)}},Vs=function(e,t){return function(r){return e(parseFloat(r))+(t||G(r))}},qs=function(e,t,r){return on(e,t,0,1,r)},sn=function(e,t,r){return Ie(r,function(i){return e[~~t(i)]})},Ys=function s(e,t,r){var i=t-e;return Q(e)?sn(e,s(0,e.length),t):Ie(r,function(n){return(i+(n-e)%i)%i+e})},Xs=function s(e,t,r){var i=t-e,n=i*2;return Q(e)?sn(e,s(0,e.length-1),t):Ie(r,function(o){return o=(n+(o-e)%n)%n||0,e+(o>i?n-o:o)})},bt=function(e){for(var t=0,r="",i,n,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",n=e.substr(i+7,o-i-7).match(a?Bi:lr),r+=e.substr(t,i-t)+nn(a?n:+n[0],a?0:+n[1],+n[2]||1e-5),t=o+1;return r+e.substr(t,e.length-t)},on=function(e,t,r,i,n){var o=t-e,a=i-r;return Ie(n,function(l){return r+((l-e)/o*a||0)})},Ws=function s(e,t,r,i){var n=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!n){var o=Y(e),a={},l,u,c,h,d;if(r===!0&&(i=1)&&(r=null),o)e={p:e},t={p:t};else if(Q(e)&&!Q(t)){for(c=[],h=e.length,d=h-2,u=1;u<h;u++)c.push(s(e[u-1],e[u]));h--,n=function(_){_*=h;var f=Math.min(d,~~_);return c[f](_-f)},r=t}else i||(e=it(Q(e)?[]:{},e));if(!c){for(l in t)Lr.call(a,e,l,"get",t[l]);n=function(_){return Br(_,a)||(o?e.p:e)}}}return Ie(r,n)},ii=function(e,t,r){var i=e.labels,n=xe,o,a,l;for(o in i)a=i[o]-t,a<0==!!r&&a&&n>(a=Math.abs(a))&&(l=o,n=a);return l},oe=function(e,t,r){var i=e.vars,n=i[t],o=I,a=e._ctx,l,u,c;if(n)return l=i[t+"Params"],u=i.callbackScope||e,r&&Ae.length&&Bt(),a&&(I=a),c=l?n.apply(u,l):n.call(u),I=o,c},dt=function(e){return De(e),e.scrollTrigger&&e.scrollTrigger.kill(!!W),e.progress()<1&&oe(e,"onInterrupt"),e},Qe,an=[],ln=function(e){if(e)if(e=!e.name&&e.default||e,Ar()||e.headless){var t=e.name,r=N(e),i=t&&!r&&e.init?function(){this._props=[]}:e,n={init:yt,render:Br,add:Lr,kill:uo,modifier:lo,rawVars:0},o={targetTest:0,get:0,getSetter:jr,aliases:{},register:0};if(ot(),e!==i){if(ne[t])return;ue(i,ue(Ut(e,n),o)),it(i.prototype,it(n,Ut(e,o))),ne[i.prop=t]=i,e.targetTest&&(Lt.push(i),Dr[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Vi(t,i),e.register&&e.register(ie,i,te)}else an.push(e)},A=255,pt={aqua:[0,A,A],lime:[0,A,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,A],navy:[0,0,128],white:[A,A,A],olive:[128,128,0],yellow:[A,A,0],orange:[A,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[A,0,0],pink:[A,192,203],cyan:[0,A,A],transparent:[A,A,A,0]},Jt=function(e,t,r){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(r-t)*e*6:e<.5?r:e*3<2?t+(r-t)*(2/3-e)*6:t)*A+.5|0},un=function(e,t,r){var i=e?Se(e)?[e>>16,e>>8&A,e&A]:0:pt.black,n,o,a,l,u,c,h,d,p,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),pt[e])i=pt[e];else if(e.charAt(0)==="#"){if(e.length<6&&(n=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+n+n+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&A,i&A,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&A,e&A]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(lr),!t)l=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,o=c<=.5?c*(u+1):c+u-c*u,n=c*2-o,i.length>3&&(i[3]*=1),i[0]=Jt(l+1/3,n,o),i[1]=Jt(l,n,o),i[2]=Jt(l-1/3,n,o);else if(~e.indexOf("="))return i=e.match(Ni),r&&i.length<4&&(i[3]=1),i}else i=e.match(lr)||pt.transparent;i=i.map(Number)}return t&&!_&&(n=i[0]/A,o=i[1]/A,a=i[2]/A,h=Math.max(n,o,a),d=Math.min(n,o,a),c=(h+d)/2,h===d?l=u=0:(p=h-d,u=c>.5?p/(2-h-d):p/(h+d),l=h===n?(o-a)/p+(o<a?6:0):h===o?(a-n)/p+2:(n-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),r&&i.length<4&&(i[3]=1),i},cn=function(e){var t=[],r=[],i=-1;return e.split(Me).forEach(function(n){var o=n.match(He)||[];t.push.apply(t,o),r.push(i+=o.length+1)}),t.c=r,t},ni=function(e,t,r){var i="",n=(e+i).match(Me),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!n)return e;if(n=n.map(function(d){return(d=un(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),r&&(c=cn(e),l=r.c,l.join(i)!==c.c.join(i)))for(u=e.replace(Me,"1").split(He),h=u.length-1;a<h;a++)i+=u[a]+(~l.indexOf(a)?n.shift()||o+"0,0,0,0)":(c.length?c:n.length?n:r).shift());if(!u)for(u=e.split(Me),h=u.length-1;a<h;a++)i+=u[a]+n[a];return i+u[h]},Me=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in pt)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Gs=/hsl[a]?\(/,fn=function(e){var t=e.join(" "),r;if(Me.lastIndex=0,Me.test(t))return r=Gs.test(t),e[1]=ni(e[1],r),e[0]=ni(e[0],r,cn(e[1])),!0},wt,se=function(){var s=Date.now,e=500,t=33,r=s(),i=r,n=1e3/240,o=n,a=[],l,u,c,h,d,p,_=function f(m){var g=s()-i,x=m===!0,b,y,v,T;if((g>e||g<0)&&(r+=g-t),i+=g,v=i-r,b=v-o,(b>0||x)&&(T=++h.frame,d=v-h.time*1e3,h.time=v=v/1e3,o+=b+(b>=n?4:n-b),y=1),x||(l=u(f)),y)for(p=0;p<a.length;p++)a[p](v,d,T,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Ui&&(!ur&&Ar()&&(de=ur=window,Mr=de.document||{},le.gsap=ie,(de.gsapVersions||(de.gsapVersions=[])).push(ie.version),$i(jt||de.GreenSockGlobals||!de.gsap&&de||{}),an.forEach(ln)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(m){return setTimeout(m,o-h.time*1e3+1|0)},wt=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),wt=0,u=yt},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){n=1e3/(m||240),o=h.time*1e3+n},add:function(m,g,x){var b=g?function(y,v,T,k){m(y,v,T,k),h.remove(b)}:m;return h.remove(m),a[x?"unshift":"push"](b),ot(),b},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&p>=g&&p--},_listeners:a},h}(),ot=function(){return!wt&&se.wake()},O={},Ks=/^[\d.\-M][\d.\-,\s]/,Hs=/["']/g,Qs=function(e){for(var t={},r=e.substr(1,e.length-3).split(":"),i=r[0],n=1,o=r.length,a,l,u;n<o;n++)l=r[n],a=n!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[i]=isNaN(u)?u.replace(Hs,"").trim():+u,i=l.substr(a+1).trim();return t},Zs=function(e){var t=e.indexOf("(")+1,r=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<r?e.indexOf(")",r+1):r)},Js=function(e){var t=(e+"").split("("),r=O[t[0]];return r&&t.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[Qs(t[1])]:Zs(e).split(",").map(Wi)):O._CE&&Ks.test(e)?O._CE("",e):r},hn=function(e){return function(t){return 1-e(1-t)}},dn=function s(e,t){for(var r=e._first,i;r;)r instanceof Z?s(r,t):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==t&&(r.timeline?s(r.timeline,t):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=t)),r=r._next},Ye=function(e,t){return e&&(N(e)?e:O[e]||Js(e))||t},Ge=function(e,t,r,i){r===void 0&&(r=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var n={easeIn:t,easeOut:r,easeInOut:i},o;return ee(e,function(a){O[a]=le[a]=n,O[o=a.toLowerCase()]=r;for(var l in n)O[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=O[a+"."+l]=n[l]}),n},pn=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},er=function s(e,t,r){var i=t>=1?t:1,n=(r||(e?.3:.45))/(t<1?t:1),o=n/ar*(Math.asin(1/i)||0),a=function(c){return c===1?1:i*Math.pow(2,-10*c)*Ps((c-o)*n)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:pn(a);return n=ar/n,l.config=function(u,c){return s(e,u,c)},l},tr=function s(e,t){t===void 0&&(t=1.70158);var r=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?r:e==="in"?function(n){return 1-r(1-n)}:pn(r);return i.config=function(n){return s(e,n)},i};ee("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ge(s+",Power"+(t-1),e?function(r){return Math.pow(r,t)}:function(r){return r},function(r){return 1-Math.pow(1-r,t)},function(r){return r<.5?Math.pow(r*2,t)/2:1-Math.pow((1-r)*2,t)/2})});O.Linear.easeNone=O.none=O.Linear.easeIn;Ge("Elastic",er("in"),er("out"),er());(function(s,e){var t=1/e,r=2*t,i=2.5*t,n=function(a){return a<t?s*a*a:a<r?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Ge("Bounce",function(o){return 1-n(1-o)},n)})(7.5625,2.75);Ge("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ge("Circ",function(s){return-(Li(1-s*s)-1)});Ge("Sine",function(s){return s===1?1:-Cs(s*ks)+1});Ge("Back",tr("in"),tr("out"),tr());O.SteppedEase=O.steps=le.SteppedEase={config:function(e,t){e===void 0&&(e=1);var r=1/e,i=e+(t?0:1),n=t?1:0,o=1-H;return function(a){return((i*Ot(0,o,a)|0)+n)*r}}};rt.ease=O["quad.out"];ee("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return zr+=s+","+s+"Params,"});var _n=function(e,t){this.id=Ss++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Yi,this.set=t?t.getSetter:jr},Tt=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,st(this,+t.duration,1,1),this.data=t.data,I&&(this._ctx=I,I.data.push(this)),wt||se.wake()}var e=s.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,st(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,i){if(ot(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Kt(this,r),!n._dp||n.parent||Hi(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&pe(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===H||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),Xi(this,r,i)),this},e.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+ti(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},e.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+ti(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(r,i){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*n,i):this._repeat?nt(this._tTime,n)+1:1},e.timeScale=function(r,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===r)return this;var n=this.parent&&this._ts?$t(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-1e-8?0:this._rts,this.totalTime(Ot(-Math.abs(this._delay),this._tDur,n),i!==!1),Gt(this),zs(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ot(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==H&&(this._tTime-=H)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=r;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pe(i,this,r-this._delay),this}return this._start},e.endTime=function(r){return this._start+(J(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$t(i.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=As);var i=W;return W=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),W=i,this},e.globalTime=function(r){for(var i=this,n=arguments.length?r:i.rawTime();i;)n=i._start+n/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(r):n},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,ri(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,ri(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,i){return this.totalTime(ce(this,r),J(i))},e.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,J(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},e.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var r=this.parent||this._dp,i=this._start,n;return!!(!r||this._ts&&this._initted&&r.isActive()&&(n=r.rawTime(!0))>=i&&n<this.endTime(!0)-H)},e.eventCallback=function(r,i,n){var o=this.vars;return arguments.length>1?(i?(o[r]=i,n&&(o[r+"Params"]=n),r==="onUpdate"&&(this._onUpdate=i)):delete o[r],this):o[r]},e.then=function(r){var i=this;return new Promise(function(n){var o=N(r)?r:Gi,a=function(){var u=i.then;i.then=null,N(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),n(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){dt(this)},s}();ue(Tt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Z=function(s){Ii(e,s);function e(r,i){var n;return r===void 0&&(r={}),n=s.call(this,r)||this,n.labels={},n.smoothChildTiming=!!r.smoothChildTiming,n.autoRemoveChildren=!!r.autoRemoveChildren,n._sort=J(r.sortChildren),L&&pe(r.parent||L,we(n),i),r.reversed&&n.reverse(),r.paused&&n.paused(!0),r.scrollTrigger&&Qi(we(n),r.scrollTrigger),n}var t=e.prototype;return t.to=function(i,n,o){return mt(0,arguments,this),this},t.from=function(i,n,o){return mt(1,arguments,this),this},t.fromTo=function(i,n,o,a){return mt(2,arguments,this),this},t.set=function(i,n,o){return n.duration=0,n.parent=this,_t(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new U(i,n,ce(this,o),1),this},t.call=function(i,n,o){return pe(this,U.delayedCall(0,i,n),o)},t.staggerTo=function(i,n,o,a,l,u,c){return o.duration=n,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new U(i,o,ce(this,l)),this},t.staggerFrom=function(i,n,o,a,l,u,c){return o.runBackwards=1,_t(o).immediateRender=J(o.immediateRender),this.staggerTo(i,n,o,a,l,u,c)},t.staggerFromTo=function(i,n,o,a,l,u,c,h){return a.startAt=o,_t(a).immediateRender=J(a.immediateRender),this.staggerTo(i,n,a,l,u,c,h)},t.render=function(i,n,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:$(i),h=this._zTime<0!=i<0&&(this._initted||!u),d,p,_,f,m,g,x,b,y,v,T,k;if(this!==L&&c>l&&i>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,i+=this._time-a),d=c,y=this._start,b=this._ts,g=!b,h&&(u||(a=this._zTime),(i||!n)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,n,o);if(d=$(c%m),c===l?(f=this._repeat,d=u):(v=$(c/m),f=~~v,f&&f===v&&(d=u,f--),d>u&&(d=u)),v=nt(this._tTime,m),!a&&this._tTime&&v!==f&&this._tTime-v*m-this._dur<=0&&(v=f),T&&f&1&&(d=u-d,k=1),f!==v&&!this._lock){var S=T&&v&1,w=S===(T&&f&1);if(f<v&&(S=!S),a=S?0:c%u?u:c,this._lock=1,this.render(a||(k?0:$(f*m)),n,!u)._lock=0,this._tTime=c,!n&&this.parent&&oe(this,"onRepeat"),this.vars.repeatRefresh&&!k&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,w&&(this._lock=2,a=S?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!k&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;dn(this,k)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Ns(this,$(a),$(d)),x&&(c-=d-(d=x._start))),this._tTime=c,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!n&&!f&&(oe(this,"onStart"),this._tTime!==c))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(i,n,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,n,o),d!==this._time||!this._ts&&!g){x=0,_&&(c+=this._zTime=-1e-8);break}}p=_}else{p=this._last;for(var R=i<0?i:d;p;){if(_=p._prev,(p._act||R<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(i,n,o);if(p.render(p._ts>0?(R-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(R-p._start)*p._ts,n,o||W&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!g){x=0,_&&(c+=this._zTime=R?-1e-8:H);break}}p=_}}if(x&&!n&&(this.pause(),x.render(d>=a?0:-1e-8)._zTime=d>=a?1:-1,this._ts))return this._start=y,Gt(this),this.render(i,n,o);this._onUpdate&&!n&&oe(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&De(this,1),!n&&!(i<0&&!a)&&(c||a||!l)&&(oe(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,n){var o=this;if(Se(n)||(n=ce(this,n,i)),!(i instanceof Tt)){if(Q(i))return i.forEach(function(a){return o.add(a,n)}),this;if(Y(i))return this.addLabel(i,n);if(N(i))i=U.delayedCall(0,i);else return this}return this!==i?pe(this,i,n):this},t.getChildren=function(i,n,o,a){i===void 0&&(i=!0),n===void 0&&(n=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof U?n&&l.push(u):(o&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,n,o)))),u=u._next;return l},t.getById=function(i){for(var n=this.getChildren(1,1,1),o=n.length;o--;)if(n[o].vars.id===i)return n[o]},t.remove=function(i){return Y(i)?this.removeLabel(i):N(i)?this.killTweensOf(i):(i.parent===this&&Wt(this,i),i===this._recent&&(this._recent=this._last),qe(this))},t.totalTime=function(i,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$(se.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,n),this._forcing=0,this):this._tTime},t.addLabel=function(i,n){return this.labels[i]=ce(this,n),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,n,o){var a=U.delayedCall(0,n||yt,o);return a.data="isPause",this._hasPause=1,pe(this,a,ce(this,i))},t.removePause=function(i){var n=this._first;for(i=ce(this,i);n;)n._start===i&&n.data==="isPause"&&De(n),n=n._next},t.killTweensOf=function(i,n,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Pe!==a[l]&&a[l].kill(i,n);return this},t.getTweensOf=function(i,n){for(var o=[],a=fe(i),l=this._first,u=Se(n),c;l;)l instanceof U?Ms(l._targets,a)&&(u?(!Pe||l._initted&&l._ts)&&l.globalTime(0)<=n&&l.globalTime(l.totalDuration())>n:!n||l.isActive())&&o.push(l):(c=l.getTweensOf(a,n)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(i,n){n=n||{};var o=this,a=ce(o,i),l=n,u=l.startAt,c=l.onStart,h=l.onStartParams,d=l.immediateRender,p,_=U.to(o,ue({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:n.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||H,onStart:function(){if(o.pause(),!p){var m=n.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&st(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,h||[])}},n));return d?_.render(0):_},t.tweenFromTo=function(i,n,o){return this.tweenTo(n,ue({startAt:{time:ce(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ii(this,ce(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ii(this,ce(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+H)},t.shiftChildren=function(i,n,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(n)for(u in l)l[u]>=o&&(l[u]+=i);return qe(this)},t.invalidate=function(i){var n=this._first;for(this._lock=0;n;)n.invalidate(i),n=n._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var n=this._first,o;n;)o=n._next,this.remove(n),n=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),qe(this)},t.totalDuration=function(i){var n=0,o=this,a=o._last,l=xe,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,pe(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(n-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>n&&a._ts&&(n=a._end),a=u;st(o,o===L&&o._time>n?o._time:n,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(L._ts&&(Xi(L,$t(i,L)),qi=se.frame),se.frame>=Jr){Jr+=ae.autoSleep||120;var n=L._first;if((!n||!n._ts)&&ae.autoSleep&&se._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||se.sleep()}}},e}(Tt);ue(Z.prototype,{_lock:0,_hasPause:0,_forcing:0});var eo=function(e,t,r,i,n,o,a){var l=new te(this._pt,e,t,0,1,bn,null,n),u=0,c=0,h,d,p,_,f,m,g,x;for(l.b=r,l.e=i,r+="",i+="",(g=~i.indexOf("random("))&&(i=bt(i)),o&&(x=[r,i],o(x,e,t),r=x[0],i=x[1]),d=r.match(Qt)||[];h=Qt.exec(i);)_=h[0],f=i.substring(u,h.index),p?p=(p+1)%5:f.substr(-5)==="rgba("&&(p=1),_!==d[c++]&&(m=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:f||c===1?f:",",s:m,c:_.charAt(1)==="="?Ze(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=Qt.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=a,(ji.test(i)||g)&&(l.e=0),this._pt=l,l},Lr=function(e,t,r,i,n,o,a,l,u,c){N(i)&&(i=i(n||0,e,o));var h=e[t],d=r!=="get"?r:N(h)?u?e[t.indexOf("set")||!N(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,p=N(h)?u?so:vn:Nr,_;if(Y(i)&&(~i.indexOf("random(")&&(i=bt(i)),i.charAt(1)==="="&&(_=Ze(d,i)+(G(d)||0),(_||_===0)&&(i=_))),!c||d!==i||mr)return!isNaN(d*i)&&i!==""?(_=new te(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?ao:yn,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Er(t,i),eo.call(this,e,t,d,i,p,l||ae.stringFilter,u))},to=function(e,t,r,i,n){if(N(e)&&(e=gt(e,n,t,r,i)),!ye(e)||e.style&&e.nodeType||Q(e)||Fi(e))return Y(e)?gt(e,n,t,r,i):e;var o={},a;for(a in e)o[a]=gt(e[a],n,t,r,i);return o},mn=function(e,t,r,i,n,o){var a,l,u,c;if(ne[e]&&(a=new ne[e]).init(n,a.rawVars?t[e]:to(t[e],i,n,o,r),r,i,o)!==!1&&(r._pt=l=new te(r._pt,n,e,0,1,a.render,a,0,a.priority),r!==Qe))for(u=r._ptLookup[r._targets.indexOf(n)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Pe,mr,Fr=function s(e,t,r){var i=e.vars,n=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,u=i.onUpdate,c=i.runBackwards,h=i.yoyoEase,d=i.keyframes,p=i.autoRevert,_=e._dur,f=e._startAt,m=e._targets,g=e.parent,x=g&&g.data==="nested"?g.vars.targets:m,b=e._overwrite==="auto"&&!Or,y=e.timeline,v,T,k,S,w,R,z,M,E,X,V,B,q;if(y&&(!d||!n)&&(n="none"),e._ease=Ye(n,rt.ease),e._yEase=h?hn(Ye(h===!0?n:h,rt.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(M=m[0]?Ve(m[0]).harness:0,B=M&&i[M.prop],v=Ut(i,Dr),f&&(f._zTime<0&&f.progress(1),t<0&&c&&a&&!p?f.render(-1,!0):f.revert(c&&_?It:Rs),f._lazy=0),o){if(De(e._startAt=U.set(m,ue({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!f&&J(l),startAt:null,delay:0,onUpdate:u&&function(){return oe(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(W||!a&&!p)&&e._startAt.revert(It),a&&_&&t<=0&&r<=0){t&&(e._zTime=t);return}}else if(c&&_&&!f){if(t&&(a=!1),k=ue({overwrite:!1,data:"isFromStart",lazy:a&&!f&&J(l),immediateRender:a,stagger:0,parent:g},v),B&&(k[M.prop]=B),De(e._startAt=U.set(m,k)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(W?e._startAt.revert(It):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,H,H);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&J(l)||l&&!_,T=0;T<m.length;T++){if(w=m[T],z=w._gsap||Ir(m)[T]._gsap,e._ptLookup[T]=X={},cr[z.id]&&Ae.length&&Bt(),V=x===m?T:x.indexOf(w),M&&(E=new M).init(w,B||v,e,V,x)!==!1&&(e._pt=S=new te(e._pt,w,E.name,0,1,E.render,E,0,E.priority),E._props.forEach(function(he){X[he]=S}),E.priority&&(R=1)),!M||B)for(k in v)ne[k]&&(E=mn(k,v,e,V,w,x))?E.priority&&(R=1):X[k]=S=Lr.call(e,w,k,"get",v[k],V,x,0,i.stringFilter);e._op&&e._op[T]&&e.kill(w,e._op[T]),b&&e._pt&&(Pe=e,L.killTweensOf(w,X,e.globalTime(t)),q=!e.parent,Pe=0),e._pt&&l&&(cr[z.id]=1)}R&&wn(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&y.render(xe,!0,!0)},ro=function(e,t,r,i,n,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,d,p;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(c=d[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return mr=1,e.vars[t]="+=0",Fr(e,a),mr=0,l?vt(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)h=u[p],c=h._pt||h,c.s=(i||i===0)&&!n?i:c.s+(i||0)+o*c.c,c.c=r-c.s,h.e&&(h.e=j(r)+G(h.e)),h.b&&(h.b=c.s+G(h.b))},io=function(e,t){var r=e[0]?Ve(e[0]).harness:0,i=r&&r.aliases,n,o,a,l;if(!i)return t;n=it({},t);for(o in i)if(o in n)for(l=i[o].split(","),a=l.length;a--;)n[l[a]]=n[o];return n},no=function(e,t,r,i){var n=t.ease||i||"power1.inOut",o,a;if(Q(t))a=r[e]||(r[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:n})});else for(o in t)a=r[o]||(r[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:n})},gt=function(e,t,r,i,n){return N(e)?e.call(t,r,i,n):Y(e)&&~e.indexOf("random(")?bt(e):e},gn=zr+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",xn={};ee(gn+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return xn[s]=1});var U=function(s){Ii(e,s);function e(r,i,n,o){var a;typeof i=="number"&&(n.duration=i,i=n,n=null),a=s.call(this,o?i:_t(i))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,f=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,x=i.parent||L,b=(Q(r)||Fi(r)?Se(r[0]):"length"in i)?[r]:fe(r),y,v,T,k,S,w,R,z;if(a._targets=b.length?Ir(b):vt("GSAP target "+r+" not found. https://gsap.com",!ae.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||d||At(u)||At(c)){if(i=a.vars,y=a.timeline=new Z({data:"nested",defaults:f||{},targets:x&&x.data==="nested"?x.vars.targets:b}),y.kill(),y.parent=y._dp=we(a),y._start=0,d||At(u)||At(c)){if(k=b.length,R=d&&tn(d),ye(d))for(S in d)~gn.indexOf(S)&&(z||(z={}),z[S]=d[S]);for(v=0;v<k;v++)T=Ut(i,xn),T.stagger=0,g&&(T.yoyoEase=g),z&&it(T,z),w=b[v],T.duration=+gt(u,we(a),v,w,b),T.delay=(+gt(c,we(a),v,w,b)||0)-a._delay,!d&&k===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),y.to(w,T,R?R(v,w,b):0),y._ease=O.none;y.duration()?u=c=0:a.timeline=0}else if(_){_t(ue(y.vars.defaults,{ease:"none"})),y._ease=Ye(_.ease||i.ease||"none");var M=0,E,X,V;if(Q(_))_.forEach(function(B){return y.to(b,B,">")}),y.duration();else{T={};for(S in _)S==="ease"||S==="easeEach"||no(S,_[S],T,_.easeEach);for(S in T)for(E=T[S].sort(function(B,q){return B.t-q.t}),M=0,v=0;v<E.length;v++)X=E[v],V={ease:X.e,duration:(X.t-(v?E[v-1].t:0))/100*u},V[S]=X.v,y.to(b,V,M),M+=V.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!Or&&(Pe=we(a),L.killTweensOf(b),Pe=0),pe(x,we(a),n),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!u&&!_&&a._start===$(x._time)&&J(h)&&Is(we(a))&&x.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-c)||0)),m&&Qi(we(a),m),a}var t=e.prototype;return t.render=function(i,n,o){var a=this._time,l=this._tDur,u=this._dur,c=i<0,h=i>l-H&&!c?l:i<H?0:i,d,p,_,f,m,g,x,b,y;if(!u)Fs(this,i,n,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=h,b=this.timeline,this._repeat){if(f=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(f*100+i,n,o);if(d=$(h%f),h===l?(_=this._repeat,d=u):(m=$(h/f),_=~~m,_&&_===m?(d=u,_--):d>u&&(d=u)),g=this._yoyo&&_&1,g&&(y=this._yEase,d=u-d),m=nt(this._tTime,f),d===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(b&&this._yEase&&dn(b,g),this.vars.repeatRefresh&&!g&&!this._lock&&d!==f&&this._initted&&(this._lock=o=1,this.render($(f*_),!0).invalidate()._lock=0))}if(!this._initted){if(Zi(this,c?i:d,o,n,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(i,n,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(d/u),this._from&&(this.ratio=x=1-x),d&&!a&&!n&&!_&&(oe(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;b&&b.render(i<0?i:b._dur*b._ease(d/this._dur),n,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!n&&(c&&fr(this,i,n,o),oe(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!n&&this.parent&&oe(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&fr(this,i,!0,!0),(i||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&De(this,1),!n&&!(c&&!a)&&(h||a||g)&&(oe(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,n,o,a,l){wt||se.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Fr(this,u),c=this._ease(u/this._dur),ro(this,i,n,o,a,c,u,l)?this.resetTo(i,n,o,a,1):(Kt(this,0),this.parent||Ki(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,n){if(n===void 0&&(n="all"),!i&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?dt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!W),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,n,Pe&&Pe.vars.overwrite!==!0)._first||dt(this),this.parent&&o!==this.timeline.totalDuration()&&st(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?fe(i):a,u=this._ptLookup,c=this._pt,h,d,p,_,f,m,g;if((!n||n==="all")&&Ds(a,l))return n==="all"&&(this._pt=0),dt(this);for(h=this._op=this._op||[],n!=="all"&&(Y(n)&&(f={},ee(n,function(x){return f[x]=1}),n=f),n=io(a,n)),g=a.length;g--;)if(~l.indexOf(a[g])){d=u[g],n==="all"?(h[g]=n,_=d,p={}):(p=h[g]=h[g]||{},_=n);for(f in _)m=d&&d[f],m&&((!("kill"in m.d)||m.d.kill(f)===!0)&&Wt(this,m,"_pt"),delete d[f]),p!=="all"&&(p[f]=1)}return this._initted&&!this._pt&&c&&dt(this),this},e.to=function(i,n){return new e(i,n,arguments[2])},e.from=function(i,n){return mt(1,arguments)},e.delayedCall=function(i,n,o,a){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:n,onReverseComplete:n,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,n,o){return mt(2,arguments)},e.set=function(i,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(i,n)},e.killTweensOf=function(i,n,o){return L.killTweensOf(i,n,o)},e}(Tt);ue(U.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ee("staggerTo,staggerFrom,staggerFromTo",function(s){U[s]=function(){var e=new Z,t=dr.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Nr=function(e,t,r){return e[t]=r},vn=function(e,t,r){return e[t](r)},so=function(e,t,r,i){return e[t](i.fp,r)},oo=function(e,t,r){return e.setAttribute(t,r)},jr=function(e,t){return N(e[t])?vn:Rr(e[t])&&e.setAttribute?oo:Nr},yn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ao=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},bn=function(e,t){var r=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+i,r=r._next;i+=t.c}t.set(t.t,t.p,i,t)},Br=function(e,t){for(var r=t._pt;r;)r.r(e,r.d),r=r._next},lo=function(e,t,r,i){for(var n=this._pt,o;n;)o=n._next,n.p===i&&n.modifier(e,t,r),n=o},uo=function(e){for(var t=this._pt,r,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Wt(this,t,"_pt"):t.dep||(r=1),t=i;return!r},co=function(e,t,r,i){i.mSet(e,t,i.m.call(i.tween,r,i.mt),i)},wn=function(e){for(var t=e._pt,r,i,n,o;t;){for(r=t._next,i=n;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:n=t,(t._next=i)?i._prev=t:o=t,t=r}e._pt=n},te=function(){function s(t,r,i,n,o,a,l,u,c){this.t=r,this.s=n,this.c=o,this.p=i,this.r=a||yn,this.d=l||this,this.set=u||Nr,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(r,i,n){this.mSet=this.mSet||this.set,this.set=co,this.m=r,this.mt=n,this.tween=i},s}();ee(zr+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Dr[s]=1});le.TweenMax=le.TweenLite=U;le.TimelineLite=le.TimelineMax=Z;L=new Z({sortChildren:!1,defaults:rt,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ae.stringFilter=fn;var Xe=[],Ft={},fo=[],si=0,ho=0,rr=function(e){return(Ft[e]||fo).map(function(t){return t()})},gr=function(){var e=Date.now(),t=[];e-si>2&&(rr("matchMediaInit"),Xe.forEach(function(r){var i=r.queries,n=r.conditions,o,a,l,u;for(a in i)o=de.matchMedia(i[a]).matches,o&&(l=1),o!==n[a]&&(n[a]=o,u=1);u&&(r.revert(),l&&t.push(r))}),rr("matchMediaRevert"),t.forEach(function(r){return r.onMatch(r,function(i){return r.add(null,i)})}),si=e,rr("matchMedia"))},Tn=function(){function s(t,r){this.selector=r&&pr(r),this.data=[],this._r=[],this.isReverted=!1,this.id=ho++,t&&this.add(t)}var e=s.prototype;return e.add=function(r,i,n){N(r)&&(n=i,i=r,r=N);var o=this,a=function(){var u=I,c=o.selector,h;return u&&u!==o&&u.data.push(o),n&&(o.selector=pr(n)),I=o,h=i.apply(o,arguments),N(h)&&o._r.push(h),I=u,o.selector=c,o.isReverted=!1,h};return o.last=a,r===N?a(o,function(l){return o.add(null,l)}):r?o[r]=a:a},e.ignore=function(r){var i=I;I=null,r(this),I=i},e.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof s?r.push.apply(r,i.getTweens()):i instanceof U&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,i){var n=this;if(r?function(){for(var a=n.getTweens(),l=n.data.length,u;l--;)u=n.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(r)}),l=n.data.length;l--;)u=n.data[l],u instanceof Z?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof U)&&u.revert&&u.revert(r);n._r.forEach(function(c){return c(r,n)}),n.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Xe.length;o--;)Xe[o].id===this.id&&Xe.splice(o,1)},e.revert=function(r){this.kill(r||{})},s}(),po=function(){function s(t){this.contexts=[],this.scope=t,I&&I.data.push(this)}var e=s.prototype;return e.add=function(r,i,n){ye(r)||(r={matches:r});var o=new Tn(0,n||this.scope),a=o.conditions={},l,u,c;I&&!o.selector&&(o.selector=I.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=r;for(u in r)u==="all"?c=1:(l=de.matchMedia(r[u]),l&&(Xe.indexOf(o)<0&&Xe.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(gr):l.addEventListener("change",gr)));return c&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},s}(),Vt={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(function(i){return ln(i)})},timeline:function(e){return new Z(e)},getTweensOf:function(e,t){return L.getTweensOf(e,t)},getProperty:function(e,t,r,i){Y(e)&&(e=fe(e)[0]);var n=Ve(e||{}).get,o=r?Gi:Wi;return r==="native"&&(r=""),e&&(t?o((ne[t]&&ne[t].get||n)(e,t,r,i)):function(a,l,u){return o((ne[a]&&ne[a].get||n)(e,a,l,u))})},quickSetter:function(e,t,r){if(e=fe(e),e.length>1){var i=e.map(function(c){return ie.quickSetter(c,t,r)}),n=i.length;return function(c){for(var h=n;h--;)i[h](c)}}e=e[0]||{};var o=ne[t],a=Ve(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;Qe._pt=0,h.init(e,r?c+r:c,Qe,0,[e]),h.render(1,h),Qe._pt&&Br(1,Qe)}:a.set(e,l);return o?u:function(c){return u(e,l,r?c+r:c,a,1)}},quickTo:function(e,t,r){var i,n=ie.to(e,ue((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),r||{})),o=function(l,u,c){return n.resetTo(t,l,u,c)};return o.tween=n,o},isTweening:function(e){return L.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ye(e.ease,rt.ease)),ei(rt,e||{})},config:function(e){return ei(ae,e||{})},registerEffect:function(e){var t=e.name,r=e.effect,i=e.plugins,n=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ne[a]&&!le[a]&&vt(t+" effect requires "+a+" plugin.")}),Zt[t]=function(a,l,u){return r(fe(a),ue(l||{},n),u)},o&&(Z.prototype[t]=function(a,l,u){return this.add(Zt[t](a,ye(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){O[e]=Ye(t)},parseEase:function(e,t){return arguments.length?Ye(e,t):O},getById:function(e){return L.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var r=new Z(e),i,n;for(r.smoothChildTiming=J(e.smoothChildTiming),L.remove(r),r._dp=0,r._time=r._tTime=L._time,i=L._first;i;)n=i._next,(t||!(!i._dur&&i instanceof U&&i.vars.onComplete===i._targets[0]))&&pe(r,i,i._start-i._delay),i=n;return pe(L,r,0),r},context:function(e,t){return e?new Tn(e,t):I},matchMedia:function(e){return new po(e)},matchMediaRefresh:function(){return Xe.forEach(function(e){var t=e.conditions,r,i;for(i in t)t[i]&&(t[i]=!1,r=1);r&&e.revert()})||gr()},addEventListener:function(e,t){var r=Ft[e]||(Ft[e]=[]);~r.indexOf(t)||r.push(t)},removeEventListener:function(e,t){var r=Ft[e],i=r&&r.indexOf(t);i>=0&&r.splice(i,1)},utils:{wrap:Ys,wrapYoyo:Xs,distribute:tn,random:nn,snap:rn,normalize:qs,getUnit:G,clamp:Bs,splitColor:un,toArray:fe,selector:pr,mapRange:on,pipe:$s,unitize:Vs,interpolate:Ws,shuffle:en},install:$i,effects:Zt,ticker:se,updateRoot:Z.updateRoot,plugins:ne,globalTimeline:L,core:{PropTween:te,globals:Vi,Tween:U,Timeline:Z,Animation:Tt,getCache:Ve,_removeLinkedListItem:Wt,reverting:function(){return W},context:function(e){return e&&I&&(I.data.push(e),e._ctx=I),I},suppressOverwrites:function(e){return Or=e}}};ee("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Vt[s]=U[s]});se.add(Z.updateRoot);Qe=Vt.to({},{duration:0});var _o=function(e,t){for(var r=e._pt;r&&r.p!==t&&r.op!==t&&r.fp!==t;)r=r._next;return r},mo=function(e,t){var r=e._targets,i,n,o;for(i in t)for(n=r.length;n--;)o=e._ptLookup[n][i],o&&(o=o.d)&&(o._pt&&(o=_o(o,i)),o&&o.modifier&&o.modifier(t[i],e,r[n],i))},ir=function(e,t){return{name:e,rawVars:1,init:function(i,n,o){o._onInit=function(a){var l,u;if(Y(n)&&(l={},ee(n,function(c){return l[c]=1}),n=l),t){l={};for(u in n)l[u]=t(n[u]);n=l}mo(a,n)}}}},ie=Vt.registerPlugin({name:"attr",init:function(e,t,r,i,n){var o,a,l;this.tween=r;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,n,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var r=t._pt;r;)W?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",init:function(e,t){for(var r=t.length;r--;)this.add(e,r,e[r]||0,t[r],0,0,0,0,0,1)}},ir("roundProps",_r),ir("modifiers"),ir("snap",rn))||Vt;U.version=Z.version=ie.version="3.12.7";Ui=1;Ar()&&ot();O.Power0;O.Power1;O.Power2;O.Power3;O.Power4;O.Linear;O.Quad;O.Cubic;O.Quart;O.Quint;O.Strong;O.Elastic;O.Back;O.SteppedEase;O.Bounce;O.Sine;O.Expo;O.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var oi,Oe,Je,Ur,$e,ai,$r,go=function(){return typeof window<"u"},Ce={},Be=180/Math.PI,et=Math.PI/180,Ke=Math.atan2,li=1e8,Vr=/([A-Z])/g,xo=/(left|right|width|margin|padding|x)/i,vo=/[\s,\(]\S/,_e={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yo=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bo=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wo=function(e,t){var r=t.s+t.c*e;t.set(t.t,t.p,~~(r+(r<0?-.5:.5))+t.u,t)},kn=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Sn=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},To=function(e,t,r){return e.style[t]=r},ko=function(e,t,r){return e.style.setProperty(t,r)},So=function(e,t,r){return e._gsap[t]=r},Co=function(e,t,r){return e._gsap.scaleX=e._gsap.scaleY=r},Po=function(e,t,r,i,n){var o=e._gsap;o.scaleX=o.scaleY=r,o.renderTransform(n,o)},Oo=function(e,t,r,i,n){var o=e._gsap;o[t]=r,o.renderTransform(n,o)},F="transform",re=F+"Origin",Ro=function s(e,t){var r=this,i=this.target,n=i.style,o=i._gsap;if(e in Ce&&n){if(this.tfm=this.tfm||{},e!=="transform")e=_e[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return r.tfm[a]=Te(i,a)}):this.tfm[e]=o.x?o[e]:Te(i,e),e===re&&(this.tfm.zOrigin=o.zOrigin);else return _e.transform.split(",").forEach(function(a){return s.call(r,a,t)});if(this.props.indexOf(F)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(re,t,"")),e=F}(n||t)&&this.props.push(e,t,n[e])},Cn=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ao=function(){var e=this.props,t=this.target,r=t.style,i=t._gsap,n,o;for(n=0;n<e.length;n+=3)e[n+1]?e[n+1]===2?t[e[n]](e[n+2]):t[e[n]]=e[n+2]:e[n+2]?r[e[n]]=e[n+2]:r.removeProperty(e[n].substr(0,2)==="--"?e[n]:e[n].replace(Vr,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),n=$r(),(!n||!n.isStart)&&!r[F]&&(Cn(r),i.zOrigin&&r[re]&&(r[re]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Pn=function(e,t){var r={target:e,props:[],revert:Ao,save:Ro};return e._gsap||ie.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return r.save(i)}),r},On,vr=function(e,t){var r=Oe.createElementNS?Oe.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Oe.createElement(e);return r&&r.style?r:Oe.createElement(e)},ve=function s(e,t,r){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Vr,"-$1").toLowerCase())||i.getPropertyValue(t)||!r&&s(e,at(t)||t,1)||""},ui="O,Moz,ms,Ms,Webkit".split(","),at=function(e,t,r){var i=t||$e,n=i.style,o=5;if(e in n&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ui[o]+e in n););return o<0?null:(o===3?"ms":o>=0?ui[o]:"")+e},yr=function(){go()&&window.document&&(oi=window,Oe=oi.document,Je=Oe.documentElement,$e=vr("div")||{style:{}},vr("div"),F=at(F),re=F+"Origin",$e.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",On=!!at("perspective"),$r=ie.core.reverting,Ur=1)},ci=function(e){var t=e.ownerSVGElement,r=vr("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),n;i.style.display="block",r.appendChild(i),Je.appendChild(r);try{n=i.getBBox()}catch{}return r.removeChild(i),Je.removeChild(r),n},fi=function(e,t){for(var r=t.length;r--;)if(e.hasAttribute(t[r]))return e.getAttribute(t[r])},Rn=function(e){var t,r;try{t=e.getBBox()}catch{t=ci(e),r=1}return t&&(t.width||t.height)||r||(t=ci(e)),t&&!t.width&&!t.x&&!t.y?{x:+fi(e,["x","cx","x1"])||0,y:+fi(e,["y","cy","y1"])||0,width:0,height:0}:t},An=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Rn(e))},We=function(e,t){if(t){var r=e.style,i;t in Ce&&t!==re&&(t=F),r.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),r.removeProperty(i==="--"?t:t.replace(Vr,"-$1").toLowerCase())):r.removeAttribute(t)}},Re=function(e,t,r,i,n,o){var a=new te(e._pt,t,r,0,1,o?Sn:kn);return e._pt=a,a.b=i,a.e=n,e._props.push(r),a},hi={deg:1,rad:1,turn:1},Mo={grid:1,flex:1},ze=function s(e,t,r,i){var n=parseFloat(r)||0,o=(r+"").trim().substr((n+"").length)||"px",a=$e.style,l=xo.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",p=i==="%",_,f,m,g;if(i===o||!n||hi[i]||hi[o])return n;if(o!=="px"&&!d&&(n=s(e,t,r,"px")),g=e.getCTM&&An(e),(p||o==="%")&&(Ce[t]||~t.indexOf("adius")))return _=g?e.getBBox()[l?"width":"height"]:e[c],j(p?n/_*h:n/100*_);if(a[l?"width":"height"]=h+(d?o:i),f=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,g&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===Oe||!f.appendChild)&&(f=Oe.body),m=f._gsap,m&&p&&m.width&&l&&m.time===se.time&&!m.uncache)return j(n/m.width*h);if(p&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,_=e[c],x?e.style[t]=x:We(e,t)}else(p||o==="%")&&!Mo[ve(f,"display")]&&(a.position=ve(e,"position")),f===e&&(a.position="static"),f.appendChild($e),_=$e[c],f.removeChild($e),a.position="absolute";return l&&p&&(m=Ve(f),m.time=se.time,m.width=f[c]),j(d?_*n/h:_&&n?h/_*n:0)},Te=function(e,t,r,i){var n;return Ur||yr(),t in _e&&t!=="transform"&&(t=_e[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ce[t]&&t!=="transform"?(n=St(e,i),n=t!=="transformOrigin"?n[t]:n.svg?n.origin:Yt(ve(e,re))+" "+n.zOrigin+"px"):(n=e.style[t],(!n||n==="auto"||i||~(n+"").indexOf("calc("))&&(n=qt[t]&&qt[t](e,t,r)||ve(e,t)||Yi(e,t)||(t==="opacity"?1:0))),r&&!~(n+"").trim().indexOf(" ")?ze(e,t,n,r)+r:n},Eo=function(e,t,r,i){if(!r||r==="none"){var n=at(t,e,1),o=n&&ve(e,n,1);o&&o!==r?(t=n,r=o):t==="borderColor"&&(r=ve(e,"borderTopColor"))}var a=new te(this._pt,e.style,t,0,1,bn),l=0,u=0,c,h,d,p,_,f,m,g,x,b,y,v;if(a.b=r,a.e=i,r+="",i+="",i==="auto"&&(f=e.style[t],e.style[t]=i,i=ve(e,t)||i,f?e.style[t]=f:We(e,t)),c=[r,i],fn(c),r=c[0],i=c[1],d=r.match(He)||[],v=i.match(He)||[],v.length){for(;h=He.exec(i);)m=h[0],x=i.substring(l,h.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(f=d[u++]||"")&&(p=parseFloat(f)||0,y=f.substr((p+"").length),m.charAt(1)==="="&&(m=Ze(p,m)+y),g=parseFloat(m),b=m.substr((g+"").length),l=He.lastIndex-b.length,b||(b=b||ae.units[t]||y,l===i.length&&(i+=b,a.e+=b)),y!==b&&(p=ze(e,t,f,b)||0),a._pt={_next:a._pt,p:x||u===1?x:",",s:p,c:g-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Sn:kn;return ji.test(i)&&(a.e=0),this._pt=a,a},di={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Do=function(e){var t=e.split(" "),r=t[0],i=t[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(e=r,r=i,i=e),t[0]=di[r]||r,t[1]=di[i]||i,t.join(" ")},zo=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var r=t.t,i=r.style,n=t.u,o=r._gsap,a,l,u;if(n==="all"||n===!0)i.cssText="",l=1;else for(n=n.split(","),u=n.length;--u>-1;)a=n[u],Ce[a]&&(l=1,a=a==="transformOrigin"?re:F),We(r,a);l&&(We(r,F),o&&(o.svg&&r.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",St(r,1),o.uncache=1,Cn(i)))}},qt={clearProps:function(e,t,r,i,n){if(n.data!=="isFromStart"){var o=e._pt=new te(e._pt,t,r,0,0,zo);return o.u=i,o.pr=-10,o.tween=n,e._props.push(r),1}}},kt=[1,0,0,1,0,0],Mn={},En=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},pi=function(e){var t=ve(e,F);return En(t)?kt:t.substr(7).match(Ni).map(j)},qr=function(e,t){var r=e._gsap||Ve(e),i=e.style,n=pi(e),o,a,l,u;return r.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,n=[l.a,l.b,l.c,l.d,l.e,l.f],n.join(",")==="1,0,0,1,0,0"?kt:n):(n===kt&&!e.offsetParent&&e!==Je&&!r.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Je.appendChild(e)),n=pi(e),l?i.display=l:We(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Je.removeChild(e))),t&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},br=function(e,t,r,i,n,o){var a=e._gsap,l=n||qr(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,p=l[0],_=l[1],f=l[2],m=l[3],g=l[4],x=l[5],b=t.split(" "),y=parseFloat(b[0])||0,v=parseFloat(b[1])||0,T,k,S,w;r?l!==kt&&(k=p*m-_*f)&&(S=y*(m/k)+v*(-f/k)+(f*x-m*g)/k,w=y*(-_/k)+v*(p/k)-(p*x-_*g)/k,y=S,v=w):(T=Rn(e),y=T.x+(~b[0].indexOf("%")?y/100*T.width:y),v=T.y+(~(b[1]||b[0]).indexOf("%")?v/100*T.height:v)),i||i!==!1&&a.smooth?(g=y-u,x=v-c,a.xOffset=h+(g*p+x*f)-g,a.yOffset=d+(g*_+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=v,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!r,e.style[re]="0px 0px",o&&(Re(o,a,"xOrigin",u,y),Re(o,a,"yOrigin",c,v),Re(o,a,"xOffset",h,a.xOffset),Re(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+v)},St=function(e,t){var r=e._gsap||new _n(e);if("x"in r&&!t&&!r.uncache)return r;var i=e.style,n=r.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=ve(e,re)||"0",c,h,d,p,_,f,m,g,x,b,y,v,T,k,S,w,R,z,M,E,X,V,B,q,he,Rt,ct,ft,Le,Xr,be,Fe;return c=h=d=f=m=g=x=b=y=0,p=_=1,r.svg=!!(e.getCTM&&An(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[F]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[F]!=="none"?l[F]:"")),i.scale=i.rotate=i.translate="none"),k=qr(e,r.svg),r.svg&&(r.uncache?(he=e.getBBox(),u=r.xOrigin-he.x+"px "+(r.yOrigin-he.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),br(e,q||u,!!q||r.originIsAbsolute,r.smooth!==!1,k)),v=r.xOrigin||0,T=r.yOrigin||0,k!==kt&&(z=k[0],M=k[1],E=k[2],X=k[3],c=V=k[4],h=B=k[5],k.length===6?(p=Math.sqrt(z*z+M*M),_=Math.sqrt(X*X+E*E),f=z||M?Ke(M,z)*Be:0,x=E||X?Ke(E,X)*Be+f:0,x&&(_*=Math.abs(Math.cos(x*et))),r.svg&&(c-=v-(v*z+T*E),h-=T-(v*M+T*X))):(Fe=k[6],Xr=k[7],ct=k[8],ft=k[9],Le=k[10],be=k[11],c=k[12],h=k[13],d=k[14],S=Ke(Fe,Le),m=S*Be,S&&(w=Math.cos(-S),R=Math.sin(-S),q=V*w+ct*R,he=B*w+ft*R,Rt=Fe*w+Le*R,ct=V*-R+ct*w,ft=B*-R+ft*w,Le=Fe*-R+Le*w,be=Xr*-R+be*w,V=q,B=he,Fe=Rt),S=Ke(-E,Le),g=S*Be,S&&(w=Math.cos(-S),R=Math.sin(-S),q=z*w-ct*R,he=M*w-ft*R,Rt=E*w-Le*R,be=X*R+be*w,z=q,M=he,E=Rt),S=Ke(M,z),f=S*Be,S&&(w=Math.cos(S),R=Math.sin(S),q=z*w+M*R,he=V*w+B*R,M=M*w-z*R,B=B*w-V*R,z=q,V=he),m&&Math.abs(m)+Math.abs(f)>359.9&&(m=f=0,g=180-g),p=j(Math.sqrt(z*z+M*M+E*E)),_=j(Math.sqrt(B*B+Fe*Fe)),S=Ke(V,B),x=Math.abs(S)>2e-4?S*Be:0,y=be?1/(be<0?-be:be):0),r.svg&&(q=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!En(ve(e,F)),q&&e.setAttribute("transform",q))),Math.abs(x)>90&&Math.abs(x)<270&&(n?(p*=-1,x+=f<=0?180:-180,f+=f<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||r.uncache,r.x=c-((r.xPercent=c&&(!t&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+o,r.y=h-((r.yPercent=h&&(!t&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+o,r.z=d+o,r.scaleX=j(p),r.scaleY=j(_),r.rotation=j(f)+a,r.rotationX=j(m)+a,r.rotationY=j(g)+a,r.skewX=x+a,r.skewY=b+a,r.transformPerspective=y+o,(r.zOrigin=parseFloat(u.split(" ")[2])||!t&&r.zOrigin||0)&&(i[re]=Yt(u)),r.xOffset=r.yOffset=0,r.force3D=ae.force3D,r.renderTransform=r.svg?Lo:On?Dn:Io,r.uncache=0,r},Yt=function(e){return(e=e.split(" "))[0]+" "+e[1]},nr=function(e,t,r){var i=G(t);return j(parseFloat(t)+parseFloat(ze(e,"x",r+"px",i)))+i},Io=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Dn(e,t)},Ne="0deg",ht="0px",je=") ",Dn=function(e,t){var r=t||this,i=r.xPercent,n=r.yPercent,o=r.x,a=r.y,l=r.z,u=r.rotation,c=r.rotationY,h=r.rotationX,d=r.skewX,p=r.skewY,_=r.scaleX,f=r.scaleY,m=r.transformPerspective,g=r.force3D,x=r.target,b=r.zOrigin,y="",v=g==="auto"&&e&&e!==1||g===!0;if(b&&(h!==Ne||c!==Ne)){var T=parseFloat(c)*et,k=Math.sin(T),S=Math.cos(T),w;T=parseFloat(h)*et,w=Math.cos(T),o=nr(x,o,k*w*-b),a=nr(x,a,-Math.sin(T)*-b),l=nr(x,l,S*w*-b+b)}m!==ht&&(y+="perspective("+m+je),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),(v||o!==ht||a!==ht||l!==ht)&&(y+=l!==ht||v?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+je),u!==Ne&&(y+="rotate("+u+je),c!==Ne&&(y+="rotateY("+c+je),h!==Ne&&(y+="rotateX("+h+je),(d!==Ne||p!==Ne)&&(y+="skew("+d+", "+p+je),(_!==1||f!==1)&&(y+="scale("+_+", "+f+je),x.style[F]=y||"translate(0, 0)"},Lo=function(e,t){var r=t||this,i=r.xPercent,n=r.yPercent,o=r.x,a=r.y,l=r.rotation,u=r.skewX,c=r.skewY,h=r.scaleX,d=r.scaleY,p=r.target,_=r.xOrigin,f=r.yOrigin,m=r.xOffset,g=r.yOffset,x=r.forceCSS,b=parseFloat(o),y=parseFloat(a),v,T,k,S,w;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=et,u*=et,v=Math.cos(l)*h,T=Math.sin(l)*h,k=Math.sin(l-u)*-d,S=Math.cos(l-u)*d,u&&(c*=et,w=Math.tan(u-c),w=Math.sqrt(1+w*w),k*=w,S*=w,c&&(w=Math.tan(c),w=Math.sqrt(1+w*w),v*=w,T*=w)),v=j(v),T=j(T),k=j(k),S=j(S)):(v=h,S=d,T=k=0),(b&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(b=ze(p,"x",o,"px"),y=ze(p,"y",a,"px")),(_||f||m||g)&&(b=j(b+_-(_*v+f*k)+m),y=j(y+f-(_*T+f*S)+g)),(i||n)&&(w=p.getBBox(),b=j(b+i/100*w.width),y=j(y+n/100*w.height)),w="matrix("+v+","+T+","+k+","+S+","+b+","+y+")",p.setAttribute("transform",w),x&&(p.style[F]=w)},Fo=function(e,t,r,i,n){var o=360,a=Y(n),l=parseFloat(n)*(a&&~n.indexOf("rad")?Be:1),u=l-i,c=i+u+"deg",h,d;return a&&(h=n.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-360)),h==="cw"&&u<0?u=(u+o*li)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*li)%o-~~(u/o)*o)),e._pt=d=new te(e._pt,t,r,i,u,yo),d.e=c,d.u="deg",e._props.push(r),d},_i=function(e,t){for(var r in t)e[r]=t[r];return e},No=function(e,t,r){var i=_i({},r._gsap),n="perspective,force3D,transformOrigin,svgOrigin",o=r.style,a,l,u,c,h,d,p,_;i.svg?(u=r.getAttribute("transform"),r.setAttribute("transform",""),o[F]=t,a=St(r,1),We(r,F),r.setAttribute("transform",u)):(u=getComputedStyle(r)[F],o[F]=t,a=St(r,1),o[F]=u);for(l in Ce)u=i[l],c=a[l],u!==c&&n.indexOf(l)<0&&(p=G(u),_=G(c),h=p!==_?ze(r,l,u,_):parseFloat(u),d=parseFloat(c),e._pt=new te(e._pt,a,l,h,d-h,xr),e._pt.u=_||0,e._props.push(l));_i(a,i)};ee("padding,margin,Width,Radius",function(s,e){var t="Top",r="Right",i="Bottom",n="Left",o=(e<3?[t,r,i,n]:[t+n,t+r,i+r,i+n]).map(function(a){return e<2?s+a:"border"+a+s});qt[e>1?"border"+s:s]=function(a,l,u,c,h){var d,p;if(arguments.length<4)return d=o.map(function(_){return Te(a,_,u)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(c+"").split(" "),p={},o.forEach(function(_,f){return p[_]=d[f]=d[f]||d[(f-1)/2|0]}),a.init(l,p,h)}});var zn={name:"css",register:yr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,r,i,n){var o=this._props,a=e.style,l=r.vars.startAt,u,c,h,d,p,_,f,m,g,x,b,y,v,T,k,S;Ur||yr(),this.styles=this.styles||Pn(e),S=this.styles.props,this.tween=r;for(f in t)if(f!=="autoRound"&&(c=t[f],!(ne[f]&&mn(f,t,r,i,e,n)))){if(p=typeof c,_=qt[f],p==="function"&&(c=c.call(r,i,e,n),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=bt(c)),_)_(this,e,f,c,r)&&(k=1);else if(f.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(f)+"").trim(),c+="",Me.lastIndex=0,Me.test(u)||(m=G(u),g=G(c)),g?m!==g&&(u=ze(e,f,u,g)+g):m&&(c+=m),this.add(a,"setProperty",u,c,i,n,0,0,f),o.push(f),S.push(f,0,a[f]);else if(p!=="undefined"){if(l&&f in l?(u=typeof l[f]=="function"?l[f].call(r,i,e,n):l[f],Y(u)&&~u.indexOf("random(")&&(u=bt(u)),G(u+"")||u==="auto"||(u+=ae.units[f]||G(Te(e,f))||""),(u+"").charAt(1)==="="&&(u=Te(e,f))):u=Te(e,f),d=parseFloat(u),x=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),x&&(c=c.substr(2)),h=parseFloat(c),f in _e&&(f==="autoAlpha"&&(d===1&&Te(e,"visibility")==="hidden"&&h&&(d=0),S.push("visibility",0,a.visibility),Re(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),f!=="scale"&&f!=="transform"&&(f=_e[f],~f.indexOf(",")&&(f=f.split(",")[0]))),b=f in Ce,b){if(this.styles.save(f),y||(v=e._gsap,v.renderTransform&&!t.parseTransform||St(e,t.parseTransform),T=t.smoothOrigin!==!1&&v.smooth,y=this._pt=new te(this._pt,a,F,0,1,v.renderTransform,v,0,-1),y.dep=1),f==="scale")this._pt=new te(this._pt,v,"scaleY",v.scaleY,(x?Ze(v.scaleY,x+h):h)-v.scaleY||0,xr),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){S.push(re,0,a[re]),c=Do(c),v.svg?br(e,c,0,T,0,this):(g=parseFloat(c.split(" ")[2])||0,g!==v.zOrigin&&Re(this,v,"zOrigin",v.zOrigin,g),Re(this,a,f,Yt(u),Yt(c)));continue}else if(f==="svgOrigin"){br(e,c,1,T,0,this);continue}else if(f in Mn){Fo(this,v,f,d,x?Ze(d,x+c):c);continue}else if(f==="smoothOrigin"){Re(this,v,"smooth",v.smooth,c);continue}else if(f==="force3D"){v[f]=c;continue}else if(f==="transform"){No(this,c,e);continue}}else f in a||(f=at(f)||f);if(b||(h||h===0)&&(d||d===0)&&!vo.test(c)&&f in a)m=(u+"").substr((d+"").length),h||(h=0),g=G(c)||(f in ae.units?ae.units[f]:m),m!==g&&(d=ze(e,f,u,g)),this._pt=new te(this._pt,b?v:a,f,d,(x?Ze(d,x+h):h)-d,!b&&(g==="px"||f==="zIndex")&&t.autoRound!==!1?wo:xr),this._pt.u=g||0,m!==g&&g!=="%"&&(this._pt.b=u,this._pt.r=bo);else if(f in a)Eo.call(this,e,f,u,x?x+c:c);else if(f in e)this.add(e,f,u||e[f],x?x+c:c,i,n);else if(f!=="parseTransform"){Er(f,c);continue}b||(f in a?S.push(f,0,a[f]):typeof e[f]=="function"?S.push(f,2,e[f]()):S.push(f,1,u||e[f])),o.push(f)}}k&&wn(this)},render:function(e,t){if(t.tween._time||!$r())for(var r=t._pt;r;)r.r(e,r.d),r=r._next;else t.styles.revert()},get:Te,aliases:_e,getSetter:function(e,t,r){var i=_e[t];return i&&i.indexOf(",")<0&&(t=i),t in Ce&&t!==re&&(e._gsap.x||Te(e,"x"))?r&&ai===r?t==="scale"?Co:So:(ai=r||{})&&(t==="scale"?Po:Oo):e.style&&!Rr(e.style[t])?To:~t.indexOf("-")?ko:jr(e,t)},core:{_removeProperty:We,_getMatrix:qr}};ie.utils.checkPrefix=at;ie.core.getStyleSaver=Pn;(function(s,e,t,r){var i=ee(s+","+e+","+t,function(n){Ce[n]=1});ee(e,function(n){ae.units[n]="deg",Mn[n]=1}),_e[i[13]]=s+","+e,ee(r,function(n){var o=n.split(":");_e[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ee("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ae.units[s]="px"});ie.registerPlugin(zn);var lt=ie.registerPlugin(zn)||ie;lt.core.Tween;/*!
 * ScrollToPlugin 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var K,In,ke,me,Ee,Ln,tt,Mt,Fn=function(){return typeof window<"u"},Nn=function(){return K||Fn()&&(K=window.gsap)&&K.registerPlugin&&K},jn=function(e){return typeof e=="string"},mi=function(e){return typeof e=="function"},Ct=function(e,t){var r=t==="x"?"Width":"Height",i="scroll"+r,n="client"+r;return e===ke||e===me||e===Ee?Math.max(me[i],Ee[i])-(ke["inner"+r]||me[n]||Ee[n]):e[i]-e["offset"+r]},Pt=function(e,t){var r="scroll"+(t==="x"?"Left":"Top");return e===ke&&(e.pageXOffset!=null?r="page"+t.toUpperCase()+"Offset":e=me[r]!=null?me:Ee),function(){return e[r]}},jo=function(e,t,r,i){if(mi(e)&&(e=e(t,r,i)),typeof e!="object")return jn(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var n={},o;for(o in e)n[o]=o!=="onAutoKill"&&mi(e[o])?e[o](t,r,i):e[o];return n},Bn=function(e,t){if(e=Ln(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var r=e.getBoundingClientRect(),i=!t||t===ke||t===Ee,n=i?{top:me.clientTop-(ke.pageYOffset||me.scrollTop||Ee.scrollTop||0),left:me.clientLeft-(ke.pageXOffset||me.scrollLeft||Ee.scrollLeft||0)}:t.getBoundingClientRect(),o={x:r.left-n.left,y:r.top-n.top};return!i&&t&&(o.x+=Pt(t,"x")(),o.y+=Pt(t,"y")()),o},gi=function(e,t,r,i,n){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-n:jn(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-n:e==="max"?Ct(t,r)-n:Math.min(Ct(t,r),Bn(e,t)[r]-n)},wr=function(){K=Nn(),Fn()&&K&&typeof document<"u"&&document.body&&(ke=window,Ee=document.body,me=document.documentElement,Ln=K.utils.toArray,K.config({autoKillThreshold:7}),tt=K.config(),In=1)},ut={version:"3.12.7",name:"scrollTo",rawVars:1,register:function(e){K=e,wr()},init:function(e,t,r,i,n){In||wr();var o=this,a=K.getProperty(e,"scrollSnapType");o.isWin=e===ke,o.target=e,o.tween=r,t=jo(t,i,e,n),o.vars=t,o.autoKill=!!("autoKill"in t?t:tt).autoKill,o.getX=Pt(e,"x"),o.getY=Pt(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),Mt||(Mt=K.core.globals().ScrollTrigger),K.getProperty(e,"scrollBehavior")==="smooth"&&K.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,gi(t.x,e,"x",o.x,t.offsetX||0),i,n),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,gi(t.y,e,"y",o.y,t.offsetY||0),i,n),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var r=t._pt,i=t.target,n=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,u=t.isWin,c=t.snap,h=t.snapInline,d,p,_,f,m;r;)r.r(e,r.d),r=r._next;d=u||!t.skipX?t.getX():a,p=u||!t.skipY?t.getY():l,_=p-l,f=d-a,m=tt.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(f>m||f<-m)&&d<Ct(i,"x")&&(t.skipX=1),!t.skipY&&(_>m||_<-m)&&p<Ct(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(n.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(n,t.vars.onAutoKillParams||[]))),u?ke.scrollTo(t.skipX?d:t.x,t.skipY?p:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),c&&(e===1||e===0)&&(p=i.scrollTop,d=i.scrollLeft,h?i.style.scrollSnapType=h:i.style.removeProperty("scroll-snap-type"),i.scrollTop=p+1,i.scrollLeft=d+1,i.scrollTop=p,i.scrollLeft=d),t.xPrev=t.x,t.yPrev=t.y,Mt&&Mt.update()},kill:function(e){var t=e==="scrollTo",r=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),r>-1&&this._props.splice(r,1),!this._props.length}};ut.max=Ct;ut.getOffset=Bn;ut.buildGetter=Pt;ut.config=function(s){tt||wr()||(tt=K.config());for(var e in s)tt[e]=s[e]};Nn()&&K.registerPlugin(ut);lt.registerPlugin(ut);function Un(s){const e=document.getElementById(s);e?lt.to(window,{scrollTo:{y:e.offsetTop-50,autoKill:!1},duration:1,ease:"power1.inOut"}):console.warn(`Elemento con ID '${s}' non trovato.`)}const Bo=D.div`
  position: fixed;
  z-index: ${s=>s.zIndex};
  display: flex;
  flex-direction: column;
  pointer-events: none;
  
  ${s=>{switch(s.position){case"top-left":return`
          top: 1rem;
          left: 1rem;
          align-items: flex-start;
        `;case"top-center":return`
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          align-items: center;
        `;case"bottom-left":return`
          bottom: 1rem;
          left: 1rem;
          align-items: flex-start;
        `;case"bottom-right":return`
          bottom: 1rem;
          right: 1rem;
          align-items: flex-end;
        `;case"bottom-center":return`
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          align-items: center;
        `;case"top-right":default:return`
          top: 1rem;
          right: 1rem;
          align-items: flex-end;
        `}}}
  
  > * {
    margin-bottom: 0.5rem;
    pointer-events: auto;
  }
`,$n=({position:s="top-right",zIndex:e=9999,className:t})=>C.jsx(Bo,{position:s,zIndex:e,className:t});$n.__docgenInfo={description:`Toaster component for displaying toast notifications

Features:
- Customizable position
- Stacked notifications
- Non-intrusive design`,methods:[],displayName:"Toaster",props:{position:{required:!1,tsType:{name:"union",raw:"'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'",elements:[{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'bottom-center'"}]},description:"Optional custom position",defaultValue:{value:"'top-right'",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"Optional custom z-index",defaultValue:{value:"9999",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};const Vn=P.createContext(void 0);function Uo(s){const e=t=>{var p;const r=Pr(),i=ds(),n=P.useRef(null),o=qn("(max-width: 768px)"),[a,l]=P.useState(t.background),[u,c]=P.useState(void 0);P.useEffect(()=>{l(t.background)},[(p=t==null?void 0:t.location)==null?void 0:p.pathname]);function h(_){n.current&&lt.to(n.current,{x:_.clientX-50,y:_.clientY-50,duration:.1,ease:"power1.out"})}function d(_,f){f?(i(_.replace("/","").split("/").pop()||""),Un(_.replace("/","").split("/").pop()||"")):i(_,{replace:!0})}return P.useEffect(()=>{if(!o)return document.addEventListener("mousemove",h),()=>document.removeEventListener("mousemove",h)},[o]),C.jsxs(Vn.Provider,{value:{props:{...t,background:a,location:r,navigate:i},handleNavigationAndScroll:d,setBackground:l,footer:u,setFooter:c},children:[C.jsx(s,{...t}),C.jsx($n,{})]})};return e.displayName=`withTransformerLayout(${s.displayName||s.name||"Transformer"})`,e}function qn(s){const[e,t]=P.useState(!1);return P.useEffect(()=>{const r=window.matchMedia(s);t(r.matches);const i=n=>t(n.matches);return r.addEventListener("change",i),()=>r.removeEventListener("change",i)},[s]),e}function Yn(s){const e=Pr(),t=P.useRef(null),r=qn("(max-width: 768px)");return P.useEffect(()=>{if(s){const i=()=>setTimeout(()=>Un(e.pathname.split("/").pop()||""),1e3);if(document.readyState==="complete")i();else return window.addEventListener("load",i),()=>window.removeEventListener("load",i)}},[]),{isMobileRef:r,circleRef:t}}const Yr=()=>{const s=P.useContext(Vn);if(!s)throw new Error("useDashboard must be used within Dashboard page");return s},$o=D.div`
  position: fixed;
  z-index: 4;
  width: 100%;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  @media (prefers-color-scheme: dark) {
    background-color: #141414;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
`,xi=D.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  gap: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 64px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`,Vo=D.div`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 64px;
  padding: 0 20px;
  color: rgba(0, 0, 0, 0.65);
  transition: color 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    color: #1890ff;
  }
  
  &.active {
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
  }
  
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.65);
    
    &:hover {
      color: #1890ff;
    }
    
    &.active {
      color: #1890ff;
      border-bottom: 2px solid #1890ff;
    }
  }
`,vi=D.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
  
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.85);
  }
`,qo=D.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  padding: 4px 0;
  
  @media (prefers-color-scheme: dark) {
    background-color: #1f1f1f;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.48), 0 6px 16px 0 rgba(0, 0, 0, 0.32), 0 9px 28px 8px rgba(0, 0, 0, 0.2);
  }
`,Yo=D.div`
  padding: 5px 12px;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.65);
  transition: all 0.3s;
  
  &:hover {
    background-color: #f5f5f5;
    color: rgba(0, 0, 0, 0.85);
  }
  
  &.active {
    background-color: #e6f7ff;
    color: #1890ff;
  }
  
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.65);
    
    &:hover {
      background-color: #303030;
      color: rgba(255, 255, 255, 0.85);
    }
    
    &.active {
      background-color: #111d2c;
      color: #1890ff;
    }
  }
`,Xo=D.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Wo=D.div`
  display: flex;
  padding: 0 50px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  
  @media (prefers-color-scheme: dark) {
    background-color: #141414;
    border-bottom: 1px solid #303030;
  }
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`,Go=D.div`
  padding: 12px 0;
  margin-right: 32px;
  cursor: pointer;
  font-size: 14px;
  color: ${s=>s.isActive?"#1890ff":"rgba(0, 0, 0, 0.65)"};
  border-bottom: 2px solid ${s=>s.isActive?"#1890ff":"transparent"};
  transition: all 0.3s;
  
  &:hover {
    color: #40a9ff;
  }
  
  @media (prefers-color-scheme: dark) {
    color: ${s=>s.isActive?"#1890ff":"rgba(255, 255, 255, 0.65)"};
    
    &:hover {
      color: #40a9ff;
    }
  }
`,Ko=D.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 10;
`,Ho=D.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 256px;
  height: 100%;
  background-color: #fff;
  z-index: 11;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
  
  @media (prefers-color-scheme: dark) {
    background-color: #141414;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.45);
  }
`,Qo=D.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`,yi=D.div`
  padding: 12px 24px;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  color: ${s=>s.isActive?"#1890ff":"rgba(0, 0, 0, 0.85)"};
  background-color: ${s=>s.isActive?"#e6f7ff":"transparent"};
  transition: all 0.3s;
  
  &:hover {
    color: #1890ff;
    background-color: #e6f7ff;
  }
  
  @media (prefers-color-scheme: dark) {
    color: ${s=>s.isActive?"#1890ff":"rgba(255, 255, 255, 0.85)"};
    background-color: ${s=>s.isActive?"#111d2c":"transparent"};
    
    &:hover {
      color: #1890ff;
      background-color: #111d2c;
    }
  }
`,sr=D.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 2px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;
  color: rgba(0, 0, 0, 0.65);
  
  &:hover {
    color: #1890ff;
    background-color: rgba(0, 0, 0, 0.04);
  }
  
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.65);
    
    &:hover {
      color: #1890ff;
      background-color: rgba(255, 255, 255, 0.04);
    }
  }
`,Zo=D.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid ${s=>s.variant==="secondary"?"#d9d9d9":"#1890ff"};
  background-color: ${s=>s.variant==="secondary"?"transparent":"#1890ff"};
  color: ${s=>s.variant==="secondary"?"rgba(0, 0, 0, 0.65)":"#fff"};
  
  &:hover {
    border-color: ${s=>(s.variant==="secondary","#40a9ff")};
    background-color: ${s=>s.variant==="secondary"?"transparent":"#40a9ff"};
    color: ${s=>s.variant==="secondary"?"#40a9ff":"#fff"};
  }
  
  @media (prefers-color-scheme: dark) {
    border-color: ${s=>s.variant==="secondary"?"#434343":"#1890ff"};
    color: ${s=>s.variant==="secondary"?"rgba(255, 255, 255, 0.65)":"#fff"};
    
    &:hover {
      border-color: ${s=>(s.variant==="secondary","#40a9ff")};
      color: ${s=>s.variant==="secondary"?"#40a9ff":"#fff"};
    }
  }
`,Xn=()=>{const{props:s}=Yr(),{navbarItems:e,navbarSubItems:t,logo:r,branding:i,navigationScroll:n}=s,{isMobileRef:o}=Yn(),[a,l]=P.useState(!1),[u,c]=P.useState(null),h=(_,f)=>{console.log(`Navigating to: ${_}, useScroll: ${f}`)},d=()=>i!=null&&i.icon||i!=null&&i.text?C.jsxs(vi,{children:[(i==null?void 0:i.icon)&&i.icon,(i==null?void 0:i.text)&&C.jsx("span",{children:i.text})]}):r?C.jsx(vi,{children:C.jsx("img",{src:r,alt:"Logo",style:{height:32}})}):null,p=_=>window.location.pathname.includes(_);return C.jsx($o,{children:o?C.jsxs(xi,{children:[d(),C.jsx(sr,{"aria-label":"Menu",onClick:()=>l(!0),children:C.jsx(Jn,{size:20})}),a&&C.jsxs(C.Fragment,{children:[C.jsx(Ko,{onClick:()=>l(!1)}),C.jsxs(Ho,{children:[C.jsx("div",{style:{display:"flex",justifyContent:"flex-end",padding:"16px"},children:C.jsx(sr,{onClick:()=>l(!1),children:C.jsx(Zn,{size:20})})}),C.jsxs(Qo,{children:[e&&e.map(_=>C.jsxs(yi,{isActive:p(_.value),onClick:()=>{h(_.value,n),l(!1)},children:[_.icon," ",_.label]},_.value)),t&&t.map(_=>C.jsx(yi,{isActive:p(_.value),onClick:()=>{h(_.value,n),l(!1)},children:_.label},_.value))]})]})]})]}):C.jsxs(C.Fragment,{children:[C.jsxs(xi,{children:[d(),e&&C.jsx("div",{style:{display:"flex"},children:e.map(_=>C.jsxs("div",{style:{position:"relative"},onMouseEnter:()=>c(_.value),onMouseLeave:()=>c(null),children:[C.jsxs(Vo,{className:p(_.value)?"active":"",onClick:()=>h(_.value,n),children:[_.icon," ",_.label]}),_.children&&u===_.value&&C.jsx(qo,{children:_.children.map(f=>C.jsx(Yo,{className:p(f.value)?"active":"",onClick:()=>h(f.value,n),children:f.label},f.value))})]},_.value))}),C.jsxs(Xo,{children:[C.jsx(sr,{"aria-label":"Language",children:C.jsx(Qn,{size:20})}),C.jsx(Zo,{variant:"secondary",children:"Toggle Theme"})]})]}),t&&t.length>0&&C.jsx(Wo,{children:t.map(_=>C.jsx(Go,{isActive:p(_.value),onClick:()=>h(_.value,n),children:_.label},_.value))})]})})};Xn.__docgenInfo={description:`Header component
Navigation and branding header with Ant Design styling`,methods:[],displayName:"Header"};const bi=D.div`
  position: relative;
  z-index: 3;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-top: 64px; /* Altezza dell'header */
  
  @media (max-width: 768px) {
    padding: 16px;
  }
  
  @media (min-width: 992px) {
    padding: 24px 50px;
  }
  
  @media (min-width: 1200px) {
    padding: 24px 10%;
  }
`,wi=D.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
  padding: 24px;
  margin-bottom: 24px;
  width: 100%;
  flex: 1;
  
  @media (prefers-color-scheme: dark) {
    background-color: #141414;
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.32), 0 3px 6px 0 rgba(0, 0, 0, 0.24), 0 5px 12px 4px rgba(0, 0, 0, 0.18);
  }
`,Jo=D.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
  padding: 24px;
  margin-bottom: 24px;
  transition: all 0.3s;
  
  &:hover {
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.2), 0 6px 16px 0 rgba(0, 0, 0, 0.14), 0 9px 28px 8px rgba(0, 0, 0, 0.12);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: #1f1f1f;
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.32), 0 3px 6px 0 rgba(0, 0, 0, 0.24), 0 5px 12px 4px rgba(0, 0, 0, 0.18);
    
    &:hover {
      box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.36), 0 6px 16px 0 rgba(0, 0, 0, 0.28), 0 9px 28px 8px rgba(0, 0, 0, 0.24);
    }
  }
`,ea=D.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  width: 100%;
`,Et=({children:s,title:e})=>C.jsxs(Jo,{children:[e&&C.jsx("h3",{style:{marginTop:0,marginBottom:16},children:e}),s]}),Wn=()=>{const{props:s}=Yr(),{children:e}=s,t=P.useRef(null),r=P.useRef(null);return P.useEffect(()=>{t.current&&r.current&&(lt.fromTo(t.current,{opacity:0},{opacity:1,duration:.5,ease:"power2.out"}),lt.fromTo(r.current,{y:20,opacity:0},{y:0,opacity:1,duration:.7,delay:.2,ease:"power3.out"}))},[]),e&&Hn.isValidElement(e)?C.jsx(bi,{ref:t,children:C.jsx(wi,{ref:r,children:e})}):C.jsx(bi,{ref:t,children:C.jsx(wi,{ref:r,children:e?C.jsx(Et,{children:e}):C.jsxs(ea,{children:[C.jsx(Et,{title:"Benvenuto",children:"Contenuto di esempio in stile Ant Design"}),C.jsx(Et,{title:"Informazioni",children:"Questo è un esempio di layout con card in stile Ant Design"}),C.jsx(Et,{title:"Funzionalità",children:"Usa questo layout per organizzare i tuoi contenuti"})]})})})};Wn.__docgenInfo={description:`Componente Body
Contenitore principale che mostra il contenuto dell'applicazione in stile Ant Design`,methods:[],displayName:"Body"};const ta=D.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${s=>{var e;return((e=s.theme.colors)==null?void 0:e.background)||"#f0f2f5"}};
  color: ${s=>{var e;return((e=s.theme.colors)==null?void 0:e.textPrimary)||"rgba(0, 0, 0, 0.85)"}};
  font-family: ${s=>{var e;return((e=s.theme.typography)==null?void 0:e.fontFamily)||'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}};
  transition: all 0.3s ease-in-out;
  
  @media (prefers-color-scheme: dark) {
    background-color: ${s=>{var e;return((e=s.theme.colors)==null?void 0:e.backgroundDark)||"#141414"}};
    color: ${s=>{var e;return((e=s.theme.colors)==null?void 0:e.textPrimaryDark)||"rgba(255, 255, 255, 0.85)"}};
  }
`,ra=D.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  filter: ${s=>s.opacity?`blur(${s.opacity}px)`:void 0};
  background-color: ${s=>{var e;return((e=s.theme.colors)==null?void 0:e.background)||"#f0f2f5"}};
  background-image: ${s=>s.image?`url(${s.image})`:"none"};
  opacity: 0.8;
  transition: all 0.5s ease;
  
  @media (prefers-color-scheme: dark) {
    background-color: ${s=>{var e;return((e=s.theme.colors)==null?void 0:e.backgroundDark)||"#141414"}};
    background-image: ${s=>s.imageDark?`url(${s.imageDark})`:"none"};
  }
`,ia=D.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle, ${s=>{var e;return`${((e=s.theme.colors)==null?void 0:e.primary)||"#1890ff"}40`}} 0%, transparent 70%);
  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  transform: translate(-50%, -50%) scale(1);
  
  &:active {
    transform: translate(-50%, -50%) scale(0.9);
  }
  
  @media (prefers-color-scheme: dark) {
    background: radial-gradient(circle, ${s=>{var e;return`${((e=s.theme.colors)==null?void 0:e.primary)||"#1890ff"}30`}} 0%, transparent 70%);
  }
`,na=D.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  border-radius: ${s=>{var e;return((e=s.theme.borderRadius)==null?void 0:e.lg)||"8px"}};
  overflow: hidden;
  box-shadow: ${s=>{var e;return((e=s.theme.shadows)==null?void 0:e.sm)||"0 2px 8px rgba(0, 0, 0, 0.15)"}};
`,sa=D.div`
  display: flex;
  justify-content: center;
  padding: 24px 50px;
  color: ${s=>{var e;return((e=s.theme.colors)==null?void 0:e.textSecondary)||"rgba(0, 0, 0, 0.65)"}};
  background-color: ${s=>{var e;return((e=s.theme.colors)==null?void 0:e.background)||"#f0f2f5"}};
  border-top: 1px solid ${s=>{var e;return((e=s.theme.colors)==null?void 0:e.border)||"#f0f0f0"}};
  border-radius: 0 0 ${s=>{var e;return((e=s.theme.borderRadius)==null?void 0:e.lg)||"8px"}} ${s=>{var e;return((e=s.theme.borderRadius)==null?void 0:e.lg)||"8px"}};
  transition: all 0.3s ease;
  
  @media (prefers-color-scheme: dark) {
    background-color: ${s=>{var e;return((e=s.theme.colors)==null?void 0:e.backgroundDark)||"#1f1f1f"}};
    border-top: 1px solid ${s=>{var e;return((e=s.theme.colors)==null?void 0:e.borderDark)||"#303030"}};
    color: ${s=>{var e;return((e=s.theme.colors)==null?void 0:e.textSecondaryDark)||"rgba(255, 255, 255, 0.65)"}};
  }
`,Gn=()=>{const{props:s,footer:e}=Yr(),{background:t,navigationScroll:r}=s,{isMobileRef:i,circleRef:n}=Yn(r);return P.useEffect(()=>{const o=document.querySelector(".transformer-main");o&&(o.style.opacity="0",o.style.transform="translateY(20px)",setTimeout(()=>{o.style.opacity="1",o.style.transform="translateY(0)"},100))},[]),C.jsxs(ta,{className:"transformer-main",style:{opacity:0,transition:"opacity 0.5s ease, transform 0.5s ease"},children:[t&&C.jsx(ra,{opacity:t.opacity,image:t.image,imageDark:t.imageDark}),!i&&C.jsx(ia,{ref:n}),C.jsxs(na,{children:[C.jsx(Xn,{}),C.jsx(Wn,{}),e&&C.jsx(sa,{children:e})]})]})};Gn.__docgenInfo={description:`Componente Transformer
Layout principale dell'applicazione che fornisce struttura e navigazione
Styled according to Ant Design 2025 principles with modern, rounded aesthetics`,methods:[],displayName:"Transformer",props:{children:{required:!1,tsType:{name:"ReactElement"},description:""},navigationScroll:{required:!1,tsType:{name:"boolean"},description:""},navbarItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    icon?: ReactElement | string;
    label: string; // Etichetta visibile dell'elemento di navigazione.
    value: string; // Valore o URL associato all'elemento.
    group?: string;
    onClick?: () => void; // Funzione callback da eseguire al click
    children?: NavbarItem[]; // Sottomenu (per dropdown in stile Ant Design)
}`,signature:{properties:[{key:"icon",value:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}],required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"group",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"children",value:{name:"Array",elements:[{name:"NavbarItem"}],raw:"NavbarItem[]",required:!1}}]}}],raw:"Array<NavbarItem>"},description:""},navbarSubItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    icon?: ReactElement | string; // Icona associata all'elemento secondario, può essere un ReactElement o una stringa (es. URL).
    label: string; // Etichetta visibile dell'elemento secondario.
    value: string; // Valore o URL associato all'elemento secondario.
    group?: string[];
}`,signature:{properties:[{key:"icon",value:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}],required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"group",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Array<NavbarSubItem>"},description:""},logo:{required:!1,tsType:{name:"string"},description:""},background:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    opacity?: number;
    image?: string;
    imageDark?: string;
}`,signature:{properties:[{key:"opacity",value:{name:"number",required:!1}},{key:"image",value:{name:"string",required:!1}},{key:"imageDark",value:{name:"string",required:!1}}]}},description:""},location:{required:!1,tsType:{name:"Location"},description:""},navigate:{required:!1,tsType:{name:"NavigateFunction"},description:""},branding:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    icon?: ReactElement;
    text?: string;
}`,signature:{properties:[{key:"icon",value:{name:"ReactElement",required:!1}},{key:"text",value:{name:"string",required:!1}}]}},description:""}}};const oa=Uo(Gn),pa={title:"Pages/Transformer",component:oa,parameters:{layout:"fullscreen"},decorators:[s=>C.jsx(Ts,{children:C.jsx("div",{style:{height:"100vh"},children:C.jsx(s,{})})})],tags:["autodocs"]},Dt={args:{children:C.jsx("div",{id:"content",style:{padding:"2rem",textAlign:"center"},children:"Content goes here"}),navigationScroll:!0,navbarItems:[{label:"Home",value:"/",group:"main"},{label:"About",value:"/about",group:"main"},{label:"Services",value:"/services",group:"services"},{label:"Contact",value:"/contact",group:"main"}],navbarSubItems:[{label:"Service 1",value:"/services/1",group:["services"]},{label:"Service 2",value:"/services/2",group:["services"]},{label:"Service 3",value:"/services/3",group:["services"]}],logo:"https://via.placeholder.com/100",background:{opacity:5,image:"https://source.unsplash.com/random/1920x1080/?nature",imageDark:"https://source.unsplash.com/random/1920x1080/?night"}}},zt={args:{children:C.jsx("div",{id:"content",style:{padding:"2rem",textAlign:"center"},children:"Content goes here"}),navigationScroll:!0,navbarItems:[{label:"Home",value:"/",group:"main"},{label:"About",value:"/about",group:"main"},{label:"Contact",value:"/contact",group:"main"}],logo:"https://via.placeholder.com/100"}};var Ti,ki,Si;Dt.parameters={...Dt.parameters,docs:{...(Ti=Dt.parameters)==null?void 0:Ti.docs,source:{originalSource:`{
  args: {
    children: <div id="content" style={{
      padding: '2rem',
      textAlign: 'center'
    }}>Content goes here</div>,
    navigationScroll: true,
    navbarItems: [{
      label: 'Home',
      value: '/',
      group: 'main'
    }, {
      label: 'About',
      value: '/about',
      group: 'main'
    }, {
      label: 'Services',
      value: '/services',
      group: 'services'
    }, {
      label: 'Contact',
      value: '/contact',
      group: 'main'
    }],
    navbarSubItems: [{
      label: 'Service 1',
      value: '/services/1',
      group: ['services']
    }, {
      label: 'Service 2',
      value: '/services/2',
      group: ['services']
    }, {
      label: 'Service 3',
      value: '/services/3',
      group: ['services']
    }],
    logo: 'https://via.placeholder.com/100',
    background: {
      opacity: 5,
      image: 'https://source.unsplash.com/random/1920x1080/?nature',
      imageDark: 'https://source.unsplash.com/random/1920x1080/?night'
    }
  }
}`,...(Si=(ki=Dt.parameters)==null?void 0:ki.docs)==null?void 0:Si.source}}};var Ci,Pi,Oi;zt.parameters={...zt.parameters,docs:{...(Ci=zt.parameters)==null?void 0:Ci.docs,source:{originalSource:`{
  args: {
    children: <div id="content" style={{
      padding: '2rem',
      textAlign: 'center'
    }}>Content goes here</div>,
    navigationScroll: true,
    navbarItems: [{
      label: 'Home',
      value: '/',
      group: 'main'
    }, {
      label: 'About',
      value: '/about',
      group: 'main'
    }, {
      label: 'Contact',
      value: '/contact',
      group: 'main'
    }],
    logo: 'https://via.placeholder.com/100'
  }
}`,...(Oi=(Pi=zt.parameters)==null?void 0:Pi.docs)==null?void 0:Oi.source}}};const _a=["Default","WithoutBackground"];export{Dt as Default,zt as WithoutBackground,_a as __namedExportsOrder,pa as default};
