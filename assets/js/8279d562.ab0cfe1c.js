"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[2254],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=o,h=u["".concat(l,".").concat(d)]||u[d]||k[d]||i;return a?r.createElement(h,n(n({ref:t},c),{},{components:a})):r.createElement(h,n({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,n[1]=p;for(var s=2;s<i;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},79469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),o=(a(67294),a(3905));const i={},n="Builders",p={unversionedId:"builders",id:"builders",title:"Builders",description:"Since Easypanel is powered by Docker, everything needs to be built as a Docker image. When you want to deploy your own apps, all you have is the source code. Easypanel provides several ways to build a Docker image from your source code.",source:"@site/docs/04-builders.md",sourceDirName:".",slug:"/builders",permalink:"/docs/builders",draft:!1,editUrl:"https://github.com/tidal3527/stable-research/docs/04-builders.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Compose Service",permalink:"/docs/protocols/compose"},next:{title:"2FAuth",permalink:"/docs/regulatory-landscape/2fauth/"}},l={},s=[{value:"Dockerfile",id:"dockerfile",level:2},{value:"Heroku Buildpacks",id:"heroku-buildpacks",level:2},{value:"Paketo Buildpacks",id:"paketo-buildpacks",level:2},{value:"Nixpacks",id:"nixpacks",level:2}],c={toc:s},u="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"builders"},"Builders"),(0,o.kt)("p",null,"Since Easypanel is powered by Docker, everything needs to be built as a Docker image. When you want to deploy your own apps, all you have is the source code. Easypanel provides several ways to build a Docker image from your source code."),(0,o.kt)("h2",{id:"dockerfile"},"Dockerfile"),(0,o.kt)("p",null,"This is the most known way to build Docker images. You create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and inside you write instructions on how to build your image. This method gives you the most control but it requires more effort to write and maintain your ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,o.kt)("p",null,"To read more about how to write a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," checkout the official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/"},"Dockerfile reference"),"."),(0,o.kt)("h2",{id:"heroku-buildpacks"},"Heroku Buildpacks"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.heroku.com"},"Heroku"),' pioneered a new way of building applications. Instead of you having to write instructions on how the app should be built, they analyze your code automatically and detect which languages and frameworks you use. It\'s a "magical" way to build Docker images. In our experience, it works amazingly for some languages/frameworks and it fails to work out of the box for others.'),(0,o.kt)("p",null,"To read more about how it works and how to configure it, you can read their ",(0,o.kt)("a",{parentName:"p",href:"https://devcenter.heroku.com/articles/heroku-20-stack"},"documentation"),"."),(0,o.kt)("p",null,"Here are the supported languages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-ruby"},"Ruby")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-nodejs"},"Node.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-python"},"Python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-java"},"Java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-php"},"PHP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-go"},"Go"))),(0,o.kt)("h2",{id:"paketo-buildpacks"},"Paketo Buildpacks"),(0,o.kt)("p",null,"The project was started at ",(0,o.kt)("a",{parentName:"p",href:"https://cloudfoundry.org"},"Cloud Foundry"),". Paketo Buildpacks are very similar to Heroku Buildpacks. Check out their ",(0,o.kt)("a",{parentName:"p",href:"https://paketo.io/"},"documentation"),"."),(0,o.kt)("p",null,"Here are the supported languages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paketo.io/docs/howto/java/"},"Java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paketo.io/docs/howto/nodejs/"},"Node.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paketo.io/docs/howto/dotnet-core/"},".NET Core")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paketo.io/docs/howto/go/"},"Go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paketo.io/docs/howto/python/"},"Python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paketo.io/docs/howto/php/"},"PHP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paketo.io/docs/howto/ruby/"},"Ruby"))),(0,o.kt)("h2",{id:"nixpacks"},"Nixpacks"),(0,o.kt)("p",null,"The project was started at ",(0,o.kt)("a",{parentName:"p",href:"https://railway.app"},"Railway")," in an attempt to fix the issues Heroku Buildpacks have. It uses Nix packages for reproducible environments. Check out their ",(0,o.kt)("a",{parentName:"p",href:"https://nixpacks.com"},"documentation"),"."),(0,o.kt)("p",null,"Here are the supported languages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/crystal"},"Crystal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/csharp"},"C#/.NET")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/dart"},"Dart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/deno"},"Deno")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/fsharp"},"F#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/go"},"Go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/haskell"},"Haskell")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/java"},"Java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/clojure"},"Clojure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/node"},"Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/php"},"PHP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/python"},"Python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/ruby"},"Ruby")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/rust"},"Rust")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/staticfile"},"Staticfile")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/swift"},"Swift")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixpacks.com/docs/providers/zig-lang"},"Zig"))))}k.isMDXComponent=!0}}]);