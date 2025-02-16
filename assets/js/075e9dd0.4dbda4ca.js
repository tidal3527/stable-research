"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[5610],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46527:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={hide_title:!0,sidebar_label:"Kopia",title:"Kopia | Self-Host on Easypanel",description:"How to install Kopia on Easypanel? 1-Click installation template for Kopia on Easypanel"},l=void 0,i={unversionedId:"templates/kopia/index",id:"templates/kopia/index",title:"Kopia | Self-Host on Easypanel",description:"How to install Kopia on Easypanel? 1-Click installation template for Kopia on Easypanel",source:"@site/docs/05-templates/kopia/index.md",sourceDirName:"05-templates/kopia",slug:"/templates/kopia/",permalink:"/stable-research/docs/templates/kopia/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/kopia/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Kopia",title:"Kopia | Self-Host on Easypanel",description:"How to install Kopia on Easypanel? 1-Click installation template for Kopia on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Komga",permalink:"/stable-research/docs/templates/komga/"},next:{title:"Kutt",permalink:"/stable-research/docs/templates/kutt/"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kopia"},"Kopia"),(0,n.kt)("p",null,"1-Click installation template for Kopia on Easypanel"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Kopia is a robust open-source backup and restore tool designed to provide fast and secure backups of your important data. It allows you to create encrypted snapshots of your files and directories, which can be stored on the cloud storage of your choice, network-attached storage, server, or locally on your machine. Kopia supports a wide range of storage locations including Amazon S3, Azure Blob Storage, Backblaze B2, Google Cloud Storage, and many more. It also supports both CLI and GUI versions, making it accessible for both advanced and regular users. Kopia","'","s unique features include compression, deduplication, end-to-end ","'","zero knowledge","'"," encryption, and error correction, ensuring your data is safe, secure, and easily retrievable."),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Secure and Encrypted Backups: Kopia provides a secure and scalable architecture that can back up everything from small laptops to large servers. It uses end-to-end 'zero knowledge' encryption, ensuring that your data is always safe and secure."),(0,n.kt)("li",{parentName:"ul"},"Flexible Storage Options: With Kopia, you have full control over where to store your snapshots. It supports a wide range of storage locations, including Amazon S3, Azure Blob Storage, Google Cloud Storage, and any remote server or cloud storage that supports WebDAV or SFTP. You can even use multiple storage locations if you want to."),(0,n.kt)("li",{parentName:"ul"},"Efficient Data Management: Kopia uses data deduplication to save you money. It also allows you to create encrypted snapshots of your data and save the snapshots to remote or cloud storage of your choice, to network-attached storage or server, or locally on your machine.")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Encrypted, Compressed, and Deduplicated Backups: Kopia allows you to create encrypted snapshots of your data and save the snapshots to the storage of your choice. It also uses compression and deduplication to make your backups more efficient."),(0,n.kt)("li",{parentName:"ul"},"Supports GUI and CLI: Kopia comes with both a graphical user interface (GUI) and a command-line interface (CLI), making it suitable for both advanced and regular users."),(0,n.kt)("li",{parentName:"ul"},"Wide Range of Supported Storage Locations: Kopia supports a wide range of storage locations, including Amazon S3, Azure Blob Storage, Google Cloud Storage, and any remote server or cloud storage that supports WebDAV or SFTP."),(0,n.kt)("li",{parentName:"ul"},"Fast and Secure: With a secure and scalable architecture, Kopia can back up everything from small laptops to large servers quickly and securely.")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kopia.io/"},"Website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kopia.io/docs/"},"Docs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kopia/kopia/"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/kopia"},"Template Source"))),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Username"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Password"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"kopia")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"kopia/kopia:0.17.0")))),(0,n.kt)("h2",{id:"screenshots"},"Screenshots"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Kopia Screenshot",src:a(58701).Z,width:"1920",height:"1080"})),(0,n.kt)("h2",{id:"change-log"},"Change Log"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2023-07-10 \u2013 First Release")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://berksmbl.com"},"Berk S\xfcmb\xfcl"))))}d.isMDXComponent=!0},58701:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/screenshot-b1c485dfc52ae3bb1bd974fd1a43b617.png"}}]);