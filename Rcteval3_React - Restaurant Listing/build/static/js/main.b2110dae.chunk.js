(this["webpackJsonprct-101-c3-problem-template-anant-solution"]=this["webpackJsonprct-101-c3-problem-template-anant-solution"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(8),c=n(2),r=n(5),i=n(0);var s=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(r.b,{to:"/login",children:Object(i.jsx)("h3",{"data-testid":"login-link",children:"Login Page"})}),Object(i.jsx)(r.b,{to:"/dashboard",children:Object(i.jsx)("h3",{"data-testid":"home-link",children:"Home"})})]})},j=n(3),d=n(1),o=Object(d.createContext)();var b=function(t){var e=t.children,n=Object(d.useState)(!1),a=Object(j.a)(n,2),c=a[0],r=a[1],s=Object(d.useState)(null),b=Object(j.a)(s,2),l=b[0],u=b[1];return Object(i.jsx)(o.Provider,{value:{isAuth:c,loginUser:function(t){r(!0),u(t)},logoutUser:function(){r(!1),u(null)},token:l},children:e})};var l=function(){var t=Object(d.useState)(""),e=Object(j.a)(t,2),n=e[0],a=e[1],s=Object(d.useState)(""),b=Object(j.a)(s,2),l=b[0],u=b[1],h=Object(d.useContext)(o).loginUser,O=Object(c.g)();return Object(i.jsxs)("div",{children:[Object(i.jsxs)("form",{"data-testid":"login-form",onSubmit:function(t){t.preventDefault();var e={email:n,password:l};fetch("https://reqres.in/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})).then((function(t){console.log(t.token),h(t.token),O("/dashboard")}))},children:[Object(i.jsx)("div",{children:Object(i.jsxs)("label",{children:["Email",Object(i.jsx)("input",{"data-testid":"email-input",type:"email",placeholder:"email",value:n,onChange:function(t){return a(t.target.value)}})]})}),Object(i.jsx)("div",{children:Object(i.jsxs)("label",{children:["Password",Object(i.jsx)("input",{"data-testid":"password-input",type:"password",placeholder:"password",value:l,onChange:function(t){return u(t.target.value)}})]})}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{"data-testid":"form-submit",type:"submit",value:"SUBMIT"})})]}),Object(i.jsx)("div",{children:Object(i.jsx)(r.b,{to:"/",children:"Go Back"})})]})};var u=function(t){var e,n=t.totalPages,a=t.currentPage,c=t.handlePageChange,r=(e=n,new Array(e).fill(0)).map((function(t,e){return Object(i.jsx)("button",{"data-testid":"page-btn",disabled:e+1===a,onClick:function(){return c(e+1)},children:e+1},e+1)}));return Object(i.jsx)("div",{children:r})};function h(t){var e=t.id,n=t.name,a=t.rating,c=t.type,s=t.number_of_votes,j=t.price_starts_from;return Object(i.jsxs)("tr",{"data-testid":"item",children:[Object(i.jsx)("td",{children:Object(i.jsx)(r.b,{"data-testid":"name",to:"/restaurants/".concat(e),children:n})}),Object(i.jsx)("td",{"data-testid":"rating",children:a}),Object(i.jsx)("td",{"data-testid":"type",children:c}),Object(i.jsx)("td",{"data-testid":"votes",children:s}),Object(i.jsx)("td",{"data-testid":"price",children:j})]})}var O=function(t){var e=t.data;return Object(i.jsxs)("table",{border:"1px",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Rating"}),Object(i.jsx)("th",{children:"Type"}),Object(i.jsx)("th",{children:"Number of Votes"}),Object(i.jsx)("th",{children:"Price Starts From"})]})}),Object(i.jsx)("tbody",{children:null===e||void 0===e?void 0:e.map((function(t){return Object(i.jsx)(h,{name:t.name,rating:t.rating,type:t.type,number_of_votes:t.number_of_votes,price_starts_from:t.price_starts_from,id:t.id},t.id)}))})]})},x=function(t){var e=t.page;return fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=".concat(void 0===e?1:e,"&limit=10")).then((function(t){return t.json()}))};var p=function(){var t=Object(d.useContext)(o),e=t.logoutUser,n=t.token,a=Object(d.useState)([]),c=Object(j.a)(a,2),r=c[0],s=c[1],b=Object(d.useState)(1),l=Object(j.a)(b,2),h=l[0],p=l[1],v=Object(d.useState)(),f=Object(j.a)(v,2),m=f[0],g=f[1];return Object(d.useEffect)((function(){x({page:h}).then((function(t){console.log(t.data),s(t.data),g(t.totalPages)}))}),[h]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Dashboard"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{"data-testid":"logout-btn",onClick:function(){e()},children:"Logout"}),Object(i.jsxs)("p",{children:["Token:",Object(i.jsx)("b",{"data-testid":"user-token",children:n})]})]}),Object(i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(i.jsx)(O,{data:r})}),Object(i.jsx)("div",{"data-testid":"pagination-container",children:Object(i.jsx)(u,{totalPages:m,currentPage:h,handlePageChange:function(t){p(t)}})})]})};var v=function(){var t=Object(d.useState)({}),e=Object(j.a)(t,2),n=e[0],a=e[1],r=Object(c.h)().id;return Object(d.useEffect)((function(){fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/".concat(r)).then((function(t){return t.json()})).then((function(t){a(t.data),console.log(t.data)}))}),[]),Object(i.jsxs)("div",{"data-testid":"restaurant-container",children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{"data-testid":"restaurant-name",children:n.name})}),Object(i.jsxs)("div",{"data-testid":"restaurant-type",children:["Type:",n.type]}),Object(i.jsxs)("div",{"data-testid":"restaurant-rating",children:["Rating:",n.rating]}),Object(i.jsxs)("div",{"data-testid":"restaurant-votes",children:["Votes:",n.number_of_votes]}),Object(i.jsxs)("div",{"data-testid":"restaurant-price",children:["Starting Price:",n.price_starts_from]}),Object(i.jsx)("div",{children:Object(i.jsx)("img",{"data-testid":"restaurant-image",width:"100px",src:n.image,alt:n.name})})]})};var f=function(t){var e=t.children;return Object(d.useContext)(o).isAuth?e:Object(i.jsx)(c.a,{to:"/login"})};var m=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(c.d,{children:[Object(i.jsx)(c.b,{path:"/",element:Object(i.jsx)(s,{})}),Object(i.jsx)(c.b,{path:"/login",element:Object(i.jsx)(l,{})}),Object(i.jsx)(c.b,{path:"/dashboard",element:Object(i.jsx)(f,{children:Object(i.jsx)(p,{})})}),Object(i.jsx)(c.b,{path:"/restaurants/:id",element:Object(i.jsx)(f,{children:Object(i.jsx)(v,{})})})]})})};n(18);function g(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(m,{})})}var y=document.getElementById("root");Object(a.createRoot)(y).render(Object(i.jsx)(b,{children:Object(i.jsx)(r.a,{children:Object(i.jsx)(g,{})})}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b2110dae.chunk.js.map