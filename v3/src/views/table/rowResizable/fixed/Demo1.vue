<template>
  <div>
    <vxe-table
      border
      :row-config="rowConfig"
      :data="tableData">
      <vxe-column type="seq" width="70" fixed="left" row-resize></vxe-column>
      <vxe-column field="name" title="Name" width="100" fixed="left"></vxe-column>
      <vxe-column field="sex" title="Sex" width="100"></vxe-column>
      <vxe-column field="age" title="Age" width="100"></vxe-column>
      <vxe-column field="attr1" title="attr1" width="200"></vxe-column>
      <vxe-column field="attr2" title="attr2" width="200"></vxe-column>
      <vxe-column field="attr3" title="attr3" width="200"></vxe-column>
      <vxe-column field="attr4" title="attr4" width="200"></vxe-column>
      <vxe-column field="time" title="Time" width="200"></vxe-column>
      <vxe-column field="address" title="Address" width="200" fixed="right"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const rowConfig: VxeTablePropTypes.RowConfig = {
      resizable: true
    }

    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    return {
      rowConfig,
      tableData
    }
  }
})
</script>
