import{g as d,h as i,i as k,o as u,c as m,a as e,j as _,v as w,l as c,n as g}from"./index.712d378f.js";const y=e("h2",{class:"text-center border border-dark border-2 py-4 bg-white mb-4 position-relative border-overlap border-overlap-start fw-bold"},"\u5F35\u8CBC\u52D5\u614B",-1),x={class:"p-8 shadow-lg border border-dark border-2 rounded bg-white"},F=e("label",{for:"newsFeedTextarea",class:"mb-1 d-block"},"\u8CBC\u6587\u5167\u5BB9",-1),A={key:0,class:"mb-8"},B=["src","alt"],C={class:"d-flex justify-content-center"},T=["disabled"],I={setup($){const b="https://metawall.herokuapp.com/posts",h="https://metawall.herokuapp.com/user/profile",f=localStorage.getItem("metawall");d.defaults.headers.common.Authorization=`Bearer ${f}`;const o=i(""),r=i(null),l=k({}),v=async()=>{const n=i("");await d.get(h).then(s=>n.value=s.data.data._id);const a=Array.from(r.value.files),t=new FormData;a.forEach(s=>{t.append("photos",s)}),t.append("user",n),t.append("content",o.value);const p={method:"post",url:b,mimeType:"multipart/form-data"};p.data=t,d(p).then(s=>{s.data.status==="success"&&(l.link="",o.value="")})};return(n,a)=>(u(),m("div",null,[y,e("div",x,[F,_(e("textarea",{"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t),name:"",id:"newsFeedTextarea",cols:"30",rows:"10",class:"w-100 mb-4 border border-dark border-2"},null,512),[[w,o.value]]),e("input",{ref_key:"imageFile",ref:r,type:"file",name:"photos",class:"d-none btn btn-dark px-8 py-1 mb-4",multiple:"multiple"},null,512),e("input",{type:"button",value:"\u4E0A\u50B3\u5716\u7247",class:"btn btn-dark px-8 py-1 mb-4",onClick:a[1]||(a[1]=t=>r.value.click())}),c(l).link?(u(),m("div",A,[e("img",{src:c(l).link,alt:c(l).name,class:"img-fluid"},null,8,B)])):g("",!0),e("div",C,[e("input",{type:"button",class:"w-50 mx-auto py-4 btn btn-secondary bg-black-50",value:"\u9001\u51FA\u8CBC\u6587",onClick:v,disabled:!o.value},null,8,T)])])]))}};export{I as default};
