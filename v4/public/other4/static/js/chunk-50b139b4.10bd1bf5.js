(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50b139b4"],{1557:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r=Object(a["createElementVNode"])("p",{class:"tip"},[Object(a["createTextVNode"])(" 与 "),Object(a["createElementVNode"])("a",{class:"link",href:"https://github.com/element-plus/element-plus"},"element-plus"),Object(a["createTextVNode"])(" 组合渲染 + 使用分页"),Object(a["createElementVNode"])("br"),Object(a["createElementVNode"])("span",{class:"red"},"（注：该示例仅供参考，具体逻辑请自行实现）")],-1),l=Object(a["createTextVNode"])("新增"),o=Object(a["createTextVNode"])("保存"),i=Object(a["createTextVNode"])("校验"),d=Object(a["createTextVNode"])("操作"),s=Object(a["createElementVNode"])("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),c=Object(a["createTextVNode"])("删除选中"),m=Object(a["createTextVNode"])("导出数据"),u={class:"demo-code"},p=Object(a["createTextVNode"])("      "),f=Object(a["createTextVNode"])("\r\n      "),g=Object(a["createTextVNode"])("\r\n    ");function v(e,t,n,v,b,x){var h=Object(a["resolveComponent"])("vxe-form-item"),E=Object(a["resolveComponent"])("vxe-form"),w=Object(a["resolveComponent"])("el-button"),O=Object(a["resolveComponent"])("el-dropdown-item"),T=Object(a["resolveComponent"])("el-dropdown-menu"),S=Object(a["resolveComponent"])("el-dropdown"),j=Object(a["resolveComponent"])("vxe-toolbar"),C=Object(a["resolveComponent"])("vxe-column"),k=Object(a["resolveComponent"])("vxe-table"),N=Object(a["resolveComponent"])("el-pagination"),V=Object(a["resolveComponent"])("pre-code");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[r,Object(a["createVNode"])(E,{data:e.demo1.formData,"title-width":"120","title-align":"right",onSubmit:e.searchEvent,onReset:e.searchEvent},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(h,{field:"name",title:"ElInput",span:"8","title-prefix":{message:"帮助信息！！！",icon:"fa fa-exclamation-circle"},"item-render":{name:"ElInput"}}),Object(a["createVNode"])(h,{field:"role",title:"ElAutocomplete",span:"8","item-render":{name:"ElAutocomplete",props:{fetchSuggestions:e.roleSearchEvent}}},null,8,["item-render"]),Object(a["createVNode"])(h,{field:"age",title:"ElInputNumber",span:"8","item-render":{name:"ElInputNumber"}}),Object(a["createVNode"])(h,{field:"sex",title:"ElSelect",span:"8","item-render":{name:"ElSelect",options:e.demo1.sexList}},null,8,["item-render"]),Object(a["createVNode"])(h,{field:"region",title:"ElCascader",span:"8","item-render":{name:"ElCascader",props:{options:e.demo1.regionList}}},null,8,["item-render"]),Object(a["createVNode"])(h,{field:"date",title:"ElDatePicker",span:"8","item-render":{name:"ElDatePicker",props:{type:"date",format:"YYYY/MM/DD"}}}),Object(a["createVNode"])(h,{field:"date5",title:"ElTimeSelect",span:"8",folding:"","item-render":{name:"ElTimeSelect",props:{pickerOptions:{start:"08:30",step:"00:15",end:"18:30"}}}}),Object(a["createVNode"])(h,{field:"flag",title:"ElSwitch",span:"8",folding:"","item-render":{name:"ElSwitch"}}),Object(a["createVNode"])(h,{field:"rate1",title:"ElSlider",span:"8",folding:"","item-render":{name:"ElSlider"}}),Object(a["createVNode"])(h,{field:"rate",title:"ElRate",span:"8",folding:"","item-render":{name:"ElRate"}}),Object(a["createVNode"])(h,{field:"flag1",title:"ElRadio",span:"8",folding:"","item-render":{name:"ElRadio",options:[{label:"是",value:"Y"},{label:"否",value:"N"}]}}),Object(a["createVNode"])(h,{field:"checkedList",title:"ElCheckbox",span:"8",folding:"","visible-method":e.visibleMethod,"item-render":{name:"ElCheckbox",options:[{label:"北京",value:"beijing"},{label:"深圳",value:"shenzhen"},{label:"上海",value:"shanghai"}]}},null,8,["visible-method"]),Object(a["createVNode"])(h,{span:"24",align:"center","collapse-node":"","item-render":{name:"ElButtons",children:[{content:"查询",props:{type:"primary",nativeType:"submit"}},{content:"重置",props:{nativeType:"reset"}}]}})]})),_:1},8,["data","onSubmit","onReset"]),Object(a["createVNode"])(j,{ref:"xToolbar",export:"",print:"",custom:""},{buttons:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(w,{onClick:e.insertEvent},{default:Object(a["withCtx"])((function(){return[l]})),_:1},8,["onClick"]),Object(a["createVNode"])(w,{onClick:e.saveEvent},{default:Object(a["withCtx"])((function(){return[o]})),_:1},8,["onClick"]),Object(a["createVNode"])(w,{onClick:e.validEvent},{default:Object(a["withCtx"])((function(){return[i]})),_:1},8,["onClick"]),Object(a["createVNode"])(S,{onCommand:e.dropdownMenuEvent},{dropdown:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(T,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(O,{command:"remove"},{default:Object(a["withCtx"])((function(){return[c]})),_:1}),Object(a["createVNode"])(O,{command:"export"},{default:Object(a["withCtx"])((function(){return[m]})),_:1})]})),_:1})]})),default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(w,null,{default:Object(a["withCtx"])((function(){return[d,s]})),_:1})]})),_:1},8,["onCommand"])]})),_:1},512),Object(a["createVNode"])(k,{border:"","show-overflow":"","keep-source":"",ref:"xTable",height:"460","row-config":{isHover:!0},"column-config":{resizable:!0},"export-config":{},"print-config":{},loading:e.demo1.loading,data:e.demo1.tableData,"edit-rules":e.demo1.validRules,"edit-config":{trigger:"click",mode:"row",showStatus:!0},onEditActived:e.editActivedEvent,onEditClosed:e.editClosedEvent},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(C,{type:"checkbox",width:"60",fixed:"left"}),Object(a["createVNode"])(C,{type:"seq",width:"60",fixed:"left"}),Object(a["createVNode"])(C,{field:"name",title:"ElInput","min-width":"140",fixed:"left","edit-render":{name:"ElInput"}}),Object(a["createVNode"])(C,{field:"role",title:"ElAutocomplete",width:"160","edit-render":{name:"ElAutocomplete",props:{fetchSuggestions:e.roleSearchEvent}}},null,8,["edit-render"]),Object(a["createVNode"])(C,{field:"age",title:"ElInputNumber",width:"160","edit-render":{name:"ElInputNumber",props:{max:35,min:18}}}),Object(a["createVNode"])(C,{field:"sex",title:"ElSelect",width:"140","edit-render":{name:"ElSelect",options:e.demo1.sexList}},null,8,["edit-render"]),Object(a["createVNode"])(C,{field:"sexList",title:"ElSelect multiple",width:"180","edit-render":{name:"ElSelect",options:e.demo1.sexList,props:{multiple:!0}}},null,8,["edit-render"]),Object(a["createVNode"])(C,{field:"state",title:"ElSelect remote",width:"140","edit-render":{name:"ElSelect",options:e.demo1.stateOptions,props:{remote:!0,filterable:!0,loading:e.demo1.stateloading,remoteMethod:e.remoteStateMethod}}},null,8,["edit-render"]),Object(a["createVNode"])(C,{field:"region",title:"ElCascader",width:"200","edit-render":{name:"ElCascader",props:{options:e.demo1.regionList}}},null,8,["edit-render"]),Object(a["createVNode"])(C,{field:"date",title:"ElDatePicker",width:"200","edit-render":{name:"ElDatePicker",props:{type:"date",format:"YYYY/MM/DD"}}}),Object(a["createVNode"])(C,{field:"date1",title:"ElDatePicker",width:"220","edit-render":{name:"ElDatePicker",props:{type:"datetime",format:"YYYY-MM-DD HH:mm:ss"}}}),Object(a["createVNode"])(C,{field:"date2",title:"ElTimeSelect",width:"200","edit-render":{name:"ElTimeSelect",props:{pickerOptions:{start:"08:30",step:"00:15",end:"18:30"}}}}),Object(a["createVNode"])(C,{field:"flag",title:"ElSwitch",width:"100","cell-render":{name:"ElSwitch"}}),Object(a["createVNode"])(C,{field:"rate1",title:"ElSlider",width:"200","cell-render":{name:"ElSlider"}}),Object(a["createVNode"])(C,{field:"rate",title:"ElRate",width:"200",fixed:"right","cell-render":{name:"ElRate"}})]})),_:1},8,["loading","data","edit-rules","onEditActived","onEditClosed"]),Object(a["createVNode"])(N,{onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange,"current-page":e.demo1.tablePage.currentPage,"page-sizes":[5,10,15,20,50,100,150,200],"page-size":e.demo1.tablePage.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.demo1.tablePage.totalResult},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"]),Object(a["createElementVNode"])("p",u,Object(a["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(a["createElementVNode"])("pre",null,[p,Object(a["createVNode"])(V,{class:"xml"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[0]),1)]})),_:1}),f,Object(a["createVNode"])(V,{class:"typescript"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[1]),1)]})),_:1}),g])])}var b=n("1da1"),x=(n("96cf"),n("d3b7"),n("159b"),n("ac1f"),n("5319"),n("4de4"),n("b0c0"),n("215e")),h=n("4995"),E=Object(a["defineComponent"])({setup:function(){var e=Object(a["ref"])({}),t=Object(a["ref"])({}),n=[{value:"Designer",name:"Designer"},{value:"Develop",name:"Develop"},{value:"Test",name:"Test"},{value:"PM",name:"PM"}],r=Object(a["ref"])([]),l=[{value:"afg89",label:"afg89"},{value:"gh17",label:"gh17"},{value:"ertg5",label:"ertg5"},{value:"wex4",label:"wex4"},{value:"ewr23",label:"ewr23"}],o=Object(a["reactive"])({loading:!1,tableData:[],validRules:{name:[{required:!0,message:"app.body.valid.rName"},{min:3,max:50,message:"名称长度在 3 到 50 个字符"}],sex:[{required:!0,message:"性别必须填写"}]},sexList:[],regionList:[],sexGroupList:[{label:"分组1",options:[{label:"男",value:"1"}]},{label:"分组2",options:[{label:"女",value:"0"}]}],stateOptions:[],stateloading:!1,tablePage:{currentPage:1,pageSize:10,totalResult:0},formData:{name:"",role:"",sex:null,age:0,region:[],date:null,date5:null,flag:!1,slider:0,rate:0,flag1:"",checkedList:[]}}),i=[],d=function(){setTimeout((function(){var e=[];o.tableData.forEach((function(t){t.state&&!e.some((function(e){return e.value===t.state}))&&e.push({label:t.state.replace("value","label"),value:t.state})})),i=e,o.stateOptions=e}),100)},s=function(){o.loading=!0,setTimeout((function(){var e=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex1:[],state:"",region:[],age:28,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:5,rate1:59,flag:!1,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"1",sex1:[],state:"",region:[],age:22,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:22,flag:!1,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"0",sex1:[],state:"",region:[],age:32,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:12,flag:!1,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"0",sex1:["1","0"],state:"",region:[],age:23,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:33,rate1:4,flag:!0,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",sex1:["1","0"],state:"",region:[],age:30,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:0,rate1:15,flag:!0,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"0",sex1:[],state:"",region:[],age:21,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:73,flag:!1,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"1",sex1:["1"],state:"",region:[],age:29,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:0,rate1:0,flag:!0,address:"Guangzhou"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"1",sex1:[],state:"",region:[],age:35,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:14,flag:!1,address:"Shenzhen"},{id:10009,name:"Test9",nickname:"T9",role:"Test",sex:"1",sex1:["0"],state:"",region:[],age:24,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:52,flag:!1,address:"Shenzhen"},{id:100010,name:"Test10",nickname:"T10",role:"Develop",sex:"1",sex1:[],state:"",region:[],age:20,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:4,rate1:83,flag:!1,address:"Guangzhou"}];o.tableData=e,o.tablePage.totalResult=146,o.loading=!1,d()}),500)},c=function(){var e=[{label:"男",value:"1"},{label:"女",value:"0"}];o.sexList=e},m=function(){var e=[{label:"北京",value:1,children:[{value:3,label:"东城区"},{value:4,label:"西城区"}]},{label:"上海",value:21,children:[{value:23,label:"黄浦区"},{value:24,label:"卢湾区"}]},{label:"广东",value:42,children:[{value:43,label:"广州市"},{value:67,label:"深圳市"}]}];o.regionList=e},u=function(e){e?(o.stateloading=!0,setTimeout((function(){o.stateloading=!1,o.stateOptions=l.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))}),200)):o.stateOptions=[]},p=function(e){var t=e.row;t.state?t._stateOptions?o.stateOptions=t._stateOptions:o.stateOptions=i:o.stateOptions=[]},f=function(e){var t=e.row;t._stateOptions=o.stateOptions},g=function(){o.tablePage.currentPage=1,s()},v=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var n,a,r,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.value,a={role:"",age:18,sex1:[],region:[],flag:!1,rate:2},e.next=4,n.insert(a);case 4:r=e.sent,l=r.row,n.setActiveRow(l);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=t.value,n=e.getRecordset(),a=n.insertRecords,r=n.removeRecords,l=n.updateRecords;a.length||r.length||l.length?(x["a"].alert("保存成功！"),g()):x["a"].alert("数据未改动！")},w=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.value,e.next=3,n.validate();case 3:a=e.sent,a?h["a"].error("校验不通过！"):h["a"].success("校验成功！");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){var n=t.value;switch(e){case"remove":var a=n.getCheckboxRecords();a.length?n.removeCheckboxRow():x["a"].alert("请至少选择一条数据！");break;case"export":n.exportData();break}},T=function(e){o.tablePage.pageSize=e,g()},S=function(e){o.tablePage.currentPage=e,s()},j=function(e){var t=e.data;return"Y"===t.flag1},C=function(e,t){var a=e?n.filter((function(t){return 0===t.name.toLowerCase().indexOf(e.toLowerCase())})):n;setTimeout((function(){t(a)}),500*Math.random())};return Object(a["nextTick"])((function(){var n=t.value,a=e.value;n.connect(a)})),s(),c(),m(),{xToolbar:e,xTable:t,demo1:o,roleList:r,insertEvent:v,saveEvent:E,validEvent:w,remoteStateMethod:u,dropdownMenuEvent:O,editActivedEvent:p,editClosedEvent:f,searchEvent:g,handleSizeChange:T,handleCurrentChange:S,visibleMethod:j,roleSearchEvent:C,demoCodes:['\n        <vxe-form :data="demo1.formData" title-width="120" title-align="right" @submit="searchEvent" @reset="searchEvent">\n          <vxe-form-item field="name" title="ElInput" span="8" :title-prefix="{ message: \'帮助信息！！！\', icon: \'fa fa-exclamation-circle\' }" :item-render="{name: \'ElInput\'}"></vxe-form-item>\n          <vxe-form-item field="role" title="ElAutocomplete" span="8" :item-render="{name: \'ElAutocomplete\', props: {fetchSuggestions: roleSearchEvent}}"></vxe-form-item>\n          <vxe-form-item field="age" title="ElInputNumber" span="8" :item-render="{name: \'ElInputNumber\'}"></vxe-form-item>\n          <vxe-form-item field="sex" title="ElSelect" span="8" :item-render="{name: \'ElSelect\', options: demo1.sexList}"></vxe-form-item>\n          <vxe-form-item field="region" title="ElCascader" span="8" :item-render="{name: \'ElCascader\', props: {options: demo1.regionList}}"></vxe-form-item>\n          <vxe-form-item field="date" title="ElDatePicker" span="8" :item-render="{name: \'ElDatePicker\', props: {type: \'date\', format: \'YYYY/MM/DD\'}}"></vxe-form-item>\n          <vxe-form-item field="date5" title="ElTimeSelect" span="8" folding :item-render="{name: \'ElTimeSelect\', props: {pickerOptions: {start: \'08:30\', step: \'00:15\', end: \'18:30\'}}}"></vxe-form-item>\n          <vxe-form-item field="flag" title="ElSwitch" span="8" folding :item-render="{name: \'ElSwitch\'}"></vxe-form-item>\n          <vxe-form-item field="rate1" title="ElSlider" span="8" folding :item-render="{name: \'ElSlider\'}"></vxe-form-item>\n          <vxe-form-item field="rate" title="ElRate" span="8" folding :item-render="{name: \'ElRate\'}"></vxe-form-item>\n          <vxe-form-item field="flag1" title="ElRadio" span="8" folding :item-render="{name: \'ElRadio\', options: [{label: \'是\', value: \'Y\'}, {label: \'否\', value: \'N\'}]}"></vxe-form-item>\n          <vxe-form-item field="checkedList" title="ElCheckbox" span="8" folding :visible-method="visibleMethod" :item-render="{name: \'ElCheckbox\', options: [{label: \'北京\', value: \'beijing\'}, {label: \'深圳\', value: \'shenzhen\'}, {label: \'上海\', value: \'shanghai\'}]}"></vxe-form-item>\n          <vxe-form-item span="24" align="center" collapse-node :item-render="{name: \'ElButtons\', children: [{ content: \'查询\', props: {type: \'primary\', nativeType: \'submit\'} }, { content: \'重置\', props: {nativeType: \'reset\'} }]}"></vxe-form-item>\n        </vxe-form>\n\n        <vxe-toolbar ref="xToolbar" export print custom>\n          <template #buttons>\n            <el-button @click="insertEvent">新增</el-button>\n            <el-button @click="saveEvent">保存</el-button>\n            <el-button @click="validEvent">校验</el-button>\n            <el-dropdown @command="dropdownMenuEvent">\n              <el-button>操作<i class="el-icon-arrow-down el-icon--right"></i></el-button>\n              <template #dropdown>\n                <el-dropdown-menu>\n                  <el-dropdown-item command="remove">删除选中</el-dropdown-item>\n                  <el-dropdown-item command="export">导出数据</el-dropdown-item>\n                </el-dropdown-menu>\n              </template>\n            </el-dropdown>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          show-overflow\n          keep-source\n          ref="xTable"\n          height="460"\n          :row-config="{isHover: true}"\n          :column-config="{resizable: true}"\n          :export-config="{}"\n          :print-config="{}"\n          :loading="demo1.loading"\n          :data="demo1.tableData"\n          :edit-rules="demo1.validRules"\n          :edit-config="{trigger: \'click\', mode: \'row\', showStatus: true}"\n          @edit-actived="editActivedEvent"\n          @edit-closed="editClosedEvent">\n          <vxe-column type="checkbox" width="60" fixed="left"></vxe-column>\n          <vxe-column type="seq" width="60" fixed="left"></vxe-column>\n          <vxe-column field="name" title="ElInput" min-width="140" fixed="left" :edit-render="{name: \'ElInput\'}"></vxe-column>\n          <vxe-column field="role" title="ElAutocomplete" width="160" :edit-render="{name: \'ElAutocomplete\', props: {fetchSuggestions: roleSearchEvent}}"></vxe-column>\n          <vxe-column field="age" title="ElInputNumber" width="160" :edit-render="{name: \'ElInputNumber\', props: {max: 35, min: 18}}"></vxe-column>\n          <vxe-column field="sex" title="ElSelect" width="140" :edit-render="{name: \'ElSelect\', options: demo1.sexList}"></vxe-column>\n          <vxe-column field="sexList" title="ElSelect multiple" width="180" :edit-render="{name: \'ElSelect\', options: demo1.sexList, props: {multiple: true}}"></vxe-column>\n          <vxe-column field="state" title="ElSelect remote" width="140" :edit-render="{name: \'ElSelect\', options: demo1.stateOptions, props: {remote: true, filterable: true, loading: demo1.stateloading, remoteMethod: remoteStateMethod}}"></vxe-column>\n          <vxe-column field="region" title="ElCascader" width="200" :edit-render="{name: \'ElCascader\', props: {options: demo1.regionList}}"></vxe-column>\n          <vxe-column field="date" title="ElDatePicker" width="200" :edit-render="{name: \'ElDatePicker\', props: {type: \'date\', format: \'YYYY/MM/DD\'}}"></vxe-column>\n          <vxe-column field="date1" title="ElDatePicker" width="220" :edit-render="{name: \'ElDatePicker\', props: {type: \'datetime\', format: \'YYYY-MM-DD HH:mm:ss\'}}"></vxe-column>\n          <vxe-column field="date2" title="ElTimeSelect" width="200" :edit-render="{name: \'ElTimeSelect\', props: {pickerOptions: {start: \'08:30\', step: \'00:15\', end: \'18:30\'}}}"></vxe-column>\n          <vxe-column field="flag" title="ElSwitch" width="100" :cell-render="{name: \'ElSwitch\'}"></vxe-column>\n          <vxe-column field="rate1" title="ElSlider" width="200" :cell-render="{name: \'ElSlider\'}"></vxe-column>\n          <vxe-column field="rate" title="ElRate" width="200" fixed="right" :cell-render="{name: \'ElRate\'}"></vxe-column>\n        </vxe-table>\n\n        <el-pagination\n          @size-change="handleSizeChange"\n          @current-change="handleCurrentChange"\n          :current-page="demo1.tablePage.currentPage"\n          :page-sizes="[5, 10, 15, 20, 50, 100, 150, 200]"\n          :page-size="demo1.tablePage.pageSize"\n          layout="total, sizes, prev, pager, next, jumper"\n          :total="demo1.tablePage.totalResult">\n        </el-pagination>\n        ',"\n        import { defineComponent, reactive, ref, nextTick } from 'vue'\n        import { ElMessageBox, ElMessage } from 'element-plus'\n        import { VxeTableInstance, VxeTableEvents, VxeToolbarInstance } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const xToolbar = ref({} as VxeToolbarInstance)\n            const xTable = ref({} as VxeTableInstance)\n\n            const restaurants = [\n              { value: 'Designer', name: 'Designer' },\n              { value: 'Develop', name: 'Develop' },\n              { value: 'Test', name: 'Test' },\n              { value: 'PM', name: 'PM' }\n            ]\n\n            const roleList = ref([] as any[])\n\n            const stateList = [\n              { value: 'afg89', label: 'afg89' },\n              { value: 'gh17', label: 'gh17' },\n              { value: 'ertg5', label: 'ertg5' },\n              { value: 'wex4', label: 'wex4' },\n              { value: 'ewr23', label: 'ewr23' }\n            ]\n\n            const demo1 = reactive({\n              loading: false,\n              tableData: [] as any[],\n              validRules: {\n                name: [\n                  { required: true, message: 'app.body.valid.rName' },\n                  { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }\n                ],\n                sex: [\n                  { required: true, message: '性别必须填写' }\n                ]\n              },\n              sexList: [] as any[],\n              regionList: [] as any[],\n              sexGroupList: [\n                {\n                  label: '分组1',\n                  options: [\n                    { label: '男', value: '1' }\n                  ]\n                },\n                {\n                  label: '分组2',\n                  options: [\n                    { label: '女', value: '0' }\n                  ]\n                }\n              ],\n              stateOptions: [] as any[],\n              stateloading: false,\n              tablePage: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 0\n              },\n              formData: {\n                name: '',\n                role: '',\n                sex: null,\n                age: 0,\n                region: [],\n                date: null,\n                date5: null,\n                flag: false,\n                slider: 0,\n                rate: 0,\n                flag1: '',\n                checkedList: []\n              }\n            })\n\n            let tempStateList: any[] = []\n\n            // 模拟后台查当前页出远程下拉值\n            const updateStateList = () => {\n              setTimeout(() => {\n                const defaultStateList: any[] = []\n                demo1.tableData.forEach(row => {\n                  if (row.state && !defaultStateList.some(item => item.value === row.state)) {\n                    defaultStateList.push({\n                      label: row.state.replace('value', 'label'),\n                      value: row.state\n                    })\n                  }\n                })\n                tempStateList = defaultStateList\n                demo1.stateOptions = defaultStateList\n              }, 100)\n            }\n\n            const findList = () => {\n              demo1.loading = true\n              setTimeout(() => {\n                const list = [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex1: [], state: '', region: [], age: 28, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 5, rate1: 59, flag: false, address: 'Shenzhen' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '1', sex1: [], state: '', region: [], age: 22, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, rate1: 22, flag: false, address: 'Guangzhou' },\n                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '0', sex1: [], state: '', region: [], age: 32, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 12, flag: false, address: 'Shanghai' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', sex1: ['1', '0'], state: '', region: [], age: 23, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 33, rate1: 4, flag: true, address: 'Shenzhen' },\n                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex1: ['1', '0'], state: '', region: [], age: 30, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 0, rate1: 15, flag: true, address: 'Shanghai' },\n                  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '0', sex1: [], state: '', region: [], age: 21, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 73, flag: false, address: 'Shenzhen' },\n                  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: '1', sex1: ['1'], state: '', region: [], age: 29, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 0, rate1: 0, flag: true, address: 'Guangzhou' },\n                  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '1', sex1: [], state: '', region: [], age: 35, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, rate1: 14, flag: false, address: 'Shenzhen' },\n                  { id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: '1', sex1: ['0'], state: '', region: [], age: 24, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 52, flag: false, address: 'Shenzhen' },\n                  { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '1', sex1: [], state: '', region: [], age: 20, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 4, rate1: 83, flag: false, address: 'Guangzhou' }\n                ]\n                demo1.tableData = list\n                demo1.tablePage.totalResult = 146\n                demo1.loading = false\n                updateStateList()\n              }, 500)\n            }\n\n            const findSexList = () => {\n              const sexList = [\n                { label: '男', value: '1' },\n                { label: '女', value: '0' }\n              ]\n              demo1.sexList = sexList\n            }\n\n            const findRegionList = () => {\n              const regionList = [\n                {\n                  label: '北京',\n                  value: 1,\n                  children: [\n                    { value: 3, label: '东城区' },\n                    { value: 4, label: '西城区' }\n                  ]\n                },\n                {\n                  label: '上海',\n                  value: 21,\n                  children: [\n                    { value: 23, label: '黄浦区' },\n                    { value: 24, label: '卢湾区' }\n                  ]\n                },\n                {\n                  label: '广东',\n                  value: 42,\n                  children: [\n                    { value: 43, label: '广州市' },\n                    { value: 67, label: '深圳市' }\n                  ]\n                }\n              ]\n              demo1.regionList = regionList\n            }\n\n            const remoteStateMethod = (query: string) => {\n              if (query) {\n                demo1.stateloading = true\n                setTimeout(() => {\n                  demo1.stateloading = false\n                  demo1.stateOptions = stateList.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1)\n                }, 200)\n              } else {\n                demo1.stateOptions = []\n              }\n            }\n\n            const editActivedEvent: VxeTableEvents.EditActived = ({ row }) => {\n              // 当激活编辑时，重新更新远程下拉值\n              if (row.state) {\n                if (row._stateOptions) {\n                  demo1.stateOptions = row._stateOptions\n                } else {\n                  // 如果是第一次点击则使用默认的列表\n                  demo1.stateOptions = tempStateList\n                }\n              } else {\n                demo1.stateOptions = []\n              }\n            }\n\n            const editClosedEvent: VxeTableEvents.EditClosed = ({ row }) => {\n              // 当激活编辑时，记录当前远程下拉值\n              row._stateOptions = demo1.stateOptions\n            }\n\n            const searchEvent = () => {\n              demo1.tablePage.currentPage = 1\n              findList()\n            }\n\n            const insertEvent = async () => {\n              const $table = xTable.value\n              const record = {\n                role: '',\n                age: 18,\n                sex1: [],\n                region: [],\n                flag: false,\n                rate: 2\n              }\n              const { row: newRow } = await $table.insert(record)\n              $table.setActiveRow(newRow)\n            }\n\n            const saveEvent = () => {\n              const $table = xTable.value\n              const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()\n              if (insertRecords.length || removeRecords.length || updateRecords.length) {\n                ElMessageBox.alert('保存成功！')\n                searchEvent()\n              } else {\n                ElMessageBox.alert('数据未改动！')\n              }\n            }\n\n            const validEvent = async () => {\n              const $table = xTable.value\n              const errMap = await $table.validate()\n              if (errMap) {\n                ElMessage.error('校验不通过！')\n              } else {\n                ElMessage.success('校验成功！')\n              }\n            }\n\n            const dropdownMenuEvent = (name: string) => {\n              const $table = xTable.value\n              switch (name) {\n                case 'remove': {\n                  const selectRecords = $table.getCheckboxRecords()\n                  if (selectRecords.length) {\n                    $table.removeCheckboxRow()\n                  } else {\n                    ElMessageBox.alert('请至少选择一条数据！')\n                  }\n                  break\n                }\n                case 'export': {\n                  $table.exportData()\n                  break\n                }\n              }\n            }\n\n            const handleSizeChange = (pageSize: number) => {\n              demo1.tablePage.pageSize = pageSize\n              searchEvent()\n            }\n\n            const handleCurrentChange = (currentPage: number) => {\n              demo1.tablePage.currentPage = currentPage\n              findList()\n            }\n\n            const visibleMethod = ({ data }: any) => {\n              return data.flag1 === 'Y'\n            }\n\n            const roleSearchEvent = (queryString: any, cb: (params: any) => any) => {\n              const results = queryString ? restaurants.filter(item => (item.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)) : restaurants\n              setTimeout(() => {\n                cb(results)\n              }, 500 * Math.random())\n            }\n\n            nextTick(() => {\n              // 将表格和工具栏进行关联\n              const $table = xTable.value\n              const $toolbar = xToolbar.value\n              $table.connect($toolbar)\n            })\n\n            findList()\n            findSexList()\n            findRegionList()\n\n            return {\n              xToolbar,\n              xTable,\n              demo1,\n              roleList,\n              insertEvent,\n              saveEvent,\n              validEvent,\n              remoteStateMethod,\n              dropdownMenuEvent,\n              editActivedEvent,\n              editClosedEvent,\n              searchEvent,\n              handleSizeChange,\n              handleCurrentChange,\n              visibleMethod,\n              roleSearchEvent\n            }\n          }\n        })\n        "]}}}),w=n("6b0d"),O=n.n(w);const T=O()(E,[["render",v]]);t["default"]=T},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("d3b7");function a(e,t,n,a,r,l,o){try{var i=e[l](o),d=i.value}catch(s){return void n(s)}i.done?t(d):Promise.resolve(d).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,l){var o=e.apply(t,n);function i(e){a(o,r,l,i,d,"next",e)}function d(e){a(o,r,l,i,d,"throw",e)}i(void 0)}))}}}}]);