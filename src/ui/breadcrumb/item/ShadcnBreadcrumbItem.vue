<template>
  <div class="inline-flex items-center gap-1.5"
       :data-breadcrumb-parent="breadcrumbId">
    <component :is="href ? 'a' : 'span'"
               :href="href"
               :class="['transition-colors hover:text-foreground',
                        href ? 'cursor-pointer' : 'cursor-default',
                        isLastItem && 'font-medium text-foreground'
                ]">
      <slot/>
    </component>

    <span v-if="!isLastItem" class="text-gray-200">
      {{ separator }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'

defineProps<{
  href?: string
}>()

const separator = inject('breadcrumbSeparator')

const breadcrumbId = inject('breadcrumbId')
if (!breadcrumbId) {
  throw new Error(`ShadcnBreadcrumbItem has invalid parent id ${ breadcrumbId }`)
}

const isBreadcrumb = inject('isBreadcrumb', false)
if (!isBreadcrumb) {
  throw new Error('ShadcnBreadcrumbItem must be used within ShadcnBreadcrumb')
}

// Get the current index to determine whether it is the last child element
const totalItems = inject('totalItems', ref(0))
const getCurrentIndex = inject('getCurrentIndex', () => 0)
const currentIndex = getCurrentIndex()
const isLastItem = computed(() => currentIndex === totalItems.value - 1)
</script>
