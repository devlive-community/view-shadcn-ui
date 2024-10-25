<template>
  <div v-if="isInLayout" class="shadcn-layout-sider">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const isInLayout = inject('isInLayout', false)

if (!isInLayout) {
  console.warn('ShadcnLayoutSider must be placed inside ShadcnLayout.')
}
</script>
