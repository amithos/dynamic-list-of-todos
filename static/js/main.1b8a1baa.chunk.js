(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),c=n.n(s),l=n(1),o=n(2),i=n(4),u=n(3),d=(n(14),n(15),n(8)),m=n(5),p=n.n(m),h=(n(16),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchField:"",selectFilter:0},e.handlerInput=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.todos,t=this.state,n=t.searchField,a=t.selectFilter,s=this.props,c=s.selectUser,l=s.selectedUserId,o=this.handlerInput;switch(n&&(e=e.filter((function(e){return e.title.includes(n)}))),a){case"active":e=e.filter((function(e){return!1===e.completed}));break;case"completed":e=e.filter((function(e){return e.completed}))}return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("input",{className:"TodoList__item",name:"searchField",value:n,onChange:o}),r.a.createElement("select",{className:"TodoList__item",name:"selectFilter",value:a,onChange:o},r.a.createElement("option",{value:"all"},"all"),r.a.createElement("option",{value:"active"},"active"),r.a.createElement("option",{value:"completed"},"comleted")),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},e.map((function(e){var t=e.id,n=e.title,a=e.userId,s=e.completed;return r.a.createElement("li",{key:t,className:p()({"TodoList__item TodoList__item--checked":s,"TodoList__item TodoList__item--unchecked":!s})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:s,readOnly:!0}),r.a.createElement("p",null,n)),r.a.createElement("button",{className:p()("TodoList__user-button","button",{"TodoList__user-button--selected":a===l}),type:"button",onClick:function(){return c(a)}},"User\xa0"," ",a))})))))}}]),n}(r.a.Component));function f(e){return fetch("".concat("https://mate-api.herokuapp.com/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))}n(17);var v=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadUser()}},{key:"loadUser",value:function(){var e,t=this;(e=this.props.userId,f("users/".concat(e))).then((function(e){return t.setState({user:e})}))}},{key:"render",value:function(){var e=this;if(!this.state.user)return"Loading...";var t=this.props.resetSelectedUser,n=this.state.user,a=n.id,s=n.name,c=n.email,l=n.phone;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user: ".concat(a))),r.a.createElement("h3",{className:"CurrentUser__name"},s),r.a.createElement("p",{className:"CurrentUser__email"},c),r.a.createElement("p",{className:"CurrentUser__phone"},l),r.a.createElement("button",{type:"button",className:"button",onClick:function(){t(),e.setState({user:null})}},"Clear"))}}]),n}(r.a.Component),_=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.selectUser=function(t){e.setState({selectedUserId:t})},e.resetSelectedUser=function(){e.setState({selectedUserId:0})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;f("todos").then((function(t){return e.setState({todos:t.filter((function(e){return e.title&&e.userId}))})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId,a=this.selectUser,s=this.resetSelectedUser;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},t.length>0&&r.a.createElement(h,{todos:t,selectUser:a,selectedUserId:n})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(v,{userId:n,resetSelectedUser:s}):"No user selected")))}}]),n}(r.a.Component);c.a.render(r.a.createElement(_,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.1b8a1baa.chunk.js.map