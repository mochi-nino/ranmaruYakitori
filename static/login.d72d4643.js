import{u as q,k as w,r as k,o as u,c as _,a as e,b as t,w as h,q as F,D as T,y as v,E as S,n as $,d as U,m as E,j as f,i as y,F as N}from"./entry.78f1c0a1.js";import{u as V}from"./vue.f36acd1f.af229a2c.js";import{b as j}from"./button.93fec5de.js";const A={class:"h-[calc(100vh-65px-106px)] flex items-center"},D={class:"xl:w-1/3 md:container m-auto w-full px-5"},B=e("h1",{class:"text-4xl text-center bg-yellow-900/75 py-3"},"會員登入",-1),L={class:"bg-gray-200 flex justify-center items-center flex-col gap-10 p-10"},M=e("span",{class:"mr-2 border-black"},[e("i",{class:"fa-solid fa-user",style:{color:"rgb(113, 63, 18)"}})],-1),O=e("span",{class:"mr-2"},[e("i",{class:"fa-solid fa-lock",style:{color:"rgb(113, 63, 18)"}})],-1),J={class:"text-center"},z=e("label",{for:"checkbox",class:"text-black mx-2"},"記住我",-1),I={__name:"loginComponent",emits:["toSignUp"],setup(b,{emit:c}){//! ----------宣告引入------------
const p=q(),s=w();//! ----------變數------------
const d=k(!1),n={email:"required|email",password:"required"};//! ----------功能------------
const l=c,m=i=>{l("toSignUp",i)},x=i=>{fetch("https://api.escuelajs.co/api/v1/users").then(a=>a.json()).then(a=>{const o=a.filter(r=>i.email===r.email&&i.password===r.password);if(o.length!==0){const r={email:o[0].email,password:o[0].password,avatar:o[0].avatar,creationAt:o[0].creationAt,id:o[0].id,name:o[0].name,role:o[0].role,updatedAt:o[0].updatedAt};d.value?localStorage.setItem("userData",JSON.stringify(r)):sessionStorage.setItem("userData",JSON.stringify(r)),p.login(r),alert("登入成功"),s.push("/")}else alert("信箱或密碼錯誤，請重新輸入")}).catch(a=>{console.log(a)})};return V({title:"蘭丸燒烤 | 會員登入",meta:[{name:"description",content:"description"}]}),(i,a)=>{const o=v,r=S,C=$;return u(),_("section",A,[e("div",D,[B,t(C,{onSubmit:x,"validation-schema":n},{default:h(()=>[e("div",L,[e("div",null,[M,t(o,{type:"email",name:"email",placeholder:"請輸入信箱",label:"E-mail",class:"w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"}),t(r,{name:"email",class:"text-red-500 block px-6"})]),e("div",null,[O,t(o,{type:"password",name:"password",placeholder:"請輸入密碼",label:"密碼",maxLength:"16",class:"w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"}),t(r,{name:"password",class:"text-red-500 block px-6"})]),e("div",J,[F(e("input",{type:"checkbox",name:"checkbox",id:"checkbox",class:"w-[15px] h-[15px]","onUpdate:modelValue":a[0]||(a[0]=g=>d.value=g)},null,512),[[T,d.value]]),z,e("p",{class:"text-black cursor-pointer mt-1 hover:text-yellow-700",onClick:a[1]||(a[1]=g=>m(!0))}," 註冊 "),t(j,{class:"mt-5"})])])]),_:1})])])}}},R=I,Z={class:"xl:h-[calc(100vh-65px-106px)] flex items-center p-5"},H={class:"xl:w-1/3 md:container m-auto w-full"},P=e("h1",{class:"text-4xl text-center bg-yellow-900/75 py-3"},"會員註冊",-1),G={class:"bg-gray-200 flex justify-center items-center flex-col gap-10 p-10"},K=e("label",{for:"",class:"w-[80px] inline-block xl:text-right"},"信箱：",-1),Q=e("label",{for:"",class:"w-[80px] inline-block xl:text-right"},"密碼：",-1),W=e("label",{for:"",class:"w-[80px] inline-block xl:text-right"},"確認密碼：",-1),X=e("label",{for:"",class:"w-[80px] inline-block xl:text-right"},"姓名：",-1),Y={class:"text-center"},ee={__name:"singUp",emits:["toLogin"],setup(b,{emit:c}){//! ----------宣告引入------------
w();//! ----------功能------------
const p=c,s=n=>{p("toLogin",n)},d=n=>{fetch("https://api.escuelajs.co/api/v1/users/",{method:"POST",body:JSON.stringify({name:n.name,email:n.email,password:n.password,avatar:"https://picsum.photos/800"}),headers:{"Content-Type":"application/json"}}).then(l=>l.json()).then(l=>{console.log("成功",l),alert("註冊成功"),location.reload()}).catch(l=>{console.log("錯誤",l)})};return V({title:"蘭丸燒烤 | 註冊",meta:[{name:"description",content:"description"}]}),(n,l)=>{const m=v,x=S,i=$;return u(),_("section",Z,[e("div",H,[P,t(i,{onSubmit:d},{default:h(()=>[e("ul",G,[e("li",null,[K,t(m,{type:"email",name:"email",placeholder:"請輸入信箱",label:"E-mail",rules:"required|email",class:"w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"}),t(x,{name:"email",class:"text-red-500 block xl:mx-20"})]),e("li",null,[Q,t(m,{type:"password",name:"password",placeholder:"請輸入包含1個英文及8位數字密碼",label:"密碼",rules:{regex:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,required:"required",min:8,max:16},class:"w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"},null,8,["rules"]),t(x,{name:"password",class:"text-red-500 block xl:mx-20"})]),e("li",null,[W,t(m,{type:"password",name:"confirmation",placeholder:"請輸入包含1個英文及8位數字密碼",label:"確認密碼",rules:"required|confirmed:@password",class:"w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"}),t(x,{name:"confirmation",class:"text-red-500 block xl:mx-20"})]),e("li",null,[X,t(m,{type:"text",name:"name",placeholder:"請輸入姓名",label:"姓名",rules:"required",class:"w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"}),t(x,{name:"name",class:"text-red-500 block xl:mx-20"})]),e("li",Y,[t(j,null,{default:h(()=>[U("註冊")]),_:1}),e("p",{class:"cursor-pointer mt-1 hover:text-yellow-700 mt-2",onClick:l[0]||(l[0]=a=>s(!1))}," 已經是會員嗎？按此登入 ")])])]),_:1})])])}}},te=ee,le={__name:"login",setup(b){const c=k(!1),p=s=>{c.value=s};return E(()=>{fetch("https://api.escuelajs.co/api/v1/users").then(s=>s.json()).then(s=>{console.log(s)}).catch(s=>{console.log(s)})}),(s,d)=>(u(),_(N,null,[c.value?y("",!0):(u(),f(R,{key:0,onToSignUp:p})),c.value?(u(),f(te,{key:1,onToLogin:p})):y("",!0)],64))}};export{le as default};