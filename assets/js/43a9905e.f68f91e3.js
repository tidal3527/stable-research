"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[5784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={hide_title:!0,sidebar_label:"Dozzle",title:"Dozzle | Self-Host on Easypanel",description:"How to install Dozzle on Easypanel? 1-Click installation template for Dozzle on Easypanel"},o=void 0,i={unversionedId:"regulatory-landscape/dozzle/index",id:"regulatory-landscape/dozzle/index",title:"Dozzle | Self-Host on Easypanel",description:"How to install Dozzle on Easypanel? 1-Click installation template for Dozzle on Easypanel",source:"@site/docs/04-regulatory-landscape/dozzle/index.md",sourceDirName:"04-regulatory-landscape/dozzle",slug:"/regulatory-landscape/dozzle/",permalink:"/docs/regulatory-landscape/dozzle/",draft:!1,editUrl:"https://github.com/tidal3527/stable-research/docs/04-regulatory-landscape/dozzle/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Dozzle",title:"Dozzle | Self-Host on Easypanel",description:"How to install Dozzle on Easypanel? 1-Click installation template for Dozzle on Easypanel"},sidebar:"defaultSidebar",previous:{title:"DomainMod",permalink:"/docs/regulatory-landscape/domainmod/"},next:{title:"Draw.io",permalink:"/docs/regulatory-landscape/drawio/"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dozzle"},"Dozzle"),(0,r.kt)("p",null,"1-Click installation template for Dozzle on Easypanel"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Dozzle is a lightweight, web-based Docker log viewer designed for real-time monitoring and easy troubleshooting. It allows you to view logs of other Docker containers in real-time, streaming new log entries to the web interface without the need for page refreshes. Despite its capabilities, Dozzle is a small application that consumes very little memory and CPU, ensuring it doesn","'","t cause performance issues when run alongside other containers. It also supports connecting to multiple remote hosts, providing a simple drop-down menu to switch between different hosts. Dozzle doesn","'","t store any log files and is solely for live monitoring of your container logs. It also features an intelligent fuzzy search for container names, regex log search, split screen for viewing multiple logs, and live stats with memory and CPU usage. It also provides authentication with a username and password for added security."),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Real-time Monitoring: Dozzle allows you to view logs of other Docker containers in real-time. As new log entries are generated, they are streamed to the web interface without needing to refresh the page."),(0,r.kt)("li",{parentName:"ul"},"Lightweight Application: Dozzle is a lightweight application written in Go, consuming very little memory and CPU. It can be run alongside other containers without causing performance issues."),(0,r.kt)("li",{parentName:"ul"},"Multi-host Support: Dozzle UI supports connecting to multiple remote hosts with a simple drop-down to choose between different hosts.")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Intelligent Fuzzy Search: Dozzle features an intelligent fuzzy search for container names, making it easier to find the logs you need."),(0,r.kt)("li",{parentName:"ul"},"Regex Log Search: You can search logs using regex, providing a powerful tool for pinpointing specific log entries."),(0,r.kt)("li",{parentName:"ul"},"Live Stats: Dozzle provides live stats with memory and CPU usage, giving you real-time insights into your Docker containers."),(0,r.kt)("li",{parentName:"ul"},"Authentication: Dozzle supports authentication with a username and password, ensuring that only authorized users can access your Docker logs.")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dozzle.dev"},"Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/amir20/dozzle"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/amir20/dozzle"},"Docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/dozzle"},"Template Source"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Log Level"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"No Analytics"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"dozzle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"amir20/dozzle:v8.10.1")))),(0,r.kt)("h2",{id:"screenshots"},"Screenshots"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dozzle Screenshot",src:n(72084).Z,width:"600",height:"337"}),"\n",(0,r.kt)("img",{alt:"Dozzle Screenshot",src:n(22343).Z,width:"600",height:"337"}),"\n",(0,r.kt)("img",{alt:"Dozzle Screenshot",src:n(20616).Z,width:"600",height:"337"})),(0,r.kt)("h2",{id:"change-log"},"Change Log"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2023-07-11 \u2013 First Release"),(0,r.kt)("li",{parentName:"ul"},"2024-10-04 \u2013 Version changed from latest to v8.5.5"),(0,r.kt)("li",{parentName:"ul"},"2025-01-09 \u2013 Version bumped to v8.10.1")),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://berksmbl.com"},"Berk S\xfcmb\xfcl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/MuhammadAhsanDonuts"},"Ahson Shaikh"))))}d.isMDXComponent=!0},72084:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot1-54fe2db64c48ec8ca03bf5c01e4e6c72.png"},22343:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot2-be895860edd1f7b0c955f6b87b05be01.png"},20616:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot3-839c8a4d3756f7ebb2f2f61bed4f9e4a.png"}}]);