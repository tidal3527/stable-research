"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[4391],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={hide_title:!0,sidebar_label:"Opera",title:"Opera | Self-Host on Easypanel",description:"How to install Opera on Easypanel? 1-Click installation template for Opera on Easypanel"},o=void 0,l={unversionedId:"templates/opera/index",id:"templates/opera/index",title:"Opera | Self-Host on Easypanel",description:"How to install Opera on Easypanel? 1-Click installation template for Opera on Easypanel",source:"@site/docs/05-templates/opera/index.md",sourceDirName:"05-templates/opera",slug:"/templates/opera/",permalink:"/stable-research/docs/templates/opera/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/opera/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Opera",title:"Opera | Self-Host on Easypanel",description:"How to install Opera on Easypanel? 1-Click installation template for Opera on Easypanel"},sidebar:"defaultSidebar",previous:{title:"OpenWebUI",permalink:"/stable-research/docs/templates/openwebui/"},next:{title:"OrangeHRM",permalink:"/stable-research/docs/templates/orangehrm/"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"opera"},"Opera"),(0,n.kt)("p",null,"1-Click installation template for Opera on Easypanel"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Opera is a multi-platform web browser developed by Opera. This app is based on Chromium, but sets itself apart from other Chromium-based browsers through its unique user interface and additional features. The app can be accessed at http://yourhost:3000/ or https://yourhost:3001/. It provides a true lossless image at a high frame rate to your web browser by changing the Stream Quality preset to ","'","Lossless","'",". The app also allows you to specify one or multiple Chromium CLI flags, which will be passed to the application in full. This app is designed to avoid permission issues that can arise between the host OS and the container by allowing you to specify the user PUID and group PGID."),(0,n.kt)("h2",{id:"instructions"},"Instructions"),(0,n.kt)("p",null,"use abc:abc to login. To access the login interface, add ?login=true to your URL."),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Multi-Platform Web Browser: Opera is a versatile web browser that can be used across multiple platforms. It is developed by Opera, a company renowned for its innovative and user-friendly browsing solutions."),(0,n.kt)("li",{parentName:"ul"},"Based on Chromium: Opera is built on Chromium, ensuring high performance and compatibility with a wide range of web technologies. Despite its Chromium base, Opera stands out with its unique user interface and features."),(0,n.kt)("li",{parentName:"ul"},"Multi-Architecture Support: The Opera Docker image supports multiple architectures, making it adaptable to various systems. Simply pulling the image should retrieve the correct version for your architecture.")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User Interface: Opera differentiates itself from other Chromium-based browsers through its unique user interface. It offers a clean, intuitive, and customizable browsing experience."),(0,n.kt)("li",{parentName:"ul"},"Additional Environment Variables: The Docker Baseimage KasmVNC, which the Opera container is based on, provides additional environment variables and run configurations. These allow you to enable or disable specific functionalities as per your requirements."),(0,n.kt)("li",{parentName:"ul"},"Lossless Mode: Opera's Docker container can deliver a true lossless image at a high frame rate to your web browser. This ensures a high-quality browsing experience."),(0,n.kt)("li",{parentName:"ul"},"Docker CLI and Docker Compose Support: You can create a container from the Opera image using either Docker CLI or Docker Compose, providing flexibility in deployment.")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.linuxserver.io/images/docker-opera"},"Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/linuxserver/docker-opera"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/opera"},"Template Source"))),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"opera")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"lscr.io/linuxserver/opera:latest")))),(0,n.kt)("h2",{id:"screenshots"},"Screenshots"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Opera Screenshot",src:r(59264).Z,width:"1356",height:"971"})),(0,n.kt)("h2",{id:"change-log"},"Change Log"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2023-5-7 \u2013 first release")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Supernova3339"},"Supernova3339"))))}m.isMDXComponent=!0},59264:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/screenshot-17155e4d036db7eea1a12c80a455f7ba.png"}}]);