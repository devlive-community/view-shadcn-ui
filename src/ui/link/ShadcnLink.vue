<template>
  <a v-if="external"
     :class="[
              'block w-full cursor-pointer',
              styled && (dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'),
              !styled && dark ? 'text-gray-200' : ''
     ]"
     :href="String(link)"
     :target="target">
    <slot/>
  </a>
  <RouterLink v-else
              :class="[
                       'block w-full cursor-pointer',
                       styled && (dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'),
                       !styled && dark ? 'text-gray-200' : ''
              ]"
              :to="String(link)"
              :target="target">
    <slot/>
  </RouterLink>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  external?: boolean
  link?: string
  target?: string
  styled?: boolean
  dark?: boolean
}>(), {
  external: false,
  target: '_self',
  styled: false,
  dark: false
})
</script>
