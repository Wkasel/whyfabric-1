(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{0:function(e,t,r){r("YtSq"),e.exports=r("7xIC")},"0D2/":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"};t.default=n},"0iIO":function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,c=void 0===s?n:s,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;a(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",a("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var p=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=p?p.getAttribute("content"):null}var t,i,s,c=e.prototype;return c.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(a(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(s){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];a(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,r){t&&a(o(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,i),s&&r(t,s),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,r("F63i"))},"19Hx":function(e,t,r){"use strict";var n=r("IGGJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("ERkP")),i=(0,n(r("H5Iu")).default)(o.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=i},"8Gfn":function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return c}));var n=r("QsHW"),o=e.env.PORT||5e3,i="http://localhost:".concat(o),a=e&&e.versions&&Boolean(e.versions.node),s={IS_SERVER:!1,BUNDLE_ANALYZE:e.env.BUNDLE_ANALYZE,NODE_ENV:"production",CUSTOM_ENV:e.env.CUSTOM_ENV,PORT:e.env.PORT,HOST:e.env.HOST,IS_PROD:!0,GA_TRACKING_ID:e.env.GA_TRACKING_ID||"XXX-XXX-XXX",API_URL:e.env.API_URL},c={API_DOMAIN:i,API_TOKEN:"",BROWSER:!0,DEV:!1,DOMAIN:n.a,NODE:a,PORT:o,TITLE:"WhyFabric",OTHER:s}}).call(this,r("F63i"))},"8K1b":function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return o}))},"9DXr":function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return a}));var n=r("yJrn"),o=r("B5bk"),i=r("Gc2r");function a(){return e.__INIT_MATERIAL_UI__||(e.__INIT_MATERIAL_UI__={generateClassName:Object(n.a)(),sheetsManager:new Map,sheetsRegistry:new o.b,theme:i.a,themes:{MainTheme:i.a}}),e.__INIT_MATERIAL_UI__}}).call(this,r("fRV1"))},F63i:function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c,l=[],u=!1,p=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):p=-1,l.length&&f())}function f(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++p<t;)c&&c[p].run();p=-1,t=l.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||u||s(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},Gc2r:function(e,t,r){"use strict";var n=r("BTL3"),o=r("0D2/"),i=r.n(o),a=r("s5Oo"),s=r.n(a),c=Object(n.a)({overrides:{MuiCardHeader:{action:{margin:0}},MuiSelect:{selectMenu:{paddingLeft:4}}},palette:{primary:{main:i.a[50]},secondary:{main:s.a[500]},tonalOffset:.4},typography:{h1:{fontSize:"3.2rem"},overline:{fontFamily:["Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(",")}}});t.a=c},HAiT:function(e,t,r){"use strict";var n=r("BhS5"),o={imgFluid:{maxWidth:"100%",height:"auto"},imgRounded:{borderRadius:"6px !important"},imgRoundedCircle:{borderRadius:"50% !important"},imgRaised:{boxShadow:"0 5px 15px -8px rgba(".concat(Object(n.r)(n.b),", 0.24), 0 8px 10px -5px rgba(").concat(Object(n.r)(n.b),", 0.2)")},imgGallery:{width:"100%",marginBottom:"2.142rem"},imgCardTop:{width:"100%",borderTopLeftRadius:"calc(.25rem - 1px)",borderTopRightRadius:"calc(.25rem - 1px)"},imgCardBottom:{width:"100%",borderBottomLeftRadius:"calc(.25rem - 1px)",borderBottomRightRadius:"calc(.25rem - 1px)"},imgCard:{width:"100%",borderRadius:"calc(.25rem - 1px)"},imgCardOverlay:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",padding:"1.25rem"}};t.a=o},HaU7:function(e,t,r){"use strict";var n=r("IebI"),o=r("zQIG"),i=r("8mBC"),a=r("I/kN"),s=r("cMav"),c=r("pSQP"),l=r("4mCN");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}var p=r("Y3ZS");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=g,t.default=void 0;var d=p(r("ERkP")),f=r("fvxO");function h(e){return m.apply(this,arguments)}function m(){return(m=l(n.mark((function e(t){var r,o,i;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,o=t.ctx,e.next=3,(0,f.loadGetInitialProps)(r,o);case 3:return i=e.sent,e.abrupt("return",{pageProps:i});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=f.AppInitialProps;var b=function(e){a(r,e);var t=u(r);function r(){return o(this,r),t.apply(this,arguments)}return i(r,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,o=e.__N_SSG,i=e.__N_SSP;return(d.default.createElement(r,Object.assign({},n,o||i?{}:{url:g(t)})))}}]),r}(d.default.Component);function g(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return n},get pathname(){return t},get asPath(){return r},back:function(){e.back()},push:function(t,r){return e.push(t,r)},pushTo:function(t,r){var n=r?t:"",o=r||t;return e.push(n,o)},replace:function(t,r){return e.replace(t,r)},replaceTo:function(t,r){var n=r?t:"",o=r||t;return e.replace(n,o)}}}t.default=b,b.origGetInitialProps=h,b.getInitialProps=h},"K/z8":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("4wDe"),o=r("pWxA");function i(e,t){return!t||"object"!==Object(n.a)(t)&&"function"!==typeof t?Object(o.a)(e):t}},"Khd+":function(e,t,r){e.exports=r("HaU7")},L4Mh:function(e,t,r){"use strict";var n=r("cxan"),o=r("HbGN"),i=r("zjfJ"),a=r("ERkP"),s=(r("aWzz"),r("7O4Y")),c=r("dJc8"),l=r("xOTp"),u=a.forwardRef((function(e,t){var r=e.classes,i=e.className,c=e.component,u=void 0===c?"div":c,p=e.disableGutters,d=void 0!==p&&p,f=e.fixed,h=void 0!==f&&f,m=e.maxWidth,b=void 0===m?"lg":m,g=Object(o.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return(a.createElement(u,Object(n.a)({className:Object(s.a)(r.root,i,h&&r.fixed,d&&r.disableGutters,!1!==b&&r["maxWidth".concat(Object(l.a)(String(b)))]),ref:t},g)))}));t.a=Object(c.a)((function(e){return{root:Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,r){var n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:n}),t}),{}),maxWidthXs:Object(i.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(i.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(i.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(i.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(i.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)},Q0q4:function(e,t,r){"use strict";r.r(t);var n=r("cxan"),o=r("9fIP"),i=r("MMYH"),a=r("8K1b"),s=r("K/z8"),c=r("sRHE"),l=r("yFcC"),u=r.n(l),p=r("ERkP"),d=r.n(p),f=r("Khd+"),h=r.n(f),m=r("ejnp"),b=(r("aWzz"),r("J+K7")),g=r("rU8s"),v=r("m7v6");var y=function(e){var t=e.children,r=e.theme,o=Object(g.a)(),i=d.a.useMemo((function(){var e=null===o?r:function(e,t){return"function"===typeof t?t(e):Object(n.a)(Object(n.a)({},e),t)}(o,r);return null!=e&&(e[v.a]=null!==o),e}),[r,o]);return d.a.createElement(b.a.Provider,{value:i},t)},_=r("dJc8"),x={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},O=function(e){return Object(n.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var S=Object(_.a)((function(e){return{"@global":{html:x,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(n.a)({margin:0},O(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,r=void 0===t?null:t;return e.classes,p.createElement(p.Fragment,null,r)})),j=r("9DXr"),w=r("L4Mh"),R=r("8Gfn").a,k=r("DgiY"),C=Object(k.a)((function(e){return{root:{paddingBottom:e.spacing(8)}}})),P=r("MGE3"),T=r("O94r"),E=r.n(T),I=r("UE5/"),z=r("TJOh"),N=r.n(z),A=r("gdVA"),B=r("OUuf"),F=r("tycz"),W=r("j5I/"),D=r("cS6+"),M=r("zjfJ"),L=r("BhS5");function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){Object(M.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H=G(G({},r("HAiT").a),{},{container:L.g,title:L.P,description:L.l,section:G(G({},L.K),{},{padding:"70px 0px"}),socialFeed:{"& p":{display:"table-cell",verticalAlign:"top",overflow:"hidden",paddingBottom:"10px",maxWidth:300},"& i":{fontSize:"20px",display:"table-cell",paddingRight:"10px"}},img:{width:"20%",marginRight:"5%",marginBottom:"5%",float:"left"},list:{marginBottom:"0",padding:"0",marginTop:"0"},inlineBlock:{display:"inline-block",padding:"0px",width:"auto"},left:{float:"left!important",display:"block"},right:{padding:"15px 0",margin:"0",float:"right"},aClass:{textDecoration:"none",backgroundColor:"transparent"},block:{color:"inherit",padding:"0.9375rem",fontWeight:"500",fontSize:"12px",textTransform:"uppercase",borderRadius:"3px",textDecoration:"none",position:"relative",display:"block"},footerBrand:{height:"50px",padding:"15px 15px",fontSize:"18px",lineHeight:"50px",marginLeft:"-15px",color:L.q[1],textDecoration:"none",fontWeight:700,fontFamily:"Roboto Slab,Times New Roman,serif"},pullCenter:{display:"inline-block",float:"none"},rightLinks:{float:"right!important","& ul":{marginBottom:0,padding:0,listStyle:"none","& li":{display:"inline-block"},"& a":{display:"block"}},"& i":{fontSize:"20px"}},linksVertical:{"& li":{display:"block !important",marginLeft:"-5px",marginRight:"-5px","& a":{padding:"5px !important"}}},footer:{"& ul li":{display:"inline-block"},"& h4, & h5":{color:L.q[1],textDecoration:"none"},"& ul:not($socialButtons) li a":{color:"inherit",padding:"0.9375rem",fontWeight:"500",fontSize:"12px",textTransform:"uppercase",borderRadius:"3px",textDecoration:"none",position:"relative",display:"block"},"& small":{fontSize:"75%",color:L.q[10]},"& $pullCenter":{display:"inline-block",float:"none"}},iconSocial:{width:"41px",height:"41px",fontSize:"24px",minWidth:"41px",padding:0,overflow:"hidden",position:"relative"},copyRight:{padding:"15px 0px"},socialButtons:{"& li":{display:"inline-block"}},btnTwitter:G(G({},L.d),{},{color:L.S}),btnDribbble:G(G({},L.d),{},{color:L.n}),btnInstagram:G(G({},L.d),{},{color:L.v}),icon:{top:"3px",width:"18px",height:"18px",position:"relative"},customFormControl:{paddingTop:"14px"}}),U=d.a.createElement,J=Object(I.a)(H),V=function(){var e=J();return U(D.a,{theme:"white",content:U("div",null,U("ul",{className:e.socialButtons},U("li",null,U(F.a,{justIcon:!0,simple:!0,href:"https://twitter.com/whyfabric",color:"twitter"},U("i",{className:"fab fa-twitter"}))),U("li",null,U(F.a,{justIcon:!0,simple:!0,href:"https://facebook.com/whyfabric",color:"facebook"},U("i",{className:"fab fa-facebook-square"}))),U("li",null,U(F.a,{justIcon:!0,simple:!0,href:"https://youtube.com/users/whyfabric",color:"youtube"},U("i",{className:"fab fa-youtube"})))),U("div",{className:E()(e.pullCenter,e.copyRight)},"Copyright \xa9 ",1900+(new Date).getYear()," ",U("a",{href:"http://whyfabric.com",target:"_blank"},"WhyFabric, Inc.")," ","All Rights Reserved."))},U("div",{className:e.footer},U(A.a,null,U(B.a,{xs:12,sm:3,md:3},U("h5",null,"Company"),U("ul",{className:e.linksVertical},U("li",null,U("a",{href:"/blog"},"Blog")),U("li",null,U("a",{href:"/about"},"About us")),U("li",null,U("a",{href:"/team"},"Team")),U("li",null,U("a",{href:"/contact"},"Contact us")))),U(B.a,{xs:12,sm:3,md:3},U("h5",null,"Site Navigation"),U("ul",{className:e.linksVertical},U("li",null,U("a",{href:"/search"},"Search Theories")),U("li",null,U("a",{href:"/browse/all"},"Browse By Category")),U("li",null,U("a",{href:"/authors/register"},"Apply as an Author")),U("li",null,U("a",{href:"/faq"},"FAQ")),U("li",null,U("a",{href:"/glossary"},"Glossary")))),U(B.a,{xs:12,sm:3,md:3},U("h5",null,"Legal"),U("ul",{className:e.linksVertical},U("li",null,U("a",{href:"/terms"},"Terms & conditions")),U("li",null,U("a",{href:"/privacy"},"Privacy")),U("li",null,U("a",{href:"/oss"},"Open Source Policies")))),U(B.a,{xs:12,sm:3,md:3},U("h5",null,"Subscribe to Newsletter"),U("p",null,"Join our newsletter and stay up to date on the latest theories!"),U("form",null,U(W.a,{id:"footeremail",formControlProps:{fullWidth:!1,className:e.customFormControl},inputProps:{placeholder:"Your Email..."}}),U(F.a,{color:"primary",justIcon:!0},U(N.a,null)))))))},X=d.a.createElement,K=function(e){var t=C(),r=e.children;return Object(p.useEffect)((function(){"serviceWorker"in navigator&&!R.DEV&&0===navigator.serviceWorker.getRegistrations.length&&navigator.onLine&&navigator.serviceWorker.register("/service-worker.js")})),X(d.a.Fragment,null,X(P.a,{search:!1,back:!1}),X(w.a,{className:t.root},r),X(V,null))},$=d.a.createElement;function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(c.a)(e);if(t){var o=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(s.a)(this,r)}}var Q=function(e){Object(a.a)(r,e);var t=Y(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e)}},{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps,o=(e.router,Object(j.a)());return $(d.a.Fragment,null,$(m.b,{generateClassName:o.generateClassName,sheetsRegistry:o.sheetsRegistry,sheetsManager:o.sheetsManager},$(y,{theme:o.theme},$(S,null),$(u.a,{id:"3094047609"},["@font-face{font-display:swap;}","@import '../SxS-Ui/theme/scss/material-kit-pro-react.scss' body{padding:0 !important;overflow-y:scroll !important;}/*|*/*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-tap-highlight-color:rgba( 0, 0, 0, 0 );}","body{margin:0;min-width:320px;color:$secondary-color;font-size:16px;font-family:'Roboto',sans-serif;}","a{-webkit-text-decoration:none !important;text-decoration:none !important;color:$primary-color;}","a:hover{color:$primary-color;}","a:visited{color:$primary-color;}","input{outline:none;}"]),$(K,null,$(t,Object(n.a)({pageContext:o},r,{className:"jsx-3094047609 "+(r&&null!=r.className&&r.className||"")}))))))}}]),r}(h.a);t.default=Q},QsHW:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n="https://whyfabric.com"},Qxor:function(e,t,r){"use strict";var n=r("IGGJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("ERkP")),i=(0,n(r("H5Iu")).default)(o.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.default=i},TBv3:function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},TJOh:function(e,t,r){"use strict";var n=r("IGGJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("ERkP")),i=(0,n(r("H5Iu")).default)(o.default.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Mail");t.default=i},YtSq:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("Q0q4")}])},"cS6+":function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r("zjfJ"),o=r("ERkP"),i=r.n(o),a=r("O94r"),s=r.n(a),c=r("UE5/"),l=r("BhS5");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={left:{float:"left!important",display:"block"},right:{padding:"15px 0",margin:"0",float:"right"},rightLinks:{float:"right!important","& ul":{marginBottom:0,marginTop:10,padding:0,listStyle:"none",height:38,"& li":{display:"inline-block"}},"& i":{fontSize:"20px"}},footer:{padding:"0.9375rem 0",textAlign:"center",display:"flex",zIndex:"2",position:"relative","& ul":{marginBottom:"0",padding:0,listStyle:"none"}},big:{padding:"1.875rem 0","& h5, & h4":{fontWeight:700,fontFamily:"Roboto Slab,Times New Roman,serif",marginBottom:"15px"},"& p":{color:l.q[0]}},content:{textAlign:"left"},a:{color:l.E[0],textDecoration:"none",backgroundColor:"transparent"},dark:{background:"radial-gradient(ellipse at center,".concat(l.q[4]," 0,").concat(l.q[5]," 100%)"),backgroundSize:"550% 450%",color:l.W,"& p":{color:l.q[0]},"& i":{color:l.W},"& a":{color:l.W,opacity:".86","&:visited":{color:l.W},"&:focus, &:hover":{opacity:1}},"& hr":{borderColor:"rgba(".concat(Object(l.r)(l.W),",0.2)")},"& $btnTwitter, & $btnDribbble, & $btnInstagram":{color:l.W}},white:{backgroundColor:l.W,color:l.q[1],textDecoration:"none","& a":{"&:visited":{color:l.q[1]},"&:hover, &:focus":{color:l.q[20]}}},container:l.g,list:{marginBottom:"0",padding:"0",marginTop:"0"},inlineBlock:{display:"inline-block",padding:"0px",width:"auto"},icon:{width:"18px",height:"18px",position:"relative",top:"3px"},iconSocial:{width:"41px",height:"41px",fontSize:"24px",minWidth:"41px",padding:0,overflow:"hidden",position:"relative"},btnTwitter:p(p({},l.d),{},{color:l.S}),btnDribbble:p(p({},l.d),{},{color:l.n}),btnInstagram:p(p({},l.d),{},{color:l.v}),footerBrand:{height:"50px",padding:"15px 15px",fontSize:"18px",lineHeight:"50px",marginLeft:"-15px",color:l.q[1],textDecoration:"none",fontWeight:700,fontFamily:"Roboto Slab,Times New Roman,serif"},pullCenter:{display:"inline-block",float:"none"},clearFix:{clear:"both"}},f=i.a.createElement,h=Object(c.a)(d);function m(e){var t,r=e.children,o=e.content,i=e.theme,a=e.big,c=e.className,l=h(),u="transparent"!==i&&void 0!=i,p=s()((t={},Object(n.a)(t,l.footer,!0),Object(n.a)(t,l[i],u),Object(n.a)(t,l.big,a||void 0!==r),Object(n.a)(t,c,void 0!==c),t));s()(Object(n.a)({},l.a,!0));return f("footer",{className:p},f("div",{className:l.container},void 0!==r?f("div",null,f("div",{className:l.content},r),f("hr",null)):" ",o,f("div",{className:l.clearFix})))}},fRV1:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}e.exports=r},iKkk:function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var n,o=r("ERkP");var i=new(((n=r("icap"))&&n.__esModule?n:{default:n}).default),a=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return i.computeId(t,r)})).join(" ")};var o=n.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},n}(o.Component);t.default=a},icap:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=i(r("TBv3")),o=i(r("0iIO"));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,a=void 0!==i&&i,s=t.isBrowser,c=void 0===s?"undefined"!==typeof window:s;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),n&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=i,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var o=String(r),i=t+o;return e[i]||(e[i]="jsx-"+(0,n.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,o=e.id;if(n){var i=this.computeId(o,n);return{styleId:i,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,r)]}}return{styleId:this.computeId(o),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},"j5I/":function(e,t,r){"use strict";r.d(t,"a",(function(){return S}));var n=r("cxan"),o=r("zjfJ"),i=r("ERkP"),a=r.n(i),s=r("O94r"),c=r.n(s),l=r("UE5/"),u=r("jAJq"),p=r("FeTu"),d=r("Aqne"),f=r("Qxor"),h=r.n(f),m=r("19Hx"),b=r.n(m),g=r("BhS5");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _={disabled:{"&:before":{backgroundColor:"transparent !important"}},underline:{"&:hover:not($disabled):before,&:before":{borderBottomColor:"".concat(g.q[11]," !important"),borderBottomWidth:"1px !important"},"&:after":{borderBottomColor:g.E[0]}},underlineError:{"&:after":{borderBottomColor:g.j[0]}},underlineSuccess:{"&:after":{borderBottomColor:g.O[0]}},labelRoot:y(y({},g.k),{},{color:"".concat(g.q[12]," !important"),fontWeight:"400",fontSize:"14px",lineHeight:"1.42857",top:"10px",letterSpacing:"unset","& + $underline":{marginTop:"0px"}}),labelRootError:{color:"".concat(g.j[0]," !important")},labelRootSuccess:{color:"".concat(g.O[0]," !important")},feedback:{position:"absolute",bottom:"4px",right:"0",zIndex:"2",display:"block",width:"24px",height:"24px",textAlign:"center",pointerEvents:"none"},formControl:{margin:"0 0 17px 0",paddingTop:"27px",position:"relative","& svg,& .fab,& .far,& .fal,& .fas,& .material-icons":{color:g.q[13]}},whiteUnderline:{"&:hover:not($disabled):before,&:before":{borderBottomColor:g.W},"&:after":{borderBottomColor:g.W}},input:{color:g.q[13],height:"unset","&,&::placeholder":{fontSize:"14px",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"400",lineHeight:"1.42857",opacity:"1"},"&::placeholder":{color:g.q[12]}},whiteInput:{"&,&::placeholder":{color:g.W,opacity:"1"}}},x=a.a.createElement,O=Object(l.a)(_);function S(e){var t,r,i,a,s=e.formControlProps,l=e.labelText,f=e.id,m=e.labelProps,g=e.inputProps,v=e.error,y=e.white,_=e.inputRootCustomClasses,S=e.success,j=O(),w=c()((t={},Object(o.a)(t," ".concat(j.labelRootError),v),Object(o.a)(t," ".concat(j.labelRootSuccess),S&&!v),t)),R=c()((r={},Object(o.a)(r,j.underlineError,v),Object(o.a)(r,j.underlineSuccess,S&&!v),Object(o.a)(r,j.underline,!0),Object(o.a)(r,j.whiteUnderline,y),r)),k=c()(Object(o.a)({},_,void 0!==_)),C=c()((i={},Object(o.a)(i,j.input,!0),Object(o.a)(i,j.whiteInput,y),i));return a=void 0!==s?c()(s.className,j.formControl):j.formControl,x(u.a,Object(n.a)({},s,{className:a}),void 0!==l?x(p.a,Object(n.a)({className:"".concat(j.labelRoot," ").concat(w),htmlFor:f},m),l):null,x(d.a,Object(n.a)({classes:{input:C,root:k,disabled:j.disabled,underline:R},id:f},g)),v?x(h.a,{className:"".concat(j.feedback," ").concat(j.labelRootError)}):S?x(b.a,{className:"".concat(j.feedback," ").concat(j.labelRootSuccess)}):null)}},s5Oo:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"};t.default=n},sRHE:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},yFcC:function(e,t,r){e.exports=r("iKkk")}},[[0,0,1,2,3,4,5,6,7,8,9,10,11,21]]]);