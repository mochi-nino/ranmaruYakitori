import{_ as m,u as f,f as h,r as i,c as x,a as e,b as o,w,F as b,o as y,p as g,e as S,g as v}from"./entry.411f27be.js";import{b as k}from"./button.66c0d799.js";const c=t=>(g("data-v-e9423261"),t=t(),S(),t),F={class:"w-[800px] h-[100vh] m-auto flex justify-center items-center"},I={class:"w-full"},j=c(()=>e("h1",{class:"text-3xl text-center bg-yellow-900/80 py-5"},"後台管理",-1)),V={class:"bg-white flex justify-center items-center flex-col gap-10 py-24"},B=c(()=>e("li",null,[e("p",null,"後台帳號與密碼固定為：111")],-1)),N={class:"flex justify-center items-center"},q=c(()=>e("label",{for:"id"},"帳號：",-1)),U={class:"flex justify-center items-center"},C=c(()=>e("label",{for:"password"},"密碼：",-1)),D={class:"mt-5"},E={__name:"index",setup(t){const n=f(),r=h(),_={id:"required",password:"required"},d=i(111),l=i(111),p=s=>{s.id==d.value&&s.password==l.value?(sessionStorage.setItem("backUserData",JSON.stringify(s)),r.backUserLogin(s),n.push("/back/productMg")):alert("帳號密碼錯誤")};return(s,J)=>{const a=v,u=b;return y(),x("section",F,[e("div",I,[j,o(u,{onSubmit:p,"validation-schema":_},{default:w(()=>[e("ul",V,[B,e("li",N,[q,o(a,{type:"text",id:"id",name:"id"})]),e("li",U,[C,o(a,{type:"password",id:"password",name:"password"})]),e("li",D,[o(k)])])]),_:1})])])}}},O=m(E,[["__scopeId","data-v-e9423261"]]);export{O as default};
