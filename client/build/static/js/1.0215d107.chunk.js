(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{394:function(t,n,e){t.exports=e.p+"static/media/no-image.a5e6fa7a.svg"},399:function(t,n,e){"use strict";e.r(n),function(t){var a=e(7),c=e.n(a),r=e(11),i=e(4),u=e(0),o=e.n(u),s=e(394),f=e.n(s);n.default=function(n){var e=Object(u.useState)(null),a=Object(i.a)(e,2),s=a[0],l=a[1];Object(u.useEffect)(function(){p(n.idCollection)},[n]);var p=function(){var n=Object(r.a)(c.a.mark(function n(e){return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://localhost:5000/collection/"+e+"/pic").then(function(t){return t.json()}).then(function(n){return n.map(function(n){var e=n.pic?t.from(n.pic).toString("base64"):null;return l("data:image/jpeg;base64,"+e),null})});case 2:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}();return o.a.createElement("img",{src:s||f.a,alt:n.title})}}.call(this,e(39).Buffer)}}]);
//# sourceMappingURL=1.0215d107.chunk.js.map