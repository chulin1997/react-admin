(this["webpackJsonp_react-admin"]=this["webpackJsonp_react-admin"]||[]).push([[4],{1078:function(e,t,a){"use strict";a.r(t);a(354);var n=a(187),r=(a(120),a(41)),c=a(5),l=a.n(c),i=a(14),o=a(197),s=a(29),u=(a(421),a(250)),d=a(52),b=a(2),j=a.n(b),f=a(0),p=a(12),O=a(184),m=a(22),v=(a(1105),a(1107)),h=(a(1106),a(1108)),x=(a(1117),a(1119)),y=(a(186),a(68)),g=a(251),E=a(1104),w=a(10),k=E.default.menuTarget,C=Object(p.Q)(p.p),S=Object(O.a)()((function(e){var t=e.menus,a=e.value,n=e.onChange,c=e.topId,u=e.getCheckboxProps,b=Object(g.a)(e,["menus","value","onChange","topId","getCheckboxProps"]),j=Object(f.useState)(!1),O=Object(d.a)(j,2),m=O[0],v=O[1],h=Object(f.useState)([]),x=Object(d.a)(h,2),E=x[0],S=x[1],N=Object(f.useState)([]),P=Object(d.a)(N,2),I=P[0],T=P[1],F=Object(f.useState)([]),L=Object(d.a)(F,2),R=L[0],K=L[1],V=Object(f.useState)([]),q=Object(d.a)(V,2),_=q[0],z=q[1],H=Object(f.useState)(!0),B=Object(d.a)(H,2),M=B[0],D=B[1],G=Object(f.useRef)(0),A=[{title:"\u540d\u79f0",dataIndex:"title",key:"title"},{title:"\u7c7b\u578b",dataIndex:"type",key:"type",width:100,render:function(e,t){var a;if(2===e)return"\u529f\u80fd\u6743\u9650\u7801";var n=t.target;return(null===(a=k.find((function(e){return e.value===n})))||void 0===a?void 0:a.label)||"-"}}];function U(){return J.apply(this,arguments)}function J(){return(J=Object(i.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.ajax.get("/menu/queryMenus",{enabled:!0});case 2:return a=t.sent,t.abrupt("return",(a||[]).map((function(e){return Object(s.a)({},e)})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Q(){return X.apply(this,arguments)}function X(){return(X=Object(i.a)(l.a.mark((function e(){var a,n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v(!0),e.prev=1,e.t0=t,e.t0){e.next=7;break}return e.next=6,U();case 6:e.t0=e.sent;case 7:a=e.t0,n=a.map((function(e){return e.id})),r=Object(p.s)(a),c=Object(o.a)(n),S(r),T(r),K(n),z(c),v(!1),e.next=22;break;case 18:throw e.prev=18,e.t1=e.catch(1),v(!1),e.t1;case 22:case"end":return e.stop()}}),e,null,[[1,18]])})))).apply(this,arguments)}function Z(e){var t=Object(p.y)(I,(function(t){return[t.title,t.path,t.name,t.code].some((function(t){return(t||"").toLowerCase().includes(e)}))}));S(t),D(!0),z(R)}return Object(f.useEffect)((function(){Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:case"end":return e.stop()}}),e)})))()}),[]),Object(f.useEffect)((function(){if(c){var e=Object(o.a)(I).filter((function(e){return e.id===c}));S(e)}}),[I,c]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{style:{padding:8,width:"100%",display:"flex",alignItems:"center"},children:[Object(w.jsx)(y.a.Search,{style:{flex:1},allowClear:!0,placeholder:"\u8f93\u5165\u5173\u952e\u5b57\u8fdb\u884c\u641c\u7d22",onSearch:Z,onChange:function(e){G.current&&clearTimeout(G.current),G.current=setTimeout((function(){return Z(e.target.value)}),3e3)}}),Object(w.jsxs)(r.a,{type:"text",style:{flex:0,marginLeft:8},onClick:function(){var e=M?[]:R;D(!M),z(e)},children:["\u5168\u90e8",M?"\u6536\u8d77":"\u5c55\u5f00"]})]}),Object(w.jsx)(C,Object(s.a)({expandable:{expandedRowKeys:_,onExpandedRowsChange:function(e){return z(e)}},rowSelection:{getCheckboxProps:u,selectedRowKeys:a,onChange:n},loading:m,columns:A,dataSource:E,pagination:!1,rowKey:"id",size:"small"},b))]})})),N=Object(O.a)({modal:{title:function(e){return e.isEdit?"\u7f16\u8f91\u89d2\u8272":"\u521b\u5efa\u89d2\u8272"},width:"70%",top:50}})((function(e){var t=e.record,a=e.isEdit,n=e.onOk,r=Object(f.useState)(!1),c=Object(d.a)(r,2),o=c[0],b=c[1],j=u.a.useForm(),O=Object(d.a)(j,1)[0],y=Object(p.X)(E.default.system),g=Object(d.a)(y,1)[0];e.ajax.useGet("/role/getRoleDetailById",{id:null===t||void 0===t?void 0:t.id},[],{setLoading:b,mountFire:a,formatResult:function(e){if(e){var t=Object(s.a)({},e);O.setFieldsValue(t)}}});var k=e.ajax.usePost("/role/addRole",null,{setLoading:b,successTip:"\u521b\u5efa\u6210\u529f\uff01"}).run,C=e.ajax.usePost("/role/updateRoleById",null,{setLoading:b,successTip:"\u4fee\u6539\u6210\u529f\uff01"}).run,N=e.ajax.useGet("/role/getOneRole").run,P=Object(f.useCallback)(function(){var e=Object(i.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object(s.a)({},t),!a){e.next=6;break}return e.next=4,C(r);case 4:e.next=8;break;case 6:return e.next=8,k(r);case 8:n();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a,C,k,n]),I=Object(p.V)(function(){var e=Object(i.a)(l.a.mark((function e(t,n){var r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return r=O.getFieldValue("systemId"),e.next=5,N({name:n,systemId:r});case 5:if(c=e.sent){e.next=8;break}return e.abrupt("return");case 8:if(i=O.getFieldValue("id"),!a||c.id===i||c.name!==n){e.next=11;break}throw Error("\u89d2\u8272\u540d\u4e0d\u80fd\u91cd\u590d\uff01");case 11:if(a||c.name!==n){e.next=13;break}throw Error("\u89d2\u8272\u540d\u4e0d\u80fd\u91cd\u590d\uff01");case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),T={labelCol:{flex:"100px"}},F={xs:{span:24},sm:{span:12}};return Object(w.jsx)(u.a,{form:O,name:"roleEdit",onFinish:P,initialValues:{enabled:!0},children:Object(w.jsxs)(p.k,{loading:o,okText:"\u4fdd\u5b58",okHtmlType:"submit",cancelText:"\u91cd\u7f6e",onCancel:function(){return O.resetFields()},children:[a?Object(w.jsx)(p.e,{hidden:!0,name:"id"}):null,Object(w.jsxs)(v.a,{gutter:8,children:[Object(w.jsx)(h.a,Object(s.a)(Object(s.a)({},F),{},{children:Object(w.jsx)(x.a,{title:"\u57fa\u7840\u4fe1\u606f",children:Object(w.jsxs)(p.c,{fitHeight:!0,otherHeight:160,children:[m.j?Object(w.jsx)(p.e,Object(s.a)(Object(s.a)({},T),{},{label:"\u5f52\u5c5e\u7cfb\u7edf",name:"systemId",required:!0,options:g,onChange:function(){O.setFieldsValue({menuIds:[]})},noSpace:!0})):null,Object(w.jsx)(p.e,Object(s.a)(Object(s.a)({},T),{},{label:"\u89d2\u8272\u540d\u79f0",name:"name",required:!0,noSpace:!0,maxLength:50,rules:[{validator:I}]})),Object(w.jsx)(p.e,Object(s.a)(Object(s.a)({},T),{},{type:"switch",label:"\u542f\u7528",name:"enabled",checkedChildren:"\u542f",unCheckedChildren:"\u7981",required:!0})),Object(w.jsx)(p.e,Object(s.a)(Object(s.a)({},T),{},{type:"textarea",label:"\u5907\u6ce8",name:"remark",maxLength:250}))]})})})),Object(w.jsx)(h.a,Object(s.a)(Object(s.a)({},F),{},{children:Object(w.jsx)(x.a,{title:"\u6743\u9650\u914d\u7f6e",bodyStyle:{padding:0},children:Object(w.jsx)(p.e,{shouldUpdate:!0,noStyle:!0,children:function(e){var t=(0,e.getFieldValue)("systemId");return Object(w.jsx)(p.e,Object(s.a)(Object(s.a)({},T),{},{name:"menuIds",children:Object(w.jsx)(S,{topId:m.j?t:void 0,fitHeight:!0,otherHeight:200})}))}})})}))]})]})})})),P=a(1124),I=a.n(P);t.default=Object(O.a)({path:"/roles"})((function(e){var t=Object(f.useState)(!1),a=Object(d.a)(t,2),c=a[0],b=a[1],O=Object(f.useState)(1),v=Object(d.a)(O,2),h=v[0],x=v[1],y=Object(f.useState)(20),g=Object(d.a)(y,2),k=g[0],C=g[1],S=Object(f.useState)({}),P=Object(d.a)(S,2),T=P[0],F=P[1],L=Object(f.useState)(null),R=Object(d.a)(L,2),K=R[0],V=R[1],q=Object(f.useState)(!1),_=Object(d.a)(q,2),z=_[0],H=_[1],B=u.a.useForm(),M=Object(d.a)(B,1)[0],D=Object(f.useMemo)((function(){return Object(s.a)(Object(s.a)({},T),{},{pageNum:h,pageSize:k})}),[T,h,k]),G=Object(f.useCallback)((function(){return F(M.getFieldsValue())}),[M]),A=e.ajax.useGet("/role/queryRoleByPage",D,[D],{setLoading:b,formatResult:function(e){return{dataSource:((null===e||void 0===e?void 0:e.content)||[]).filter((function(e){return 3===e.type})),total:(null===e||void 0===e?void 0:e.totalElements)||0}}}).data,U=(A=void 0===A?{}:A).dataSource,J=A.total,Q=e.ajax.useDel("/role/:id",null,{setLoading:b,successTip:"\u5220\u9664\u6210\u529f\uff01"}).run,X=[{title:"\u89d2\u8272\u540d\u79f0",dataIndex:"name"},{title:"\u542f\u7528",dataIndex:"enabled",render:function(e){return E.default.enabled.getTag(!!e)}},{title:"\u5907\u6ce8",dataIndex:"remark"},{title:"\u64cd\u4f5c",dataIndex:"operator",width:100,render:function(e,t){var a=t.id,n=t.name,r=[{label:"\u7f16\u8f91",onClick:function(){return V(t)||H(!0)}},{label:"\u5220\u9664",color:"red",confirm:{title:"\u60a8\u786e\u5b9a\u5220\u9664\u300c".concat(n,"\u300d\u5417\uff1f"),onConfirm:function(){return Z(a)}}}];return Object(w.jsx)(p.l,{items:r})}}];m.j&&(X=[{title:"\u5f52\u5c5e\u7cfb\u7edf",dataIndex:"systemName"}].concat(Object(o.a)(X)));var Z=Object(f.useCallback)(function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t);case 2:G();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[Q,G]);return Object(w.jsxs)(p.m,{fitHeight:!0,loading:c,className:j()(I.a.root),children:[Object(w.jsx)(p.o,{children:Object(w.jsxs)(u.a,{name:"role",layout:"inline",form:M,initialValues:T,onFinish:function(e){x(1),F(e)},children:[Object(w.jsx)(p.e,Object(s.a)(Object(s.a)({},{wrapperCol:{style:{width:200}}}),{},{label:"\u89d2\u8272\u540d\u79f0",name:"name"})),Object(w.jsx)(p.e,{children:Object(w.jsxs)(n.b,{children:[Object(w.jsx)(r.a,{type:"primary",htmlType:"submit",children:"\u67e5\u8be2"}),Object(w.jsx)(r.a,{htmlType:"reset",children:"\u91cd\u7f6e"})]})})]})}),Object(w.jsx)(p.q,{children:Object(w.jsx)(r.a,{type:"primary",onClick:function(){return V(null)||H(!0)},children:"\u6dfb\u52a0"})}),Object(w.jsx)(p.p,{fitHeight:!0,dataSource:U,columns:X,rowKey:"id"}),Object(w.jsx)(p.n,{total:J,pageNum:h,pageSize:k,onPageNumChange:x,onPageSizeChange:function(e){return x(1)||C(e)}}),Object(w.jsx)(N,{visible:z,isEdit:!!K,record:K,onOk:function(){return H(!1)||G()},onCancel:function(){return H(!1)}})]})}))},1104:function(e,t,a){"use strict";a.r(t);var n=a(52),r=a(12),c={},l=a(1110);l.keys().forEach((function(e){if(!["./index.js"].includes(e)){var t=l(e).default;Object.entries(t).forEach((function(t){var a=Object(n.a)(t,2),r=a[0],l=a[1];if(r in c)throw Error("".concat(e," \u6587\u4ef6\u4e2d key \u300c").concat(r,"\u300d\u5df2\u88ab\u4f7f\u7528\uff01\u8bf7\u66f4\u6362\uff01"));c[r]=l}))}})),Object(r.Z)(c,5e3),t.default=c},1105:function(e,t,a){"use strict";a(40),a(578)},1106:function(e,t,a){"use strict";a(40),a(578)},1107:function(e,t,a){"use strict";var n=a(548);t.a=n.a},1108:function(e,t,a){"use strict";var n=a(318);t.a=n.a},1110:function(e,t,a){var n={"./index.js":1104,"./system.js":1111};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=1110},1111:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),c=a(14),l=(a(580),a(422)),i=a(154),o=a(10);t.default={menuTarget:[{value:"menu",label:"\u5e94\u7528\u83dc\u5355"},{value:"qiankun",label:"\u4e7e\u5764\u5b50\u5e94\u7528"},{value:"iframe",label:"iframe\u5185\u5d4c\u7b2c\u4e09\u65b9"},{value:"_self",label:"\u5f53\u524d\u7a97\u53e3\u6253\u5f00\u7b2c\u4e09\u65b9"},{value:"_blank",label:"\u65b0\u5f00\u7a97\u53e3\u6253\u5f00\u7b2c\u4e09\u65b9"}],yesNo:[{value:!0,label:"\u662f",tag:Object(o.jsx)(l.a,{color:"green",children:"\u662f"})},{value:!1,label:"\u5426",tag:Object(o.jsx)(l.a,{color:"red",children:"\u5426"})}],enabled:[{value:!0,label:"\u542f\u7528",tag:Object(o.jsx)(l.a,{color:"green",children:"\u542f\u7528"})},{value:!1,label:"\u7981\u7528",tag:Object(o.jsx)(l.a,{color:"red",children:"\u7981\u7528"})}],sex:[{value:"1",label:"\u7537"},{value:"2",label:"\u5973"},{value:"3",label:"\u672a\u77e5"}],system:function(){return Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.get("/menu/queryTopMenus");case 2:return t=e.sent,e.abrupt("return",t.map((function(e){return{value:e.id,label:e.title,meta:e}})));case 4:case"end":return e.stop()}}),e)})))()},action:function(){return[{value:"add",label:"\u6dfb\u52a0"}]},get demo(){return[]}}},1117:function(e,t,a){"use strict";a(40),a(1118),a(579),a(1105),a(1106)},1118:function(e,t,a){},1119:function(e,t,a){"use strict";var n=a(3),r=a(1),c=a(0),l=a(2),i=a.n(l),o=a(33),s=a(80),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},d=function(e){var t=e.prefixCls,a=e.className,l=e.hoverable,o=void 0===l||l,d=u(e,["prefixCls","className","hoverable"]);return c.createElement(s.a,null,(function(e){var l=(0,e.getPrefixCls)("card",t),s=i()("".concat(l,"-grid"),a,Object(n.a)({},"".concat(l,"-grid-hoverable"),o));return c.createElement("div",Object(r.a)({},d,{className:s}))}))},b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},j=function(e){return c.createElement(s.a,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,l=e.className,o=e.avatar,s=e.title,u=e.description,d=b(e,["prefixCls","className","avatar","title","description"]),j=a("card",n),f=i()("".concat(j,"-meta"),l),p=o?c.createElement("div",{className:"".concat(j,"-meta-avatar")},o):null,O=s?c.createElement("div",{className:"".concat(j,"-meta-title")},s):null,m=u?c.createElement("div",{className:"".concat(j,"-meta-description")},u):null,v=O||m?c.createElement("div",{className:"".concat(j,"-meta-detail")},O,m):null;return c.createElement("div",Object(r.a)({},d,{className:f}),p,v)}))},f=a(356),p=a(1107),O=a(1108),m=a(35),v=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};var h=function(e){var t,a,l,u=c.useContext(s.b),b=u.getPrefixCls,j=u.direction,h=c.useContext(m.b),x=e.prefixCls,y=e.className,g=e.extra,E=e.headStyle,w=void 0===E?{}:E,k=e.bodyStyle,C=void 0===k?{}:k,S=e.title,N=e.loading,P=e.bordered,I=void 0===P||P,T=e.size,F=e.type,L=e.cover,R=e.actions,K=e.tabList,V=e.children,q=e.activeTabKey,_=e.defaultActiveTabKey,z=e.tabBarExtraContent,H=e.hoverable,B=e.tabProps,M=void 0===B?{}:B,D=v(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),G=b("card",x),A=0===C.padding||"0px"===C.padding?{padding:24}:void 0,U=c.createElement("div",{className:"".concat(G,"-loading-block")}),J=c.createElement("div",{className:"".concat(G,"-loading-content"),style:A},c.createElement(p.a,{gutter:8},c.createElement(O.a,{span:22},U)),c.createElement(p.a,{gutter:8},c.createElement(O.a,{span:8},U),c.createElement(O.a,{span:15},U)),c.createElement(p.a,{gutter:8},c.createElement(O.a,{span:6},U),c.createElement(O.a,{span:18},U)),c.createElement(p.a,{gutter:8},c.createElement(O.a,{span:13},U),c.createElement(O.a,{span:9},U)),c.createElement(p.a,{gutter:8},c.createElement(O.a,{span:4},U),c.createElement(O.a,{span:3},U),c.createElement(O.a,{span:16},U))),Q=void 0!==q,X=Object(r.a)(Object(r.a)({},M),(t={},Object(n.a)(t,Q?"activeKey":"defaultActiveKey",Q?q:_),Object(n.a)(t,"tabBarExtraContent",z),t)),Z=K&&K.length?c.createElement(f.a,Object(r.a)({size:"large"},X,{className:"".concat(G,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)}}),K.map((function(e){return c.createElement(f.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(S||g||Z)&&(l=c.createElement("div",{className:"".concat(G,"-head"),style:w},c.createElement("div",{className:"".concat(G,"-head-wrapper")},S&&c.createElement("div",{className:"".concat(G,"-head-title")},S),g&&c.createElement("div",{className:"".concat(G,"-extra")},g)),Z));var W=L?c.createElement("div",{className:"".concat(G,"-cover")},L):null,Y=c.createElement("div",{className:"".concat(G,"-body"),style:C},N?J:V),$=R&&R.length?c.createElement("ul",{className:"".concat(G,"-actions")},function(e){return e.map((function(t,a){return c.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},c.createElement("span",null,t))}))}(R)):null,ee=Object(o.a)(D,["onTabChange"]),te=T||h,ae=i()(G,(a={},Object(n.a)(a,"".concat(G,"-loading"),N),Object(n.a)(a,"".concat(G,"-bordered"),I),Object(n.a)(a,"".concat(G,"-hoverable"),H),Object(n.a)(a,"".concat(G,"-contain-grid"),function(){var t;return c.Children.forEach(e.children,(function(e){e&&e.type&&e.type===d&&(t=!0)})),t}()),Object(n.a)(a,"".concat(G,"-contain-tabs"),K&&K.length),Object(n.a)(a,"".concat(G,"-").concat(te),te),Object(n.a)(a,"".concat(G,"-type-").concat(F),!!F),Object(n.a)(a,"".concat(G,"-rtl"),"rtl"===j),a),y);return c.createElement("div",Object(r.a)({},ee,{className:ae}),l,W,Y,$)};h.Grid=d,h.Meta=j;t.a=h},1124:function(e,t,a){var n=a(218),r=a(1125);"string"===typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};n(r,c);e.exports=r.locals||{}},1125:function(e,t,a){"use strict";a.r(t);var n=a(130),r=a.n(n)()(!0);r.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.default=r}}]);
//# sourceMappingURL=4.df5a03a1.chunk.js.map