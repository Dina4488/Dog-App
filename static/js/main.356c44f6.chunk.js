(this["webpackJsonpdog-app"]=this["webpackJsonpdog-app"]||[]).push([[0],{55:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(21),r=c.n(s),j=(c(55),c(56),c(57),c(24)),i=c(43),d=c(50),o=c(49),b=c(89),l=c(22),O=(c(58),c(3)),h=function(e){Object(d.a)(c,e);var t=Object(o.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"p-home",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)("h1",{className:"display-4",children:"Dog Book"}),Object(O.jsx)("p",{className:"lead",children:"Man`s Best Friend"}),Object(O.jsx)(l.b,{className:"btn btn-light",to:"/breeds",children:"Woof!"})]})})}}]),c}(a.Component),u=c(15),x=c(18),g=c.n(x),m=c(93),f=c(46),p=c(90),v=c(91),N=function e(t,c,a){Object(j.a)(this,e),this.dogIndex=t,this.dogName=c,this.dogImg=a},y=c(45),C=c(95),I=c(6);c(83);var k=function(e){var t=e.dog,c=e.updateImg,n=Object(a.useState)("https://www.bil-jac.com/Images/DogPlaceholder.svg"),s=Object(u.a)(n,2),r=s[0],j=s[1],i=Object(a.useState)(),d=Object(u.a)(i,2),o=d[0],b=d[1];return Object(a.useEffect)((function(){var e="https://dog.ceo/api/breed/"+t.dogName+"/images/random";g.a.get(e).then((function(e){j(e.data.message)}))}),[]),Object(a.useEffect)((function(){var e="https://dog.ceo/api/breed/"+t.dogName+"/images/random";g.a.get(e).then((function(e){j(e.data.message)}))}),[c]),o?Object(O.jsx)(I.a,{to:"/breeds/"+o}):Object(O.jsx)(y.a,{xs:12,md:6,lg:3,children:Object(O.jsxs)(C.a,{className:"class-card",children:[Object(O.jsx)(C.a.Img,{variant:"top",src:r,onClick:function(){return b(t.dogName)}}),Object(O.jsxs)(C.a.Body,{className:"body",children:[Object(O.jsx)(C.a.Title,{className:"fixName"}),Object(O.jsx)(C.a.Text,{children:t.dogName})]})]})})};c(84);var w=function(e){var t=Object(a.useState)([]),c=Object(u.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(""),j=Object(u.a)(r,2),i=j[0],d=j[1],o=Object(a.useState)(!1),l=Object(u.a)(o,2),h=l[0],x=l[1];Object(a.useEffect)((function(){g.a.get("https://dog.ceo/api/breeds/list/all").then((function(e){s(Object.keys(e.data.message).map((function(e,t){return new N(t,e)})))}))}),[]);var y="";return n&&(y=n.filter((function(e){return e.dogName.toLowerCase().includes(i.toLowerCase())}))),Object(O.jsx)("div",{className:"p-dogs",children:Object(O.jsxs)(b.a,{className:"class-container",children:[Object(O.jsx)("h1",{children:" Dogs Gallery"}),Object(O.jsxs)(m.a,{className:"row filter",children:[Object(O.jsx)("div",{className:"col-lg-8 col-md-8 col-12 ",children:Object(O.jsx)(f.a,{type:"text",value:i,onChange:function(e){return d(e.target.value)},placeholder:"Filter by a dogs name"})}),Object(O.jsx)("div",{className:"col-lg-4 col-md-8 col-12 ",children:Object(O.jsx)("div",{className:"btn btn-secondary",onClick:function(){return x(!h)},children:"Update Images"})})]}),Object(O.jsx)(p.a,{children:n?y.map((function(e){return Object(O.jsx)(k,{dog:e,updateImg:h})})):Object(O.jsx)(v.a,{animation:"border"})})]})})};var S=function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(b.a,{children:Object(O.jsx)("h1",{className:"display-1",children:"404"})})})},B=c(92),F=c(94);var E=function(){return Object(O.jsxs)(B.a,{bg:"light",expand:"lg",children:[Object(O.jsx)(B.a.Brand,{href:"#/",children:"Home"}),Object(O.jsx)(B.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(B.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsx)(F.a,{className:"mr-auto",children:Object(O.jsx)(F.a.Link,{href:"#/breeds",children:"Breeds"})})})]})};c(86);var L=function(e){var t=e.dog;return Object(O.jsx)(y.a,{xs:12,md:6,lg:3,children:Object(O.jsx)(C.a,{className:"class-card-detail",children:Object(O.jsx)("a",{href:t,target:"_blank",children:Object(O.jsx)(C.a.Img,{variant:"top",src:t})})})})};var T=function(e){var t=Object(I.g)().index,c=Object(a.useState)([]),n=Object(u.a)(c,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){g.a.get("https://dog.ceo/api/breed/"+t+"/images").then((function(e){r(e.data.message)}))}),[]),Object(O.jsx)("div",{className:"p-dogs",children:Object(O.jsxs)(b.a,{className:"class-container",children:[Object(O.jsxs)("h1",{children:[" ",t," Gallery"]}),Object(O.jsx)(p.a,{children:s?s.map((function(e){return Object(O.jsx)(L,{dog:e})})):Object(O.jsx)(v.a,{animation:"border"})})]})})};var D=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(E,{}),Object(O.jsx)(l.a,{children:Object(O.jsxs)(I.d,{children:[Object(O.jsx)(I.b,{exact:!0,path:"/",children:Object(O.jsx)(h,{})}),Object(O.jsx)(I.b,{exact:!0,path:"/breeds",children:Object(O.jsx)(w,{})}),Object(O.jsx)(I.b,{exact:!0,path:"/breeds/:index",children:Object(O.jsx)(T,{})}),Object(O.jsx)(I.b,{path:"/",children:Object(O.jsx)(S,{})})]})})]})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,96)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(D,{})}),document.getElementById("root")),P()}},[[87,1,2]]]);
//# sourceMappingURL=main.356c44f6.chunk.js.map