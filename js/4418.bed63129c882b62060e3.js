"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[4418],{64418:(t,e,n)=>{n.r(e),n.d(e,{default:()=>v,ConnectedGraphCardChartLegend:()=>v,GraphCardChartLegend:()=>y});var o=n(15274),r=n(90237),a=n(65337),i=n(39576),c=n(80239),l=n(92950),d=n.n(l),s=n(58788),u=n(25097),h=n(76006),p=n(83109),g=n(1138),y=function(t){(0,i.Z)(n,t);var e=(0,c.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).onClick=function(e){var n=t.props,r=n.chart,a=n.viewId,i=r.toggle(e);u.h.dispatch({type:u.JD.graph.SET_GRAPH_LEGEND,legend:(0,o.Z)({},"".concat(a,"-").concat(e),i)})},t}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var t=this.props,e=t.chart,n=t.datum,o=t.legend,r=t.viewId;n.dataSets.forEach((function(t){var n=t.id;(o["".concat(r,"-").concat(n)]||e.isToggled(n))&&e.hide(n)}))}},{key:"renderLegendItem",value:function(t){var e=this,n=t.chartId,o=t.color,r=t.isDisabled,a=t.isThreshold,i=t.labelContent,c=t.tooltipContent,l=this.props,u=l.chart,h=l.legend,p=l.viewId,y=h["".concat(p,"-").concat(n)]||u.isToggled(n),v=d().createElement(s.Button,{onClick:function(){return e.onClick(n)},onKeyPress:function(){return e.onClick(n)},className:"curiosity-usage-graph__legend-item",tabIndex:0,key:"curiosity-button-".concat(n),variant:"link",component:"a",isDisabled:r,icon:(r||y)&&d().createElement(g.ChartIcon,{symbol:"eyeSlash"})||d().createElement(g.ChartIcon,{symbol:a?"dash":"square",style:{visibility:r||y?"hidden":"visible"},fill:o})},i);return c?d().createElement(s.Tooltip,{key:"curiosity-tooltip-".concat(n),content:d().createElement("p",null,c),position:s.TooltipPosition.top,enableFlip:!0,distance:5},v):v}},{key:"render",value:function(){var t=this,e=this.props,n=e.datum,o=e.productLabel,r=e.t;return d().createElement(d().Fragment,null,n.dataSets.map((function(e){var n=e.id,a=e.isThreshold,i=e.stroke,c=e.data,l=!(void 0===c?[]:c).find((function(t){var e=t.y,n=t.hasData;return e>=0&&!0===n||e>=0&&!0===a}))||!1,d=a&&r("curiosity-graph.label_threshold",{product:o,context:[n,o]})||r(["curiosity-graph.".concat(n,"Label"),"curiosity-graph.noLabel"],{product:o,context:o}),s=a&&r("curiosity-graph.legendTooltip_threshold",{product:o,context:[n,o]})||r("curiosity-graph.".concat(n,"LegendTooltip"),{product:o,context:o});return t.renderLegendItem({chartId:n,color:i,labelContent:d,isDisabled:l,isThreshold:a,tooltipContent:s})})))}}]),n}(d().Component);y.defaultProps={chart:{hide:h.BM.noop,toggle:h.BM.noop,isToggled:h.BM.noop},datum:{dataSets:[]},legend:{},productLabel:"",t:p.translate,viewId:"graphCardLegend"};var v=(0,u.$j)((function(t){return{legend:t.graph.legend}}))(y)}}]);
//# sourceMappingURL=../sourcemaps/4418.f747a235388b38c5436f.js.map