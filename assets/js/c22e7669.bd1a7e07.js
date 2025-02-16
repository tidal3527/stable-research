"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[3241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return r?a.createElement(h,o(o({ref:t},m),{},{components:r})):a.createElement(h,o({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2958:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={hide_title:!0,sidebar_label:"Thumbor",title:"Thumbor | Self-Host on Easypanel",description:"How to install Thumbor on Easypanel? 1-Click installation template for Thumbor on Easypanel"},o=void 0,l={unversionedId:"templates/thumbor/index",id:"templates/thumbor/index",title:"Thumbor | Self-Host on Easypanel",description:"How to install Thumbor on Easypanel? 1-Click installation template for Thumbor on Easypanel",source:"@site/docs/05-templates/thumbor/index.md",sourceDirName:"05-templates/thumbor",slug:"/templates/thumbor/",permalink:"/stable-research/docs/templates/thumbor/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/thumbor/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Thumbor",title:"Thumbor | Self-Host on Easypanel",description:"How to install Thumbor on Easypanel? 1-Click installation template for Thumbor on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Thingsboard",permalink:"/stable-research/docs/templates/thingsboard/"},next:{title:"Tianji",permalink:"/stable-research/docs/templates/tianji/"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"thumbor"},"Thumbor"),(0,n.kt)("p",null,"1-Click installation template for Thumbor on Easypanel"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Thumbor is an intelligent imaging service designed to streamline and enhance your image processing tasks. It offers on-demand cropping, resizing, and flipping of images, ensuring the most important parts of your pictures are always preserved. Leveraging advanced face and feature detection algorithms, Thumbor smartly identifies key points in an image for optimal cropping and resizing. It also supports a variety of image filters for post-processing, which can be applied in a sequence for desired effects. Filters include brightness, contrast, grayscale, red-eye, and blur, among others. Thumbor also supports the WebP format, a superior image format that compresses better than jpeg and png, improving your website","'","s performance. With Thumbor, you can store and load images from any location, and it","'","s easy to implement a new loader or storage. It","'","s a complete solution for your imaging needs, from uploading images to rendering them with smart face-recognition cropping."),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Smart Image Cropping: Thumbor uses advanced face detection technology to crop images around detected faces, ensuring the most important parts of the picture are preserved."),(0,n.kt)("li",{parentName:"ul"},"Flexible Image Loading and Storage: Thumbor allows users to store and load images from anywhere, with support for various loaders and storages. Users can also implement their own loaders or storages."),(0,n.kt)("li",{parentName:"ul"},"Image Filtering: Thumbor supports image filters that can be applied to images for post-processing. Users can chain and apply filters in order to enhance their images."),(0,n.kt)("li",{parentName:"ul"},"WebP Support: Thumbor supports the WebP image format, which compresses images better than JPEG and PNG. This can significantly improve website performance.")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Easy Integration: Thumbor provides comprehensive libraries and plugins in multiple languages, making it easy for developers to integrate and use the service."),(0,n.kt)("li",{parentName:"ul"},"Decoupled Imaging: Thumbor decouples imaging from storage and loading, allowing users to tailor the service to their own infrastructure requirements."),(0,n.kt)("li",{parentName:"ul"},"Efficient Image Management: Thumbor simplifies image management tasks, such as resizing and cropping, saving time and effort for designers and project managers.")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.thumbor.org"},"Website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://thumbor.readthedocs.io"},"Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/thumbor/thumbor"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/thumbor"},"Template Source"))),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"thumbor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"thumbororg/thumbor:latest")))),(0,n.kt)("h2",{id:"screenshots"},"Screenshots"),(0,n.kt)("h2",{id:"change-log"},"Change Log"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2023-07-10 \u2013 First Release")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://berksmbl.com"},"Berk S\xfcmb\xfcl"))))}c.isMDXComponent=!0}}]);