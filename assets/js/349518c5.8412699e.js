"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[7606],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,m=c["".concat(l,".").concat(d)]||c[d]||g[d]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30357:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={hide_title:!0,sidebar_label:"Gogs",title:"Gogs | Self-Host on Easypanel",description:"How to install Gogs on Easypanel? 1-Click installation template for Gogs on Easypanel"},o=void 0,s={unversionedId:"regulatory-landscape/gogs/index",id:"regulatory-landscape/gogs/index",title:"Gogs | Self-Host on Easypanel",description:"How to install Gogs on Easypanel? 1-Click installation template for Gogs on Easypanel",source:"@site/docs/04-regulatory-landscape/gogs/index.md",sourceDirName:"04-regulatory-landscape/gogs",slug:"/regulatory-landscape/gogs/",permalink:"/docs/regulatory-landscape/gogs/",draft:!1,editUrl:"https://github.com/tidal3527/stable-research/docs/04-regulatory-landscape/gogs/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Gogs",title:"Gogs | Self-Host on Easypanel",description:"How to install Gogs on Easypanel? 1-Click installation template for Gogs on Easypanel"},sidebar:"defaultSidebar",previous:{title:"GLPI",permalink:"/docs/regulatory-landscape/glpi/"},next:{title:"Gotenberg",permalink:"/docs/regulatory-landscape/gotenberg/"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gogs"},"Gogs"),(0,r.kt)("p",null,"1-Click installation template for Gogs on Easypanel"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Gogs is a self-hosted Git service designed to be simple, stable, and extensible. It allows you to set up your own Git service in the most painless way possible. The app is built with Go, enabling it to run on all platforms that Go supports, including Linux, macOS, Windows, and ARM-based systems. Gogs is lightweight and has low minimal requirements, making it possible to run even on an inexpensive Raspberry Pi. It offers a range of features including user dashboard, access to repositories via SSH, HTTP and HTTPS protocols, repository and organization management, and more. Gogs is 100% open source and free of charge, with all source code available under the MIT License."),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Self-Hosted Git Service: Gogs is a painless self-hosted Git service. It is designed to be simple, stable, and extensible, and can be set up in the most straightforward way possible."),(0,r.kt)("li",{parentName:"ul"},"Cross-Platform: Gogs is a cross-platform application. It runs anywhere Go can compile for, including Windows, Mac, Linux, ARM, and more."),(0,r.kt)("li",{parentName:"ul"},"Lightweight: Gogs is lightweight and has low minimal requirements. It can run on an inexpensive Raspberry Pi, making it accessible to a wide range of users."),(0,r.kt)("li",{parentName:"ul"},"Open Source: Gogs is 100% open source and free of charge. All of its source code is available under the MIT License on GitHub.")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User Dashboard: Gogs provides a user dashboard, user profile, and activity timeline. This allows users to manage their projects and track their progress effectively."),(0,r.kt)("li",{parentName:"ul"},"Access Repositories: With Gogs, users can access repositories via SSH, HTTP, and HTTPS protocols. This provides flexibility and convenience for users."),(0,r.kt)("li",{parentName:"ul"},"Repository Management: Gogs offers comprehensive repository management. It includes features like repository and organization webhooks, Git hooks, deploy keys, Git LFS, and more."),(0,r.kt)("li",{parentName:"ul"},"Authentication: Gogs supports authentication via SMTP, LDAP, reverse proxy, GitHub.com, and GitHub Enterprise with 2FA. This ensures the security and integrity of your projects."),(0,r.kt)("li",{parentName:"ul"},"Customization: Gogs allows users to customize HTML templates, static files, and many others. This gives users the freedom to tailor the application to their specific needs.")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gogs.io/"},"Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gogs.io/docs"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gogs/gogs"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/gogs"},"Template Source"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"gogs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"gogs/gogs:0.13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSH Port"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"2222")))),(0,r.kt)("h2",{id:"screenshots"},"Screenshots"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Gogs Screenshot",src:a(81845).Z,width:"1365",height:"613"}),"\n",(0,r.kt)("img",{alt:"Gogs Screenshot",src:a(44505).Z,width:"1365",height:"613"})),(0,r.kt)("h2",{id:"change-log"},"Change Log"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2023-3-16 \u2013 first release"),(0,r.kt)("li",{parentName:"ul"},"2025-01-14 \u2013 Version bumped to 0.13")),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/supernova3339"},"Supernova3339"))))}g.isMDXComponent=!0},81845:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screenshot1-88b639099beaf1febc56af94bb1022a9.png"},44505:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screenshot2-906d8248ba76361d1628a9995bd83e13.png"}}]);