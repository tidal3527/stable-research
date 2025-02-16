"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[8469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),g=n,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||l;return a?i.createElement(d,r(r({ref:t},u),{},{components:a})):i.createElement(d,r({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));const l={hide_title:!0,sidebar_label:"Mailhog",title:"Mailhog | Self-Host on Easypanel",description:"How to install Mailhog on Easypanel? 1-Click installation template for Mailhog on Easypanel"},r=void 0,o={unversionedId:"templates/mailhog/index",id:"templates/mailhog/index",title:"Mailhog | Self-Host on Easypanel",description:"How to install Mailhog on Easypanel? 1-Click installation template for Mailhog on Easypanel",source:"@site/docs/05-templates/mailhog/index.md",sourceDirName:"05-templates/mailhog",slug:"/templates/mailhog/",permalink:"/docs/templates/mailhog/",draft:!1,editUrl:"https://github.com/tidal3527/stable-research/docs/05-templates/mailhog/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Mailhog",title:"Mailhog | Self-Host on Easypanel",description:"How to install Mailhog on Easypanel? 1-Click installation template for Mailhog on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Maildev",permalink:"/docs/templates/maildev/"},next:{title:"Mailpit",permalink:"/docs/templates/mailpit/"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...l}=e;return(0,n.kt)(m,(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mailhog"},"Mailhog"),(0,n.kt)("p",null,"1-Click installation template for Mailhog on Easypanel"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"MailHog is an intuitive email testing tool designed for developers. It allows you to configure your application to use MailHog for SMTP delivery, enabling you to view your outgoing emails in a user-friendly web UI. The app also offers the option to release messages to real SMTP servers for delivery. With MailHog, you can view messages in the web UI or retrieve them using the JSON API. It supports SMTP AUTH and PIPELINING, and provides real-time updates using EventSource. MailHog also includes a Chaos Monkey for failure testing and HTTP basic authentication for its UI and API. It","'","s lightweight, portable, and requires no installation."),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Efficient Email Testing: MailHog is a powerful tool for developers, allowing you to easily test your outgoing SMTP server. It provides a simple way to view your outgoing emails in a web-based user interface, ensuring that your email system is working as expected."),(0,n.kt)("li",{parentName:"ul"},"Flexible Email Release: With MailHog, you have the option to release your emails to real SMTP servers for delivery. This gives you the flexibility to test your emails in a controlled environment before sending them out to actual recipients."),(0,n.kt)("li",{parentName:"ul"},"Multi-Platform Compatibility: Built with Go, MailHog runs without installation on multiple platforms. This makes it a versatile tool that can be used in a variety of development environments.")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Web UI for Email Viewing: MailHog provides a web interface where you can view your messages in plain text, HTML, or source form. This makes it easy to inspect your outgoing emails and ensure they are formatted correctly."),(0,n.kt)("li",{parentName:"ul"},"JSON API for Message Retrieval: MailHog includes a JSON API that allows you to list, retrieve, and delete messages. This provides a convenient way to manage your test emails and keep your testing environment clean."),(0,n.kt)("li",{parentName:"ul"},"Real-time Updates: MailHog supports real-time updates using EventSource. This means you can see changes to your outgoing emails as they happen, helping you to identify and fix issues more quickly."),(0,n.kt)("li",{parentName:"ul"},"Support for SMTP AUTH and PIPELINING: MailHog implements RFC5321, including support for SMTP AUTH (RFC4954) and PIPELINING (RFC2920). This ensures that your test emails are sent in accordance with established email protocols."),(0,n.kt)("li",{parentName:"ul"},"In-memory Message Storage: MailHog stores messages in-memory, providing a lightweight and efficient way to manage your test emails. It also supports MongoDB and file-based storage for message persistence.")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mailhog/MailHog/"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/mailhog"},"Template Source"))),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"mailhog")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"mailhog/mailhog:v1.0.1")))),(0,n.kt)("h2",{id:"screenshots"},"Screenshots"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Mailhog Screenshot",src:a(71966).Z,width:"2444",height:"1444"})),(0,n.kt)("h2",{id:"change-log"},"Change Log"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2022-10-31 \u2013 first release")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/D8vjork"},"Rub\xe9n Robles"))))}c.isMDXComponent=!0},71966:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/screenshot-06d429065d3a23705b1b64c09a6598eb.png"}}]);