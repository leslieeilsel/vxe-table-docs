<template>
  <div>
    <p class="tip">改变图标，通过设置 <table-api-link prop="filter-config"/>={<table-api-link prop="iconMatch"/>, <table-api-link prop="iconMatch"/>} 局部替换默认的图标</p>

    <vxe-table
      border
      height="400"
      :row-config="{isHover: true}"
      :filter-config="{iconNone: 'vxe-icon-fixed', iconMatch: 'vxe-icon-fixed-fill'}"
      :loading="loading"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role" :filters="roleOptions"></vxe-column>
      <vxe-column field="sex" title="Sex" sortable :filter-multiple="false" :filters="sexOptions"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" sortable></vxe-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      tableData: [],
      roleOptions: [
        { label: '前端', value: '前端' },
        { label: '后端', value: '后端' }
      ],
      sexOptions: [
        { label: 'Man', value: '1' },
        { label: 'Woman', value: '0' }
      ],
      demoCodes: [
        `
        <vxe-table
          border
          height="400"
          :row-config="{isHover: true}"
          :filter-config="{iconNone: 'vxe-icon-fixed', iconMatch: 'vxe-icon-fixed-fill'}"
          :loading="loading"
          :data="tableData">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column field="role" title="Role" :filters="roleOptions"></vxe-column>
          <vxe-column field="sex" title="Sex" sortable :filter-multiple="false" :filters="sexOptions"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
          <vxe-column field="address" title="Address" sortable></vxe-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              loading: false,
              tableData: [],
              roleOptions: [
                { label: '前端', value: '前端' },
                { label: '后端', value: '后端' }
              ],
              sexOptions: [
                { label: 'Man', value: '1' },
                { label: 'Woman', value: '0' }
              ]
            }
          },
          created () {
            this.findList()
          },
          methods: {
            findList () {
              this.loading = true
              return new Promise(resolve => {
                setTimeout(() => {
                  this.tableData = [
                    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
                    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
                    { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
                    { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
                    { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
                    { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
                    { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
                    { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' }
                  ]
                  this.loading = false
                  resolve()
                }, 300)
              })
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.findList()
  },
  methods: {
    findList () {
      this.loading = true
      return new Promise(resolve => {
        setTimeout(() => {
          this.tableData = [
            { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
            { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
            { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
            { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
            { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
            { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
            { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
            { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' }
          ]
          this.loading = false
          resolve()
        }, 300)
      })
    }
  }
}
</script>
