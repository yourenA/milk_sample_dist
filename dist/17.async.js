(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"6CPa":function(e,a,t){"use strict";var n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t("d6i3")),u=n(t("p0pE")),c=t("LfBd"),l=(n(t("wd/R")),t("+n12"),{namespace:"staffs",state:{pageLoaded:!1,tableY:300,data:[],scrollData:{x:0,y:0},selectedRowKeys:[0],searchParams:{username:"",number:"",page:1,per_page:30},meta:{total:0,per_page:30,current_page:1},additional:{total_count:0,online_count:0},loading:!0,editRecord:{},detail:{isDetail:!1}},effects:{changeIsDetail:r.default.mark(function e(a,t){var n,c,l,s,d;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,a.callback,t.call,c=t.put,l=t.select,console.log("changeIsDetail"),e.next=5,l(function(e){return e.staffs});case 5:return s=e.sent,d=s.detail,e.next=9,c({type:"changeDetail",payload:(0,u.default)({},d,{isDetail:!d.isDetail,detailId:n.id})});case 9:case"end":return e.stop()}},e)}),reset:r.default.mark(function e(a,t){var n,u,c;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,u=a.callback,t.call,c=t.put,console.log("reset============="),e.next=5,c({type:"resetData",payload:n});case 5:u&&u();case 6:case"end":return e.stop()}},e)}),changeTableY:r.default.mark(function e(a,t){var n,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a.payload,a.callback,t.call,n=t.put,u=document.querySelector(".table-pagination").getBoundingClientRect().top-document.querySelector(".react-grid-Container").getBoundingClientRect().top-10,e.next=5,n({type:"saveTableY",payload:u});case 5:case"end":return e.stop()}},e)}),changeSearchParams:r.default.mark(function e(a,t){var n,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,a.callback,t.call,u=t.put,console.log("changeSearchParams"),e.next=5,u({type:"saveSearchParams",payload:n});case 5:case"end":return e.stop()}},e)}),changeLoaded:r.default.mark(function e(a,t){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a.payload,a.callback,t.call,n=t.put,e.next=4,n({type:"changePageLoaded",payload:!0});case 4:case"end":return e.stop()}},e)}),changeScroll:r.default.mark(function e(a,t){var n,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,a.callback,t.call,u=t.put,e.next=4,u({type:"changeScrollData",payload:n});case 4:case"end":return e.stop()}},e)}),selectRow:r.default.mark(function e(a,t){var n,u,c,l,s;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,a.callback,t.call,u=t.put,c=t.select,e.next=4,c(function(e){return e.staffs});case 4:return l=e.sent,s=l.selectedRowKeys,s.indexOf(n.id)>=0?s.splice(s.indexOf(n.id),1):s.push(n.id),e.next=9,u({type:"saveSelectRow",payload:s});case 9:case"end":return e.stop()}},e)}),fetch:r.default.mark(function e(a,t){var n,u,l,s,d,o,i;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,u=a.callback,l=t.call,s=t.put,d=t.select,e.next=4,s({type:"changeLoading",payload:!0});case 4:return e.next=6,d(function(e){return e.staffs});case 6:return o=e.sent,n=n||o.searchParams,console.log("payload",n),e.next=11,l(c.query,n);case 11:if(i=e.sent,console.log(i),200!==i.status){e.next=21;break}return e.next=16,s({type:"save",payload:i.data});case 16:return e.next=18,s({type:"saveSearchParams",payload:n});case 18:return e.next=20,s({type:"changeLoading",payload:!1});case 20:u&&u();case 21:case"end":return e.stop()}},e)}),add:r.default.mark(function e(a,t){var n,u,l,s;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,u=a.callback,l=t.call,t.put,e.next=4,l(c.add,n);case 4:s=e.sent,console.log(s),200===s.status&&u&&u();case 7:case"end":return e.stop()}},e)}),resetPassword:r.default.mark(function e(a,t){var n,u,l,s;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,u=a.callback,l=t.call,t.put,e.next=4,l(c.resetPassword,n);case 4:s=e.sent,console.log(s),200===s.status&&u&&u();case 7:case"end":return e.stop()}},e)}),changeStatus:r.default.mark(function e(a,t){var n,u,l,s;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,u=a.callback,l=t.call,t.put,e.next=4,l(c.changeStatus,n);case 4:s=e.sent,console.log(s),200===s.status&&u&&u();case 7:case"end":return e.stop()}},e)}),edit:r.default.mark(function e(a,t){var n,u,l,s;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,u=a.callback,l=t.call,t.put,console.log("edit"),e.next=5,l(c.edit,n);case 5:s=e.sent,console.log(s),200===s.status&&u&&u();case 8:case"end":return e.stop()}},e)}),changeSelectRow:r.default.mark(function e(a,t){var n,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,a.callback,t.call,u=t.put,t.select,e.next=4,u({type:"saveSelectRow",payload:n});case 4:case"end":return e.stop()}},e)}),remove:r.default.mark(function e(a,t){var n,u,l,s;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,u=a.callback,l=t.call,t.put,e.next=4,l(c.remove,n);case 4:s=e.sent,200===s.status&&u&&u();case 6:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return(0,u.default)({},e,{data:a.payload.data,meta:a.payload.meta,additional:a.payload.additional})},saveTableY:function(e,a){return(0,u.default)({},e,{tableY:a.payload})},saveOneRecord:function(e,a){return(0,u.default)({},e,{editRecord:a.payload})},changeLoading:function(e,a){return(0,u.default)({},e,{loading:a.payload})},changePageLoaded:function(e,a){return(0,u.default)({},e,{pageLoaded:a.payload})},changeScrollData:function(e,a){return(0,u.default)({},e,{scrollData:a.payload})},saveSearchParams:function(e,a){return(0,u.default)({},e,{searchParams:(0,u.default)({},e.searchParams,a.payload)})},resetData:function(e,a){return{pageLoaded:a.payload,tableY:e.tableY,data:[],scrollData:{x:0,y:0},selectedRowKeys:[],searchParams:{username:"",number:"",page:1,per_page:30},meta:{total:0,per_page:0,current_page:1},loading:!0,editRecord:{},additional:{total_count:0,online_count:0},detail:{isDetail:!1}}},saveSelectRow:function(e,a){return(0,u.default)({},e,{selectedRowKeys:a.payload})}}});a.default=l},LfBd:function(e,a,t){"use strict";var n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.query=o,a.remove=p,a.add=h,a.edit=y,a.resetPassword=v,a.changeStatus=x,a.editStatus=k;var r=n(t("d6i3")),u=n(t("p0pE")),c=n(t("Y/ft")),l=n(t("jehZ")),s=n(t("1l/V")),d=n(t("t3Un"));function o(e){return i.apply(this,arguments)}function i(){return i=(0,s.default)(r.default.mark(function e(a){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return(0,l.default)({},a),e.abrupt("return",{data:{data:[{id:Math.random()},{id:Math.random()},{id:Math.random()},{id:Math.random()},{id:Math.random()},{id:Math.random()},{id:Math.random()},{id:Math.random()},{id:Math.random()},{id:Math.random()},{id:Math.random()}],meta:{current_page:1,last_page:1,per_page:30,total:11}},status:200});case 3:case"end":return e.stop()}},e)})),i.apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return f=(0,s.default)(r.default.mark(function e(a){var t;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.id,e.abrupt("return",(0,d.default)("/users/".concat(t),{method:"DELETE"}));case 2:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function h(e){return w.apply(this,arguments)}function w(){return w=(0,s.default)(r.default.mark(function e(a){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.default)("/users",{method:"POST",data:(0,u.default)({},a)}));case 1:case"end":return e.stop()}},e)})),w.apply(this,arguments)}function y(e){return m.apply(this,arguments)}function m(){return m=(0,s.default)(r.default.mark(function e(a){var t,n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.id,n=(0,c.default)(a,["id"]),e.abrupt("return",(0,d.default)("/users/".concat(t),{method:"PUT",data:(0,u.default)({},n)}));case 2:case"end":return e.stop()}},e)})),m.apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return g=(0,s.default)(r.default.mark(function e(a){var t;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.id,(0,c.default)(a,["id"]),e.abrupt("return",(0,d.default)("/users/".concat(t,"/password"),{method:"PUT"}));case 2:case"end":return e.stop()}},e)})),g.apply(this,arguments)}function x(e){return b.apply(this,arguments)}function b(){return b=(0,s.default)(r.default.mark(function e(a){var t,n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.id,n=(0,c.default)(a,["id"]),e.abrupt("return",(0,d.default)("/users/".concat(t,"/status"),{method:"PUT",data:(0,u.default)({},n)}));case 2:case"end":return e.stop()}},e)})),b.apply(this,arguments)}function k(e){return P.apply(this,arguments)}function P(){return P=(0,s.default)(r.default.mark(function e(a){var t,n,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.data,n=t.id,u=t.status,console.log("id",n),e.abrupt("return",(0,d.default)("/users/".concat(n,"/status"),{method:"PUT",data:{status:u}}));case 3:case"end":return e.stop()}},e)})),P.apply(this,arguments)}}}]);