(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{395:function(n,t,e){n.exports=e.p+"static/media/no-image.a5e6fa7a.svg"},396:function(n,t,e){},401:function(n,t,e){"use strict";e.r(t),function(n){var a=e(7),c=e.n(a),i=e(11),l=e(4),r=e(0),u=e.n(r),s=(e(396),e(395)),o=e.n(s),f=e(12);t.default=function(t){var e=Object(r.useState)(null),a=Object(l.a)(e,2),s=a[0],m=a[1];Object(r.useEffect)(function(){p(t.idPainting)},[t]);var p=function(){var t=Object(i.a)(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(f.a,"/painting/")+e+"/smallpic").then(function(n){return n.json()}).then(function(t){return t.map(function(t){var e=t.smallPic?n.from(t.smallPic).toString("base64"):null;return t.smallPic="data:image/jpeg;base64,"+e,m(t),null})});case 2:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}();return u.a.createElement("div",{className:"smallImage",onClick:function(){t.callModal(t.idPainting)}},u.a.createElement("img",{src:s?s.smallPic:o.a,alt:t.title}),u.a.createElement("div",{className:"details"},u.a.createElement("h5",null,t.title),u.a.createElement("hr",null),u.a.createElement("p",null,t.detail)))}}.call(this,e(40).Buffer)}}]);
//# sourceMappingURL=2.ceaff9fc.chunk.js.map