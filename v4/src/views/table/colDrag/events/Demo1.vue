<template>
  <div>
    <vxe-table
      border
      :column-config="columnConfig"
      :data="tableData"
      @column-dragstart="columnDragstartEvent"
      @column-dragend="columnDragendEvent">
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeTablePropTypes, VxeTableEvents } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const columnConfig = reactive<VxeTablePropTypes.ColumnConfig<RowVO>>({
  drag: true
})

const columnDragstartEvent: VxeTableEvents.ColumnDragstart = ({ column }) => {
  console.log(`拖拽开始 ${column.field}`)
}

const columnDragendEvent: VxeTableEvents.ColumnDragend = ({ newColumn, oldColumn }) => {
  console.log(`拖拽完成，旧列 ${oldColumn.field} 新列 ${newColumn.field}`)
}
</script>
