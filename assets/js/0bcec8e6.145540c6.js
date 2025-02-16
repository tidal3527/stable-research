"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[6081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={hide_title:!0,sidebar_label:"GLPI",title:"GLPI | Self-Host on Easypanel",description:"How to install GLPI on Easypanel? 1-Click installation template for GLPI on Easypanel"},l=void 0,o={unversionedId:"templates/glpi/index",id:"templates/glpi/index",title:"GLPI | Self-Host on Easypanel",description:"How to install GLPI on Easypanel? 1-Click installation template for GLPI on Easypanel",source:"@site/docs/05-templates/glpi/index.md",sourceDirName:"05-templates/glpi",slug:"/templates/glpi/",permalink:"/stable-research/docs/templates/glpi/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/glpi/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"GLPI",title:"GLPI | Self-Host on Easypanel",description:"How to install GLPI on Easypanel? 1-Click installation template for GLPI on Easypanel"},sidebar:"defaultSidebar",previous:{title:"GlitchTip",permalink:"/stable-research/docs/templates/glitchtip/"},next:{title:"Gogs",permalink:"/stable-research/docs/templates/gogs/"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"glpi"},"GLPI"),(0,r.kt)("p",null,"1-Click installation template for GLPI on Easypanel"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"GLPI (Gestionnaire Libre de Parc Informatique) is a powerful IT asset management and help desk software designed to streamline IT operations. It offers features like inventory management, ticketing, and reporting, making it an ideal solution for IT teams. With its robust plugin support and user-friendly interface, GLPI provides extensive customization options to adapt to various organizational needs. This containerized version is based on Docker Baseimage KasmVNC, ensuring smooth multi-platform support and flexible deployment."),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("p",null,"Default login is; glpi/glpi, and other credentials can be found on the Github repository or during the installation wizard."),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Comprehensive IT Asset Management: GLPI enables organizations to efficiently manage IT assets, track hardware, and maintain an up-to-date inventory."),(0,r.kt)("li",{parentName:"ul"},"Integrated Help Desk System: Includes a robust ticketing system to streamline issue tracking and resolution for IT teams."),(0,r.kt)("li",{parentName:"ul"},"Extensive Customization: Offers a variety of plugins and configuration options to adapt the software to specific organizational requirements."),(0,r.kt)("li",{parentName:"ul"},"Web-Based Interface: Accessible from any device, making IT operations manageable from anywhere.")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Asset Inventory Management: Track and manage hardware, software, and other IT assets effectively."),(0,r.kt)("li",{parentName:"ul"},"Ticketing System: Manage user requests, incidents, and changes through an intuitive help desk interface."),(0,r.kt)("li",{parentName:"ul"},"Reporting and Statistics: Generate detailed reports to analyze IT performance and identify improvement areas."),(0,r.kt)("li",{parentName:"ul"},"Plugin Support: Enhance GLPI with a variety of plugins developed by the community."),(0,r.kt)("li",{parentName:"ul"},"User and Group Management: Manage roles and permissions to ensure secure access control."),(0,r.kt)("li",{parentName:"ul"},"Multi-Language Support: Available in multiple languages to cater to global organizations."),(0,r.kt)("li",{parentName:"ul"},"Custom Workflows: Define workflows and automate repetitive IT tasks for improved efficiency."),(0,r.kt)("li",{parentName:"ul"},"Integration Capabilities: Integrates with various third-party tools and APIs for extended functionality."),(0,r.kt)("li",{parentName:"ul"},"Centralized IT Management: Centralize IT asset and help desk management for better visibility and coordination.")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://glpi-project.org/documentation/"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/glpi-project/glpi"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/glpi"},"Template Source"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"glpi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"diouxx/glpi")))),(0,r.kt)("h2",{id:"screenshots"},"Screenshots"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GLPI Screenshot",src:n(789).Z,width:"1594",height:"1238"})),(0,r.kt)("h2",{id:"change-log"},"Change Log"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2024-12-31 \u2013 Template Release")),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ahson-Shaikh"},"Ahson Shaikh"))))}m.isMDXComponent=!0},789:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-00147c75bff52c120f9836b6c392fa3e.png"}}]);