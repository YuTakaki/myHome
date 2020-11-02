(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/city.d4c97fa1.jpg"},19:function(e,t,a){e.exports=a(43)},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(17),o=a.n(l),r=(a(24),a(3)),i=a(7),s=a(1),u=function(e,t){switch(t.type){case"ADD_SHORTCUT_LINK":return Object(s.a)(Object(s.a)({},e),{},{shortcut_links:[t.data].concat(Object(i.a)(e.shortcut_links))});case"DELETE_SHORTCUT_LINK":return Object(s.a)(Object(s.a)({},e),{},{shortcut_links:e.shortcut_links.filter((function(e,a){return a!==t.data}))});case"ADD_TODOS":return Object(s.a)(Object(s.a)({},e),{},{todos:[t.data].concat(Object(i.a)(e.todos))});case"DELETE_TODOS":return Object(s.a)(Object(s.a)({},e),{},{todos:e.todos.filter((function(e,a){return a!==t.data}))});case"IS_TODO_FINISH":return Object(s.a)(Object(s.a)({},e),{},{todos:e.todos.map((function(e,a){return a===t.data&&(e.finished=!e.finished),e}))});case"SET_BACKGROUND":return Object(s.a)(Object(s.a)({},e),{},{background:t.data});case"SET_USER":return Object(s.a)(Object(s.a)({},e),{},{user:t.data});case"SET_COLOR":return Object(s.a)(Object(s.a)({},e),{},{color:t.data});default:return e}},m=a(18),d=a.n(m),p=Object(n.createContext)(),E=function(e){var t=Object(n.useReducer)(u,{},(function(){return localStorage.getItem("myHome")?JSON.parse(localStorage.getItem("myHome")):{user:"user",color:"#FFFFFF",background:"default",todos:[],shortcut_links:[]}})),a=Object(r.a)(t,2),l=a[0],o=a[1];return Object(n.useEffect)((function(){localStorage.setItem("myHome",JSON.stringify(l)),document.querySelector("main").style.background="url(".concat("default"!==l.background?l.background:d.a,") center center no-repeat fixed"),document.querySelector("main").style.backgroundSize="cover",document.querySelector(".main_section").style.color=l.color}),[l]),c.a.createElement(p.Provider,{value:{myHome:l,dispatch:o}},e.children)},f=function(){var e=Object(n.useContext)(p),t=e.myHome,a=e.dispatch;return c.a.createElement("div",{className:"options"},c.a.createElement("div",{className:"background_options"},c.a.createElement("p",null,"Background:"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=document.querySelector(".fileInput"),n=new FileReader;n.addEventListener("load",(function(){a({type:"SET_BACKGROUND",data:n.result})})),n.readAsDataURL(t.files[0])},className:"customForm"},c.a.createElement("input",{className:"fileInput",required:!0,type:"file",multiple:!1,accept:"image/x-png,image/gif,image/jpeg"}),c.a.createElement("input",{type:"submit",value:"Save"}),c.a.createElement("button",{onClick:function(){return a({type:"SET_BACKGROUND",data:"default"})},type:"button"},"default"))),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"userField"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=document.querySelector("#userField");t.value&&(a({type:"SET_USER",data:t.value}),t.value="")}},"User",c.a.createElement("input",{id:"userField",type:"text",placeholder:t.user})))),c.a.createElement("div",null,c.a.createElement("label",{className:"color",htmlFor:"colorField"},"Font Color",c.a.createElement("input",{onChange:function(e){a({type:"SET_COLOR",data:e.target.value})},id:"colorField",type:"color",value:t.color}))))},v=function(){var e=Object(n.useContext)(p),t=e.myHome,a=e.dispatch,l=function(e){e.target.nextSibling.classList.toggle("shortcutOptionsActive")};return c.a.createElement("div",{className:"links"},c.a.createElement("div",{className:"add_link"},c.a.createElement("h3",{onClick:function(e){e.target.parentElement.classList.toggle("add_link_expand"),e.target.classList.toggle("addLinkActive"),e.target.parentElement.lastChild.classList.toggle("activeForm")}},"Add Shortcut"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=document.querySelector(".linkName"),n=document.querySelector(".linkURL");a({type:"ADD_SHORTCUT_LINK",data:{name:t.value,url:n.value,icon:""}}),t.value="",n.value="",document.querySelector(".add_link").classList.remove("add_link_expand"),document.querySelector(".add_link form").classList.remove("activeForm"),document.querySelector(".add_link h3").classList.remove("addLinkActive")}},c.a.createElement("label",null,"Name",c.a.createElement("input",{className:"linkName",type:"text",required:!0})),c.a.createElement("label",null,"URL",c.a.createElement("input",{className:"linkURL",type:"url",required:!0})),c.a.createElement("input",{type:"submit"}))),void 0!==t&&t.shortcut_links.map((function(e,t){return c.a.createElement("div",{className:"shortcuts",key:t},c.a.createElement("a",{href:e.url,target:"_blank"},c.a.createElement("img",{src:"https://www.google.com/s2/favicons?domain="+e.url}),c.a.createElement("p",null,e.name)),c.a.createElement("i",{onClick:l,className:"fa fa-ellipsis-h"}),c.a.createElement("div",{className:"shortcutOptions"},c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(e){e.target.parentElement.parentElement.classList.toggle("shortcutOptionsActive"),a({type:"DELETE_SHORTCUT_LINK",data:t})}},"Delete"))))})))},g=function(){return c.a.createElement("section",{className:"links-option_section"},c.a.createElement("div",{className:"links-option_container"},c.a.createElement("i",{onClick:function(){document.querySelector(".links-option_container").classList.toggle("links-option_active")},className:"fa fa-bars"}),c.a.createElement("div",{className:"links-option_content"},c.a.createElement(v,null),c.a.createElement(f,null))))},h=a(6),b=a.n(h),O=function(){var e=Object(n.useContext)(p).myHome,t=Object(n.useState)(Date.now),a=Object(r.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)({lat:0,lon:0}),s=Object(r.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)({}),E=Object(r.a)(d,2),f=E[0],v=E[1],g=Object(n.useState)([]),h=Object(r.a)(g,2),O=h[0],_=h[1],y=Object(n.useState)({}),N=Object(r.a)(y,2),S=N[0],k=N[1];function j(e){return new Date(e)}Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.longitude,a=e.coords.latitude;m({lon:t,lat:a})}));var e=setInterval((function(){o(Date.now)}),1e3);return function(){clearInterval(e)}}),[]),Object(n.useEffect)((function(){var e=setInterval((function(){b.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(u.lat,"&lon=").concat(u.lon,"&appid=80595e901e5bb1c00132ed60b6c729b0")).then((function(e){v(e.data)})),b.a.get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(u.lat,"&lon=").concat(u.lon,"&appid=80595e901e5bb1c00132ed60b6c729b0")).then((function(e){var t=e.data.list.filter((function(e){return new Date(e.dt_txt).getDate()!==F&&12===new Date(e.dt_txt).getHours()}));_(t)})),b.a.get("https://quotes.rest/qod.json").then((function(e){return k(e.data.contents.quotes[0])}))}),1e3);return function(){return clearInterval(e)}}),[u]);var D=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],w=j(l).getHours(),C=j(l).getMinutes(),L=j(l).getSeconds();w=w>=10?w:"0".concat(w),C=C>=10?C:"0".concat(C),L=L>=10?L:"0".concat(L);var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"][j(l).getMonth()],x=D[j(l).getDay()],F=j(l).getDate();return c.a.createElement("section",{className:"main_section"},c.a.createElement("div",{className:"main_container"},c.a.createElement("div",{className:"date"},c.a.createElement("h3",null,x,", ",T," ",F)),c.a.createElement("div",{className:"time"},c.a.createElement("h1",null,w,":",C),c.a.createElement("span",{className:"seconds"}," ",L)),c.a.createElement("div",{className:"intro"},c.a.createElement("h2",null,w>=0&&w<12?"Good Morning":w>=12&&w<18?"Good Afternoon":"Good Evening"," ",e.user)),c.a.createElement("div",{className:"weather"},c.a.createElement("p",null,f.name," - ",c.a.createElement("span",{className:"temp"},f.main&&Math.floor(f.main.temp-273.15)+"\xb0C")),f.weather&&c.a.createElement("div",{className:"hover"},"Hover to show forecast",c.a.createElement("ul",null,c.a.createElement("li",{className:"currentWeather"},c.a.createElement("h3",null,f.main&&"".concat(x.slice(0,3))),c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(f.weather[0].icon,".png")}),c.a.createElement("p",{className:"max"},f.main&&Math.floor(f.main.temp_max-273.15)+"\xb0C"),c.a.createElement("p",{className:"min"},f.main&&Math.floor(f.main.temp_min-273.15)+"\xb0C")),O.length>0&&O.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("h4",null,e.main&&"".concat(D[new Date(e.dt_txt).getDay()].slice(0,3))),c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png")}),c.a.createElement("p",{className:"max"},e.main&&Math.floor(e.main.temp_max-273.15)+"\xb0C"),c.a.createElement("p",{className:"min"},e.main&&Math.floor(e.main.temp_min-273.15)+"\xb0C"))}))))),c.a.createElement("div",{className:"quote"},S.length>0&&c.a.createElement("h4",null,'"'.concat(S.quote," - ").concat(S.author,'"')))))},_=function(){var e=Object(n.useContext)(p),t=e.myHome,a=e.dispatch;return c.a.createElement("section",{className:"todos_section"},c.a.createElement("div",{className:"todos_content"},c.a.createElement("i",{onClick:function(){document.querySelector(".todos_content").classList.toggle("todos_content_active")},className:"fa fa-pencil-square-o"}),c.a.createElement("div",{className:"todo_form"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=document.querySelector(".toDoInput");""!==t.value&&(a({type:"ADD_TODOS",data:{todo:t.value,finished:!1}}),t.value="")}},c.a.createElement("button",null,"+"),c.a.createElement("input",{className:"toDoInput",type:"text",placeholder:"  Add Todos"})),c.a.createElement("ul",null,void 0!==t.todos&&t.todos.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("label",null,c.a.createElement("span",{className:"checkbox ".concat(!1===e.finished?"":"finish_span")}),c.a.createElement("p",{className:"".concat(!1===e.finished?"":"finish_p"),onClick:function(){return function(e){a({type:"IS_TODO_FINISH",data:e})}(t)}},e.todo)),c.a.createElement("button",{onClick:function(){return function(e){a({type:"DELETE_TODOS",data:e})}(t)},className:"fa fa-trash"}))}))))))},y=(a(42),function(){return c.a.createElement("div",{className:"App"},c.a.createElement("main",null,c.a.createElement(g,null),c.a.createElement(O,null),c.a.createElement(_,null)),c.a.createElement("div",{className:"catch"},c.a.createElement("h1",null,"ONLY FOR 800PX AND ABOVE")))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null,c.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.d03899dd.chunk.js.map