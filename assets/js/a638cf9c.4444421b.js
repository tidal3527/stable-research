"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[86],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),y=n,d=u["".concat(l,".").concat(y)]||u[y]||f[y]||a;return r?o.createElement(d,c(c({ref:t},p),{},{components:r})):o.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={},c="MySQL Service",i={unversionedId:"protocols/mysql",id:"protocols/mysql",title:"MySQL Service",description:"This service is based on the official MySQL Docker image.",source:"@site/docs/03-protocols/02-mysql.md",sourceDirName:"03-protocols",slug:"/protocols/mysql",permalink:"/docs/protocols/mysql",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"App Service",permalink:"/docs/protocols/app"},next:{title:"MariaDB Service",permalink:"/docs/protocols/mariadb"}},l={},s=[{value:"Data Location",id:"data-location",level:2},{value:"Remote Access",id:"remote-access",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mysql-service"},"MySQL Service"),(0,n.kt)("p",null,"This service is based on the official ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/mysql"},(0,n.kt)("inlineCode",{parentName:"a"},"MySQL"))," Docker image."),(0,n.kt)("h2",{id:"data-location"},"Data Location"),(0,n.kt)("p",null,"The data directory can be found at the following path"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/etc/easypanel/projects/[project]/[service]/data\n")),(0,n.kt)("h2",{id:"remote-access"},"Remote Access"),(0,n.kt)("p",null,"To enable remote access for your service, you need to expose it on a public port. In the panel, you can specify the port you want to expose your service to. The port must be unique."),(0,n.kt)("p",null,"Once you set the exposed port, your service will restart and the credentials section will reflect the updates."))}f.isMDXComponent=!0}}]);