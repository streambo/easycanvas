!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i="undefined"!=typeof window;t["default"]=function(e,t){i&&window.Easycanvas&&(Easycanvas[t]=function(t){return e(t,Easycanvas)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i={},o="\n".slice(0,1),r=function(e,t){var n,r=String(e),l=r+JSON.stringify(t);if(t.fontSize=t.fontSize||16,i[l])return i[l];t.padding?((n=(n=t.padding.split(" ")).map(function(e){return parseInt(e)}))[1]=Number(n[1]||n[0]),n[2]=Number(n[2]||n[0]),n[3]=Number(n[3]||n[1])):n=[0,0,0,0];var a=t.minWidth||t.width||t.fontSize*r.length+n[1]+n[3]+100,d=r.split("\n").length,u=t.fontSize*(Math.round(r.length)/a+d-1)*(t.lineHeight||t.fontSize)+n[0]+n[2]+100,f=document.createElement("canvas");f.width=a,f.height=u;var s=f.getContext("2d");window.tempCanvas=f,window.tempCtx=s,s.textBaseline="middle",s.font=(t.fontStyle?t.fontStyle+" ":"")+t.fontSize+"px "+(t.family||"serif"),s.fillStyle=t.color||"#000",s.textAlign=t.textAlign||"left";for(var c=t.lineHeight?(t.lineHeight-t.fontSize)/2:0,h=0,m=1,g=0,v=0,p=1;;)if((v=s.measureText(r.slice(h,m)).width)>t.width){if("ellipsis"===t.textOverflow){m-=2,s.fillText(r.slice(h,m)+"...",0,c+t.fontSize/2),c+=t.fontSize+(t.lineHeight?(t.lineHeight-t.fontSize)/2:0),p++,g=t.width-n[1]-n[3];break}m-=1,s.fillText(r.slice(h,m),0,c+t.fontSize/2),m=(h=m)+1,c+=t.fontSize+(t.lineHeight?(t.lineHeight-t.fontSize)/2:10),p++}else{if(m>r.length-1){v>g&&(g=v),s.fillText(r.slice(h,m),0,c+t.fontSize/2),c+=t.fontSize+(t.lineHeight?(t.lineHeight-t.fontSize)/2:0);break}r.slice(m,m+1)===o&&(s.fillText(r.slice(h,m),0,c+t.fontSize/2),m=(h=m+=1)+1,c+=t.fontSize+(t.lineHeight?(t.lineHeight-t.fontSize)/2:10),p++),v>g&&(g=v),m++}var y=document.createElement("canvas");y.lastLineLeft=v,y.lineCount=p,y.width=Math.max(g+n[1]+n[3],t.minWidth||0),y.height=c+n[0]+n[2];var b=y.getContext("2d");if(t.backgroundColor&&(b.fillStyle=t.backgroundColor,b.fillRect(0,0,y.width,y.height)),b.drawImage(f,(y.width-g)/2,n[0]),t.border){var S=t.border.split(" "),w=S.pop();"solid"===S[S.length-1]&&S.pop();var x=S[0],H=S[1]||x,z=S[2]||x,_=S[3]||H||x;x=parseInt(x),H=parseInt(H),z=parseInt(z),_=parseInt(_);var N=t.borderRadius||0;if(b.beginPath(),b.strokeStyle=w,x&&(b.lineWidth=x,b.moveTo(_?N:0,0),b.lineTo(y.width-(H?N:0),0)),H&&(b.lineWidth=H,b.moveTo(y.width,x?N:0),b.lineTo(y.width,y.height-(z?N:0))),z&&(b.lineWidth=z,b.moveTo(_?N:0,y.height),b.lineTo(y.width-(H?N:0),y.height)),_&&(b.lineWidth=_,b.moveTo(0,x?N:0),b.lineTo(0,y.height-(z?N:0))),b.stroke(),N){var P=document.createElement("canvas"),j=Math.min(y.width,y.height);P.width=P.height=j;var O=P.getContext("2d");O.beginPath(),O.strokeStyle=w,O.arc(j>>1,j>>1,(j>>1)-1,0,2*Math.PI),O.stroke(),x&&H&&b.drawImage(P,j>>1,0,j>>1,j>>1,y.width-N,0,N,N),z&&H&&b.drawImage(P,j>>1,j>>1,j>>1,j>>1,y.width-N,y.height-N,N,N),x&&_&&b.drawImage(P,0,0,j>>1,j>>1,0,0,N,N),z&&_&&b.drawImage(P,0,j>>1,j>>1,j>>1,0,y.height-N,N,N)}}return i[l]=y,y};t["default"]=r},,function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(n(1)),o=r(n(0));function r(e){return e&&e.__esModule?e:{"default":e}}var l={padding:0,width:300,family:'"Helvetica Neue",Helvetica,Arial,sans-serif'},a=function(e,t){e.buttonStyleNormal=Object.assign(l,{minWidth:t.style.width,lineHeight:t.style.height,padding:0},t.normal),e.buttonStyleHovered=Object.assign({},e.buttonStyleNormal,t.hovered),e.buttonStylePressed=Object.assign({},e.buttonStyleNormal,t.pressed),e.imageNormal=(0,i["default"])(t.text||"",e.buttonStyleNormal),e.imageHovered=t.hovered&&(0,i["default"])(t.text||"",e.buttonStyleHovered),e.imagePressed=t.pressed&&(0,i["default"])(t.text||"",e.buttonStylePressed)},d=function(e,t){var n,i={buttonStyleNormal:undefined,buttonStyleHovered:undefined,buttonStylePressed:undefined,imageNormal:undefined,imageHovered:undefined,imagePressed:undefined};a(i,e);var o={};return e.events=e.events||{},o.touchmove=o.mousemove=function(){n.content.img=i.imageHovered||i.imageNormal},o.touchstart=o.mousedown=function(){n.content.img=i.imagePressed||i.imageHovered||i.imageNormal},o.touchend=o.touchout=o.mouseout=function(){n.content.img=i.imageNormal},o.mouseup=function(){n.content.img=i.imageHovered||i.imageNormal},o.click=function(t){e.events.click&&e.events.click.call(n,t)},(n=new t.Sprite({name:e.name||"Button_"+e.text,content:{img:i.imageNormal},style:e.style,events:o,hooks:e.hooks})).update=function(e){this.__proto__.update.call(this,e),a(i,this),n.content.img=i.imageNormal},n};(0,o["default"])(d,"Button");var u=d;t["default"]=u}])});