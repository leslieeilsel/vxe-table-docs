<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180"></vxe-column>
      <vxe-column field="fileList1" title="附件列表" width="240">
        <template #default="{ row }">
          <vxe-upload v-model="row.fileList1" progress-text="{percent}%" :more-config="{maxCount: 1, layout: 'horizontal'}" readonly></vxe-upload>
        </template>
      </vxe-column>
      <vxe-column field="fileList2" title="上传附件" width="300">
        <template #default="{ row }">
          <vxe-upload v-model="row.fileList2" progress-text="{percent}%" :more-config="{maxCount: 1, layout: 'horizontal'}" :show-button-text="false" :upload-method="uploadMethod" multiple></vxe-upload>
        </template>
      </vxe-column>
      <vxe-column field="imgList1" title="图片列表" width="160">
        <template #default="{ row }">
          <vxe-upload v-model="row.imgList1" mode="image" progress-text="{percent}%" :more-config="{maxCount: 1}" :image-config="{width: 40, height: 40}" :show-button-text="false" readonly></vxe-upload>
        </template>
      </vxe-column>
      <vxe-column field="imgList2" title="上传图片" width="210">
        <template #default="{ row }">
          <vxe-upload v-model="row.imgList2" mode="image" progress-text="{percent}%" :more-config="{maxCount: 1}" :image-config="{width: 40,height: 40}" :show-button-text="false" :upload-method="uploadMethod" multiple></vxe-upload>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUploadPropTypes } from 'vxe-pc-ui'
import axios from 'axios'

interface RowVO {
  id: number
  name: string
  fileList1: VxeUploadPropTypes.ModelValue
  fileList2: VxeUploadPropTypes.ModelValue
  imgList1: VxeUploadPropTypes.ModelValue
  imgList2: VxeUploadPropTypes.ModelValue
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      {
        id: 10001,
        name: 'Test1',
        imgList1: [],
        imgList2: [],
        fileList1: [
          { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' }
        ],
        fileList2: [
          { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' }
        ]
      },
      {
        id: 10002,
        name: 'Test2',
        imgList1: [
          { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
          { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' }
        ],
        imgList2: [
          { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
          { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' }
        ],
        fileList1: [],
        fileList2: []
      },
      {
        id: 10003,
        name: 'Test3',
        imgList1: [
          { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
        ],
        imgList2: [
          { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
        ],
        fileList1: [
          { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
          { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
          { name: 'fj187.jpg', url: 'https://vxeui.com/resource/img/fj187.jpg' }
        ],
        fileList2: [
          { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
          { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
          { name: 'fj187.jpg', url: 'https://vxeui.com/resource/img/fj187.jpg' }
        ]
      }
    ]

    return {
      tableData
    }
  },
  methods: {
    uploadMethod ({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/api/pub/upload/single', formData).then((res) => {
        // { url: ''}
        return {
          ...res.data
        }
      })
    }
  }
})
</script>
