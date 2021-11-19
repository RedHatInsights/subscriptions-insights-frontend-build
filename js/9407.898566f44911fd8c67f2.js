"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[9407],{29407:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p,GraphCardMetricTotals:()=>p});var r=a(92950),l=a.n(r),o=a(21012),n=a(30381),i=a.n(n),c=a(51858),s=a(25394),u=a(91339),d=a(1797),m=a(76006),h=a(65876),y=a(46262),g=a(83109),p=function(e){var t,a,r,n,c=e.children,s=e.t,g=e.useMetricsSelector,p=(0,e.useProductGraphTallyQuery)()[y.O6.START_DATE],f=g(),E=f.pending,M=f.error,v=f.fulfilled,C=f.dataSets,S=(void 0===C?[]:C)[0]||{},T=S.data,_=void 0===T?[]:T,k=S.id,F=S.meta,x=void 0===F?{}:F,D=_[_.length-1]||{},b=D.date,B=D.hasData,P=D.y,H=_.find((function(e){return!0===e.isCurrentDate}))||{},N=H.date,w=H.hasData,z=H.y,G=x.totalMonthlyDate,U=x.totalMonthlyHasData,I=x.totalMonthlyValue,O=h.toolbarFieldOptions.find((function(e){return e.title===p||e.value.startDate.toISOString()===p}))||{},Q=O.title,A=O.isCurrent,L=A?N:b,R=A?w:B,V=A?z:P;return l().createElement(o.Flex,{className:"curiosity-usage-graph__totals"},l().createElement(o.Flex,{flex:{default:"flex_1"},direction:{default:"column"},alignSelf:{default:"alignSelfStretch"}},l().createElement(o.FlexItem,{className:"curiosity-usage-graph__totals-column"},l().createElement(o.Card,{"data-test":"graphDailyTotalCard",className:"curiosity-usage-graph__totals-column-card ".concat(M?"blur":"")},l().createElement(o.CardTitle,null,s("curiosity-graph.cardHeadingMetric_dailyTotal",{context:k,month:Q})),l().createElement(u.MinHeight,{key:"currentBody"},l().createElement(o.CardBody,null,l().createElement("div",null,E&&l().createElement(d.Loader,{variant:"skeleton",skeletonProps:{size:d.SkeletonSize.lg}}),v&&s("curiosity-graph.cardBodyMetric_total",{context:R&&k||"",total:null===(t=m.BM.numberDisplay(V))||void 0===t||null===(a=t.format({average:!0,mantissa:5,trimMantissa:!0,lowPrecision:!1}))||void 0===a?void 0:a.toUpperCase()},[l().createElement("strong",{title:V,"aria-label":V})])))),l().createElement(u.MinHeight,{key:"currentFooter"},l().createElement(o.CardFooter,null,l().createElement("div",{className:R?"":"hidden"},v&&L&&s("curiosity-graph.cardFooterMetric",{date:i().utc(L).format(m.i3.timestampUTCTimeFormats.yearTimeShort)}))))),l().createElement(o.Card,{"data-test":"graphMonthlyTotalCard",className:"curiosity-usage-graph__totals-column-card ".concat(M?"blur":"")},l().createElement(o.CardTitle,null,s("curiosity-graph.cardHeadingMetric_monthlyTotal",{context:k,month:Q})),l().createElement(u.MinHeight,{key:"totalMonthlyBody"},l().createElement(o.CardBody,null,l().createElement("div",null,E&&l().createElement(d.Loader,{variant:"skeleton",skeletonProps:{size:d.SkeletonSize.lg}}),v&&s("curiosity-graph.cardBodyMetric_total",{context:U&&k||"",total:null===(r=m.BM.numberDisplay(I))||void 0===r||null===(n=r.format({average:!0,mantissa:5,trimMantissa:!0,lowPrecision:!1}))||void 0===n?void 0:n.toUpperCase()},[l().createElement("strong",{title:I,"aria-label":I})])))),l().createElement(u.MinHeight,{key:"totalMonthlyFooter"},l().createElement(o.CardFooter,null,l().createElement("div",{className:U?"":"hidden"},v&&G&&s("curiosity-graph.cardFooterMetric",{date:i().utc(G).format(m.i3.timestampUTCTimeFormats.yearTimeShort)}))))))),l().createElement(o.Flex,{flex:{default:"flex_3"},direction:{default:"column"},alignSelf:{default:"alignSelfStretch"}},l().createElement(o.FlexItem,{className:"curiosity-usage-graph__totals-graph-column"},c)))};p.defaultProps={children:null,t:g.translate,useMetricsSelector:s.useMetricsSelector,useProductGraphTallyQuery:c.useProductGraphTallyQuery}}}]);
//# sourceMappingURL=../sourcemaps/9407.5d4e999723ba2745dd76bd597e06683c.js.map