(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(15)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),s=t.n(c),r=(t(11),t(1));t(12),t(13);var i=function(e){return console.log("nav"),console.log(e),console.log(e.act),l.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("a",{className:"navbar-item subtitle",href:"./"},"Classy")),l.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},l.a.createElement("div",{className:"navbar-start"},l.a.createElement("a",{className:1===e.act?"navbar-item c-active":"navbar-item",onClick:function(){return e.onAct(1)}},"Layout Selection"),l.a.createElement("a",{className:2===e.act?"navbar-item c-active":"navbar-item",onClick:function(){return e.onAct(2)}},"Student Management"),l.a.createElement("a",{className:3===e.act?"navbar-item c-active":"navbar-item",onClick:function(){return e.onAct(3)}},"Teaching Assistant"),l.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},l.a.createElement("a",{className:"navbar-link"},"More"),l.a.createElement("div",{className:"navbar-dropdown"},l.a.createElement("a",{className:"navbar-item"},"About"),l.a.createElement("a",{className:"navbar-item"},"Contact"),l.a.createElement("hr",{className:"navbar-divider"}),l.a.createElement("a",{className:"navbar-item"},"Report an issue")))),l.a.createElement("div",{className:"navbar-end"},l.a.createElement("div",{className:"navbar-item"},l.a.createElement("div",{className:"buttons"},l.a.createElement("a",{className:"button is-light",onClick:function(){localStorage.clear()},href:"./"},"Reset"),l.a.createElement("a",{className:"button is-light"},"Log in")))))))},m=(t(14),function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=l.a.useState(JSON.parse(localStorage.getItem(e))||a),n=Object(r.a)(t,2),c=n[0],s=n[1],i=JSON.stringify(c);return l.a.useEffect(function(){localStorage.setItem(e,i)},[c]),[c,s]});var o=function(){var e=m("myValueInLocalStorage"),a=Object(r.a)(e,2),t=(a[0],a[1],l.a.useState("")),n=Object(r.a)(t,2),c=n[0],s=n[1],i=m("students",[]),o=Object(r.a)(i,2),u=o[0],d=(o[1],m("tables",Array(10).fill(Array(12).fill({hasTable:!1})))),v=Object(r.a)(d,2),E=v[0],b=v[1],N=function(e,a,t){return b(E.map(function(n,l){return l===e?n.map(function(e,n){return n===a?Object.assign({},e,t):e}):n}))},f=l.a.useState(null),p=Object(r.a)(f,2),g=p[0],h=p[1];return l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-2"},l.a.createElement("nav",{className:"panel"},l.a.createElement("p",{className:"panel-heading"},"Students"),l.a.createElement("div",{className:"panel-block"},l.a.createElement("p",{className:"control has-icons-left"},l.a.createElement("input",{className:"input is-small",type:"text",placeholder:"search",value:c,onChange:function(e){return s(e.target.value)}}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-search","aria-hidden":"true"})))),u.filter(function(e){return e.name.toLowerCase().indexOf(c.toLowerCase())>-1}).map(function(e,a){return l.a.createElement("a",{className:g===e.id?"panel-block is-active c-used":"panel-block",key:e.id,onClick:function(){return h(g===e.id?null:e.id)}},e.name)}))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{class:"buttons has-addons"},l.a.createElement("span",{class:"button is-small"},"Assign Students"),l.a.createElement("span",{class:"button is-small"},"Random Students"),l.a.createElement("span",{class:"button is-small"},"Clear Students")),l.a.createElement("table",{className:"table is-bordered"},l.a.createElement("tbody",null,E.map(function(e,a){return l.a.createElement("tr",{key:"r"+a},e.map(function(e,t){return l.a.createElement("td",{className:"c-td",key:"s"+a+t},e.hasTable?null===g?l.a.createElement("div",{className:e.sit?"box c-box c-used":"box c-box c-selected",onClick:function(){return N(a,t,{hasTable:!1,sit:null})}},e.sit?e.sit:"Table"):l.a.createElement("div",{className:e.sit?"box c-box c-used":"box c-box c-selected",onClick:function(){return N(a,t,{sit:u.find(function(e){return e.id===g}).name})}},e.sit?e.sit:"Table"):l.a.createElement("div",{className:"box c-box",onClick:function(){return N(a,t,{hasTable:!0})}}))}))})))))},u=t(4);var d=function(){var e=m("students",[]),a=Object(r.a)(e,2),t=a[0],n=a[1],c=l.a.useState(""),s=Object(r.a)(c,2),i=s[0],o=s[1],d=l.a.useState(0),v=Object(r.a)(d,2),E=v[0],b=v[1],N=function(e,a){console.log("changing",e,a),n(t.map(function(t){return t.id===e?Object.assign({},t,a):t}))};return l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-2"},l.a.createElement("nav",{className:"panel"},l.a.createElement("p",{className:"panel-heading"},"Students"),t.map(function(e){return l.a.createElement("a",{className:E===e.id?"panel-block is-active c-selected":"panel-block",key:e.id,onClick:function(){return b(e.id)}},e.name)}),l.a.createElement("div",{className:"panel-block"},l.a.createElement("input",{className:"input is-small",type:"text",placeholder:"name",value:i,onChange:function(e){return o(e.target.value)}}),l.a.createElement("button",{className:"button is-link is-outlined is-small",onClick:function(){n([].concat(Object(u.a)(t),[{name:i,id:t.length}])),o("")}},"+")))),l.a.createElement("div",{className:"column is-6"},t.filter(function(e){return e.id===E}).map(function(e){return l.a.createElement("div",{className:"card",key:"s"+e.id},l.a.createElement("div",{className:"card-header c-shadow"},l.a.createElement("p",{className:"card-header-title"},"Information")),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Name"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",value:e.name,onChange:function(a){return N(e.id,{name:a.target.value})}}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Student ID"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",value:e.sid,onChange:function(a){return N(e.id,{sid:a.target.value})}}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Gender"),l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"select"},l.a.createElement("select",{value:e.gender,onChange:function(a){return N(e.id,{gender:a.target.value})}},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"male"},"Male"),l.a.createElement("option",{value:"female"},"Female"))))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Email"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"email",value:e.email,onChange:function(a){return N(e.id,{email:a.target.value})}}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Comment"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{className:"textarea",placeholder:"Textarea",value:e.comment,onChange:function(a){return N(e.id,{comment:a.target.value})}})))))})))};var v=function(e){return console.log(e),l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"container"},1===e.act&&l.a.createElement(o,null),2===e.act&&l.a.createElement(d,null)))};var E=function(){var e=Object(n.useState)(1),a=Object(r.a)(e,2),t=a[0],c=a[1];return l.a.createElement("div",null,l.a.createElement(i,{act:t,onAct:c}),l.a.createElement(v,{act:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.1dc3d4fa.chunk.js.map