"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[384],{90384:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z,FormState:()=>Z});var s=n(15274),a=n(56949),i=n(90237),u=n(65337),r=n(95225),o=n(39576),l=n(80239),d=n(92950),c=n.n(d),h=n(50361),v=n.n(h),p=n(18446),f=n.n(p),m=n(62834),V={isUpdating:!1,isSubmitting:!1,isValid:null,isValidating:!1,submitCount:0},Z=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(e){var u;return(0,i.Z)(this,n),(u=t.call(this,e)).state=(0,a.Z)({},V),u.onEventCustom=function(e){var t=Array.isArray(e)&&e||e&&[e];t.length&&t.filter((function(e){return"name"in e&&("value"in e||"checked"in e)})).forEach((function(e){return u.onEvent({target:(0,a.Z)({},e),persist:m.Z.noop,type:"custom"})}))},u.onEvent=function(e){var t=(0,r.Z)(u),n=t.touched,i=t.values,o=e.options?(0,a.Z)({},e):e.target,l=o.id,d=o.name,c=o.value,h=o.checked;e.persist();var v=d||l||"generated form state target, add name or id attr to field";u.touched=(0,a.Z)((0,a.Z)({},n),{},(0,s.Z)({},v,!0)),u.values=(0,a.Z)((0,a.Z)({},i),{},(0,s.Z)({},v,c)),void 0!==h&&(u.checked=(0,a.Z)((0,a.Z)({},u.checked),{},(0,s.Z)({},v,h))),u.setState({isUpdating:!0,isValidating:!0},(function(){return u.validate(e).then((function(e){var t=(0,a.Z)({},e&&e[0]||e||{}),n=!Object.values(t).filter((function(e){return!0===e})).length;u.errors=t,u.setState({isUpdating:!1,isValid:n,isValidating:!1})}))}))},u.onReset=function(e){var t=(0,r.Z)(u),s=t.refValues,i=t.values,o=u.props,l=o.setValuesAssumeBoolIsChecked,d=o.onReset,c=o.resetUsingSetValues;e.persist();var h=s&&!0===c,p=h&&v()(s)||{},f=h&&n.checkedSetValues(l,p)||{};u.values=p,u.checked=f,u.errors={},u.touched={},u.setState((0,a.Z)({},V)),d(h?(0,a.Z)({event:e},v()({values:p,prevValues:i})):(0,a.Z)({event:e,values:{}},v()({prevValues:i})))},u.onSubmit=function(e){var t=u.state.submitCount;e.persist(),e.preventDefault(),u.setState({submitCount:t+1,isSubmitting:!0,isUpdating:!0,isValidating:!0},(function(){return u.validate(e).then((function(t){var n=(0,a.Z)({},t&&t[0]||t||{}),s=!Object.values(n).filter((function(e){return!0===e})).length;u.errors=n,u.touched={},u.setState({isValid:s,isValidating:!1},(function(){return s&&u.submit(e).then((function(){u.setState({isSubmitting:!1,isUpdating:!1})}))}))}))}))},u.touched={},u.checked=n.checkedSetValues(e),u.refValues=!0===e.resetUsingSetValues||!0===e.setValuesOnUpdate?v()(e.setValues):null,u.errors={},u.values=v()(e.setValues),u}return(0,u.Z)(n,[{key:"componentDidMount",value:function(){!0===this.props.validateOnMount&&this.validateOnMount()}},{key:"componentDidUpdate",value:function(){var e=this.refValues,t=this.props,n=t.setValuesOnUpdate,s=t.setValues;!0!==n||f()(e,s)||this.updateComponentValues()}},{key:"submit",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"submit"},t=this.checked,s=this.errors,i=this.values,u=this.touched,r=this.props.onSubmit,o=r((0,a.Z)({event:e},v()((0,a.Z)((0,a.Z)({},this.state),{},{checked:t,errors:s,values:i,touched:u}))));return n.isPromise(o)?o:{then:function(e){return e()}}}},{key:"validate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"validate"},t=this.checked,s=this.errors,i=this.values,u=this.touched,r=this.props.validate,o=r((0,a.Z)({event:e},v()((0,a.Z)((0,a.Z)({},this.state),{},{checked:t,errors:s,values:i,touched:u}))));return n.isPromise(o)?o:{then:function(e){return e(o)}}}},{key:"validateOnMount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"mount"};this.validateOnUpdate(e)}},{key:"validateOnUpdate",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"update"};this.setState({isUpdating:!0,isValidating:!0},(function(){return e.validate(t).then((function(t){var n=(0,a.Z)({},t&&t[0]||t||{}),s=!Object.values(n).filter((function(e){return!0===e})).length;e.errors=n,e.setState({isUpdating:!1,isValidating:!1,isValid:s})}))}))}},{key:"updateComponentValues",value:function(){var e=this,t=this.props,s=t.setValues,a=t.setValuesAssumeBoolIsChecked,i=t.validateOnUpdate;this.setState({isUpdating:!0},(function(){e.checked=n.checkedSetValues(a,s),e.refValues=v()(s),e.values=v()(s),i?e.validateOnUpdate():e.setState({isUpdating:!1})}))}},{key:"render",value:function(){var e=this.checked,t=this.errors,n=this.values,s=this.touched,i=this.props.children;return c().createElement(c().Fragment,null,i((0,a.Z)({handleOnEventCustom:this.onEventCustom,handleOnEvent:this.onEvent,handleOnReset:this.onReset,handleOnSubmit:this.onSubmit},v()((0,a.Z)((0,a.Z)({},this.state),{},{checked:e,errors:t,values:n,touched:s})))))}}],[{key:"checkedSetValues",value:function(e){var t=e.setValuesAssumeBoolIsChecked,n=e.setValues,s={};return t&&Object.keys(n).forEach((function(e){"boolean"==typeof n[e]&&(s[e]=n[e])})),s}},{key:"isPromise",value:function(e){return"[object Promise]"===Object.prototype.toString.call(e)}}]),n}(c().Component);Z.defaultProps={onReset:m.Z.noop,onSubmit:m.Z.noop,resetUsingSetValues:!0,setValues:{},setValuesOnUpdate:!1,setValuesAssumeBoolIsChecked:!0,validate:m.Z.noop,validateOnMount:!1,validateOnUpdate:!1}}}]);
//# sourceMappingURL=../sourcemaps/384.be70cac8fc6b6d2d789b.js.map