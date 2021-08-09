"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[1026],{61026:(t,e,a)=>{a.r(e),a.d(e,{default:()=>p,chartHelpers:()=>p,generateAxisProps:()=>h,generateDomains:()=>c,generateElementsProps:()=>x,generateMaxXY:()=>u,generateTooltipData:()=>v,generateXAxisProps:()=>m,generateYAxisProps:()=>f});var i=a(56949),n=a(1252),r=a(92950),o=a.n(r),s=a(50361),l=a.n(s),d=a(76006),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.dataSets,a=void 0===e?[]:e,i={},r=0,o=0;return a.filter((function(t){return!0===t.isStacked})).forEach((function(t){var e=t.data;Array.isArray(e)&&(o+=Math.max.apply(Math,(0,n.Z)(e.map((function(t){var e;return null!==(e=null==t?void 0:t.y)&&void 0!==e?e:0})))))})),a.forEach((function(t){var e=t.id,a=t.data,s=0;Array.isArray(a)&&(r=a.length>r?a.length:r,s=Math.max.apply(Math,(0,n.Z)(a.map((function(t){var e;return null!==(e=null==t?void 0:t.y)&&void 0!==e?e:0})))),o=s>o?s:o),e&&(i[e]=s)})),{maxX:r,maxY:o,individualMaxY:i}},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.maxY,a={},n={};if(Object.values(e).length)n.y=[0,1.25];else{var r=Math.pow(10,Math.floor(Math.log10(e||10)));n.y=[0,Math.ceil((e+1)/r)*r]}return Object.keys(n).length&&(a.domain=n),(0,i.Z)({},a)},x=function(t){var e=t.dataSets,a=void 0===e?[]:e,n=t.maxX,r=t.maxY,o=t.xValueFormat,s=t.yValueFormat,l=[],d=[],u={},c={};return a.forEach((function(t){var e=t.animate,a=t.chartType,x=t.data,v=t.fill,m=t.id,f=t.isStacked,h=t.interpolation,p=t.stroke,y=t.strokeDasharray,k=t.strokeWidth;if(null==x?void 0:x.length){var g={data:{}};v&&"line"!==a&&"threshold"!==a&&(g.data.fill=v),p&&(g.data.stroke=p),y&&(g.data.strokeDasharray=y),k&&(g.data.strokeWidth=k);var A={};e&&(A.animate=e),h&&(A.interpolation=h);var Z=(0,i.Z)((0,i.Z)({},A),{},{key:"chart-".concat(t.id,"-").concat(a||""),name:"chart-".concat(t.id,"-").concat(a||""),data:t.data,style:(0,i.Z)((0,i.Z)({},t.style||{}),g),themeColor:t.themeColor,themeVariant:t.themeVariant,x:o&&function(t){return o({datum:t,maxX:n})}||void 0,y:s&&function(e){return s({datum:e,isMultiAxis:"number"!=typeof r,maxY:"number"==typeof r?r:null==r?void 0:r[t.id]})}||function(e){return"number"==typeof r?e.y:e.y/(null==r?void 0:r[t.id])}}),b={chartType:a,props:(0,i.Z)({},Z)};f?(c[m]=b,d.push(b)):(u[m]=b,l.push(b))}})),{elements:l,elementsById:u,stackedElements:d,stackedElementsById:c}},v=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.content,n=void 0===a?d.BM.noop:a,r=e.dataSets,s=void 0===r?[]:r,u={};return n&&(null==s||null===(t=s[0])||void 0===t?void 0:t.data)&&s[0].data.forEach((function(t,e){var a={};s.forEach((function(t){(null==t?void 0:t.data[e])&&(a[t.id]={color:t.stroke||t.fill||t.color||"",chartType:t.chartType,data:l()(t.data[e])})}));var r={datum:{x:t.x,y:t.y,index:e,itemsByKey:a}};u[t.x]={x:t.x,y:null,itemsByKey:a,tooltip:o().isValidElement(n)&&o().cloneElement(n,(0,i.Z)({},r))||n((0,i.Z)({},r))}})),u},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.dataSet,a=void 0===e?{}:e,n=t.maxX,r=t.xAxisLabelIncrement,o=t.xAxisPropDefaults,s=void 0===o?{}:o,l=t.xAxisTickFormat,d=a.data,u=void 0===d?[]:d,c=(0,i.Z)((0,i.Z)({},s),{},{tickValues:u.reduce((function(t,e,a){return a%r==0?t.concat(e.x):t}),[]),tickFormat:function(t){var e;return(null===(e=u[t])||void 0===e?void 0:e.xAxisLabel)||t}});return"function"==typeof l&&(c.tickFormat=function(t){var e=c.tickValues.indexOf(t),a=(0,i.Z)({},u[c.tickValues[e-1]]),r=(0,i.Z)({},u[c.tickValues[e+1]]),o=(0,i.Z)({},u[t]);return l({tick:t,previousItem:a,item:o,nextItem:r,maxX:n})}),c},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.dataSets,a=void 0===e?[]:e,n=t.maxY,r=t.yAxisPropDefaults,o=void 0===r?{}:r,s=t.yAxisTickFormat,l=[],d=a.length>1;return a.forEach((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id,a=t.stroke,r=t.strokeWidth,u=arguments.length>1?arguments[1]:void 0,c={style:{axis:{},tickLabels:{}},tickFormat:function(t){return t}};if(d&&a&&(c.style.axis.stroke=a),d&&r&&(c.style.axis.strokeWidth=r),"function"==typeof s){var x="number"==typeof n&&n||(null==n?void 0:n[e]);c.tickFormat=function(t){return s({tick:d&&t*x||t,isMultiAxis:d,maxY:x})}}l.push((0,i.Z)((0,i.Z)((0,i.Z)({},o),c),{},{orientation:0===u?"left":"right"}))})),l},h=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.dataSets,i=void 0===a?[]:a,n=e.individualMaxY,r=void 0===n?{}:n,o=e.maxX,s=e.maxY,l=e.xAxisFixLabelOverlap,d=void 0===l||l,u=e.xAxisLabelIncrement,c=void 0===u?1:u,x=e.xAxisTickFormat,v=e.yAxisTickFormat,h={fixLabelOverlap:d},p={dependentAxis:!0,showGrid:!0},y=[];i.forEach((function(e){e.yAxisUseDataSet&&y.push(e),e.xAxisUseDataSet&&(t=e)})),y.length?y=y.slice(0,2):y.push(null==i?void 0:i[0]),t||(t=(null==i?void 0:i[0])||[]);var k=y.length>1&&r||s;return{xAxisProps:m({dataSet:t,maxX:o,xAxisLabelIncrement:c,xAxisPropDefaults:h,xAxisTickFormat:x}),yAxisProps:f({dataSets:y,maxY:k,yAxisPropDefaults:p,yAxisTickFormat:v})}},p={generateAxisProps:h,generateDomains:c,generateElementsProps:x,generateMaxXY:u,generateTooltipData:v,generateXAxisProps:m,generateYAxisProps:f}}}]);
//# sourceMappingURL=../sourcemaps/1026.bad981929a37f616f67b.js.map