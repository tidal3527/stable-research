"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[1168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={hide_title:!0,sidebar_label:"Drone",title:"Drone | Self-Host on Easypanel",description:"How to install Drone on Easypanel? 1-Click installation template for Drone on Easypanel"},i=void 0,o={unversionedId:"templates/drone/index",id:"templates/drone/index",title:"Drone | Self-Host on Easypanel",description:"How to install Drone on Easypanel? 1-Click installation template for Drone on Easypanel",source:"@site/docs/05-templates/drone/index.md",sourceDirName:"05-templates/drone",slug:"/templates/drone/",permalink:"/docs/templates/drone/",draft:!1,editUrl:"https://github.com/tidal3527/stable-research/docs/05-templates/drone/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Drone",title:"Drone | Self-Host on Easypanel",description:"How to install Drone on Easypanel? 1-Click installation template for Drone on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Draw.io",permalink:"/docs/templates/drawio/"},next:{title:"Drone Runner",permalink:"/docs/templates/drone-runner/"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"drone"},"Drone"),(0,r.kt)("p",null,"1-Click installation template for Drone on Easypanel"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Drone.io is a self-service Continuous Integration platform designed for busy development teams. It automates software build and testing, making it an essential tool for efficient and effective software development. Drone.io is configured with a simple, easy-to-read file that you commit to your git repository, and each pipeline step is executed inside an isolated Docker container that is automatically downloaded at runtime. The platform integrates seamlessly with multiple source code management systems, including GitHub, GitHubEnterprise, Bitbucket, and GitLab, and supports multiple operating systems and architectures. Drone.io works with any language, database or service that runs inside a Docker container, and allows you to create and share plugins for pre-configured steps in your pipeline. Advanced customization is made easy with Drone.io, with features for implementing custom access controls, approval workflows, secret management, yaml syntax extensions and more. The platform also ensures isolated builds to avoid conflicts on shared servers, and offers effortless scaling."),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automated Software Build and Testing: Drone is a self-service Continuous Integration platform designed for busy development teams. It automates the process of software build and testing, saving time and reducing errors."),(0,r.kt)("li",{parentName:"ul"},"Seamless Integration: Drone integrates seamlessly with multiple source code management systems, including GitHub, GitHubEnterprise, Bitbucket, and GitLab, making it a versatile tool for any development team."),(0,r.kt)("li",{parentName:"ul"},"Support for Multiple Platforms: Drone natively supports multiple operating systems and architectures, including Linux x64, ARM, ARM64 and Windows x64, making it a flexible solution for diverse development environments."),(0,r.kt)("li",{parentName:"ul"},"Effortless Scaling: Drone installs from a single binary and scales automatically, making it an ideal solution for both small and large projects.")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configuration as a Code: Pipelines in Drone are configured with a simple, easy-to-read file that you commit to your git repository. Each Pipeline step is executed inside an isolated Docker container that is automatically downloaded at runtime."),(0,r.kt)("li",{parentName:"ul"},"Support for Any Language: Drone works with any language, database or service that runs inside a Docker container. You can choose from thousands of public Docker images or provide your own."),(0,r.kt)("li",{parentName:"ul"},"Plugin Creation and Sharing: Drone uses containers to drop pre-configured steps into your pipeline. You can choose from hundreds of existing plugins, or create your own."),(0,r.kt)("li",{parentName:"ul"},"Advanced Customization: Drone makes advanced customization easy. You can implement custom access controls, approval workflows, secret management, yaml syntax extensions and more."),(0,r.kt)("li",{parentName:"ul"},"Isolated Builds: With Drone, you don't have to worry about conflicting builds on shared servers. Every build runs in an isolated Docker container, giving you full control.")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://drone.io/"},"Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harness/drone#setup-documentation"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harness/drone"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/drone"},"Template Source"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"drone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"drone/drone:2.25.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Runner Service Name"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"drone-runner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Runner Service Image"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"drone/drone-runner-docker:1.8.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GitHub OAuth Client ID"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GitHub OAuth Client Secret"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"secret")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RPC Host"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RPC Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"https")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Install Runner Service"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Capacity for runner if enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"2")))),(0,r.kt)("h2",{id:"screenshots"},"Screenshots"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Drone Screenshot",src:n(32355).Z,width:"2254",height:"1552"})),(0,r.kt)("h2",{id:"change-log"},"Change Log"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2022-08-04 \u2013 first release"),(0,r.kt)("li",{parentName:"ul"},"2025-01-09 \u2013 Version bumped to 2.25.0")),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ivanonpc-22"},"Ivan Ryan"))))}m.isMDXComponent=!0},32355:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-96cf6bab1bdba0c7c2126d38d88be524.png"}}]);