<template>
  <div class="cursor-pointer">
    <a v-if="external" :href="String(link)" :target="target">
      <slot/>
    </a>
    <RouterLink v-else :to="String(link)" :target="target">
      <slot/>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  external?: boolean
  link?: string
  target?: string
}>(), {
  external: false,
  target: '_self'
})
</script>
