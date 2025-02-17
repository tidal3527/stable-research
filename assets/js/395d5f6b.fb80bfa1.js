"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[5274],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={hide_title:!0,sidebar_label:"SimpleTorrent",title:"SimpleTorrent | Self-Host on Easypanel",description:"How to install SimpleTorrent on Easypanel? 1-Click installation template for SimpleTorrent on Easypanel"},l=void 0,i={unversionedId:"regulatory-landscape/simpletorrent/index",id:"regulatory-landscape/simpletorrent/index",title:"SimpleTorrent | Self-Host on Easypanel",description:"How to install SimpleTorrent on Easypanel? 1-Click installation template for SimpleTorrent on Easypanel",source:"@site/docs/04-regulatory-landscape/simpletorrent/index.md",sourceDirName:"04-regulatory-landscape/simpletorrent",slug:"/regulatory-landscape/simpletorrent/",permalink:"/docs/regulatory-landscape/simpletorrent/",draft:!1,editUrl:"https://github.com/tidal3527/stable-research/docs/04-regulatory-landscape/simpletorrent/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"SimpleTorrent",title:"SimpleTorrent | Self-Host on Easypanel",description:"How to install SimpleTorrent on Easypanel? 1-Click installation template for SimpleTorrent on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Silicon Notes",permalink:"/docs/regulatory-landscape/silicon-notes/"},next:{title:"Sinusbot",permalink:"/docs/regulatory-landscape/sinusbot/"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simpletorrent"},"SimpleTorrent"),(0,a.kt)("p",null,"1-Click installation template for SimpleTorrent on Easypanel"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"SimpleTorrent is a self-hosted remote torrent client that allows you to manage your torrents remotely. Written in Go (golang), it enables you to start torrents remotely and download sets of files on the local disk of the server. These files are then retrievable or streamable via HTTP. The app offers individual file download control, the ability to run an external program on task completion, and a seeding ratio to stop tasks when reached. It also provides a download/upload speed limiter and detailed transfer stats in the web UI. SimpleTorrent supports real-time updates, is mobile-friendly, and offers a fast content server. It also supports IPv6 out of the box and has an updated torrent engine from anacrolix/torrent. Additional features include a torrent watcher, K8s/docker health-check endpoint, extra trackers from an external source, and a protocol handler to magnet."),(0,a.kt)("h2",{id:"benefits"},"Benefits"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remote Torrent Management: SimpleTorrent allows you to manage your torrents remotely. You can start torrents from anywhere and have them download files directly to the server's local disk. This makes it easy to manage your downloads without needing to be physically present at the server."),(0,a.kt)("li",{parentName:"ul"},"Streamable Downloads: Once your files are downloaded to the server, they are retrievable or streamable via HTTP. This means you can access your downloaded content from any device with an internet connection, making it highly convenient and flexible."),(0,a.kt)("li",{parentName:"ul"},"Control Over Individual File Downloads: SimpleTorrent gives you the ability to control individual file downloads. This means you can choose exactly which files you want to download from a torrent, giving you greater control over your downloads and saving server space.")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DoneCmd: This feature allows you to run an external program upon the completion of tasks. This can be useful for automating processes or triggering events once a download is complete."),(0,a.kt)("li",{parentName:"ul"},"SeedRatio: This feature stops a task when a certain seeding ratio is reached. This allows you to control how much you seed back to the torrent community after your download is complete."),(0,a.kt)("li",{parentName:"ul"},"UploadRate/DownloadRate: These features allow you to limit your upload and download speeds. This can be useful for managing bandwidth usage on your server."),(0,a.kt)("li",{parentName:"ul"},"Torrent Watcher: This feature allows you to monitor your torrents in real-time. It provides detailed transfer stats in the web UI, giving you a clear overview of your torrent activity."),(0,a.kt)("li",{parentName:"ul"},"Magnet RSS Subscribing: This feature supports subscribing to magnet RSS feeds. This allows you to automatically download new content from your favorite torrent feeds.")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/boypt/simple-torrent/wiki"},"Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/boypt/simple-torrent"},"Github")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/simpletorrent"},"Template Source"))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"simpletorrent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"boypt/cloud-torrent:1.3.9")))),(0,a.kt)("h2",{id:"screenshots"},"Screenshots"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SimpleTorrent Screenshot",src:r(46521).Z,width:"712",height:"609"})),(0,a.kt)("h2",{id:"change-log"},"Change Log"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2022-10-28 \u2013 first release")),(0,a.kt)("h2",{id:"contributors"},"Contributors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Supernova3339"},"Supernova3339"))))}c.isMDXComponent=!0},46521:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/screenshot-92505d938a6a4e8e12409e81bbc09066.png"}}]);