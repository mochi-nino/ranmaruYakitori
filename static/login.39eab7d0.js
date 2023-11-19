import{u as j,y as w,r as k,o as u,c as _,a as e,b as t,w as h,C as F,M as T,H as v,I as S,B as $,d as U,A as q,x as f,v as y,F as A}from"./entry.ac855e14.js";import{b as V}from"./button.709c95b1.js";const N={class:"h-[calc(100vh-65px-106px)] flex items-center"},B={class:"xl:w-1/3 md:container m-auto w-full px-5"},E=e("h1",{class:"text-4xl text-center bg-yellow-900/75 py-3"},"會員登入",-1),M={class:"bg-gray-200 flex justify-center items-center flex-col gap-10 p-10"},D=e("span",{class:"mr-2 border-black"},[e("i",{class:"fa-solid fa-user",style:{color:"rgb(113, 63, 18)"}})],-1),L=e("span",{class:"mr-2"},[e("i",{class:"fa-solid fa-lock",style:{color:"rgb(113, 63, 18)"}})],-1),O={class:"text-center"},I=e("label",{for:"checkbox",class:"text-black mx-2"},"記住我",-1),J={__name:"loginComponent",emits:["toSignUp"],setup(b,{emit:c}){//! ----------宣告引入------------
const p=j(),s=w();//! ----------變數------------
const d=k(!1),n={email:"required|email",password:"required"};//! ----------功能------------
const a=c,m=i=>{a("toSignUp",i)},x=i=>{fetch("https://api.escuelajs.co/api/v1/users").then(l=>l.json()).then(l=>{const o=l.filter(r=>i.email===r.email&&i.password===r.password);if(o.length!==0){const r={email:o[0].email,password:o[0].password,avatar:o[0].avatar,creationAt:o[0].creationAt,id:o[0].id,name:o[0].name,role:o[0].role,updatedAt:o[0].updatedAt};d.value?localStorage.setItem("userData",JSON.stringify(r)):sessionStorage.setItem("userData",JSON.stringify(r)),p.login(r),alert("登入成功"),s.push("/")}else alert("信箱或密碼錯誤，請重新輸入")}).catch(l=>{console.log(l)})};return(i,l)=>{const o=v,r=S,C=$;return u(),_("section",N,[e("div",B,[E,t(C,{onSubmit:x,"validation-schema":n},{default:h(()=>[e("div",M,[e("div",null,[D,t(o,{type:"email",name:"email",placeholder:"請輸入信箱",label:"E-mail",class:"w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"}),t(r,{name:"email",class:"text-red-500 block px-6"})]),e("div",null,[L,t(o,{type:"password",name:"password",placeholder:"請輸入密碼",label:"密碼",maxLength:"16",class:"w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"}),t(r,{name:"password",class:"text-red-500 block px-6"})]),e("div",O,[F(e("input",{type:"checkbox",name:"checkbox",id:"checkbox",class:"w-[15px] h-[15px]","onUpdate:modelValue":l[0]||(l[0]=g=>d.value=g)},null,512),[[T,d.value]]),I,e("p",{class:"text-black cursor-pointer mt-1 hover:text-yellow-700",onClick:l[1]||(l[1]=g=>m(!0))}," 註冊 "),t(V,{class:"mt-5"})])])]),_:1})])])}}},z=J,R={class:"xl:h-[calc(100vh-65px-106px)] flex items-center p-5"},Z={class:"xl:w-1/3 md:container m-auto w-full"},H=e("h1",{class:"text-4xl text-center bg-yellow-900/75 py-3"},"會員註冊",-1),P={class:"bg-gray-200 flex justify-center items-center flex-col gap-10 p-10"},G=e("label",{for:"",class:"w-[80px] inline-block xl:text-right"},"信箱：",-1),K=e("label",{for:"",class:"w-[80px] inline-block xl:text-right"},"密碼：",-1),Q=e("label",{for:"",class:"w-[80px] inline-block xl:text-right"},"確認密碼：",-1),W=e("label",{for:"",class:"w-[80px] inline-block xl:text-right"},"姓名：",-1),X={class:"text-center"},Y={__name:"singUp",emits:["toLogin"],setup(b,{emit:c}){//! ----------宣告引入------------
w();//! ----------功能------------
const p=c,s=n=>{p("toLogin",n)},d=n=>{fetch("https://api.escuelajs.co/api/v1/users/",{method:"POST",body:JSON.stringify({name:n.name,email:n.email,password:n.password,avatar:"https://picsum.photos/800"}),headers:{"Content-Type":"application/json"}}).then(a=>a.json()).then(a=>{console.log("成功",a),alert("註冊成功"),location.reload()}).catch(a=>{console.log("錯誤",a)})};return(n,a)=>{const m=v,x=S,i=$;return u(),_("section",R,[e("div",Z,[H,t(i,{onSubmit:d},{default:h(()=>[e("ul",P,[e("li",null,[G,t(m,{type:"email",name:"email",placeholder:"請輸入信箱",label:"E-mail",rules:"required|email",class:"w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"}),t(x,{name:"email",class:"text-red-500 block xl:mx-20"})]),e("li",null,[K,t(m,{type:"password",name:"password",placeholder:"請輸入包含1個英文及8位數字密碼",label:"密碼",rules:{regex:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,required:"required",min:8,max:16},class:"w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"},null,8,["rules"]),t(x,{name:"password",class:"text-red-500 block xl:mx-20"})]),e("li",null,[Q,t(m,{type:"password",name:"confirmation",placeholder:"請輸入包含1個英文及8位數字密碼",label:"確認密碼",rules:"required|confirmed:@password",class:"w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"}),t(x,{name:"confirmation",class:"text-red-500 block xl:mx-20"})]),e("li",null,[W,t(m,{type:"text",name:"name",placeholder:"請輸入姓名",label:"姓名",rules:"required",class:"w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"}),t(x,{name:"name",class:"text-red-500 block xl:mx-20"})]),e("li",X,[t(V,null,{default:h(()=>[U("註冊")]),_:1}),e("p",{class:"cursor-pointer mt-1 hover:text-yellow-700 mt-2",onClick:a[0]||(a[0]=l=>s(!1))}," 已經是會員嗎？按此登入 ")])])]),_:1})])])}}},ee=Y,oe={__name:"login",setup(b){const c=k(!1),p=s=>{c.value=s};return q(()=>{fetch("https://api.escuelajs.co/api/v1/users").then(s=>s.json()).then(s=>{console.log(s)}).catch(s=>{console.log(s)})}),(s,d)=>(u(),_(A,null,[c.value?y("",!0):(u(),f(z,{key:0,onToSignUp:p})),c.value?(u(),f(ee,{key:1,onToLogin:p})):y("",!0)],64))}};export{oe as default};