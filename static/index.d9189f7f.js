import{_ as N}from"./nuxt-link.494ded3b.js";import{_ as S,x as j,r as v,n as f,f as A,K as O,o as u,c as d,a as s,F as $,s as C,b as L,w as B,t as m,M as y,N as V,z,E,u as D}from"./entry.dc536120.js";import{u as I}from"./index.a78bb551.js";const T={class:"xl:w-[1280px] md:w-[600px] py-5 m-auto",id:"products"},q={class:"grid xl:grid-cols-4 grid-cols-2 gap-10"},K={class:"absolute top-0 left-0 bg-red-500 p-1"},G={class:"w-full h-[250px]"},H=["src","alt"],J={class:"mb-auto p-1 relative"},Q={class:"my-2 text-base"},R=["onClick"],U={class:"text-center text-xl my-5"},W=["disabled"],X=["onClick"],Y=["disabled"];//! ----------變數------------
const Z={__name:"products",props:{option:{type:String,default:"ALL"}},setup(w){//! ----------宣告引入------------
const a=I(),c=j([]),l=v([]),_=v("ALL"),x=v(12),n=v(1),b=w;//! ----------功能------------
const o=e=>{a.favourite.some(h=>h.id===e.id)?a.removeFromFavourite(e):(console.log(e),a.addToFavourite(e),alert("已加入收藏")),stopPropagation()},p=f(()=>e=>{if(a.favourite)return a.favourite.some(i=>i.id===e)?"fa-solid":"fa-regular"}),r=f(()=>l.value.length<=0?Math.ceil(c.length/x.value):Math.ceil(l.value.length/x.value)),k=f(()=>{const e=(n.value-1)*x.value,i=n.value*x.value;//!篩選分類 如沒有篩出資料則顯示全部
const h=c.filter(t=>t.category.name===_.value);return l.value=[...h],l.value.length<=0?c.slice(e,i):l.value.slice(e,i)}),g=e=>{switch(!0){case e===-1:n.value--;break;case e===-2:n.value++;break;default:n.value=e;break}//! 拉至視窗上
document.querySelector("#products").scrollIntoView({behavior:"smooth"})},P=f(()=>e=>n.value===e?"bg-yellow-800":"");return A(()=>{_.value=b.option,n.value=1}),O(()=>{fetch("https://api.escuelajs.co/api/v1/products").then(e=>e.json()).then(e=>{c.push(...e)}).catch(e=>{console.log(e)})}),(e,i)=>{const h=N;return u(),d("section",T,[s("section",q,[(u(!0),d($,null,C(k.value,(t,F)=>(u(),d("div",{key:F,class:"relative w-full border-4 border-yellow-800"},[L(h,{to:`/products/${t.id}`,params:{id:t.id}},{default:B(()=>[s("span",K,m(t.category.name),1),s("div",G,[s("img",{src:t.images[0],alt:t.title,class:"w-full h-full object-cover object-center"},null,8,H)]),s("div",J,[s("h3",Q,m(t.title),1),s("span",null,"$"+m(t.price),1),s("span",null,[s("i",{class:y(["fa-heart absolute right-2 text-lg cursor-pointer text-red-500",p.value(t.id)]),onClick:V(M=>o(t),["stop","prevent"])},null,10,R)])])]),_:2},1032,["to","params"])]))),128))]),s("div",U,[s("button",{disabled:n.value===1,onClick:i[0]||(i[0]=t=>g(-1))},"＜",8,W),(u(!0),d($,null,C(r.value,(t,F)=>(u(),d("button",{key:t,class:y(["mx-3 rounded-lg px-2",P.value(t)]),onClick:M=>g(t)},m(t),11,X))),128)),s("button",{disabled:n.value===r.value,onClick:i[1]||(i[1]=t=>g(-2))}," ＞ ",8,Y)])])}}},ee=S(Z,[["__scopeId","data-v-b2c1e381"]]);const te={key:0,class:"border-4 border-yellow-800"},se={class:"text-center px-5 xl:!block"},oe=["onClick"],ne={__name:"silder",emits:["option"],setup(w,{emit:a}){const c=j([]),l=v(""),_=v(!1),x=a,n=o=>{x("option",o),l.value=o},b=f(()=>o=>l.value===o?"bg-yellow-900":"");return O(()=>{fetch("https://api.escuelajs.co/api/v1/products").then(o=>o.json()).then(o=>{const p=new Set(o.map(r=>r.category.name));c.push(...p)}).catch(o=>{console.log(o)})}),(o,p)=>c.length>0?(u(),d("div",te,[s("h2",{class:"text-2xl bg-yellow-800 text-center py-2 cursor-pointer xl:cursor-default",onClick:p[0]||(p[0]=r=>_.value=!_.value)}," 類別 "),z(s("ul",se,[s("li",{class:y(["my-3 p-1 rounded-xl",b.value("ALL")])},[s("p",{onClick:p[1]||(p[1]=r=>n("ALL"))},"全部")],2),(u(!0),d($,null,C(c,(r,k)=>(u(),d("li",{key:k,class:y(["my-3 px-3 py-1 rounded-xl",b.value(r)])},[s("p",{onClick:g=>n(r)},m(r),9,oe)],2))),128))],512),[[E,_.value]])])):D("",!0)}},le=S(ne,[["__scopeId","data-v-2bdcd6bb"]]),ae={class:"xl:flex justify-center items-center xl:w-[1280px] md:w-[600px] m-auto xl:gap-20 xl:py-5"},ce={class:"relative xl:w-[15%]"},de={__name:"index",setup(w){const a=v(""),c=l=>{a.value=l};return(l,_)=>(u(),d("section",ae,[s("div",ce,[L(le,{class:"xl:fixed top-[12%]",onOption:c})]),L(ee,{option:a.value,class:"p-10 xl:p-0"},null,8,["option"])]))}};export{de as default};
