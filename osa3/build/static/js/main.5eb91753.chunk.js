(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(12),u=t.n(o),c=(t(6),t(2)),i=function(e){var n=e.filter,t=e.onChange;return r.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4: ",r.a.createElement("input",{value:n,onChange:t}))},l=function(e){var n=e.onSubmit,t=e.valueName,a=e.valueNumber,o=e.onChangeName,u=e.onChangeNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,r.a.createElement("h2",null,"lis\xe4\xe4 uusi"),"nimi: ",r.a.createElement("input",{value:t,onChange:o}),r.a.createElement("br",null),"numero: ",r.a.createElement("input",{value:a,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",null,"lis\xe4\xe4")))},m=function(e){var n=e.name,t=e.number;return r.a.createElement("p",null,n," ",t)},d=function(e){var n=e.persons,t=e.filter,a=e.onClick;return r.a.createElement("div",null,r.a.createElement("h2",null,"Numerot"),n.map(function(e,n){return e.name.toLowerCase().includes(t.toLowerCase())?r.a.createElement("div",{className:"personContainer",key:n},r.a.createElement(m,{name:e.name,number:e.number}),r.a.createElement("button",{onClick:function(){return a(e.id)}},"delete")):null}))},f=t(13),s={notification:{background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},h=function(e){var n=e.message,t=e.color;return!!n&&r.a.createElement("div",{style:Object(f.a)({},s.notification,{color:t})},r.a.createElement("h2",null,n))},b=t(3),v=t.n(b),g="http://localhost:3001/api/persons",E=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),m=Object(c.a)(u,2),f=m[0],s=m[1],b=Object(a.useState)(""),E=Object(c.a)(b,2),p=E[0],w=E[1],C=Object(a.useState)(""),j=Object(c.a)(C,2),O=j[0],S=j[1],k=Object(a.useState)(null),N=Object(c.a)(k,2),y=N[0],T=N[1],L=Object(a.useState)("green"),B=Object(c.a)(L,2),D=B[0],J=B[1];Object(a.useEffect)(function(){v.a.get(g).then(function(e){return e.data}).then(function(e){return o(e)})},[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Puhelinluettelo"),r.a.createElement(h,{message:y,color:D}),r.a.createElement(i,{filter:O,onChange:function(e){return S(e.target.value)}}),r.a.createElement(l,{onSubmit:function(e){e.preventDefault();var n,a,r=t.find(function(e){return e.name.toLowerCase()===f.toLowerCase()});r?window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))&&(r.number=p,(n=r,v.a.put("".concat(g,"/").concat(n.id),n).then(function(e){return e.data})).then(function(){o(t.map(function(e){return e.id===r.id?r:e})),J("green"),T("Updated ".concat(f," number to ").concat(p)),setTimeout(function(){return T(null)},5e3),s(""),w("")}).catch(function(){J("red"),T("".concat(r.name," has failed to update")),setTimeout(function(){return T(null)},5e3)})):((a={name:f,number:p},v.a.post(g,a).then(function(e){return e.data})).then(function(e){o(t.concat(e)),J("green"),T("Added ".concat(f)),setTimeout(function(){return T(null)},5e3)}).catch(function(e){J("red"),T("".concat(e)),setTimeout(function(){return T(null)},5e3)}),s(""),w(""))},valueName:f,valueNumber:p,onChangeName:function(e){return s(e.target.value)},onChangeNumber:function(e){return w(e.target.value)}}),r.a.createElement(d,{persons:t,filter:O,onClick:function(e){var n=t.find(function(n){return n.id===e});if(n&&window.confirm("Delete ".concat(n.name,"?"))){var a=t.filter(function(n){return n.id!==e});(function(e){return v.a.delete("".concat(g,"/").concat(e.id),e).then(function(e){return e.data})})(n).then(function(){o(a),J("green"),T("Removed ".concat(n.name)),setTimeout(function(){return T(null)},5e3)}).catch(function(){J("red"),T("".concat(n.name," has already been removed from the server")),setTimeout(function(){return T(null)},5e3)})}}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,n,t){}},[[14,1,2]]]);
//# sourceMappingURL=main.5eb91753.chunk.js.map