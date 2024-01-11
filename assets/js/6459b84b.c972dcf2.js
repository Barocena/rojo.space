"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[7868],{1631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var o=n(5893),a=n(1151),r=n(4866),l=n(5162),s=n(3692);const i={sidebar_position:1,title:"Installation"},u="Installation",c={id:"getting-started/installation",title:"Installation",description:"There are two supported ways to install Rojo:",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/v7/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/docs/getting-started/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installation"},sidebar:"defaultSidebar",previous:{title:"Help!",permalink:"/docs/v7/help"},next:{title:"Creating a New Game",permalink:"/docs/v7/getting-started/new-game"}},d={},h=[{value:"Installing the Server",id:"installing-the-server",level:2},{value:"Installing the Plugin",id:"installing-the-plugin",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(t.p,{children:"There are two supported ways to install Rojo:"}),"\n",(0,o.jsxs)(r.Z,{groupId:"installation-kind",children:[(0,o.jsxs)(l.Z,{value:"vscode",label:"VS Code",default:!0,children:[(0,o.jsxs)(t.p,{children:["If you use Visual Studio Code, you can install ",(0,o.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=evaera.vscode-rojo",children:"the Rojo VS Code extension"}),", which allows for both halves of Rojo to work within Visual Studio Code, with a nifty UI to sync files and start/stop the Rojo server!"]}),(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["The VS Code extension does not add ",(0,o.jsx)(t.code,{children:"rojo"})," to your system PATH. In order to use Rojo from the terminal, you'll need to install the CLI separately."]})})]}),(0,o.jsxs)(l.Z,{value:"cli",label:"CLI",children:[(0,o.jsx)(t.p,{children:"Rojo has two pieces that need to be installed:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The Server"}),"\n",(0,o.jsx)(t.li,{children:"The Roblox Studio plugin"}),"\n"]}),(0,o.jsx)(t.h2,{id:"installing-the-server",children:"Installing the Server"}),(0,o.jsxs)(r.Z,{children:[(0,o.jsxs)(l.Z,{value:"aftman",label:"With Aftman",default:!0,children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/LPGhatguy/aftman",children:"Aftman"})," is a toolchain manager that is useful for managing tools like Rojo for Roblox projects. To install it, follow these ",(0,o.jsx)(t.a,{href:"https://github.com/LPGhatguy/aftman#installation",children:"instructions"}),"."]}),(0,o.jsx)(t.p,{children:"To install the latest release of Rojo, run the following commands:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"aftman add rojo-rbx/rojo\naftman install\n"})})]}),(0,o.jsxs)(l.Z,{value:"github",label:"From GitHub",children:[(0,o.jsxs)(t.p,{children:["There are pre-built binaries available for Windows, macOS, and Linux from Rojo's ",(0,o.jsx)(t.a,{href:"https://github.com/rojo-rbx/rojo/releases",children:"GitHub Releases page"}),"."]}),(0,o.jsxs)(t.p,{children:["The Rojo CLI must be run from the command line, like ",(0,o.jsx)(t.code,{children:"cmd.exe"})," on Windows or ",(0,o.jsx)(t.code,{children:"Terminal.app"})," on macOS. It's recommended that you put the Rojo CLI executable on your system ",(0,o.jsx)(t.code,{children:"PATH"})," to make this easier."]})]}),(0,o.jsxs)(l.Z,{value:"crates",label:"From crates.io",children:[(0,o.jsxs)(t.p,{children:["It's also possible to install Rojo releases using ",(0,o.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"}),". This will compile Rojo from source and install it on your machine."]}),(0,o.jsx)(t.p,{children:"To install Rojo 7, use:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"cargo install rojo --version ^7\n"})})]})]}),(0,o.jsx)(t.h2,{id:"installing-the-plugin",children:"Installing the Plugin"}),(0,o.jsxs)(r.Z,{children:[(0,o.jsxs)(l.Z,{value:"cli",label:"Using the CLI",children:[(0,o.jsx)(t.p,{children:"Once you've installed the Rojo server, you can use it to install or upgrade the Rojo plugin from the command line."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"rojo plugin install\n"})})]}),(0,o.jsxs)(l.Z,{value:"github",label:"From GitHub",children:[(0,o.jsx)(t.p,{children:"The Rojo plugin is available from Rojo's GitHub Releases page."}),(0,o.jsx)(s.Z,{className:"button button--primary button--extra-margin",to:"https://github.com/rojo-rbx/rojo/releases",children:"Rojo GitHub Releases"}),(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Rojo has a separate plugin for each major version. Make sure you install the correct one!"})}),(0,o.jsxs)(t.p,{children:["Download the attached ",(0,o.jsx)(t.code,{children:"rbxm"})," file and put it into your Roblox Studio plugins folder. You can find that folder by pressing ",(0,o.jsx)(t.strong,{children:"Plugins Folder"})," from your Plugins toolbar in Roblox Studio:"]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"&#39;Plugins Folder&#39; button in Roblox Studio",src:n(8579).Z+"",width:"655",height:"179"})})]}),(0,o.jsxs)(l.Z,{value:"roblox",label:"From Roblox.com",children:[(0,o.jsx)(t.p,{children:"The Rojo plugin can be installed from Roblox.com."}),(0,o.jsx)(s.Z,{className:"button button--primary button--extra-margin",to:"https://www.roblox.com/library/13916111004/Rojo",children:"Rojo 7 Plugin on Roblox.com"}),(0,o.jsx)(t.p,{children:"Press the 'Install' button on the plugin page to add it to Roblox Studio."})]})]})]})]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var o=n(6905);const a={tabItem:"tabItem_Ymn6"};var r=n(5893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,l),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(7294),a=n(6905),r=n(2466),l=n(6550),s=n(469),i=n(1980),u=n(7392),c=n(12);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[u,d]=m({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=u??b;return p({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(5893);function x(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=s[n].value;a!==o&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...r,className:(0,a.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,j.jsx)(x,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function w(e){const t=(0,f.Z)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},8579:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/plugins-folder-in-studio-cb565553f78b7e4b38fe60a6669bbca0.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>l});var o=n(7294);const a={},r=o.createContext(a);function l(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);