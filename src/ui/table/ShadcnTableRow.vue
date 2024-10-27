<template>
  <tr :class="['border-b border-gray-200 last:border-b-0 hover:bg-gray-50',
              stripe && 'bg-gray-50'
      ]">
    <slot/>
  </tr>
</template>

<script setup lang="ts">
import { inject } from 'vue'

withDefaults(defineProps<{
  stripe?: boolean
}>(), {
  stripe: false
})

const isTable = inject('ShadcnTable', false)
if (!isTable) {
  throw new Error('ShadcnTableRow must be used within ShadcnTable')
}
</script>
