<template>
  <div>
    <p class="tip">增删改查完整示例</p>

    <vxe-toolbar ref="xToolbar" :loading="loading">
      <template #buttons>
        <vxe-button status="primary" content="临时新增" @click="insertEvent"></vxe-button>
        <vxe-button status="warning" content="临时删除" @click="removeSelectEvent"></vxe-button>
        <vxe-button status="danger" content="直接删除" @click="deleteSelectEvent"></vxe-button>
        <vxe-button content="提交（将临时操作持久化）" @click="saveEvent"></vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      resizable
      show-overflow
      keep-source
      ref="xTable"
      height="500"
      :loading="loading"
      :data="tableData"
      :edit-rules="validRules"
      :edit-config="{trigger: 'click', mode: 'row', showUpdateStatus: true, showInsertStatus: true}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="nickname" title="Nickname" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.nickname" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatSex(row.sex) }}</span>
        </template>
        <template #edit="{ row }">
          <vxe-select v-model="row.sex" type="text" :options="sexList" transfer></vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="amount" title="Amount" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.amount" type="float" :digits="2"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="updateDate" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.updateDate" type="date"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column title="操作" width="240">
        <template #default="{ row }">
          <vxe-button status="warning" content="临时删除" @click="removeRowEvent(row)"></vxe-button>
          <vxe-button status="danger" content="直接删除" @click="deleteRowEvent(row)"></vxe-button>
        </template>
      </vxe-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>

  </div>
</template>

