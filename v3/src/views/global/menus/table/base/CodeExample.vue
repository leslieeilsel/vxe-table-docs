<template>
  <div>
    <CodeLight path="global/menus/table/base/Demo1" :extraImports="['./demo1.table.menus.ts']">
      <template #tip>
        <vxe-tip status="primary" title="Table 使用方法"></vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/menus/table/base/Demo2" :extraImports="['./demo1.table.menus.ts']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用方式"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
