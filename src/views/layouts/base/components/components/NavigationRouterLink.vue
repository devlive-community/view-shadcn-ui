<template>
  <a v-if="external" :href="link" target="_blank">
    <slot></slot>
  </a>
  <RouterLink v-else :to="link">
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