function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(t,e,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,i=r;return o=r=void 0,c=e,a=t.apply(i,n)}function x(t){return c=t,f=setTimeout(j,e),l?y(t):a}function S(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=i}function j(){var t=p();if(S(t))return T(t);f=setTimeout(j,function(t){var n=e-(t-u);return s?m(n,i-(t-c)):n}(t))}function T(t){return f=void 0,v&&o?y(t):(o=r=void 0,a)}function h(){var t=p(),n=S(t);if(o=arguments,r=this,u=t,n){if(void 0===f)return x(u);if(s)return f=setTimeout(j,e),y(u)}return void 0===f&&(f=setTimeout(j,e)),a}return e=b(e)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},h.flush=function(){return void 0===f?a:T(p())},h}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(t,e,{leading:o,maxWait:e,trailing:r})};const y={},x={form:document.querySelector(".feedback-form"),textaria:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")};console.log(x.input),x.input.addEventListener("input",t(e)((function(t){const e=t.target.value;localStorage.setItem("feedback-form-state",e)}),500)),x.form.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),x.textaria.addEventListener("input",t(e)((function(t){const e=t.target.value;localStorage.setItem("feedback-form-state",e)}),500)),x.form.addEventListener("input",(t=>{y[t.target.name]=t.target.value,console.log(y),localStorage.setItem("feedback-form-state",JSON.stringify(y))})),function(t){const e=localStorage.getItem("feedback-form-state");e&&(console.log(e),x.textaria.value=e,x.input.value=e)}();
//# sourceMappingURL=03-feedback.77e759f9.js.map