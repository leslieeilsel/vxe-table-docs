<template>
  <div>
    <p class="tip">
      可编辑树表格
    </p>

    <vxe-table
      resizable
      :tree-config="{children: 'children'}"
      :edit-config="{trigger: 'click', mode: 'row'}"
      :data="tableData">
      <vxe-column type="checkbox" width="120" tree-node></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="size" title="Size" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="type" title="Type" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="date" title="Date" :edit-render="{name: 'input'}"></vxe-column>
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
      tableData: [
        { id: 1000, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
        {
          id: 1005,
          name: 'Test2',
          type: 'mp4',
          size: null,
          date: '2021-04-01',
          children: [
            { id: 24300, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
            { id: 20045, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
            {
              id: 10053,
              name: 'test abc96',
              type: 'avi',
              size: null,
              date: '2021-04-01',
              children: [
                { id: 24330, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
                { id: 21011, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
                { id: 22200, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
              ]
            }
          ]
        },
        {
          id: 23666,
          name: 'Test23',
          type: 'mp4',
          size: null,
          date: '2021-01-02',
          children: [
            {
              id: 27666,
              name: 'test abc96',
              type: 'avi',
              size: null,
              date: '2021-08-04',
              children: [
                { id: 29330, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-03' },
                { id: 29331, name: 'Test33', type: 'pdf', size: 512, date: '2020-03-01' }
              ]
            }
          ]
        },
        { id: 24555, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }
      ],
      demoCodes: [
        `
        <vxe-table
          resizable
          :tree-config="{children: 'children'}"
          :edit-config="{trigger: 'click', mode: 'row'}"
          :data="tableData">
          <vxe-column type="checkbox" prop="checked" width="120" tree-node></vxe-column>
          <vxe-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-column>
          <vxe-column field="size" title="Size" :edit-render="{name: 'input'}"></vxe-column>
          <vxe-column field="type" title="Type" :edit-render="{name: 'input'}"></vxe-column>
          <vxe-column field="date" title="Date" :edit-render="{name: 'input'}"></vxe-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { id: 1000, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
                {
                  id: 1005,
                  name: 'Test2',
                  type: 'mp4',
                  size: null,
                  date: '2021-04-01',
                  children: [
                    { id: 24300, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
                    { id: 20045, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
                    {
                      id: 10053,
                      name: 'test abc96',
                      type: 'avi',
                      size: null,
                      date: '2021-04-01',
                      children: [
                        { id: 24330, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
                        { id: 21011, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
                        { id: 22200, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
                      ]
                    }
                  ]
                },
                {
                  id: 23666,
                  name: 'Test23',
                  type: 'mp4',
                  size: null,
                  date: '2021-01-02',
                  children: [
                    {
                      id: 27666,
                      name: 'test abc96',
                      type: 'avi',
                      size: null,
                      date: '2021-08-04',
                      children: [
                        { id: 29330, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-03' },
                        { id: 29331, name: 'Test33', type: 'pdf', size: 512, date: '2020-03-01' }
                      ]
                    }
                  ]
                },
                { id: 24555, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }
              ]
            }
          }
        }
        `
      ]
    }
  }
}
</script>
