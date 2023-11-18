import{_ as b}from"./nuxt-link.a0ad3982.js";import{b as d}from"./button.fdead718.js";import{u as $,r as j,n as p,q as F,c as x,a as t,F as B,s as N,v as C,d as a,t as r,b as i,w as n,x as T,o as u}from"./entry.5d0cda90.js";const V={class:"xl:w-[1280px] m-auto py-10"},M={class:"w-[80%] mx-auto"},P=t("h2",{class:"text-3xl text-center bg-yellow-900/75 py-3"},"購物車",-1),I={class:"bg-white"},L=t("li",{class:"grid grid-cols-6 justify-between items-center py-5 px-2 text-center font-bold text-lg"},[t("div",{class:"w-[150px]"}),t("p",null,"名稱"),t("p",null,"單價"),t("p",null,"數量"),t("p",null,"總價"),t("p",null,"刪除")],-1),S={class:"w-[150px] h-[150px]"},q=["src","alt"],A={class:"text-black text-center"},D={class:"text-center"},E={class:"flex justify-center items-center gap-5"},z={class:"text-center"},G={class:"text-center px-10"},H=["onClick"],J={class:"text-2xl text-white text-right bg-yellow-900/75 py-2 px-5 tracking-wider"},K={class:"text-red-500 font-bold"},O={class:"text-right mt-10"},X={__name:"index",setup(Q){const c=$(),_=j([]),h=p(()=>c.cart.length>0?(_.value=c.cart,!0):!1),f=(o,l,s)=>{o?(console.log(l),s++,c.editCartCount(l,s)):s<=1?c.removeFromCart(l):(s--,c.editCartCount(l,s))},k=o=>{c.removeFromCart(o)},v=p(()=>_.value.reduce((o,{price:l,count:s})=>o+l*s,0)),m=p(()=>{const o="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";let l="";for(let s=0;s<12;s++){const e=Math.floor(Math.random()*o.length);l+=o.charAt(e)}return l}),w=()=>{const o=v;c.getCartTotalPrice(o)};return F(()=>{}),(o,l)=>{const s=b;return u(),x("section",V,[t("div",M,[P,t("ul",I,[L,h.value?(u(!0),x(B,{key:0},N(_.value,(e,y)=>(u(),x("li",{key:y,class:"grid grid-cols-6 justify-between items-center p-2"},[t("div",S,[t("img",{src:e.images[0],alt:e.title,class:"w-full h-full object-cover object-center"},null,8,q)]),t("h3",A,r(e.title),1),t("div",D,[t("p",null,"$"+r(e.price),1)]),t("div",E,[i(d,{class:"w-[35px] text-2xl",onClick:g=>f(0,e,e.count)},{default:n(()=>[a("－")]),_:2},1032,["onClick"]),t("p",null,r(e.count),1),i(d,{class:"w-[35px] text-2xl",onClick:g=>f(1,e,e.count)},{default:n(()=>[a("＋")]),_:2},1032,["onClick"])]),t("div",z,[t("p",null,"$"+r(e.price*e.count),1)]),t("div",G,[t("i",{class:"fa-solid fa-trash",style:{color:"#000000"},onClick:g=>k(e)},null,8,H)])]))),128)):C("",!0)]),t("div",J,[a(" 小計$ "),t("span",K,r(v.value),1),a(" 元 ")]),t("div",O,[i(s,{to:"/products"},{default:n(()=>[i(d,{class:"mr-5"},{default:n(()=>[a("繼續購物")]),_:1})]),_:1}),h.value?(u(),T(s,{key:0,to:`/cart/payment/${m.value}`,params:{id:m.value}},{default:n(()=>[i(d,{class:"mr-5",onClick:w},{default:n(()=>[a("前往結帳")]),_:1})]),_:1},8,["to","params"])):C("",!0)])])])}}};export{X as default};