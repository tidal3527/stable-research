"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[9123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={hide_title:!0,sidebar_label:"Sonatype Nexus",title:"Sonatype Nexus | Self-Host on Easypanel",description:"How to install Sonatype Nexus on Easypanel? 1-Click installation template for Sonatype Nexus on Easypanel"},i=void 0,l={unversionedId:"templates/sonatype-nexus/index",id:"templates/sonatype-nexus/index",title:"Sonatype Nexus | Self-Host on Easypanel",description:"How to install Sonatype Nexus on Easypanel? 1-Click installation template for Sonatype Nexus on Easypanel",source:"@site/docs/05-templates/sonatype-nexus/index.md",sourceDirName:"05-templates/sonatype-nexus",slug:"/templates/sonatype-nexus/",permalink:"/docs/templates/sonatype-nexus/",draft:!1,editUrl:"https://github.com/tidal3527/stable-research/docs/05-templates/sonatype-nexus/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Sonatype Nexus",title:"Sonatype Nexus | Self-Host on Easypanel",description:"How to install Sonatype Nexus on Easypanel? 1-Click installation template for Sonatype Nexus on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Sonarr",permalink:"/docs/templates/sonarr/"},next:{title:"Sourcegraph",permalink:"/docs/templates/sourcegraph/"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sonatype-nexus"},"Sonatype Nexus"),(0,r.kt)("p",null,"1-Click installation template for Sonatype Nexus on Easypanel"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Sonatype Nexus is a powerful repository manager designed to streamline the management and storage of binary components. It enables development teams to efficiently organize, share, and deploy artifacts across various formats, such as Maven, npm, Docker, and more. With its robust feature set and enterprise-grade capabilities, Sonatype Nexus improves DevOps workflows by providing secure, scalable, and centralized storage for software assets."),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("p",null,"After logging in without a password, log out and then log back in using the username admin. To get the password, open the container console tab and run the command cat /nexus-data/admin.password. Once logged in, you will be prompted to change the password."),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Centralized Artifact Management: Nexus Repository Manager provides a single source for all your development artifacts, enabling teams to collaborate more efficiently."),(0,r.kt)("li",{parentName:"ul"},"Security and Compliance: Scan your components for vulnerabilities and ensure compliance with security standards using Sonatype integrations."),(0,r.kt)("li",{parentName:"ul"},"Support for Multiple Formats: Manage a wide range of repository formats, including Maven, npm, Docker, PyPI, and more.")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Repository Management: Organize and control access to software artifacts across different teams and environments."),(0,r.kt)("li",{parentName:"ul"},"Proxy Caching: Reduce build times by caching remote repositories and speeding up dependency resolution."),(0,r.kt)("li",{parentName:"ul"},"Vulnerability Scanning: Integrate with tools like Sonatype Lifecycle to identify and mitigate risks in your dependencies."),(0,r.kt)("li",{parentName:"ul"},"High Availability: Ensure uninterrupted access to your artifacts with clustering and high availability configurations."),(0,r.kt)("li",{parentName:"ul"},"REST API Support: Automate and extend the repository manager's functionality using its comprehensive REST API.")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sonatype/nexus-public"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.sonatype.com/repomanager3"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sonatype.com/nexus-repository-sonatype"},"Demo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/sonatype-nexus"},"Template Source"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"nexus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"sonatype/nexus3:3.75.0")))),(0,r.kt)("h2",{id:"screenshots"},"Screenshots"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sonatype Nexus Screenshot",src:n(79194).Z,width:"1906",height:"911"})),(0,r.kt)("h2",{id:"change-log"},"Change Log"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2024-12-05 \u2013 First Release")),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ahson-Shaikh"},"Ahson Shaikh"))))}m.isMDXComponent=!0},79194:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-443edc83b6cdb0467c6fe80f37991e5c.png"}}]);