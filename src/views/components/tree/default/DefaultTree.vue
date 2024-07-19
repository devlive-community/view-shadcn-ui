<template>
  <div class="w-full">
    <div v-for="item in items" :key="item.key">
      <TreeNode :item="item" :selectedKey="selectedKey" @select-item="selectItem">
        <template v-if="$slots.node" #node="{ node }">
          <slot name="node" :node="node"/>
        </template>
      </TreeNode>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TreeNode from '@/views/components/tree/default/TreeNode.vue'
import { Tree } from '@/views/components/tree/Tree.ts'

export default defineComponent({
  name: 'DefaultTree',
  components: { TreeNode },
  props: {
    items: {
      type: Array<Tree>,
      required: true
    },
    selectedKey: {
      type: Object as () => Tree,
      required: false
    }
  },
  methods: {
    selectItem(key: Tree)
    {
      this.$emit('select-item', key)
    }
  }
})
</script>
