(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(32)},28:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),i=n(1),s=n(3),l=n(11),u=n(2),d={searchText:"",robots:{isPending:!1,error:null,data:[]}},h=Object(i.c)({searchText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.searchText,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCH_TEXT":return t.payload;default:return e}},robots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.robots,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ROBOTS_PENDING":return Object(u.a)(Object(u.a)({},e),{},{isPending:!0});case"FETCH_ROBOTS_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{isPending:!1,data:t.payload});case"FETCH_ROBOTS_FAILED":return Object(u.a)(Object(u.a)({},e),{},{isPending:!1,error:t.payload});default:return e}}}),f=(n(28),n(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var b=n(8),m=n.n(b),v=n(12),g=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5 card"},a.a.createElement("img",{src:"https://robohash.org/".concat(t,"?300x300"),alt:n,className:"card__img"}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))},E=n(13),w=n(14),O=n(16),T=n(15),y=function(e){Object(O.a)(n,e);var t=Object(T.a)(n);function n(e){var r;return Object(E.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(w.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hassError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooooops! That is not good."):this.props.children}}]),n}(r.Component),S=Object(s.b)((function(e,t){return{robots:e.robots,searchText:e.searchText}}),{fetchRobots:function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_ROBOTS_PENDING"}),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/users");case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,t({type:"FETCH_ROBOTS_SUCCESS",payload:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:"FETCH_ROBOTS_FAILED",payload:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.fetchRobots,n=e.robots,o=e.searchText;Object(r.useEffect)((function(){t()}),[t]);return function(){if(n.isPending)return a.a.createElement("h2",null,"Loading...");if(n.error)return a.a.createElement("h2",null,n.error.message);var e=n.data.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return a.a.createElement(y,null,e.map((function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement(g,{key:t,id:t,name:n,email:r})})))}()})),C=Object(s.b)((function(e,t){return{searchText:e.searchText}}),{changeSearchText:function(e){return{type:"CHANGE_SEARCH_TEXT",payload:e}}})((function(e){var t=e.searchText,n=e.changeSearchText;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b-green bg-lightest-blue",type:"search",placeholder:"Search Robots",value:t,onChange:function(e){return n(e.target.value.trim())}}))})),j=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",borderTop:"1px solid grey",height:"800px"}},e.children)},x=(n(31),function(){return a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"page-title f1"},"RoboFriends"),a.a.createElement(C,null),a.a.createElement(j,null,a.a.createElement(S,null)))}),_=Object(i.d)(h,Object(i.a)(l.a));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:_},a.a.createElement(x,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");f?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.1d47ee37.chunk.js.map