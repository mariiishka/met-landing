parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelector(".page__button-scroll"),t=250;e.addEventListener("click",function(){window.scrollTo(0,0)}),window.addEventListener("scroll",function(){window.scrollY>=t?e.classList.add("page__button-scroll--visible"):e.classList.remove("page__button-scroll--visible")})}function t(){var e=document.querySelector(".menu"),t=document.querySelector(".burger-menu"),n=document.querySelector(".menu__closer"),o=document.querySelectorAll(".menu__link");function c(){document.body.classList.toggle("page--with-menu"),e.classList.toggle("page--menu-open")}t.addEventListener("click",c),n.addEventListener("click",c),o.forEach(function(e){e.addEventListener("click",c)})}function n(){var e=document.querySelector(".form"),t=document.querySelectorAll(".form__field--required");document.querySelector(".form__submit").addEventListener("click",function(){t.forEach(function(e){e.setAttribute("required","")})}),e.addEventListener("submit",function(n){n.preventDefault(),e.reset(),window.scrollTo(0,0),t.forEach(function(e){e.removeAttribute("required","")})})}document.addEventListener("DOMContentLoaded",function(){e(),t(),n()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c212c13b.js.map