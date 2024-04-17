import{p as L,f as F,u as w,a as S,R as b,B as f,c as I,b as T,r as g,g as H,d as k,e as V,j as e,O as W}from"./index-BmXiA1-M.js";import{H as z,a as B}from"./index.esm-BVndSZ54.js";import{m as O}from"./motion-BhgSxqkd.js";function M({color:t,theme:s,defaultShade:a}){const l=L({color:t,theme:s});return l.isThemeColor?l.shade===void 0?`var(--mantine-color-${l.color}-${a})`:`var(${l.variable})`:t}var P={root:"m_bcb3f3c2"};const A={color:"yellow"},J=I((t,{color:s})=>({root:{"--mark-bg-dark":M({color:s,theme:t,defaultShade:5}),"--mark-bg-light":M({color:s,theme:t,defaultShade:2})}})),x=F((t,s)=>{const a=w("Mark",A,t),{classNames:l,className:o,style:i,styles:c,unstyled:d,vars:m,color:n,variant:r,...j}=a,h=S({name:"Mark",props:a,className:o,style:i,classes:P,classNames:l,styles:c,unstyled:d,vars:m,varsResolver:J});return b.createElement(f,{component:"mark",ref:s,variant:r,...h("root"),...j})});x.classes=P;x.displayName="@mantine/core/Mark";var _={root:"m_9e117634"};const q={},G=I((t,{radius:s,fit:a})=>({root:{"--image-radius":s===void 0?void 0:H(s),"--image-object-fit":a}})),R=T((t,s)=>{const a=w("Image",q,t),{classNames:l,className:o,style:i,styles:c,unstyled:d,vars:m,onError:n,src:r,radius:j,fit:h,fallbackSrc:y,mod:p,...u}=a,[N,v]=g.useState(!r);g.useEffect(()=>v(!r),[r]);const $=S({name:"Image",classes:_,props:a,className:o,style:i,classNames:l,styles:c,unstyled:d,vars:m,varsResolver:G});return N&&y?b.createElement(f,{component:"img",ref:s,src:y,...$("root"),onError:n,mod:["fallback",p],...u}):b.createElement(f,{component:"img",ref:s,...$("root"),src:r,onError:D=>{n==null||n(D),v(!0)},mod:p,...u})});R.classes=_;R.displayName="@mantine/core/Image";var C={root:"m_18320242","skeleton-fade":"m_299c329c"};const K={visible:!0,animate:!0},Q=I((t,{width:s,height:a,radius:l,circle:o})=>({root:{"--skeleton-height":k(a),"--skeleton-width":o?k(a):k(s),"--skeleton-radius":o?"1000px":l===void 0?void 0:H(l)}})),E=F((t,s)=>{const a=w("Skeleton",K,t),{classNames:l,className:o,style:i,styles:c,unstyled:d,vars:m,width:n,height:r,circle:j,visible:h,radius:y,animate:p,mod:u,...N}=a,v=S({name:"Skeleton",classes:C,props:a,className:o,style:i,classNames:l,styles:c,unstyled:d,vars:m,varsResolver:Q});return b.createElement(f,{ref:s,...v("root"),mod:[{visible:h,animate:p},u],...N})});E.classes=C;E.displayName="@mantine/core/Skeleton";const U="/portfolio/assets/imam-1-DFsxJ60C.png";function ee(){const t={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.5,delay:.3}}},s=V().pathname;return window.scrollTo(0,0),g.useEffect(()=>{s==="/"?document.body.classList.add("overflow-y-hidden"):document.body.classList.remove("overflow-y-hidden")}),e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsx(B,{children:e.jsx("title",{children:"Imam | Portfolio"})})}),e.jsx("main",{id:"home",children:e.jsxs(O.div,{initial:"hidden",animate:"visible",variants:t,className:"flex flex-row-reverse lg:flex-row items-center mx-auto max-w-6xl justify-around",children:[e.jsxs("div",{className:"z-20 text-center md:text-start absolute md:static",children:[e.jsxs("div",{className:"hidden md:block",children:[e.jsxs("p",{children:["Hello there 👋 ",e.jsx("br",{className:"md:hidden"}),"I am"," ",e.jsx(x,{color:"black",children:e.jsx("span",{className:"px-1 text-white font-bold",children:"Imam Maulana"})})]}),e.jsxs("h1",{className:"hidden md:block *:mt-2 mb-4 leading-none text-[40px] lg:text-6xl xl:text-7xl font-bold",children:["Frontend Web ",e.jsx("br",{})," Developer"]})]}),e.jsxs("div",{className:"md:hidden",children:[e.jsxs("p",{className:"text-slate-200",children:["Hello there 👋 ",e.jsx("br",{}),"I am"," ",e.jsx("span",{className:"font-bold text-white",children:"Imam Maulana"})]}),e.jsxs("h1",{className:"hidden md:block *:mt-2 mb-4 leading-none text-[40px] lg:text-6xl xl:text-7xl font-bold",children:["Frontend Web ",e.jsx("br",{})," Developer"]})]}),e.jsxs("h1",{className:"pt-2 md:hidden mt-2 mb-4 leading-none text-[40px] lg:text-6xl xl:text-7xl font-bold text-white",children:[e.jsx("p",{className:"pb-5",children:e.jsx(x,{color:"black",children:e.jsx("span",{className:"text-white",children:"Frontend Web"})})}),e.jsx("p",{children:e.jsx(x,{color:"black",children:e.jsx("span",{className:"text-white",children:"Developer"})})})]}),e.jsxs("p",{className:"hidden md:block max-w-md text-xs lg:text-base lg:max-w-lg",children:["Always enthusiastic and challenged to learn new things. ",e.jsx("br",{}),"Let's build something great with me!"]})]}),e.jsx("div",{className:"group filter grayscale hover:filter-none transition ease-in-out duration-1000",children:e.jsx(g.Suspense,{fallback:e.jsx(E,{visible:!0,height:700,width:400}),children:e.jsx("div",{className:"z-10 m-auto",children:e.jsx(R,{className:"h-[95vh] ",src:U,alt:"Imam"})})})})]})}),e.jsx(W,{gradient:"linear-gradient(0deg, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0) 70%)",opacity:.85,className:"md:hidden"})]})}export{ee as default};
