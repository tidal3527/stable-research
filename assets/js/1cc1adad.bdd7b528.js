"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[1694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,h=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},87975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={sidebar_label:"Nest.js",title:"Deploying a Nest.js Application with Easypanel",description:"Step-by-step guide on deploying a Nest.js application using Easypanel"},r="Nest.js",s={unversionedId:"quickstarts/nestjs/index",id:"quickstarts/nestjs/index",title:"Deploying a Nest.js Application with Easypanel",description:"Step-by-step guide on deploying a Nest.js application using Easypanel",source:"@site/docs/01-quickstarts/04-nestjs/index.md",sourceDirName:"01-quickstarts/04-nestjs",slug:"/quickstarts/nestjs/",permalink:"/docs/quickstarts/nestjs/",draft:!1,editUrl:"https://github.com/tidal3527/stable-research/docs/01-quickstarts/04-nestjs/index.md",tags:[],version:"current",frontMatter:{sidebar_label:"Nest.js",title:"Deploying a Nest.js Application with Easypanel",description:"Step-by-step guide on deploying a Nest.js application using Easypanel"},sidebar:"defaultSidebar",previous:{title:"Next.js",permalink:"/docs/quickstarts/nextjs/"},next:{title:"Nuxt.js",permalink:"/docs/quickstarts/nuxtjs/"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1 - Creating a New Project on Easypanel",id:"step-1---creating-a-new-project-on-easypanel",level:2},{value:"Step 2 - Setting up Your Application Service",id:"step-2---setting-up-your-application-service",level:2},{value:"Step 3 - Configuring the Git/GitHub Source",id:"step-3---configuring-the-gitgithub-source",level:2},{value:"Step 4 - Choosing the Build Method",id:"step-4---choosing-the-build-method",level:2},{value:"Step 5 - Setting up Your Environment",id:"step-5---setting-up-your-environment",level:2},{value:"Step 6 - Accessing and Testing Your Application",id:"step-6---accessing-and-testing-your-application",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nestjs"},"Nest.js"),(0,a.kt)("p",null,"Nest.js is a popular web application framework built with Node.js and TypeScript, offering a scalable and modular approach to developing server-side applications. Easypanel is a user-friendly web hosting control panel that simplifies server management, including deployment and configuration of web applications. This guide will walk you through deploying a Nest.js application on Easypanel, allowing you to access it via a public URL."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before you begin, ensure you have the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An existing Nest.js application on your local machine."),(0,a.kt)("li",{parentName:"ul"},"Easypanel installed and running on your server.")),(0,a.kt)("h2",{id:"step-1---creating-a-new-project-on-easypanel"},"Step 1 - Creating a New Project on Easypanel"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to your Easypanel account."),(0,a.kt)("li",{parentName:"ol"},'Click the "New" button to create a new project.'),(0,a.kt)("li",{parentName:"ol"},"Provide a name for your project."),(0,a.kt)("li",{parentName:"ol"},'Click "Create" to complete the project creation process.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New Project",src:n(23728).Z,width:"2624",height:"166"})),(0,a.kt)("h2",{id:"step-2---setting-up-your-application-service"},"Step 2 - Setting up Your Application Service"),(0,a.kt)("p",null,"After creating the project, proceed with setting up your application service, which represents your Nest.js application:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Within the project dashboard, click "+ Service."'),(0,a.kt)("li",{parentName:"ol"},'Choose "App" as the service type.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New App",src:n(15332).Z,width:"2624",height:"166"})),(0,a.kt)("h2",{id:"step-3---configuring-the-gitgithub-source"},"Step 3 - Configuring the Git/GitHub Source"),(0,a.kt)("p",null,"If you plan to deploy your Nest.js application from a repository, configure the Git repository source in Easypanel:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Set Git Source",src:n(73914).Z,width:"2076",height:"1082"})),(0,a.kt)("h2",{id:"step-4---choosing-the-build-method"},"Step 4 - Choosing the Build Method"),(0,a.kt)("p",null,"For deploying your Nest.js application, you have two recommended methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nixpacks: A package manager that simplifies building Node.js applications. You can use Nixpacks to define the environment for your Nest.js application and automate the build process."),(0,a.kt)("li",{parentName:"ul"},"Dockerfile: Docker is a containerization technology that allows you to package your Nest.js application with its dependencies and deploy it as a container. You can use a Dockerfile to define the environment for your Nest.js application and automate the build process.")),(0,a.kt)("p",null,"To select your build method:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Go to the "Build" tab within your application service.'),(0,a.kt)("li",{parentName:"ol"},"Choose either Nixpacks or Dockerfile based on your preferences and requirements."),(0,a.kt)("li",{parentName:"ol"},"Configure the selected method as needed."),(0,a.kt)("li",{parentName:"ol"},'Save your changes, and a prompt to "Deploy" will appear.'),(0,a.kt)("li",{parentName:"ol"},'Click "Deploy" to initiate the deployment process.')),(0,a.kt)("p",null,"If you choose to deploy your app using a Dockerfile, you will need to specify the relative path to the Dockerfile inside your repository."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Build Method",src:n(96887).Z,width:"2076",height:"768"})),(0,a.kt)("h2",{id:"step-5---setting-up-your-environment"},"Step 5 - Setting up Your Environment"),(0,a.kt)("p",null,'Configure the environment variables required for your Nest.js application using Easypanel\'s "Environment" tab:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Navigate to the "Environment" tab within your application service.'),(0,a.kt)("li",{parentName:"ol"},"Define the necessary key-value pairs for your environment variables."),(0,a.kt)("li",{parentName:"ol"},"Save the changes to apply the environment configurations."),(0,a.kt)("li",{parentName:"ol"},'Press "Deploy" to ensure the changes take effect in your running application.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Environment Setup",src:n(62145).Z,width:"2064",height:"1270"})),(0,a.kt)("h2",{id:"step-6---accessing-and-testing-your-application"},"Step 6 - Accessing and Testing Your Application"),(0,a.kt)("p",null,"Once the deployment is complete, your Nest.js application will be accessible through the public URL generated by Easypanel."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Accessing Application",src:n(53054).Z,width:"2076",height:"378"})),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Easypanel simplifies the process of deploying web applications, making it an ideal hosting solution for your Nest.js application. By following the steps outlined in this guide, you can successfully deploy your Nest.js application on Easypanel and make it available through a public URL. Don't forget to regularly update and secure your application to ensure smooth and secure operations."),(0,a.kt)("p",null,"If you encounter any issues or have further questions, don't hesitate to refer to Easypanel's documentation or seek assistance from their support team. They will be able to provide you with the necessary guidance to resolve any issues you may encounter."),(0,a.kt)("p",null,"Congratulations on successfully deploying your Nest.js application on Easypanel! Enjoy the benefits of easy server management and seamless hosting. Remember to keep your Nest.js application updated and secure to ensure its smooth and reliable operation."),(0,a.kt)("p",null,"If you have any further questions or need additional support, feel free to reach out. Happy hosting!"))}d.isMDXComponent=!0},96887:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/build-d2fe3919f0bac742ed45ea58a3f000d4.png"},62145:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/environment-b0644624f9b3005a5a25a17fcc8c9868.png"},15332:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new-app-929df0642349e74f6b84d0b9aa37ded7.png"},23728:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new-project-b5f5f70dc3a81edeaa74eb6781af5141.png"},53054:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/open-c770e7468ad1c1cd36aeb87418e5b371.png"},73914:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/source-panel-b50e81bac10fce45d5e6dc11a4344e60.png"}}]);