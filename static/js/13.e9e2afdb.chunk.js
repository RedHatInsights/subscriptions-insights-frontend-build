(this["webpackJsonpcuriosity-frontend"]=this["webpackJsonpcuriosity-frontend"]||[]).push([[13,16,19,28,29,32,36,38,39],{580:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"paginationHelpers",(function(){return o})),n.d(t,"calculateOffsetFromPage",(function(){return r})),n.d(t,"calculatePageFromOffset",(function(){return a})),n.d(t,"isLastPage",(function(){return i}));var r=function(e,t){return t*(e-1)||0},a=function(e,t){return e/t+1||1},i=function(e,t,n){return a(e,t)===Math.ceil(n/t)},o={calculateOffsetFromPage:r,calculatePageFromOffset:a,isLastPage:i}},581:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j})),n.d(t,"inventoryListHelpers",(function(){return j})),n.d(t,"applySortFilters",(function(){return m})),n.d(t,"applyWrappableFilters",(function(){return g})),n.d(t,"parseInventoryFilters",(function(){return O})),n.d(t,"parseRowCellsListData",(function(){return y}));var r=n(8),a=n(10),i=n(1),o=n(0),s=n.n(o),c=n(105),l=n(11),u=n.n(l),d=function(){return{className:u.a.modifiers.wrap}},f=n(146),p=n(153),v=n.n(p),b=n(33),h=n(3),m=function(e){var t=e.filter,n=void 0===t?{}:t,r=e.onSort,a=e.query,o=void 0===a?{}:a,s=n.id,l=Object(i.a)({},n),u=l.onSort||r;if(!l.onSort&&r&&(l.onSort=r),u&&"boolean"!==typeof l.sortActive&&(null===o||void 0===o?void 0:o[h.g.SORT])&&v()(null===o||void 0===o?void 0:o[h.g.SORT])===s&&(l.sortActive=!0),u&&!l.sortDirection&&(null===o||void 0===o?void 0:o[h.g.DIRECTION]))switch(null===o||void 0===o?void 0:o[h.g.DIRECTION]){case h.d.DESCENDING:l.sortDirection=c.a.desc;break;default:l.sortDirection=c.a.asc}return!u||l.sortActive||(null===o||void 0===o?void 0:o[h.g.SORT])||!0!==l.isSortDefault||(l.sortActive=!0,l.sortDefaultInitialDirection&&(l.sortDirection=l.sortDefaultInitialDirection)),l},g=function(e){var t=e.filter,n=void 0===t?{}:t,r=Object(i.a)({},n);return Array.isArray(r.transforms)?r.transforms.push(d):r.transforms=[d],r},O=function(e){var t=e.filters,n=void 0===t?[]:t,r=e.onSort,o=e.query,s=void 0===o?{}:o;return Object(a.a)(n).map((function(e){var t=Object(i.a)({},e);return t.isSortable&&Object.assign(t,m({filter:t,onSort:r,query:s})),t.isWrappable&&Object.assign(t,g({filter:t})),t}))},y=function(e){var t=e.filters,n=void 0===t?[]:t,o=e.cellData,c=void 0===o?{}:o,l=e.session,u=void 0===l?{}:l,d=[],p=[],v={};return Object.entries(c).forEach((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];v[n]={title:Object(b.translate)("curiosity-inventory.header",{context:n}),value:a},d.push(v[n].title),p.push(a)})),(null===n||void 0===n?void 0:n.length)&&(d.length=0,p.length=0,n.forEach((function(e){var t,n,r,o,c,l,h=e.id,m=e.cell,g=e.cellWidth,O=e.header,y=e.onSort,j=e.sortActive,N=e.sortDirection,C=e.transforms;v[h]?(t=null!==(r=null===(o=v[h])||void 0===o?void 0:o.title)&&void 0!==r?r:h,n=null!==(c=null===(l=v[h])||void 0===l?void 0:l.value)&&void 0!==c?c:""):h&&(t=Object(b.translate)("curiosity-inventory.header",{context:h}),n="");O&&(t="function"===typeof O&&O(Object(i.a)({},v))||O),("string"===typeof t||"number"===typeof t||s.a.isValidElement(t))&&(t={title:t}),t&&(t.transforms=[],Array.isArray(C)&&(t.transforms=t.transforms.concat(Object(a.a)(C))),"number"===typeof g&&t.transforms.push(Object(f.a)(g))),"function"===typeof y&&(t=Object(i.a)(Object(i.a)({},t),{},{onSort:function(e){return y(Object(i.a)({},v),Object(i.a)(Object(i.a)({},e),{},{id:h}))},sortActive:j,sortDirection:N})),m&&(n="function"===typeof m&&m(Object(i.a)({},v),Object(i.a)({},u))||m),("string"===typeof n||"number"===typeof n||s.a.isValidElement(n))&&(n={title:n}),d.push(t),p.push(n)}))),{columnHeaders:d,cells:p,data:Object(i.a)({},v)}},j={applySortFilters:m,applyWrappableFilters:g,parseInventoryFilters:O,parseRowCellsListData:y}},583:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f})),n.d(t,"MinHeight",(function(){return f}));var r=n(15),a=n(16),i=n(241),o=n(18),s=n(17),c=n(0),l=n.n(c),u=n(12),d=n(4),f=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).containerRef=l.a.createRef(),e.innerContainerRef=l.a.createRef(),e.updatedContainerWidth=0,e.resizeObserver=u.b.noop,e.onResizeContainer=function(){var t,n,r=Object(i.a)(e).updatedContainerWidth,a=e.props.updateOnResize,o=(null===(t=e.containerRef)||void 0===t||null===(n=t.current)||void 0===n?void 0:n.clientWidth)||0;a&&o!==r&&(e.updatedContainerWidth=o,e.setMinHeight(!0))},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.updateOnResize;window.setTimeout((function(){e.setMinHeight()})),t&&this.setResizeObserver()}},{key:"componentDidUpdate",value:function(){var e=this;this.props.updateOnContent&&window.setTimeout((function(){e.setMinHeight()}))}},{key:"componentWillUnmount",value:function(){this.resizeObserver()}},{key:"setMinHeight",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.props.minHeight,r=this.containerRef.current,a=void 0===r?{}:r,i=this.innerContainerRef.current,o=void 0===i?{}:i;(null===a||void 0===a?void 0:a.style)&&(n>(e=t?(null===o||void 0===o?void 0:o.clientHeight)||0:(null===a||void 0===a?void 0:a.clientHeight)||0)&&(e=n),a.style.minHeight="".concat(e,"px"))}},{key:"setResizeObserver",value:function(){var e=this;window.addEventListener("resize",this.onResizeContainer),this.resizeObserver=function(){return window.removeEventListener("resize",e.onResizeContainer)}}},{key:"render",value:function(){var e=this.props.children;return Object(d.jsx)("div",{className:"curiosity-minheight",ref:this.containerRef,children:Object(d.jsx)("div",{ref:this.innerContainerRef,children:e})})}}]),n}(l.a.Component);f.defaultProps={updateOnContent:!1,updateOnResize:!0,minHeight:0}},585:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s})),n.d(t,"Pagination",(function(){return s}));n(0);var r=n(180),a=n(12),i=n(580),o=n(4),s=function e(t){var n=t.dropDirection,a=t.isDisabled,s=t.isCompact,c=t.itemCount,l=t.offset,u=t.onPage,d=t.onPerPage,f=t.perPage,p=t.variant;return Object(o.jsx)(r.a,{dropDirection:n,isCompact:s,isDisabled:a||!c,itemCount:c,onSetPage:function(e,t,n){return u({event:e,perPage:n,offset:i.paginationHelpers.calculateOffsetFromPage(t,n)})},onPerPageSelect:function(t,n){return d({event:t,perPage:n,offset:e.defaultProps.offset})},page:i.paginationHelpers.calculatePageFromOffset(l||e.defaultProps.offset,f),perPage:f,variant:p})};s.defaultProps={dropDirection:"down",isCompact:!1,isDisabled:!1,itemCount:0,offset:0,onPage:a.b.noop,onPerPage:a.b.noop,perPage:10,variant:null}},586:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s})),n.d(t,"formHelpers",(function(){return s})),n.d(t,"createMockEvent",(function(){return i})),n.d(t,"doesNotHaveMinimumCharacters",(function(){return o}));var r=n(1),a=n(23),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(r.a)({},e),i=n.checked,o=n.currentTarget,s=void 0===o?{}:o,c=n.keyCode,l=n.persist,u=void 0===l?a.b.noop:l,d=n.target,f=void 0===d?{}:d;return t&&u(),{checked:i,currentTarget:s,keyCode:c,id:s.id||s.name,name:s.name,persist:u,value:s.value,target:f}},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"string"===typeof e&&e.length<t||"string"!==typeof e},s={createMockEvent:i,doesNotHaveMinimumCharacters:o}},588:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N})),n.d(t,"ConnectedGuestsList",(function(){return N})),n.d(t,"GuestsList",(function(){return y}));var r=n(10),a=n(6),i=n(1),o=n(15),s=n(16),c=n(18),l=n(17),u=n(0),d=n.n(u),f=n(177),p=n(12),v=n(57),b=n(126),h=n(581),m=n(3),g=n(189),O=n(4),y=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={currentPage:0,limit:100,previousData:[]},e.onUpdateGuestsData=function(){var t=e.state,n=t.currentPage,r=t.limit,o=e.props,s=o.getHostsInventoryGuests,c=o.query,l=o.id;if(l){var u,d=Object(i.a)(Object(i.a)({},c),{},(u={},Object(a.a)(u,m.g.LIMIT,r),Object(a.a)(u,m.g.OFFSET,n*r||0),u));s(l,v.a.parseRhsmQuery(d).inventoryGuestsQuery)}},e.onScroll=function(t){var n=t.target,a=e.state,i=a.currentPage,o=a.limit,s=a.previousData,c=e.props,l=c.numberOfGuests,u=c.pending,d=c.listData,f=n.scrollHeight-n.scrollTop===n.clientHeight;if(l>(i+1)*o&&f&&!u){var p=i+1,v=[].concat(Object(r.a)(s),Object(r.a)(d||[]));e.setState({previousData:v,currentPage:p})}},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.onUpdateGuestsData()}},{key:"componentDidUpdate",value:function(e,t){this.state.currentPage!==t.currentPage&&this.onUpdateGuestsData()}},{key:"renderLoader",value:function(){var e=this.state.currentPage,t=this.props,n=t.filterGuestsData,r=t.listData,a=t.pending;if(e>0&&a){var i=Object(O.jsx)(b.Loader,{variant:"table",tableProps:{borders:!1,colCount:(null===n||void 0===n?void 0:n.length)||(null===r||void 0===r?void 0:r[0])&&Object.keys(r[0]).length||1,colWidth:(null===n||void 0===n?void 0:n.length)&&n.map((function(e){return e.cellWidth}))||[],rowCount:0,variant:f.b.compact}});return Object(O.jsx)("div",{className:"curiosity-table-scroll-loader__custom",children:i})}return null}},{key:"renderTable",value:function(){var e=this.state.previousData,t=this.props,n=t.filterGuestsData,a=t.listData,i=t.numberOfGuests,o=t.session,s=[],c=[].concat(Object(r.a)(e),Object(r.a)(a||[])).map((function(e){var t=Object.assign({},e),r=h.inventoryListHelpers.parseRowCellsListData({filters:n,cellData:t,session:o}),a=r.columnHeaders,i=r.cells;return s=a,{cells:i}})),l=42*(i+1);return l=l<275&&l||275,Object(O.jsx)("div",{className:"curiosity-table-scroll",style:{height:"".concat(l,"px")},children:Object(O.jsxs)("div",{className:"curiosity-table-scroll-list".concat(l<275?"__no-scroll":""),onScroll:this.onScroll,children:[this.renderLoader(),c.length&&Object(O.jsx)(g.Table,{borders:!1,variant:f.b.compact,className:"curiosity-guests-list",columnHeaders:s,rows:c})||null]})})}},{key:"render",value:function(){var e=this.state.currentPage,t=this.props,n=t.error,r=t.filterGuestsData,a=t.listData,i=t.numberOfGuests,o=t.pending,s=t.perPageDefault;return Object(O.jsxs)("div",{className:"fadein ".concat(n?"blur":""),children:[o&&0===e&&Object(O.jsx)(b.Loader,{variant:"table",tableProps:{borders:!1,colCount:(null===r||void 0===r?void 0:r.length)||(null===a||void 0===a?void 0:a[0])&&Object.keys(a[0]).length||1,colWidth:(null===r||void 0===r?void 0:r.length)&&r.map((function(e){return e.cellWidth}))||[],rowCount:i<s?i:s,variant:f.b.compact}}),(!o&&0===e||e>0)&&this.renderTable()]})}}]),n}(d.a.Component);y.defaultProps={error:!1,filterGuestsData:[],getHostsInventoryGuests:p.b.noop,listData:[],pending:!1,perPageDefault:5,query:{},session:{}};var j=v.e.guestsList.makeGuestsList(),N=Object(v.b)(j,(function(e){return{getHostsInventoryGuests:function(t,n){return e(v.d.rhsm.getHostsInventoryGuests(t,n))}}}))(y)},589:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b})),n.d(t,"TextInput",(function(){return b}));var r=n(24),a=n(1),i=n(15),o=n(16),s=n(18),c=n(17),l=n(0),u=n.n(l),d=n(668),f=n(586),p=n(12),v=n(4),b=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={updatedValue:null},e.onKeyUp=function(t){var n=e.props,r=n.onClear,i=n.onKeyUp,o=n.type,s=t.currentTarget,c=t.keyCode,l=Object(a.a)({},t);i(Object(f.createMockEvent)(t,!0)),27===c&&("search"===o&&""===s.value?r(Object(f.createMockEvent)(l)):e.setState({updatedValue:""},(function(){r(Object(f.createMockEvent)(Object(a.a)(Object(a.a)({},l),{currentTarget:Object(a.a)(Object(a.a)({},l.currentTarget),{},{value:""})})))})))},e.onMouseUp=function(t){var n=e.props,r=n.onClear,i=n.onMouseUp,o=n.type,s=t.currentTarget,c=Object(a.a)({},t);i(Object(f.createMockEvent)(t,!0)),"search"===o&&""!==s.value&&setTimeout((function(){""===s.value&&r(Object(f.createMockEvent)(c))}))},e.onChange=function(t,n){var r=e.props.onChange,i=Object(a.a)({},n);e.setState({updatedValue:t},(function(){r(Object(f.createMockEvent)(i))}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e,t=this.state.updatedValue,n=this.props,i=n.className,o=n.id,s=n.isDisabled,c=n.name,l=(n.onChange,n.onClear,n.onKeyUp,n.onMouseUp,n.isReadOnly),u=n.type,f=n.value,b=Object(r.a)(n,["className","id","isDisabled","name","onChange","onClear","onKeyUp","onMouseUp","isReadOnly","type","value"]),h=c||p.b.generateId(),m=o||h;return Object(v.jsx)(d.a,Object(a.a)({id:m,name:h,className:"curiosity-text-input ".concat(i),isDisabled:s||!1,onChange:this.onChange,onKeyUp:this.onKeyUp,onMouseUp:this.onMouseUp,isReadOnly:l||!1,type:u,value:null!==(e=null!==t&&void 0!==t?t:f)&&void 0!==e?e:""},b))}}]),n}(u.a.Component);b.defaultProps={className:"",id:null,isDisabled:!1,isReadOnly:!1,name:null,onChange:p.b.noop,onClear:p.b.noop,onKeyUp:p.b.noop,onMouseUp:p.b.noop,type:"text",value:""}},594:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x})),n.d(t,"ToolbarFieldDisplayName",(function(){return x}));var r=n(6),a=n(0),i=n(5),o=n(640),s=n.n(o),c=n(2),l=n(15),u=n(16),d=n(18),f=n(17),p=n(631),v=n.n(p),b=n(30),h=n(124),m=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleChange=function(e){r.props.onChange(e.currentTarget.value,e)},e.id||e["aria-label"]||console.error("FormSelect requires either an id or aria-label to be specified"),r.state={ouiaStateId:Object(h.a)(n.displayName,e.validated)},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,o=e.value,s=e.validated,l=e.isDisabled,u=e.isRequired,d=e.ouiaId,f=e.ouiaSafe,p=Object(i.__rest)(e,["children","className","value","validated","isDisabled","isRequired","ouiaId","ouiaSafe"]),m=a.Children.toArray(t).find((function(e){return e.props.value===o})),g=m&&m.props.isPlaceholder;return a.createElement("select",Object.assign({},p,{className:Object(c.css)(v.a.formControl,r,s===b.d.success&&v.a.modifiers.success,s===b.d.warning&&v.a.modifiers.warning,g&&v.a.modifiers.placeholder),"aria-invalid":s===b.d.error},Object(h.b)(n.displayName,void 0!==d?d:this.state.ouiaStateId,f),{onChange:this.handleChange,disabled:l,required:u,value:o}),t)}}]),n}(a.Component);m.displayName="FormSelect",m.defaultProps={className:"",value:"",validated:"default",isDisabled:!1,isRequired:!1,onBlur:function(){},onFocus:function(){},onChange:function(){},ouiaSafe:!0};var g,O={name:"--pf-c-form-control--textarea--Height",value:"auto",var:"var(--pf-c-form-control--textarea--Height)"},y=n(21);!function(e){e.horizontal="horizontal",e.vertical="vertical",e.both="both"}(g||(g={}));var j=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=e.currentTarget;if(r.props.autoResize){t.style.setProperty(O.name,"inherit");var n=window.getComputedStyle(t),a=parseInt(n.getPropertyValue("border-top-width"))+parseInt(n.getPropertyValue("padding-top"))+t.scrollHeight+parseInt(n.getPropertyValue("padding-bottom"))+parseInt(n.getPropertyValue("border-bottom-width"));t.style.setProperty(O.name,"".concat(a,"px"))}r.props.onChange&&r.props.onChange(t.value,e)},e.id||e["aria-label"]||console.error("TextArea: TextArea requires either an id or aria-label to be specified"),r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.value,r=e.validated,o=e.isRequired,s=e.isDisabled,l=e.isReadOnly,u=e.resizeOrientation,d=e.innerRef,f=e.readOnly,p=e.disabled,h=(e.autoResize,e.onChange,Object(i.__rest)(e,["className","value","validated","isRequired","isDisabled","isReadOnly","resizeOrientation","innerRef","readOnly","disabled","autoResize","onChange"])),m="resize".concat(Object(y.a)(u));return a.createElement("textarea",Object.assign({className:Object(c.css)(v.a.formControl,t,u!==g.both&&v.a.modifiers[m],r===b.d.success&&v.a.modifiers.success,r===b.d.warning&&v.a.modifiers.warning),onChange:this.handleChange},"string"!==typeof this.props.defaultValue&&{value:n},{"aria-invalid":r===b.d.error,required:o,disabled:s||p,readOnly:l||f,ref:d},h))}}]),n}(a.Component);j.displayName="TextArea",j.defaultProps={innerRef:a.createRef(),className:"",isRequired:!1,isDisabled:!1,validated:"default",resizeOrientation:"both","aria-label":null};var N=a.forwardRef((function(e,t){return a.createElement(j,Object.assign({},e,{innerRef:t}))}));N.displayName="TextArea";var C=n(668),D=function(e){var t=e.className,n=void 0===t?"":t,r=e.children,o=Object(i.__rest)(e,["className","children"]),l=[m,N,C.a].map((function(e){return e.displayName})),u=a.Children.toArray(r).find((function(e){return!l.includes(e.type.displayName)&&e.props.id}));return a.createElement("div",Object.assign({className:Object(c.css)(s.a.inputGroup,n)},o),u?a.Children.map(r,(function(e){return l.includes(e.type.displayName)?a.cloneElement(e,{"aria-describedby":u.props.id}):e})):r)};D.displayName="InputGroup";var I=n(651),R=n.n(I),E=n(57),T=n(589),S=n(3),_=n(33),P=n(4),x=function(e){var t=e.t,n=e.value,a=e.viewId,i=Object(E.h)((function(e){var t,n;return null===(t=e.view.inventoryHostsQuery)||void 0===t||null===(n=t[a])||void 0===n?void 0:n[S.g.DISPLAY_NAME]}),n),o=function(e){return E.g.dispatch([{type:E.f.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:a},Object(r.a)({type:E.f.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[S.g.DISPLAY_NAME],viewId:a},S.g.DISPLAY_NAME,(null===e||void 0===e?void 0:e.trim())||null)])},s=R()(o,700);return Object(P.jsx)(D,{children:Object(P.jsx)(T.TextInput,{"aria-label":t("curiosity-toolbar.placeholder",{context:"displayName"}),className:"curiosity-input__display-name",iconVariant:"search",maxLength:255,onClear:function(){""!==i&&i&&E.g.dispatch([{type:E.f.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:a},Object(r.a)({type:E.f.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[S.g.DISPLAY_NAME],viewId:a},S.g.DISPLAY_NAME,null)])},onKeyUp:function(e){switch(e.keyCode){case 13:o(e.value);break;case 27:break;default:s(e.value)}},value:i,placeholder:t("curiosity-toolbar.placeholder",{context:"displayName"})})})};x.defaultProps={t:_.translate,value:null,viewId:"toolbarFieldDisplayName"}},597:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A})),n.d(t,"ConnectedInventoryList",(function(){return A})),n.d(t,"InventoryList",(function(){return F}));var r=n(1),a=n(6),i=n(15),o=n(16),s=n(18),c=n(17),l=n(0),u=n.n(l),d=n(54),f=n.n(d),p=n(105),v=n(177),b=n(243),h=n(311),m=n(689),g=n(662),O=n(690),y=n(670),j=n(663),N=n(691),C=n(153),D=n.n(C),I=n(12),R=n(57),E=n(189),T=n(126),S=n(583),_=n(588),P=n(581),x=n(585),H=n(594),w=n(580),M=n(3),L=n(33),k=n(4),F=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).onColumnSort=function(t,n){var r,i=n.direction,o=n.id,s=e.props.productId,c=Object.values(M.e).find((function(e){return D()(e)===o}));if(c){switch(i){case p.a.desc:r=M.d.DESCENDING;break;default:r=M.d.ASCENDING}R.g.dispatch([Object(a.a)({type:R.f.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[M.g.DIRECTION],viewId:s},M.g.DIRECTION,r),Object(a.a)({type:R.f.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[M.g.SORT],viewId:s},M.g.SORT,c)])}else(I.b.DEV_MODE||I.b.REVIEW_MODE)&&console.warn("Sorting can only be performed on select fields, confirm field ".concat(o," is allowed."))},e.onPage=function(t){var n=t.offset,r=t.perPage,i=e.props.productId;R.g.dispatch([Object(a.a)({type:R.f.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[M.g.OFFSET],viewId:i},M.g.OFFSET,n),Object(a.a)({type:R.f.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[M.g.LIMIT],viewId:i},M.g.LIMIT,r)])},e.onUpdateInventoryData=function(){var t=e.props,n=t.getHostsInventory,r=t.isDisabled,a=t.productId,i=t.query;!r&&a&&n(a,i)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.onUpdateInventoryData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.productId,r=t.query;n===e.productId&&f()(r,e.query)||this.onUpdateInventoryData()}},{key:"renderTable",value:function(){var e=this,t=this.props,n=t.filterGuestsData,a=t.filterInventoryData,i=t.listData,o=t.query,s=t.session,c=t.settings,l=[],u=i.map((function(t){var i=Object.assign({},t),u=P.inventoryListHelpers.parseRowCellsListData({filters:P.inventoryListHelpers.parseInventoryFilters({filters:a,onSort:e.onColumnSort,query:o}),cellData:i,session:s}),d=u.columnHeaders,f=u.cells;l=d;var p=null===i||void 0===i?void 0:i.subscriptionManagerId,v=(null===i||void 0===i?void 0:i.numberOfGuests)>0&&p;return"function"===typeof(null===c||void 0===c?void 0:c.hasGuests)&&(v=c.hasGuests(Object(r.a)({},i),Object(r.a)({},s))),{cells:f,expandedContent:v&&Object(k.jsx)(_.default,{filterGuestsData:n,numberOfGuests:null===i||void 0===i?void 0:i.numberOfGuests,id:p,query:o},p)||void 0}}));return Object(k.jsx)(E.default,{borders:!0,variant:v.b.compact,className:"curiosity-inventory-list",columnHeaders:l,rows:u})}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.filterInventoryData,r=e.fulfilled,a=e.isDisabled,i=e.itemCount,o=e.listData,s=e.pending,c=e.perPageDefault,l=e.query,u=e.t,d=e.viewId;if(a)return Object(k.jsx)(b.a,{className:"curiosity-inventory-card__disabled",children:Object(k.jsx)(h.a,{children:Object(k.jsx)(m.a,{children:u("curiosity-inventory.tab",{context:"disabled"})})})});var f=l[M.g.LIMIT]||c,p=l[M.g.OFFSET],C=w.paginationHelpers.isLastPage(p,f,i),D=!0===r&&i<f&&"bodyMinHeight-".concat(f,"-resize")||!0===r&&C&&"bodyMinHeight-".concat(f,"-resize")||!0===t&&"bodyMinHeight-".concat(f,"-resize")||"bodyMinHeight-".concat(f);return Object(k.jsxs)(b.a,{className:"curiosity-inventory-card",children:[Object(k.jsx)(S.MinHeight,{updateOnContent:!0,children:Object(k.jsxs)(g.a,{className:t?"hidden":"","aria-hidden":t||!1,children:[Object(k.jsx)(O.a,{children:Object(k.jsx)(H.ToolbarFieldDisplayName,{viewId:d})}),Object(k.jsx)(y.a,{className:i?"":"transparent","aria-hidden":!i||!1,children:Object(k.jsx)(x.default,{isCompact:!0,isDisabled:s||t,itemCount:i,offset:p,onPage:this.onPage,onPerPage:this.onPage,perPage:f})})]})},"headerMinHeight"),Object(k.jsx)(S.MinHeight,{updateOnContent:!0,children:Object(k.jsx)(h.a,{children:Object(k.jsxs)("div",{className:(t?"blur":s&&"fadein")||"",children:[s&&Object(k.jsx)(T.Loader,{variant:"table",tableProps:{className:"curiosity-inventory-list",colCount:(null===n||void 0===n?void 0:n.length)||(null===o||void 0===o?void 0:o[0])&&Object.keys(o[0]).length||1,colWidth:(null===n||void 0===n?void 0:n.length)&&n.map((function(e){return e.cellWidth}))||[],rowCount:(null===o||void 0===o?void 0:o.length)||f,variant:v.b.compact}}),!s&&this.renderTable()]})})},D),Object(k.jsx)(S.MinHeight,{updateOnContent:!0,children:Object(k.jsx)(j.a,{className:(t?"hidden":!i&&"transparent")||"","aria-hidden":t||!i||!1,children:Object(k.jsx)(N.a,{isFooter:!0,children:Object(k.jsx)(x.default,{dropDirection:"up",isDisabled:s||t,itemCount:i,offset:p,onPage:this.onPage,onPerPage:this.onPage,perPage:f})})})},"footerMinHeight")]})}}]),n}(u.a.Component);F.defaultProps={error:!1,fulfilled:!1,filterGuestsData:[],filterInventoryData:[],getHostsInventory:I.b.noop,isDisabled:I.b.UI_DISABLED_TABLE_HOSTS,itemCount:0,listData:[],pending:!1,perPageDefault:10,session:{},settings:{},t:L.translate,viewId:"inventoryList"};var z=R.e.inventoryList.makeInventoryList(),A=Object(R.b)(z,(function(e){return{getHostsInventory:function(t,n){return e(R.d.rhsm.getHostsInventory(t,n))}}}))(F)},631:function(e,t,n){"use strict";t.__esModule=!0,n(667),t.default={formControl:"pf-c-form-control",modifiers:{success:"pf-m-success",expanded:"pf-m-expanded",icon:"pf-m-icon",warning:"pf-m-warning",search:"pf-m-search",calendar:"pf-m-calendar",clock:"pf-m-clock",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal"}}},640:function(e,t,n){"use strict";t.__esModule=!0,n(641),t.default={formControl:"pf-c-form-control",inputGroup:"pf-c-input-group",inputGroupText:"pf-c-input-group__text",modifiers:{plain:"pf-m-plain"}}},641:function(e,t,n){},642:function(e,t,n){"use strict";t.__esModule=!0,n(643),t.default={bullseye:"pf-l-bullseye"}},643:function(e,t,n){},644:function(e,t,n){},651:function(e,t,n){var r=n(90),a=n(700),i=n(664),o=Math.max,s=Math.min;e.exports=function(e,t,n){var c,l,u,d,f,p,v=0,b=!1,h=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=c,r=l;return c=l=void 0,v=t,d=e.apply(r,n)}function O(e){return v=e,f=setTimeout(j,t),b?g(e):d}function y(e){var n=e-p;return void 0===p||n>=t||n<0||h&&e-v>=u}function j(){var e=a();if(y(e))return N(e);f=setTimeout(j,function(e){var n=t-(e-p);return h?s(n,u-(e-v)):n}(e))}function N(e){return f=void 0,m&&c?g(e):(c=l=void 0,d)}function C(){var e=a(),n=y(e);if(c=arguments,l=this,p=e,n){if(void 0===f)return O(p);if(h)return clearTimeout(f),f=setTimeout(j,t),g(p)}return void 0===f&&(f=setTimeout(j,t)),d}return t=i(t)||0,r(n)&&(b=!!n.leading,u=(h="maxWait"in n)?o(i(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),C.cancel=function(){void 0!==f&&clearTimeout(f),v=0,c=p=l=f=void 0},C.flush=function(){return void 0===f?d:N(a())},C}},662:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(5),a=n(0),i=n(2),o=n(47),s=n.n(o),c=n(243),l=n(45),u=n(240),d=function(e){var t=e.children,n=void 0===t?null:t,o=e.className,d=void 0===o?"":o,f=e.id,p=e.onExpand,v=e.toggleButtonProps,b=Object(r.__rest)(e,["children","className","id","onExpand","toggleButtonProps"]);return a.createElement(c.b.Consumer,null,(function(e){var t=e.cardId;return a.createElement("div",Object.assign({className:Object(i.css)(s.a.cardHeader,d),id:f},b),p&&a.createElement("div",{className:Object(i.css)(s.a.cardHeaderToggle)},a.createElement(l.a,Object.assign({variant:"plain",type:"button",onClick:function(e){p(e,t)}},v),a.createElement("span",{className:Object(i.css)(s.a.cardHeaderToggleIcon)},a.createElement(u.a,{"aria-hidden":"true"})))),n)}))};d.displayName="CardHeader"},663:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(5),a=n(0),i=n(47),o=n.n(i),s=n(2),c=function(e){var t=e.children,n=void 0===t?null:t,i=e.className,c=void 0===i?"":i,l=e.component,u=void 0===l?"div":l,d=Object(r.__rest)(e,["children","className","component"]),f=u;return a.createElement(f,Object.assign({className:Object(s.css)(o.a.cardFooter,c)},d),n)};c.displayName="CardFooter"},664:function(e,t,n){var r=n(696),a=n(90),i=n(190),o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=s.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):o.test(e)?NaN:+e}},667:function(e,t,n){},668:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r,a=n(15),i=n(16),o=n(18),s=n(17),c=n(5),l=n(0),u=n(631),d=n.n(u),f=n(2),p=n(30),v=n(21);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(r||(r={}));var b=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).inputRef=l.createRef(),r.handleChange=function(e){r.props.onChange&&r.props.onChange(e.currentTarget.value,e)},r.handleResize=function(){var e=r.props.innerRef||r.inputRef;e&&e.current&&Object(v.l)(e.current,String(r.props.value))},r.restoreText=function(){var e=r.props.innerRef||r.inputRef;e.current.value=String(r.props.value),e.current.scrollLeft=e.current.scrollWidth},r.onFocus=function(e){var t=r.props,n=t.isLeftTruncated,a=t.onFocus;n&&r.restoreText(),a&&a(e)},r.onBlur=function(e){var t=r.props,n=t.isLeftTruncated,a=t.onBlur;n&&r.handleResize(),a&&a(e)},e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.isLeftTruncated&&(this.handleResize(),window.addEventListener("resize",Object(v.b)(this.handleResize,250)))}},{key:"componentWillUnmount",value:function(){this.props.isLeftTruncated&&window.removeEventListener("resize",Object(v.b)(this.handleResize,250))}},{key:"render",value:function(){var e=this.props,t=e.innerRef,n=e.className,r=e.type,a=e.value,i=e.validated,o=(e.onChange,e.onFocus,e.onBlur,e.isLeftTruncated,e.isReadOnly),s=e.isRequired,u=e.isDisabled,v=e.iconVariant,b=e.customIconUrl,h=e.customIconDimensions,m=Object(c.__rest)(e,["innerRef","className","type","value","validated","onChange","onFocus","onBlur","isLeftTruncated","isReadOnly","isRequired","isDisabled","iconVariant","customIconUrl","customIconDimensions"]),g={};return b&&(g.backgroundImage="url('".concat(b,"')")),h&&(g.backgroundSize=h),l.createElement("input",Object.assign({},m,{onFocus:this.onFocus,onBlur:this.onBlur,className:Object(f.css)(d.a.formControl,i===p.d.success&&d.a.modifiers.success,i===p.d.warning&&d.a.modifiers.warning,(v&&"search"!==v||b)&&d.a.modifiers.icon,v&&d.a.modifiers[v],n),onChange:this.handleChange,type:r,value:a,"aria-invalid":i===p.d.error,required:s,disabled:u,readOnly:o,ref:t||this.inputRef},(b||h)&&{style:g}))}}]),n}(l.Component);b.displayName="TextInputBase",b.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,type:r.text,isLeftTruncated:!1,onChange:function(){}};var h=l.forwardRef((function(e,t){return l.createElement(b,Object.assign({},e,{innerRef:t}))}));h.displayName="TextInput"},670:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(5),a=n(0),i=n(2),o=n(47),s=n.n(o),c=function(e){var t=e.children,n=void 0===t?null:t,o=e.className,c=void 0===o?"":o,l=Object(r.__rest)(e,["children","className"]);return a.createElement("div",Object.assign({className:Object(i.css)(s.a.cardActions,c)},l),n)};c.displayName="CardActions"},689:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(5),a=n(0),i=n(2),o=n(642),s=n.n(o),c=function(e){var t=e.children,n=void 0===t?null:t,o=e.className,c=void 0===o?"":o,l=e.component,u=void 0===l?"div":l,d=Object(r.__rest)(e,["children","className","component"]),f=u;return a.createElement(f,Object.assign({className:Object(i.css)(s.a.bullseye,c)},d),n)};c.displayName="Bullseye"},690:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(5),a=n(0),i=function(e){var t=e.children,n=void 0===t?null:t,i=e.className,o=void 0===i?"":i,s=Object(r.__rest)(e,["children","className"]);return a.createElement("div",Object.assign({className:o},s),n)};i.displayName="CardHeaderMain"},691:function(e,t,n){"use strict";var r=n(40),a=n.n(r),i=n(29),o=n.n(i),s=n(34),c=n.n(s),l=n(0),u=n.n(l),d=n(9),f=n.n(d),p=n(673),v=n(48),b=n.n(v);n(644);var h=function(e){var t=e.isFooter,n=e.results,r=e.className,i=e.selected,s=e.children,d=c()(e,["isFooter","results","className","selected","children"]),f=b()("ins-c-table__toolbar",o()({},"ins-m-footer",t),r);return u.a.createElement(l.Fragment,null,u.a.createElement(p.a,a()({className:f},d)," ",s),(n>=0||i>=0)&&u.a.createElement("div",{className:"ins-c-table__toolbar-results"},n>=0&&u.a.createElement("span",{className:"ins-c-table__toolbar-results-count"}," ",function(e){return"".concat(e,e>1||e<1?" Results":" Result")}(n)," "),i>=0&&u.a.createElement("span",{className:"ins-c-table__toolbar-results-selected"}," ",i," Selected ")))};t.a=h,h.propTypes={isFooter:f.a.bool,results:f.a.number,children:f.a.any,className:f.a.string,selected:f.a.number},h.defaultProps={isFooter:!1}},696:function(e,t,n){var r=n(697),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},697:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},700:function(e,t,n){var r=n(76);e.exports=function(){return r.Date.now()}},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(15),a=n(16),i=n(18),o=n(17),s=n(0),c=0,l=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).id="".concat(e.props.prefix).concat(c++),e}return Object(a.a)(n,[{key:"render",value:function(){return this.props.children(this.id)}}]),n}(s.Component);l.displayName="GenerateId",l.defaultProps={prefix:"pf-random-id-"}}}]);
//# sourceMappingURL=13.e9e2afdb.chunk.js.map