(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[5242,2243,2293,1858],{12243:function(t,e,r){"use strict";r.r(e),r.d(e,{applyConfigProperty:function(){return h},applyHeaderRowCellFilters:function(){return I},applySortFilters:function(){return g},applyWrappableFilters:function(){return C},default:function(){return b},inventoryCardHelpers:function(){return b},parseInventoryFilters:function(){return T},parseRowCellsListData:function(){return E}});var n=r(29439),o=r(1413),i=r(93433),u=r(92950),s=r.n(u),l=r(76871),a=r(68929),c=r.n(a),d=r(68630),v=r.n(d),f=r(3969),y=r(83109),p=r(30446),S=r(76006),h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.params,n=void 0===r?[]:r,o=t;if("function"==typeof t&&(o=t.apply(void 0,(0,i.Z)(Array.isArray(n)&&n||[n]))),"string"==typeof o||"number"==typeof o||s().isValidElement(o))return o},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.filters,r=void 0===e?[]:e,n=t.cellData,u=void 0===n?{}:n,a=t.meta,c=void 0===a?{}:a,d=t.session,p=void 0===d?{}:d,I=[],g=[];return r.forEach((function(t){var e,r,n,a,d=t.isStandalone,C=t.id,T=t.cell,E=t.cellWidth,b=t.header,m=t.onSort,P=t.showEmptyCell,Z=void 0===P||P,O=t.sortId,G=t.sortActive,_=t.sortDirection,F=t.transforms,R={title:(0,y.translate)("curiosity-inventory.header",{context:C}),transforms:[]},D={title:""};if(u[C])R.title=null!==(e=null===(r=u[C])||void 0===r?void 0:r.title)&&void 0!==e?e:C,D.title=null!==(n=null===(a=u[C])||void 0===a?void 0:a.value)&&void 0!==n?n:"";else if(!0===d)R.title="",D.title="";else if((S.BM.DEV_MODE||S.BM.REVIEW_MODE)&&console.warn('Warning: Filter "'.concat(C,'" not found in "table row" response data.'),u),!1===Z)return;if(b){var Q=h(b,{params:[(0,o.Z)({},u),(0,o.Z)({},p),(0,o.Z)({},c)]});if(Q?R.title=Q:v()(b)&&Object.assign(R,(0,o.Z)({},b)),b.tooltip&&R.title){var V=h(b.tooltip,{params:[(0,o.Z)({},u),(0,o.Z)({},p),(0,o.Z)({},c)]});V&&(R.title=s().createElement(f.Tooltip,{content:V},R.title)),delete R.tooltip}}if(Array.isArray(R.transforms)&&(Array.isArray(F)&&(R.transforms=R.transforms.concat((0,i.Z)(F))),"number"==typeof E&&R.transforms.push((0,l.cellWidth)(E))),"function"==typeof m&&(R.onSort=function(t){return m((0,o.Z)({},u),(0,o.Z)((0,o.Z)({},t),{},{id:O||C}))},R.sortActive=G,R.sortDirection=_),T){var N=h(T,{params:[(0,o.Z)({},u),(0,o.Z)({},p),(0,o.Z)({},c)]});if(N?D.title=N:v()(T)&&Object.assign(D,(0,o.Z)({},T)),T.tooltip&&D.title){var w=h(T.tooltip,{params:[(0,o.Z)({},u),(0,o.Z)({},p),(0,o.Z)({},c)]});w&&(D.title=s().createElement(f.Tooltip,{content:w},D.title)),delete D.tooltip}}I.push(R),g.push(D)})),{headerCells:I,bodyCells:g}},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.filter,r=void 0===e?{}:e,n=t.onSort,i=t.query,u=void 0===i?{}:i,s=r.id,a=r.sortId,d=a||s,v=(0,o.Z)({},r),f=v.onSort||n;return!v.onSort&&n&&(v.onSort=n),f&&"boolean"!=typeof v.sortActive&&null!=u&&u[p.VN.SORT]&&((null==u?void 0:u[p.VN.SORT])===d||c()(null==u?void 0:u[p.VN.SORT])===d)&&(v.sortActive=!0),f&&!v.sortDirection&&null!=u&&u[p.VN.DIRECTION]&&((null==u?void 0:u[p.VN.DIRECTION])===p.hb.DESCENDING?v.sortDirection=l.SortByDirection.desc:v.sortDirection=l.SortByDirection.asc),!f||v.sortActive||null!=u&&u[p.VN.SORT]||!0!==v.isSortDefault||(v.sortActive=!0,v.sortDefaultInitialDirection&&(v.sortDirection=v.sortDefaultInitialDirection)),v},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.filter,r=void 0===e?{}:e,n=(0,o.Z)({},r);return Array.isArray(n.transforms)?n.transforms.push(l.wrappable):n.transforms=[l.wrappable],n},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.filters,r=void 0===e?[]:e,n=t.onSort,u=t.query,s=void 0===u?{}:u;return(0,i.Z)(r).map((function(t){var e=(0,o.Z)({},t);return e.isSortable&&Object.assign(e,g({filter:e,onSort:n,query:s})),e.isWrappable&&Object.assign(e,C({filter:e})),e}))},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.filters,r=void 0===e?[]:e,u=t.cellData,s=void 0===u?{}:u,l=t.meta,a=void 0===l?{}:l,c=t.session,d=void 0===c?{}:c,v=[],f=[],p={};if(Object.entries(s).forEach((function(t){var e=(0,n.Z)(t,2),r=e[0],o=e[1],i=void 0===o?"":o;p[r]={title:(0,y.translate)("curiosity-inventory.header",{context:r}),value:i},v.push(p[r].title),f.push(i||"...")})),null!=r&&r.length&&Object.keys(p).length){v.length=0,f.length=0;var S=I({filters:r,cellData:p,meta:a,session:d}),h=S.headerCells,g=void 0===h?[]:h,C=S.bodyCells,T=void 0===C?[]:C;v.push.apply(v,(0,i.Z)(g)),f.push.apply(f,(0,i.Z)(T))}return{columnHeaders:v,cells:f,data:(0,o.Z)({},p)}},b={applyConfigProperty:h,applyHeaderRowCellFilters:I,applySortFilters:g,applyWrappableFilters:C,parseInventoryFilters:T,parseRowCellsListData:E}},15242:function(t,e,r){"use strict";r.r(e),r.d(e,{InventoryGuests:function(){return p},default:function(){return p}});var n=r(93433),o=r(29439),i=r(92950),u=r.n(i),s=r(76871),l=r(98944),a=r(51858),c=r(1797),d=r(12243),v=r(46262),f=r(78697),y=r(32293),p=function(t){var e,r,l,a=t.defaultPerPage,y=t.id,p=t.numberOfGuests,S=t.useGetGuestsInventory,h=t.useOnScroll,I=t.useProductInventoryGuestsQuery,g=t.useProductInventoryGuestsConfig,C=t.useSession,T=(0,i.useState)([]),E=(0,o.Z)(T,2),b=E[0],m=E[1],P=C(),Z=g().filters,O=I({options:{overrideId:y}})[v.O6.OFFSET],G=S(y),_=G.error,F=G.pending,R=G.data,D=(void 0===R?{}:R).data,Q=void 0===D?[]:D,V=h(y,(function(){var t=[].concat((0,n.Z)(b),(0,n.Z)(Q||[]));m(t)}));return u().createElement("div",{className:"fadein ".concat(_?"blur":"")},F&&0===O&&u().createElement(c.Loader,{variant:"table",tableProps:{borders:!1,className:"curiosity-guests-list",colCount:(null==Z?void 0:Z.length)||(null==Q?void 0:Q[0])&&Object.keys(Q[0]).length||1,colWidth:(null==Z?void 0:Z.length)&&Z.map((function(t){return t.cellWidth}))||[],rowCount:p<a?p:a,variant:s.TableVariant.compact}}),(!F&&0===O||O>0)&&(e=[],r=[].concat((0,n.Z)(b),(0,n.Z)(Q||[])).map((function(t){var r=Object.assign({},t),n=d.inventoryCardHelpers.parseRowCellsListData({filters:Z,cellData:r,session:P}),o=n.columnHeaders,i=n.cells;return e=o,{cells:i}})),l=(l=42*(p+1))<275&&l||275,u().createElement("div",{className:"curiosity-table-scroll",style:{height:"".concat(l,"px")}},u().createElement("div",{className:"curiosity-table-scroll-list".concat(l<275?"__no-scroll":""),onScroll:V},function(){if(O>0&&F){var t=u().createElement(c.Loader,{variant:"table",tableProps:{borders:!1,colCount:(null==Z?void 0:Z.length)||(null==Q?void 0:Q[0])&&Object.keys(Q[0]).length||1,colWidth:(null==Z?void 0:Z.length)&&Z.map((function(t){return t.cellWidth}))||[],rowCount:0,variant:s.TableVariant.compact}});return u().createElement("div",{className:"curiosity-table-scroll-loader__custom"},t)}return null}(),r.length&&u().createElement(f.Table,{borders:!1,variant:s.TableVariant.compact,className:"curiosity-guests-list",columnHeaders:e,rows:r})||null))))};p.defaultProps={defaultPerPage:5,useGetGuestsInventory:y.useGetGuestsInventory,useOnScroll:y.useOnScroll,useProductInventoryGuestsConfig:a.useProductInventoryGuestsConfig,useProductInventoryGuestsQuery:a.useProductInventoryGuestsQuery,useSession:l.useSession}},32293:function(t,e,r){"use strict";r.r(e),r.d(e,{context:function(){return f},default:function(){return f},useGetGuestsInventory:function(){return d},useOnScroll:function(){return v},useSelectorsGuestsInventory:function(){return c}});var n=r(4942),o=r(1413),i=r(15451),u=r(77823),s=r(61072),l=r(51858),a=r(46262),c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useSelectorsResponse,n=void 0===r?s.Cr.reactRedux.useSelectorsResponse:r,o=n((function(e){var r,n=e.inventory;return null==n||null===(r=n.hostsGuests)||void 0===r?void 0:r[t]})),i=o.error,u=o.cancelled,l=o.fulfilled,a=o.pending,c=o.data;return{error:i,fulfilled:l,pending:a||u||!1,data:1===(null==c?void 0:c.length)&&c[0]||c||{}}},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.getInventory,n=void 0===r?s.Ak.rhsm.getHostsInventoryGuests:r,u=e.useDispatch,a=void 0===u?s.Cr.reactRedux.useDispatch:u,d=e.useProductInventoryQuery,v=void 0===d?l.useProductInventoryGuestsQuery:d,f=e.useSelectorsInventory,y=void 0===f?c:f,p=v({options:{overrideId:t}}),S=a(),h=y(t);return(0,i.Z)((function(){n(t,p)(S)}),[S,t,p]),(0,o.Z)({},h)},v=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.useDispatch,i=void 0===o?s.Cr.reactRedux.useDispatch:o,d=r.useSelectorsInventory,v=void 0===d?c:d,f=r.useProductInventoryQuery,y=void 0===f?l.useProductInventoryGuestsQuery:f,p=i(),S=v(t),h=S.pending,I=S.data,g=void 0===I?{}:I,C=(null==g?void 0:g.meta)||{},T=C.count,E=y({options:{overrideId:t}}),b=E[a.O6.LIMIT],m=E[a.O6.OFFSET];return(0,u.Z)((function(){p([{type:s.JD.query.SET_QUERY_CLEAR_INVENTORY_GUESTS_LIST,viewId:t}])})),function(r){var o=r.target,i=o.scrollHeight-o.scrollTop===o.clientHeight;T>(m+1)*b&&i&&!h&&("function"==typeof e&&e(r),p([(0,n.Z)({type:s.JD.query.SET_QUERY_RHSM_GUESTS_INVENTORY_TYPES[a.O6.OFFSET],viewId:t},a.O6.OFFSET,m+1),(0,n.Z)({type:s.JD.query.SET_QUERY_RHSM_GUESTS_INVENTORY_TYPES[a.O6.LIMIT],viewId:t},a.O6.LIMIT,b)]))}},f={useGetGuestsInventory:d,useOnScroll:v,useSelectorsGuestsInventory:c}},51858:function(t,e,r){"use strict";r.r(e),r.d(e,{DEFAULT_CONTEXT:function(){return y},ProductViewContext:function(){return p},context:function(){return F},default:function(){return F},useProduct:function(){return m},useProductContext:function(){return b},useProductGraphConfig:function(){return P},useProductGraphTallyQuery:function(){return g},useProductInventoryGuestsConfig:function(){return Z},useProductInventoryGuestsQuery:function(){return C},useProductInventoryHostsConfig:function(){return O},useProductInventoryHostsQuery:function(){return T},useProductInventorySubscriptionsConfig:function(){return G},useProductInventorySubscriptionsQuery:function(){return E},useProductQuery:function(){return I},useProductQueryFactory:function(){return h},useProductToolbarConfig:function(){return _}});var n=r(45987),o=r(4942),i=r(1413),u=r(92950),s=r.n(u),l=r(12723),a=r(2606),c=r(30446),d=r(46262),v=r(62834),f=["initialGraphFilters","initialInventoryFilters","initialSubscriptionsInventoryFilters","productContextFilterUom"],y=[{},v.B.noop],p=s().createContext(y),S=function(){return(0,u.useContext)(p)},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.overrideId,n=e.useProductViewContext,o=void 0===n?S:n,u=o(),s=u[t],l=u.productId,c=u.viewId,d=a.Cr.reactRedux.useSelector((function(e){var n,o=e.view;return null==o||null===(n=o[t])||void 0===n?void 0:n[r]}),void 0),v=a.Cr.reactRedux.useSelector((function(e){var r,n=e.view;return null==n||null===(r=n[t])||void 0===r?void 0:r[l]}),void 0),f=a.Cr.reactRedux.useSelector((function(e){var r,n=e.view;return null==n||null===(r=n[t])||void 0===r?void 0:r[c]}),void 0);return(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},s),d),v),f)},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,r=void 0===e?"query":e,n=t.options;return h(r,n)},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,r=void 0===e?"graphTallyQuery":e,n=t.schemaCheck,o=void 0===n?c.VX.RHSM_API_QUERY_SET_REPORT_CAPACITY_TYPES:n,u=t.options;return l.VS.setApiQuery((0,i.Z)((0,i.Z)({},I()),h(r,u)),o)},C=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.defaultLimit,n=void 0===r?100:r,u=e.defaultOffset,s=void 0===u?0:u,a=e.queryType,v=void 0===a?"inventoryGuestsQuery":a,f=e.schemaCheck,y=void 0===f?c.VX.RHSM_API_QUERY_SET_INVENTORY_GUESTS_TYPES:f,p=e.options;return l.VS.setApiQuery((0,i.Z)((0,i.Z)((t={},(0,o.Z)(t,d.O6.LIMIT,n),(0,o.Z)(t,d.O6.OFFSET,s),t),I()),h(v,p)),y)},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,r=void 0===e?"inventoryHostsQuery":e,n=t.schemaCheck,o=void 0===n?c.VX.RHSM_API_QUERY_SET_INVENTORY_TYPES:n,u=t.options;return l.VS.setApiQuery((0,i.Z)((0,i.Z)({},I()),h(r,u)),o)},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,r=void 0===e?"inventorySubscriptionsQuery":e,n=t.schemaCheck,o=void 0===n?c.VX.RHSM_API_QUERY_SET_INVENTORY_TYPES:n,u=t.options;return l.VS.setApiQuery((0,i.Z)((0,i.Z)({},I()),h(r,u)),o)},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductQuery,r=void 0===e?I:e,o=t.useProductViewContext,s=void 0===o?S:o,l=r(),a=l[c.VN.UOM],d=s(),v=d.initialGraphFilters,y=void 0===v?[]:v,p=d.initialInventoryFilters,h=void 0===p?[]:p,g=d.initialSubscriptionsInventoryFilters,C=void 0===g?[]:g,T=d.productContextFilterUom,E=(0,n.Z)(d,f),b=(0,u.useCallback)((function(){if(!0===T){var t=function(t){var e=t.id;return!t.isOptional||new RegExp(a,"i").test(e)};return(0,i.Z)((0,i.Z)({},E),{},{initialGraphFilters:y.filter(t),initialInventoryFilters:h.filter(t),initialSubscriptionsInventoryFilters:C.filter(t)})}return(0,i.Z)((0,i.Z)({},E),{},{initialGraphFilters:y,initialInventoryFilters:h,initialSubscriptionsInventoryFilters:C})}),[E,y,h,C,T,a]);return b()},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductViewContext,r=void 0===e?S:e,n=r(),o=n.productGroup,i=n.productId,u=n.productLabel,s=n.viewId;return{productGroup:o,productId:i,productLabel:u,viewId:s}},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,r=void 0===e?b:e,n=r(),o=n.initialGraphFilters,i=n.initialGraphSettings,u=void 0===i?{}:i;return{filters:o,settings:u}},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,r=void 0===e?b:e,n=r(),o=n.inventoryGuestsQuery,i=void 0===o?{}:o,u=n.initialGuestsFilters,s=n.initialGuestsSettings,l=void 0===s?{}:s;return{filters:u,initialQuery:i,settings:l}},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,r=void 0===e?b:e,n=r(),o=n.initialInventoryFilters,i=n.initialInventorySettings,u=void 0===i?{}:i;return{filters:o,settings:u}},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,r=void 0===e?b:e,n=r(),o=n.initialSubscriptionsInventoryFilters,i=n.initialSubscriptionsInventorySettings,u=void 0===i?{}:i;return{filters:o,settings:u}},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,r=void 0===e?b:e,n=r(),o=n.initialToolbarFilters,i=n.initialToolbarSettings,u=void 0===i?{}:i,s=n.initialSecondaryToolbarFilters;return{filters:o,secondaryFilters:s,settings:u}},F={ProductViewContext:p,DEFAULT_CONTEXT:y,useProductContext:b,useQuery:I,useQueryFactory:h,useGraphTallyQuery:g,useInventoryGuestsQuery:C,useInventoryHostsQuery:T,useInventorySubscriptionsQuery:E,useProduct:m,useGraphConfig:P,useInventoryGuestsConfig:Z,useInventoryHostsConfig:O,useInventorySubscriptionsConfig:G,useToolbarConfig:_}},99376:function(t,e){var r=Object.keys;e.D=function(t,e){if(t===e)return!0;if(!(t instanceof Object&&e instanceof Object))return!1;for(var n=r(t),o=n.length,i=0;i<o;i++)if(!(n[i]in e))return!1;for(i=0;i<o;i++)if(t[n[i]]!==e[n[i]])return!1;return o===r(e).length}},15451:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(99376),o=r(92950),i=function(t,e){return t.every((function(t,r){return(0,n.D)(t,e[r])}))},u=function(t,e){!function(t,e,r){var n=(0,o.useRef)(void 0);n.current&&r(e,n.current)||(n.current=e),(0,o.useEffect)(t,n.current)}(t,e,i)}}}]);
//# sourceMappingURL=../sourcemaps/5242.js.map