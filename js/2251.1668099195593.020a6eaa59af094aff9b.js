"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[2251,2085],{64418:function(e,t,n){n.r(t),n.d(t,{GraphCardChartLegend:function(){return p},default:function(){return p}});var r=n(92950),a=n.n(r),o=n(21242),l=n(89048),i=n(51858),u=n(61072),c=n(76006),s=n(83109),d=n(1138),p=function(e){var t=e.chart,n=e.datum,r=e.t,i=e.useDispatch,c=e.useSelectors,s=(0,e.useProduct)(),p=s.productLabel,y=s.viewId,v=i(),h=c(n.dataSets.map((function(e){var t=e.id;return function(e){var n;return null===(n=e.graph.legend)||void 0===n?void 0:n["".concat(y,"-").concat(t)]}})));(0,l.Z)((function(){n.dataSets.forEach((function(e,n){var r=e.id;((null==h?void 0:h[n])||t.isToggled(r))&&t.hide(r)}))}));var m=function(e){var n=t.toggle(e);v({type:u.JD.graph.SET_GRAPH_LEGEND,id:"".concat(y,"-").concat(e),value:n})};return a().createElement(a().Fragment,null,n.dataSets.map((function(e,n){var l=e.id,i=e.isThreshold,u=e.stroke,c=e.data,s=!(void 0===c?[]:c).find((function(e){var t=e.y,n=e.hasData;return t>=0&&!0===n||t>=0&&!0===i}))||!1,y=r(["curiosity-graph.label","curiosity-graph.label_no"],{product:p,context:i?"threshold":l}),v=r("curiosity-graph.legendTooltip",{product:p,context:[i&&"threshold",l]},[a().createElement("span",{style:{whiteSpace:"nowrap"}})]),f=(null==h?void 0:h[n])||t.isToggled(l),g=a().createElement(o.Button,{onClick:function(){return m(l)},onKeyPress:function(){return m(l)},className:"curiosity-usage-graph__legend-item",tabIndex:0,key:"curiosity-button-".concat(l),variant:"link",component:"a",isDisabled:s,icon:(s||f)&&a().createElement(d.ChartIcon,{symbol:"eyeSlash"})||a().createElement(d.ChartIcon,{symbol:i?"dash":"square",style:{visibility:s||f?"hidden":"visible"},fill:u})},y);return v?a().createElement(o.Tooltip,{key:"curiosity-tooltip-".concat(l),content:a().createElement("p",null,v),position:o.TooltipPosition.top,enableFlip:!0,distance:5},g):g})))};p.defaultProps={chart:{hide:c.BM.noop,toggle:c.BM.noop,isToggled:c.BM.noop},datum:{dataSets:[]},t:s.translate,useDispatch:u.Cr.reactRedux.useDispatch,useSelectors:u.Cr.reactRedux.useSelectors,useProduct:i.useProduct}},44024:function(e,t,n){n.r(t),n.d(t,{GraphCardChartTooltip:function(){return p},default:function(){return p}});var r=n(92950),a=n.n(r),o=n(51858),l=n(78139),i=n(83109),u=n(60930),c=n(1138),s=n(46262),d=n(76006),p=function(e){var t=e.datum,n=e.t,r=e.useProduct,o=e.useProductGraphTallyQuery,i=r().productLabel,p=o()[s.O6.GRANULARITY],y=null,v=[],h=(t||{}).itemsByKey,m=void 0===h?{}:h;return Object.keys(m).reverse().forEach((function(e,t){var r,o,s,d;0===t&&(y=(0,l.getTooltipDate)({date:null===(d=m[e])||void 0===d?void 0:d.data.date,granularity:p}));var h={color:null===(r=m[e])||void 0===r?void 0:r.color};if((null===(o=m[e])||void 0===o?void 0:o.chartType)===u.ChartTypeVariant.threshold){var f,g,E,b,T=null!==(f=null===(g=m[e])||void 0===g?void 0:g.data.y)&&void 0!==f?f:n("curiosity-graph.label",{context:"noData"});(null!==(E=m[e])&&void 0!==E&&E.data.hasInfinite||null!==(b=m[e])&&void 0!==b&&b.data.hasInfiniteQuantity)&&(T=n("curiosity-graph.label",{context:["threshold","infinite"]},[h.color&&a().createElement(c.ChartIcon,{symbol:"infinity",fill:"#ffffff",title:n("curiosity-graph.label",{context:["threshold","infinite"]})})])),h.label=n("curiosity-graph.label",{context:["threshold"]}),h.value=T}else{var I,P,S=!1===(null===(I=m[e])||void 0===I?void 0:I.data.hasData)&&n("curiosity-graph.label",{context:"noData"})||(null===(P=m[e])||void 0===P?void 0:P.data.y)||0;h.label=n("curiosity-graph.label",{context:e,product:i}),h.value=S}h.chartType=null===(s=m[e])||void 0===s?void 0:s.chartType,v.push(h)})),a().createElement("div",{className:"curiosity-usage-graph__tooltip"},a().createElement("table",{summary:n("curiosity-graph.tooltipSummary")},v.length&&y&&a().createElement("thead",null,a().createElement("tr",null,a().createElement("th",{colSpan:2},y)))||null,v.length&&a().createElement("tbody",null,v.map((function(e){var t,n,r="number"==typeof e.value&&!Number.isInteger(e.value)&&(null===(t=d.BM.numberDisplay(e.value))||void 0===t||null===(n=t.format({average:!0,mantissa:5,trimMantissa:!0,lowPrecision:!0}))||void 0===n?void 0:n.toUpperCase())||e.value;return a().createElement("tr",{key:"tooltip-".concat(e.label)},a().createElement("th",null,e.chartType===u.ChartTypeVariant.threshold&&a().createElement(c.ChartIcon,{size:"sm",symbol:"dash",fill:e.color||"transparent"}),e.chartType!==u.ChartTypeVariant.threshold&&a().createElement(c.ChartIcon,{size:"sm",fill:e.color||"transparent"})," ",e.label),a().createElement("td",null,r))})))||null),!v.length&&n("curiosity-graph.label",{context:["noData","error"]})||null)};p.defaultProps={datum:{},t:i.translate,useProduct:o.useProduct,useProductGraphTallyQuery:o.useProductGraphTallyQuery}},44059:function(e,t,n){n.r(t),n.d(t,{ProductViewOpenShiftContainer:function(){return P},default:function(){return P}});var r=n(92950),a=n.n(r),o=n(21242),l=n(31369),i=n(3281),u=n(51858),c=n(52422),s=n(30446),d=n(61072),p=n(28341),y=n(49844),v=n(74097),h=n(2738),m=n(65876),f=n(92227),g=n(88191),E=n(16696),b=n(69051),T=n(83109),I=n(76006),P=function(e){var t=e.t,n=(0,e.useRouteDetail)(),r=n.productParameter,i=n.productConfig,T=d.Cr.reactRedux.useSelector((function(e){var t,n;return null===(t=e.view.query)||void 0===t||null===(n=t[i[0].viewId])||void 0===n?void 0:n[s.VN.UOM]}),null);return a().createElement(c.PageLayout,null,a().createElement(c.PageHeader,{productLabel:r},t("curiosity-view.title",{appName:I.BM.UI_DISPLAY_NAME,context:r})),a().createElement(c.PageColumns,null,i.map((function(e){return function(e,n){var r=e.productContextFilterUom,i=e.query,T=void 0===i?{}:i,P=e.graphTallyQuery,S=void 0===P?{}:P,C=e.inventoryHostsQuery,_=void 0===C?{}:C,D=e.inventorySubscriptionsQuery,x=void 0===D?{}:D,w=e.initialGuestsFilters,k=void 0===w?[]:w,F=e.initialInventoryFilters,N=void 0===F?[]:F,Q=e.initialInventorySettings,R=void 0===Q?{}:Q,M=e.initialSubscriptionsInventoryFilters,B=e.productId,G=e.viewId;if(!B||!G)return null;var H,L=d.IT.parseRhsmQuery(T,{graphTallyQuery:S,inventoryHostsQuery:_,inventorySubscriptionsQuery:x}),O=L.graphTallyQuery,U=L.inventoryHostsQuery,A=N;r&&(H=n||T[s.VN.UOM],A=N.filter((function(e){var t=e.id;return!e.isOptional||new RegExp(H,"i").test(t)})));var V=a().createElement(a().Fragment,null,t("curiosity-graph.cardHeading",{context:B}),a().createElement(o.Tooltip,{content:a().createElement("p",null,t("curiosity-graph.cardHeadingDescription",{context:B})),position:o.TooltipPosition.top,enableFlip:!1,distance:5,entryDelay:100,exitDelay:0},a().createElement("sup",{className:"curiosity-icon__info"},a().createElement(l.ZP,null))));return a().createElement(u.ProductViewContext.Provider,{value:e,key:"product_".concat(B,"_").concat(H)},a().createElement(c.PageToolbar,null,a().createElement(f.Toolbar,null)),a().createElement(c.PageSection,null,a().createElement(p.default,{key:"graph_".concat(B),query:O,productId:B,viewId:G,cardTitle:V},B===s.wc.OPENSHIFT&&H&&a().createElement(v.ToolbarFieldUom,{position:y.SelectPosition.right}),B===s.wc.OPENSHIFT&&a().createElement(h.ToolbarFieldGranularity,{position:y.SelectPosition.right}),B===s.wc.OPENSHIFT_METRICS&&a().createElement(m.ToolbarFieldRangedMonthly,{position:y.SelectPosition.right}))),a().createElement(c.PageSection,null,a().createElement(b.default,{key:"inventory_".concat(B),productId:B},a().createElement(b.InventoryTab,{key:"inventory_hosts_".concat(B),title:t("curiosity-inventory.tabHosts",{context:[B]})},a().createElement(g.default,{key:"inv_".concat(B),filterGuestsData:k,filterInventoryData:A,productId:B,settings:R,query:U,viewId:G})),!I.BM.UI_DISABLED_TABLE_SUBSCRIPTIONS&&M&&a().createElement(b.InventoryTab,{key:"inventory_subs_".concat(B),title:t("curiosity-inventory.tabSubscriptions",{context:B})},a().createElement(E.default,null)))))}(e,T)}))))};P.defaultProps={t:T.translate,useRouteDetail:i.Tu}}}]);
//# sourceMappingURL=../sourcemaps/2251.js.map