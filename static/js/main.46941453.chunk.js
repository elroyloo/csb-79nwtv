(this["webpackJsonpnote-taking-app"]=this["webpackJsonpnote-taking-app"]||[]).push([[0],{3:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2);var l=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"My Note Taker"))};var c=function(){const e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \xa9 ",e))};var u=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},"DELETE"))};var i=[{key:1,title:"Delegation",content:"Q. How many programmers does it take to change a light bulb? A. None \u2013 It\u2019s a hardware problem"},{key:2,title:"Loops",content:"How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."},{key:3,title:"Arrays",content:"Q. Why did the programmer quit his job? A. Because he didn't get arrays."},{key:4,title:"Hardware vs. Software",content:"What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."}];var m=function(e){const[t,n]=Object(a.useState)(""),[o,l]=Object(a.useState)("");return r.a.createElement("div",null,r.a.createElement("form",{className:"createnote",onSubmit:a=>{a.preventDefault(),t&&o&&(e.onAdd({title:t,content:o}),n(""),l(""))}},r.a.createElement("input",{name:"title",onChange:e=>{n(e.target.value)},value:t,placeholder:"Title"}),r.a.createElement("textarea",{name:"content",onChange:e=>{l(e.target.value)},value:o,placeholder:"Take a note...",rows:"3"}),r.a.createElement("button",{type:"submit"},"Add")))};var s=function(){const[e,t]=Object(a.useState)(i);function n(e){t(t=>t.filter((t,n)=>n!==e))}return r.a.createElement("div",null,r.a.createElement(l,null),r.a.createElement(m,{onAdd:function(e){t(t=>[...t,e])}}),e.map((e,t)=>r.a.createElement(u,{key:t,id:t,title:e.title,content:e.content,onDelete:n})),r.a.createElement(c,null))};n.n(o).a.render(r.a.createElement(s,null),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.46941453.chunk.js.map