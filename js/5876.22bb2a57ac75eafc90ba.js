"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[5876],{65876:(t,e,r)=>{r.r(e),r.d(e,{default:()=>S,ToolbarFieldRangedMonthly:()=>S,toolbarFieldOptions:()=>T});var a=r(15274),i=r(56949),n=r(92950),o=r.n(n),l=r(25097),u=r(49844),d=r(30446),s=r(76006),c=r(83109),T=s.i3.getRangedMonthDateTime().listDateTimeRanges.map((function(t){return(0,i.Z)((0,i.Z)({},t),{},{selected:!1})})),S=function t(e){var r=e.options,n=e.t,s=e.value,c=e.viewId,T=(0,l.v9)((function(t){var e,r;return null===(e=t.view.query)||void 0===e||null===(r=e[c])||void 0===r?void 0:r[d.VN.START_DATE]}),s),S=r.map((function(t){return(0,i.Z)((0,i.Z)({},t),{},{selected:t.title===T||t.value.startDate.toISOString()===T})}));return o().createElement(u.Select,{"aria-label":n("curiosity-toolbar.placeholder",{context:"granularity"}),onSelect:function(t){var e=t.value,r=e.startDate,i=e.endDate;l.h.dispatch([{type:l.JD.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:c},(0,a.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[d.VN.GRANULARITY],viewId:c},d.VN.GRANULARITY,d.U9.DAILY),(0,a.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[d.VN.START_DATE],viewId:c},d.VN.START_DATE,r.toISOString()),(0,a.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[d.VN.END_DATE],viewId:c},d.VN.END_DATE,i.toISOString())])},options:S,placeholder:n("curiosity-toolbar.placeholder",{context:"granularity"}),position:u.SelectPosition.right,maxHeight:250,"data-test":t.defaultProps.viewId})};S.defaultProps={options:T,t:c.translate,value:(0,c.translate)("curiosity-toolbar.granularityRange",{context:"current"}),viewId:"toolbarFieldRangeGranularity"}}}]);
//# sourceMappingURL=../sourcemaps/5876.f00c7ace68643a78da06.js.map