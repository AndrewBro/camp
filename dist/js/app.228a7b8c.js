(function(e){function t(t){for(var r,o,u=t[0],l=t[1],s=t[2],d=0,f=[];d<u.length;d++)o=u[d],a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/camp/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"52f4":function(e,t,n){e.exports=n.p+"media/intro.d20152dc.mp4"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("InitialVideo",{attrs:{"v-if":e.isPlayed}}),n("div",{staticClass:"main-conteiner",attrs:{"v-if":!e.isPlayed}},[n("Header"),n("Banner"),n("About"),n("Footer")],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",[n("b-navbar",{attrs:{type:"dark",variant:"dark"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"#"}},[e._v("Home")]),n("b-nav-item",{attrs:{href:"#"}},[e._v("Banner")]),n("b-nav-item",{attrs:{href:"#"}},[e._v("About")])],1)],1)],1)])},o=[],u={name:"Header"},l=u,s=n("2877"),c=Object(s["a"])(l,i,o,!1,null,"fb781e48",null),d=c.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner"},[n("h1",[e._v("Banner")])])}],p={name:"Banner",data:function(){return{hidedVideo:!1}},methods:{},computed:{}},h=p,m=Object(s["a"])(h,f,v,!1,null,"d146a990",null),b=m.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("About")])])}],g={name:"About"},O=g,P=Object(s["a"])(O,_,y,!1,null,"e98b91ac",null),j=P.exports,x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("h1",[e._v("Footer")])])}],$={name:"Footer"},w=$,I=Object(s["a"])(w,x,E,!1,null,"6249afca",null),S=I.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"initialVideo",class:{finished:e.hidedVideo}},[e._m(0)])},B=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("video",{attrs:{autoplay:"",controls:"",id:"video"}},[r("source",{attrs:{src:n("52f4"),type:"video/mp4"}})])}],C={name:"InitialVideo",data:function(){return{hidedVideo:!1}},methods:{videoInit:function(){var e=this,t=document.getElementById("video");localStorage.isPlayed&&t.pause(),localStorage.isPlayed?this.hidedVideo=!0:(t.play(),t.addEventListener("ended",function(){return e.hidedVideo=!0},!1),localStorage.setItem("isPlayed","1"))}},mounted:function(){this.videoInit()}},k=C,A=(n("e8e5"),Object(s["a"])(k,V,B,!1,null,null,null)),F=A.exports,H={name:"app",components:{InitialVideo:F,Header:d,Banner:b,About:j,Footer:S},data:function(){return{isPlayed:!1}},methods:{videoInit:function(){localStorage.isPlayed?this.isPlayed=!1:this.isPlayed=!0}},mounted:function(){this.videoInit()}},M=H,T=(n("034f"),Object(s["a"])(M,r,a,!1,null,null,null)),J=T.exports,L=n("2b0e"),q=n("9f7b"),z=n.n(q);n("f9e3"),n("2dd8");L["default"].config.productionTip=!1,L["default"].use(z.a),new L["default"]({render:function(e){return e(J)}}).$mount("#app")},"64a9":function(e,t,n){},"9f56":function(e,t,n){},e8e5:function(e,t,n){"use strict";var r=n("9f56"),a=n.n(r);a.a}});
//# sourceMappingURL=app.228a7b8c.js.map