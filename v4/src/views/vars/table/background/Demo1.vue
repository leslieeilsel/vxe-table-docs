<template>
  <div>
    <vxe-radio-group v-model="headerBgColor">
      <vxe-radio-button label="" content="默认"></vxe-radio-button>
      <vxe-radio-button label="#f3cccc" content="红色"></vxe-radio-button>
      <vxe-radio-button label="#cbcbef" content="蓝色"></vxe-radio-button>
    </vxe-radio-group>
    <vxe-radio-group v-model="footerBgColor">
      <vxe-radio-button label="" content="默认"></vxe-radio-button>
      <vxe-radio-button label="#fbe8d7" content="橙色"></vxe-radio-button>
      <vxe-radio-button label="#fbd7f8" content="紫色"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-grid
      v-bind="gridOptions"
      :style="{
        '--vxe-ui-table-header-background-color': headerBgColor,
        '--vxe-ui-table-footer-background-color': footerBgColor
      }">
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const headerBgColor = ref('')
const footerBgColor = ref('')

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showFooter: true,
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ],
  footerData: [
    { seq: '合计', name: '777', sex: '333', age: '111' }
  ]
})
</script>
