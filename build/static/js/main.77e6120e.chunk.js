(this["webpackJsonpreact-api-ui"]=this["webpackJsonpreact-api-ui"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),l=n.n(c),r=(n(12),n(3)),u=n(4),s=n(6),i=n(5);n(13);var h=function(e){return a.a.createElement("div",null,a.a.createElement("div",{id:"bOne",className:"quote"},e.newQuote," "))};var d=function(e){return console.log(e),a.a.createElement("div",null,a.a.createElement("div",{id:"bTwo",className:"quote"},e.newFoodQuote))};var m=function(e){return a.a.createElement("div",null,a.a.createElement("div",{id:"bThree",className:"quote"},e.newGovQuote))};var f=function(e){return a.a.createElement("div",null,a.a.createElement("div",{id:"bFour",className:"quote"},e.newAlcQuote))},v="http://ron-swanson-quotes.herokuapp.com/v2/quotes",p="http://ron-swanson-quotes.herokuapp.com/v2/quotes/search/food",g="http://ron-swanson-quotes.herokuapp.com/v2/quotes/search/government",Q="http://ron-swanson-quotes.herokuapp.com/v2/quotes/search/alcohol",w={method:"GET",headers:{Accept:"application/json"}},E=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).handleRClick=function(e){e.preventDefault();var t=document.querySelector("#bOne");console.log(t),t.classList.toggle("display"),fetch(v,w).then((function(e){return e.json()})).then((function(e){console.log(e),o.setState({newQuote:e,dataReady:!0})}))},o.handleFClick=function(e){e.preventDefault();var t=document.querySelector("#bTwo");console.log(t),t.classList.toggle("display"),fetch(p,w).then((function(e){return e.json()})).then((function(e){console.log(e),o.setState({foodQuote:e[Math.floor(Math.random()*e.length)],dataReady:!0})}))},o.handleGClick=function(e){e.preventDefault();var t=document.querySelector("#bThree");console.log(t),t.classList.toggle("display"),fetch(g,w).then((function(e){return e.json()})).then((function(e){console.log(e),o.setState({govQuote:e[Math.floor(Math.random()*e.length)],dataReady:!0})}))},o.handleAClick=function(e){e.preventDefault();var t=document.querySelector("#bFour");console.log(t),t.classList.toggle("display"),fetch(Q,w).then((function(e){return e.json()})).then((function(e){console.log(e),o.setState({alcQuote:e[Math.floor(Math.random()*e.length)],dataReady:!0})}))},o.state={newQuote:[],foodQuote:[],govQuote:[],alcQuote:[],dataReady:!1},o}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"appBody"},a.a.createElement("div",{className:"top"},a.a.createElement("p",{className:"topTitle"},"Ron Swanson Quotes:",a.a.createElement("span",null,"from the Ron Swanson Api"))),a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"accordianDiv"},a.a.createElement("button",{className:"button",onClick:this.handleRClick},"Random Quote"),a.a.createElement(h,{newQuote:this.state.newQuote}),a.a.createElement("button",{className:"button",onClick:this.handleFClick},"Food Quote"),a.a.createElement(d,{newFoodQuote:this.state.foodQuote}),a.a.createElement("button",{className:"button",onClick:this.handleGClick},"Government Quote"),a.a.createElement(m,{newGovQuote:this.state.govQuote}),a.a.createElement("button",{className:"button",onClick:this.handleAClick},"Alcohol Quote"),a.a.createElement(f,{newAlcQuote:this.state.alcQuote}))))}},{key:"componentDidMount",value:function(){var e=this;fetch(v,w).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({newQuote:t,dataReady:!0})})),fetch(p,w).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({foodQuote:t[Math.floor(Math.random()*t.length)],dataReady:!0})})),fetch(g,w).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({govQuote:t[Math.floor(Math.random()*t.length)],dataReady:!0})})),fetch(Q,w).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({alcQuote:t[Math.floor(Math.random()*t.length)],dataReady:!0})}))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.77e6120e.chunk.js.map