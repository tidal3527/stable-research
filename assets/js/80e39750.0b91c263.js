"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[5550],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return a?i.createElement(g,r(r({ref:t},c),{},{components:a})):i.createElement(g,r({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},71620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));const o={sidebar_label:"Laravel",title:"Hosting a Laravel Application with Easypanel",description:"Hosting a Laravel Application with Easypanel guide"},r="Laravel",l={unversionedId:"quickstarts/laravel/index",id:"quickstarts/laravel/index",title:"Hosting a Laravel Application with Easypanel",description:"Hosting a Laravel Application with Easypanel guide",source:"@site/docs/01-quickstarts/01-laravel/index.md",sourceDirName:"01-quickstarts/01-laravel",slug:"/quickstarts/laravel/",permalink:"/docs/quickstarts/laravel/",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/01-quickstarts/01-laravel/index.md",tags:[],version:"current",frontMatter:{sidebar_label:"Laravel",title:"Hosting a Laravel Application with Easypanel",description:"Hosting a Laravel Application with Easypanel guide"},sidebar:"defaultSidebar",previous:{title:"Static Website",permalink:"/docs/quickstarts/static-website/"},next:{title:"Express.js",permalink:"/docs/quickstarts/express/"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1 - Creating a New Project on Easypanel",id:"step-1---creating-a-new-project-on-easypanel",level:2},{value:"Step 2 - Setting up Your Application Service",id:"step-2---setting-up-your-application-service",level:2},{value:"Step 3 - Configuring the Git/GitHub Source",id:"step-3---configuring-the-gitgithub-source",level:2},{value:"Step 4 - Choosing the Build Method",id:"step-4---choosing-the-build-method",level:2},{value:"Step 5 - Configuring the Database",id:"step-5---configuring-the-database",level:2},{value:"Step 6 - Setting up Your Environment",id:"step-6---setting-up-your-environment",level:2},{value:"Step 7 - Accessing and Testing Your Application",id:"step-7---accessing-and-testing-your-application",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"laravel"},"Laravel"),(0,n.kt)("p",null,"Laravel is a popular web application framework built with PHP, which provides an excellent structure for developing robust and scalable web applications. Easypanel is a web hosting control panel that simplifies web hosting management, automating several tasks, including server creation, application deployment, and configuration management."),(0,n.kt)("p",null,"In this guide, we aim to provide a detailed step-by-step approach to deploying a Laravel application on Easypanel. After following the steps below, you will have a Laravel application running and accessible via a publicly accessible URL."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before we begin, ensure you have the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Laravel application running smoothly on your local machine (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/easypanel-io/laravel-sample"},"sample codebase"),")."),(0,n.kt)("li",{parentName:"ul"},"Easypanel running on your server.")),(0,n.kt)("h2",{id:"step-1---creating-a-new-project-on-easypanel"},"Step 1 - Creating a New Project on Easypanel"),(0,n.kt)("p",null,"The first step is to create a new project from Easypanel. To achieve this, follow the steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log in to your Easypanel account."),(0,n.kt)("li",{parentName:"ol"},'Click on "New" to create a new project.'),(0,n.kt)("li",{parentName:"ol"},"Specify the project's name."),(0,n.kt)("li",{parentName:"ol"},'Click on "Create" to complete the process.')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"New Project",src:a(93379).Z,width:"2624",height:"166"})),(0,n.kt)("h2",{id:"step-2---setting-up-your-application-service"},"Step 2 - Setting up Your Application Service"),(0,n.kt)("p",null,"Once you have obtained your new project, the next step is to set up your application service. The application service represents your Laravel application, and you can set it up quickly by following the steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Within the project dashboard, click on "+ Service"'),(0,n.kt)("li",{parentName:"ol"},'Select "App" and specify the service\'s name and domain.')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can leave the domain blank and Easypanel will ",(0,n.kt)("strong",{parentName:"p"},"generate")," a subdomain for you.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"New Project",src:a(55583).Z,width:"2624",height:"166"})),(0,n.kt)("h2",{id:"step-3---configuring-the-gitgithub-source"},"Step 3 - Configuring the Git/GitHub Source"),(0,n.kt)("p",null,"If you plan to deploy your Laravel application from a repository, you must set up the Git repository source. Easypanel supports Git and GitHub to facilitate your automation process."),(0,n.kt)("p",null,"If you are using a private repository we suggest following the ",(0,n.kt)("a",{parentName:"p",href:"/docs/code-sources/git-ssh"},"Git SSH guide")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Set git source",src:a(4928).Z,width:"2076",height:"1082"})),(0,n.kt)("h2",{id:"step-4---choosing-the-build-method"},"Step 4 - Choosing the Build Method"),(0,n.kt)("p",null,"Easypanel allows you to deploy your Laravel application using two methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Nixpacks: This is a package manager that simplifies building web applications for PHP developers. You can use Nixpacks to define the environment for your Laravel application and build it automatically."),(0,n.kt)("li",{parentName:"ul"},"Dockerfile: Docker is a containerization technology that allows you to package your Laravel application with all its dependencies and deploy it as a container. You can use Dockerfile to define the environment for your Laravel application and build it automatically.")),(0,n.kt)("p",null,"Follow the steps below to select your build method:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Navigate to the "Build" tab within your application service.'),(0,n.kt)("li",{parentName:"ol"},"Choose either Nixpacks or Dockerfile and configure it according to your preferences and needs."),(0,n.kt)("li",{parentName:"ol"},'Save the changes, and a prompt will appear with the option to "Deploy."'),(0,n.kt)("li",{parentName:"ol"},'Click on "Deploy" to initiate your deployment process.')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Set git source",src:a(39551).Z,width:"2076",height:"768"})),(0,n.kt)("h2",{id:"step-5---configuring-the-database"},"Step 5 - Configuring the Database"),(0,n.kt)("p",null,"In order to configure your database you would have to first create a database service."),(0,n.kt)("p",null,'From the project\'s page you can click on "+ Service" and choose your database of choice, in this example we will use a MySQL database.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"New Project",src:a(55583).Z,width:"2624",height:"166"})),(0,n.kt)("p",null,"After you click on the MySQL card you will have to set a name and a password for your database. If you leave the password field empty Easypanel will generate a password for you."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Set git source",src:a(69269).Z,width:"1268",height:"168"})),(0,n.kt)("p",null,"As soon as you created the database you will be redirected to the service's page, where you will be able to get the information needed for the next step."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Set git source",src:a(30405).Z,width:"1018",height:"402"})),(0,n.kt)("h2",{id:"step-6---setting-up-your-environment"},"Step 6 - Setting up Your Environment"),(0,n.kt)("p",null,"Every Laravel application has an ",(0,n.kt)("inlineCode",{parentName:"p"},".env"),' file that contains all the environment variables required for smooth operation. Use the "Environment" tab to set up your environment variables. Follow the steps below:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Navigate to the "Environment" tab within your application service.'),(0,n.kt)("li",{parentName:"ol"},"Set your environment variables by specifying the key-value pairs as desired."),(0,n.kt)("li",{parentName:"ol"},"Add Nixpacks specific variables for Laravel",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"NIXPACKS_PHP_ROOT_DIR=/app/public\nNIXPACKS_PHP_FALLBACK_PATH=/index.php\n"))),(0,n.kt)("li",{parentName:"ol"},"Save the changes to complete the process."),(0,n.kt)("li",{parentName:"ol"},'Press "Deploy" to apply the changes in your running app.')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Set git source",src:a(72085).Z,width:"2064",height:"1270"})),(0,n.kt)("h2",{id:"step-7---accessing-and-testing-your-application"},"Step 7 - Accessing and Testing Your Application"),(0,n.kt)("p",null,"Once your application is deployed, you can access it using the public URL generated by Easypanel."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Set Environment",src:a(37670).Z,width:"2076",height:"378"})),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Easypanel is an excellent hosting solution that simplifies the process of deploying web applications. By following the steps outlined in this guide, you can deploy your Laravel application in no time. Remember to keep your application up to date and secure to maintain smooth operations."))}d.isMDXComponent=!0},39551:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/build-d2fe3919f0bac742ed45ea58a3f000d4.png"},69269:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-mysql-b701050aa79351093d193ba63f8c3d39.png"},30405:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/db-credentials-fa84329cb93a7471d16d01cf316c0cbc.png"},72085:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/db-45293d18c26803e1e60d6ba3eac56faf.png"},55583:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/new-app-61d9c7c61459f65edb8edfbd7a900a5a.png"},93379:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/new-project-b5f5f70dc3a81edeaa74eb6781af5141.png"},37670:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/open-0e18fa229c434a0bb97d5ec7ae187a43.png"},4928:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/source-panel-03a1872bdff401f4a8a04b919e67fd7c.png"}}]);