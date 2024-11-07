import{d as J,u as Q,r as d,c as ne,w as q,o as ae,z as V,a as t,b as e,e as $,g as z,v as E,F as I,f as S,s as te,h as a,p as ie,k as ce,l as X,j as A,t as v,A as ue,i as ee,B as pe}from"./index-_s4ZjK2t.js";import{_ as le}from"./lodash-BVO39NN9.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";const N=f=>(ie("data-v-ffa7e076"),f=f(),ce(),f),me={class:"modal",id:"modal-form",tabindex:"-1"},he={class:"modal-dialog modal-lg",role:"document"},ve={class:"modal-content"},_e=N(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title"},"Create New Software catalog"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),fe={class:"modal-body",style:{"max-height":"calc(100vh - 200px)","overflow-y":"auto"}},ge={class:"mb-3"},be=N(()=>e("label",{class:"form-label"},"Title",-1)),we={class:"mb-3"},ye=N(()=>e("label",{class:"form-label"},"Summary",-1)),ke={class:"mb-3"},$e=N(()=>e("label",{class:"form-label"},"Icon",-1)),Ie={class:"mb-3"},Ce=N(()=>e("label",{class:"form-label"},"Category",-1)),Se=X('<option value="SERVER" selected data-v-ffa7e076>SERVER</option><option value="WAS" data-v-ffa7e076>WAS</option><option value="DB" data-v-ffa7e076>DB</option><option value="UTIL" data-v-ffa7e076>UTIL</option><option value="OBSERVABILITY" data-v-ffa7e076>OBSERVABILITY</option>',5),xe=[Se],Ne={class:"mb-3"},Me=N(()=>e("label",{class:"form-label"},"Description",-1)),Ue={class:"mb-3"},Te=N(()=>e("label",{class:"form-label"},"Recommended Server Spec",-1)),Ae={style:{display:"flex","justify-content":"space-between"}},Ve=N(()=>e("label",{class:"form-label required"},"CPU",-1)),De=N(()=>e("label",{class:"form-label required"},"MEMORY",-1)),Re=N(()=>e("label",{class:"form-label required"},"DISK",-1)),Ee={class:"col-lg-6"},Le={class:"mb-3"},He=N(()=>e("label",{class:"form-label"},"Reference",-1)),Be=["onUpdate:modelValue"],Fe=X('<option value="URL" data-v-ffa7e076>URL</option><option value="MANIFEST" data-v-ffa7e076>MANIFEST</option><option value="WORKFLOW" data-v-ffa7e076>WORKFLOW</option><option value="IMAGE" data-v-ffa7e076>IMAGE</option><option value="HOMEPAGE" data-v-ffa7e076>HOMEPAGE</option><option value="TAG" data-v-ffa7e076>TAG</option><option value="ETC" data-v-ffa7e076>ETC</option>',7),je=[Fe],ze={class:"col-lg-6"},Oe={class:"mb-3"},Ge=N(()=>e("label",{class:"form-label"}," ",-1)),Pe=["onUpdate:modelValue"],Ke={class:"mb-3"},We={class:"input-form"},Ye=["onUpdate:modelValue"],qe={class:"btn-list"},Je={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-plus",style:{margin:"0 !important"}},Qe=N(()=>e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1)),Xe=N(()=>e("path",{d:"M12 5l0 14"},null,-1)),Ze=N(()=>e("path",{d:"M5 12l14 0"},null,-1)),et=[Qe,Xe,Ze],tt=["onClick"],at={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-minus",style:{margin:"0 !important"}},st=N(()=>e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1)),ot=N(()=>e("path",{d:"M5 12l14 0"},null,-1)),lt=[st,ot],nt=N(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-plus",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M12 5l0 14"}),e("path",{d:"M5 12l14 0"})],-1)),it=J({__name:"softwareCatalogForm",props:{mode:{},catalogIdx:{}},emits:["get-list"],setup(f,{emit:D}){const p=Q(),l=d({}),g=d([]),M=d([]);d(!1),d(!1);const U=window.location.host.split(":"),o=window.location.protocol+"//"+U[0]+":18084",x=D,m=f,y=ne(()=>m.catalogIdx);q(y,async()=>{await k()}),ae(async()=>{await k()});const k=async()=>{m.mode=="update"?await b():(l.value={catalogIdx:null,catalogTitle:"",catalogDescription:"",catalogSummary:"",catalogCategory:"",catalogRefData:[],recommendedCpu:"",recommendedMemory:"",recommendedDisk:"",hpaMinReplicas:"",hpaMaxReplicas:"",hpaCpuUtilization:"",hpaMemoryUtilization:""},g.value=[],g.value.push({catalogRefIdx:null,catalogIdx:null,referncetIdx:0,referenceValue:"",referenceDescription:"",referenceType:"URL"}))},b=async()=>{try{await V.get(o+"/catalog/software/"+m.catalogIdx).then(({data:C})=>{l.value=C,C.catalogRefData.forEach(h=>{h.referenceType!==null&&(h.referenceType=h.referenceType.toUpperCase())}),g.value=C.catalogRefData})}catch(C){console.log(C),p.error("데이터를 가져올 수 없습니다.")}},c=()=>{console.log("addRef"),g.value.push({catalogRefIdx:null,catalogIdx:null,referncetIdx:0,referenceValue:"",referenceDescription:"",referenceType:"URL"})},T=C=>{g.value.length!==1&&g.value.splice(C,1)},L=C=>{M.value=C.target.files[0]},K=async()=>{const C=new FormData;if(C.append("iconFile",M.value),l.value.catalogRefData=g.value,C.append("catalogDto",new Blob([JSON.stringify(l.value)],{type:"application/json"})),m.mode=="new"){const h=await V.post(o+"/catalog/software",C,{headers:{"Content-Type":"multipart/form-data"}});h.data?h.data.data==null?(p.error("등록 할 수 없습니다."),k()):(p.success("등록되었습니다."),x("get-list")):(p.error("등록 할 수 없습니다."),k())}else(await V.put(o+"/catalog/software",C,{headers:{"Content-Type":"multipart/form-data"}})).data?(p.success("수정되었습니다."),x("get-list")):(p.error("수정 할 수 없습니다."),k())};return(C,h)=>(a(),t("div",me,[e("div",he,[e("div",ve,[_e,e("div",fe,[e("div",ge,[be,$(e("input",{type:"text",class:"form-control",id:"sc-title",name:"title",placeholder:"Application name","onUpdate:modelValue":h[0]||(h[0]=_=>l.value.catalogTitle=_)},null,512),[[z,l.value.catalogTitle]])]),e("div",we,[ye,$(e("input",{type:"text",class:"form-control",id:"sc-summary",name:"summary",placeholder:"Application summary","onUpdate:modelValue":h[1]||(h[1]=_=>l.value.catalogSummary=_)},null,512),[[z,l.value.catalogSummary]])]),e("div",ke,[$e,e("input",{type:"file",class:"form-control",id:"sc-icon",name:"icon",placeholder:"Icon File",onChange:L},null,32)]),e("div",Ie,[Ce,$(e("select",{class:"form-select",id:"sc-category","onUpdate:modelValue":h[2]||(h[2]=_=>l.value.catalogCategory=_)},xe,512),[[E,l.value.catalogCategory]])]),e("div",Ne,[Me,$(e("textarea",{class:"form-control",rows:"5",id:"sc-desc","onUpdate:modelValue":h[3]||(h[3]=_=>l.value.catalogDescription=_)},null,512),[[z,l.value.catalogDescription]])]),e("div",Ue,[Te,e("div",Ae,[e("div",null,[Ve,$(e("input",{type:"number",class:"form-control w-90-per",placeholder:"2","onUpdate:modelValue":h[4]||(h[4]=_=>l.value.recommendedCpu=_)},null,512),[[z,l.value.recommendedCpu]])]),e("div",null,[De,$(e("input",{type:"number",class:"form-control w-90-per",placeholder:"4","onUpdate:modelValue":h[5]||(h[5]=_=>l.value.recommendedMemory=_)},null,512),[[z,l.value.recommendedMemory]])]),e("div",null,[Re,$(e("input",{type:"number",class:"form-control w-90-per",placeholder:"20","onUpdate:modelValue":h[6]||(h[6]=_=>l.value.recommendedDisk=_)},null,512),[[z,l.value.recommendedDisk]])])])]),(a(!0),t(I,null,S(g.value,(_,H)=>(a(),t("div",{class:"row",id:"sc-ref",key:H},[e("div",Ee,[e("div",Le,[He,$(e("select",{class:"form-select",id:"sc-reference-1","onUpdate:modelValue":j=>_.referenceType=j},je,8,Be),[[E,_.referenceType]])])]),e("div",ze,[e("div",Oe,[Ge,$(e("input",{type:"text",class:"form-control",id:"sc-ref-value-1",name:"refValue",placeholder:"Ref value","onUpdate:modelValue":j=>_.referenceValue=j},null,8,Pe),[[z,_.referenceValue]])])]),e("div",Ke,[e("div",We,[$(e("input",{type:"text",class:"form-control w-80-per",id:"sc-ref-desc-1",name:"refDescription",placeholder:"Ref Description","onUpdate:modelValue":j=>_.referenceDescription=j},null,8,Ye),[[z,_.referenceDescription]]),e("div",qe,[e("button",{class:"btn btn-primary",onClick:c,style:{"text-align":"center !important"}},[(a(),t("svg",Je,et))]),e("button",{class:"btn btn-primary",onClick:j=>T(H)},[(a(),t("svg",at,lt))],8,tt)])])])]))),128))]),e("div",{class:"modal-footer"},[e("a",{class:"btn btn-link link-secondary","data-bs-dismiss":"modal",onClick:k}," Cancel "),e("a",{class:"btn btn-primary ms-auto","data-bs-dismiss":"modal",onClick:K},[nt,te(" Create New Software catalog ")])])])])]))}}),ct=de(it,[["__scopeId","data-v-ffa7e076"]]),dt={class:"modal",id:"softwareCatalogLog",tabindex:"-1"},rt={class:"modal-dialog modal-xl",role:"document"},ut={class:"modal-content"},pt=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),mt={class:"modal-body text-left py-4"},ht={class:"mb-5"},vt={key:0,class:"spinner-border",role:"status"},_t=e("span",{class:"visually-hidden"},"Loading...",-1),ft=[_t],gt={key:0},bt=e("p",{class:"text-secondary"},"No Data",-1),wt=[bt],yt={class:"card mb-3"},kt=["onClick"],$t={class:"card-title"},It={key:0,class:"card-body"},Ct=["value"],St=J({__name:"softwareCatalogLog",props:{jobName:{}},setup(f){Q();const D=f,p=d(!1),l=window.location.host.split(":"),g=window.location.protocol+"//"+l[0]+":18084",M=ne(()=>D.jobName);q(M,async()=>{p.value=!1,await o()});const U=d([]),o=async()=>{U.value=[];const k=await V.get(g+"/ape/log/"+M.value);U.value=k.data.data,p.value=!0},x=()=>{U.value=[],m.value=1},m=d(1),y=k=>{m.value===k?m.value=0:m.value=k};return(k,b)=>(a(),t("div",dt,[e("div",rt,[e("div",ut,[pt,e("div",mt,[e("h3",ht,[te(" Build Log "),p.value?A("",!0):(a(),t("div",vt,ft))]),e("div",null,[U.value.length<=0?(a(),t("div",gt,wt)):(a(!0),t(I,{key:1},S(U.value,c=>(a(),t("div",{key:c.buildIdx},[e("div",yt,[e("div",{class:"card-header",onClick:T=>y(c.buildIdx),style:{cursor:"pointer"}},[e("h3",$t,v(c.buildIdx),1)],8,kt),m.value===c.buildIdx?(a(),t("div",It,[e("textarea",{value:c.buildLog,disabled:"",style:{width:"100%"},rows:"20"},null,8,Ct)])):A("",!0)])]))),128))])]),e("div",{class:"modal-footer"},[e("a",{class:"btn btn-link link-secondary","data-bs-dismiss":"modal",onClick:x}," Cancel ")])])])]))}}),F=f=>(ie("data-v-92e455e4"),f=f(),ce(),f),xt={class:"modal",id:"install-form",tabindex:"-1"},Nt={class:"modal-dialog modal-lg",role:"document"},Mt={class:"modal-content"},Ut={class:"modal-header"},Tt={class:"modal-title"},At={class:"modal-body",style:{"max-height":"calc(100vh - 200px)","overflow-y":"auto"}},Vt={class:"mb-3"},Dt=F(()=>e("label",{class:"form-label"},"Target Infra",-1)),Rt={key:0,class:"text-muted"},Et={key:1,class:"text-muted"},Lt=["value"],Ht={class:"mb-3"},Bt=F(()=>e("label",{class:"form-label"},"Namespace",-1)),Ft={key:0,class:"text-muted"},jt={key:1,class:"text-muted"},zt=["value"],Ot={value:"selectNsId"},Gt={class:"mb-3"},Pt=F(()=>e("label",{class:"form-label"},"MCI Name",-1)),Kt={key:0,class:"text-muted"},Wt={key:1,class:"text-muted"},Yt=["disabled"],qt=["value"],Jt={class:"mb-3"},Qt=F(()=>e("label",{class:"form-label"},"VM Name",-1)),Xt=F(()=>e("p",{class:"text-muted"}," Select the virtual machine (VM) within the chosen multi-cloud infrastructure where the application will be deployed",-1)),Zt=["disabled"],ea=["value"],ta={class:"mb-3"},aa=F(()=>e("label",{class:"form-label"},"Application",-1)),sa=F(()=>e("p",{class:"text-muted"},"Select the application",-1)),oa={class:"mb-3"},la=F(()=>e("label",{class:"form-label"},"Namespace",-1)),na={key:0,class:"text-muted"},ia={key:1,class:"text-muted"},ca=["value"],da={value:"selectNsId"},ra={class:"mb-3"},ua=F(()=>e("label",{class:"form-label"},"ClusterName",-1)),pa={key:0,class:"text-muted"},ma={key:1,class:"text-muted"},ha=["disabled"],va=["value"],_a={class:"mb-3"},fa=F(()=>e("label",{class:"form-label"},"Helm chart",-1)),ga=F(()=>e("p",{class:"text-muted"},"Select the application",-1)),ba={class:"modal-footer",style:{display:"flex","justify-content":"space-between"}},wa=["disabled"],ya=["disabled"],ka=J({__name:"applicationInstallationForm",props:{nsId:{},title:{},catalogList:{}},setup(f){const D=window.location.host.split(":"),p=window.location.protocol+"//"+D[0]+":18084",l=Q(),g=f,M=ne(()=>g.title),U=d(""),o=d(""),x=d([]),m=d([]),y=d([]),k=d([]),b=d(""),c=d(""),T=d(""),L=d(""),K=d({}),C=d([]),h=d(""),_=d(""),H=d(!0);q(_,async()=>{K.value={hpaMinReplicas:0,hpaMaxReplicas:0,hpaCpuUtilization:0,hpaMemoryUtilization:0}}),q(M,async()=>{U.value=j(g.title),o.value=g.title,await G()}),ae(async()=>{await G()});const j=w=>w.split("_").map(u=>u.charAt(0).toUpperCase()+u.slice(1)).join(" "),G=async()=>{x.value=[{key:"VM",value:"VM"},{key:"k8s",value:"K8S"}],le.isEmpty(g.nsId)?await se():c.value=g.nsId,o.value==="Application Uninstallation"?H.value=!1:H.value=!0},se=async()=>{const w=await V.get(p+"/cbtumblebug/ns");m.value=w.data,m.value.length>0&&(c.value=m.value[0].name,o.value=="Application Installation"||o.value=="Application Uninstallation"?await W():await P()),le.isEmpty(c.value)||(b.value==="VM"?await W():await P())},W=async()=>{const w=await V.get(p+"/cbtumblebug/ns/"+c.value+"/mci");y.value=w.data,y.value.length>0?(T.value=y.value[0].name,await Z()):T.value=""},Z=async()=>{const w=await V.get(p+"/cbtumblebug/ns/"+c.value+"/mci/"+T.value);k.value=w.data.vm,y.value.length>0?L.value=k.value[0].name:L.value=""},P=async()=>{const w=await V.get(p+"/cbtumblebug/ns/"+c.value+"/k8scluster");C.value=w.data,C.value.length>0?h.value=C.value[0].name:h.value=""},Y=async()=>{await W()},n=async()=>{await Z()},r=async()=>{await P()},i=async()=>{if(b.value==="VM"){let w="";o.value=="Application Installation"?w="/ape/vm/install":w="/ape/vm/uninstall";const u=_.value.split(",").map(oe=>oe.trim()),s={namespace:c.value,mciName:T.value,vmName:L.value,applications:u},B=await V.post(p+w,s);B.data.code==200&&B.data.message?l.success(B.data.message):l.error(B.data.message)}else if(b.value==="K8S"){let w="";o.value=="Application Installation"?w="/ape/helm/install":w="/ape/helm/uninstall";const u=_.value.split(",").map(oe=>oe.trim()),s={namespace:c.value,clusterName:h.value,helmCharts:u},B=await V.post(p+w,s);B.data.code==200&&B.data.message?l.success(B.data.message):l.error(B.data.message)}},R=async()=>{b.value==="VM"||b.value==="K8S"?O().then(w=>{let u=!0,s="";if(w===null){l.error("Please select all items");return}if(!w){b.value==="VM"?s="VM":b.value==="K8S"&&(s="CLUSTER");const B="Your selected "+s+" has lower specifications than recommended. Would you like to continue with the installation?";u=confirm(B)}u&&(l.success("Please click RUN"),H.value=!1)}):l.error("Please Select Infra")},O=async()=>{let w=!1,u="",s="";if(b.value==="VM"){if(c.value===void 0||T.value===void 0||L.value===void 0||g.catalogIdx===void 0)return null;u="/applications/vm/check/application",s="?namespace="+c.value+"&mciName="+T.value+"&vmName="+L.value+"&catalogId="+g.catalogIdx}else if(b.value==="K8S"){if(c.value===void 0||h.value===void 0||g.catalogIdx===void 0){l.error("Please select all items");return}u="/applications/k8s/check/application",s="?namespace="+c.value+"&clusterName="+h.value+"&catalogId="+g.catalogIdx}return w=await V.get(p+u+s),w};return(w,u)=>(a(),t("div",xt,[e("div",Nt,[e("div",Mt,[e("div",Ut,[e("h5",Tt,v(o.value),1),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:G})]),e("div",At,[e("div",Vt,[Dt,o.value=="Application Installation"?(a(),t("p",Rt," Select the Infra what is the Infra will be installed ")):o.value=="Application Uninstallation"?(a(),t("p",Et," Select the Infra what is the Infra will be uninstalled ")):A("",!0),$(e("select",{class:"form-select",id:"infra","onUpdate:modelValue":u[0]||(u[0]=s=>b.value=s)},[(a(!0),t(I,null,S(x.value,s=>(a(),t("option",{value:s.value,key:s.value},v(s.value),9,Lt))),128))],512),[[E,b.value]])]),b.value=="VM"?(a(),t(I,{key:0},[e("div",Ht,[Bt,o.value=="Application Installation"?(a(),t("p",Ft," Select the namespace where the application will be installed")):o.value=="Application Uninstallation"?(a(),t("p",jt," Select the namespace where the application will be uninstalled")):A("",!0),m.value.length>0?$((a(),t("select",{key:2,class:"form-select",id:"namesapce","onUpdate:modelValue":u[1]||(u[1]=s=>c.value=s),onChange:Y},[(a(!0),t(I,null,S(m.value,s=>(a(),t("option",{value:s.name,key:s.name},v(s.name),9,zt))),128))],544)),[[E,c.value]]):$((a(),t("select",{key:3,class:"form-select",id:"namesapce","onUpdate:modelValue":u[2]||(u[2]=s=>c.value=s),onChange:Y},[e("option",Ot,v(c.value),1)],544)),[[E,c.value]])]),e("div",Gt,[Pt,o.value=="Application Installation"&&b.value=="VM"?(a(),t("p",Kt," Select the multi-cloud infrastructure information where the application will be deployed")):o.value=="Application Uninstallation"&&b.value=="VM"?(a(),t("p",Wt," Remove the application and associated resources from the multi-cloud infrastructure")):A("",!0),$(e("select",{class:"form-select",id:"mci-name",disabled:c.value=="","onUpdate:modelValue":u[3]||(u[3]=s=>T.value=s),onChange:n},[(a(!0),t(I,null,S(y.value,s=>(a(),t("option",{value:s.id,key:s.name},v(s.name),9,qt))),128))],40,Yt),[[E,T.value]])]),e("div",Jt,[Qt,Xt,$(e("select",{class:"form-select",id:"mci-name",disabled:T.value=="","onUpdate:modelValue":u[4]||(u[4]=s=>L.value=s)},[(a(!0),t(I,null,S(k.value,s=>(a(),t("option",{value:s.id,key:s.name},v(s.name),9,ea))),128))],8,Zt),[[E,L.value]])]),e("div",ta,[aa,sa,$(e("select",{class:"form-select","onUpdate:modelValue":u[5]||(u[5]=s=>_.value=s)},[(a(!0),t(I,null,S(g.catalogList,s=>(a(),t("option",{key:s},v(s.catalogTitle),1))),128))],512),[[E,_.value]])])],64)):b.value=="K8S"?(a(),t(I,{key:1},[e("div",oa,[la,o.value=="Application Installation"?(a(),t("p",na,"Select the namespace where the application will be installed")):o.value=="Application Uninstallation"?(a(),t("p",ia,"Select the namespace where the application will be uninstalled")):A("",!0),m.value.length>0?$((a(),t("select",{key:2,class:"form-select",id:"namesapce","onUpdate:modelValue":u[6]||(u[6]=s=>c.value=s),onChange:r},[(a(!0),t(I,null,S(m.value,s=>(a(),t("option",{value:s.name,key:s.name},v(s.name),9,ca))),128))],544)),[[E,c.value]]):$((a(),t("select",{key:3,class:"form-select",id:"namesapce","onUpdate:modelValue":u[7]||(u[7]=s=>c.value=s),onChange:Y},[e("option",da,v(c.value),1)],544)),[[E,c.value]])]),e("div",ra,[ua,o.value=="Application Installation"?(a(),t("p",pa,"Select the name of the cluster where the application will be deployed")):o.value=="Application Uninstallation"?(a(),t("p",ma,"Remove the application and associated resources from the multi-cloud infrastructure")):A("",!0),$(e("select",{class:"form-select",id:"mci-name",disabled:c.value=="","onUpdate:modelValue":u[8]||(u[8]=s=>h.value=s)},[(a(!0),t(I,null,S(C.value,s=>(a(),t("option",{value:s.id,key:s.name},v(s.name),9,va))),128))],8,ha),[[E,h.value]])]),e("div",_a,[fa,ga,$(e("select",{class:"form-select","onUpdate:modelValue":u[9]||(u[9]=s=>_.value=s)},[(a(!0),t(I,null,S(g.catalogList,s=>(a(),t("option",{key:s},v(s.catalogTitle),1))),128))],512),[[E,_.value]])])],64)):A("",!0)]),e("div",ba,[e("a",{class:"btn btn-link link-secondary","data-bs-dismiss":"modal",onClick:G}," Cancel "),e("div",null,[o.value=="Application Installation"?(a(),t("button",{key:0,class:"btn btn-danger ms-auto",onClick:R,style:{"margin-right":"5px"},disabled:!H.value}," Spec Check ",8,wa)):A("",!0),e("button",{class:"btn btn-primary ms-auto","data-bs-dismiss":"modal",onClick:i,disabled:H.value}," RUN ",8,ya)])])])])]))}}),$a=de(ka,[["__scopeId","data-v-92e455e4"]]),re=f=>(ie("data-v-5c3dbff4"),f=f(),ce(),f),Ia={class:"modal",id:"status-modal",tabindex:"-1"},Ca={class:"modal-dialog modal-lg",role:"document"},Sa={class:"modal-content"},xa={class:"modal-header"},Na={class:"modal-title"},Ma=re(()=>e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),Ua={class:"modal-body",style:{"max-height":"calc(100vh - 200px)","overflow-y":"auto"}},Ta={class:"mb-3"},Aa={class:"tree tree-item d-flex justify-content-start"},Va={key:0,class:"bi bi-caret-down-fill",style:{"font-size":"x-large"}},Da={key:1,class:"bi bi-caret-right-fill",style:{"font-size":"x-large"}},Ra={key:0},Ea={class:"d-flex justify-content-start"},La={key:0,class:"bi bi-caret-down-fill",style:{"font-size":"x-large"}},Ha={key:1,class:"bi bi-caret-right-fill",style:{"font-size":"x-large"}},Ba={class:"tree tree-item"},Fa={class:"d-flex justify-content-start"},ja=re(()=>e("i",{class:"bi bi-caret-down-fill",style:{"font-size":"x-large"}},null,-1)),za={class:"tree tree-item"},Oa=re(()=>e("i",{class:"bi bi-dot",style:{"font-size":"x-large"}},null,-1)),Ga={calss:"tree tree-item",style:{display:"inline !important","margin-left":"10px !important"}},Pa={key:0,class:"btn btn-success btn-sm d-inline"},Ka={key:1,class:"btn btn-danger btn-sm d-inline"},Wa={key:1},Ya={key:0,class:"bi bi-caret-down-fill",style:{"font-size":"x-large"}},qa={key:1,class:"bi bi-caret-right-fill",style:{"font-size":"x-large"}},Ja={class:"tree"},Qa=J({__name:"softwareStatus",props:{nsName:{},list:{}},emits:["reset-init-flag"],setup(f,{emit:D}){const p=f;d(!1),q(p.list,()=>{console.log(p.list),p.list.forEach(o=>{console.log(o)})}),Q();const l=d([]),g=window.location.host.split(":");window.location.protocol+""+g[0],ae(async()=>{const o=document.getElementById("status-modal");o==null||o.addEventListener("shown.bs.modal",async()=>{await M()})});const M=async()=>{await U()},U=async()=>{l.value=[{type:"VM",list:[{mciId:1,mciName:"mci01",vmList:[{vmId:1,vmName:"vm01-1",installedApplication:[{applicationId:1,applicationName:"Nginx",applicationStatus:"RUNNING"},{applicationId:2,applicationName:"MariaDB",applicationStatus:"RESTARTING"},{applicationId:3,applicationName:"REDIS",applicationStatus:"STOP"},{applicationId:4,applicationName:"TOMCAT",applicationStatus:null}]}]},{mciId:2,mciName:"mci02",vmList:[{vmId:1,vmName:"vm02-1",installedApplication:[{applicationId:1,applicationName:"Nginx",applicationStatus:"RUNNING"},{applicationId:2,applicationName:"MariaDB",applicationStatus:"RESTARTING"},{applicationId:3,applicationName:"REDIS",applicationStatus:"STOP"},{applicationId:4,applicationName:"TOMCAT",applicationStatus:null}]}]}]},{type:"K8S",list:[{pmkId:1,pmkName:"pmk01",installedApplication:[{applicationId:1,applicationName:"Nginx",applicationStatus:"RUNNING"},{applicationId:2,applicationName:"MariaDB",applicationStatus:"RESTARTING"},{applicationId:3,applicationName:"REDIS",applicationStatus:"STOP"},{applicationId:4,applicationName:"TOMCAT",applicationStatus:null}]}]}],l.value.forEach(o=>{o.showFlag=!1,o.type==="VM"?o.forEach(x=>{x.showFlag=!1,x.forEach(m=>{m.showFlag=!1})}):o.type==="K8S"&&o.forEach(x=>{x.showFlag=!1})})};return(o,x)=>(a(),t("div",Ia,[e("div",Ca,[e("div",Sa,[e("div",xa,[e("h5",Na,"Software Status ["+v(o.nsName)+"]",1),Ma]),e("div",Ua,[e("div",Ta,[(a(!0),t(I,null,S(l.value,m=>(a(),t("div",{key:m.type,onClick:x[0]||(x[0]=(...y)=>o.onClickInfra&&o.onClickInfra(...y))},[e("div",Aa,[m.showFlag?(a(),t("i",Va)):(a(),t("i",Da)),e("p",null,v(m.type),1)]),m.type==="VM"?$((a(),t("div",Ra,[(a(!0),t(I,null,S(m.list,y=>(a(),t("div",{class:"tree",key:y.mciId},[e("div",Ea,[y.showFlag?(a(),t("i",La)):(a(),t("i",Ha)),e("p",Ba,v(y.mciName),1)]),(a(!0),t(I,null,S(y.vmList,k=>(a(),t("div",{class:"tree",key:k.vmId},[e("div",Fa,[ja,e("p",za,v(k.vmName),1)]),(a(!0),t(I,null,S(k.installedApplication,b=>(a(),t("div",{class:"tree tree-item",key:b.applicationId},[Oa,e("p",Ga,v(b.applicationName),1),b.applicationStatus!==null?(a(),t("button",Pa,v(b.applicationStatus),1)):(a(),t("button",Ka,"UNDEFINED"))]))),128))]))),128))]))),128))],512)),[[ue,m.showFlag]]):A("",!0),m.type==="K8S"?$((a(),t("div",Wa,[(a(!0),t(I,null,S(m.list,y=>(a(),t("div",{class:"tree",key:y.pmkid},[m.showFlag?(a(),t("i",Ya)):(a(),t("i",qa)),e("p",Ja,v(y.pmkName),1)]))),128))],512)),[[ue,m.showFlag]]):A("",!0)]))),128))])]),e("div",{class:"modal-footer"},[e("a",{class:"btn btn-link link-secondary","data-bs-dismiss":"modal",onClick:M}," Cancel ")])])])]))}}),Xa=de(Qa,[["__scopeId","data-v-5c3dbff4"]]);/*!
* Tabler v1.0.0-beta19 (https://tabler.io)
* @version 1.0.0-beta19
* @link https://tabler.io
* Copyright 2018-2023 The Tabler Authors
* Copyright 2018-2023 codecalm.net Paweł Kuna
* Licensed under MIT (https://github.com/tabler/tabler/blob/master/LICENSE)
*/(function(f){typeof define=="function"&&define.amd?define(f):f()})(function(){var f,D="tablerTheme",p=new Proxy(new URLSearchParams(window.location.search),{get:function(g,M){return g.get(M)}});if(p.theme)localStorage.setItem(D,p.theme),f=p.theme;else{var l=localStorage.getItem(D);f=l||"light"}f==="dark"?document.body.setAttribute("data-bs-theme",f):document.body.removeAttribute("data-bs-theme")});const Za={class:"page",ref:"sofwareCatalog"},es={class:"page-wrapper"},ts=e("div",{class:"col d-flex"},[e("h2",{class:"page-title"},"Software catalog")],-1),as=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-plus",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M12 5l0 14"}),e("path",{d:"M5 12l14 0"})],-1),ss={class:"page-body"},os={class:"container-xl"},ls={class:"row"},ns={class:"col-lg-8"},is={class:"col-auto me-auto fs-3"},cs={class:"d-flex justify-content-end"},ds={class:"card"},rs={class:"list-group card-list-group",id:"sc-list-group"},us={class:"row g-2 align-items-center"},ps={class:"col-auto fs-3"},ms={class:"col-auto"},hs=["src"],vs=["onClick"],_s={class:"text-muted"},fs={class:"col-auto text-muted"},gs={class:"col-auto lh-1"},bs={class:"dropdown"},ws=X('<a href="#" class="link-secondary" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg></a>',1),ys={class:"dropdown-menu dropdown-menu-end"},ks=["onClick"],$s=["id"],Is={class:"accordion-body pt-0"},Cs=e("br",null,null,-1),Ss=["innerHTML"],xs=e("br",null,null,-1),Ns=e("br",null,null,-1),Ms=e("strong",null,"관련 정보",-1),Us=["id"],Ts=["onClick"],As=e("strong",null,"TAGS",-1),Vs=["id"],Ds=e("strong",null,"Recommended Spec",-1),Rs=["id"],Es={class:"btn btn-sm",style:{"margin-right":"5px"}},Ls={class:"btn btn-sm",style:{"margin-right":"5px"}},Hs={class:"btn btn-sm",style:{"margin-right":"5px"}},Bs={class:"col-lg-4"},Fs=e("div",null,[e("br")],-1),js=e("h3",{class:"mb-3"},"dockerHub search",-1),zs={key:0,class:"col-md-6 col-lg-12",id:"resultDockerHubEmpty"},Os={class:"row row-cards",id:"resultDockerHubSearch"},Gs={class:"card"},Ps={class:"row row-0"},Ks={class:"col-auto"},Ws=["src"],Ys={class:"col"},qs={class:"card-body"},Js={href:"",target:"_blank"},Qs={class:"text-muted"},Xs=X('<a href="#" class="link-secondary" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg></a>',1),Zs=e("a",{class:"dropdown-item",href:"#"}," softwareCatalog로 내용 입력 ",-1),eo=e("a",{class:"dropdown-item",href:"#"}," file/image를 nexus로 복제 ",-1),to=e("div",{style:{"margin-bottom":"20px"}}," ",-1),ao=e("h3",{class:"mb-3"},"artifactHub search",-1),so={key:1,class:"col-md-6 col-lg-12",id:"resultArtifactHubEmpty"},oo={class:"row row-cards",id:"resultArtifactHubSearch"},lo={class:"card"},no={class:"row row-0"},io=e("div",{class:"col-auto"},[e("img",{src:"https://artifacthub.io/static/media/placeholder_pkg_helm.png",class:"rounded-start",alt:"Shape of You",width:"80",height:"80"})],-1),co={class:"col"},ro={class:"card-body"},uo={href:"",target:"_blank"},po={class:"text-muted"},mo=X('<a href="#" class="link-secondary" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg></a>',1),ho=e("a",{class:"dropdown-item",href:"#"}," softwareCatalog로 내용 입력 ",-1),vo=e("a",{class:"dropdown-item",href:"#"}," file/image를 nexus로 복제 ",-1),bo=J({__name:"SoftwareCatalogList",setup(f){const D=Q(),p=d([]),l=d(""),g=window.location.host.split(":"),M=window.location.protocol+"//"+g[0]+":18084",U=d([]),o=d([]),x=d(0),m=d(""),y=d("new"),k=d(""),b=d("ns01"),c=d("");ae(async()=>{l.value="",window.addEventListener("message",async function(n){const r=n.data;r.projectInfo&&(k.value=r.projectInfo.ns_id)}),await T()});const T=async()=>{try{const n=await V.get(M+"/catalog/software/?title="+l.value);le.forEach(n.data,function(r){r.catalogIcon=M+r.catalogIcon,r.refData=L(r.catalogRefData),r.isShow=!1}),p.value=n.data}catch(n){console.log(n),D.error("데이터를 가져올 수 없습니다.")}},L=n=>n.reduce((r,i)=>(r[i.referenceType]||(r[i.referenceType]=[]),r[i.referenceType].push(i),r),{}),K=async n=>{n.keyCode==13&&(await T(),await C(),await h())},C=async()=>{U.value=[];try{const n=await V.get(M+"/search/dockerhub/"+l.value);for(let r=0;r<3;r++)U.value.push(n.data.data.results[r])}catch(n){console.log(n),D.error("데이터를 가져올 수 없습니다.")}},h=async()=>{o.value=[];try{const n=await V.get(M+"/search/artifacthub/"+l.value);for(let r=0;r<3;r++)o.value.push(n.data.data.packages[r])}catch(n){console.log(n),D.error("데이터를 가져올 수 없습니다.")}},_=async n=>{p.value.forEach(r=>{r.isShow=!1}),p.value[n].isShow=!p.value[n].isShow},H=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),j=n=>{window.open(n)},G=n=>{y.value="update",x.value=n},se=()=>{y.value="new",x.value=0},W=()=>{let n=`https://hub.docker.com/search?q=${l.value}`;window.open(n,"_blank")},Z=()=>{let n=`https://artifacthub.io/packages/search?ts_query_web=${l.value}&sort=relevance&page=1`;window.open(n,"_blank")},P=n=>{c.value=n},Y=n=>n.replace(/\\n|\n/g,"<br/>");return(n,r)=>(a(),t("div",Za,[e("div",es,[e("div",{class:"page-header d-print-none"},[e("div",{class:"container-xl"},[e("div",{class:"row g-2 align-items-center"},[ts,e("div",{class:"col-auto ms-auto"},[e("div",{class:"btn-list"},[e("a",{class:"btn btn-primary d-none d-sm-inline-block",onClick:se,"data-bs-toggle":"modal","data-bs-target":"#modal-form"},[as,te(" New ")])])])])])]),e("div",ss,[e("div",os,[e("div",ls,[e("div",ns,[e("div",is,[e("div",cs,[e("button",{class:"btn btn-primary me-md-2 mb-2","data-bs-toggle":"modal","data-bs-target":"#install-form",onClick:r[0]||(r[0]=i=>P("Application Installation"))},"INSTALL"),e("button",{class:"btn btn-danger me-md-2 mb-2","data-bs-toggle":"modal","data-bs-target":"#install-form",onClick:r[1]||(r[1]=i=>P("Application Uninstallation"))},"UNINSTALL")])]),e("div",ds,[e("div",rs,[(a(!0),t(I,null,S(p.value,(i,R)=>(a(),t("div",{class:"list-group-item",key:R},[e("div",us,[e("div",ps,v(R+1),1),e("div",ms,[e("img",{src:i.catalogIcon,class:"rounded",alt:"Catalog Icon",width:"40",height:"40"},null,8,hs)]),e("div",{class:"col",onClick:O=>_(R)},[te(v(i.catalogTitle)+" ",1),e("div",_s,v(i.catalogSummary),1)],8,vs),e("div",fs,v(i.catalogCategory),1),e("div",gs,[e("div",bs,[ws,e("div",ys,[e("a",{class:"dropdown-item",onClick:O=>G(i.catalogIdx),"data-bs-toggle":"modal","data-bs-target":"#modal-form"},"Update",8,ks)])])]),e("div",{id:"accordion_"+i.catalogIdx,class:"accordion-collapse collapse",style:pe([i.isShow?{display:"block"}:{display:"none"}])},[e("div",Is,[Cs,e("div",{style:{"white-space":"pre-wrap"},innerHTML:Y(i.catalogDescription)},null,8,Ss),e("div",null,[xs,Ns,Ms,e("ul",{id:`${R}-entity-ul`},[H(i.refData,"HOMEPAGE")?(a(!0),t(I,{key:0},S(i.refData.HOMEPAGE,O=>(a(),t("li",null,[e("a",{onClick:w=>j(O.referenceValue),class:"btn"},v(O.referenceValue),9,Ts)]))),256)):A("",!0)],8,Us),As,e("ul",{id:`${R}-tag-ul`},[H(i.refData,"TAG")?(a(!0),t(I,{key:0},S(i.refData.TAG,O=>(a(),t("span",null,"#"+v(O.referenceValue)+"  ",1))),256)):A("",!0)],8,Vs),Ds,e("ul",{id:`${R}-tag-ul`},[i.recommendedCpu&&i.recommendedMemory&&i.recommendedDisk?(a(),t(I,{key:0},[e("button",Es," CPU : "+v(i.recommendedCpu),1),e("button",Ls," MEMORY : "+v(i.recommendedMemory),1),e("button",Hs," DISK : "+v(i.recommendedDisk),1)],64)):A("",!0)],8,Rs)])])],12,$s)])]))),128))])])]),e("div",Bs,[$(e("input",{type:"text",class:"form-control",placeholder:"Search…",onKeypress:K,"onUpdate:modelValue":r[2]||(r[2]=i=>l.value=i),id:"inputCatalogSearch"},null,544),[[z,l.value]]),Fs,js,U.value.length==0?(a(),t("div",zs,"검색된 관련 ContainerImage가 없습니다.")):A("",!0),e("div",Os,[(a(!0),t(I,null,S(U.value,(i,R)=>(a(),t("div",{class:"col-md-6 col-lg-12",key:R},[e("div",Gs,[e("div",Ps,[e("div",Ks,[e("img",{src:i.logo_url.large,class:"rounded-start",alt:"Shape of You",width:"80",height:"80"},null,8,Ws)]),e("div",Ys,[e("div",qs,[e("a",Js,v(i.name),1),e("div",Qs,v(i.short_description.length>30?i.short_description.substring(0,30)+"...":""),1)])]),e("div",{class:"col-auto lh-1"},[e("div",{class:"dropdown"},[Xs,e("div",{class:"dropdown-menu dropdown-menu-end"},[e("a",{class:"dropdown-item",onClick:W}," 해당 페이지로 이동 "),Zs,eo])])])])])]))),128))]),to,ao,o.value.length==0?(a(),t("div",so,"검색된 관련 HelmChart가 없습니다.")):A("",!0),e("div",oo,[(a(!0),t(I,null,S(o.value,(i,R)=>(a(),t("div",{class:"col-md-6 col-lg-12",key:R},[e("div",lo,[e("div",no,[io,e("div",co,[e("div",ro,[e("a",uo,v(i.name),1),e("div",po,v(i.description.length>30?i.description.substring(0,30)+"...":""),1)])]),e("div",{class:"col-auto lh-1"},[e("div",{class:"dropdown"},[mo,e("div",{class:"dropdown-menu dropdown-menu-end"},[e("a",{class:"dropdown-item",onClick:Z}," 해당 페이지로 이동 "),ho,vo])])])])])]))),128))])])])])])]),ee(Xa,{"ns-name":b.value},null,8,["ns-name"]),ee(ct,{mode:y.value,"catalog-idx":x.value,onGetList:T},null,8,["mode","catalog-idx"]),ee(St,{"job-name":m.value},null,8,["job-name"]),ee($a,{"ns-id":k.value,title:c.value,"catalog-list":p.value},null,8,["ns-id","title","catalog-list"])],512))}});export{bo as default};
