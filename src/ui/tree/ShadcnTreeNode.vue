<template>
  <div :class="['relative py-0.5']"
       :style="level > 0 ? { paddingLeft: '1.5em' } : undefined">
    <div :class="['flex items-center py-0.5 px-1.5 rounded-sm',
              { 'bg-gray-200': isSelected },
              { 'hover:bg-gray-100': !isSelected },
              { 'cursor-not-allowed': node.disabled },
              { 'cursor-pointer': !node.disabled }
         ]"
         @click="onNodeClick">
      <button v-if="showExpandIcon"
              class="w-4 h-4 flex items-center justify-center mr-2 text-gray-500 hover:text-gray-700"
              @click.stop="onExpand">
        <!-- Loading spinner -->
        <svg v-if="loading"
             class="animate-spin h-4 w-4"
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24">
          <circle class="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <!-- Expand/collapse arrow -->
        <svg v-else
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20"
             fill="currentColor"
             :class="['w-4 h-4 transition-transform', { 'rotate-90': isExpanded }]">
          <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"/>
        </svg>
      </button>

      <span v-else class="w-6"></span>

      <ShadcnCheckbox v-if="checkable"
                      v-model="nodeChecked"
                      size="small"
                      :value="node.value"
                      :disabled="node.disabled"
                      :indeterminate="cascade && isIndeterminate"/>

      <slot name="label"
            :node="node"
            :level="level"
            :is-selected="isSelected">
        <span class="text-sm">{{ node.label }}</span>
      </slot>
    </div>

    <div v-if="hasChildren && isExpanded" class="relative">
      <ShadcnTreeNode v-for="child in node.children"
                      :key="child.value"
                      :node="child"
                      :level="level + 1"
                      :selected-values="selectedValues"
                      :checkable="checkable"
                      :cascade="cascade"
                      :load-data="loadData"
                      @on-expand="onChildExpand"
                      @on-node-click="onChildNodeClick">
        <template #label="slotProps">
          <slot name="label" v-bind="slotProps"/>
        </template>
      </ShadcnTreeNode>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { TreeNode, TreeNodeEmits, TreeNodeProps } from './types'
import ShadcnCheckbox from '@/ui/checkbox'

const emit = defineEmits<TreeNodeEmits>()
const props = withDefaults(defineProps<TreeNodeProps>(), {
  selectedValues: () => [],
  checkable: false,
  cascade: false,
  loadData: undefined
})

const isExpanded = ref(false)
const loading = ref(false)
const hasChildren = computed(() => props.node.children && props.node.children.length > 0)
const showExpandIcon = computed(() => hasChildren.value || props.node.isLeaf === false)
const isSelected = computed(() => props.selectedValues.includes(props.node.value))

const isIndeterminate = computed(() => {
  if (!hasChildren.value || !props.cascade) {
    return false
  }

  const childrenSelected = props.node.children?.some(child =>
      props.selectedValues.includes(child.value)
  ) ?? false

  const allChildrenSelected = props.node.children?.every(child =>
      props.selectedValues.includes(child.value)
  ) ?? false

  return childrenSelected && !allChildrenSelected && !isSelected.value
})

const nodeChecked = computed({
  get()
  {
    return props.selectedValues.includes(props.node.value) ? props.node.value : ''
  },
  set()
  {
    emit('on-node-click', props.node)
  }
})

watch(() => props.selectedValues, (newValues) => {
  if (newValues.includes(props.node.value) && hasChildren.value) {
    isExpanded.value = true
  }
}, { immediate: true })

const onExpand = async (event: Event) => {
  event.stopPropagation()

  // If the node has no child nodes and isLeaf is false and has a loadData function, it needs to be loaded
  if (!hasChildren.value && props.node.isLeaf === false && !isExpanded.value && props.loadData) {
    loading.value = true
    try {
      // Get the child node data and update it
      props.node.children = await props.loadData(props.node)
      await nextTick()
    }
    finally {
      loading.value = false
    }
  }

  isExpanded.value = !isExpanded.value
  emit('on-expand', props.node)
}

const onChildExpand = (node: TreeNode) => emit('on-expand', node)

const onNodeClick = () => {
  if (!props.node.disabled) {
    if (!props.checkable) {
      emit('on-node-click', props.node)
    }
  }
}

const onChildNodeClick = (node: TreeNode) => emit('on-node-click', node)
</script>
