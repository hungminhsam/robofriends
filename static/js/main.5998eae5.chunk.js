(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o);n(15),n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(1),s=n.n(i),l=n(5),u=n(2),h=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:n}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},m=function(e){return e.data.map((function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement(h,{key:t,id:t,name:n,email:a})}))},d=function(e){return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b-green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:function(t){return e.onSearchBoxChange(t.target.value.trim())}}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",borderTop:"1px solid grey",height:"800px"}},e.children)},p=n(6),b=n(7),v=n(9),E=n(8),g=function(e){Object(v.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(b.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hassError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooooops! That is not good."):this.props.children}}]),n}(a.Component),w=(n(18),function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(""),h=Object(u.a)(i,2),p=h[0],b=h[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"page-title f1"},"RoboFriends"),r.a.createElement(d,{onSearchBoxChange:function(e){b(e)}}),r.a.createElement(f,null,function(){var e=o.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())}));return r.a.createElement(g,null,r.a.createElement(m,{data:e}))}()))});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.5998eae5.chunk.js.map