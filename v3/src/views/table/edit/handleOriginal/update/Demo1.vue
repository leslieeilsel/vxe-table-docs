<template>
  <div>
    <vxe-button status="success" @click="getUpdateEvent">获取已修改数据</vxe-button>
    <vxe-table
      border
      show-overflow
      height="400"
      :edit-config="editConfig"
      :data="tableData"
      @edit-closed="editClosedEvent">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="action" title="操作" width="140">
        <template #default="{ row }">
          <vxe-button mode="text" status="primary" @click="updateRow1(row)">修改1</vxe-button>
          <vxe-button mode="text" status="primary" @click="updateRow2(row)">修改2</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTablePropTypes } from 'vxe-table'

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
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    const editConfig: VxeTablePropTypes.EditConfig = {
      trigger: 'click',
      mode: 'cell'
    }

    const updateRecords: RowVO[] = []

    return {
      tableData,
      editConfig,
      updateRecords
    }
  },
  methods: {
    updateRow1 (row: RowVO) {
      row.name = `Name_${new Date().getTime()}`
      if (!this.updateRecords.some(item => item.id === row.id)) {
        this.updateRecords.push(row)
      }
    },
    updateRow2 (row: RowVO) {
      row.age++
      if (!this.updateRecords.some(item => item.id === row.id)) {
        this.updateRecords.push(row)
      }
    },
    editClosedEvent ({ row }) {
      if (!this.updateRecords.some(item => item.id === row.id)) {
        this.updateRecords.push(row)
      }
    },
    getUpdateEvent () {
      VxeUI.modal.alert(`修改：${this.updateRecords.length} 行`)
    }
  }
})
</script>
