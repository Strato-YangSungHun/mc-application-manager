import{c as U}from"./IconPlus-Ut5FpUsC.js";import{r as Y,a as J,g as Q,b as W,S as X,s as Z,c as tt,I as O,A as st}from"./softwareCatalogForm-oL-MgVLq.js";import{_ as at}from"./Tabulator.vue_vue_type_style_index_0_lang-DH8KGYiw.js";import{d as E,u as K,c as B,r as l,h as n,a as i,b as t,q as M,t as r,j as x,e as z,g as q,o as j,i as h,s as I,F as C,f as L,x as ot,y as et,l as nt}from"./index-DeRM_aDz.js";import{_ as it}from"./lodash-CZrbLC7d.js";import{_ as lt}from"./RepositoryList.vue_vue_type_script_setup_true_lang-BQgw8Rnf.js";import"./request-DDEURQ0f.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./TableHeader.vue_vue_type_script_setup_true_lang-BVsdm7C9.js";import"./repository-ZO0S3VlE.js";/**
 * @license @tabler/icons-vue v3.21.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ct=U("outline","activity-heartbeat","IconActivityHeartbeat",[["path",{d:"M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5",key:"svg-0"}]]);/**
 * @license @tabler/icons-vue v3.21.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var dt=U("outline","apps","IconApps",[["path",{d:"M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-0"}],["path",{d:"M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-1"}],["path",{d:"M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-2"}],["path",{d:"M14 7l6 0",key:"svg-3"}],["path",{d:"M17 4l0 6",key:"svg-4"}]]);/**
 * @license @tabler/icons-vue v3.21.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var rt=U("outline","folder","IconFolder",[["path",{d:"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",key:"svg-0"}]]);/**
 * @license @tabler/icons-vue v3.21.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ut=U("outline","refresh","IconRefresh",[["path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",key:"svg-0"}],["path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",key:"svg-1"}]]);const pt={class:"modal",id:"action-confirm",tabindex:"-1"},ht={class:"modal-dialog modal-lg",role:"document"},_t={class:"modal-content"},vt={class:"modal-header"},mt={class:"modal-title"},gt={key:0},bt={class:"modal-body",style:{"max-height":"calc(100vh - 200px)","overflow-y":"auto"}},ft={class:"mb-3"},yt=t("label",{class:"form-label"},"Reason",-1),wt=t("p",{class:"text-muted"}," Please enter a reason ",-1),kt={class:"modal-footer d-flex justify-content-between"},St=E({__name:"applicationActionConfirm",props:{title:{},applicationStatusId:{},type:{},applicationName:{}},emits:["getApplicationsStatusList"],setup(R,{emit:y}){const u=K(),_=R,b=y,p=B(()=>_.title),f=B(()=>_.applicationStatusId),c=B(()=>_.type),v=l(""),m=()=>{v.value=""},T=async()=>{m();let w;const g={operation:p.value,applicationStatusId:f.value,reason:v.value};if(c.value==="VM"){const{data:k}=await Y(g);w=k}else if(c.value==="K8S"){const{data:k}=await J(g);w=k}b("getApplicationsStatusList"),w?u.success(`${p.value} Action SUCCESS`):u.error(`${p.value} Action FAIL`)};return(w,g)=>(n(),i("div",pt,[t("div",ht,[t("div",_t,[t("div",vt,[t("h5",mt,[M(r(w.applicationName)+" "+r(p.value)+" ",1),c.value?(n(),i("span",gt,"("+r(c.value)+")",1)):x("",!0)]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:m})]),t("div",bt,[t("div",ft,[yt,wt,z(t("textarea",{class:"form-control",rows:"10",placeholder:"Reason","onUpdate:modelValue":g[0]||(g[0]=k=>v.value=k)},null,512),[[q,v.value]])])]),t("div",kt,[t("a",{class:"btn btn-link link-secondary","data-bs-dismiss":"modal",onClick:m}," Cancel "),t("div",null,[t("button",{class:"btn btn-primary ms-auto","data-bs-dismiss":"modal",onClick:T},r(p.value),1)])])])])]))}}),Ct={class:"d-flex justify-content-between"},$t=t("h2",null,"Apps Status",-1),At={class:"me-1"},It={class:"card card-flush w-100"},Tt=E({__name:"applicationStatusList",setup(R){const y=K(),u=l([]),_=l([]),b=l(""),p=l(""),f=l(0),c=l(""),v=l("");j(async()=>{w(),await m()});const m=async()=>{try{T();const{data:e}=await Q();e?u.value=e:u.value=[]}catch(e){console.log(e),y.error("Unable to retrieve data")}},T=()=>{u.value=[];const e=new Date,d={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1};b.value=e.toLocaleDateString("ko-KR",d)},w=()=>{_.value=[{title:"Type",field:"deploymentType",width:"10%"},{title:"Application",field:"applicationName",width:"20%"},{title:"Infra",field:"vmId",width:"15%"},{title:"Status",width:"15%",formatter:k},{title:"CheckedAt",field:"checkedAt",width:"20%"},{title:"Action",width:"20%",formatter:G,cellClick:async function(e,d){const D=e.target,N=D==null?void 0:D.getAttribute("id"),V=d.getRow().getData().id,H=d.getRow().getData().deploymentType,F=d.getRow().getData().applicationName,$={operation:"",applicationStatusId:V,deploymentType:H,applicationName:F};N==="restart-btn"?($.operation="RESTART",await g($)):N==="stop-btn"?($.operation="STOP",await g($)):N==="uninstall-btn"&&($.operation="UNINSTALL",await g($))}}]},g=async e=>{p.value=e.operation,f.value=e.applicationStatusId,c.value=e.deploymentType,v.value=e.applicationName},k=e=>{const d=e.getRow().getData().status;return d==="RUNNING"?`
      <div>
        <span class="status status-green">  
          <span class="status-dot"></span>
            ${d}
        </span>
      </div>`:d==="RESTART"||d==="IN_PROGRESS"?`
    <div>
      <span class="status status-primary">  
        <span class="status-dot"></span>
          ${d}
      </span>
    </div>`:d==="NOT_FOUND"?`
    <div>
      <span class="status status-yellow">  
        <span class="status-dot"></span>
          ${d}
      </span>
    </div>`:`
  <div>
    <span class="status status-red">  
      <span class="status-dot"></span>
        ${d}
    </span>
  </div>`},G=()=>`
  <div>
    <button
      class='btn btn-ghost-primary d-none d-sm-inline-block'
      id='restart-btn'
      data-bs-toggle='modal' 
      data-bs-target='#action-confirm'>
      Restart
    </button>
    <button
      class='btn btn-ghost-warning d-none d-sm-inline-block'
      id='stop-btn'
      data-bs-toggle='modal' 
      data-bs-target='#action-confirm'>
      Stop
    </button>
    <button
      class='btn btn-ghost-danger d-none d-sm-inline-block'
      id='uninstall-btn'
      data-bs-toggle='modal' 
      data-bs-target='#action-confirm'>
      Uninstall
    </button>
  </div>`;return(e,d)=>(n(),i(C,null,[t("div",null,[t("div",Ct,[$t,t("div",null,[t("span",At,r(b.value),1),h(I(ut),{class:"cursor-pointer",onClick:m})])]),t("div",It,[h(at,{columns:_.value,"table-data":u.value},null,8,["columns","table-data"])])]),h(St,{title:p.value,applicationStatusId:f.value,type:c.value,applicationName:v.value,onGetApplicationsStatusList:m},null,8,["title","applicationStatusId","type","applicationName"])],64))}}),xt={ref:"sofwareCatalog"},Dt=t("h2",null,"Catalog",-1),Nt={class:"row"},Lt={class:"col-lg-9"},Mt={class:"card"},Rt={class:"list-group card-list-group",id:"sc-list-group"},Ht={class:"row g-2 align-items-center"},Ut={class:"col-auto me-3"},Et=["src"],Gt=["onClick"],Vt={class:"text-muted"},Ft={class:"col-auto text-muted"},Pt={class:"col-auto lh-1"},Ot={class:"dropdown"},Bt={href:"#",class:"link-secondary","data-bs-toggle":"dropdown"},Kt={class:"dropdown-menu dropdown-menu-end"},jt=["onClick"],zt=["id"],qt={class:"accordion-body pt-0"},Yt=["innerHTML"],Jt=t("strong",null,"Ref Information",-1),Qt=["id"],Wt=["onClick"],Xt=t("strong",null,"TAGS",-1),Zt=["id"],ts=t("strong",null,"Recommended Spec",-1),ss=["id"],as={class:"btn btn-sm",style:{"margin-right":"5px"}},os={class:"btn btn-sm",style:{"margin-right":"5px"}},es={class:"btn btn-sm",style:{"margin-right":"5px"}},ns={class:"col-lg-3"},is=t("h3",{class:"mb-3"}," dockerHub search ",-1),ls={key:0,class:"col-md-6 col-lg-12",id:"resultDockerHubEmpty"},cs={class:"row row-cards",id:"resultDockerHubSearch"},ds={class:"card"},rs={class:"row row-0"},us={class:"col-auto"},ps=["src"],hs={class:"col"},_s={class:"card-body"},vs={href:"",target:"_blank"},ms={class:"text-muted"},gs={class:"col-auto lh-1"},bs={class:"dropdown"},fs={href:"#",class:"link-secondary","data-bs-toggle":"dropdown"},ys={class:"dropdown-menu dropdown-menu-end"},ws=["onClick"],ks=t("a",{class:"dropdown-item",href:"#"}," Copy file/image to repository ",-1),Ss={class:"mt-5"},Cs=t("h3",{class:"mb-3"}," artifactHub search ",-1),$s={key:0,class:"col-md-6 col-lg-12",id:"resultArtifactHubEmpty"},As={class:"row row-cards",id:"resultArtifactHubSearch"},Is={class:"card"},Ts={class:"row row-0"},xs=t("div",{class:"col-auto"},[t("img",{src:"https://artifacthub.io/static/media/placeholder_pkg_helm.png",class:"rounded-start",alt:"Shape of You",width:"80",height:"80"})],-1),Ds={class:"col"},Ns={class:"card-body"},Ls={href:"",target:"_blank"},Ms={class:"text-muted"},Rs={class:"col-auto lh-1"},Hs={class:"dropdown"},Us={href:"#",class:"link-secondary","data-bs-toggle":"dropdown"},Es={class:"dropdown-menu dropdown-menu-end"},Gs=["onClick"],Vs=t("a",{class:"dropdown-item",href:"#"}," Copy file/image to repository ",-1),Fs=E({__name:"softwareCatalogList",setup(R){const y=K(),u=l([]),_=l(null),b=l("new"),p=l({}),f=l(""),c=l(""),v=l([]),m=l([]);j(async()=>{c.value="",T()});const T=async()=>{try{await W(c.value).then(({data:a})=>{it.forEach(a,function(o){o.refData=w(o.catalogRefs),o.isShow=!1}),u.value=a})}catch(a){console.log(a),y.error("Unable to retrieve data.")}},w=a=>a.reduce((o,s)=>(o[s.refType]||(o[s.refType]=[]),o[s.refType].push(s),o),{}),g=async a=>{a.keyCode==13&&(await k(),await G())},k=async()=>{v.value=[];try{const{data:a}=await Z(c.value);for(let o=0;o<3;o++)v.value.push(a.results[o])}catch(a){console.log(a),y.error("Unable to retrieve data.")}},G=async()=>{m.value=[];try{const{data:a}=await tt(c.value);for(let o=0;o<3;o++)m.value.push(a.packages[o])}catch(a){console.log(a),y.error("Unable to retrieve data.")}},e=(a,o)=>{b.value="new",_.value=0,p.value=o,f.value=a},d=a=>{b.value="update",_.value=a},D=()=>{let a=`https://hub.docker.com/search?q=${c.value}`;window.open(a,"_blank")},N=()=>{let a=`https://artifacthub.io/packages/search?ts_query_web=${c.value}&sort=relevance&page=1`;window.open(a,"_blank")},V=async a=>{u.value[a].isShow=!u.value[a].isShow},H=(a,o)=>Object.prototype.hasOwnProperty.call(a,o),F=a=>{window.open(a)},$=a=>a.replace(/\\n|\n/g,"<br/>");return(a,o)=>(n(),i(C,null,[t("div",xt,[Dt,t("div",Nt,[t("div",Lt,[t("div",Mt,[t("div",Rt,[(n(!0),i(C,null,L(u.value,(s,S)=>(n(),i("div",{class:"list-group-item",key:S},[t("div",Ht,[t("div",Ut,[t("img",{src:s.logoUrlLarge,class:"rounded",alt:"Catalog Icon",width:"40",height:"40"},null,8,Et)]),t("div",{class:"col",onClick:A=>V(S)},[M(r(s.title)+" ",1),t("div",Vt,r(s.summary),1)],8,Gt),t("div",Ft,r(s.category),1),t("div",Pt,[t("div",Ot,[t("a",Bt,[h(I(O),{class:"icon",width:"24",height:"24","stroke-width":"2"})]),t("div",Kt,[t("a",{class:"dropdown-item",onClick:A=>d(s.id),"data-bs-toggle":"modal","data-bs-target":"#modal-form"}," Update ",8,jt)])])]),t("div",{id:"accordion_"+s.id,class:"accordion-collapse collapse",style:ot([s.isShow?{display:"block"}:{display:"none"}])},[t("div",qt,[t("div",{class:"mt-3 mb-5",innerHTML:$(s.description)},null,8,Yt),t("div",null,[Jt,t("ul",{id:`${S}-entity-ul`},[H(s.refData,"HOMEPAGE")?(n(!0),i(C,{key:0},L(s.refData.HOMEPAGE,(A,P)=>(n(),i("li",{key:P},[t("a",{class:"btn",onClick:ra=>F(A.refValue)},r(A.refValue),9,Wt)]))),128)):x("",!0)],8,Qt),Xt,t("ul",{id:`${S}-tag-ul`},[H(s.refData,"TAG")?(n(!0),i(C,{key:0},L(s.refData.TAG,(A,P)=>(n(),i("span",{key:P},"#"+r(A.refValue)+"  ",1))),128)):x("",!0)],8,Zt),ts,t("ul",{id:`${S}-tag-ul`},[s.recommendedCpu&&s.recommendedMemory&&s.recommendedDisk?(n(),i(C,{key:0},[t("button",as," CPU : "+r(s.recommendedCpu)+" Core ",1),t("button",os," MEMORY : "+r(s.recommendedMemory)+" GB ",1),t("button",es," DISK : "+r(s.recommendedDisk)+" GB ",1)],64)):x("",!0)],8,ss)])])],12,zt)])]))),128))])])]),t("div",ns,[z(t("input",{type:"text",class:"form-control mb-3",placeholder:"Search…",onKeypress:g,"onUpdate:modelValue":o[0]||(o[0]=s=>c.value=s),id:"inputCatalogSearch"},null,544),[[q,c.value]]),is,v.value.length==0?(n(),i("div",ls," There are no related Container Images found. ")):x("",!0),t("div",cs,[(n(!0),i(C,null,L(v.value,(s,S)=>(n(),i("div",{class:"col-md-6 col-lg-12",key:S},[t("div",ds,[t("div",rs,[t("div",us,[t("img",{src:s.logo_url.large,class:"rounded-start",alt:"Shape of You",width:"80",height:"80"},null,8,ps)]),t("div",hs,[t("div",_s,[t("a",vs,r(s.name),1),t("div",ms,r(s.short_description.length>30?s.short_description.substring(0,30)+"...":""),1)])]),t("div",gs,[t("div",bs,[t("a",fs,[h(I(O),{class:"icon",size:"24","stroke-width":"2"})]),t("div",ys,[t("a",{class:"dropdown-item",onClick:D}," Go to the page "),t("a",{class:"dropdown-item",href:"#","data-bs-toggle":"modal","data-bs-target":"#modal-form",onClick:A=>e("dockerhub",s)}," Enter content into softwareCatalog ",8,ws),ks])])])])])]))),128))]),t("div",Ss,[Cs,m.value.length==0?(n(),i("div",$s," There are no related Helm Charts found. ")):x("",!0),t("div",As,[(n(!0),i(C,null,L(m.value,(s,S)=>(n(),i("div",{class:"col-md-6 col-lg-12",key:S},[t("div",Is,[t("div",Ts,[xs,t("div",Ds,[t("div",Ns,[t("a",Ls,r(s.name),1),t("div",Ms,r(s.description.length>30?s.description.substring(0,30)+"...":""),1)])]),t("div",Rs,[t("div",Hs,[t("a",Us,[h(I(O),{class:"icon",width:"24",height:"24","stroke-width":"2"})]),t("div",Es,[t("a",{class:"dropdown-item",onClick:N}," Go to the page "),t("a",{class:"dropdown-item",href:"#","data-bs-toggle":"modal","data-bs-target":"#modal-form",onClick:A=>e("artifacthub",s)}," Enter content into softwareCatalog ",8,Gs),Vs])])])])])]))),128))])])])])],512),h(X,{mode:b.value,"catalog-idx":_.value,"repository-application-info":p.value,"repository-name":f.value,onGetList:T},null,8,["mode","catalog-idx","repository-application-info","repository-name"])],64))}}),Ps={class:"page",ref:"sofwareCatalog"},Os={class:"page-wrapper"},Bs=nt('<div class="page-header d-print-none"><div class="container-xxl"><div class="row g-2 align-items-center"><div class="col d-flex"><h2 class="page-title">Software catalog</h2></div></div></div></div>',1),Ks={class:"page-body"},js={class:"container-xxl"},zs={class:"row"},qs={class:"col-lg-12"},Ys={class:"col-auto me-auto fs-3"},Js={class:"d-flex justify-content-end"},Qs={class:"card"},Ws={class:"card-header"},Xs={class:"nav nav-tabs card-header-tabs","data-bs-toggle":"tabs"},Zs={class:"nav-item"},ta={href:"#tabs-catalog",class:"nav-link active","data-bs-toggle":"tab"},sa={class:"nav-item"},aa={href:"#tabs-status",class:"nav-link","data-bs-toggle":"tab"},oa={class:"nav-item"},ea={href:"#tabs-repository",class:"nav-link","data-bs-toggle":"tab"},na={class:"card-body"},ia={class:"tab-content"},la={class:"tab-pane active show",id:"tabs-catalog"},ca={class:"tab-pane",id:"tabs-status"},da={class:"tab-pane",id:"tabs-repository"},wa=E({__name:"SoftwareCatalog",setup(R){const y=et(),u=l(""),_=l("");j(async()=>{u.value=y.getNsId()});const b=p=>{_.value=p};return(p,f)=>(n(),i(C,null,[t("div",Ps,[t("div",Os,[Bs,t("div",Ks,[t("div",js,[t("div",zs,[t("div",qs,[t("div",Ys,[t("div",Js,[t("button",{class:"btn btn-primary me-md-2 mb-2","data-bs-toggle":"modal","data-bs-target":"#install-form",onClick:f[0]||(f[0]=c=>b("Application Installation"))},"INSTALL")])]),t("div",Qs,[t("div",Ws,[t("ul",Xs,[t("li",Zs,[t("a",ta,[h(I(dt),{class:"icon me-2",width:"24",height:"24","stroke-width":"2"}),M(" Catalog ")])]),t("li",sa,[t("a",aa,[h(I(ct),{class:"icon me-2",width:"24",height:"24","stroke-width":"2"}),M(" Apps Status ")])]),t("li",oa,[t("a",ea,[h(I(rt),{class:"icon me-2",width:"24",height:"24","stroke-width":"2"}),M(" Repository ")])])])]),t("div",na,[t("div",ia,[t("div",la,[t("div",null,[h(Fs,{nsId:u.value},null,8,["nsId"])])]),t("div",ca,[t("div",null,[h(Tt)])]),t("div",da,[t("div",null,[h(lt)])])])])])])])])])])],512),h(st,{"ns-id":u.value,title:_.value},null,8,["ns-id","title"])],64))}});export{wa as default};