"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[9592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var m=2;m<r;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const r={hide_title:!0,sidebar_label:"Isso",title:"Isso | Self-Host on Easypanel",description:"How to install Isso on Easypanel? 1-Click installation template for Isso on Easypanel"},s=void 0,o={unversionedId:"templates/isso/index",id:"templates/isso/index",title:"Isso | Self-Host on Easypanel",description:"How to install Isso on Easypanel? 1-Click installation template for Isso on Easypanel",source:"@site/docs/05-templates/isso/index.md",sourceDirName:"05-templates/isso",slug:"/templates/isso/",permalink:"/docs/templates/isso/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/isso/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Isso",title:"Isso | Self-Host on Easypanel",description:"How to install Isso on Easypanel? 1-Click installation template for Isso on Easypanel"},sidebar:"defaultSidebar",previous:{title:"InvoiceShelf",permalink:"/docs/templates/invoiceshelf/"},next:{title:"It Tools",permalink:"/docs/templates/ittools/"}},l={},m=[{value:"Description",id:"description",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"isso"},"Isso"),(0,i.kt)("p",null,"1-Click installation template for Isso on Easypanel"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Isso is a lightweight commenting server designed to be a seamless alternative to Disqus. It is written in Python and JavaScript, and it allows users to leave comments on your website in a simple and straightforward manner. The app supports anonymous comments, preserving the identity of your users, and is easy to manage. Users can write comments in Markdown, and they also have the ability to edit or delete their own comments within a default time frame of 15 minutes. The app uses a SQLite backend, ensuring that your comments are not treated as Big Data. Additionally, it offers Disqus and WordPress import features, allowing you to migrate your existing comments without any hassle. The app is easily integrated into your website by embedding a single JavaScript file."),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"Go to /admin for administration interface"),(0,i.kt)("h2",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lightweight Commenting Server: Isso is a lightweight commenting server that offers a simple and efficient way to manage comments on your website. It is designed to be a drop-in replacement for Disqus, providing a more streamlined and user-friendly experience."),(0,i.kt)("li",{parentName:"ul"},"Maintains User Anonymity: Unlike other commenting systems, Isso allows for anonymous comments, ensuring the privacy of your website visitors. It maintains user identity without recording personal information like IP addresses or email."),(0,i.kt)("li",{parentName:"ul"},"Easy Integration: Isso uses JavaScript and cross-origin resource sharing for easy integration into static websites. This makes it a versatile tool that can be used with a wide range of web platforms.")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Markdown Support: Isso supports comments written in Markdown, allowing users to format their comments in a way that is both easy to write and read."),(0,i.kt)("li",{parentName:"ul"},"Comment Moderation: With Isso, comments in the moderation queue are not publicly visible before activation. This gives you control over what is displayed on your website."),(0,i.kt)("li",{parentName:"ul"},"User Comment Management: Users can edit or delete their own comments within a default window of 15 minutes. This gives users the ability to correct or remove their comments as needed."),(0,i.kt)("li",{parentName:"ul"},"Disqus & WordPress Import: Isso allows for easy migration of your Disqus or WordPress comments without any hassle. This makes transitioning to Isso a smooth process."),(0,i.kt)("li",{parentName:"ul"},"SQLite Backend: Isso uses an SQLite backend, demonstrating that comments are not Big Data and can be managed efficiently and effectively.")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://isso-comments.de/docs/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/posativ/isso"},"Github")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/isso"},"Template Source"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"isso")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"ghcr.io/isso-comments/isso:release")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Admin Password"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"screenshots"},"Screenshots"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Isso Screenshot",src:n(82378).Z,width:"730",height:"828"})),(0,i.kt)("h2",{id:"change-log"},"Change Log"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2023-2-9 \u2013 first release")),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Supernova3339"},"Supernova3339"))))}c.isMDXComponent=!0},82378:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-748d3104ab287c98e5a01fed2fa1c37c.png"}}]);