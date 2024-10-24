import{d as Q,u as X,r as u,c as K,w as q,o as ne,z as I,a as s,b as e,e as b,g as N,v as j,F as $,f as M,s as J,h as l,p as ce,k as de,l as P,j as V,t as h,i as se,A as ue,B as pe}from"./index-RvC_hAC0.js";import{_ as oe}from"./lodash-DDnJdRu6.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";const y=g=>(ce("data-v-5308cd30"),g=g(),de(),g),me={class:"modal",id:"modal-form",tabindex:"-1"},_e={class:"modal-dialog modal-lg",role:"document"},he={class:"modal-content"},ve=y(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title"},"Create New Software catalog"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),ge={class:"modal-body",style:{"max-height":"calc(100vh - 200px)","overflow-y":"auto"}},fe={class:"mb-3"},be=y(()=>e("label",{class:"form-label"},"Title",-1)),we={class:"mb-3"},ye=y(()=>e("label",{class:"form-label"},"Summary",-1)),ke={class:"mb-3"},$e=y(()=>e("label",{class:"form-label"},"Icon",-1)),Ce={class:"mb-3"},xe=y(()=>e("label",{class:"form-label"},"Category",-1)),Ie=P('<option value="SERVER" selected data-v-5308cd30>SERVER</option><option value="WAS" data-v-5308cd30>WAS</option><option value="DB" data-v-5308cd30>DB</option><option value="UTIL" data-v-5308cd30>UTIL</option><option value="OBSERVABILITY" data-v-5308cd30>OBSERVABILITY</option>',5),Se=[Ie],Me={class:"mb-3"},Ve=y(()=>e("label",{class:"form-label"},"Description",-1)),Ue={class:"mb-3"},De=y(()=>e("label",{class:"form-label"},"Recommended Server Spec",-1)),Te={style:{display:"flex","justify-content":"space-between"}},Ne=y(()=>e("label",{class:"form-label required"},"CPU",-1)),Ae=y(()=>e("label",{class:"form-label required"},"MEMORY",-1)),Re=y(()=>e("label",{class:"form-label required"},"DISK",-1)),Le={class:"col-lg-6"},Ee={class:"mb-3"},He=y(()=>e("label",{class:"form-label"},"Reference",-1)),je=["onUpdate:modelValue"],Be=P('<option value="URL" data-v-5308cd30>URL</option><option value="MANIFEST" data-v-5308cd30>MANIFEST</option><option value="WORKFLOW" data-v-5308cd30>WORKFLOW</option><option value="IMAGE" data-v-5308cd30>IMAGE</option><option value="HOMEPAGE" data-v-5308cd30>HOMEPAGE</option><option value="TAG" data-v-5308cd30>TAG</option><option value="ETC" data-v-5308cd30>ETC</option>',7),Oe=[Be],Fe={class:"col-lg-6"},Ge={class:"mb-3"},Pe=y(()=>e("label",{class:"form-label"}," ",-1)),ze=["onUpdate:modelValue"],We={class:"mb-3"},Ye={class:"input-form"},Ke=["onUpdate:modelValue"],qe={class:"btn-list"},Je={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-plus",style:{margin:"0 !important"}},Qe=y(()=>e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1)),Xe=y(()=>e("path",{d:"M12 5l0 14"},null,-1)),Ze=y(()=>e("path",{d:"M5 12l14 0"},null,-1)),et=[Qe,Xe,Ze],tt=["onClick"],at={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-minus",style:{margin:"0 !important"}},st=y(()=>e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1)),lt=y(()=>e("path",{d:"M5 12l14 0"},null,-1)),ot=[st,lt],nt=y(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-plus",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M12 5l0 14"}),e("path",{d:"M5 12l14 0"})],-1)),le="http://192.168.6.30:18084",it=Q({__name:"softwareCatalogForm",props:{mode:{},catalogIdx:{}},emits:["get-list"],setup(g,{emit:k}){const d=X(),c=u({}),v=u([]),U=u([]);window.location.host.split(":");const o=k,i=g,C=K(()=>i.catalogIdx);q(C,async()=>{await f()}),ne(async()=>{await f()});const f=async()=>{i.mode=="update"?await H():(c.value={catalogIdx:null,catalogTitle:"",catalogDescription:"",catalogSummary:"",catalogCategory:"",catalogRefData:[]},v.value=[],v.value.push({catalogRefIdx:null,catalogIdx:null,referncetIdx:0,referenceValue:"",referenceDescription:"",referenceType:"URL"}))},H=async()=>{try{await I.get(le+"/catalog/software/"+i.catalogIdx).then(({data:p})=>{c.value=p,p.catalogRefData.forEach(r=>{r.referenceType!==null&&(r.referenceType=r.referenceType.toUpperCase())}),v.value=p.catalogRefData})}catch(p){console.log(p),d.error("데이터를 가져올 수 없습니다.")}},w=()=>{console.log("addRef"),v.value.push({catalogRefIdx:null,catalogIdx:null,referncetIdx:0,referenceValue:"",referenceDescription:"",referenceType:"URL"})},D=p=>{v.value.length!==1&&v.value.splice(p,1)},A=p=>{U.value=p.target.files[0]},R=async()=>{const p=new FormData;if(p.append("iconFile",U.value),c.value.catalogRefData=v.value,p.append("catalogDto",new Blob([JSON.stringify(c.value)],{type:"application/json"})),i.mode=="new"){const r=await I.post(le+"/catalog/software",p,{headers:{"Content-Type":"multipart/form-data"}});r.data?r.data.data==null?(d.error("등록 할 수 없습니다."),f()):(d.success("등록되었습니다."),o("get-list")):(d.error("등록 할 수 없습니다."),f())}else(await I.put(le+"/catalog/software",p,{headers:{"Content-Type":"multipart/form-data"}})).data?(d.success("수정되었습니다."),o("get-list")):(d.error("수정 할 수 없습니다."),f())};return(p,r)=>(l(),s("div",me,[e("div",_e,[e("div",he,[ve,e("div",ge,[e("div",fe,[be,b(e("input",{type:"text",class:"form-control",id:"sc-title",name:"title",placeholder:"Application name","onUpdate:modelValue":r[0]||(r[0]=_=>c.value.catalogTitle=_)},null,512),[[N,c.value.catalogTitle]])]),e("div",we,[ye,b(e("input",{type:"text",class:"form-control",id:"sc-summary",name:"summary",placeholder:"Application summary","onUpdate:modelValue":r[1]||(r[1]=_=>c.value.catalogSummary=_)},null,512),[[N,c.value.catalogSummary]])]),e("div",ke,[$e,e("input",{type:"file",class:"form-control",id:"sc-icon",name:"icon",placeholder:"Icon File",onChange:A},null,32)]),e("div",Ce,[xe,b(e("select",{class:"form-select",id:"sc-category","onUpdate:modelValue":r[2]||(r[2]=_=>c.value.catalogCategory=_)},Se,512),[[j,c.value.catalogCategory]])]),e("div",Me,[Ve,b(e("textarea",{class:"form-control",rows:"5",id:"sc-desc","onUpdate:modelValue":r[3]||(r[3]=_=>c.value.catalogDescription=_)},null,512),[[N,c.value.catalogDescription]])]),e("div",Ue,[De,e("div",Te,[e("div",null,[Ne,b(e("input",{type:"number",class:"form-control w-90-per",placeholder:"2","onUpdate:modelValue":r[4]||(r[4]=_=>c.value.recommendedCpu=_)},null,512),[[N,c.value.recommendedCpu]])]),e("div",null,[Ae,b(e("input",{type:"number",class:"form-control w-90-per",placeholder:"4","onUpdate:modelValue":r[5]||(r[5]=_=>c.value.recommendedMemory=_)},null,512),[[N,c.value.recommendedMemory]])]),e("div",null,[Re,b(e("input",{type:"number",class:"form-control w-90-per",placeholder:"20","onUpdate:modelValue":r[6]||(r[6]=_=>c.value.recommendedDisk=_)},null,512),[[N,c.value.recommendedDisk]])])])]),(l(!0),s($,null,M(v.value,(_,L)=>(l(),s("div",{class:"row",id:"sc-ref",key:L},[e("div",Le,[e("div",Ee,[He,b(e("select",{class:"form-select",id:"sc-reference-1","onUpdate:modelValue":T=>_.referenceType=T},Oe,8,je),[[j,_.referenceType]])])]),e("div",Fe,[e("div",Ge,[Pe,b(e("input",{type:"text",class:"form-control",id:"sc-ref-value-1",name:"refValue",placeholder:"Ref value","onUpdate:modelValue":T=>_.referenceValue=T},null,8,ze),[[N,_.referenceValue]])])]),e("div",We,[e("div",Ye,[b(e("input",{type:"text",class:"form-control w-80-per",id:"sc-ref-desc-1",name:"refDescription",placeholder:"Ref Description","onUpdate:modelValue":T=>_.referenceDescription=T},null,8,Ke),[[N,_.referenceDescription]]),e("div",qe,[e("button",{class:"btn btn-primary",onClick:w,style:{"text-align":"center !important"}},[(l(),s("svg",Je,et))]),e("button",{class:"btn btn-primary",onClick:T=>D(L)},[(l(),s("svg",at,ot))],8,tt)])])])]))),128))]),e("div",{class:"modal-footer"},[e("a",{class:"btn btn-link link-secondary","data-bs-dismiss":"modal",onClick:f}," Cancel "),e("a",{class:"btn btn-primary ms-auto","data-bs-dismiss":"modal",onClick:R},[nt,J(" Create New Software catalog ")])])])])]))}}),ct=re(it,[["__scopeId","data-v-5308cd30"]]),dt={class:"modal",id:"softwareCatalogLog",tabindex:"-1"},rt={class:"modal-dialog modal-xl",role:"document"},ut={class:"modal-content"},pt=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),mt={class:"modal-body text-left py-4"},_t={class:"mb-5"},ht={key:0,class:"spinner-border",role:"status"},vt=e("span",{class:"visually-hidden"},"Loading...",-1),gt=[vt],ft={key:0},bt=e("p",{class:"text-secondary"},"No Data",-1),wt=[bt],yt={class:"card mb-3"},kt=["onClick"],$t={class:"card-title"},Ct={key:0,class:"card-body"},xt=["value"],It="http://192.168.6.30:18084",St=Q({__name:"softwareCatalogLog",props:{jobName:{}},setup(g){X();const k=g,d=u(!1);window.location.host.split(":");const c=K(()=>k.jobName);q(c,async()=>{d.value=!1,await U()});const v=u([]),U=async()=>{v.value=[];const f=await I.get(It+"/ape/log/"+c.value);v.value=f.data.data,d.value=!0},o=()=>{v.value=[],i.value=1},i=u(1),C=f=>{i.value===f?i.value=0:i.value=f};return(f,H)=>(l(),s("div",dt,[e("div",rt,[e("div",ut,[pt,e("div",mt,[e("h3",_t,[J(" Build Log "),d.value?V("",!0):(l(),s("div",ht,gt))]),e("div",null,[v.value.length<=0?(l(),s("div",ft,wt)):(l(!0),s($,{key:1},M(v.value,w=>(l(),s("div",{key:w.buildIdx},[e("div",yt,[e("div",{class:"card-header",onClick:D=>C(w.buildIdx),style:{cursor:"pointer"}},[e("h3",$t,h(w.buildIdx),1)],8,kt),i.value===w.buildIdx?(l(),s("div",Ct,[e("textarea",{value:w.buildLog,disabled:"",style:{width:"100%"},rows:"20"},null,8,xt)])):V("",!0)])]))),128))])]),e("div",{class:"modal-footer"},[e("a",{class:"btn btn-link link-secondary","data-bs-dismiss":"modal",onClick:o}," Cancel ")])])])]))}}),E=g=>(ce("data-v-b0d479e9"),g=g(),de(),g),Mt={class:"modal",id:"install-form",tabindex:"-1"},Vt={class:"modal-dialog modal-lg",role:"document"},Ut={class:"modal-content"},Dt={class:"modal-header"},Tt={class:"modal-title"},Nt={class:"modal-body",style:{"max-height":"calc(100vh - 200px)","overflow-y":"auto"}},At={class:"mb-3"},Rt=E(()=>e("label",{class:"form-label"},"Namespace",-1)),Lt={key:0,class:"text-muted"},Et={key:1,class:"text-muted"},Ht=["value"],jt={value:"selectNsId"},Bt={class:"mb-3"},Ot=E(()=>e("label",{class:"form-label"},"MCI Name",-1)),Ft={key:0,class:"text-muted"},Gt={key:1,class:"text-muted"},Pt=["disabled"],zt=["value"],Wt={class:"mb-3"},Yt=E(()=>e("label",{class:"form-label"},"VM Name",-1)),Kt=E(()=>e("p",{class:"text-muted"},"Select the virtual machine (VM) within the chosen multi-cloud infrastructure where the application will be deployed",-1)),qt=["disabled"],Jt=["value"],Qt={class:"mb-3"},Xt=E(()=>e("label",{class:"form-label"},"Application",-1)),Zt=E(()=>e("p",{class:"text-muted"},"applications to install (e.g. nginx,tomcat,mariadb,redis,grafana,prometheus)",-1)),ea={class:"mb-3"},ta=E(()=>e("label",{class:"form-label"},"Namespace",-1)),aa={key:0,class:"text-muted"},sa={key:1,class:"text-muted"},la=["value"],oa={value:"selectNsId"},na={class:"mb-3"},ia=E(()=>e("label",{class:"form-label"},"ClusterName",-1)),ca={key:0,class:"text-muted"},da={key:1,class:"text-muted"},ra=["disabled"],ua=["value"],pa={class:"mb-3"},ma=E(()=>e("label",{class:"form-label"},"Helm chart",-1)),_a=E(()=>e("p",{class:"text-muted"},"Helm Charts to Install (e.g. nginx,tomcat,mariadb,redis,grafana,prometheus)",-1)),ha={class:"modal-footer",style:{display:"flex","justify-content":"space-between"}},va=["disabled"],ga=["disabled"],B="http://192.168.6.30:18084",fa=Q({__name:"applicationInstallationForm",props:{nsId:{},title:{},applicationName:{},catalogIdx:{}},setup(g){window.location.host.split(":");const k=X(),d=g,c=K(()=>d.title),v=K(()=>d.applicationName),U=u(""),o=u(""),i=u(""),C=u([]),f=u([]),H=u([]),w=u(""),D=u(""),A=u([]),R=u(""),p=u(""),r=u(!0);q(v,async()=>{await L()}),q(c,async()=>{U.value=_(d.title),o.value=d.title,await L()}),ne(async()=>{await L()});const _=m=>m.split("_").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" "),L=async()=>{p.value=d.applicationName,oe.isEmpty(d.nsId)?await T():i.value=d.nsId,o.value==="vm_application_uninstall"||o.value==="helm_application_uninstall"?r.value=!1:r.value=!0},T=async()=>{const m=await I.get(B+"/cbtumblebug/ns");C.value=m.data,C.value.length>0&&(i.value=C.value[0].name,o.value=="vm_application_install"||o.value=="vm_application_uninstall"?await O():await F()),oe.isEmpty(i.value)||(o.value=="vm_application_install"||o.value=="vm_application_uninstall"?await O():await F())},O=async()=>{const m=await I.get(B+"/cbtumblebug/ns/"+i.value+"/mci");f.value=m.data,f.value.length>0?(w.value=f.value[0].name,await z()):w.value=""},z=async()=>{const m=await I.get(B+"/cbtumblebug/ns/"+i.value+"/mci/"+w.value);H.value=m.data.vm,f.value.length>0?D.value=H.value[0].name:D.value=""},F=async()=>{const m=await I.get(B+"/cbtumblebug/ns/"+i.value+"/k8scluster");A.value=m.data,A.value.length>0?R.value=A.value[0].name:R.value=""},G=async()=>{await O()},Z=async()=>{await z()},W=async()=>{await F()},ee=async()=>{if(o.value=="vm_application_install"||o.value=="vm_application_uninstall"){let m="";o.value=="vm_application_install"?m="/ape/vm/install":m="/ape/vm/uninstall";const a=p.value.split(",").map(x=>x.trim()),t={namespace:i.value,mciName:w.value,vmName:D.value,applications:a},n=await I.post(B+m,t);n.data.code==200&&n.data.message?k.success(n.data.message):k.error(n.data.message)}else if(o.value=="helm_application_install"||o.value=="helm_application_uninstall"){let m="";o.value=="helm_application_install"?m="/ape/helm/install":m="/ape/helm/uninstall";const a=p.value.split(",").map(x=>x.trim()),t={namespace:i.value,clusterName:R.value,helmCharts:a},n=await I.post(B+m,t);n.data.code==200&&n.data.message?k.success(n.data.message):k.error(n.data.message)}},te=async()=>{ae().then(m=>{let a=!0,t="";if(!m){o.value==="vm_application_install"||o.value==="vm_application_uninstall"?t="VM":(o.value==="helm_application_install"||o.value==="helm_application_uninstall")&&(t="CLUSTER");const n="Your selected "+t+" has lower specifications than recommended. Would you like to continue with the installation?";a=confirm(n)}a&&(k.success("Please click RUN"),r.value=!1)})},ae=async()=>{let m=!1,a="",t="";return o.value==="vm_application_install"||o.value==="vm_application_uninstall"?(a="/applications/vm/check/application",t="?namespace="+i.value+"&mciName="+w.value+"&vmName="+D.value+"&catalogId="+d.catalogIdx):(o.value==="helm_application_install"||o.value==="helm_application_uninstall")&&(a="/applications/k8s/check/application",t="?namespace="+i.value+"&clusterName="+R.value+"&catalogId="+d.catalogIdx),m=await I.get(B+a+t),m};return(m,a)=>(l(),s("div",Mt,[e("div",Vt,[e("div",Ut,[e("div",Dt,[e("h5",Tt,h(o.value=="vm_application_install"?"Application installation for VM":o.value=="vm_application_uninstall"?"Application uninstallation for VM":o.value=="helm_application_install"?"Application installation for k8s":o.value=="helm_application_uninstall"?"Application uninstallation for k8s":"")+" "+h(v.value),1),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:L})]),e("div",Nt,[o.value=="vm_application_install"||o.value=="vm_application_uninstall"?(l(),s($,{key:0},[e("div",At,[Rt,o.value=="vm_application_install"?(l(),s("p",Lt,"Select the namespace where the application will be installed")):o.value=="vm_application_uninstall"?(l(),s("p",Et,"Select the namespace where the application will be uninstalled")):V("",!0),C.value.length>0?b((l(),s("select",{key:2,class:"form-select",id:"namesapce","onUpdate:modelValue":a[0]||(a[0]=t=>i.value=t),onChange:G},[(l(!0),s($,null,M(C.value,t=>(l(),s("option",{value:t.name,key:t.name},h(t.name),9,Ht))),128))],544)),[[j,i.value]]):b((l(),s("select",{key:3,class:"form-select",id:"namesapce","onUpdate:modelValue":a[1]||(a[1]=t=>i.value=t),onChange:G},[e("option",jt,h(i.value),1)],544)),[[j,i.value]])]),e("div",Bt,[Ot,o.value=="vm_application_install"?(l(),s("p",Ft,"Select the multi-cloud infrastructure information where the application will be deployed")):o.value=="vm_application_uninstall"?(l(),s("p",Gt,"Remove the application and associated resources from the multi-cloud infrastructure")):V("",!0),b(e("select",{class:"form-select",id:"mci-name",disabled:i.value=="","onUpdate:modelValue":a[2]||(a[2]=t=>w.value=t),onChange:Z},[(l(!0),s($,null,M(f.value,t=>(l(),s("option",{value:t.id,key:t.name},h(t.name),9,zt))),128))],40,Pt),[[j,w.value]])]),e("div",Wt,[Yt,Kt,b(e("select",{class:"form-select",id:"mci-name",disabled:w.value=="","onUpdate:modelValue":a[3]||(a[3]=t=>D.value=t)},[(l(!0),s($,null,M(H.value,t=>(l(),s("option",{value:t.id,key:t.name},h(t.name),9,Jt))),128))],8,qt),[[j,D.value]])]),e("div",Qt,[Xt,Zt,b(e("input",{type:"text",class:"form-control",id:"sc-title",name:"title",placeholder:"nginx, tomcat ...","onUpdate:modelValue":a[4]||(a[4]=t=>p.value=t),disabled:""},null,512),[[N,p.value]])])],64)):o.value=="helm_application_install"||o.value=="helm_application_uninstall"?(l(),s($,{key:1},[e("div",ea,[ta,o.value=="helm_application_install"?(l(),s("p",aa,"Select the namespace where the application will be installed")):o.value=="helm_application_uninstall"?(l(),s("p",sa,"Select the namespace where the application will be uninstalled")):V("",!0),C.value.length>0?b((l(),s("select",{key:2,class:"form-select",id:"namesapce","onUpdate:modelValue":a[5]||(a[5]=t=>i.value=t),onChange:W},[(l(!0),s($,null,M(C.value,t=>(l(),s("option",{value:t.name,key:t.name},h(t.name),9,la))),128))],544)),[[j,i.value]]):b((l(),s("select",{key:3,class:"form-select",id:"namesapce","onUpdate:modelValue":a[6]||(a[6]=t=>i.value=t),onChange:G},[e("option",oa,h(i.value),1)],544)),[[j,i.value]])]),e("div",na,[ia,o.value=="helm_application_install"?(l(),s("p",ca,"Select the name of the cluster where the application will be deployed")):o.value=="helm_application_uninstall"?(l(),s("p",da,"Remove the application and associated resources from the multi-cloud infrastructure")):V("",!0),b(e("select",{class:"form-select",id:"mci-name",disabled:i.value=="","onUpdate:modelValue":a[7]||(a[7]=t=>R.value=t)},[(l(!0),s($,null,M(A.value,t=>(l(),s("option",{value:t.id,key:t.name},h(t.name),9,ua))),128))],8,ra),[[j,R.value]])]),e("div",pa,[ma,_a,b(e("input",{type:"text",class:"form-control",id:"sc-title",name:"title",placeholder:"nginx, tomcat ...","onUpdate:modelValue":a[8]||(a[8]=t=>p.value=t),disabled:""},null,512),[[N,p.value]])])],64)):V("",!0)]),e("div",ha,[e("a",{class:"btn btn-link link-secondary","data-bs-dismiss":"modal",onClick:L}," Cancel "),e("div",null,[o.value!=="vm_application_uninstall"&&o.value!=="helm_application_uninstall"?(l(),s("button",{key:0,class:"btn btn-danger ms-auto",onClick:te,style:{"margin-right":"5px"},disabled:!r.value}," Spec Check ",8,va)):V("",!0),e("button",{class:"btn btn-primary ms-auto","data-bs-dismiss":"modal",onClick:ee,disabled:r.value}," RUN ",8,ga)])])])])]))}}),ba=re(fa,[["__scopeId","data-v-b0d479e9"]]);/*!
* Tabler v1.0.0-beta19 (https://tabler.io)
* @version 1.0.0-beta19
* @link https://tabler.io
* Copyright 2018-2023 The Tabler Authors
* Copyright 2018-2023 codecalm.net Paweł Kuna
* Licensed under MIT (https://github.com/tabler/tabler/blob/master/LICENSE)
*/(function(g){typeof define=="function"&&define.amd?define(g):g()})(function(){var g,k="tablerTheme",d=new Proxy(new URLSearchParams(window.location.search),{get:function(v,U){return v.get(U)}});if(d.theme)localStorage.setItem(k,d.theme),g=d.theme;else{var c=localStorage.getItem(k);g=c||"light"}g==="dark"?document.body.setAttribute("data-bs-theme",g):document.body.removeAttribute("data-bs-theme")});const wa={class:"page",ref:"sofwareCatalog"},ya={class:"page-wrapper"},ka=e("div",{class:"col"},[e("h2",{class:"page-title"},"Software catalog")],-1),$a=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-plus",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M12 5l0 14"}),e("path",{d:"M5 12l14 0"})],-1),Ca={class:"page-body"},xa={class:"container-xl"},Ia={class:"row"},Sa={class:"col-lg-8"},Ma={class:"card"},Va={class:"list-group card-list-group",id:"sc-list-group"},Ua={class:"row g-2 align-items-center"},Da={class:"col-auto fs-3"},Ta={class:"col-auto"},Na=["src"],Aa=["onClick"],Ra={class:"text-muted"},La={class:"col-auto text-muted"},Ea={class:"col-auto lh-1"},Ha={class:"dropdown"},ja=P('<a href="#" class="link-secondary" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg></a>',1),Ba={class:"dropdown-menu dropdown-menu-end"},Oa=["onClick"],Fa=["id"],Ga={class:"accordion-body pt-0"},Pa=e("br",null,null,-1),za=["innerHTML"],Wa=e("br",null,null,-1),Ya=["onClick"],Ka=["onClick"],qa=e("br",null,null,-1),Ja=e("br",null,null,-1),Qa=e("strong",null,"관련 정보",-1),Xa=["id"],Za=["onClick"],es=e("strong",null,"TAGS",-1),ts=["id"],as=e("strong",null,"Recommended Spec",-1),ss=["id"],ls={class:"btn btn-sm",style:{"margin-right":"5px"}},os={class:"btn btn-sm",style:{"margin-right":"5px"}},ns={class:"btn btn-sm",style:{"margin-right":"5px"}},is={class:"col-lg-4"},cs=e("div",null,[e("br")],-1),ds=e("h3",{class:"mb-3"},"dockerHub search",-1),rs={key:0,class:"col-md-6 col-lg-12",id:"resultDockerHubEmpty"},us={class:"row row-cards",id:"resultDockerHubSearch"},ps={class:"card"},ms={class:"row row-0"},_s={class:"col-auto"},hs=["src"],vs={class:"col"},gs={class:"card-body"},fs={href:"",target:"_blank"},bs={class:"text-muted"},ws=P('<a href="#" class="link-secondary" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg></a>',1),ys=e("a",{class:"dropdown-item",href:"#"}," softwareCatalog로 내용 입력 ",-1),ks=e("a",{class:"dropdown-item",href:"#"}," file/image를 nexus로 복제 ",-1),$s=e("div",{style:{"margin-bottom":"20px"}}," ",-1),Cs=e("h3",{class:"mb-3"},"artifactHub search",-1),xs={key:1,class:"col-md-6 col-lg-12",id:"resultArtifactHubEmpty"},Is={class:"row row-cards",id:"resultArtifactHubSearch"},Ss={class:"card"},Ms={class:"row row-0"},Vs=e("div",{class:"col-auto"},[e("img",{src:"https://artifacthub.io/static/media/placeholder_pkg_helm.png",class:"rounded-start",alt:"Shape of You",width:"80",height:"80"})],-1),Us={class:"col"},Ds={class:"card-body"},Ts={href:"",target:"_blank"},Ns={class:"text-muted"},As=P('<a href="#" class="link-secondary" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg></a>',1),Rs=e("a",{class:"dropdown-item",href:"#"}," softwareCatalog로 내용 입력 ",-1),Ls=e("a",{class:"dropdown-item",href:"#"}," file/image를 nexus로 복제 ",-1),Y="http://192.168.6.30:18084",Bs=Q({__name:"SoftwareCatalogList",setup(g){const k=X(),d=u([]),c=u("");window.location.host.split(":");const v=u([]),U=u([]),o=u(0),i=u(""),C=u("new"),f=u(""),H=u(""),w=u(""),D=u(0);ne(async()=>{c.value="",window.addEventListener("message",async function(a){const t=a.data;t.projectInfo&&(f.value=t.projectInfo.ns_id)}),await A()});const A=async()=>{try{const a=await I.get(Y+"/catalog/software/?title="+c.value);oe.forEach(a.data,function(t){t.catalogIcon=Y+t.catalogIcon,t.refData=R(t.catalogRefData),t.isShow=!1}),d.value=a.data}catch(a){console.log(a),k.error("데이터를 가져올 수 없습니다.")}},R=a=>a.reduce((t,n)=>(t[n.referenceType]||(t[n.referenceType]=[]),t[n.referenceType].push(n),t),{}),p=async a=>{a.keyCode==13&&(await A(),await r(),await _())},r=async()=>{try{const a=await I.get(Y+"/search/dockerhub/"+c.value);for(let t=0;t<3;t++)v.value.push(a.data.data.results[t])}catch(a){console.log(a),k.error("데이터를 가져올 수 없습니다.")}},_=async()=>{try{const a=await I.get(Y+"/search/artifacthub/"+c.value);for(let t=0;t<3;t++)U.value.push(a.data.data.packages[t])}catch(a){console.log(a),k.error("데이터를 가져올 수 없습니다.")}},L=async a=>{d.value.forEach(t=>{t.isShow=!1}),d.value[a].isShow=!d.value[a].isShow,w.value=d.value[a].catalogTitle,D.value=d.value[a].catalogIdx},T=(a,t)=>Object.prototype.hasOwnProperty.call(a,t),O=a=>{window.open(a)},z=a=>{C.value="update",o.value=a},F=()=>{C.value="new",o.value=0},G=()=>{let a=`https://hub.docker.com/search?q=${c.value}`;window.open(a,"_blank")},Z=()=>{let a=`https://artifacthub.io/packages/search?ts_query_web=${c.value}&sort=relevance&page=1`;window.open(a,"_blank")},W=(a,t)=>t.includes(a),ee=a=>a.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "),te=a=>{i.value=a},ae=a=>{H.value=a},m=a=>a.replace(/\\n|\n/g,"<br/>");return(a,t)=>(l(),s("div",wa,[e("div",ya,[e("div",{class:"page-header d-print-none"},[e("div",{class:"container-xl"},[e("div",{class:"row g-2 align-items-center"},[ka,e("div",{class:"col-auto ms-auto"},[e("div",{class:"btn-list"},[e("a",{class:"btn btn-primary d-none d-sm-inline-block",onClick:F,"data-bs-toggle":"modal","data-bs-target":"#modal-form"},[$a,J(" New ")])])])])])]),e("div",Ca,[e("div",xa,[e("div",Ia,[e("div",Sa,[e("div",Ma,[e("div",Va,[(l(!0),s($,null,M(d.value,(n,x)=>(l(),s("div",{class:"list-group-item",key:x},[e("div",Ua,[e("div",Da,h(x+1),1),e("div",Ta,[e("img",{src:n.catalogIcon,class:"rounded",alt:"Catalog Icon",width:"40",height:"40"},null,8,Na)]),e("div",{class:"col",onClick:S=>L(x)},[J(h(n.catalogTitle)+" ",1),e("div",Ra,h(n.catalogSummary),1)],8,Aa),e("div",La,h(n.catalogCategory),1),e("div",Ea,[e("div",Ha,[ja,e("div",Ba,[e("a",{class:"dropdown-item",onClick:S=>z(n.catalogIdx),"data-bs-toggle":"modal","data-bs-target":"#modal-form"},"Update",8,Oa)])])]),e("div",{id:"accordion_"+n.catalogIdx,class:"accordion-collapse collapse",style:ue([n.isShow?{display:"block"}:{display:"none"}])},[e("div",Ga,[Pa,e("div",{style:{"white-space":"pre-wrap"},innerHTML:m(n.catalogDescription)},null,8,za),e("div",null,[Wa,(l(!0),s($,null,M(n.refData.workflow,S=>(l(),s("div",{class:"btn-list",style:{width:"70%"},key:S.catalogRefIdx},[e("a",{class:pe(["btn",{"btn-outline-primary":W("install",S.referenceValue),"btn-outline-danger":W("uninstall",S.referenceValue)}]),style:{"margin-bottom":"10px"},onClick:ie=>ae(S.referenceValue),"data-bs-toggle":"modal","data-bs-target":"#install-form"},h(ee(S.referenceValue)),11,Ya),e("button",{class:"btn btn-primary",style:{"text-align":"center !important","margin-bottom":"10px"},onClick:ie=>te(S.referenceValue),id:"log-btn","data-bs-toggle":"modal","data-bs-target":"#softwareCatalogLog"},"  LOG  ",8,Ka)]))),128)),qa,Ja,Qa,e("ul",{id:`${x}-entity-ul`},[T(n.refData,"HOMEPAGE")?(l(!0),s($,{key:0},M(n.refData.HOMEPAGE,S=>(l(),s("li",null,[e("a",{onClick:ie=>O(S.referenceValue),class:"btn"},h(S.referenceValue),9,Za)]))),256)):V("",!0)],8,Xa),es,e("ul",{id:`${x}-tag-ul`},[T(n.refData,"TAG")?(l(!0),s($,{key:0},M(n.refData.TAG,S=>(l(),s("span",null,"#"+h(S.referenceValue)+"  ",1))),256)):V("",!0)],8,ts),as,e("ul",{id:`${x}-tag-ul`},[n.recommendedCpu&&n.recommendedMemory&&n.recommendedDisk?(l(),s($,{key:0},[e("button",ls," CPU : "+h(n.recommendedCpu),1),e("button",os," MEMORY : "+h(n.recommendedMemory),1),e("button",ns," DISK : "+h(n.recommendedDisk),1)],64)):V("",!0)],8,ss)])])],12,Fa)])]))),128))])])]),e("div",is,[b(e("input",{type:"text",class:"form-control",placeholder:"Search…",onKeypress:p,"onUpdate:modelValue":t[0]||(t[0]=n=>c.value=n),id:"inputCatalogSearch"},null,544),[[N,c.value]]),cs,ds,v.value.length==0?(l(),s("div",rs,"검색된 관련 ContainerImage가 없습니다.")):V("",!0),e("div",us,[(l(!0),s($,null,M(v.value,(n,x)=>(l(),s("div",{class:"col-md-6 col-lg-12",key:x},[e("div",ps,[e("div",ms,[e("div",_s,[e("img",{src:n.logo_url.large,class:"rounded-start",alt:"Shape of You",width:"80",height:"80"},null,8,hs)]),e("div",vs,[e("div",gs,[e("a",fs,h(n.name),1),e("div",bs,h(n.short_description.length>30?n.short_description.substring(0,30)+"...":""),1)])]),e("div",{class:"col-auto lh-1"},[e("div",{class:"dropdown"},[ws,e("div",{class:"dropdown-menu dropdown-menu-end"},[e("a",{class:"dropdown-item",onClick:G}," 해당 페이지로 이동 "),ys,ks])])])])])]))),128))]),$s,Cs,U.value.length==0?(l(),s("div",xs,"검색된 관련 HelmChart가 없습니다.")):V("",!0),e("div",Is,[(l(!0),s($,null,M(U.value,(n,x)=>(l(),s("div",{class:"col-md-6 col-lg-12",key:x},[e("div",Ss,[e("div",Ms,[Vs,e("div",Us,[e("div",Ds,[e("a",Ts,h(n.name),1),e("div",Ns,h(n.description.length>30?n.description.substring(0,30)+"...":""),1)])]),e("div",{class:"col-auto lh-1"},[e("div",{class:"dropdown"},[As,e("div",{class:"dropdown-menu dropdown-menu-end"},[e("a",{class:"dropdown-item",onClick:Z}," 해당 페이지로 이동 "),Rs,Ls])])])])])]))),128))])])])])])]),se(ct,{mode:C.value,"catalog-idx":o.value,onGetList:A},null,8,["mode","catalog-idx"]),se(St,{"job-name":i.value},null,8,["job-name"]),se(ba,{"ns-id":f.value,title:H.value,"application-name":w.value,"catalog-idx":D.value},null,8,["ns-id","title","application-name","catalog-idx"])],512))}});export{Bs as default};