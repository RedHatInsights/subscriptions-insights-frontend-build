(this["webpackJsonpcuriosity-frontend"]=this["webpackJsonpcuriosity-frontend"]||[]).push([[33],{582:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w})),n.d(t,"Select",(function(){return w})),n.d(t,"SelectDirection",(function(){return k})),n.d(t,"SelectPosition",(function(){return T}));var i=n(1),o=n(15),a=n(16),l=n(18),c=n(17),s=n(0),r=n.n(s),u=n(20),d=n(706),p=n(920),f=n(803),g=n(634),v=n.n(g),b=n(54),h=n.n(b),O=n(647),m=n.n(O),x=n(125),j=n.n(x),y=n(23),S=n(4),k=u.c,T=u.d,w=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={isExpanded:!1,options:null,selected:null},e.onSelect=function(t,n){var o=e.state.options,a=e.props,l=a.id,c=a.name,s=a.onSelect,r=a.variant,u=o,p=u.findIndex((function(e){return e.title===n}));u[p].selected=r===d.e.single||!u[p].selected,r===d.e.single&&u.forEach((function(e,t){p!==t&&(u[t].selected=!1)}));var f=r===d.e.single?n:u.filter((function(e){return!0===e.selected})).map((function(e){return e.title}));e.setState({options:u,selected:f},(function(){var t=v()(u),n={id:l,name:c||l,value:t[p].value,selected:r===d.e.single&&t[p]||v()(f),selectedIndex:p,type:"select-".concat(r===d.e.single?"one":"multiple"),options:t};r===d.e.checkbox&&(n.checked=t[p].selected);var o=Object(i.a)(Object(i.a)({},n),{},{target:Object(i.a)({},n),currentTarget:Object(i.a)({},n),persist:y.b.noop});s(Object(i.a)({},o),p,t),r===d.e.single&&e.setState({isExpanded:!1})}))},e.onToggle=function(t){e.setState({isExpanded:t})},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){null===this.state.options&&this.formatOptions()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.options,i=t.selectedOptions;h()(e.options,n)&&h()(e.selectedOptions,i)||this.formatOptions()}},{key:"formatOptions",value:function(){var e,t=this.props,n=t.options,o=t.selectedOptions,a=t.variant,l=j()(n)?Object.keys(n).map((function(e){return Object(i.a)(Object(i.a)({},n[e]),{},{title:e,value:n[e]})})):v()(n),c=o&&"string"===typeof o||"number"===typeof o?[o]:o;l.forEach((function(e,t){var n=e;if("string"===typeof n&&(n={title:e,value:e},l[t]=n),n.text=n.text||n.title,n.textContent=n.textContent||n.title,n.label=n.label||n.title,c){var i;if(j()(n.value)){if(!(i=m()(c,n.value)>-1))i=!!c.find((function(e){return Object.values(n.value).includes(e)}))}else i=c.includes(n.value);i||(i=c.includes(n.title)),l[t].selected=i}})),e=a===d.e.single?(l.find((function(e){return!0===e.selected}))||{}).title:l.filter((function(e){return!0===e.selected})).map((function(e){return e.title})),this.setState({options:l,selected:e})}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.selected,o=e.isExpanded,a=this.props,l=a.ariaLabel,c=a.className,s=a.direction,r=a.isDisabled,d=a.isToggleText,g=a.maxHeight,v=a.placeholder,b=a.position,h=a.toggleIcon,O=a.variant,m={direction:s,maxHeight:g};return t&&t.length&&!r||(m.isDisabled=!0),Object(S.jsx)(p.a,Object(i.a)(Object(i.a)({className:"curiosity-select".concat(d?"":"__no-toggle-text"," ").concat(b===u.d.right?"curiosity-select__position-right":""," ").concat(c),variant:O,"aria-label":l,onToggle:this.onToggle,onSelect:this.onSelect,selections:n,isOpen:o,toggleIcon:h,placeholderText:v},m),{},{children:t&&t.map((function(e){return Object(S.jsx)(f.a,{id:window.btoa("".concat(e.title,"-").concat(e.value)),value:e.title,"data-value":j()(e.value)&&JSON.stringify([e.value])||e.value,"data-title":e.title},window.btoa("".concat(e.title,"-").concat(e.value)))}))||[]}))}}]),n}(r.a.Component);w.defaultProps={ariaLabel:"Select option",className:"",direction:k.down,id:y.b.generateId(),isDisabled:!1,isToggleText:!0,maxHeight:null,name:null,onSelect:y.b.noop,options:[],placeholder:"Select option",position:T.left,selectedOptions:null,toggleIcon:null,variant:d.e.single}}}]);
//# sourceMappingURL=33.f50e7a62.chunk.js.map