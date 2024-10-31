<template>
  <div class="cursor-pointer hover:text-blue-500">
    <a v-if="external" :href="String(link)">
      <slot/>
    </a>
    <RouterLink v-else :to="String(link)">
      <slot/>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  external?: boolean
  link?: string
}>(), {
  external: false
})
</script>
