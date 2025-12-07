<template>
  <div class="relative py-0.5"
       :style="level > 0 ? { paddingLeft: '1.5em' } : undefined">

    <div v-if="showLine">
      <div v-if="level > 0" :class="['absolute top-0 left-0 bottom-0', dark ? 'bg-gray-600' : 'bg-gray-200']" :style="{ left: '0.75em', width: '1px' }"/>
      <div v-if="level > 0 && !hasChildren" :class="['absolute top-0 left-0 bottom-0', dark ? 'bg-gray-600' : 'bg-gray-200']" :style="{ left: '2.3em', width: '1px' }"/>
      <div v-if="level > 0 && !hasChildren" :class="['absolute top-1/2 left-0', dark ? 'bg-gray-600' : 'bg-gray-200']" :style="{ left: '2.35em', width: '0.8em', height: '1px' }"/>
    </div>

    <div :class="['inline-flex items-center py-0.5 px-1.5 rounded-sm whitespace-nowrap',
              { 'bg-gray-200': isSelected && !showLine && !dark },
              { 'bg-gray-700': isSelected && !showLine && dark },
              { 'hover:bg-gray-100': !isSelected && !showLine && !dark },
              { 'hover:bg-gray-700': !isSelected && !showLine && dark },
              { 'cursor-not-allowed': node.disabled },
              { 'cursor-pointer': !node.disabled }
         ]"
         @click="onNodeClick">
      <button v-if="showExpandIcon"
              :class="['inline-flex w-4 h-4 items-center justify-center mr-2', dark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700']"
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
        <div v-else>
          <slot v-if="!isExpanded" name="expand">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 transition-transform">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </slot>

          <slot v-else name="collapse">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 transition-transform rotate-90">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </slot>
        </div>
      </button>

      <span v-else class="inline-block w-6"/>

      <ShadcnCheckbox v-if="checkable"
                      v-model="nodeChecked"
                      size="small"
                      class="inline-block"
                      :value="node.value"
                      :disabled="node.disabled"
                      :dark="dark"
                      :indeterminate="cascade && isIndeterminate"/>

      <slot name="label"
            :node="node"
            :level="level"
            :is-selected="isSelected">
        <span :class="['inline-block text-sm whitespace-nowrap',
                      { 'hover:bg-gray-100 px-2 py-0.5 hover:rounded-sm': showLine && !node.disabled && !dark },
                      { 'hover:bg-gray-700 px-2 py-0.5 hover:rounded-sm': showLine && !node.disabled && dark },
                      { 'text-gray-500 px-2': node.disabled && showLine && !dark },
                      { 'text-gray-500': node.disabled && !showLine && !dark },
                      { 'text-gray-400 px-2': node.disabled && showLine && dark },
                      { 'text-gray-400': node.disabled && !showLine && dark },
                      { 'text-gray-200': !node.disabled && dark },
                      { 'bg-gray-100 rounded-sm': isSelected && showLine && !dark },
                      { 'bg-gray-700 rounded-sm': isSelected && showLine && dark }
              ]">
          {{ node.label }}
        </span>
      </slot>
    </div>

    <div v-if="hasChildren && isExpanded" class="relative inline-block min-w-full">
      <ShadcnTreeNode v-for="child in node.children"
                      :key="child.value"
                      :node="child"
                      :level="level + 1"
                      :selected-values="selectedValues"
                      :checkable="checkable"
                      :cascade="cascade"
                      :show-line="showLine"
                      :dark="dark"
                      :load-data="loadData"
                      @on-expand="onChildExpand"
                      @on-node-click="onChildNodeClick">
        <template #label="slotProps">
          <slot name="label" v-bind="slotProps"/>
        </template>

        <template #expand="slotProps">
          <slot name="expand" v-bind="slotProps"/>
        </template>

        <template #collapse="slotProps">
          <slot name="collapse" v-bind="slotProps"/>
        </template>
      </ShadcnTreeNode>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { TreeNode, TreeNodeEmits, TreeNodeProps } from './types'
import { ShadcnCheckbox } from '@/ui/checkbox'

const emit = defineEmits<TreeNodeEmits>()
const props = withDefaults(defineProps<TreeNodeProps>(), {
  selectedValues: () => [],
  checkable: false,
  cascade: false,
  isLastNode: false,
  dark: false,
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

// 判断当前节点是否是目标值的父节点
const isParentOfSelected = (node: TreeNode, selectedValue: any): boolean => {
  if (!node.children) {
    return false
  }
  return node.children.some(child => {
    if (child.value === selectedValue) {
      return true
    }
    return isParentOfSelected(child, selectedValue)
  })
}

watch(() => props.selectedValues, (newValues) => {
  // 如果当前节点被选中，或者是选中节点的父节点，则展开
  const shouldExpand = newValues.some(value => {
    return isParentOfSelected(props.node, value)
  })

  // 不是懒加载节点才自动展开
  if ((shouldExpand || props.selectedValues.includes(props.node.value))
      && !(props.node.isLeaf === false && !hasChildren.value && props.loadData)) {
    isExpanded.value = true
  }
}, { immediate: true })

const onExpand = async (event: Event) => {
  event.stopPropagation()

  // If the node has no child nodes and isLeaf is false and has a loadData function, it needs to be loaded
  if (!hasChildren.value && props.node.isLeaf === false && !isExpanded.value && props.loadData) {
    loading.value = true
    try {
      // Use callbacks to load data
      props.loadData(props.node, (children: TreeNode[]) => {
        props.node.children = children
        loading.value = false
        isExpanded.value = true
      })
    }
    catch (error) {
      console.error('Failed to load children:', error)
      loading.value = false
    }
  }
  else {
    isExpanded.value = !isExpanded.value
  }
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