<template>
  <div>
    <vxe-radio-group v-model="gridOptions.editConfig.mode">
      <vxe-radio-button label="cell" content="单元格模式"></vxe-radio-button>
      <vxe-radio-button label="row" content="行编模式"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <template v-if="hasEditStatus(row)">
          <vxe-button @click="saveRowEvent(row)">保存</vxe-button>
          <vxe-button @click="cancelRowEvent()">取消</vxe-button>
        </template>
        <template v-else>
          <vxe-button @click="editRowEvent(row)">编辑</vxe-button>
        </template>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps, VxeTablePropTypes } from 'vxe-table'

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
      loading: false,
      height: 400,
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
        { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
        { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } },
        { title: '操作', slots: { default: 'action' } }
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
  },
  methods: {
    hasEditStatus  (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        return $grid.isEditByRow(row)
      }
    },
    editRowEvent  (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.setEditRow(row)
      }
    },
    saveRowEvent (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.clearEdit().then(() => {
          this.gridOptions.loading = true
          setTimeout(() => {
            this.gridOptions.loading = false
            VxeUI.modal.message({ content: `保存成功！name=${row.name}`, status: 'success' })
          }, 300)
        })
      }
    },
    cancelRowEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.clearEdit()
      }
    }
  }
})
</script>
