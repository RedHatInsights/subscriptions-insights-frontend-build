"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[930],{60930:(e,t,a)=>{a.r(t),a.d(t,{Chart:()=>x,default:()=>x});var r=a(56949),i=a(48418),n=a(92950),o=a.n(n),l=a(98326),s=a(54096),u=a(52902),c=a(61026),d=a(76006),x=function(e){var t=e.chartLegend,a=e.chartTooltip,x=e.dataSets,h=e.padding,m=e.themeColor,p=e.xAxisFixLabelOverlap,f=e.xAxisLabelIncrement,v=e.xAxisTickFormat,g=e.yAxisTickFormat,A=e.xValueFormat,F=e.yValueFormat,b=(0,n.useState)(),w=(0,i.Z)(b,2),y=w[0],S=w[1],L=(0,n.useState)({}),k=(0,i.Z)(L,2),E=k[0],C=k[1],T=(0,n.useRef)(null),Y=(0,n.useRef)(null),P=function(e){var t=(0,n.useState)({width:0,height:0}),a=(0,i.Z)(t,2),r=a[0],o=a[1];return(0,n.useEffect)((function(){var t=e&&window.ResizeObserver&&!0,a=null==e?void 0:e.current,r=d.BM.noop;if(a){var i=function(){var e=a||{},r=e.clientHeight,i=void 0===r?0:r,n=e.clientWidth,l=void 0===n?0:n,s=e.innerHeight,u=void 0===s?0:s,c=e.innerWidth;o({width:t?l:void 0===c?0:c,height:t?i:u})};if(t){var n=new window.ResizeObserver(i);n.observe(a),r=function(){return n.unobserve(a)}}else i(),window.addEventListener("resize",i),r=function(){return window.removeEventListener("resize",i)}}return function(){r()}}),[e]),r}(T).width;return(0,n.useEffect)((function(){var e,i,n,o,l,s,u,d,b,w,y,L=(e=x.filter((function(e){var t=e.id;return!E[t]})),i=c.chartHelpers.generateTooltipData({content:a,dataSets:e}),o=(n=c.chartHelpers.generateMaxXY({dataSets:e})).maxX,l=n.maxY,s=c.chartHelpers.generateMaxXY({dataSets:x}).individualMaxY,d=(u=c.chartHelpers.generateAxisProps({dataSets:x,individualMaxY:s,maxX:o,maxY:l,xAxisFixLabelOverlap:p,xAxisLabelIncrement:f,xAxisTickFormat:v,yAxisTickFormat:g})).xAxisProps,w=(b=u.yAxisProps).length>1,y=c.chartHelpers.generateElementsProps({dataSets:e,maxX:o,maxY:w&&s||l,xValueFormat:A,yValueFormat:F}),{xAxisProps:d,yAxisProps:b,chartDomain:c.chartHelpers.generateDomains({maxY:w&&s||l}),chartElementsProps:y,hasData:!!d.tickValues,isMultiYAxis:w,maxX:o,maxY:w&&s||l,padding:h,themeColor:m,tooltipDataSetLookUp:i}),k={chartContainerRef:function(){return T},chartSettings:(0,r.Z)((0,r.Z)({},L),{},{chartLegend:t,chartWidth:P,dataSets:x}),chartTooltipRef:function(){return Y},dataSetsToggle:[E,C]};S(k)}),[t,a,P,x,E,h,S,m,g,v,f,p,A,F]),o().createElement(l.ChartContext.Provider,{value:y},o().createElement("div",{id:"curiosity-chartarea",className:"curiosity-chartarea uxui-curiosity__modal uxui-curiosity__modal--loading",ref:T},P>0&&o().createElement(o().Fragment,null,o().createElement(s.ChartElements,null),o().createElement(u.ChartLegend,null))))};x.defaultProps={chartLegend:null,chartTooltip:null,dataSets:[],padding:{bottom:75,left:55,right:55,top:50},themeColor:"blue",xAxisFixLabelOverlap:!0,xAxisLabelIncrement:1,xAxisTickFormat:null,yAxisTickFormat:null,xValueFormat:null,yValueFormat:null}}}]);
//# sourceMappingURL=../sourcemaps/930.1a0f67cbe5716096828d.js.map