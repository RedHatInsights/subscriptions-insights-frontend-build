"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[4097],{74097:(e,t,o)=>{o.r(t),o.d(t,{default:()=>f,ToolbarFieldUom:()=>f,toolbarFieldOptions:()=>p,useOnSelect:()=>v});var r=o(56949),u=o(15274),i=o(92950),l=o.n(i),n=o(186),c=o(51858),s=o(49844),a=o(30446),d=o(83109),p=Object.values(a.lu).map((function(e){return{title:(0,d.translate)("curiosity-toolbar.uom",{context:e}),value:e,selected:!1}})),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useDispatch,o=void 0===t?n.Cr.reactRedux.useDispatch:t,r=e.useProduct,i=void 0===r?c.useProduct:r,l=i(),s=l.viewId,d=o();return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.value,o=void 0===t?null:t;return d([{type:n.JD.query.SET_QUERY_RESET_INVENTORY_LIST,viewId:s},(0,u.Z)({type:n.JD.query.SET_QUERY_RHSM_TYPES[a.VN.UOM],viewId:s},a.VN.UOM,o)])}},f=function(e){var t=e.isFilter,o=e.options,u=e.position,i=e.t,n=e.useOnSelect,c=(0,e.useProductQuery)()[a.VN.UOM],d=n(),p=o.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{selected:e.value===c})}));return l().createElement(s.Select,{"aria-label":i("curiosity-toolbar.placeholder".concat(t?"_filter":""),{context:"uom"}),onSelect:d,options:p,selectedOptions:c,placeholder:i("curiosity-toolbar.placeholder".concat(t?"_filter":""),{context:"uom"}),position:u,"data-test":"toolbarFieldUom"})};f.defaultProps={isFilter:!1,options:p,position:s.SelectPosition.left,t:d.translate,useOnSelect:v,useProductQuery:c.useProductQuery}}}]);
//# sourceMappingURL=../sourcemaps/4097.2834a4edbb7c67006ca22011c6055dd8.js.map