"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[2227],{92227:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T,ConnectedToolbar:()=>T,Toolbar:()=>F});var l=r(56949),o=r(15274),i=r(90237),n=r(65337),a=r(39576),s=r(80239),c=r(92950),u=r.n(c),p=r(68269),d=r(14708),v=r(49844),y=r(25097),E=r(30446),f=r(30433),h=r(76006),S=r(83109),F=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){var e;(0,i.Z)(this,r);for(var l=arguments.length,n=new Array(l),a=0;a<l;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).onClear=function(){var t,r=e.props.hardFilterReset,l=[{type:y.JD.toolbar.SET_ACTIVE_FILTERS,data:{activeFilters:new Set}},{type:y.JD.query.SET_QUERY_CLEAR,data:{clearFilters:(t={},(0,o.Z)(t,E.VN.SLA,null),(0,o.Z)(t,E.VN.USAGE,null),t)}}];r&&l.push({type:y.JD.toolbar.SET_FILTER_TYPE,data:{currentFilter:null}}),e.setDispatch(l,!0)},e.onClearFilter=function(t){var r=e.props,l=r.activeFilters,i=r.currentFilter,n=r.hardFilterReset,a=(f.toolbarHelpers.getOptions().options.find((function(e){return e.title===t}))||{}).value;if(a){var s=new Set(l);s.delete(a);var c=[{type:y.JD.toolbar.SET_ACTIVE_FILTERS,data:{activeFilters:s}},{type:y.JD.query.SET_QUERY_CLEAR,data:{clearFilters:(0,o.Z)({},a,null)}}];if(n){var u=s.size>0&&i||null;c.push({type:y.JD.toolbar.SET_FILTER_TYPE,data:{currentFilter:u}})}e.setDispatch(c,!0)}},e.onCategorySelect=function(t){var r=t.value;e.setDispatch({type:y.JD.toolbar.SET_FILTER_TYPE,data:{currentFilter:r}})},e.onSelect=function(t){var r=t.event,l=t.field,i=e.props.activeFilters,n=r.value,a=new Set(i).add(l);e.setDispatch([{type:y.JD.toolbar.SET_ACTIVE_FILTERS,data:{activeFilters:a}},{type:y.JD.query.SET_QUERY_RHSM_TYPES[l],data:(0,o.Z)({},l,n)}],!0)},e}return(0,n.Z)(r,[{key:"setDispatch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.props.viewId,o=(Array.isArray(e)&&e||[e]).map((function(e){var t=e.type,o=e.data;return(0,l.Z)({type:t,viewId:r},o)}));t&&o.push({type:y.JD.query.SET_QUERY_RESET_INVENTORY_LIST,viewId:r}),y.h.dispatch(o)}},{key:"setSelectFilter",value:function(e){var t,r,l=this.props.query,o=f.toolbarHelpers.getOptions(e),i=this.getCurrentFilter();return r=e?"string"==typeof(null==l?void 0:l[e])&&o.options.find((function(t){return t.value===(null==l?void 0:l[e])})):o.options.find((function(e){return e.value===i})),{options:o,optionsSelected:(null===(t=r)||void 0===t?void 0:t.title)&&[r.title]||(null==o?void 0:o.selected)&&[o.selected]||[]}}},{key:"getCurrentFilter",value:function(){var e,t,r=this.props,l=r.currentFilter,o=r.filterOptions;return l||(null===(e=o.find((function(e){return!0===e.selected})))||void 0===e?void 0:e.id)||1===o.length&&(null===(t=o[0])||void 0===t?void 0:t.id)}},{key:"renderSelectFilter",value:function(e){var t=this,r=e.id,l=this.props.t,o=this.setSelectFilter(r),i=o.options,n=o.optionsSelected,a=this.getCurrentFilter();return u().createElement(p.ToolbarFilter,{key:r,chips:n,deleteChip:this.onClearFilter,categoryName:l("curiosity-toolbar.category",{context:r}),showToolbarItem:a===r},u().createElement(v.Select,{"aria-label":l("curiosity-toolbar.category",{context:r}),onSelect:function(e){return t.onSelect({event:e,field:r})},selectedOptions:n,placeholder:l("curiosity-toolbar.placeholder",{context:r}),options:i.options}))}},{key:"render",value:function(){var e=this,t=this.props,r=t.filterOptions,l=t.isDisabled,o=t.t;if(l)return null;var i=this.setSelectFilter(),n=i.options,a=i.optionsSelected;return u().createElement(p.Toolbar,{id:"curiosity-toolbar",className:"curiosity-toolbar pf-m-toggle-group-container ins-c-primary-toolbar",collapseListedFiltersBreakpoint:"sm",clearAllFilters:this.onClear,clearFiltersButtonText:o("curiosity-toolbar.clearFilters")},u().createElement(p.ToolbarContent,null,u().createElement(p.ToolbarToggleGroup,{toggleIcon:u().createElement(d.FilterIcon,null),breakpoint:"md"},u().createElement(p.ToolbarGroup,{variant:"filter-group"},1!==r.length&&u().createElement(p.ToolbarItem,null,u().createElement(v.Select,{"aria-label":o("curiosity-toolbar.category"),onSelect:this.onCategorySelect,selectedOptions:a,placeholder:o("curiosity-toolbar.placeholder"),options:n.options,toggleIcon:u().createElement(d.FilterIcon,null)})),r.map((function(t){var r=t.id,l=t.selected;return e.renderSelectFilter({id:r,selected:l})}))))))}}]),r}(u().Component);F.defaultProps={query:{},activeFilters:new Set,currentFilter:null,filterOptions:[{id:E.VN.SLA,filterType:"select"},{id:E.VN.USAGE,filterType:"select",selected:!0}],hardFilterReset:!1,isDisabled:h.BM.UI_DISABLED_TOOLBAR,t:S.translate,viewId:"toolbar"};var T=(0,y.$j)((function(e,t){var r,o,i=e.toolbar,n=e.view,a=t.query,s=t.viewId;return(0,l.Z)((0,l.Z)({},null===(r=i.filters)||void 0===r?void 0:r[s]),{},{query:(null===(o=n.query)||void 0===o?void 0:o[s])||a})}))(F)}}]);
//# sourceMappingURL=../sourcemaps/2227.d1adec17e42df273fc75.js.map