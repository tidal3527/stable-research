"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[4317],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),g=n,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},77820:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={hide_title:!0,sidebar_label:"pgvector",title:"pgvector | Self-Host on Easypanel",description:"How to install pgvector on Easypanel? 1-Click installation template for pgvector on Easypanel"},i=void 0,l={unversionedId:"templates/pgvector/index",id:"templates/pgvector/index",title:"pgvector | Self-Host on Easypanel",description:"How to install pgvector on Easypanel? 1-Click installation template for pgvector on Easypanel",source:"@site/docs/05-templates/pgvector/index.md",sourceDirName:"05-templates/pgvector",slug:"/templates/pgvector/",permalink:"/stable-research/docs/templates/pgvector/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/pgvector/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"pgvector",title:"pgvector | Self-Host on Easypanel",description:"How to install pgvector on Easypanel? 1-Click installation template for pgvector on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Peppermint",permalink:"/stable-research/docs/templates/peppermint/"},next:{title:"pgweb",permalink:"/stable-research/docs/templates/pgweb/"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pgvector"},"pgvector"),(0,n.kt)("p",null,"1-Click installation template for pgvector on Easypanel"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"pgvector is an open-source app designed to facilitate vector similarity search for Postgres. It allows you to store all your application data in one place, supporting both exact and approximate nearest neighbor search. The app is capable of handling L2 distance, inner product, and cosine distance, making it versatile for various data analysis needs. It is compatible with any language that has a Postgres client. The app also boasts of ACID compliance, point-in-time recovery, JOINs, and all the other great features of Postgres. With pgvector, you can create a new table with a vector column or add a vector column to an existing table, insert vectors, upsert vectors, update vectors, and delete vectors. It also allows you to get the nearest neighbors to a vector or a row, and get rows within a certain distance. The app also supports indexing for improved search performance. It is a powerful tool for managing and analyzing your data in a Postgres environment."),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Unified Data Storage: pgvector allows you to store all of your application data in one place, eliminating the need for multiple databases or storage solutions."),(0,n.kt)("li",{parentName:"ul"},"Advanced Search Capabilities: The app supports exact and approximate nearest neighbor search, enabling you to find the most relevant data quickly and efficiently."),(0,n.kt)("li",{parentName:"ul"},"Versatile Distance Measures: pgvector supports various distance measures including L2 distance, inner product, and cosine distance, providing flexibility in how you search and compare data."),(0,n.kt)("li",{parentName:"ul"},"ACID Compliance and Recovery Features: With ACID compliance and point-in-time recovery, pgvector ensures the integrity and reliability of your data."),(0,n.kt)("li",{parentName:"ul"},"Integration with Postgres: pgvector integrates seamlessly with Postgres, allowing you to leverage all of the features of this popular database system.")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vector Similarity Search: pgvector allows you to perform vector similarity searches in Postgres, making it easier to find and retrieve relevant data."),(0,n.kt)("li",{parentName:"ul"},"Data Manipulation: You can easily create new tables with vector columns, add vector columns to existing tables, insert vectors, update vectors, and delete vectors."),(0,n.kt)("li",{parentName:"ul"},"Querying: pgvector provides a variety of querying options, including getting the nearest neighbors to a vector or a row, and getting rows within a certain distance."),(0,n.kt)("li",{parentName:"ul"},"Indexing: pgvector supports exact and approximate nearest neighbor search indexing, allowing you to optimize your search performance."),(0,n.kt)("li",{parentName:"ul"},"Multi-language Support: pgvector can be used from any language with a Postgres client, offering flexibility in how you interact with your data.")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pgvector/pgvector"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/pgvector"},"Template Source"))),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Service Name"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Service Image"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"ankane/pgvector:v0.5.1")))),(0,n.kt)("h2",{id:"screenshots"},"Screenshots"),(0,n.kt)("h2",{id:"change-log"},"Change Log"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2023-06-30 \u2013 first release")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/serban-alexandru"},"AlexSerban"))))}d.isMDXComponent=!0}}]);