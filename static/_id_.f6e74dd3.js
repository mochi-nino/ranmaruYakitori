import{L as F,x as j,r as h,n as y,K as $,c as x,a as e,B as p,F as B,s as T,t as c,b as d,w as u,u as M,o as f,d as v,M as N}from"./entry.dc536120.js";import{b as m}from"./button.108690a9.js";import{u as V}from"./index.a78bb551.js";const I={key:0,class:"xl:container xl:h-[calc(100vh-65px-106px)] m-auto py-10 xl:px-36 grid xl:grid-cols-2 items-center md:grid-cols-1 px-5"},L={class:"xl:w-[500px]"},O={class:""},S=["src","alt"],z={class:"flex justify-evenly items-center m-10"},D=["src","alt","onClick"],E={class:"flex flex-col gap-36"},K={class:"text-3xl mb-10 mb:text-center"},R={class:"text-red-600 font-semibold"},q={class:"flex items-center gap-5 text-center"},A=e("h3",{class:"text-2xl bg-yellow-900 text-center mb-5"},"商品描述",-1),G={class:"text-white"},W={__name:"[id]",setup(H){const C=F(),l=V(),a=j({}),r=h(),n=h(1),b=t=>{r.value=a.images[t]},k=t=>{l.favourite.some(o=>o.id===t.id)?l.removeFromFavourite(t):(console.log(t),l.addToFavourite(t),alert("已加入收藏"))},_=y(()=>(t,s)=>{const o=l.favourite.some(i=>i.id===t);return s?o?"fa-solid":"fa-regular":o?"已收藏":"加入收藏"}),g=t=>{t?n.value++:n.value===1?n.value=1:n.value--},w=t=>{l.cart.some(o=>o.id===t.id)?(l.editCartCount(t,n.value),alert("已修改購物車內數量")):(Object.assign(t,{count:n.value}),l.addToCart(t),alert("已加入購物車"))};return $(()=>{fetch("https://api.escuelajs.co/api/v1/products").then(t=>t.json()).then(t=>{const s=t.find(o=>o.id==C.params.id);Object.assign(a,s),r.value=a.images[0]}).catch(t=>{console.log(t)})}),(t,s)=>a.id?(f(),x("section",I,[e("div",L,[e("div",O,[e("img",{src:p(r),alt:"圖片："+p(r)},null,8,S)]),e("div",z,[(f(!0),x(B,null,T(a.images,(o,i)=>(f(),x("img",{key:i,src:o,alt:"img"+i,class:"w-1/6 object-cover object-center",onClick:J=>b(i)},null,8,D))),128))])]),e("div",E,[e("div",null,[e("h2",K,c(a.title),1),e("p",R,"$ "+c(a.price)+" 元",1),d(m,{class:"flex items-center justify-center mt-10",onClick:s[0]||(s[0]=o=>k(a))},{default:u(()=>[v(c(_.value(a.id,0))+" ",1),e("i",{class:N(["fa-heart ml-2 text-lg cursor-pointer text-red-500",_.value(a.id,1)])},null,2)]),_:1})]),e("div",q,[d(m,{class:"w-[35px] text-2xl",onClick:s[1]||(s[1]=o=>g(0))},{default:u(()=>[v("－")]),_:1}),e("span",null,c(p(n)),1),d(m,{class:"w-[35px] text-2xl",onClick:s[2]||(s[2]=o=>g(1))},{default:u(()=>[v("＋")]),_:1}),d(m,{class:"ml-5",onClick:s[3]||(s[3]=o=>w(a))},{default:u(()=>[v("加入購物車")]),_:1})]),e("div",null,[A,e("div",null,[e("p",G,c(a.description),1)])])])])):M("",!0)}};export{W as default};
