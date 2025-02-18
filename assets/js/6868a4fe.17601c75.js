"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[951],{275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(8168),i=(n(6540),n(5680)),c=n(3514),a=n(1754);const o={},s="Stablecoins 101",l={unversionedId:"stablecoins-101/index",id:"stablecoins-101/index",title:"Stablecoins 101",description:"This section introduces stablecoins, their mechanisms, and their evolution, explaining how they maintain stability and their growing role in finance. It covers key types, use cases, and risks.",source:"@site/docs/01-stablecoins-101/index.md",sourceDirName:"01-stablecoins-101",slug:"/stablecoins-101/",permalink:"/docs/stablecoins-101/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Welcome",permalink:"/docs/"},next:{title:"What Are Stablecoins?",permalink:"/docs/stablecoins-101/what-are-stablecoins/"}},u={},m=[],d={toc:m},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"stablecoins-101"},"Stablecoins 101"),(0,i.yg)("p",null,"This section introduces stablecoins, their mechanisms, and their evolution, explaining how they maintain stability and their growing role in finance. It covers key types, use cases, and risks."),(0,i.yg)(c.A,{items:(0,a.$S)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0},3514:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(6540),i=n(53),c=n(1754),a=n(5489),o=n(6654),s=n(1312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return r.createElement(a.A,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer)},n)}function m(e){let{href:t,icon:n,title:c,description:a}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,i.A)("text--truncate",l.cardTitle),title:c},n," ",c),a&&r.createElement("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:a},a))}function d(e){let{item:t}=e;const n=(0,c._o)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.cC)(t.docId??void 0);return r.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(p,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,c.$S)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const a=(0,c.d1)(t);return r.createElement("section",{className:(0,i.A)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),p=i,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||c;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);