"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[1426],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=i,m=c["".concat(s,".").concat(d)]||c[d]||k[d]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30273:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const r={hide_title:!0,sidebar_label:"Dokuwiki",title:"Dokuwiki | Self-Host on Easypanel",description:"How to install Dokuwiki on Easypanel? 1-Click installation template for Dokuwiki on Easypanel"},o=void 0,l={unversionedId:"templates/dokuwiki/index",id:"templates/dokuwiki/index",title:"Dokuwiki | Self-Host on Easypanel",description:"How to install Dokuwiki on Easypanel? 1-Click installation template for Dokuwiki on Easypanel",source:"@site/docs/05-templates/dokuwiki/index.md",sourceDirName:"05-templates/dokuwiki",slug:"/templates/dokuwiki/",permalink:"/stable-research/docs/templates/dokuwiki/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/dokuwiki/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Dokuwiki",title:"Dokuwiki | Self-Host on Easypanel",description:"How to install Dokuwiki on Easypanel? 1-Click installation template for Dokuwiki on Easypanel"},sidebar:"defaultSidebar",previous:{title:"DocuSeal",permalink:"/stable-research/docs/templates/docuseal/"},next:{title:"Dolibarr",permalink:"/stable-research/docs/templates/dolibarr/"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],p={toc:u},c="wrapper";function k(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dokuwiki"},"Dokuwiki"),(0,i.kt)("p",null,"1-Click installation template for Dokuwiki on Easypanel"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"DokuWiki is a highly versatile, open-source wiki software that is simple to use and doesn","'","t require a database. It is known for its clean and readable syntax, making it a favorite among administrators due to its ease of maintenance, backup, and integration. DokuWiki is equipped with built-in access controls and authentication connectors, making it particularly useful in an enterprise context. It supports a wide range of use cases beyond a traditional wiki, thanks to the large number of plugins available. DokuWiki is designed for collaboration, allowing quick updates and easy addition of new pages while maintaining a history of every change. It can be used as a corporate knowledge base, private notebook, software manual, project workspace, CMS, intranet, and more. DokuWiki supports customization at all levels of expertise, from easy configuration via the admin interface to developing your own extensions."),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"Go to http://IP-ADDRESS:PORT/install.php to configure your install then restart your container when finished to remove install.php"),(0,i.kt)("h2",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Easy to Use: DokuWiki is a simple to use wiki software that doesn't require a database. It is loved by users for its clean and readable syntax."),(0,i.kt)("li",{parentName:"ul"},"Versatile and Flexible: DokuWiki is highly versatile and can be used for a broad range of use cases beyond a traditional wiki. It can be used as a corporate knowledge base, private notebook, software manual, project workspace, CMS, and more."),(0,i.kt)("li",{parentName:"ul"},"Easy Maintenance and Integration: The ease of maintenance, backup, and integration makes DokuWiki an administrator's favorite. It also has built-in access controls and authentication connectors.")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No Database Required: DokuWiki is a wiki software that doesn't require a database, making it simple and straightforward to use."),(0,i.kt)("li",{parentName:"ul"},"Clean and Readable Syntax: DokuWiki is loved by users for its clean and readable syntax, making it easy to create and edit content."),(0,i.kt)("li",{parentName:"ul"},"Built-in Access Controls: DokuWiki has built-in access controls and authentication connectors, making it especially useful in the enterprise context."),(0,i.kt)("li",{parentName:"ul"},"Variety of Extensions: DokuWiki supports a large number of plugins, allowing for a broad range of use cases beyond a traditional wiki."),(0,i.kt)("li",{parentName:"ul"},"Supports Over 50 Languages: DokuWiki supports over 50 languages, making it accessible to users around the world."),(0,i.kt)("li",{parentName:"ul"},"Device Independent: DokuWiki is device independent, meaning it can be used on any device with an internet connection.")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dokuwiki.org"},"Website")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.dokuwiki.org/manual"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/splitbrain/dokuwiki"},"Github")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/dokuwiki"},"Template Source"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"dokuwiki")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"lscr.io/linuxserver/dokuwiki:version-2024-02-06b")))),(0,i.kt)("h2",{id:"screenshots"},"Screenshots"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dokuwiki Screenshot",src:a(74012).Z,width:"1364",height:"616"})),(0,i.kt)("h2",{id:"change-log"},"Change Log"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2023-3-16 \u2013 first release"),(0,i.kt)("li",{parentName:"ul"},"2025-01-09 \u2013 Version bumped to version-2024-02-06b")),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Supernova3339"},"Supernova3339"))))}k.isMDXComponent=!0},74012:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screenshot-a2825c6ca0e817408821aa6302e0a34d.png"}}]);