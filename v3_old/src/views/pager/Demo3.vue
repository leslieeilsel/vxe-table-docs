<template>
  <div>
    <vxe-pager
      align="left"
      :current-page.sync="pageVO1.currentPage"
      :page-size.sync="pageVO1.pageSize"
      :total="pageVO1.total"
      :page-sizes="[10, 20, 100, {label: '大量数据', value: 1000}, {label: '全量数据', value: -1}]"
      :layouts="['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']">
      <template #left>
        <vxe-button content="更多操作" size="small">
          <template #dropdowns>
            <vxe-button content="批量修改" mode="text"></vxe-button>
            <vxe-button content="批量管理" mode="text"></vxe-button>
            <vxe-button content="批量删除" mode="text"></vxe-button>
          </template>
        </vxe-button>
      </template>
      <template #right>
        <img src="https://vxeui.com/resource/img/546.gif" height="34">
        <img src="https://vxeui.com/resource/img/546.gif" height="34">
        <img src="https://vxeui.com/resource/img/546.gif" height="34">
      </template>
    </vxe-pager>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageVO1: {
        currentPage: 1,
        pageSize: 30,
        total: 8
      }
    }
  }
}
</script>
