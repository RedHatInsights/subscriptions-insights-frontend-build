(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[2881,1858],{62881:function(t,e,n){"use strict";n.r(e),n.d(e,{context:function(){return S},default:function(){return S},useGetSubscriptionsInventory:function(){return a},useOnColumnSortSubscriptions:function(){return y},useOnPageSubscriptions:function(){return f}});var r=n(4942),i=n(15451),o=n(68929),u=n.n(o),s=n(76871),c=n(61072),d=n(51858),v=n(46262),l=n(76006),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.isDisabled,n=void 0!==e&&e,r=t.getInventory,o=void 0===r?c.Ak.rhsm.getSubscriptionsInventory:r,u=t.useDispatch,s=void 0===u?c.Cr.reactRedux.useDispatch:u,v=t.useProduct,l=void 0===v?d.useProduct:v,a=t.useProductInventoryQuery,f=void 0===a?d.useProductInventorySubscriptionsQuery:a,y=t.useSelectorsResponse,S=void 0===y?c.Cr.reactRedux.useSelectorsResponse:y,p=l(),I=p.productId,T=f(),P=s(),C=S((function(t){var e,n=t.inventory;return null==n||null===(e=n.subscriptionsInventory)||void 0===e?void 0:e[I]})),E=C.error,g=C.cancelled,h=C.fulfilled,_=C.pending,O=C.data;return(0,i.Z)((function(){n||o(I,T)(P)}),[P,n,I,T]),{error:E,fulfilled:h,pending:_||g||!1,data:1===(null==O?void 0:O.length)&&O[0]||O||{}}},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useDispatch,n=void 0===e?c.Cr.reactRedux.useDispatch:e,i=t.useProduct,o=void 0===i?d.useProduct:i,u=o(),s=u.productId,l=n();return function(t){var e=t.offset,n=t.perPage;l([(0,r.Z)({type:c.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[v.O6.OFFSET],viewId:s},v.O6.OFFSET,e),(0,r.Z)({type:c.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[v.O6.LIMIT],viewId:s},v.O6.LIMIT,n)])}},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.sortColumns,n=void 0===e?v.Ok:e,i=t.useDispatch,o=void 0===i?c.Cr.reactRedux.useDispatch:i,a=t.useProduct,f=void 0===a?d.useProduct:a,y=f(),S=y.productId,p=o();return function(t,e){var i,o=e.direction,d=e.id,a=Object.values(n).find((function(t){return t===d||u()(t)===d}));a?(i=o===s.SortByDirection.desc?v.PQ.DESCENDING:v.PQ.ASCENDING,p([(0,r.Z)({type:c.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[v.O6.DIRECTION],viewId:S},v.O6.DIRECTION,i),(0,r.Z)({type:c.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[v.O6.SORT],viewId:S},v.O6.SORT,a)])):(l.BM.DEV_MODE||l.BM.REVIEW_MODE)&&console.warn("Sorting can only be performed on select fields, confirm field ".concat(d," is allowed."))}},S={useGetSubscriptionsInventory:a,useOnPageSubscriptions:f,useOnColumnSortSubscriptions:y}},51858:function(t,e,n){"use strict";n.r(e),n.d(e,{DEFAULT_CONTEXT:function(){return y},ProductViewContext:function(){return S},context:function(){return N},default:function(){return N},useProduct:function(){return _},useProductContext:function(){return h},useProductGraphConfig:function(){return O},useProductGraphTallyQuery:function(){return P},useProductInventoryGuestsConfig:function(){return R},useProductInventoryGuestsQuery:function(){return C},useProductInventoryHostsConfig:function(){return b},useProductInventoryHostsQuery:function(){return E},useProductInventorySubscriptionsConfig:function(){return Q},useProductInventorySubscriptionsQuery:function(){return g},useProductQuery:function(){return T},useProductQueryFactory:function(){return I},useProductToolbarConfig:function(){return F}});var r=n(45987),i=n(4942),o=n(1413),u=n(92950),s=n.n(u),c=n(12723),d=n(2606),v=n(30446),l=n(46262),a=n(62834),f=["initialGraphFilters","initialInventoryFilters","initialSubscriptionsInventoryFilters","productContextFilterUom"],y=[{},a.B.noop],S=s().createContext(y),p=function(){return(0,u.useContext)(S)},I=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.overrideId,r=e.useProductViewContext,i=void 0===r?p:r,u=i(),s=u[t],c=u.productId,v=u.viewId,l=d.Cr.reactRedux.useSelector((function(e){var r,i=e.view;return null==i||null===(r=i[t])||void 0===r?void 0:r[n]}),void 0),a=d.Cr.reactRedux.useSelector((function(e){var n,r=e.view;return null==r||null===(n=r[t])||void 0===n?void 0:n[c]}),void 0),f=d.Cr.reactRedux.useSelector((function(e){var n,r=e.view;return null==r||null===(n=r[t])||void 0===n?void 0:n[v]}),void 0);return(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},s),l),a),f)},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"query":e,r=t.options;return I(n,r)},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"graphTallyQuery":e,r=t.schemaCheck,i=void 0===r?v.VX.RHSM_API_QUERY_SET_REPORT_CAPACITY_TYPES:r,u=t.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)({},T()),I(n,u)),i)},C=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultLimit,r=void 0===n?100:n,u=e.defaultOffset,s=void 0===u?0:u,d=e.queryType,a=void 0===d?"inventoryGuestsQuery":d,f=e.schemaCheck,y=void 0===f?v.VX.RHSM_API_QUERY_SET_INVENTORY_GUESTS_TYPES:f,S=e.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)((t={},(0,i.Z)(t,l.O6.LIMIT,r),(0,i.Z)(t,l.O6.OFFSET,s),t),T()),I(a,S)),y)},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"inventoryHostsQuery":e,r=t.schemaCheck,i=void 0===r?v.VX.RHSM_API_QUERY_SET_INVENTORY_TYPES:r,u=t.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)({},T()),I(n,u)),i)},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"inventorySubscriptionsQuery":e,r=t.schemaCheck,i=void 0===r?v.VX.RHSM_API_QUERY_SET_INVENTORY_TYPES:r,u=t.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)({},T()),I(n,u)),i)},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductQuery,n=void 0===e?T:e,i=t.useProductViewContext,s=void 0===i?p:i,c=n(),d=c[v.VN.UOM],l=s(),a=l.initialGraphFilters,y=void 0===a?[]:a,S=l.initialInventoryFilters,I=void 0===S?[]:S,P=l.initialSubscriptionsInventoryFilters,C=void 0===P?[]:P,E=l.productContextFilterUom,g=(0,r.Z)(l,f),h=(0,u.useCallback)((function(){if(!0===E){var t=function(t){var e=t.id;return!t.isOptional||new RegExp(d,"i").test(e)};return(0,o.Z)((0,o.Z)({},g),{},{initialGraphFilters:y.filter(t),initialInventoryFilters:I.filter(t),initialSubscriptionsInventoryFilters:C.filter(t)})}return(0,o.Z)((0,o.Z)({},g),{},{initialGraphFilters:y,initialInventoryFilters:I,initialSubscriptionsInventoryFilters:C})}),[g,y,I,C,E,d]);return h()},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductViewContext,n=void 0===e?p:e,r=n(),i=r.productGroup,o=r.productId,u=r.productLabel,s=r.viewId;return{productGroup:i,productId:o,productLabel:u,viewId:s}},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?h:e,r=n(),i=r.initialGraphFilters,o=r.initialGraphSettings,u=void 0===o?{}:o;return{filters:i,settings:u}},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?h:e,r=n(),i=r.inventoryGuestsQuery,o=void 0===i?{}:i,u=r.initialGuestsFilters,s=r.initialGuestsSettings,c=void 0===s?{}:s;return{filters:u,initialQuery:o,settings:c}},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?h:e,r=n(),i=r.initialInventoryFilters,o=r.initialInventorySettings,u=void 0===o?{}:o;return{filters:i,settings:u}},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?h:e,r=n(),i=r.initialSubscriptionsInventoryFilters,o=r.initialSubscriptionsInventorySettings,u=void 0===o?{}:o;return{filters:i,settings:u}},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?h:e,r=n(),i=r.initialToolbarFilters,o=r.initialToolbarSettings,u=void 0===o?{}:o,s=r.initialSecondaryToolbarFilters;return{filters:i,secondaryFilters:s,settings:u}},N={ProductViewContext:S,DEFAULT_CONTEXT:y,useProductContext:h,useQuery:T,useQueryFactory:I,useGraphTallyQuery:P,useInventoryGuestsQuery:C,useInventoryHostsQuery:E,useInventorySubscriptionsQuery:g,useProduct:_,useGraphConfig:O,useInventoryGuestsConfig:R,useInventoryHostsConfig:b,useInventorySubscriptionsConfig:Q,useToolbarConfig:F}},99376:function(t,e){var n=Object.keys;e.D=function(t,e){if(t===e)return!0;if(!(t instanceof Object&&e instanceof Object))return!1;for(var r=n(t),i=r.length,o=0;o<i;o++)if(!(r[o]in e))return!1;for(o=0;o<i;o++)if(t[r[o]]!==e[r[o]])return!1;return i===n(e).length}},15451:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(99376),i=n(92950),o=function(t,e){return t.every((function(t,n){return(0,r.D)(t,e[n])}))},u=function(t,e){!function(t,e,n){var r=(0,i.useRef)(void 0);r.current&&n(e,r.current)||(r.current=e),(0,i.useEffect)(t,r.current)}(t,e,o)}}}]);
//# sourceMappingURL=../sourcemaps/2881.js.map