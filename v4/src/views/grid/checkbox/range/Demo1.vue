<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridInstance, VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 500,
  columnConfig: {
    resizable: true
  },
  rowConfig: {
    isHover: true
  },
  checkboxConfig: {
    labelField: 'name',
    highlight: true,
    range: true
  },
  columns: [
    { type: 'checkbox', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address', showOverflow: true }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
    { id: 10007, name: 'Test7', role: 'PM', sex: 'Women', age: 38, address: 'Shanghai' },
    { id: 10008, name: 'Test8', role: 'Designer', sex: 'Man', age: 24, address: 'test abc' },
    { id: 10009, name: 'Test9', role: 'Test', sex: 'Man', age: 35, address: 'Shanghai' },
    { id: 10010, name: 'Test10', role: 'Develop', sex: 'Women', age: 31, address: 'Shanghai' },
    { id: 10011, name: 'Test11', role: 'PM', sex: 'Women', age: 45, address: 'Shanghai' },
    { id: 10012, name: 'Test12', role: 'Test', sex: 'Man', age: 39, address: 'Guangzhou' },
    { id: 10013, name: 'Test13', role: 'Develop', sex: 'Women', age: 38, address: 'Shanghai' }
  ]
})

const gridEvents: VxeGridListeners<RowVO> = {
  checkboxRangeStart () {
    console.log('开始拖拽选择')
  },
  checkboxRangeEnd ({ records }) {
    const $grid = gridRef.value
    if ($grid) {
      console.log('结束拖拽选择', records.length)
    }
  }
}
</script>
