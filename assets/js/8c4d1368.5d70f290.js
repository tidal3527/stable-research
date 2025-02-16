"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[8113],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=l,b=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(b,i(i({ref:t},m),{},{components:a})):n.createElement(b,i({ref:t},m))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={hide_title:!0,sidebar_label:"MailCrab",title:"MailCrab | Self-Host on Easypanel",description:"How to install MailCrab on Easypanel? 1-Click installation template for MailCrab on Easypanel"},i=void 0,o={unversionedId:"templates/mailcrab/index",id:"templates/mailcrab/index",title:"MailCrab | Self-Host on Easypanel",description:"How to install MailCrab on Easypanel? 1-Click installation template for MailCrab on Easypanel",source:"@site/docs/05-templates/mailcrab/index.md",sourceDirName:"05-templates/mailcrab",slug:"/templates/mailcrab/",permalink:"/docs/templates/mailcrab/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/mailcrab/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"MailCrab",title:"MailCrab | Self-Host on Easypanel",description:"How to install MailCrab on Easypanel? 1-Click installation template for MailCrab on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Mage-AI",permalink:"/docs/templates/mageai/"},next:{title:"Maildev",permalink:"/docs/templates/maildev/"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mailcrab"},"MailCrab"),(0,l.kt)("p",null,"1-Click installation template for MailCrab on Easypanel"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"MailCrab is an email test server designed for development purposes. It is an accept-all SMTP server that provides a web interface for viewing and inspecting all incoming emails. You can view formatted mail, download attachments, view headers, or view the complete raw mail contents. The app runs on all amd64 and arm64 platforms using docker. The backend server and the frontend of the app are both written in Rust. The backend receives email over an unencrypted connection on a configurable port, and all email is stored in memory while the application is running. The frontend initially performs a call to receive all existing email metadata and then subscribes for new messages using the websocket connection. When opening a message, the endpoint is used to retrieve the complete message body and raw email. The backend also accepts a few commands over the websocket, to mark a message as opened, to delete a single message or delete all messages."),(0,l.kt)("h2",{id:"benefits"},"Benefits"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Efficient Email Testing: MailCrab is an email test server that allows developers to efficiently test their email functionalities during development. It accepts all SMTP server emails, making it a versatile tool for various email testing scenarios."),(0,l.kt)("li",{parentName:"ul"},"Comprehensive Email Inspection: With MailCrab, you can view and inspect all incoming emails in a user-friendly web interface. It allows you to view formatted mail, download attachments, view headers, or see the complete raw mail contents, providing a comprehensive overview of your email tests."),(0,l.kt)("li",{parentName:"ul"},"Lightweight and Versatile: MailCrab is a lightweight app, with just a 7.77 MB docker image, making it easy to deploy and run. It is also versatile, running on all amd64 and arm64 platforms using docker.")),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Accept-all SMTP Server: MailCrab operates as an accept-all SMTP server, allowing you to test a wide range of email functionalities."),(0,l.kt)("li",{parentName:"ul"},"Web Interface: The app provides a web interface where you can view and inspect all incoming emails, offering a user-friendly way to manage your email tests."),(0,l.kt)("li",{parentName:"ul"},"Email Inspection Tools: MailCrab offers tools to view formatted mail, download attachments, view headers, or see the complete raw mail contents, giving you a detailed insight into your email tests."),(0,l.kt)("li",{parentName:"ul"},"Cross-Platform Compatibility: MailCrab is compatible with all amd64 and arm64 platforms using docker, making it a versatile tool for various development environments.")),(0,l.kt)("h2",{id:"links"},"Links"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tweedegolf/mailcrab"},"Github")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/mailcrab"},"Template Source"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"mailcrab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"marlonb/mailcrab:v1.3.0")))),(0,l.kt)("h2",{id:"screenshots"},"Screenshots"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"MailCrab Screenshot",src:a(14323).Z,width:"1000",height:"495"})),(0,l.kt)("h2",{id:"change-log"},"Change Log"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2022-11-5 \u2013 first release"),(0,l.kt)("li",{parentName:"ul"},"2024-10-18 \u2013 Updated version to 1.3.0")),(0,l.kt)("h2",{id:"contributors"},"Contributors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Supernova3339"},"Supernova3339"))))}u.isMDXComponent=!0},14323:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screenshot-d20f0ea773f23eb85c66fb5aeb0277a2.png"}}]);