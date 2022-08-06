"use strict";(self.webpackChunkbrooks_sime=self.webpackChunkbrooks_sime||[]).push([[691],{1046:function(e,t,n){n.d(t,{w_:function(){return s}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function i(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),i(e.child))}))}function s(e){return function(t){return r.createElement(u,c({attr:c({},e.attr)},t),i(e.child))}}function u(e){var t=function(t){var n,a=e.attr,l=e.size,i=e.title,s=o(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}},1241:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return k}});var r=n(7294),a={0:["̍","̎","̄","̿","̑","̆","͒","͗","͑","̈","̊","͂","̈́","͊","͋","̃","̂","̌","̀","́","̋","̒","̓","̔","̉","ͣ","ͤ","ͦ","ͧ","ͨ","ͪ","ͫ","ͬ","ͮ","ͯ","̾","͆"],1:["̖","̗","̘","̜","̝","̞","̠","̤","̥","̩","̪","̫","̭","̮","̯","̱","̲","̳","̺","̻","̼","͇","͈","͉","͎","͓","͔","͖","͙","͚"],2:["̕","̛","̀","͘","̡","̢","̨","̴","̵","͏","͜","͝","͟","͠","͢","̷","͡"]};function l(e,t){return t>10&&(t=10,console.warn("cannot zalgoify "+e+" more than 10 times")),t<=0?c(e):l(c(e),t-1)}function c(e){return e.split("").map((function(e){if(" "===e)return e;var t=a[Math.floor(Math.random()*Object.keys(a).length)];return e+t[Math.floor(Math.random()*t.length)]})).join("")}var o=function(e){var t=e.linkName,n=e.runs,a=e.href,c=e.target,o=e.icon,i=r.useState(t),s=i[0],u=i[1];return r.createElement("a",{onMouseEnter:function(){return u(l(s,n))},onMouseLeave:function(){return u(t)},href:a||"#",target:c},o," ",s)},i=function(e){return r.createElement(r.Fragment,null,r.createElement("div",{className:"tab"},r.createElement("a",{href:e.href},e.name)),!e.hideSeparator&&r.createElement("div",null,"|"))},s=[],u=function(){return r.createElement("header",{className:"header"},r.createElement("h1",null,r.createElement(o,{linkName:"BROOKS SIME",runs:2})),r.createElement("div",{className:"tabs"},s.map((function(e){return r.createElement(i,Object.assign({key:e.name},e))}))))},m=function(e){return r.createElement("img",{className:"image",style:(t=e.grayscale,{filter:"grayscale("+(t||0)+")"}),src:e.src,alt:e.alt,height:e.height||200,width:e.width||200});var t},f={minWidth:200},h=function(e){return r.createElement("div",{style:f},e.children)},d=function(e){return r.createElement("section",{className:"card",id:e.id},e.src&&r.createElement(m,{src:e.src,alt:e.alt||"",grayscale:1,height:e.imgHeight,width:e.imgWidth}),r.createElement(h,{children:e.children}))},E=n.p+"static/headshot-15407f80f208fb2e28628038b48ea74d.jpg",g=function(){return r.createElement("main",{className:"body"},r.createElement(d,{id:"about",src:E,imgHeight:300},r.createElement(r.Fragment,null,r.createElement("p",null,"I'm a software engineer at"," ",r.createElement(o,{linkName:"ChartHop",runs:1,target:"_blank",href:"https://www.charthop.com"}),"."),r.createElement("p",null,"Previously, I founded Gather, a project management app for People Ops."),r.createElement("p",null,"Before that, I was a"," ",r.createElement(o,{linkName:"Venture for America",runs:1,target:"_blank",href:"https://ventureforamerica.org"})," ","fellow in New Orleans."))))},p=n(3201),w=function(){return r.createElement("footer",{className:"footer"},r.createElement(o,{icon:r.createElement(p.hJX,null),linkName:"Github",runs:1,target:"_blank",href:"https://www.github.com/brookssime"}),r.createElement(o,{icon:r.createElement(p.fWC,null),linkName:"Twitter",runs:1,target:"_blank",href:"https://twitter.com/brookssime"}),r.createElement(o,{icon:r.createElement(p.ltd,null),linkName:"LinkedIn",runs:1,target:"_blank",href:"https://www.linkedin.com/in/brookssime"}))},b=function(){var e=(new Date).getFullYear();return r.createElement(r.Fragment,null,r.createElement("title",null,"Brooks Sime"),r.createElement("meta",{name:"description",content:"Brooks Sime | "+e}))},k=function(){return r.createElement("div",{className:"pages"},r.createElement(u,null),r.createElement(g,null),r.createElement(w,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e473727cfd4dfcfbe8ef.js.map