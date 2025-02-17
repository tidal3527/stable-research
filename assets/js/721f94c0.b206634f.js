"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[911],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),y=r,m=c["".concat(l,".").concat(y)]||c[y]||d[y]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},7580:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={},i="Database Backups",s={unversionedId:"interviews/index",id:"interviews/index",title:"Database Backups",description:"The process of creating backups typically involves taking a snapshot of the data at a specific point in time and storing it in a separate location. This can be done manually or using Easypanel's automated backup.",source:"@site/docs/06-interviews/index.md",sourceDirName:"06-interviews",slug:"/interviews/",permalink:"/docs/interviews/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Mountain Protocol USDM",permalink:"/docs/technical-deep-dive/mountain-protocol/"},next:{title:"Database Backups",permalink:"/docs/glossary/"}},l={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Destinations",id:"destinations",level:2},{value:"Setup your database",id:"setup-your-database",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database-backups"},"Database Backups"),(0,r.kt)("p",null,"The process of creating backups typically involves taking a snapshot of the data at a specific point in time and storing it in a separate location. This can be done manually or using Easypanel's automated backup."),(0,r.kt)("p",null,"Easypanel's database backups can be stored on a variety of different cloud storage services that supports s3."),(0,r.kt)("p",null,"Cloud storage services such as ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/fr/s3/"},(0,r.kt)("inlineCode",{parentName:"a"},"Amazon S3")),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/products/spaces"},(0,r.kt)("inlineCode",{parentName:"a"},"DigitalOcean Spaces")),", and ",(0,r.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/object-storage/"},(0,r.kt)("inlineCode",{parentName:"a"},"Scaleway Object Storage"))," provide scalable, durable, and secure storage for backups, and can be accessed using APIs and tools that are commonly used with backup software."),(0,r.kt)("p",null,"In addition to using third-party S3 providers, it is also possible to set up your own S3-compatible storage using open source software like ",(0,r.kt)("a",{parentName:"p",href:"https://min.io/"},(0,r.kt)("inlineCode",{parentName:"a"},"MinIO"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://storj.io"},(0,r.kt)("inlineCode",{parentName:"a"},"Storj")),". This allows you to host an S3 instance on your own infrastructure, giving you full control over the storage environment and enabling you to store backups in a location that you trust."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A server running Easypanel with at least one database"),(0,r.kt)("li",{parentName:"ul"},"An account from your S3 provider and credentials to access your bucket"),(0,r.kt)("li",{parentName:"ul"},"A freshly prepared bucket")),(0,r.kt)("h2",{id:"destinations"},"Destinations"),(0,r.kt)("p",null,"Easypanel allows you to setup multiple S3 provider on the same server. That means that you can backup every database on a separate provider or not. To run backups you need at least one destination setup."),(0,r.kt)("p",null,"Every destinations needs a name that you define by yourself and it's credentials"),(0,r.kt)("p",null,'All the following fields are required, if your configuration is wrong easypanel will throw you an error "Could not connect".'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access Key Id"),(0,r.kt)("li",{parentName:"ul"},"Secret Access Key"),(0,r.kt)("li",{parentName:"ul"},"Bucket"),(0,r.kt)("li",{parentName:"ul"},"Region"),(0,r.kt)("li",{parentName:"ul"},"Endpoint")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you misconfigured your crendential's permissions Easypanel won't warn you!",(0,r.kt)("br",{parentName:"p"}),"\n","Your crendentials needs read/write access to your bucket!")),(0,r.kt)("h2",{id:"setup-your-database"},"Setup your database"),(0,r.kt)("p",null,"Once you've configured your storage provider, it's time to configure your backup recurrence.\nEach database service setup by Easypanel has it's own configuration. "),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The backup feature is disabled by default and only shows if you have the Hobby plan or higher.")),(0,r.kt)("p",null,"To configure database backups, go to your database service then scroll down to the 'backups' section.\nThis section allows you to choose which destination is targeted and which prefix your want for your database."),(0,r.kt)("p",null,"A prefix is appended to the final filename that will be uploaded to your storage provider. For some storage providers it will appear as a folder. For example you can set your database name or service name!"),(0,r.kt)("p",null,"The schedule field sets a time interval for the backup to run. It is based on the CRON's format.\nYou can make your own cron expression easily using ",(0,r.kt)("a",{parentName:"p",href:"https://crontab.guru/"},(0,r.kt)("inlineCode",{parentName:"a"},"crontab.guru")),"."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This field currently has no validation. If typed incorrectly, it won't work!")))}d.isMDXComponent=!0}}]);