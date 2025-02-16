"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[8681],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),b=r,d=m["".concat(s,".").concat(b)]||m[b]||c[b]||i;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},30236:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={hide_title:!0,sidebar_label:"RabbitMQ",title:"RabbitMQ | Self-Host on Easypanel",description:"How to install RabbitMQ on Easypanel? 1-Click installation template for RabbitMQ on Easypanel"},l=void 0,o={unversionedId:"templates/rabbitmq/index",id:"templates/rabbitmq/index",title:"RabbitMQ | Self-Host on Easypanel",description:"How to install RabbitMQ on Easypanel? 1-Click installation template for RabbitMQ on Easypanel",source:"@site/docs/05-templates/rabbitmq/index.md",sourceDirName:"05-templates/rabbitmq",slug:"/templates/rabbitmq/",permalink:"/docs/templates/rabbitmq/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/rabbitmq/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"RabbitMQ",title:"RabbitMQ | Self-Host on Easypanel",description:"How to install RabbitMQ on Easypanel? 1-Click installation template for RabbitMQ on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Qdrant",permalink:"/docs/templates/qdrant/"},next:{title:"Radarr",permalink:"/docs/templates/radarr/"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rabbitmq"},"RabbitMQ"),(0,r.kt)("p",null,"1-Click installation template for RabbitMQ on Easypanel"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"RabbitMQ is an open-source message broker software that facilitates reliable messaging between applications and services. It supports a variety of messaging protocols such as AMQP and MQTT, making it a versatile solution for modern distributed systems. With RabbitMQ, you can efficiently manage message queues, exchanges, and routing, enabling seamless communication across different components of your application. It also provides a user-friendly web-based management interface for monitoring, configuration, and troubleshooting."),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reliable Message Delivery: RabbitMQ ensures reliable and efficient message delivery with support for message acknowledgments, persistence, and clustering for high availability."),(0,r.kt)("li",{parentName:"ul"},"Versatile Protocol Support: RabbitMQ supports multiple messaging protocols, including AMQP, MQTT, and STOMP, enabling flexibility in communication between different systems."),(0,r.kt)("li",{parentName:"ul"},"Easy Management and Monitoring: With RabbitMQ's Management UI, you can monitor queues, exchanges, and message throughput, and easily configure the broker through a web interface.")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lightweight and Fast: RabbitMQ is lightweight and optimized for fast message processing, making it ideal for both small-scale and enterprise-level applications."),(0,r.kt)("li",{parentName:"ul"},"High Availability: RabbitMQ supports clustering and mirrored queues to ensure message availability and prevent data loss in case of failure."),(0,r.kt)("li",{parentName:"ul"},"Management Web UI: The built-in web-based UI allows you to monitor queues, exchanges, and performance metrics in real time."),(0,r.kt)("li",{parentName:"ul"},"Plugins and Extensibility: Extend RabbitMQ's functionality with a rich set of plugins for authentication, monitoring, and protocol support.")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rabbitmq.com/"},"Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rabbitmq.com/documentation.html"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rabbitmq"},"GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/rabbitmq"},"Template Source"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"rabbitmq")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"rabbitmq:3-management")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default Vhost"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default User"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"guest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default Password"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"guest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default AMQP Port on Host"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"5672")))),(0,r.kt)("h2",{id:"screenshots"},"Screenshots"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RabbitMQ Screenshot",src:a(55429).Z,width:"1792",height:"756"})),(0,r.kt)("h2",{id:"change-log"},"Change Log"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2024-12-17 \u2013 First release")),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ahson-Shaikh"},"Ahson Shaikh"))))}c.isMDXComponent=!0},55429:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screenshot-b5ee4c4cd41fd35cd8ade47fe97ed50c.jpg"}}]);