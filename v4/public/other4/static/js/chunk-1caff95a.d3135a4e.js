(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1caff95a"],{"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("d039"),o=n("e8b5"),i=n("861d"),d=n("7b0b"),l=n("07fa"),c=n("3511"),s=n("8418"),u=n("65f0"),p=n("1dde"),f=n("b622"),h=n("2d00"),m=f("isConcatSpreadable"),g=h>=51||!a((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),v=p("concat"),b=function(e){if(!i(e))return!1;var t=e[m];return void 0!==t?!!t:o(e)},x=!g||!v;r({target:"Array",proto:!0,arity:1,forced:x},{concat:function(e){var t,n,r,a,o,i=d(this),p=u(i,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?i:arguments[t],b(o))for(a=l(o),c(f+a),n=0;n<a;n++,f++)n in o&&s(p,f,o[n]);else c(f+1),s(p,f++,o);return p.length=f,p}})},c7eb:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("14d9"),n("159b"),n("b0c0"),n("fb6a");var r=n("53ca");function a(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
a=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},d=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(N){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),d=new j(r||[]);return o(i,"_invoke",{value:k(e,n,d)}),i}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var f={};function h(){}function m(){}function g(){}var v={};s(v,d,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(S([])));x&&x!==t&&n.call(x,d)&&(v=x);var w=g.prototype=h.prototype=Object.create(v);function R(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){function a(o,i,d,l){var c=p(e[o],e,i);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==Object(r["a"])(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){a("next",e,d,l)}),(function(e){a("throw",e,d,l)})):t.resolve(u).then((function(e){s.value=e,d(s)}),(function(e){return a("throw",e,d,l)}))}l(c.arg)}var i;o(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){a(e,n,t,r)}))}return i=i?i.then(r,r):r()}})}function k(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return C()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var d=O(i,n);if(d){if(d===f)continue;return d}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=p(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function O(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator["return"]&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=p(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function S(e){if(e){var t=e[d];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return m.prototype=g,o(w,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=s(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},R(y.prototype),s(y.prototype,l,(function(){return this})),e.AsyncIterator=y,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new y(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},R(w),s(w,c,"Generator"),s(w,d,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var d=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(d&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(d){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;A(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}},ce3a:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=Object(r["createElementVNode"])("p",{class:"tip"},[Object(r["createTextVNode"])(" 具体兼容请查看 "),Object(r["createElementVNode"])("a",{class:"link",href:"https://github.com/x-extends/vxe-table-plugin-antd",target:"_blank"},"vxe-table-plugin-antd"),Object(r["createTextVNode"])(" 插件的 API"),Object(r["createElementVNode"])("br"),Object(r["createElementVNode"])("span",{class:"red"},"（注：该示例仅供参考，具体逻辑请自行实现）")],-1),o={class:"demo-code"};function i(e,t,n,i,d,l){var c=Object(r["resolveComponent"])("a-alert"),s=Object(r["resolveComponent"])("el-button"),u=Object(r["resolveComponent"])("vxe-grid"),p=Object(r["resolveComponent"])("pre-code");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[a,Object(r["createVNode"])(u,Object(r["mergeProps"])({ref:"xGrid"},e.gridOptions,Object(r["toHandlers"])(e.gridEvents)),{top:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(c,{type:"warning",message:"已选择 ".concat(e.demo1.selectRecords.length," 项"),banner:""},null,8,["message"])]})),toolbar_buttons:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,{onClick:e.insertEvent},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])("新增")]})),_:1},8,["onClick"]),Object(r["createVNode"])(s,{onClick:e.saveEvent},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])("保存")]})),_:1},8,["onClick"])]})),_:1},16),Object(r["createElementVNode"])("p",o,Object(r["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(r["createElementVNode"])("pre",null,[Object(r["createTextVNode"])("      "),Object(r["createVNode"])(p,{class:"xml"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.demoCodes[0]),1)]})),_:1}),Object(r["createTextVNode"])("\n      "),Object(r["createVNode"])(p,{class:"typescript"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.demoCodes[1]),1)]})),_:1}),Object(r["createTextVNode"])("\n    ")])])}var d=n("c7eb"),l=n("1da1"),c=(n("4de4"),n("d3b7"),n("99af"),n("ed3b")),s=Object(r["defineComponent"])({setup:function(){var e=Object(r["ref"])({}),t=[{value:"Designer"},{value:"Develop"},{value:"Test"},{value:"PM"}],n=Object(r["reactive"])({selectRecords:[]}),a=Object(r["reactive"])({border:!0,showOverflow:!0,keepSource:!0,height:460,loading:!1,data:[],toolbarConfig:{slots:{buttons:"toolbar_buttons"}},editConfig:{trigger:"click",mode:"row"},columns:[{type:"checkbox",width:60},{type:"seq",title:"Number",width:80},{field:"name",title:"AInput",minWidth:140,editRender:{name:"AInput"}},{field:"role",title:"AAutoComplete",width:160,editRender:{name:"AAutoComplete",props:{options:[]},events:{search:function(e,n){var r=t.filter((function(e){return-1!==e.value.toUpperCase().indexOf((n||"").toUpperCase())}));if(a.columns){var o=a.columns[3];o.editRender&&o.editRender.props&&(o.editRender.props.options=r)}}}}},{field:"age",title:"AInputNumber",width:160,editRender:{name:"AInputNumber",props:{max:99,min:18}}},{field:"sex",title:"ASelect",width:140,editRender:{name:"ASelect",options:[]}},{field:"sex1",title:"ASelect（不建议放在单元格）",width:260,editRender:{name:"ASelect",options:[],props:{mode:"multiple"}}},{field:"sex2",title:"ASelect",width:140,editRender:{name:"ASelect",optionGroups:[]}},{field:"region",title:"ACascader",width:200,editRender:{name:"ACascader",props:{options:[]}}},{field:"date1",title:"ADatePicker",width:140,editRender:{name:"ADatePicker",props:{type:"date",format:"YYYY/MM/DD"}}},{field:"date2",title:"AMonthPicker",width:140,editRender:{name:"AMonthPicker"}},{field:"date3",title:"AWeekPicker",width:140,editRender:{name:"AWeekPicker"}},{field:"date4",title:"ARangePicker",width:260,editRender:{name:"ARangePicker"}},{field:"date5",title:"ATimePicker",width:140,editRender:{name:"ATimePicker"}},{field:"tree1",title:"ATreeSelect",width:140,editRender:{name:"ATreeSelect",props:{treeData:[]}}},{field:"tree2",title:"ATreeSelect（不建议放在单元格）",width:300,editRender:{name:"ATreeSelect",props:{treeData:[],treeCheckable:!0}}},{field:"flag",title:"ASwitch",width:100,cellRender:{name:"ASwitch"}},{field:"rate",title:"ARate",width:200,cellRender:{name:"ARate"}}]}),o={checkboxAll:function(){var t=e.value;n.selectRecords=t.getCheckboxRecords()},checkboxChange:function(){var t=e.value;n.selectRecords=t.getCheckboxRecords()}},i=function(){var e=[{label:"男",value:"1"},{label:"女",value:"0"}];if(a.columns){var t=a.columns[5];t.editRender&&(t.editRender.options=e);var n=a.columns[6];n.editRender&&(n.editRender.options=e)}},s=function(){var e=[{label:"北京",value:1,children:[{value:3,label:"东城区"},{value:4,label:"西城区"}]},{label:"上海",value:21,children:[{value:23,label:"黄浦区"},{value:24,label:"卢湾区"}]},{label:"广东",value:42,children:[{value:43,label:"广州市"},{value:67,label:"深圳市"}]}];if(a.columns){var t=a.columns[8];t.editRender&&t.editRender.props&&(t.editRender.props.options=e)}},u=function(){var e=[{label:"分组1",options:[{label:"男",value:"1"}]},{label:"分组2",options:[{label:"女",value:"0"}]}];if(a.columns){var t=a.columns[7];t.editRender&&(t.editRender.optionGroups=e)}},p=function(){var e=[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-0",key:"0-0-0"}]},{title:"Node2",value:"0-1",key:"0-1",children:[{title:"Child Node3",value:"0-1-0",key:"0-1-0",disabled:!0},{title:"Child Node4",value:"0-1-1",key:"0-1-1"},{title:"Child Node5",value:"0-1-2",key:"0-1-2"}]}];if(a.columns){var t=a.columns[14];t.editRender&&t.editRender.props&&(t.editRender.props.treeData=e);var n=a.columns[15];n.editRender&&n.editRender.props&&(n.editRender.props.treeData=e)}},f=function(){var t=Object(l["a"])(Object(d["a"])().mark((function t(){var n,r,a,o;return Object(d["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.value,r={role:"",age:18,sex1:[],region:[],flag:!1,rate:2},t.next=4,n.insert(r);case 4:a=t.sent,o=a.row,n.setEditRow(o);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=e.value,n=t.getRecordset(),r=n.insertRecords,a=n.removeRecords,o=n.updateRecords;r.length||a.length||o.length?c["a"].success({content:"insertRecords=".concat(r.length,"; removeRecords=").concat(a.length,"; updateRecords=").concat(o.length)}):c["a"].warn({content:"数据未改动！"})};return i(),s(),u(),p(),a.loading=!0,setTimeout((function(){a.data=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex1:[],region:[],age:28,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:5,rate1:59,flag:!1,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"1",sex1:[],region:[],age:22,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:22,flag:!1,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"0",sex1:[],region:[],age:32,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:12,flag:!1,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"0",sex1:["1","0"],region:[],age:23,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:33,rate1:4,flag:!0,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",sex1:["1","0"],region:[],age:30,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:0,rate1:15,flag:!0,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"0",sex1:[],region:[],age:21,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:73,flag:!1,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"1",sex1:["1"],region:[],age:29,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:0,rate1:0,flag:!0,address:"Guangzhou"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"1",sex1:[],region:[],age:35,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:14,flag:!1,address:"Shenzhen"},{id:10009,name:"Test9",nickname:"T9",role:"Test",sex:"1",sex1:["0"],region:[],age:24,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:52,flag:!1,address:"Shenzhen"},{id:100010,name:"Test10",nickname:"T10",role:"Develop",sex:"1",sex1:[],region:[],age:20,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:4,rate1:83,flag:!1,address:"Guangzhou"}],a.loading=!1}),500),{xGrid:e,demo1:n,gridOptions:a,gridEvents:o,insertEvent:f,saveEvent:h,demoCodes:['\n        <vxe-grid ref="xGrid" v-bind="gridOptions" v-on="gridEvents">\n          <template #top>\n            <a-alert type="warning" :message="`已选择 ${demo1.selectRecords.length} 项`" banner></a-alert>\n          </template>\n          <template #toolbar_buttons>\n            <el-button @click="insertEvent">新增</el-button>\n            <el-button @click="saveEvent">保存</el-button>\n          </template>\n        </vxe-grid>\n        ',"\n        import { defineComponent, reactive, ref } from 'vue'\n        import { Modal } from 'ant-design-vue'\n        import { VxeGridInstance, VxeGridProps, VxeGridListeners } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const xGrid = ref({} as VxeGridInstance)\n\n            const restaurants = [\n              { value: 'Designer' },\n              { value: 'Develop' },\n              { value: 'Test' },\n              { value: 'PM' }\n            ]\n\n            const demo1 = reactive({\n              selectRecords: [] as any[]\n            })\n\n            const gridOptions = reactive({\n              border: true,\n              showOverflow: true,\n              keepSource: true,\n              height: 460,\n              loading: false,\n              data: [],\n              toolbarConfig: {\n                slots: {\n                  buttons: 'toolbar_buttons'\n                }\n              },\n              editConfig: {\n                trigger: 'click',\n                mode: 'row'\n              },\n              columns: [\n                { type: 'checkbox', width: 60 },\n                { type: 'seq', title: 'Number', width: 80 },\n                { field: 'name', title: 'AInput', minWidth: 140, editRender: { name: 'AInput' } },\n                {\n                  field: 'role',\n                  title: 'AAutoComplete',\n                  width: 160,\n                  editRender: {\n                    name: 'AAutoComplete',\n                    props: { options: [] },\n                    events: {\n                      search (params, value) {\n                        const options = restaurants.filter(option => option.value.toUpperCase().indexOf((value || '').toUpperCase()) !== -1)\n                        if (gridOptions.columns) {\n                          const column3 = gridOptions.columns[3]\n                          if (column3.editRender && column3.editRender.props) {\n                            column3.editRender.props.options = options\n                          }\n                        }\n                      }\n                    }\n                  }\n                },\n                { field: 'age', title: 'AInputNumber', width: 160, editRender: { name: 'AInputNumber', props: { max: 99, min: 18 } } },\n                { field: 'sex', title: 'ASelect', width: 140, editRender: { name: 'ASelect', options: [] } },\n                { field: 'sex1', title: 'ASelect（不建议放在单元格）', width: 260, editRender: { name: 'ASelect', options: [], props: { mode: 'multiple' } } },\n                { field: 'sex2', title: 'ASelect', width: 140, editRender: { name: 'ASelect', optionGroups: [] } },\n                { field: 'region', title: 'ACascader', width: 200, editRender: { name: 'ACascader', props: { options: [] } } },\n                { field: 'date1', title: 'ADatePicker', width: 140, editRender: { name: 'ADatePicker', props: { type: 'date', format: 'YYYY/MM/DD' } } },\n                { field: 'date2', title: 'AMonthPicker', width: 140, editRender: { name: 'AMonthPicker' } },\n                { field: 'date3', title: 'AWeekPicker', width: 140, editRender: { name: 'AWeekPicker' } },\n                { field: 'date4', title: 'ARangePicker', width: 260, editRender: { name: 'ARangePicker' } },\n                { field: 'date5', title: 'ATimePicker', width: 140, editRender: { name: 'ATimePicker' } },\n                { field: 'tree1', title: 'ATreeSelect', width: 140, editRender: { name: 'ATreeSelect', props: { treeData: [] } } },\n                { field: 'tree2', title: 'ATreeSelect（不建议放在单元格）', width: 300, editRender: { name: 'ATreeSelect', props: { treeData: [], treeCheckable: true } } },\n                { field: 'flag', title: 'ASwitch', width: 100, cellRender: { name: 'ASwitch' } },\n                { field: 'rate', title: 'ARate', width: 200, cellRender: { name: 'ARate' } }\n              ]\n            } as VxeGridProps)\n\n            const gridEvents: VxeGridListeners = {\n              checkboxAll () {\n                const $grid = xGrid.value\n                demo1.selectRecords = $grid.getCheckboxRecords()\n              },\n              checkboxChange () {\n                const $grid = xGrid.value\n                demo1.selectRecords = $grid.getCheckboxRecords()\n              }\n            }\n\n            const findSexList = () => {\n              const sexList = [\n                { label: '', value: '' },\n                { label: '男', value: '1' },\n                { label: '女', value: '0' }\n              ]\n              if (gridOptions.columns) {\n                const column5 = gridOptions.columns[5]\n                if (column5.editRender) {\n                  column5.editRender.options = sexList\n                }\n                const column6 = gridOptions.columns[6]\n                if (column6.editRender) {\n                  column6.editRender.options = sexList\n                }\n              }\n            }\n\n            const findRegionList = () => {\n              const regionList = [\n                {\n                  label: '北京',\n                  value: 1,\n                  children: [\n                    { value: 3, label: '东城区' },\n                    { value: 4, label: '西城区' }\n                  ]\n                },\n                {\n                  label: '上海',\n                  value: 21,\n                  children: [\n                    { value: 23, label: '黄浦区' },\n                    { value: 24, label: '卢湾区' }\n                  ]\n                },\n                {\n                  label: '广东',\n                  value: 42,\n                  children: [\n                    { value: 43, label: '广州市' },\n                    { value: 67, label: '深圳市' }\n                  ]\n                }\n              ]\n              if (gridOptions.columns) {\n                const column8 = gridOptions.columns[8]\n                if (column8.editRender && column8.editRender.props) {\n                  column8.editRender.props.options = regionList\n                }\n              }\n            }\n\n            const findSexGroupList = () => {\n              const sexGroupList = [\n                {\n                  label: '分组1',\n                  options: [\n                    { label: '男', value: '1' }\n                  ]\n                },\n                {\n                  label: '分组2',\n                  options: [\n                    { label: '女', value: '0' }\n                  ]\n                }\n              ]\n              if (gridOptions.columns) {\n                const column7 = gridOptions.columns[7]\n                if (column7.editRender) {\n                  column7.editRender.optionGroups = sexGroupList\n                }\n              }\n            }\n\n            const findTreeSelectList = () => {\n              const treeData = [\n                {\n                  title: 'Node1',\n                  value: '0-0',\n                  key: '0-0',\n                  children: [\n                    { title: 'Child Node1', value: '0-0-0', key: '0-0-0' }\n                  ]\n                }, {\n                  title: 'Node2',\n                  value: '0-1',\n                  key: '0-1',\n                  children: [\n                    { title: 'Child Node3', value: '0-1-0', key: '0-1-0', disabled: true },\n                    { title: 'Child Node4', value: '0-1-1', key: '0-1-1' },\n                    { title: 'Child Node5', value: '0-1-2', key: '0-1-2' }\n                  ]\n                }\n              ]\n              if (gridOptions.columns) {\n                const column14 = gridOptions.columns[14]\n                if (column14.editRender && column14.editRender.props) {\n                  column14.editRender.props.treeData = treeData\n                }\n                const column15 = gridOptions.columns[15]\n                if (column15.editRender && column15.editRender.props) {\n                  column15.editRender.props.treeData = treeData\n                }\n              }\n            }\n\n            const insertEvent = async () => {\n              const $grid = xGrid.value\n              const record = {\n                role: '',\n                age: 18,\n                sex1: [],\n                region: [],\n                flag: false,\n                rate: 2\n              }\n              const { row: newRow } = await $grid.insert(record)\n              $grid.setEditRow(newRow)\n            }\n\n            const saveEvent = () => {\n              const $grid = xGrid.value\n              const { insertRecords, removeRecords, updateRecords } = $grid.getRecordset()\n              if (insertRecords.length || removeRecords.length || updateRecords.length) {\n                Modal.success({\n                  content: `insertRecords=${insertRecords.length}; removeRecords=${removeRecords.length}; updateRecords=${updateRecords.length}`\n                })\n              } else {\n                Modal.warn({\n                  content: '数据未改动！'\n                })\n              }\n            }\n\n            findSexList()\n            findRegionList()\n            findSexGroupList()\n            findTreeSelectList()\n\n            gridOptions.loading = true\n            setTimeout(() => {\n              gridOptions.data = [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex1: [], region: [], age: 28, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 5, flag: false, address: 'Shenzhen' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '1', sex1: [], region: [], age: 22, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, flag: false, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '0', sex1: [], region: [], age: 32, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, flag: false, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', sex1: ['1', '0'], region: [], age: 23, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 3, flag: true, address: 'Shenzhen' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex1: ['1', '0'], region: [], age: 30, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 0, flag: true, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '0', sex1: [], region: [], age: 21, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, flag: false, address: 'Shenzhen' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: '1', sex1: ['1'], region: [], age: 29, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 0, flag: true, address: 'Guangzhou' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '1', sex1: [], region: [], age: 35, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, flag: false, address: 'Shenzhen' },\n                { id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: '1', sex1: ['0'], region: [], age: 24, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, flag: false, address: 'Shenzhen' },\n                { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '1', sex1: [], region: [], age: 20, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 4, flag: false, address: 'Guangzhou' }\n              ]\n              gridOptions.loading = false\n            }, 500)\n\n            return {\n              xGrid,\n              demo1,\n              gridOptions,\n              gridEvents,\n              insertEvent,\n              saveEvent\n            }\n          }\n        })\n        "]}}}),u=n("6b0d"),p=n.n(u);const f=p()(s,[["render",i]]);t["default"]=f}}]);