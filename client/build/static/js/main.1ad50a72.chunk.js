(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){"use strict";(function(e){var n=a(7),c=a.n(n),l=a(11),r=a(4),i=a(0),o=a.n(i);a(205);t.a=function(){var t=Object(i.useState)({}),a=Object(r.a)(t,2),n=a[0],u=a[1],s=Object(i.useState)(null),m=Object(r.a)(s,2),d=m[0],f=m[1],p=Object(i.useState)(null),b=Object(r.a)(p,2),h=b[0],v=b[1],E=Object(i.useState)(null),g=Object(r.a)(E,2),j=g[0],O=g[1];Object(i.useEffect)(function(){N(),y()},[]);var N=function(){var e=Object(l.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/home-data/text").then(function(e){return e.json()}).then(function(e){return u(e[0])});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),y=function(){var t=Object(l.a)(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/home-data/pics").then(function(e){return e.json()}).then(function(t){var a=t[0].pic1.data?e.from(t[0].pic1.data).toString("base64"):null,n=t[0].pic2.data?e.from(t[0].pic2.data).toString("base64"):null,c=t[0].pic3.data?e.from(t[0].pic3.data).toString("base64"):null;f("data:image/jpeg;base64,"+a),v("data:image/jpeg;base64,"+n),O("data:image/jpeg;base64,"+c)});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();return o.a.createElement("div",{className:"accueil"},o.a.createElement("div",{className:"home-title"},o.a.createElement("h2",null,n?n.title:"")),o.a.createElement("div",{className:"col-container block-img-text"},o.a.createElement("div",{className:"col"},o.a.createElement("img",{src:d||null,alt:"",className:"presentation-img"})),o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"text"},o.a.createElement("h3",null,n?n.title_bloc1:""),o.a.createElement("p",null,n?n.bloc1:"")))),o.a.createElement("div",{className:"col-container block-text-img"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"text"},o.a.createElement("h3",null,n?n.title_bloc2:""),o.a.createElement("p",null,n?n.bloc2:""))),o.a.createElement("div",{className:"col"},o.a.createElement("div",{style:{backgroundImage:"url("+h+")"},alt:"",className:"parallax-img-right"}))),o.a.createElement("div",{className:"col-container block-img-text"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{style:{backgroundImage:"url("+j+")"},alt:"",className:"parallax-img-left"})),o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"text"},o.a.createElement("h3",null,n?n.title_bloc3:""),o.a.createElement("p",null,n?n.bloc3:"")))))}}).call(this,a(39).Buffer)},131:function(e,t,a){"use strict";(function(e){var n=a(7),c=a.n(n),l=a(11),r=a(4),i=a(0),o=a.n(i);a(214);t.a=function(t){var a=Object(i.useState)(!1),n=Object(r.a)(a,2),u=n[0],s=n[1],m=Object(i.useState)(null),d=Object(r.a)(m,2),f=d[0],p=d[1],b=Object(i.useState)(null),h=Object(r.a)(b,2),v=h[0],E=h[1],g=Object(i.useState)(0),j=Object(r.a)(g,2),O=j[0],N=j[1],y=Object(i.useState)(!1),S=Object(r.a)(y,2),w=S[0],x=S[1];Object(i.useEffect)(function(){return window.onpopstate=function(e){D()},function(){return D()}},[]),Object(i.useEffect)(function(){s(t.open)},[t.open]),Object(i.useEffect)(function(){E(t.idPainting),k(t.idPainting)},[t.idPainting]),Object(i.useEffect)(function(){s(!1)},[]),Object(i.useEffect)(function(){return document.addEventListener("keydown",C),function(){document.removeEventListener("keydown",C)}});var C=function(e){switch(e.key){case"ArrowLeft":q();break;case"ArrowRight":I();break;case"Escape":D()}},k=function(){var t=Object(l.a)(c.a.mark(function t(a){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/painting/"+a+"/pic").then(function(e){return e.json()}).then(function(t){return t.map(function(t){var a=t.pic?e.from(t.pic).toString("base64"):null;return t.pic="data:image/jpeg;base64,"+a,p(t),null})});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();function I(){var e=t.idsArray.indexOf(v)+1;E(t.idsArray[e]),k(t.idsArray[e])}function q(){var e=t.idsArray.indexOf(v)-1;E(t.idsArray[e]),k(t.idsArray[e])}function D(){s(!1),t.close(),p(null)}var T=function(e){var t=e.touches[0];N(t.clientX)},W=function(e){e.changedTouches&&e.changedTouches.length&&x(!0)},V=function(e){var t=e.changedTouches[0].clientX-O;w&&Math.abs(t)>50&&(t>0?q():I()),N(0),x(!1)};return o.a.createElement("div",null,u?o.a.createElement("div",{id:"myModal",className:"modal"},o.a.createElement("span",{className:"close",onClick:D},"\xd7"),o.a.createElement("span",{className:"modal-left",onClick:q},"<"),o.a.createElement("span",{className:"modal-right",onClick:I},">"),o.a.createElement("img",{className:"modal-content",onTouchStart:T,onTouchMove:W,onTouchEnd:V,src:f?f.pic:null,alt:""}),o.a.createElement("div",{className:"caption"},o.a.createElement("div",{className:"caption-title"},f?f.name:""),o.a.createElement("div",{className:"caption-detail"},f?f.detail:""))):o.a.createElement("div",null))}}).call(this,a(39).Buffer)},135:function(e,t,a){"use strict";(function(e){var n=a(7),c=a.n(n),l=a(11),r=a(4),i=a(0),o=a.n(i),u=a(17),s=a.n(u),m=a(20),d=a.n(m),f=a(21),p=a.n(f),b=a(66),h=a.n(b),v=(a(63),a(30)),E=a(24),g=a(25);t.a=function(t){var a=Object(i.useState)([""]),n=Object(r.a)(a,2),u=n[0],m=n[1],f=Object(i.useState)(null),b=Object(r.a)(f,2),j=b[0],O=b[1],N=Object(i.useState)({}),y=Object(r.a)(N,2),S=y[0],w=y[1],x=Object(i.useState)(!1),C=Object(r.a)(x,2),k=C[0],I=C[1],q=Object(i.useState)(!1),D=Object(r.a)(q,2),T=D[0],W=D[1],V=Object(i.useState)("Collection sauvegard\xe9e en base de donn\xe9es"),G=Object(r.a)(V,2),P=G[0],M=G[1];Object(i.useEffect)(function(){m(t.collectionNames)},[t.collectionNames]);var A=function(){var t=Object(l.a)(c.a.mark(function t(a){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/collection/"+a).then(function(e){return e.json()}).then(function(t){if(t.pic){var a=e.from(t.pic.data).toString("base64");t.pic="data:image/jpeg;base64,"+a}return w(t)});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(c.a.mark(function e(t){var a,n,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return W(!1),t.preventDefault(),a=new FormData(t.target),n=JSON.stringify({id:S.id,name:a.get("title"),detail:a.get("detail"),pic:j}),l={"content-type":"application/json",accept:"application/json"},e.next=7,fetch("http://localhost:5000/collection/"+S.id,{method:"PUT",headers:l,body:n});case 7:M("Collection sauvegard\xe9e en base de donn\xe9es"),F();case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(W(!1),!S){e.next=9;break}return t=S.id,e.next=5,fetch("http://localhost:5000/collection/"+t,{method:"DELETE",headers:{"content-type":"application/json",accept:"application/json"}});case 5:M("Collection supprim\xe9e de la base de donn\xe9es"),F(),e.next=10;break;case 9:console.log("erreur, pas de collection \xe0 supprimer");case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();function F(){W(!0),t.changeInCollec(),I(!0),O(null),w({}),m(t.collectionNames)}return o.a.createElement("div",{className:"edit"},o.a.createElement("div",{className:"edit-row"},o.a.createElement("p",null,o.a.createElement("strong",null,"Editer")," une collection existante"),o.a.createElement(v.a,{reinit:k,list:u,title:"Collections",handleChange:function(e){I(!1),A(e)}})),o.a.createElement("form",{onSubmit:B,noValidate:!0,autoComplete:"off",key:S?S.id:""},o.a.createElement(s.a,{className:"input",required:!0,id:"standard-required",label:"Titre",defaultValue:S?S.name:"",margin:"normal",name:"title",fullWidth:!0}),o.a.createElement(s.a,{className:"input",id:"standard-required",label:"D\xe9tail",defaultValue:S?S.detail:"",margin:"normal",multiline:!0,name:"detail",fullWidth:!0}),o.a.createElement(E.a,{parentGiveImg:S&&S.pic?S.pic:null,parentGetImg:function(e){O(e)}}),o.a.createElement("div",{className:"send"},o.a.createElement(d.a,{className:"reinit",variant:"contained",color:"primary",onClick:F},"R\xe9init.",o.a.createElement(p.a,{className:"icon"},"autorenew")),o.a.createElement(d.a,{className:"save",type:"submit",variant:"contained",color:"default"},"Sauver",o.a.createElement(p.a,{className:"icon"},"send")),o.a.createElement(d.a,{className:"delete",variant:"contained",color:"secondary",onClick:L},"Supprimer",o.a.createElement(h.a,{className:"icon"})))),o.a.createElement(g.a,{handleOpen:T,text:P}))}}).call(this,a(39).Buffer)},136:function(e,t,a){"use strict";(function(e){var n=a(7),c=a.n(n),l=a(11),r=a(4),i=a(0),o=a.n(i),u=a(17),s=a.n(u),m=a(20),d=a.n(m),f=a(21),p=a.n(f),b=a(66),h=a.n(b),v=(a(63),a(379),a(30)),E=a(24);t.a=function(t){var a=Object(i.useState)([""]),n=Object(r.a)(a,2),u=n[0],m=n[1],f=Object(i.useState)([]),b=Object(r.a)(f,2),g=b[0],j=b[1],O=Object(i.useState)(null),N=Object(r.a)(O,2),y=N[0],S=N[1],w=Object(i.useState)({}),x=Object(r.a)(w,2),C=x[0],k=x[1],I=Object(i.useState)(!1),q=Object(r.a)(I,2),D=q[0],T=q[1],W=Object(i.useState)(null),V=Object(r.a)(W,2),G=V[0],P=V[1];function M(){j(t.collectionNames)}Object(i.useEffect)(function(){A(),M()},[t]);var A=function(){var e=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,fetch("http://localhost:5000/painting/title").then(function(e){return e.json()}).then(function(e){return e.map(function(e){return t.push(e)})});case 3:m(t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),B=function(){var t=Object(l.a)(c.a.mark(function t(a){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/painting/"+a).then(function(e){return e.json()}).then(function(t){var a,n=t.pic.data?e.from(t.pic.data).toString("base64"):null;return t.pic="data:image/jpeg;base64,"+n,k(a=t),void P(a?a.collectionId:null)});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();var L=function(){var e=Object(l.a)(c.a.mark(function e(t){var a,n,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new FormData(t.target),n=JSON.stringify({id:C.id,name:a.get("title"),detail:a.get("detail"),pic:y,collectionId:G}),l={"content-type":"application/json",accept:"application/json"},e.next=6,fetch("http://localhost:5000/painting/"+C.id,{method:"PUT",headers:l,body:n});case 6:z();case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=7;break}return t=C.id,e.next=4,fetch("http://localhost:5000/painting/"+t,{method:"DELETE",headers:{"content-type":"application/json",accept:"application/json"}});case 4:z(),e.next=8;break;case 7:console.log("erreur, pas de tableau \xe0 supprimer");case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();function z(){T(!0),S(null),k({}),P(null),m([""]),M(),A()}return o.a.createElement("div",{className:"edit"},o.a.createElement("div",{className:"edit-row"},o.a.createElement("p",{className:"selectCollec"},o.a.createElement("strong",null,"Editer")," un tableau existant"),o.a.createElement(v.a,{reinit:D,list:u,title:"Tableaux",handleChange:function(e){T(!1),B(e)}})),o.a.createElement(v.a,{init:G||"",reinit:D,list:g,title:"Collection du tableau *",handleChange:function(e){T(!1),P(e)}}),o.a.createElement("form",{onSubmit:L,noValidate:!0,autoComplete:"off",key:C?C.id:""},o.a.createElement(s.a,{className:"input",required:!0,id:"standard-required",label:"Titre",defaultValue:C?C.name:"",margin:"normal",name:"title",fullWidth:!0}),o.a.createElement(s.a,{className:"input",id:"standard-required",label:"D\xe9tail",defaultValue:C?C.detail:"",margin:"normal",multiline:!0,name:"detail",fullWidth:!0}),o.a.createElement(E.a,{parentGiveImg:C&&C.pic?C.pic:null,parentGetImg:function(e){S(e)}}),o.a.createElement("div",{className:"send"},o.a.createElement(d.a,{className:"reinit",variant:"contained",color:"primary",onClick:z},"R\xe9init.",o.a.createElement(p.a,{className:"icon"},"autorenew")),o.a.createElement(d.a,{className:"save",type:"submit",variant:"contained",color:"default"},"Sauver",o.a.createElement(p.a,{className:"icon"},"send")),o.a.createElement(d.a,{className:"delete",variant:"contained",color:"secondary",onClick:F},"Supprimer",o.a.createElement(h.a,{className:"icon"})))))}}).call(this,a(39).Buffer)},137:function(e,t,a){"use strict";(function(e){var n=a(7),c=a.n(n),l=a(11),r=a(4),i=a(0),o=a.n(i),u=a(17),s=a.n(u),m=a(20),d=a.n(m),f=a(21),p=a.n(f),b=(a(381),a(24)),h=a(25);t.a=function(){var t=Object(i.useState)({}),a=Object(r.a)(t,2),n=a[0],u=a[1],m=Object(i.useState)(null),f=Object(r.a)(m,2),v=f[0],E=f[1],g=Object(i.useState)(null),j=Object(r.a)(g,2),O=j[0],N=j[1],y=Object(i.useState)(null),S=Object(r.a)(y,2),w=S[0],x=S[1],C=Object(i.useState)(!1),k=Object(r.a)(C,2),I=k[0],q=k[1];function D(){return(D=Object(l.a)(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/home-data").then(function(e){return e.json()}).then(function(t){var a=t[0].pic1.data?e.from(t[0].pic1.data).toString("base64"):null,n=t[0].pic2.data?e.from(t[0].pic2.data).toString("base64"):null,c=t[0].pic3.data?e.from(t[0].pic3.data).toString("base64"):null;return t[0].pic1="data:image/jpeg;base64,"+a,t[0].pic2="data:image/jpeg;base64,"+n,t[0].pic3="data:image/jpeg;base64,"+c,u(t[0])});case 2:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}Object(i.useEffect)(function(){!function(){D.apply(this,arguments)}()},[]);var T=function(){var e=Object(l.a)(c.a.mark(function e(t){var a,l,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return q(!1),t.preventDefault(),a=new FormData(t.target),l=JSON.stringify({id:n.id,title:a.get("title"),title_bloc1:a.get("title-bloc1"),title_bloc2:a.get("title-bloc2"),title_bloc3:a.get("title-bloc3"),bloc1:a.get("bloc1"),bloc2:a.get("bloc2"),bloc3:a.get("bloc3"),pic1:v,pic2:O,pic3:w}),r={"content-type":"application/json",accept:"application/json"},e.next=7,fetch("http://localhost:5000/home-data/"+n.id,{method:"PUT",headers:r,body:l}).then(function(e){return 200===e.status||204===e.status?q(!0):null});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"home-admin"},o.a.createElement("div",{className:"home-admin-title"},o.a.createElement("h4",null,"Editer la page d'accueil")),o.a.createElement("form",{onSubmit:T,noValidate:!0,autoComplete:"off"},o.a.createElement("div",{className:"home-admin-form",key:n?n.id:""},o.a.createElement(s.a,{className:"input-home-admin",required:!0,id:"standard-required",label:"Titre de la page",defaultValue:n?n.title:"",margin:"normal",name:"title",fullWidth:!0}),o.a.createElement("div",null,o.a.createElement(s.a,{className:"input-home-admin",id:"standard-required",label:"Titre du premier bloc",defaultValue:n?n.title_bloc1:"",margin:"normal",multiline:!0,name:"title-bloc1",fullWidth:!0}),o.a.createElement(s.a,{className:"input-home-admin",id:"standard-required",label:"Contenu de premier bloc",defaultValue:n?n.bloc1:"",margin:"normal",multiline:!0,name:"bloc1",fullWidth:!0}),o.a.createElement(b.a,{parentGiveImg:n&&n.pic1?n.pic1:null,parentGetImg:function(e){E(e)}})),o.a.createElement("div",null,o.a.createElement(s.a,{className:"input-home-admin",id:"standard-required",label:"Titre du second bloc",defaultValue:n?n.title_bloc2:"",margin:"normal",multiline:!0,name:"title-bloc2",fullWidth:!0}),o.a.createElement(s.a,{className:"input-home-admin",id:"standard-required",label:"Contenu de second bloc",defaultValue:n?n.bloc2:"",margin:"normal",multiline:!0,name:"bloc2",fullWidth:!0}),o.a.createElement(b.a,{parentGiveImg:n&&n.pic2?n.pic2:null,parentGetImg:function(e){N(e)}})),o.a.createElement("div",null,o.a.createElement(s.a,{className:"input-home-admin",id:"standard-required",label:"Titre du trois\xe8me bloc",defaultValue:n?n.title_bloc3:"",margin:"normal",multiline:!0,name:"title-bloc3",fullWidth:!0}),o.a.createElement(s.a,{className:"input-home-admin",id:"standard-required",label:"Contenu de troisi\xe8me bloc",defaultValue:n?n.bloc3:"",margin:"normal",multiline:!0,name:"bloc3",fullWidth:!0}),o.a.createElement(b.a,{parentGiveImg:n&&n.pic3?n.pic3:null,parentGetImg:function(e){x(e)}}))),o.a.createElement("div",{className:"send"},o.a.createElement(d.a,{className:"save",type:"submit",variant:"contained",color:"default"},"Sauvegarder",o.a.createElement(p.a,{className:"icon"},"send")))),o.a.createElement(h.a,{handleOpen:I,text:"Donn\xe9es de la page d'accueil sauvegard\xe9es en base de donn\xe9es"}))}}).call(this,a(39).Buffer)},142:function(e,t,a){e.exports=a(393)},147:function(e,t,a){},149:function(e,t,a){},205:function(e,t,a){},207:function(e,t,a){},209:function(e,t,a){},212:function(e,t,a){},214:function(e,t,a){},216:function(e,t,a){},24:function(e,t,a){"use strict";var n=a(4),c=a(0),l=a.n(c);a(371);function r(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),r=a[0],i=a[1],o=Object(c.useState)(),u=Object(n.a)(o,2),s=u[0],m=u[1],d=Object(c.useState)(!1),f=Object(n.a)(d,2),p=f[0],b=f[1],h=Object(c.useState)("uploader"),v=Object(n.a)(h,2),E=v[0],g=v[1],j=Object(c.useState)(e.baseColor),O=Object(n.a)(j,2),N=O[0],y=O[1],S=Object(c.useState)(e.baseColor),w=Object(n.a)(S,2),x=w[0],C=w[1];return Object(c.useEffect)(function(){g("uploader ".concat(p&&"loaded"));var t=r?e.activeColor:e.baseColor,a=r?e.activeColor:p?e.overlayColor:e.baseColor;y(t),C(a)}),Object(c.useEffect)(function(){e.parentGetImg(s)},[s]),Object(c.useEffect)(function(){e.parentGiveImg&&e.parentGiveImg.length>0?(m(e.parentGiveImg),b(!0)):null===e.parentGiveImg&&m()},[e.parentGiveImg]),l.a.createElement("label",{className:E,onDragEnter:function(e){i(!0)},onDragLeave:function(e){i(!1)},onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault(),i(!1),this.onFileChange(e,e.dataTransfer.files[0])},key:s,style:{outlineColor:N}},l.a.createElement("div",{className:"text-drop"},"Placer une image ou cliquer"),l.a.createElement("img",{src:s,className:p?"loaded":void 0,alt:"uploaded"}),l.a.createElement("i",{className:"icon icon-upload",style:{color:x}}),l.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e,t){var a=t||e.target.files[0],n=new FileReader;a.type.match(/image-*/)?(b(!1),n.onload=function(e){m(e.target.result),b(!0)},n.readAsDataURL(a)):alert("Format invalide")}}))}r.defaultProps={baseColor:"gray",activeColor:"green",overlayColor:"rgba(255,255,255,0.3)"},t.a=r},25:function(e,t,a){"use strict";var n=a(4),c=a(0),l=a.n(c),r=a(132),i=a.n(r),o=a(86),u=a.n(o),s=a(134),m=a.n(s);t.a=function(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),r=a[0],o=a[1];function s(e,t){"clickaway"!==t&&o(!1)}return Object(c.useEffect)(function(){o(e.handleOpen)},[e.handleOpen]),l.a.createElement("div",null,l.a.createElement(i.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:r,autoHideDuration:6e3,onClose:s,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("span",{id:"message-id"},e.text),action:[l.a.createElement(u.a,{key:"close","aria-label":"Close",color:"inherit",className:{padding:"5px"},onClick:s},l.a.createElement(m.a,null))]}))}},30:function(e,t,a){"use strict";var n=a(4),c=a(0),l=a.n(c),r=a(87),i=a.n(r),o=a(88),u=a.n(o),s=a(91),m=a.n(s),d=a(89),f=a.n(d),p=a(90),b=a.n(p);a(373);t.a=function(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),r=a[0],o=a[1];function s(){return e.list.map(function(e,t){return l.a.createElement(m.a,{key:t,value:e.id},e.name)})}return Object(c.useEffect)(function(){e.init?o(e.init):o("")},[e.init]),Object(c.useEffect)(function(){e.list&&e.list.length>0&&s()},[e.list]),Object(c.useEffect)(function(){return e.reinit?o(""):void 0},[e.reinit]),l.a.createElement("form",{autoComplete:"off"},l.a.createElement(f.a,{variant:"outlined",className:"formControl"},l.a.createElement(u.a,{htmlFor:"outlined-select-simple"},e.title),l.a.createElement(b.a,{value:r,onChange:function(t){var a=t.target.value;o(a),e.handleChange(a)},input:l.a.createElement(i.a,{labelWidth:0,name:"select",id:"outlined-select-simple"})},l.a.createElement(m.a,{value:""},l.a.createElement("em",null,"Aucune")),s())))}},371:function(e,t,a){},373:function(e,t,a){},379:function(e,t,a){},381:function(e,t,a){},383:function(e,t,a){},393:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(18),r=a.n(l),i=(a(147),a(4)),o=(a(149),a(38)),u=a(403),s=a(397),m=a(128),d=a(7),f=a.n(d),p=a(11),b=a(402),h=(a(207),Object(n.lazy)(function(){return a.e(1).then(a.bind(null,399))}));var v=function(e){return c.a.createElement("div",{className:"horizontal-frame"},c.a.createElement("div",{className:"horizontal-card"},c.a.createElement("div",{className:"horizontal-painting"},c.a.createElement(n.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement(h,{title:e.collection.name,idCollection:e.collection.id}))),c.a.createElement("div",{className:"horizontal-legend"},c.a.createElement("h5",null,e.collection?e.collection.name:""),c.a.createElement("p",null,e.collection?e.collection.detail:""))))};a(209);var E=Object(b.a)(function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],r=a[1];Object(n.useEffect)(function(){o()},[]);var o=function(){var e=Object(p.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,fetch("http://localhost:5000/collection/title").then(function(e){return e.json()}).then(function(e){return e.map(function(e){return t.push(e)})});case 3:r(t.reverse());case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("section",{className:"galleries-page"},c.a.createElement("div",{className:"galleries"},c.a.createElement("div",{className:"galleries-title"},"Mes collections de peintures"),l.map(function(t){return c.a.createElement("div",{className:"gallery-card",key:t.id,onClick:function(){return a=t.id,void e.history.push("/gallery/"+a);var a}},c.a.createElement(v,{collection:t}))})))}),g=(a(212),a(131)),j=Object(n.lazy)(function(){return a.e(2).then(a.bind(null,400))});var O=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],d=Object(n.useState)(null),b=Object(i.a)(d,2),h=b[0],v=b[1],E=Object(n.useState)([]),O=Object(i.a)(E,2),N=O[0],y=O[1],S=Object(n.useState)(""),w=Object(i.a)(S,2),x=w[0],C=w[1];Object(n.useEffect)(function(){var t=e.match.params;k(t.collectionId)},[]);var k=function(){var e=Object(p.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,fetch("http://localhost:5000/gallery/"+t+"/text").then(function(e){return e.json()}).then(function(e){e.painting&&e.painting.map(function(e){return a.push(e)}),e.collection&&C(e.collection.name)});case 3:D(a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();function I(e){m(!0),q(!0),v(e)}var q=function(t){e.notifyModalCall(t)};function D(e){for(var t=document.getElementById("gallery-content")||{},a=Math.floor(t.clientWidth/370),n=[],c=0;c<a;){for(var l=0;l<e.length;l+=a){var i=e[l+c];void 0!==i&&n.push(i)}c++}r(n),function(e){var t=e.reduce(function(e,t){return e.push(t.id),e},[]);y(t)}(e)}return c.a.createElement("div",{className:"gallery"},c.a.createElement("section",{className:"gallery-grid"},c.a.createElement("div",{className:"collection-name"},x),c.a.createElement("div",{id:"gallery-content",className:"content"},l.map(function(e){return c.a.createElement(n.Suspense,{key:e.id,fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement(j,{title:e.name,idPainting:e.id,detail:e.detail,callModal:I}))}))),c.a.createElement(g.a,{open:s,idsArray:N,idPainting:h,close:function(){m(!1),q(!1),v(null)}}))};var N=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Page Information \xe0 venir"))},y=(a(216),a(17)),S=a.n(y),w=a(20),x=a.n(w),C=a(21),k=a.n(C),I=a(25);var q=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),u=o[0],s=o[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),b=d[0],h=d[1],v=Object(n.useState)(!1),E=Object(i.a)(v,2),g=E[0],j=E[1],O=function(e){return!(e&&e.length>0)},N=function(e){return!/\S+@\S+\.\S+/.test(e)},y=function(e,t,a){return l(!1),s(!1),h(!1),j(!1),l(O(e)),s(O(t)||N(t)),h(O(a)),O(e)||O(t)||N(t)||O(a)},w=function(){var e=Object(p.a)(f.a.mark(function e(t){var a,n,c,l,r,i,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=new FormData(t.target),n=a.get("name"),c=a.get("email"),l=a.get("subject"),r=a.get("message"),y(n,c,r)){e.next=11;break}return i=JSON.stringify({name:n,email:c,subject:l,message:r}),o={"content-type":"application/json",accept:"application/json"},e.next=11,fetch("http://localhost:5000/contact",{method:"POST",headers:o,body:i}).then(function(e){return 201===e.status?(document.getElementById("contact-form").reset(),void j(!0)):null});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("section",{className:"contact-page"},c.a.createElement("div",{className:"contact"},c.a.createElement("h1",null,"Contact"),c.a.createElement("p",null,"Vous souhaitez \xeatre inform\xe9.e de mes prochaines expositions, me contacter ou me faire part de vos impressions ?"),c.a.createElement("p",null,"N'h\xe9sitez pas \xe0 utiliser ce formulaire, je vous r\xe9pondrai avec plaisir.")),c.a.createElement("form",{id:"contact-form",onSubmit:w,noValidate:!0,autoComplete:"off"},c.a.createElement(S.a,{className:"input",required:!0,id:"standard-required",label:"Nom",margin:"normal",name:"name",error:a,fullWidth:!0}),c.a.createElement(S.a,{className:"input",required:!0,id:"standard-required",label:"E-mail",margin:"normal",name:"email",error:u,fullWidth:!0}),c.a.createElement(S.a,{className:"input",id:"standard-required",label:"Sujet",margin:"normal",name:"subject",fullWidth:!0}),c.a.createElement(S.a,{className:"input",required:!0,id:"standard-required",label:"Message",margin:"normal",multiline:!0,name:"message",error:b,fullWidth:!0}),a||u||b?c.a.createElement("p",{className:"error"},"Certains champs sont requis. Merci de les remplir correctement"):c.a.createElement("span",null),c.a.createElement("div",{className:"send"},c.a.createElement(x.a,{className:"save",type:"submit",variant:"contained",color:"primary"},"Envoyer",c.a.createElement(k.a,{className:"icon"},"send")))),c.a.createElement(I.a,{handleOpen:g,text:"Message envoy\xe9 avec succ\xe8s"}))},D=(a(63),a(24));var T=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],d=function(){var t=Object(p.a)(f.a.mark(function t(a){var n,c,i;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m(!1),a.preventDefault(),n=new FormData(a.target),c=JSON.stringify({name:n.get("title"),detail:n.get("detail"),pic:l}),i={"content-type":"application/json",accept:"application/json"},t.next=7,fetch("http://localhost:5000/collection",{method:"POST",headers:i,body:c}).then(function(t){return 201===t.status?(m(!0),e.changeInCollec(),document.getElementById("collection-form-create").reset(),void r(null)):null});case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"create"},c.a.createElement("p",null,c.a.createElement("strong",null,"Cr\xe9er")," une nouvelle collection"),c.a.createElement("form",{id:"collection-form-create",onSubmit:d,noValidate:!0,autoComplete:"off"},c.a.createElement(S.a,{className:"input",required:!0,id:"standard-required",label:"Titre",defaultValue:"",margin:"normal",name:"title",fullWidth:!0}),c.a.createElement(S.a,{className:"input",id:"standard-required",label:"D\xe9tail",defaultValue:"",margin:"normal",multiline:!0,name:"detail",fullWidth:!0}),c.a.createElement(D.a,{parentGiveImg:l,parentGetImg:function(e){r(e)}}),c.a.createElement(x.a,{className:"send",type:"submit",variant:"contained",color:"default"},"Envoyer",c.a.createElement(k.a,{className:"icon"},"send"))),c.a.createElement(I.a,{handleOpen:s,text:"Collection sauvegard\xe9e en base de donn\xe9es"}))},W=a(135);var V=function(e){function t(){e.triggerCollec()}return c.a.createElement("div",{className:"collec"},c.a.createElement(T,{changeInCollec:t}),c.a.createElement(W.a,{changeInCollec:t,collectionNames:e.collectionNames}))},G=a(30);var P=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)([]),u=Object(i.a)(o,2),s=u[0],m=u[1],d=Object(n.useState)({}),b=Object(i.a)(d,2),h=b[0],v=b[1],E=Object(n.useState)(!1),g=Object(i.a)(E,2),j=g[0],O=g[1],N=Object(n.useState)(!1),y=Object(i.a)(N,2),w=y[0],C=y[1];Object(n.useEffect)(function(){m(e.collectionNames)},[e.collectionNames]);var q=function(){var t=Object(p.a)(f.a.mark(function t(a){var n,c,i;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=new FormData(a.target),c=JSON.stringify({name:n.get("title"),detail:n.get("detail"),pic:l,likes:0,collectionId:h.id}),i={"content-type":"application/json",accept:"application/json"},t.next=6,fetch("http://localhost:5000/painting",{method:"POST",headers:i,body:c}).then(function(t){return 201===t.status?(O(!0),document.getElementById("painting-form-create").reset(),r(null),C(!0),void e.updatePainting()):null});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"create"},c.a.createElement("p",null,c.a.createElement("strong",null,"Cr\xe9er")," un nouveau tableau"),c.a.createElement(G.a,{reinit:w,list:s,title:"Collection du tableau *",handleChange:function(e){C(!1),v(s.find(function(t){return t.id===e}))}}),c.a.createElement("form",{id:"painting-form-create",onSubmit:q,noValidate:!0,autoComplete:"off"},c.a.createElement(S.a,{className:"input",required:!0,id:"standard-required",label:"Titre",defaultValue:"",margin:"normal",name:"title",fullWidth:!0}),c.a.createElement(S.a,{className:"input",id:"standard-required",label:"D\xe9tail",defaultValue:"",margin:"normal",multiline:!0,name:"detail",fullWidth:!0}),c.a.createElement(D.a,{parentGiveImg:l,parentGetImg:function(e){r(e)}}),c.a.createElement(x.a,{className:"send",type:"submit",variant:"contained",color:"default"},"Envoyer",c.a.createElement(k.a,{className:"icon"},"send"))),c.a.createElement(I.a,{handleOpen:j,text:"Tableau sauvegard\xe9 en base de donn\xe9es"}))},M=a(136);var A=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],r=a[1];return c.a.createElement("div",{className:"collec"},c.a.createElement(P,{updatePainting:function(){r(!l)},collectionNames:e.collectionNames}),c.a.createElement(M.a,{updatePaintings:l,collectionNames:e.collectionNames}))},B=a(137),L=a(138),F=a.n(L),z=a(139),_=a.n(z),J=a(141),R=a.n(J),U=a(140),X=a.n(U);a(383);var H=function(e){return c.a.createElement(F.a,{className:"expansion"},c.a.createElement(_.a,{className:"title",expandIcon:c.a.createElement(X.a,null)},c.a.createElement("h4",null,e.title)),c.a.createElement(R.a,null,e.children))};var $=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)(function(){r()},[]);var r=function(){var e=Object(p.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,fetch("http://localhost:5000/collection/title").then(function(e){return e.json()}).then(function(e){return e.map(function(e){return t.push(e)})});case 3:l(t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"admin-page"},c.a.createElement("h1",null,"Page d'administration du site"),c.a.createElement(H,{title:"Ajouter ou modifier une collection"},c.a.createElement(V,{triggerCollec:function(){r()},collectionNames:a})),c.a.createElement(H,{title:"Ajouter ou modifier un tableau"},c.a.createElement(A,{collectionNames:a})),c.a.createElement(H,{title:"Modifier la page d'accueil"},c.a.createElement(B.a,null)))},K=function(e){var t=function(t){e.changeScrollBecauseModal(t)};return c.a.createElement(u.a,null,c.a.createElement(s.a,{exact:!0,path:"/",component:m.a}),c.a.createElement(s.a,{exact:!0,path:"/gallery",component:E}),c.a.createElement(s.a,{path:"/gallery/:collectionId",render:function(e){return c.a.createElement(O,Object.assign({},e,{notifyModalCall:t}))}}),c.a.createElement(s.a,{path:"/info",component:N}),c.a.createElement(s.a,{path:"/contact",component:q}),c.a.createElement(s.a,{path:"/admin",component:$}))},Q=a(398);var Y=function(){var e=Object(n.useState)(-1),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),u=Object(i.a)(r,1)[0],s=Object(n.useState)("main-content-modal-false"),m=Object(i.a)(s,2),d=m[0],f=m[1];return c.a.createElement("div",{style:{height:"300px"}},function(){var e=function(e){l(Number(e.currentTarget.dataset.id)),window.innerWidth<600&&document.querySelector(".mdl-layout").MaterialLayout.toggleDrawer()};return u?c.a.createElement(o.Content,null,c.a.createElement(K,null)):c.a.createElement(o.Layout,{fixedDrawer:!0},c.a.createElement(o.Drawer,{className:"menu",title:"Menu"},c.a.createElement("hr",null),c.a.createElement(o.Navigation,null,c.a.createElement(Q.a,{onClick:e,"data-id":"0",className:0===a?"active-page":"",to:"/"},"Accueil"),c.a.createElement(Q.a,{onClick:e,"data-id":"1",className:1===a?"active-page":"",to:"/gallery"},"Galeries"),c.a.createElement(Q.a,{onClick:e,"data-id":"2",className:2===a?"active-page":"",to:"/info"},"Informations"),c.a.createElement(Q.a,{onClick:e,"data-id":"3",className:3===a?"active-page":"",to:"/contact"},"Contact"))),c.a.createElement(o.Content,{className:d},c.a.createElement(K,{changeScrollBecauseModal:function(e){f("main-content-modal-"+e)}})))}())};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(390),a(392);var Z=a(401);r.a.render(c.a.createElement(Z.a,null,c.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,a){}},[[142,4,3]]]);
//# sourceMappingURL=main.1ad50a72.chunk.js.map