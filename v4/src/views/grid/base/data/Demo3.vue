<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

type RowVO = (string | number)[]

const gridOptions = reactive<VxeGridProps<RowVO>>({
  rowConfig: {
    useKey: true,
    keyField: '0'
  },
  columnConfig: {
    useKey: true
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: '1', title: 'Name' },
    { field: '2', title: 'Sex' },
    { field: '3', title: 'Age' },
    { field: '4', title: 'Html', type: 'html', showOverflow: true },
    { field: '5', title: 'Role', showOverflow: true }
  ],
  data: [
    [101, 'Test4', '男', 26, '<a href="https://github.com/x-extends/vxe-table">我是链接</a>', '前端'],
    [102, 'Test2', '男', 28, '<img height="40" src="https://vxeui.com/resource/img/546.gif">', '后端'],
    [103, 'Test1', '女', 22, '<div><span style="color: red">我是 Html 片段</span></div>', '设计师'],
    [104, 'Test3', '女', 20, '<img height="40" src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">', '程序员鼓励师']
  ]
})
</script>
