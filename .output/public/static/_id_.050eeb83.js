import{y as z,u as A,r as p,z as b,n as y,A as G,c as o,b as r,w as m,B as H,o as a,a as e,C as w,D,F as v,s as g,t as u,E as _,G as L,v as T,d as j,H as J,I as K}from"./entry.5d0cda90.js";import{_ as Q}from"./nuxt-link.a0ad3982.js";import{b as q}from"./button.fdead718.js";const W={class:"xl:w-[1280px] m-auto py-10"},X={class:"w-[80%] mx-auto"},Z=e("h2",{class:"text-3xl text-center bg-yellow-900/75 py-3"},"配送",-1),ee={class:"bg-white p-16 flex items-center gap-5 mb-5"},te=e("label",{for:"homeDelivery",class:"text-lg"},"宅配",-1),se=e("h2",{class:"text-3xl text-center bg-yellow-900/75 py-3"},"付款",-1),le={class:"bg-white p-16"},oe=["value","id"],ae=["for"],re={key:0},ne={class:"grid grid-cols-[150px,1fr] gap-2 items-center justify-center mb-4"},ie=e("label",{class:"text-right"},"信用卡卡號：",-1),ce={key:0,class:"grid grid-cols-[150px,1fr] gap-2 items-center justify-center mb-4"},de=e("div",null,null,-1),ue=e("p",{class:"text-red-500"},"卡號格式錯誤",-1),pe=[de,ue],me={class:"grid grid-cols-[150px,1fr] gap-2 items-center justify-center mb-4"},_e=e("label",{class:"text-right"},"有效期限：",-1),xe=e("option",{value:"default",disabled:""},"月",-1),he=["value"],ye=e("option",{value:"default",disabled:""},"年",-1),ve=["value"],ge={class:"grid grid-cols-[150px,1fr] gap-2 items-center justify-center mb-4"},fe=e("label",{class:"text-right"},"安全碼：",-1),be=e("h2",{class:"text-3xl text-center bg-yellow-900/75 py-3 mt-5"}," 填寫資料 ",-1),we={class:"bg-gray-200 flex justify-center items-center flex-col gap-10 p-16"},ke=["for"],Ve={class:"bg-yellow-900/75 py-5 text-lg mt-5"},Ie={class:"xl:w-[150px] ml-auto"},Me={class:"flex items-center gap-2 m"},De=e("p",{class:"text-white"},"小計：",-1),Te={class:"text-white"},je={class:"flex items-center gap-2 my-5"},qe=e("p",{class:"text-white"},"運費：",-1),Fe={class:"text-white"},Ne={class:"flex items-center gap-2"},Be=e("p",{class:"text-white"},"總計：",-1),Pe={class:"text-white"},Ee={class:"text-right mt-5"},Oe={__name:"[id]",setup(Ue){const F=z(),f=A(),x=p("宅配"),N=b([{type:"貨到付款"},{type:"信用卡"}]),c=p(""),i=p(""),k=p("default"),V=p("default"),B=b(["01","02","03","04","05","06","07","08","09","10","11","12"]),P=b([{title:"收件人",type:"text",name:"recipient",rules:"required"},{title:"Email",type:"email",name:"email",rules:"required|email"},{title:"手機號碼",type:"text",name:"phoneNumber",rules:"required|min:10|max:10"},{title:"收件地址",type:"text",name:"address",rules:"required"}]),I=p(0),E=y(()=>{let l=new Date().getFullYear(),s=[l];for(let n=0;n<15;n++)l+=1,s.push(l);return s}),U=y(()=>c.value==="信用卡"),C=l=>{l||(i.value=i.value.replace(/[^0-9]/g,""))},M=y(()=>{if(x.value==="宅配")return 60}),S=y(()=>{const l=f.cartTotalPrice.value+M.value;return I.value=l,l}),$=l=>{if(!c.value)alert("請選擇付款方式");else if(c.value==="信用卡"&&i.value.length<16)alert("信用卡格式錯誤");else{const s={...l},n={paymentMethod:c.value,deliveryMethod:x.value,orderTotalPrice:I.value};if(Object.assign(s,n),console.log(s),c.value==="信用卡"){const h={cardID:i.value};Object.assign(s,h)}f.getBuyerInfo(s),localStorage.removeItem("cart"),F.push("/cart/payment/finsh")}};return G(()=>{}),(l,s)=>{const n=J,h=K,O=Q,R=H;return a(),o("section",W,[r(R,{onSubmit:$},{default:m(()=>[e("div",X,[Z,e("div",ee,[w(e("input",{type:"radio",value:"宅配",class:"w-[18px] h-[18px] rounded-[50px]",id:"homeDelivery","onUpdate:modelValue":s[0]||(s[0]=t=>x.value=t)},null,512),[[D,x.value]]),te]),se,e("ul",le,[(a(!0),o(v,null,g(N,(t,d)=>(a(),o("li",{key:d,class:"flex items-center gap-5 mb-5"},[w(e("input",{type:"radio",value:t.type,"onUpdate:modelValue":s[1]||(s[1]=Y=>c.value=Y),name:"payType",class:"w-[18px] h-[18px] rounded-[50px]",id:t.type},null,8,oe),[[D,c.value]]),e("label",{for:t.type,class:"text-lg"},u(t.type),9,ae)]))),128)),_(U)?(a(),o("li",re,[e("div",ne,[ie,w(e("input",{type:"text",name:"cardID",placeholder:"請輸入卡號",label:"卡號",maxlength:"16",rules:"required","onUpdate:modelValue":s[2]||(s[2]=t=>i.value=t),onInput:s[3]||(s[3]=t=>C(0)),class:"xl:w-[300px] h-[40px] px-2 py-4 text-black border border-gray-400/50"},null,544),[[L,i.value]])]),i.value.length<16&&i.value.length!==0?(a(),o("div",ce,pe)):T("",!0),e("div",me,[_e,e("div",null,[r(n,{name:"mounth",as:"select",class:"text-black border border-gray-400/50 mr-2",modelValue:V.value,"onUpdate:modelValue":s[4]||(s[4]=t=>V.value=t),rules:"required",label:"月份"},{default:m(()=>[xe,(a(!0),o(v,null,g(B,(t,d)=>(a(),o("option",{key:d,value:t},u(t),9,he))),128))]),_:1},8,["modelValue"]),r(n,{name:"years",class:"text-black border border-gray-400/50",modelValue:k.value,"onUpdate:modelValue":s[5]||(s[5]=t=>k.value=t),as:"select",label:"年份"},{default:m(()=>[ye,(a(!0),o(v,null,g(_(E),(t,d)=>(a(),o("option",{key:d,value:t},u(t),9,ve))),128))]),_:1},8,["modelValue"])])]),e("div",ge,[fe,e("div",null,[r(n,{type:"text",name:"number",placeholder:"安全碼",label:"安全碼",maxlength:"4",rules:"required|max:4",class:"w-[100px] h-[40px] px-2 py-4 text-black border border-gray-400/50"}),r(h,{name:"number",class:"text-red-500 ml-2"})])])])):T("",!0)]),be,e("ul",we,[(a(!0),o(v,null,g(P,(t,d)=>(a(),o("li",{class:"",key:d},[e("label",{for:t.title,class:"xl:w-[80px] inline-block text-right mr-2"},u(t.title)+"：",9,ke),r(n,{type:t.type,name:t.name,placeholder:t.title,id:t.name,label:t.title,rules:t.rules,class:"w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"},null,8,["type","name","placeholder","id","label","rules"]),r(h,{name:t.name,class:"text-red-500 block xl:mx-24"},null,8,["name"])]))),128))]),e("div",Ve,[e("ol",Ie,[e("li",Me,[De,e("p",Te,"$"+u(_(f).cartTotalPrice),1)]),e("li",je,[qe,e("p",Fe,"$"+u(_(M)),1)]),e("li",Ne,[Be,e("p",Pe,"$"+u(_(S)),1)])])]),e("div",Ee,[r(O,{to:"/cart/"},{default:m(()=>[r(q,{class:"mt-5 mr-5"},{default:m(()=>[j("返回")]),_:1})]),_:1}),r(q,{class:"mt-5 mr-5"},{default:m(()=>[j("送出")]),_:1})])])]),_:1})])}}};export{Oe as default};
