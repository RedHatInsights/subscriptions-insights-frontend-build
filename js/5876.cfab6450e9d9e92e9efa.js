"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[5876],{65876:(e,t,o)=>{o.r(t),o.d(t,{default:()=>y,ToolbarFieldRangedMonthly:()=>y,toolbarFieldOptions:()=>S,useOnSelect:()=>p});var r=o(15274),i=o(56949),n=o(92950),a=o.n(n),l=o(186),u=o(51858),s=o(49844),c=o(30446),d=o(76006),T=o(83109),S=d.i3.getRangedMonthDateTime().listDateTimeRanges.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{selected:!1})})),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useDispatch,o=void 0===t?l.Cr.reactRedux.useDispatch:t,i=e.useProduct,n=void 0===i?u.useProduct:i,a=n(),s=a.viewId,d=o();return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.value,o=t.startDate,i=t.endDate;d([{type:l.JD.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:s},(0,r.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[c.VN.GRANULARITY],viewId:s},c.VN.GRANULARITY,c.U9.DAILY),(0,r.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[c.VN.START_DATE],viewId:s},c.VN.START_DATE,null==o?void 0:o.toISOString()),(0,r.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[c.VN.END_DATE],viewId:s},c.VN.END_DATE,null==i?void 0:i.toISOString())])}},y=function(e){var t=e.isFilter,o=e.options,r=e.position,n=e.t,l=e.useOnSelect,u=(0,e.useProductGraphTallyQuery)()[c.VN.START_DATE],d=l(),T=o.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{selected:e.title===u||e.value.startDate.toISOString()===u})}));return a().createElement(s.Select,{"aria-label":n("curiosity-toolbar.placeholder".concat(t?"_filter":""),{context:"rangedMonthly"}),onSelect:d,options:T,placeholder:n("curiosity-toolbar.placeholder".concat(t?"_filter":""),{context:"rangedMonthly"}),position:r,maxHeight:250,"data-test":"toolbarFieldRangeGranularity"})};y.defaultProps={isFilter:!1,options:S,position:s.SelectPosition.left,t:T.translate,useOnSelect:p,useProductGraphTallyQuery:u.useProductGraphTallyQuery}}}]);
//# sourceMappingURL=../sourcemaps/5876.aa238fab3e612e16b31a1bad00355481.js.map