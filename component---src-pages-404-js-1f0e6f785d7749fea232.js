(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{160:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(165),o=a(163);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},162:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(33),s=a.n(i);a.d(t,"a",function(){return s.a});a(164),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},163:function(e,t,a){"use strict";var n=a(167),r=a(0),l=a.n(r),o=a(4),i=a.n(o),s=a(166),m=a.n(s),c=function(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,i=e.title,s=n.data.site.siteMetadata,c=s.title,u=s.description,g=s.author,p=i||c,d=t||u;return l.a.createElement(m.a,{htmlAttributes:{lang:a},title:p,titleTemplate:i?i+" :: "+c:c,meta:[{name:"description",content:d},{property:"og:title",content:p},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:p},{name:"twitter:description",content:d},{name:"twitter:creator",content:g}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})};c.defaultProps={lang:"en",meta:[],keywords:["gatsby","minimal","starter","blog","theme","dark","light","personal site"]},c.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string},t.a=c},164:function(e,t,a){var n;e.exports=(n=a(169))&&n.default||n},165:function(e,t,a){"use strict";var n=a(168),r=a(0),l=a.n(r),o=a(4),i=a.n(o),s=a(162),m=a(166),c=a(152),u=a.n(c),g=function(e){var t=e.d,a=e.size,n=void 0===a?"1em":a,r=e.label,o=e.style;return l.a.createElement("span",{className:u.a.root,style:o,role:"figure"},l.a.createElement("svg",{version:"1.1",width:n,height:n,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:t,className:u.a.icon})),r&&l.a.createElement("span",{className:u.a.label},r))};g.propTypes={d:i.a.string,size:i.a.number,label:i.a.string,style:i.a.object};var p=g,d=a(153),h=a.n(d),M=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.isMobileMenu,r=t.slice(0);return!n&&r.splice(a),r.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(s.a,{to:e.path},e.title))})},b=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.onToggleSubMenu,r=t.slice(0);r.splice(0,a);var o=r.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(s.a,{to:e.path},e.title))});return l.a.createElement(l.a.Fragment,null,o,l.a.createElement("div",{className:h.a.subMenuOverlay,role:"button",tabIndex:0,onClick:n}))},E=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.menuMoreText,r=e.isMobileMenuVisible,o=e.isSubMenuVisible,i=e.onToggleMobileMenu,s=e.onToggleSubMenu,m=e.onChangeTheme,c=!(a>=t.length)&&a>0;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:h.a.mobileMenuContainer},l.a.createElement(l.a.Fragment,null,r?l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:h.a.mobileMenu},l.a.createElement(M,{mainMenu:t,isMobileMenu:!0})),l.a.createElement("div",{onClick:i,className:h.a.mobileMenuOverlay})):null,l.a.createElement("button",{className:h.a.menuTrigger,style:{color:"inherit"},onClick:i,type:"button","aria-label":"Menu"},l.a.createElement(p,{style:{cursor:"pointer"},size:24,d:"M4 34H40V30H4V34ZM4 24H40V20H4V24ZM4 10V14H40V10H4Z"})))),l.a.createElement("div",{className:h.a.desktopMenuContainer},l.a.createElement("ul",{className:h.a.menu},l.a.createElement(M,{mainMenu:t,mainMenuItems:a}),c?l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:h.a.subMenuTrigger,onClick:s,type:"button","aria-label":"Menu"},n||"Menu"," ",l.a.createElement("span",{className:h.a.menuArrow},">")),o?l.a.createElement("ul",{className:h.a.subMenu},l.a.createElement(b,{mainMenu:t,mainMenuItems:a,onToggleSubMenu:s})):null):null)),l.a.createElement("button",{className:h.a.themeToggle,onClick:m,type:"button","aria-label":"Theme toggle"},l.a.createElement(p,{style:{cursor:"pointer"},size:24,d:"M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22\n3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7\n13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"})))};E.propTypes={mainMenu:i.a.arrayOf(i.a.shape({title:i.a.string,path:i.a.string})),mainMenuItems:i.a.number,menuMoreText:i.a.string,isMobileMenuVisible:i.a.bool,isSubMenuVisible:i.a.bool,onToggleMobileMenu:i.a.func,onToggleSubMenu:i.a.func,onChangeTheme:i.a.func},b.propTypes={mainMenu:i.a.arrayOf(i.a.shape({title:i.a.string,path:i.a.string})),mainMenuItems:i.a.number,onToggleSubMenu:i.a.func};var f=E,y=a(154),T=a.n(y),w=function(e){var t=e.siteLogo,a=e.logoText,n=e.mainMenu,o=e.mainMenuItems,i=e.menuMoreText,c=e.defaultTheme,u="undefined"!=typeof window&&window.localStorage.getItem("theme")||null,g=Object(r.useState)(u),p=g[0],d=g[1],h=Object(r.useState)(!1),M=h[0],b=h[1],E=Object(r.useState)(!1),y=E[0],w=E[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.Helmet,null,l.a.createElement("body",{className:"light"===(p||c)?"light-theme":"dark-theme"})),l.a.createElement("header",{className:T.a.header},l.a.createElement("div",{className:T.a.inner},l.a.createElement(s.a,{to:"/"},l.a.createElement("div",{className:T.a.logo},t.src?l.a.createElement("img",{src:t.src,alt:t.alt}):l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:T.a.mark},">"),l.a.createElement("span",{className:T.a.text},a),l.a.createElement("span",{className:T.a.cursor})))),l.a.createElement("span",{className:T.a.right},l.a.createElement(f,{mainMenu:n,mainMenuItems:o,isMobileMenuVisible:M,isSubMenuVisible:y,menuMoreText:i,onToggleMobileMenu:function(){return b(!M)},onToggleSubMenu:function(){return w(!y)},onChangeTheme:function(){var e="light"===(p||c)?"dark":"light";d(e),"undefined"!=typeof window&&window.localStorage.setItem("theme",e)}})))))};w.propTypes={siteLogo:i.a.object,logoText:i.a.string,defaultTheme:i.a.string,mainMenu:i.a.arrayOf(i.a.shape({title:i.a.string,path:i.a.string})),mainMenuItems:i.a.number,menuMoreText:i.a.string};var v=w,N=function(e){var t=e.copyrights;return l.a.createElement("footer",null,t?l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"footerCopyrights"},l.a.createElement("a",{href:"https://github.com/woodnsec",target:"_blank"},"GitHub")),l.a.createElement("span",{className:"footerCopyrights"},l.a.createElement("a",{href:"https://twitter.com/woodnsec",target:"_blank"},"Twitter")),l.a.createElement("span",{className:"footerCopyrights"},l.a.createElement("a",{href:"https://linkedin.com/in/woodnsec",target:"_blank"},"LinkedIn")),l.a.createElement("span",{className:"footerCopyrights"},l.a.createElement("a",{href:"https://resume.woodnsec.com",target:"_blank"},"Resume"))))};N.propTypes={copyrights:i.a.string};var k=N,x=(a(151),function(e){var t=e.children,a=n.data.site.siteMetadata,r=a.title,o=a.logo,i=a.logoText,s=a.defaultTheme,m=a.mainMenu,c=a.showMenuItems,u=a.menuMoreText,g=a.copyrights;return l.a.createElement("div",{className:"container"},l.a.createElement(v,{siteTitle:r,siteLogo:o,logoText:i,defaultTheme:s,mainMenu:m,mainMenuItems:c,menuMoreText:u}),l.a.createElement("div",{className:"content"},t),l.a.createElement(k,{copyrights:g}))});x.propTypes={children:i.a.node.isRequired};t.a=x},167:function(e){e.exports={data:{site:{siteMetadata:{title:"woodnsec",description:"A simple starter for Gatsby. That's it.",author:"@panr"}}}}},168:function(e){e.exports={data:{site:{siteMetadata:{title:"woodnsec",logo:{src:"",alt:""},logoText:"woodnsec",defaultTheme:"dark",copyrights:"",mainMenu:[{title:"About",path:"/about"}],showMenuItems:3,menuMoreText:"Show more"}}}}},169:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(59),s=a(2),m=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m}}]);
//# sourceMappingURL=component---src-pages-404-js-1f0e6f785d7749fea232.js.map