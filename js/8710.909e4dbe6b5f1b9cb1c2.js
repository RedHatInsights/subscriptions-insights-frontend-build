"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[8710],{18710:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y,TextInput:()=>y});var a=t(20511),o=t(56949),r=t(90237),u=t(65337),s=t(39576),l=t(80239),p=t(92950),c=t.n(p),i=t(68269),d=t(44044),v=t(76006),y=function(e){(0,s.Z)(t,e);var n=(0,l.Z)(t);function t(){var e;(0,r.Z)(this,t);for(var a=arguments.length,u=new Array(a),s=0;s<a;s++)u[s]=arguments[s];return(e=n.call.apply(n,[this].concat(u))).state={updatedValue:null},e.onKeyUp=function(n){var t=e.props,a=t.onClear,r=t.onKeyUp,u=t.type,s=n.currentTarget,l=n.keyCode,p=(0,o.Z)({},n);r((0,d.createMockEvent)(n,!0)),27===l&&("search"===u&&""===s.value?a((0,d.createMockEvent)(p)):e.setState({updatedValue:""},(function(){a((0,d.createMockEvent)((0,o.Z)((0,o.Z)({},p),{currentTarget:(0,o.Z)((0,o.Z)({},p.currentTarget),{},{value:""})})))})))},e.onMouseUp=function(n){var t=e.props,a=t.onClear,r=t.onMouseUp,u=t.type,s=n.currentTarget,l=(0,o.Z)({},n);r((0,d.createMockEvent)(n,!0)),"search"===u&&""!==s.value&&setTimeout((function(){""===s.value&&a((0,d.createMockEvent)(l))}))},e.onChange=function(n,t){var a=e.props.onChange,r=(0,o.Z)({},t);e.setState({updatedValue:n},(function(){a((0,d.createMockEvent)(r))}))},e}return(0,u.Z)(t,[{key:"render",value:function(){var e,n=this.state.updatedValue,t=this.props,o=t.className,r=t.id,u=t.isDisabled,s=t.name,l=(t.onChange,t.onClear,t.onKeyUp,t.onMouseUp,t.isReadOnly),p=t.type,d=t.value,y=(0,a.Z)(t,["className","id","isDisabled","name","onChange","onClear","onKeyUp","onMouseUp","isReadOnly","type","value"]),h=s||v.BM.generateId(),M=r||h;return c().createElement(i.TextInput,Object.assign({id:M,name:h,className:"curiosity-text-input ".concat(o),isDisabled:u||!1,onChange:this.onChange,onKeyUp:this.onKeyUp,onMouseUp:this.onMouseUp,isReadOnly:l||!1,type:p,value:null!==(e=null!=n?n:d)&&void 0!==e?e:""},y))}}]),t}(c().Component);y.defaultProps={className:"",id:null,isDisabled:!1,isReadOnly:!1,name:null,onChange:v.BM.noop,onClear:v.BM.noop,onKeyUp:v.BM.noop,onMouseUp:v.BM.noop,type:"text",value:""}}}]);
//# sourceMappingURL=../sourcemaps/8710.16e065af6e0ee1fe058c.js.map