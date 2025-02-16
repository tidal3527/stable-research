"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[7254],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(a),k=r,m=c["".concat(i,".").concat(k)]||c[k]||d[k]||l;return a?n.createElement(m,s(s({ref:e},u),{},{components:a})):n.createElement(m,s({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=k;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[c]="string"==typeof t?t:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},49557:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={hide_title:!0,sidebar_label:"Postgres Backup",title:"Postgres Backup | Self-Host on Easypanel",description:"How to install Postgres Backup on Easypanel? 1-Click installation template for Postgres Backup on Easypanel"},s=void 0,o={unversionedId:"templates/postgres-backup/index",id:"templates/postgres-backup/index",title:"Postgres Backup | Self-Host on Easypanel",description:"How to install Postgres Backup on Easypanel? 1-Click installation template for Postgres Backup on Easypanel",source:"@site/docs/05-templates/postgres-backup/index.md",sourceDirName:"05-templates/postgres-backup",slug:"/templates/postgres-backup/",permalink:"/docs/templates/postgres-backup/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/05-templates/postgres-backup/index.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Postgres Backup",title:"Postgres Backup | Self-Host on Easypanel",description:"How to install Postgres Backup on Easypanel? 1-Click installation template for Postgres Backup on Easypanel"},sidebar:"defaultSidebar",previous:{title:"PostfixAdmin",permalink:"/docs/templates/postfixadmin/"},next:{title:"PowerDNS-Admin",permalink:"/docs/templates/powerdns-admin/"}},i={},p=[{value:"Description",id:"description",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"Links",id:"links",level:2},{value:"Options",id:"options",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Change Log",id:"change-log",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:p},c="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"postgres-backup"},"Postgres Backup"),(0,r.kt)("p",null,"1-Click installation template for Postgres Backup on Easypanel"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The postgres-backup-s3 app is a powerful tool designed to backup your PostgreSQL databases to Amazon S3. It supports periodic backups, allowing you to schedule automatic backups at your convenience. This ensures that your data is always safe and can be restored whenever needed. The app also offers the option to backup all available databases at once, creating a single archive with a timestamp for easy identification. For added security, the app provides an encryption feature. By setting an encryption password, your backup can be encrypted and only decrypted with the correct password. This app is perfect for those who want to ensure their PostgreSQL databases are securely backed up in a reliable and efficient manner."),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("p",null,"In order to test that you configured it properly, remove the SCHEDULE variable from the environment, click deploy and check the logs. If everything works fine, you can add the SCHEDULE variable back. You can read more about the environment variables here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schickling/dockerfiles/tree/master/postgres-backup-s3"},"https://github.com/schickling/dockerfiles/tree/master/postgres-backup-s3")),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Secure Database Backup: The app provides a secure way to backup your PostgreSQL databases to S3. It supports encryption, allowing you to set a password to encrypt your backup for an added layer of security."),(0,r.kt)("li",{parentName:"ul"},"Automatic Backups: The app supports automatic periodic backups. You can set a schedule for the app to automatically backup your databases, ensuring your data is always safe and up-to-date."),(0,r.kt)("li",{parentName:"ul"},"Comprehensive Backup Options: The app allows you to backup all available databases or select specific ones. This gives you the flexibility to choose what data to backup.")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PostgreSQL to S3 Backup: The app allows you to backup your PostgreSQL databases to S3. It supports both Docker and Docker Compose usage for flexibility and ease of use."),(0,r.kt)("li",{parentName:"ul"},"Encryption: The app supports encryption for your backups. You can set an encryption password to secure your data. The backup can be decrypted using openssl aes-256-cbc."),(0,r.kt)("li",{parentName:"ul"},"Scheduling: The app allows you to set a schedule for automatic backups. This ensures your databases are regularly backed up without manual intervention."),(0,r.kt)("li",{parentName:"ul"},"Backup All Databases: The app allows you to backup all available databases. This feature ensures that no data is left unprotected."),(0,r.kt)("li",{parentName:"ul"},"S3 Endpoint Configuration: The app allows you to specify an alternate S3 endpoint. This is useful if you're using an S3 Compatible Storage Provider.")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/schickling/dockerfiles/tree/master/postgres-backup-s3"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/schickling/dockerfiles/tree/master/postgres-backup-s3"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/templates/tree/main/templates/postgres-backup"},"Template Source"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Name"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"postgres-backup")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Service Image"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"easypanel/postgres-backup-s3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Postgres Host"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Postgres Port"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"5432")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Postgres User"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"postgres")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Postgres Password"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S3 Access Key"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S3 Secret Key"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S3 Bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S3 Prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"backup")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S3 Region"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"us-west-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S3 Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schedule"),(0,r.kt)("td",{parentName:"tr",align:null},"You can use CRON syntax"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"@daily")))),(0,r.kt)("h2",{id:"screenshots"},"Screenshots"),(0,r.kt)("h2",{id:"change-log"},"Change Log"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2022-08-05 \u2013 first release")),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/deiucanta"},"Andrei Canta"))))}d.isMDXComponent=!0}}]);