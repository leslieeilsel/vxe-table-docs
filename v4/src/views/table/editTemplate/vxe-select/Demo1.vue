<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200" :edit-render="{autoFocus: 'input'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" clearable></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="下拉框" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select v-model="row.sex" :options="sexOptions"></vxe-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatSexLabel([row.sex]) }}</span>
        </template>
      </vxe-column>
      <vxe-column field="sexList" title="下拉框多选" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select v-model="row.sexList" :options="sexOptions" multiple></vxe-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatSexLabel(row.sexList) }}</span>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeSelectPropTypes } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'role2', sex: '', sexList: [], type: '', typeList: [] },
  { id: 10002, name: 'Test2', role: 'role10', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
  { id: 10003, name: 'Test3', role: 'role200', sex: 'Man', sexList: [], type: '', typeList: [] }
])

const sexOptions = ref<VxeSelectPropTypes.Options>([])

const formatSexLabel = (sexList: string[]) => {
  if (sexList) {
    return sexList.map(sex => {
      const item = sexOptions.value.find(item => item.value === sex)
      return item ? item.label : sex
    }).join(',')
  }
  return ''
}

// 模拟后端接口
setTimeout(() => {
  sexOptions.value = [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
}, 300)
</script>
