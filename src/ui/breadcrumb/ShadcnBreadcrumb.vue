<template>
  <nav aria-label="breadcrumb" class="flex">
    <div class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground"
         :data-breadcrumb-id="breadcrumbId">
      <slot/>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, provide, ref, watch } from 'vue'
import { generateRandomId } from '@/utils/common.ts'

const props = withDefaults(defineProps<{
  separator?: string
}>(), {
  separator: '/'
})
provide('breadcrumbSeparator', props.separator)

// Tag that a parent node exists
provide('isBreadcrumb', true)

const breadcrumbId = ref(`breadcrumb-${ generateRandomId() }`)
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
      totalItems.value = document.querySelectorAll(`[data-breadcrumb-parent="${ breadcrumbId.value }"]`).length
    }
  }
  updateTotalItems()
})
provide('totalItems', totalItems)
watch(totalItems, () => currentIndex.value = 0)
</script>
