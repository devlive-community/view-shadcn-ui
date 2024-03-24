<template>
  <a v-if="external" :href="link as string" target="_blank">
    <slot></slot>
  </a>
  <RouterLink v-else :to="link as string">
    <slot></slot>
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavigationRouterLink',
  props: {
    external: {
      type: Boolean
    },
    link: {
      type: String
    }
  }
})
</script>