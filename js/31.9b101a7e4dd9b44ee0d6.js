"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[31],{70031:(t,e,a)=>{a.r(e),a.d(e,{default:()=>p,Tabs:()=>p});var n=a(90237),r=a(65337),i=a(39576),s=a(80239),o=a(92950),u=a.n(o),c=a(68269),l=a(28368),d=a.n(l),b=a(76006),p=function(t){(0,i.Z)(a,t);var e=(0,s.Z)(a);function a(){var t;(0,n.Z)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={updatedActiveTab:null,updatedTabs:null},t.onTab=function(e){var a=e.index,n=t.props.onTab;t.setState({updatedActiveTab:a},(function(){return n({index:a})}))},t}return(0,r.Z)(a,[{key:"componentDidMount",value:function(){null===this.state.updatedTabs&&this.setTabData()}},{key:"componentDidUpdate",value:function(t){var e=this.props.tabs;d()(t.tabs,e,(function(t,e){if("function"==typeof t&&"function"==typeof e)return t.toString()===e.toString()}))||this.setTabData()}},{key:"setTabData",value:function(){var t=this.props,e=t.activeTab,a=t.defaultActiveTab,n=t.tabs,r=a,i=n.map((function(t,e){var a=t.active,n=t.content,i=t.title;return r=a?e:r,u().createElement(c.Tab,{key:i,eventKey:e,title:u().createElement(c.TabTitleText,null,i)},n)}));"number"==typeof e&&(r=e),this.setState({updatedActiveTab:r,updatedTabs:i})}},{key:"renderTabs",value:function(){var t=this,e=this.state,a=e.updatedActiveTab,n=e.updatedTabs,r=this.props,i=r.className,s=r.hasOverflowScroll;return u().createElement(c.Tabs,{className:"curiosity-tabs".concat(s?"":"__no-scroll"," ").concat(i||""),activeKey:a,onSelect:function(e,a){return t.onTab({event:e,index:a})},mountOnEnter:!0,unmountOnExit:!0,inset:{default:"insetNone",md:"insetLg"}},n)}},{key:"render",value:function(){return u().createElement(c.Grid,{className:"curiosity-tabs-container"},u().createElement(c.GridItem,{span:12},this.renderTabs()))}}]),a}(u().Component);p.defaultProps={activeTab:null,className:"",defaultActiveTab:0,hasOverflowScroll:!1,onTab:b.BM.noop,tabs:[]}}}]);
//# sourceMappingURL=../sourcemaps/31.180401531f08365cf944.js.map