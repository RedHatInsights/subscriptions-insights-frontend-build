"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[4418],{64418:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v,ConnectedGraphCardChartLegend:()=>v,GraphCardChartLegend:()=>y});var o=n(15274),a=n(90237),r=n(65337),i=n(39576),c=n(80239),l=n(92950),s=n.n(l),d=n(68269),u=n(25097),h=n(76006),p=n(83109),g=n(1138),y=function(e){(0,i.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).onClick=function(t){var n=e.props,a=n.chart,r=n.viewId,i=a.toggle(t);u.h.dispatch({type:u.JD.graph.SET_GRAPH_LEGEND,legend:(0,o.Z)({},"".concat(r,"-").concat(t),i)})},e}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.chart,n=e.datum,o=e.legend,a=e.viewId;n.dataSets.forEach((function(e){var n=e.id;(o["".concat(a,"-").concat(n)]||t.isToggled(n))&&t.hide(n)}))}},{key:"renderLegendItem",value:function(e){var t=this,n=e.chartId,o=e.color,a=e.isDisabled,r=e.isThreshold,i=e.labelContent,c=e.tooltipContent,l=this.props,u=l.chart,h=l.legend,p=l.viewId,y=h["".concat(p,"-").concat(n)]||u.isToggled(n),v=s().createElement(d.Button,{onClick:function(){return t.onClick(n)},onKeyPress:function(){return t.onClick(n)},className:"curiosity-usage-graph__legend-item",tabIndex:0,key:"curiosity-button-".concat(n),variant:"link",component:"a",isDisabled:a,icon:(a||y)&&s().createElement(g.ChartIcon,{symbol:"eyeSlash"})||s().createElement(g.ChartIcon,{symbol:r?"dash":"square",style:{visibility:a||y?"hidden":"visible"},fill:o})},i);return c?s().createElement(d.Tooltip,{key:"curiosity-tooltip-".concat(n),content:s().createElement("p",null,c),position:d.TooltipPosition.top,enableFlip:!0,distance:5},v):v}},{key:"render",value:function(){var e=this,t=this.props,n=t.datum,o=t.productLabel,a=t.t;return s().createElement(s().Fragment,null,n.dataSets.map((function(t){var n=t.id,r=t.isThreshold,i=t.stroke,c=t.data,l=!(void 0===c?[]:c).find((function(e){var t=e.y,n=e.hasData;return t>=0&&!0===n||t>=0&&!0===r}))||!1,d=a(["curiosity-graph.label_".concat(r?"threshold":n),"curiosity-graph.label_no"],{product:o,context:o}),u=a("curiosity-graph.legendTooltip".concat(r?"_threshold":"","_").concat(n),{product:o,context:o},[s().createElement("span",{style:{whiteSpace:"nowrap"}})]);return e.renderLegendItem({chartId:n,color:i,labelContent:d,isDisabled:l,isThreshold:r,tooltipContent:u})})))}}]),n}(s().Component);y.defaultProps={chart:{hide:h.BM.noop,toggle:h.BM.noop,isToggled:h.BM.noop},datum:{dataSets:[]},legend:{},productLabel:"",t:p.translate,viewId:"graphCardLegend"};var v=(0,u.$j)((function(e){return{legend:e.graph.legend}}))(y)}}]);
//# sourceMappingURL=../sourcemaps/4418.748c0a5f23430cba70ef.js.map