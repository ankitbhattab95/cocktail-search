(this["webpackJsonpcocktail-app"]=this["webpackJsonpcocktail-app"]||[]).push([[0],{12:function(e,t,n){e.exports={input:"search_input__25n5w",card:"search_card__39BQi",label:"search_label__1ikxI",btn:"search_btn__18R5M",result:"search_result__33dSl"}},53:function(e,t,n){},55:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(20),s=n.n(r),i=(n(53),n(8)),u=n.n(i),o=n(7),l=n(13),d=n(39),j=n(40),p=n(48),h=n(46),b=(n(55),n(83)),m=n(45),f=n(44),O=n(12),x=n.n(O),k=n(47),v=n(82),g=n(2);var w=function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(m.a.Item,{onClick:e.itemClicked,children:e.list})})},y=n(15),C=n.n(y),_="https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=",S="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=",D="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",I="https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",H="https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",N={category:"Category",ingredient:"Ingredient",name:"Name"},T=function(e){var t=Object(a.useState)(null),n=Object(k.a)(t,2),c=n[0],r=n[1],s=null,i=null;return Object(a.useEffect)((function(){if(e.props.menu===N.category)(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(I);case 2:i=(i=e.sent).data.drinks,r(i);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();else if(e.props.menu===N.ingredient){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(H);case 2:i=(i=e.sent).data.drinks,r(i);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}}),[e.props.menu]),e.props.menu===N.category&&c&&(s=c.map((function(t,n){return Object(g.jsx)(w,{itemClicked:e.props.titleUpdate,list:t.strCategory},n)}))),e.props.menu===N.ingredient&&c&&(s=c.map((function(t,n){return Object(g.jsx)(w,{itemClicked:e.props.titleUpdate,list:t.strIngredient1},n)}))),Object(g.jsxs)("div",{children:[Object(g.jsx)(v.a,{id:"dropdown-basic-button",variant:"success",title:e.props.title,children:s}),Object(g.jsx)("br",{})]})};var U=function(e){return Object(g.jsx)("div",{children:Object(g.jsxs)("label",{className:x.a.label,children:["Search keyword :",Object(g.jsx)("input",{className:x.a.input,onChange:e.props.nameHandler})]})})},B=function(e){var t=null;return[N.category,N.ingredient].includes(e.menu)?t=Object(g.jsx)(T,{props:e}):[N.name].includes(e.menu)&&(t=Object(g.jsx)(U,{props:e})),Object(g.jsxs)(b.a,{className:x.a.card,children:[Object(g.jsx)(b.a.Header,{children:"Cocktail search"}),Object(g.jsxs)(b.a.Body,{children:[Object(g.jsx)(b.a.Title,{children:"Search cocktails based on category, name or ingredients"}),Object(g.jsx)(b.a.Text,{children:Object(g.jsxs)(m.a,{children:[Object(g.jsx)(m.a.Toggle,{variant:"success",id:"dropdown-basic",children:e.menu}),Object(g.jsxs)(m.a.Menu,{children:[Object(g.jsx)(m.a.Item,{onClick:e.menuClicked,value:N.category,children:"Category"}),Object(g.jsx)(m.a.Item,{onClick:e.menuClicked,value:N.name,children:"Name"}),Object(g.jsx)(m.a.Item,{onClick:e.menuClicked,value:N.ingredient,children:"Ingredient"})]})]})}),t,Object(g.jsx)(f.a,{className:x.a.btn,variant:"primary",onClick:e.searchHandler,children:"Search"})]})]})};var F=function(e){return Object(g.jsx)("div",{children:Object(g.jsxs)(b.a,{style:{width:"18rem"},children:[Object(g.jsx)(b.a.Img,{variant:"top",src:e.data.strDrinkThumb}),Object(g.jsx)(b.a.Body,{children:Object(g.jsx)(b.a.Title,{style:{textAlign:"center"},children:e.data.strDrink})})]})})},M=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentDidUpdate=function(){if(a.state.submit&&a.state.menu===N.category)(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(_+a.state.title);case 2:t=(t=e.sent).data,a.setState(Object(o.a)(Object(o.a)({},a.state),{},{fetchedData:t,submit:!1}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();else if(a.state.submit&&a.state.menu===N.ingredient){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(S+a.state.title);case 2:t=(t=e.sent).data,a.setState(Object(o.a)(Object(o.a)({},a.state),{},{fetchedData:t,submit:!1}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}else if(a.state.submit&&a.state.menu===N.name){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(D+a.state.keyword);case 2:t=(t=e.sent).data,a.setState(Object(o.a)(Object(o.a)({},a.state),{},{fetchedData:t,submit:!1}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},a.menuClicked=function(e){a.setState(Object(o.a)(Object(o.a)({},a.state),{},{menu:e.target.outerText,submit:!1,title:"Choose from list"}))},a.searchHandler=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:[N.category,N.ingredient,N.name].includes(a.state.menu)&&a.setState(Object(o.a)(Object(o.a)({},a.state),{},{submit:!0}));case 1:case"end":return e.stop()}}),e)}))),a.nameHandler=function(e){a.setState(Object(o.a)(Object(o.a)({},a.state),{},{keyword:e.target.value}))},a.titleUpdate=function(e){a.setState(Object(o.a)(Object(o.a)({},a.state),{},{submit:!1,title:e.target.outerText}))},a.state={menu:"Choose search criteria",keyword:null,title:"Choose from list",submit:!1,fetchedData:null},a}return Object(j.a)(n,[{key:"render",value:function(){var e=null;if(this.state.fetchedData)if(this.state.fetchedData.drinks){var t=this.state.fetchedData.drinks.map((function(e,t){return Object(g.jsx)(F,{data:e},t)}));e=Object(g.jsx)("div",{className:x.a.result,children:t})}else e="No result found";return Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(B,{menu:this.state.menu,title:this.state.title,keyword:this.state.keyword,nameHandler:this.nameHandler,searchHandler:this.searchHandler,titleUpdate:this.titleUpdate,menuClicked:this.menuClicked})}),e]})}}]),n}(a.Component),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root")),A()}},[[78,1,2]]]);
//# sourceMappingURL=main.ee24f1d0.chunk.js.map