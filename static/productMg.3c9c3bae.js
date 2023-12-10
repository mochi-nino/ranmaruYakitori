import{_ as te,h as U,r as _,i as j,j as le,c as d,b as r,a,k as $,v as ae,w as i,l as y,m as b,n as se,o,d as h,t as k,q as O,s as B,x as C,y as P,p as oe,e as ce,g as ne,E as de,F as re}from"./entry.eef69a39.js";import{b as ue}from"./backSlider.7be06f02.js";import{b as v}from"./button.06041305.js";import"./nuxt-link.912060e2.js";const w=I=>(oe("data-v-cd761fa8"),I=I(),ce(),I),ie={class:"flex items-center justify-between gap-12 h-[100vh] px-10 m-auto"},pe={class:"text-xl bg-slate-100 w-full relative"},ge=w(()=>a("h1",{class:"bg-yellow-900 py-3 text-center text-3xl"},"商品管理",-1)),he={class:"absolute right-5 top-5"},ve={class:"absolute left-5 top-4"},xe={class:"grid grid-cols-[60px,250px,1fr,150px,1fr,100px] items-center justify-center text-center border-y-2 border-black p-2 mb-2"},fe={class:"h-[800px] overflow-y-auto overflow-x-hidden relative",id:"scrollArea"},_e={class:"w-[250px] m-auto relative flex flex-col items-center"},me=["src","alt"],ye=["onClick"],be=w(()=>a("p",{class:"text-white font-bold"},"更換圖片",-1)),ke=[be],we={key:0,src:"https://i.imgur.com/rn5Zlsq.png",alt:"404",class:"w-[250px] h-[250px] object-cover object-center border-2 border-black/30"},Ve={key:1,class:"flex justify-center gap-5 text-sm my-2"},je={class:"fixed w-[800px] h-[400px] top-0 bottom-0 left-[15%] right-0 m-auto z-50 bg-gray-200 border-2 border-black"},Ce=w(()=>a("h3",{class:"bg-yellow-900 text-3xl text-center py-2"},"圖片",-1)),Ie=w(()=>a("p",{class:"text-center mt-10 font-bold text-red-400"}," 請輸入含有【.jpg，.jpeg，.png】的圖片網址 ",-1)),Se={class:"grid grid-cols-[100px,1fr,60px] mx-auto gap-2 mt-16"},Ue=w(()=>a("p",{class:"text-right"},"網址：",-1)),$e={class:"text-center mt-16"},Pe={class:"flex justify-center items-center flex-col"},Te=["value"],Ne={class:"flex justify-center items-center gap-2"},Ee=w(()=>a("p",null,"$",-1)),Be={class:"flex items-center"},Me={key:0,class:"ml-auto px-2"},Fe={key:1,class:"flex flex-col items-end px-2"},Le={__name:"productMg",setup(I){const D=U(["編號","商品圖片","商品分類/名稱","商品價格","商品描述","",""]),u=U([]),T=U({data:[]}),S=_(""),J=_(0),x=_(0),z=U({id:"",idx:0,newImg:[null,null,null]}),f=_(!1),V=_(!1),p=_(!1),c=_(""),A=j(()=>S.value===""?u:u.filter(t=>t.title.toLowerCase().includes(S.value.toLowerCase()))),M=t=>{x.value=t,p.value=!p.value},q=t=>{x.value=t},G=j(()=>(t,l)=>c.value===t?x.value===l:J.value===l),F=(t,l)=>{t?(c.value="",p.value=!1,m()):(c.value=l,x.value=0)},H=j(()=>t=>c.value===t?"bg-yellow-700/30":null),Z=j(()=>t=>c.value===t?"productsImg":null),L=j(()=>t=>f.value?t?"新增":"取消":t?"確定":"刪除"),K=async()=>{u.push({id:u[u.length-1].id+1,title:"商品名",price:"價錢",description:"描述",images:[],category:{id:1,name:"類別"}}),c.value=u[u.length-1].id,f.value=!0,await se(()=>{const t=document.getElementById("scrollArea");t.scrollTo(0,t.scrollHeight)})},Q=async t=>{await fetch("https://api.escuelajs.co/api/v1/products/",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(l=>l.json()).then(l=>{alert("新增成功"),m(),c.value=""}).catch(l=>{console.log(l)}),f.value=!1},R=async t=>{await fetch(`https://api.escuelajs.co/api/v1/products/${t.id}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(l=>l.json()).then(l=>{alert("修改成功"),m(),c.value="",p.value=!1}).catch(l=>{console.log(l)}),V.value=!1},W=t=>{f.value?(u.splice(u.length-1,1),f.value=!1):confirm("確定要刪除嗎？")&&fetch(`https://api.escuelajs.co/api/v1/products/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(l=>l.json()).then(l=>{alert("刪除成功"),m()}).catch(l=>{console.log(l)})},m=()=>{fetch("https://api.escuelajs.co/api/v1/products").then(t=>t.json()).then(t=>{if(T.data.length<=0){const l=new Set(t.map(g=>JSON.stringify({id:g.category.id,name:g.category.name})));T.data=[...l].map(JSON.parse)}u.length=0,u.push(...t)}).catch(t=>{console.log(t)})},X=t=>{console.log(t),f.value?Q(t):R(t)};return le(()=>{m()}),(t,l)=>{const g=ne,Y=de,ee=re;return o(),d("section",ie,[r(ue),a("div",pe,[ge,a("div",he,[$(a("input",{type:"text",placeholder:"搜尋商品名稱",class:"px-2 text-black","onUpdate:modelValue":l[0]||(l[0]=e=>S.value=e)},null,512),[[ae,S.value]])]),a("div",ve,[r(v,{class:"!bg-slate-100 text-black !w-[80px] !h-[30px] text-lg",onClick:K},{default:i(()=>[h("新增+")]),_:1})]),a("ul",null,[a("li",xe,[(o(!0),d(y,null,b(D,(e,N)=>(o(),d("p",{key:N},k(e),1))),128))]),a("li",fe,[(o(!0),d(y,null,b(A.value,(e,N)=>(o(),d("div",{key:N},[r(ee,{onSubmit:X},{default:i(()=>[a("div",{class:O(["mb-2 grid grid-cols-[60px,250px,1fr,150px,1fr,100px] items-center justify-center text-center px-2 text-lg mb-6",H.value(e.id)])},[a("p",null,k(e.id),1),r(g,{type:"text",name:"id",placeholder:e.id,class:"hidden",modelValue:e.id,"onUpdate:modelValue":s=>e.id=s},null,8,["placeholder","modelValue","onUpdate:modelValue"]),a("div",_e,[(o(!0),d(y,null,b(e.images,(s,n)=>(o(),d("div",{class:O(["relative",Z.value(e.id)]),key:n},[$(a("img",{src:s,alt:e.title,class:"w-[200px] h-[200px] object-cover object-center border-2 border-black/30"},null,8,me),[[B,G.value(e.id,n)]]),a("div",{class:"bg-gray-900/80 w-full h-full flex items-center justify-center absolute inset-0 m-auto cursor-pointer changeProductImg",onClick:E=>M(n)},ke,8,ye)],2))),128)),e.images.length<3&&x.value===3&&c.value===e.id?(o(),d("img",we)):C("",!0),c.value===e.id?(o(),d("div",Ve,[(o(!0),d(y,null,b(e.images,(s,n)=>(o(),P(v,{key:n,class:"!w-[25px] !h-[25px]",type:"button",onClick:E=>q(n)},{default:i(()=>[h(k(n+1),1)]),_:2},1032,["onClick"]))),128)),e.images.length<3&&c.value===e.id?(o(),P(v,{key:0,class:"!w-[25px] !h-[25px]",type:"button",onClick:s=>(M(e.images.length),V.value=!0)},{default:i(()=>[h("+")]),_:2},1032,["onClick"])):C("",!0)])):C("",!0)]),$(a("div",je,[Ce,Ie,a("div",Se,[Ue,(o(!0),d(y,null,b(z.newImg,(s,n)=>$((o(),d("div",{key:n},[e.images.length>n||V.value&&e.images.length<=1||V.value&&x.value===2?(o(),P(g,{key:0,type:"url",name:`images[${n}]`,rules:{regex:/^(https?:\/\/.*\.(?:png|jpg|jpeg|))$/},label:"網址",class:"w-full h-[20px] px-2 py-4 text-black border border-gray-400/50",modelValue:e.images[n],"onUpdate:modelValue":E=>e.images[n]=E},null,8,["name","rules","modelValue","onUpdate:modelValue"])):C("",!0),r(Y,{name:`images[${n}]`,class:"text-red-500 mx-1 errors-msg"},null,8,["name"])])),[[B,x.value===n]])),128))]),a("div",$e,[r(v,{type:"button",onClick:l[1]||(l[1]=s=>(p.value=!p.value,V.value=!1))},{default:i(()=>[h("確定")]),_:1}),r(v,{type:"button",onClick:l[2]||(l[2]=s=>(p.value=!p.value,m())),class:"ml-10"},{default:i(()=>[h("取消")]),_:1})])],512),[[B,p.value&&c.value===e.id]]),a("div",Pe,[r(g,{as:"select",name:"categoryId",class:"block mb-3 px-2 py-[2px] text-black",disabled:c.value!==e.id,modelValue:e.category.id,"onUpdate:modelValue":s=>e.category.id=s},{default:i(()=>[(o(!0),d(y,null,b(T.data,(s,n)=>(o(),d("option",{key:n,value:s.id},k(s.name),9,Te))),128))]),_:2},1032,["disabled","modelValue","onUpdate:modelValue"]),r(g,{type:"text",name:"title",placeholder:e.title,class:"block px-2 py-[2px] text-center w-[90%]",disabled:c.value!==e.id,modelValue:e.title,"onUpdate:modelValue":s=>e.title=s},null,8,["placeholder","disabled","modelValue","onUpdate:modelValue"])]),a("div",Ne,[Ee,r(g,{type:"text",name:"price",placeholder:e.price,class:"px-2 py-[2px] w-[80px] text-center",disabled:c.value!==e.id,modelValue:e.price,"onUpdate:modelValue":s=>e.price=s},null,8,["placeholder","disabled","modelValue","onUpdate:modelValue"])]),a("div",Be,[r(g,{as:"textarea",name:"description",placeholder:e.description,style:{resize:"none"},class:"px-2 py-[5px] text-black w-full h-[200px] overflow-y-auto",modelValue:e.description,"onUpdate:modelValue":s=>e.description=s,disabled:c.value!==e.id},null,8,["placeholder","modelValue","onUpdate:modelValue","disabled"])]),c.value!==e.id?(o(),d("div",Me,[r(v,{class:"!w-[80px] !text-lg",type:"button",onClick:s=>F(0,e.id)},{default:i(()=>[h("更改")]),_:2},1032,["onClick"])])):(o(),d("div",Fe,[r(v,{class:"!w-[80px] !text-lg mb-4"},{default:i(()=>[h(k(L.value(1)),1)]),_:1}),f.value?C("",!0):(o(),P(v,{key:0,class:"!w-[80px] !text-lg",type:"button",onClick:s=>F(1,e.id)},{default:i(()=>[h("取消")]),_:2},1032,["onClick"])),r(v,{class:"!w-[80px] !text-lg mt-4",type:"button",onClick:s=>W(e.id)},{default:i(()=>[h(k(L.value(0)),1)]),_:2},1032,["onClick"])]))],2)]),_:2},1024)]))),128))])])])])}}},Ae=te(Le,[["__scopeId","data-v-cd761fa8"]]);export{Ae as default};
