"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[1339],{91339:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h,MinHeight:()=>h});var i=t(90237),r=t(65337),o=t(95225),s=t(39576),a=t(80239),u=t(92950),c=t.n(u),d=t(76006),h=function(e){(0,s.Z)(t,e);var n=(0,a.Z)(t);function t(){var e;(0,i.Z)(this,t);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=n.call.apply(n,[this].concat(s))).containerRef=c().createRef(),e.innerContainerRef=c().createRef(),e.updatedContainerWidth=0,e.resizeObserver=d.BM.noop,e.onResizeContainer=function(){var n,t,i=(0,o.Z)(e).updatedContainerWidth,r=e.props.updateOnResize,s=(null===(n=e.containerRef)||void 0===n||null===(t=n.current)||void 0===t?void 0:t.clientWidth)||0;r&&s!==i&&(e.updatedContainerWidth=s,e.setMinHeight(!0))},e}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){var e=this,n=this.props.updateOnResize;window.setTimeout((function(){e.setMinHeight()})),n&&this.setResizeObserver()}},{key:"componentDidUpdate",value:function(){var e=this;this.props.updateOnContent&&window.setTimeout((function(){e.setMinHeight()}))}},{key:"componentWillUnmount",value:function(){this.resizeObserver()}},{key:"setMinHeight",value:function(){var e,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.props.minHeight,i=this.containerRef.current,r=void 0===i?{}:i,o=this.innerContainerRef.current,s=void 0===o?{}:o;(null==r?void 0:r.style)&&(t>(e=n?(null==s?void 0:s.clientHeight)||0:(null==r?void 0:r.clientHeight)||0)&&(e=t),r.style.minHeight="".concat(e,"px"))}},{key:"setResizeObserver",value:function(){var e=this;window.addEventListener("resize",this.onResizeContainer),this.resizeObserver=function(){return window.removeEventListener("resize",e.onResizeContainer)}}},{key:"render",value:function(){var e=this.props.children;return c().createElement("div",{className:"curiosity-minheight",ref:this.containerRef},c().createElement("div",{ref:this.innerContainerRef},e))}}]),t}(c().Component);h.defaultProps={updateOnContent:!1,updateOnResize:!0,minHeight:0}}}]);
//# sourceMappingURL=../sourcemaps/1339.3414f0d5f0b261ca3873.js.map