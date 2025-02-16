"use strict";(self.webpackChunkStable_Research=self.webpackChunkStable_Research||[]).push([[2641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={},r="App Service",l={unversionedId:"services/app",id:"services/app",title:"App Service",description:"The app service helps you deploy your application code. It's very versatile.",source:"@site/docs/03-services/01-app.md",sourceDirName:"03-services",slug:"/services/app",permalink:"/stable-research/docs/services/app",draft:!1,editUrl:"https://github.com/easypanel-io/website/tree/main/docs/03-services/01-app.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Services",permalink:"/stable-research/docs/services/"},next:{title:"MySQL Service",permalink:"/stable-research/docs/services/mysql"}},s={},p=[{value:"Source",id:"source",level:2},{value:"Environment",id:"environment",level:2},{value:"Domains &amp; Proxy",id:"domains--proxy",level:2},{value:"Mounts",id:"mounts",level:2},{value:"Ports",id:"ports",level:2},{value:"Deploy settings",id:"deploy-settings",level:2},{value:"Deploy Webhook",id:"deploy-webhook",level:2},{value:"Auto Deploy",id:"auto-deploy",level:2},{value:"Logs",id:"logs",level:2},{value:"Console",id:"console",level:2},{value:"About Database Connection Pool",id:"about-database-connection-pool",level:2},{value:"Example (Node.js)",id:"example-nodejs",level:3}],u={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"app-service"},"App Service"),(0,a.kt)("p",null,"The app service helps you deploy your application code. It's very versatile."),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,"There are three different source types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a Github repository"),(0,a.kt)("li",{parentName:"ul"},"a Custom git provider"),(0,a.kt)("li",{parentName:"ul"},"a Docker image")),(0,a.kt)("p",null,"For the Docker image, Easypanel will just pull the image and run it. For the Github repository Easypanel will build a Docker image from your code."),(0,a.kt)("p",null,"If your repository has a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", the Docker image will be built using it. Otherwise, it will detect which type of app you have and build it using Cloud Native Buildpacks."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"This is where you will put the contents of your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file. These variables will be available at build-time and run-time."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'The following "magic" environment variables exists within your EasyPanel project.'),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$(PROJECT_NAME)"),": This will become the project name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$(SERVICE_NAME)"),": This will become the service name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$(PRIMARY_DOMAIN)"),": This is the services primary domain name, you can select the primary domain name by clicking the star under the service domains."))),(0,a.kt)("h2",{id:"domains--proxy"},"Domains & Proxy"),(0,a.kt)("p",null,"If you are deploying a web app, you'll want to serve your app on a domain name. Once you add a domain name and deploy your app, it will configure the proxy service to serve your app on that domain."),(0,a.kt)("p",null,"These days, it's really important to serve your web app on HTTPS. Easypanel will grab and setup a free Let's Encrypt certificate for you in seconds."),(0,a.kt)("p",null,"One important configuration you need to make is the proxy port. That is the port which your app is listening on (port 3000, 8000, etc.)"),(0,a.kt)("h2",{id:"mounts"},"Mounts"),(0,a.kt)("p",null,"Since Easypanel is based on Docker, every time a service is restarted you will lose your data. The solution for that is to manually specify which files you want to persist. Docker calls these mounts and we use the same name."),(0,a.kt)("p",null,"There are three types of mounts you can configure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Volume",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"this will create a directory in ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/easypanel/projects/[project]/[service]/volumes/[volume]")),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," field is the name of that volume"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"mountPath")," field is the path inside your container"))),(0,a.kt)("li",{parentName:"ul"},"Bind",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"this will bind a path on the host machine (source) to a path inside your service"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"hostPath")," field is the path on your host machine"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"mountPath")," field is the path inside your container"))),(0,a.kt)("li",{parentName:"ul"},"File",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"this will bind a file to a path inside your service"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"content")," field is content of your file"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"mountPath")," field is the path inside your container")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can mount one Docker container to use the same folder as another, enabling shared files between two containers. Ensure that both containers have the necessary permissions and ownerships to read, write, and execute the files as needed.")),(0,a.kt)("h2",{id:"ports"},"Ports"),(0,a.kt)("p",null,"The ports are useful for exposing non-web apps."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Published - this is the port on your host machine"),(0,a.kt)("li",{parentName:"ul"},"Target - this is the port inside your service")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'If you are deploying a web app, you should use the "Domain & Proxy" settings.')),(0,a.kt)("h2",{id:"deploy-settings"},"Deploy settings"),(0,a.kt)("p",null,"You can configure how many containers you want to deploy for each service. For example, if you have a worker app, you could run multiple workers in parallel."),(0,a.kt)("p",null,'Also, you can configure the "command" and the "arguments" which are used when starting a container.'),(0,a.kt)("h2",{id:"deploy-webhook"},"Deploy Webhook"),(0,a.kt)("p",null,"Each app service has a URL which will trigger a new deployment. This is useful for 3rd party apps. You could have a chat bot that triggers the deployment or a physical button on your desk."),(0,a.kt)("h2",{id:"auto-deploy"},"Auto Deploy"),(0,a.kt)("p",null,"After your service is fully setup and working, you can enable the auto deployment. This will add the webhook in your Github repository and every time you push to Github a deployment will start."),(0,a.kt)("h2",{id:"logs"},"Logs"),(0,a.kt)("p",null,"Monitoring apps in production is hard. In the logs stream you will see the output for your service. If your service runs multiple containers (replicas) the outputs of all of them will be merged in the same stream."),(0,a.kt)("h2",{id:"console"},"Console"),(0,a.kt)("p",null,"If you want to dive even deeper into your service, you can use the console feature. This helps you start an in-browser terminal which is connected to your service."),(0,a.kt)("p",null,"Most services have ",(0,a.kt)("inlineCode",{parentName:"p"},"bash")," installed. If not, ",(0,a.kt)("inlineCode",{parentName:"p"},"sh")," will be there."),(0,a.kt)("p",null,'There is a special button called "Launcher". It will start a ',(0,a.kt)("inlineCode",{parentName:"p"},"bash")," process but will also configure the environment for your (",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),", etc)."),(0,a.kt)("h2",{id:"about-database-connection-pool"},"About Database Connection Pool"),(0,a.kt)("p",null,"Because Easypanel deploys your apps as Docker containers, there is a caveat while using any database solution with your apps. It can be described as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Initially, your app establishes connection with the database."),(0,a.kt)("li",{parentName:"ol"},"After ",(0,a.kt)("em",{parentName:"li"},"'X'")," minutes of no requests to your app, Docker thinks that your app is not being used for a while -- hence killing all the active connections."),(0,a.kt)("li",{parentName:"ol"},"However, your app maybe configured (by default) to always have a minimum number of connections with the database. So, when your app is hit with the first request after being idle for some time, it thinks that the connection with the database is already there, so it attepmts to query the database."),(0,a.kt)("li",{parentName:"ol"},"But, since the connection was killed by Docker, your app fails to perform operations on the database - displaying ",(0,a.kt)("inlineCode",{parentName:"li"},"500")," error to the client."),(0,a.kt)("li",{parentName:"ol"},"Now the app container realizes that there was no active connection with the database, so it establishes a new one."),(0,a.kt)("li",{parentName:"ol"},"The next request to your app is now successfully processed.")),(0,a.kt)("p",null,"To solve this problem, you need to be sure that you set the connection pool's ",(0,a.kt)("inlineCode",{parentName:"p"},"min")," value to ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),". This informs your application that there is zero minimum connection with the database, so it first checks if there is an active database connection before attempting to query it."),(0,a.kt)("h3",{id:"example-nodejs"},"Example (Node.js)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Doc: https://knexjs.org/guide/#pool\nconst knex = require('knex')({\n  client: 'pg',\n  connection: {\n    host: process.env.PGHOST,\n    port: Number(process.env.PGPORT),\n    user: process.env.PGUSER,\n    password: process.env.PGPASSWORD,\n    database: process.env.PGDATABASE,\n  },\n  pool: { min: 0 }, // \ud83d\udc48 Notice this line. 'knex' sets this to '2' by default.\n});\n")))}h.isMDXComponent=!0}}]);