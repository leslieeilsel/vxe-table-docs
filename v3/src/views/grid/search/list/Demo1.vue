<template>
  <div>
    <p>
      <vxe-input v-model="filterName" type="search" placeholder="试试全表搜索" @keyup="searchEvent"></vxe-input>
    </p>

    <vxe-grid v-bind="gridOptions" class="mylist-grid"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  amount: number
  address: string
}

export default Vue.extend({
  data () {
    const tableAllData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
      { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
      { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' },
      { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 26, amount: 2000, address: 'test abc' },
      { id: 100010, name: 'Test10', role: 'Develop', sex: '1', age: 21, amount: 666, address: 'test abc' }
    ]

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 400,
      columnConfig: {
        useKey: true
      },
      rowConfig: {
        useKey: true
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', type: 'html' },
        { field: 'sex', title: 'Sex', type: 'html' },
        { field: 'age', title: 'Age', type: 'html' },
        { field: 'address', title: 'Address', type: 'html' }
      ],
      data: []
    }

    return {
      gridOptions,
      filterName: '',
      tableAllData
    }
  },
  methods: {
    handleSearch () {
      const filterVal = String(this.filterName).trim().toLowerCase()
      if (filterVal) {
        const filterRE = new RegExp(filterVal, 'gi')
        const searchProps = ['name', 'role', 'age', 'address']
        const rest = this.tableAllData.filter(item => searchProps.some(key => String(item[key]).toLowerCase().indexOf(filterVal) > -1))
        this.gridOptions.data = rest.map(row => {
          // 搜索为克隆数据，不会污染源数据
          const item = XEUtils.clone(row)
          searchProps.forEach(key => {
            item[key] = String(item[key]).replace(filterRE, match => `<span class="keyword-highlight">${match}</span>`)
          })
          return item
        })
      } else {
        this.gridOptions.data = this.tableAllData
      }
    },
    // 节流函数,间隔500毫秒触发搜索
    searchEvent: XEUtils.throttle(function () {
      this.handleSearch()
    }, 500, { trailing: true, leading: true })
  },
  created () {
    this.handleSearch()
  }
})
</script>

<style lang="scss" scoped>
.mylist-grid {
  ::v-deep(.keyword-highlight)  {
    background-color: #FFFF00;
  }
}
</style>
