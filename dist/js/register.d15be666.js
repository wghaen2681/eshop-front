(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"73cf":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{id:"register"}},[r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"text-center"},[t._v("註冊")])]),r("b-col",{attrs:{cols:"12"}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)},reset:t.reset}},[r("b-form-group",{attrs:{label:"帳號","label-for":"input-account",state:t.state.account,description:"帳號長度限制為 4 到 20 個字","invalid-feedback":"帳號格式不正確"}},[r("b-form-input",{attrs:{id:"input-account",type:"text",required:"",placeholder:"請輸入帳號",state:t.state.account},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1),r("b-form-group",{attrs:{label:"密碼","label-for":"input-password",state:t.state.password,description:"密碼長度限制為 4 到 20 個字","invalid-feedback":"密碼格式不正確"}},[r("b-form-input",{attrs:{id:"input-password",type:"password",required:"",placeholder:"請輸入密碼",state:t.state.password},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-form-group",{attrs:{label:"信箱","label-for":"input-email",state:t.state.email,description:"請輸入有效的信箱","invalid-feedback":"信箱格式不正確"}},[r("b-form-input",{attrs:{id:"input-email",type:"text",required:"",placeholder:"請輸入信箱",state:t.state.email},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("div",{staticClass:"text-center"},[r("b-btn",{staticClass:"mx-1",attrs:{variant:"success",type:"submit"}},[t._v("註冊")]),r("b-btn",{staticClass:"mx-1",attrs:{variant:"danger",type:"reset"}},[t._v("重設")])],1)],1)],1)],1)],1)},a=[],o=r("1da1");r("96cf");function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function i(t){var e="string"===typeof t||t instanceof String;if(!e){var r=c(t);throw null===t?r="null":"object"===r&&(r=t.constructor.name),new TypeError("Expected a string but received a ".concat(r))}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;for(var r in e)"undefined"===typeof t[r]&&(t[r]=e[r]);return t}function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function u(t,e){var r,n;i(t),"object"===s(e)?(r=e.min||0,n=e.max):(r=arguments[1],n=arguments[2]);var a=encodeURI(t).split(/%..|./).length-1;return a>=r&&("undefined"===typeof n||a<=n)}var f={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1};function p(t,e){i(t),e=l(e,f),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var r=t.split("."),n=r[r.length-1];if(e.require_tld){if(r.length<2)return!1;if(!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(n))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(n))return!1}return!(!e.allow_numeric_tld&&/^\d+$/.test(n))&&r.every((function(t){return!(t.length>63)&&(!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(t)&&(!/[\uff01-\uff5e]/.test(t)&&(!/^-|-$/.test(t)&&!(!e.allow_underscores&&/_/.test(t)))))}))}var m="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",d="(".concat(m,"[.]){3}").concat(m),x=new RegExp("^".concat(d,"$")),b="(?:[0-9a-fA-F]{1,4})",_=new RegExp("^("+"(?:".concat(b,":){7}(?:").concat(b,"|:)|")+"(?:".concat(b,":){6}(?:").concat(d,"|:").concat(b,"|:)|")+"(?:".concat(b,":){5}(?::").concat(d,"|(:").concat(b,"){1,2}|:)|")+"(?:".concat(b,":){4}(?:(:").concat(b,"){0,1}:").concat(d,"|(:").concat(b,"){1,3}|:)|")+"(?:".concat(b,":){3}(?:(:").concat(b,"){0,2}:").concat(d,"|(:").concat(b,"){1,4}|:)|")+"(?:".concat(b,":){2}(?:(:").concat(b,"){0,3}:").concat(d,"|(:").concat(b,"){1,5}|:)|")+"(?:".concat(b,":){1}(?:(:").concat(b,"){0,4}:").concat(d,"|(:").concat(b,"){1,6}|:)|")+"(?::((?::".concat(b,"){0,5}:").concat(d,"|(?::").concat(b,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(i(t),e=String(e),!e)return g(t,4)||g(t,6);if("4"===e){if(!x.test(t))return!1;var r=t.split(".").sort((function(t,e){return t-e}));return r[3]<=255}return"6"===e&&!!_.test(t)}var h={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1},v=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,w=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,y=/^[a-z\d]+$/,F=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,$=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,k=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,D=254;function S(t){var e=t.replace(/^"(.+)"$/,"$1");if(!e.trim())return!1;var r=/[\.";<>]/.test(e);if(r){if(e===t)return!1;var n=e.split('"').length===e.split('\\"').length;if(!n)return!1}return!0}function q(t,e){if(i(t),e=l(e,h),e.require_display_name||e.allow_display_name){var r=t.match(v);if(r){var n=r[1];if(t=t.replace(n,"").replace(/(^<|>$)/g,""),n.endsWith(" ")&&(n=n.substr(0,n.length-1)),!S(n))return!1}else if(e.require_display_name)return!1}if(!e.ignore_max_length&&t.length>D)return!1;var a=t.split("@"),o=a.pop(),c=a.join("@"),s=o.toLowerCase();if(e.domain_specific_validation&&("gmail.com"===s||"googlemail.com"===s)){c=c.toLowerCase();var f=c.split("+")[0];if(!u(f.replace(".",""),{min:6,max:30}))return!1;for(var m=f.split("."),d=0;d<m.length;d++)if(!y.test(m[d]))return!1}if(!1===e.ignore_max_length&&(!u(c,{max:64})||!u(o,{max:254})))return!1;if(!p(o,{require_tld:e.require_tld})){if(!e.allow_ip_domain)return!1;if(!g(o)){if(!o.startsWith("[")||!o.endsWith("]"))return!1;var x=o.substr(1,o.length-2);if(0===x.length||!g(x))return!1}}if('"'===c[0])return c=c.slice(1,c.length-1),e.allow_utf8_local_part?k.test(c):F.test(c);for(var b=e.allow_utf8_local_part?$:w,_=c.split("."),q=0;q<_.length;q++)if(!b.test(_[q]))return!1;return!e.blacklisted_chars||-1===c.search(new RegExp("[".concat(e.blacklisted_chars,"]+"),"g"))}var C={data:function(){return{form:{account:"",password:"",email:""}}},computed:{state:function(){var t=this.form.account,e=this.form.password,r=this.form.email;return{account:0===t.length?null:t.length>=4&&t.length<=20,password:0===e.length?null:e.length>=4&&e.length<=20,email:0===r.length?null:q(r)}}},methods:{reset:function(){this.form.account="",this.form.password="",this.form.email=""},submit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.post("/users",t.form);case 3:t.$swal({icon:"success",title:"成功",text:"註冊成功"}),t.$router.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:e.t0.response.data.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},E=C,z=r("2877"),A=Object(z["a"])(E,n,a,!1,null,null,null);e["default"]=A.exports}}]);
//# sourceMappingURL=register.d15be666.js.map