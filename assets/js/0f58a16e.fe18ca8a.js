"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[8562],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>k});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(i),m=n,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return i?a.createElement(k,l(l({ref:t},d),{},{components:i})):a.createElement(k,l({ref:t},d))}));function k(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=i[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},97664:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=i(87462),n=(i(67294),i(3905));const r={hide_title:!0,sidebar_label:"MediaWiki",title:"MediaWiki | Self-Host on Easypanel",description:"How to install MediaWiki on Easypanel? 1-Click installation template for MediaWiki on Easypanel"},l=void 0,o={unversionedId:"templates/mediawiki/index",id:"templates/mediawiki/index",title:"MediaWiki | Self-Host on Easypanel",description:"How to install MediaWiki on Easypanel? 1-Click installation template for MediaWiki on Easypanel",source:"@site/docs/05-templates/mediawiki/index.md",sourceDirName:"05-templates/mediawiki",slug:"/templates/mediawiki/",permalink:"/docs/templates/mediawiki/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/mediawiki/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"MediaWiki",title:"MediaWiki | Self-Host on Easypanel",description:"How to install MediaWiki on Easypanel? 1-Click installation template for MediaWiki on Easypanel"},sidebar:"defaultSidebar",previous:{title:"Mealie",permalink:"/docs/templates/mealie/"},next:{title:"Meilisearch",permalink:"/docs/templates/meilisearch/"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mediawiki"},"MediaWiki"),(0,n.kt)("p",null,"1-Click installation template for MediaWiki on Easypanel"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"MediaWiki is a powerful, open-source wiki platform that powers some of the largest collaborative projects, including Wikipedia. It offers a flexible and extensible framework for creating and managing content, supporting features like user management, version control, and powerful extensions. MediaWiki provides multilingual support, ensuring global accessibility, and includes built-in tools for content organization, search, and collaboration. It is an ideal solution for knowledge bases, documentation sites, and community-driven content platforms. With a vibrant ecosystem of plugins and themes, MediaWiki can be customized to suit diverse use cases."),(0,n.kt)("h2",{id:"instructions"},"Instructions"),(0,n.kt)("p",null,"During the installation, configure the database as prompted, and once completed, a file named ",'"',"LocalSettings.php",'"'," will be downloaded. Open EasyPanel, navigate to the Storage section for MediaWiki, and create a file mount. Paste the content of the LocalSettings.php file into the mount and set its mount path to /var/www/html/LocalSettings.php. Finally, redeploy the MediaWiki app in EasyPanel to apply the configuration."),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Robust Content Management: MediaWiki provides a comprehensive set of tools for organizing, editing, and managing collaborative content, making it suitable for knowledge bases and wikis."),(0,n.kt)("li",{parentName:"ul"},"Customizable and Extensible: Leverage a wide array of extensions and skins to tailor MediaWiki to your specific needs, whether for a public-facing site or internal documentation."),(0,n.kt)("li",{parentName:"ul"},"Multilingual Support: Easily create multilingual content and manage translations with built-in language support, ensuring accessibility for a global audience."),(0,n.kt)("li",{parentName:"ul"},"Scalable and Flexible: MediaWiki is built to handle projects of any size, from small teams to massive, high-traffic sites like Wikipedia."),(0,n.kt)("li",{parentName:"ul"},"Open Source: MediaWiki is open-source, offering complete control and the freedom to modify and adapt it to your organization's needs.")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Revision History and Versioning: Track changes with a complete revision history, allowing users to compare, restore, and review edits."),(0,n.kt)("li",{parentName:"ul"},"User Management and Permissions: Manage users and define granular permissions to control access and editing rights on your wiki."),(0,n.kt)("li",{parentName:"ul"},"Full-Text Search: MediaWiki includes a powerful search feature to help users quickly find the information they need."),(0,n.kt)("li",{parentName:"ul"},"Structured Data with Templates: Use templates to standardize and organize content, making it easier to maintain and update."),(0,n.kt)("li",{parentName:"ul"},"Active Community: Join an active community of contributors and developers, offering support and fostering innovation within the MediaWiki ecosystem.")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.mediawiki.org"},"Website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.mediawiki.org/wiki/Manual:Contents"},"Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wikimedia/mediawiki"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/mediawiki"},"Template Source"))),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"mediawiki")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"mediawiki:1.42.3")))),(0,n.kt)("h2",{id:"screenshots"},"Screenshots"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"MediaWiki Screenshot",src:i(95638).Z,width:"1917",height:"911"})),(0,n.kt)("h2",{id:"change-log"},"Change Log"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2024-11-22 \u2013 First Release")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Ahson-Shaikh"},"Ahson Shaikh"))))}c.isMDXComponent=!0},95638:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/screenshot-4c3624ba015b2aa4337e514d259fbc45.png"}}]);