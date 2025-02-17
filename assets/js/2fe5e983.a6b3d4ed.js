"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[5087],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),g=n,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},11368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={hide_title:!0,sidebar_label:"imgproxy",title:"imgproxy | Self-Host on Easypanel",description:"How to install imgproxy on Easypanel? 1-Click installation template for imgproxy on Easypanel"},o=void 0,s={unversionedId:"regulatory-landscape/imgproxy/index",id:"regulatory-landscape/imgproxy/index",title:"imgproxy | Self-Host on Easypanel",description:"How to install imgproxy on Easypanel? 1-Click installation template for imgproxy on Easypanel",source:"@site/docs/04-regulatory-landscape/imgproxy/index.md",sourceDirName:"04-regulatory-landscape/imgproxy",slug:"/regulatory-landscape/imgproxy/",permalink:"/docs/regulatory-landscape/imgproxy/",draft:!1,editUrl:"https://github.com/tidal3527/stable-research/docs/04-regulatory-landscape/imgproxy/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"imgproxy",title:"imgproxy | Self-Host on Easypanel",description:"How to install imgproxy on Easypanel? 1-Click installation template for imgproxy on Easypanel"},sidebar:"defaultSidebar",previous:{title:"ICEcoder",permalink:"/docs/regulatory-landscape/icecoder/"},next:{title:"Immich",permalink:"/docs/regulatory-landscape/immich/"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"imgproxy"},"imgproxy"),(0,n.kt)("p",null,"1-Click installation template for imgproxy on Easypanel"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"imgproxy is a powerful app designed to optimize images for web use, making websites and apps run faster while saving storage and SaaS costs. It works by resizing and processing images on the fly, eliminating the need for disk space and reducing the cost of conforming all saved images to specific formats. imgproxy offers a wide range of features for editing images, including resizing, cropping, contrast adjustment, pixelization, saturation, rotating, and more. It also provides security features to protect against common attack vectors in image processing. With imgproxy, you can upload images directly to the cloud or your cluster and request images by specifying parameters in the request URL. The app uses the world\u2019s fastest image processing library, libvips, ensuring quick processing and a small memory footprint. imgproxy Pro plans offer advanced features and vary by capacity and types of support."),(0,n.kt)("h2",{id:"instructions"},"Instructions"),(0,n.kt)("p",null,"To generate a image URL you can use the following link: ",(0,n.kt)("a",{parentName:"p",href:"https://progapandist.github.io/imgproxy-form/#"},"https://progapandist.github.io/imgproxy-form/#"),". Your Salt and Key can be found in the environment variables once you create the service. You can also find more environment variables here: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.imgproxy.net/configuration"},"https://docs.imgproxy.net/configuration")),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Optimized Image Processing: imgproxy is designed to make websites and apps run faster by optimizing images for the web on the fly. It saves storage and SaaS costs by reducing the need for disk space and eliminating the requirement for all saved images to conform to specific formats."),(0,n.kt)("li",{parentName:"ul"},"Fast and Efficient: Built on the world\u2019s fastest image processing library, libvips, imgproxy is incredibly fast and has a minimal memory footprint. It can handle a large amount of image resizing quickly and efficiently."),(0,n.kt)("li",{parentName:"ul"},"Secure Image Processing: imgproxy provides robust security measures to protect against common attack vectors in image processing. It checks an image\u2019s real dimensions, cancels processing if it\u2019s too big or not a real image, and prevents denial-of-service attacks by requiring URL signing.")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On-the-Fly Image Resizing: imgproxy resizes and processes images on the fly, eliminating the need to repeatedly prepare images to fit your design every time it changes."),(0,n.kt)("li",{parentName:"ul"},"Advanced Image Editing: With over 55+ features, imgproxy offers a comprehensive selection of image editing tools. These include resizing, cropping, contrast adjustment, pixelization, saturation, rotation, background addition, GIF to MP4 conversion, padding, blurring, brightness adjustment, PDF preview generation, and more."),(0,n.kt)("li",{parentName:"ul"},"Pro Version: imgproxy Pro offers advanced features and varies by capacity and types of support. It includes concurrent image processing limits, basic and Pro features, priority support, and a 14-day free trial period.")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://imgproxy.net/"},"Website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.imgproxy.net/"},"Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/imgproxy/imgproxy"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/imgproxy"},"Template Source"))),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"imgproxy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"darthsim/imgproxy:v3.9")))),(0,n.kt)("h2",{id:"screenshots"},"Screenshots"),(0,n.kt)("h2",{id:"change-log"},"Change Log"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2022-08-05 \u2013 first release")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ivanonpc-22"},"Ivan Ryan"))))}u.isMDXComponent=!0}}]);