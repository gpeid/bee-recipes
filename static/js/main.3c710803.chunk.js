(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(23),o=n.n(i),c=(n(72),n(7)),p=n(8),s=n(10),l=n(9),u=n(11),m=n(58),d=n.n(m),h=n(59),_=n.n(h),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:_.a.footer},r.a.createElement("p",null,"Footer is here."))}}]),t}(a.Component),b=n(60),y=n.n(b),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:y.a.header},r.a.createElement("h1",null,"BEE RECIPES"))}}]),t}(a.Component),j=n(61),E=n.n(j),k=n(62),O=n.n(k),v=[{id:0,name:"thit kho",ingredients:"pork, coconut soda, soy sauce, sometimes pepper it depends you know if i want it spicy or not",diet_type:"meat"},{id:1,name:"fried rice",ingredients:"rice, peas",diet_type:"veg"},{id:2,name:"meatless jerk stirfry",ingredients:"meatless beef tips, jerk seasoning, bell peppers, onions, meatless crumble",diet_type:"veg"},{id:3,name:"mushroom and beef risotto",ingredients:"meatless beef tips, jerk seasoning, bell peppers, onions, meatless crumble",diet_type:"meat"},{id:4,name:"baked lemon chicken",ingredients:"chicken, lemon pepper",diet_type:"meat"},{id:5,name:"chicken kho",ingredients:"chicken, coconut soda, soy sauce, sometimes pepper it depends you know if i want it spicy or not",diet_type:"meat"},{id:6,name:"Seafood boil sauce",ingredients:"butter, garlic, pepper, lemon pepper",diet_type:"seafood"},{id:7,name:"Seafood boil sauce",ingredients:"butter, garlic, pepper, lemon pepper",diet_type:"seafood"}],A=n(63),w=n.n(A),x=n(66);function C(){var e=Object(a.useState)(0),t=Object(x.a)(e,2),n=t[0],i=t[1];return console.log(n),r.a.createElement("div",null,r.a.createElement("p",null,n," people have used this recipe"),r.a.createElement("button",{onClick:function(){return i(n+1)}},"I've used this recipe!"))}var F=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,function(){return r.a.createElement("div",{key:e.props.id,className:O.a.recipe_item},r.a.createElement("h3",null,e.index," ",e.props.index,") ID:",e.props.id," -"," ",e.props.name,"splitArray"),r.a.createElement(C,null),r.a.createElement("h4",null,"Diet Type: ",e.props.diet_type),r.a.createElement("h5",null,"Ingredients: "),(t=e.props.ingredients,t.split(", ")).map(function(t,n){return r.a.createElement("div",{key:n},r.a.createElement(w.a,{id:"".concat(e.props.id,"_").concat(e.props.name,"_").concat(n),type:"checkbox",key:t,value:t})," ",r.a.createElement("label",{htmlFor:"".concat(e.props.id,"_").concat(e.props.name,"_").concat(n)},n+1," ",t))}));var t}())}}]),t}(a.Component),M=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}(v),t=e[Math.floor(Math.random()*Math.floor(e.length))];return r.a.createElement("div",{className:E.a.recipes},r.a.createElement(F,Object.assign({},t,{index:"Random"})),e.map(function(e,t){return r.a.createElement(F,Object.assign({},e,{index:t,key:t}))}))}}]),t}(a.Component),R=n(180),I=n(181),N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(R.a,null,r.a.createElement("div",{className:d.a.App},r.a.createElement(g,null),r.a.createElement(I.a,{exact:!0,path:"/",component:M}),r.a.createElement(I.a,{exact:!0,path:"/random",component:F}),r.a.createElement(f,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,t,n){e.exports={App:"App_App__1lY2G","App-logo":"App_App-logo__2ML4X","App-logo-spin":"App_App-logo-spin__17dSQ","App-header":"App_App-header__2Fxq9","App-link":"App_App-link__6w3jw",grid:"App_grid__2mP4b"}},59:function(e,t,n){e.exports={footer:"Footer_footer__3n39h"}},60:function(e,t,n){e.exports={header:"Header_header__3zZTB"}},61:function(e,t,n){e.exports={recipes:"RecipeContainer_recipes__1oADa",recipe_item:"RecipeContainer_recipe_item__2c-g5"}},62:function(e,t,n){e.exports={recipes:"Recipe_recipes__3UFq6",recipe_item:"Recipe_recipe_item__1G6Pu"}},67:function(e,t,n){e.exports=n(177)},72:function(e,t,n){}},[[67,2,1]]]);
//# sourceMappingURL=main.3c710803.chunk.js.map