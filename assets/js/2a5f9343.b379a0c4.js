"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[46],{3514:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(6540),a=r(53),i=r(1754),o=r(5489),c=r(6654),s=r(1312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(o.A,{href:t,className:(0,a.A)("card padding--lg",l.cardContainer)},r)}function m(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.A)("text--truncate",l.cardTitle),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.A)("text--truncate",l.cardDescription),title:o},o))}function p(e){let{item:t}=e;const r=(0,i._o)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.cC)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,i.$S)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const o=(0,i.d1)(t);return n.createElement("section",{className:(0,a.A)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7479:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var n=r(8168),a=(r(6540),r(5680)),i=r(3514),o=r(1754);const c={},s="Market Trends",l={unversionedId:"market-trends/index",id:"market-trends/index",title:"Market Trends",description:"This section examines the adoption, growth, and impact of stablecoins on global finance. It explores their increasing role in emerging markets, integration with traditional finance, and influence on the U.S. dollar and capital flows.",source:"@site/docs/02-market-trends/index.md",sourceDirName:"02-market-trends",slug:"/market-trends/",permalink:"/docs/market-trends/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"How Stablecoins Work",permalink:"/docs/stablecoins-101/how-stablecoins-work/"},next:{title:"Stablecoins in Emerging Markets",permalink:"/docs/market-trends/stablecoins-emerging-markets/"}},d={},m=[],p={toc:m},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"market-trends"},"Market Trends"),(0,a.yg)("p",null,"This section examines the adoption, growth, and impact of stablecoins on global finance. It explores their increasing role in emerging markets, integration with traditional finance, and influence on the U.S. dollar and capital flows."),(0,a.yg)(i.A,{items:(0,o.$S)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);