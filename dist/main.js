!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/home/xoxefdp/WORKSPACE/PROJECTS/NPM_LIBS/timer-creator/dist",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var o={MILISECOND:1,SECOND:1e3,MINUTE:6e4,HOUR:36e5,DAY:864e5};const n=e=>!!e&&"[object Map]"===e.toString(),i=()=>new Map,u=(e,t,r)=>{e&&t&&r&&n(e)&&e.set(t,r)},a=(e,t)=>n(e)&&e.get(t),s=(e,t)=>n(e)&&e.has(t),c=(e,t)=>{n(e)&&e.delete(t)};var l=(e,t)=>{var r;(r=e)&&"function"==typeof r&&(t?Array.isArray(t)&&0!==t.length?e(...t):e(t):e())};const f=i(),p=e=>s(f,e),d=e=>a(f,e),x=i(),v=e=>{c(x,e)},y=e=>s(x,e),m=e=>a(x,e);exports.TimeUnit=o,exports.existInterval=p,exports.getInterval=d,exports.createInterval=(e,t,r,o)=>{if(!p(e)){const n=setInterval(()=>{l(t,o)},r);u(f,e,n)}},exports.destroyInterval=e=>{p(e)&&(clearInterval(d(e)),(e=>{c(f,e)})(e))},exports.existTimeout=y,exports.getTimeout=m,exports.createTimeout=(e,t,r,o)=>{if(!y(e)){const n=setTimeout(()=>{v(e),l(t,o)},r);u(x,e,n)}},exports.destroyTimeout=e=>{y(e)&&(clearTimeout(m(e)),v(e))}}]);