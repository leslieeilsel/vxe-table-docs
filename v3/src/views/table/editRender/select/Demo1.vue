<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200" :edit-render="{ name: 'input' }"></vxe-column>
      <vxe-column field="sex" title="下拉框" width="200" :edit-render="sexEditRender"></vxe-column>
      <vxe-column field="type" title="下拉框分组" width="200" :edit-render="typeEditRender"> </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  type: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: '', type: '' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', type: '2-1' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', type: '' }
    ]

    const sexEditRender: VxeColumnPropTypes.EditRender = {
      name: 'select',
      options: []
    }

    const typeEditRender: VxeColumnPropTypes.EditRender = {
      name: 'select',
      optionGroups: [
        {
          label: '',
          value: '0',
          options: [
            { label: '', value: '' }
          ]
        },
        {
          label: '分类1',
          value: '1',
          options: [
            { label: '苹果', value: '1-1' },
            { label: '雪梨', value: '1-2' }
          ]
        },
        {
          label: '分类2',
          value: '2',
          options: [
            { label: '草莓', value: '2-1' },
            { label: '猕猴桃', value: '2-2' }
          ]
        }
      ]
    }

    return {
      tableData,
      sexEditRender,
      typeEditRender
    }
  },
  created () {
    // 模拟后端接口
    setTimeout(() => {
      this.sexEditRender.options = [
        { label: '', value: '' },
        { label: '女', value: 'Women' },
        { label: '男', value: 'Man' }
      ]
    }, 300)
  }
})
</script>
