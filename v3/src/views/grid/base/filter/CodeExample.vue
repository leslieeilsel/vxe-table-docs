<template>
  <div>
    <CodeLight path="grid/base/filter/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="column" prop="filters"/> 属性和 <ApiLink name="column" prop="filter-method"/> 方法可以开启列筛选功能，通过 <ApiLink name="column" prop="filter-multiple"/>=false 设置为单选<br>
          如果是服务端筛选，只需加上 <ApiLink name="grid" prop="filter-config"/>={<ApiLink name="grid" prop="remote"/>: true} 和 <ApiLink name="grid" prop="filter-change"/> 事件就可以实现<br>
          如果是动态数据可以通过 <ApiLink name="grid" prop="setFilter"/> 方法更新<br>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/filter/Demo2">
      <template #tip>
        <vxe-tip status="primary">默认的筛选，通过 <ApiLink name="column" prop="checked"/> 属性设置默认的选中的选项</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
