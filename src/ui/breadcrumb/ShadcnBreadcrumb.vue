<template>
  <nav aria-label="breadcrumb" class="flex">
    <div :class="[
           'flex flex-wrap items-center gap-1.5 break-words text-sm w-fit',
           glass ? 'backdrop-blur-xl backdrop-saturate-150' : '',
           glass ? 'border border-white/20' : '',
           glass ? (dark ? 'bg-white/10' : 'bg-white/60') : '',
           glass ? 'shadow-lg shadow-black/5' : '',
           glass ? 'rounded-md px-3 py-2' : ''
         ]"
         :data-breadcrumb-id="breadcrumbId">
      <slot/>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, provide, ref, watch } from 'vue'
import { generateRandomId } from '@/utils/common.ts'
import type { BreadcrumbProps } from './types'

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  separator: '/',
  dark: false,
  glass: false
})
provide('breadcrumbSeparator', props.separator)
provide('breadcrumbDark', props.dark)
provide('breadcrumbGlass', props.glass)

// Tag that a parent node exists
provide('isBreadcrumb', true)

const breadcrumbId = ref(`breadcrumb-${generateRandomId()}`)
provide('breadcrumbId', breadcrumbId)

// Used to calculate the index of the current subassembly
const currentIndex = ref(0)
provide('getCurrentIndex', () => {
  currentIndex.value += 1
  return currentIndex.value - 1
})

// Used to calculate the total number of subassemblies
const totalItems = ref(0)
onMounted(() => {
  const updateTotalItems = () => {
    if (typeof document !== 'undefined') {
      totalItems.value = document.querySelectorAll(`[data-breadcrumb-parent="${breadcrumbId.value}"]`).length
    }
  }
  updateTotalItems()
})
provide('totalItems', totalItems)
watch(totalItems, () => currentIndex.value = 0)
</script>