<script>
import VXETable from 'vxe-table'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      loading: false,
      tableData: [],
      validRules: {
        name: [
          { required: true, message: '名称必须填写' }
        ]
      },
      sexList: [
        { label: '男', value: '1' },
        { label: '女', value: '0' }
      ],
      demoCodes: [
        `
        <vxe-toolbar ref="xToolbar" :loading="loading">
          <template #buttons>
            <vxe-button status="primary" content="临时新增" @click="insertEvent"></vxe-button>
            <vxe-button status="warning" content="临时删除" @click="removeSelectEvent"></vxe-button>
            <vxe-button status="danger" content="直接删除" @click="deleteSelectEvent"></vxe-button>
            <vxe-button content="提交（将临时操作持久化）" @click="saveEvent"></vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          border
          resizable
          show-overflow
          keep-source
          ref="xTable"
          height="500"
          :loading="loading"
          :data="tableData"
          :edit-rules="validRules"
          :edit-config="{trigger: 'click', mode: 'row', showUpdateStatus: true, showInsertStatus: true}">
          <vxe-column type="checkbox" width="60"></vxe-column>
          <vxe-column field="name" title="Name" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.name" type="text"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="nickname" title="Nickname" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.nickname" type="text"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="sex" title="Sex" :edit-render="{}">
            <template #default="{ row }">
              <span>{{ formatSex(row.sex) }}</span>
            </template>
            <template #edit="{ row }">
              <vxe-select v-model="row.sex" type="text" :options="sexList" transfer></vxe-select>
            </template>
          </vxe-column>
          <vxe-column field="amount" title="Amount" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.amount" type="float" :digits="2"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="updateDate" title="Date" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.updateDate" type="date"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column title="操作" width="240">
            <template #default="{ row }">
              <vxe-button status="warning" content="临时删除" @click="removeRowEvent(row)"></vxe-button>
              <vxe-button status="danger" content="直接删除" @click="deleteRowEvent(row)"></vxe-button>
            </template>
          </vxe-column>
        </vxe-table>
        `,
        `
        import VXETable from 'vxe-table'
        import { mapState } from 'vuex'

        export default {
          data () {
            return {
              loading: false,
              tableData: [],
              validRules: {
                name: [
                  { required: true, message: '名称必须填写' }
                ]
              },
              sexList: [
                { label: '男', value: '1' },
                { label: '女', value: '0' }
              ]
            }
          },
          computed: {
            ...mapState([
              'serveApiUrl'
            ])
          },
          created () {
            this.$nextTick(() => {
              // 将表格和工具栏进行关联
              const $table = this.$refs.xTable
              $table.connect(this.$refs.xToolbar)
            })
            this.loadList()
          },
          methods: {
            async loadList () {
              this.loading = true
              try {
                const res = await fetch(\`\${this.serveApiUrl}/api/pub/all\`).then(response => response.json())
                this.tableData = res
              } catch (e) {
                this.tableData = []
              }
              this.loading = false
            },
            formatSex (value) {
              if (value === '1') {
                return '男'
              }
              if (value === '0') {
                return '女'
              }
              return ''
            },
            async insertEvent () {
              const $table = this.$refs.xTable
              const newRecord = {}
              const { row: newRow } = await $table.insert(newRecord)
              await $table.setEditRow(newRow)
            },
            async removeSelectEvent () {
              const $table = this.$refs.xTable
              await $table.removeCheckboxRow()
            },
            async deleteSelectEvent () {
              const type = await VXETable.modal.confirm('您确定要删除选中的数据?')
              if (type !== 'confirm') {
                return
              }
              const $table = this.$refs.xTable
              const checkboxRecords = $table.getCheckboxRecords()
              this.loading = true
              try {
                const body = { removeRecords: checkboxRecords }
                await fetch(\`\${this.serveApiUrl}/api/pub/save\`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
                await this.loadList()
              } catch (e) {}
              this.loading = false
            },
            async removeRowEvent (row) {
              const $table = this.$refs.xTable
              await $table.remove(row)
            },
            async deleteRowEvent (row) {
              const type = await VXETable.modal.confirm('您确定要删除该数据?')
              if (type !== 'confirm') {
                return
              }
              this.loading = true
              try {
                const body = { removeRecords: [row] }
                await fetch(\`\${this.serveApiUrl}/api/pub/save\`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
                await this.loadList()
              } catch (e) {}
            },
            async saveEvent () {
              const $table = this.$refs.xTable
              const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
              if (insertRecords.length <= 0 && removeRecords.length <= 0 && updateRecords.length <= 0) {
                VXETable.modal.message({ content: '数据未改动！', status: 'warning' })
                return
              }
              const errMap = await $table.validate().catch(errMap => errMap)
              if (errMap) {
                return
              }
              this.loading = true
              try {
                const body = { insertRecords, removeRecords, updateRecords }
                await fetch(\`\${this.serveApiUrl}/api/pub/save\`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
                await this.loadList()
                VXETable.modal.message({ content: \`操作成功，新增 \${insertRecords.length} 条，更新 \${updateRecords.length} 条，删除 \${removeRecords.length} 条\`, status: 'success' })
              } catch (e) {
                if (e && e.message) {
                  VXETable.modal.message({ content: e.message, status: 'error' })
                }
              }
              this.loading = false
            }
          }
        }
        `
      ]
    }
  },
  computed: {
    ...mapState([
      'serveApiUrl'
    ])
  },
  created () {
    this.$nextTick(() => {
      // 将表格和工具栏进行关联
      const $table = this.$refs.xTable
      $table.connect(this.$refs.xToolbar)
    })
    this.loadList()
  },
  methods: {
    async loadList () {
      this.loading = true
      try {
        const res = await fetch(`${this.serveApiUrl}/api/pub/all`).then(response => response.json())
        this.tableData = res
      } catch (e) {
        this.tableData = []
      }
      this.loading = false
    },
    formatSex (value) {
      if (value === '1') {
        return '男'
      }
      if (value === '0') {
        return '女'
      }
      return ''
    },
    async insertEvent () {
      const $table = this.$refs.xTable
      const newRecord = {}
      const { row: newRow } = await $table.insert(newRecord)
      await $table.setEditRow(newRow)
    },
    async removeSelectEvent () {
      const $table = this.$refs.xTable
      await $table.removeCheckboxRow()
    },
    async deleteSelectEvent () {
      const type = await VXETable.modal.confirm('您确定要删除选中的数据?')
      if (type !== 'confirm') {
        return
      }
      const $table = this.$refs.xTable
      const checkboxRecords = $table.getCheckboxRecords()
      this.loading = true
      try {
        const body = { removeRecords: checkboxRecords }
        await fetch(`${this.serveApiUrl}/api/pub/save`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
        await this.loadList()
      } catch (e) {}
      this.loading = false
    },
    async removeRowEvent (row) {
      const $table = this.$refs.xTable
      await $table.remove(row)
    },
    async deleteRowEvent (row) {
      const type = await VXETable.modal.confirm('您确定要删除该数据?')
      if (type !== 'confirm') {
        return
      }
      this.loading = true
      try {
        const body = { removeRecords: [row] }
        await fetch(`${this.serveApiUrl}/api/pub/save`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
        await this.loadList()
      } catch (e) {}
    },
    async saveEvent () {
      const $table = this.$refs.xTable
      const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
      if (insertRecords.length <= 0 && removeRecords.length <= 0 && updateRecords.length <= 0) {
        VXETable.modal.message({ content: '数据未改动！', status: 'warning' })
        return
      }
      const errMap = await $table.validate().catch(errMap => errMap)
      if (errMap) {
        return
      }
      this.loading = true
      try {
        const body = { insertRecords, removeRecords, updateRecords }
        await fetch(`${this.serveApiUrl}/api/pub/save`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
        await this.loadList()
        VXETable.modal.message({ content: `操作成功，新增 ${insertRecords.length} 条，更新 ${updateRecords.length} 条，删除 ${removeRecords.length} 条`, status: 'success' })
      } catch (e) {
        if (e && e.message) {
          VXETable.modal.message({ content: e.message, status: 'error' })
        }
      }
      this.loading = false
    }
  }
}
</script>
