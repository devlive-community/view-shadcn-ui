<template>
  <div :id="item.key" class="py-0.5">
    <div class="flex items-center gap-x-0.5 w-full">
      <div v-if="item.children || item.level === 0"
           class="size-6 flex justify-center items-center rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
        <button v-if="item.children" @click="toggleChildren">
          <svg class="size-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path v-if="!isExpanded" d="M12 5v14"></path>
          </svg>
        </button>
      </div>
      <div :class="cn('grow px-1.5 rounded-md cursor-pointer',
                      selectedKey === item.key && 'bg-gray-100',
                      selectedKey !== item.key && 'hover:bg-gray-100')"
           @click="selectItem(item.key)">
        <div class="flex items-center gap-x-3">
          <svg v-if="item.children" class="flex-shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
          </svg>
          <svg v-else class="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          </svg>
          <div class="grow">
            <slot v-if="$slots.node" name="node" :node="item"/>
            <span v-else class="text-sm text-gray-800">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="item.children && isExpanded" class="pl-6 flex">
      <div class="border-l-2 border-gray-200 -ml-3.5"></div>
      <div class="w-full">
        <div v-for="child in item.children" :key="child.key" class="relative pl-4">
          <TreeNode :item="child" :selectedKey="selectedKey" @select-item="onSelectItem">
            <!-- @ts-ignore -->
            <template v-if="$slots.node" #node="{ node }">
              <slot name="node" :node="node"/>
            </template>
          </TreeNode>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { cn } from '@/lib/utils.ts'
import { Tree } from '@/views/components/tree/Tree.ts'

export default defineComponent({
  name: 'TreeNode',
  props: {
    item: {
      type: Object as () => Tree,
      required: true
    },
    selectedKey: {
      type: String as () => string | null | undefined,
      required: false
    }
  },
  emits: ['select-item'],
  setup(props, { emit })
  {
    console.debug(props)
    const isExpanded = ref(false)

    const toggleChildren = () => {
      isExpanded.value = !isExpanded.value
    }

    const selectItem = (key: string | null | undefined) => {
      emit('select-item', key)
    }

    const onSelectItem = (key: string | null | undefined) => {
      selectItem(key)
    }

    return {
      isExpanded,
      toggleChildren,
      selectItem,
      onSelectItem,
      cn
    }
  }
})
</script>
