import{R as F,d as le,r as z,t as Ge,f as Pe,u as Ve,B as Re,n as Ke,v as Ue,z as ge,w as Ee,I as $e,a as We,x as Xe,F as Je,X as xe,c as Ye,j as we}from"./index-8EzH4Vkw.js";import{b as Ze}from"./index-BJizNrfZ.js";import{g as Be,a as Qe}from"./Design-C7zBeHbs.js";import"./index.esm-C6ueImFG.js";import"./design-Wla4l85r.js";import"./motion-D-PdiMaY.js";import"./Card-DtQ6cCgF.js";function er(e,r,n){return r===void 0&&n===void 0?e:r!==void 0&&n===void 0?Math.max(e,r):Math.min(r===void 0&&n!==void 0?e:Math.max(e,r),n)}function be({style:e,size:r=16,...n}){return F.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:le(r),height:le(r),display:"block"},...n},F.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}be.displayName="@mantine/core/AccordionChevron";function rr(e,r,n,a,i){return a+(i-a)*((e-r)/(n-r))}function Ce(e){return typeof e=="number"}function De(e){return typeof e=="string"}function Ae(e){return Object.prototype.toString.call(e)==="[object Object]"}function nr(e){return Array.isArray(e)}function ke(e){return Ae(e)||nr(e)}function B(e){return Math.abs(e)}function Ie(e){return e?e/B(e):0}function ce(e,r){return B(e-r)}function tr(e,r){if(e===0||r===0||B(e)<=B(r))return 0;var n=ce(B(e),B(r));return B(n/e)}function ar(e){var r=Math.pow(10,e);return function(n){return Math.round(n*r)/r}}function de(e){return ie(e).map(Number)}function ee(e){return e[Se(e)]}function Se(e){return Math.max(0,e.length-1)}function ie(e){return Object.keys(e)}function _e(e,r){return[e,r].reduce(function(n,a){return ie(a).forEach(function(i){var s=n[i],o=a[i],l=Ae(s)&&Ae(o);n[i]=l?_e(s,o):o}),n},{})}function Fe(e,r){var n=ie(e),a=ie(r);return n.length!==a.length?!1:n.every(function(i){var s=e[i],o=r[i];return typeof s=="function"?"".concat(s)==="".concat(o):!ke(s)||!ke(o)?s===o:Fe(s,o)})}function ir(e,r){var n={start:a,center:i,end:s};function a(){return 0}function i(u){return s(u)/2}function s(u){return r-u}function o(){return r*Number(e)}function l(u){return Ce(e)?o():n[e](u)}var d={measure:l};return d}function or(e){var r=0;function n(o,l){return function(){o===!!r&&l()}}function a(){r=window.requestAnimationFrame(e)}function i(){window.cancelAnimationFrame(r),r=0}var s={proceed:n(!0,a),start:n(!1,a),stop:n(!0,i)};return s}function sr(e,r){var n=e==="y"?"y":"x",a=e==="y"?"x":"y",i=l(),s=d();function o(c){var t=c.width,v=c.height;return n==="x"?t:v}function l(){return n==="y"?"top":r==="rtl"?"right":"left"}function d(){return n==="y"?"bottom":r==="rtl"?"left":"right"}var u={scroll:n,cross:a,startEdge:i,endEdge:s,measureSize:o};return u}function se(e,r){var n=B(e-r);function a(u){return u<e}function i(u){return u>r}function s(u){return a(u)||i(u)}function o(u){return s(u)?a(u)?e:r:u}function l(u){return n?u-n*Math.ceil((u-r)/n):u}var d={length:n,max:r,min:e,constrain:o,reachedAny:s,reachedMax:i,reachedMin:a,removeOffset:l};return d}function je(e,r,n){var a=se(0,e),i=a.min,s=a.constrain,o=e+1,l=d(r);function d(f){return n?B((o+f)%o):s(f)}function u(){return l}function c(f){return l=d(f),p}function t(f){return c(u()+f)}function v(){return je(e,u(),n)}var p={add:t,clone:v,get:u,set:c,min:i,max:e};return p}function ur(e){var r=e==="rtl"?-1:1;function n(i){return i*r}var a={apply:n};return a}function he(){var e=[];function r(i,s,o,l){return l===void 0&&(l={passive:!0}),i.addEventListener(s,o,l),e.push(function(){return i.removeEventListener(s,o,l)}),a}function n(){return e=e.filter(function(i){return i()}),a}var a={add:r,removeAll:n};return a}function te(e){var r=e;function n(){return r}function a(t){return r=u(t),c}function i(t){return r+=u(t),c}function s(t){return r-=u(t),c}function o(t){return r*=t,c}function l(t){return r/=t,c}function d(){return r!==0&&l(r),c}function u(t){return Ce(t)?t:t.get()}var c={add:i,divide:l,get:n,multiply:o,normalize:d,set:a,subtract:s};return c}function cr(e,r,n,a,i,s,o,l,d,u,c,t,v,p,f,g){var w=e.cross,h=["INPUT","SELECT","TEXTAREA"],S={passive:!1},b=te(0),m=he(),x=he(),C=v.measure(20),I={mouse:300,touch:400},T={mouse:500,touch:600},O=f?5:16,G=1,j=0,W=0,$=!1,U=!1,V=!1,D=!1;function Y(){var y=n;m.add(y,"dragstart",function(N){return N.preventDefault()},S).add(y,"touchmove",function(){},S).add(y,"touchend",function(){}).add(y,"touchstart",ne).add(y,"mousedown",ne).add(y,"touchcancel",k).add(y,"contextmenu",k).add(y,"click",R,!0)}function P(){var y=D?document:n;x.add(y,"touchmove",J,S).add(y,"touchend",k).add(y,"mousemove",J,S).add(y,"mouseup",k)}function q(){m.removeAll(),x.removeAll()}function X(y){var N=y.nodeName||"";return h.indexOf(N)>-1}function re(){var y=f?T:I,N=D?"mouse":"touch";return y[N]}function ae(y,N){var K=c.clone().add(Ie(y)*-1),L=K.get()===c.min||K.get()===c.max,H=u.byDistance(y,!f).distance;return f||B(y)<C?H:!p&&L?H*.4:g&&N?H*.5:u.byIndex(K.get(),0).distance}function ne(y){if(D=!i.isTouchEvent(y),!(D&&y.button!==0)&&!X(y.target)){var N=ce(a.get(),s.get())>=2,K=D||!N;$=!0,i.pointerDown(y),b.set(a),a.set(s),d.useBaseMass().useSpeed(80),P(),j=i.readPoint(y),W=i.readPoint(y,w),t.emit("pointerDown"),K&&(V=!1)}}function J(y){if(!U&&!D){if(!y.cancelable)return k(y);var N=i.readPoint(y),K=i.readPoint(y,w),L=ce(N,j),H=ce(K,W);if(U=L>H,!U&&!V)return k(y)}var Z=i.pointerMove(y);!V&&Z&&(V=!0),o.start(),a.add(r.apply(Z)),y.preventDefault()}function k(y){var N=u.byDistance(0,!1),K=N.index!==c.get(),L=i.pointerUp(y)*re(),H=ae(r.apply(L),K),Z=tr(L,H),ve=ce(a.get(),b.get())>=.5,ue=K&&Z>.75,ye=B(L)<C,pe=ue?10:O,me=ue?G+2.5*Z:G;ve&&!D&&(V=!0),U=!1,$=!1,x.removeAll(),d.useSpeed(ye?9:pe).useMass(me),l.distance(H,!f),D=!1,t.emit("pointerUp")}function R(y){V&&(y.stopPropagation(),y.preventDefault())}function A(){return!V}function M(){return $}var E={addActivationEvents:Y,clickAllowed:A,pointerDown:M,removeAllEvents:q};return E}function lr(e){var r=170,n,a;function i(t){return typeof TouchEvent<"u"&&t instanceof TouchEvent}function s(t){return t.timeStamp}function o(t,v){var p=v||e.scroll,f="client".concat(p==="x"?"X":"Y");return(i(t)?t.touches[0]:t)[f]}function l(t){return n=t,a=t,o(t)}function d(t){var v=o(t)-o(a),p=s(t)-s(n)>r;return a=t,p&&(n=t),v}function u(t){if(!n||!a)return 0;var v=o(a)-o(n),p=s(t)-s(n),f=s(t)-s(a)>r,g=v/p,w=p&&!f&&B(g)>.1;return w?g:0}var c={isTouchEvent:i,pointerDown:l,pointerMove:d,pointerUp:u,readPoint:o};return c}function dr(e){function r(a){return e*(a/100)}var n={measure:r};return n}function fr(e,r,n){var a=ar(2),i=te(0),s=te(0),o=te(0),l=0,d=r,u=n;function c(){i.add(s),e.add(i),s.multiply(0)}function t(m){m.divide(u),s.add(m)}function v(m){o.set(m).subtract(e);var x=rr(o.get(),0,100,0,d);return l=Ie(o.get()),o.normalize().multiply(x).subtract(i),t(o),b}function p(m){var x=m.get()-e.get(),C=!a(x);return C&&e.set(m),C}function f(){return l}function g(){return h(r)}function w(){return S(n)}function h(m){return d=m,b}function S(m){return u=m,b}var b={direction:f,seek:v,settle:p,update:c,useBaseMass:w,useBaseSpeed:g,useMass:S,useSpeed:h};return b}function vr(e,r,n,a,i){var s=i.measure(10),o=i.measure(50),l=.85,d=!1;function u(){return!(d||!e.reachedAny(n.get())||!e.reachedAny(r.get()))}function c(p){if(u()){var f=e.reachedMin(r.get())?"min":"max",g=B(e[f]-r.get()),w=n.get()-r.get(),h=Math.min(g/o,l);n.subtract(w*h),!p&&B(w)<s&&(n.set(e.constrain(n.get())),a.useSpeed(10).useMass(3))}}function t(p){d=!p}var v={constrain:c,toggleActive:t};return v}function pr(e,r,n,a){var i=se(-r+e,n[0]),s=n.map(i.constrain),o=d();function l(){var c=s[0],t=ee(s),v=s.lastIndexOf(c),p=s.indexOf(t)+1;return se(v,p)}function d(){if(r<=e)return[i.max];if(a==="keepSnaps")return s;var c=l(),t=c.min,v=c.max;return s.slice(t,v)}var u={snapsContained:o};return u}function mr(e,r,n){var a=i();function i(){var o=r[0],l=ee(r),d=n?o-e:l,u=o;return se(d,u)}var s={limit:a};return s}function gr(e,r,n,a){var i=.1,s=r.min+i,o=r.max+i,l=se(s,o),d=l.reachedMin,u=l.reachedMax;function c(p){return p===1?u(n.get()):p===-1?d(n.get()):!1}function t(p){if(c(p)){var f=e*(p*-1);a.forEach(function(g){return g.add(f)})}}var v={loop:t};return v}function hr(e){var r=e.max,n=e.length;function a(s){var o=s-r;return o/-n}var i={get:a};return i}function Sr(e,r,n,a,i,s,o){var l=e.startEdge,d=e.endEdge,u=s.groupSlides,c=p().map(r.measure),t=f(),v=g();function p(){return u(a).map(function(h){return ee(h)[d]-h[0][l]}).map(B)}function f(){return a.map(function(h){return n[l]-h[l]}).map(function(h){return-B(h)})}function g(){var h=0,S=ee(t)-ee(i);return u(t).map(function(b){return b[0]}).map(function(b,m,x){var C=!m,I=m===Se(x);return o&&C?h:o&&I?S:b+c[m]})}var w={snaps:t,snapsAligned:v};return w}function yr(e,r,n,a,i){var s=a.reachedAny,o=a.removeOffset,l=a.constrain;function d(f){return f.concat().sort(function(g,w){return B(g)-B(w)})[0]}function u(f){var g=e?o(f):l(f),w=r.map(function(S){return S-g}).map(function(S){return c(S,0)}).map(function(S,b){return{diff:S,index:b}}).sort(function(S,b){return B(S.diff)-B(b.diff)}),h=w[0].index;return{index:h,distance:g}}function c(f,g){var w=[f,f+n,f-n];if(!e)return w[0];if(!g)return d(w);var h=w.filter(function(S){return Ie(S)===g});return d(h)}function t(f,g){var w=r[f]-i.get(),h=c(w,g);return{index:f,distance:h}}function v(f,g){var w=i.get()+f,h=u(w),S=h.index,b=h.distance,m=!e&&s(w);if(!g||m)return{index:S,distance:f};var x=r[S]-b,C=f+c(x,0);return{index:S,distance:C}}var p={byDistance:v,byIndex:t,shortcut:c};return p}function Er(e,r,n,a,i,s){function o(c){var t=c.distance,v=c.index!==r.get();t&&(e.start(),i.add(t)),v&&(n.set(r.get()),r.set(c.index),s.emit("select"))}function l(c,t){var v=a.byDistance(c,t);o(v)}function d(c,t){var v=r.clone().set(c),p=a.byIndex(v.get(),t);o(p)}var u={distance:l,index:d};return u}function qe(e,r,n){var a=e.scroll==="x"?o:l,i=n.style,s=!1;function o(v){return"translate3d(".concat(v,"px,0px,0px)")}function l(v){return"translate3d(0px,".concat(v,"px,0px)")}function d(v){s||(i.transform=a(r.apply(v.get())))}function u(v){s=!v}function c(){s||(i.transform="",n.getAttribute("style")||n.removeAttribute("style"))}var t={clear:c,to:d,toggleActive:u};return t}function xr(e,r,n,a,i,s,o,l,d){var u=de(i),c=de(i).reverse(),t=g().concat(w());function v(x,C){return x.reduce(function(I,T){return I-i[T]},C)}function p(x,C){return x.reduce(function(I,T){var O=v(I,C);return O>0?I.concat([T]):I},[])}function f(x,C){var I=C==="start",T=I?-a:a,O=o.findSlideBounds([T]);return x.map(function(G){var j=I?0:-a,W=I?a:0,$=O.filter(function(q){return q.index===G})[0],U=$[I?"end":"start"],V=te(-1),D=te(-1),Y=qe(e,r,d[G]),P=function(){return V.set(l.get()>U?j:W)};return{index:G,location:D,translate:Y,target:P}})}function g(){var x=s[0]-1,C=p(c,x);return f(C,"end")}function w(){var x=n-s[0]-1,C=p(u,x);return f(C,"start")}function h(){return t.every(function(x){var C=x.index,I=u.filter(function(T){return T!==C});return v(I,n)<=.1})}function S(){t.forEach(function(x){var C=x.target,I=x.translate,T=x.location,O=C();O.get()!==T.get()&&(O.get()===0?I.clear():I.to(O),T.set(O))})}function b(){t.forEach(function(x){return x.translate.clear()})}var m={canLoop:h,clear:b,loop:S,loopPoints:t};return m}function wr(e,r,n,a,i,s,o){var l=i.removeOffset,d=i.constrain,u=.5,c=s?[0,r,-r]:[0],t=p(c,o);function v(w){var h=w||0;return n.map(function(S){var b=se(u,S-u);return b.constrain(S*h)})}function p(w,h){var S=w||c,b=v(h);return S.reduce(function(m,x){var C=a.map(function(I,T){return{start:I-n[T]+b[T]+x,end:I+e-b[T]+x,index:T}});return m.concat(C)},[])}function f(w,h){var S=s?l(w):d(w),b=h||t;return b.reduce(function(m,x){var C=x.index,I=x.start,T=x.end,O=m.indexOf(C)!==-1,G=I<S&&T>S;return!O&&G?m.concat([C]):m},[])}var g={check:f,findSlideBounds:p};return g}function br(e,r,n,a,i){var s=e.measureSize,o=e.startEdge,l=e.endEdge,d=n[0]&&i,u=p(),c=f(),t=n.map(s),v=g();function p(){if(!d)return 0;var h=n[0];return B(r[o]-h[o])}function f(){if(!d)return 0;var h=window.getComputedStyle(ee(a));return parseFloat(h.getPropertyValue("margin-".concat(l)))}function g(){return n.map(function(h,S,b){var m=!S,x=S===Se(b);return m?t[S]+u:x?t[S]+c:b[S+1][o]-h[o]}).map(B)}var w={slideSizes:t,slideSizesWithGaps:v};return w}function Ar(e,r,n){var a=Ce(n);function i(d,u){return de(d).filter(function(c){return c%u===0}).map(function(c){return d.slice(c,c+u)})}function s(d){return de(d).reduce(function(u,c){var t=r.slice(ee(u),c+1),v=t.reduce(function(p,f){return p+f},0);return!c||v>e?u.concat(c):u},[]).map(function(u,c,t){return d.slice(u,t[c+1])})}function o(d){return a?i(d,n):s(d)}var l={groupSlides:o};return l}function Cr(e,r,n,a,i){var s=a.align,o=a.axis,l=a.direction,d=a.startIndex,u=a.inViewThreshold,c=a.loop,t=a.speed,v=a.dragFree,p=a.slidesToScroll,f=a.skipSnaps,g=a.containScroll,w=r.getBoundingClientRect(),h=n.map(function(H){return H.getBoundingClientRect()}),S=ur(l),b=sr(o,l),m=b.measureSize(w),x=dr(m),C=ir(s,m),I=!c&&g!=="",T=c||g!=="",O=br(b,w,h,n,T),G=O.slideSizes,j=O.slideSizesWithGaps,W=Ar(m,j,p),$=Sr(b,C,w,h,j,W,I),U=$.snaps,V=$.snapsAligned,D=-ee(U)+ee(j),Y=pr(m,D,V,g).snapsContained,P=I?Y:V,q=mr(D,P,c).limit,X=je(Se(P),d,c),re=X.clone(),ae=de(n),ne=function(){c||L.scrollBounds.constrain(L.dragHandler.pointerDown()),L.scrollBody.seek(A).update();var H=L.scrollBody.settle(A);H&&!L.dragHandler.pointerDown()&&(L.animation.stop(),i.emit("settle")),H||i.emit("scroll"),c&&(L.scrollLooper.loop(L.scrollBody.direction()),L.slideLooper.loop()),L.translate.to(R),L.animation.proceed()},J=or(ne),k=P[X.get()],R=te(k),A=te(k),M=fr(R,t,1),E=yr(c,P,D,q,A),y=Er(J,X,re,E,A,i),N=wr(m,D,G,U,q,c,u),K=cr(b,S,e,A,lr(b),R,J,y,M,E,X,i,x,c,v,f),L={containerRect:w,slideRects:h,animation:J,axis:b,direction:S,dragHandler:K,eventStore:he(),percentOfView:x,index:X,indexPrevious:re,limit:q,location:R,options:a,scrollBody:M,scrollBounds:vr(q,R,A,M,x),scrollLooper:gr(D,q,R,[R,A]),scrollProgress:hr(q),scrollSnaps:P,scrollTarget:E,scrollTo:y,slideLooper:xr(b,S,m,D,j,P,N,R,n),slidesToScroll:W,slidesInView:N,slideIndexes:ae,target:A,translate:qe(b,S,r)};return L}function Ir(){var e={};function r(o){return e[o]||[]}function n(o){return r(o).forEach(function(l){return l(o)}),s}function a(o,l){return e[o]=r(o).concat([l]),s}function i(o,l){return e[o]=r(o).filter(function(d){return d!==l}),s}var s={emit:n,off:i,on:a};return s}var Mr={align:"center",axis:"x",container:null,slides:null,containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function Me(){function e(i,s){return _e(i,s||{})}function r(i,s){var o=JSON.stringify(ie(i.breakpoints||{})),l=JSON.stringify(ie(s.breakpoints||{}));return o!==l?!1:Fe(i,s)}function n(i){var s=i.breakpoints||{},o=ie(s).filter(function(l){return window.matchMedia(l).matches}).map(function(l){return s[l]}).reduce(function(l,d){return e(l,d)},{});return e(i,o)}var a={merge:e,areEqual:r,atMedia:n};return a}function Tr(){var e=Me(),r=e.atMedia,n=e.areEqual,a=[],i=[];function s(){return i.some(function(c){return c()})}function o(c){var t=r(c.options);return function(){return!n(t,r(c.options))}}function l(c,t){return i=c.map(o),a=c.filter(function(v){return r(v.options).active}),a.forEach(function(v){return v.init(t)}),c.reduce(function(v,p){var f;return Object.assign(v,(f={},f[p.name]=p,f))},{})}function d(){a=a.filter(function(c){return c.destroy()})}var u={init:l,destroy:d,haveChanged:s};return u}function oe(e,r,n){var a=he(),i=Me(),s=Tr(),o=Ir(),l=o.on,d=o.off,u=x,c=!1,t,v=i.merge(Mr,oe.globalOptions),p=i.merge(v),f=[],g,w=0,h,S;function b(){var A=p.container,M=p.slides,E=De(A)?e.querySelector(A):A;h=E||e.children[0];var y=De(M)?h.querySelectorAll(M):M;S=[].slice.call(y||h.children)}function m(A,M){if(!c){if(v=i.merge(v,A),p=i.atMedia(v),b(),t=Cr(e,h,S,p,o),w=t.axis.measureSize(e.getBoundingClientRect()),!p.active)return C();if(t.translate.to(t.location),f=M||f,g=s.init(f,R),p.loop){if(!t.slideLooper.canLoop()){C(),m({loop:!1},M),v=i.merge(v,{loop:!0});return}t.slideLooper.loop()}p.draggable&&h.offsetParent&&S.length&&t.dragHandler.addActivationEvents()}}function x(A,M){var E=P();C(),m(i.merge({startIndex:E},A),M),o.emit("reInit")}function C(){t.dragHandler.removeAllEvents(),t.animation.stop(),t.eventStore.removeAll(),t.translate.clear(),t.slideLooper.clear(),s.destroy()}function I(){c||(c=!0,a.removeAll(),C(),o.emit("destroy"))}function T(){var A=i.atMedia(v),M=!i.areEqual(A,p),E=t.axis.measureSize(e.getBoundingClientRect()),y=w!==E,N=s.haveChanged();(y||M||N)&&x(),o.emit("resize")}function O(A){var M=t[A?"target":"location"].get(),E=p.loop?"removeOffset":"constrain";return t.slidesInView.check(t.limit[E](M))}function G(A){var M=O(A);return t.slideIndexes.filter(function(E){return M.indexOf(E)===-1})}function j(A,M,E){!p.active||c||(t.scrollBody.useBaseMass().useSpeed(M?100:p.speed),t.scrollTo.index(A,E||0))}function W(A){var M=t.index.clone().add(1);j(M.get(),A===!0,-1)}function $(A){var M=t.index.clone().add(-1);j(M.get(),A===!0,1)}function U(){var A=t.index.clone().add(1);return A.get()!==P()}function V(){var A=t.index.clone().add(-1);return A.get()!==P()}function D(){return t.scrollSnaps.map(t.scrollProgress.get)}function Y(){return t.scrollProgress.get(t.location.get())}function P(){return t.index.get()}function q(){return t.indexPrevious.get()}function X(){return t.dragHandler.clickAllowed()}function re(){return g}function ae(){return t}function ne(){return e}function J(){return h}function k(){return S}var R={canScrollNext:U,canScrollPrev:V,clickAllowed:X,containerNode:J,internalEngine:ae,destroy:I,off:d,on:l,plugins:re,previousScrollSnap:q,reInit:u,rootNode:ne,scrollNext:W,scrollPrev:$,scrollProgress:Y,scrollSnapList:D,scrollTo:j,selectedScrollSnap:P,slideNodes:k,slidesInView:O,slidesNotInView:G};return m(r,n),a.add(window,"resize",T),setTimeout(function(){return o.emit("init")},0),R}oe.globalOptions=void 0;oe.optionsHandler=Me;function Lr(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Oe(e){return e.concat().sort(function(r,n){return r.name>n.name?1:-1}).map(function(r){return r.options})}function Nr(e,r){if(e.length!==r.length)return!1;var n=oe.optionsHandler().areEqual,a=Oe(e),i=Oe(r);return a.every(function(s,o){var l=i[o];return n(s,l)})}function Te(e,r){e===void 0&&(e={}),r===void 0&&(r=[]);var n=z.useRef(oe.optionsHandler()),a=z.useRef(e),i=z.useRef(r),s=z.useState(),o=s[0],l=s[1],d=z.useState(),u=d[0],c=d[1],t=z.useCallback(function(){o&&o.reInit(a.current,i.current)},[o]);return z.useEffect(function(){if(Lr()&&u){oe.globalOptions=Te.globalOptions;var v=oe(u,a.current,i.current);return l(v),function(){return v.destroy()}}else l(void 0)},[u,l]),z.useEffect(function(){n.current.areEqual(a.current,e)||(a.current=e,t())},[e,t]),z.useEffect(function(){Nr(i.current,r)||(i.current=r,t())},[r,t]),[c,o]}Te.globalOptions=void 0;const[Br,Dr]=Ge("Carousel component was not found in tree");var Le={root:"m_17884d0f",viewport:"m_a2dae653",container:"m_fcd81474",controls:"m_39bc3463",control:"m_64f58e10",indicators:"m_71ea3ab1",indicator:"m_eae68602",slide:"m_d98df724"};const kr={},Ne=Pe((e,r)=>{const{classNames:n,className:a,style:i,styles:s,vars:o,mod:l,...d}=Ve("CarouselSlide",kr,e),u=Dr();return F.createElement(Re,{ref:r,mod:[{orientation:u.orientation},l],...u.getStyles("slide",{className:a,style:i,classNames:n,styles:s}),...d})});Ne.classes=Le;Ne.displayName="@mantine/carousel/CarouselSlide";function Or({slideGap:e,slideSize:r,selector:n}){const a=Ke(),i=Ue({"--carousel-slide-gap":ge(Be(e)),"--carousel-slide-size":le(Be(r))}),s=Ee(a.breakpoints).reduce((d,u)=>(d[u]||(d[u]={}),typeof e=="object"&&e[u]!==void 0&&(d[u]["--carousel-slide-gap"]=ge(e[u])),typeof r=="object"&&r[u]!==void 0&&(d[u]["--carousel-slide-size"]=ge(r[u])),d),{}),l=Qe(Ee(s),a).filter(d=>Ee(s[d.value]).length>0).map(d=>({query:`(min-width: ${a.breakpoints[d.value]})`,styles:s[d.value]}));return F.createElement($e,{styles:i,media:l,selector:n})}function ze({dir:e,orientation:r,direction:n}){return n==="previous"?r==="horizontal"?90*(e==="ltr"?1:-1):-180:r==="horizontal"?90*(e==="ltr"?-1:1):0}const zr={controlSize:26,controlsOffset:"sm",slideSize:"100%",slideGap:0,orientation:"horizontal",align:"center",slidesToScroll:1,includeGapInSize:!0,draggable:!0,dragFree:!1,loop:!1,speed:10,initialSlide:0,inViewThreshold:0,withControls:!0,withIndicators:!1,skipSnaps:!1,containScroll:"",withKeyboardEvents:!0},Pr=Ye((e,{height:r,controlSize:n,controlsOffset:a})=>({root:{"--carousel-height":le(r),"--carousel-control-size":le(n),"--carousel-controls-offset":ge(a)}})),fe=Pe((e,r)=>{const n=Ve("Carousel",zr,e),{classNames:a,className:i,style:s,styles:o,unstyled:l,vars:d,children:u,getEmblaApi:c,onNextSlide:t,onPreviousSlide:v,onSlideChange:p,nextControlProps:f,previousControlProps:g,controlSize:w,controlsOffset:h,slideSize:S,slideGap:b,orientation:m,height:x,align:C,slidesToScroll:I,includeGapInSize:T,draggable:O,dragFree:G,loop:j,speed:W,initialSlide:$,inViewThreshold:U,withControls:V,withIndicators:D,plugins:Y,nextControlIcon:P,previousControlIcon:q,skipSnaps:X,containScroll:re,withKeyboardEvents:ae,mod:ne,...J}=n,k=We({name:"Carousel",classes:Le,props:n,className:i,style:s,classNames:a,styles:o,unstyled:l,vars:d,varsResolver:Pr}),R=Xe(),{dir:A}=Je(),[M,E]=Te({axis:m==="horizontal"?"x":"y",direction:m==="horizontal"?A:void 0,startIndex:$,loop:j,align:C,slidesToScroll:I,draggable:O,dragFree:G,speed:W,inViewThreshold:U,skipSnaps:X,containScroll:re},Y),[y,N]=z.useState(0),[K,L]=z.useState(0),H=z.useCallback(_=>E&&E.scrollTo(_),[E]),Z=z.useCallback(()=>{if(!E)return;const _=E.selectedScrollSnap();N(_),p==null||p(_)},[E,N]),ve=z.useCallback(()=>{E==null||E.scrollPrev(),v==null||v()},[E]),ue=z.useCallback(()=>{E==null||E.scrollNext(),t==null||t()},[E]),ye=z.useCallback(_=>{ae&&(_.key==="ArrowRight"&&(_.preventDefault(),ue()),_.key==="ArrowLeft"&&(_.preventDefault(),ve()))},[E]);z.useEffect(()=>{if(E)return c==null||c(E),Z(),L(E.scrollSnapList().length),E.on("select",Z),()=>{E.off("select",Z)}},[E,I]),z.useEffect(()=>{E&&(E.reInit(),L(E.scrollSnapList().length),N(_=>er(_,0,z.Children.toArray(u).length-1)))},[z.Children.toArray(u).length,I]);const pe=(E==null?void 0:E.canScrollPrev())||!1,me=(E==null?void 0:E.canScrollNext())||!1,He=Array(K).fill(0).map((_,Q)=>F.createElement(xe,{...k("indicator"),key:Q,"data-active":Q===y||void 0,"aria-hidden":!0,tabIndex:-1,onClick:()=>H(Q),"data-orientation":m}));return F.createElement(Br,{value:{getStyles:k,orientation:m}},F.createElement(Or,{...n,selector:`.${R}`}),F.createElement(Re,{ref:r,...k("root",{className:R}),...J,mod:[{orientation:m,"include-gap-in-size":T},ne],onKeyDownCapture:ye},F.createElement("div",{...k("viewport"),ref:M},F.createElement("div",{...k("container"),"data-orientation":m},u)),D&&F.createElement("div",{...k("indicators"),"data-orientation":m},He),V&&F.createElement("div",{...k("controls"),"data-orientation":m},F.createElement(xe,{...g,...k("control",{className:g==null?void 0:g.className,style:g==null?void 0:g.style}),onClick:_=>{var Q;ve(),(Q=g==null?void 0:g.onClick)==null||Q.call(g,_)},"data-inactive":!pe||void 0,tabIndex:pe?0:-1},typeof q<"u"?q:F.createElement(be,{style:{transform:`rotate(${ze({dir:A,orientation:m,direction:"previous"})}deg)`}})),F.createElement(xe,{...k("control",{className:f==null?void 0:f.className,style:f==null?void 0:f.style}),...f,onClick:_=>{var Q;ue(),(Q=f==null?void 0:f.onClick)==null||Q.call(f,_)},"data-inactive":!me||void 0,tabIndex:me?0:-1},typeof P<"u"?P:F.createElement(be,{style:{transform:`rotate(${ze({dir:A,orientation:m,direction:"next"})}deg)`}})))))});fe.classes=Le;fe.displayName="@mantine/carousel/Carousel";fe.Slide=Ne;const Vr="_control_2ehd3_1",Rr={control:Vr};function Ur({title:e,img:r}){return we.jsx(fe,{slideGap:"xs",controlSize:30,withIndicators:!0,classNames:Rr,children:r.map((n,a)=>we.jsx(fe.Slide,{className:"w-fit flex justify-center",children:we.jsx(Ze.LazyLoadImage,{className:"h-fit xl:h-[74.5vh] w-fit border-2 border-slate-200",src:n,alt:`Slide ${a+1}`,width:"100%"})},a))},e)}export{Ur as default};