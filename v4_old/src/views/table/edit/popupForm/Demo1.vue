<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button icon="vxe-icon-square-plus" @click="insertEvent()">新增</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      show-overflow
      ref="tableRef"
      height="300"
      :column-config="{resizable: true}"
      :row-config="{isHover: true}"
      :data="tableData"
      @cell-dblclick="cellDBLClickEvent">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex" :formatter="formatterSex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
      <vxe-column title="操作" width="100" show-overflow>
        <template #default="{ row }">
          <vxe-button mode="text" icon="vxe-icon-edit" @click="editEvent(row)"></vxe-button>
          <vxe-button mode="text" icon="vxe-icon-delete" @click="removeEvent(row)"></vxe-button>
        </template>
      </vxe-column>
    </vxe-table>

    <vxe-modal v-model="showEdit" :title="selectRow ? '编辑&保存' : '新增&保存'" width="800" min-width="600" min-height="300" :loading="submitLoading" resize destroy-on-close>
      <template #default>
        <vxe-form :data="formData" :rules="formRules" title-align="right" title-width="100" @submit="submitEvent">
          <vxe-form-item title="Basic information" title-align="left" :title-width="200" :span="24" :title-prefix="{icon: 'vxe-icon-comment'}"></vxe-form-item>
          <vxe-form-item field="name" title="Name" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.name" placeholder="请输入名称"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item field="nickname" title="Nickname" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.name" placeholder="请输入名称"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item field="role" title="Role" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.name" placeholder="请输入角色"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item field="sex" title="Sex" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-select v-model="data.sex" transfer>
                <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
              </vxe-select>
            </template>
          </vxe-form-item>
          <vxe-form-item field="age" title="Age" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.age" type="number" placeholder="请输入年龄"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item field="flag1" title="是否单身" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-radio-group v-model="data.flag1">
                <vxe-radio label="Y" content="是"></vxe-radio>
                <vxe-radio label="N" content="否"></vxe-radio>
              </vxe-radio-group>
            </template>
          </vxe-form-item>
          <vxe-form-item field="checkedList" title="可选信息" :visible-method="visibleMethod" :span="24" :item-render="{}">
            <template #default="{ data }">
              <vxe-checkbox-group v-model="data.checkedList">
                <vxe-checkbox label="1" content="运动、跑步"></vxe-checkbox>
                <vxe-checkbox label="2" content="听音乐"></vxe-checkbox>
                <vxe-checkbox label="3" content="爬山"></vxe-checkbox>
                <vxe-checkbox label="4" content="吃美食"></vxe-checkbox>
              </vxe-checkbox-group>
            </template>
          </vxe-form-item>
          <vxe-form-item title="Other information" title-align="left" :title-width="200" :span="24" :title-prefix="{message: '请填写必填项', icon: 'vxe-icon-info-circle-fill'}"></vxe-form-item>
          <vxe-form-item field="num" title="Number" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.num" type="number" placeholder="请输入数值"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item field="date3" title="Date" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.date3" type="date" placeholder="请选择日期" transfer></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item field="address" title="Date" :span="24" :item-render="{}" :title-suffix="{message: '提示信息！！', icon: 'vxe-icon-question-circle-fill'}">
            <template #default="{ data }">
              <vxe-textarea v-model="data.address" :autosize="{minRows: 2, maxRows: 4}"></vxe-textarea>
            </template>
          </vxe-form-item>
          <vxe-form-item align="center" title-align="left" :span="24">
            <template #default>
              <vxe-button type="submit">提交</vxe-button>
              <vxe-button type="reset">重置</vxe-button>
            </template>
          </vxe-form-item>
        </vxe-form>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeFormPropTypes, VxeFormItemPropTypes } from 'vxe-pc-ui'
