(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),l=n.n(c),u=n(3),o=n.n(u),i=n(4),s=n(2),p=n(5),m=n.n(p),b={login:function(){var e=Object(i.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},d=null,f={getAll:function(){return m.a.get("/api/blogs").then(function(e){return e.data})},setToken:function(e){d="bearer ".concat(e)},create:function(){var e=Object(i.a)(o.a.mark(function e(t){var n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:d}},e.prev=1,e.next=4,m.a.post("/api/blogs",t,n);case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},g=function(e){var t=e.username,n=e.setUsername,a=e.password,c=e.setPassword,l=e.handleLogin,u=e.handleVisible,o=e.visible;return r.a.createElement("div",null,o&&r.a.createElement("form",{onSubmit:l},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:t,name:"Username",onChange:n})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:a,name:"Password",onChange:c})),r.a.createElement("button",{type:"submit"},"login")),r.a.createElement("button",{onClick:u},o?"cancel":"login"))},v=function(e){var t=e.blog;return r.a.createElement("div",null,t.title," ",t.author)},E=function(e){var t=e.blogs;return r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(v,{key:t,blog:e})}))},w=function(e){var t=e.addBlog,n=e.visible,c=e.toggleVisible,l=Object(a.useState)(""),u=Object(s.a)(l,2),o=u[0],i=u[1],p=Object(a.useState)(""),m=Object(s.a)(p,2),b=m[0],d=m[1],f=Object(a.useState)(""),g=Object(s.a)(f,2),v=g[0],E=g[1];return r.a.createElement("div",null,n&&r.a.createElement("div",null,r.a.createElement("div",null,"title:",r.a.createElement("input",{type:"text",value:o,name:"title",onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",null,"author:",r.a.createElement("input",{type:"text",value:b,name:"author",onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",null,"url:",r.a.createElement("input",{type:"text",value:v,name:"url",onChange:function(e){return E(e.target.value)}})),r.a.createElement("button",{onClick:function(){t({title:o,author:b,url:v})}},"create")),r.a.createElement("button",{onClick:function(){i(""),d(""),E(""),c()}},n?"cancel":"create blog"))},h=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),u=Object(s.a)(l,2),p=u[0],m=u[1],d=Object(a.useState)(!1),v=Object(s.a)(d,2),h=v[0],O=v[1],j=Object(a.useState)(!1),k=Object(s.a)(j,2),x=k[0],y=k[1],S=Object(a.useState)([]),C=Object(s.a)(S,2),A=C[0],B=C[1],T=Object(a.useState)(null),U=Object(s.a)(T,2),I=U[0],N=U[1],J=Object(a.useState)(null),V=Object(s.a)(J,2),P=V[0],D=V[1],L=Object(a.useState)(null),z=Object(s.a)(L,2),q=z[0],F=z[1];Object(a.useEffect)(function(){f.getAll().then(function(e){return B(e)})},[]),Object(a.useEffect)(function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);F(t),f.setToken(t.token)}},[]);var G=function(){h?(c(""),m(""),O(!1)):O(!0)},H=function(){var e=Object(i.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.login({username:n,password:p});case 4:a=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(a)),f.setToken(a.token),F(a),c(""),m(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),N("wrong username or password"),setTimeout(function(){N(null)},5e3);case 16:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t){return e.apply(this,arguments)}}(),K=function(e){return c(e.target.value)},M=function(e){return m(e.target.value)},Q=function(){var e=Object(i.a)(o.a.mark(function e(t){var n,a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.create(t);case 2:if(200!==(n=e.sent).status){e.next=13;break}return a=n.data.author,D("a new blog ".concat(t.title," added").concat(a?" by ".concat(a,"."):".")),e.next=8,f.getAll();case 8:r=e.sent,B(r),setTimeout(function(){D(null)},5e3),e.next=15;break;case 13:N("".concat(n.response.data.error)),setTimeout(function(){N(null)},5e3);case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App-header"},"Blogs"),r.a.createElement("div",{style:{color:"red"}},I),r.a.createElement("div",{style:{color:"green"}},P),q?r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},r.a.createElement("p",null,"".concat(q.name," logged in")),r.a.createElement("button",{onClick:function(){F(null),window.localStorage.removeItem("loggedNoteappUser")}},"logout")),r.a.createElement("h2",null,"create new blog"),r.a.createElement(w,{addBlog:Q,visible:x,toggleVisible:function(){return y(!x)}}),r.a.createElement(E,{blogs:A})):r.a.createElement(g,{username:n,password:p,setUsername:K,setPassword:M,handleLogin:H,visible:h,handleVisible:G}))};l.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.754b0034.chunk.js.map