<template>
  <div>
    <p>
      <vxe-button @click="loadList(5)">5行</vxe-button>
      <vxe-button @click="loadList(1000)">1k行</vxe-button>
      <vxe-button @click="loadList(10000)">1w行</vxe-button>
      <vxe-button @click="loadList(100000)">10w行</vxe-button>
      <vxe-button @click="loadList(500000)">50w行</vxe-button>
      <vxe-button @click="loadList(1000000)">100w行</vxe-button>
      <vxe-button @click="loadList(2000000)">200w行</vxe-button>
    </p>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  num: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      showHeaderOverflow: true,
      showFooterOverflow: true,
      height: 800,
      loading: false,
      columnConfig: {
        resizable: true
      },
      virtualYConfig: {
        enabled: true,
        gt: 0
      },
      columns: [
        { type: 'checkbox', width: 60 },
        { type: 'seq', title: '序号', width: 100 },
        { field: 'name', title: 'Name', minWidth: 180 },
        { field: 'role', title: 'Role', width: 200 },
        { field: 'num', title: 'Num', width: 200 },
        { field: 'address', title: 'Address', width: 200 }
      ],
      data: []
    }

    return {
      gridOptions
    }
  },
  methods: {
    // 模拟行数据
    loadList (size = 200) {
      this.gridOptions.loading = true
      setTimeout(() => {
        const dataList: RowVO[] = []
        for (let i = 0; i < size; i++) {
          dataList.push({
            id: i,
            name: `名称${i} 名称名称 称`,
            role: `role ${i}`,
            num: 20,
            address: 'shenzhen shen'
          })
        }

        const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
        if ($grid) {
          const startTime = Date.now()
          $grid.loadData(dataList).then(() => {
            VxeUI.modal.message({
              content: `加载时间 ${Date.now() - startTime} 毫秒`,
              status: 'success'
            })
            this.gridOptions.loading = false
          })
        }
      }, 350)
    }
  },
  created () {
    this.loadList(500)
  }
})
</script>
