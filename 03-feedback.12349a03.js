!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var r,i,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function j(e){return l=e,f=setTimeout(x,t),d?b(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function x(){var e=g();if(O(e))return T(e);f=setTimeout(x,function(e){var n=t-(e-c);return s?p(n,a-(e-l)):n}(e))}function T(e){return f=void 0,v&&r?b(e):(r=i=void 0,u)}function h(){var e=g(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(x,t),b(c)}return void 0===f&&(f=setTimeout(x,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},h.flush=function(){return void 0===f?u:T(g())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j,O={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};O.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===O.input.value||""===O.textarea.value)return alert("Я що дарма кодив? Заповни будь ласка усі комірки!");e.currentTarget.reset(),console.log(x),x={},localStorage.removeItem("feedback-form-state")})),O.form.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(x))}),500)),(j=JSON.parse(localStorage.getItem("feedback-form-state")))&&(O.input.value=j.email,O.textarea.value=j.message);var x=JSON.parse(localStorage.getItem("feedback-form-state"))||{}}();
//# sourceMappingURL=03-feedback.12349a03.js.map
