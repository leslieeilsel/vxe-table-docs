<template>
  <div>
    <vxe-button status="primary" @click="exportEvent">直接导出</vxe-button>
    <vxe-button status="primary" @click="openEvent">打开导出</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

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
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showFooter: true,
      exportConfig: {
        type: 'html',
        includeFields: [
          'group2',
          'sex',
          'age'
        ]
      },
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        {
          title: '分组1',
          field: 'group1',
          children: [
            { field: 'name', title: 'Name' }
          ]
        },
        {
          title: '分组2',
          field: 'group2',
          children: [
            { field: 'sex', title: 'Sex' },
            { field: 'age', title: 'Age' }
          ]
        }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ],
      footerData: [
        { seq: '合计', sex: '666', age: '999' },
        { seq: '平均', sex: '888', age: '333' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    exportEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.exportData()
      }
    },
    openEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.openExport()
      }
    }
  }
})
</script>
