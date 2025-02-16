"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[4941],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,m=c["".concat(o,".").concat(d)]||c[d]||h[d]||r;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},77234:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={hide_title:!0,sidebar_label:"Hastebin",title:"Hastebin | Self-Host on Easypanel",description:"How to install Hastebin on Easypanel? 1-Click installation template for Hastebin on Easypanel"},s=void 0,l={unversionedId:"templates/hastebin/index",id:"templates/hastebin/index",title:"Hastebin | Self-Host on Easypanel",description:"How to install Hastebin on Easypanel? 1-Click installation template for Hastebin on Easypanel",source:"@site/docs/05-templates/hastebin/index.md",sourceDirName:"05-templates/hastebin",slug:"/templates/hastebin/",permalink:"/docs/templates/hastebin/",draft:!1,editUrl:"https://github.com/tidal3527/stable-research/docs/05-templates/hastebin/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Hastebin",title:"Hastebin | Self-Host on Easypanel",description:"How to install Hastebin on Easypanel? 1-Click installation template for Hastebin on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Hammond",permalink:"/docs/templates/hammond/"},next:{title:"Hasty Paste",permalink:"/docs/templates/hastypaste/"}},o={},p=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hastebin"},"Hastebin"),(0,i.kt)("p",null,"1-Click installation template for Hastebin on Easypanel"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Haste is an open-source software that allows you to quickly and easily share text snippets. It","'","s designed to be simple, pretty, and easy to use. With Haste, you can create a ","'","paste","'"," of your text and it will generate a unique URL that you can share. This is particularly useful for sharing code snippets or other information that you want to quickly share with others. Haste is written in node.js and can be backed by either a file system or redis, providing flexibility in how it","'","s set up. It also includes a utility called haste-client that allows you to create pastes directly from your command line. Haste is designed to work well with a variety of browsers, including Firefox, Chrome, and Safari."),(0,i.kt)("h2",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Efficient Data Sharing: Haste allows users to share data quickly and efficiently. By simply inputting data into the app, users can generate a URL that can be shared with others. This eliminates the need for cumbersome email attachments or other more traditional methods of data sharing."),(0,i.kt)("li",{parentName:"ul"},"Versatile Data Storage: Haste supports a variety of data storage options. Whether you prefer file storage, Redis, PostgreSQL, MongoDB, Memcached, RethinkDB, Google Datastore, or Amazon S3, Haste has you covered. This flexibility allows users to choose the storage option that best suits their needs."),(0,i.kt)("li",{parentName:"ul"},"Simple and Elegant Design: Haste is designed to be simple and elegant. Its user-friendly interface makes it easy for anyone to use, regardless of their technical expertise. Plus, its sleek design makes it a pleasure to work with.")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data Sharing: Haste makes it easy to share data. Simply input your data into the app, and Haste will generate a URL that you can share with others. This feature is perfect for those who need to share large amounts of data quickly and efficiently."),(0,i.kt)("li",{parentName:"ul"},"Multiple Storage Options: Haste supports a variety of data storage options. You can choose to store your data in files, Redis, PostgreSQL, MongoDB, Memcached, RethinkDB, Google Datastore, or Amazon S3. This feature gives you the flexibility to choose the storage option that best suits your needs."),(0,i.kt)("li",{parentName:"ul"},"Rate Limiting: Haste includes built-in rate limiting courtesy of connect-ratelimit. This feature helps to prevent abuse and ensure fair usage by limiting the number of requests a user can make within a certain timeframe."),(0,i.kt)("li",{parentName:"ul"},"Key Generation: Haste includes a key generation feature that generates unique keys for each piece of data you input into the app. You can choose to generate phonetic keys, similar to pwgen, or random keys. This feature ensures that each piece of data you share has a unique identifier.")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/toptal/haste-server/wiki"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/toptal/haste-server"},"Github")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/hastebin"},"Template Source"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"hastebin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"rlister/hastebin:latest")))),(0,i.kt)("h2",{id:"screenshots"},"Screenshots"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Hastebin Screenshot",src:a(50262).Z,width:"1363",height:"608"})),(0,i.kt)("h2",{id:"change-log"},"Change Log"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2022-11-22 \u2013 first release")),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Supernova3339"},"Supernova3339"))))}h.isMDXComponent=!0},50262:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screenshot-6094f1d6a88742cfa4c3e681bc964436.png"}}]);