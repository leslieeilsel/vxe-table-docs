<template>
  <div>
    <vxe-radio-group v-model="gridOptions.editConfig.mode">
      <vxe-radio-button label="cell" content="单元格编辑"></vxe-radio-button>
      <vxe-radio-button label="row" content="行编辑"></vxe-radio-button>
    </vxe-radio-group>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeTablePropTypes } from 'vxe-table'

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
    const gridOptions: VxeGridProps<RowVO> & { editConfig: VxeTablePropTypes.EditConfig<RowVO> } = {
      border: true,
      showOverflow: true,
      editConfig: {
        trigger: 'click',
        mode: 'cell'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { name: 'input' } },
        { field: 'sex', title: 'Sex', editRender: { name: 'input' } },
        { field: 'age', title: 'Age', editRender: { name: 'input' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
