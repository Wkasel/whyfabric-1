(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"/QYh":function(e,t,r){"use strict";var o=r("O5Wi"),n=r("zQIG"),a=r("8mBC");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}t.__esModule=!0,t.default=void 0;var u,d=(u=r("ERkP"))&&u.__esModule?u:{default:u},p=r("D3Vl"),f=r("4smK");var b=[],m=[],h=!1;function g(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function y(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(o){var n=g(e[o]);n.loading?t.loading=!0:(t.loaded[o]=n.loaded,t.error=n.error),r.push(n.promise),n.promise.then((function(e){t.loaded[o]=e})).catch((function(e){t.error=e}))}))}catch(o){t.error=o}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function x(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),o=null;function n(){if(!o){var t=new O(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!h&&"function"===typeof r.webpack){var a=r.webpack();m.push((function(e){var t,r=c(a);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(-1!==e.indexOf(o))return n()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){n();var a=d.default.useContext(f.LoadableContext),i=(0,p.useSubscription)(o);return d.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?r.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return n()},i.displayName="LoadableComponent",d.default.forwardRef(i)}var O=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l(l({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function j(e){return x(g,e)}function w(e,t){for(var r=[];e.length;){var o=e.pop();r.push(o(t))}return Promise.all(r).then((function(){if(e.length)return w(e,t)}))}j.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return x(y,e)},j.preloadAll=function(){return new Promise((function(e,t){w(b).then(e,t)}))},j.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return h=!0,t()};w(m,e).then(r,r)}))},window.__NEXT_PRELOADREADY=j.preloadReady;var k=j;t.default=k},"/Uxh":function(e,t){e.exports="/_next/static/images/product2-c8b770e55abdb8feac58f6daa0b8dc5e.jpg"},"19Hx":function(e,t,r){"use strict";var o=r("IGGJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("ERkP")),a=(0,o(r("H5Iu")).default)(n.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=a},"23ek":function(e,t,r){"use strict";var o=r("IGGJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("ERkP")),a=(0,o(r("H5Iu")).default)(n.default.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.default=a},"4smK":function(e,t,r){"use strict";var o;t.__esModule=!0,t.LoadableContext=void 0;var n=((o=r("ERkP"))&&o.__esModule?o:{default:o}).default.createContext(null);t.LoadableContext=n},"8mBC":function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e}},AU4o:function(e,t,r){"use strict";var o=r("O5Wi");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=u,t.default=function(e,t){var r=l.default,o={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=a(a({},o),e));if(o=a(a({},o),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(o.render=function(t,r){return e.render(r,t)}),e.modules)){r=l.default.Map;var n={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?n[e]=t:n[e]=function(){return t.then((function(e){return e.default||e}))}})),o.loader=n}o.loadableGenerated&&delete(o=a(a({},o),o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr){if(!o.ssr)return delete o.ssr,u(r,o);delete o.ssr}return r(o)};var i=c(r("ERkP")),l=c(r("/QYh"));function c(e){return e&&e.__esModule?e:{default:e}}var s=!1;function u(e,t){if(delete t.webpack,delete t.modules,!s)return e(t);var r=t.loading;return function(){return i.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}},D7XE:function(e,t,r){var o=r("cHE3");e.exports=function(e,t){if(e){if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}},FyA8:function(e,t,r){"use strict";var o=r("IGGJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("ERkP")),a=(0,o(r("H5Iu")).default)(n.default.createElement("path",{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}),"Reply");t.default=a},"I/kN":function(e,t,r){var o=r("w7mb");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},N7I1:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},O5Wi:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},PSEX:function(e,t,r){"use strict";var o=r("IGGJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("ERkP")),a=(0,o(r("H5Iu")).default)(n.default.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");t.default=a},Ptle:function(e,t){e.exports="/_next/static/images/marc-bdcfd5a2156d61c0512a4f0bdd7935ba.jpg"},Qo6T:function(e,t,r){"use strict";var o=r("IGGJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("ERkP")),a=(0,o(r("H5Iu")).default)(n.default.createElement("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),"VolumeUp");t.default=a},"QsI/":function(e,t,r){"use strict";function o(e,t,r,o,n,a,i){try{var l=e[a](i),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(o,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function l(e){o(i,n,a,l,c,"next",e)}function c(e){o(i,n,a,l,c,"throw",e)}l(void 0)}))}}r.d(t,"a",(function(){return n}))},Qxor:function(e,t,r){"use strict";var o=r("IGGJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("ERkP")),a=(0,o(r("H5Iu")).default)(n.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.default=a},S38C:function(e,t,r){"use strict";var o=r("IGGJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("ERkP")),a=(0,o(r("H5Iu")).default)(n.default.createElement("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM17 14H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"}),"CommentRounded");t.default=a},UZGs:function(e,t){},VHg3:function(e,t,r){"use strict";r.r(t);var o=r("VtSi"),n=r.n(o),a=r("HbGN"),i=r("QsI/"),l=r("ERkP"),c=r.n(l),s=r("tUKI"),u=(r("UZGs"),r("UE5/")),d=r("Ep2I"),p=r("zjfJ"),f=r("jZnR"),b=r("KEZU"),m=r("gdVA"),h=r("OUuf"),g=(r("1vQI"),r("tycz")),y=r("JrbL"),v=r("yUsM"),x=r("Qo6T"),O=r.n(x),j=r("PSEX"),w=r.n(j),k=r("23ek"),P=r.n(k),_=r("S38C"),C=r.n(_),E=r("WkyU"),R=r("FyA8"),S=r.n(R),I=r("vVDQ"),N=r("j5I/"),A=r("g7Z9"),T=r("h6lx"),M=r("yfmb"),z=r.n(M),B=r("Ptle"),D=r.n(B),H=r("x0yr"),W=r.n(H),G=(r("d5kk"),r("/Uxh"),r("mbU1"),c.a.createElement),L=Object(u.a)(A.a),U=function(){var e=L();return G("div",{id:"comments"},G("div",{className:e.title},G("h3",null,"Comments")),G(m.a,null,G(h.a,{xs:12,sm:8,md:8,className:e.mlAuto+" "+e.mrAuto},G("div",null,G("h3",{className:e.title+" "+e.textCenter},"10 Comments"),G(I.a,{avatar:T,title:G("span",null,"TestTest ",G("small",null,"\xb7 7 minutes ago")),body:G("span",null,G("p",null,"Very Interesting Theory"),G("p",null,"Yes indeed")),footer:G("div",null,G(E.a,{id:"tooltip-tina",title:"Reply to comment",placement:"top",classes:{tooltip:e.tooltip}},G(g.a,{color:"primary",simple:!0,className:e.floatRight},G(S.a,null)," Reply")),G(g.a,{color:"danger",simple:!0,className:e.floatRight},G(P.a,null)," 243")),innerMedias:[G(I.a,{key:Math.random()*Date.now(),avatar:z.a,body:G(N.a,{id:"reply",formControlProps:{fullWidth:!0},inputProps:{multiline:!0,rows:4,placeholder:" Write some nice stuff or nothing..."}}),footer:G(g.a,{color:"primary",className:e.floatRight},G(S.a,null)," Reply")})]}),G(I.a,{avatar:D.a,title:G("span",null,"John Camber ",G("small",null,"\xb7 Yesterday")),body:G("span",null,G("p",null,"Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."),G("p",null,"Don","'","t forget, You","'","re Awesome!")),footer:G("div",null,G(E.a,{id:"tooltip-john",title:"Reply to comment",placement:"top",classes:{tooltip:e.tooltip}},G(g.a,{color:"primary",simple:!0,className:e.floatRight},G(S.a,null)," Reply")),G(g.a,{link:!0,className:e.floatRight},G(P.a,null)," 25")),innerMedias:[G(I.a,{key:Math.random()*Date.now(),avatar:T,title:G("span",null,"Tina Andrew ",G("small",null,"\xb7 2 Days Ago")),body:G("span",null,G("p",null,"Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."),G("p",null,"Don","'","t forget, You","'","re Awesome!")),footer:G("div",null,G(E.a,{id:"tooltip-tina2",title:"Reply to comment",placement:"top",classes:{tooltip:e.tooltip}},G(g.a,{color:"primary",simple:!0,className:e.floatRight},G(S.a,null)," Reply")),G(g.a,{simple:!0,color:"danger",className:e.floatRight},G(P.a,null)," 243"))})]}),G(I.a,{key:Math.random()*Date.now(),avatar:T,title:G("span",null,"Rosa Thompson ",G("small",null,"\xb7 2 Days Ago")),body:G("span",null,G("p",null,"Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."),G("p",null,"Don","'","t forget, You","'","re Awesome!")),footer:G("div",null,G(E.a,{id:"tooltip-tina2",title:"Reply to comment",placement:"top",classes:{tooltip:e.tooltip}},G(g.a,{color:"primary",simple:!0,className:e.floatRight},G(S.a,null)," Reply")),G(g.a,{simple:!0,color:"danger",className:e.floatRight},G(P.a,null)," 243"))}),G("div",null,G(y.a,{className:e.textCenter+" "+e.justifyContentCenter,pages:[{text:"\xab"},{text:1},{text:2},{active:!0,text:3},{text:4},{text:5},{text:"\xbb"}],color:"primary"}))),G("h3",{className:e.textCenter},"Post your comment ",G("br",null),G("small",null,"- Logged In User -")),G(I.a,{avatar:T,body:G(N.a,{id:"logged",formControlProps:{fullWidth:!0},inputProps:{multiline:!0,rows:6,placeholder:" Write some nice stuff or nothing..."}}),footer:G(g.a,{color:"primary",className:e.floatRight},G(S.a,null)," Reply")}),G("h3",{className:e.textCenter},"Post your comment ",G("br",null),G("small",null,"- Not Logged In User -")),G(I.a,{avatar:W.a,body:G("div",null,G(m.a,null,G(h.a,{xs:12,sm:6,md:6},G(N.a,{id:"not-logged-name",formControlProps:{fullWidth:!0},inputProps:{placeholder:"Your Name"}})),G(h.a,{xs:12,sm:6,md:6},G(N.a,{id:"not-logged-email",formControlProps:{fullWidth:!0},inputProps:{placeholder:"Your Email"}}))),G(N.a,{id:"not-logged-message",formControlProps:{fullWidth:!0},inputProps:{multiline:!0,rows:6,placeholder:" Write some nice stuff or nothing..."}})),footer:G("div",{className:e.signInButton},G("h6",null,"SIGN IN WITH"),G(g.a,{justIcon:!0,round:!0,color:"twitter"},G("i",{className:"fab fa-twitter"})),G(g.a,{justIcon:!0,round:!0,color:"facebook"},G("i",{className:"fab fa-facebook-square"})),G(g.a,{justIcon:!0,round:!0,color:"google"},G("i",{className:"fab fa-google-plus-square"})),G(g.a,{color:"primary",className:e.floatRight},"Post comment"))}))))},q=r("cxan"),J=(r("aWzz"),r("7O4Y")),F=r("xOTp"),Q=r("dJc8"),$=r("N79G"),V=l.forwardRef((function(e,t){var r=e.classes,o=e.className,n=e.color,i=void 0===n?"primary":n,c=e.value,s=e.valueBuffer,u=e.variant,p=void 0===u?"indeterminate":u,f=Object(a.a)(e,["classes","className","color","value","valueBuffer","variant"]),b=Object(d.a)(),m={},h={bar1:{},bar2:{}};if("determinate"===p||"buffer"===p)if(void 0!==c){m["aria-valuenow"]=Math.round(c),m["aria-valuemin"]=0,m["aria-valuemax"]=100;var g=c-100;"rtl"===b.direction&&(g=-g),h.bar1.transform="translateX(".concat(g,"%)")}else 0;if("buffer"===p)if(void 0!==s){var y=(s||0)-100;"rtl"===b.direction&&(y=-y),h.bar2.transform="translateX(".concat(y,"%)")}else 0;return(l.createElement("div",Object(q.a)({className:Object(J.a)(r.root,r["color".concat(Object(F.a)(i))],o,{determinate:r.determinate,indeterminate:r.indeterminate,buffer:r.buffer,query:r.query}[p]),role:"progressbar"},m,{ref:t},f),"buffer"===p?l.createElement("div",{className:Object(J.a)(r.dashed,r["dashedColor".concat(Object(F.a)(i))])}):null,l.createElement("div",{className:Object(J.a)(r.bar,r["barColor".concat(Object(F.a)(i))],("indeterminate"===p||"query"===p)&&r.bar1Indeterminate,{determinate:r.bar1Determinate,buffer:r.bar1Buffer}[p]),style:h.bar1}),"determinate"===p?null:l.createElement("div",{className:Object(J.a)(r.bar,("indeterminate"===p||"query"===p)&&r.bar2Indeterminate,"buffer"===p?[r["color".concat(Object(F.a)(i))],r.bar2Buffer]:r["barColor".concat(Object(F.a)(i))]),style:h.bar2})))})),Y=Object(Q.a)((function(e){var t=function(t){return"light"===e.palette.type?Object($.e)(t,.62):Object($.a)(t,.5)},r=t(e.palette.primary.main),o=t(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:r},colorSecondary:{backgroundColor:o},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(o," 0%, ").concat(o," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(V),X=r("AU4o"),Z=r.n(X),K=c.a.createElement,ee=Z()((function(){return r.e(66).then(r.bind(null,"AP/1"))}),{ssr:!1,loading:function(){return K(Y,null)},loadableGenerated:{webpack:function(){return["AP/1"]},modules:["./Graph"]}}),te=Object(u.a)((function(e){return Object(f.a)({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}})})),re=function(){te();return K(c.a.Fragment,null,K(ee,null),";")},oe=(r("eYLM"),c.a.createElement);function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){Object(p.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ie=Object(u.a)((function(){return Object(f.a)({graphSideBar:{"padding-top":"100px"}})})),le=Object(u.a)(ae(ae({},A.a),ie)),ce=function(e){le();return oe(c.a.Fragment,null,oe(m.a,null,oe(h.a,{xs:8},oe(h.a,{xs:12,sm:12,md:12,style:{paddingTop:"40px"}},oe(m.a,{direction:"row",justify:"space-between",alignItems:"center"},oe(h.a,{xs:6,sm:6,md:4},oe(v.a,{component:"h3"},"How Brexit Started ",oe(O.a,null))),oe(h.a,{xs:6,sm:6,md:4},oe(C.a,null),oe(w.a,null),oe(P.a,null)))),oe(h.a,{xs:12,sm:12,md:12},oe(b.a,{style:{backgroundColor:"#fff",height:"500px"}},oe(re,null)))),oe(h.a,{xs:4,style:{backgroundColor:"#fff",zIndex:"-11"}},oe(b.a,{style:{backgroundColor:"#fff",maxHeight:"400px",overflow:"auto"}},oe(U,null)))))},se=r("d325"),ue=c.a.createElement,de="WhyFabric | Brexit Theory by William Kasel",pe="http://localhost:3000",fe=Object(u.a)({root:{textAlign:"center"},description:{maxWidth:500,margin:"0 auto 20px auto"},button:{margin:"0 10px 15px 10px"}}),be=function(e){var t=Object(d.a)(),r=(fe(t),Object(se.a)());r.contain,r.setContain;return console.log(e.match),ue(c.a.Fragment,null,ue(s.NextSeo,{title:de,description:"Theory",openGraph:{url:"https://whyfabric.com",title:de,description:"Theory",images:[{url:"".concat(pe,"/images/social_fb")},{url:"".concat(pe,"/images/social_twitter")}],site_name:"The why behind the why"},twitter:{handle:"@whyfabric",site:"@whyfabric",cardType:"summary_large_image"}}),ue(ce,{theoryId:e.match}))};be.getInitialProps=function(){var e=Object(i.a)(n.a.mark((function e(t){var r,o,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,t.res,r=t.match,o=t.history,i=t.location,Object(a.a)(t,["req","res","match","history","location"]),console.log(r,o,i),e.abrupt("return",{test:!0});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=be},VtSi:function(e,t,r){e.exports=r("3yYM")},cHE3:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}},cMav:function(e,t,r){var o=r("i2RQ"),n=r("N7I1");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?n(e):t}},d325:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("zygG"),n=r("ERkP"),a=r.n(n),i=(Object(n.createContext)({bg:"",setBg:function(){},contain:!0,setContain:function(){}}),function(){var e=a.a.useState(""),t=Object(o.a)(e,2),r=t[0],n=t[1],i=a.a.useState(!0),l=Object(o.a)(i,2),c=l[0];l[1];return{bg:r,setBg:n,contain:c,setContain:Boolean}})},d5kk:function(e,t){e.exports="/_next/static/images/product1-64cdccbeed41d898b0bd00b112188f22.jpg"},h6lx:function(e,t){e.exports="/_next/static/images/avatar-df87bd5712a7af55b5f4ea6b1891265f.jpg"},i2RQ:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},"j5I/":function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var o=r("cxan"),n=r("zjfJ"),a=r("ERkP"),i=r.n(a),l=r("O94r"),c=r.n(l),s=r("UE5/"),u=r("jAJq"),d=r("FeTu"),p=r("Aqne"),f=r("Qxor"),b=r.n(f),m=r("19Hx"),h=r.n(m),g=r("BhS5");function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x={disabled:{"&:before":{backgroundColor:"transparent !important"}},underline:{"&:hover:not($disabled):before,&:before":{borderBottomColor:"".concat(g.q[11]," !important"),borderBottomWidth:"1px !important"},"&:after":{borderBottomColor:g.E[0]}},underlineError:{"&:after":{borderBottomColor:g.j[0]}},underlineSuccess:{"&:after":{borderBottomColor:g.O[0]}},labelRoot:v(v({},g.k),{},{color:"".concat(g.q[12]," !important"),fontWeight:"400",fontSize:"14px",lineHeight:"1.42857",top:"10px",letterSpacing:"unset","& + $underline":{marginTop:"0px"}}),labelRootError:{color:"".concat(g.j[0]," !important")},labelRootSuccess:{color:"".concat(g.O[0]," !important")},feedback:{position:"absolute",bottom:"4px",right:"0",zIndex:"2",display:"block",width:"24px",height:"24px",textAlign:"center",pointerEvents:"none"},formControl:{margin:"0 0 17px 0",paddingTop:"27px",position:"relative","& svg,& .fab,& .far,& .fal,& .fas,& .material-icons":{color:g.q[13]}},whiteUnderline:{"&:hover:not($disabled):before,&:before":{borderBottomColor:g.W},"&:after":{borderBottomColor:g.W}},input:{color:g.q[13],height:"unset","&,&::placeholder":{fontSize:"14px",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"400",lineHeight:"1.42857",opacity:"1"},"&::placeholder":{color:g.q[12]}},whiteInput:{"&,&::placeholder":{color:g.W,opacity:"1"}}},O=i.a.createElement,j=Object(s.a)(x);function w(e){var t,r,a,i,l=e.formControlProps,s=e.labelText,f=e.id,m=e.labelProps,g=e.inputProps,y=e.error,v=e.white,x=e.inputRootCustomClasses,w=e.success,k=j(),P=c()((t={},Object(n.a)(t," ".concat(k.labelRootError),y),Object(n.a)(t," ".concat(k.labelRootSuccess),w&&!y),t)),_=c()((r={},Object(n.a)(r,k.underlineError,y),Object(n.a)(r,k.underlineSuccess,w&&!y),Object(n.a)(r,k.underline,!0),Object(n.a)(r,k.whiteUnderline,v),r)),C=c()(Object(n.a)({},x,void 0!==x)),E=c()((a={},Object(n.a)(a,k.input,!0),Object(n.a)(a,k.whiteInput,v),a));return i=void 0!==l?c()(l.className,k.formControl):k.formControl,O(u.a,Object(o.a)({},l,{className:i}),void 0!==s?O(d.a,Object(o.a)({className:"".concat(k.labelRoot," ").concat(P),htmlFor:f},m),s):null,O(p.a,Object(o.a)({classes:{input:E,root:C,disabled:k.disabled,underline:_},id:f},g)),y?O(b.a,{className:"".concat(k.feedback," ").concat(k.labelRootError)}):w?O(h.a,{className:"".concat(k.feedback," ").concat(k.labelRootSuccess)}):null)}},jZnR:function(e,t,r){"use strict";function o(e){return e}r.d(t,"a",(function(){return o}))},mbU1:function(e,t){e.exports="/_next/static/images/product3-82334f5658753e195685a4e5fdf448eb.jpg"},pSQP:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},ugmz:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theories/theory/[theorySlug]/[theoryid]",function(){return r("VHg3")}])},vVDQ:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var o=r("cxan"),n=r("HbGN"),a=r("ERkP"),i=r.n(a),l=r("UE5/"),c=r("zjfJ"),s=r("BhS5");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={media:{display:"flex",WebkitBoxAlign:"start",alignItems:"flex-start","& p":{color:s.q[0],fontSize:"1rem",lineHeight:"1.6em"},"& $media $mediaBody":{paddingRight:"0px"}},mediaLink:{padding:"10px",float:"left !important"},mediaAvatar:{margin:"0 auto",width:"64px",height:"64px",overflow:"hidden",borderRadius:"50%",marginRight:"15px",boxShadow:"0 6px 10px 0 rgba(".concat(Object(s.r)(s.b),", 0.14), 0 1px 18px 0 rgba(").concat(Object(s.r)(s.b),", 0.12), 0 3px 5px -1px rgba(").concat(Object(s.r)(s.b),", 0.2)"),"& img":{width:"100%"}},mediaBody:{paddingRight:"10px",WebkitBoxFlex:"1",flex:"1"},mediaHeading:d(d({},s.P),{},{marginTop:"10px",marginBottom:"10px","& small":{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'}}),mediaFooter:{"& button, & a":{marginBottom:"20px"},"&:after":{display:"table",content:'" "',clear:"both"}}},f=i.a.createElement,b=Object(l.a)(p);function m(e){var t=e.avatarLink,r=e.avatar,a=e.avatarAlt,i=e.title,l=e.body,c=e.footer,s=e.innerMedias,u=Object(n.a)(e,["avatarLink","avatar","avatarAlt","title","body","footer","innerMedias"]),d=b();return f("div",Object(o.a)({},u,{className:d.media}),f("a",{href:t,className:d.mediaLink},f("div",{className:d.mediaAvatar},f("img",{src:r,alt:a}))),f("div",{className:d.mediaBody},void 0!==i?f("h4",{className:d.mediaHeading},i):null,l,f("div",{className:d.mediaFooter},c),void 0!==s?s.map((function(e){return e})):null))}m.defaultProps={avatarLink:"#pablo",avatarAlt:"..."}},w7mb:function(e,t){function r(t,o){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,o)}e.exports=r},x0yr:function(e,t){e.exports="/_next/static/images/placeholder-afc966710bf2a26ff79096bb33b0c972.jpg"},yUsM:function(e,t,r){"use strict";var o=r("cxan"),n=r("HbGN"),a=r("ERkP"),i=(r("aWzz"),r("7O4Y")),l=r("dJc8"),c=r("xOTp"),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=a.forwardRef((function(e,t){var r=e.align,l=void 0===r?"inherit":r,u=e.classes,d=e.className,p=e.color,f=void 0===p?"initial":p,b=e.component,m=e.display,h=void 0===m?"initial":m,g=e.gutterBottom,y=void 0!==g&&g,v=e.noWrap,x=void 0!==v&&v,O=e.paragraph,j=void 0!==O&&O,w=e.variant,k=void 0===w?"body1":w,P=e.variantMapping,_=void 0===P?s:P,C=Object(n.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),E=b||(j?"p":_[k]||s[k])||"span";return a.createElement(E,Object(o.a)({className:Object(i.a)(u.root,d,"inherit"!==k&&u[k],"initial"!==f&&u["color".concat(Object(c.a)(f))],x&&u.noWrap,y&&u.gutterBottom,j&&u.paragraph,"inherit"!==l&&u["align".concat(Object(c.a)(l))],"initial"!==h&&u["display".concat(Object(c.a)(h))]),ref:t},C))}));t.a=Object(l.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},yfmb:function(e,t){e.exports="/_next/static/images/kendall-19201574ed51f77138a739c0452ca104.jpg"},zQIG:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},zuhX:function(e,t,r){"use strict";var o=r("BhS5"),n={checkRoot:{padding:"14px","&:hover":{backgroundColor:"unset"}},radioRoot:{padding:"16px","&:hover":{backgroundColor:"unset"}},labelRoot:{marginLeft:"-14px"},checkboxAndRadio:{position:"relative",display:"block",marginTop:"10px",marginBottom:"10px"},checkboxAndRadioHorizontal:{position:"relative",display:"block","&:first-child":{marginTop:"10px"},"&:not(:first-child)":{marginTop:"-14px"},marginTop:"0",marginBottom:"0"},checked:{color:"".concat(o.E[0],"!important")},checkedIcon:{width:"20px",height:"20px",border:"1px solid rgba(".concat(Object(o.r)(o.b),", 0.84)"),borderRadius:"3px"},uncheckedIcon:{width:"0px",height:"0px",padding:"9px",border:"1px solid rgba(".concat(Object(o.r)(o.b),", .54)"),borderRadius:"3px"},disabledCheckboxAndRadio:{"& $checkedIcon,& $uncheckedIcon,& $radioChecked,& $radioUnchecked":{borderColor:o.b,opacity:"0.26",color:o.b}},label:{cursor:"pointer",paddingLeft:"0",color:o.q[12],fontSize:"14px",lineHeight:"1.428571429",fontWeight:"400",display:"inline-flex",transition:"0.3s ease all",letterSpacing:"unset"},labelHorizontal:{color:"rgba(".concat(Object(o.r)(o.b),", 0.26)"),cursor:"pointer",display:"inline-flex",fontSize:"14px",lineHeight:"1.428571429",fontWeight:"400",paddingTop:"39px",marginRight:"0","@media (min-width: 992px)":{float:"right"}},labelHorizontalRadioCheckbox:{paddingTop:"22px"},labelLeftHorizontal:{color:"rgba(".concat(Object(o.r)(o.b),", 0.26)"),cursor:"pointer",display:"inline-flex",fontSize:"14px",lineHeight:"1.428571429",fontWeight:"400",paddingTop:"22px",marginRight:"0"},labelError:{color:o.j[0]},radio:{color:"".concat(o.E[0],"!important")},radioChecked:{width:"16px",height:"16px",border:"1px solid ".concat(o.E[0]),borderRadius:"50%"},radioUnchecked:{width:"0px",height:"0px",padding:"7px",border:"1px solid rgba(".concat(Object(o.r)(o.b),", .54)"),borderRadius:"50%"},inlineChecks:{marginTop:"8px"},iconCheckbox:{height:"116px",width:"116px",color:o.q[0],"& > span:first-child":{borderWidth:"4px",borderStyle:"solid",borderColor:o.q[17],textAlign:"center",verticalAlign:"middle",borderRadius:"50%",color:"inherit",margin:"0 auto 20px",transition:"all 0.2s"},"&:hover":{color:o.I[0],"& > span:first-child":{borderColor:o.I[0]}}},iconCheckboxChecked:{color:o.I[0],"& > span:first-child":{borderColor:o.I[0]}},iconCheckboxIcon:{fontSize:"40px",lineHeight:"111px"},switchBase:{color:"".concat(o.E[0],"!important")},switchIcon:{boxShadow:"0 1px 3px 1px rgba(".concat(Object(o.r)(o.b),", 0.4)"),color:"".concat(o.W,"  !important"),border:"1px solid rgba(".concat(Object(o.r)(o.b),", .54)")},switchIconChecked:{borderColor:o.E[0],transform:"translateX(0px)!important"},switchBar:{width:"30px",height:"15px",backgroundColor:"rgb(".concat(Object(o.r)(o.q[24]),")"),borderRadius:"15px",opacity:"0.7!important"},switchChecked:{"& + $switchBar":{backgroundColor:"rgba(".concat(Object(o.r)(o.E[0]),", 1) !important")},"& $switchIcon":{borderColor:o.E[0]}}};t.a=n}},[["ugmz",0,1,2,3,5,4,6,7,8,12,15,19,21]]]);