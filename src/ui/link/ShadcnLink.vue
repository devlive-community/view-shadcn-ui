<template>
  <div class="w-fit cursor-pointer">
    <a v-if="external" class="block w-full cursor-pointer"
       :href="String(link)"
       :target="target">
      <slot/>
    </a>
    <RouterLink v-else class="block w-full cursor-pointer"
                :to="String(link)"
                :target="target">
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
