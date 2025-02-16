"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[8480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,b=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={hide_title:!0,sidebar_label:"Sinusbot",title:"Sinusbot | Self-Host on Easypanel",description:"How to install Sinusbot on Easypanel? 1-Click installation template for Sinusbot on Easypanel"},o=void 0,s={unversionedId:"templates/sinusbot/index",id:"templates/sinusbot/index",title:"Sinusbot | Self-Host on Easypanel",description:"How to install Sinusbot on Easypanel? 1-Click installation template for Sinusbot on Easypanel",source:"@site/docs/05-templates/sinusbot/index.md",sourceDirName:"05-templates/sinusbot",slug:"/templates/sinusbot/",permalink:"/docs/templates/sinusbot/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/sinusbot/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Sinusbot",title:"Sinusbot | Self-Host on Easypanel",description:"How to install Sinusbot on Easypanel? 1-Click installation template for Sinusbot on Easypanel"},sidebar:"defaultSidebar",previous:{title:"SimpleTorrent",permalink:"/docs/templates/simpletorrent/"},next:{title:"SmokePing",permalink:"/docs/templates/smokeping/"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sinusbot"},"Sinusbot"),(0,i.kt)("p",null,"1-Click installation template for Sinusbot on Easypanel"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Sinusbot is a powerful and versatile music bot designed for communication platforms like TeamSpeak and Discord. It allows users to stream high-quality audio, manage playlists, and automate music playback seamlessly. Sinusbot is lightweight, highly customizable, and provides an intuitive web interface for managing audio playback. With support for plugins and scripting, Sinusbot can be tailored to meet the needs of any community, enhancing the audio experience for gaming, collaboration, or leisure activities."),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"Create a user using this command ",'"',"useradd --no-create-home -s /sbin/nologin -U sinusbot",'"',", then create directories using this command ",'"',"mkdir -p /opt/sinusbot/data /opt/sinusbot/scripts",'"',", then give user permissions to this folder using this command ",'"',"chown -R sinusbot:sinusbot /opt/sinusbot",'"',", then run echo $(id -u sinusbot) and echo $(id -g sinusbot) and copy the uid and guid, paste the given ids in the Environmental Section and redeploy, if UID/GUID is",'"',"1000",'"',"/",'"',"1000",'"',", then just redeploy after performing the above instructions"),(0,i.kt)("h2",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"High-Quality Audio Streaming: Sinusbot delivers crystal-clear audio for your community, ensuring a top-notch listening experience."),(0,i.kt)("li",{parentName:"ul"},"Easy-to-Use Interface: Manage playlists, stream audio, and control playback effortlessly with the user-friendly web interface."),(0,i.kt)("li",{parentName:"ul"},"Customizable with Plugins: Extend Sinusbot\u2019s functionality with plugins and scripts to meet your specific requirements."),(0,i.kt)("li",{parentName:"ul"},"Multi-Platform Support: Compatible with both Discord and TeamSpeak, making it versatile for various communication needs."),(0,i.kt)("li",{parentName:"ul"},"Lightweight and Efficient: Sinusbot is resource-friendly, ensuring smooth performance without overloading your server.")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Playlist Management: Create and manage playlists easily, supporting multiple audio formats and streaming sources."),(0,i.kt)("li",{parentName:"ul"},"Auto-DJ Mode: Enable Auto-DJ to keep the music playing continuously without manual intervention."),(0,i.kt)("li",{parentName:"ul"},"Scripting Support: Use JavaScript-based scripts to automate and customize your bot's behavior."),(0,i.kt)("li",{parentName:"ul"},"Multi-Instance Support: Run multiple bot instances on the same server to cater to different channels or platforms."),(0,i.kt)("li",{parentName:"ul"},"Advanced Permissions System: Assign roles and permissions to control who can manage the bot or access specific features.")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sinusbot.github.io/docs/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SinusBot"},"Github")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/sinusbot"},"Template Source"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"sinusbot")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"sinusbot/docker:1.0.2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"App Service Password"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"password")))),(0,i.kt)("h2",{id:"screenshots"},"Screenshots"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sinusbot Screenshot",src:n(55472).Z,width:"1184",height:"725"})),(0,i.kt)("h2",{id:"change-log"},"Change Log"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2025-01-21 \u2013 First Release")),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Ahson-Shaikh"},"Ahson Shaikh"))))}m.isMDXComponent=!0},55472:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-7d4f695d2ca288720560515c323d72b0.png"}}]);