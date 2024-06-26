<template>
  <div>
    <p class="tip">
      基于树表格实现分组汇总合计
    </p>

    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="$refs.xTree.setAllTreeExpand(true)">展开所有</vxe-button>
        <vxe-button @click="$refs.xTree.clearTreeExpand()">关闭所有</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      resizable
      show-footer
      ref="xTree"
      max-height="400"
      :loading="loading"
      :tree-config="tableTreeConfig"
      :span-method="colspanMethod"
      :footer-method="footerMethod"
      :data="tableData">
      <vxe-column field="name" title="名称" tree-node :formatter="formatName"></vxe-column>
      <vxe-column field="level" title="级别"></vxe-column>
      <vxe-column field="age" title="年龄"></vxe-column>
      <vxe-column field="rate" title="分数"></vxe-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'

export default {
  data () {
    return {
      loading: false,
      tableData: [],
      tableTreeConfig: {
        children: 'children',
        accordion: true, // 一层只允许展开一个节点
        expandAll: false // 默认是否全部展开
      },
      demoCodes: [
        `
        <vxe-toolbar>
          <template #buttons>
            <vxe-button @click="$refs.xTree.setAllTreeExpand(true)">展开所有</vxe-button>
            <vxe-button @click="$refs.xTree.clearTreeExpand()">关闭所有</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          resizable
          show-footer
          ref="xTree"
          max-height="400"
          :loading="loading"
          :tree-config="tableTreeConfig"
          :span-method="colspanMethod"
          :footer-method="footerMethod"
          :data="tableData">
          <vxe-column field="name" title="名称" tree-node :formatter="formatName"></vxe-column>
          <vxe-column field="level" title="级别"></vxe-column>
          <vxe-column field="age" title="年龄"></vxe-column>
          <vxe-column field="rate" title="分数"></vxe-column>
        </vxe-table>
        `,
        `
        import XEUtils from 'xe-utils'
        
        export default {
          data () {
            return {
              loading: false,
              tableData: [],
              tableTreeConfig: {
                children: 'children',
                accordion: true, // 一层只允许展开一个节点
                expandAll: false // 默认是否全部展开
              }
            }
          },
          created () {
            this.loading = true
            this.findList().then(data => {
              this.tableData = this.getGroupSummary(data)
              this.loading = false
            })
          },
          methods: {
            findList () {
              return new Promise(resolve => {
                setTimeout(() => {
                  let list = [
                    {
                      name: '一班',
                      level: '',
                      age: '',
                      rate: '',
                      children: [
                        { name: 'test7', rate: 9, age: 24, level: 1 },
                        { name: 'test6', rate: 14, age: 20, level: 3 },
                        {
                          name: '第一组',
                          level: '',
                          age: '',
                          rate: '',
                          children: [
                            { name: 'test85', rate: 13, age: 32, level: 1 },
                            { name: 'test37', rate: 9, age: 29, level: 4 },
                            { name: 'test93', rate: 22, age: 28, level: 5 },
                            { name: 'test90', rate: 55, age: 26, level: 2 }
                          ]
                        },
                        { name: 'test32', rate: 11, age: 21, level: 1 }
                      ]
                    },
                    {
                      name: '二班',
                      level: '',
                      age: '',
                      rate: '',
                      children: [
                        { name: 'test15', rate: 13, age: 32, level: 1 },
                        { name: 'test44', rate: 9, age: 29, level: 4 },
                        {
                          name: '第一组',
                          level: '',
                          age: '',
                          rate: '',
                          children: [
                            { name: 'test37', rate: 9, age: 29, level: 4 },
                            { name: 'test93', rate: 22, age: 28, level: 5 }
                          ]
                        },
                        {
                          name: '第二组',
                          level: '',
                          age: '',
                          rate: '',
                          children: [
                            { name: 'test74', rate: 11, age: 32, level: 5 },
                            { name: 'test99', rate: 23, age: 18, level: 4 },
                            {
                              name: '第一排',
                              level: '',
                              age: '',
                              rate: '',
                              children: [
                                { name: 'test48', rate: 77, age: 29, level: 4 },
                                { name: 'test38', rate: 34, age: 21, level: 2 }
                              ]
                            },
                            { name: 'test16', rate: 22, age: 26, level: 5 }
                          ]
                        },
                        { name: 'test91', rate: 16, age: 27, level: 5 },
                        {
                          name: '第三组',
                          level: '',
                          age: '',
                          rate: '',
                          children: [
                            { name: 'test77', rate: 11, age: 35, level: 1 },
                            { name: 'test89', rate: 40, age: 18, level: 4 },
                            { name: 'test10', rate: 22, age: 20, level: 2 }
                          ]
                        }
                      ]
                    },
                    {
                      name: '三班',
                      level: '',
                      age: '',
                      rate: '',
                      children: [
                        { name: 'test6', rate: 3, age: 22, level: 2 },
                        { name: 'test2', rate: 5, age: 25, level: 3 },
                        { name: 'test42', rate: 17, age: 35, level: 4 }
                      ]
                    }
                  ]
                  resolve(list)
                }, 300)
              })
            },
            formatName ({ row }) {
              return row.children && row.children.length ? \`\${row.name} (\${row.num}人)\` : row.name
            },
            meanNum (list, field) {
              let count = 0
              list.forEach(item => {
                count += Number(item[field])
              })
              return count / list.length
            },
            sumNum (list, field) {
              let count = 0
              list.forEach(item => {
                count += Number(item[field])
              })
              return count
            },
            // 计算逻辑
            handleSummary  (children) {
              return {
                num: this.sumNum(children, 'num'),
                level: Math.floor(this.sumNum(children, 'level')),
                age: parseInt(this.meanNum(children, 'age')),
                rate: this.sumNum(children, 'rate')
              }
            },
            getGroupSummary (data) {
              XEUtils.eachTree(data, (row, index, items, path, parent, nodes) => {
                let children = row.children
                if (children && children.length) {
                  // 合计子节点
                  Object.assign(row, this.handleSummary(children))
                } else {
                  row.num = 1
                  if (index === items.length - 1) {
                    // 全量汇总
                    for (let len = nodes.length - 2; len >= 0; len--) {
                      Object.assign(nodes[len], this.handleSummary(nodes[len].children))
                    }
                  }
                }
              }, this.tableTreeConfig)
              XEUtils.eachTree(data, (row) => {
                let children = row.children
                if (children && children.length) {
                  // 动态增加一行汇总
                  children.push({
                    name: \`合计 (\${row.name})\`,
                    level: row.level,
                    age: row.age,
                    rate: row.rate
                  })
                }
              }, this.tableTreeConfig)
              return data
            },
            colspanMethod ({ row, column }) {
              // 当行被展开时将行合并
              let xTree = this.$refs.xTree
              if (row.children && row.children.length && xTree && xTree.isTreeExpandByRow(row)) {
                if (column.treeNode) {
                  return {
                    rowspan: 1,
                    colspan: 4
                  }
                } else {
                  return {
                    rowspan: 0,
                    colspan: 0
                  }
                }
              }
            },
            footerMethod ({ columns, data }) {
              return [
                columns.map((column, columnIndex) => {
                  if (columnIndex === 0) {
                    return \`合计 (\${this.sumNum(data, 'num')}人)\`
                  }
                  switch (column.field) {
                    case 'level':
                      return \`总共 \${Math.floor(this.meanNum(data, 'level'))}\`
                    case 'age':
                      return \`平均年龄 \${parseInt(this.meanNum(data, 'age'))}\`
                    case 'rate':
                      return \`总分 \${this.sumNum(data, 'rate')}\`
                  }
                  return '-'
                })
              ]
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.loading = true
    this.findList().then(data => {
      this.tableData = this.getGroupSummary(data)
      this.loading = false
    })
  },
  methods: {
    findList () {
      return new Promise(resolve => {
        setTimeout(() => {
          const list = [
            {
              name: '一班',
              level: '',
              age: '',
              rate: '',
              children: [
                { name: 'test7', rate: 9, age: 24, level: 1 },
                { name: 'test6', rate: 14, age: 20, level: 3 },
                {
                  name: '第一组',
                  level: '',
                  age: '',
                  rate: '',
                  children: [
                    { name: 'test85', rate: 13, age: 32, level: 1 },
                    { name: 'test37', rate: 9, age: 29, level: 4 },
                    { name: 'test93', rate: 22, age: 28, level: 5 },
                    { name: 'test90', rate: 55, age: 26, level: 2 }
                  ]
                },
                { name: 'test32', rate: 11, age: 21, level: 1 }
              ]
            },
            {
              name: '二班',
              level: '',
              age: '',
              rate: '',
              children: [
                { name: 'test15', rate: 13, age: 32, level: 1 },
                { name: 'test44', rate: 9, age: 29, level: 4 },
                {
                  name: '第一组',
                  level: '',
                  age: '',
                  rate: '',
                  children: [
                    { name: 'test37', rate: 9, age: 29, level: 4 },
                    { name: 'test93', rate: 22, age: 28, level: 5 }
                  ]
                },
                {
                  name: '第二组',
                  level: '',
                  age: '',
                  rate: '',
                  children: [
                    { name: 'test74', rate: 11, age: 32, level: 5 },
                    { name: 'test99', rate: 23, age: 18, level: 4 },
                    {
                      name: '第一排',
                      level: '',
                      age: '',
                      rate: '',
                      children: [
                        { name: 'test48', rate: 77, age: 29, level: 4 },
                        { name: 'test38', rate: 34, age: 21, level: 2 }
                      ]
                    },
                    { name: 'test16', rate: 22, age: 26, level: 5 }
                  ]
                },
                { name: 'test91', rate: 16, age: 27, level: 5 },
                {
                  name: '第三组',
                  level: '',
                  age: '',
                  rate: '',
                  children: [
                    { name: 'test77', rate: 11, age: 35, level: 1 },
                    { name: 'test89', rate: 40, age: 18, level: 4 },
                    { name: 'test10', rate: 22, age: 20, level: 2 }
                  ]
                }
              ]
            },
            {
              name: '三班',
              level: '',
              age: '',
              rate: '',
              children: [
                { name: 'test6', rate: 3, age: 22, level: 2 },
                { name: 'test2', rate: 5, age: 25, level: 3 },
                { name: 'test42', rate: 17, age: 35, level: 4 }
              ]
            }
          ]
          resolve(list)
        }, 300)
      })
    },
    formatName ({ row }) {
      return row.children && row.children.length ? `${row.name} (${row.num}人)` : row.name
    },
    meanNum (list, field) {
      let count = 0
      list.forEach(item => {
        count += Number(item[field])
      })
      return count / list.length
    },
    sumNum (list, field) {
      let count = 0
      list.forEach(item => {
        count += Number(item[field])
      })
      return count
    },
    // 计算逻辑
    handleSummary  (children) {
      return {
        num: this.sumNum(children, 'num'),
        level: Math.floor(this.sumNum(children, 'level')),
        age: parseInt(this.meanNum(children, 'age')),
        rate: this.sumNum(children, 'rate')
      }
    },
    getGroupSummary (data) {
      XEUtils.eachTree(data, (row, index, items, path, parent, nodes) => {
        const children = row.children
        if (children && children.length) {
          // 合计子节点
          Object.assign(row, this.handleSummary(children))
        } else {
          row.num = 1
          if (index === items.length - 1) {
            // 全量汇总
            for (let len = nodes.length - 2; len >= 0; len--) {
              Object.assign(nodes[len], this.handleSummary(nodes[len].children))
            }
          }
        }
      }, this.tableTreeConfig)
      XEUtils.eachTree(data, (row) => {
        const children = row.children
        if (children && children.length) {
          // 动态增加一行汇总
          children.push({
            name: `合计 (${row.name})`,
            level: row.level,
            age: row.age,
            rate: row.rate
          })
        }
      }, this.tableTreeConfig)
      return data
    },
    colspanMethod ({ row, column }) {
      // 当行被展开时将行合并
      const xTree = this.$refs.xTree
      if (row.children && row.children.length && xTree && xTree.isTreeExpandByRow(row)) {
        if (column.treeNode) {
          return {
            rowspan: 1,
            colspan: 4
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    footerMethod ({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return `合计 (${this.sumNum(data, 'num')}人)`
          }
          switch (column.field) {
            case 'level':
              return `总共 ${Math.floor(this.meanNum(data, 'level'))}`
            case 'age':
              return `平均年龄 ${parseInt(this.meanNum(data, 'age'))}`
            case 'rate':
              return `总分 ${this.sumNum(data, 'rate')}`
          }
          return '-'
        })
      ]
    }
  }
}
</script>
