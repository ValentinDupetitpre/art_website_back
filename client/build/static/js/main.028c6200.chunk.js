(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){"use strict";t.a="https://sheltered-dusk-71937.herokuapp.com"},129:function(e,t,a){"use strict";(function(e){var n=a(7),c=a.n(n),r=a(11),l=a(4),i=a(0),o=a.n(i),u=(a(206),a(12));t.a=function(){var t=Object(i.useState)({}),a=Object(l.a)(t,2),n=a[0],s=a[1],m=Object(i.useState)(null),d=Object(l.a)(m,2),f=d[0],p=d[1],b=Object(i.useState)(null),v=Object(l.a)(b,2),h=v[0],E=v[1],g=Object(i.useState)(null),j=Object(l.a)(g,2),O=j[0],N=j[1];Object(i.useEffect)(function(){y(),S()},[]);var y=function(){var e=Object(r.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u.a,"/home-data/text")).then(function(e){return e.json()}).then(function(e){return s(e[0])});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),S=function(){var t=Object(r.a)(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u.a,"/home-data/pics")).then(function(e){return e.json()}).then(function(t){var a=t[0].pic1.data?e.from(t[0].pic1.data).toString("base64"):null,n=t[0].pic2.data?e.from(t[0].pic2.data).toString("base64"):null,c=t[0].pic3.data?e.from(t[0].pic3.data).toString("base64"):null;p("data:image/jpeg;base64,"+a),E("data:image/jpeg;base64,"+n),N("data:image/jpeg;base64,"+c)});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();return o.a.createElement("div",{className:"accueil"},o.a.createElement("div",{className:"home-title"},o.a.createElement("h2",null,n?n.title:"")),o.a.createElement("div",{className:"col-container block-img-text"},o.a.createElement("div",{className:"col"},o.a.createElement("img",{src:f||null,alt:"",className:"presentation-img"})),o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"text"},o.a.createElement("h3",null,n?n.title_bloc1:""),o.a.createElement("p",null,n?n.bloc1:"")))),o.a.createElement("div",{className:"col-container block-text-img"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"text"},o.a.createElement("h3",null,n?n.title_bloc2:""),o.a.createElement("p",null,n?n.bloc2:""))),o.a.createElement("div",{className:"col"},o.a.createElement("div",{style:{backgroundImage:"url("+h+")"},alt:"",className:"parallax-img-right"}))),o.a.createElement("div",{className:"col-container block-img-text"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{style:{backgroundImage:"url("+O+")"},alt:"",className:"parallax-img-left"})),o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"text"},o.a.createElement("h3",null,n?n.title_bloc3:""),o.a.createElement("p",null,n?n.bloc3:"")))))}}).call(this,a(40).Buffer)},132:function(e,t,a){"use strict";(function(e){var n=a(7),c=a.n(n),r=a(11),l=a(4),i=a(0),o=a.n(i),u=(a(215),a(12));t.a=function(t){var a=Object(i.useState)(!1),n=Object(l.a)(a,2),s=n[0],m=n[1],d=Object(i.useState)(null),f=Object(l.a)(d,2),p=f[0],b=f[1],v=Object(i.useState)(null),h=Object(l.a)(v,2),E=h[0],g=h[1],j=Object(i.useState)(0),O=Object(l.a)(j,2),N=O[0],y=O[1],S=Object(i.useState)(!1),w=Object(l.a)(S,2),x=w[0],C=w[1];Object(i.useEffect)(function(){return window.onpopstate=function(e){T()},function(){return T()}},[]),Object(i.useEffect)(function(){m(t.open)},[t.open]),Object(i.useEffect)(function(){g(t.idPainting),I(t.idPainting)},[t.idPainting]),Object(i.useEffect)(function(){m(!1)},[]),Object(i.useEffect)(function(){return document.addEventListener("keydown",k),function(){document.removeEventListener("keydown",k)}});var k=function(e){switch(e.key){case"ArrowLeft":D();break;case"ArrowRight":q();break;case"Escape":T()}},I=function(){var t=Object(r.a)(c.a.mark(function t(a){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u.a,"/painting/")+a+"/pic").then(function(e){return e.json()}).then(function(t){return t.map(function(t){var a=t.pic?e.from(t.pic).toString("base64"):null;return t.pic="data:image/jpeg;base64,"+a,b(t),null})});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();function q(){var e=t.idsArray.indexOf(E)+1;g(t.idsArray[e]),I(t.idsArray[e])}function D(){var e=t.idsArray.indexOf(E)-1;g(t.idsArray[e]),I(t.idsArray[e])}function T(){m(!1),t.close(),b(null)}var W=function(e){var t=e.touches[0];y(t.clientX)},V=function(e){e.changedTouches&&e.changedTouches.length&&C(!0)},G=function(e){var t=e.changedTouches[0].clientX-N;x&&Math.abs(t)>50&&(t>0?D():q()),y(0),C(!1)};return o.a.createElement("div",null,s?o.a.createElement("div",{id:"myModal",className:"modal"},o.a.createElement("span",{className:"close",onClick:T},"\xd7"),o.a.createElement("span",{className:"modal-left",onClick:D},"<"),o.a.createElement("span",{className:"modal-right",onClick:q},">"),o.a.createElement("img",{className:"modal-content",onTouchStart:W,onTouchMove:V,onTouchEnd:G,src:p?p.pic:null,alt:""}),o.a.createElement("div",{className:"caption"},o.a.createElement("div",{className:"caption-title"},p?p.name:""),o.a.createElement("div",{className:"caption-detail"},p?p.detail:""))):o.a.createElement("div",null))}}).call(this,a(40).Buffer)},136:function(e,t,a){"use strict";(function(e){var n=a(7),c=a.n(n),r=a(11),l=a(4),i=a(0),o=a.n(i),u=a(18),s=a.n(u),m=a(21),d=a.n(m),f=a(22),p=a.n(f),b=a(67),v=a.n(b),h=(a(64),a(12)),E=a(31),g=a(25),j=a(26);t.a=function(t){var a=Object(i.useState)([""]),n=Object(l.a)(a,2),u=n[0],m=n[1],f=Object(i.useState)(null),b=Object(l.a)(f,2),O=b[0],N=b[1],y=Object(i.useState)({}),S=Object(l.a)(y,2),w=S[0],x=S[1],C=Object(i.useState)(!1),k=Object(l.a)(C,2),I=k[0],q=k[1],D=Object(i.useState)(!1),T=Object(l.a)(D,2),W=T[0],V=T[1],G=Object(i.useState)("Collection sauvegard\xe9e en base de donn\xe9es"),P=Object(l.a)(G,2),M=P[0],A=P[1];Object(i.useEffect)(function(){m(t.collectionNames)},[t.collectionNames]);var B=function(){var t=Object(r.a)(c.a.mark(function t(a){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(h.a,"/collection/")+a).then(function(e){return e.json()}).then(function(t){if(t.pic){var a=e.from(t.pic.data).toString("base64");t.pic="data:image/jpeg;base64,"+a}return x(t)});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),L=function(){var e=Object(r.a)(c.a.mark(function e(t){var a,n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return V(!1),t.preventDefault(),a=new FormData(t.target),n=JSON.stringify({id:w.id,name:a.get("title"),detail:a.get("detail"),pic:O}),r={"content-type":"application/json",accept:"application/json"},e.next=7,fetch("".concat(h.a,"/collection/")+w.id,{method:"PUT",headers:r,body:n});case 7:A("Collection sauvegard\xe9e en base de donn\xe9es"),z();case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(r.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(V(!1),!w){e.next=9;break}return t=w.id,e.next=5,fetch("".concat(h.a,"/collection/")+t,{method:"DELETE",headers:{"content-type":"application/json",accept:"application/json"}});case 5:A("Collection supprim\xe9e de la base de donn\xe9es"),z(),e.next=10;break;case 9:console.log("erreur, pas de collection \xe0 supprimer");case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();function z(){V(!0),t.changeInCollec(),q(!0),N(null),x({}),m(t.collectionNames)}return o.a.createElement("div",{className:"edit"},o.a.createElement("div",{className:"edit-row"},o.a.createElement("p",null,o.a.createElement("strong",null,"Editer")," une collection existante"),o.a.createElement(E.a,{reinit:I,list:u,title:"Collections",handleChange:function(e){q(!1),B(e)}})),o.a.createElement("form",{onSubmit:L,noValidate:!0,autoComplete:"off",key:w?w.id:""},o.a.createElement(s.a,{className:"input",required:!0,id:"standard-required",label:"Titre",defaultValue:w?w.name:"",margin:"normal",name:"title",fullWidth:!0}),o.a.createElement(s.a,{className:"input",id:"standard-required",label:"D\xe9tail",defaultValue:w?w.detail:"",margin:"normal",multiline:!0,name:"detail",fullWidth:!0}),o.a.createElement(g.a,{parentGiveImg:w&&w.pic?w.pic:null,parentGetImg:function(e){N(e)}}),o.a.createElement("div",{className:"send"},o.a.createElement(d.a,{className:"reinit",variant:"contained",color:"primary",onClick:z},"R\xe9init.",o.a.createElement(p.a,{className:"icon"},"autorenew")),o.a.createElement(d.a,{className:"save",type:"submit",variant:"contained",color:"default"},"Sauver",o.a.createElement(p.a,{className:"icon"},"send")),o.a.createElement(d.a,{className:"delete",variant:"contained",color:"secondary",onClick:F},"Supprimer",o.a.createElement(v.a,{className:"icon"})))),o.a.createElement(j.a,{handleOpen:W,text:M}))}}).call(this,a(40).Buffer)},137:function(e,t,a){"use strict";(function(e){var n=a(7),c=a.n(n),r=a(11),l=a(4),i=a(0),o=a.n(i),u=a(18),s=a.n(u),m=a(21),d=a.n(m),f=a(22),p=a.n(f),b=a(67),v=a.n(b),h=(a(64),a(380),a(12)),E=a(31),g=a(25);t.a=function(t){var a=Object(i.useState)([""]),n=Object(l.a)(a,2),u=n[0],m=n[1],f=Object(i.useState)([]),b=Object(l.a)(f,2),j=b[0],O=b[1],N=Object(i.useState)(null),y=Object(l.a)(N,2),S=y[0],w=y[1],x=Object(i.useState)({}),C=Object(l.a)(x,2),k=C[0],I=C[1],q=Object(i.useState)(!1),D=Object(l.a)(q,2),T=D[0],W=D[1],V=Object(i.useState)(null),G=Object(l.a)(V,2),P=G[0],M=G[1];function A(){O(t.collectionNames)}Object(i.useEffect)(function(){B(),A()},[t]);var B=function(){var e=Object(r.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,fetch("".concat(h.a,"/painting/title")).then(function(e){return e.json()}).then(function(e){return e.map(function(e){return t.push(e)})});case 3:m(t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),L=function(){var t=Object(r.a)(c.a.mark(function t(a){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(h.a,"/painting/")+a).then(function(e){return e.json()}).then(function(t){var a,n=t.pic.data?e.from(t.pic.data).toString("base64"):null;return t.pic="data:image/jpeg;base64,"+n,I(a=t),void M(a?a.collectionId:null)});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();var F=function(){var e=Object(r.a)(c.a.mark(function e(t){var a,n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new FormData(t.target),n=JSON.stringify({id:k.id,name:a.get("title"),detail:a.get("detail"),pic:S,collectionId:P}),r={"content-type":"application/json",accept:"application/json"},e.next=6,fetch("".concat(h.a,"/painting/")+k.id,{method:"PUT",headers:r,body:n});case 6:_();case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(r.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!k){e.next=7;break}return t=k.id,e.next=4,fetch("".concat(h.a,"/painting/")+t,{method:"DELETE",headers:{"content-type":"application/json",accept:"application/json"}});case 4:_(),e.next=8;break;case 7:console.log("erreur, pas de tableau \xe0 supprimer");case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();function _(){W(!0),w(null),I({}),M(null),m([""]),A(),B()}return o.a.createElement("div",{className:"edit"},o.a.createElement("div",{className:"edit-row"},o.a.createElement("p",{className:"selectCollec"},o.a.createElement("strong",null,"Editer")," un tableau existant"),o.a.createElement(E.a,{reinit:T,list:u,title:"Tableaux",handleChange:function(e){W(!1),L(e)}})),o.a.createElement(E.a,{init:P||"",reinit:T,list:j,title:"Collection du tableau *",handleChange:function(e){W(!1),M(e)}}),o.a.createElement("form",{onSubmit:F,noValidate:!0,autoComplete:"off",key:k?k.id:""},o.a.createElement(s.a,{className:"input",required:!0,id:"standard-required",label:"Titre",defaultValue:k?k.name:"",margin:"normal",name:"title",fullWidth:!0}),o.a.createElement(s.a,{className:"input",id:"standard-required",label:"D\xe9tail",defaultValue:k?k.detail:"",margin:"normal",multiline:!0,name:"detail",fullWidth:!0}),o.a.createElement(g.a,{parentGiveImg:k&&k.pic?k.pic:null,parentGetImg:function(e){w(e)}}),o.a.createElement("div",{className:"send"},o.a.createElement(d.a,{className:"reinit",variant:"contained",color:"primary",onClick:_},"R\xe9init.",o.a.createElement(p.a,{className:"icon"},"autorenew")),o.a.createElement(d.a,{className:"save",type:"submit",variant:"contained",color:"default"},"Sauver",o.a.createElement(p.a,{className:"icon"},"send")),o.a.createElement(d.a,{className:"delete",variant:"contained",color:"secondary",onClick:z},"Supprimer",o.a.createElement(v.a,{className:"icon"})))))}}).call(this,a(40).Buffer)},138:function(e,t,a){"use strict";(function(e){var n=a(7),c=a.n(n),r=a(11),l=a(4),i=a(0),o=a.n(i),u=a(18),s=a.n(u),m=a(21),d=a.n(m),f=a(22),p=a.n(f),b=(a(382),a(12)),v=a(25),h=a(26);t.a=function(){var t=Object(i.useState)({}),a=Object(l.a)(t,2),n=a[0],u=a[1],m=Object(i.useState)(null),f=Object(l.a)(m,2),E=f[0],g=f[1],j=Object(i.useState)(null),O=Object(l.a)(j,2),N=O[0],y=O[1],S=Object(i.useState)(null),w=Object(l.a)(S,2),x=w[0],C=w[1],k=Object(i.useState)(!1),I=Object(l.a)(k,2),q=I[0],D=I[1];function T(){return(T=Object(r.a)(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b.a,"/home-data")).then(function(e){return e.json()}).then(function(t){var a=t[0].pic1.data?e.from(t[0].pic1.data).toString("base64"):null,n=t[0].pic2.data?e.from(t[0].pic2.data).toString("base64"):null,c=t[0].pic3.data?e.from(t[0].pic3.data).toString("base64"):null;return t[0].pic1="data:image/jpeg;base64,"+a,t[0].pic2="data:image/jpeg;base64,"+n,t[0].pic3="data:image/jpeg;base64,"+c,u(t[0])});case 2:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}Object(i.useEffect)(function(){!function(){T.apply(this,arguments)}()},[]);var W=function(){var e=Object(r.a)(c.a.mark(function e(t){var a,r,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return D(!1),t.preventDefault(),a=new FormData(t.target),r=JSON.stringify({id:n.id,title:a.get("title"),title_bloc1:a.get("title-bloc1"),title_bloc2:a.get("title-bloc2"),title_bloc3:a.get("title-bloc3"),bloc1:a.get("bloc1"),bloc2:a.get("bloc2"),bloc3:a.get("bloc3"),pic1:E,pic2:N,pic3:x}),l={"content-type":"application/json",accept:"application/json"},e.next=7,fetch("".concat(b.a,"/home-data/")+n.id,{method:"PUT",headers:l,body:r}).then(function(e){return 200===e.status||204===e.status?D(!0):null});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"home-admin"},o.a.createElement("div",{className:"home-admin-title"},o.a.createElement("h4",null,"Editer la page d'accueil")),o.a.createElement("form",{onSubmit:W,noValidate:!0,autoComplete:"off"},o.a.createElement("div",{className:"home-admin-form",key:n?n.id:""},o.a.createElement(s.a,{className:"input-home-admin",required:!0,id:"standard-required",label:"Titre de la page",defaultValue:n?n.title:"",margin:"normal",name:"title",fullWidth:!0}),o.a.createElement("div",null,o.a.createElement(s.a,{className:"input-home-admin",id:"standard-required",label:"Titre du premier bloc",defaultValue:n?n.title_bloc1:"",margin:"normal",multiline:!0,name:"title-bloc1",fullWidth:!0}),o.a.createElement(s.a,{className:"input-home-admin",id:"standard-required",label:"Contenu de premier bloc",defaultValue:n?n.bloc1:"",margin:"normal",multiline:!0,name:"bloc1",fullWidth:!0}),o.a.createElement(v.a,{parentGiveImg:n&&n.pic1?n.pic1:null,parentGetImg:function(e){g(e)}})),o.a.createElement("div",null,o.a.createElement(s.a,{className:"input-home-admin",id:"standard-required",label:"Titre du second bloc",defaultValue:n?n.title_bloc2:"",margin:"normal",multiline:!0,name:"title-bloc2",fullWidth:!0}),o.a.createElement(s.a,{className:"input-home-admin",id:"standard-required",label:"Contenu de second bloc",defaultValue:n?n.bloc2:"",margin:"normal",multiline:!0,name:"bloc2",fullWidth:!0}),o.a.createElement(v.a,{parentGiveImg:n&&n.pic2?n.pic2:null,parentGetImg:function(e){y(e)}})),o.a.createElement("div",null,o.a.createElement(s.a,{className:"input-home-admin",id:"standard-required",label:"Titre du trois\xe8me bloc",defaultValue:n?n.title_bloc3:"",margin:"normal",multiline:!0,name:"title-bloc3",fullWidth:!0}),o.a.createElement(s.a,{className:"input-home-admin",id:"standard-required",label:"Contenu de troisi\xe8me bloc",defaultValue:n?n.bloc3:"",margin:"normal",multiline:!0,name:"bloc3",fullWidth:!0}),o.a.createElement(v.a,{parentGiveImg:n&&n.pic3?n.pic3:null,parentGetImg:function(e){C(e)}}))),o.a.createElement("div",{className:"send"},o.a.createElement(d.a,{className:"save",type:"submit",variant:"contained",color:"default"},"Sauvegarder",o.a.createElement(p.a,{className:"icon"},"send")))),o.a.createElement(h.a,{handleOpen:q,text:"Donn\xe9es de la page d'accueil sauvegard\xe9es en base de donn\xe9es"}))}}).call(this,a(40).Buffer)},143:function(e,t,a){e.exports=a(394)},148:function(e,t,a){},150:function(e,t,a){},206:function(e,t,a){},208:function(e,t,a){},210:function(e,t,a){},213:function(e,t,a){},215:function(e,t,a){},217:function(e,t,a){},25:function(e,t,a){"use strict";var n=a(4),c=a(0),r=a.n(c);a(372);function l(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),l=a[0],i=a[1],o=Object(c.useState)(),u=Object(n.a)(o,2),s=u[0],m=u[1],d=Object(c.useState)(!1),f=Object(n.a)(d,2),p=f[0],b=f[1],v=Object(c.useState)("uploader"),h=Object(n.a)(v,2),E=h[0],g=h[1],j=Object(c.useState)(e.baseColor),O=Object(n.a)(j,2),N=O[0],y=O[1],S=Object(c.useState)(e.baseColor),w=Object(n.a)(S,2),x=w[0],C=w[1];return Object(c.useEffect)(function(){g("uploader ".concat(p&&"loaded"));var t=l?e.activeColor:e.baseColor,a=l?e.activeColor:p?e.overlayColor:e.baseColor;y(t),C(a)}),Object(c.useEffect)(function(){e.parentGetImg(s)},[s]),Object(c.useEffect)(function(){e.parentGiveImg&&e.parentGiveImg.length>0?(m(e.parentGiveImg),b(!0)):null===e.parentGiveImg&&m()},[e.parentGiveImg]),r.a.createElement("label",{className:E,onDragEnter:function(e){i(!0)},onDragLeave:function(e){i(!1)},onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault(),i(!1),this.onFileChange(e,e.dataTransfer.files[0])},key:s,style:{outlineColor:N}},r.a.createElement("div",{className:"text-drop"},"Placer une image ou cliquer"),r.a.createElement("img",{src:s,className:p?"loaded":void 0,alt:"uploaded"}),r.a.createElement("i",{className:"icon icon-upload",style:{color:x}}),r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e,t){var a=t||e.target.files[0],n=new FileReader;a.type.match(/image-*/)?(b(!1),n.onload=function(e){m(e.target.result),b(!0)},n.readAsDataURL(a)):alert("Format invalide")}}))}l.defaultProps={baseColor:"gray",activeColor:"green",overlayColor:"rgba(255,255,255,0.3)"},t.a=l},26:function(e,t,a){"use strict";var n=a(4),c=a(0),r=a.n(c),l=a(133),i=a.n(l),o=a(87),u=a.n(o),s=a(135),m=a.n(s);t.a=function(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),l=a[0],o=a[1];function s(e,t){"clickaway"!==t&&o(!1)}return Object(c.useEffect)(function(){o(e.handleOpen)},[e.handleOpen]),r.a.createElement("div",null,r.a.createElement(i.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:l,autoHideDuration:6e3,onClose:s,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},e.text),action:[r.a.createElement(u.a,{key:"close","aria-label":"Close",color:"inherit",className:{padding:"5px"},onClick:s},r.a.createElement(m.a,null))]}))}},31:function(e,t,a){"use strict";var n=a(4),c=a(0),r=a.n(c),l=a(88),i=a.n(l),o=a(89),u=a.n(o),s=a(92),m=a.n(s),d=a(90),f=a.n(d),p=a(91),b=a.n(p);a(374);t.a=function(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),l=a[0],o=a[1];function s(){return e.list.map(function(e,t){return r.a.createElement(m.a,{key:t,value:e.id},e.name)})}return Object(c.useEffect)(function(){e.init?o(e.init):o("")},[e.init]),Object(c.useEffect)(function(){e.list&&e.list.length>0&&s()},[e.list]),Object(c.useEffect)(function(){return e.reinit?o(""):void 0},[e.reinit]),r.a.createElement("form",{autoComplete:"off"},r.a.createElement(f.a,{variant:"outlined",className:"formControl"},r.a.createElement(u.a,{htmlFor:"outlined-select-simple"},e.title),r.a.createElement(b.a,{value:l,onChange:function(t){var a=t.target.value;o(a),e.handleChange(a)},input:r.a.createElement(i.a,{labelWidth:0,name:"select",id:"outlined-select-simple"})},r.a.createElement(m.a,{value:""},r.a.createElement("em",null,"Aucune")),s())))}},372:function(e,t,a){},374:function(e,t,a){},380:function(e,t,a){},382:function(e,t,a){},384:function(e,t,a){},394:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),i=(a(148),a(4)),o=(a(150),a(39)),u=a(404),s=a(398),m=a(129),d=a(7),f=a.n(d),p=a(11),b=a(403),v=a(12),h=(a(208),Object(n.lazy)(function(){return a.e(1).then(a.bind(null,400))}));var E=function(e){return c.a.createElement("div",{className:"horizontal-frame"},c.a.createElement("div",{className:"horizontal-card"},c.a.createElement("div",{className:"horizontal-painting"},c.a.createElement(n.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement(h,{title:e.collection.name,idCollection:e.collection.id}))),c.a.createElement("div",{className:"horizontal-legend"},c.a.createElement("h5",null,e.collection?e.collection.name:""),c.a.createElement("p",null,e.collection?e.collection.detail:""))))};a(210);var g=Object(b.a)(function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],l=a[1];Object(n.useEffect)(function(){o()},[]);var o=function(){var e=Object(p.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,fetch("".concat(v.a,"/collection/title")).then(function(e){return e.json()}).then(function(e){return e.map(function(e){return t.push(e)})});case 3:l(t.reverse());case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("section",{className:"galleries-page"},c.a.createElement("div",{className:"galleries"},c.a.createElement("div",{className:"galleries-title"},"Mes collections de peintures"),r.map(function(t){return c.a.createElement("div",{className:"gallery-card",key:t.id,onClick:function(){return a=t.id,void e.history.push("/gallery/"+a);var a}},c.a.createElement(E,{collection:t}))})))}),j=(a(213),a(132)),O=Object(n.lazy)(function(){return a.e(2).then(a.bind(null,401))});var N=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],d=Object(n.useState)(null),b=Object(i.a)(d,2),h=b[0],E=b[1],g=Object(n.useState)([]),N=Object(i.a)(g,2),y=N[0],S=N[1],w=Object(n.useState)(""),x=Object(i.a)(w,2),C=x[0],k=x[1];Object(n.useEffect)(function(){var t=e.match.params;I(t.collectionId)},[]);var I=function(){var e=Object(p.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,fetch("".concat(v.a,"/gallery/")+t+"/text").then(function(e){return e.json()}).then(function(e){e.painting&&e.painting.map(function(e){return a.push(e)}),e.collection&&k(e.collection.name)});case 3:T(a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();function q(e){m(!0),D(!0),E(e)}var D=function(t){e.notifyModalCall(t)};function T(e){for(var t=document.getElementById("gallery-content")||{},a=Math.floor(t.clientWidth/370),n=[],c=0;c<a;){for(var r=0;r<e.length;r+=a){var i=e[r+c];void 0!==i&&n.push(i)}c++}l(n),function(e){var t=e.reduce(function(e,t){return e.push(t.id),e},[]);S(t)}(e)}return c.a.createElement("div",{className:"gallery"},c.a.createElement("section",{className:"gallery-grid"},c.a.createElement("div",{className:"collection-name"},C),c.a.createElement("div",{id:"gallery-content",className:"content"},r.map(function(e){return c.a.createElement(n.Suspense,{key:e.id,fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement(O,{title:e.name,idPainting:e.id,detail:e.detail,callModal:q}))}))),c.a.createElement(j.a,{open:s,idsArray:y,idPainting:h,close:function(){m(!1),D(!1),E(null)}}))};var y=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Page Information \xe0 venir"))},S=(a(217),a(18)),w=a.n(S),x=a(21),C=a.n(x),k=a(22),I=a.n(k),q=a(26);var D=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),u=o[0],s=o[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),b=d[0],h=d[1],E=Object(n.useState)(!1),g=Object(i.a)(E,2),j=g[0],O=g[1],N=function(e){return!(e&&e.length>0)},y=function(e){return!/\S+@\S+\.\S+/.test(e)},S=function(e,t,a){return r(!1),s(!1),h(!1),O(!1),r(N(e)),s(N(t)||y(t)),h(N(a)),N(e)||N(t)||y(t)||N(a)},x=function(){var e=Object(p.a)(f.a.mark(function e(t){var a,n,c,r,l,i,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=new FormData(t.target),n=a.get("name"),c=a.get("email"),r=a.get("subject"),l=a.get("message"),S(n,c,l)){e.next=11;break}return i=JSON.stringify({name:n,email:c,subject:r,message:l}),o={"content-type":"application/json",accept:"application/json"},e.next=11,fetch("".concat(v.a,"/contact"),{method:"POST",headers:o,body:i}).then(function(e){return 201===e.status?(document.getElementById("contact-form").reset(),void O(!0)):null});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("section",{className:"contact-page"},c.a.createElement("div",{className:"contact"},c.a.createElement("h1",null,"Contact"),c.a.createElement("p",null,"Vous souhaitez \xeatre inform\xe9.e de mes prochaines expositions, me contacter ou me faire part de vos impressions ?"),c.a.createElement("p",null,"N'h\xe9sitez pas \xe0 utiliser ce formulaire, je vous r\xe9pondrai avec plaisir.")),c.a.createElement("form",{id:"contact-form",onSubmit:x,noValidate:!0,autoComplete:"off"},c.a.createElement(w.a,{className:"input",required:!0,id:"standard-required",label:"Nom",margin:"normal",name:"name",error:a,fullWidth:!0}),c.a.createElement(w.a,{className:"input",required:!0,id:"standard-required",label:"E-mail",margin:"normal",name:"email",error:u,fullWidth:!0}),c.a.createElement(w.a,{className:"input",id:"standard-required",label:"Sujet",margin:"normal",name:"subject",fullWidth:!0}),c.a.createElement(w.a,{className:"input",required:!0,id:"standard-required",label:"Message",margin:"normal",multiline:!0,name:"message",error:b,fullWidth:!0}),a||u||b?c.a.createElement("p",{className:"error"},"Certains champs sont requis. Merci de les remplir correctement"):c.a.createElement("span",null),c.a.createElement("div",{className:"send"},c.a.createElement(C.a,{className:"save",type:"submit",variant:"contained",color:"primary"},"Envoyer",c.a.createElement(I.a,{className:"icon"},"send")))),c.a.createElement(q.a,{handleOpen:j,text:"Message envoy\xe9 avec succ\xe8s"}))},T=(a(64),a(25));var W=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],d=function(){var t=Object(p.a)(f.a.mark(function t(a){var n,c,i;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m(!1),a.preventDefault(),n=new FormData(a.target),c=JSON.stringify({name:n.get("title"),detail:n.get("detail"),pic:r}),i={"content-type":"application/json",accept:"application/json"},t.next=7,fetch("".concat(v.a,"/collection"),{method:"POST",headers:i,body:c}).then(function(t){return 201===t.status?(m(!0),e.changeInCollec(),document.getElementById("collection-form-create").reset(),void l(null)):null});case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"create"},c.a.createElement("p",null,c.a.createElement("strong",null,"Cr\xe9er")," une nouvelle collection"),c.a.createElement("form",{id:"collection-form-create",onSubmit:d,noValidate:!0,autoComplete:"off"},c.a.createElement(w.a,{className:"input",required:!0,id:"standard-required",label:"Titre",defaultValue:"",margin:"normal",name:"title",fullWidth:!0}),c.a.createElement(w.a,{className:"input",id:"standard-required",label:"D\xe9tail",defaultValue:"",margin:"normal",multiline:!0,name:"detail",fullWidth:!0}),c.a.createElement(T.a,{parentGiveImg:r,parentGetImg:function(e){l(e)}}),c.a.createElement(C.a,{className:"send",type:"submit",variant:"contained",color:"default"},"Envoyer",c.a.createElement(I.a,{className:"icon"},"send"))),c.a.createElement(q.a,{handleOpen:s,text:"Collection sauvegard\xe9e en base de donn\xe9es"}))},V=a(136);var G=function(e){function t(){e.triggerCollec()}return c.a.createElement("div",{className:"collec"},c.a.createElement(W,{changeInCollec:t}),c.a.createElement(V.a,{changeInCollec:t,collectionNames:e.collectionNames}))},P=a(31);var M=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)([]),u=Object(i.a)(o,2),s=u[0],m=u[1],d=Object(n.useState)({}),b=Object(i.a)(d,2),h=b[0],E=b[1],g=Object(n.useState)(!1),j=Object(i.a)(g,2),O=j[0],N=j[1],y=Object(n.useState)(!1),S=Object(i.a)(y,2),x=S[0],k=S[1];Object(n.useEffect)(function(){m(e.collectionNames)},[e.collectionNames]);var D=function(){var t=Object(p.a)(f.a.mark(function t(a){var n,c,i;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=new FormData(a.target),c=JSON.stringify({name:n.get("title"),detail:n.get("detail"),pic:r,likes:0,collectionId:h.id}),i={"content-type":"application/json",accept:"application/json"},t.next=6,fetch("".concat(v.a,"/painting"),{method:"POST",headers:i,body:c}).then(function(t){return 201===t.status?(N(!0),document.getElementById("painting-form-create").reset(),l(null),k(!0),void e.updatePainting()):null});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"create"},c.a.createElement("p",null,c.a.createElement("strong",null,"Cr\xe9er")," un nouveau tableau"),c.a.createElement(P.a,{reinit:x,list:s,title:"Collection du tableau *",handleChange:function(e){k(!1),E(s.find(function(t){return t.id===e}))}}),c.a.createElement("form",{id:"painting-form-create",onSubmit:D,noValidate:!0,autoComplete:"off"},c.a.createElement(w.a,{className:"input",required:!0,id:"standard-required",label:"Titre",defaultValue:"",margin:"normal",name:"title",fullWidth:!0}),c.a.createElement(w.a,{className:"input",id:"standard-required",label:"D\xe9tail",defaultValue:"",margin:"normal",multiline:!0,name:"detail",fullWidth:!0}),c.a.createElement(T.a,{parentGiveImg:r,parentGetImg:function(e){l(e)}}),c.a.createElement(C.a,{className:"send",type:"submit",variant:"contained",color:"default"},"Envoyer",c.a.createElement(I.a,{className:"icon"},"send"))),c.a.createElement(q.a,{handleOpen:O,text:"Tableau sauvegard\xe9 en base de donn\xe9es"}))},A=a(137);var B=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],l=a[1];return c.a.createElement("div",{className:"collec"},c.a.createElement(M,{updatePainting:function(){l(!r)},collectionNames:e.collectionNames}),c.a.createElement(A.a,{updatePaintings:r,collectionNames:e.collectionNames}))},L=a(138),F=a(139),z=a.n(F),_=a(140),J=a.n(_),R=a(142),U=a.n(R),X=a(141),H=a.n(X);a(384);var $=function(e){return c.a.createElement(z.a,{className:"expansion"},c.a.createElement(J.a,{className:"title",expandIcon:c.a.createElement(H.a,null)},c.a.createElement("h4",null,e.title)),c.a.createElement(U.a,null,e.children))};var K=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){l()},[]);var l=function(){var e=Object(p.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,fetch("".concat(v.a,"/collection/title")).then(function(e){return e.json()}).then(function(e){return e.map(function(e){return t.push(e)})});case 3:r(t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"admin-page"},c.a.createElement("h1",null,"Page d'administration du site"),c.a.createElement($,{title:"Ajouter ou modifier une collection"},c.a.createElement(G,{triggerCollec:function(){l()},collectionNames:a})),c.a.createElement($,{title:"Ajouter ou modifier un tableau"},c.a.createElement(B,{collectionNames:a})),c.a.createElement($,{title:"Modifier la page d'accueil"},c.a.createElement(L.a,null)))},Q=function(e){var t=function(t){e.changeScrollBecauseModal(t)};return c.a.createElement(u.a,null,c.a.createElement(s.a,{exact:!0,path:"/",component:m.a}),c.a.createElement(s.a,{exact:!0,path:"/gallery",component:g}),c.a.createElement(s.a,{path:"/gallery/:collectionId",render:function(e){return c.a.createElement(N,Object.assign({},e,{notifyModalCall:t}))}}),c.a.createElement(s.a,{path:"/info",component:y}),c.a.createElement(s.a,{path:"/contact",component:D}),c.a.createElement(s.a,{path:"/admin",component:K}))},Y=a(399);var Z=function(){var e=Object(n.useState)(-1),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),u=Object(i.a)(l,1)[0],s=Object(n.useState)("main-content-modal-false"),m=Object(i.a)(s,2),d=m[0],f=m[1];return c.a.createElement("div",{style:{height:"300px"}},function(){var e=function(e){r(Number(e.currentTarget.dataset.id)),window.innerWidth<600&&document.querySelector(".mdl-layout").MaterialLayout.toggleDrawer()};return u?c.a.createElement(o.Content,null,c.a.createElement(Q,null)):c.a.createElement(o.Layout,{fixedDrawer:!0},c.a.createElement(o.Drawer,{className:"menu",title:"Menu"},c.a.createElement("hr",null),c.a.createElement(o.Navigation,null,c.a.createElement(Y.a,{onClick:e,"data-id":"0",className:0===a?"active-page":"",to:"/"},"Accueil"),c.a.createElement(Y.a,{onClick:e,"data-id":"1",className:1===a?"active-page":"",to:"/gallery"},"Galeries"),c.a.createElement(Y.a,{onClick:e,"data-id":"2",className:2===a?"active-page":"",to:"/info"},"Informations"),c.a.createElement(Y.a,{onClick:e,"data-id":"3",className:3===a?"active-page":"",to:"/contact"},"Contact"))),c.a.createElement(o.Content,{className:d},c.a.createElement(Q,{changeScrollBecauseModal:function(e){f("main-content-modal-"+e)}})))}())};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(391),a(393);var ee=a(402);l.a.render(c.a.createElement(ee.a,null,c.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,t,a){}},[[143,4,3]]]);
//# sourceMappingURL=main.028c6200.chunk.js.map