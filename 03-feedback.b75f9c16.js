!function(){function t(e){return e&&e.__esModule?e.default:e}var n,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof r&&r&&r.Object===Object&&r,s="object"==typeof self&&self&&self.Object===Object&&self,v=d||s||Function("return this")(),m=Object.prototype.toString,g=Math.max,b=Math.min,p=function(){return v.Date.now()};function y(e,t,n){var r,o,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function y(e){return l=e,f=setTimeout(T,t),d?m(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function T(){var e=p();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return s?b(n,a-(e-l)):n}(e))}function h(e){return f=void 0,v&&r?m(e):(r=o=void 0,u)}function w(){var e=p(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return y(c);if(s)return f=setTimeout(T,t),m(c)}return void 0===f&&(f=setTimeout(T,t)),u}return t=j(t)||0,S(n)&&(d=!!n.leading,a=(s="maxWait"in n)?g(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function S(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(S(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=S(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=f.test(e);return r||c.test(e)?l(e.slice(2),r?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return S(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form");O.addEventListener("input",t(n)((function(t){T[e.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),O.addEventListener("submit",(function(e){console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));var T={};!function(){JSON.parse(localStorage.getItem("feedback-form-state"));var e=document.querySelector(".feedback-form input"),t=document.querySelector(".feedback-form textarea");e.value=dataStoreage.email||"",t.value=dataStoreage.message||""}()}();
//# sourceMappingURL=03-feedback.b75f9c16.js.map
