"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={hide_title:!0,sidebar_label:"GlitchTip",title:"GlitchTip | Self-Host on Easypanel",description:"How to install GlitchTip on Easypanel? 1-Click installation template for GlitchTip on Easypanel"},l=void 0,o={unversionedId:"templates/glitchtip/index",id:"templates/glitchtip/index",title:"GlitchTip | Self-Host on Easypanel",description:"How to install GlitchTip on Easypanel? 1-Click installation template for GlitchTip on Easypanel",source:"@site/docs/05-templates/glitchtip/index.md",sourceDirName:"05-templates/glitchtip",slug:"/templates/glitchtip/",permalink:"/stable-research/docs/templates/glitchtip/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/glitchtip/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"GlitchTip",title:"GlitchTip | Self-Host on Easypanel",description:"How to install GlitchTip on Easypanel? 1-Click installation template for GlitchTip on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Glances",permalink:"/stable-research/docs/templates/glances/"},next:{title:"GLPI",permalink:"/stable-research/docs/templates/glpi/"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"glitchtip"},"GlitchTip"),(0,i.kt)("p",null,"1-Click installation template for GlitchTip on Easypanel"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"GlitchTip is a simple, open-source error tracking application designed to collect, organize, and alert you about every error from your project in real time. It allows you to monitor your software","'","s performance, track errors, and check your site","'","s uptime all in one place. GlitchTip is compatible with Sentry client SDKs, offering a more straightforward operation. It provides a comprehensive error tracking system, reporting your website or application","'","s exceptions, log messages, Content Security Policy violations, and more. With GlitchTip, you can also monitor your application","'","s performance, identifying slow web requests, database calls, and other transactions. Additionally, it offers uptime monitoring, pinging your site and alerting you when it","'","s not responding. GlitchTip is the perfect choice for those who value simplicity, affordability, and the freedom provided by open source."),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"To create an admin user, run the command ./manage.py createsuperuser"),(0,i.kt)("h2",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Real-Time Error Tracking: GlitchTip collects every error from your project in real time, helping you to organize and make them useful. You can receive alerts when and where you want, ensuring you're always on top of any issues that arise."),(0,i.kt)("li",{parentName:"ul"},"Affordable and Simple: GlitchTip is designed with simplicity and affordability in mind. It's an open-source solution that you can modify and use as you see fit, without breaking your budget."),(0,i.kt)("li",{parentName:"ul"},"Performance Monitoring: With GlitchTip, you can monitor your application's performance and find out where your app is slow. It takes a simple, out of the box approach, helping you to identify your slowest web requests, database calls, and other transactions."),(0,i.kt)("li",{parentName:"ul"},"Uptime Monitoring: GlitchTip can ping your site and warn you when it's not responding. It can also send you an alert via email or webhook if it doesn't receive your scheduled ping.")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Error Tracking: GlitchTip allows you to report your website or application's exceptions, log messages, Content Security Policy violations, and more to one place for triage and resolution."),(0,i.kt)("li",{parentName:"ul"},"Application Performance Monitoring: GlitchTip provides a simple, out of the box approach to application performance monitoring. It helps you to identify your slowest web requests, database calls, and other transactions."),(0,i.kt)("li",{parentName:"ul"},"Uptime Monitoring: GlitchTip can ping your site and warn you when it's not responding. It can also reverse this process and send GlitchTip a request on schedule. If GlitchTip doesn't receive your ping, it will send you an alert.")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://glitchtip.com/"},"Website")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/glitchtip"},"Gitlab")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/glitchtip/glitchtip"},"Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://glitchtip.com/documentation"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/glitchtip"},"Template Source"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable User Registration"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable Organization Creation"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"glitchtip")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"glitchtip/glitchtip:v4.2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Redis Service Name"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"glitchtip-db")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Redis Service Name"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"glitchtip-redis")))),(0,i.kt)("h2",{id:"screenshots"},"Screenshots"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GlitchTip Screenshot",src:n(25804).Z,width:"1200",height:"674"})),(0,i.kt)("h2",{id:"change-log"},"Change Log"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2023-04-06 \u2013 First Release"),(0,i.kt)("li",{parentName:"ul"},"2024-10-09 \u2013 Version changed to v4.1.4"),(0,i.kt)("li",{parentName:"ul"},"2025-01-14 \u2013 Version bumped to v4.2")),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://berksmbl.com"},"Berk S\xfcmb\xfcl"))))}m.isMDXComponent=!0},25804:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-ee97cc46d1db493d74d9b44b276997ca.png"}}]);