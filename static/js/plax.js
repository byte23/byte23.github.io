/* Plax version 1.4.1 */

/*
  Copyright (c) 2011 Cameron McEfee

  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function(f){function w(){var b=document.createElement("p"),d,a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(b,null);for(var e in a)void 0!==b.style[e]&&(b.style[e]="translate3d(1px,1px,1px)",d=window.getComputedStyle(b).getPropertyValue(a[e]));document.body.removeChild(b);return void 0!==d&&0<d.length&&"none"!==d}function n(){return!0===t?!1:void 0!==window.DeviceOrientationEvent}
function u(b){if(!((new Date).getTime()<v+40)){v=(new Date).getTime();var d=null!=h.offset()?h.offset().left:0,a=null!=h.offset()?h.offset().top:0,d=b.pageX-d,a=b.pageY-a,e;a:{var c=k[0].obj[0].parentNode;if(0!==c.offsetWidth&&0!==c.offsetHeight){e=document.documentElement.clientHeight;for(var c=c.getClientRects(),g=0,f=c.length;g<f;g++){var l=c[g];if(0<l.top?l.top<=e:0<l.bottom&&l.bottom<=e){e=!0;break a}}}e=!1}if(e){if(n()){if(void 0===b.gamma){t=!0;return}x=b.gamma;y=b.beta;90===Math.abs(window.orientation)&&
(b=x,x=y,y=b);0>window.orientation&&(x=-x,y=-y);p=null===p?x:p;q=null===q?y:q;values={x:x-p,y:y-q};d=values.x/r;a=values.y/r;d=((-1>d?-1:1<d?1:d)+1)/2;a=((-1>a?-1:1<a?1:a)+1)/2}b=d/(!0===n()?1:h.width());d=a/(!0===n()?1:h.height());for(e=k.length;e--;)a=k[e],m.useTransform&&!a.background?(newX=a.transformStartX+a.inversionFactor*a.xRange*b,newY=a.transformStartY+a.inversionFactor*a.yRange*d,newZ=a.transformStartZ,a.obj.css({transform:"translate3d("+newX+"px,"+newY+"px,"+newZ+"px)"})):(newX=a.startX+
a.inversionFactor*a.xRange*b,newY=a.startY+a.inversionFactor*a.yRange*d,a.background?a.obj.css("background-position",newX+"px "+newY+"px"):a.obj.css("left",newX).css("top",newY))}}}var v=(new Date).getTime(),k=[],h={},r=30,p=null,q=null,t=!1,m=null,z={useTransform:!0};f.fn.plaxify=function(b){m=f.extend({},z,b);m.useTransform=m.useTransform?w():!1;return this.each(function(){for(var d=-1,a={xRange:f(this).data("xrange")||0,yRange:f(this).data("yrange")||0,zRange:f(this).data("zrange")||0,invert:f(this).data("invert")||
!1,background:f(this).data("background")||!1},e=0;e<k.length;e++)this===k[e].obj.get(0)&&(d=e);for(var c in b)0==a[c]&&(a[c]=b[c]);a.inversionFactor=a.invert?-1:1;a.obj=f(this);if(a.background){pos=(a.obj.css("background-position")||"0px 0px").split(/ /);if(2!=pos.length)return;x=pos[0].match(/^((-?\d+)\s*px|0+\s*%|left)$/);y=pos[1].match(/^((-?\d+)\s*px|0+\s*%|top)$/);if(!x||!y)return;a.originX=a.startX=x[2]||0;a.originY=a.startY=y[2]||0;a.transformOriginX=a.transformStartX=0;a.transformOriginY=
a.transformStartY=0;a.transformOriginZ=a.transformStartZ=0}else{var e=a.obj.position(),g=a.obj;c=[0,0,0];g=g.css("-webkit-transform")||g.css("-moz-transform")||g.css("-ms-transform")||g.css("-o-transform")||g.css("transform");if("none"!==g){c=g.split("(")[1].split(")")[0].split(",");var h=g=0,l=0;16==c.length?(g=parseFloat(c[c.length-4]),h=parseFloat(c[c.length-3]),l=parseFloat(c[c.length-2])):(g=parseFloat(c[c.length-2]),h=parseFloat(c[c.length-1]),l=0);c=[g,h,l]}a.obj.css({transform:c.join()+"px",
top:e.top,left:e.left,right:"",bottom:""});a.originX=a.startX=e.left;a.originY=a.startY=e.top;a.transformOriginX=a.transformStartX=c[0];a.transformOriginY=a.transformStartY=c[1];a.transformOriginZ=a.transformStartZ=c[2]}a.startX-=a.inversionFactor*Math.floor(a.xRange/2);a.startY-=a.inversionFactor*Math.floor(a.yRange/2);a.transformStartX-=a.inversionFactor*Math.floor(a.xRange/2);a.transformStartY-=a.inversionFactor*Math.floor(a.yRange/2);a.transformStartZ-=a.inversionFactor*Math.floor(a.zRange/2);
0<=d?k.splice(d,1,a):k.push(a)})};f.plax={enable:function(b){b?(b.activityTarget&&(h=b.activityTarget||f(document.body)),"number"===typeof b.gyroRange&&0<b.gyroRange&&(r=b.gyroRange)):h=f(document.body);h.bind("mousemove.plax",function(b){u(b)});n()&&(window.ondeviceorientation=function(b){u(b)})},disable:function(b){f(document).unbind("mousemove.plax");window.ondeviceorientation=void 0;if(b&&"boolean"===typeof b.restorePositions&&b.restorePositions)for(var d=k.length;d--;)layer=k[d],m.useTransform&&
!layer.background?layer.obj.css("transform","translate3d("+layer.transformOriginX+"px,"+layer.transformOriginY+"px,"+layer.transformOriginZ+"px)").css("top",layer.originY):k[d].background?layer.obj.css("background-position",layer.originX+"px "+layer.originY+"px"):layer.obj.css("left",layer.originX).css("top",layer.originY);b&&"boolean"===typeof b.clearLayers&&b.clearLayers&&(k=[])}};"undefined"!==typeof ender&&f.ender(f.fn,!0)})(function(){return"undefined"!==typeof jQuery?jQuery:ender}());