import { VXETable, VxeTableInstance, VxeColumnPropTypes, VxeTableEvents } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  sex2: string[]
  num: number
  num1: number
  age: number
  flag1: boolean
  address: string
  date12: string
  date13: string
  date3: string
  checkedList: any[]
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const formData = reactive({
  name: '',
  nickname: '',
  role: '',
  sex: '',
  age: 0,
  num: 0,
  checkedList: [] as any[],
  flag1: false,
  date3: '',
  address: ''
})

const submitLoading = ref(false)
const showEdit = ref(false)
const selectRow = ref<RowVO | null>()
const tableData = ref<RowVO[]>([])

const sexList = ref([
  { label: '女', value: '0' },
  { label: '男', value: '1' }
])

const formRules = reactive<VxeFormPropTypes.Rules>({
  name: [
    { required: true, message: '请输入名称' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
  ],
  nickname: [
    { required: true, message: '请输入昵称' }
  ],
  sex: [
    { required: true, message: '请选择性别' }
  ]
})

const formatterSex: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
  const item = sexList.value.find(item => item.value === cellValue)
  return item ? item.label : ''
}

const visibleMethod: VxeFormItemPropTypes.VisibleMethod = ({ data }) => {
  return data.flag1 === 'Y'
}

const insertEvent = () => {
  Object.assign(formData, {
    name: '',
    nickname: '',
    role: '',
    sex: '',
    age: 0,
    num: 0,
    checkedList: [],
    flag1: false,
    date3: '',
    address: ''
  })
  selectRow.value = null
  showEdit.value = true
}

const editEvent = (row: RowVO) => {
  Object.assign(formData, row)
  selectRow.value = row
  showEdit.value = true
}

const cellDBLClickEvent: VxeTableEvents.CellDblclick<RowVO> = ({ row }) => {
  editEvent(row)
}

const removeEvent = async (row: RowVO) => {
  const type = await VXETable.modal.confirm('您确定要删除该数据?')
  if (type === 'confirm') {
    const $table = tableRef.value
    if ($table) {
      $table.remove(row)
    }
  }
}

const submitEvent = () => {
  submitLoading.value = true
  setTimeout(() => {
    const $table = tableRef.value
    if ($table) {
      submitLoading.value = false
      showEdit.value = false
      if (selectRow.value) {
        VXETable.modal.message({ content: '保存成功', status: 'success' })
        Object.assign(selectRow.value, formData)
      } else {
        VXETable.modal.message({ content: '新增成功', status: 'success' })
        $table.insert({ ...formData })
      }
    }
  }, 500)
}

setTimeout(() => {
  const list: RowVO[] = [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num: 40, num1: 40, age: 28, flag1: false, address: 'Shenzhen', date3: '', date12: '', date13: '', checkedList: [] },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num: 40, num1: 20, age: 22, flag1: false, address: 'Guangzhou', date3: '', date12: '', date13: '2020-08-20', checkedList: [] },
    { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num: 4, num1: 200, age: 32, flag1: true, address: 'Shanghai', date3: '', date12: '2020-09-10', date13: '', checkedList: [] },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['0'], num: 3, num1: 30, age: 23, flag1: false, address: 'Shenzhen', date3: '', date12: '', date13: '2020-12-04', checkedList: [] },
    { id: 10004, name: 'Test5', nickname: 'T5', role: 'Designer', sex: '1', sex2: ['1'], num: 40, num1: 30, age: 26, flag1: true, address: 'Shenzhen', date3: '', date12: '', date13: '', checkedList: [] },
    { id: 10004, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '1', sex2: ['1'], num: 5, num1: 30, age: 28, flag1: false, address: 'BeiJing', date3: '', date12: '', date13: '2020-09-04', checkedList: [] },
    { id: 10004, name: 'Test7', nickname: 'T7', role: 'Designer', sex: '1', sex2: ['1'], num: 40, num1: 30, age: 30, flag1: false, address: 'BeiJing', date3: '', date12: '', date13: '2020-04-10', checkedList: [] }
  ]
  tableData.value = list
}, 100)
</script>
