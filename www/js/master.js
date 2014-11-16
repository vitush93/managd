if(function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=_.type(a);return"function"===c||_.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a,b,c){if(_.isFunction(b))return _.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return _.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(hb.test(b))return _.filter(b,a,c);b=_.filter(b,a)}return _.grep(a,function(a){return U.call(b,a)>=0!==c})}function e(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function f(a){var b=ob[a]={};return _.each(a.match(nb)||[],function(a,c){b[c]=!0}),b}function g(){Z.removeEventListener("DOMContentLoaded",g,!1),a.removeEventListener("load",g,!1),_.ready()}function h(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=_.expando+Math.random()}function i(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(ub,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:tb.test(c)?_.parseJSON(c):c}catch(e){}sb.set(a,b,c)}else c=void 0;return c}function j(){return!0}function k(){return!1}function l(){try{return Z.activeElement}catch(a){}}function m(a,b){return _.nodeName(a,"table")&&_.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function n(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function o(a){var b=Kb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function p(a,b){for(var c=0,d=a.length;d>c;c++)rb.set(a[c],"globalEval",!b||rb.get(b[c],"globalEval"))}function q(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(rb.hasData(a)&&(f=rb.access(a),g=rb.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)_.event.add(b,e,j[e][c])}sb.hasData(a)&&(h=sb.access(a),i=_.extend({},h),sb.set(b,i))}}function r(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&_.nodeName(a,b)?_.merge([a],c):c}function s(a,b){var c=b.nodeName.toLowerCase();"input"===c&&yb.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function t(b,c){var d,e=_(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:_.css(e[0],"display");return e.detach(),f}function u(a){var b=Z,c=Ob[a];return c||(c=t(a,b),"none"!==c&&c||(Nb=(Nb||_("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=Nb[0].contentDocument,b.write(),b.close(),c=t(a,b),Nb.detach()),Ob[a]=c),c}function v(a,b,c){var d,e,f,g,h=a.style;return c=c||Rb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||_.contains(a.ownerDocument,a)||(g=_.style(a,b)),Qb.test(g)&&Pb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function w(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function x(a,b){if(b in a)return b;for(var c=b[0].toUpperCase()+b.slice(1),d=b,e=Xb.length;e--;)if(b=Xb[e]+c,b in a)return b;return d}function y(a,b,c){var d=Tb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function z(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=_.css(a,c+wb[f],!0,e)),d?("content"===c&&(g-=_.css(a,"padding"+wb[f],!0,e)),"margin"!==c&&(g-=_.css(a,"border"+wb[f]+"Width",!0,e))):(g+=_.css(a,"padding"+wb[f],!0,e),"padding"!==c&&(g+=_.css(a,"border"+wb[f]+"Width",!0,e)));return g}function A(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Rb(a),g="border-box"===_.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=v(a,b,f),(0>e||null==e)&&(e=a.style[b]),Qb.test(e))return e;d=g&&(Y.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+z(a,b,c||(g?"border":"content"),d,f)+"px"}function B(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=rb.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&xb(d)&&(f[g]=rb.access(d,"olddisplay",u(d.nodeName)))):(e=xb(d),"none"===c&&e||rb.set(d,"olddisplay",e?c:_.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function C(a,b,c,d,e){return new C.prototype.init(a,b,c,d,e)}function D(){return setTimeout(function(){Yb=void 0}),Yb=_.now()}function E(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=wb[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function F(a,b,c){for(var d,e=(cc[b]||[]).concat(cc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function G(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&xb(a),p=rb.get(a,"fxshow");c.queue||(h=_._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,_.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=_.css(a,"display"),k="none"===j?rb.get(a,"olddisplay")||u(a.nodeName):j,"inline"===k&&"none"===_.css(a,"float")&&(n.display="inline-block")),c.overflow&&(n.overflow="hidden",l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],$b.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||_.style(a,d)}else j=void 0;if(_.isEmptyObject(m))"inline"===("none"===j?u(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=rb.access(a,"fxshow",{}),f&&(p.hidden=!o),o?_(a).show():l.done(function(){_(a).hide()}),l.done(function(){var b;rb.remove(a,"fxshow");for(b in m)_.style(a,b,m[b])});for(d in m)g=F(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function H(a,b){var c,d,e,f,g;for(c in a)if(d=_.camelCase(c),e=b[d],f=a[c],_.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=_.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function I(a,b,c){var d,e,f=0,g=bc.length,h=_.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Yb||D(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:_.extend({},b),opts:_.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Yb||D(),duration:c.duration,tweens:[],createTween:function(b,c){var d=_.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(H(k,j.opts.specialEasing);g>f;f++)if(d=bc[f].call(j,a,k,j.opts))return d;return _.map(k,F,j),_.isFunction(j.opts.start)&&j.opts.start.call(a,j),_.fx.timer(_.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function J(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(nb)||[];if(_.isFunction(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function K(a,b,c,d){function e(h){var i;return f[h]=!0,_.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===vc;return e(b.dataTypes[0])||!f["*"]&&e("*")}function L(a,b){var c,d,e=_.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&_.extend(!0,a,d),a}function M(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function N(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function O(a,b,c,d){var e;if(_.isArray(b))_.each(b,function(b,e){c||zc.test(a)?d(a,e):O(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==_.type(b))d(a,b);else for(e in b)O(a+"["+e+"]",b[e],c,d)}function P(a){return _.isWindow(a)?a:9===a.nodeType&&a.defaultView}var Q=[],R=Q.slice,S=Q.concat,T=Q.push,U=Q.indexOf,V={},W=V.toString,X=V.hasOwnProperty,Y={},Z=a.document,$="2.1.1",_=function(a,b){return new _.fn.init(a,b)},ab=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bb=/^-ms-/,cb=/-([\da-z])/gi,db=function(a,b){return b.toUpperCase()};_.fn=_.prototype={jquery:$,constructor:_,selector:"",length:0,toArray:function(){return R.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:R.call(this)},pushStack:function(a){var b=_.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return _.each(this,a,b)},map:function(a){return this.pushStack(_.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(R.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:T,sort:Q.sort,splice:Q.splice},_.extend=_.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||_.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(_.isPlainObject(d)||(e=_.isArray(d)))?(e?(e=!1,f=c&&_.isArray(c)?c:[]):f=c&&_.isPlainObject(c)?c:{},g[b]=_.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},_.extend({expando:"jQuery"+($+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===_.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!_.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==_.type(a)||a.nodeType||_.isWindow(a)?!1:a.constructor&&!X.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?V[W.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=_.trim(a),a&&(1===a.indexOf("use strict")?(b=Z.createElement("script"),b.text=a,Z.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(bb,"ms-").replace(cb,db)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(ab,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?_.merge(d,"string"==typeof a?[a]:a):T.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:U.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);return S.apply([],i)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),_.isFunction(a)?(d=R.call(arguments,2),e=function(){return a.apply(b||this,d.concat(R.call(arguments)))},e.guid=a.guid=a.guid||_.guid++,e):void 0},now:Date.now,support:Y}),_.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){V["[object "+b+"]"]=b.toLowerCase()});var eb=function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(I&&!d){if(e=sb.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return _.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&v.getElementsByClassName&&b.getElementsByClassName)return _.apply(c,b.getElementsByClassName(g)),c}if(v.qsa&&(!J||!J.test(a))){if(n=l=N,o=b,p=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=z(a),(l=b.getAttribute("id"))?n=l.replace(ub,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",i=j.length;i--;)j[i]=n+m(j[i]);o=tb.test(a)&&k(b.parentNode)||b,p=j.join(",")}if(p)try{return _.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{l||b.removeAttribute("id")}}}return B(a.replace(ib,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||W)-(~a.sourceIndex||W);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&typeof a.getElementsByTagName!==V&&a}function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?bb.call(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):_.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return bb.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!w.relative[a[d].type];d++);return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ib,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&w.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Z.call(i));r=q(r)}_.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+-new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V="undefined",W=1<<31,X={}.hasOwnProperty,Y=[],Z=Y.pop,$=Y.push,_=Y.push,ab=Y.slice,bb=Y.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},cb="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",db="[\\x20\\t\\r\\n\\f]",eb="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",fb=eb.replace("w","w#"),gb="\\["+db+"*("+eb+")(?:"+db+"*([*^$|!~]?=)"+db+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+fb+"))|)"+db+"*\\]",hb=":("+eb+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+gb+")*)|.*)\\)|)",ib=new RegExp("^"+db+"+|((?:^|[^\\\\])(?:\\\\.)*)"+db+"+$","g"),jb=new RegExp("^"+db+"*,"+db+"*"),kb=new RegExp("^"+db+"*([>+~]|"+db+")"+db+"*"),lb=new RegExp("="+db+"*([^\\]'\"]*?)"+db+"*\\]","g"),mb=new RegExp(hb),nb=new RegExp("^"+fb+"$"),ob={ID:new RegExp("^#("+eb+")"),CLASS:new RegExp("^\\.("+eb+")"),TAG:new RegExp("^("+eb.replace("w","w*")+")"),ATTR:new RegExp("^"+gb),PSEUDO:new RegExp("^"+hb),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+db+"*(even|odd|(([+-]|)(\\d*)n|)"+db+"*(?:([+-]|)"+db+"*(\\d+)|))"+db+"*\\)|)","i"),bool:new RegExp("^(?:"+cb+")$","i"),needsContext:new RegExp("^"+db+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+db+"*((?:-\\d)?\\d*)"+db+"*\\)|)(?=[^-]|$)","i")},pb=/^(?:input|select|textarea|button)$/i,qb=/^h\d$/i,rb=/^[^{]+\{\s*\[native \w/,sb=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tb=/[+~]/,ub=/'|\\/g,vb=new RegExp("\\\\([\\da-f]{1,6}"+db+"?|("+db+")|.)","ig"),wb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{_.apply(Y=ab.call(O.childNodes),O.childNodes),Y[O.childNodes.length].nodeType}catch(xb){_={apply:Y.length?function(a,b){$.apply(a,ab.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c=a?a.ownerDocument||a:O,d=c.defaultView;return c!==G&&9===c.nodeType&&c.documentElement?(G=c,H=c.documentElement,I=!y(c),d&&d!==d.top&&(d.addEventListener?d.addEventListener("unload",function(){F()},!1):d.attachEvent&&d.attachEvent("onunload",function(){F()})),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=rb.test(c.getElementsByClassName)&&e(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),v.getById=e(function(a){return H.appendChild(a).id=N,!c.getElementsByName||!c.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if(typeof b.getElementById!==V&&I){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){var c=typeof a.getAttributeNode!==V&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==V?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==V&&I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=rb.test(c.querySelectorAll))&&(e(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&J.push("[*^$]="+db+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+db+"*(?:value|"+cb+")"),a.querySelectorAll(":checked").length||J.push(":checked")}),e(function(a){var b=c.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+db+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=rb.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",hb)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=rb.test(H.compareDocumentPosition),M=b||rb.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!v.sortDetached&&b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===O&&M(O,a)?-1:b===c||b.ownerDocument===O&&M(O,b)?1:D?bb.call(D,a)-bb.call(D,b):0:4&d?-1:1)}:function(a,b){if(a===b)return E=!0,0;var d,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!f||!h)return a===c?-1:b===c?1:f?-1:h?1:D?bb.call(D,a)-bb.call(D,b):0;if(f===h)return g(a,b);for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},c):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(lb,"='$1']"),!(!v.matchesSelector||!I||K&&K.test(c)||J&&J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&X.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:ob,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(vb,wb),a[3]=(a[3]||a[4]||a[5]||"").replace(vb,wb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return ob.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&mb.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(vb,wb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+db+")"+a+"("+db+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==V&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=bb.call(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ib,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return nb.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(vb,wb).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return qb.test(a.nodeName)},input:function(a){return pb.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){(!d||(e=jb.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=kb.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ib," ")}),h=h.slice(d.length));for(g in w.filter)!(e=ob[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(vb,wb),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=ob.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(vb,wb),tb.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return _.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,tb.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(cb,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);_.find=eb,_.expr=eb.selectors,_.expr[":"]=_.expr.pseudos,_.unique=eb.uniqueSort,_.text=eb.getText,_.isXMLDoc=eb.isXML,_.contains=eb.contains;var fb=_.expr.match.needsContext,gb=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,hb=/^.[^:#\[\.,]*$/;_.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?_.find.matchesSelector(d,a)?[d]:[]:_.find.matches(a,_.grep(b,function(a){return 1===a.nodeType}))},_.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(_(a).filter(function(){for(b=0;c>b;b++)if(_.contains(e[b],this))return!0
}));for(b=0;c>b;b++)_.find(a,e[b],d);return d=this.pushStack(c>1?_.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&fb.test(a)?_(a):a||[],!1).length}});var ib,jb=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,kb=_.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:jb.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||ib).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof _?b[0]:b,_.merge(this,_.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:Z,!0)),gb.test(c[1])&&_.isPlainObject(b))for(c in b)_.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=Z.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=Z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):_.isFunction(a)?"undefined"!=typeof ib.ready?ib.ready(a):a(_):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),_.makeArray(a,this))};kb.prototype=_.fn,ib=_(Z);var lb=/^(?:parents|prev(?:Until|All))/,mb={children:!0,contents:!0,next:!0,prev:!0};_.extend({dir:function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&_(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),_.fn.extend({has:function(a){var b=_(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(_.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=fb.test(a)||"string"!=typeof a?_(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&_.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?_.unique(f):f)},index:function(a){return a?"string"==typeof a?U.call(_(a),this[0]):U.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(_.unique(_.merge(this.get(),_(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),_.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return _.dir(a,"parentNode")},parentsUntil:function(a,b,c){return _.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return _.dir(a,"nextSibling")},prevAll:function(a){return _.dir(a,"previousSibling")},nextUntil:function(a,b,c){return _.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return _.dir(a,"previousSibling",c)},siblings:function(a){return _.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return _.sibling(a.firstChild)},contents:function(a){return a.contentDocument||_.merge([],a.childNodes)}},function(a,b){_.fn[a]=function(c,d){var e=_.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=_.filter(d,e)),this.length>1&&(mb[a]||_.unique(e),lb.test(a)&&e.reverse()),this.pushStack(e)}});var nb=/\S+/g,ob={};_.Callbacks=function(a){a="string"==typeof a?ob[a]||f(a):_.extend({},a);var b,c,d,e,g,h,i=[],j=!a.once&&[],k=function(f){for(b=a.memory&&f,c=!0,h=e||0,e=0,g=i.length,d=!0;i&&g>h;h++)if(i[h].apply(f[0],f[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,i&&(j?j.length&&k(j.shift()):b?i=[]:l.disable())},l={add:function(){if(i){var c=i.length;!function f(b){_.each(b,function(b,c){var d=_.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),d?g=i.length:b&&(e=c,k(b))}return this},remove:function(){return i&&_.each(arguments,function(a,b){for(var c;(c=_.inArray(b,i,c))>-1;)i.splice(c,1),d&&(g>=c&&g--,h>=c&&h--)}),this},has:function(a){return a?_.inArray(a,i)>-1:!(!i||!i.length)},empty:function(){return i=[],g=0,this},disable:function(){return i=j=b=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,b||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return!i||c&&!j||(b=b||[],b=[a,b.slice?b.slice():b],d?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!c}};return l},_.extend({Deferred:function(a){var b=[["resolve","done",_.Callbacks("once memory"),"resolved"],["reject","fail",_.Callbacks("once memory"),"rejected"],["notify","progress",_.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return _.Deferred(function(c){_.each(b,function(b,f){var g=_.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&_.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?_.extend(a,d):d}},e={};return d.pipe=d.then,_.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=R.call(arguments),g=f.length,h=1!==g||a&&_.isFunction(a.promise)?g:0,i=1===h?a:_.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?R.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&_.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}});var pb;_.fn.ready=function(a){return _.ready.promise().done(a),this},_.extend({isReady:!1,readyWait:1,holdReady:function(a){a?_.readyWait++:_.ready(!0)},ready:function(a){(a===!0?--_.readyWait:_.isReady)||(_.isReady=!0,a!==!0&&--_.readyWait>0||(pb.resolveWith(Z,[_]),_.fn.triggerHandler&&(_(Z).triggerHandler("ready"),_(Z).off("ready"))))}}),_.ready.promise=function(b){return pb||(pb=_.Deferred(),"complete"===Z.readyState?setTimeout(_.ready):(Z.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1))),pb.promise(b)},_.ready.promise();var qb=_.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===_.type(c)){e=!0;for(h in c)_.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,_.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(_(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};_.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType},h.uid=1,h.accepts=_.acceptData,h.prototype={key:function(a){if(!h.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=h.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,_.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(_.isEmptyObject(f))_.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,_.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{_.isArray(b)?d=b.concat(b.map(_.camelCase)):(e=_.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(nb)||[])),c=d.length;for(;c--;)delete g[d[c]]}},hasData:function(a){return!_.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var rb=new h,sb=new h,tb=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ub=/([A-Z])/g;_.extend({hasData:function(a){return sb.hasData(a)||rb.hasData(a)},data:function(a,b,c){return sb.access(a,b,c)},removeData:function(a,b){sb.remove(a,b)},_data:function(a,b,c){return rb.access(a,b,c)},_removeData:function(a,b){rb.remove(a,b)}}),_.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=sb.get(f),1===f.nodeType&&!rb.get(f,"hasDataAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=_.camelCase(d.slice(5)),i(f,d,e[d])));rb.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){sb.set(this,a)}):qb(this,function(b){var c,d=_.camelCase(a);if(f&&void 0===b){if(c=sb.get(f,a),void 0!==c)return c;if(c=sb.get(f,d),void 0!==c)return c;if(c=i(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=sb.get(this,d);sb.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&sb.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){sb.remove(this,a)})}}),_.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=rb.get(a,b),c&&(!d||_.isArray(c)?d=rb.access(a,b,_.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=_.queue(a,b),d=c.length,e=c.shift(),f=_._queueHooks(a,b),g=function(){_.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return rb.get(a,c)||rb.access(a,c,{empty:_.Callbacks("once memory").add(function(){rb.remove(a,[b+"queue",c])})})}}),_.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?_.queue(this[0],a):void 0===b?this:this.each(function(){var c=_.queue(this,a,b);_._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&_.dequeue(this,a)})},dequeue:function(a){return this.each(function(){_.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=_.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=rb.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var vb=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,wb=["Top","Right","Bottom","Left"],xb=function(a,b){return a=b||a,"none"===_.css(a,"display")||!_.contains(a.ownerDocument,a)},yb=/^(?:checkbox|radio)$/i;!function(){var a=Z.createDocumentFragment(),b=a.appendChild(Z.createElement("div")),c=Z.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),Y.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var zb="undefined";Y.focusinBubbles="onfocusin"in a;var Ab=/^key/,Bb=/^(?:mouse|pointer|contextmenu)|click/,Cb=/^(?:focusinfocus|focusoutblur)$/,Db=/^([^.]*)(?:\.(.+)|)$/;_.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.get(a);if(q)for(c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=_.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return typeof _!==zb&&_.event.triggered!==b.type?_.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(nb)||[""],j=b.length;j--;)h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=_.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=_.event.special[n]||{},k=_.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&_.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),_.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.hasData(a)&&rb.get(a);if(q&&(i=q.events)){for(b=(b||"").match(nb)||[""],j=b.length;j--;)if(h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=_.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||_.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)_.event.remove(a,n+b[j],c,d,!0);_.isEmptyObject(i)&&(delete q.handle,rb.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||Z],n=X.call(b,"type")?b.type:b,o=X.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||Z,3!==d.nodeType&&8!==d.nodeType&&!Cb.test(n+_.event.triggered)&&(n.indexOf(".")>=0&&(o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,b=b[_.expando]?b:new _.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:_.makeArray(c,[b]),l=_.event.special[n]||{},e||!l.trigger||l.trigger.apply(d,c)!==!1)){if(!e&&!l.noBubble&&!_.isWindow(d)){for(i=l.delegateType||n,Cb.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;h===(d.ownerDocument||Z)&&m.push(h.defaultView||h.parentWindow||a)}for(f=0;(g=m[f++])&&!b.isPropagationStopped();)b.type=f>1?i:l.bindType||n,k=(rb.get(g,"events")||{})[b.type]&&rb.get(g,"handle"),k&&k.apply(g,c),k=j&&g[j],k&&k.apply&&_.acceptData(g)&&(b.result=k.apply(g,c),b.result===!1&&b.preventDefault());return b.type=n,e||b.isDefaultPrevented()||l._default&&l._default.apply(m.pop(),c)!==!1||!_.acceptData(d)||j&&_.isFunction(d[n])&&!_.isWindow(d)&&(h=d[j],h&&(d[j]=null),_.event.triggered=n,d[n](),_.event.triggered=void 0,h&&(d[j]=h)),b.result}},dispatch:function(a){a=_.event.fix(a);var b,c,d,e,f,g=[],h=R.call(arguments),i=(rb.get(this,"events")||{})[a.type]||[],j=_.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=_.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(f.namespace))&&(a.handleObj=f,a.data=f.data,d=((_.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?_(e,this).index(i)>=0:_.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||Z,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[_.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Bb.test(e)?this.mouseHooks:Ab.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new _.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=Z),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==l()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===l()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&_.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return _.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=_.extend(new _.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?_.event.trigger(e,null,b):_.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},_.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},_.Event=function(a,b){return this instanceof _.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?j:k):this.type=a,b&&_.extend(this,b),this.timeStamp=a&&a.timeStamp||_.now(),void(this[_.expando]=!0)):new _.Event(a,b)},_.Event.prototype={isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=j,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=j,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=j,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},_.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){_.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!_.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),Y.focusinBubbles||_.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){_.event.simulate(b,a.target,_.event.fix(a),!0)};_.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=rb.access(d,b);e||d.addEventListener(a,c,!0),rb.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=rb.access(d,b)-1;e?rb.access(d,b,e):(d.removeEventListener(a,c,!0),rb.remove(d,b))}}}),_.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=k;else if(!d)return this;return 1===e&&(f=d,d=function(a){return _().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=_.guid++)),this.each(function(){_.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,_(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=k),this.each(function(){_.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){_.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?_.event.trigger(a,b,c,!0):void 0}});var Eb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Fb=/<([\w:]+)/,Gb=/<|&#?\w+;/,Hb=/<(?:script|style|link)/i,Ib=/checked\s*(?:[^=]|=\s*.checked.)/i,Jb=/^$|\/(?:java|ecma)script/i,Kb=/^true\/(.*)/,Lb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Mb={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Mb.optgroup=Mb.option,Mb.tbody=Mb.tfoot=Mb.colgroup=Mb.caption=Mb.thead,Mb.th=Mb.td,_.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=_.contains(a.ownerDocument,a);if(!(Y.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||_.isXMLDoc(a)))for(g=r(h),f=r(a),d=0,e=f.length;e>d;d++)s(f[d],g[d]);if(b)if(c)for(f=f||r(a),g=g||r(h),d=0,e=f.length;e>d;d++)q(f[d],g[d]);else q(a,h);return g=r(h,"script"),g.length>0&&p(g,!i&&r(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===_.type(e))_.merge(l,e.nodeType?[e]:e);else if(Gb.test(e)){for(f=f||k.appendChild(b.createElement("div")),g=(Fb.exec(e)||["",""])[1].toLowerCase(),h=Mb[g]||Mb._default,f.innerHTML=h[1]+e.replace(Eb,"<$1></$2>")+h[2],j=h[0];j--;)f=f.lastChild;_.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));for(k.textContent="",m=0;e=l[m++];)if((!d||-1===_.inArray(e,d))&&(i=_.contains(e.ownerDocument,e),f=r(k.appendChild(e),"script"),i&&p(f),c))for(j=0;e=f[j++];)Jb.test(e.type||"")&&c.push(e);return k},cleanData:function(a){for(var b,c,d,e,f=_.event.special,g=0;void 0!==(c=a[g]);g++){if(_.acceptData(c)&&(e=c[rb.expando],e&&(b=rb.cache[e]))){if(b.events)for(d in b.events)f[d]?_.event.remove(c,d):_.removeEvent(c,d,b.handle);rb.cache[e]&&delete rb.cache[e]}delete sb.cache[c[sb.expando]]}}}),_.fn.extend({text:function(a){return qb(this,function(a){return void 0===a?_.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?_.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||_.cleanData(r(c)),c.parentNode&&(b&&_.contains(c.ownerDocument,c)&&p(r(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(_.cleanData(r(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return _.clone(this,a,b)})},html:function(a){return qb(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Hb.test(a)&&!Mb[(Fb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Eb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(_.cleanData(r(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,_.cleanData(r(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=S.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],p=_.isFunction(m);if(p||j>1&&"string"==typeof m&&!Y.checkClone&&Ib.test(m))return this.each(function(c){var d=k.eq(c);p&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(c=_.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(e=_.map(r(c,"script"),n),f=e.length;j>i;i++)g=c,i!==l&&(g=_.clone(g,!0,!0),f&&_.merge(e,r(g,"script"))),b.call(this[i],g,i);if(f)for(h=e[e.length-1].ownerDocument,_.map(e,o),i=0;f>i;i++)g=e[i],Jb.test(g.type||"")&&!rb.access(g,"globalEval")&&_.contains(h,g)&&(g.src?_._evalUrl&&_._evalUrl(g.src):_.globalEval(g.textContent.replace(Lb,"")))}return this}}),_.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){_.fn[a]=function(a){for(var c,d=[],e=_(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),_(e[g])[b](c),T.apply(d,c.get());return this.pushStack(d)}});var Nb,Ob={},Pb=/^margin/,Qb=new RegExp("^("+vb+")(?!px)[a-z%]+$","i"),Rb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};!function(){function b(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",g.innerHTML="",e.appendChild(f);var b=a.getComputedStyle(g,null);c="1%"!==b.top,d="4px"===b.width,e.removeChild(f)}var c,d,e=Z.documentElement,f=Z.createElement("div"),g=Z.createElement("div");g.style&&(g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",f.appendChild(g),a.getComputedStyle&&_.extend(Y,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return null==d&&b(),d},reliableMarginRight:function(){var b,c=g.appendChild(Z.createElement("div"));return c.style.cssText=g.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),b}}))}(),_.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Sb=/^(none|table(?!-c[ea]).+)/,Tb=new RegExp("^("+vb+")(.*)$","i"),Ub=new RegExp("^([+-])=("+vb+")","i"),Vb={position:"absolute",visibility:"hidden",display:"block"},Wb={letterSpacing:"0",fontWeight:"400"},Xb=["Webkit","O","Moz","ms"];_.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=v(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=_.camelCase(b),i=a.style;return b=_.cssProps[h]||(_.cssProps[h]=x(i,h)),g=_.cssHooks[b]||_.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ub.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(_.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||_.cssNumber[h]||(c+="px"),Y.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=_.camelCase(b);return b=_.cssProps[h]||(_.cssProps[h]=x(a.style,h)),g=_.cssHooks[b]||_.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=v(a,b,d)),"normal"===e&&b in Wb&&(e=Wb[b]),""===c||c?(f=parseFloat(e),c===!0||_.isNumeric(f)?f||0:e):e}}),_.each(["height","width"],function(a,b){_.cssHooks[b]={get:function(a,c,d){return c?Sb.test(_.css(a,"display"))&&0===a.offsetWidth?_.swap(a,Vb,function(){return A(a,b,d)}):A(a,b,d):void 0},set:function(a,c,d){var e=d&&Rb(a);return y(a,c,d?z(a,b,d,"border-box"===_.css(a,"boxSizing",!1,e),e):0)}}}),_.cssHooks.marginRight=w(Y.reliableMarginRight,function(a,b){return b?_.swap(a,{display:"inline-block"},v,[a,"marginRight"]):void 0}),_.each({margin:"",padding:"",border:"Width"},function(a,b){_.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+wb[d]+b]=f[d]||f[d-2]||f[0];return e}},Pb.test(a)||(_.cssHooks[a+b].set=y)}),_.fn.extend({css:function(a,b){return qb(this,function(a,b,c){var d,e,f={},g=0;if(_.isArray(b)){for(d=Rb(a),e=b.length;e>g;g++)f[b[g]]=_.css(a,b[g],!1,d);return f}return void 0!==c?_.style(a,b,c):_.css(a,b)},a,b,arguments.length>1)},show:function(){return B(this,!0)},hide:function(){return B(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){xb(this)?_(this).show():_(this).hide()})}}),_.Tween=C,C.prototype={constructor:C,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(_.cssNumber[c]?"":"px")},cur:function(){var a=C.propHooks[this.prop];return a&&a.get?a.get(this):C.propHooks._default.get(this)},run:function(a){var b,c=C.propHooks[this.prop];return this.pos=b=this.options.duration?_.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):C.propHooks._default.set(this),this}},C.prototype.init.prototype=C.prototype,C.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=_.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){_.fx.step[a.prop]?_.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[_.cssProps[a.prop]]||_.cssHooks[a.prop])?_.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},C.propHooks.scrollTop=C.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},_.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},_.fx=C.prototype.init,_.fx.step={};var Yb,Zb,$b=/^(?:toggle|show|hide)$/,_b=new RegExp("^(?:([+-])=|)("+vb+")([a-z%]*)$","i"),ac=/queueHooks$/,bc=[G],cc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=_b.exec(b),f=e&&e[3]||(_.cssNumber[a]?"":"px"),g=(_.cssNumber[a]||"px"!==f&&+d)&&_b.exec(_.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,_.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};_.Animation=_.extend(I,{tweener:function(a,b){_.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],cc[c]=cc[c]||[],cc[c].unshift(b)},prefilter:function(a,b){b?bc.unshift(a):bc.push(a)}}),_.speed=function(a,b,c){var d=a&&"object"==typeof a?_.extend({},a):{complete:c||!c&&b||_.isFunction(a)&&a,duration:a,easing:c&&b||b&&!_.isFunction(b)&&b};return d.duration=_.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in _.fx.speeds?_.fx.speeds[d.duration]:_.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){_.isFunction(d.old)&&d.old.call(this),d.queue&&_.dequeue(this,d.queue)},d},_.fn.extend({fadeTo:function(a,b,c,d){return this.filter(xb).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=_.isEmptyObject(a),f=_.speed(b,c,d),g=function(){var b=I(this,_.extend({},a),f);(e||rb.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=_.timers,g=rb.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ac.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&_.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=rb.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=_.timers,g=d?d.length:0;for(c.finish=!0,_.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),_.each(["toggle","show","hide"],function(a,b){var c=_.fn[b];
        _.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }), _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        _.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), _.timers = [], _.fx.tick = function () {
        var a, b = 0, c = _.timers;
        for (Yb = _.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Yb = void 0
    }, _.fx.timer = function (a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function () {
        Zb || (Zb = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function () {
        clearInterval(Zb), Zb = null
    }, _.fx.speeds = {slow: 600, fast: 200, _default: 400}, _.fn.delay = function (a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
    }();
        var dc, ec, fc = _.expr.attrHandle;
        _.fn.extend({
            attr: function (a, b) {
                return qb(this, _.attr, a, b, arguments.length > 1)
            }, removeAttr: function (a) {
                return this.each(function () {
                    _.removeAttr(this, a)
                })
            }
        }), _.extend({
            attr: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === zb ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? ec : dc)), void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
            }, removeAttr: function (a, b) {
                var c, d, e = 0, f = b && b.match(nb);
                if (f && 1 === a.nodeType)for (; c = f[e++];)d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
            }, attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }
        }), ec = {
            set: function (a, b, c) {
                return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, _.each(_.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = fc[b] || _.find.attr;
            fc[b] = function (a, b, d) {
                var e, f;
                return d || (f = fc[b], fc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fc[b] = f), e
            }
        });
        var gc = /^(?:input|select|textarea|button)$/i;
        _.fn.extend({
            prop: function (a, b) {
                return qb(this, _.prop, a, b, arguments.length > 1)
            }, removeProp: function (a) {
                return this.each(function () {
                    delete this[_.propFix[a] || a]
                })
            }
        }), _.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
            }, propHooks: {
                tabIndex: {
                    get: function (a) {
                        return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href ? a.tabIndex : -1
                    }
                }
            }
        }), Y.optSelected || (_.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            }
        }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            _.propFix[this.toLowerCase()] = this
        });
        var hc = /[\t\r\n\f]/g;
        _.fn.extend({
            addClass: function (a) {
                var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
                if (_.isFunction(a))return this.each(function (b) {
                    _(this).addClass(a.call(this, b, this.className))
                });
                if (h)for (b = (a || "").match(nb) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")) {
                    for (f = 0; e = b[f++];)d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                    g = _.trim(d), c.className !== g && (c.className = g)
                }
                return this
            }, removeClass: function (a) {
                var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
                if (_.isFunction(a))return this.each(function (b) {
                    _(this).removeClass(a.call(this, b, this.className))
                });
                if (h)for (b = (a || "").match(nb) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : "")) {
                    for (f = 0; e = b[f++];)for (; d.indexOf(" " + e + " ") >= 0;)d = d.replace(" " + e + " ", " ");
                    g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                }
                return this
            }, toggleClass: function (a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function (c) {
                    _(this).toggleClass(a.call(this, c, this.className, b), b)
                } : function () {
                    if ("string" === c)for (var b, d = 0, e = _(this), f = a.match(nb) || []; b = f[d++];)e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else(c === zb || "boolean" === c) && (this.className && rb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : rb.get(this, "__className__") || "")
                })
            }, hasClass: function (a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0)return !0;
                return !1
            }
        });
        var ic = /\r/g;
        _.fn.extend({
            val: function (a) {
                var b, c, d, e = this[0];
                {
                    if (arguments.length)return d = _.isFunction(a), this.each(function (c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function (a) {
                            return null == a ? "" : a + ""
                        })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e)return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ic, "") : null == c ? "" : c)
                }
            }
        }), _.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = _.find.attr(a, "value");
                        return null != b ? b : _.trim(_.text(a))
                    }
                }, select: {
                    get: function (a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(), f)return b;
                            g.push(b)
                        }
                        return g
                    }, set: function (a, b) {
                        for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;)d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            }
        }), _.each(["radio", "checkbox"], function () {
            _.valHooks[this] = {
                set: function (a, b) {
                    return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
                }
            }, Y.checkOn || (_.valHooks[this].get = function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
            _.fn[b] = function (a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), _.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }, bind: function (a, b, c) {
                return this.on(a, null, b, c)
            }, unbind: function (a, b) {
                return this.off(a, null, b)
            }, delegate: function (a, b, c, d) {
                return this.on(b, a, c, d)
            }, undelegate: function (a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var jc = _.now(), kc = /\?/;
        _.parseJSON = function (a) {
            return JSON.parse(a + "")
        }, _.parseXML = function (a) {
            var b, c;
            if (!a || "string" != typeof a)return null;
            try {
                c = new DOMParser, b = c.parseFromString(a, "text/xml")
            } catch (d) {
                b = void 0
            }
            return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
        };
        var lc, mc, nc = /#.*$/, oc = /([?&])_=[^&]*/, pc = /^(.*?):[ \t]*([^\r\n]*)$/gm, qc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rc = /^(?:GET|HEAD)$/, sc = /^\/\//, tc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, uc = {}, vc = {}, wc = "*/".concat("*");
        try {
            mc = location.href
        } catch (xc) {
            mc = Z.createElement("a"), mc.href = "", mc = mc.href
        }
        lc = tc.exec(mc.toLowerCase()) || [], _.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: mc,
                type: "GET",
                isLocal: qc.test(lc[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": wc,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": _.parseJSON, "text xml": _.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (a, b) {
                return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
            },
            ajaxPrefilter: J(uc),
            ajaxTransport: J(vc),
            ajax: function (a, b) {
                function c(a, b, c, g) {
                    var i, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
                }

                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(), p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!g)for (g = {}; b = pc.exec(f);)g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || mc) + "").replace(nc, "").replace(sc, lc[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(nb) || [""], null == l.crossDomain && (i = tc.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === lc[1] && i[2] === lc[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (lc[3] || ("http:" === lc[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(uc, l, b, v), 2 === t)return v;
                j = l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !rc.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kc.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = oc.test(e) ? e.replace(oc, "$1_=" + jc++) : e + (kc.test(e) ? "&" : "?") + "_=" + jc++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + wc + "; q=0.01" : "") : l.accepts["*"]);
                for (k in l.headers)v.setRequestHeader(k, l.headers[k]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))return v.abort();
                u = "abort";
                for (k in{success: 1, error: 1, complete: 1})v[k](l[k]);
                if (d = K(vc, l, b, v)) {
                    v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
                        v.abort("timeout")
                    }, l.timeout));
                    try {
                        t = 1, d.send(r, c)
                    } catch (w) {
                        if (!(2 > t))throw w;
                        c(-1, w)
                    }
                } else c(-1, "No Transport");
                return v
            },
            getJSON: function (a, b, c) {
                return _.get(a, b, c, "json")
            },
            getScript: function (a, b) {
                return _.get(a, void 0, b, "script")
            }
        }), _.each(["get", "post"], function (a, b) {
            _[b] = function (a, c, d, e) {
                return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }), _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
            _.fn[b] = function (a) {
                return this.on(b, a)
            }
        }), _._evalUrl = function (a) {
            return _.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, _.fn.extend({
            wrapAll: function (a) {
                var b;
                return _.isFunction(a) ? this.each(function (b) {
                    _(this).wrapAll(a.call(this, b))
                }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstElementChild;)a = a.firstElementChild;
                    return a
                }).append(this)), this)
            }, wrapInner: function (a) {
                return this.each(_.isFunction(a) ? function (b) {
                    _(this).wrapInner(a.call(this, b))
                } : function () {
                    var b = _(this), c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            }, wrap: function (a) {
                var b = _.isFunction(a);
                return this.each(function (c) {
                    _(this).wrapAll(b ? a.call(this, c) : a)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
                }).end()
            }
        }), _.expr.filters.hidden = function (a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0
        }, _.expr.filters.visible = function (a) {
            return !_.expr.filters.hidden(a)
        };
        var yc = /%20/g, zc = /\[\]$/, Ac = /\r?\n/g, Bc = /^(?:submit|button|image|reset|file)$/i, Cc = /^(?:input|select|textarea|keygen)/i;
        _.param = function (a, b) {
            var c, d = [], e = function (a, b) {
                b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a))_.each(a, function () {
                e(this.name, this.value)
            }); else for (c in a)O(c, a[c], b, e);
            return d.join("&").replace(yc, "+")
        }, _.fn.extend({
            serialize: function () {
                return _.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var a = _.prop(this, "elements");
                    return a ? _.makeArray(a) : this
                }).filter(function () {
                    var a = this.type;
                    return this.name && !_(this).is(":disabled") && Cc.test(this.nodeName) && !Bc.test(a) && (this.checked || !yb.test(a))
                }).map(function (a, b) {
                    var c = _(this).val();
                    return null == c ? null : _.isArray(c) ? _.map(c, function (a) {
                        return {name: b.name, value: a.replace(Ac, "\r\n")}
                    }) : {name: b.name, value: c.replace(Ac, "\r\n")}
                }).get()
            }
        }), _.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest
            } catch (a) {
            }
        };
        var Dc = 0, Ec = {}, Fc = {0: 200, 1223: 204}, Gc = _.ajaxSettings.xhr();
        a.ActiveXObject && _(a).on("unload", function () {
            for (var a in Ec)Ec[a]()
        }), Y.cors = !!Gc && "withCredentials"in Gc, Y.ajax = Gc = !!Gc, _.ajaxTransport(function (a) {
            var b;
            return Y.cors || Gc && !a.crossDomain ? {
                send: function (c, d) {
                    var e, f = a.xhr(), g = ++Dc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)f.setRequestHeader(e, c[e]);
                    b = function (a) {
                        return function () {
                            b && (delete Ec[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Fc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                        }
                    }, f.onload = b(), f.onerror = b("error"), b = Ec[g] = b("abort");
                    try {
                        f.send(a.hasContent && a.data || null)
                    } catch (h) {
                        if (b)throw h
                    }
                }, abort: function () {
                    b && b()
                }
            } : void 0
        }), _.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (a) {
                    return _.globalEval(a), a
                }
            }
        }), _.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
        }), _.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function (d, e) {
                        b = _("<script>").prop({
                            async: !0,
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function (a) {
                            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                        }), Z.head.appendChild(b[0])
                    }, abort: function () {
                        c && c()
                    }
                }
            }
        });
        var Hc = [], Ic = /(=)\?(?=&|$)|\?\?/;
        _.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var a = Hc.pop() || _.expando + "_" + jc++;
                return this[a] = !0, a
            }
        }), _.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (Ic.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ic.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ic, "$1" + e) : b.jsonp !== !1 && (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                return g || _.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                g = arguments
            }, d.always(function () {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Hc.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), _.parseHTML = function (a, b, c) {
            if (!a || "string" != typeof a)return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || Z;
            var d = gb.exec(a), e = !c && [];
            return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
        };
        var Jc = _.fn.load;
        _.fn.load = function (a, b, c) {
            if ("string" != typeof a && Jc)return Jc.apply(this, arguments);
            var d, e, f, g = this, h = a.indexOf(" ");
            return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b
            }).done(function (a) {
                f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
            }).complete(c && function (a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
        }, _.expr.filters.animated = function (a) {
            return _.grep(_.timers, function (b) {
                return a === b.elem
            }).length
        };
        var Kc = a.document.documentElement;
        _.offset = {
            setOffset: function (a, b, c) {
                var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
            }
        }, _.fn.extend({
            offset: function (a) {
                if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                    _.offset.setOffset(this, a, b)
                });
                var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
                if (f)return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== zb && (e = d.getBoundingClientRect()), c = P(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
            }, position: function () {
                if (this[0]) {
                    var a, b, c = this[0], d = {top: 0, left: 0};
                    return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - d.top - _.css(c, "marginTop", !0),
                        left: b.left - d.left - _.css(c, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var a = this.offsetParent || Kc; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");)a = a.offsetParent;
                    return a || Kc
                })
            }
        }), _.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
            var d = "pageYOffset" === c;
            _.fn[b] = function (e) {
                return qb(this, function (b, e, f) {
                    var g = P(b);
                    return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
                }, b, e, arguments.length, null)
            }
        }), _.each(["top", "left"], function (a, b) {
            _.cssHooks[b] = w(Y.pixelPosition, function (a, c) {
                return c ? (c = v(a, b), Qb.test(c) ? _(a).position()[b] + "px" : c) : void 0
            })
        }), _.each({Height: "height", Width: "width"}, function (a, b) {
            _.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
                _.fn[d] = function (d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return qb(this, function (b, c, d) {
                        var e;
                        return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), _.fn.size = function () {
            return this.length
        }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return _
        });
        var Lc = a.jQuery, Mc = a.$;
        return _.noConflict = function (b) {
            return a.$ === _ && (a.$ = Mc), b && a.jQuery === _ && (a.jQuery = Lc), _
        }, typeof b === zb && (a.jQuery = a.$ = _), _
    }), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function (a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)if (void 0 !== a.style[c])return {end: b[c]};
        return !1
    }

    a.fn.emulateTransitionEnd = function (b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }

    var c = '[data-dismiss="alert"]', d = function (b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.1", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }

        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }

    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.1", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function (b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }

    var c = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.1", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = "prev" == a ? -1 : 1, d = this.getItemIndex(b), e = (d + c) % this.$items.length;
        return this.$items.eq(e)
    }, c.prototype.to = function (a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left" : "right", i = "next" == b ? "first" : "last", j = this;
        if (!f.length) {
            if (!this.options.wrap)return;
            f = this.$element.find(".item")[i]()
        }
        if (f.hasClass("active"))return this.sliding = !1;
        var k = f[0], l = a.Event("slide.bs.carousel", {relatedTarget: k, direction: h});
        if (this.$element.trigger(l), !l.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var m = a(this.$indicators.children()[this.getItemIndex(f)]);
                m && m.addClass("active")
            }
            var n = a.Event("slid.bs.carousel", {relatedTarget: k, direction: h});
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), j.sliding = !1, setTimeout(function () {
                    j.$element.trigger(n)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(n)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this
    };
    var e = function (c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }

    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a(this.options.trigger).filter('[href="#' + b.id + '"], [data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.1", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : a.extend({}, e.data(), {trigger: this});
        c.call(f, h)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function () {
            var d = a(this), e = c(d), f = {relatedTarget: this};
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function d(b) {
        return this.each(function () {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }

    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.1", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {relatedTarget: this};
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function (b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d), g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which)return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.divider):visible a", i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), +function (a) {
    "use strict";
    function b(b, d) {
        return this.each(function () {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }

    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.1", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.options.backdrop && d.adjustBackdrop(), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {relatedTarget: b});
            e ? d.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function (a) {
                    a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, c.prototype.adjustBackdrop = function () {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, c.prototype.checkScrollbar = function () {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b, g = f && f.selector;
            (e || "destroy" != b) && (g ? (e || d.data("bs.tooltip", e = {}), e[g] || (e[g] = new c(this, f))) : e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.1", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, c.prototype.init = function (b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g)this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible") ? void(c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.options.container ? a(this.options.container) : this.$element.parent(), p = this.getPosition(o);
                h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var q = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(q, h);
            var r = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({top: Math.round(a.top), left: Math.round(a.left)})
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }

        var e = this, f = this.tip(), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {width: e.right - e.left, height: e.bottom - e.top}));
        var f = d ? {
            top: 0,
            left: 0
        } : b.offset(), g = {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()}, h = d ? {
            width: a(window).width(),
            height: a(window).height()
        } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {top: b.top + b.height / 2 - d / 2, left: b.left - c} : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {top: 0, left: 0};
        if (!this.$viewport)return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type)
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b, g = f && f.selector;
            (e || "destroy" != b) && (g ? (e || d.data("bs.popover", e = {}), e[g] || (e[g] = new c(this, f))) : e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.1", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, c.prototype.tip = function () {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }

    b.VERSION = "3.3.1", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function () {
        var b = "offset", c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function () {
            var d = a(this), e = d.data("target") || d.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            d.offsets.push(this[0]), d.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d)return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])return this.activeTarget = null, this.clear();
        for (a = e.length; a--;)g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.1", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {relatedTarget: b[0]}), g = a.Event("show.bs.tab", {relatedTarget: e[0]});
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({type: "hidden.bs.tab", relatedTarget: b[0]}), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }

        var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.1", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed)return c > e ? "top" : !1;
        if ("bottom" == this.affixed)return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
        return null != c && c >= i ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = a("body").height();
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented())return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({top: g - b - f})
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery), function () {
    "use strict";
    var a = this, b = a.Chart, c = function (a) {
        this.canvas = a.canvas, this.ctx = a;
        this.width = a.canvas.width, this.height = a.canvas.height;
        return this.aspectRatio = this.width / this.height, d.retinaScale(this), this
    };
    c.defaults = {
        global: {
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            onAnimationProgress: function () {
            },
            onAnimationComplete: function () {
            }
        }
    }, c.types = {};
    var d = c.helpers = {}, e = d.each = function (a, b, c) {
        var d = Array.prototype.slice.call(arguments, 3);
        if (a)if (a.length === +a.length) {
            var e;
            for (e = 0; e < a.length; e++)b.apply(c, [a[e], e].concat(d))
        } else for (var f in a)b.apply(c, [a[f], f].concat(d))
    }, f = d.clone = function (a) {
        var b = {};
        return e(a, function (c, d) {
            a.hasOwnProperty(d) && (b[d] = c)
        }), b
    }, g = d.extend = function (a) {
        return e(Array.prototype.slice.call(arguments, 1), function (b) {
            e(b, function (c, d) {
                b.hasOwnProperty(d) && (a[d] = c)
            })
        }), a
    }, h = d.merge = function () {
        var a = Array.prototype.slice.call(arguments, 0);
        return a.unshift({}), g.apply(null, a)
    }, i = d.indexOf = function (a, b) {
        if (Array.prototype.indexOf)return a.indexOf(b);
        for (var c = 0; c < a.length; c++)if (a[c] === b)return c;
        return -1
    }, j = (d.where = function (a, b) {
        var c = [];
        return d.each(a, function (a) {
            b(a) && c.push(a)
        }), c
    }, d.findNextWhere = function (a, b, c) {
        c || (c = -1);
        for (var d = c + 1; d < a.length; d++) {
            var e = a[d];
            if (b(e))return e
        }
    }, d.findPreviousWhere = function (a, b, c) {
        c || (c = a.length);
        for (var d = c - 1; d >= 0; d--) {
            var e = a[d];
            if (b(e))return e
        }
    }, d.inherits = function (a) {
        var b = this, c = a && a.hasOwnProperty("constructor") ? a.constructor : function () {
            return b.apply(this, arguments)
        }, d = function () {
            this.constructor = c
        };
        return d.prototype = b.prototype, c.prototype = new d, c.extend = j, a && g(c.prototype, a), c.__super__ = b.prototype, c
    }), k = d.noop = function () {
    }, l = d.uid = function () {
        var a = 0;
        return function () {
            return "chart-" + a++
        }
    }(), m = d.warn = function (a) {
        window.console && "function" == typeof window.console.warn && console.warn(a)
    }, n = d.amd = "function" == typeof a.define && a.define.amd, o = d.isNumber = function (a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    }, p = d.max = function (a) {
        return Math.max.apply(Math, a)
    }, q = d.min = function (a) {
        return Math.min.apply(Math, a)
    }, r = (d.cap = function (a, b, c) {
        if (o(b)) {
            if (a > b)return b
        } else if (o(c) && c > a)return c;
        return a
    }, d.getDecimalPlaces = function (a) {
        return a % 1 !== 0 && o(a) ? a.toString().split(".")[1].length : 0
    }), s = d.radians = function (a) {
        return a * (Math.PI / 180)
    }, t = (d.getAngleFromPoint = function (a, b) {
        var c = b.x - a.x, d = b.y - a.y, e = Math.sqrt(c * c + d * d), f = 2 * Math.PI + Math.atan2(d, c);
        return 0 > c && 0 > d && (f += 2 * Math.PI), {angle: f, distance: e}
    }, d.aliasPixel = function (a) {
        return a % 2 === 0 ? 0 : .5
    }), u = (d.splineCurve = function (a, b, c, d) {
        var e = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)), f = Math.sqrt(Math.pow(c.x - b.x, 2) + Math.pow(c.y - b.y, 2)), g = d * e / (e + f), h = d * f / (e + f);
        return {
            inner: {x: b.x - g * (c.x - a.x), y: b.y - g * (c.y - a.y)},
            outer: {x: b.x + h * (c.x - a.x), y: b.y + h * (c.y - a.y)}
        }
    }, d.calculateOrderOfMagnitude = function (a) {
        return Math.floor(Math.log(a) / Math.LN10)
    }), v = (d.calculateScaleRange = function (a, b, c, d, e) {
        var f = 2, g = Math.floor(b / (1.5 * c)), h = f >= g, i = p(a), j = q(a);
        i === j && (i += .5, j >= .5 && !d ? j -= .5 : i += .5);
        for (var k = Math.abs(i - j), l = u(k), m = Math.ceil(i / (1 * Math.pow(10, l))) * Math.pow(10, l), n = d ? 0 : Math.floor(j / (1 * Math.pow(10, l))) * Math.pow(10, l), o = m - n, r = Math.pow(10, l), s = Math.round(o / r); (s > g || g > 2 * s) && !h;)if (s > g)r *= 2, s = Math.round(o / r), s % 1 !== 0 && (h = !0); else if (e && l >= 0) {
            if (r / 2 % 1 !== 0)break;
            r /= 2, s = Math.round(o / r)
        } else r /= 2, s = Math.round(o / r);
        return h && (s = f, r = o / s), {steps: s, stepValue: r, min: n, max: n + s * r}
    }, d.template = function (a, b) {
        function c(a, b) {
            var c = /\W/.test(a) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : d[a] = d[a];
            return b ? c(b) : c
        }

        if (a instanceof Function)return a(b);
        var d = {};
        return c(a, b)
    }), w = (d.generateLabels = function (a, b, c, d) {
        var f = new Array(b);
        return labelTemplateString && e(f, function (b, e) {
            f[e] = v(a, {value: c + d * (e + 1)})
        }), f
    }, d.easingEffects = {
        linear: function (a) {
            return a
        }, easeInQuad: function (a) {
            return a * a
        }, easeOutQuad: function (a) {
            return -1 * a * (a - 2)
        }, easeInOutQuad: function (a) {
            return (a /= .5) < 1 ? .5 * a * a : -0.5 * (--a * (a - 2) - 1)
        }, easeInCubic: function (a) {
            return a * a * a
        }, easeOutCubic: function (a) {
            return 1 * ((a = a / 1 - 1) * a * a + 1)
        }, easeInOutCubic: function (a) {
            return (a /= .5) < 1 ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2)
        }, easeInQuart: function (a) {
            return a * a * a * a
        }, easeOutQuart: function (a) {
            return -1 * ((a = a / 1 - 1) * a * a * a - 1)
        }, easeInOutQuart: function (a) {
            return (a /= .5) < 1 ? .5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2)
        }, easeInQuint: function (a) {
            return 1 * (a /= 1) * a * a * a * a
        }, easeOutQuint: function (a) {
            return 1 * ((a = a / 1 - 1) * a * a * a * a + 1)
        }, easeInOutQuint: function (a) {
            return (a /= .5) < 1 ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2)
        }, easeInSine: function (a) {
            return -1 * Math.cos(a / 1 * (Math.PI / 2)) + 1
        }, easeOutSine: function (a) {
            return 1 * Math.sin(a / 1 * (Math.PI / 2))
        }, easeInOutSine: function (a) {
            return -0.5 * (Math.cos(Math.PI * a / 1) - 1)
        }, easeInExpo: function (a) {
            return 0 === a ? 1 : 1 * Math.pow(2, 10 * (a / 1 - 1))
        }, easeOutExpo: function (a) {
            return 1 === a ? 1 : 1 * (-Math.pow(2, -10 * a / 1) + 1)
        }, easeInOutExpo: function (a) {
            return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2)
        }, easeInCirc: function (a) {
            return a >= 1 ? a : -1 * (Math.sqrt(1 - (a /= 1) * a) - 1)
        }, easeOutCirc: function (a) {
            return 1 * Math.sqrt(1 - (a = a / 1 - 1) * a)
        }, easeInOutCirc: function (a) {
            return (a /= .5) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        }, easeInElastic: function (a) {
            var b = 1.70158, c = 0, d = 1;
            return 0 === a ? 0 : 1 == (a /= 1) ? 1 : (c || (c = .3), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), -(d * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c)))
        }, easeOutElastic: function (a) {
            var b = 1.70158, c = 0, d = 1;
            return 0 === a ? 0 : 1 == (a /= 1) ? 1 : (c || (c = .3), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), d * Math.pow(2, -10 * a) * Math.sin(2 * (1 * a - b) * Math.PI / c) + 1)
        }, easeInOutElastic: function (a) {
            var b = 1.70158, c = 0, d = 1;
            return 0 === a ? 0 : 2 == (a /= .5) ? 1 : (c || (c = .3 * 1.5), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), 1 > a ? -.5 * d * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c) : d * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c) * .5 + 1)
        }, easeInBack: function (a) {
            var b = 1.70158;
            return 1 * (a /= 1) * a * ((b + 1) * a - b)
        }, easeOutBack: function (a) {
            var b = 1.70158;
            return 1 * ((a = a / 1 - 1) * a * ((b + 1) * a + b) + 1)
        }, easeInOutBack: function (a) {
            var b = 1.70158;
            return (a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        }, easeInBounce: function (a) {
            return 1 - w.easeOutBounce(1 - a)
        }, easeOutBounce: function (a) {
            return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : 2 / 2.75 > a ? 1 * (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 * (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
        }, easeInOutBounce: function (a) {
            return .5 > a ? .5 * w.easeInBounce(2 * a) : .5 * w.easeOutBounce(2 * a - 1) + .5
        }
    }), x = d.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            return window.setTimeout(a, 1e3 / 60)
        }
    }(), y = (d.cancelAnimFrame = function () {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (a) {
            return window.clearTimeout(a, 1e3 / 60)
        }
    }(), d.animationLoop = function (a, b, c, d, e, f) {
        var g = 0, h = w[c] || w.linear, i = function () {
            g++;
            var c = g / b, j = h(c);
            a.call(f, j, c, g), d.call(f, j, c), b > g ? f.animationFrame = x(i) : e.apply(f)
        };
        x(i)
    }, d.getRelativePosition = function (a) {
        var b, c, d = a.originalEvent || a, e = a.currentTarget || a.srcElement, f = e.getBoundingClientRect();
        return d.touches ? (b = d.touches[0].clientX - f.left, c = d.touches[0].clientY - f.top) : (b = d.clientX - f.left, c = d.clientY - f.top), {
            x: b,
            y: c
        }
    }, d.addEvent = function (a, b, c) {
        a.addEventListener ? a.addEventListener(b, c) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
    }), z = d.removeEvent = function (a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent ? a.detachEvent("on" + b, c) : a["on" + b] = k
    }, A = (d.bindEvents = function (a, b, c) {
        a.events || (a.events = {}), e(b, function (b) {
            a.events[b] = function () {
                c.apply(a, arguments)
            }, y(a.chart.canvas, b, a.events[b])
        })
    }, d.unbindEvents = function (a, b) {
        e(b, function (b, c) {
            z(a.chart.canvas, c, b)
        })
    }), B = d.getMaximumWidth = function (a) {
        var b = a.parentNode;
        return b.clientWidth
    }, C = d.getMaximumHeight = function (a) {
        var b = a.parentNode;
        return b.clientHeight
    }, D = (d.getMaximumSize = d.getMaximumWidth, d.retinaScale = function (a) {
        var b = a.ctx, c = a.canvas.width, d = a.canvas.height;
        window.devicePixelRatio && (b.canvas.style.width = c + "px", b.canvas.style.height = d + "px", b.canvas.height = d * window.devicePixelRatio, b.canvas.width = c * window.devicePixelRatio, b.scale(window.devicePixelRatio, window.devicePixelRatio))
    }), E = d.clear = function (a) {
        a.ctx.clearRect(0, 0, a.width, a.height)
    }, F = d.fontString = function (a, b, c) {
        return b + " " + a + "px " + c
    }, G = d.longestText = function (a, b, c) {
        a.font = b;
        var d = 0;
        return e(c, function (b) {
            var c = a.measureText(b).width;
            d = c > d ? c : d
        }), d
    }, H = d.drawRoundedRectangle = function (a, b, c, d, e, f) {
        a.beginPath(), a.moveTo(b + f, c), a.lineTo(b + d - f, c), a.quadraticCurveTo(b + d, c, b + d, c + f), a.lineTo(b + d, c + e - f), a.quadraticCurveTo(b + d, c + e, b + d - f, c + e), a.lineTo(b + f, c + e), a.quadraticCurveTo(b, c + e, b, c + e - f), a.lineTo(b, c + f), a.quadraticCurveTo(b, c, b + f, c), a.closePath()
    };
    c.instances = {}, c.Type = function (a, b, d) {
        this.options = b, this.chart = d, this.id = l(), c.instances[this.id] = this, b.responsive && this.resize(), this.initialize.call(this, a)
    }, g(c.Type.prototype, {
        initialize: function () {
            return this
        }, clear: function () {
            return E(this.chart), this
        }, stop: function () {
            return d.cancelAnimFrame.call(a, this.animationFrame), this
        }, resize: function (a) {
            this.stop();
            var b = this.chart.canvas, c = B(this.chart.canvas), d = this.options.maintainAspectRatio ? c / this.chart.aspectRatio : C(this.chart.canvas);
            return b.width = this.chart.width = c, b.height = this.chart.height = d, D(this.chart), "function" == typeof a && a.apply(this, Array.prototype.slice.call(arguments, 1)), this
        }, reflow: k, render: function (a) {
            return a && this.reflow(), this.options.animation && !a ? d.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
        }, generateLegend: function () {
            return v(this.options.legendTemplate, this)
        }, destroy: function () {
            this.clear(), A(this, this.events), delete c.instances[this.id]
        }, showTooltip: function (a, b) {
            "undefined" == typeof this.activeElements && (this.activeElements = []);
            var f = function (a) {
                var b = !1;
                return a.length !== this.activeElements.length ? b = !0 : (e(a, function (a, c) {
                    a !== this.activeElements[c] && (b = !0)
                }, this), b)
            }.call(this, a);
            if (f || b) {
                if (this.activeElements = a, this.draw(), a.length > 0)if (this.datasets && this.datasets.length > 1) {
                    for (var g, h, j = this.datasets.length - 1; j >= 0 && (g = this.datasets[j].points || this.datasets[j].bars || this.datasets[j].segments, h = i(g, a[0]), -1 === h); j--);
                    var k = [], l = [], m = function () {
                        var a, b, c, e, f, g = [], i = [], j = [];
                        return d.each(this.datasets, function (b) {
                            a = b.points || b.bars || b.segments, a[h] && a[h].hasValue() && g.push(a[h])
                        }), d.each(g, function (a) {
                            i.push(a.x), j.push(a.y), k.push(d.template(this.options.multiTooltipTemplate, a)), l.push({
                                fill: a._saved.fillColor || a.fillColor,
                                stroke: a._saved.strokeColor || a.strokeColor
                            })
                        }, this), f = q(j), c = p(j), e = q(i), b = p(i), {
                            x: e > this.chart.width / 2 ? e : b,
                            y: (f + c) / 2
                        }
                    }.call(this, h);
                    new c.MultiTooltip({
                        x: m.x,
                        y: m.y,
                        xPadding: this.options.tooltipXPadding,
                        yPadding: this.options.tooltipYPadding,
                        xOffset: this.options.tooltipXOffset,
                        fillColor: this.options.tooltipFillColor,
                        textColor: this.options.tooltipFontColor,
                        fontFamily: this.options.tooltipFontFamily,
                        fontStyle: this.options.tooltipFontStyle,
                        fontSize: this.options.tooltipFontSize,
                        titleTextColor: this.options.tooltipTitleFontColor,
                        titleFontFamily: this.options.tooltipTitleFontFamily,
                        titleFontStyle: this.options.tooltipTitleFontStyle,
                        titleFontSize: this.options.tooltipTitleFontSize,
                        cornerRadius: this.options.tooltipCornerRadius,
                        labels: k,
                        legendColors: l,
                        legendColorBackground: this.options.multiTooltipKeyBackground,
                        title: a[0].label,
                        chart: this.chart,
                        ctx: this.chart.ctx
                    }).draw()
                } else e(a, function (a) {
                    var b = a.tooltipPosition();
                    new c.Tooltip({
                        x: Math.round(b.x),
                        y: Math.round(b.y),
                        xPadding: this.options.tooltipXPadding,
                        yPadding: this.options.tooltipYPadding,
                        fillColor: this.options.tooltipFillColor,
                        textColor: this.options.tooltipFontColor,
                        fontFamily: this.options.tooltipFontFamily,
                        fontStyle: this.options.tooltipFontStyle,
                        fontSize: this.options.tooltipFontSize,
                        caretHeight: this.options.tooltipCaretSize,
                        cornerRadius: this.options.tooltipCornerRadius,
                        text: v(this.options.tooltipTemplate, a),
                        chart: this.chart
                    }).draw()
                }, this);
                return this
            }
        }, toBase64Image: function () {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    }), c.Type.extend = function (a) {
        var b = this, d = function () {
            return b.apply(this, arguments)
        };
        if (d.prototype = f(b.prototype), g(d.prototype, a), d.extend = c.Type.extend, a.name || b.prototype.name) {
            var e = a.name || b.prototype.name, i = c.defaults[b.prototype.name] ? f(c.defaults[b.prototype.name]) : {};
            c.defaults[e] = g(i, a.defaults), c.types[e] = d, c.prototype[e] = function (a, b) {
                var f = h(c.defaults.global, c.defaults[e], b || {});
                return new d(a, f, this)
            }
        } else m("Name not provided for this chart, so it hasn't been registered");
        return b
    }, c.Element = function (a) {
        g(this, a), this.initialize.apply(this, arguments), this.save()
    }, g(c.Element.prototype, {
        initialize: function () {
        }, restore: function (a) {
            return a ? e(a, function (a) {
                this[a] = this._saved[a]
            }, this) : g(this, this._saved), this
        }, save: function () {
            return this._saved = f(this), delete this._saved._saved, this
        }, update: function (a) {
            return e(a, function (a, b) {
                this._saved[b] = this[b], this[b] = a
            }, this), this
        }, transition: function (a, b) {
            return e(a, function (a, c) {
                this[c] = (a - this._saved[c]) * b + this._saved[c]
            }, this), this
        }, tooltipPosition: function () {
            return {x: this.x, y: this.y}
        }, hasValue: function () {
            return o(this.value)
        }
    }), c.Element.extend = j, c.Point = c.Element.extend({
        display: !0, inRange: function (a, b) {
            var c = this.hitDetectionRadius + this.radius;
            return Math.pow(a - this.x, 2) + Math.pow(b - this.y, 2) < Math.pow(c, 2)
        }, draw: function () {
            if (this.display) {
                var a = this.ctx;
                a.beginPath(), a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), a.closePath(), a.strokeStyle = this.strokeColor, a.lineWidth = this.strokeWidth, a.fillStyle = this.fillColor, a.fill(), a.stroke()
            }
        }
    }), c.Arc = c.Element.extend({
        inRange: function (a, b) {
            var c = d.getAngleFromPoint(this, {
                x: a,
                y: b
            }), e = c.angle >= this.startAngle && c.angle <= this.endAngle, f = c.distance >= this.innerRadius && c.distance <= this.outerRadius;
            return e && f
        }, tooltipPosition: function () {
            var a = this.startAngle + (this.endAngle - this.startAngle) / 2, b = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {x: this.x + Math.cos(a) * b, y: this.y + Math.sin(a) * b}
        }, draw: function (a) {
            var b = this.ctx;
            b.beginPath(), b.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), b.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), b.closePath(), b.strokeStyle = this.strokeColor, b.lineWidth = this.strokeWidth, b.fillStyle = this.fillColor, b.fill(), b.lineJoin = "bevel", this.showStroke && b.stroke()
        }
    }), c.Rectangle = c.Element.extend({
        draw: function () {
            var a = this.ctx, b = this.width / 2, c = this.x - b, d = this.x + b, e = this.base - (this.base - this.y), f = this.strokeWidth / 2;
            this.showStroke && (c += f, d -= f, e += f), a.beginPath(), a.fillStyle = this.fillColor, a.strokeStyle = this.strokeColor, a.lineWidth = this.strokeWidth, a.moveTo(c, this.base), a.lineTo(c, e), a.lineTo(d, e), a.lineTo(d, this.base), a.fill(), this.showStroke && a.stroke()
        }, height: function () {
            return this.base - this.y
        }, inRange: function (a, b) {
            return a >= this.x - this.width / 2 && a <= this.x + this.width / 2 && b >= this.y && b <= this.base
        }
    }), c.Tooltip = c.Element.extend({
        draw: function () {
            var a = this.chart.ctx;
            a.font = F(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
            var b = 2, c = a.measureText(this.text).width + 2 * this.xPadding, d = this.fontSize + 2 * this.yPadding, e = d + this.caretHeight + b;
            this.x + c / 2 > this.chart.width ? this.xAlign = "left" : this.x - c / 2 < 0 && (this.xAlign = "right"), this.y - e < 0 && (this.yAlign = "below");
            var f = this.x - c / 2, g = this.y - e;
            switch (a.fillStyle = this.fillColor, this.yAlign) {
                case"above":
                    a.beginPath(), a.moveTo(this.x, this.y - b), a.lineTo(this.x + this.caretHeight, this.y - (b + this.caretHeight)), a.lineTo(this.x - this.caretHeight, this.y - (b + this.caretHeight)), a.closePath(), a.fill();
                    break;
                case"below":
                    g = this.y + b + this.caretHeight, a.beginPath(), a.moveTo(this.x, this.y + b), a.lineTo(this.x + this.caretHeight, this.y + b + this.caretHeight), a.lineTo(this.x - this.caretHeight, this.y + b + this.caretHeight), a.closePath(), a.fill()
            }
            switch (this.xAlign) {
                case"left":
                    f = this.x - c + (this.cornerRadius + this.caretHeight);
                    break;
                case"right":
                    f = this.x - (this.cornerRadius + this.caretHeight)
            }
            H(a, f, g, c, d, this.cornerRadius), a.fill(), a.fillStyle = this.textColor, a.textAlign = "center", a.textBaseline = "middle", a.fillText(this.text, f + c / 2, g + d / 2)
        }
    }), c.MultiTooltip = c.Element.extend({
        initialize: function () {
            this.font = F(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = F(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
            var a = this.ctx.measureText(this.title).width, b = G(this.ctx, this.font, this.labels) + this.fontSize + 3, c = p([b, a]);
            this.width = c + 2 * this.xPadding;
            var d = this.height / 2;
            this.y - d < 0 ? this.y = d : this.y + d > this.chart.height && (this.y = this.chart.height - d), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
        }, getLineHeight: function (a) {
            var b = this.y - this.height / 2 + this.yPadding, c = a - 1;
            return 0 === a ? b + this.titleFontSize / 2 : b + (1.5 * this.fontSize * c + this.fontSize / 2) + 1.5 * this.titleFontSize
        }, draw: function () {
            H(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
            var a = this.ctx;
            a.fillStyle = this.fillColor, a.fill(), a.closePath(), a.textAlign = "left", a.textBaseline = "middle", a.fillStyle = this.titleTextColor, a.font = this.titleFont, a.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), a.font = this.font, d.each(this.labels, function (b, c) {
                a.fillStyle = this.textColor, a.fillText(b, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(c + 1)), a.fillStyle = this.legendColorBackground, a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize), a.fillStyle = this.legendColors[c].fill, a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
            }, this)
        }
    }), c.Scale = c.Element.extend({
        initialize: function () {
            this.fit()
        }, buildYLabels: function () {
            this.yLabels = [];
            for (var a = r(this.stepValue), b = 0; b <= this.steps; b++)this.yLabels.push(v(this.templateString, {value: (this.min + b * this.stepValue).toFixed(a)}));
            this.yLabelWidth = this.display && this.showLabels ? G(this.ctx, this.font, this.yLabels) : 0
        }, addXLabel: function (a) {
            this.xLabels.push(a), this.valuesCount++, this.fit()
        }, removeXLabel: function () {
            this.xLabels.shift(), this.valuesCount--, this.fit()
        }, fit: function () {
            this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
            var a, b = this.endPoint - this.startPoint;
            for (this.calculateYRange(b), this.buildYLabels(), this.calculateXLabelRotation(); b > this.endPoint - this.startPoint;)b = this.endPoint - this.startPoint, a = this.yLabelWidth, this.calculateYRange(b), this.buildYLabels(), a < this.yLabelWidth && this.calculateXLabelRotation()
        }, calculateXLabelRotation: function () {
            this.ctx.font = this.font;
            var a, b, c = this.ctx.measureText(this.xLabels[0]).width, d = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = d / 2 + 3, this.xScalePaddingLeft = c / 2 > this.yLabelWidth + 10 ? c / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                var e, f = G(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = f;
                for (var g = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > g && 0 === this.xLabelRotation || this.xLabelWidth > g && this.xLabelRotation <= 90 && this.xLabelRotation > 0;)e = Math.cos(s(this.xLabelRotation)), a = e * c, b = e * d, a + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = a + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = e * f;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(s(this.xLabelRotation)) * f + 3)
            } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
        }, calculateYRange: k, drawingArea: function () {
            return this.startPoint - this.endPoint
        }, calculateY: function (a) {
            var b = this.drawingArea() / (this.min - this.max);
            return this.endPoint - b * (a - this.min)
        }, calculateX: function (a) {
            var b = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)), c = b / (this.valuesCount - (this.offsetGridLines ? 0 : 1)), d = c * a + this.xScalePaddingLeft;
            return this.offsetGridLines && (d += c / 2), Math.round(d)
        }, update: function (a) {
            d.extend(this, a), this.fit()
        }, draw: function () {
            var a = this.ctx, b = (this.endPoint - this.startPoint) / this.steps, c = Math.round(this.xScalePaddingLeft);
            this.display && (a.fillStyle = this.textColor, a.font = this.font, e(this.yLabels, function (e, f) {
                var g = this.endPoint - b * f, h = Math.round(g);
                a.textAlign = "right", a.textBaseline = "middle", this.showLabels && a.fillText(e, c - 10, g), a.beginPath(), f > 0 ? (a.lineWidth = this.gridLineWidth, a.strokeStyle = this.gridLineColor) : (a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor), h += d.aliasPixel(a.lineWidth), a.moveTo(c, h), a.lineTo(this.width, h), a.stroke(), a.closePath(), a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor, a.beginPath(), a.moveTo(c - 5, h), a.lineTo(c, h), a.stroke(), a.closePath()
            }, this), e(this.xLabels, function (b, c) {
                var d = this.calculateX(c) + t(this.lineWidth), e = this.calculateX(c - (this.offsetGridLines ? .5 : 0)) + t(this.lineWidth), f = this.xLabelRotation > 0;
                a.beginPath(), c > 0 ? (a.lineWidth = this.gridLineWidth, a.strokeStyle = this.gridLineColor) : (a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor), a.moveTo(e, this.endPoint), a.lineTo(e, this.startPoint - 3), a.stroke(), a.closePath(), a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor, a.beginPath(), a.moveTo(e, this.endPoint), a.lineTo(e, this.endPoint + 5), a.stroke(), a.closePath(), a.save(), a.translate(d, f ? this.endPoint + 12 : this.endPoint + 8), a.rotate(-1 * s(this.xLabelRotation)), a.font = this.font, a.textAlign = f ? "right" : "center", a.textBaseline = f ? "middle" : "top", a.fillText(b, 0, 0), a.restore()
            }, this))
        }
    }), c.RadialScale = c.Element.extend({
        initialize: function () {
            this.size = q([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
        }, calculateCenterOffset: function (a) {
            var b = this.drawingArea / (this.max - this.min);
            return (a - this.min) * b
        }, update: function () {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
        }, buildYLabels: function () {
            this.yLabels = [];
            for (var a = r(this.stepValue), b = 0; b <= this.steps; b++)this.yLabels.push(v(this.templateString, {value: (this.min + b * this.stepValue).toFixed(a)}))
        }, getCircumference: function () {
            return 2 * Math.PI / this.valuesCount
        }, setScaleSize: function () {
            var a, b, c, d, e, f, g, h, i, j, k, l, m = q([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]), n = this.width, p = 0;
            for (this.ctx.font = F(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), b = 0; b < this.valuesCount; b++)a = this.getPointPosition(b, m), c = this.ctx.measureText(v(this.templateString, {value: this.labels[b]})).width + 5, 0 === b || b === this.valuesCount / 2 ? (d = c / 2, a.x + d > n && (n = a.x + d, e = b), a.x - d < p && (p = a.x - d, g = b)) : b < this.valuesCount / 2 ? a.x + c > n && (n = a.x + c, e = b) : b > this.valuesCount / 2 && a.x - c < p && (p = a.x - c, g = b);
            i = p, j = Math.ceil(n - this.width), f = this.getIndexAngle(e), h = this.getIndexAngle(g), k = j / Math.sin(f + Math.PI / 2), l = i / Math.sin(h + Math.PI / 2), k = o(k) ? k : 0, l = o(l) ? l : 0, this.drawingArea = m - (l + k) / 2, this.setCenterPoint(l, k)
        }, setCenterPoint: function (a, b) {
            var c = this.width - b - this.drawingArea, d = a + this.drawingArea;
            this.xCenter = (d + c) / 2, this.yCenter = this.height / 2
        }, getIndexAngle: function (a) {
            var b = 2 * Math.PI / this.valuesCount;
            return a * b - Math.PI / 2
        }, getPointPosition: function (a, b) {
            var c = this.getIndexAngle(a);
            return {x: Math.cos(c) * b + this.xCenter, y: Math.sin(c) * b + this.yCenter}
        }, draw: function () {
            if (this.display) {
                var a = this.ctx;
                if (e(this.yLabels, function (b, c) {
                        if (c > 0) {
                            var d, e = c * (this.drawingArea / this.steps), f = this.yCenter - e;
                            if (this.lineWidth > 0)if (a.strokeStyle = this.lineColor, a.lineWidth = this.lineWidth, this.lineArc)a.beginPath(), a.arc(this.xCenter, this.yCenter, e, 0, 2 * Math.PI), a.closePath(), a.stroke(); else {
                                a.beginPath();
                                for (var g = 0; g < this.valuesCount; g++)d = this.getPointPosition(g, this.calculateCenterOffset(this.min + c * this.stepValue)), 0 === g ? a.moveTo(d.x, d.y) : a.lineTo(d.x, d.y);
                                a.closePath(), a.stroke()
                            }
                            if (this.showLabels) {
                                if (a.font = F(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                    var h = a.measureText(b).width;
                                    a.fillStyle = this.backdropColor, a.fillRect(this.xCenter - h / 2 - this.backdropPaddingX, f - this.fontSize / 2 - this.backdropPaddingY, h + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                }
                                a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = this.fontColor, a.fillText(b, this.xCenter, f)
                            }
                        }
                    }, this), !this.lineArc) {
                    a.lineWidth = this.angleLineWidth, a.strokeStyle = this.angleLineColor;
                    for (var b = this.valuesCount - 1; b >= 0; b--) {
                        if (this.angleLineWidth > 0) {
                            var c = this.getPointPosition(b, this.calculateCenterOffset(this.max));
                            a.beginPath(), a.moveTo(this.xCenter, this.yCenter), a.lineTo(c.x, c.y), a.stroke(), a.closePath()
                        }
                        var d = this.getPointPosition(b, this.calculateCenterOffset(this.max) + 5);
                        a.font = F(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), a.fillStyle = this.pointLabelFontColor;
                        var f = this.labels.length, g = this.labels.length / 2, h = g / 2, i = h > b || b > f - h, j = b === h || b === f - h;
                        a.textAlign = 0 === b ? "center" : b === g ? "center" : g > b ? "left" : "right", a.textBaseline = j ? "middle" : i ? "bottom" : "top", a.fillText(this.labels[b], d.x, d.y)
                    }
                }
            }
        }
    }), d.addEvent(window, "resize", function () {
        var a;
        return function () {
            clearTimeout(a), a = setTimeout(function () {
                e(c.instances, function (a) {
                    a.options.responsive && a.resize(a.render, !0)
                })
            }, 50)
        }
    }()), n ? define(function () {
        return c
    }) : "object" == typeof module && module.exports && (module.exports = c), a.Chart = c, c.noConflict = function () {
        return a.Chart = b, c
    }
}.call(this), function () {
    "use strict";
    var a = this, b = a.Chart, c = b.helpers, d = {
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        barShowStroke: !0,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    b.Type.extend({
        name: "Bar", defaults: d, initialize: function (a) {
            var d = this.options;
            this.ScaleClass = b.Scale.extend({
                offsetGridLines: !0, calculateBarX: function (a, b, c) {
                    var e = this.calculateBaseWidth(), f = this.calculateX(c) - e / 2, g = this.calculateBarWidth(a);
                    return f + g * b + b * d.barDatasetSpacing + g / 2
                }, calculateBaseWidth: function () {
                    return this.calculateX(1) - this.calculateX(0) - 2 * d.barValueSpacing
                }, calculateBarWidth: function (a) {
                    var b = this.calculateBaseWidth() - (a - 1) * d.barDatasetSpacing;
                    return b / a
                }
            }), this.datasets = [], this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function (a) {
                var b = "mouseout" !== a.type ? this.getBarsAtEvent(a) : [];
                this.eachBars(function (a) {
                    a.restore(["fillColor", "strokeColor"])
                }), c.each(b, function (a) {
                    a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                }), this.showTooltip(b)
            }), this.BarClass = b.Rectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            }), c.each(a.datasets, function (b) {
                var d = {label: b.label || null, fillColor: b.fillColor, strokeColor: b.strokeColor, bars: []};
                this.datasets.push(d), c.each(b.data, function (c, e) {
                    d.bars.push(new this.BarClass({
                        value: c,
                        label: a.labels[e],
                        datasetLabel: b.label,
                        strokeColor: b.strokeColor,
                        fillColor: b.fillColor,
                        highlightFill: b.highlightFill || b.fillColor,
                        highlightStroke: b.highlightStroke || b.strokeColor
                    }))
                }, this)
            }, this), this.buildScale(a.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function (a, b, d) {
                c.extend(a, {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, d, b),
                    y: this.scale.endPoint
                }), a.save()
            }, this), this.render()
        }, update: function () {
            this.scale.update(), c.each(this.activeElements, function (a) {
                a.restore(["fillColor", "strokeColor"])
            }), this.eachBars(function (a) {
                a.save()
            }), this.render()
        }, eachBars: function (a) {
            c.each(this.datasets, function (b, d) {
                c.each(b.bars, a, this, d)
            }, this)
        }, getBarsAtEvent: function (a) {
            for (var b, d = [], e = c.getRelativePosition(a), f = function (a) {
                d.push(a.bars[b])
            }, g = 0; g < this.datasets.length; g++)for (b = 0; b < this.datasets[g].bars.length; b++)if (this.datasets[g].bars[b].inRange(e.x, e.y))return c.each(this.datasets, f), d;
            return d
        }, buildScale: function (a) {
            var b = this, d = function () {
                var a = [];
                return b.eachBars(function (b) {
                    a.push(b.value)
                }), a
            }, e = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: a.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function (a) {
                    var b = c.calculateScaleRange(d(), a, this.fontSize, this.beginAtZero, this.integersOnly);
                    c.extend(this, b)
                },
                xLabels: a,
                font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && c.extend(e, {
                calculateYRange: c.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }), this.scale = new this.ScaleClass(e)
        }, addData: function (a, b) {
            c.each(a, function (a, c) {
                this.datasets[c].bars.push(new this.BarClass({
                    value: a,
                    label: b,
                    x: this.scale.calculateBarX(this.datasets.length, c, this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[c].strokeColor,
                    fillColor: this.datasets[c].fillColor
                }))
            }, this), this.scale.addXLabel(b), this.update()
        }, removeData: function () {
            this.scale.removeXLabel(), c.each(this.datasets, function (a) {
                a.bars.shift()
            }, this), this.update()
        }, reflow: function () {
            c.extend(this.BarClass.prototype, {y: this.scale.endPoint, base: this.scale.endPoint});
            var a = c.extend({height: this.chart.height, width: this.chart.width});
            this.scale.update(a)
        }, draw: function (a) {
            var b = a || 1;
            this.clear();
            this.chart.ctx;
            this.scale.draw(b), c.each(this.datasets, function (a, d) {
                c.each(a.bars, function (a, c) {
                    a.hasValue() && (a.base = this.scale.endPoint, a.transition({
                        x: this.scale.calculateBarX(this.datasets.length, d, c),
                        y: this.scale.calculateY(a.value),
                        width: this.scale.calculateBarWidth(this.datasets.length)
                    }, b).draw())
                }, this)
            }, this)
        }
    })
}.call(this), function () {
    "use strict";
    var a = this, b = a.Chart, c = b.helpers, d = {
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    b.Type.extend({
        name: "Doughnut", defaults: d, initialize: function (a) {
            this.segments = [], this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = b.Arc.extend({
                ctx: this.chart.ctx,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function (a) {
                var b = "mouseout" !== a.type ? this.getSegmentsAtEvent(a) : [];
                c.each(this.segments, function (a) {
                    a.restore(["fillColor"])
                }), c.each(b, function (a) {
                    a.fillColor = a.highlightColor
                }), this.showTooltip(b)
            }), this.calculateTotal(a), c.each(a, function (a, b) {
                this.addData(a, b, !0)
            }, this), this.render()
        }, getSegmentsAtEvent: function (a) {
            var b = [], d = c.getRelativePosition(a);
            return c.each(this.segments, function (a) {
                a.inRange(d.x, d.y) && b.push(a)
            }, this), b
        }, addData: function (a, b, c) {
            var d = b || this.segments.length;
            this.segments.splice(d, 0, new this.SegmentArc({
                value: a.value,
                outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                fillColor: a.color,
                highlightColor: a.highlight || a.color,
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                startAngle: 1.5 * Math.PI,
                circumference: this.options.animateRotate ? 0 : this.calculateCircumference(a.value),
                label: a.label
            })), c || (this.reflow(), this.update())
        }, calculateCircumference: function (a) {
            return 2 * Math.PI * (a / this.total)
        }, calculateTotal: function (a) {
            this.total = 0, c.each(a, function (a) {
                this.total += a.value
            }, this)
        }, update: function () {
            this.calculateTotal(this.segments), c.each(this.activeElements, function (a) {
                a.restore(["fillColor"])
            }), c.each(this.segments, function (a) {
                a.save()
            }), this.render()
        }, removeData: function (a) {
            var b = c.isNumber(a) ? a : this.segments.length - 1;
            this.segments.splice(b, 1), this.reflow(), this.update()
        }, reflow: function () {
            c.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, c.each(this.segments, function (a) {
                a.update({
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                })
            }, this)
        }, draw: function (a) {
            var b = a ? a : 1;
            this.clear(), c.each(this.segments, function (a, c) {
                a.transition({
                    circumference: this.calculateCircumference(a.value),
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                }, b), a.endAngle = a.startAngle + a.circumference, a.draw(), 0 === c && (a.startAngle = 1.5 * Math.PI), c < this.segments.length - 1 && (this.segments[c + 1].startAngle = a.endAngle)
            }, this)
        }
    }), b.types.Doughnut.extend({name: "Pie", defaults: c.merge(d, {percentageInnerCutout: 0})})
}.call(this), function () {
    "use strict";
    var a = this, b = a.Chart, c = b.helpers, d = {
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        bezierCurve: !0,
        bezierCurveTension: .4,
        pointDot: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 2,
        datasetFill: !0,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    b.Type.extend({
        name: "Line", defaults: d, initialize: function (a) {
            this.PointClass = b.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx,
                inRange: function (a) {
                    return Math.pow(a - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                }
            }), this.datasets = [], this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function (a) {
                var b = "mouseout" !== a.type ? this.getPointsAtEvent(a) : [];
                this.eachPoints(function (a) {
                    a.restore(["fillColor", "strokeColor"])
                }), c.each(b, function (a) {
                    a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                }), this.showTooltip(b)
            }), c.each(a.datasets, function (b) {
                var d = {
                    label: b.label || null,
                    fillColor: b.fillColor,
                    strokeColor: b.strokeColor,
                    pointColor: b.pointColor,
                    pointStrokeColor: b.pointStrokeColor,
                    points: []
                };
                this.datasets.push(d), c.each(b.data, function (c, e) {
                    d.points.push(new this.PointClass({
                        value: c,
                        label: a.labels[e],
                        datasetLabel: b.label,
                        strokeColor: b.pointStrokeColor,
                        fillColor: b.pointColor,
                        highlightFill: b.pointHighlightFill || b.pointColor,
                        highlightStroke: b.pointHighlightStroke || b.pointStrokeColor
                    }))
                }, this), this.buildScale(a.labels), this.eachPoints(function (a, b) {
                    c.extend(a, {x: this.scale.calculateX(b), y: this.scale.endPoint}), a.save()
                }, this)
            }, this), this.render()
        }, update: function () {
            this.scale.update(), c.each(this.activeElements, function (a) {
                a.restore(["fillColor", "strokeColor"])
            }), this.eachPoints(function (a) {
                a.save()
            }), this.render()
        }, eachPoints: function (a) {
            c.each(this.datasets, function (b) {
                c.each(b.points, a, this)
            }, this)
        }, getPointsAtEvent: function (a) {
            var b = [], d = c.getRelativePosition(a);
            return c.each(this.datasets, function (a) {
                c.each(a.points, function (a) {
                    a.inRange(d.x, d.y) && b.push(a)
                })
            }, this), b
        }, buildScale: function (a) {
            var d = this, e = function () {
                var a = [];
                return d.eachPoints(function (b) {
                    a.push(b.value)
                }), a
            }, f = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: a.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function (a) {
                    var b = c.calculateScaleRange(e(), a, this.fontSize, this.beginAtZero, this.integersOnly);
                    c.extend(this, b)
                },
                xLabels: a,
                font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && c.extend(f, {
                calculateYRange: c.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }), this.scale = new b.Scale(f)
        }, addData: function (a, b) {
            c.each(a, function (a, c) {
                this.datasets[c].points.push(new this.PointClass({
                    value: a,
                    label: b,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[c].pointStrokeColor,
                    fillColor: this.datasets[c].pointColor
                }))
            }, this), this.scale.addXLabel(b), this.update()
        }, removeData: function () {
            this.scale.removeXLabel(), c.each(this.datasets, function (a) {
                a.points.shift()
            }, this), this.update()
        }, reflow: function () {
            var a = c.extend({height: this.chart.height, width: this.chart.width});
            this.scale.update(a)
        }, draw: function (a) {
            var b = a || 1;
            this.clear();
            var d = this.chart.ctx, e = function (a) {
                return null !== a.value
            }, f = function (a, b, d) {
                return c.findNextWhere(b, e, d) || a
            }, g = function (a, b, d) {
                return c.findPreviousWhere(b, e, d) || a
            };
            this.scale.draw(b), c.each(this.datasets, function (a) {
                var h = c.where(a.points, e);
                c.each(a.points, function (a, c) {
                    a.hasValue() && a.transition({y: this.scale.calculateY(a.value), x: this.scale.calculateX(c)}, b)
                }, this), this.options.bezierCurve && c.each(h, function (a, b) {
                    var d = b > 0 && b < h.length - 1 ? this.options.bezierCurveTension : 0;
                    a.controlPoints = c.splineCurve(g(a, h, b), a, f(a, h, b), d), a.controlPoints.outer.y > this.scale.endPoint ? a.controlPoints.outer.y = this.scale.endPoint : a.controlPoints.outer.y < this.scale.startPoint && (a.controlPoints.outer.y = this.scale.startPoint), a.controlPoints.inner.y > this.scale.endPoint ? a.controlPoints.inner.y = this.scale.endPoint : a.controlPoints.inner.y < this.scale.startPoint && (a.controlPoints.inner.y = this.scale.startPoint)
                }, this), d.lineWidth = this.options.datasetStrokeWidth, d.strokeStyle = a.strokeColor, d.beginPath(), c.each(h, function (a, b) {
                    if (0 === b)d.moveTo(a.x, a.y); else if (this.options.bezierCurve) {
                        var c = g(a, h, b);
                        d.bezierCurveTo(c.controlPoints.outer.x, c.controlPoints.outer.y, a.controlPoints.inner.x, a.controlPoints.inner.y, a.x, a.y)
                    } else d.lineTo(a.x, a.y)
                }, this), d.stroke(), this.options.datasetFill && h.length > 0 && (d.lineTo(h[h.length - 1].x, this.scale.endPoint), d.lineTo(h[0].x, this.scale.endPoint), d.fillStyle = a.fillColor, d.closePath(), d.fill()), c.each(h, function (a) {
                    a.draw()
                })
            }, this)
        }
    })
}.call(this), function () {
    "use strict";
    var a = this, b = a.Chart, c = b.helpers, d = {
        scaleShowLabelBackdrop: !0,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBeginAtZero: !0,
        scaleBackdropPaddingY: 2,
        scaleBackdropPaddingX: 2,
        scaleShowLine: !0,
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    b.Type.extend({
        name: "PolarArea", defaults: d, initialize: function (a) {
            this.segments = [], this.SegmentArc = b.Arc.extend({
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                ctx: this.chart.ctx,
                innerRadius: 0,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.scale = new b.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                lineArc: !0,
                width: this.chart.width,
                height: this.chart.height,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                valuesCount: a.length
            }), this.updateScaleRange(a), this.scale.update(), c.each(a, function (a, b) {
                this.addData(a, b, !0)
            }, this), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function (a) {
                var b = "mouseout" !== a.type ? this.getSegmentsAtEvent(a) : [];
                c.each(this.segments, function (a) {
                    a.restore(["fillColor"])
                }), c.each(b, function (a) {
                    a.fillColor = a.highlightColor
                }), this.showTooltip(b)
            }), this.render()
        }, getSegmentsAtEvent: function (a) {
            var b = [], d = c.getRelativePosition(a);
            return c.each(this.segments, function (a) {
                a.inRange(d.x, d.y) && b.push(a)
            }, this), b
        }, addData: function (a, b, c) {
            var d = b || this.segments.length;
            this.segments.splice(d, 0, new this.SegmentArc({
                fillColor: a.color,
                highlightColor: a.highlight || a.color,
                label: a.label,
                value: a.value,
                outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(a.value),
                circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                startAngle: 1.5 * Math.PI
            })), c || (this.reflow(), this.update())
        }, removeData: function (a) {
            var b = c.isNumber(a) ? a : this.segments.length - 1;
            this.segments.splice(b, 1), this.reflow(), this.update()
        }, calculateTotal: function (a) {
            this.total = 0, c.each(a, function (a) {
                this.total += a.value
            }, this), this.scale.valuesCount = this.segments.length
        }, updateScaleRange: function (a) {
            var b = [];
            c.each(a, function (a) {
                b.push(a.value)
            });
            var d = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : c.calculateScaleRange(b, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            c.extend(this.scale, d, {
                size: c.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            })
        }, update: function () {
            this.calculateTotal(this.segments), c.each(this.segments, function (a) {
                a.save()
            }), this.render()
        }, reflow: function () {
            c.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.updateScaleRange(this.segments), this.scale.update(), c.extend(this.scale, {
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }), c.each(this.segments, function (a) {
                a.update({outerRadius: this.scale.calculateCenterOffset(a.value)})
            }, this)
        }, draw: function (a) {
            var b = a || 1;
            this.clear(), c.each(this.segments, function (a, c) {
                a.transition({
                    circumference: this.scale.getCircumference(),
                    outerRadius: this.scale.calculateCenterOffset(a.value)
                }, b), a.endAngle = a.startAngle + a.circumference, 0 === c && (a.startAngle = 1.5 * Math.PI), c < this.segments.length - 1 && (this.segments[c + 1].startAngle = a.endAngle), a.draw()
            }, this), this.scale.draw()
        }
    })
}.call(this), function () {
    "use strict";
    var a = this, b = a.Chart, c = b.helpers;
    b.Type.extend({
        name: "Radar",
        defaults: {
            scaleShowLine: !0,
            angleShowLineOut: !0,
            scaleShowLabels: !1,
            scaleBeginAtZero: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 10,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
        },
        initialize: function (a) {
            this.PointClass = b.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx
            }), this.datasets = [], this.buildScale(a), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function (a) {
                var b = "mouseout" !== a.type ? this.getPointsAtEvent(a) : [];
                this.eachPoints(function (a) {
                    a.restore(["fillColor", "strokeColor"])
                }), c.each(b, function (a) {
                    a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                }), this.showTooltip(b)
            }), c.each(a.datasets, function (b) {
                var d = {
                    label: b.label || null,
                    fillColor: b.fillColor,
                    strokeColor: b.strokeColor,
                    pointColor: b.pointColor,
                    pointStrokeColor: b.pointStrokeColor,
                    points: []
                };
                this.datasets.push(d), c.each(b.data, function (c, e) {
                    var f;
                    this.scale.animation || (f = this.scale.getPointPosition(e, this.scale.calculateCenterOffset(c))), d.points.push(new this.PointClass({
                        value: c,
                        label: a.labels[e],
                        datasetLabel: b.label,
                        x: this.options.animation ? this.scale.xCenter : f.x,
                        y: this.options.animation ? this.scale.yCenter : f.y,
                        strokeColor: b.pointStrokeColor,
                        fillColor: b.pointColor,
                        highlightFill: b.pointHighlightFill || b.pointColor,
                        highlightStroke: b.pointHighlightStroke || b.pointStrokeColor
                    }))
                }, this)
            }, this), this.render()
        },
        eachPoints: function (a) {
            c.each(this.datasets, function (b) {
                c.each(b.points, a, this)
            }, this)
        },
        getPointsAtEvent: function (a) {
            var b = c.getRelativePosition(a), d = c.getAngleFromPoint({
                x: this.scale.xCenter,
                y: this.scale.yCenter
            }, b), e = 2 * Math.PI / this.scale.valuesCount, f = Math.round((d.angle - 1.5 * Math.PI) / e), g = [];
            return (f >= this.scale.valuesCount || 0 > f) && (f = 0), d.distance <= this.scale.drawingArea && c.each(this.datasets, function (a) {
                g.push(a.points[f])
            }), g
        },
        buildScale: function (a) {
            this.scale = new b.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                angleLineColor: this.options.angleLineColor,
                angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                pointLabelFontColor: this.options.pointLabelFontColor,
                pointLabelFontSize: this.options.pointLabelFontSize,
                pointLabelFontFamily: this.options.pointLabelFontFamily,
                pointLabelFontStyle: this.options.pointLabelFontStyle,
                height: this.chart.height,
                width: this.chart.width,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                labels: a.labels,
                valuesCount: a.datasets[0].data.length
            }), this.scale.setScaleSize(), this.updateScaleRange(a.datasets), this.scale.buildYLabels()
        },
        updateScaleRange: function (a) {
            var b = function () {
                var b = [];
                return c.each(a, function (a) {
                    a.data ? b = b.concat(a.data) : c.each(a.points, function (a) {
                        b.push(a.value)
                    })
                }), b
            }(), d = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : c.calculateScaleRange(b, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            c.extend(this.scale, d)
        },
        addData: function (a, b) {
            this.scale.valuesCount++, c.each(a, function (a, c) {
                var d = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(a));
                this.datasets[c].points.push(new this.PointClass({
                    value: a,
                    label: b,
                    x: d.x,
                    y: d.y,
                    strokeColor: this.datasets[c].pointStrokeColor,
                    fillColor: this.datasets[c].pointColor
                }))
            }, this), this.scale.labels.push(b), this.reflow(), this.update()
        },
        removeData: function () {
            this.scale.valuesCount--, this.scale.labels.shift(), c.each(this.datasets, function (a) {
                a.points.shift()
            }, this), this.reflow(), this.update()
        },
        update: function () {
            this.eachPoints(function (a) {
                a.save()
            }), this.reflow(), this.render()
        },
        reflow: function () {
            c.extend(this.scale, {
                width: this.chart.width,
                height: this.chart.height,
                size: c.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
        },
        draw: function (a) {
            var b = a || 1, d = this.chart.ctx;
            this.clear(), this.scale.draw(), c.each(this.datasets, function (a) {
                c.each(a.points, function (a, c) {
                    a.hasValue() && a.transition(this.scale.getPointPosition(c, this.scale.calculateCenterOffset(a.value)), b)
                }, this), d.lineWidth = this.options.datasetStrokeWidth, d.strokeStyle = a.strokeColor, d.beginPath(), c.each(a.points, function (a, b) {
                    0 === b ? d.moveTo(a.x, a.y) : d.lineTo(a.x, a.y)
                }, this), d.closePath(), d.stroke(), d.fillStyle = a.fillColor, d.fill(), c.each(a.points, function (a) {
                    a.hasValue() && a.draw()
                })
            }, this)
        }
    })
}.call(this), function (a, b, c, d) {
    function e(b, c) {
        this.element = a(b), this.settings = a.extend({}, w, c), this._defaults = w, this._name = m, this.init()
    }

    function f(b) {
        v && (b.element.addClass("navbar-hidden").animate({top: -b.element.height()}, {
            queue: !1,
            duration: b.settings.animationDuration
        }), a(".dropdown.open .dropdown-toggle", b.element).dropdown("toggle"), v = !1)
    }

    function g(a) {
        v || (a.element.removeClass("navbar-hidden").animate({top: 0}, {
            queue: !1,
            duration: a.settings.animationDuration
        }), v = !0)
    }

    function h(a) {
        var b = n.scrollTop(), c = b - t;
        if (t = b, 0 > c) {
            if (v)return;
            (a.settings.showOnUpscroll || l >= b) && g(a)
        } else if (c > 0) {
            if (!v)return void(a.settings.showOnBottom && b + u === o.height() && g(a));
            b >= l && f(a)
        }
    }

    function i(a) {
        a.settings.disableAutohide || (s = (new Date).getTime(), h(a))
    }

    function j(a) {
        o.on("scroll." + m, function () {
            (new Date).getTime() - s > r ? i(a) : (clearTimeout(p), p = setTimeout(function () {
                i(a)
            }, r))
        }), n.on("resize." + m, function () {
            clearTimeout(q), q = setTimeout(function () {
                u = n.height()
            }, r)
        })
    }

    function k() {
        o.off("." + m), n.off("." + m)
    }

    var l, m = "autoHidingNavbar", n = a(b), o = a(c), p = null, q = null, r = 70, s = 0, t = null, u = n.height(), v = !0, w = {
        disableAutohide: !1,
        showOnUpscroll: !0,
        showOnBottom: !0,
        hideOffset: "auto",
        animationDuration: 200
    };
    e.prototype = {
        init: function () {
            return this.elements = {navbar: this.element}, this.setDisableAutohide(this.settings.disableAutohide), this.setShowOnUpscroll(this.settings.showOnUpscroll), this.setShowOnBottom(this.settings.showOnBottom), this.setHideOffset(this.settings.hideOffset), this.setAnimationDuration(this.settings.animationDuration), l = "auto" === this.settings.hideOffset ? this.element.height() : this.settings.hideOffset, j(this), this.element
        }, setDisableAutohide: function (a) {
            return this.settings.disableAutohide = a, this.element
        }, setShowOnUpscroll: function (a) {
            return this.settings.showOnUpscroll = a, this.element
        }, setShowOnBottom: function (a) {
            return this.settings.showOnBottom = a, this.element
        }, setHideOffset: function (a) {
            return this.settings.hideOffset = a, this.element
        }, setAnimationDuration: function (a) {
            return this.settings.animationDuration = a, this.element
        }, show: function () {
            return g(this), this.element
        }, hide: function () {
            return f(this), this.element
        }, destroy: function () {
            return k(this), g(this), a.data(this, "plugin_" + m, null), this.element
        }
    }, a.fn[m] = function (b) {
        var c = arguments;
        if (b === d || "object" == typeof b)return this.each(function () {
            a.data(this, "plugin_" + m) || a.data(this, "plugin_" + m, new e(this, b))
        });
        if ("string" == typeof b && "_" !== b[0] && "init" !== b) {
            var f;
            return this.each(function () {
                var d = a.data(this, "plugin_" + m);
                d instanceof e && "function" == typeof d[b] && (f = d[b].apply(d, Array.prototype.slice.call(c, 1)))
            }), f !== d ? f : this
        }
    }
}(jQuery, window, document);
var $projects_chart = $("#projects-chart");
$projects_chart.length > 0;
var $prod_chart = $("#productivity-chart");
$prod_chart.length > 0;
var $over_chart = $("#overview-chart");
if ($over_chart.length > 0)var $overview = $over_chart.get(0).getContext("2d"), data3 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "My First dataset",
        fillColor: "rgba(46, 204, 113, 0.8)",
        strokeColor: "rgba(46, 204, 113,1.0)",
        pointColor: "rgba(46, 204, 113,1.0)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(46, 204, 113,1.0)",
        data: [65, 59, 80, 81, 56, 55, 40]
    }, {
        label: "My Second dataset",
        fillColor: "rgba(41, 128, 185, 0.8)",
        strokeColor: "rgba(41, 128, 185,1.0)",
        pointColor: "rgba(41, 128, 185,1.0)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(41, 128, 185,1.0)",
        data: [28, 48, 40, 19, 86, 27, 90]
    }]
}, ch = new Chart($overview).Line(data3, {scaleFontColor: "#eee"});
!function (a, b, c) {
    if ("function" != typeof b)return console.error("nette.ajax.js: jQuery is missing, load it please");
    var d = function () {
        var a = {
            self: this,
            initialized: !1,
            contexts: {},
            on: {init: {}, load: {}, prepare: {}, before: {}, start: {}, success: {}, complete: {}, error: {}},
            fire: function () {
                var d = !0, e = Array.prototype.slice.call(arguments), f = e.shift(), g = "string" == typeof f ? f : f.name, h = "object" == typeof f ? f.off || {} : {};
                return e.push(a.self), b.each(a.on[g], function (f, g) {
                    if (g === c || -1 !== b.inArray(f, h))return !0;
                    var i = g.apply(a.contexts[f], e);
                    return d = i === c || i
                }), d
            },
            requestHandler: function (b) {
                var c = a.self.ajax({}, this, b);
                return c && c._returnFalse ? !1 : void 0
            },
            ext: function (d, e, f) {
                for (; !f;)f = "ext_" + Math.random(), a.contexts[f] && (f = c);
                b.each(d, function (b, c) {
                    a.on[b][f] = c
                }), a.contexts[f] = b.extend(e ? e : {}, {
                    name: function () {
                        return f
                    }, ext: function (b, c) {
                        var d = a.contexts[b];
                        if (!d && c)throw"Extension '" + this.name() + "' depends on disabled extension '" + b + "'.";
                        return d
                    }
                })
            }
        };
        this.ext = function (d, e, f) {
            if ("object" == typeof d)a.ext(d, e); else {
                if (e === c)return a.contexts[d];
                if (e) {
                    if ("string" == typeof d && a.contexts[d] !== c)throw"Cannot override already registered nette-ajax extension '" + d + "'.";
                    a.ext(e, f, d)
                } else b.each(["init", "load", "prepare", "before", "start", "success", "complete", "error"], function (b, e) {
                    a.on[e][d] = c
                }), a.contexts[d] = c
            }
            return this
        }, this.init = function (b, d) {
            if (a.initialized)throw"Cannot initialize nette-ajax twice.";
            if ("function" == typeof b)this.ext("init", null), this.ext("init", {load: b}, d); else if ("object" == typeof b)this.ext("init", null), this.ext("init", b, d); else if (b !== c)throw"Argument of init() can be function or function-hash only.";
            return a.initialized = !0, a.fire("init"), this.load(), this
        }, this.load = function () {
            return a.fire("load", a.requestHandler), this
        }, this.ajax = function (d, e, f) {
            if (!d.nette && e && f) {
                var g, h = b(e), i = d.nette = {
                    e: f,
                    ui: e,
                    el: h,
                    isForm: h.is("form"),
                    isSubmit: h.is("input[type=submit]") || h.is("button[type=submit]"),
                    isImage: h.is("input[type=image]"),
                    form: null
                };
                if (i.isSubmit || i.isImage ? i.form = i.el.closest("form") : i.isForm && (i.form = i.el), d.url || (d.url = i.form ? i.form.attr("action") : e.href), d.type || (d.type = i.form ? i.form.attr("method") : "get"), h.is("[data-ajax-off]")) {
                    var j = h.attr("data-ajax-off");
                    d.off = 0 === j.indexOf("[") ? h.data("ajaxOff") : -1 !== j.indexOf(",") ? j.split(",") : -1 !== j.indexOf(" ") ? j.split(" ") : j, "string" == typeof d.off && (d.off = [d.off]), d.off = b.grep(b.each(d.off, function (a) {
                        return b.trim(a)
                    }), function (a) {
                        return a.length
                    })
                }
            }
            return a.fire({
                name: "prepare",
                off: d.off || {}
            }, d), d.prepare && d.prepare(d), g = d.beforeSend, d.beforeSend = function (b, d) {
                var e = a.fire({name: "before", off: d.off || {}}, b, d);
                return (e || e === c) && g && (e = g(b, d)), e
            }, this.handleXHR(b.ajax(d), d)
        }, this.handleXHR = function (b, c) {
            return c = c || {}, !b || "undefined" != typeof b.statusText && "canceled" === b.statusText || (b.done(function (b, d, e) {
                a.fire({name: "success", off: c.off || {}}, b, d, e, c)
            }).fail(function (b, d, e) {
                a.fire({name: "error", off: c.off || {}}, b, d, e, c)
            }).always(function (b, d) {
                a.fire({name: "complete", off: c.off || {}}, b, d, c)
            }), a.fire({name: "start", off: c.off || {}}, b, c), c.start && c.start(b, c)), b
        }
    };
    b.nette = new (b.extend(d, b.nette ? b.nette : {})), b.fn.netteAjax = function (a, c) {
        return b.nette.ajax(c || {}, this[0], a)
    }, b.fn.netteAjaxOff = function () {
        return this.off(".nette")
    }, b.nette.ext("validation", {
        before: function (a, d) {
            if (!d.nette)return !0;
            var e = d.nette, f = e.e, g = b.extend({keys: !0, url: !0, form: !0}, d.validate || function () {
                if (e.el.is("[data-ajax-validate]")) {
                    var a = e.el.data("ajaxValidate");
                    return a === !1 ? {keys: !1, url: !1, form: !1} : "object" == typeof a ? a : void 0
                }
            }() || {}), h = !1;
            if (e.el.attr("data-ajax-pass") !== c && (h = e.el.data("ajaxPass"), h = "bool" == typeof h ? h : !0), g.keys) {
                var i = f.button || f.ctrlKey || f.shiftKey || f.altKey || f.metaKey;
                if (e.form) {
                    if (i && e.isSubmit)return this.explicitNoAjax = !0, !1;
                    if (e.isForm && this.explicitNoAjax)return this.explicitNoAjax = !1, !1
                } else if (i)return !1
            }
            if (g.form && e.form && (!e.isSubmit && !e.isImage || e.el.attr("formnovalidate") === c)) {
                var j = this.ie();
                if (e.form.get(0).onsubmit && e.form.get(0).onsubmit("undefined" != typeof j && 9 > j ? c : f) === !1)return f.stopImmediatePropagation(), f.preventDefault(), !1
            }
            return g.url && /:|^#/.test(e.form ? d.url : e.el.attr("href")) ? !1 : (h || (f.stopPropagation(), f.preventDefault(), a._returnFalse = !0), !0)
        }
    }, {
        explicitNoAjax: !1, ie: function (a) {
            for (var b = 3, c = document.createElement("div"), d = c.getElementsByTagName("i"); c.innerHTML = "<!--[if gt IE " + ++b + "]><i></i><![endif]-->", d[0];);
            return b > 4 ? b : a
        }
    }), b.nette.ext("forms", {
        init: function () {
            var b;
            a.Nette && (b = this.ext("snippets")) && b.after(function (b) {
                b.find("form").each(function () {
                    a.Nette.initForm(this)
                })
            })
        }, prepare: function (c) {
            var d = c.nette;
            if (d && d.form) {
                var e = d.e, f = c.data || {}, g = {};
                if (d.isSubmit)g[d.el.attr("name")] = d.el.val() || ""; else if (d.isImage) {
                    var h = d.el.offset(), i = d.el.attr("name"), j = [Math.max(0, e.pageX - h.left), Math.max(0, e.pageY - h.top)];
                    -1 !== i.indexOf("[", 0) ? g[i] = j : (g[i + ".x"] = j[0], g[i + ".y"] = j[1])
                }
                if ("post" === d.form.attr("method").toLowerCase() && "FormData"in a) {
                    var k = new FormData(d.form[0]);
                    for (var l in g)k.append(l, g[l]);
                    if ("string" != typeof f)for (var l in f)k.append(l, f[l]);
                    c.data = k, c.processData = !1, c.contentType = !1
                } else"string" != typeof f && (f = b.param(f)), g = b.param(g), c.data = d.form.serialize() + (g ? "&" + g : "") + "&" + f
            }
        }
    }), b.nette.ext("snippets", {
        success: function (a) {
            a.snippets && this.updateSnippets(a.snippets)
        }
    }, {
        beforeQueue: b.Callbacks(), afterQueue: b.Callbacks(), completeQueue: b.Callbacks(), before: function (a) {
            this.beforeQueue.add(a)
        }, after: function (a) {
            this.afterQueue.add(a)
        }, complete: function (a) {
            this.completeQueue.add(a)
        }, updateSnippets: function (a, c) {
            var d = this, e = [];
            for (var f in a) {
                var g = this.getElement(f);
                g.get(0) && e.push(g.get(0)), this.updateSnippet(g, a[f], c)
            }
            b(e).promise().done(function () {
                d.completeQueue.fire()
            })
        }, updateSnippet: function (a, b, c) {
            a.is("title") ? document.title = b : (this.beforeQueue.fire(a), this.applySnippet(a, b, c), this.afterQueue.fire(a))
        }, getElement: function (a) {
            return b("#" + this.escapeSelector(a))
        }, applySnippet: function (a, b, c) {
            !c && a.is("[data-ajax-append]") ? a.append(b) : !c && a.is("[data-ajax-prepend]") ? a.prepend(b) : a.html(b)
        }, escapeSelector: function (a) {
            return a.replace(/[\!"#\$%&'\(\)\*\+,\.\/:;<=>\?@\[\\\]\^`\{\|\}~]/g, "\\$&")
        }
    }), b.nette.ext("redirect", {
        success: function (b) {
            return b.redirect ? (a.location.href = b.redirect, !1) : void 0
        }
    }), b.nette.ext("state", {
        success: function (a) {
            a.state && (this.state = a.state)
        }
    }, {state: null}), b.nette.ext("unique", {
        start: function (a) {
            this.xhr && this.xhr.abort(), this.xhr = a
        }, complete: function () {
            this.xhr = null
        }
    }, {xhr: null}), b.nette.ext("abort", {
        init: function () {
            b("body").keydown(b.proxy(function (a) {
                this.xhr && "27" === a.keyCode.toString() && !(a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) && this.xhr.abort()
            }, this))
        }, start: function (a) {
            this.xhr = a
        }, complete: function () {
            this.xhr = null
        }
    }, {xhr: null}), b.nette.ext("load", {
        success: function () {
            b.nette.load()
        }
    }), b.nette.ext("init", {
        load: function (a) {
            b(this.linkSelector).off("click.nette", a).on("click.nette", a), b(this.formSelector).off("submit.nette", a).on("submit.nette", a).off("click.nette", ":image", a).on("click.nette", ":image", a).off("click.nette", ":submit", a).on("click.nette", ":submit", a), b(this.buttonSelector).closest("form").off("click.nette", this.buttonSelector, a).on("click.nette", this.buttonSelector, a)
        }
    }, {
        linkSelector: "a.ajax",
        formSelector: "form.ajax",
        buttonSelector: 'input.ajax[type="submit"], button.ajax[type="submit"], input.ajax[type="image"]'
    })
}(window, window.jQuery);
var LiveForm = {
    options: {
        showMessageClassOnParent: "form-group",
        controlErrorClass: "has-error",
        errorMessageClass: "error-message",
        validMessageClass: "has-success",
        noLiveValidation: "no-live-validation",
        showErrorApartClass: "show-error-apart",
        showErrorApartElementPrefix: "error-container_",
        dontShowWhenValidClass: "dont-show-when-valid",
        messageTag: "span",
        messageIdPostfix: "_message",
        errorMessagePrefix: '<i class="fa fa-warning"></i> ',
        showAllErrors: !0,
        showValid: !1,
        wait: !1
    }, forms: {}
};
LiveForm.isSpecialKey = function (a) {
    return 20 == a || 16 == a || 9 == a || 27 == a || 17 == a || 91 == a || 19 == a || 18 == a || 93 == a || a >= 35 && 40 >= a || 45 == a || a >= 33 && 34 >= a || a >= 112 && 123 >= a || a >= 144 && 145 >= a
}, LiveForm.setUpHandlers = function (a) {
    if (!this.hasClass(a, this.options.noLiveValidation)) {
        var b = function (a) {
            a = a || window.event, Nette.validateControl(a.target ? a.target : a.srcElement)
        }, c = this;
        Nette.addEvent(a, "change", b), Nette.addEvent(a, "blur", b), Nette.addEvent(a, "keydown", function (a) {
            if (!c.isSpecialKey(a.which) && (c.options.wait === !1 || c.options.wait >= 200)) {
                c.removeClass(c.getGroupElement(this), c.options.controlErrorClass), c.removeClass(c.getGroupElement(this), c.options.validMessageClass);
                var b = c.getMessageElement(this);
                b.innerHTML = "", b.className = "", c.timeout && clearTimeout(c.timeout)
            }
        }), Nette.addEvent(a, "keyup", function (a) {
            c.options.wait !== !1 && (a = a || window.event, 9 !== a.keyCode && (c.timeout && clearTimeout(c.timeout), c.timeout = setTimeout(function () {
                b(a)
            }, c.options.wait)))
        })
    }
}, LiveForm.addError = function (a, b) {
    this.forms[a.form.id].hasError = !0, this.addClass(this.getGroupElement(a), this.options.controlErrorClass), this.options.showValid && this.showValid(a) && this.removeClass(this.getGroupElement(a), this.options.validMessageClass), b = b ? this.options.errorMessagePrefix + b : "&nbsp;";
    var c = this.getMessageElement(a);
    c.innerHTML = b
}, LiveForm.removeError = function (a) {
    var b = this.getGroupElement(a);
    this.removeClass(b, this.options.controlErrorClass);
    var c = document.getElementById(a.id + this.options.messageIdPostfix);
    return this.options.showValid && this.showValid(a) ? (c = this.getMessageElement(a), void this.addClass(b, this.options.validMessageClass)) : void(c && c.parentNode.removeChild(c))
}, LiveForm.showValid = function (a) {
    if (a.type) {
        var b = a.type.toLowerCase();
        if ("checkbox" == b || "radio" == b)return !1
    }
    var c = Nette.parseJSON(a.getAttribute("data-nette-rules"));
    return 0 == c.length ? !1 : this.hasClass(a, this.options.dontShowWhenValidClass) ? !1 : !0
}, LiveForm.getGroupElement = function (a) {
    if (this.options.showMessageClassOnParent === !1)return a;
    for (var b = a; !this.hasClass(b, this.options.showMessageClassOnParent);)if (b = b.parentNode, null === b)return a;
    return b
}, LiveForm.getMessageElement = function (a) {
    var b = a.id + this.options.messageIdPostfix, c = document.getElementById(b);
    if (!c)if (c = document.createElement(this.options.messageTag), c.id = b, this.hasClass(a, this.options.showErrorApartClass)) {
        var d = document.getElementById(this.options.showErrorApartElementPrefix + a.id);
        d.appendChild(c)
    } else a.parentNode.appendChild(c);
    return "none" == a.style.display && (c.style.display = "none"), c.className = this.options.errorMessageClass, c.innerHTML = "", c
}, LiveForm.addClass = function (a, b) {
    a.className ? this.hasClass(a, b) || (a.className += " " + b) : a.className = b
}, LiveForm.hasClass = function (a, b) {
    return a.className ? a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)")) : !1
}, LiveForm.removeClass = function (a, b) {
    if (this.hasClass(a, b)) {
        var c = new RegExp("(\\s|^)" + b + "(\\s|$)"), d = a.className.match(c);
        a.className = a.className.replace(c, " " == d[1] && " " == d[2] ? " " : "")
    }
};
var Nette = Nette || {};
Nette.addEvent = function (a, b, c) {
    var d = a["on" + b];
    a["on" + b] = function () {
        return "function" == typeof d && d.apply(a, arguments) === !1 ? !1 : c.apply(a, arguments)
    }
}, Nette.getValue = function (a) {
    var b, c;
    if (a) {
        if (a.nodeName) {
            if (a.form.elements[a.name].nodeName) {
                if ("select" === a.nodeName.toLowerCase()) {
                    var d = a.selectedIndex, e = a.options, f = [];
                    if ("select-one" === a.type)return 0 > d ? null : e[d].value;
                    for (b = 0, c = e.length; c > b; b++)e[b].selected && f.push(e[b].value);
                    return f
                }
                return a.type in{
                    checkbox: 1,
                    radio: 1
                } ? a.checked : "file" === a.type ? a.files || a.value : a.value.replace("\r", "").replace(/^\s+|\s+$/g, "")
            }
            return Nette.getValue(a.form.elements[a.name])
        }
        var g = a[0] && !!a[0].name.match(/\[\]$/), h = [];
        for (b = 0, c = a.length; c > b; b++)if (!(a[b].type in{checkbox: 1, radio: 1}) || a[b].checked) {
            if (!g)return a[b].value;
            h.push(a[b].value)
        }
        return g ? h : null
    }
    return null
}, Nette.getEffectiveValue = function (a) {
    var b = Nette.getValue(a);
    return a.getAttribute && b === a.getAttribute("data-nette-empty-value") && (b = ""), b
}, Nette.validateControl = function (a, b, c) {
    a.nodeName || (a = a[0]), b = b || Nette.parseJSON(a.getAttribute("data-nette-rules"));
    for (var d = 0, e = b.length; e > d; d++) {
        var f = b[d], g = f.op.match(/(~)?([^?]+)/);
        f.neg = g[1], f.op = g[2], f.condition = !!f.rules;
        var h = f.control ? a.form.elements[f.control] : a;
        h.nodeName || (h = h[0]);
        var i = Nette.validateRule(h, f.op, f.arg);
        if (null !== i)if (f.neg && (i = !i), f.condition && i) {
            if (!Nette.validateControl(a, f.rules, c))return !1
        } else if (!f.condition && !i) {
            if (Nette.isDisabled(h))continue;
            if (!c) {
                var j = Nette.isArray(f.arg) ? f.arg : [f.arg], k = f.msg.replace(/%(value|\d+)/g, function (b, c) {
                    return Nette.getValue("value" === c ? h : a.form.elements[j[c].control])
                });
                Nette.addError(h, k)
            }
            return !1
        }
    }
    return c || LiveForm.removeError(a), !0
}, Nette.validateForm = function (a) {
    var b = a.form || a, c = !1;
    if (LiveForm.forms[b.id].hasError = !1, b["nette-submittedBy"] && null !== b["nette-submittedBy"].getAttribute("formnovalidate")) {
        var d = Nette.parseJSON(b["nette-submittedBy"].getAttribute("data-nette-validation-scope"));
        if (!d.length)return !0;
        c = new RegExp("^(" + d.join("-|") + "-)")
    }
    var e, f, g = !0, h = {};
    for (e = 0; e < b.elements.length; e++) {
        if (f = b.elements[e], "radio" === f.type) {
            if (h[f.name])continue;
            h[f.name] = !0
        }
        if (!(c && !f.name.replace(/]\[|\[|]|$/g, "-").match(c) || Nette.isDisabled(f) || Nette.validateControl(f) || (g = !1, LiveForm.options.showAllErrors)))break
    }
    return g
}, Nette.isDisabled = function (a) {
    if ("radio" === a.type) {
        a = a.form.elements[a.name].nodeName ? [a] : a.form.elements[a.name];
        for (var b = 0; b < a.length; b++)if (!a[b].disabled)return !1;
        return !0
    }
    return a.disabled
}, Nette.addError = function (a, b) {
    a.focus && !LiveForm.forms[a.form.id].hasError && (LiveForm.focusing || (LiveForm.focusing = !0, a.focus(), setTimeout(function () {
        LiveForm.focusing = !1
    }, 10))), LiveForm.hasClass(a, LiveForm.options.noLiveValidation) ? b && !LiveForm.forms[a.form.id].hasError && alert(b) : LiveForm.addError(a, b)
}, Nette.expandRuleArgument = function (a, b) {
    return b && b.control && (b = Nette.getEffectiveValue(a.form.elements[b.control])), b
}, Nette.validateRule = function (a, b, c) {
    var d = Nette.getEffectiveValue(a);
    ":" === b.charAt(0) && (b = b.substr(1)), b = b.replace("::", "_"), b = b.replace(/\\/g, "");
    for (var e = Nette.isArray(c) ? c.slice(0) : [c], f = 0, g = e.length; g > f; f++)e[f] = Nette.expandRuleArgument(a, e[f]);
    return Nette.validators[b] ? Nette.validators[b](a, Nette.isArray(c) ? e : e[0], d) : null
}, Nette.validators = {
    filled: function (a, b, c) {
        return !("" === c || c === !1 || null === c || Nette.isArray(c) && !c.length || window.FileList && c instanceof FileList && !c.length)
    }, blank: function (a, b, c) {
        return !Nette.validators.filled(a, b, c)
    }, valid: function (a) {
        return Nette.validateControl(a, null, !0)
    }, equal: function (a, b, c) {
        if (void 0 === b)return null;
        c = Nette.isArray(c) ? c : [c], b = Nette.isArray(b) ? b : [b];
        a:for (var d = 0, e = c.length; e > d; d++) {
            for (var f = 0, g = b.length; g > f; f++)if (c[d] == b[f])continue a;
            return !1
        }
        return !0
    }, notEqual: function (a, b, c) {
        return void 0 === b ? null : !Nette.validators.equal(a, b, c)
    }, minLength: function (a, b, c) {
        return c.length >= b
    }, maxLength: function (a, b, c) {
        return c.length <= b
    }, length: function (a, b, c) {
        return b = Nette.isArray(b) ? b : [b, b], (null === b[0] || c.length >= b[0]) && (null === b[1] || c.length <= b[1])
    }, email: function (a, b, c) {
        return /^("([ !\x23-\x5B\x5D-\x7E]*|\\[ -~])+"|[-a-z0-9!#$%&'*+\/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+\/=?^_`{|}~]+)*)@([0-9a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,61}[0-9a-z\u00C0-\u02FF\u0370-\u1EFF])?\.)+[a-z\u00C0-\u02FF\u0370-\u1EFF][-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,17}[a-z\u00C0-\u02FF\u0370-\u1EFF]$/i.test(c)
    }, url: function (a, b, c) {
        return /^(https?:\/\/|(?=.*\.))([0-9a-z\u00C0-\u02FF\u0370-\u1EFF](([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,61}[0-9a-z\u00C0-\u02FF\u0370-\u1EFF])?\.)*[a-z\u00C0-\u02FF\u0370-\u1EFF][-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,17}[a-z\u00C0-\u02FF\u0370-\u1EFF]|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[[0-9a-f:]{3,39}\])(:\d{1,5})?(\/\S*)?$/i.test(c)
    }, regexp: function (a, b, c) {
        var d = "string" == typeof b ? b.match(/^\/(.*)\/([imu]*)$/) : !1;
        if (d)try {
            return new RegExp(d[1], d[2].replace("u", "")).test(c)
        } catch (e) {
        }
    }, pattern: function (a, b, c) {
        try {
            return "string" == typeof b ? new RegExp("^(" + b + ")$").test(c) : null
        } catch (d) {
        }
    }, integer: function (a, b, c) {
        return /^-?[0-9]+$/.test(c)
    }, "float": function (a, b, c) {
        return /^-?[0-9]*[.,]?[0-9]+$/.test(c)
    }, min: function (a, b, c) {
        return Nette.validators.range(a, [b, null], c)
    }, max: function (a, b, c) {
        return Nette.validators.range(a, [null, b], c)
    }, range: function (a, b, c) {
        return Nette.isArray(b) ? (null === b[0] || parseFloat(c) >= b[0]) && (null === b[1] || parseFloat(c) <= b[1]) : null
    }, submitted: function (a) {
        return a.form["nette-submittedBy"] === a
    }, fileSize: function (a, b, c) {
        if (window.FileList)for (var d = 0; d < c.length; d++)if (c[d].size > b)return !1;
        return !0
    }, image: function (a, b, c) {
        if (window.FileList && c instanceof FileList)for (var d = 0; d < c.length; d++) {
            var e = c[d].type;
            if (e && "image/gif" !== e && "image/png" !== e && "image/jpeg" !== e)return !1
        }
        return !0
    }
}, Nette.toggleForm = function (a, b) {
    var c;
    for (Nette.toggles = {}, c = 0; c < a.elements.length; c++)a.elements[c].nodeName.toLowerCase()in{
        input: 1,
        select: 1,
        textarea: 1,
        button: 1
    } && Nette.toggleControl(a.elements[c], null, null, !b);
    for (c in Nette.toggles)Nette.toggle(c, Nette.toggles[c], b)
}, Nette.toggleControl = function (a, b, c, d) {
    b = b || Nette.parseJSON(a.getAttribute("data-nette-rules"));
    for (var e = !1, f = Object.prototype.hasOwnProperty, g = function () {
        Nette.toggleForm(a.form, a)
    }, h = [], i = 0, j = b.length; j > i; i++) {
        var k = b[i], l = k.op.match(/(~)?([^?]+)/);
        if (k.neg = l[1], k.op = l[2], k.condition = !!k.rules, k.condition) {
            var m = k.control ? a.form.elements[k.control] : a, n = c;
            if (n !== !1) {
                if (n = Nette.validateRule(m, k.op, k.arg), null === n)continue;
                k.neg && (n = !n)
            }
            if (Nette.toggleControl(a, k.rules, n, d) || k.toggle) {
                if (e = !0, d)for (var o = !document.addEventListener, p = m.nodeName ? [m] : m, q = 0; q < p.length; q++)Nette.inArray(h, p[q]) || (Nette.addEvent(p[q], o && m.type in{
                    checkbox: 1,
                    radio: 1
                } ? "click" : "change", g), h.push(p[q]));
                for (var r in k.toggle || [])f.call(k.toggle, r) && (Nette.toggles[r] = Nette.toggles[r] || n ^ !k.toggle[r])
            }
        }
    }
    return e
}, Nette.parseJSON = function (s) {
    return s = s || "[]", "{op" === s.substr(0, 3) ? eval("[" + s + "]") : window.JSON && window.JSON.parse ? JSON.parse(s) : eval(s)
}, Nette.toggle = function (a, b) {
    var c = document.getElementById(a);
    c && (c.style.display = b ? "" : "none")
}, Nette.initForm = function (a) {
    a.noValidate = "novalidate", LiveForm.forms[a.id] = {hasError: !1}, Nette.addEvent(a, "submit", function (b) {
        return Nette.validateForm(a) ? void 0 : (b && b.stopPropagation ? b.stopPropagation() : window.event && (event.cancelBubble = !0), !1)
    }), Nette.addEvent(a, "click", function (b) {
        b = b || event;
        var c = b.target || b.srcElement;
        a["nette-submittedBy"] = c.type in{submit: 1, image: 1} ? c : null
    }), Nette.toggleForm(a);
    for (var b = 0; b < a.elements.length; b++)LiveForm.setUpHandlers(a.elements[b])
}, Nette.isArray = function (a) {
    return "[object Array]" === Object.prototype.toString.call(a)
}, Nette.inArray = function (a, b) {
    if (Array.prototype.indexOf)return a.indexOf(b) > -1;
    for (var c = 0; c < a.length; c++)if (a[c] === b)return !0;
    return !1
}, Nette.addEvent(window, "load", function () {
    for (var a = 0; a < document.forms.length; a++)Nette.initForm(document.forms[a])
}), Nette.webalize = function (a) {
    a = a.toLowerCase();
    var b, c, d = "";
    for (b = 0; b < a.length; b++)c = Nette.webalizeTable[a.charAt(b)], d += c ? c : a.charAt(b);
    return d.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}, Nette.webalizeTable = {
    "á": "a",
    "č": "c",
    "ď": "d",
    "é": "e",
    "ě": "e",
    "í": "i",
    "ň": "n",
    "ó": "o",
    "ř": "r",
    "š": "s",
    "ť": "t",
    "ú": "u",
    "ů": "u",
    "ý": "y",
    "ž": "z"
}, $(function () {
    $("#navbar").autoHidingNavbar();
    var a = $("body");
    a.on("click", ".task-icon", function () {
        var a = $(this).parent(".task");
        a.hasClass("selected") ? a.removeClass("selected") : a.addClass("selected")
    }), a.on("click", ".avatar-pick", function () {
        $(".avatar-pick").removeClass("selected"), $(this).hasClass("selected") || ($(".avatar-input").val($(this).data("avatar")), $(this).addClass("selected"))
    });
    var b = $(".project-follower");
    b.length > 0 && b.tooltip(), $.nette.init()
});