(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(17),n(2)),u=n(1),s=n(4),d=n(9),l=n(10),m=n.n(l);function f(){var e=Object(a.useRef)(),t=Object(a.useState)(["#A2CCB6","#FCEEB5","#EE786E","#EE786E"]),n=Object(i.a)(t,2),o=n[0],c=n[1],d=Object(a.useState)(function(){return parseInt(o.length*Math.random())}),l=Object(i.a)(d,1)[0],m=o[l],f=Object(a.useState)(function(){return.5+.5*Math.random()}),p=Object(i.a)(f,1)[0],v=Object(a.useState)(function(){return Math.max(.1,.3*Math.random())}),h=Object(i.a)(v,1)[0],w=Object(a.useState)(function(){var e=new u.Vector3(30-60*Math.random(),-5,10-20*Math.random());return new Array(30).fill().map(function(){return e.add(new u.Vector3(2-4*Math.random(),4-2*Math.random(),5-10*Math.random())).clone()})}),b=Object(i.a)(w,1)[0];return Object(a.useEffect)(function(){var e=function(e){"render"===e.data.type&&c(e.data.payload.palette)};return window.addEventListener("message",e),function(){return window.removeEventListener("message",e)}},[]),Object(s.c)(function(){return e.current.uniforms.dashOffset.value-=5e-4}),r.a.createElement("mesh",null,r.a.createElement("meshLine",{onUpdate:function(e){return e.parent.geometry=e.geometry}},r.a.createElement("geometry",{onUpdate:function(e){return e.parent.setGeometry(e)}},r.a.createElement("catmullRomCurve3",{args:[b],onUpdate:function(e){return e.parent.vertices=e.getPoints(500)}}))),r.a.createElement("meshLineMaterial",{attach:"material",ref:e,transparent:!0,depthTest:!1,lineWidth:h,color:m,dashArray:.1,dashRatio:p}))}function p(){var e=Object(a.useState)(100),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useRef)(),d=0;Object(a.useEffect)(function(){var e=function(e){if("render"===e.data.type){var t=e.data.payload;n!==t.numLines&&o(t.numLines)}};return window.addEventListener("message",e),function(){return window.removeEventListener("message",e)}},[n]),Object(s.c)(function(){return c.current.rotation.set(0,5*Math.sin(u.Math.degToRad(d+=.02)),0)});var l=new Array(n).fill();return r.a.createElement("group",{ref:c},l.map(function(e,t){return r.a.createElement(f,{key:t})}))}Object(s.b)(d);var v=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),u=Object(i.a)(c,2),d=u[0],l=u[1],f=Object(a.useState)(75),v=Object(i.a)(f,2),h=v[0],w=v[1];return Object(a.useEffect)(function(){var e=function(e){if("pause"!==e.data.type)if("unpause"!==e.data.type)if("download"!==e.data.type){if("render"===e.data.type){var t=e.data.payload;n!==t.backgroundColor&&o(t.backgroundColor),h!==t.fov&&w(t.fov)}}else m()(this.captureFrameRef.current,{scale:2}).then(function(e){var t=e.toDataURL("image/png");window.parent.postMessage({type:"download",image:t},"*")});else l(!1);else l(!0)};return window.addEventListener("message",e),function(){return window.removeEventListener("message",e)}},[n,h]),n?r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement(s.a,{invalidateFrameloop:d,style:{background:n},camera:{position:[0,50,10],fov:h}},r.a.createElement(p,null))):null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.47fc4d3e.chunk.js.map