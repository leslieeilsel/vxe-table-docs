<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  flag1: boolean
  flag2: boolean
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200 },
        {
          field: 'flag1',
          title: '开关',
          width: 120,
          slots: {
            default: ({ row }) => {
              return <vxe-switch v-model={row.flag1} disabled></vxe-switch>
            }
          }
        },
        {
          field: 'flag2',
          title: '可编辑',
          width: 120,
          slots: {
            default: ({ row }) => {
              return <vxe-switch v-model={row.flag2}></vxe-switch>
            }
          }
        }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', flag1: false, flag2: false },
        { id: 10002, name: 'Test2', role: 'Test', flag1: true, flag2: true },
        { id: 10003, name: 'Test3', role: 'PM', flag1: false, flag2: false }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
