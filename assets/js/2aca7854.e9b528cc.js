"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[330],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={hide_title:!0,sidebar_label:"Radarr",title:"Radarr | Self-Host on Easypanel",description:"How to install Radarr on Easypanel? 1-Click installation template for Radarr on Easypanel"},o=void 0,i={unversionedId:"regulatory-landscape/radarr/index",id:"regulatory-landscape/radarr/index",title:"Radarr | Self-Host on Easypanel",description:"How to install Radarr on Easypanel? 1-Click installation template for Radarr on Easypanel",source:"@site/docs/04-regulatory-landscape/radarr/index.md",sourceDirName:"04-regulatory-landscape/radarr",slug:"/regulatory-landscape/radarr/",permalink:"/docs/regulatory-landscape/radarr/",draft:!1,editUrl:"https://github.com/tidal3527/stable-research/docs/04-regulatory-landscape/radarr/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Radarr",title:"Radarr | Self-Host on Easypanel",description:"How to install Radarr on Easypanel? 1-Click installation template for Radarr on Easypanel"},sidebar:"defaultSidebar",previous:{title:"RabbitMQ",permalink:"/docs/regulatory-landscape/rabbitmq/"},next:{title:"Radicale",permalink:"/docs/regulatory-landscape/radicale/"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"radarr"},"Radarr"),(0,n.kt)("p",null,"1-Click installation template for Radarr on Easypanel"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Radarr is a movie collection manager designed for Usenet and BitTorrent users. It monitors multiple RSS feeds for new movies and interfaces with clients and indexers to grab, sort, and rename them. Radarr also has the ability to automatically upgrade the quality of existing files in your library when a better quality format becomes available. The app features a calendar to see all your upcoming movies in one place, manual search to find all the releases and choose the one you want, and automatic handling of failed downloads. Radarr ensures you get the right release every time with its custom formats feature, which allows fine control over release prioritization and selection. It also supports major platforms like Windows, Linux, macOS, and others."),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Automated Movie Management: Radarr is a movie collection manager that automatically monitors multiple RSS feeds for new movies, grabs, sorts, and renames them. It interfaces with clients and indexers to streamline your movie collection process."),(0,n.kt)("li",{parentName:"ul"},"Quality Upgrades: Radarr can be configured to automatically upgrade the quality of existing files in your library when a better quality format becomes available. This ensures you always have the best version of your favorite movies."),(0,n.kt)("li",{parentName:"ul"},"Failed Download Handling: With Radarr, failed downloads are a thing of the past. The app automatically blacklists the release and tries another one until it finds one that works, saving you time and frustration.")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Calendar: See all your upcoming movies in one convenient location. This feature allows you to keep track of your movie collection and plan your viewing schedule."),(0,n.kt)("li",{parentName:"ul"},"Manual Search: Find all the releases, choose the one you want and send it right to your download client. This gives you the power to manually select and download the movies you want."),(0,n.kt)("li",{parentName:"ul"},"Custom Formats: Ensure you get the right release every time! Custom Formats allows fine control over release prioritization and selection. It can be as simple as a single preferred word or as complex as you want with multiple criteria and regex."),(0,n.kt)("li",{parentName:"ul"},"Integration with Download Clients: Radarr fully integrates with SABnzbd, NZBGet, QBittorrent, Deluge, rTorrent, Transmission, uTorrent, and other download clients for seamless downloading and management of your movie collection."),(0,n.kt)("li",{parentName:"ul"},"Metadata Importing: Radarr can import Metadata such as trailers or subtitles, adding valuable information to your movie collection. It also adds metadata such as posters and information for Kodi and others to use.")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://radarr.video/"},"Website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.servarr.com/radarr"},"Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Radarr/Radarr"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/radarr"},"Template Source"))),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"radarr")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"linuxserver/radarr:5.14.0")))),(0,n.kt)("h2",{id:"screenshots"},"Screenshots"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Radarr Screenshot",src:a(17791).Z,width:"852",height:"324"})),(0,n.kt)("h2",{id:"change-log"},"Change Log"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2022-10-30 \u2013 first release")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Supernova3339"},"Supernova3339"))))}c.isMDXComponent=!0},17791:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/screenshot-45d1152c15585451487a486985b4504c.png"}}]);