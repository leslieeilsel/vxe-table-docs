<template>
  <div>
    <vxe-list class="my-list" height="200" :data="list" :scroll-y="{enabled: true, gt: 0}">
      <template #default="{ items }">
        <div class="my-list-item" v-for="(item, index) in items" :key="index">
          <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif" height="28">
          <span>{{ item.label }}</span>
        </div>
      </template>
    </vxe-list>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

// 模拟后台
const mockList = []
function getList (size) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (size > mockList.length) {
        for (let index = mockList.length; index < size; index++) {
          mockList.push({
            id: index,
            label: `row_${index}`
          })
        }
      }
      resolve(mockList.slice(0, size))
    }, 100)
  })
}

export default {
  data () {
    return {
      loading: false,
      list: []
    }
  },
  mounted () {
    this.loadData(500)
  },
  methods: {
    async loadData  (size) {
      this.loading = true
      this.list = await getList(size)
      this.loading = false
      const startTime = Date.now()
      await this.$nextTick()
      await VXETable.modal.message({ content: `渲染 ${size} 行，用时 ${Date.now() - startTime}毫秒`, status: 'info' })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-list {
  border: 1px solid #e8eaec;
}
.my-list .my-list-item {
  height: 28px;
  padding-left: 15px;
}
</style>
