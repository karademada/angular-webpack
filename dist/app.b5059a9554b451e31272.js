!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),i=r(2),u=n(i),s=r(3),l=n(s),c=r(4),f=n(c);r(11);var p=angular.module("app",[l["default"],f["default"],o["default"],"ngMaterial"]).config(["$mdThemingProvider",function(e){var t=e.extendPalette("grey",{500:"fff",700:"f3eeea",A200:"e9dfca"});e.definePalette("bglGrey",t),e.theme("default").primaryPalette("bglGrey")}]).component("app",u["default"]);console.log("ok boy salam alaikoum"),t["default"]=p},function(e,t){/**
	 * State-based routing for AngularJS
	 * @version v0.3.1
	 * @link http://angular-ui.github.com/
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */
"undefined"!=typeof e&&"undefined"!=typeof t&&e.exports===t&&(e.exports="ui.router"),function(e,t,r){"use strict";function n(e,t){return z(new(z(function(){},{prototype:e})),t)}function a(e){return L(arguments,function(t){t!==e&&L(t,function(t,r){e.hasOwnProperty(r)||(e[r]=t)})}),e}function o(e,t){var r=[];for(var n in e.path){if(e.path[n]!==t.path[n])break;r.push(e.path[n])}return r}function i(e){if(Object.keys)return Object.keys(e);var t=[];return L(e,function(e,r){t.push(r)}),t}function u(e,t){if(Array.prototype.indexOf)return e.indexOf(t,Number(arguments[2])||0);var r=e.length>>>0,n=Number(arguments[2])||0;for(n=n<0?Math.ceil(n):Math.floor(n),n<0&&(n+=r);n<r;n++)if(n in e&&e[n]===t)return n;return-1}function s(e,t,r,n){var a,s=o(r,n),l={},c=[];for(var f in s)if(s[f]&&s[f].params&&(a=i(s[f].params),a.length))for(var p in a)u(c,a[p])>=0||(c.push(a[p]),l[a[p]]=e[a[p]]);return z({},l,t)}function l(e,t,r){if(!r){r=[];for(var n in e)r.push(n)}for(var a=0;a<r.length;a++){var o=r[a];if(e[o]!=t[o])return!1}return!0}function c(e,t){var r={};return L(e,function(e){r[e]=t[e]}),r}function f(e){var t={},r=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return L(r,function(r){r in e&&(t[r]=e[r])}),t}function p(e){var t={},r=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var n in e)u(r,n)==-1&&(t[n]=e[n]);return t}function d(e,t){var r=T(e),n=r?[]:{};return L(e,function(e,a){t(e,a)&&(n[r?n.length:a]=e)}),n}function h(e,t){var r=T(e)?[]:{};return L(e,function(e,n){r[n]=t(e,n)}),r}function v(e,t){var n=1,o=2,s={},l=[],c=s,f=z(e.when(s),{$$promises:s,$$values:s});this.study=function(s){function d(e,r){if(g[r]!==o){if(m.push(r),g[r]===n)throw m.splice(0,u(m,r)),new Error("Cyclic dependency: "+m.join(" -> "));if(g[r]=n,N(e))$.push(r,[function(){return t.get(e)}],l);else{var a=t.annotate(e);L(a,function(e){e!==r&&s.hasOwnProperty(e)&&d(s[e],e)}),$.push(r,e,a)}m.pop(),g[r]=o}}function h(e){return U(e)&&e.then&&e.$$promises}if(!U(s))throw new Error("'invocables' must be an object");var v=i(s||{}),$=[],m=[],g={};return L(s,d),s=m=g=null,function(n,o,i){function u(){--w||(b||a(y,o.$$values),m.$$values=y,m.$$promises=m.$$promises||!0,delete m.$$inheritedValues,d.resolve(y))}function s(e){m.$$failure=e,d.reject(e)}function l(r,a,o){function l(e){f.reject(e),s(e)}function c(){if(!R(m.$$failure))try{f.resolve(t.invoke(a,i,y)),f.promise.then(function(e){y[r]=e,u()},l)}catch(e){l(e)}}var f=e.defer(),p=0;L(o,function(e){g.hasOwnProperty(e)&&!n.hasOwnProperty(e)&&(p++,g[e].then(function(t){y[e]=t,--p||c()},l))}),p||c(),g[r]=f.promise}if(h(n)&&i===r&&(i=o,o=n,n=null),n){if(!U(n))throw new Error("'locals' must be an object")}else n=c;if(o){if(!h(o))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else o=f;var d=e.defer(),m=d.promise,g=m.$$promises={},y=z({},n),w=1+$.length/3,b=!1;if(R(o.$$failure))return s(o.$$failure),m;o.$$inheritedValues&&a(y,p(o.$$inheritedValues,v)),z(g,o.$$promises),o.$$values?(b=a(y,p(o.$$values,v)),m.$$inheritedValues=p(o.$$values,v),u()):(o.$$inheritedValues&&(m.$$inheritedValues=p(o.$$inheritedValues,v)),o.then(u,s));for(var x=0,P=$.length;x<P;x+=3)n.hasOwnProperty($[x])?u():l($[x],$[x+1],$[x+2]);return m}},this.resolve=function(e,t,r,n){return this.study(e)(t,r,n)}}function $(e,t,r){this.fromConfig=function(e,t,r){return R(e.template)?this.fromString(e.template,t):R(e.templateUrl)?this.fromUrl(e.templateUrl,t):R(e.templateProvider)?this.fromProvider(e.templateProvider,t,r):null},this.fromString=function(e,t){return F(e)?e(t):e},this.fromUrl=function(r,n){return F(r)&&(r=r(n)),null==r?null:e.get(r,{cache:t,headers:{Accept:"text/html"}}).then(function(e){return e.data})},this.fromProvider=function(e,t,n){return r.invoke(e,null,n||{params:t})}}function m(e,t,a){function o(t,r,n,a){if($.push(t),h[t])return h[t];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(t))throw new Error("Invalid parameter name '"+t+"' in pattern '"+e+"'");if(v[t])throw new Error("Duplicate parameter name '"+t+"' in pattern '"+e+"'");return v[t]=new J.Param(t,r,n,a),v[t]}function i(e,t,r,n){var a=["",""],o=e.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!t)return o;switch(r){case!1:a=["(",")"+(n?"?":"")];break;case!0:o=o.replace(/\/$/,""),a=["(?:/(",")|/)?"];break;default:a=["("+r+"|",")?"]}return o+a[0]+t+a[1]}function u(a,o){var i,u,s,l,c;return i=a[2]||a[3],c=t.params[i],s=e.substring(p,a.index),u=o?a[4]:a[4]||("*"==a[1]?".*":null),u&&(l=J.type(u)||n(J.type("string"),{pattern:new RegExp(u,t.caseInsensitive?"i":r)})),{id:i,regexp:u,segment:s,type:l,cfg:c}}t=z({params:{}},U(t)?t:{});var s,l=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,c=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f="^",p=0,d=this.segments=[],h=a?a.params:{},v=this.params=a?a.params.$$new():new J.ParamSet,$=[];this.source=e;for(var m,g,y;(s=l.exec(e))&&(m=u(s,!1),!(m.segment.indexOf("?")>=0));)g=o(m.id,m.type,m.cfg,"path"),f+=i(m.segment,g.type.pattern.source,g.squash,g.isOptional),d.push(m.segment),p=l.lastIndex;y=e.substring(p);var w=y.indexOf("?");if(w>=0){var b=this.sourceSearch=y.substring(w);if(y=y.substring(0,w),this.sourcePath=e.substring(0,p+w),b.length>0)for(p=0;s=c.exec(b);)m=u(s,!0),g=o(m.id,m.type,m.cfg,"search"),p=l.lastIndex}else this.sourcePath=e,this.sourceSearch="";f+=i(y)+(t.strict===!1?"/?":"")+"$",d.push(y),this.regexp=new RegExp(f,t.caseInsensitive?"i":r),this.prefix=d[0],this.$$paramNames=$}function g(e){z(this,e)}function y(){function e(e){return null!=e?e.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):e}function a(e){return null!=e?e.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):e}function o(){return{strict:v,caseInsensitive:p}}function s(e){return F(e)||T(e)&&F(e[e.length-1])}function l(){for(;x.length;){var e=x.shift();if(e.pattern)throw new Error("You cannot override a type's .pattern at runtime.");t.extend(w[e.name],f.invoke(e.def))}}function c(e){z(this,e||{})}J=this;var f,p=!1,v=!0,$=!1,w={},b=!0,x=[],P={string:{encode:e,decode:a,is:function(e){return null==e||!R(e)||"string"==typeof e},pattern:/[^\/]*/},"int":{encode:e,decode:function(e){return parseInt(e,10)},is:function(e){return R(e)&&this.decode(e.toString())===e},pattern:/\d+/},bool:{encode:function(e){return e?1:0},decode:function(e){return 0!==parseInt(e,10)},is:function(e){return e===!0||e===!1},pattern:/0|1/},date:{encode:function(e){return this.is(e)?[e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2)].join("-"):r},decode:function(e){if(this.is(e))return e;var t=this.capture.exec(e);return t?new Date(t[1],t[2]-1,t[3]):r},is:function(e){return e instanceof Date&&!isNaN(e.valueOf())},equals:function(e,t){return this.is(e)&&this.is(t)&&e.toISOString()===t.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:t.toJson,decode:t.fromJson,is:t.isObject,equals:t.equals,pattern:/[^\/]*/},any:{encode:t.identity,decode:t.identity,equals:t.equals,pattern:/.*/}};y.$$getDefaultValue=function(e){if(!s(e.value))return e.value;if(!f)throw new Error("Injectable functions cannot be called at configuration time");return f.invoke(e.value)},this.caseInsensitive=function(e){return R(e)&&(p=e),p},this.strictMode=function(e){return R(e)&&(v=e),v},this.defaultSquashPolicy=function(e){if(!R(e))return $;if(e!==!0&&e!==!1&&!N(e))throw new Error("Invalid squash policy: "+e+". Valid policies: false, true, arbitrary-string");return $=e,e},this.compile=function(e,t){return new m(e,z(o(),t))},this.isMatcher=function(e){if(!U(e))return!1;var t=!0;return L(m.prototype,function(r,n){F(r)&&(t=t&&R(e[n])&&F(e[n]))}),t},this.type=function(e,t,r){if(!R(t))return w[e];if(w.hasOwnProperty(e))throw new Error("A type named '"+e+"' has already been defined.");return w[e]=new g(z({name:e},t)),r&&(x.push({name:e,def:r}),b||l()),this},L(P,function(e,t){w[t]=new g(z({name:t},e))}),w=n(w,{}),this.$get=["$injector",function(e){return f=e,b=!1,l(),L(P,function(e,t){w[t]||(w[t]=new g(e))}),this}],this.Param=function(e,n,a,o){function l(e){var t=U(e)?i(e):[],r=u(t,"value")===-1&&u(t,"type")===-1&&u(t,"squash")===-1&&u(t,"array")===-1;return r&&(e={value:e}),e.$$fn=s(e.value)?e.value:function(){return e.value},e}function c(r,n,a){if(r.type&&n)throw new Error("Param '"+e+"' has two type configurations.");return n?n:r.type?t.isString(r.type)?w[r.type]:r.type instanceof g?r.type:new g(r.type):"config"===a?w.any:w.string}function p(){var t={array:"search"===o&&"auto"},r=e.match(/\[\]$/)?{array:!0}:{};return z(t,r,a).array}function v(e,t){var r=e.squash;if(!t||r===!1)return!1;if(!R(r)||null==r)return $;if(r===!0||N(r))return r;throw new Error("Invalid squash policy: '"+r+"'. Valid policies: false, true, or arbitrary string")}function m(e,t,n,a){var o,i,s=[{from:"",to:n||t?r:""},{from:null,to:n||t?r:""}];return o=T(e.replace)?e.replace:[],N(a)&&o.push({from:a,to:r}),i=h(o,function(e){return e.from}),d(s,function(e){return u(i,e.from)===-1}).concat(o)}function y(){if(!f)throw new Error("Injectable functions cannot be called at configuration time");var e=f.invoke(a.$$fn);if(null!==e&&e!==r&&!P.type.is(e))throw new Error("Default value ("+e+") for parameter '"+P.id+"' is not an instance of Type ("+P.type.name+")");return e}function b(e){function t(e){return function(t){return t.from===e}}function r(e){var r=h(d(P.replace,t(e)),function(e){return e.to});return r.length?r[0]:e}return e=r(e),R(e)?P.type.$normalize(e):y()}function x(){return"{Param:"+e+" "+n+" squash: '"+j+"' optional: "+E+"}"}var P=this;a=l(a),n=c(a,n,o);var S=p();n=S?n.$asArray(S,"search"===o):n,"string"!==n.name||S||"path"!==o||a.value!==r||(a.value="");var E=a.value!==r,j=v(a,E),A=m(a,S,E,j);z(this,{id:e,type:n,location:o,array:S,squash:j,replace:A,isOptional:E,value:b,dynamic:r,config:a,toString:x})},c.prototype={$$new:function(){return n(this,z(new c,{$$parent:this}))},$$keys:function(){for(var e=[],t=[],r=this,n=i(c.prototype);r;)t.push(r),r=r.$$parent;return t.reverse(),L(t,function(t){L(i(t),function(t){u(e,t)===-1&&u(n,t)===-1&&e.push(t)})}),e},$$values:function(e){var t={},r=this;return L(r.$$keys(),function(n){t[n]=r[n].value(e&&e[n])}),t},$$equals:function(e,t){var r=!0,n=this;return L(n.$$keys(),function(a){var o=e&&e[a],i=t&&t[a];n[a].type.equals(o,i)||(r=!1)}),r},$$validates:function(e){var n,a,o,i,u,s=this.$$keys();for(n=0;n<s.length&&(a=this[s[n]],o=e[s[n]],o!==r&&null!==o||!a.isOptional);n++){if(i=a.type.$normalize(o),!a.type.is(i))return!1;if(u=a.type.encode(i),t.isString(u)&&!a.type.pattern.exec(u))return!1}return!0},$$parent:r},this.ParamSet=c}function w(e,n){function a(e){var t=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);return null!=t?t[1].replace(/\\(.)/g,"$1"):""}function o(e,t){return e.replace(/\$(\$|\d{1,2})/,function(e,r){return t["$"===r?0:Number(r)]})}function i(e,t,r){if(!r)return!1;var n=e.invoke(t,t,{$match:r});return!R(n)||n}function u(n,a,o,i,u){function p(e,t,r){return"/"===$?e:t?$.slice(0,-1)+e:r?$.slice(1)+e:e}function d(e){function t(e){var t=e(o,n);return!!t&&(N(t)&&n.replace().url(t),!0)}if(!e||!e.defaultPrevented){v&&n.url()===v;v=r;var a,i=l.length;for(a=0;a<i;a++)if(t(l[a]))return;c&&t(c)}}function h(){return s=s||a.$on("$locationChangeSuccess",d)}var v,$=i.baseHref(),m=n.url();return f||h(),{sync:function(){d()},listen:function(){return h()},update:function(e){return e?void(m=n.url()):void(n.url()!==m&&(n.url(m),n.replace()))},push:function(e,t,a){var o=e.format(t||{});null!==o&&t&&t["#"]&&(o+="#"+t["#"]),n.url(o),v=a&&a.$$avoidResync?n.url():r,a&&a.replace&&n.replace()},href:function(r,a,o){if(!r.validates(a))return null;var i=e.html5Mode();t.isObject(i)&&(i=i.enabled),i=i&&u.history;var s=r.format(a);if(o=o||{},i||null===s||(s="#"+e.hashPrefix()+s),null!==s&&a&&a["#"]&&(s+="#"+a["#"]),s=p(s,i,o.absolute),!o.absolute||!s)return s;var l=!i&&s?"/":"",c=n.port();return c=80===c||443===c?"":":"+c,[n.protocol(),"://",n.host(),c,l,s].join("")}}}var s,l=[],c=null,f=!1;this.rule=function(e){if(!F(e))throw new Error("'rule' must be a function");return l.push(e),this},this.otherwise=function(e){if(N(e)){var t=e;e=function(){return t}}else if(!F(e))throw new Error("'rule' must be a function");return c=e,this},this.when=function(e,t){var r,u=N(t);if(N(e)&&(e=n.compile(e)),!u&&!F(t)&&!T(t))throw new Error("invalid 'handler' in when()");var s={matcher:function(e,t){return u&&(r=n.compile(t),t=["$match",function(e){return r.format(e)}]),z(function(r,n){return i(r,t,e.exec(n.path(),n.search()))},{prefix:N(e.prefix)?e.prefix:""})},regex:function(e,t){if(e.global||e.sticky)throw new Error("when() RegExp must not be global or sticky");return u&&(r=t,t=["$match",function(e){return o(r,e)}]),z(function(r,n){return i(r,t,e.exec(n.path()))},{prefix:a(e)})}},l={matcher:n.isMatcher(e),regex:e instanceof RegExp};for(var c in l)if(l[c])return this.rule(s[c](e,t));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(e){e===r&&(e=!0),f=e},this.$get=u,u.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function b(e,a){function o(e){return 0===e.indexOf(".")||0===e.indexOf("^")}function p(e,t){if(!e)return r;var n=N(e),a=n?e:e.name,i=o(a);if(i){if(!t)throw new Error("No reference point given for path '"+a+"'");t=p(t);for(var u=a.split("."),s=0,l=u.length,c=t;s<l;s++)if(""!==u[s]||0!==s){if("^"!==u[s])break;if(!c.parent)throw new Error("Path '"+a+"' not valid for state '"+t.name+"'");c=c.parent}else c=t;u=u.slice(s).join("."),a=c.name+(c.name&&u?".":"")+u}var f=E[a];return!f||!n&&(n||f!==e&&f.self!==e)?r:f}function d(e,t){j[e]||(j[e]=[]),j[e].push(t)}function v(e){for(var t=j[e]||[];t.length;)$(t.shift())}function $(t){t=n(t,{self:t,resolve:t.resolve||{},toString:function(){return this.name}});var r=t.name;if(!N(r)||r.indexOf("@")>=0)throw new Error("State must have a valid name");if(E.hasOwnProperty(r))throw new Error("State '"+r+"' is already defined");var a=r.indexOf(".")!==-1?r.substring(0,r.lastIndexOf(".")):N(t.parent)?t.parent:U(t.parent)&&N(t.parent.name)?t.parent.name:"";if(a&&!E[a])return d(a,t.self);for(var o in k)F(k[o])&&(t[o]=k[o](t,k.$delegates[o]));return E[r]=t,!t[A]&&t.url&&e.when(t.url,["$match","$stateParams",function(e,r){S.$current.navigable==t&&l(e,r)||S.transitionTo(t,e,{inherit:!0,location:!1})}]),v(r),t}function m(e){return e.indexOf("*")>-1}function g(e){for(var t=e.split("."),r=S.$current.name.split("."),n=0,a=t.length;n<a;n++)"*"===t[n]&&(r[n]="*");return"**"===t[0]&&(r=r.slice(u(r,t[1])),r.unshift("**")),"**"===t[t.length-1]&&(r.splice(u(r,t[t.length-2])+1,Number.MAX_VALUE),r.push("**")),t.length==r.length&&r.join("")===t.join("")}function y(e,t){return N(e)&&!R(t)?k[e]:F(t)&&N(e)?(k[e]&&!k.$delegates[e]&&(k.$delegates[e]=k[e]),k[e]=t,this):this}function w(e,t){return U(e)?t=e:t.name=e,$(t),this}function b(e,a,o,u,f,d,v,$,y){function w(t,r,n,o){var i=e.$broadcast("$stateNotFound",t,r,n);if(i.defaultPrevented)return v.update(),O;if(!i.retry)return null;if(o.$retry)return v.update(),C;var u=S.transition=a.when(i.retry);return u.then(function(){return u!==S.transition?j:(t.options.$retry=!0,S.transitionTo(t.to,t.toParams,t.options))},function(){return O}),v.update(),u}function b(e,r,n,i,s,l){function p(){var r=[];return L(e.views,function(n,a){var i=n.resolve&&n.resolve!==e.resolve?n.resolve:{};i.$template=[function(){return o.load(a,{view:n,locals:s.globals,params:d,notify:l.notify})||""}],r.push(f.resolve(i,s.globals,s.resolve,e).then(function(r){if(F(n.controllerProvider)||T(n.controllerProvider)){var o=t.extend({},i,s.globals);r.$$controller=u.invoke(n.controllerProvider,null,o)}else r.$$controller=n.controller;r.$$state=e,r.$$controllerAs=n.controllerAs,r.$$resolveAs=n.resolveAs,s[a]=r}))}),a.all(r).then(function(){return s.globals})}var d=n?r:c(e.params.$$keys(),r),h={$stateParams:d};s.resolve=f.resolve(e.resolve,h,s.resolve,e);var v=[s.resolve.then(function(e){s.globals=e})];return i&&v.push(i),a.all(v).then(p).then(function(e){return s})}var j=a.reject(new Error("transition superseded")),k=a.reject(new Error("transition prevented")),O=a.reject(new Error("transition aborted")),C=a.reject(new Error("transition failed"));return P.locals={resolve:null,globals:{$stateParams:{}}},S={params:{},current:P.self,$current:P,transition:null},S.reload=function(e){return S.transitionTo(S.current,d,{reload:e||!0,inherit:!1,notify:!0})},S.go=function(e,t,r){return S.transitionTo(e,t,z({inherit:!0,relative:S.$current},r))},S.transitionTo=function(t,r,o){r=r||{},o=z({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},o||{});var i,l=S.$current,f=S.params,h=l.path,$=p(t,o.relative),m=r["#"];if(!R($)){var g={to:t,toParams:r,options:o},y=w(g,l.self,f,o);if(y)return y;if(t=g.to,r=g.toParams,o=g.options,$=p(t,o.relative),!R($)){if(!o.relative)throw new Error("No such state '"+t+"'");throw new Error("Could not resolve '"+t+"' from state '"+o.relative+"'")}}if($[A])throw new Error("Cannot transition to abstract state '"+t+"'");if(o.inherit&&(r=s(d,r||{},S.$current,$)),!$.params.$$validates(r))return C;r=$.params.$$values(r),t=$;var E=t.path,O=0,q=E[O],M=P.locals,I=[];if(o.reload){if(N(o.reload)||U(o.reload)){if(U(o.reload)&&!o.reload.name)throw new Error("Invalid reload state object");var _=o.reload===!0?h[0]:p(o.reload);if(o.reload&&!_)throw new Error("No such reload state '"+(N(o.reload)?o.reload:o.reload.name)+"'");for(;q&&q===h[O]&&q!==_;)M=I[O]=q.locals,O++,q=E[O]}}else for(;q&&q===h[O]&&q.ownParams.$$equals(r,f);)M=I[O]=q.locals,O++,q=E[O];if(x(t,r,l,f,M,o))return m&&(r["#"]=m),S.params=r,G(S.params,d),G(c(t.params.$$keys(),d),t.locals.globals.$stateParams),o.location&&t.navigable&&t.navigable.url&&(v.push(t.navigable.url,r,{$$avoidResync:!0,replace:"replace"===o.location}),v.update(!0)),S.transition=null,a.when(S.current);if(r=c(t.params.$$keys(),r||{}),m&&(r["#"]=m),o.notify&&e.$broadcast("$stateChangeStart",t.self,r,l.self,f,o).defaultPrevented)return e.$broadcast("$stateChangeCancel",t.self,r,l.self,f),null==S.transition&&v.update(),k;for(var V=a.when(M),D=O;D<E.length;D++,q=E[D])M=I[D]=n(M),V=b(q,r,q===t,V,M,o);var F=S.transition=V.then(function(){var n,a,i;if(S.transition!==F)return j;for(n=h.length-1;n>=O;n--)i=h[n],i.self.onExit&&u.invoke(i.self.onExit,i.self,i.locals.globals),i.locals=null;for(n=O;n<E.length;n++)a=E[n],a.locals=I[n],a.self.onEnter&&u.invoke(a.self.onEnter,a.self,a.locals.globals);return S.transition!==F?j:(S.$current=t,S.current=t.self,S.params=r,G(S.params,d),S.transition=null,o.location&&t.navigable&&v.push(t.navigable.url,t.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===o.location}),o.notify&&e.$broadcast("$stateChangeSuccess",t.self,r,l.self,f),v.update(!0),S.current)}).then(null,function(n){return S.transition!==F?j:(S.transition=null,i=e.$broadcast("$stateChangeError",t.self,r,l.self,f,n),i.defaultPrevented||v.update(),a.reject(n))});return F},S.is=function(e,t,n){n=z({relative:S.$current},n||{});var a=p(e,n.relative);return R(a)?S.$current===a&&(!t||l(a.params.$$values(t),d)):r},S.includes=function(e,t,n){if(n=z({relative:S.$current},n||{}),N(e)&&m(e)){if(!g(e))return!1;e=S.$current.name}var a=p(e,n.relative);return R(a)?!!R(S.$current.includes[a.name])&&(!t||l(a.params.$$values(t),d,i(t))):r},S.href=function(e,t,n){n=z({lossy:!0,inherit:!0,absolute:!1,relative:S.$current},n||{});var a=p(e,n.relative);if(!R(a))return null;n.inherit&&(t=s(d,t||{},S.$current,a));var o=a&&n.lossy?a.navigable:a;return o&&o.url!==r&&null!==o.url?v.href(o.url,c(a.params.$$keys().concat("#"),t||{}),{absolute:n.absolute}):null},S.get=function(e,t){if(0===arguments.length)return h(i(E),function(e){return E[e].self});var r=p(e,t||S.$current);return r&&r.self?r.self:null},S}function x(e,t,r,n,a,o){function i(e,t,r){function n(t){return"search"!=e.params[t].location}var a=e.params.$$keys().filter(n),o=f.apply({},[e.params].concat(a)),i=new J.ParamSet(o);return i.$$equals(t,r)}if(!o.reload&&e===r&&(a===r.locals||e.self.reloadOnSearch===!1&&i(r,n,t)))return!0}var P,S,E={},j={},A="abstract",k={parent:function(e){if(R(e.parent)&&e.parent)return p(e.parent);var t=/^(.+)\.[^.]+$/.exec(e.name);return t?p(t[1]):P},data:function(e){return e.parent&&e.parent.data&&(e.data=e.self.data=n(e.parent.data,e.data)),e.data},url:function(e){var t=e.url,r={params:e.params||{}};if(N(t))return"^"==t.charAt(0)?a.compile(t.substring(1),r):(e.parent.navigable||P).url.concat(t,r);if(!t||a.isMatcher(t))return t;throw new Error("Invalid url '"+t+"' in state '"+e+"'")},navigable:function(e){return e.url?e:e.parent?e.parent.navigable:null},ownParams:function(e){var t=e.url&&e.url.params||new J.ParamSet;return L(e.params||{},function(e,r){t[r]||(t[r]=new J.Param(r,null,e,"config"))}),t},params:function(e){var t=f(e.ownParams,e.ownParams.$$keys());return e.parent&&e.parent.params?z(e.parent.params.$$new(),t):new J.ParamSet},views:function(e){var t={};return L(R(e.views)?e.views:{"":e},function(r,n){n.indexOf("@")<0&&(n+="@"+e.parent.name),r.resolveAs=r.resolveAs||e.resolveAs||"$resolve",t[n]=r}),t},path:function(e){return e.parent?e.parent.path.concat(e):[]},includes:function(e){var t=e.parent?z({},e.parent.includes):{};return t[e.name]=!0,t},$delegates:{}};P=$({name:"",url:"^",views:null,"abstract":!0}),P.navigable=null,this.decorator=y,this.state=w,this.$get=b,b.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function x(){function e(e,t){return{load:function(e,r){var n,a={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return r=z(a,r),r.view&&(n=t.fromConfig(r.view,r.params,r.locals)),n}}}this.$get=e,e.$inject=["$rootScope","$templateFactory"]}function P(){var e=!1;this.useAnchorScroll=function(){e=!0},this.$get=["$anchorScroll","$timeout",function(t,r){return e?t:function(e){return r(function(){e[0].scrollIntoView()},0,!1)}}]}function S(e,r,n,a,o){function i(){return r.has?function(e){return r.has(e)?r.get(e):null}:function(e){try{return r.get(e)}catch(t){return null}}}function u(e,r){var n=function(){return{enter:function(e,t,r){t.after(e),r()},leave:function(e,t){e.remove(),t()}}};if(c)return{enter:function(e,r,n){t.version.minor>2?c.enter(e,null,r).then(n):c.enter(e,null,r,n)},leave:function(e,r){t.version.minor>2?c.leave(e).then(r):c.leave(e,r)}};if(l){var a=l&&l(r,e);return{enter:function(e,t,r){a.enter(e,null,t),r()},leave:function(e,t){a.leave(e),t()}}}return n()}var s=i(),l=s("$animator"),c=s("$animate"),f={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(r,i,s){return function(r,i,l){function c(){if(p&&(p.remove(),p=null),h&&(h.$destroy(),h=null),d){var e=d.data("$uiViewAnim");g.leave(d,function(){e.$$animLeave.resolve(),p=null}),p=d,d=null}}function f(u){var f,p=j(r,l,i,a),y=p&&e.$current&&e.$current.locals[p];if(u||y!==v){f=r.$new(),v=e.$current.locals[p],f.$emit("$viewContentLoading",p);var w=s(f,function(e){var a=o.defer(),u=o.defer(),s={$animEnter:a.promise,$animLeave:u.promise,$$animLeave:u};e.data("$uiViewAnim",s),g.enter(e,i,function(){a.resolve(),h&&h.$emit("$viewContentAnimationEnded"),(t.isDefined(m)&&!m||r.$eval(m))&&n(e)}),c()});d=w,h=f,h.$emit("$viewContentLoaded",p),h.$eval($)}}var p,d,h,v,$=l.onload||"",m=l.autoscroll,g=u(l,r);i.inheritedData("$uiView");r.$on("$stateChangeSuccess",function(){f(!1)}),f(!0)}}};return f}function E(e,r,n,a){return{restrict:"ECA",priority:-400,compile:function(o){var i=o.html();return function(o,u,s){var l=n.$current,c=j(o,s,u,a),f=l&&l.locals[c];if(f){u.data("$uiView",{name:c,state:f.$$state}),u.html(f.$template?f.$template:i);var p=t.extend({},f);o[f.$$resolveAs]=p;var d=e(u.contents());if(f.$$controller){f.$scope=o,f.$element=u;var h=r(f.$$controller,f);f.$$controllerAs&&(o[f.$$controllerAs]=h,o[f.$$controllerAs][f.$$resolveAs]=p),F(h.$onInit)&&h.$onInit(),u.data("$ngControllerController",h),u.children().data("$ngControllerController",h)}d(o)}}}}}function j(e,t,r,n){var a=n(t.uiView||t.name||"")(e),o=r.inheritedData("$uiView");return a.indexOf("@")>=0?a:a+"@"+(o?o.state.name:"")}function A(e,t){var r,n=e.match(/^\s*({[^}]*})\s*$/);if(n&&(e=t+"("+n[1]+")"),r=e.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!r||4!==r.length)throw new Error("Invalid state ref '"+e+"'");return{state:r[1],paramExpr:r[3]||null}}function k(e){var t=e.parent().inheritedData("$uiView");if(t&&t.state&&t.state.name)return t.state}function O(e){var t="[object SVGAnimatedString]"===Object.prototype.toString.call(e.prop("href")),r="FORM"===e[0].nodeName;return{attr:r?"action":t?"xlink:href":"href",isAnchor:"A"===e.prop("tagName").toUpperCase(),clickable:!r}}function C(e,t,r,n,a){return function(o){var i=o.which||o.button,u=a();if(!(i>1||o.ctrlKey||o.metaKey||o.shiftKey||e.attr("target"))){var s=r(function(){t.go(u.state,u.params,u.options)});o.preventDefault();var l=n.isAnchor&&!u.href?1:0;o.preventDefault=function(){l--<=0&&r.cancel(s)}}}}function q(e,t){return{relative:k(e)||t.$current,inherit:!0}}function M(e,r){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,a,o,i){var u,s=A(o.uiSref,e.current.name),l={state:s.state,href:null,params:null},c=O(a),f=i[1]||i[0],p=null;l.options=z(q(a,e),o.uiSrefOpts?n.$eval(o.uiSrefOpts):{});var d=function(r){r&&(l.params=t.copy(r)),l.href=e.href(s.state,l.params,l.options),p&&p(),f&&(p=f.$$addStateInfo(s.state,l.params)),null!==l.href&&o.$set(c.attr,l.href)};s.paramExpr&&(n.$watch(s.paramExpr,function(e){e!==l.params&&d(e)},!0),l.params=t.copy(n.$eval(s.paramExpr))),d(),c.clickable&&(u=C(a,e,r,c,function(){return l}),a.bind("click",u),n.$on("$destroy",function(){a.unbind("click",u)}))}}}function I(e,t){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(r,n,a,o){function i(t){p.state=t[0],p.params=t[1],p.options=t[2],p.href=e.href(p.state,p.params,p.options),d&&d(),l&&(d=l.$$addStateInfo(p.state,p.params)),p.href&&a.$set(s.attr,p.href)}var u,s=O(n),l=o[1]||o[0],c=[a.uiState,a.uiStateParams||null,a.uiStateOpts||null],f="["+c.map(function(e){return e||"null"}).join(", ")+"]",p={state:null,params:null,options:null,href:null},d=null;r.$watch(f,i,!0),i(r.$eval(f)),s.clickable&&(u=C(n,e,t,s,function(){return p}),n.bind("click",u),r.$on("$destroy",function(){n.unbind("click",u)}))}}}function _(e,t,r){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(t,n,a,o){function i(t,r,a){var o=e.get(t,k(n)),i=u(t,r),s={state:o||{name:t},params:r,hash:i};return v.push(s),$[i]=a,function(){var e=v.indexOf(s);e!==-1&&v.splice(e,1)}}function u(e,r){if(!N(e))throw new Error("state should be a string");return U(r)?e+H(r):(r=t.$eval(r),U(r)?e+H(r):e)}function s(){for(var e=0;e<v.length;e++)f(v[e].state,v[e].params)?l(n,$[v[e].hash]):c(n,$[v[e].hash]),p(v[e].state,v[e].params)?l(n,d):c(n,d)}function l(e,t){o(function(){e.addClass(t)})}function c(e,t){e.removeClass(t)}function f(t,r){return e.includes(t.name,r)}function p(t,r){return e.is(t.name,r)}var d,h,v=[],$={};d=r(a.uiSrefActiveEq||"",!1)(t);try{h=t.$eval(a.uiSrefActive)}catch(m){}h=h||r(a.uiSrefActive||"",!1)(t),U(h)&&L(h,function(r,n){if(N(r)){var a=A(r,e.current.name);i(a.state,t.$eval(a.paramExpr),n)}}),this.$$addStateInfo=function(e,t){if(!(U(h)&&v.length>0)){var r=i(e,t,h);return s(),r}},t.$on("$stateChangeSuccess",s),s()}]}}function V(e){var t=function(t,r){return e.is(t,r)};return t.$stateful=!0,t}function D(e){var t=function(t,r,n){return e.includes(t,r,n)};return t.$stateful=!0,t}var R=t.isDefined,F=t.isFunction,N=t.isString,U=t.isObject,T=t.isArray,L=t.forEach,z=t.extend,G=t.copy,H=t.toJson;t.module("ui.router.util",["ng"]),t.module("ui.router.router",["ui.router.util"]),t.module("ui.router.state",["ui.router.router","ui.router.util"]),t.module("ui.router",["ui.router.state"]),t.module("ui.router.compat",["ui.router"]),v.$inject=["$q","$injector"],t.module("ui.router.util").service("$resolve",v),$.$inject=["$http","$templateCache","$injector"],t.module("ui.router.util").service("$templateFactory",$);var J;m.prototype.concat=function(e,t){var r={caseInsensitive:J.caseInsensitive(),strict:J.strictMode(),squash:J.defaultSquashPolicy()};return new m(this.sourcePath+e+this.sourceSearch,z(r,t),this)},m.prototype.toString=function(){return this.source},m.prototype.exec=function(e,t){function r(e){function t(e){return e.split("").reverse().join("")}function r(e){return e.replace(/\\-/g,"-")}var n=t(e).split(/-(?!\\)/),a=h(n,t);return h(a,r).reverse()}var n=this.regexp.exec(e);if(!n)return null;t=t||{};var a,o,i,u=this.parameters(),s=u.length,l=this.segments.length-1,c={};if(l!==n.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var f,p;for(a=0;a<l;a++){for(i=u[a],f=this.params[i],p=n[a+1],o=0;o<f.replace.length;o++)f.replace[o].from===p&&(p=f.replace[o].to);p&&f.array===!0&&(p=r(p)),R(p)&&(p=f.type.decode(p)),c[i]=f.value(p)}for(;a<s;a++){for(i=u[a],c[i]=this.params[i].value(t[i]),f=this.params[i],p=t[i],o=0;o<f.replace.length;o++)f.replace[o].from===p&&(p=f.replace[o].to);R(p)&&(p=f.type.decode(p)),c[i]=f.value(p)}return c},m.prototype.parameters=function(e){return R(e)?this.params[e]||null:this.$$paramNames},m.prototype.validates=function(e){return this.params.$$validates(e)},m.prototype.format=function(e){function t(e){return encodeURIComponent(e).replace(/-/g,function(e){return"%5C%"+e.charCodeAt(0).toString(16).toUpperCase()})}e=e||{};var r=this.segments,n=this.parameters(),a=this.params;if(!this.validates(e))return null;var o,i=!1,u=r.length-1,s=n.length,l=r[0];for(o=0;o<s;o++){var c=o<u,f=n[o],p=a[f],d=p.value(e[f]),v=p.isOptional&&p.type.equals(p.value(),d),$=!!v&&p.squash,m=p.type.encode(d);if(c){var g=r[o+1],y=o+1===u;if($===!1)null!=m&&(l+=T(m)?h(m,t).join("-"):encodeURIComponent(m)),l+=g;else if($===!0){var w=l.match(/\/$/)?/\/?(.*)/:/(.*)/;l+=g.match(w)[1]}else N($)&&(l+=$+g);y&&p.squash===!0&&"/"===l.slice(-1)&&(l=l.slice(0,-1))}else{if(null==m||v&&$!==!1)continue;if(T(m)||(m=[m]),0===m.length)continue;m=h(m,encodeURIComponent).join("&"+f+"="),l+=(i?"&":"?")+(f+"="+m),i=!0}}return l},g.prototype.is=function(e,t){return!0},g.prototype.encode=function(e,t){return e},g.prototype.decode=function(e,t){return e},g.prototype.equals=function(e,t){return e==t},g.prototype.$subPattern=function(){var e=this.pattern.toString();return e.substr(1,e.length-2)},g.prototype.pattern=/.*/,g.prototype.toString=function(){return"{Type:"+this.name+"}"},g.prototype.$normalize=function(e){return this.is(e)?e:this.decode(e)},g.prototype.$asArray=function(e,t){function n(e,t){function n(e,t){return function(){return e[t].apply(e,arguments)}}function a(e){return T(e)?e:R(e)?[e]:[]}function o(e){switch(e.length){case 0:return r;case 1:return"auto"===t?e[0]:e;default:return e}}function i(e){return!e}function u(e,t){return function(r){if(T(r)&&0===r.length)return r;r=a(r);var n=h(r,e);return t===!0?0===d(n,i).length:o(n)}}function s(e){return function(t,r){var n=a(t),o=a(r);if(n.length!==o.length)return!1;for(var i=0;i<n.length;i++)if(!e(n[i],o[i]))return!1;return!0}}this.encode=u(n(e,"encode")),this.decode=u(n(e,"decode")),this.is=u(n(e,"is"),!0),this.equals=s(n(e,"equals")),this.pattern=e.pattern,this.$normalize=u(n(e,"$normalize")),this.name=e.name,this.$arrayMode=t}if(!e)return this;if("auto"===e&&!t)throw new Error("'auto' array mode is for query parameters only");return new n(this,e)},t.module("ui.router.util").provider("$urlMatcherFactory",y),t.module("ui.router.util").run(["$urlMatcherFactory",function(e){}]),w.$inject=["$locationProvider","$urlMatcherFactoryProvider"],t.module("ui.router.router").provider("$urlRouter",w),b.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],t.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",b).run(["$injector",function(e){e.get("$state.runtime").autoinject&&e.get("$state");
}]),x.$inject=[],t.module("ui.router.state").provider("$view",x),t.module("ui.router.state").provider("$uiViewScroll",P),S.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],E.$inject=["$compile","$controller","$state","$interpolate"],t.module("ui.router.state").directive("uiView",S),t.module("ui.router.state").directive("uiView",E),M.$inject=["$state","$timeout"],I.$inject=["$state","$timeout"],_.$inject=["$state","$stateParams","$interpolate"],t.module("ui.router.state").directive("uiSref",M).directive("uiSrefActive",_).directive("uiSrefActiveEq",_).directive("uiState",I),V.$inject=["$state"],D.$inject=["$state"],t.module("ui.router.state").filter("isState",V).filter("includedByState",D)}(window,window.angular)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={template:"\n    <header></header>\n    <subheader></subheader>\n    <div>\n        <div ui-view></div>\n    </div>\n    <footer>\n        Copyright MyApp 2016.\n    </footer>\n  "};t["default"]=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=angular.module("app.components",[]).name;t["default"]=r},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(5),o=n(a),i=r(8),u=n(i),s=angular.module("app.common",[o["default"],u["default"]]).name;t["default"]=s},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(6),o=n(a),i=r(7),u=n(i),s=angular.module("header",[]).component("header",o["default"]).controller("headerCtrl",u["default"]).name;t["default"]=s},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(7),o=n(a),i={controller:o["default"],template:'\n        <md-content layout="row" ng-cloak>\n            <md-toolbar>\n                <div class="md-toolbar-tools">\n                    <img class="logo" src="../assets/img/logo-bgl.png" layout-fill-gt="20"/>\n                    <span flex></span>\n                    <span class="bank-label">My Bank </span>\n                    <span class="bank-separator"> : </span>\n                    <span>(+352) 42 42-65 01</span>\n                    <span class="separator"></span>\n                    <span class="text-link">Logout</span>\n                </div>\n            </md-toolbar>\n        </md-content>\n    '};t["default"]=i},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function a(){r(this,a),console.log("HeaderController")};t["default"]=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(9),o=n(a),i=r(10),u=n(i),s=angular.module("subheader",[]).component("subheader",o["default"]).controller("subHeaderCtrl",u["default"]).name;t["default"]=s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={template:'\n        <md-toolbar class="subheader">\n            <div class="md-toolbar-tools" layout="row" layout-xs="column" flex>\n                <span flex="none">Don\'t forget to</span>\n                <span class="text-link" fex="none">update your assets !</span>\n                <span class="separator-sub"></span>\n                <span class="date"> View at </span>\n                <md-datepicker class="myDatePicker" ng-model="myDate" md-placeholder="Enter date"\n                               md-min-date="minDate" md-max-date="maxDate"></md-datepicker>\n                <span class="separator-sub"></span>\n                <span class="currency">Currency</span>\n                <form name="currencyForm" novalidate>\n                    <md-input-container class="currency">\n                        <md-select ng-model="app.currency" placeholder="EURO">\n                            <md-option ng-repeat="state in subheader.currencies" value="{{state.id}}">\n                                {{state.country}}\n                            </md-option>\n                        </md-select>\n                    </md-input-container>\n                </form>\n\n                <span class="separator-sub"></span>\n                <md-switch layout-padding class="md-primary" ng-model="data.cb" aria-label="change currency"\n                           ng-change="subheader.changePercent(data)">\n                    %\n                </md-switch>\n                <span flex></span>\n                <span class="separator-sub"></span>\n                <span class="text-link">Print</span>\n            </div>\n        </md-toolbar>\n    '};t["default"]=r},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function a(){r(this,a),console.log("chooseDate")};t["default"]=n},function(e,t){}]);
//# sourceMappingURL=app.b5059a9554b451e31272.js.map
