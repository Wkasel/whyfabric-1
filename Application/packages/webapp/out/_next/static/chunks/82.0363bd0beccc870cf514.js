(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{ifVF:function(t,n,e){"use strict";e.r(n),e.d(n,"amplify_nav",(function(){return p})),e.d(n,"amplify_sign_out",(function(){return h}));var r=e("HhAr"),i=e("hZhg"),o=e("582f"),u=e("Q9A+"),a=e("WqyW"),c=e("rppb"),s=e("fz+1"),l=function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function u(t){try{c(r.next(t))}catch(n){o(n)}}function a(t){try{c(r.throw(t))}catch(n){o(n)}}function c(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,a)}c((r=r.apply(t,n||[])).next())}))},f=function(t,n){var e,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(t,u)}catch(a){o=[6,a],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},p=function(){function t(t){Object(r.k)(this,t)}return t.prototype.render=function(){return Object(r.i)("nav",{class:"nav"},Object(r.i)("slot",null))},t}();p.style=".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";var h=function(){function t(t){Object(r.k)(this,t),this.handleAuthStateChange=s.d,this.buttonText=a.a.SIGN_OUT}return t.prototype.signOut=function(t){return l(this,void 0,void 0,(function(){var n;return f(this,(function(e){switch(e.label){case 0:if(t&&t.preventDefault(),!u.a||"function"!==typeof u.a.signOut)throw new Error(c.d);e.label=1;case 1:return e.trys.push([1,3,,4]),[4,u.a.signOut()];case 2:return e.sent(),this.handleAuthStateChange(o.a.SignedOut),[3,4];case 3:return n=e.sent(),Object(s.a)(n),[3,4];case 4:return[2]}}))}))},t.prototype.render=function(){var t=this;return Object(r.i)("amplify-button",{slot:"sign-out",onClick:function(n){return t.signOut(n)},"data-test":"sign-out-button"},i.a.get(this.buttonText))},t}()}}]);