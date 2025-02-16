"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[2721],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={slug:"multi-server-support-beta-release",title:"Multi-Server Support (Beta)",authors:["deiucanta"]},s=void 0,l={permalink:"/blog/multi-server-support-beta-release",editUrl:"https://github.com/easypanel-io/website/tree/main/blog/2023-04-04-multi-server/index.md",source:"@site/blog/2023-04-04-multi-server/index.md",title:"Multi-Server Support (Beta)",description:"We are thrilled to announce our latest development - multi-server support! This highly-requested feature will significantly benefit our business users.",date:"2023-04-04T00:00:00.000Z",formattedDate:"April 4, 2023",tags:[],readingTime:1.5,hasTruncateMarker:!1,authors:[{name:"Andrei Canta",title:"Founder of Easypanel",url:"https://twitter.com/deiucanta",imageURL:"https://github.com/deiucanta.png",key:"deiucanta"}],frontMatter:{slug:"multi-server-support-beta-release",title:"Multi-Server Support (Beta)",authors:["deiucanta"]},nextItem:{title:"Database backups are here!",permalink:"/blog/database-backups-are-here"}},i={authorsImageUrls:[void 0]},u=[{value:"One Manager Node, Multiple Worker Nodes",id:"one-manager-node-multiple-worker-nodes",level:2},{value:"Ideal for Stateless Services",id:"ideal-for-stateless-services",level:2},{value:"License Enforcement on the Horizon",id:"license-enforcement-on-the-horizon",level:2},{value:"Stay Connected",id:"stay-connected",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are thrilled to announce our latest development - multi-server support! This highly-requested feature will significantly benefit our business users."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(54049).Z,width:"2400",height:"1350"})),(0,a.kt)("h2",{id:"one-manager-node-multiple-worker-nodes"},"One Manager Node, Multiple Worker Nodes"),(0,a.kt)("p",null,"Under the hood, Easypanel utilizes Docker Swarm. Our newest implementation now enables you to add multiple worker nodes. When deploying services, the workload will be evenly distributed across all your servers. If you happen to remove a worker node, the workload from that server will be automatically redistributed amongst the remaining nodes."),(0,a.kt)("p",null,"Please note that Easypanel currently does not support multiple manager nodes, meaning you will not achieve a fully redundant infrastructure. If redundancy is essential for your use case, you can set up two separate Easypanel clusters and place a managed load balancer in front of them."),(0,a.kt)("h2",{id:"ideal-for-stateless-services"},"Ideal for Stateless Services"),(0,a.kt)("p",null,"Multi-server support is best suited for stateless services - those which do not store any data on the local disk or can afford data loss upon restart."),(0,a.kt)("p",null,"It is crucial to design your applications in such a way that they can effectively leverage stateless services as much as possible. There are numerous strategies for accomplishing this, one of which includes utilizing object storage services like AWS S3 or self-hosted MinIO."),(0,a.kt)("h2",{id:"license-enforcement-on-the-horizon"},"License Enforcement on the Horizon"),(0,a.kt)("p",null,"During the beta phase, our multi-server support is accessible for everyone to try. However, as we transition towards a stable release, this feature will be exclusively available to users with business licenses."),(0,a.kt)("p",null,"Starting from May 1st, license enforcement will be in effect. Premium features will then become accessible only for servers with active licenses."),(0,a.kt)("h2",{id:"stay-connected"},"Stay Connected"),(0,a.kt)("p",null,"If you want to stay up-to-date with new features or template releases in Easypanel, join our Discord server and follow us on Twitter. Find the links below \ud83d\udc47"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/easypanel_io"},"Easypanel on Twitter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://discord.com/invite/9bcDSXcZQ7"},"Easypanel on Discord"))))}d.isMDXComponent=!0},54049:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/screenshot-33c403cc7e98632341a2c3a0801967d0.png"}}]);