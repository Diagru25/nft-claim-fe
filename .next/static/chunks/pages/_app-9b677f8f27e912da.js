(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1927)}])},4226:function(e,t){"use strict";t.Z={src:"/_next/static/media/chicken.dad29e29.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+ElEQVR42mP4eGoPEwMQ/F/aLn5/ydTJ////ZwTx79fnpOwK9lRmAIH//7+KPL596cbpKb3/z29Yueh6tPuyXZ625xkYGAQYQOD1/qUWR/qL/lc6OfyePmnS/6nOLv+7GBg2MsDA5+uH83a0Fv+fuXjer5VrVvzvSk6818bAoM8AA0fXTw9vLkn4nxfl8jPZz+a/v73pVgYgmCHDwMjw//9PtoW1cdtttOX+i4sJ/7FUk/tvr6H031NDS5kBBmrjPQ4qSUv911ZR/GMgL/VbX1Lyv7OGRjXUB/cYrTXkLhprKP631FH5qyIk+FdFQOC/gbT0FQYGBiYAyxVkDgkvs7oAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let i=r(4788),n=r(8754),o=r(1757),a=r(224),s=o._(r(7294)),l=n._(r(2636)),c=r(7757),u=r(3735),d=r(3341);r(4210);let f=n._(r(7746)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,n,o,a,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current(i._({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}function v(e){let[t,r]=s.version.split("."),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let w=(0,s.forwardRef)((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:o,qualityInt:l,className:c,imgStyle:u,blurStyle:d,isLazy:f,fetchPriority:h,fill:g,placeholder:p,loading:w,srcString:b,config:x,unoptimized:y,loader:_,onLoadRef:j,onLoadingCompleteRef:A,setBlurComplete:E,setShowAltText:S,onLoad:C,onError:k}=e,P=a._(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return w=f?"lazy":w,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",i._({},P,v(h),{loading:w,width:o,height:n,decoding:"async","data-nimg":g?"fill":"1",className:c,style:i._({},u,d)},r,{ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&m(e,b,p,j,A,E,y))},[b,p,j,A,E,k,y,t]),onLoad:e=>{let t=e.currentTarget;m(t,b,p,j,A,E,y)},onError:e=>{S(!0),"blur"===p&&E(!0),k&&k(e)}})))}),b=(0,s.forwardRef)((e,t)=>{let r,n;var o,{src:m,sizes:b,unoptimized:x=!1,priority:y=!1,loading:_,className:j,quality:A,width:E,height:S,fill:C,style:k,onLoad:P,onLoadingComplete:N,placeholder:O="empty",blurDataURL:R,fetchPriority:z,layout:L,objectFit:I,objectPosition:M,lazyBoundary:D,lazyRoot:T}=e,F=a._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=(0,s.useContext)(d.ImageConfigContext),G=(0,s.useMemo)(()=>{let e=h||B||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i._({},e,{allSizes:t,deviceSizes:r})},[B]),U=F,V=U.loader||f.default;delete U.loader;let Y="__next_img_default"in V;if(Y){if("custom"===G.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=V;V=t=>{let{config:r}=t,i=a._(t,["config"]);return e(i)}}if(L){"fill"===L&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];e&&(k=i._({},k,e));let t={responsive:"100vw",fill:"100vw"}[L];t&&!b&&(b=t)}let W="",X=p(E),q=p(S);if("object"==typeof(o=m)&&(g(o)||void 0!==o.src)){let e=g(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,n=e.blurHeight,R=R||e.blurDataURL,W=e.src,!C){if(X||q){if(X&&!q){let t=X/e.width;q=Math.round(e.height*t)}else if(!X&&q){let t=q/e.height;X=Math.round(e.width*t)}}else X=e.width,q=e.height}}let H=!y&&("lazy"===_||void 0===_);(!(m="string"==typeof m?m:W)||m.startsWith("data:")||m.startsWith("blob:"))&&(x=!0,H=!1),G.unoptimized&&(x=!0),Y&&m.endsWith(".svg")&&!G.dangerouslyAllowSVG&&(x=!0),y&&(z="high");let[Q,K]=(0,s.useState)(!1),[Z,J]=(0,s.useState)(!1),$=p(A),ee=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:M}:{},Z?{}:{color:"transparent"},k),et="blur"===O&&R&&!Q?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat((0,c.getImageBlurSvg)({widthInt:X,heightInt:q,blurWidth:r,blurHeight:n,blurDataURL:R,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,a),u=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,i)=>"".concat(s({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:s({config:t,src:r,quality:o,width:l[u]})}}({config:G,src:m,unoptimized:x,width:X,quality:$,sizes:b,loader:V}),ei=m,en=(0,s.useRef)(P);(0,s.useEffect)(()=>{en.current=P},[P]);let eo=(0,s.useRef)(N);(0,s.useEffect)(()=>{eo.current=N},[N]);let ea=i._({isLazy:H,imgAttributes:er,heightInt:q,widthInt:X,qualityInt:$,className:j,imgStyle:ee,blurStyle:et,loading:_,config:G,fetchPriority:z,fill:C,unoptimized:x,placeholder:O,loader:V,srcString:ei,onLoadRef:en,onLoadingCompleteRef:eo,setBlurComplete:K,setShowAltText:J},U);return s.default.createElement(s.default.Fragment,null,s.default.createElement(w,i._({},ea,{ref:t})),y?s.default.createElement(l.default,null,s.default.createElement("link",i._({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:U.crossOrigin},v(z)))):null)}),x=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:a}=e,s=i||t,l=n||r,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},1927:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var i=r(5893),n=r(5675),o=r.n(n),a=r(4226),s=function(){return(0,i.jsxs)("div",{className:"fixed top-0 left-0 w-full flex justify-between items-center px-8 py-2 bg-sky-600 z-10",children:[(0,i.jsx)("div",{children:(0,i.jsx)(o(),{src:a.Z,alt:"img",width:60,height:60})}),(0,i.jsxs)("div",{className:"flex items-center gap-8 pr-4",children:[(0,i.jsxs)("nav",{className:"flex items-center gap-3",children:[(0,i.jsx)("a",{className:"hover:text-white hover:cursor-pointer",children:"Home"}),(0,i.jsx)("a",{className:"hover:text-white hover:cursor-pointer",children:"AirDrop"}),(0,i.jsx)("a",{className:"hover:text-white hover:cursor-pointer",children:"Perks"}),(0,i.jsx)("a",{className:"hover:text-white hover:cursor-pointer",children:"Staking"}),(0,i.jsx)("a",{className:"hover:text-white hover:cursor-pointer",children:"Tokenomics"}),(0,i.jsx)("a",{className:"hover:text-white hover:cursor-pointer",children:"Roadmap"})]}),(0,i.jsx)("button",{className:"text-white shadow-md p-2 rounded-md hover:bg-blue-800",style:{boxShadow:"rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px"},children:"CONNECT WALLET"})]})]})};function l(e){return(0,i.jsxs)("div",{className:"bg-black",children:[(0,i.jsx)(s,{}),e.children]})}function c(e){let{Component:t,pageProps:r}=e;return(0,i.jsx)(l,{children:(0,i.jsx)(t,{...r})})}r(7952)},7952:function(){},5675:function(e,t,r){e.exports=r(3740)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);