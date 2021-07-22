(this["webpackJsonpcuriosity-frontend"]=this["webpackJsonpcuriosity-frontend"]||[]).push([[27,40,47],{586:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return F})),n.d(t,"Select",(function(){return F})),n.d(t,"SelectDirection",(function(){return S})),n.d(t,"SelectPosition",(function(){return T}));var r=n(8),a=n(1),i=n(15),l=n(16),o=n(19),c=n(18),s=n(0),u=n.n(s),p=n(21),d=n(735),b=n(921),f=n(810),v=n(642),h=n.n(v),g=n(54),y=n.n(g),O=n(665),m=n.n(O),j=n(125),E=n.n(j),C=n(23),x=n(4),S=p.c,T=p.d,F=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={isExpanded:!1,options:null,selected:null},e.selectField=u.a.createRef(),e.onSelect=function(t,n){var r=e.state.options,i=e.props,l=i.id,o=i.name,c=i.onSelect,s=i.variant,u=r,p=u.findIndex((function(e){return e.title===n}));u[p].selected=s===d.e.single||!u[p].selected,s===d.e.single&&u.forEach((function(e,t){p!==t&&(u[t].selected=!1)}));var b=s===d.e.single?n:u.filter((function(e){return!0===e.selected})).map((function(e){return e.title}));e.setState({options:u,selected:b},(function(){var t=h()(u),n={id:l,name:o||l,value:t[p].value,selected:s===d.e.single&&t[p]||h()(b),selectedIndex:p,type:"select-".concat(s===d.e.single?"one":"multiple"),options:t};s===d.e.checkbox&&(n.checked=t[p].selected);var r=Object(a.a)(Object(a.a)({},n),{},{target:Object(a.a)({},n),currentTarget:Object(a.a)({},n),persist:C.b.noop});c(Object(a.a)({},r),p,t),s===d.e.single&&e.setState({isExpanded:!1})}))},e.onToggle=function(t){e.setState({isExpanded:t})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){null===this.state.options&&this.formatOptions()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.options,r=t.selectedOptions;y()(e.options,n)&&y()(e.selectedOptions,r)||this.formatOptions()}},{key:"formatOptions",value:function(){var e,t,n=this.selectField.current,i=void 0===n?{}:n,l=this.props,o=l.options,c=l.selectedOptions,s=l.variant,u=Object.entries(this.props).filter((function(e){var t=Object(r.a)(e,1)[0];return/^data-/i.test(t)})),p=E()(o)?Object.entries(o).map((function(e){var t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(a.a)(Object(a.a)({},i),{},{title:n,value:i})})):h()(o),b=c&&"string"===typeof c||"number"===typeof c?[c]:c;p.forEach((function(e,t){var n=e;if("string"===typeof n&&(n={title:e,value:e},p[t]=n),n.text=n.text||n.title,n.textContent=n.textContent||n.title,n.label=n.label||n.title,b){var r;if(E()(n.value)){if(!(r=m()(b,n.value)>-1))r=!!b.find((function(e){return Object.values(n.value).includes(e)}))}else r=b.includes(n.value);r||(r=b.includes(n.title)),p[t].selected=r}})),t=s===d.e.single?(p.find((function(e){return!0===e.selected}))||{}).title:p.filter((function(e){return!0===e.selected})).map((function(e){return e.title})),(null===i||void 0===i||null===(e=i.parentRef)||void 0===e?void 0:e.current)&&u.forEach((function(e){var t,n=Object(r.a)(e,2),a=n[0],l=n[1];return null===i||void 0===i||null===(t=i.parentRef)||void 0===t?void 0:t.current.setAttribute(a,l)})),this.setState({options:p,selected:t})}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.selected,r=e.isExpanded,i=this.props,l=i.ariaLabel,o=i.className,c=i.direction,s=i.isDisabled,u=i.isToggleText,d=i.maxHeight,v=i.placeholder,h=i.position,g=i.toggleIcon,y=i.variant,O={direction:c,maxHeight:d};return t&&t.length&&!s||(O.isDisabled=!0),Object(x.jsx)("div",{className:"curiosity-select",children:Object(x.jsx)(b.a,Object(a.a)(Object(a.a)({menuAppendTo:"parent",className:"curiosity-select-pf".concat(u?"":"__no-toggle-text"," ").concat(h===p.d.right?"curiosity-select-pf__position-right":""," ").concat(o),variant:y,"aria-label":l,onToggle:this.onToggle,onSelect:this.onSelect,selections:n,isOpen:r,toggleIcon:g,placeholderText:v,ref:this.selectField},O),{},{children:t&&t.map((function(e){return Object(x.jsx)(f.a,{id:window.btoa("".concat(e.title,"-").concat(e.value)),value:e.title,"data-value":E()(e.value)&&JSON.stringify([e.value])||e.value,"data-title":e.title},window.btoa("".concat(e.title,"-").concat(e.value)))}))||[]}))})}}]),n}(u.a.Component);F.defaultProps={ariaLabel:"Select option",className:"",direction:S.down,id:C.b.generateId(),isDisabled:!1,isToggleText:!0,maxHeight:null,name:null,onSelect:C.b.noop,options:[],placeholder:"Select option",position:T.left,selectedOptions:null,toggleIcon:null,variant:d.e.single}},602:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l})),n.d(t,"toolbarHelpers",(function(){return l})),n.d(t,"getOptionsType",(function(){return i}));var r=n(34),a=n(3),i=function(e){switch(e){case a.g.SLA:return{selected:null,options:[{title:Object(r.translate)("curiosity-toolbar.slaPremium"),value:a.c.PREMIUM},{title:Object(r.translate)("curiosity-toolbar.slaStandard"),value:a.c.STANDARD},{title:Object(r.translate)("curiosity-toolbar.slaSelfSupport"),value:a.c.SELF},{title:Object(r.translate)("curiosity-toolbar.slaNone"),value:a.c.NONE}]};case a.g.USAGE:return{selected:null,options:[{title:Object(r.translate)("curiosity-toolbar.usageDevelopment"),value:a.i.DEVELOPMENT},{title:Object(r.translate)("curiosity-toolbar.usageDisaster"),value:a.i.DISASTER},{title:Object(r.translate)("curiosity-toolbar.usageProduction"),value:a.i.PRODUCTION},{title:Object(r.translate)("curiosity-toolbar.usageUnspecified"),value:a.i.UNSPECIFIED}]};default:return{selected:null,options:[{title:Object(r.translate)("curiosity-toolbar.category",{context:a.g.SLA}),value:a.g.SLA},{title:Object(r.translate)("curiosity-toolbar.category",{context:a.g.USAGE}),value:a.g.USAGE}]}}},l={getOptions:i}},610:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U})),n.d(t,"ConnectedToolbar",(function(){return U})),n.d(t,"Toolbar",(function(){return B}));var r=n(1),a=n(6),i=n(15),l=n(16),o=n(19),c=n(18),s=n(0),u=n.n(s),p=n(5),d=n(57),b=n(661),f=n(911),v=n(881),h=n(644),g=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={isMounted:!1},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.categoryName,n=e.chips;this.context.updateNumberFilters("string"===typeof t?t:t.name,n.length),this.setState({isMounted:!0})}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.categoryName,n=e.chips;this.context.updateNumberFilters("string"===typeof t?t:t.name,n.length)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.chips,r=e.deleteChipGroup,a=e.deleteChip,i=e.categoryName,l=e.showToolbarItem,o=Object(p.__rest)(e,["children","chips","deleteChipGroup","deleteChip","categoryName","showToolbarItem"]),c=this.context,u=c.isExpanded,g=c.chipGroupContentRef,y="string"!==typeof i&&i.hasOwnProperty("key")?i.key:i.toString(),O=n.length?s.createElement(b.a,{variant:"chip-group"},s.createElement(f.a,{key:y,categoryName:"string"===typeof i?i:i.name,isClosable:void 0!==r,onClick:function(){return r(i)}},n.map((function(e){return"string"===typeof e?s.createElement(v.a,{key:e,onClick:function(){return a(y,e)}},e):s.createElement(v.a,{key:e.key,onClick:function(){return a(y,e)}},e.node)})))):null;return!u&&this.state.isMounted?s.createElement(s.Fragment,null,l&&s.createElement(b.a,Object.assign({},o),t),d.createPortal(O,g.current.firstElementChild)):s.createElement(h.a.Consumer,null,(function(e){var n=e.chipContainerRef;return s.createElement(s.Fragment,null,l&&s.createElement(b.a,Object.assign({},o),t),n.current&&d.createPortal(O,n.current))}))}}]),n}(s.Component);g.displayName="ToolbarFilter",g.contextType=h.b,g.defaultProps={chips:[],showToolbarItem:!0};var y=n(713),O=n(648),m=n.n(O),j=n(2),E=n(17),C=n(712),x=n(33),S=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.expandableContentRef,r=e.chipContainerRef,a=(e.isExpanded,e.clearAllFilters),i=e.clearFiltersButtonText,l=e.showClearFiltersButton,o=Object(p.__rest)(e,["className","expandableContentRef","chipContainerRef","isExpanded","clearAllFilters","clearFiltersButtonText","showClearFiltersButton"]),c=this.context.numberOfFilters;return s.createElement("div",Object.assign({className:Object(j.css)(m.a.toolbarExpandableContent,t),ref:n},o),s.createElement(C.a,null),c>0&&s.createElement(C.a,{className:m.a.modifiers.chipContainer},s.createElement(C.a,{ref:r}),l&&s.createElement(b.a,null,s.createElement(x.a,{variant:"link",onClick:function(){a()},isInline:!0},i))))}}]),n}(s.Component);S.displayName="ToolbarExpandableContent",S.contextType=h.b,S.defaultProps={isExpanded:!1,clearFiltersButtonText:"Clear all filters"};var T=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).expandableContentRef=s.createRef(),e.chipContainerRef=s.createRef(),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,r=t.className,a=t.children,i=t.isExpanded,l=t.toolbarId,o=t.visibility,c=t.visiblity,u=t.alignment,d=t.clearAllFilters,b=t.showClearFiltersButton,f=t.clearFiltersButtonText,v=Object(p.__rest)(t,["className","children","isExpanded","toolbarId","visibility","visiblity","alignment","clearAllFilters","showClearFiltersButton","clearFiltersButtonText"]);return void 0!==c&&console.warn("The ToolbarContent visiblity prop has been deprecated. Please use the correctly spelled visibility prop instead."),s.createElement("div",Object.assign({className:Object(j.css)(m.a.toolbarContent,Object(E.e)(o||c,m.a),Object(E.e)(u,m.a),r)},v),s.createElement(h.b.Consumer,null,(function(t){var r=t.clearAllFilters,o=t.clearFiltersButtonText,c=t.showClearFiltersButton,u=t.toolbarId,p="".concat(l||u,"-expandable-content-").concat(n.currentId++);return s.createElement(h.a.Provider,{value:{expandableContentRef:e.expandableContentRef,expandableContentId:p,chipContainerRef:e.chipContainerRef}},s.createElement("div",{className:Object(j.css)(m.a.toolbarContentSection)},a),s.createElement(S,{id:p,isExpanded:i,expandableContentRef:e.expandableContentRef,chipContainerRef:e.chipContainerRef,clearAllFilters:d||r,showClearFiltersButton:b||c,clearFiltersButtonText:f||o}))})))}}]),n}(s.Component);T.displayName="ToolbarContent",T.currentId=0,T.defaultProps={isExpanded:!1,showClearFiltersButton:!1};var F=n(711),I=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).isContentPopup=function(){return(E.a?window.innerWidth:1200)<parseInt(F.a.value)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.toggleIcon,r=t.variant,a=t.visibility,i=t.visiblity,l=t.breakpoint,o=t.alignment,c=t.spacer,u=t.spaceItems,b=t.className,f=t.children,v=Object(p.__rest)(t,["toggleIcon","variant","visibility","visiblity","breakpoint","alignment","spacer","spaceItems","className","children"]);return l||n||console.error("ToolbarToggleGroup will not be visible without a breakpoint or toggleIcon."),void 0!==i&&console.warn("The ToolbarToggleGroup visiblity prop has been deprecated. Please use the correctly spelled visibility prop instead."),s.createElement(h.b.Consumer,null,(function(t){var p=t.isExpanded,g=t.toggleIsExpanded;return s.createElement(h.a.Consumer,null,(function(t){var h=t.expandableContentRef,y=t.expandableContentId;return h.current&&h.current.classList&&(p?h.current.classList.add(m.a.modifiers.expanded):h.current.classList.remove(m.a.modifiers.expanded)),s.createElement("div",Object.assign({className:Object(j.css)(m.a.toolbarGroup,m.a.modifiers.toggleGroup,r&&m.a.modifiers[Object(E.m)(r)],l&&m.a.modifiers["showOn".concat(Object(E.b)(l.replace("2xl","_2xl")))],Object(E.e)(a||i,m.a),Object(E.e)(o,m.a),Object(E.e)(c,m.a),Object(E.e)(u,m.a),b)},v),s.createElement("div",{className:Object(j.css)(m.a.toolbarToggle)},s.createElement(x.a,Object.assign({variant:"plain",onClick:g,"aria-label":"Show Filters"},p&&{"aria-expanded":!0},{"aria-haspopup":p&&e.isContentPopup(),"aria-controls":y}),n)),p?d.createPortal(f,h.current.firstElementChild):f)}))}))}}]),n}(s.Component);I.displayName="ToolbarToggleGroup";var R=n(14),w=Object(R.a)({name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0}),N=n(586),_=n(56),k=n(3),A=n(602),P=n(13),D=n(34),L=n(4),B=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).onClear=function(){var t,n=e.props.hardFilterReset,r=[{type:_.f.toolbar.SET_ACTIVE_FILTERS,data:{activeFilters:new Set}},{type:_.f.query.SET_QUERY_CLEAR,data:{clearFilters:(t={},Object(a.a)(t,k.g.SLA,null),Object(a.a)(t,k.g.USAGE,null),t)}}];n&&r.push({type:_.f.toolbar.SET_FILTER_TYPE,data:{currentFilter:null}}),e.setDispatch(r,!0)},e.onClearFilter=function(t){var n=e.props,r=n.activeFilters,i=n.currentFilter,l=n.hardFilterReset,o=(A.toolbarHelpers.getOptions().options.find((function(e){return e.title===t}))||{}).value;if(o){var c=new Set(r);c.delete(o);var s=[{type:_.f.toolbar.SET_ACTIVE_FILTERS,data:{activeFilters:c}},{type:_.f.query.SET_QUERY_CLEAR,data:{clearFilters:Object(a.a)({},o,null)}}];if(l){var u=c.size>0&&i||null;s.push({type:_.f.toolbar.SET_FILTER_TYPE,data:{currentFilter:u}})}e.setDispatch(s,!0)}},e.onCategorySelect=function(t){var n=t.value;e.setDispatch({type:_.f.toolbar.SET_FILTER_TYPE,data:{currentFilter:n}})},e.onSelect=function(t){var n=t.event,r=t.field,i=e.props.activeFilters,l=n.value,o=new Set(i).add(r);e.setDispatch([{type:_.f.toolbar.SET_ACTIVE_FILTERS,data:{activeFilters:o}},{type:_.f.query.SET_QUERY_RHSM_TYPES[r],data:Object(a.a)({},r,l)}],!0)},e}return Object(l.a)(n,[{key:"setDispatch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props.viewId,a=(Array.isArray(e)&&e||[e]).map((function(e){var t=e.type,a=e.data;return Object(r.a)({type:t,viewId:n},a)}));t&&a.push({type:_.f.query.SET_QUERY_RESET_INVENTORY_LIST,viewId:n}),_.g.dispatch(a)}},{key:"setSelectFilter",value:function(e){var t,n,r=this.props.query,a=A.toolbarHelpers.getOptions(e),i=this.getCurrentFilter();return n=e?"string"===typeof(null===r||void 0===r?void 0:r[e])&&a.options.find((function(t){return t.value===(null===r||void 0===r?void 0:r[e])})):a.options.find((function(e){return e.value===i})),{options:a,optionsSelected:(null===(t=n)||void 0===t?void 0:t.title)&&[n.title]||(null===a||void 0===a?void 0:a.selected)&&[a.selected]||[]}}},{key:"getCurrentFilter",value:function(){var e,t,n=this.props,r=n.currentFilter,a=n.filterOptions;return r||(null===(e=a.find((function(e){return!0===e.selected})))||void 0===e?void 0:e.id)||1===a.length&&(null===(t=a[0])||void 0===t?void 0:t.id)}},{key:"renderSelectFilter",value:function(e){var t=this,n=e.id,r=this.props.t,a=this.setSelectFilter(n),i=a.options,l=a.optionsSelected,o=this.getCurrentFilter();return Object(L.jsx)(g,{chips:l,deleteChip:this.onClearFilter,categoryName:r("curiosity-toolbar.category",{context:n}),showToolbarItem:o===n,children:Object(L.jsx)(N.Select,{"aria-label":r("curiosity-toolbar.category",{context:n}),onSelect:function(e){return t.onSelect({event:e,field:n})},selectedOptions:l,placeholder:r("curiosity-toolbar.placeholder",{context:n}),options:i.options})},n)}},{key:"render",value:function(){var e=this,t=this.props,n=t.filterOptions,r=t.isDisabled,a=t.t;if(r)return null;var i=this.setSelectFilter(),l=i.options,o=i.optionsSelected;return Object(L.jsx)(y.a,{id:"curiosity-toolbar",className:"curiosity-toolbar pf-m-toggle-group-container ins-c-primary-toolbar",collapseListedFiltersBreakpoint:"sm",clearAllFilters:this.onClear,clearFiltersButtonText:a("curiosity-toolbar.clearFilters"),children:Object(L.jsx)(T,{children:Object(L.jsx)(I,{toggleIcon:Object(L.jsx)(w,{}),breakpoint:"md",children:Object(L.jsxs)(C.a,{variant:"filter-group",children:[1!==n.length&&Object(L.jsx)(b.a,{children:Object(L.jsx)(N.Select,{"aria-label":a("curiosity-toolbar.category"),onSelect:this.onCategorySelect,selectedOptions:o,placeholder:a("curiosity-toolbar.placeholder"),options:l.options,toggleIcon:Object(L.jsx)(w,{})})}),n.map((function(t){var n=t.id,r=t.selected;return e.renderSelectFilter({id:n,selected:r})}))]})})})})}}]),n}(u.a.Component);B.defaultProps={query:{},activeFilters:new Set,currentFilter:null,filterOptions:[{id:k.g.SLA,filterType:"select"},{id:k.g.USAGE,filterType:"select",selected:!0}],hardFilterReset:!1,isDisabled:P.b.UI_DISABLED_TOOLBAR,t:D.translate,viewId:"toolbar"};var U=Object(_.b)((function(e,t){var n,a,i=e.toolbar,l=e.view,o=t.query,c=t.viewId;return Object(r.a)(Object(r.a)({},null===(n=i.filters)||void 0===n?void 0:n[c]),{},{query:(null===(a=l.query)||void 0===a?void 0:a[c])||o})}))(B)}}]);
//# sourceMappingURL=27.6aa072f2.chunk.js.map