(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"8qsu":function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var r=n(a("2/Rp"));a("miYZ");var o=n(a("tsqr")),s=n(a("p0pE")),d=n(a("gWZ8")),i=n(a("jehZ")),c=n(a("eHn4")),u=n(a("2Taf")),f=n(a("vZ4D")),p=n(a("rlhR")),m=n(a("MhPg")),h=n(a("l4Ni")),v=n(a("ujKo"));a("OaEy");var g=n(a("2fM7"));a("7Kak");var y=n(a("9yH6"));a("sRBo");var E=n(a("kaz8"));a("5NDa");var k=n(a("5rEg"));a("y8nQ");var b=n(a("Vl3Y")),C=l(a("q1tI")),w=n(a("t3Un")),S=n(a("bt/X")),_=n(a("bNQv")),R=a("MuoO");function x(e){var t=D();return function(){var a,l=(0,v.default)(e);if(t){var n=(0,v.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,h.default)(this,a)}}function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var M=b.default.Item,T=(k.default.TextArea,E.default.Group),Y=(y.default.Group,g.default.Option,function(e){(0,m.default)(a,e);var t=x(a);function a(e){var l;return(0,u.default)(this,a),l=t.call(this,e),l.onChange2=function(e,t){var a;console.log(e),console.log(t),l.setState((a={},(0,c.default)(a,t+"CheckedList",e),(0,c.default)(a,t+"Indeterminate",!!e.length&&e.length<l.state[t].length),(0,c.default)(a,t+"CheckAll",e.length===l.state[t].length),a))},l.onCheckAllChange2=function(e,t){var a;l.setState((a={},(0,c.default)(a,t+"CheckedList",e.target.checked?l.state[t].map(function(e,t){return e.value}):[]),(0,c.default)(a,t+"Indeterminate",!1),(0,c.default)(a,t+"CheckAll",e.target.checked),a))},l.renderXheckGroup=function(e){var t=(0,p.default)(l),a={wrapperCol:{xs:{span:24},sm:{offset:3,span:20}}},n=[];return(0,_.default)(e,function(e,l){n.push(C.default.createElement(M,(0,i.default)({className:"custom-checkgroup",key:l},a),C.default.createElement("div",{className:"checkgroup-title"},C.default.createElement(E.default,{indeterminate:t.state[l+"Indeterminate"],onChange:function(e){return t.onCheckAllChange2(e,l)},checked:t.state[l+"CheckAll"]},t.groupMap[l])),C.default.createElement(T,{options:t.state[l],value:t.state[l+"CheckedList"],onChange:function(e){return t.onChange2(e,l)}})))}),n},l.handleSubmit2=function(e){e.preventDefault();var t=(0,p.default)(l),a=l.props.editRecord&&l.props.editRecord.id;l.props.form.validateFields({force:!0},function(e,n){if(!e){console.log(n);var r=l.props.editRecord?"roles/edit":"roles/add",i=l.props.editRecord?"\u4fee\u6539\u89d2\u8272\u6210\u529f":"\u6dfb\u52a0\u89d2\u8272\u6210\u529f",c=[];(0,_.default)(t.state.group,function(e,a){c.push.apply(c,(0,d.default)(t.state[a+"CheckedList"]))});var u=l.props.editRecord?(0,s.default)({id:a,permission_ids:c},n):(0,s.default)({permission_ids:c},n);l.props.dispatch({type:r,payload:u,callback:function(){o.default.success(i),t.props.onSave()}})}})},l.groupMap={meter_reading:"\u6c34\u8868\u8fdc\u4f20\u7cfb\u7edf",revenue:"\u8425\u6536\u7cfb\u7edf",user:"\u5458\u5de5\u89d2\u8272\u7cfb\u7edf",pressure_monitoring:"\u667a\u6167\u7ba1\u7f51",wechat:"\u5fae\u4fe1\u516c\u4f17\u53f7"},l.state={group:{}},l}return(0,f.default)(a,[{key:"componentDidMount",value:function(){var e=this,t=this;(0,w.default)("/all_permissions",{method:"GET"}).then(function(a){if(console.log("all_permissions",a),200===a.status){var l=(0,S.default)(a.data.data,"group");console.log("group",l),(0,_.default)(l,function(e,a){var l;t.setState((0,c.default)({},a,e.reduce(function(e,t){return t.label=t.display_name,t.value=t.id,e.push({label:t.display_name,value:t.id}),e},[]))),t.setState((l={},(0,c.default)(l,a+"CheckedList",[]),(0,c.default)(l,a+"Indeterminate",!1),(0,c.default)(l,a+"CheckAll",!1),l))}),t.setState({group:l},function(){if(this.props.editRecord){console.log("\u4fee\u6539\u89d2\u8272");var e=t.props.editRecord.permissions,a=(0,S.default)(e,"group");(0,_.default)(a,function(e,a){t.setState((0,c.default)({},a+"CheckedList",e.reduce(function(e,t){return e.push(t.id),e},[])),function(){var e;t.setState((e={},(0,c.default)(e,a+"Indeterminate",!!this.state[a+"CheckedList"].length&&this.state[a+"CheckedList"].length<this.state[a].length),(0,c.default)(e,a+"CheckAll",this.state[a+"CheckedList"].length===this.state[a].length),e))})})}}),console.log(e.state)}})}},{key:"render",value:function(){var e={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:15}}},t=this.props.form.getFieldDecorator;return C.default.createElement("div",null,C.default.createElement(b.default,{onSubmit:this.handleSubmit},C.default.createElement("h2",{style:{textAlign:"center"}},"\u57fa\u672c\u4fe1\u606f"),C.default.createElement(M,(0,i.default)({},e,{label:C.default.createElement("span",null,"\u89d2\u8272\u540d\u79f0")}),t("name",{initialValue:this.props.editRecord?this.props.editRecord.name:"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540d\u79f0"}]})(C.default.createElement(k.default,{disabled:Boolean(this.props.editRecord)&&"\u8d85\u7ea7\u7ba1\u7406\u5458"===this.props.editRecord.name}))),C.default.createElement(M,(0,i.default)({},e,{label:C.default.createElement("span",null,"\u63cf\u8ff0")}),t("description",{initialValue:this.props.editRecord?this.props.editRecord.description:""})(C.default.createElement(k.default,null))),C.default.createElement("h2",{style:{textAlign:"center"}},"\u6743\u9650\u4fe1\u606f"),this.renderXheckGroup(this.state.group)),C.default.createElement("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},C.default.createElement(r.default,{onClick:this.props.onClose,style:{marginRight:8}},"\u53d6\u6d88"),C.default.createElement(r.default,{onClick:this.handleSubmit2,type:"primary"},"\u786e\u5b9a")))}}]),a}(C.Component)),P=b.default.create()(Y),L=(0,R.connect)()(P);t.default=L},Jxbn:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var r=l(a("wCAj"));a("+BJd");var o=l(a("mr32"));a("R9oj");var s=l(a("ECub"));a("+L6B");var d=l(a("2/Rp"));a("iQDF");var i=l(a("+eQT"));a("Pwec");var c=l(a("CtXQ")),u=l(a("p0pE")),f=l(a("2Taf")),p=l(a("vZ4D")),m=l(a("rlhR")),h=l(a("MhPg")),v=l(a("l4Ni")),g=l(a("ujKo"));a("7Kak");var y=l(a("9yH6"));a("Znn+");var E=l(a("ZTPi"));a("2qtc");var k=l(a("kLXV"));a("y8nQ");var b,C,w,S,_=l(a("Vl3Y")),R=n(a("q1tI")),x=l(a("wd/R")),D=a("MuoO"),M=l(a("eKz+")),T=l(a("J2m7")),Y=a("+n12"),P=l(a("t3Un"));function L(e){var t=N();return function(){var a,l=(0,g.default)(e);if(t){var n=(0,g.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,v.default)(this,a)}}function N(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var I=_.default.Item,F=k.default.confirm,A=E.default.TabPane,B=y.default.Button,H=y.default.Group,z=(b=(0,D.connect)(function(e){var t=e.devices,a=e.loading;return{devices:t,loading:a.models.devices}}),C=_.default.create(),b(w=C((S=function(e){(0,h.default)(a,e);var t=L(a);function a(e){var l;return(0,f.default)(this,a),l=t.call(this,e),l.scroll=function(e){var t=l.props.dispatch;t({type:"devices/changeScroll",payload:{x:e.target.scrollLeft,y:e.target.scrollTop}})},l.resize=function(){l.changeTableY()},l.changeTableY=function(){console.log("change tableY"),l.setState({tableY:l.state.tabBoxHeight-150})},l.handleSearch=function(e,t){console.log("handleSearch",e);(0,m.default)(l);var a=l.props.dispatch;a({type:"devices/fetchDetail",payload:(0,u.default)({},e),callback:function(){console.log("handleSearch callback"),t&&t()}})},l.handleFormReset=function(){var e=l.props.form;e.resetFields(),l.handleSearch({started_at:(0,x.default)((new Date).getFullYear()+"-"+(parseInt((new Date).getMonth())+1)+"-01","YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss"),ended_at:(0,Y.todayLastSecond)(),status:"0",page:1,per_page:20})},l.commonCommand=function(e){console.log("type",e);(0,m.default)(l);var t=l.props.devices.detail,a=l.props.dispatch;(0,P.default)("/devices/".concat(t.detailId,"/").concat(e),{method:"POST"}).then(function(e){200===e.status&&(console.log("\u64cd\u4f5c\u6210\u529f"),e.data.task_id&&a({type:"global/changeTaskId",payload:e.data.task_id}),window.modal=k.default.success({content:"\u64cd\u4f5c\u6210\u529f,\u6b63\u5728\u4e0b\u53d1\u6307\u4ee4...",icon:R.default.createElement(c.default,{type:"sync",spin:!0}),centered:!0,className:"hideCancel",onCancel:function(){return null}}))})},l.permissions=JSON.parse(sessionStorage.getItem("permissions")),l.state={showAddBtn:(0,T.default)(l.permissions,{name:"device_add_and_edit"}),showdelBtn:(0,T.default)(l.permissions,{name:"device_delete"}),showPasswordBtn:(0,T.default)(l.permissions,{name:"user_default_password_edit"}),user_password_reset:(0,T.default)(l.permissions,{name:"user_password_reset"}),visible:!1,done:!1,page:1,per_page:30,username:"",editRecord:{},selectedRowKeys:[],tabBoxHeight:0},l}return(0,p.default)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.dispatch,a=this.props.devices.detail;console.log("detail.pageLoaded",a.pageLoaded);document.querySelector(".ant-table-body");a.pageLoaded?setTimeout(function(){},0):t({type:"devices/fetchDetail",callback:function(){var t=e.props.dispatch;t({type:"devices/changeDetailLoaded"})}}),this.setState({tabBoxHeight:document.querySelector(".custom-card").getBoundingClientRect().bottom-202},function(){this.changeTableY()}),window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount"),window.removeEventListener("resize",this.resize)}},{key:"renderSimpleForm",value:function(){var e=this,t=this.props,a=t.form.getFieldDecorator,l=t.devices.detail.searchParams2;return R.default.createElement(_.default,{layout:"inline",className:"search-form"},R.default.createElement(I,{label:"\u72b6\u6001"},a("status",{initialValue:l.status})(R.default.createElement(H,null,R.default.createElement(B,{value:"0"},"\u5168\u90e8"),R.default.createElement(B,{value:"1"},"\u4e0a\u7ebf"),R.default.createElement(B,{value:"-1"},"\u4e0b\u7ebf")))),R.default.createElement(I,{label:"\u5f00\u59cb\u65f6\u95f4"},a("started_at",{initialValue:(0,x.default)(l.started_at)})(R.default.createElement(i.default,{showTime:!0,style:{width:"120px"},allowClear:!1,format:"YYYY-MM-DD HH:mm:ss"}))),R.default.createElement(I,{label:"\u7ed3\u675f\u65f6\u95f4"},a("ended_at",{initialValue:(0,x.default)(l.ended_at)})(R.default.createElement(i.default,{showTime:!0,style:{width:"120px"},allowClear:!1,format:"YYYY-MM-DD HH:mm:ss"}))),R.default.createElement(I,null,R.default.createElement(d.default,{type:"primary",icon:"search",onClick:function(){var t=e.props.form;t.validateFields(function(t,a){t||e.handleSearch((0,u.default)({page:1,per_page:l.per_page},a,{started_at:(0,x.default)(a.started_at).format("YYYY-MM-DD HH:mm:ss"),ended_at:(0,x.default)(a.ended_at).format("YYYY-MM-DD HH:mm:ss")}))})}},"\u67e5\u8be2"),R.default.createElement(d.default,{style:{marginLeft:8},icon:"redo",onClick:this.handleFormReset},"\u91cd\u7f6e")))}},{key:"render",value:function(){var e=this,t=this;console.log(this.state.tableY);var a=this.props.devices,l=a.detail,n=a.loading,i=[{title:"\u521b\u5efa\u65f6\u95f4",width:200,dataIndex:"created_at",render:function(e,t){return(0,Y.ellipsis)(e,200)}},{title:"\u72b6\u6001",dataIndex:"status",render:function(e){var t="",a="",l="";switch(e){case-1:t="close-circle",a="#eb2f96",l="\u4e0b\u7ebf";break;case 1:t="check-circle",a="#52c41a",l="\u4e0a\u7ebf";break;default:break}return R.default.createElement(R.Fragment,null," ",R.default.createElement(c.default,{type:t,theme:"twoTone",className:"table-icon",twoToneColor:a}),l)}}];return R.default.createElement("div",{className:"custom-card"},R.default.createElement("div",{className:"table-title"},R.default.createElement("span",{className:"click-tag",onClick:function(){console.log("click");var t=e.props.dispatch;t({type:"devices/changeIsDetail",payload:{id:""}}),t({type:"devices/resetDetail",payload:!1})}},"\u8bbe\u5907\u5217\u8868")," > ",l.detailId),R.default.createElement("div",{style:{padding:"0"},className:"table-page"},R.default.createElement(E.default,{className:"detail-tab",activeKey:l.activeKey,onChange:function(a){console.log("e",a);var l=e.props.dispatch;l({type:"devices/changeDetailActive",payload:a,callback:function(){"2"===a&&t.changeTableY()}})}},R.default.createElement(A,{tab:"\u8bbe\u5907\u8d44\u6e90\u5217\u8868",key:"1",forceRender:!0},0===l.data1.length&&R.default.createElement(s.default,{image:s.default.PRESENTED_IMAGE_SIMPLE,style:{marginTop:"35px"}}),l.data1.map(function(e,t){return R.default.createElement("div",{key:t,className:styles.objItem},R.default.createElement("h2",null,"\u5bf9\u8c61ID : ",e.object_id),e.instances.map(function(e,t){return R.default.createElement("div",{key:t},R.default.createElement("h3",null,"\u5b9e\u4f8bID : ",e.instance_id),R.default.createElement("h3",{style:{display:"inline-block"}},"\u8d44\u6e90ID\u5217\u8868 : "),e.resources.map(function(e,t){return R.default.createElement(o.default,{style:{fontSize:"16px",margin:"0 5px 0 0"},color:"geekblue",key:t},e)}))}))})),R.default.createElement(A,{tab:"\u4e0a\u4e0b\u7ebf\u65e5\u5fd7\u5217\u8868",key:"2",forceRender:!0},R.default.createElement("div",{style:{padding:"15px",height:this.state.tabBoxHeight+"px"}},R.default.createElement("div",{className:"table-condition"},this.renderSimpleForm()),R.default.createElement(r.default,{style:{color:"#fff"},className:"custom-small-table",loading:n,rowKey:"id",dataSource:l.data2,columns:i,pagination:!1,size:"small",scroll:{x:!0,y:this.state.tableY}}),R.default.createElement("div",{className:"table-pagination"},R.default.createElement(M.default,{searchCondition:(0,u.default)({},l.searchParams2),meta:l.meta2,handleSearch:this.handleSearch})))),R.default.createElement(A,{tab:"\u8bbe\u5907\u64cd\u4f5c",key:"3",forceRender:!0},R.default.createElement("div",{style:{padding:"15px",height:this.state.tabBoxHeight+"px"}},R.default.createElement(_.default.Item,{style:{marginBottom:"10px"}},R.default.createElement(d.default,{type:"primary",onClick:function(){F({title:"\u786e\u5b9a\u8981\u91cd\u542f\u5417?",okText:"\u786e\u5b9a",centered:!0,maskClosable:!0,okType:"primary",cancelText:"\u53d6\u6d88",onOk:function(){t.commonCommand("reboot")}})}},"\u91cd\u542f\u8bbe\u5907")),R.default.createElement(_.default.Item,null,R.default.createElement(d.default,{style:{marginRight:"10px"},type:"primary",onClick:function(){F({title:"\u786e\u5b9a\u8981\u5f00\u9600\u5417?",okText:"\u786e\u5b9a",centered:!0,maskClosable:!0,okType:"primary",cancelText:"\u53d6\u6d88",onOk:function(){t.commonCommand("open_valve")}})}},"\u8bbe\u5907\u5f00\u9600"),R.default.createElement(d.default,{type:"danger",onClick:function(){F({title:"\u786e\u5b9a\u8981\u5173\u9600\u5417?",okText:"\u786e\u5b9a",centered:!0,maskClosable:!0,okType:"primary",cancelText:"\u53d6\u6d88",onOk:function(){t.commonCommand("close_valve")}})}},"\u8bbe\u5907\u5173\u9600")))))))}}]),a}(R.PureComponent),w=S))||w)||w),O=z;t.default=O},WeJ2:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,s=l(a("2Taf")),d=l(a("vZ4D")),i=l(a("MhPg")),c=l(a("l4Ni")),u=l(a("ujKo")),f=n(a("q1tI")),p=l(a("Jxbn")),m=l(a("qxxi")),h=a("MuoO");function v(e){var t=g();return function(){var a,l=(0,u.default)(e);if(t){var n=(0,u.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,c.default)(this,a)}}function g(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var y=(r=(0,h.connect)(function(e){var t=e.meters,a=e.loading;return{meters:t,loading:a.models.meters}}),r(o=function(e){(0,i.default)(a,e);var t=v(a);function a(e){var l;return(0,s.default)(this,a),l=t.call(this,e),l.permissions=JSON.parse(sessionStorage.getItem("permissions")),l.state={},l}return(0,d.default)(a,[{key:"render",value:function(){var e=this.props.meters.detail;return f.default.createElement(f.Fragment,null,e.isDetail?f.default.createElement(p.default,null):f.default.createElement(m.default,null))}}]),a}(f.PureComponent))||o),E=y;t.default=E},qxxi:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var r=l(a("/wGt"));a("+L6B");var o=l(a("2/Rp"));a("5NDa");var s=l(a("5rEg"));a("miYZ");var d=l(a("tsqr")),i=l(a("p0pE")),c=l(a("2Taf")),u=l(a("vZ4D")),f=l(a("rlhR")),p=l(a("MhPg")),m=l(a("l4Ni")),h=l(a("ujKo"));a("7Kak");var v=l(a("9yH6"));a("2qtc");var g=l(a("kLXV"));a("y8nQ");var y,E,k,b,C=l(a("Vl3Y")),w=n(a("q1tI")),S=(l(a("wd/R")),a("MuoO")),_=l(a("eKz+")),R=l(a("5DSb")),x=l(a("J2m7")),D=l(a("sEfC")),M=(a("+n12"),a("7DNP"),l(a("d+0U")),l(a("8qsu"))),T=l(a("Emxu"));function Y(e){var t=P();return function(){var a,l=(0,h.default)(e);if(t){var n=(0,h.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,m.default)(this,a)}}function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var L=C.default.Item,N=g.default.confirm,I=(v.default.Button,v.default.Group,y=(0,S.connect)(function(e){var t=e.roles,a=e.loading,l=e.global;return{roles:t,global:l,loading:a.models.staffs}}),E=C.default.create(),y(k=E((b=function(e){(0,p.default)(a,e);var t=Y(a);function a(e){var l;return(0,c.default)(this,a),l=t.call(this,e),l.scroll=function(e){console.log("scroll");var t=l.props.dispatch;t({type:"roles/changeScroll",payload:{x:e.target.scrollLeft,y:e.target.scrollTop}})},l.resize=function(){var e=l.props.dispatch;e({type:"roles/changeTableY"})},l.findChildFunc=function(e){l.file=e},l.handleSearch=function(e,t){console.log("handleSearch",e);(0,f.default)(l);var a=l.props.dispatch;a({type:"roles/fetch",payload:(0,i.default)({},e),callback:function(){console.log("handleSearch callback"),t&&t()}})},l.handleAdd=function(){var e=l.AddForm.props.form.getFieldsValue();console.log("formValues",e);var t=(0,f.default)(l);l.props.dispatch({type:"roles/add",payload:(0,i.default)({},e),callback:function(){d.default.success("\u6dfb\u52a0\u89d2\u8272\u6210\u529f"),t.setState({addModal:!1});var e=t.props.roles.searchParams;t.handleSearch(e)}})},l.handleFormReset=function(){var e=l.props.form;e.resetFields(),l.handleSearch({name:"",page:1,per_page:30})},l.handleEdit=function(){var e=l.EditForm.props.form.getFieldsValue();console.log("formValues",e);var t=(0,f.default)(l);l.props.dispatch({type:"roles/edit",payload:(0,i.default)({},e,{id:l.state.editRecord.id}),callback:function(){d.default.success("\u4fee\u6539\u89d2\u8272\u6210\u529f"),t.setState({editModal:!1});var e=t.props.roles.searchParams;t.handleSearch(e)}})},l.handleDelete=function(e){var t=(0,f.default)(l),a=l.props.dispatch;a({type:"roles/remove",payload:{id:e},callback:function(){d.default.success("\u5220\u9664\u89d2\u8272\u6210\u529f");var e=t.props.roles.searchParams;t.handleSearch(e)}})},l.permissions=JSON.parse(sessionStorage.getItem("permissions")),l.state={showAddBtn:(0,x.default)(l.permissions,{name:"device_add_and_edit"}),showdelBtn:(0,x.default)(l.permissions,{name:"device_delete"}),showPasswordBtn:(0,x.default)(l.permissions,{name:"user_default_password_edit"}),user_password_reset:(0,x.default)(l.permissions,{name:"user_password_reset"}),visible:!1,done:!1,page:1,per_page:30,username:"",editRecord:{},selectedRowKeys:[]},l}return(0,u.default)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.dispatch,a=this.props.roles,l=a.pageLoaded,n=a.scrollData;console.log("pageLoaded",l);var r=document.querySelector(".react-grid-Canvas");if(l)setTimeout(function(){r.scrollTop=n.y,r.scrollLeft=n.x},0);else{var o=this.props.roles.searchParams;console.log("searchParams",o),t({type:"roles/fetch",payload:o,callback:function(){var t=e.props.dispatch;t({type:"roles/changeLoaded"}),t({type:"roles/changeTableY"})}})}window.addEventListener("resize",this.resize),r.addEventListener("scroll",(0,D.default)(this.scroll,150))}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount"),window.removeEventListener("resize",this.resize);var e=document.querySelector(".react-grid-Canvas");e.removeEventListener("scroll",(0,D.default)(this.scroll,300))}},{key:"renderSimpleForm",value:function(){var e=this,t=this.props,a=t.form.getFieldDecorator,l=t.roles.searchParams;return w.default.createElement(C.default,{layout:"inline",className:"search-form"},w.default.createElement(L,{label:"\u89d2\u8272\u540d\u79f0"},a("name",{initialValue:l.name})(w.default.createElement(s.default,{style:{width:"150px"},placeholder:"\u8bf7\u8f93\u5165"}))),w.default.createElement(L,null,w.default.createElement(o.default,{type:"primary",icon:"search",onClick:function(){var t=e.props.form;t.validateFields(function(t,a){t||e.handleSearch((0,i.default)({page:1,per_page:l.per_page},a))})}},"\u67e5\u8be2"),w.default.createElement(o.default,{style:{marginLeft:8},icon:"redo",onClick:this.handleFormReset},"\u91cd\u7f6e"),(0,x.default)(this.permissions,{name:"user_and_role_operation"})&&w.default.createElement(o.default,{icon:"plus",style:{marginLeft:8},type:"primary",onClick:function(){e.setState({addModal:!0})}},"\u6dfb\u52a0\u89d2\u8272")))}},{key:"render",value:function(){for(var e=this,t=this,a=this.props,l=a.roles,n=l.data,s=l.loading,d=l.tableY,c=l.meta,u=l.searchParams,f=l.selectedRowKeys,p=a.global.gridTableW,m={resizable:!0},h=[{name:"\u5e8f\u53f7",width:50,key:"_index",frozen:!0,formatter:function(t){var a=e.props.roles.meta;return w.default.createElement("p",{className:"index"},(a.current_page-1)*a.per_page+(t.value+1))}},{name:"\u89d2\u8272\u540d\u79f0",width:150,key:"name"},{name:"\u63cf\u8ff0",width:200,key:"description"},{name:"\u521b\u5efa\u65f6\u95f4",width:200,key:"created_at"},{name:"\u64cd\u4f5c",width:100,key:"right",classname:"operate",formatter:function(a){return w.default.createElement(w.Fragment,null,(0,x.default)(e.permissions,{name:"user_and_role_operation"})&&w.default.createElement(w.Fragment,null,w.default.createElement(o.default,{type:"primary",size:"small",icon:"edit",onClick:function(t){t.stopPropagation(),e.setState({editRecord:a.row,editModal:!0})}},"\u7f16\u8f91"),w.default.createElement(o.default,{type:"danger",size:"small",icon:"delete",onClick:function(e){e.stopPropagation(),N({title:'\u786e\u5b9a\u8981\u5220\u9664"'.concat(a.row.name,'"\u5417?'),content:"\u8bf7\u8c28\u614e\u64cd\u4f5c\uff01",okText:"\u786e\u5b9a",okType:"danger",cancelText:"\u53d6\u6d88",centered:!0,maskClosable:!0,onOk:function(){t.handleDelete(a.row.id)},onCancel:function(){console.log("Cancel")}})}},"\u5220\u9664")))}}].map(function(e){return(0,i.default)({},m,e)}),v=0,g=0;g<h.length;g++)v+=h[g].width;return v<p&&(h[h.length-1].width=h[h.length-1].width+p-v),w.default.createElement("div",{className:"custom-card"},w.default.createElement("div",{className:"table-title"},w.default.createElement("span",{className:"title-item"},"\u89d2\u8272\u7ba1\u7406")),w.default.createElement("div",{className:"table-page"},w.default.createElement("div",{className:"table-condition"},this.renderSimpleForm()),w.default.createElement("div",{className:"table-data-content"},w.default.createElement(T.default,{columns:h,rowGetter:function(e){return(0,i.default)({},n[e],{_index:e})},rowsCount:n.length,minHeight:d,rowSelection:{showCheckbox:!1,enableShiftSelect:!0,selectBy:{indexes:f}},onRowClick:function(t){e.props.dispatch({type:"roles/changeSelectRow",payload:[t]})}}),s&&w.default.createElement(R.default,null))),w.default.createElement("div",{className:"table-pagination"},w.default.createElement(_.default,{searchCondition:(0,i.default)({},u),meta:c,handleSearch:this.handleSearch})),w.default.createElement(r.default,{title:"\u6dfb\u52a0\u89d2\u8272",placement:"right",onClose:function(){e.setState({addModal:!1,editRecord:{}})},width:700,visible:this.state.addModal},w.default.createElement(M.default,{onClose:function(){e.setState({addModal:!1})},onSave:function(){var a=t.props.roles.searchParams;t.handleSearch(a),e.setState({addModal:!1})},wrappedComponentRef:function(t){return e.AddForm=t}})),w.default.createElement(r.default,{title:"\u4fee\u6539 ".concat(this.state.editRecord.name," "),placement:"right",destroyOnClose:!0,onClose:function(){e.setState({editModal:!1,editRecord:{}})},width:700,visible:this.state.editModal},w.default.createElement(M.default,{onClose:function(){e.setState({editModal:!1,editRecord:{}})},onSave:function(){var a=t.props.roles.searchParams;t.handleSearch(a),e.setState({editModal:!1,editRecord:{}})},editRecord:this.state.editRecord,wrappedComponentRef:function(t){return e.EditForm=t}})))}}]),a}(w.PureComponent),k=b))||k)||k),F=I;t.default=F}}]);