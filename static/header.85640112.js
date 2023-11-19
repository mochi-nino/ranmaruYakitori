import{_ as $}from"./nuxt-link.8de5b910.js";import{_ as M,u as R,k as U,r as B,f as u,g as E,c as o,a as e,b as r,w as n,i as c,I as F,F as T,h as q,t as _,s as x,z as f,o as l,d as v,p as A,e as G}from"./entry.78f1c0a1.js";const K=""+new URL("logo.e0632596.png",import.meta.url).href;const h=g=>(A("data-v-cecd9acd"),g=g(),G(),g),P={class:"bg-yellow-900/75 relative"},Q={class:"flex justify-between xl:container mx-auto text-white"},W={class:"logo py-2"},X=h(()=>e("div",{class:"font-mono text-center tracking-wider hidden xl:block"},[e("h1",null,"蘭丸串燒"),e("p",{class:"my-1 title-p text-white"},"焼き鳥")],-1)),Y={class:"items-center xl:flex"},Z={class:"flex text-xl font-medium xl:gap-12 xl:justify-between"},ee={class:"hidden xl:block"},te={key:0,class:"hidden xl:block"},se={key:1,class:"hidden xl:block"},oe=["src","alt"],le={key:2,class:"hidden xl:block"},ae=h(()=>e("i",{class:"fa-solid fa-heart",style:{color:"#ff000a"}},null,-1)),re={class:"flex justify-between items-center gap-2 text-sm my-2 border-y-2"},ne={class:"w-[50px] h-[50px]"},ce=["src","alt"],ie={class:"block break-words w-1/2"},ue=["onClick"],de={class:"text-center text-red-500 mt-10"},pe={class:"relative hidden xl:block"},_e=h(()=>e("i",{class:"fa-solid fa-cart-shopping",style:{color:"#ffffff"}},null,-1)),xe={key:0,class:"w-[18px] h-[18px] bg-red-500 rounded-[50px] absolute -top-2 -right-3 flex justify-center items-center text-[14px]"},fe={key:0,class:"flex items-center fixed w-full z-[50] xl:hidden"},he={class:"flex flex-col justify-evenly text-center text-2xl font-medium bg-yellow-900 w-full h-[100vh]"},ge={class:"border-b-2 p-5"},ve={key:0,class:"border-b-2 p-5"},me={key:1,class:"border-b-2 p-5"},be=h(()=>e("p",{class:"text-white"},"會員中心",-1)),we={key:2,class:"border-b-2 p-5"},ye={class:"border-b-2 p-5 relative flex items-center justify-center"},ke=h(()=>e("p",{class:"text-white"},"購物車",-1)),Se={key:0,class:"w-[18px] h-[18px] bg-red-500 rounded-[50px] flex justify-center items-center text-[14px] ml-2"},Be={__name:"header",emits:["loading"],setup(g,{emit:C}){//! ----------宣告引入------------
const t=R(),j=U();B(!1),B(!0);//! ----------功能------------
const b=async()=>{t.logOut(),alert("登出成功"),j.push("/login")},p=u(()=>!!t.data.userData),I=u(()=>t.favourite.length<=0?"目前沒有任何收藏":null),D=u(()=>!!t.openFavouriteBox),w=()=>{t.openFavouriteBox=!t.openFavouriteBox},y=u(()=>!!t.cart.length>0),H=C,k=u(()=>t.data.userData?t.data.userData:null),N=u(()=>t.favourite?t.favourite:null),O=s=>{t.removeFromFavourite(s)},S=u(()=>s=>{if(t.openHB)return s==="logo"?"fixed top-2":"fixed top-10 right-0"}),m=u(()=>s=>{if(s===1&&t.openHB)return"-rotate-[135deg] translate-y-1";if(s===2&&t.openHB)return"hidden";if(s===3&&t.openHB)return"rotate-[135deg] -translate-y-2"}),z=()=>{const s=localStorage.getItem("userData"),d=sessionStorage.getItem("userData");d?t.login(JSON.parse(d)):t.login(JSON.parse(s))},L=()=>{const s=localStorage.getItem("favourite");s&&t.getFavourite(JSON.parse(s))},V=()=>{const s=JSON.parse(localStorage.getItem("cart"));s&&t.getCart(s)};return E(()=>{z(),L(),V(),H("loading",!1)}),(s,d)=>{const a=$;return l(),o("header",P,[e("section",Q,[e("div",W,[r(a,{to:"/",class:"text-4xl font-black flex gap-4 items-center"},{default:n(()=>[e("img",{src:K,alt:"logo",class:f(["w-28 z-[90]",S.value("logo")])},null,2),X]),_:1})]),e("nav",Y,[e("ul",Z,[e("li",ee,[r(a,{to:"/products/"},{default:n(()=>[v("商店")]),_:1})]),p.value?c("",!0):(l(),o("li",te,[r(a,{to:"/login"},{default:n(()=>[v("登入")]),_:1})])),p.value?(l(),o("li",se,[r(a,{to:"/user"},{default:n(()=>[e("img",{src:k.value.avatar,alt:k.value.name,class:"w-[50px] h-[50px] rounded-[50px] object-cover object-center"},null,8,oe)]),_:1})])):c("",!0),p.value?(l(),o("li",le,[e("p",{class:"text-white cursor-pointer",onClick:b},"登出")])):c("",!0),e("li",{onClick:w,class:"relative leading-[105px] ml-48 xl:leading-normal xl:ml-0"},[ae,D.value?(l(),o("div",{key:0,class:"bg-white w-[350px] h-[350px] overflow-auto absolute z-10 -right-16 px-2 border-4 border-yellow-800 xl:-right-20 xl:top-12",onClick:d[0]||(d[0]=F(()=>{},["stop"]))},[e("ul",null,[(l(!0),o(T,null,q(N.value,(i,J)=>(l(),o("li",{key:J},[r(a,{to:`/products/${i.id}`,params:{id:i.id},onClick:w},{default:n(()=>[e("div",re,[e("div",ne,[e("img",{src:i.images[0],alt:i.title,class:"w-full h-full object-cover object-center"},null,8,ce)]),e("span",ie,_(i.title),1),e("span",null,"$"+_(i.price),1),e("i",{class:"fa-solid fa-trash",style:{color:"#000000"},onClick:F(Fe=>O(i),["stop","prevent"])},null,8,ue)])]),_:2},1032,["to","params"])]))),128))]),e("div",de,_(I.value),1)])):c("",!0)]),e("li",pe,[r(a,{to:"/cart"},{default:n(()=>[_e]),_:1}),y.value?(l(),o("div",xe,_(x(t).cart.length),1)):c("",!0)])])]),e("div",{class:f(["flex justify-center items-center flex-col gap-2 xl:hidden px-5 z-[99]",S.value("hb")]),onClick:d[1]||(d[1]=i=>x(t).openHB=!x(t).openHB)},[e("span",{class:f(["w-[35px] h-[5px] bg-white transition-all",m.value(1)])},null,2),e("span",{class:f(["w-[35px] h-[5px] bg-white transition-all",m.value(2)])},null,2),e("span",{class:f(["w-[35px] h-[5px] bg-white transition-all",m.value(3)])},null,2)],2),x(t).openHB?(l(),o("nav",fe,[e("ul",he,[e("li",ge,[r(a,{to:"/products/"},{default:n(()=>[v("商店")]),_:1})]),p.value?c("",!0):(l(),o("li",ve,[r(a,{to:"/login"},{default:n(()=>[v("登入")]),_:1})])),p.value?(l(),o("li",me,[r(a,{to:"/user"},{default:n(()=>[be]),_:1})])):c("",!0),p.value?(l(),o("li",we,[e("p",{class:"text-white cursor-pointer",onClick:b},"登出")])):c("",!0),e("li",ye,[r(a,{to:"/cart"},{default:n(()=>[ke]),_:1}),y.value?(l(),o("div",Se,_(x(t).cart.length),1)):c("",!0)])])])):c("",!0)])])}}},Ie=M(Be,[["__scopeId","data-v-cecd9acd"]]);export{Ie as default};
