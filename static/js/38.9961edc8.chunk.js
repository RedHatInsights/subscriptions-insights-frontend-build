(this["webpackJsonpcuriosity-frontend"]=this["webpackJsonpcuriosity-frontend"]||[]).push([[38],{583:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v})),t.d(n,"MinHeight",(function(){return v}));var i=t(15),r=t(16),o=t(241),s=t(18),a=t(17),u=t(0),c=t.n(u),d=t(12),h=t(4),v=function(e){Object(s.a)(t,e);var n=Object(a.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=n.call.apply(n,[this].concat(s))).containerRef=c.a.createRef(),e.innerContainerRef=c.a.createRef(),e.updatedContainerWidth=0,e.resizeObserver=d.b.noop,e.onResizeContainer=function(){var n,t,i=Object(o.a)(e).updatedContainerWidth,r=e.props.updateOnResize,s=(null===(n=e.containerRef)||void 0===n||null===(t=n.current)||void 0===t?void 0:t.clientWidth)||0;r&&s!==i&&(e.updatedContainerWidth=s,e.setMinHeight(!0))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,n=this.props.updateOnResize;window.setTimeout((function(){e.setMinHeight()})),n&&this.setResizeObserver()}},{key:"componentDidUpdate",value:function(){var e=this;this.props.updateOnContent&&window.setTimeout((function(){e.setMinHeight()}))}},{key:"componentWillUnmount",value:function(){this.resizeObserver()}},{key:"setMinHeight",value:function(){var e,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.props.minHeight,i=this.containerRef.current,r=void 0===i?{}:i,o=this.innerContainerRef.current,s=void 0===o?{}:o;(null===r||void 0===r?void 0:r.style)&&(t>(e=n?(null===s||void 0===s?void 0:s.clientHeight)||0:(null===r||void 0===r?void 0:r.clientHeight)||0)&&(e=t),r.style.minHeight="".concat(e,"px"))}},{key:"setResizeObserver",value:function(){var e=this;window.addEventListener("resize",this.onResizeContainer),this.resizeObserver=function(){return window.removeEventListener("resize",e.onResizeContainer)}}},{key:"render",value:function(){var e=this.props.children;return Object(h.jsx)("div",{className:"curiosity-minheight",ref:this.containerRef,children:Object(h.jsx)("div",{ref:this.innerContainerRef,children:e})})}}]),t}(c.a.Component);v.defaultProps={updateOnContent:!1,updateOnResize:!0,minHeight:0}}}]);
//# sourceMappingURL=38.9961edc8.chunk.js.map