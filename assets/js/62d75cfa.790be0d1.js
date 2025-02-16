"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[2598],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={hide_title:!0,sidebar_label:"Barrage",title:"Barrage | Self-Host on Easypanel",description:"How to install Barrage on Easypanel? 1-Click installation template for Barrage on Easypanel"},o=void 0,i={unversionedId:"templates/barrage/index",id:"templates/barrage/index",title:"Barrage | Self-Host on Easypanel",description:"How to install Barrage on Easypanel? 1-Click installation template for Barrage on Easypanel",source:"@site/docs/05-templates/barrage/index.md",sourceDirName:"05-templates/barrage",slug:"/templates/barrage/",permalink:"/stable-research/docs/templates/barrage/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/barrage/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Barrage",title:"Barrage | Self-Host on Easypanel",description:"How to install Barrage on Easypanel? 1-Click installation template for Barrage on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Baikal",permalink:"/stable-research/docs/templates/baikal/"},next:{title:"Baserow",permalink:"/stable-research/docs/templates/baserow/"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...l}=e;return(0,n.kt)(d,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"barrage"},"Barrage"),(0,n.kt)("p",null,"1-Click installation template for Barrage on Easypanel"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Barrage is a minimalistic Deluge WebUI app with full mobile support. It features a responsive mobile-first design, allowing you to manage your torrents with ease from any device. With Barrage, you can add torrents by URL or magnet, sort and filter your torrents, and set global upload and download speed limits. It also allows you to change file priorities and modify torrent options. The app is designed to be deployed with Docker, making it a convenient and efficient tool for managing your torrents."),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Efficient Torrent Management: Barrage provides a minimalistic and efficient way to manage your torrents. It allows you to add torrents by URL or magnet, sort and filter them, and change their options, all from a single, easy-to-use interface."),(0,n.kt)("li",{parentName:"ul"},"Full Mobile Support: With its responsive mobile-first design, Barrage ensures that you can manage your torrents on the go. Whether you're on a smartphone or a tablet, you'll have full access to all of Barrage's features."),(0,n.kt)("li",{parentName:"ul"},"Control Over Download and Upload Speeds: Barrage allows you to set global upload and download speed limits. This means you can control how much of your internet bandwidth is used for torrenting, ensuring that it doesn't interfere with your other online activities.")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add Torrent by URL or Magnet: Barrage allows you to add torrents to your list by simply pasting a URL or a magnet link. This makes it easy to start downloading a torrent without having to download and open a separate torrent file."),(0,n.kt)("li",{parentName:"ul"},"Sort and Filter Torrents: With Barrage, you can easily sort your torrents by various criteria and filter them based on your needs. This makes it easy to find the torrents you're looking for, even if you have a large number of them."),(0,n.kt)("li",{parentName:"ul"},"Change File Priority: Barrage allows you to change the priority of individual files within a torrent. This means you can choose which files to download first, which can be particularly useful if you're downloading a torrent that contains multiple files."),(0,n.kt)("li",{parentName:"ul"},"Change Torrent Options: Barrage provides the ability to change various options for your torrents. This gives you greater control over your torrent downloads and allows you to customize them to suit your needs.")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/maulik9898/barrage"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/barrage"},"Template Source"))),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"barrage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"maulik9898/barrage:0.3.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Deluge URL"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Deluge Password"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Barrage Password"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"screenshots"},"Screenshots"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Barrage Screenshot",src:a(32236).Z,width:"1365",height:"615"})),(0,n.kt)("h2",{id:"change-log"},"Change Log"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2023-1-25 \u2013 first release")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Supernova3339"},"Supernova3339"))))}c.isMDXComponent=!0},32236:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/screenshot-9b7efb47ac41e8e53bccc4f1aaf49177.png"}}]);