"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[9814],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:e},p),{},{components:n})):r.createElement(f,a({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19685:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={hide_title:!0,sidebar_label:"OctoPrint",title:"OctoPrint | Self-Host on Easypanel",description:"How to install OctoPrint on Easypanel? 1-Click installation template for OctoPrint on Easypanel"},a=void 0,l={unversionedId:"templates/octoprint/index",id:"templates/octoprint/index",title:"OctoPrint | Self-Host on Easypanel",description:"How to install OctoPrint on Easypanel? 1-Click installation template for OctoPrint on Easypanel",source:"@site/docs/05-templates/octoprint/index.md",sourceDirName:"05-templates/octoprint",slug:"/templates/octoprint/",permalink:"/stable-research/docs/templates/octoprint/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/octoprint/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"OctoPrint",title:"OctoPrint | Self-Host on Easypanel",description:"How to install OctoPrint on Easypanel? 1-Click installation template for OctoPrint on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Octobox",permalink:"/stable-research/docs/templates/octobox/"},next:{title:"Odoo",permalink:"/stable-research/docs/templates/odoo/"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],p={toc:c},u="wrapper";function d(t){let{components:e,...i}=t;return(0,o.kt)(u,(0,r.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"octoprint"},"OctoPrint"),(0,o.kt)("p",null,"1-Click installation template for OctoPrint on Easypanel"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"OctoPrint is a comprehensive web interface designed to provide full remote control and monitoring of your 3D printer. It allows you to manage every aspect of your 3D printing jobs directly from your browser. With OctoPrint, you can access the embedded webcam feed to watch your printer in action, receive constant feedback on the progress of your print job, and even view a rendition of the GCODE you are currently printing. The app also enables you to monitor and adjust the temperatures of your hotends and print bed on the fly, move the print head along all axes, and start, stop, or pause your print job at any time. OctoPrint is compatible with most consumer 3D printers and its powerful plugin system allows for functionality extension. It is 100% open source, allowing everyone to modify it to their own needs. Additional features include creating timelapse recordings of your prints, slicing your STL files directly within the app, built-in access controls, and the ability to add system commands to the menu for easy shutdown or reboot of your OctoPrint server or printer."),(0,o.kt)("h2",{id:"benefits"},"Benefits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Full Remote Control & Monitoring: OctoPrint provides a comprehensive web interface for controlling your 3D printer. You can control and monitor every aspect of your 3D printer and your printing jobs right from within your browser. This includes access to the embedded webcam feed, constant feedback on the progress of your print job, temperature control of your hotends and print bed, and movement of the print head along all axes."),(0,o.kt)("li",{parentName:"ul"},"Compatible and Extendable: OctoPrint is compatible with most consumer 3D printers out of the box. Its powerful plugin system allows for extending its functionality in various ways, including bed leveling visualization, timelapse creation, UI theming, firmware updating, and adding support for specific printers."),(0,o.kt)("li",{parentName:"ul"},"100% Open Source: OctoPrint is Free and Open Source Software released under the GNU Affero General Public License (AGPL). This means that all its source code is available in its GitHub repository and can be modified to suit your needs.")),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remote Control & Monitoring: Control and monitor every aspect of your 3D printer and your printing jobs right from within your browser. This includes starting, stopping, or pausing your current print job at any time."),(0,o.kt)("li",{parentName:"ul"},"Plugin System: OctoPrint's powerful plugin system allows for extending its functionality in various ways. This includes visualizing your bed leveling, creating stunning timelapses, controlling the theming of OctoPrint\u2019s UI, updating your printer\u2019s firmware, and adding support for specific printers."),(0,o.kt)("li",{parentName:"ul"},"Open Source: OctoPrint is Free and Open Source Software, meaning you can modify it to suit your needs. All its source code is available in its GitHub repository."),(0,o.kt)("li",{parentName:"ul"},"Timelapse Recordings: Create awesome timelapse recordings of your prints directly within OctoPrint."),(0,o.kt)("li",{parentName:"ul"},"Built-in Access Controls: Control who can control your printer with the built-in access controls."),(0,o.kt)("li",{parentName:"ul"},"System Commands: Add system commands to the menu to easily shutdown or reboot your OctoPrint server or even your printer."),(0,o.kt)("li",{parentName:"ul"},"Event Hooks: Configure event hooks to react to certain events within OctoPrint by calling external commands or sending custom GCODE to your printer.")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://octoprint.org"},"Website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.octoprint.org"},"Docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OctoPrint/OctoPrint"},"Github")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/octoprint"},"Template Source"))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Enable MJPG Streamer"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"false")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"octoprint")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"octoprint/octoprint:1.10.2")))),(0,o.kt)("h2",{id:"screenshots"},"Screenshots"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"OctoPrint Screenshot",src:n(61172).Z,width:"1042",height:"786"}),"\n",(0,o.kt)("img",{alt:"OctoPrint Screenshot",src:n(42290).Z,width:"1042",height:"786"}),"\n",(0,o.kt)("img",{alt:"OctoPrint Screenshot",src:n(64006).Z,width:"1042",height:"786"}),"\n",(0,o.kt)("img",{alt:"OctoPrint Screenshot",src:n(21772).Z,width:"1042",height:"786"})),(0,o.kt)("h2",{id:"change-log"},"Change Log"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2023-07-11 \u2013 First Release")),(0,o.kt)("h2",{id:"contributors"},"Contributors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://berksmbl.com"},"Berk S\xfcmb\xfcl"))))}d.isMDXComponent=!0},61172:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/screenshot1-9a713d7f06288f860ca004e5261fbd9a.png"},42290:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/screenshot2-4fde1ed9b9fac46b9fcb4d52d425c960.png"},64006:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/screenshot3-e92a49a8f6cce9a6f1e567216674dbfc.png"},21772:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/screenshot4-8effbbcbf14607c7b6cf44c35e106472.png"}}]);