"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[8213],{78213:(t,i,o)=>{o.r(i),o.d(i,{default:()=>h,chartTooltip:()=>h});var e=o(92950),n=o.n(e),d=o(76006),h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.chartSettings,o=void 0===i?{}:i,e=t.chartContainerRef,h=void 0===e?d.BM.noop:e,l=t.chartTooltipRef,r=void 0===l?d.BM.noop:l,a=t.minChartWidth,c=void 0===a?500:a,u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.x,o=t.width,e=t.tooltipWidth,n=t.padding,d=void 0===n?0:n,h=t.minWidth,l=void 0===h?c:h;return o<=l&&i>e/2+d&&i<l-e+d?i+d-e/2:i>o/2?i-e+d:i+d},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.y,o=t.height,e=t.tooltipHeight,n=t.width,d=t.padding,h=void 0===d?15:d,l=t.minWidth,r=void 0===l?c:l;return n<=r?i>o/2?i-e-h:i+h:.25*o},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.x,o=t.width,e=t.tooltipWidth,n=t.padding,d=void 0===n?0:n,h=t.minWidth,l=void 0===h?c:h;return o<=l&&i>e/2+d&&i<l-e+d?"middle":i>o/2?"right":"left"};return function(t){var i,e,d,l,a,c=t.x,p=t.y,w=t.datum,s=void 0===w?{}:w,f=o.padding,m=void 0===f?{}:f,y=o.tooltipDataSetLookUp,x=void 0===y?{}:y,W=h(),_=r(),k=(null==x||null===(i=x[s.x])||void 0===i?void 0:i.tooltip)||"",C=null!==(e=m.bottom)&&void 0!==e?e:0,b=(null==W||null===(d=W.current)||void 0===d||null===(l=d.querySelector("svg"))||void 0===l?void 0:l.getBoundingClientRect())||{width:0,height:0},E=(null==_||null===(a=_.current)||void 0===a?void 0:a.getBoundingClientRect())||{width:0,height:0};if(k){var B="".concat(E.height<=0?"fadein":"");return n().createElement("g",null,n().createElement("foreignObject",{x:u({x:c,width:b.width,tooltipWidth:E.width}),y:v({y:p,height:b.height,tooltipHeight:E.height,width:b.width}),width:"100%",height:"100%"},n().createElement("div",{className:"curiosity-chartarea__tooltip-container ".concat(B),ref:_,style:{display:p>b.height-C?"none":"inline-block"},xmlns:"http://www.w3.org/1999/xhtml"},n().createElement("div",{className:"curiosity-chartarea__tooltip curiosity-chartarea__tooltip-".concat(g({x:c,y:p,width:b.width,tooltipWidth:E.width}))},k))))}return n().createElement("g",null)}}}}]);
//# sourceMappingURL=../sourcemaps/8213.019edb8bc7b06dfb927d.js.map