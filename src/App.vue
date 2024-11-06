<template>
  <div class="p-4">
    <ShadcnTree :data="data"
                @on-expand="onExpand"
                @on-node-click="onNodeClick"/>
  </div>
</template>

<script setup>
const data = [
  {
    value: 1,
    label: 'Parent Node 1',
    children: [
      {value: 2, label: 'Child Node 1.1'},
      {
        value: 3,
        label: 'Child Node 1.2',
        children: [
          {value: 4, label: 'Child Node 1.2.1'}
        ]
      }
    ]
  },
  {
    value: 5,
    label: 'Parent Node 2',
    children: [
      {value: 6, label: 'Child Node 2.1'}
    ]
  }
]

const onExpand = (node) => {
  console.log('Expand Node:', node)
}

const onNodeClick = (node) => {
  console.log('Click Node:', node)
}
</script>
