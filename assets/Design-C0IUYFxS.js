function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Carousel-_q86yhPW.js","assets/index-BGskwFph.js","assets/index-K_NdsuOR.css","assets/index-DNoLPahG.js","assets/index.esm-DszsPB7b.js","assets/design-CV7vazr3.js","assets/motion-Dq5P8aRQ.js","assets/Card-Dhy4t_pN.js","assets/Carousel-24XLDVjc.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as S,t as W,n as V,v as R,w as g,R as m,I as z,f as L,u as M,x as T,B as q,y as A,z as D,a as H,c as J,r as p,_ as K,e as Q,W as U,j as s,O as X,A as Y,o as Z}from"./index-BGskwFph.js";import{H as k,a as ee}from"./index.esm-DszsPB7b.js";import{D as y}from"./design-CV7vazr3.js";import{m as N}from"./motion-Dq5P8aRQ.js";import{C as se}from"./Card-Dhy4t_pN.js";function te(e,t){return e in t.breakpoints?S(t.breakpoints[e]):S(e)}function F(e,t){const o=e.map(n=>({value:n,px:te(n,t)}));return o.sort((n,c)=>n.px-c.px),o}function j(e){return typeof e=="object"&&e!==null?"base"in e?e.base:void 0:e}const[oe,I]=W("Grid component was not found in tree"),_=(e,t)=>e==="content"?"auto":e==="auto"?"0rem":e?`${100/(t/e)}%`:void 0,P=(e,t,o)=>o||e==="auto"?"100%":e==="content"?"unset":_(e,t),$=(e,t)=>{if(e)return e==="auto"||t?"1":"auto"},O=(e,t)=>e===0?"0":e?`${100/(t/e)}%`:void 0;function re({span:e,order:t,offset:o,selector:n}){var v;const c=V(),r=I(),i=j(e)===void 0?12:j(e),d=R({"--col-order":(v=j(t))==null?void 0:v.toString(),"--col-flex-grow":$(i,r.grow),"--col-flex-basis":_(i,r.columns),"--col-width":i==="content"?"auto":void 0,"--col-max-width":P(i,r.columns,r.grow),"--col-offset":O(j(o),r.columns)}),u=g(c.breakpoints).reduce((a,l)=>{var w;return a[l]||(a[l]={}),typeof t=="object"&&t[l]!==void 0&&(a[l]["--col-order"]=(w=t[l])==null?void 0:w.toString()),typeof e=="object"&&e[l]!==void 0&&(a[l]["--col-flex-grow"]=$(e[l],r.grow),a[l]["--col-flex-basis"]=_(e[l],r.columns),a[l]["--col-width"]=e[l]==="content"?"auto":void 0,a[l]["--col-max-width"]=P(e[l],r.columns,r.grow)),typeof o=="object"&&o[l]!==void 0&&(a[l]["--col-offset"]=O(o[l],r.columns)),a},{}),h=F(g(u),c).filter(a=>g(u[a.value]).length>0).map(a=>({query:`(min-width: ${c.breakpoints[a.value]})`,styles:u[a.value]}));return m.createElement(z,{styles:d,media:h,selector:n})}var E={root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"};const le={span:12},B=L((e,t)=>{const o=M("GridCol",le,e),{classNames:n,className:c,style:r,styles:f,vars:i,span:d,order:u,offset:C,...h}=o,v=I(),a=T();return m.createElement(m.Fragment,null,m.createElement(re,{selector:`.${a}`,span:d,order:u,offset:C}),m.createElement(q,{ref:t,...v.getStyles("col",{className:A(c,a),style:r,classNames:n,styles:f}),...h}))});B.classes=E;B.displayName="@mantine/core/GridCol";function ne({gutter:e,selector:t}){const o=V(),n=R({"--grid-gutter":D(j(e))}),c=g(o.breakpoints).reduce((i,d)=>(i[d]||(i[d]={}),typeof e=="object"&&e[d]!==void 0&&(i[d]["--grid-gutter"]=D(e[d])),i),{}),f=F(g(c),o).filter(i=>g(c[i.value]).length>0).map(i=>({query:`(min-width: ${o.breakpoints[i.value]})`,styles:c[i.value]}));return m.createElement(z,{styles:n,media:f,selector:t})}const ae={gutter:"md",grow:!1,columns:12},ie=J((e,{justify:t,align:o,overflow:n})=>({root:{"--grid-justify":t,"--grid-align":o,"--grid-overflow":n}})),x=L((e,t)=>{const o=M("Grid",ae,e),{classNames:n,className:c,style:r,styles:f,unstyled:i,vars:d,grow:u,gutter:C,columns:h,align:v,justify:a,children:l,...w}=o,b=H({name:"Grid",classes:E,props:o,className:c,style:r,classNames:n,styles:f,unstyled:i,vars:d,varsResolver:ie}),G=T();return m.createElement(oe,{value:{getStyles:b,grow:u,columns:h}},m.createElement(ne,{selector:`.${G}`,...o}),m.createElement(q,{ref:t,...b("root",{className:G}),...w},m.createElement("div",{...b("inner")},l)))});x.classes=E;x.displayName="@mantine/core/Grid";x.Col=B;const ce=p.lazy(()=>K(()=>import("./Carousel-_q86yhPW.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])));function de(){window.scrollTo(0,0);const e=Q().pathname,[t,o]=p.useState(0),n=p.useContext(U);return p.useEffect(()=>{e==="/"?document.body.classList.add("overflow-y-hidden"):document.body.classList.remove("overflow-y-hidden")}),s.jsxs(s.Fragment,{children:[s.jsx(k,{children:s.jsx(ee,{children:s.jsx("title",{children:"Imam | Design"})})}),s.jsx("main",{children:s.jsxs("div",{className:"md:max-w-4xl xl:max-w-6xl mx-auto px-5",children:[s.jsx(N.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.2},className:"text-center pb-5 text-2xl xl:text-3xl pt-2 font-bold uppercase",children:s.jsx("h1",{children:"My Design"})}),s.jsxs(x,{justify:"center",children:[s.jsx(x.Col,{span:{sm:"content"},order:{base:3,lg:1},children:s.jsx(N.div,{initial:n<1284?{opacity:0,x:60}:{opacity:0,x:-60},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},className:"flex lg:flex-col justify-center flex-wrap gap-3",children:y.map((c,r)=>s.jsx(se,{withBorder:!0,className:"w-[18vw] sm:w-[6rem] md:w-[6.32rem] xl:w-[6.4rem]",padding:0,children:s.jsxs("div",{className:"h-auto w-fit text-center h-auto",onClick:()=>{o(r)},children:[s.jsx("img",{src:c.img[0],alt:c.title,className:"w-80"}),t===r?s.jsx(X,{color:"#000",backgroundOpacity:.2}):""]})},r))})}),s.jsx(x.Col,{span:{base:12,sm:6.5,lg:7},order:{base:1,sm:1,lg:2},children:s.jsx(N.div,{initial:{opacity:0,y:60},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:s.jsx(p.Suspense,{fallback:s.jsx(Y,{color:"gray"}),children:s.jsx(ce,{title:y[t].title,img:y[t].img})})})}),s.jsx(x.Col,{span:{base:12,sm:"auto"},order:{base:2,sm:2,lg:3},children:s.jsxs(N.div,{initial:n<1284?{opacity:0,y:60}:{opacity:0,x:60},animate:n<1284?{opacity:1,y:0}:{opacity:1,x:0},transition:{duration:.5,delay:.2},className:"bg-gray-100 h-full p-3 flex justify-between flex-col sm:text-base text-xs",children:[s.jsxs("div",{className:"flex flex-col gap-3",children:[s.jsx("h1",{className:"font-semibold sm:text-lg",children:"Description"}),s.jsxs("div",{children:[s.jsx("h2",{className:"font-semibold",children:"Title :"}),s.jsx("p",{className:"sm:text-sm",children:y[t].title})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"font-semibold ",children:"Summary :"}),s.jsx("p",{className:"sm:text-sm",children:y[t].desc})]})]}),s.jsx("div",{className:"mt-5 md:mt-0",children:s.jsx(Z,{fullWidth:!0,component:"a",href:y[t].link,color:"grey",target:"_blank",children:"Overview"})})]})})]})]})})]})}const ge=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));export{ge as D,F as a,j as g};