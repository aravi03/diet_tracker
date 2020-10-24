(this.webpackJsonpclient_react=this.webpackJsonpclient_react||[]).push([[0],{36:function(e,t,a){e.exports=a(70)},41:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),o=(a(41),a(42),a(43),a(15)),s=a.n(o),i=a(19),m=a(2),u=a(3),p=a(5),d=a(4),v=a(13),h=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={obj:{},quantity:0},e}return Object(u.a)(a,[{key:"handleChange",value:function(e,t){var a=this;this.setState({quantity:e.target.value,obj:t},(function(){var e=a.state.obj;e.quantity=a.state.quantity,console.log(a.state.quantity),a.props.addItem(e),console.log("Props",a.props.myplan)}))}},{key:"render",value:function(){var e=this;return this.props.food?this.props.food.map((function(t){return l.a.createElement("div",{class:"col-2 mx-2 my-5"},l.a.createElement("div",{class:"well text-center",id:"food_block"},l.a.createElement("a",{href:""},l.a.createElement("img",{src:t.url,id:"poster"})),l.a.createElement("p",{className:"py-1 mx-5",id:"food_name"},t.calories,"cal/100g"),l.a.createElement("p",{className:"py-1 mx-5",id:"food_name1"},t.food),l.a.createElement("form",null,l.a.createElement("input",{className:"my-3 mx-5 form-control",type:"number",id:"qtyinput",name:"quantity",placeholder:"in grams",onChange:function(a){return e.handleChange(a,t)}}))))})):l.a.createElement("div",null)}}]),a}(n.Component),f=Object(v.b)((function(e){return{myplan:e}}),(function(e){return{addItem:function(t){e({type:"ADD_ITEM",payload:t})}}}))(h),E=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={list:[]},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){e!==this.props&&this.setState({list:this.props.myplan.myplan},(function(){console.log("updated")}))}},{key:"handleChange",value:function(e){this.props.myplan.myplan&&this.props.myplan.myplan.map((function(e){console.log("props from myplan",e.url)}))}},{key:"render",value:function(){var e=0,t=this.state.list.map((function(t){return e+=t.quantity*t.calories/100,l.a.createElement("div",{className:"mx-3"},l.a.createElement("h5",null,t.food,"(",t.quantity,"g) - ",t.quantity*t.calories/100," Calories"))}));return this.state.list?l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"total",className:"col"},l.a.createElement("h5",{className:"mx-2"},"TOTAL= ",e.toFixed(2),"calories")),l.a.createElement("div",{id:"selected_plan",className:"row"},t)):l.a.createElement("div",null," ")}}]),a}(n.Component),b=Object(v.b)((function(e){return{myplan:e}}))(E),y=(a(49),{myplan:[]}),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=(t.type,t.payload);if(e.myplan[0]){var n=e.myplan.find((function(t,n){if(t.id==a.id)return e.myplan[n].quantity=a.quantity,!0}));if(n){var l=e.myplan.filter((function(e){return"0"!=e.quantity&&""!=e.quantity}));e.myplan=l,console.log("temp",l)}n||(e.myplan=e.myplan.concat([a]))}else e.myplan=[a];return console.log("final state",e.myplan),Object.assign({},e)},N=a(8),j=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top",id:"navbar"},l.a.createElement("a",{id:"navbar_title",className:"navbar-brand",href:""},"TREAD"),l.a.createElement("br",null),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto mr-5 "},l.a.createElement("li",{className:"nav-item mx-2 active"},l.a.createElement("a",{class:"nav-link active"},"Welcome Trainer")),l.a.createElement("li",{className:"nav-item mx-2"},l.a.createElement(N.b,{className:"nav-link",to:"/trainer/makeplan"},"Build Plan")),l.a.createElement("li",{className:"nav-item mx-2"},l.a.createElement(N.b,{to:"/trainer/progress",className:"nav-link"},"View Progress")),l.a.createElement("li",{className:"nav-item mx-2"},l.a.createElement(N.b,{to:"/",className:"nav-link"},l.a.createElement("i",{class:"fa fa-home",id:"home-size"}))))))}}]),a}(n.Component),k=a(6),x=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={food:[],value:"",dt:""},e}return Object(u.a)(a,[{key:"onClick",value:function(e){var t=this;return Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/createplan",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({myplan:t.props.myplan.myplan,datetime:t.state.dt})});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))(),!0}},{key:"dtChange",value:function(e){var t=this;this.setState({dt:e.target.value},(function(){console.log(t.state.dt)}))}},{key:"handleChange",value:function(e){var t=this;this.setState({value:e.target.value},(function(){console.log(t.state.value),console.log(window.location.href),fetch("/api/search?name="+t.state.value).then((function(e){return e.json()})).then((function(e){t.setState({food:e,fetch_check:!0},(function(){console.log(t.state.food),console.log("props",t.props.myplan)}))}))}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement("h1",null,"Build Plan"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"row my-5"},l.a.createElement("div",{className:"col"},l.a.createElement("label",{for:"datetime"},"Enter Date and Time: "),"\u2002\u2002",l.a.createElement("input",{type:"datetime-local",id:"datetime",name:"datetime",onChange:function(t){return e.dtChange(t)}})),l.a.createElement("div",{className:"col"},l.a.createElement("input",{className:"form-control",type:"text",id:"search_movies",name:"search_movies",placeholder:"Search for Food....",onChange:function(t){return e.handleChange(t)}}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement(f,{food:this.state.food})),l.a.createElement("div",{className:"row mx-3",id:"selected_plan"},l.a.createElement(b,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"col"},l.a.createElement("a",{id:"submit-btn",href:"#/trainer/progress",class:"btn btn-block",onClick:function(t){return e.onClick(t)}},"Submit")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),a}(n.Component),O=Object(k.e)(Object(v.b)((function(e){return{myplan:e}}))(x)),C=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top",id:"navbar"},l.a.createElement("a",{id:"navbar_title",className:"navbar-brand",href:""},"TREAD"),l.a.createElement("br",null),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto mr-5 "},l.a.createElement("li",{className:"nav-item mx-2 active"},l.a.createElement("a",{class:"nav-link active"},"Welcome Client")),l.a.createElement("li",{className:"nav-item mx-2"},l.a.createElement(N.b,{to:"/client/dashboard",className:"nav-link"},"Dashboard")),l.a.createElement("li",{className:"nav-item mx-2"},l.a.createElement(N.b,{className:"nav-link",to:"/client/makeplan"},"Custom Plan")),l.a.createElement("li",{className:"nav-item mx-2"},l.a.createElement(N.b,{to:"/",className:"nav-link"},l.a.createElement("i",{class:"fa fa-home",id:"home-size"}))))))}}]),a}(n.Component),w=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={food:[],value:"",dt:""},e}return Object(u.a)(a,[{key:"onClick",value:function(e){var t=this;return console.log("props",this.props.myplan),Object(i.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/customplan",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({myplan:t.props.myplan.myplan,datetime:t.state.dt})});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n);case 7:case"end":return e.stop()}}),e)})))(),!0}},{key:"dtChange",value:function(e){var t=this;this.setState({dt:e.target.value},(function(){console.log(t.state.dt)}))}},{key:"handleChange",value:function(e){var t=this;this.setState({value:e.target.value},(function(){console.log(t.state.value),console.log(window.location.href),fetch("/api/search?name="+t.state.value).then((function(e){return e.json()})).then((function(e){t.setState({food:e,fetch_check:!0},(function(){console.log(t.state.food),console.log("props",t.props.myplan)}))}))}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement("h1",null,"Build plan"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"row my-5"},l.a.createElement("div",{className:"col"},l.a.createElement("label",{for:"datetime"},"Enter Date and Time: "),"\u2002\u2002",l.a.createElement("input",{type:"datetime-local",id:"datetime",name:"datetime",onChange:function(t){return e.dtChange(t)}})),l.a.createElement("div",{className:"col"},l.a.createElement("input",{className:"form-control",type:"text",id:"search_movies",name:"search_movies",placeholder:"Search for Food....",onChange:function(t){return e.handleChange(t)}}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement(f,{food:this.state.food})),l.a.createElement("div",{className:"row mx-3",id:"selected_plan"},l.a.createElement(b,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"col"},l.a.createElement("a",{id:"submit-btn",href:"#/client/dashboard",class:"btn btn-block",onClick:function(t){return e.onClick(t)}},"Submit")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),a}(n.Component),S=Object(v.b)((function(e){return{myplan:e}}))(w),_=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=0,t=this.props.list.map((function(t){return e+=t.quantity*t.calories/100,l.a.createElement("div",{className:"mx-3"},l.a.createElement("div",{class:"well text-center pt-3",id:"plan_block"},l.a.createElement("a",{href:""},l.a.createElement("img",{src:t.url,id:"plan-poster"})),l.a.createElement("p",{className:"py-1 mx-5",id:"plan_name"},t.quantity,"g"),l.a.createElement("p",{className:"py-1 mx-5",id:"plan_name1"},t.food)))}));return this.props.list?l.a.createElement("div",{className:""},l.a.createElement("div",{id:"selected_plan",className:"row"},t),l.a.createElement("div",{id:"total_progress",className:"row"},l.a.createElement("h5",{className:"mx-5 my-3"},"Total- ",e.toFixed(2)," calories"))):l.a.createElement("div",null)}}]),a}(n.Component),q=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"onAccept",value:function(e,t){e.preventDefault(),console.log("clicked",t),fetch("/api/acceptplan?id="+t).then((function(){return console.log("done"),!0}))}},{key:"onReject",value:function(e,t){e.preventDefault(),console.log("clicked",t),fetch("/api/rejectplan?id="+t).then((function(){return console.log("done"),!0}))}},{key:"render",value:function(){var e=this;return this.props.myplan?this.props.myplan.map((function(t){var a=t.status;if("pending"==a)var n=l.a.createElement("div",{className:"row"},l.a.createElement("a",{id:"txt-green",href:"/",className:"mx-2 py-1 txt-green",onClick:function(a){return e.onAccept(a,t._id)}},l.a.createElement("i",{class:"fa fa-check",id:"inc-size"})),l.a.createElement("a",{id:"txt-red",href:"/",className:"py-1 txt-red",onClick:function(a){return e.onReject(a,t._id)}},l.a.createElement("i",{class:"fa fa-times",id:"inc-size"})));else n="accept"==a?l.a.createElement("div",{className:"txt-green"},a,"ed"):"update"==a?l.a.createElement("div",{className:"txt-black"},a,"ed"):l.a.createElement("div",{className:"txt-red"},a,"ed");return l.a.createElement("div",null,l.a.createElement("div",{className:"row mt-5"},l.a.createElement("h3",{className:"mx-5",id:"progress-time"},t.time),l.a.createElement("h5",null," ",n)),l.a.createElement("div",{className:"row px-5"},l.a.createElement(_,{list:t.items})))})):l.a.createElement("div",null)}}]),a}(n.Component),D=(a(68),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={myplan:[],dt:""},e}return Object(u.a)(a,[{key:"dtChange",value:function(e){var t=this;this.setState({dt:e.target.value},(function(){console.log("dt is",t.state.dt),fetch("/api/viewplan?date="+t.state.dt).then((function(e){return e.json()})).then((function(e){t.setState({myplan:e,fetch_check:!0},(function(){console.log(t.state.myplan)}))}))}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement("h1",null,"Dashboard"),l.a.createElement("div",{className:"row mx-5 my-5"},l.a.createElement("label",{for:"datetime"},"Enter Date: "),"\u2002\u2002",l.a.createElement("input",{type:"date",id:"datetime",name:"datetime",onChange:function(t){return e.dtChange(t)}})),l.a.createElement("div",{className:"row"},l.a.createElement(q,{myplan:this.state.myplan})),l.a.createElement("br",null),l.a.createElement("br",null))}}]),a}(n.Component)),A=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=0,t=this.props.list.map((function(t){return e+=t.quantity*t.calories/100,l.a.createElement("div",{className:"mx-3"},l.a.createElement("div",{class:"well text-center pt-3",id:"plan_block"},l.a.createElement("a",{href:""},l.a.createElement("img",{src:t.url,id:"plan-poster"})),l.a.createElement("p",{className:"py-1 mx-5",id:"plan_name"},t.quantity,"g"),l.a.createElement("p",{className:"py-1 mx-5",id:"plan_name1"},t.food)))}));return this.props.list?l.a.createElement("div",{className:""},l.a.createElement("div",{id:"selected_plan",className:"row"},t),l.a.createElement("div",{id:"total_progress",className:"row"},l.a.createElement("h5",{className:"mx-5 my-3"},"Total- ",e.toFixed(2)," calories"))):l.a.createElement("div",null)}}]),a}(n.Component),T=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"onAccept",value:function(e,t){e.preventDefault(),console.log("clicked",t),fetch("http://localhost:5000/acceptplan?id="+t).then((function(){console.log("done")}))}},{key:"onReject",value:function(e,t){e.preventDefault(),console.log("clicked",t),fetch("http://localhost:5000/rejectplan?id="+t).then((function(){console.log("done")}))}},{key:"render",value:function(){return this.props.myplan?this.props.myplan.map((function(e){var t=e.status;if("pending"==t)var a=l.a.createElement("div",{className:"txt-black"},t,"....");else a="accept"==t?l.a.createElement("div",{className:"txt-green"},t,"ed"):"update"==t?l.a.createElement("div",{className:"txt-black"},t,"ed"):l.a.createElement("div",{className:"txt-red"},t,"ed");return l.a.createElement("div",null,l.a.createElement("div",{className:"row mt-5"},l.a.createElement("h3",{className:"mx-5",id:"progress-time"},e.time),l.a.createElement("h5",null," ",a)),l.a.createElement("div",{className:"row px-5"},l.a.createElement(A,{list:e.items})))})):l.a.createElement("div",null)}}]),a}(n.Component),P=(a(69),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={myplan:[],dt:""},e}return Object(u.a)(a,[{key:"dtChange",value:function(e){var t=this;this.setState({dt:e.target.value},(function(){console.log(t.state.dt),fetch("/api/viewplan?date="+t.state.dt).then((function(e){return e.json()})).then((function(e){t.setState({myplan:e,fetch_check:!0},(function(){console.log(t.state.myplan)}))}))}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement("h1",null,"Progress"),l.a.createElement("div",{className:"row mx-5 my-5"},l.a.createElement("label",{for:"datetime"},"Enter Date: "),"\u2002\u2002",l.a.createElement("input",{type:"date",id:"datetime",name:"datetime",onChange:function(t){return e.dtChange(t)}})),l.a.createElement("div",{className:"row"},l.a.createElement(T,{myplan:this.state.myplan})),l.a.createElement("br",null),l.a.createElement("br",null))}}]),a}(n.Component)),R=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top",id:"navbar"},l.a.createElement("a",{id:"navbar_title",className:"navbar-brand",href:""},"TREAD"),l.a.createElement("br",null),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto mr-5 "},l.a.createElement("li",{className:"nav-item mx-2"},l.a.createElement(N.b,{className:"nav-link",to:"/client/dashboard"},"Client")),l.a.createElement("li",{className:"nav-item mx-2"},l.a.createElement(N.b,{to:"/trainer/makeplan",className:"nav-link"},"Trainer"))))))}}]),a}(n.Component);var J=function(){return l.a.createElement(N.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(k.a,{exact:!0,path:"/trainer/makeplan",component:O}),l.a.createElement(k.a,{path:"/client/makeplan",component:S}),l.a.createElement(k.a,{exact:!0,path:"/client/dashboard",component:D}),l.a.createElement(k.a,{path:"/trainer/progress",component:P}),l.a.createElement(k.a,{exact:!0,path:"/",component:R})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(20),K=Object(F.b)(g);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",integrity:"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z",crossorigin:"anonymous"}),l.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),l.a.createElement(v.a,{store:K},l.a.createElement(J,null)),l.a.createElement("script",{src:"https://code.jquery.com/jquery-3.2.1.slim.min.js",integrity:"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",crossorigin:"anonymous"}),l.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",integrity:"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",crossorigin:"anonymous"}),l.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",integrity:"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",crossorigin:"anonymous"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.ba426ce0.chunk.js.map