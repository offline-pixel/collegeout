(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{AbJG:function(t,e,n){"use strict";n.r(e),n.d(e,"startInputShims",function(){return v});var o=n("7gGu"),r=new WeakMap;function a(t,e,n,o){void 0===o&&(o=0),r.has(t)!==n&&(n?function(t,e,n){var o=e.parentNode,a=e.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,o.appendChild(a),r.set(t,a);var i="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d("+i+"px,"+n+"px,0) scale(0)"}(t,e,o):function(t,e){var n=r.get(t);n&&(r.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""}(t,e))}function i(t){return t===t.getRootNode().activeElement}var u="input, textarea, [no-blur]",c=.3;var s="$ionPaddingTimer";function l(t,e){if("INPUT"===t.tagName&&!(t.parentElement&&"ION-INPUT"===t.parentElement.tagName||t.parentElement&&t.parentElement.parentElement&&"ION-SEARCHBAR"===t.parentElement.parentElement.tagName)){var n=t.closest("ion-content");if(null!==n){var o=n[s];o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n[s]=setTimeout(function(){n.style.setProperty("--keyboard-offset","0px")},120)}}}var d=!0,f=!0;function v(t){var e=document,n=t.getNumber("keyboardHeight",290),r=t.getBoolean("scrollAssist",!0),s=t.getBoolean("hideCaretOnScroll",!0),v=t.getBoolean("inputBlurring",!0),m=t.getBoolean("scrollPadding",!0),p=new WeakMap,E=new WeakMap;function g(t){var e=(t.shadowRoot||t).querySelector("input")||(t.shadowRoot||t).querySelector("textarea"),u=t.closest("ion-content");if(e){if(u&&s&&!p.has(t)){var l=function(t,e,n){if(!n||!e)return function(){};var o=function(n){i(e)&&a(t,e,n)},r=function(){return a(t,e,!1)},u=function(){return o(!0)},c=function(){return o(!1)};return n.addEventListener("ionScrollStart",u),n.addEventListener("ionScrollEnd",c),e.addEventListener("blur",r),function(){n.removeEventListener("ionScrollStart",u),n.removeEventListener("ionScrollEnd",c),e.addEventListener("ionBlur",r)}}(t,e,u);p.set(t,l)}u&&r&&!E.has(t)&&(l=function(t,e,n,r){var u,s=function(t){u=Object(o.j)(t)},l=function(s){u&&(function(t,e,n){if(u&&n){var o=u.x-n.x,r=u.y-n.y;return o*o+r*r>36}return!1}(0,0,Object(o.j)(s))||i(e)||(s.preventDefault(),s.stopPropagation(),function(t,e,n,o){var r=function(t,e,n){return function(e,n,o,r){var a=e.top,i=e.bottom,u=n.top,s=u+15,l=.5*Math.min(n.bottom,t.ownerDocument.defaultView.innerHeight-o)-i,d=s-a,f=Math.round(l<0?-l:d>0?-d:0),v=Math.min(f,a-u),m=Math.abs(v);return{scrollAmount:v,scrollDuration:Math.min(400,Math.max(150,m/c)),scrollPadding:o,inputSafeY:4-(a-s)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n)}(t,n,o);Math.abs(r.scrollAmount)<4?e.focus():(a(t,e,!0,r.inputSafeY),e.focus(),n.scrollByPoint(0,r.scrollAmount,r.scrollDuration).then(function(){a(t,e,!1,r.inputSafeY),e.focus()}))}(t,e,n,r)))};return t.addEventListener("touchstart",s,!0),t.addEventListener("touchend",l,!0),function(){t.removeEventListener("touchstart",s,!0),t.removeEventListener("touchend",l,!0)}}(t,e,u,n),E.set(t,l))}}v&&d&&function(){var t=document,e=!0,n=!1;t.addEventListener("ionScrollStart",function(){n=!0}),t.addEventListener("focusin",function(){e=!0},!0),t.addEventListener("touchend",function(o){if(n)n=!1;else{var r=t.activeElement;if(r&&!r.matches(u)){var a=o.target;a!==r&&(a.matches(u)||a.closest(u)||(e=!1,setTimeout(function(){e||r.blur()},50)))}}},!1)}(),m&&f&&function(t){var e=document;e.addEventListener("focusin",function(e){l(e.target,t)}),e.addEventListener("focusout",function(t){l(t.target,0)})}(n);for(var h=0,y=Array.from(e.querySelectorAll("ion-input, ion-textarea"));h<y.length;h++)g(y[h]);e.body.addEventListener("ionInputDidLoad",function(t){g(t.target)}),e.body.addEventListener("ionInputDidUnload",function(t){var e,n;e=t.target,s&&((n=p.get(e))&&n(),p.delete(e)),r&&((n=E.get(e))&&n(),E.delete(e))})}}}]);