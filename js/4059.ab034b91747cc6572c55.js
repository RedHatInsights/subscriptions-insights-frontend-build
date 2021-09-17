"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[4059,7585,9051,9175,2738,5876,4097],{87585:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S,ConnectedBannerMessages:()=>S,BannerMessages:()=>f});var n=r(48418),a=r(15274),i=r(56949),o=r(90237),l=r(65337),u=r(39576),c=r(80239),s=r(92950),d=r.n(s),v=r(68269),p=r(14708),y=r(18446),E=r.n(y),I=r(25097),T=r(83109),m=r(76006),g=r(30446),f=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,l=new Array(n),u=0;u<n;u++)l[u]=arguments[u];return(e=t.call.apply(t,[this].concat(l))).state={},e.onUpdateData=function(){var t=e.props,r=t.getMessageReports,n=t.productId,o=t.query,l=I.IT.parseRhsmQuery(o).graphTallyQuery;if(n){var u,c=m.i3.getRangedDateTime("CURRENT"),s=c.startDate,d=c.endDate;r(n,(0,i.Z)((0,i.Z)({},l),{},(u={},(0,a.Z)(u,g.VN.GRANULARITY,g.U9.DAILY),(0,a.Z)(u,g.VN.START_DATE,s.toISOString()),(0,a.Z)(u,g.VN.END_DATE,d.toISOString()),u)))}},e}return(0,l.Z)(r,[{key:"componentDidMount",value:function(){this.onUpdateData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.query;t.productId===e.productId&&E()(r,e.query)||this.onUpdateData()}},{key:"renderAlerts",value:function(){var e=this,t=this.state,r=this.props,o=r.appMessages,l=r.messages,u=[];return l.length&&Object.entries(o).forEach((function(e){var r=(0,n.Z)(e,2),a=r[0],o=r[1];if(!0!==t[a]&&!0===o){var c=l.find((function(e){return e.id===a}));c&&u.push((0,i.Z)({key:a},c))}})),u.map((function(t){var r=t.key,n=t.message,i=t.title,o=t.variant,l=void 0===o?v.AlertVariant.info:o,u=d().createElement(v.AlertActionCloseButton,{onClose:function(){return e.setState((0,a.Z)({},r,!0))}});return d().createElement(v.Alert,{actionClose:u,key:r,title:i,variant:l},n)}))}},{key:"render",value:function(){var e=this.renderAlerts();return e.length?d().createElement("div",{className:"curiosity-banner-messages"},e):null}}]),r}(d().Component);f.defaultProps={getMessageReports:m.BM.noop,query:{},messages:[{id:"cloudigradeMismatch",title:(0,T.translate)("curiosity-banner.dataMismatchTitle"),message:(0,T.translate)("curiosity-banner.dataMismatchMessage",{context:""!==m.BM.UI_LINK_REPORT_ACCURACY_RECOMMENDATIONS&&"cloudigradeMismatch",appName:m.BM.UI_DISPLAY_NAME},[d().createElement(v.Button,{isInline:!0,component:"a",variant:"link",icon:d().createElement(p.ExternalLinkAltIcon,null),iconPosition:"right",target:"_blank",href:m.BM.UI_LINK_REPORT_ACCURACY_RECOMMENDATIONS})])}]};var b=I.R1.appMessages.makeAppMessages(),S=(0,I.$j)(b,(function(e){return{getMessageReports:function(t,r){return e(I.Ak.rhsm.getMessageReports(t,r))}}}))(f)},69051:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T,ConnectedInventoryTabs:()=>T,InventoryTabs:()=>I,InventoryTab:()=>E.InventoryTab});var n=r(15274),a=r(90237),i=r(65337),o=r(39576),l=r(80239),u=r(92950),c=r.n(u),s=r(68269),d=r(25097),v=r(70031),p=r(76006),y=r(83109),E=r(80931),I=function(e){(0,o.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).onTab=function(t){var r=t.index,a=e.props.productId;d.h.dispatch({type:d.JD.inventory.SET_INVENTORY_TAB,tabs:(0,n.Z)({},a,r)})},e}return(0,i.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.activeTab,r=e.children,n=e.defaultActiveTab,a=e.isDisabled,i=e.t;if(a)return null;var o=c().Children.toArray(r).map((function(e,t){var r=e.props,n=void 0===r?{}:r;return{active:n.active||!1,content:n.children||e,title:n.title||i("curiosity-inventory.tabSubHeading",{count:t})}}));return c().createElement(c().Fragment,null,c().createElement(s.Title,{headingLevel:"h2",className:"sr-only"},i("curiosity-inventory.tabHeading",{count:o.length})),c().createElement(v.Tabs,{activeTab:t,defaultActiveTab:n,onTab:this.onTab,tabs:o}))}}]),r}(c().Component);I.defaultProps={activeTab:0,defaultActiveTab:0,isDisabled:p.BM.UI_DISABLED_TABLE,t:y.translate};var T=(0,d.$j)((function(e,t){var r,n=e.inventory,a=t.productId;return{activeTab:null===(r=n.tabs)||void 0===r?void 0:r[a]}}))(I)},29175:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g,ProductView:()=>g});var n=r(92950),a=r.n(n),i=r(68269),o=r(31369),l=r(52422),u=r(25097),c=r(10608),s=r(92227),d=r(86876),v=r(76006),p=r(87585),y=r(2738),E=r(69051),I=r(47493),T=r(30446),m=(r(63056),r(83109)),g=function(e){var t=e.routeDetail,r=e.t,n=e.toolbarGraph,m=e.toolbarGraphDescription,g=e.toolbarProduct,f=t.pathParameter,b=t.productConfig,S=t.productParameter,_=t.viewParameter,h=(null==b?void 0:b[0])||{},D=h.graphTallyQuery,R=h.inventoryHostsQuery,A=h.inventorySubscriptionsQuery,N=h.query,P=h.initialToolbarFilters,w=h.initialGraphFilters,M=h.initialGraphSettings,U=h.initialGuestsFilters,O=h.initialInventoryFilters,L=h.initialInventorySettings,Y=h.initialSubscriptionsInventoryFilters,C=u.IT.parseRhsmQuery(N,{graphTallyQuery:D,inventoryHostsQuery:R,inventorySubscriptionsQuery:A}),Q=C.query,Z=C.graphTallyQuery,F=C.inventoryHostsQuery,V=C.inventorySubscriptionsQuery,k=C.toolbarQuery;if(!f||!_)return null;var q=null;m&&(q=a().createElement(i.Tooltip,{content:a().createElement("p",null,r("curiosity-graph.cardHeadingDescription",{context:f})),position:i.TooltipPosition.top,enableFlip:!1,distance:5,entryDelay:100,exitDelay:0},a().createElement("sup",{className:"curiosity-icon__info"},a().createElement(o.ZP,null))));var G=a().createElement(a().Fragment,null,r("curiosity-graph.cardHeading",{context:f}),q);return a().createElement(l.PageLayout,null,a().createElement(l.PageHeader,{productLabel:S},r("curiosity-view.title",{appName:v.BM.UI_DISPLAY_NAME,context:S})),a().createElement(l.PageMessages,null,a().createElement(p.default,{productId:f,viewId:_,query:Q})),a().createElement(l.PageToolbar,null,a().isValidElement(g)&&g||!1!==g&&a().createElement(s.ConnectedToolbar,{filterOptions:P,productId:f,query:k,viewId:_})),a().createElement(l.PageSection,null,a().createElement(c.ConnectedGraphCard,{key:"graph_".concat(f),filterGraphData:w,settings:M,query:Z,productId:f,viewId:_,cardTitle:G,productLabel:S},a().isValidElement(n)&&n||!1!==n&&a().createElement(y.ToolbarFieldGranularity,{viewId:_,value:Z[T.VN.GRANULARITY]}))),a().createElement(l.PageSection,null,a().createElement(E.default,{key:"inventory_".concat(f),productId:f},a().createElement(E.InventoryTab,{key:"inventory_hosts_".concat(f),title:r("curiosity-inventory.tabHosts",{context:["noInstances",f]})},a().createElement(d.ConnectedInventoryList,{key:"inv_".concat(f),filterGuestsData:U,filterInventoryData:O,productId:f,settings:L,query:F,viewId:_})),!v.BM.UI_DISABLED_TABLE_SUBSCRIPTIONS&&a().createElement(E.InventoryTab,{key:"inventory_subs_".concat(f),title:r("curiosity-inventory.tabSubscriptions",{context:f})},a().createElement(I.ConnectedInventorySubscriptions,{key:"subs_".concat(f),filterInventoryData:Y,productId:f,query:V,viewId:_})))))};g.defaultProps={t:m.translate,toolbarGraph:null,toolbarGraphDescription:!1,toolbarProduct:null}},81114:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f,ProductViewOpenShiftContainer:()=>f});var n=r(92950),a=r.n(n),i=r(68269),o=r(31369),l=r(52422),u=r(30446),c=r(25097),s=r(10608),d=r(74097),v=r(2738),p=r(65876),y=r(92227),E=r(86876),I=r(47493),T=r(69051),m=(r(29175),r(83109)),g=r(76006),f=function(e){var t=e.routeDetail,r=e.t,n=t.productParameter,m=t.productConfig,f=(0,c.v9)((function(e){var t,r;return null===(t=e.view.query)||void 0===t||null===(r=t[m[0].viewId])||void 0===r?void 0:r[u.VN.UOM]}),null);return a().createElement(l.PageLayout,null,a().createElement(l.PageHeader,{productLabel:n},r("curiosity-view.title",{appName:g.BM.UI_DISPLAY_NAME,context:n})),a().createElement(l.PageColumns,null,m.map((function(e){return function(e,t){var n=e.productContextFilterUom,m=e.query,f=void 0===m?{}:m,b=e.graphTallyQuery,S=void 0===b?{}:b,_=e.inventoryHostsQuery,h=void 0===_?{}:_,D=e.inventorySubscriptionsQuery,R=void 0===D?{}:D,A=e.initialGraphFilters,N=void 0===A?[]:A,P=e.initialGraphSettings,w=void 0===P?{}:P,M=e.initialGuestsFilters,U=void 0===M?[]:M,O=e.initialInventoryFilters,L=void 0===O?[]:O,Y=e.initialInventorySettings,C=void 0===Y?{}:Y,Q=e.initialSubscriptionsInventoryFilters,Z=e.initialToolbarFilters,F=e.productLabel,V=e.productId,k=e.viewId;if(!V||!k)return null;var q,G=c.IT.parseRhsmQuery(f,{graphTallyQuery:S,inventoryHostsQuery:h,inventorySubscriptionsQuery:R}),x=G.graphTallyQuery,H=G.inventoryHostsQuery,B=G.inventorySubscriptionsQuery,J=G.toolbarQuery,j=N,K=L,$=Q;if(n){q=t||f[u.VN.UOM];var z=function(e){var t=e.id;return!e.isOptional||new RegExp(q,"i").test(t)};j=N.filter(z),K=L.filter(z),$=Q.filter(z)}var W=a().createElement(a().Fragment,null,r("curiosity-graph.cardHeading",{context:V}),a().createElement(i.Tooltip,{content:a().createElement("p",null,r("curiosity-graph.cardHeadingDescription",{context:V})),position:i.TooltipPosition.top,enableFlip:!1,distance:5,entryDelay:100,exitDelay:0},a().createElement("sup",{className:"curiosity-icon__info"},a().createElement(o.ZP,null))));return a().createElement(a().Fragment,{key:"product_".concat(V,"_").concat(q)},Z&&a().createElement(l.PageToolbar,null,a().createElement(y.default,{filterOptions:Z,productId:V,query:J,viewId:k})),a().createElement(l.PageSection,null,a().createElement(s.default,{key:"graph_".concat(V),filterGraphData:j,settings:w,query:x,productId:V,viewId:k,cardTitle:W,productLabel:F},V===u.wc.OPENSHIFT&&q&&a().createElement(d.ToolbarFieldUom,{value:q,viewId:k}),V===u.wc.OPENSHIFT&&a().createElement(v.ToolbarFieldGranularity,{value:S[u.VN.GRANULARITY],viewId:k}),V===u.wc.OPENSHIFT_METRICS&&a().createElement(p.ToolbarFieldRangedMonthly,{viewId:k}))),a().createElement(l.PageSection,null,a().createElement(T.default,{key:"inventory_".concat(V),productId:V},a().createElement(T.InventoryTab,{key:"inventory_hosts_".concat(V),title:r("curiosity-inventory.tabHosts",{context:["noInstances",V]})},a().createElement(E.default,{key:"inv_".concat(V),filterGuestsData:U,filterInventoryData:K,productId:V,settings:C,query:H,viewId:k})),!g.BM.UI_DISABLED_TABLE_SUBSCRIPTIONS&&Q&&a().createElement(T.InventoryTab,{key:"inventory_subs_".concat(V),title:r("curiosity-inventory.tabSubscriptions",{context:V})},a().createElement(I.default,{key:"subs_".concat(V),filterInventoryData:$,productId:V,query:B,viewId:k})))))}(e,f)}))))};f.defaultProps={t:m.translate}},2738:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p,ToolbarFieldGranularity:()=>p,toolbarFieldOptions:()=>v});var n=r(15274),a=r(56949),i=r(92950),o=r.n(i),l=r(25097),u=r(49844),c=r(30446),s=r(76006),d=r(83109),v=Object.values(c.U9).map((function(e){return{title:(0,d.translate)("curiosity-toolbar.granularity",{context:e}),value:e,selected:!1}})),p=function e(t){var r=t.options,i=t.t,d=t.value,v=t.viewId,p=(0,l.v9)((function(e){var t,r;return null===(t=e.view.graphTallyQuery)||void 0===t||null===(r=t[v])||void 0===r?void 0:r[c.VN.GRANULARITY]}),d),y=r.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{selected:e.value===p})}));return o().createElement(u.Select,{"aria-label":i("curiosity-toolbar.placeholder",{context:"granularity"}),onSelect:function(e){var t=s.i3.getRangedDateTime(e.value),r=t.startDate,a=t.endDate;l.h.dispatch([{type:l.JD.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:v},(0,n.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[c.VN.GRANULARITY],viewId:v},c.VN.GRANULARITY,e.value),(0,n.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[c.VN.START_DATE],viewId:v},c.VN.START_DATE,r.toISOString()),(0,n.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[c.VN.END_DATE],viewId:v},c.VN.END_DATE,a.toISOString())])},options:y,selectedOptions:p,placeholder:i("curiosity-toolbar.placeholder",{context:"granularity"}),"data-test":e.defaultProps.viewId})};p.defaultProps={options:v,t:d.translate,value:c.U9.DAILY,viewId:"toolbarFieldGranularity"}},65876:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p,ToolbarFieldRangedMonthly:()=>p,toolbarFieldOptions:()=>v});var n=r(15274),a=r(56949),i=r(92950),o=r.n(i),l=r(25097),u=r(49844),c=r(30446),s=r(76006),d=r(83109),v=s.i3.getRangedMonthDateTime().listDateTimeRanges.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{selected:!1})})),p=function e(t){var r=t.options,i=t.t,s=t.value,d=t.viewId,v=(0,l.v9)((function(e){var t,r;return null===(t=e.view.query)||void 0===t||null===(r=t[d])||void 0===r?void 0:r[c.VN.START_DATE]}),s),p=r.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{selected:e.title===v||e.value.startDate.toISOString()===v})}));return o().createElement(u.Select,{"aria-label":i("curiosity-toolbar.placeholder",{context:"granularity"}),onSelect:function(e){var t=e.value,r=t.startDate,a=t.endDate;l.h.dispatch([{type:l.JD.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:d},(0,n.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[c.VN.GRANULARITY],viewId:d},c.VN.GRANULARITY,c.U9.DAILY),(0,n.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[c.VN.START_DATE],viewId:d},c.VN.START_DATE,r.toISOString()),(0,n.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[c.VN.END_DATE],viewId:d},c.VN.END_DATE,a.toISOString())])},options:p,placeholder:i("curiosity-toolbar.placeholder",{context:"granularity"}),position:u.SelectPosition.right,maxHeight:250,"data-test":e.defaultProps.viewId})};p.defaultProps={options:v,t:d.translate,value:(0,d.translate)("curiosity-toolbar.granularityRange",{context:"current"}),viewId:"toolbarFieldRangeGranularity"}},74097:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v,ToolbarFieldUom:()=>v,toolbarFieldOptions:()=>d});var n=r(15274),a=r(56949),i=r(92950),o=r.n(i),l=r(25097),u=r(49844),c=r(30446),s=r(83109),d=Object.values(c.lu).map((function(e){return{title:(0,s.translate)("curiosity-toolbar.uom",{context:e}),value:e,selected:!1}})),v=function e(t){var r=t.options,i=t.t,s=t.value,d=t.viewId,v=(0,l.v9)((function(e){var t,r;return null===(t=e.view.query)||void 0===t||null===(r=t[d])||void 0===r?void 0:r[c.VN.UOM]}),s),p=r.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{selected:e.value===v})}));return o().createElement(u.Select,{"aria-label":i("curiosity-toolbar.placeholder",{context:"uom"}),onSelect:function(e){return l.h.dispatch([{type:l.JD.query.SET_QUERY_RESET_INVENTORY_LIST,viewId:d},(0,n.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[c.VN.UOM],viewId:d},c.VN.UOM,e.value)])},options:p,selectedOptions:v,placeholder:i("curiosity-toolbar.placeholder",{context:"uom"}),"data-test":e.defaultProps.viewId})};v.defaultProps={options:d,t:s.translate,value:c.lu.CORES,viewId:"toolbarFieldUom"}}}]);
//# sourceMappingURL=../sourcemaps/4059.43c84c8eab17c1902c28.js.map