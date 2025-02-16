"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[9365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={hide_title:!0,sidebar_label:"OpenEMR",title:"OpenEMR | Self-Host on Easypanel",description:"How to install OpenEMR on Easypanel? 1-Click installation template for OpenEMR on Easypanel"},l=void 0,o={unversionedId:"templates/openemr/index",id:"templates/openemr/index",title:"OpenEMR | Self-Host on Easypanel",description:"How to install OpenEMR on Easypanel? 1-Click installation template for OpenEMR on Easypanel",source:"@site/docs/05-templates/openemr/index.md",sourceDirName:"05-templates/openemr",slug:"/templates/openemr/",permalink:"/stable-research/docs/templates/openemr/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/openemr/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"OpenEMR",title:"OpenEMR | Self-Host on Easypanel",description:"How to install OpenEMR on Easypanel? 1-Click installation template for OpenEMR on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Openblocks",permalink:"/stable-research/docs/templates/openblocks/"},next:{title:"OpenHAB",permalink:"/stable-research/docs/templates/openhab/"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"openemr"},"OpenEMR"),(0,r.kt)("p",null,"1-Click installation template for OpenEMR on Easypanel"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"OpenEMR is a powerful, open-source electronic medical records and practice management solution designed for efficient healthcare operations. It provides a comprehensive, user-friendly interface, supports modular functionality, and offers robust reporting and analytics for clinical and administrative tasks. With OpenEMR, healthcare providers can manage patient records, appointments, billing, and more. The application is accessible via your host on ports 80 and 443. This container is built on a lightweight Docker image, providing additional environment variables and configurations for enhanced flexibility. It also supports the docker manifest for multi-platform awareness, ensuring the correct image for your architecture."),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Comprehensive Patient Management: OpenEMR streamlines patient data management, scheduling, electronic medical records, and billing, ensuring efficient healthcare operations."),(0,r.kt)("li",{parentName:"ul"},"Open Source Flexibility: As an open source solution, OpenEMR offers unparalleled customization and integration possibilities to meet diverse healthcare needs."),(0,r.kt)("li",{parentName:"ul"},"Regulatory Compliance: With robust reporting and security features, OpenEMR helps healthcare providers adhere to regulatory standards and improve patient care.")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Electronic Medical Records: Securely store and manage comprehensive patient records, including medical history, treatments, and lab results."),(0,r.kt)("li",{parentName:"ul"},"Appointment Scheduling: Efficiently manage patient appointments, reminders, and calendar integrations for streamlined operations."),(0,r.kt)("li",{parentName:"ul"},"Billing and Insurance Management: Automate billing processes and handle insurance claims to simplify financial administration."),(0,r.kt)("li",{parentName:"ul"},"Reporting and Analytics: Generate detailed reports to gain insights into clinical performance and administrative efficiency.")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.open-emr.org/wiki/index.php/OpenEMR_Wiki_Home_Page"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openemr/openemr"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/openemr"},"Template Source"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"openemr")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"openemr/openemr:7.0.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Admin User"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"admin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Admin Password"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"password")))),(0,r.kt)("h2",{id:"screenshots"},"Screenshots"),(0,r.kt)("h2",{id:"change-log"},"Change Log"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2025-02-11 \u2013 Template Release")),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ahson-Shaikh"},"Ahson Shaikh"))))}u.isMDXComponent=!0}}]);