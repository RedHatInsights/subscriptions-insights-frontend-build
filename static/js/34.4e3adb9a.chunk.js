(this["webpackJsonpcuriosity-frontend"]=this["webpackJsonpcuriosity-frontend"]||[]).push([[34],{595:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j})),n.d(e,"ConnectedGraphCardChartLegend",(function(){return j})),n.d(e,"GraphCardChartLegend",(function(){return v}));var o=n(6),a=n(15),r=n(16),i=n(18),c=n(17),d=n(0),s=n.n(d),l=n(45),h=n(85),u=n(14),p=Object(u.a)({name:"EyeSlashIcon",height:512,width:640,svgPath:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z",yOffset:0,xOffset:0}),g=n(57),b=n(12),y=n(33),f=n(4),v=function(t){Object(i.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).onClick=function(e){var n=t.props,a=n.chart,r=n.viewId,i=a.toggle(e);g.g.dispatch({type:g.f.graph.SET_GRAPH_LEGEND,legend:Object(o.a)({},"".concat(r,"-").concat(e),i)})},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this.props,e=t.chart,n=t.datum,o=t.legend,a=t.viewId;n.dataSets.forEach((function(t){var n=t.id;(o["".concat(a,"-").concat(n)]||e.isToggled(n))&&e.hide(n)}))}},{key:"renderLegendItem",value:function(t){var e=this,n=t.chartId,o=t.color,a=t.isDisabled,r=t.isThreshold,i=t.labelContent,c=t.tooltipContent,d=this.props,s=d.chart,u=d.legend,g=d.viewId,b=u["".concat(g,"-").concat(n)]||s.isToggled(n),y=Object(f.jsx)(l.a,{onClick:function(){return e.onClick(n)},onKeyPress:function(){return e.onClick(n)},className:"victory-legend-item",tabIndex:0,variant:"link",component:"a",isDisabled:a,icon:(a||b)&&Object(f.jsx)(p,{})||r&&Object(f.jsx)("hr",{"aria-hidden":!0,className:"threshold-legend-icon",style:{visibility:a||b?"hidden":"visible",borderTopColor:o}})||Object(f.jsx)("div",{"aria-hidden":!0,className:"legend-icon",style:{visibility:a||b?"hidden":"visible",backgroundColor:o}}),children:i},"curiosity-button-".concat(n));return c?Object(f.jsx)(h.a,{content:Object(f.jsx)("p",{children:c}),position:h.b.top,enableFlip:!1,distance:5,entryDelay:100,exitDelay:0,children:y},"curiosity-tooltip-".concat(n)):y}},{key:"render",value:function(){var t=this,e=this.props,n=e.datum,o=e.productLabel,a=e.t;return Object(f.jsx)(s.a.Fragment,{children:n.dataSets.map((function(e){var n=e.id,r=e.isThreshold,i=e.stroke,c=e.data,d=!(void 0===c?[]:c).find((function(t){var e=t.y,n=t.hasData;return e>=0&&!0===n||e>=0&&!0===r}))||!1,s=r&&a(["curiosity-graph.".concat(n,"Label"),"curiosity-graph.thresholdLabel"],{product:o,context:o})||a(["curiosity-graph.".concat(n,"Label"),"curiosity-graph.noLabel"],{product:o,context:o}),l=r&&a(["curiosity-graph.".concat(n,"LegendTooltip"),"curiosity-graph.thresholdLegendTooltip"],{product:o,context:o})||a("curiosity-graph.".concat(n,"LegendTooltip"),{product:o,context:o});return t.renderLegendItem({chartId:n,color:i,labelContent:s,isDisabled:d,isThreshold:r,tooltipContent:l})}))})}}]),n}(s.a.Component);v.defaultProps={chart:{hide:b.b.noop,toggle:b.b.noop,isToggled:b.b.noop},datum:{dataSets:[]},legend:{},productLabel:"",t:y.translate,viewId:"graphCardLegend"};var j=Object(g.b)((function(t){return{legend:t.graph.legend}}))(v)}}]);
//# sourceMappingURL=34.4e3adb9a.chunk.js.map