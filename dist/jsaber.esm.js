function e(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="0123456789abcdefghijklmnopqrstuvwxyz",r="ABCDEFGHIJKLMNOPQRSTUVWXYZ",o="",i=t?n+r:n,a=0;a<e;a++){var c=Math.abs(Math.random()*i.length);o+=i.slice(c,c+1)}return o}function t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e(t,n)}function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Number(e),r=(n=isNaN(n)?0:n).toFixed(t+2).replace(".","");return(r=r.split("").reverse()).splice(t,0,"."),r=r.reverse().join(""),Number(r)}function r(e){return new Promise((function(t,n){var r=new Error("Load ".concat(e," resource failed")),o=window.setTimeout((function(){n(r)}),1e4),i=document.getElementsByTagName("head")[0],a=document.createElement("link");a.type="text/css",a.rel="stylesheet",a.href=e||"",i.appendChild(a),a.onload=function(){window.clearTimeout(o),t()}}))}function o(e,t){return new Promise((function(n,r){if(t&&window[t])return n(window[t]);var o=new Error("Load '".concat(e,"' failed")),i=window.setTimeout((function(){r(o)}),1e4),a=document.createElement("script");a.src=e,a.type="text/javascript",document.body.appendChild(a),document.all?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(window.clearTimeout(i),n(t?window[t]:void 0))}:a.onload=function(){window.clearTimeout(i),n(t?window[t]:void 0)}}))}function i(){for(var e=navigator.userAgent,t=["Android","iPhone","webOS","BlackBerry","SymbianOS","Windows Phone","iPad","iPod"],n=!0,r=0;r<t.length;r++)if(e.indexOf(t[r])>0){n=!1;break}return n}function a(){return!i()}function c(e,t,n){return t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)}function u(e,t,n){return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Number(e);if(!e||isNaN(n))return"";var r=[],o=String(n).split("."),i=l(o,2),a=i[0],c=i[1],u=a.split(""),f="";"-"===u[0]&&(f="-",u.splice(0,1)),u.reverse().forEach((function(e,t){r.push(e),(t+1)%3==0&&t!==u.length-1&&r.push(",")}));var d=r.reverse().join("");return d=0===d.indexOf(",")?d.slice(1,d.length):d,c&&!t&&(d+=".".concat(c)),d=f?f+d:d}function d(e){var t=e.toLowerCase();if(t&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){if(4===t.length){for(var n="#",r=1;r<4;r+=1)n+=t.slice(r,r+1).concat(t.slice(r,r+1));t=n}for(var o=[],i=1;i<7;i+=2)o.push(parseInt(t.slice(i,i+2),16));return o}return[Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random())]}function s(e){if(/^(rgb|RGB)/.test(e)){var t=e.replace(/(?:(|)|rgb|RGB)*/g,"").split(","),n="#";return t.forEach((function(e){var t=Number(e).toString(16);t=t<10?"0".concat(t):t,"0"===String(t)&&(t+=t),n+=t})),7!==n.length&&(n=e),n}if(/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)){var r=e.replace(/#/,"").split("");if(6===r.length)return e;if(3===r.length){var o="#";return r.forEach((function(e){o+=e+e})),o}}return e}var h={colorHex:s,colorRgb:d,createHash:t,isPC:i,isPhone:a,off:c,on:u,loadCss:r,loadResource:o,percentNumber:n,thousandBitSeparator:f};export default h;export{s as colorHex,d as colorRgb,t as createHash,i as isPC,a as isPhone,r as loadCss,o as loadResource,c as off,u as on,n as percentNumber,f as thousandBitSeparator};
