"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[9871],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62729:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={hide_title:!0,sidebar_label:"Lidarr",title:"Lidarr | Self-Host on Easypanel",description:"How to install Lidarr on Easypanel? 1-Click installation template for Lidarr on Easypanel"},i=void 0,o={unversionedId:"templates/lidarr/index",id:"templates/lidarr/index",title:"Lidarr | Self-Host on Easypanel",description:"How to install Lidarr on Easypanel? 1-Click installation template for Lidarr on Easypanel",source:"@site/docs/05-templates/lidarr/index.md",sourceDirName:"05-templates/lidarr",slug:"/templates/lidarr/",permalink:"/stable-research/docs/templates/lidarr/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/lidarr/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Lidarr",title:"Lidarr | Self-Host on Easypanel",description:"How to install Lidarr on Easypanel? 1-Click installation template for Lidarr on Easypanel"},sidebar:"defaultSidebar",previous:{title:"LibreTranslate",permalink:"/stable-research/docs/templates/libretranslate/"},next:{title:"LightDash",permalink:"/stable-research/docs/templates/lightdash/"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lidarr"},"Lidarr"),(0,n.kt)("p",null,"1-Click installation template for Lidarr on Easypanel"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Lidarr is an audio collection manager designed for Usenet and BitTorrent users. It monitors multiple RSS feeds for new music and interfaces with clients and indexers to grab, sort, and rename albums and songs. Lidarr also has the capability to automatically upgrade the quality of existing tracks in your library when a better quality format becomes available. The app features a calendar to see all your upcoming releases in one place, manual search to find all the releases and choose the ones you want, and automatic handling of failed downloads. Lidarr ensures you get the right release every time with its custom formats feature, which allows fine control over release prioritization and selection. It also supports major platforms like Windows, Linux, macOS, and others."),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Automated Music Management: Lidarr is an audio collection manager that automatically monitors multiple RSS feeds for new music, grabs, sorts, and renames albums and songs. It interfaces with clients and indexers to streamline your music collection process."),(0,n.kt)("li",{parentName:"ul"},"Quality Upgrades: Lidarr can be configured to automatically upgrade the quality of existing tracks in your library when a better quality format becomes available. This ensures you always have the best version of your favorite music."),(0,n.kt)("li",{parentName:"ul"},"Failed Download Handling: With Lidarr, failed downloads are a thing of the past. The app automatically blacklists the release and tries another one until it finds one that works, saving you time and frustration.")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Calendar: See all your upcoming releases in one convenient location. This feature allows you to keep track of your music collection and plan your listening schedule."),(0,n.kt)("li",{parentName:"ul"},"Manual Search: Find all the releases, choose the ones you want and send them right to your download client. This gives you the power to manually select and download the music you want."),(0,n.kt)("li",{parentName:"ul"},"Custom Formats: Ensure you get the right release every time! Custom Formats allows fine control over release prioritization and selection. It can be as simple as a single preferred word or as complex as you want with multiple criteria and regex."),(0,n.kt)("li",{parentName:"ul"},"Integration with Download Clients: Lidarr fully integrates with SABnzbd, NZBGet, QBittorrent, Deluge, rTorrent, Transmission, uTorrent, and other download clients for seamless downloading and management of your music collection."),(0,n.kt)("li",{parentName:"ul"},"Metadata Importing: Lidarr can import Metadata such as lyrics and album art, adding valuable information to your music collection. It also adds metadata such as artist and album information for media servers and players to use.")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lidarr.audio/"},"Website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.servarr.com/lidarr"},"Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Lidarr/Lidarr"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/lidarr"},"Template Source"))),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"lidarr")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"linuxserver/lidarr:2.6.4")))),(0,n.kt)("h2",{id:"screenshots"},"Screenshots"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lidarr Screenshot",src:a(49916).Z,width:"520",height:"308"})),(0,n.kt)("h2",{id:"change-log"},"Change Log"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2024-03-18 \u2013 Template added"),(0,n.kt)("li",{parentName:"ul"},"2024-10-16 \u2013 Version Updated to 2.6.4")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/marktopper"},"Mark Topper Diderichsen"))))}c.isMDXComponent=!0},49916:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/screenshot-7ddcf7b44cbad177068702719abeafd3.png"}}]);