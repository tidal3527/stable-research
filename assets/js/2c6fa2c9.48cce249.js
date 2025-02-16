"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[4005],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_label:"Wildcard Domain",title:"Setting Up a Wildcard Domain",description:"Learn how to configure a wildcard domain in Easypanel."},o="Setting Up a Wildcard Domain",d={unversionedId:"guides/wildcard-domain/index",id:"guides/wildcard-domain/index",title:"Setting Up a Wildcard Domain",description:"Learn how to configure a wildcard domain in Easypanel.",source:"@site/docs/02-guides/08-wildcard-domain/index.md",sourceDirName:"02-guides/08-wildcard-domain",slug:"/guides/wildcard-domain/",permalink:"/stable-research/docs/guides/wildcard-domain/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/02-guides/08-wildcard-domain/index.md",tags:[],version:"current",frontMatter:{sidebar_label:"Wildcard Domain",title:"Setting Up a Wildcard Domain",description:"Learn how to configure a wildcard domain in Easypanel."},sidebar:"defaultSidebar",previous:{title:"Notifications",permalink:"/stable-research/docs/guides/notifications/"},next:{title:"Custom php.ini with Nixpacks",permalink:"/stable-research/docs/guides/nixpacks-php-settings/"}},l={},s=[{value:"Step 1 - Create a Certificate Resolver",id:"step-1---create-a-certificate-resolver",level:2},{value:"Step 2 - Set Credentials for Your Provider",id:"step-2---set-credentials-for-your-provider",level:2},{value:"Step 3 - Create Your Wildcard Domain",id:"step-3---create-your-wildcard-domain",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:s},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-a-wildcard-domain"},"Setting Up a Wildcard Domain"),(0,a.kt)("p",null,"In this guide, we'll walk you through the process of configuring a wildcard domain in Easypanel. Follow these steps to successfully set up your wildcard domain."),(0,a.kt)("h2",{id:"step-1---create-a-certificate-resolver"},"Step 1 - Create a Certificate Resolver"),(0,a.kt)("p",null,'Go to "Settings", "Traefik", and then "Environment", and add the following environment variables:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-env"},'TRAEFIK_CERTIFICATESRESOLVERS_<RESOLVER_NAME>_ACME_EMAIL=\nTRAEFIK_CERTIFICATESRESOLVERS_<RESOLVER_NAME>_ACME_STORAGE="/data/acme.json"\nTRAEFIK_CERTIFICATESRESOLVERS_<RESOLVER_NAME>_ACME_DNSCHALLENGE_PROVIDER=\nTRAEFIK_CERTIFICATESRESOLVERS_<RESOLVER_NAME>_ACME_DNSCHALLENGE_RESOLVERS=1.1.1.1,8.8.8.8\n')),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<RESOLVER_NAME>")," with your desired name. Then add your email address and the DNS provider you are using. The DNS provider should be one of the supported providers listed in the ",(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/https/acme/#providers"},"Official Traefik Documentation"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"All the ACME resolvers must use the same email address.")),(0,a.kt)("h2",{id:"step-2---set-credentials-for-your-provider"},"Step 2 - Set Credentials for Your Provider"),(0,a.kt)("p",null,"For the DNS challenge to work, you need to set the credentials for your DNS provider. Each provider has its own set of credentials. You can find the required credentials in the ",(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/https/acme/#providers"},"Official Traefik Documentation"),"."),(0,a.kt)("p",null,"For example, if you are using Digital Ocean, you need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"DO_AUTH_TOKEN")," environment variable."),(0,a.kt)("p",null,"After this, make sure to restart the Traefik service."),(0,a.kt)("h2",{id:"step-3---create-your-wildcard-domain"},"Step 3 - Create Your Wildcard Domain"),(0,a.kt)("p",null,'Now, go to your app "Domains" and click "Add Domain". You need to enable the "Wildcard domain" option and set the resolver name you created in Step 1.'),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you want to point your root domain and subdomains to your service, you need to create 2 separate domains. One for the root domain and another for the subdomains (wildcard domain).")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add Domain",src:r(37659).Z,width:"1514",height:"1194"})),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Following the steps outlined in this guide, you can easily set up a Wildcard Domain on Easypanel. If you have any questions or need further assistance, feel free to reach out to us on our Discord channel."))}u.isMDXComponent=!0},37659:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add-domain-c3b27ca64076ea12c799f9866964be3c.png"}}]);