(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"},49:function(n,e,t){n.exports=t(75)},71:function(n,e,t){},75:function(n,e,t){"use strict";t.r(e);var o=t(1),a=t.n(o),i=t(30),r=t.n(i),c=t(14),l=t(22),s=t(45),u=t(9),d=t(18),f=t(17),p=t(25),h=Object(u.c)({ants:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,t=e.type,o=e.payload;switch(t){case"@@ANTS INIT":var a=o.reduce(function(n,e){return e.state="@@ANTS NOT_RUN_YET",n[e.name]=e,n},{});return Object.assign({},n,a);case"@@ANTS IN_PROGRESS":var i=o.id;if(!(i in n))throw Error("ID NOT FOUND");return Object.assign({},n,Object(p.a)({},i,Object.assign({},n[i],{state:"@@ANTS IN_PROGRESS"})));case"@@ANTS CALCULATED":var r=o.id,c=o.likelihoodOfAntWinning;if(!(r in n))throw Error("ID NOT FOUND");return Object.assign({},n,Object(p.a)({},r,Object.assign({},n[r],{state:"@@ANTS CALCULATED",likelihoodOfAntWinning:c})));default:return n}},apollo:f.apolloReducer,ui:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{state:"@@UI NOT_RUN_YET",buttonDisabled:!1};switch((arguments.length>1?arguments[1]:void 0).type){case"@@UI IN_PROGRESS":return{state:"@@UI IN_PROGRESS",buttonDisabled:!0};case"@@UI CALCULATED":return{state:"@@UI CALCULATED",buttonDisabled:!1};default:return n}}}),g=t(38),v=t.n(g),m=t(39),O=t(40),w=t(46),E=t(41),b=t(47),A=t(42),N=t(43),T=t.n(N),y=(t(71),t(44));function S(){var n=Object(A.a)(["\nquery GetAnts{\n  ants {\n    weight,\n    name,\n    color,\n    length,\n  }\n}\n"]);return S=function(){return n},n}var k=t.n(y)()(S());var I=function(n){function e(){var n,t;Object(m.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=Object(w.a)(this,(n=Object(E.a)(e)).call.apply(n,[this].concat(a)))).startTest=function(){var n=t.props,e=n.queryData,o=n.uiInProgress,a=n.inProgress,i=n.uiCompleted,r=n.completed;o();var c=e.ants.map(function(n){return new Promise(function(e){a(n.name),function(n){var e=7e3+7e3*Math.random(),t=Math.random();return function(o){setTimeout(function(){o(n,t)},e)}}(n.name)(function(n,t){e({id:n,likelihoodOfAntWinning:t})})}).then(function(n){var e=n.id,t=n.likelihoodOfAntWinning;return r(e,t)})});Promise.all(c).then(function(){return i()})},t}return Object(b.a)(e,n),Object(O.a)(e,[{key:"componentWillMount",value:function(){var n=this.props,e=n.queryData;(0,n.initalize)(e.ants)}},{key:"render",value:function(){var n=this.props,e=n.ants,t=n.ui,o=Object.values(e);return o.sort(function(n,e){return n.likelihoodOfAntWinning-e.likelihoodOfAntWinning}),a.a.createElement("div",null,t.state,a.a.createElement("ul",null,o.map(function(n,e){return a.a.createElement("li",{key:e},a.a.createElement("p",null," ",n.name," ",n.state," ",n.likelihoodOfAntWinning," "))})),a.a.createElement("button",{disabled:t.buttonDisabled,onClick:this.startTest},"startTest"))}}]),e}(a.a.Component),U=Object(d.b)(function(n){return{ants:n.ants,ui:n.ui}},function(n){return{uiInProgress:function(){return n({type:"@@UI IN_PROGRESS"})},uiCompleted:function(){return n({type:"@@UI CALCULATED"})},initalize:function(e){return n({type:"@@ANTS INIT",payload:e})},inProgress:function(e){return n({type:"@@ANTS IN_PROGRESS",payload:{id:e}})},completed:function(e,t){return n({type:"@@ANTS CALCULATED",payload:{id:e,likelihoodOfAntWinning:t}})}}})(I),_=function(n){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:T.a,className:"App-logo",alt:"logo"}),a.a.createElement(c.Query,{query:k},function(n){var e=n.data;return n.loading?a.a.createElement("div",null,"Loading ..."):a.a.createElement(U,{queryData:e})})))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}var R=Object(u.e)(h,{},Object(u.d)(Object(u.a)(v.a),"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(n){return n})),C=new f.ReduxCache({store:R}),L=new s.a({uri:"https://graphql-ants.herokuapp.com/graphql"}),W=new l.a({link:L,cache:C});r.a.render(a.a.createElement(c.ApolloProvider,{client:W},a.a.createElement(d.a,{store:R},a.a.createElement(_,null))),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");j?(function(n,e){fetch(n).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):D(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):D(e,n)})}}()}},[[49,2,1]]]);
//# sourceMappingURL=main.76ac12ea.chunk.js.map