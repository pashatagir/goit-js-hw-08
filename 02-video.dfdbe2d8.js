!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,y=Math.min,m=function(){return s.Date.now()};function b(e,t,n){var i,o,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,l=t,f=e.apply(r,n)}function h(e){return l=e,a=setTimeout(T,t),d?b(e):f}function w(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=m();if(w(e))return O(e);a=setTimeout(T,function(e){var n=t-(e-c);return s?y(n,u-(e-l)):n}(e))}function O(e){return a=void 0,v&&i?b(e):(i=o=void 0,f)}function x(){var e=m(),n=w(e);if(i=arguments,o=this,c=e,n){if(void 0===a)return h(c);if(s)return a=setTimeout(T,t),b(c)}return void 0===a&&(a=setTimeout(T,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=o=a=void 0},x.flush=function(){return void 0===a?f:O(m())},x}function g(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=f.test(t);return r||a.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var h=document.querySelector("iframe"),w=new Vimeo.Player(h);w.on("timeupdate",e(t)((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3)),w.setCurrentTime(localStorage.getItem("videoplayer-current-time")).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.dfdbe2d8.js.map