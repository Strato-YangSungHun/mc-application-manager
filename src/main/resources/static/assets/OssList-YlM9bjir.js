import{_ as R}from"./TableHeader.vue_vue_type_script_setup_true_lang-Bky8I1kS.js";import{_ as M}from"./Tabulator.vue_vue_type_style_index_0_lang-CIbQSKQB.js";import{s as p}from"./request-DPT_qPCQ.js";import{d as $,u as N,c as A,w as D,o as T,r as v,a as u,b as s,t as x,e as g,v as G,F as E,f as W,g as O,h as m,i as S}from"./index-C0RpjBRx.js";const j=()=>p.get("/ossType/list"),z=()=>p.get("/ossType/filter/list"),H=()=>p.get("/oss/list");function J(o){return p.get(`/oss/duplicate?ossName=${o.ossName}&ossUrl=${o.ossUrl}&ossUsername=${o.ossUsername}`)}function K(o){return p.post("/oss/connection-check",o)}function Q(o){return p.get("/oss/"+o)}function X(o){return p.post("/oss",o)}function Y(o){return p.patch(`/oss/${o.ossIdx}`,o)}function Z(o){return p.delete(`/oss/${o}`)}const ss={class:"modal",id:"ossForm",tabindex:"-1"},es={class:"modal-dialog modal-lg",role:"document"},ts={class:"modal-content"},os=s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),as={class:"modal-body text-left py-4"},ls={class:"mb-5"},ns={class:"mb-3"},cs=s("label",{class:"form-label required"},"OSS 타입",-1),is={class:"grid gap-0 column-gap-3"},ds=s("option",{value:0},"OSS 타입을 선택하세요.",-1),rs=["value"],us={class:"row mb-3"},ms=s("label",{class:"form-label required"},"OSS 명",-1),vs={class:"grid gap-0 column-gap-3"},ps={class:"mb-3"},_s=s("label",{class:"form-label required"},"OSS 설명",-1),bs={class:"mb-3"},fs=s("label",{class:"form-label required"},"URL",-1),gs={class:"row"},hs={class:"col"},ys=s("label",{class:"form-label required"},"OSS ID",-1),ws={class:"col"},Os=s("label",{class:"form-label required"},"OSS PW",-1),Ss={class:"col mt-4"},xs={key:1,class:"btn btn-success",style:{margin:"3px"}},ks={key:3,class:"btn btn-success"},Cs={class:"modal-footer"},Us=$({__name:"ossForm",props:{mode:{},ossIdx:{}},emits:["get-oss-list"],setup(o,{emit:h}){const n=N(),c=o,_=h,b=A(()=>c.ossIdx);D(b,async()=>{await r()}),D(()=>c.mode,async()=>{await y(c.mode)}),T(async()=>{await r()});const e=v({}),r=async()=>{if(c.mode==="new")e.value.ossTypeIdx=0,e.value.ossName="",e.value.ossDesc="",e.value.ossUrl="",e.value.ossUsername="",e.value.ossPassword="",i.value=!1,d.value=!1;else{const{data:a}=await Q(c.ossIdx);e.value=a,e.value.ossPassword=B(e.value.ossPassword),i.value=!0,d.value=!0}},f=v([]),y=async a=>{try{if(a==="new"){const{data:t}=await z();f.value=t}else{const{data:t}=await j();f.value=t}}catch(t){console.log(t)}},k=()=>{e.value.ossPassword="",d.value=!1},i=v(!1),w=async()=>{const a={ossName:e.value.ossName,ossUrl:e.value.ossUrl,ossUsername:e.value.ossUsername},{data:t}=await J(a);t?n.error("이미 사용중인 이름입니다."):(n.success("사용 가능한 이름입니다."),i.value=!0)},d=v(!1),C=async()=>{const a={ossUrl:e.value.ossUrl,ossUsername:e.value.ossUsername,ossPassword:I(e.value.ossPassword),ossTypeIdx:e.value.ossTypeIdx},{data:t}=await K(a);t?(n.success("사용 가능한 OSS입니다."),d.value=!0):n.error("사용 불가능한 OSS입니다.")},L=()=>{i.value=!1},U=()=>{d.value=!1},P=async()=>{e.value.ossPassword=I(e.value.ossPassword),c.mode==="new"?await F().then(()=>{_("get-oss-list")}):await V().then(()=>{_("get-oss-list")}),r()},F=async()=>{const{data:a}=await X(e.value);a?n.success("등록되었습니다."):n.error("등록 할 수 없습니다.")},V=async()=>{const{data:a}=await Y(e.value);a?n.success("등록되었습니다."):n.error("등록 할 수 없습니다.")},I=a=>btoa(a),B=a=>atob(a);return(a,t)=>(m(),u("div",ss,[s("div",es,[s("div",ts,[os,s("div",as,[s("h3",ls," OSS "+x(c.mode==="new"?"생성":"수정"),1),s("div",null,[s("div",ns,[cs,s("div",is,[g(s("select",{"onUpdate:modelValue":t[0]||(t[0]=l=>e.value.ossTypeIdx=l),class:"form-select p-2 g-col-12"},[ds,(m(!0),u(E,null,W(f.value,(l,q)=>(m(),u("option",{value:l.ossTypeIdx,key:q},x(l.ossTypeName),9,rs))),128))],512),[[G,e.value.ossTypeIdx]])])]),s("div",us,[ms,s("div",vs,[g(s("input",{type:"text",class:"form-control p-2 g-col-11",placeholder:"OSS 명을 입력하세요","onUpdate:modelValue":t[1]||(t[1]=l=>e.value.ossName=l),onChange:L},null,544),[[O,e.value.ossName]])])]),s("div",ps,[_s,g(s("input",{type:"text",class:"form-control p-2 g-col-11",placeholder:"OSS 설명을 입력하세요","onUpdate:modelValue":t[2]||(t[2]=l=>e.value.ossDesc=l)},null,512),[[O,e.value.ossDesc]])]),s("div",bs,[fs,g(s("input",{type:"text",class:"form-control p-2 g-col-11",placeholder:"서버 URL을 입력하세요","onUpdate:modelValue":t[3]||(t[3]=l=>e.value.ossUrl=l),onFocus:U},null,544),[[O,e.value.ossUrl]])]),s("div",gs,[s("div",hs,[ys,g(s("input",{type:"text",class:"form-control p-2 g-col-11",placeholder:"OSS 아이디를 입력하세요","onUpdate:modelValue":t[4]||(t[4]=l=>e.value.ossUsername=l),onFocus:U},null,544),[[O,e.value.ossUsername]])]),s("div",ws,[Os,g(s("input",{type:"password",class:"form-control p-2 g-col-11",placeholder:"OSS 비밀번호를 입력하세요","onUpdate:modelValue":t[5]||(t[5]=l=>e.value.ossPassword=l),onClick:k,onFocus:U},null,544),[[O,e.value.ossPassword]])]),s("div",Ss,[i.value?(m(),u("button",xs,"중복 체크")):(m(),u("button",{key:0,class:"btn btn-primary chk",onClick:w,style:{margin:"3px"}},"중복 체크")),d.value?(m(),u("button",ks,"연결 확인")):(m(),u("button",{key:2,class:"btn btn-primary",onClick:C},"연결 확인"))])])])]),s("div",Cs,[s("a",{href:"#",class:"btn btn-link link-secondary","data-bs-dismiss":"modal",onClick:t[6]||(t[6]=l=>r())}," Cancel "),s("a",{href:"#",class:"btn btn-primary ms-auto","data-bs-dismiss":"modal",onClick:t[7]||(t[7]=l=>P())},x(c.mode==="new"?"생성":"수정"),1)])])])]))}}),$s={class:"modal",id:"deleteOss",tabindex:"-1"},Ns={class:"modal-dialog modal-lg",role:"document"},Is={class:"modal-content"},Ds=s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Ts=s("div",{class:"modal-status bg-danger"},null,-1),Ls={class:"modal-body text-left py-4"},Ps=s("h3",{class:"mb-5"}," OSS 삭제 ",-1),Fs={class:"modal-footer"},Vs=s("a",{href:"#",class:"btn btn-link link-secondary","data-bs-dismiss":"modal"}," Cancel ",-1),Bs=$({__name:"deleteOss",props:{ossName:{},ossIdx:{}},emits:["get-oss-list"],setup(o,{emit:h}){const n=N(),c=o,_=h,b=async()=>{const{data:e}=await Z(c.ossIdx);e?n.success("삭제되었습니다."):n.error("삭제하지 못했습니다."),_("get-oss-list")};return(e,r)=>(m(),u("div",$s,[s("div",Ns,[s("div",Is,[Ds,Ts,s("div",Ls,[Ps,s("h4",null,x(c.ossName)+"을(를) 정말 삭제하시겠습니까?",1)]),s("div",Fs,[Vs,s("a",{href:"#",class:"btn btn-primary ms-auto","data-bs-dismiss":"modal",onClick:r[0]||(r[0]=f=>b())}," 삭제 ")])])])]))}}),qs={class:"card card-flush w-100"},Es=$({__name:"OssList",setup(o){const h=N(),n=v([]),c=v([]);T(async()=>{r(),await _()});const _=async()=>{try{const{data:i}=await H();n.value=i}catch(i){console.log(i),h.error("데이터를 가져올 수 없습니다.")}},b=v(0),e=v(""),r=()=>{c.value=[{title:"OSS Name",field:"ossName",width:400},{title:"OSS Desc",field:"ossDesc",width:500},{title:"URL",field:"ossUrl",width:600},{title:"Action",width:400,formatter:f,cellClick:function(i,w){const d=i.target,C=d==null?void 0:d.getAttribute("id");b.value=w.getRow().getData().ossIdx,C==="edit-btn"?y.value="edit":e.value=w.getRow().getData().ossName}}]},f=()=>`
  <div>
    <button
      class='btn btn-primary d-none d-sm-inline-block mr-5'
      id='edit-btn'
      data-bs-toggle='modal' 
      data-bs-target='#ossForm'>
      수정
    </button>
    <button
      class='btn btn-danger d-none d-sm-inline-block'
      id='delete-btn'
      data-bs-toggle='modal' 
      data-bs-target='#deleteOss'>
      삭제
    </button>
  </div>`,y=v("new"),k=()=>{b.value=0,y.value="new"};return(i,w)=>(m(),u("div",qs,[S(R,{"header-title":"OSS","new-btn-title":"New OSS","popup-flag":!0,"popup-target":"#ossForm",onClickNewBtn:k}),S(M,{columns:c.value,"table-data":n.value},null,8,["columns","table-data"]),S(Us,{mode:y.value,"oss-idx":b.value,onGetOssList:_},null,8,["mode","oss-idx"]),S(Bs,{"oss-name":e.value,"oss-idx":b.value,onGetOssList:_},null,8,["oss-name","oss-idx"])]))}});export{Es as default};