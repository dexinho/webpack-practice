(()=>{"use strict";var e,t,r={807:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(e);var t,r,o=Number(e.slice(-1));return a.test(e)&&o===((r=10-(t=e).slice(0,-1).split("").map((function(e,r){return Number(e)*function(e,t){return e===u||e===l?t%2==0?3:1:t%2==0?1:3}(t.length,r)})).reduce((function(e,t){return e+t}),0)%10)<10?r:0)};var o,n=(o=r(571))&&o.__esModule?o:{default:o},u=8,l=14,a=/^(\d{8}|\d{13}|\d{14})$/;e.exports=t.default,e.exports.default=t.default},571:(e,t)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!("string"==typeof e||e instanceof String)){var t=r(e);throw null===e?t="null":"object"===t&&(t=e.constructor.name),new TypeError("Expected a string but received a ".concat(t))}},e.exports=t.default,e.exports.default=t.default}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var u=o[e]={exports:{}};return r[e](u,u.exports,n),u.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=n(807),t=n.n(e),console.log(t()("agas@a.com"))})();