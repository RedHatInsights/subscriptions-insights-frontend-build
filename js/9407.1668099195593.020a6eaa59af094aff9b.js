(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[9407,1339,5451],{25394:function(e,t,r){"use strict";r.r(t),r.d(t,{DEFAULT_CONTEXT:function(){return f},GraphCardContext:function(){return h},context:function(){return y},default:function(){return y},useGetMetrics:function(){return v},useGraphCardContext:function(){return m},useMetricsSelector:function(){return p}});var n=r(1413),i=r(45987),a=r(92950),o=r.n(a),l=r(15451),u=r(61072),c=r(51858),s=r(62834),d=["error","fulfilled","pending","data"],f=[{settings:{isStandalone:!1,metrics:[],metric:void 0}},s.B.noop],h=o().createContext(f),m=function(){return(0,a.useContext)(h)},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useGraphCardContext,r=void 0===t?m:t,a=e.useSelectorsResponse,o=void 0===a?u.Cr.reactRedux.useSelectorsAllSettledResponse:a,l=r(),c=l.settings,s=void 0===c?{}:c,f=s.metrics,h=void 0===f?[]:f,p=o(h.map((function(e){var t=e.id,r=e.isCapacity;return function(e){var n,i,a=e.graph;return r?null===(n=a.capacity)||void 0===n?void 0:n[t]:null===(i=a.tally)||void 0===i?void 0:i[t]}}))),v=p.error,y=p.fulfilled,g=p.pending,C=p.data,M=void 0===C?[]:C,E=(0,i.Z)(p,d),T={},S=null==M?void 0:M.map((function(e,t){var r=(0,n.Z)((0,n.Z)({},h[t]),e);return T[h[t].id]=r,r}));return(0,n.Z)((0,n.Z)({},E),{},{data:T,dataSets:S,error:v,fulfilled:y,pending:g})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getGraphMetrics,r=void 0===t?u.Ak.rhsm.getGraphMetrics:t,n=e.useDispatch,i=void 0===n?u.Cr.reactRedux.useDispatch:n,a=e.useGraphCardContext,o=void 0===a?m:a,s=e.useMetricsSelector,d=void 0===s?p:s,f=e.useProduct,h=void 0===f?c.useProduct:f,v=e.useProductGraphTallyQuery,y=void 0===v?c.useProductGraphTallyQuery:v,g=h(),C=g.productId,M=y(),E=i(),T=o(),S=T.settings,x=void 0===S?{}:S,R=x.metrics,k=void 0===R?[]:R,D=d();return(0,l.Z)((function(){var e=k.map((function(e){var t=e.metric,r=e.isCapacity,n=e.query;return{id:C,metric:t,isCapacity:r,query:n}}));r(e,M)(E)}),[E,r,k,C,M]),D},y={GraphCardContext:h,DEFAULT_CONTEXT:f,useGetMetrics:v,useGraphCardContext:m,useMetricsSelector:p}},29407:function(e,t,r){"use strict";r.r(t),r.d(t,{GraphCardMetricTotals:function(){return g},default:function(){return g}});var n=r(92950),i=r.n(n),a=r(21242),o=r(30381),l=r.n(o),u=r(68929),c=r.n(u),s=r(51858),d=r(25394),f=r(91339),h=r(1797),m=r(76006),p=r(65876),v=r(46262),y=r(83109),g=function(e){var t,r,n,o,u=e.children,s=e.t,d=e.useMetricsSelector,y=(0,e.useProductGraphTallyQuery)()[v.O6.START_DATE],g=d(),C=g.pending,M=g.error,E=g.fulfilled,T=g.dataSets,S=(void 0===T?[]:T)[0]||{},x=S.data,R=void 0===x?[]:x,k=S.id,D=S.metric,O=S.meta,b=void 0===O?{}:O,z=R[R.length-1]||{},H=z.date,_=z.hasData,F=z.y,G=R.find((function(e){return!0===e.isCurrentDate}))||{},w=G.date,P=G.hasData,Z=G.y,B=b.totalMonthlyDate,N=b.totalMonthlyHasData,U=b.totalMonthlyValue,A=p.toolbarFieldOptions.find((function(e){return e.title===y||e.value.startDate.toISOString()===y}))||{},L=A.title,Q=A.isCurrent,W=Q?w:H,I=Q?P:_,j=Q?Z:F;return i().createElement(a.Flex,{"data-test":"graphMetricTotals-".concat(c()(D)),className:"curiosity-usage-graph__totals"},i().createElement(a.Flex,{flex:{default:"flex_1"},direction:{default:"column"},alignSelf:{default:"alignSelfStretch"}},i().createElement(a.FlexItem,{className:"curiosity-usage-graph__totals-column"},i().createElement(a.Card,{"data-test":"graphDailyTotalCard",className:"curiosity-usage-graph__totals-column-card ".concat(M?"blur":"")},i().createElement(a.CardTitle,null,s("curiosity-graph.cardHeadingMetric",{context:["dailyTotal",k],month:L})),i().createElement(f.MinHeight,{key:"currentBody"},i().createElement(a.CardBody,null,i().createElement("div",null,C&&i().createElement(h.Loader,{variant:"skeleton",skeletonProps:{size:h.SkeletonSize.lg}}),E&&s("curiosity-graph.cardBodyMetric",{context:["total",I&&k],total:null===(t=m.BM.numberDisplay(j))||void 0===t||null===(r=t.format({average:!0,mantissa:5,trimMantissa:!0,lowPrecision:!1}))||void 0===r?void 0:r.toUpperCase()},[i().createElement("strong",{title:j,"aria-label":j})])))),i().createElement(f.MinHeight,{key:"currentFooter"},i().createElement(a.CardFooter,null,i().createElement("div",{className:I?"":"hidden"},E&&W&&s("curiosity-graph.cardFooterMetric",{date:l().utc(W).format(m.i3.timestampUTCTimeFormats.yearTimeShort)}))))),i().createElement(a.Card,{"data-test":"graphMonthlyTotalCard",className:"curiosity-usage-graph__totals-column-card ".concat(M?"blur":"")},i().createElement(a.CardTitle,null,s("curiosity-graph.cardHeadingMetric",{context:["monthlyTotal",k],month:L})),i().createElement(f.MinHeight,{key:"totalMonthlyBody"},i().createElement(a.CardBody,null,i().createElement("div",null,C&&i().createElement(h.Loader,{variant:"skeleton",skeletonProps:{size:h.SkeletonSize.lg}}),E&&s("curiosity-graph.cardBodyMetric",{context:["total",N&&k],total:null===(n=m.BM.numberDisplay(U))||void 0===n||null===(o=n.format({average:!0,mantissa:5,trimMantissa:!0,lowPrecision:!1}))||void 0===o?void 0:o.toUpperCase()},[i().createElement("strong",{title:U,"aria-label":U})])))),i().createElement(f.MinHeight,{key:"totalMonthlyFooter"},i().createElement(a.CardFooter,null,i().createElement("div",{className:N?"":"hidden"},E&&B&&s("curiosity-graph.cardFooterMetric",{date:l().utc(B).format(m.i3.timestampUTCTimeFormats.yearTimeShort)}))))))),i().createElement(a.Flex,{flex:{default:"flex_3"},direction:{default:"column"},alignSelf:{default:"alignSelfStretch"}},i().createElement(a.FlexItem,{className:"curiosity-usage-graph__totals-graph-column"},u)))};g.defaultProps={children:null,t:y.translate,useMetricsSelector:d.useMetricsSelector,useProductGraphTallyQuery:s.useProductGraphTallyQuery}},91339:function(e,t,r){"use strict";r.r(t),r.d(t,{MinHeight:function(){return d},default:function(){return d}});var n=r(15671),i=r(43144),a=r(97326),o=r(60136),l=r(54062),u=r(92950),c=r.n(u),s=r(76006),d=function(e){(0,o.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,n.Z)(this,r);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).containerRef=c().createRef(),e.innerContainerRef=c().createRef(),e.updatedContainerWidth=0,e.resizeObserver=s.BM.noop,e.onResizeContainer=function(){var t,r,n=(0,a.Z)(e).updatedContainerWidth,i=e.props.updateOnResize,o=(null===(t=e.containerRef)||void 0===t||null===(r=t.current)||void 0===r?void 0:r.clientWidth)||0;i&&o!==n&&(e.updatedContainerWidth=o,e.setMinHeight(!0))},e}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){var e=this,t=this.props.updateOnResize;window.setTimeout((function(){e.setMinHeight()})),t&&this.setResizeObserver()}},{key:"componentDidUpdate",value:function(){var e=this;this.props.updateOnContent&&window.setTimeout((function(){e.setMinHeight()}))}},{key:"componentWillUnmount",value:function(){this.resizeObserver()}},{key:"setMinHeight",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=this.props.minHeight,n=this.containerRef.current,i=void 0===n?{}:n,a=this.innerContainerRef.current,o=void 0===a?{}:a;null!=i&&i.style&&(r>(e=t?(null==o?void 0:o.clientHeight)||0:(null==i?void 0:i.clientHeight)||0)&&(e=r),i.style.minHeight="".concat(e,"px"))}},{key:"setResizeObserver",value:function(){var e=this;window.addEventListener("resize",this.onResizeContainer),this.resizeObserver=function(){return window.removeEventListener("resize",e.onResizeContainer)}}},{key:"render",value:function(){var e=this.props.children;return c().createElement("div",{className:"curiosity-minheight",ref:this.containerRef},c().createElement("div",{ref:this.innerContainerRef},e))}}]),r}(c().Component);d.defaultProps={updateOnContent:!1,updateOnResize:!0,minHeight:0}},99376:function(e,t){var r=Object.keys;t.D=function(e,t){if(e===t)return!0;if(!(e instanceof Object&&t instanceof Object))return!1;for(var n=r(e),i=n.length,a=0;a<i;a++)if(!(n[a]in t))return!1;for(a=0;a<i;a++)if(e[n[a]]!==t[n[a]])return!1;return i===r(t).length}},15451:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(99376),i=r(92950),a=function(e,t){return e.every((function(e,r){return(0,n.D)(e,t[r])}))},o=function(e,t){!function(e,t,r){var n=(0,i.useRef)(void 0);n.current&&r(t,n.current)||(n.current=t),(0,i.useEffect)(e,n.current)}(e,t,a)}}}]);
//# sourceMappingURL=../sourcemaps/9407.js.map