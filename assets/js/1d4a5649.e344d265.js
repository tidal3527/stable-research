"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[3729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={hide_title:!0,sidebar_label:"Remmina",title:"Remmina | Self-Host on Easypanel",description:"How to install Remmina on Easypanel? 1-Click installation template for Remmina on Easypanel"},l=void 0,o={unversionedId:"templates/remmina/index",id:"templates/remmina/index",title:"Remmina | Self-Host on Easypanel",description:"How to install Remmina on Easypanel? 1-Click installation template for Remmina on Easypanel",source:"@site/docs/05-templates/remmina/index.md",sourceDirName:"05-templates/remmina",slug:"/templates/remmina/",permalink:"/docs/templates/remmina/",draft:!1,editUrl:"https://github.com/tidal3527/stable-research/docs/05-templates/remmina/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Remmina",title:"Remmina | Self-Host on Easypanel",description:"How to install Remmina on Easypanel? 1-Click installation template for Remmina on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Redmine",permalink:"/docs/templates/redmine/"},next:{title:"Request Baskets",permalink:"/docs/templates/request-baskets/"}},s={},m=[{value:"Description",id:"description",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],p={toc:m},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"remmina"},"Remmina"),(0,r.kt)("p",null,"1-Click installation template for Remmina on Easypanel"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Remmina is a remote desktop client designed to be useful for system administrators and travellers who need to work with multiple remote computers. It supports a variety of network protocols, including RDP, VNC, SPICE, NX, XDMCP, SSH and EXEC, all within an integrated and consistent user interface. The app is written in GTK and is designed to be functional on both large and tiny screens. It can be accessed via http://yourhost:3000/ or https://yourhost:3001/. The app is based on Docker Baseimage KasmVNC, which provides additional environment variables and run configurations to enable or disable specific functionality."),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("p",null,"use abc:abc to login. To access the login interface, add ?login=true to your URL."),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remote Access: Remmina provides the ability to access and work on multiple remote computers, making it an ideal tool for system administrators and travellers."),(0,r.kt)("li",{parentName:"ul"},"Supports Multiple Network Protocols: The app supports a variety of network protocols including RDP, VNC, SPICE, NX, XDMCP, SSH and EXEC, offering flexibility and versatility in remote connections."),(0,r.kt)("li",{parentName:"ul"},"Integrated and Consistent User Interface: Remmina offers an integrated and consistent user interface, making it easy to navigate and use, regardless of the network protocol being utilized.")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multi-Platform Awareness: Remmina utilizes the docker manifest for multi-platform awareness, ensuring the correct image is retrieved for your architecture."),(0,r.kt)("li",{parentName:"ul"},"Application Setup: The application can be accessed at specified host addresses, providing easy setup and access to the application."),(0,r.kt)("li",{parentName:"ul"},"Environment Variables: Remmina allows for the setting of environment variables, providing customization and control over the application's functionality."),(0,r.kt)("li",{parentName:"ul"},"Lossless Mode: The app is capable of delivering a true lossless image at a high framerate to your web browser, providing high-quality remote desktop visuals.")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.linuxserver.io/images/docker-remmina"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/linuxserver/docker-remmina"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://remmina.org"},"Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/remmina"},"Template Source"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"remmina")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"lscr.io/linuxserver/remmina:latest")))),(0,r.kt)("h2",{id:"screenshots"},"Screenshots"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Remmina Screenshot",src:n(2864).Z,width:"1366",height:"768"})),(0,r.kt)("h2",{id:"change-log"},"Change Log"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2022-11-15 \u2013 first release")),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supernova3339"},"Supernova3339"))))}u.isMDXComponent=!0},2864:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-ba9e52b2c4ba60f0e784c1d3863bdf14.png"}}]);