"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[4944,7585,9051,9175,2738,5876],{87585:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f,ConnectedBannerMessages:()=>f,BannerMessages:()=>b});var a=r(48418),n=r(15274),i=r(56949),o=r(90237),l=r(65337),u=r(39576),s=r(80239),c=r(92950),d=r.n(c),p=r(68269),v=r(14708),y=r(18446),T=r.n(y),E=r(25097),I=r(83109),g=r(76006),h=r(30446),b=function(e){(0,u.Z)(r,e);var t=(0,s.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return(e=t.call.apply(t,[this].concat(l))).state={},e.onUpdateData=function(){var t=e.props,r=t.getMessageReports,a=t.productId,o=t.query,l=E.IT.parseRhsmQuery(o).graphTallyQuery;if(a){var u,s=g.i3.getRangedDateTime("CURRENT"),c=s.startDate,d=s.endDate;r(a,(0,i.Z)((0,i.Z)({},l),{},(u={},(0,n.Z)(u,h.VN.GRANULARITY,h.U9.DAILY),(0,n.Z)(u,h.VN.START_DATE,c.toISOString()),(0,n.Z)(u,h.VN.END_DATE,d.toISOString()),u)))}},e}return(0,l.Z)(r,[{key:"componentDidMount",value:function(){this.onUpdateData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.query;t.productId===e.productId&&T()(r,e.query)||this.onUpdateData()}},{key:"renderAlerts",value:function(){var e=this,t=this.state,r=this.props,o=r.appMessages,l=r.messages,u=[];return l.length&&Object.entries(o).forEach((function(e){var r=(0,a.Z)(e,2),n=r[0],o=r[1];if(!0!==t[n]&&!0===o){var s=l.find((function(e){return e.id===n}));s&&u.push((0,i.Z)({key:n},s))}})),u.map((function(t){var r=t.key,a=t.message,i=t.title,o=t.variant,l=void 0===o?p.AlertVariant.info:o,u=d().createElement(p.AlertActionCloseButton,{onClose:function(){return e.setState((0,n.Z)({},r,!0))}});return d().createElement(p.Alert,{actionClose:u,key:r,title:i,variant:l},a)}))}},{key:"render",value:function(){var e=this.renderAlerts();return e.length?d().createElement("div",{className:"curiosity-banner-messages"},e):null}}]),r}(d().Component);b.defaultProps={getMessageReports:g.BM.noop,query:{},messages:[{id:"cloudigradeMismatch",title:(0,I.translate)("curiosity-banner.dataMismatchTitle"),message:(0,I.translate)("curiosity-banner.dataMismatchMessage",{context:""!==g.BM.UI_LINK_REPORT_ACCURACY_RECOMMENDATIONS&&"cloudigradeMismatch",appName:g.BM.UI_DISPLAY_NAME},[d().createElement(p.Button,{isInline:!0,component:"a",variant:"link",icon:d().createElement(v.ExternalLinkAltIcon,null),iconPosition:"right",target:"_blank",href:g.BM.UI_LINK_REPORT_ACCURACY_RECOMMENDATIONS})])}]};var m=E.R1.appMessages.makeAppMessages(),f=(0,E.$j)(m,(function(e){return{getMessageReports:function(t,r){return e(E.Ak.rhsm.getMessageReports(t,r))}}}))(b)},69051:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I,ConnectedInventoryTabs:()=>I,InventoryTabs:()=>E,InventoryTab:()=>T.InventoryTab});var a=r(15274),n=r(90237),i=r(65337),o=r(39576),l=r(80239),u=r(92950),s=r.n(u),c=r(68269),d=r(25097),p=r(70031),v=r(76006),y=r(83109),T=r(80931),E=function(e){(0,o.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,n.Z)(this,r);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).onTab=function(t){var r=t.index,n=e.props.productId;d.h.dispatch({type:d.JD.inventory.SET_INVENTORY_TAB,tabs:(0,a.Z)({},n,r)})},e}return(0,i.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.activeTab,r=e.children,a=e.defaultActiveTab,n=e.isDisabled,i=e.t;if(n)return null;var o=s().Children.toArray(r).map((function(e,t){var r=e.props,a=void 0===r?{}:r;return{active:a.active||!1,content:a.children||e,title:a.title||i("curiosity-inventory.tabSubHeading",{count:t})}}));return s().createElement(s().Fragment,null,s().createElement(c.Title,{headingLevel:"h2",className:"sr-only"},i("curiosity-inventory.tabHeading",{count:o.length})),s().createElement(p.Tabs,{activeTab:t,defaultActiveTab:a,onTab:this.onTab,tabs:o}))}}]),r}(s().Component);E.defaultProps={activeTab:0,defaultActiveTab:0,isDisabled:v.BM.UI_DISABLED_TABLE,t:y.translate};var I=(0,d.$j)((function(e,t){var r,a=e.inventory,n=t.productId;return{activeTab:null===(r=a.tabs)||void 0===r?void 0:r[n]}}))(E)},29175:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h,ProductView:()=>h});var a=r(92950),n=r.n(a),i=r(68269),o=r(31369),l=r(52422),u=r(25097),s=r(10608),c=r(92227),d=r(86876),p=r(76006),v=r(87585),y=r(2738),T=r(69051),E=r(47493),I=r(30446),g=(r(63056),r(83109)),h=function(e){var t=e.routeDetail,r=e.t,a=e.toolbarGraph,g=e.toolbarGraphDescription,h=e.toolbarProduct,b=t.pathParameter,m=t.productConfig,f=t.productParameter,S=t.viewParameter,_=(null==m?void 0:m[0])||{},D=_.graphTallyQuery,A=_.inventoryHostsQuery,R=_.inventorySubscriptionsQuery,N=_.query,P=_.initialToolbarFilters,M=_.initialGraphFilters,w=_.initialGraphSettings,U=_.initialGuestsFilters,Y=_.initialInventoryFilters,Z=_.initialInventorySettings,C=_.initialSubscriptionsInventoryFilters,L=u.IT.parseRhsmQuery(N,{graphTallyQuery:D,inventoryHostsQuery:A,inventorySubscriptionsQuery:R}),V=L.query,O=L.graphTallyQuery,k=L.inventoryHostsQuery,G=L.inventorySubscriptionsQuery,Q=L.toolbarQuery;if(!b||!S)return null;var q=null;g&&(q=n().createElement(i.Tooltip,{content:n().createElement("p",null,r("curiosity-graph.cardHeadingDescription",{context:b})),position:i.TooltipPosition.top,enableFlip:!1,distance:5,entryDelay:100,exitDelay:0},n().createElement("sup",{className:"curiosity-icon__info"},n().createElement(o.ZP,null))));var B=n().createElement(n().Fragment,null,r("curiosity-graph.cardHeading",{context:b}),q);return n().createElement(l.PageLayout,null,n().createElement(l.PageHeader,{productLabel:f},r("curiosity-view.title",{appName:p.BM.UI_DISPLAY_NAME,context:f})),n().createElement(l.PageMessages,null,n().createElement(v.default,{productId:b,viewId:S,query:V})),n().createElement(l.PageToolbar,null,n().isValidElement(h)&&h||!1!==h&&n().createElement(c.ConnectedToolbar,{filterOptions:P,productId:b,query:Q,viewId:S})),n().createElement(l.PageSection,null,n().createElement(s.ConnectedGraphCard,{key:"graph_".concat(b),filterGraphData:M,settings:w,query:O,productId:b,viewId:S,cardTitle:B,productLabel:f},n().isValidElement(a)&&a||!1!==a&&n().createElement(y.ToolbarFieldGranularity,{viewId:S,value:O[I.VN.GRANULARITY]}))),n().createElement(l.PageSection,null,n().createElement(T.default,{key:"inventory_".concat(b),productId:b},n().createElement(T.InventoryTab,{key:"inventory_hosts_".concat(b),title:r("curiosity-inventory.tabHosts",{context:["noInstances",b]})},n().createElement(d.ConnectedInventoryList,{key:"inv_".concat(b),filterGuestsData:U,filterInventoryData:Y,productId:b,settings:Z,query:k,viewId:S})),!p.BM.UI_DISABLED_TABLE_SUBSCRIPTIONS&&n().createElement(T.InventoryTab,{key:"inventory_subs_".concat(b),title:r("curiosity-inventory.tabSubscriptions",{context:b})},n().createElement(E.ConnectedInventorySubscriptions,{key:"subs_".concat(b),filterInventoryData:C,productId:b,query:G,viewId:S})))))};h.defaultProps={t:g.translate,toolbarGraph:null,toolbarGraphDescription:!1,toolbarProduct:null}},84944:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u,ProductViewOpenShiftDedicated:()=>u});var a=r(92950),n=r.n(a),i=r(30446),o=r(29175),l=r(65876),u=function(e){var t=e.routeDetail,r=t.productConfig,a=t.viewParameter,u=(null==r?void 0:r[0].graphTallyQuery)[i.VN.START_DATE];return n().createElement(o.ProductView,{routeDetail:t,toolbarProduct:!1,toolbarGraph:n().createElement(l.ToolbarFieldRangedMonthly,{value:u,viewId:a}),toolbarGraphDescription:!0})};u.defaultProps={}},2738:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v,ToolbarFieldGranularity:()=>v,toolbarFieldOptions:()=>p});var a=r(15274),n=r(56949),i=r(92950),o=r.n(i),l=r(25097),u=r(49844),s=r(30446),c=r(76006),d=r(83109),p=Object.values(s.U9).map((function(e){return{title:(0,d.translate)("curiosity-toolbar.granularity",{context:e}),value:e,selected:!1}})),v=function e(t){var r=t.options,i=t.t,d=t.value,p=t.viewId,v=(0,l.v9)((function(e){var t,r;return null===(t=e.view.graphTallyQuery)||void 0===t||null===(r=t[p])||void 0===r?void 0:r[s.VN.GRANULARITY]}),d),y=r.map((function(e){return(0,n.Z)((0,n.Z)({},e),{},{selected:e.value===v})}));return o().createElement(u.Select,{"aria-label":i("curiosity-toolbar.placeholder",{context:"granularity"}),onSelect:function(e){var t=c.i3.getRangedDateTime(e.value),r=t.startDate,n=t.endDate;l.h.dispatch([{type:l.JD.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:p},(0,a.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[s.VN.GRANULARITY],viewId:p},s.VN.GRANULARITY,e.value),(0,a.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[s.VN.START_DATE],viewId:p},s.VN.START_DATE,r.toISOString()),(0,a.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[s.VN.END_DATE],viewId:p},s.VN.END_DATE,n.toISOString())])},options:y,selectedOptions:v,placeholder:i("curiosity-toolbar.placeholder",{context:"granularity"}),"data-test":e.defaultProps.viewId})};v.defaultProps={options:p,t:d.translate,value:s.U9.DAILY,viewId:"toolbarFieldGranularity"}},65876:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v,ToolbarFieldRangedMonthly:()=>v,toolbarFieldOptions:()=>p});var a=r(15274),n=r(56949),i=r(92950),o=r.n(i),l=r(25097),u=r(49844),s=r(30446),c=r(76006),d=r(83109),p=c.i3.getRangedMonthDateTime().listDateTimeRanges.map((function(e){return(0,n.Z)((0,n.Z)({},e),{},{selected:!1})})),v=function e(t){var r=t.options,i=t.t,c=t.value,d=t.viewId,p=(0,l.v9)((function(e){var t,r;return null===(t=e.view.query)||void 0===t||null===(r=t[d])||void 0===r?void 0:r[s.VN.START_DATE]}),c),v=r.map((function(e){return(0,n.Z)((0,n.Z)({},e),{},{selected:e.title===p||e.value.startDate.toISOString()===p})}));return o().createElement(u.Select,{"aria-label":i("curiosity-toolbar.placeholder",{context:"granularity"}),onSelect:function(e){var t=e.value,r=t.startDate,n=t.endDate;l.h.dispatch([{type:l.JD.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:d},(0,a.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[s.VN.GRANULARITY],viewId:d},s.VN.GRANULARITY,s.U9.DAILY),(0,a.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[s.VN.START_DATE],viewId:d},s.VN.START_DATE,r.toISOString()),(0,a.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[s.VN.END_DATE],viewId:d},s.VN.END_DATE,n.toISOString())])},options:v,placeholder:i("curiosity-toolbar.placeholder",{context:"granularity"}),position:u.SelectPosition.right,maxHeight:250,"data-test":e.defaultProps.viewId})};v.defaultProps={options:p,t:d.translate,value:(0,d.translate)("curiosity-toolbar.granularityRange",{context:"current"}),viewId:"toolbarFieldRangeGranularity"}}}]);
//# sourceMappingURL=../sourcemaps/4944.be70cac8fc6b6d2d789b.js.map