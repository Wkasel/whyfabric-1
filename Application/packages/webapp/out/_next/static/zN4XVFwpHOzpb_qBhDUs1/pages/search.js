(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{A00F:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r("Gcfw")}])},BzZH:function(t,e,r){"use strict";var o=r("ERkP"),n=r.n(o),i=r("7xIC"),a=r.n(i),c=r("KEZU"),l=r("HCes"),s=r("tDgs"),p=r("X5VF"),d=r.n(p),u=r("UE5/"),h=r("jZnR"),f=Object(u.a)((function(){return Object(h.a)({root:{width:"100%"},toolbar:{display:"flex",justifyContent:"space-between",alignItems:"center"},searchArea:{flexBasis:"40%",display:"flex",justifyContent:"flex-end",alignItems:"center",background:"#f9f9f9",borderRadius:"3px",margin:"0 5px",padding:"3px"},searchField:{width:"100%",padding:"0 10px","&:before":{content:""},"& label":{color:"red"}},searchFieldHide:{visibility:"hidden"},underline:{"&:after":{cursor:"pointer",borderBottom:"1px solid #8a8a8a"},"&:before":{borderBottom:"1px solid transparent"},"&:hover":{"&:not(.Mui-disabled)":{"&:before":{borderBottom:"1px solid #b9b9b9"}}}},searchButton:{cursor:"pointer",backgroundColor:"#0db1fb",borderRadius:"3px",padding:"12px",boxShadow:"0 2px 3px -1px rgba(0, 0, 0, 0.5)","&:hover":{backgroundColor:"#0db1fb"}},searchIcon:{fill:"#fff"}})})),b=n.a.createElement;e.a=function(){var t=Object(o.useState)(!1),e=(t[0],t[1],Object(o.useState)("")),r=e[0],n=e[1],i=f();return b(c.a,{component:"span",m:1,className:i.root},b("form",{className:i.searchArea},b(s.a,{placeholder:"Search causal event",variant:"filled",className:i.searchField,onChange:function(t){console.log(t.target.value),n(t.target.value)},InputProps:{classes:{underline:i.underline}}}),b(l.a,{className:i.searchButton,onClick:function(){var t=r;console.log(t),a.a.push("/search/".concat(t))}},b(d.a,{className:i.searchIcon}))))}},Gcfw:function(t,e,r){"use strict";r.r(e);var o=r("ERkP"),n=r.n(o),i=r("tUKI"),a=(r("UZGs"),r("UE5/")),c=r("Ep2I"),l=(r("eYLM"),r("yUsM")),s=r("BzZH"),p=r("gdVA"),d=r("OUuf"),u=r("g7Z9"),h=n.a.createElement,f=Object(a.a)(u.a),b=function(){var t=f();return h(n.a.Fragment,null,h(p.a,null,h(d.a,{xs:12,sm:12,md:12},h(l.a,{variant:"h5",align:"center",gutterBottom:!0,className:t.subheader},"Search to your hearts content...")),h(d.a,{xs:12,sm:12,md:12},h(s.a,null))))},g=n.a.createElement,m="http://localhost:3000",x=Object(a.a)({root:{textAlign:"center"},description:{maxWidth:500,margin:"0 auto 20px auto"},button:{margin:"0 10px 15px 10px"}});e.default=function(){var t=Object(c.a)();x(t);return g(n.a.Fragment,null,g(i.NextSeo,{title:"WhyFabric",description:"Search Results",openGraph:{url:"https://whyfabric.com",title:"WhyFabric",description:"Search Results",images:[{url:"".concat(m,"/images/social_fb")},{url:"".concat(m,"/images/social_twitter")}],site_name:"The why behind the why"},twitter:{handle:"@whyfabric",site:"@whyfabric",cardType:"summary_large_image"}}),g("br",null),g("br",null),g(b,null))}},UZGs:function(t,e){},"W/Kd":function(t,e){t.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}},X5VF:function(t,e,r){"use strict";var o=r("IGGJ");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(r("ERkP")),i=(0,o(r("H5Iu")).default)(n.default.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");e.default=i},eYLM:function(t,e,r){"use strict";r.d(e,"a",(function(){return S}));var o=r("LdEA"),n=r.n(o),i=r("W/Kd"),a=r.n(i),c=function(t){return t.cloneNode(!0)},l=function(){return"file:"===window.location.protocol},s=new Map,p={},d=function(t,e){p[t]=p[t]||[],p[t].push(e)},u=function(t){for(var e=function(e,r){setTimeout((function(){if(Array.isArray(p[t])){var r=s.get(t),o=p[t][e];r instanceof SVGElement&&o(null,c(r)),r instanceof Error&&o(r),e===p[t].length-1&&delete p[t]}}),0)},r=0,o=p[t].length;r<o;r++)e(r)},h=0,f=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var o=Array(t),n=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,c=i.length;a<c;a++,n++)o[n]=i[a];return o},b=[],g={},m="http://www.w3.org/1999/xlink",x=function(t,e,r,o,n){var i=t.getAttribute("data-src")||t.getAttribute("src");if(i&&/\.svg/i.test(i)){if(-1!==b.indexOf(t))return b.splice(b.indexOf(t),1),void(t=null);b.push(t),t.setAttribute("src",""),function(t,e){if(s.has(t)){var r=s.get(t);return r instanceof SVGElement?void e(null,c(r)):r instanceof Error?void e(r):void d(t,e)}s.set(t,void 0),d(t,e);var o=new XMLHttpRequest;o.onreadystatechange=function(){try{if(4===o.readyState){if(404===o.status||null===o.responseXML)throw new Error(l()?"Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+t);if(!(200===o.status||l()&&0===o.status))throw new Error("There was a problem injecting the SVG: "+o.status+" "+o.statusText);o.responseXML instanceof Document&&o.responseXML.documentElement&&s.set(t,o.responseXML.documentElement),u(t)}}catch(e){s.set(t,e),u(t)}},o.open("GET",t),o.overrideMimeType&&o.overrideMimeType("text/xml"),o.send()}(i,(function(a,c){if(!c)return b.splice(b.indexOf(t),1),t=null,void n(a);var l=t.getAttribute("id");l&&c.setAttribute("id",l);var s=t.getAttribute("title");s&&c.setAttribute("title",s);var p=t.getAttribute("width");p&&c.setAttribute("width",p);var d=t.getAttribute("height");d&&c.setAttribute("height",d);var u=Array.from(new Set(f((c.getAttribute("class")||"").split(" "),["injected-svg"],(t.getAttribute("class")||"").split(" ")))).join(" ").trim();c.setAttribute("class",u);var x=t.getAttribute("style");x&&c.setAttribute("style",x),c.setAttribute("data-src",i);var v=[].filter.call(t.attributes,(function(t){return/^data-\w[\w-]*$/.test(t.name)}));if(Array.prototype.forEach.call(v,(function(t){t.name&&t.value&&c.setAttribute(t.name,t.value)})),r){var y,w,j,S,O,k={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(k).forEach((function(t){y=t,j=k[t];for(var e=function(t,e){var r;S=w[t].id,O=S+"-"+ ++h,Array.prototype.forEach.call(j,(function(t){for(var e=0,o=(r=c.querySelectorAll("["+t+'*="'+S+'"]')).length;e<o;e++){var n=r[e].getAttribute(t);n&&!n.match(new RegExp("url\\(#"+S+"\\)"))||r[e].setAttribute(t,"url(#"+O+")")}}));for(var o=c.querySelectorAll("[*|href]"),n=[],i=0,a=o.length;i<a;i++){var l=o[i].getAttributeNS(m,"href");l&&l.toString()==="#"+w[t].id&&n.push(o[i])}for(var s=0,p=n.length;s<p;s++)n[s].setAttributeNS(m,"href","#"+O);w[t].id=O},r=0,o=(w=c.querySelectorAll(y+"[id]")).length;r<o;r++)e(r)}))}c.removeAttribute("xmlns:a");for(var A,E,I=c.querySelectorAll("script"),R=[],C=0,B=I.length;C<B;C++)(E=I[C].getAttribute("type"))&&"application/ecmascript"!==E&&"application/javascript"!==E&&"text/javascript"!==E||((A=I[C].innerText||I[C].textContent)&&R.push(A),c.removeChild(I[C]));if(R.length>0&&("always"===e||"once"===e&&!g[i])){for(var W=0,T=R.length;W<T;W++)new Function(R[W])(window);g[i]=!0}var N=c.querySelectorAll("style");Array.prototype.forEach.call(N,(function(t){t.textContent+=""})),c.setAttribute("xmlns","http://www.w3.org/2000/svg"),c.setAttribute("xmlns:xlink",m),o(c),t.parentNode&&t.parentNode.replaceChild(c,t),b.splice(b.indexOf(t),1),t=null,n(null,c)}))}else n(new Error("Attempted to inject a file with a non-svg extension: "+i))},v=r("aWzz"),y=r("ERkP"),w=r("Q/r/"),j=r.n(w),S=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).initialState={hasError:!1,isLoading:!0},e.state=e.initialState,e._isMounted=!1,e.refCallback=function(t){e.container=t},e}a()(e,t);var r=e.prototype;return r.renderSVG=function(){var t=this;if(this.container instanceof Node){var e=this.props,r=e.beforeInjection,o=e.evalScripts,n=e.renumerateIRIElements,i=e.src,a=this.props.afterInjection,c=this.props.wrapper,l=document.createElement(c);l.innerHTML=j.a.renderToStaticMarkup(Object(y.createElement)(c,null,Object(y.createElement)(c,{"data-src":i}))),this.svgWrapper=this.container.appendChild(l.firstChild);!function(t,e){var r=void 0===e?{}:e,o=r.afterAll,n=void 0===o?function(){}:o,i=r.afterEach,a=void 0===i?function(){}:i,c=r.beforeEach,l=void 0===c?function(){}:c,s=r.evalScripts,p=void 0===s?"never":s,d=r.renumerateIRIElements,u=void 0===d||d;if(t&&"length"in t)for(var h=0,f=0,b=t.length;f<b;f++)x(t[f],p,u,l,(function(e,r){a(e,r),t&&"length"in t&&t.length===++h&&n(h)}));else t?x(t,p,u,l,(function(e,r){a(e,r),n(1),t=null})):n(0)}(this.svgWrapper.firstChild,{afterEach:function(e,r){e&&t.removeSVG(),t._isMounted&&t.setState((function(){return{hasError:!!e,isLoading:!1}}),(function(){a(e,r)}))},beforeEach:r,evalScripts:o,renumerateIRIElements:n})}},r.removeSVG=function(){this.container instanceof Node&&this.svgWrapper instanceof Node&&(this.container.removeChild(this.svgWrapper),this.svgWrapper=null)},r.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},r.componentDidUpdate=function(t){var e=this;(function(t,e){for(var r in t)if(!(r in e))return!0;for(var o in e)if(t[o]!==e[o])return!0;return!1})(t,this.props)&&this.setState((function(){return e.initialState}),(function(){e.removeSVG(),e.renderSVG()}))},r.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},r.render=function(){var t=this.props,e=(t.afterInjection,t.beforeInjection,t.evalScripts,t.fallback),r=t.loading,o=(t.renumerateIRIElements,t.src,t.wrapper),i=n()(t,["afterInjection","beforeInjection","evalScripts","fallback","loading","renumerateIRIElements","src","wrapper"]),a=o;return Object(y.createElement)(a,Object.assign({},i,{ref:this.refCallback}),this.state.isLoading&&r&&Object(y.createElement)(r,null),this.state.hasError&&e&&Object(y.createElement)(e,null))},e}(y.Component);S.defaultProps={afterInjection:function(){},beforeInjection:function(){},evalScripts:"never",fallback:null,loading:null,renumerateIRIElements:!0,wrapper:"div"},S.propTypes={afterInjection:v.func,beforeInjection:v.func,evalScripts:Object(v.oneOf)(["always","once","never"]),fallback:Object(v.oneOfType)([v.func,v.object,v.string]),loading:Object(v.oneOfType)([v.func,v.object,v.string]),renumerateIRIElements:v.bool,src:v.string.isRequired,wrapper:Object(v.oneOf)(["div","span"])}},g7Z9:function(t,e,r){"use strict";var o=r("zjfJ"),n=r("BhS5"),i=r("zuhX"),a={buttonGroup:{position:"relative",margin:"10px 1px",display:"inline-block",verticalAlign:"middle"},firstButton:{borderTopRightRadius:"0",borderBottomRightRadius:"0",margin:"0",position:"relative",float:"left","&:hover":{zIndex:"2"}},middleButton:{borderRadius:"0",margin:"0",position:"relative",float:"left","&:hover":{zIndex:"2"}},lastButton:{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",margin:"0","&:hover":{zIndex:"2"}}},c=r("sJ5S");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=s(s(s(s({title:n.P,mrAuto:n.A,mlAuto:n.z},i.a),a),c.a),{},{space50:{height:"50px",display:"block"},padding0:{padding:"0 !important"},imgContainer:{width:"120px",maxHeight:"160px",overflow:"hidden",display:"block","& img":{width:"100%"}},description:{maxWidth:"150px"},tdName:{minWidth:"200px",fontWeight:"400",fontSize:"1.5em"},tdNameAnchor:{color:n.q[1]},tdNameSmall:{color:n.q[0],fontSize:"0.75em",fontWeight:"300"},tdNumber:{textAlign:"right",minWidth:"150px",fontWeight:"300",fontSize:"1.125em !important"},tdNumberSmall:{marginRight:"3px"},tdNumberAndButtonGroup:{lineHeight:"1 !important","& .fab,& .fas,& .far,& .fal,& .material-icons":{marginRight:"0"},"& svg":{marginRight:"0"}},customFont:{fontSize:"16px !important"},actionButton:{margin:"0px",padding:"5px"},textCenter:{textAlign:"center"},textRight:{textAlign:"right"},floatRight:{float:"right"},justifyContentCenter:{WebkitBoxPack:"center !important",MsFlexPack:"center !important",justifyContent:"center !important"},signInButton:{"& button":{marginRight:"5px"}}});e.a=p},sJ5S:function(t,e,r){"use strict";var o=r("BhS5"),n={tooltip:{padding:"10px 15px",minWidth:"130px",color:o.W,lineHeight:"1.7em",background:"rgba(".concat(Object(o.r)(o.q[15]),",0.9)"),border:"none",borderRadius:"3px",boxShadow:"0 8px 10px 1px rgba(".concat(Object(o.r)(o.b),", 0.14), 0 3px 14px 2px rgba(").concat(Object(o.r)(o.b),", 0.12), 0 5px 5px -3px rgba(").concat(Object(o.r)(o.b),", 0.2)"),maxWidth:"200px",textAlign:"center",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:"0.875em",fontStyle:"normal",fontWeight:"400",textShadow:"none",textTransform:"none",letterSpacing:"normal",wordBreak:"normal",wordSpacing:"normal",wordWrap:"normal",whiteSpace:"normal",lineBreak:"auto"}};e.a=n},yUsM:function(t,e,r){"use strict";var o=r("cxan"),n=r("HbGN"),i=r("ERkP"),a=(r("aWzz"),r("7O4Y")),c=r("dJc8"),l=r("xOTp"),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},p=i.forwardRef((function(t,e){var r=t.align,c=void 0===r?"inherit":r,p=t.classes,d=t.className,u=t.color,h=void 0===u?"initial":u,f=t.component,b=t.display,g=void 0===b?"initial":b,m=t.gutterBottom,x=void 0!==m&&m,v=t.noWrap,y=void 0!==v&&v,w=t.paragraph,j=void 0!==w&&w,S=t.variant,O=void 0===S?"body1":S,k=t.variantMapping,A=void 0===k?s:k,E=Object(n.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),I=f||(j?"p":A[O]||s[O])||"span";return i.createElement(I,Object(o.a)({className:Object(a.a)(p.root,d,"inherit"!==O&&p[O],"initial"!==h&&p["color".concat(Object(l.a)(h))],y&&p.noWrap,x&&p.gutterBottom,j&&p.paragraph,"inherit"!==c&&p["align".concat(Object(l.a)(c))],"initial"!==g&&p["display".concat(Object(l.a)(g))]),ref:e},E))}));e.a=Object(c.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(p)},zuhX:function(t,e,r){"use strict";var o=r("BhS5"),n={checkRoot:{padding:"14px","&:hover":{backgroundColor:"unset"}},radioRoot:{padding:"16px","&:hover":{backgroundColor:"unset"}},labelRoot:{marginLeft:"-14px"},checkboxAndRadio:{position:"relative",display:"block",marginTop:"10px",marginBottom:"10px"},checkboxAndRadioHorizontal:{position:"relative",display:"block","&:first-child":{marginTop:"10px"},"&:not(:first-child)":{marginTop:"-14px"},marginTop:"0",marginBottom:"0"},checked:{color:"".concat(o.E[0],"!important")},checkedIcon:{width:"20px",height:"20px",border:"1px solid rgba(".concat(Object(o.r)(o.b),", 0.84)"),borderRadius:"3px"},uncheckedIcon:{width:"0px",height:"0px",padding:"9px",border:"1px solid rgba(".concat(Object(o.r)(o.b),", .54)"),borderRadius:"3px"},disabledCheckboxAndRadio:{"& $checkedIcon,& $uncheckedIcon,& $radioChecked,& $radioUnchecked":{borderColor:o.b,opacity:"0.26",color:o.b}},label:{cursor:"pointer",paddingLeft:"0",color:o.q[12],fontSize:"14px",lineHeight:"1.428571429",fontWeight:"400",display:"inline-flex",transition:"0.3s ease all",letterSpacing:"unset"},labelHorizontal:{color:"rgba(".concat(Object(o.r)(o.b),", 0.26)"),cursor:"pointer",display:"inline-flex",fontSize:"14px",lineHeight:"1.428571429",fontWeight:"400",paddingTop:"39px",marginRight:"0","@media (min-width: 992px)":{float:"right"}},labelHorizontalRadioCheckbox:{paddingTop:"22px"},labelLeftHorizontal:{color:"rgba(".concat(Object(o.r)(o.b),", 0.26)"),cursor:"pointer",display:"inline-flex",fontSize:"14px",lineHeight:"1.428571429",fontWeight:"400",paddingTop:"22px",marginRight:"0"},labelError:{color:o.j[0]},radio:{color:"".concat(o.E[0],"!important")},radioChecked:{width:"16px",height:"16px",border:"1px solid ".concat(o.E[0]),borderRadius:"50%"},radioUnchecked:{width:"0px",height:"0px",padding:"7px",border:"1px solid rgba(".concat(Object(o.r)(o.b),", .54)"),borderRadius:"50%"},inlineChecks:{marginTop:"8px"},iconCheckbox:{height:"116px",width:"116px",color:o.q[0],"& > span:first-child":{borderWidth:"4px",borderStyle:"solid",borderColor:o.q[17],textAlign:"center",verticalAlign:"middle",borderRadius:"50%",color:"inherit",margin:"0 auto 20px",transition:"all 0.2s"},"&:hover":{color:o.I[0],"& > span:first-child":{borderColor:o.I[0]}}},iconCheckboxChecked:{color:o.I[0],"& > span:first-child":{borderColor:o.I[0]}},iconCheckboxIcon:{fontSize:"40px",lineHeight:"111px"},switchBase:{color:"".concat(o.E[0],"!important")},switchIcon:{boxShadow:"0 1px 3px 1px rgba(".concat(Object(o.r)(o.b),", 0.4)"),color:"".concat(o.W,"  !important"),border:"1px solid rgba(".concat(Object(o.r)(o.b),", .54)")},switchIconChecked:{borderColor:o.E[0],transform:"translateX(0px)!important"},switchBar:{width:"30px",height:"15px",backgroundColor:"rgb(".concat(Object(o.r)(o.q[24]),")"),borderRadius:"15px",opacity:"0.7!important"},switchChecked:{"& + $switchBar":{backgroundColor:"rgba(".concat(Object(o.r)(o.E[0]),", 1) !important")},"& $switchIcon":{borderColor:o.E[0]}}};e.a=n}},[["A00F",0,1,2,3,4,6,7,8,9,12,10,14,18]]]);