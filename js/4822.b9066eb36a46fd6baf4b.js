"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[4822],{44822:(t,r,e)=>{e.r(r),e.d(r,{default:()=>D,inventoryListHelpers:()=>D,applySortFilters:()=>v,applyWrappableFilters:()=>d,parseInventoryFilters:()=>y,parseRowCellsListData:()=>h});var o=e(48418),i=e(1252),n=e(56949),s=e(92950),l=e.n(s),a=e(78247),u=e(68929),c=e.n(u),f=e(83109),p=e(30446),v=function(t){var r=t.filter,e=void 0===r?{}:r,o=t.onSort,i=t.query,s=void 0===i?{}:i,l=e.id,u=(0,n.Z)({},e),f=u.onSort||o;if(!u.onSort&&o&&(u.onSort=o),f&&"boolean"!=typeof u.sortActive&&(null==s?void 0:s[p.VN.SORT])&&c()(null==s?void 0:s[p.VN.SORT])===l&&(u.sortActive=!0),f&&!u.sortDirection&&(null==s?void 0:s[p.VN.DIRECTION]))switch(null==s?void 0:s[p.VN.DIRECTION]){case p.hb.DESCENDING:u.sortDirection=a.SortByDirection.desc;break;default:u.sortDirection=a.SortByDirection.asc}return!f||u.sortActive||(null==s?void 0:s[p.VN.SORT])||!0!==u.isSortDefault||(u.sortActive=!0,u.sortDefaultInitialDirection&&(u.sortDirection=u.sortDefaultInitialDirection)),u},d=function(t){var r=t.filter,e=void 0===r?{}:r,o=(0,n.Z)({},e);return Array.isArray(o.transforms)?o.transforms.push(a.wrappable):o.transforms=[a.wrappable],o},y=function(t){var r=t.filters,e=void 0===r?[]:r,o=t.onSort,s=t.query,l=void 0===s?{}:s;return(0,i.Z)(e).map((function(t){var r=(0,n.Z)({},t);return r.isSortable&&Object.assign(r,v({filter:r,onSort:o,query:l})),r.isWrappable&&Object.assign(r,d({filter:r})),r}))},h=function(t){var r=t.filters,e=void 0===r?[]:r,s=t.cellData,u=void 0===s?{}:s,c=t.session,p=void 0===c?{}:c,v=[],d=[],y={};return Object.entries(u).forEach((function(t){var r=(0,o.Z)(t,2),e=r[0],i=r[1];y[e]={title:(0,f.translate)("curiosity-inventory.header",{context:e}),value:i},v.push(y[e].title),d.push(i)})),(null==e?void 0:e.length)&&(v.length=0,d.length=0,e.forEach((function(t){var r,e,o,s,u,c,h=t.id,D=t.cell,S=t.cellWidth,b=t.header,m=t.onSort,Z=t.sortActive,A=t.sortDirection,I=t.transforms;y[h]?(r=null!==(o=null===(s=y[h])||void 0===s?void 0:s.title)&&void 0!==o?o:h,e=null!==(u=null===(c=y[h])||void 0===c?void 0:c.value)&&void 0!==u?u:""):h&&(r=(0,f.translate)("curiosity-inventory.header",{context:h}),e=""),b&&(r="function"==typeof b&&b((0,n.Z)({},y))||b),("string"==typeof r||"number"==typeof r||l().isValidElement(r))&&(r={title:r}),r&&(r.transforms=[],Array.isArray(I)&&(r.transforms=r.transforms.concat((0,i.Z)(I))),"number"==typeof S&&r.transforms.push((0,a.cellWidth)(S))),"function"==typeof m&&(r=(0,n.Z)((0,n.Z)({},r),{},{onSort:function(t){return m((0,n.Z)({},y),(0,n.Z)((0,n.Z)({},t),{},{id:h}))},sortActive:Z,sortDirection:A})),D&&(e="function"==typeof D&&D((0,n.Z)({},y),(0,n.Z)({},p))||D),("string"==typeof e||"number"==typeof e||l().isValidElement(e))&&(e={title:e}),v.push(r),d.push(e)}))),{columnHeaders:v,cells:d,data:(0,n.Z)({},y)}},D={applySortFilters:v,applyWrappableFilters:d,parseInventoryFilters:y,parseRowCellsListData:h}}}]);
//# sourceMappingURL=../sourcemaps/4822.91ba7f2534fb7b5801a4.js.map