"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[454],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),g=i,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},71772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={hide_title:!0,sidebar_label:"Docker Registry",title:"Docker Registry | Self-Host on Easypanel",description:"How to install Docker Registry on Easypanel? 1-Click installation template for Docker Registry on Easypanel"},o=void 0,l={unversionedId:"templates/docker-registry/index",id:"templates/docker-registry/index",title:"Docker Registry | Self-Host on Easypanel",description:"How to install Docker Registry on Easypanel? 1-Click installation template for Docker Registry on Easypanel",source:"@site/docs/05-templates/docker-registry/index.md",sourceDirName:"05-templates/docker-registry",slug:"/templates/docker-registry/",permalink:"/docs/templates/docker-registry/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/docker-registry/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Docker Registry",title:"Docker Registry | Self-Host on Easypanel",description:"How to install Docker Registry on Easypanel? 1-Click installation template for Docker Registry on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Dittofeed",permalink:"/docs/templates/dittofeed/"},next:{title:"Docmost",permalink:"/docs/templates/docmost/"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docker-registry"},"Docker Registry"),(0,i.kt)("p",null,"1-Click installation template for Docker Registry on Easypanel"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Docker Registry 2.0 is a powerful application designed to store and distribute Docker images. This app is an implementation of the Docker Registry HTTP API V2, compatible with Docker 1.6 and later versions. It provides a secure and scalable base for building a large scale registry solution or running a simple private registry. Docker Registry 2.0 is a core library for many registry operators including Docker Hub, GitHub Container Registry, GitLab Container Registry, and DigitalOcean Container Registry. It is also used by the CNCF Harbor Project and VMware Harbor Registry. The app allows users to efficiently store, manage, package, and exchange content, providing a professional grade and extensible content distribution system."),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"The Registry doesn","'","t have a UI. To interact with the registry you should use the Docker CLI."),(0,i.kt)("h2",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Efficient Content Distribution: The Docker Registry 2.0 app provides an efficient, secure, and reliable way to store, manage, package, and exchange content. It is designed to be a professional-grade and extensible content distribution system."),(0,i.kt)("li",{parentName:"ul"},"Scalability: Whether you're building a large scale registry solution or running a simple private registry, Docker Registry 2.0 is designed to scale to your needs. It's a core library for many registry operators, including Docker Hub, GitHub Container Registry, GitLab Container Registry, and DigitalOcean Container Registry."),(0,i.kt)("li",{parentName:"ul"},"Security: Security is a key focus of Docker Registry 2.0. The app is designed to provide a secure tool chain for distributing content, ensuring that your data is protected.")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open Source Registry: Docker Registry 2.0 is an open source registry implementation for storing and distributing container images using the OCI Distribution Specification."),(0,i.kt)("li",{parentName:"ul"},"Rich Set of Libraries: The app includes a rich set of libraries for interacting with distribution components. These libraries provide a range of functionalities, making it easier to work with the distribution components."),(0,i.kt)("li",{parentName:"ul"},"HTTP Communication: Clients can communicate with the registry using HTTP. This makes it easy to integrate Docker Registry 2.0 with Docker, containerd, and other OCI clients."),(0,i.kt)("li",{parentName:"ul"},"Customization: Docker Registry 2.0 is designed to be extensible, allowing users to hack/roll their own on top of healthy open-source components or implement their own home made solution through good specs and solid extensions mechanism.")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/registry"},"Website")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/distribution/distribution"},"Github")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/docker-registry"},"Template Source"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"docker-registry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"registry:2.8.3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"admin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Password"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"admin")))),(0,i.kt)("h2",{id:"screenshots"},"Screenshots"),(0,i.kt)("h2",{id:"change-log"},"Change Log"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2022-08-09 \u2013 first release")),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bedeoan"},"Bedeoan Raul")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/deiucanta"},"Andrei Canta"))))}d.isMDXComponent=!0}}]);