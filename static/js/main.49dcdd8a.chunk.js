(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{19:function(e,t,c){"use strict";c.r(t);var n=c(11),r=c.n(n),s=c(5),a=c(2),j=c(9),i=c.n(j),b=c(1),l=function(){return Object(b.jsx)("div",{className:"navbar",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(s.b,{type:"button",to:"/",className:function(e){var t=e.isActive;return i()("navbar-item","is-tab",{"is-active":t})},children:"Home"}),Object(b.jsx)(s.b,{type:"button",to:"/people",className:function(e){var t=e.isActive;return i()("navbar-item","is-tab",{"is-active":t})},children:"People"})]})})},h=function(){return Object(b.jsx)("h1",{className:"title",children:"Home Page"})},o=c(12),d=c(4),u=c(7),O=c(10),x=c.n(O),m=c(0),p=function(e){var t=e.name,c=e.sex,n=e.born,r=e.died,s=e.motherName,a=e.fatherName;return Object(b.jsxs)("tr",{className:"Person",children:[Object(b.jsx)("td",{children:t}),Object(b.jsx)("td",{children:c}),Object(b.jsx)("td",{children:n}),Object(b.jsx)("td",{children:r}),Object(b.jsx)("td",{children:s||"-"}),Object(b.jsx)("td",{children:a||"-"})]})},f=function(e){return e.map((function(t){var c=e.find((function(e){return e.name===t.motherName})),n=e.find((function(e){return e.name===t.motherName}));return Object(u.a)(Object(u.a)({},t),{},{mother:c||null,father:n||null})}))},v=function(){var e=Object(m.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(m.useState)(!0),s=Object(d.a)(r,2),a=s[0],j=s[1],i=function(){var e=Object(o.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()}));case 2:t=e.sent,n(f(t)),j(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.useEffect)((function(){i()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"People"}),a?Object(b.jsx)("h2",{className:"subtitle",children:"Loading people..."}):Object(b.jsxs)("table",{className:"table is-striped is-hoverable",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Sex"}),Object(b.jsx)("th",{children:"Born"}),Object(b.jsx)("th",{children:"Died"}),Object(b.jsx)("th",{children:"Mother"}),Object(b.jsx)("th",{children:"Father"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e){return Object(b.jsx)(p,Object(u.a)({},e),e.name)}))})]})]})},N=function(){return Object(b.jsx)("h1",{className:"title",children:"Page not found :("})},g=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(l,{}),Object(b.jsxs)(a.d,{children:[Object(b.jsx)(a.b,{path:"/people",element:Object(b.jsx)(v,{})}),Object(b.jsx)(a.b,{path:"/",element:Object(b.jsx)(h,{})}),Object(b.jsx)(a.b,{path:"/home",element:Object(b.jsx)(a.a,{to:"/"})}),Object(b.jsx)(a.b,{path:"*",element:Object(b.jsx)(N,{})})]})]})};r.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.49dcdd8a.chunk.js.map