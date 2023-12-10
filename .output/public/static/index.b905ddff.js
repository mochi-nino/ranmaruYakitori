import{_ as k}from"./nuxt-link.912060e2.js";import{u as j}from"./vue.f36acd1f.f4ab355f.js";import{b as g}from"./button.06041305.js";import{f as $,r as B,i as u,A as F,c as x,a as t,l as N,m as T,x as w,d as r,t as n,b as _,w as a,y as V,o as i}from"./entry.eef69a39.js";const M={class:"xl:w-[1280px] m-auto py-10"},P={class:"w-full mx-auto"},A=t("h2",{class:"text-3xl text-center bg-yellow-900/75 py-3"},"購物車",-1),I={class:"bg-white pb-5"},L=t("li",{class:"grid grid-cols-6 justify-between items-center py-5 px-2 text-center font-bold text-lg"},[t("div",{class:"mr-2 xl:w-[150px]"}),t("p",null,"名稱"),t("p",null,"單價"),t("p",null,"數量"),t("p",null,"總價"),t("p",null,"刪除")],-1),S={class:"mr-2 xl:w-[150px] xl:h-[150px]"},D=["src","alt"],E={class:"text-black text-center break-words"},H={class:"text-center"},q={class:"flex justify-center items-center gap-1 xl:gap-5"},z={class:"bg-yellow-900 flex justify-center items-center gap-2 rounded-xl xl:gap-5"},G=["onClick"],J={class:"text-white text-s"},K=["onClick"],O={class:"text-center"},Q={class:"text-center xl:px-10"},R=["onClick"],U={class:"text-2xl text-white text-right bg-yellow-900/75 py-2 px-5 tracking-wider"},W={class:"text-red-500 font-bold"},X={class:"text-right mt-10"},ot={__name:"index",setup(Y){const c=$(),d=B([]),p=u(()=>c.cart.length>0?(d.value=c.cart,!0):!1),h=(o,l,s)=>{o?(console.log(l),s++,c.editCartCount(l,s)):s<=1?c.removeFromCart(l):(s--,c.editCartCount(l,s))},b=o=>{c.removeFromCart(o)},f=u(()=>d.value.reduce((o,{price:l,count:s})=>o+l*s,0)),m=u(()=>{const o="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";let l="";for(let s=0;s<12;s++){const e=Math.floor(Math.random()*o.length);l+=o.charAt(e)}return l}),y=()=>{const o=f;c.getCartTotalPrice(o)};return j({title:"蘭丸燒烤 | 購物車",meta:[{name:"description",content:"description"}]}),F(()=>{}),(o,l)=>{const s=k;return i(),x("section",M,[t("div",P,[A,t("ul",I,[L,p.value?(i(!0),x(N,{key:0},T(d.value,(e,C)=>(i(),x("li",{key:C,class:"grid grid-cols-6 justify-between items-center p-2"},[t("div",S,[t("img",{src:e.images[0],alt:e.title,class:"w-full h-full object-cover object-center"},null,8,D)]),t("h3",E,n(e.title),1),t("div",H,[t("p",null,"$"+n(e.price),1)]),t("div",q,[t("div",z,[t("button",{class:"w-full h-[50%] text-s xl:text-2xl xl:w-[35px] hover:bg-yellow-700 rounded-xl",onClick:v=>h(0,e,e.count)}," － ",8,G),t("p",J,n(e.count),1),t("button",{class:"w-full h-[50%] text-s xl:text-2xl xl:w-[35px] hover:bg-yellow-700 rounded-xl",onClick:v=>h(1,e,e.count)}," ＋ ",8,K)])]),t("div",O,[t("p",null,"$"+n(e.price*e.count),1)]),t("div",Q,[t("i",{class:"fa-solid fa-trash",style:{color:"#000000"},onClick:v=>b(e)},null,8,R)])]))),128)):w("",!0)]),t("div",U,[r(" 小計$ "),t("span",W,n(f.value),1),r(" 元 ")]),t("div",X,[_(s,{to:"/products"},{default:a(()=>[_(g,{class:"mr-5"},{default:a(()=>[r("繼續購物")]),_:1})]),_:1}),p.value?(i(),V(s,{key:0,to:`/cart/payment/${m.value}`,params:{id:m.value}},{default:a(()=>[_(g,{class:"mr-5",onClick:y},{default:a(()=>[r("前往結帳")]),_:1})]),_:1},8,["to","params"])):w("",!0)])])])}}};export{ot as default};