"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[1270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,y=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(y,s(s({ref:t},c),{},{components:n})):a.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={hide_title:!0,sidebar_label:"Typesense",title:"Typesense | Self-Host on Easypanel",description:"How to install Typesense on Easypanel? 1-Click installation template for Typesense on Easypanel"},s=void 0,i={unversionedId:"templates/typesense/index",id:"templates/typesense/index",title:"Typesense | Self-Host on Easypanel",description:"How to install Typesense on Easypanel? 1-Click installation template for Typesense on Easypanel",source:"@site/docs/05-templates/typesense/index.md",sourceDirName:"05-templates/typesense",slug:"/templates/typesense/",permalink:"/docs/templates/typesense/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/typesense/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Typesense",title:"Typesense | Self-Host on Easypanel",description:"How to install Typesense on Easypanel? 1-Click installation template for Typesense on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Typebot",permalink:"/docs/templates/typebot/"},next:{title:"Umami",permalink:"/docs/templates/umami/"}},o={},p=[{value:"Description",id:"description",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"typesense"},"Typesense"),(0,r.kt)("p",null,"1-Click installation template for Typesense on Easypanel"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Typesense is a powerful, fast, and typo-tolerant search engine designed to provide delightful search experiences. It is an open-source alternative to Algolia and a more user-friendly alternative to ElasticSearch. Typesense is capable of handling typographical errors gracefully, right out of the box. It is meticulously architected for low-latency, instant searches, offering a response time of less than 50ms. The app allows easy tailoring of search results, sorting of results based on a particular field at query time, and refining of results through faceting and filtering. It also supports grouping of similar results, federated search across multiple collections, geographic location-based search and sorting, and vector searching. Typesense also allows the generation of API keys for access to specific records, making it suitable for multi-tenant applications. It is designed to be simple to set up, integrate with, operate, and scale, making it a perfect choice for building delightful search experiences."),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("p",null,"Find your API key in the environment tab"),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://typesense.org/docs/"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/typesense/typesense"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://typesense.org/"},"Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/typesense"},"Template Source"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"typesense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"typesense/typesense:27.0.rc15")))),(0,r.kt)("h2",{id:"screenshots"},"Screenshots"),(0,r.kt)("h2",{id:"change-log"},"Change Log"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2023-1-25 \u2013 first release")),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supernova3339"},"Supernova3339"))))}m.isMDXComponent=!0}}]);