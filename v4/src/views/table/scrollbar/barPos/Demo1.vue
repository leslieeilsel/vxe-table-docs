<template>
  <div>
    <vxe-table
      border
      show-footer
      height="400"
      :scrollbarConfig="scrollbarConfig"
      :footer-data="footerData"
      :data="tableData">
      <vxe-column field="seq" type="seq" width="70" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name" width="300"></vxe-column>
      <vxe-column field="sex" title="Sex" width="300"></vxe-column>
      <vxe-column field="age" title="Age" width="250"></vxe-column>
      <vxe-column field="attr1" title="Attr1" width="360"></vxe-column>
      <vxe-column field="attr2" title="Attr2" width="240"></vxe-column>
      <vxe-column field="attr3" title="Attr3" width="300"></vxe-column>
      <vxe-column field="address" title="Address" min-width="400"></vxe-column>
      <vxe-column field="role" title="Role" width="200" fixed="right"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const scrollbarConfig = ref<VxeTablePropTypes.ScrollbarConfig>({
  x: {
    position: 'top'
  },
  y: {
    position: 'left'
  }
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
  { id: 10009, name: 'Test9', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
  { id: 100010, name: 'Test10', role: 'Develop', sex: 'Women', age: 35, address: 'test abc' }
])

const footerData = ref<VxeTablePropTypes.FooterData>([
  { seq: '合计', name: '222', age: '555', attr2: '555', role: '111' }
])
</script>
