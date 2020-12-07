(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,function(t,n,e){t.exports={ContactForm:"ContactForm_ContactForm__1yYW2",ContactForm__title:"ContactForm_ContactForm__title__1Uw0M",ContactForm__input:"ContactForm_ContactForm__input__2UCQP",ContactForm__btn:"ContactForm_ContactForm__btn__Mis7o"}},function(t,n,e){t.exports={listItem:"Contact_listItem__142zE",name:"Contact_name__38Ru1",btn:"Contact_btn__koKy3"}},,,,,,function(t,n,e){t.exports={AppContainer:"App_AppContainer__303Mf",contacts__title:"App_contacts__title__3H4UO"}},,,function(t,n,e){t.exports={list:"ContactList_list__1f33k"}},function(t,n,e){t.exports={container:"Filter_container__lPbNq"}},,,,,,,function(t,n,e){},,,function(t,n,e){"use strict";e.r(n);var a=e(0),c=e(1),r=e.n(c),o=e(11),i=e.n(o),s=(e(21),e(15)),l=e(5),u=e(6),m=e(8),b=e(7),d=e(10),j=e.n(d),_=e(12),p=e(3),C=e.n(p),f=e(26),h=function(t){Object(m.a)(e,t);var n=Object(b.a)(e);function e(){var t;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=n.call.apply(n,[this].concat(c))).state={name:"",number:""},t.onSubmitHandler=function(n){n.preventDefault();var e=t.state,a=e.name,c=e.number;a&&c&&t.props.getContact({id:Object(f.a)(),name:a,number:c}),t.setState({name:"",number:""})},t.onChangeInputHandler=function(n){var e=n.currentTarget,a=e.name,c=e.value;t.setState(Object(_.a)({},a,c))},t}return Object(u.a)(e,[{key:"render",value:function(){return Object(a.jsx)("div",{className:C.a.ContactForm,children:Object(a.jsxs)("form",{onSubmit:this.onSubmitHandler,children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:C.a.ContactForm__title,children:"Name"}),Object(a.jsx)("input",{className:C.a.ContactForm__input,type:"text",name:"name",value:this.state.name,onChange:this.onChangeInputHandler})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:C.a.ContactForm__title,children:"Phone"}),Object(a.jsx)("input",{className:C.a.ContactForm__input,type:"text",name:"number",value:this.state.number,onChange:this.onChangeInputHandler})]}),Object(a.jsx)("button",{className:C.a.ContactForm__btn,type:"submit",children:"Add contact"})]})})}}]),e}(c.Component),O=e(2),x=e.n(O),v=e(4),g=e.n(v),F=function(t){var n=t.contact,e=t.deleteContact;return Object(a.jsxs)("li",{className:g.a.listItem,children:[Object(a.jsxs)("span",{className:g.a.name,children:[n.name,": "]}),Object(a.jsx)("span",{className:g.a.number,children:n.number}),Object(a.jsx)("button",{className:g.a.btn,type:"button",onClick:function(){return e(n.id)},children:"Delete"})]})},y=e(13),N=e.n(y),H=function(t){var n=t.contacts,e=t.deleteContact;return Object(a.jsx)("ul",{className:N.a.list,children:n.map((function(t){return Object(a.jsx)(F,{contact:t,deleteContact:e},t.id)}))})},S=H;H.protoTypes={contacts:x.a.objectOf(x.a.shape({name:x.a.string,number:x.a.string,id:x.a.string})),deleteContact:x.a.func};var k=e(14),w=e.n(k),A=function(t){var n=t.filter,e=t.filterHandler;return Object(a.jsxs)("div",{className:w.a.container,children:[Object(a.jsx)("h3",{children:"Find contacts by name"}),Object(a.jsx)("input",{name:"filter",value:n,onChange:e})]})},I=A;A.protoTypes={filter:x.a.string,filterHandler:x.a.func};var P=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],T=function(t){Object(m.a)(e,t);var n=Object(b.a)(e);function e(){var t;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=n.call.apply(n,[this].concat(c))).state={contacts:P,filter:""},t.getContact=function(n){t.state.contacts.find((function(t){return t.name===n.name}))?alert("".concat(n.name," is already in contacts")):t.setState((function(t){return{contacts:[n].concat(Object(s.a)(t.contacts))}}))},t.filterHandler=function(n){var e=n.currentTarget.value;t.setState({filter:e})},t.getFilteredContacts=function(){var n=t.state,e=n.contacts,a=n.filter;return e.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.deleteContact=function(n){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t}return Object(u.a)(e,[{key:"render",value:function(){var t=this.getFilteredContacts();return Object(a.jsxs)("div",{className:j.a.AppContainer,children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(h,{getContact:this.getContact}),Object(a.jsx)("h2",{className:j.a.contacts__title,children:"Contacts"}),Object(a.jsx)(I,{filterHandler:this.filterHandler}),Object(a.jsx)(S,{contacts:t,deleteContact:this.deleteContact})]})}}]),e}(c.Component),L=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,27)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;e(t),a(t),c(t),r(t),o(t)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),L()}],[[24,1,2]]]);
//# sourceMappingURL=main.66a38bb7.chunk.js.map