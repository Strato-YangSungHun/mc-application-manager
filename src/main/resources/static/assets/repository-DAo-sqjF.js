import{s}from"./request-BUVHrNac.js";const n=e=>s.get(`/oss/v1/repositories/${e}/list`);function i(e,t){return s.delete(`/oss/v1/repositories/${e}/delete/${t}`)}function p(e,t){return s.post(`/oss/v1/repositories/${e}/create`,t)}const a=(e,t)=>s.get(`/oss/v1/repositories/${e}/detail/${t}`),u=(e,t)=>s.put(`/oss/v1/repositories/${e}/update`,t);function c(e,t){return s.delete(`/oss/v1/components/${e}/delete/${t}`)}const $=(e,t)=>s.get(`/oss/v1/components/${e}/list/${t}`),d=(e,t,o)=>s.post(`/oss/v1/components/${e}/create/${t}`,o);export{n as a,c as b,d as c,i as d,$ as e,a as g,p as r,u};
