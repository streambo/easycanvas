!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(31)},function(t,e){"use strict";var n={isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},funcOrValue:function(t,e){if("function"==typeof t){var n=t.call(e);return n}return t},execFuncs:function(t,e,i){if(t&&(n.isArray(i)||(i=[i])),"function"==typeof t)return t.apply(e,i);if(n.isArray(t)){var r=[];return t.forEach(function(t){r.push(t&&t.apply(e,i))}),r}},blend:["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","copy","xor","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pointInRect:function(t,e,n,i,r,o){return!(t<n||t>i||e<r||e>o)},firstValuable:function(t,e,n){return"undefined"==typeof t?"undefined"==typeof e?n:e:t}};t.exports=n},function(t,e){"use strict";var n=3.141593;t.exports=function(t,e,i,r,o,a){var s=o?-o/180*n:0,l=t,u=e;return o&&(l=(t-i)*Math.cos(s)-(e-r)*Math.sin(s)+i,u=(t-i)*Math.sin(s)+(e-r)*Math.cos(s)+r),a?[l,u]:{x:l,y:u}}},,function(t,e){"use strict";t.exports={xywh:["sx","sy","sw","sh","tx","ty","tw","th"],txywh:["tx","ty","tw","th"],sxywh:["sx","sy","sw","sh"],devFlag:"__EASYCANVAS_DEVTOOL__",version:"0.5.11"}},,,,,function(t,e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i={},r=[],o=0,a=function t(e,a,s){var l=s||{},u=t.cacheCanvas;if("object"===("undefined"==typeof e?"undefined":n(e))){var f=e;return l.callbackArgs=l.callbackArgs||[],void t(f.shift(),function(e){l.callbackArgs.push(e),f.length>1?t(f,a,l):t(f[0],function(t){l.callbackArgs.push(t),a(l.callbackArgs)},l)},s)}var c=e+"_"+JSON.stringify(s)+"_"+u;if(i[c])return a?void(i[c].width&&a?a(i[c]):setTimeout(function(){t(e,a,s)},100)):i[c];var h=new Image;l.block?(h.src=e,o++):0===o?h.src=e:r.push({imgObj:h,src:e}),i[c]=h;var d=void 0;return(l.canvas||l.alphaColor||u)&&(d=document.createElement("canvas"),d.width=d.height||0,i[c]=d),h.onload=function(){if("jpg"===h.src.substr(-3)||"jpeg"===h.src.substr(-3)||"bmp"===h.src.substr(-3)?h.$noAlpha=!0:0===h.src.indexOf("data:image/jpg;")&&(h.$noAlpha=!0),l.block&&(o--,0===o&&(r.forEach(function(t){t.imgObj.src=t.src}),r.splice(0))),d&&(l.canvas||l.alphaColor||u)){var t=d.getContext("2d");if(d.width=h.width,d.height=h.height,d.$noAlpha=h.$noAlpha,t.drawImage(h,0,0),l.alphaColor){for(var e=t.getImageData(0,0,h.width,h.height),n=0;n<e.data.length;n+=4){var i=e.data[n]+e.data[n+1]+e.data[n+2],s=1;e.data[n]<s&&e.data[n+1]<s&&e.data[n+2]<s&&(e.data[n+3]=Math.floor(i/255))}t.putImageData(e,0,0),d.$noAlpha=!1}h=d}a&&a(h)},h.onerror=function(){i[c]=h},d||h};a.cacheCanvas=!1,t.exports=a},function(t,e){"use strict";function n(t,e){if(t&&t.match(/^data:/))return void(e&&e(t));if(r[t])return void(r[t]!==i?e(r[t]):setTimeout(function(){n(t,e)},100));r[t]=i;var o=new XMLHttpRequest;o.onload=function(){var n=new FileReader;n.onloadend=function(){r[t]=n.result,e&&e(n.result)},n.readAsDataURL(o.response)},o.open("GET",t),o.responseType="blob",o.send()}var i="processing",r={};t.exports=n},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(2);i(r);t.exports=function(t,e,n,i,r,o,a,s,l){return l&&(t=(t-a)*Math.cos(l)-(e-s)*Math.sin(l)+a,e=(t-a)*Math.sin(l)+(e-s)*Math.cos(l)+s),t>=n&&t<=n+r&&e>=i&&e<=i+o}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(2),o=(i(r),n(11)),a=i(o);t.exports=function(t,e,n,i,r,o,s,l,u,f,c){var h=(0,a.default)(t,e,r,o,s,l,u,f,c)||(0,a.default)(t+n,e,r,o,s,l,u,f,c)||(0,a.default)(t,e+i,r,o,s,l,u,f,c)||(0,a.default)(t+n,e+i,r,o,s,l,u,f,c);if(h)return!0;var d=(0,a.default)(r,o,t,e,n,i,u,f,-c)||(0,a.default)(r+s,o,t,e,n,i,u,f,-c)||(0,a.default)(r,o+l,t,e,n,i,u,f,-c)||(0,a.default)(r+s,o+l,t,e,n,i,u,f,-c);return!!d||(e>o&&e+i<o+l&&t<r&&t+n>r+s||t>r&&t+n<r+s&&e<o&&e+i>o+l)}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(1),a=i(o),s=n(4),l=i(s),u=n(18),f=i(u),c=n(17),h=i(c),d=n(15),p=i(d),v=n(16),y=i(v),g=n(19),x=i(g),m=n(14),$=i(m),w=function t(e){e.children&&e.children.forEach(function(n,i){n.$id||(e.children[i]=new k(n)),e.$id&&!e.$dom?(e.children[i].$canvas=e.$canvas,e.children[i].$parent=e):e.children[i].$canvas=e,t(e.children[i])})},b=function(t){var e=t||{};e.$id||(e.$id=Math.random().toString(36).substr(2)),e.$tickedTimes=e.$tickedTimes||0,e.content=e.content||{},e.style=e.style||{},e.style.tx=e.style.tx||0,e.style.ty=e.style.ty||0,e.style.scale=a.default.firstValuable(e.style.scale,1),e.style.opacity=a.default.firstValuable(e.style.opacity,1),e.style.zIndex=e.style.zIndex||0,e.style.mirrX=e.style.mirrX||0,e.style.locate=e.style.locate||"center";a.default.funcOrValue(e.content.img);l.default.xywh.forEach(function(t){e.style[t]=e.style[t]||0}),e.inherit=e.inherit,e.drag=e.drag||{},e.events=e.events||{};e.events.eIndex=e.events.eIndex,e.hooks=e.hooks||{};return e.children=e.children||[],w(e),e.$cache={},e.$styleCacheTime={},e},T=function(t){var e=this;this.$extendList.forEach(function(n){n.call(e,t)})},k=function(t){var e=b(t);for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(this[n]=e[n]);return T.call(this,e),this};k.prototype.$extendList=[],k.prototype.add=function(t){if(t)return this.children.push(t),w(this),this.children[this.children.length-1]},k.prototype.getRect=function(){var t=this,e={};if(l.default.txywh.forEach(function(n){e[n]=t.getStyle(n)}),0===e.tw&&this.content.img){var n=a.default.funcOrValue(this.content.img,this);e.tw=n.width,e.th=n.height}var i=this.getStyle("locate");return"lt"===i||("ld"===i?e.ty-=e.th:"rt"===i?e.tx-=e.tw:"rd"===i?(e.tx-=e.tw,e.ty-=e.th):(e.tx-=e.tw>>1,e.ty-=e.th>>1)),e},k.prototype.getSelfStyle=function(t){var e={};if(t)return a.default.funcOrValue(this.style[t],this);for(var n in this.style)e[n]=a.default.funcOrValue(this.style[n],this);return e},k.prototype.getStyle=function(t){var e=this,n=e.$canvas.$lastPaintTime;if(e.$styleCacheTime[t]===n)return e.$cache[t];var i=a.default.funcOrValue(e.style[t],e);if(e.$parent){var r=void 0;if(r=e.inherit?e.inherit.indexOf(t)>=0:"tx"===t||"ty"===t||"scale"===t||"opacity"===t){var o=e.$parent.getStyle(t);return"opacity"===t||"scale"===t?(o=a.default.firstValuable(o,1),e.$parent.$styleCacheTime[t]=n,e.$parent.$cache[t]=o,o*a.default.firstValuable(i,1)):(o=a.default.firstValuable(o,0),e.$parent.$styleCacheTime[t]=n,e.$parent.$cache[t]=o,o+a.default.firstValuable(i,0))}}return i},k.prototype.remove=function(t){return t?(this.$canvas.remove(t),void a.default.execFuncs(t.hooks.removed,t)):(this.$parent?this.$parent.remove(this):this.$canvas.remove(this),void a.default.execFuncs(this.hooks.removed,this))},k.prototype.update=function(t){if(t)for(var e in t)if("object"===r(t[e]))for(var n in t[e])this[e][n]=t[e][n];else this[e]=t[e]},k.prototype.nextTick=y.default,k.prototype.on=f.default,k.prototype.off=h.default,k.prototype.clear=p.default,k.prototype.trigger=x.default,k.prototype.broadcast=$.default,t.exports=k},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(1),o=i(r);t.exports=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();this.hooks[e]&&o.default.execFuncs(this.hooks[e],this,t),t.unshift(e),this.children&&this.children.forEach(function(e){e.broadcast.apply(e,t)})}},function(t,e){"use strict";t.exports=function(){this.children.forEach(function(t){t.remove()}),this.children=[]}},function(t,e){"use strict";t.exports=function(t){var e=function e(){t.apply(this,arguments),this.off("ticked",e)};this.on("ticked",e)}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(1),o=i(r);t.exports=function(t,e){this.hooks[t]&&(this.hooks[t]!==e&&e?o.default.isArray(this.hooks[t])&&(this.hooks[t][this.hooks[t].indexOf(e)]=void 0):delete this.hooks[t])}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(1),o=i(r);t.exports=function(t,e,n){var i=e;if(n){var r=this;i=function(){var t=Date.now();if(t>i.$lastTriggerTime+n){i.$lastTriggerTime=t;var o=Array.prototype.slice.call(arguments);e.apply(r,o)}},i.$lastTriggerTime=-1}this.hooks[t]?o.default.isArray(this.hooks[t])?this.hooks[t].push(i):this.hooks[t]=[this.hooks[t],i]:this.hooks[t]=i}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(1),o=i(r);t.exports=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();if(this.hooks[e])return o.default.execFuncs(this.hooks[e],this,t)}},,,,,,,,function(t,e){"use strict";var n=function(t){setTimeout(t,1e3/60)},i="undefined"!=typeof requestAnimationFrame?requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||n:n;t.exports=i},function(t,e,n){"use strict";var i=n(1),r=3.141593,o=function(t){return t.$lastPaintTime||Date.now()},a={linear:function(t,e,n){var i=o(this),r=!1,a=void 0,s=function(){var o=this.$lastPaintTime,l=(o-i)/n,u=(e-t)*l+t;if(r)if(e>t)for(;u>e;)u-=e-t;else for(;u<e;)u+=t-e;else e>t&&u>e?(s.$done=!0,u=e):e<t&&u<e&&(s.$done=!0,u=e);return l>=1&&a&&(a.call(this,u),a=null),u}.bind(this);return s.loop=function(){return r=!0,s},s.restart=function(){return i=o(this),s},s.then=function(t){return a=t,s},s},pendulum:function(t,e,n,i){var a=o(this),s=i||{};s.start=s.start||0;var l=!1,u=void 0,f=s.cycle||1,c=function(){var i=o(this),h=(i-a)/n;l?f&&(h%=f):f?h>f&&(h=f,c.$done=!0,h=f):h>1&&(c.$done=!0,h=1);var d=h*r*2-r/2+s.start/360*r,p=(e-t)*(Math.sin(d)+1)/2+t;return h>=f&&u&&(u.call(this,p),u=null),p}.bind(this);return c.loop=function(){return l=!0,c},c.restart=function(){return a=o(this),c},c.then=function(t){return u=t,c},c},ease:function(t,e,n){return this.pendulum(t,e,2*n,{cycle:.5})},oneByOne:function(t){var e=t,n=!1,i=function(){for(var t=0;t<e.length;t++){if(!e[t].$done)return e[t]();if(!e[t].$nextRestart&&(e[t].$nextRestart=!0,e[t+1]))return e[t+1].restart(),e[t+1]()}if(n){for(var i=0;i<e.length;i++)e[i].$done=!1,e[i].$nextRestart=!1,e[i].restart();return e[0]()}return e[e.length-1]()};return i.loop=function(){return n=!0,i},i}},s=function t(e,n,r,o,s){var l=(0,i.funcOrValue)(e[n]);l=l||0,e[n]=a[r].bind(t)(l,o,s)};for(var l in a)s[l]=a[l];t.exports=s},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},n(4)),o=(i(r),n(1));i(o)},,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(4),o=i(r),a=n(53),s=i(a),l=n(27),u=i(l),f=n(95),c=i(f),h=n(1),d=i(h),p=n(28),v=i(p),y=n(9),g=i(y),x=n(94),m=i(x),$=n(96),w=i($),b=n(13),T=i(b),k=n(29),O=(i(k),{painter:s.default,imgLoader:g.default,imgPretreat:m.default,multlineText:w.default,transition:v.default,tick:u.default,utils:d.default,mirror:c.default,class:{sprite:T.default},sprite:T.default,$version:o.default.version,env:"production"});O.extend=function(t){var e=O.sprite.prototype.$extendList;e.indexOf(t)>=0||e.push(t)},O.use=function(t){var e=O.painter.prototype.$extendList;e.indexOf(t)>=0||(t.onUse&&t.onUse(O),e.push(t))},O.component=function(t,e){t(O,e)};var M="undefined"!=typeof window;M&&(window.Easycanvas?console.warn("[Easycanvas] already loaded, it should be loaded only once."):window.Easycanvas=O),t.exports=O},,,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(40),o=i(r),a=n(42),s=i(a),l=n(36),u=i(l),f=n(41),c=i(f),h=n(52),d=(i(h),{$render:s.default,$eventHandler:u.default,$perPaint:o.default,$rAFer:c.default});t.exports=d},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(1),o=i(r),a=n(4),s=(i(a),function(t){return t.sort(function(t,e){return o.default.funcOrValue(o.default.firstValuable(t.events.eIndex,t.style.zIndex),t)<o.default.funcOrValue(o.default.firstValuable(e.events.eIndex,e.style.zIndex),e)?1:-1})}),l=function(t,e){var n=t.getRect();return o.default.pointInRect(e.canvasX,e.canvasY,n.tx,n.tx+n.tw,n.ty,n.ty+n.th)},u=function t(e,n,i){if(e&&e.length&&!n.$stopPropagation)for(var r=e.length,a=0;a<r;a++){var u=e[a];if(o.default.funcOrValue(u.style.visible,u)!==!1){if(l(u,n)&&u.events.interceptor){var f=o.default.firstValuable(u.events.interceptor.call(u,n),n);if(!f||f.$stopPropagation)continue}if(u.children.length&&t(s(u.children.filter(function(t){return o.default.funcOrValue(o.default.firstValuable(t.events.eIndex,t.style.zIndex),t)>=0})),n,i),l(u,n)){i.push(u);c(u,n);if(n.$stopPropagation)break}u.children.length&&t(s(u.children.filter(function(t){return!(o.default.funcOrValue(o.default.firstValuable(t.events.eIndex,t.style.zIndex),t)>=0)})),n,i)}}},f=function(t,e){var n=this;this.$extendList.forEach(function(i){i.onEvent&&i.onEvent.call(n,t,e)})},c=function(t,e){if(t.events&&t.events[e.type]&&!e.$stopPropagation){var n=t.events[e.type].call(t,e);return n===!0||(!!t.events.stopPropagation||void 0)}};t.exports=function(t,e){var n=this,i=void 0,r=void 0,a=1,l=1;if(!e){!t.layerX&&t.targetTouches&&t.targetTouches[0]?(i=t.targetTouches[0].pageX-t.currentTarget.offsetLeft,r=t.targetTouches[0].pageY-t.currentTarget.offsetTop):!t.layerX&&t.changedTouches&&t.changedTouches[0]?(i=t.changedTouches[0].pageX-t.currentTarget.offsetLeft,r=t.changedTouches[0].pageY-t.currentTarget.offsetTop):(i=t.layerX,r=t.layerY);var c=!1;if(this.$dom.getBoundingClientRect){var h=this.$dom.getBoundingClientRect();a=Math.floor(h[c?"height":"width"])/this.width,l=Math.floor(h[c?"width":"height"])/this.height}}var d=e||{type:t.type,canvasX:i/a,canvasY:r/l,event:t};if(d.stopPropagation=function(){d.$stopPropagation=!0},!n.events.interceptor||(d=o.default.firstValuable(n.events.interceptor.call(n,d),d),d&&!d.$stopPropagation)){var p=[];u(s(n.children),d,p),f.call(n,d,p);if(("mousemove"===d.type||"touchmove"===d.type)&&n.eLastMouseHover&&p.indexOf(n.eLastMouseHover)===-1){var v=n.eLastMouseHover.events.mouseout||n.eLastMouseHover.events.touchout;v&&v.call(n.eLastMouseHover,d)}if(n.eLastMouseHover=p[0],!p.length&&n.eLastMouseHover){var y=n.eLastMouseHover.events.mouseout;y&&y.call(n.eLastMouseHover,d),n.eLastMouseHover=null}var g=n.events[d.type];return g&&g.call(n,d)?(n.eHoldingFlag=!1,!0):void 0}}},function(t,e){"use strict";t.exports=function(t,e,n,i){if(e.sx<0&&e.sw){var r=-e.sx/e.sw;e.tx+=e.tw*r,e.sx=0}if(e.sy<0&&e.sh){var o=-e.sy/e.sh;e.ty+=e.th*o,e.sy=0}if(n&&e.sx+e.sw>n){var a=(e.sx+e.sw-n)/e.sw;e.sw-=e.sw*a,e.tw-=e.tw*a}if(i&&e.sy+e.sh>i){var s=(e.sy+e.sh-i)/e.sh;e.sh-=e.sh*s,e.th-=e.th*s}if(e.tx<0&&e.tw>-e.tx){var l=-e.tx/e.tw;e.sx+=e.sw*l,e.sw-=e.sw*l,e.tw=e.tw+e.tx,e.tx=0}if(e.ty<0&&e.th>-e.ty){var u=-e.ty/e.th;e.sy+=e.sh*u,e.sh-=e.sh*u,e.th=e.th+e.ty,e.ty=0}if(e.tw&&e.tx+e.tw>t.width){var f=(e.tx+e.tw-t.width)/e.tw;e.tw-=e.tw*f,e.sw-=e.sw*f}if(e.th&&e.ty+e.th>t.height){var c=(e.ty+e.th-t.height)/e.th;e.th-=e.th*c,e.sh-=e.sh*c}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(1),o=i(r);t.exports=function(t,e,n){e&&e.filter(function(t){var e=o.default.funcOrValue(t.style.zIndex,t);return n<0?e<0:e>=0}).sort(function(t,e){var n=o.default.funcOrValue(t.style.zIndex,t),i=o.default.funcOrValue(e.style.zIndex,e);return n===i?0:n>i?1:-1}).forEach(function(e,n){t.$perPaint.call(t,e,n)})}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(1),o=i(r);t.exports=function(t,e){var n={};for(var i in t.content)n[i]=o.default.funcOrValue(t.content[i],t);"string"==typeof n.img&&(n.img=t.content.img=e.imgLoader(n.img));for(var r in t.style)n[r]=t.getStyle(r);if(t.inherit&&t.inherit.forEach(function(e){n[e]=t.getStyle(e)}),n.sequence){var a=n.img,s=n.sequence;n.sequence.index=n.sequence.index||0;var l=n.sequence.index||0;l<0&&(l=0);var u=void 0,f=void 0;if(s.w||s.h){u=s.w<0?a.width/(0-s.w):s.w>0?s.w:a.width,f=s.h<0?a.height/(0-s.h):s.h>0?s.h:a.height;var c=Math.floor(a.width/u),h=Math.floor(a.height/f);n.sx=l%c*u,n.sy=Math.floor(l/c)%h*f}!s.loop&&l>0&&0===n.sx&&0===n.sy&&(n.img=void 0,s.onOver?s.onOver.call(t):t.remove()),n.sequence.lastTickTime=n.sequence.lastTickTime||0,e.$nextTickTime-n.sequence.lastTickTime>=o.default.funcOrValue(n.sequence.interval,t)&&(s.lastTickTime=e.$nextTickTime,n.sequence.index++,n.sequence.lastTickTime=e.$nextTickTime),n.sw=n.sw||u,n.sh=n.sh||f,n.tw=n.tw||u,n.th=n.th||f}return n}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(1),o=i(r),a=n(4),s=(i(a),n(39)),l=i(s),u=n(37),f=i(u),c=n(38),h=i(c),d=n(12),p=i(d),v=o.default.blend,y=function(t){var e=/[^\u4e00-\u9fa5]/;return!e.test(t)},g=function(){var t=this;this.$canvas.$extendList.forEach(function(e){e.onPaint&&e.onPaint.call(t)})};t.exports=function(t,e){if(t.$rendered=!1,o.default.funcOrValue(t.style.visible,t)===!1)return o.default.execFuncs(t.hooks.beforeTick,t,t.$tickedTimes),void o.default.execFuncs(t.hooks.ticked,t,++t.$tickedTimes);o.default.execFuncs(t.hooks.beforeTick,t,t.$tickedTimes);var n=this;g.call(t);var i=(0,l.default)(t,n),r={globalAlpha:o.default.firstValuable(i.opacity,1)},a=i.text,s=i.img,u=o.default.funcOrValue(t.children,t),c=s?s.width||0:0,d=s?s.height||0:0;if(i.tw=i.tw||i.sw||c,i.th=i.th||i.sh||d,i.sw=i.sw||c,i.sh=i.sh||d,"lt"===i.locate||("ld"===i.locate?i.ty-=i.th:"rt"===i.locate?i.tx-=i.tw:"rd"===i.locate?(i.tx-=i.tw,i.ty-=i.th):(i.tx-=i.tw>>1,i.ty-=i.th>>1)),(i.fh||i.fv)&&(i.fh=i.fh||0,i.fv=i.fv||0,i.fx=i.fx||0,i.fy=i.fy||0,r.transform={fh:i.fh,fv:i.fv,fx:-(i.ty+(i.th>>1))*i.fv+i.fx,fy:-(i.tx+(i.tw>>1))*i.fh+i.fy}),i.blend&&(r.globalCompositeOperation="string"==typeof i.blend?i.blend:v[i.blend]),i.rotate){var x=o.default.firstValuable(i.rx,i.tx+.5*i.tw),m=o.default.firstValuable(i.ry,i.ty+.5*i.th);r.beforeRotate=[x,m],r.rotate=-i.rotate*Math.PI/180,r.rotate=Number(r.rotate.toFixed(4)),r.afterRotate=[-x,-m]}if(i.backgroundColor&&(r.fillRect=i.backgroundColor),i.overflow&&"hidden"===i.overflow&&(r.clip=!0),1!==i.scale){var $=i.scale;i.tx-=($-1)*i.tw>>1,i.ty-=($-1)*i.th>>1,i.tw*=$,i.th*=$}i.mirrX?(r.translate=[n.width,0],r.scale=[-1,1],i.tx=n.width-i.tx-i.tw,i.mirrY&&(r.translate=[n.width,n.height],r.scale=[-1,-1],i.ty=n.height-i.ty-i.th)):i.mirrY&&(r.translate=[0,n.height],r.scale=[1,-1],i.ty=n.height-i.ty-i.th);if(r.clip){var w=(0,p.default)(i.tx,i.ty,i.tw,i.th,0,0,n.width,n.height,r.beforeRotate&&r.beforeRotate[0],r.beforeRotate&&r.beforeRotate[1],i.rotate);if(w){t.$rendered=!0;var b={$id:t.$id,type:"clip",settings:r,img:s,props:i};b.$origin=t,n.$children.push(b)}}if((0,h.default)(n,u,-1),r.fillRect){var w=(0,p.default)(i.tx,i.ty,i.tw,i.th,0,0,n.width,n.height,r.beforeRotate&&r.beforeRotate[0],r.beforeRotate&&r.beforeRotate[1],i.rotate);if(w){t.$rendered=!0;var T={$id:t.$id,type:"fillRect",settings:r,img:s,props:i};T.$origin=t,n.$children.push(T)}}if(c&&0!==i.opacity&&i.sw&&i.sh){var w=(0,p.default)(i.tx,i.ty,i.tw,i.th,0,0,n.width-1,n.height-1,r.beforeRotate&&r.beforeRotate[0],r.beforeRotate&&r.beforeRotate[1],i.rotate);if(w){t.$rendered=!0,i.rotate||a||(0,f.default)(n,i,c,d);var k={$id:t.$id,type:"img",settings:r,img:s,props:i};k.$origin=t,n.$children.push(k)}}if(a){t.$rendered=!0;var O=i.tx,M=i.ty,R=i.align||i.textAlign||"left",_=i.textFont||"14px Arial",A=parseInt(_),V=void 0,C=i.lineHeight||A;if("center"===R?O+=i.tw/2:"right"===R&&(O+=i.tw),"top"===i.textVerticalAlign?V="top":"bottom"===i.textVerticalAlign?(V="bottom",M+=i.th):"middle"===i.textVerticalAlign&&(M+=i.th>>1,V="middle"),"string"==typeof a||"number"==typeof a)M+2*A>0&&M-2*A<n.height&&n.$children.push({$id:t.$id,type:"text",settings:r,props:{tx:O,ty:M,content:String(a),fontsize:A,align:R,baseline:V,font:_,color:i.color,type:i.textType},$origin:t});else if(a.length)a.forEach(function(e){n.$children.push({$id:t.$id,type:"text",settings:r,props:{tx:O+o.default.funcOrValue(e.tx,t),ty:M+o.default.funcOrValue(e.ty,t),content:o.default.funcOrValue(e.content,t),fontsize:A,baseline:V,align:R,font:_,color:i.color,type:i.textType},$origin:t})});else if("multline-text"===a.type){var F=a.text.split(/\t|\n/),E=[];F.forEach(function(t,e){t=String.prototype.trim.apply(t),a.config.start&&(t=t.replace(a.config.start,""));for(var n=0,r=i.tw;t.length&&n<t.length;)r<=0&&(r=i.tw,E.push(t.substr(0,n)),t=t.substr(n),n=0),n++,r-=A*(y(t[n])?1.05:.6);(t||e)&&E.push(t)}),E.forEach(function(e){n.$children.push({$id:t.$id,type:"text",settings:r,props:{tx:O,ty:M,fontsize:A,content:e,baseline:V,align:R,font:_,color:i.color,type:i.textType},$origin:t}),M+=C||A})}}if(s||a||(t.$rendered=void 0),(0,h.default)(n,u,1),r.clip){var w=(0,p.default)(i.tx,i.ty,i.tw,i.th,0,0,n.width,n.height,r.beforeRotate&&r.beforeRotate[0],r.beforeRotate&&r.beforeRotate[1],i.rotate);if(w){t.$rendered=!0;var I={$id:t.$id,type:"clipOver",settings:r,img:s,props:i};I.$origin=t,n.$children.push(I)}}o.default.execFuncs(t.hooks.ticked,t,++t.$tickedTimes)}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(27),o=i(r),a=n(28),s=i(a);t.exports=function(t){var e=Date.now();s.default.$lastPaintTime=this.$nextTickTime=e,e-this.fpsCalculateTime>=1e3&&(this.fpsCalculateTime=e,this.fpsHandler&&this.fpsHandler.call(this,this.fps),this.lastFps=this.fps,this.fps=0),(0,o.default)(function(n){if(this.$rafTime=n,this.$rAFer(t),this.maxFps>0&&this.maxFps<60){if(e-this.$lastPaintTime<=1e3/this.maxFps)return;this.$lastPaintTime=e-(e-this.$lastPaintTime)%(1e3/this.maxFps)}else this.$lastPaintTime=Date.now();t()}.bind(this))}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(1),o=i(r),a=function(t,e){var n=this,i=!1;return this.$extendList.forEach(function(r){if(r.onRender){var o=r.onRender.call(n,t,e);o&&(i=o)}}),i},s=function(t,e){var n=this,i=t.props,r=void 0,s="text"===t.type;if(i&&"clip"!==t.type&&"clipOver"!==t.type){if(s){var l=i.content.length;r=i.fontsize*i.fontsize*9*l,i[5]=i.tx-1.5*i.fontsize*l,i[5]<0&&(i[5]=0),i[6]=i.ty-1.5*i.fontsize,i[6]<0&&(i[6]=0),i[7]=3*i.fontsize*l,i[5]+i[7]>n.width&&(i[7]=n.width-i[5]),i[8]=3*i.fontsize,i[6]+i[8]>n.height&&(i[8]=n.height-i[6])}else r=i.tw*i.th;if((r>4e4||s)&&!t.settings.transform&&!t.settings.rotate)for(var u=n.$children,f=u.length-1;f>e;f--){var c=u[f];if(!c.$cannotCover)if(c.type&&"img"===c.type&&"fillRect"===c.type){var h=c.props;if(h.tw*h.th<4e4)c.$cannotCover=!0;else if(!(h.tw*h.th<r))if(!c.img||c.img.$noAlpha){var d=c.settings;if(1!==d.globalAlpha||d.globalCompositeOperation||d.transform||d.rotate)c.$cannotCover=!0;else if(o.default.pointInRect(i.tx,i.ty,h.tx,h.tx+h.tw,h.ty,h.ty+h.th)&&o.default.pointInRect(i.tx+i.tw,i.ty+i.th,h.tx,h.tx+h.tw,h.ty,h.ty+h.th))return}else c.$cannotCover=!0}else c.$cannotCover=!0}}var p=t.settings||{};if(!a.call(n,t,p)){var v=n.$paintContext;"clip"===t.type&&(v.save(),v.beginPath(),v.moveTo(i.tx,i.ty),v.lineTo(i.tx+i.tw,i.ty),v.lineTo(i.tx+i.tw,i.ty+i.th),v.lineTo(i.tx,i.ty+i.th),v.lineTo(i.tx,i.ty),v.closePath(),v.clip());var y=!1;p.globalCompositeOperation&&(y||(v.save(),y=!0),v.globalCompositeOperation=p.globalCompositeOperation),1===p.globalAlpha||isNaN(p.globalAlpha)||(y||(v.save(),y=!0),v.globalAlpha=p.globalAlpha),p.translate&&(y||(v.save(),y=!0),v.translate(p.translate[0]||0,p.translate[1]||0)),p.rotate&&(y||(v.save(),y=!0),v.translate(p.beforeRotate[0]||0,p.beforeRotate[1]||0),v.rotate(p.rotate||0),v.translate(p.afterRotate[0]||0,p.afterRotate[1]||0)),p.scale&&(y||(v.save(),y=!0),v.scale(p.scale[0]||1,p.scale[1]||1)),p.transform&&(y||(v.save(),y=!0),v.transform(1,p.transform.fh,p.transform.fv,1,p.transform.fx,p.transform.fy)),"img"===t.type?v.drawImage(t.img,i.sx,i.sy,i.sw,i.sh,i.tx,i.ty,i.tw,i.th):"text"===t.type&&i.content?(v.font=i.font,v.fillStyle=i.color||"white",v.textAlign=i.align,v.textBaseline=i.baseline,v[i.type||"fillText"](i.content,i.tx,i.ty)):"fillRect"===t.type?(v.fillStyle=p.fillRect,v.fillRect(i.tx,i.ty,i.tw,i.th)):"clipOver"===t.type&&v.restore(),y&&v.restore()}};t.exports=function(){var t=this;t.$children.forEach(s.bind(t))}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(44),o=i(r),a=n(48),s=i(a),l=n(51),u=i(l),f=n(45),c=i(f),h=n(15),d=i(h),p=n(46),v=i(p),y=n(18),g=i(y),x=n(17),m=i(x),$=n(19),w=i($),b=n(14),T=i(b),k=n(16),O=i(k),M=n(47),R=i(M),_=n(49),A=i(_),V=n(50),C=i(V),F={start:u.default,paint:c.default,add:o.default,remove:s.default,register:R.default,clear:d.default,setFpsHandler:A.default,setMaxFps:C.default,pause:v.default,on:g.default,off:m.default,trigger:w.default,broadcast:T.default,nextTick:O.default};t.exports=F},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(13),o=i(r);t.exports=o.default.prototype.add},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(1),o=i(r);t.exports=function(){if(!(this.$pausing||this.$inBrowser&&document.hidden)){var t=this;o.default.execFuncs(t.hooks.beforeTick,t,[t.$rafTime]),t.$paintContext.clearRect&&t.$paintContext.clearRect(0,0,this.width,this.height),t.$freezing||(t.$children=[],this.children.sort(function(t,e){var n=o.default.funcOrValue(t.style.zIndex,t),i=o.default.funcOrValue(e.style.zIndex,e);return n===i?0:n>i?1:-1}).forEach(function(e,n){t.$perPaint(e,n)})),t.$render(),this.fps++,o.default.execFuncs(t.hooks.ticked,t,[t.$rafTime]),t.hooks.nextTick&&(o.default.execFuncs(t.hooks.nextTick,t,[t.$rafTime]),delete t.hooks.nextTick)}}},function(t,e){"use strict";t.exports=function(t){this.$pausing=void 0===t||t}},function(t,e,n){"use strict";var i=function(t){var e=this;this.$extendList.forEach(function(n){n.onCreate&&n.onCreate.call(e,t)})};t.exports=function(t,e){var n=this,r=e||{};t=this.$dom=t||this.$dom;for(var o in r)this[o]=r[o];if(this.name=r.name||t.id||t.classList&&t.classList[0]||"Unnamed",this.$inBrowser="undefined"!=typeof window,r.fullScreen&&"undefined"!=typeof document&&(t.width=t.style.width=document.body.clientWidth||document.documentElement.clientWidth,t.height=t.style.height=document.body.clientHeight||document.documentElement.clientHeight),t.width=this.width=this.width||r.width||t.width,t.height=this.height=this.height||r.height||t.height,this.events=r.events||{},this.hooks=r.hooks||{},this.$inBrowser){var a=["contextmenu","mousewheel","click","dblclick","mousedown","mouseup","mousemove","touchstart","touchend","touchmove"];a.forEach(function(e){t.addEventListener(e,n.$eventHandler.bind(n))})}return i.call(this,r),this.$paintContext=this.$paintContext||t.getContext("2d"),this}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(1),o=i(r);t.exports=function(t,e){var n=this;o.default.execFuncs(t.hooks.beforeRemove,t,t.$tickedTimes++),t.style.visible=!1,t.$removing=!0,setTimeout(function(){t.$parent?t.$parent.children=t.$parent.children.filter(function(t){return t.$removing!==!0}):n.children=n.children.filter(function(t){return t.$removing!==!0}),t.$canvas&&(t.$canvas=void 0,t.$parent=void 0,t.$tickedTimes=void 0,t.$cache=void 0,t.$rendered=!1,o.default.execFuncs(t.hooks.removed,t,t.$tickedTimes))}),e&&this.children.splice(this.children.indexOf(t),1)}},function(t,e){"use strict";t.exports=function(t){this.fpsHandler=t}},function(t,e){"use strict";t.exports=function(t){this.maxFps=t||-1}},function(t,e){"use strict";t.exports=function(){var t=this;return this.fpsCalculateTime=Date.now(),this.$rAFer(this.paint.bind(this)),setInterval(function(){if(t.eHoldingFlag){var e=t.eHoldingFlag;e.type="hold",t.$eventHandler.call(t,null,e)}},40),this}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(1),o=(i(r),n(4));i(o);t.exports=function(){}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(43),o=i(r),a=n(35),s=i(a),l=n(54),u=i(l),f=n(9),c=i(f),h=function(t){this.imgLoader=c.default;for(var e in u.default)this[e]=this[e]||JSON.parse(JSON.stringify(u.default[e]));t&&(t.el||(t={el:t}),t.el&&this.register("string"==typeof t.el?document.querySelector(t.el):t.el,t))};h.prototype.$extendList=[];for(var d in s.default)Object.prototype.hasOwnProperty.call(s.default,d)&&(h.prototype[d]=s.default[d]);for(var p in o.default)Object.prototype.hasOwnProperty.call(o.default,p)&&(h.prototype[p]=o.default[p]);t.exports=h},function(t,e){"use strict";var n={$dom:null,$paintContext:null,$nextTickTime:0,$lastPaintTime:0,$pausing:!1,$freezing:!1,name:"",fps:0,lastFps:0,fpsCalculateTime:0,fpsHandler:null,width:0,height:0,events:{click:null},children:[],eHoldingFlag:!1,eLastMouseHover:null,maxFps:-1,$flags:{dragging:!1}};t.exports=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(9),o=i(r),a=n(10),s=i(a);t.exports=function(t,e){var n;return(0,s.default)(t,function(t){return(0,o.default)(t,function(t){for(var i=t.width,r=t.height,o=t.getContext("2d").getImageData(0,0,i,r),a=o.data,s=a.length-1;s>=0;s-=4)if(e&&e.conversion){var l=e.conversion({r:a[s-3],g:a[s-2],b:a[s-1],a:a[s]},(s+1>>2)%i,Math.floor((s+1>>2)/i));a[s-3]=l.r,a[s-2]=l.g,a[s-1]=l.b,a[s-0]=l.a}t.getContext("2d").clearRect(0,0,i,r),t.getContext("2d").putImageData(o,0,0),n=t},{canvas:!0,cacheFlag:Math.random()})}),function(){return n}}},function(t,e){"use strict";t.exports=function(t){var e=t.width,n=t.height,i=document.createElement("canvas");i.width=e,i.height=n;var r=i.getContext("2d");r.scale(1,-1),r.translate(0,-n),r.drawImage(t,0,0);var o=r.getImageData(0,0,e,n);return{canvas:r,img:o}}},function(t,e){"use strict";t.exports=function(t,e){return{type:"multline-text",text:t,config:e}}}])});