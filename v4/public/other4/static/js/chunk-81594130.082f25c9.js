(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81594130"],{"52cd":function(e,t,a){"use strict";a.r(t);var r=a("7a23"),n=Object(r["createElementVNode"])("p",{class:"tip"},[Object(r["createTextVNode"])(" 具体兼容请查看 "),Object(r["createElementVNode"])("a",{class:"link",href:"https://github.com/x-extends/vxe-table-plugin-antd",target:"_blank"},"vxe-table-plugin-antd"),Object(r["createTextVNode"])(" 插件的 API"),Object(r["createElementVNode"])("br"),Object(r["createElementVNode"])("span",{class:"red"},"（注：该示例仅供参考，具体逻辑请自行实现）")],-1),d={class:"demo-code"},l=Object(r["createTextVNode"])("      "),o=Object(r["createTextVNode"])("\r\n      "),s=Object(r["createTextVNode"])("\r\n    ");function i(e,t,a,i,c,u){var m=Object(r["resolveComponent"])("vxe-column"),p=Object(r["resolveComponent"])("vxe-table"),f=Object(r["resolveComponent"])("pre-code");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[n,Object(r["createVNode"])(p,Object(r["normalizeProps"])(Object(r["guardReactiveProps"])(e.gridOptions)),{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{type:"seq",width:"60"}),Object(r["createVNode"])(m,{field:"name",title:"AInput",filters:[{data:""}],"filter-render":{name:"AInput",props:{placeholder:"请输入名称"}}}),Object(r["createVNode"])(m,{field:"age",title:"AInputNumber",sortable:"",width:"160",filters:[{data:0}],"filter-render":{name:"AInputNumber",props:{min:0,max:100}}}),Object(r["createVNode"])(m,{field:"sex",title:"ASelect",formatter:e.formatterSex,filters:[{data:null}],"filter-render":{name:"ASelect",options:e.sexList,props:{placeholder:"请选择"}}},null,8,["formatter","filter-render"]),Object(r["createVNode"])(m,{field:"sex1",title:"ASelect",formatter:e.formatterSexs,filters:[{data:[]}],"filter-render":{name:"ASelect",options:e.sexList,props:{mode:"multiple",placeholder:"请选择"}}},null,8,["formatter","filter-render"]),Object(r["createVNode"])(m,{field:"role",title:"AAutoComplete",width:"160",filters:[{data:""}],"filter-render":{name:"AAutoComplete",props:{options:e.roleList,placeholder:"请输入角色名称"},events:{search:e.roleSearchEvent}}},null,8,["filter-render"]),Object(r["createVNode"])(m,{field:"flag",title:"ASwitch",width:"100",filters:[{data:null}],"filter-render":{name:"ASwitch"},"cell-render":{name:"ASwitch",props:{disabled:!0}}}),Object(r["createVNode"])(m,{field:"rate",title:"ARate",width:"180",sortable:"",filters:[{data:0}],"filter-render":{name:"ARate"},"cell-render":{name:"ARate",props:{disabled:!0}}})]})),_:1},16),Object(r["createElementVNode"])("p",d,Object(r["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(r["createElementVNode"])("pre",null,[l,Object(r["createVNode"])(f,{class:"xml"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.demoCodes[0]),1)]})),_:1}),o,Object(r["createVNode"])(f,{class:"typescript"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.demoCodes[1]),1)]})),_:1}),s])])}a("a15b"),a("d81d"),a("4de4"),a("d3b7");var c=Object(r["defineComponent"])({setup:function(){var e=[{value:"Designer"},{value:"Develop"},{value:"Test"},{value:"PM"}],t=Object(r["ref"])([{label:"男",value:"1"},{label:"女",value:"0"}]),a=Object(r["ref"])([]),n=Object(r["reactive"])({border:!0,highlightHoverRow:!0,height:400,columnConfig:{resizable:!0},data:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex1:[],region:[],age:28,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:5,rate1:59,flag:!1,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"1",sex1:[],region:[],age:22,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:22,flag:!1,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"0",sex1:[],region:[],age:32,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:12,flag:!1,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"0",sex1:["1","0"],region:[],age:23,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:33,rate1:4,flag:!0,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",sex1:["1","0"],region:[],age:30,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:0,rate1:15,flag:!0,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"0",sex1:[],region:[],age:21,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:73,flag:!1,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"1",sex1:["1"],region:[],age:29,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:0,rate1:0,flag:!0,address:"Guangzhou"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"1",sex1:[],region:[],age:35,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:14,flag:!1,address:"Shenzhen"},{id:10009,name:"Test9",nickname:"T9",role:"Test",sex:"1",sex1:["0"],region:[],age:24,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:52,flag:!1,address:"Shenzhen"},{id:100010,name:"Test10",nickname:"T10",role:"Develop",sex:"1",sex1:[],region:[],age:20,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:4,rate1:83,flag:!1,address:"Guangzhou"}]}),d=function(e){var t=e.cellValue;return"1"===t?"男":"0"===t?"女":""},l=function(e){var t=e.cellValue;return t?t.map((function(e){return"1"===e?"男":"0"===e?"女":""})).join(";"):""},o=function(t,r){a.value=e.filter((function(e){return-1!==e.value.toUpperCase().indexOf((r||"").toUpperCase())}))};return{sexList:t,roleList:a,gridOptions:n,formatterSex:d,formatterSexs:l,roleSearchEvent:o,demoCodes:['\n        <vxe-table v-bind="gridOptions">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="AInput" :filters="[{data: \'\'}]" :filter-render="{name: \'AInput\', props: {placeholder: \'请输入名称\'}}"></vxe-column>\n          <vxe-column field="age" title="AInputNumber" sortable width="160" :filters="[{data: 0}]" :filter-render="{name: \'AInputNumber\', props: {min: 0, max: 100}}"></vxe-column>\n          <vxe-column field="sex" title="ASelect" :formatter="formatterSex" :filters="[{data: null}]" :filter-render="{name: \'ASelect\', options: sexList, props: {placeholder: \'请选择\'}}"></vxe-column>\n          <vxe-column field="sex1" title="ASelect" :formatter="formatterSexs" :filters="[{data: []}]" :filter-render="{name: \'ASelect\', options: sexList, props: {mode: \'multiple\', placeholder: \'请选择\'}}"></vxe-column>\n          <vxe-column field="role" title="AAutoComplete" width="160" :filters="[{data: \'\'}]" :filter-render="{name: \'AAutoComplete\', props: {options: roleList, placeholder: \'请输入角色名称\'}, events: {search: roleSearchEvent}}"></vxe-column>\n          <vxe-column field="flag" title="ASwitch" width="100" :filters="[{data: null}]" :filter-render="{name: \'ASwitch\'}" :cell-render="{name: \'ASwitch\', props: {disabled: true}}"></vxe-column>\n          <vxe-column field="rate" title="ARate" width="180" sortable :filters="[{data: 0}]" :filter-render="{name: \'ARate\'}" :cell-render="{name: \'ARate\', props: {disabled: true}}"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive, ref } from 'vue'\n        import { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const restaurants = [\n              { value: 'Designer' },\n              { value: 'Develop' },\n              { value: 'Test' },\n              { value: 'PM' }\n            ]\n\n            const sexList = ref([\n              { label: '', value: '' },\n              { label: '男', value: '1' },\n              { label: '女', value: '0' }\n            ])\n\n            const roleList = ref([] as any[])\n\n            const gridOptions = reactive({\n              border: true,\n              highlightHoverRow: true,\n              height: 400,\n              columnConfig: {\n                resizable: true\n              },\n              data: [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex1: [], region: [], age: 28, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 5, flag: false, address: 'Shenzhen' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '1', sex1: [], region: [], age: 22, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, flag: false, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '0', sex1: [], region: [], age: 32, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, flag: false, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', sex1: ['1', '0'], region: [], age: 23, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 3, flag: true, address: 'Shenzhen' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex1: ['1', '0'], region: [], age: 30, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 0, flag: true, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '0', sex1: [], region: [], age: 21, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, flag: false, address: 'Shenzhen' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: '1', sex1: ['1'], region: [], age: 29, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 0, flag: true, address: 'Guangzhou' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '1', sex1: [], region: [], age: 35, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, flag: false, address: 'Shenzhen' },\n                { id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: '1', sex1: ['0'], region: [], age: 24, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, flag: false, address: 'Shenzhen' },\n                { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '1', sex1: [], region: [], age: 20, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 4, flag: false, address: 'Guangzhou' }\n              ]\n            } as VxeGridProps)\n\n            const formatterSex: VxeColumnPropTypes.Formatter = ({ cellValue }) => {\n              return cellValue === '1' ? '男' : cellValue === '0' ? '女' : ''\n            }\n\n            const formatterSexs: VxeColumnPropTypes.Formatter = ({ cellValue }) => {\n              return cellValue ? cellValue.map((value: any) => value === '1' ? '男' : value === '0' ? '女' : '').join(';') : ''\n            }\n\n            const roleSearchEvent = (params: any, value: any) => {\n              roleList.value = restaurants.filter(option => option.value.toUpperCase().indexOf((value || '').toUpperCase()) !== -1)\n            }\n\n            return {\n              sexList,\n              roleList,\n              gridOptions,\n              formatterSex,\n              formatterSexs,\n              roleSearchEvent\n            }\n          }\n        })\n        "]}}}),u=a("6b0d"),m=a.n(u);const p=m()(c,[["render",i]]);t["default"]=p},a15b:function(e,t,a){"use strict";var r=a("23e7"),n=a("e330"),d=a("44ad"),l=a("fc6a"),o=a("a640"),s=n([].join),i=d!=Object,c=o("join",",");r({target:"Array",proto:!0,forced:i||!c},{join:function(e){return s(l(this),void 0===e?",":e)}})}}]);