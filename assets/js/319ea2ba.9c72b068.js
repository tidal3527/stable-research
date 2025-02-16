"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[2368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={hide_title:!0,sidebar_label:"Deluge",title:"Deluge | Self-Host on Easypanel",description:"How to install Deluge on Easypanel? 1-Click installation template for Deluge on Easypanel"},o=void 0,i={unversionedId:"templates/deluge/index",id:"templates/deluge/index",title:"Deluge | Self-Host on Easypanel",description:"How to install Deluge on Easypanel? 1-Click installation template for Deluge on Easypanel",source:"@site/docs/05-templates/deluge/index.md",sourceDirName:"05-templates/deluge",slug:"/templates/deluge/",permalink:"/docs/templates/deluge/",draft:!1,editUrl:"https://github.com/tidal3527/stable-research/docs/05-templates/deluge/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Deluge",title:"Deluge | Self-Host on Easypanel",description:"How to install Deluge on Easypanel? 1-Click installation template for Deluge on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Dashy",permalink:"/docs/templates/dashy/"},next:{title:"DevLake",permalink:"/docs/templates/devlake/"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deluge"},"Deluge"),(0,l.kt)("p",null,"1-Click installation template for Deluge on Easypanel"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Deluge is a comprehensive BitTorrent client designed to cater to your torrenting needs. It operates on a daemon/client model and is equipped with various user interfaces, including GTK-UI, Web-UI, and Console-UI. At its core, Deluge uses libtorrent to efficiently manage the BitTorrent protocol. The app allows you to start various user-interfaces and the Deluge daemon with simple commands. It also provides a web UI that can be accessed at http://localhost:8112 with the default password ","'","deluge","'",". For advanced users, Deluge offers features like bandwidth tweaking, VPN, and reverse proxy."),(0,l.kt)("h2",{id:"benefits"},"Benefits"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Efficient Torrent Management: Deluge is a BitTorrent client that efficiently manages your torrent downloads. It uses a daemon/client model, making it a powerful tool for handling the BitTorrent protocol."),(0,l.kt)("li",{parentName:"ul"},"Multiple User Interfaces: Deluge offers various user interfaces to cater to different user preferences. These include the GTK-UI, Web-UI, and Console-UI, providing flexibility and convenience.")),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Daemon/Client Model: Deluge operates on a daemon/client model. This allows it to run the Deluge daemon in the background, enabling efficient torrent management."),(0,l.kt)("li",{parentName:"ul"},"Various User Interfaces: Deluge provides multiple user interfaces. You can choose from the GTK-UI, Web-UI, and Console-UI based on your preference or needs."),(0,l.kt)("li",{parentName:"ul"},"Libtorrent Core: At its core, Deluge uses libtorrent to handle the BitTorrent protocol. This ensures robust and reliable torrent downloading."),(0,l.kt)("li",{parentName:"ul"},"Remote Connection: Deluge allows clients to remotely connect to the daemon, providing flexibility and convenience for managing your torrents.")),(0,l.kt)("h2",{id:"links"},"Links"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://dev.deluge-torrent.org/wiki/UserGuide"},"Documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/deluge-torrent/deluge"},"Github")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/deluge"},"Template Source"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"deluge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"linuxserver/deluge:2.1.1")))),(0,l.kt)("h2",{id:"screenshots"},"Screenshots"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Deluge Screenshot",src:n(95967).Z,width:"1365",height:"613"})),(0,l.kt)("h2",{id:"change-log"},"Change Log"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2023-1-25 \u2013 first release")),(0,l.kt)("h2",{id:"contributors"},"Contributors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Supernova3339"},"Supernova3339"))))}d.isMDXComponent=!0},95967:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/screenshot-150bd3bf89ecbbe378d0ae06bb516322.png"}}]);