import { VxeUI } from 'vxe-table'

// 创建一个简单的表单-输入框渲染
VxeUI.renderer.add('FormItemInput', {
  // 项内容模板
  renderItemContent (renderOpts, params) {
    const { data, field } = params
    const { props } = renderOpts
    return <vxe-input v-model={ data[field] } { ...{ props } }></vxe-input>
  }
})

// 创建一个简单的表单-按钮组渲染
VxeUI.renderer.add('FormItemButtonGroup', {
  // 项内容模板
  renderItemContent () {
    return [
      <vxe-button type="submit" status="primary">查询</vxe-button>,
      <vxe-button type="reset">重置</vxe-button>
    ]
  }
})
