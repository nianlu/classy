(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(15)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(3),r=t.n(l),s=(t(11),t(1));t(12),t(13);var o=function(e){return console.log("nav"),console.log(e),console.log(e.act),c.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement("a",{className:"navbar-item subtitle",href:"./"},"Classy")),c.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},c.a.createElement("div",{className:"navbar-start"},c.a.createElement("a",{className:1===e.act?"navbar-item c-active":"navbar-item",onClick:function(){return e.onAct(1)}},"Layout Selection"),c.a.createElement("a",{className:2===e.act?"navbar-item c-active":"navbar-item",onClick:function(){return e.onAct(2)}},"Teaching Assistant"),c.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},c.a.createElement("a",{className:"navbar-link"},"More"),c.a.createElement("div",{className:"navbar-dropdown"},c.a.createElement("a",{className:"navbar-item"},"About"),c.a.createElement("a",{className:"navbar-item"},"Contact"),c.a.createElement("hr",{className:"navbar-divider"}),c.a.createElement("a",{className:"navbar-item"},"Report an issue")))),c.a.createElement("div",{className:"navbar-end"},c.a.createElement("div",{className:"navbar-item"},c.a.createElement("div",{className:"buttons"},c.a.createElement("a",{className:"button is-light",onClick:function(){return localStorage.setItem("myValueInLocalStorage",JSON.stringify("test")),localStorage.setItem("students",JSON.stringify([])),void localStorage.setItem("tables",JSON.stringify(Array(10).fill(Array(12).fill(!1))))},href:"/"},"Reset"),c.a.createElement("a",{className:"button is-light"},"Log in")))))))},i=(t(14),t(4)),m=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=c.a.useState(JSON.parse(localStorage.getItem(e))||a),n=Object(s.a)(t,2),l=n[0],r=n[1],o=JSON.stringify(l);return c.a.useEffect(function(){localStorage.setItem(e,o)},[l]),[l,r]};var u=function(){var e=m("myValueInLocalStorage"),a=Object(s.a)(e,2),t=(a[0],a[1],m("students",["TestStudent"])),n=Object(s.a)(t,2),l=n[0],r=n[1],o=c.a.useState(""),u=Object(s.a)(o,2),v=u[0],d=u[1],b=m("tables",Array(10).fill(Array(12).fill())),E=Object(s.a)(b,2),N=E[0],f=E[1],g=function(e,a,t){return f(N.map(function(n,c){return c===e?n.map(function(e,n){return n===a?t:e}):n}))};return c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column is-2"},c.a.createElement("nav",{className:"panel"},c.a.createElement("p",{className:"panel-heading"},"Students"),l.map(function(e,a){return c.a.createElement("a",{className:"panel-block",key:a},c.a.createElement("span",{className:"panel-icon"},c.a.createElement("i",{className:"fas fa-book","aria-hidden":"true"})),e)}),c.a.createElement("div",{className:"panel-block"},c.a.createElement("input",{className:"input",placeholder:"name",value:v,onChange:function(e){return d(e.target.value)}}),c.a.createElement("button",{className:"button is-link is-outlined",onClick:function(){r([].concat(Object(i.a)(l),[v])),d("")}},"+")))),c.a.createElement("div",{className:"column"},c.a.createElement("table",{className:"table is-bordered"},c.a.createElement("tbody",null,N.map(function(e,a){return c.a.createElement("tr",{key:"r"+a},e.map(function(e,t){return c.a.createElement("td",{className:"c-td",key:"s"+a+t},e?c.a.createElement("div",{className:"box c-box c-selected",onClick:function(){return g(a,t,!1)}},"Selected"):c.a.createElement("div",{className:"box c-box",onClick:function(){return g(a,t,!0)}},"Empty"))}))})))))};var v=function(e){return console.log(e),c.a.createElement("div",{className:"body"},c.a.createElement("div",{className:"container"},1===e.act&&c.a.createElement(u,null)))};var d=function(){var e=Object(n.useState)(1),a=Object(s.a)(e,2),t=a[0],l=a[1];return c.a.createElement("div",null,c.a.createElement(o,{act:t,onAct:l}),c.a.createElement(v,{act:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.696aed7b.chunk.js.map