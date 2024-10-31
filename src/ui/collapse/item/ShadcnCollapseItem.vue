<template>
  <div class="collapse-item border-b last:border-b-0 border-gray-200">
    <div :class="['flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-50 bg-gray-50']"
         @click="handleClick">
      <h3 class="text-sm font-medium">{{ title }}</h3>
      <ShadcnIcon icon="ChevronDown"
                  :class="['h-4 w-4 text-gray-500 transition-transform duration-200',
                      { 'transform rotate-180': isExpanded }
                  ]"/>
    </div>

    <Transition enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform scale-y-95 opacity-0"
                enter-to-class="transform scale-y-100 opacity-100"
                leave-active-class="transition duration-200 ease-out"
                leave-from-class="transform scale-y-100 opacity-100"
                leave-to-class="transform scale-y-95 opacity-0">
      <div v-show="isExpanded" class="px-4 py-2 text-sm text-gray-600">
        <slot/>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref, Ref } from 'vue'
import ShadcnIcon from '@/ui/icon'

interface Props
{
  title: string
  name: string
}

const props = defineProps<Props>()

const expandedItems = inject<Ref<string[]>>('expandedItems')
const toggleItem = inject<(name: string) => void>('toggleItem')
const parentExists = ref(false)

onMounted(() => {
  if (!expandedItems || !toggleItem) {
    console.error('ShadcnCollapseItem must be used inside ShadcnCollapse')
    return
  }
  parentExists.value = true
})

// Calculates whether the current item is expanded
const isExpanded = computed(() => {
  if (!expandedItems) {
    return false
  }
  return expandedItems.value.includes(props.name)
})

// Handle click events
const handleClick = () => {
  if (!parentExists.value) {
    return
  }
  toggleItem?.(props.name)
}
</script>
