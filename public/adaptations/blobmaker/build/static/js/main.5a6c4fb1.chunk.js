(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),s=(n(15),n(4)),c=n(5),l=n(7),d=n(6),p=n(8),u=n(1);var m=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={line:"M119,-75C163,-41,212,9,204,48C196,86,132,113,79,123C25,133,-16,127,-58,111C-99,94,-140,68,-162,22C-184,-24,-188,-89,-158,-119C-128,-150,-64,-147,-13,-137C38,-126,76,-109,119,-75Z",complexity:10,minRadius:120,radius:300,palette:["gold","red"],angle:110,contrast:.5,url:"",mounted:!1,bypassAnimation:!1},n.onWindowMessage=function(t){if("render"===t.data.type){var e=t.data.payload,a=e.complexity,o=e.palette,r=e.angle,i=e.contrast;n.setState({complexity:a,palette:o,angle:r,minRadius:n.state.radius*(1-i/10)}),n.updateShape()}else"download"===t.data.type&&window.parent.postMessage({type:"download",image:n.state.url,imageType:"svg"},"*")},n.generateShape=function(t){var e=n.props.fullCircle;return Object(u.b)().radius(function(t){return t.radius}).angle(function(n,a){return e/t*a}).curve(u.a)},n.updateShape=function(t){var e=n.state.radius,a=!!t&&t.complexity!==n.state.complexity,o=t?t.minRadius:n.state.minRadius,r=t?t.contrast:n.state.contrast,i=t?t.complexity:n.state.complexity,s=t?t.color:n.state.color,c=Array(i).fill().map(function(){return{radius:o+Math.floor(Math.random()*(e-o))}}),l=n.generateShape(i)(c)+"Z",d=n.generateDownloadUrl(l);n.setState({contrast:r,minRadius:o,complexity:i,color:s,line:l,bypassAnimation:a,url:d},function(){n.setState({bypassAnimation:!1})})},n.updateColor=function(t){n.setState({color:t.hex,url:n.generateDownloadUrl(n.state.line)})},n.updateComplexity=function(t){n.updateShape({contrast:n.state.contrast,minRadius:n.state.minRadius,complexity:t,color:n.state.color})},n.updateContrast=function(t){n.updateShape({contrast:t,minRadius:n.state.radius*(1-t),complexity:n.state.complexity,color:n.state.color})},n.generateDownloadUrl=function(t){var e=window.innerWidth,a=window.innerHeight,o=n.state,r=o.palette,i=o.angle,s='<?xml version="1.0" standalone="no"?>\n    <svg\n    width="'.concat(e,'"\n    height="').concat(a,'"\n    viewBox="0 0 ').concat(e," ").concat(a,'"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <linearGradient id="Gradient1" gradientTransform="rotate(').concat(i,')">\n      <stop class="stop1" offset="0%" stop-color="').concat(r[0],'"></stop>      \n      <stop class="stop2" offset="100%" stop-color="').concat(r[1],'"></stop>\n    </linearGradient>\n    <g transform="translate(').concat(e/2,",").concat(a/2,')">\n      <path d="').concat(t,'" fill="url(\'#Gradient1\')" />\n    </g>\n  </svg>');return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(s)},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.setState({mounted:!0}),this.updateShape(),window.addEventListener("message",this.onWindowMessage)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.onWindowMessage)}},{key:"render",value:function(){var t=this.state,e=t.line,n=t.palette,a=t.angle,r=window.innerWidth,i=window.innerHeight;return o.a.createElement(o.a.Fragment,null,o.a.createElement("svg",{width:r,height:i,viewBox:"0 0 ".concat(r," ").concat(i),xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("linearGradient",{id:"Gradient1",gradientTransform:"rotate(".concat(a,")")},o.a.createElement("stop",{class:"stop1",offset:"0%","stop-color":n[0]}),o.a.createElement("stop",{class:"stop2",offset:"100%","stop-color":n[1]})),o.a.createElement("g",{transform:"translate(".concat(r/2,",").concat(i/2,")")},o.a.createElement("path",{d:"".concat(e),fill:"url('#Gradient1')"}))))}}]),e}(a.Component);m.defaultProps={width:600,height:600,fullCircle:2*Math.PI};var w=m;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.5a6c4fb1.chunk.js.map