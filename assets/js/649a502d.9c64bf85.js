"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[6106],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?o.createElement(m,c(c({ref:t},p),{},{components:r})):o.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84738:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={},c="Postgres Service",s={unversionedId:"protocols/postgres",id:"protocols/postgres",title:"Postgres Service",description:"This service is based on the official Postgres Docker image.",source:"@site/docs/03-protocols/04-postgres.md",sourceDirName:"03-protocols",slug:"/protocols/postgres",permalink:"/docs/protocols/postgres",draft:!1,editUrl:"https://github.com/tidal3527/stable-research/docs/03-protocols/04-postgres.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"MariaDB Service",permalink:"/docs/protocols/mariadb"},next:{title:"Mongo Service",permalink:"/docs/protocols/mongo"}},i={},l=[{value:"Data Location",id:"data-location",level:2},{value:"Remote Access",id:"remote-access",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"postgres-service"},"Postgres Service"),(0,n.kt)("p",null,"This service is based on the official ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/postgres"},(0,n.kt)("inlineCode",{parentName:"a"},"Postgres"))," Docker image."),(0,n.kt)("h2",{id:"data-location"},"Data Location"),(0,n.kt)("p",null,"The data directory can be found at the following path"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/etc/easypanel/projects/[project]/[service]/data\n")),(0,n.kt)("h2",{id:"remote-access"},"Remote Access"),(0,n.kt)("p",null,"To enable remote access for your service, you need to expose it on a public port. In the panel, you can specify the port you want to expose your service to. The port must be unique."),(0,n.kt)("p",null,"Once you set the exposed port, your service will restart and the credentials section will reflect the updates."))}d.isMDXComponent=!0}}]);