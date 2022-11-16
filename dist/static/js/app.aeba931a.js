(function(){"use strict";var t={5070:function(t,e,o){var i=o(9242),s=o(3396),n=o(7139);const l=(0,s._)("div",{class:"title"},"vue-asign",-1),a={class:"menu"},r={class:"item"},h=(0,s._)("option",null,"0",-1),u=(0,s._)("option",null,"90",-1),c=(0,s._)("option",null,"180",-1),d=(0,s._)("option",null,"270",-1),g=[h,u,c,d],p={class:"item"},m={class:"item"},f={class:"item"},v={class:"item"},w=(0,s._)("option",null,"是",-1),C=(0,s._)("option",null,"否",-1),y=[w,C],b={class:"item"},x={class:"item"},_={class:"item"},k={class:"item"},M={class:"btnBox"},I=["src"];function U(t,e,o,h,u,c){const d=(0,s.up)("Chrome"),w=(0,s.up)("vueAsign");return(0,s.wg)(),(0,s.iD)("div",null,[l,(0,s._)("div",a,[(0,s._)("div",r,[(0,s.Uk)(" 旋转角度"),(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>u.direction=t)},g,512),[[i.bM,u.direction]])]),(0,s._)("div",p,[(0,s.Uk)(" 画笔颜色"),(0,s._)("span",{class:"colorBox",onClick:e[1]||(e[1]=t=>u.showColor1=!u.showColor1),style:(0,n.j5)({background:u.lineColor})},null,4),(0,s.wy)((0,s.Wm)(d,{class:"chrome",modelValue:u.colors,"onUpdate:modelValue":e[2]||(e[2]=t=>u.colors=t),onClick:e[3]||(e[3]=t=>c.setFontColor("line"))},null,8,["modelValue"]),[[i.F8,u.showColor1]])]),(0,s._)("div",m,[(0,s.Uk)(" 画笔粗细 "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>u.lineWidth=t)},null,512),[[i.nr,u.lineWidth]])]),(0,s._)("div",f,[(0,s.Uk)(" 背景色"),(0,s._)("span",{class:"colorBox",onClick:e[5]||(e[5]=t=>u.showColor2=!u.showColor2),style:(0,n.j5)({background:u.bgColor})},null,4),(0,s.wy)((0,s.Wm)(d,{class:"chrome",modelValue:u.colors,"onUpdate:modelValue":e[6]||(e[6]=t=>u.colors=t),onClick:c.setFontColor},null,8,["modelValue","onClick"]),[[i.F8,u.showColor2]])]),(0,s._)("div",v,[(0,s.Uk)(" 是否裁剪 "),(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":e[7]||(e[7]=t=>u.isCrop=t)},y,512),[[i.bM,u.isCrop]])]),(0,s._)("div",b,[(0,s.Uk)(" 图片左边距 "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>u.gapLeft=t)},null,512),[[i.nr,u.gapLeft]])]),(0,s._)("div",x,[(0,s.Uk)(" 图片上边距 "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[9]||(e[9]=t=>u.gapTop=t)},null,512),[[i.nr,u.gapTop]])]),(0,s._)("div",_,[(0,s.Uk)(" 图片右边距 "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[10]||(e[10]=t=>u.gapRight=t)},null,512),[[i.nr,u.gapRight]])]),(0,s._)("div",k,[(0,s.Uk)(" 图片下边距 "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[11]||(e[11]=t=>u.gapBottom=t)},null,512),[[i.nr,u.gapBottom]])])]),(0,s.Wm)(w,{ref:"ssign",width:500,height:300,isCrop:"是"==u.isCrop,direction:u.direction,lineWidth:u.lineWidth,lineColor:u.lineColor,bgColor:u.bgColor,gapLeft:u.gapLeft,gapRight:u.gapRight,gapTop:u.gapTop,gapBottom:u.gapBottom},null,8,["isCrop","direction","lineWidth","lineColor","bgColor","gapLeft","gapRight","gapTop","gapBottom"]),(0,s._)("div",M,[(0,s._)("button",{onClick:e[12]||(e[12]=(...t)=>c.repaint&&c.repaint(...t))},"重绘"),(0,s._)("button",{onClick:e[13]||(e[13]=(...t)=>c.createImg&&c.createImg(...t))},"生成图片")]),(0,s._)("img",{src:u.resImg,alt:""},null,8,I)])}var T=o(8657),S={name:"App",components:{Chrome:T.Chrome},data(){return{resImg:"",lineWidth:1,lineColor:"#000",bgColor:"green",direction:0,isCrop:"是",colors:"",gapLeft:5,gapRight:5,gapTop:5,gapBottom:5,showColor1:!1,showColor2:!1}},methods:{setFontColor(t){"line"==t?(this.lineColor=this.colors.hex8,this.showColor1=!1):(this.bgColor=this.colors.hex8,this.showColor2=!1)},repaint(){this.$refs.ssign.clearCanvas(),this.resImg=""},createImg(){this.$refs.ssign.createImg().then((t=>{this.resImg=t}))}}},L=o(89);const O=(0,L.Z)(S,[["render",U]]);var R=O;function W(t,e,o,l,a,r){return(0,s.wg)(),(0,s.iD)("canvas",{ref:"vueSign",style:(0,n.j5)({background:o.bgColor}),onMousedown:e[0]||(e[0]=(...t)=>r.mousedown&&r.mousedown(...t)),onMousemove:e[1]||(e[1]=(...t)=>r.mousemove&&r.mousemove(...t)),onMouseup:e[2]||(e[2]=(...t)=>r.mouseup&&r.mouseup(...t)),onMouseleave:e[3]||(e[3]=(...t)=>r.mouseup&&r.mouseup(...t)),onTouchstart:e[4]||(e[4]=(0,i.iM)(((...t)=>r.touchDown&&r.touchDown(...t)),["stop"])),onTouchmove:e[5]||(e[5]=(0,i.iM)(((...t)=>r.touchMove&&r.touchMove(...t)),["stop"])),onTouchend:e[6]||(e[6]=(0,i.iM)(((...t)=>r.touchUp&&r.touchUp(...t)),["stop"])),onTouchcancel:e[7]||(e[7]=(0,i.iM)(((...t)=>r.touchUp&&r.touchUp(...t)),["stop"]))},null,36)}var B={props:{width:{type:Number,default:600},height:{type:Number,default:300},bgColor:{type:String,default:""},lineWidth:{type:Number,default:4},lineColor:{type:String,default:"#000000"},gapLeft:{type:Number,default:5},gapRight:{type:Number,default:5},gapTop:{type:Number,default:5},gapBottom:{type:Number,default:5},format:{type:String,default:""},quality:{type:String,default:"0.92"},direction:{type:Number,default:0},isCrop:{type:Boolean,default:!0}},data(){return{sratio:1,ctx:null,resImg:"",isMove:!1,lastX:0,lastY:0,offset:null}},computed:{fillbg(){return this.bgColor?this.bgColor:"rgba(255,255,255,0)"}},beforeMount(){window.addEventListener("resize",this.initCanvas)},beforeDestroy(){window.removeEventListener("resize",this.initCanvas)},mounted(){this.initCanvas()},methods:{initCanvas(){const t=this.$refs.vueSign,e=this.height/this.width;this.ctx=t.getContext("2d",{willReadFrequently:!0}),this.offset=t.getBoundingClientRect(),t.height=this.height,t.width=this.width,t.style.width=this.width>window.innerWidth?window.innerWidth+"px":this.width+"px";const o=parseFloat(window.getComputedStyle(t).width);t.style.height=e*o+"px",t.style.background=this.fillbg,this.ctx.scale(1*this.sratio,1*this.sratio),this.sratio=o/this.width,this.ctx.scale(1/this.sratio,1/this.sratio)},mousedown(t){this.isMove=!0,this.drawLine(t.pageX-this.offset.left,t.pageY-this.offset.top,!1)},mousemove(t){this.isMove&&this.drawLine(t.pageX-this.offset.left,t.pageY-this.offset.top,!0)},mouseup(t){this.isMove=!1},touchDown(t){this.isMove=!0,this.drawLine(t.changedTouches[0].clientX-this.offset.left,t.changedTouches[0].clientY-this.offset.top,!1)},touchMove(t){this.isMove&&this.drawLine(t.changedTouches[0].clientX-this.offset.left,t.changedTouches[0].clientY-this.offset.top,!0)},touchUp(t){this.isMove=!1},drawLine(t,e,o){o&&(this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth,this.ctx.strokeStyle=this.lineColor,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.moveTo(this.lastX,this.lastY),this.ctx.lineTo(t,e),this.ctx.stroke(),this.ctx.closePath()),this.lastX=t,this.lastY=e},clearCanvas(){this.ctx.beginPath(),this.ctx.clearRect(0,0,this.width,this.height),this.ctx.closePath()},lineCrude(){linWidthVal=selWidth[activeIndex].value},setColor(){let t=selColor.selectedIndex;colorVal=selColor[t].value},createImg(){return new Promise((t=>{const e=this.ctx.getImageData(0,0,this.$refs.vueSign.width,this.$refs.vueSign.height),o=this.getImgArea(e.data),i=document.createElement("canvas"),s=i.getContext("2d");i.width=o[2]-o[0],i.height=o[3]-o[1];const n=this.ctx.getImageData(...o);s.globalCompositeOperation="destination-over",s.putImageData(n,0,0),s.fillStyle=this.fillbg,s.fillRect(0,0,i.width,i.height);let l="image/"+this.format,a=i.toDataURL(l,this.quality);if(!this.isCrop){const t=this.$refs.vueSign;this.ctx.globalCompositeOperation="destination-over",this.ctx.fillStyle=this.fillbg,this.ctx.fillRect(0,0,t.width,t.height),a=t.toDataURL(l,this.quality),this.ctx.clearRect(0,0,t.width,t.height),this.ctx.putImageData(e,0,0),this.ctx.globalCompositeOperation="source-over"}this.direction>0&&this.direction%90==0?this.rotateBase64Img(a,this.direction,l).then((e=>{t(e)})):t(a)}))},getImgArea(t){const e=this.$refs.vueSign;let o=e.width,i=e.height,s=0,n=0;for(let a=0;a<e.width;a++)for(let l=0;l<e.height;l++){let r=4*(a+e.width*l);(t[r]>0||t[r+1]>0||t[r+2]||t[r+3]>0)&&(n=Math.max(l,n),s=Math.max(a,s),i=Math.min(l,i),o=Math.min(a,o))}o++,s++,i++,n++;const l=[o-this.gapLeft,i-this.gapTop,s+this.gapRight,n+this.gapBottom];return l},rotateBase64Img(t,e,o){return new Promise((i=>{const s=document.createElement("canvas"),n=s.getContext("2d");let l,a,r;e%90!=0&&console.error("旋转角度必须是90的倍数!");const h=e/90%4,u={sx:0,sy:0,ex:0,ey:0},c=new Image;c.crossOrigin="anonymous",c.src=t,c.onload=function(){switch(l=c.width,a=c.height,r=l>a?l:a,s.width=2*r,s.height=2*r,h){case 0:u.sx=r,u.sy=r,u.ex=r+l,u.ey=r+a;break;case 1:u.sx=r-a,u.sy=r,u.ex=r,u.ey=r+l;break;case 2:u.sx=r-l,u.sy=r-a,u.ex=r,u.ey=r;break;case 3:u.sx=r,u.sy=r-l,u.ex=r+a,u.ey=r+l;break}n.translate(r,r),n.rotate(e*Math.PI/180),n.drawImage(c,0,0);var t=n.getImageData(u.sx,u.sy,u.ex,u.ey);h%2==0?(s.width=l,s.height=a):(s.width=a,s.height=l),n.putImageData(t,0,0),i(s.toDataURL(o,this.quality))}}))}}};const D=(0,L.Z)(B,[["render",W],["__scopeId","data-v-475a0694"]]);var V=D;V.install=function(t){this.installed||(this.installed=!0,t.component("vueAsign",V))};var j=V;(0,i.ri)(R).use(j).mount("#app")}},e={};function o(i){var s=e[i];if(void 0!==s)return s.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,i,s,n){if(!i){var l=1/0;for(u=0;u<t.length;u++){i=t[u][0],s=t[u][1],n=t[u][2];for(var a=!0,r=0;r<i.length;r++)(!1&n||l>=n)&&Object.keys(o.O).every((function(t){return o.O[t](i[r])}))?i.splice(r--,1):(a=!1,n<l&&(l=n));if(a){t.splice(u--,1);var h=s();void 0!==h&&(e=h)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,s,n]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,n,l=i[0],a=i[1],r=i[2],h=0;if(l.some((function(e){return 0!==t[e]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(r)var u=r(o)}for(e&&e(i);h<l.length;h++)n=l[h],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(u)},i=self["webpackChunkvue_asign"]=self["webpackChunkvue_asign"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(5070)}));i=o.O(i)})();