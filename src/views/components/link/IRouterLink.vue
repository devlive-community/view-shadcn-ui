<template>
  <a v-if="external" :href="link as string" :target="target">
    <slot></slot>
  </a>
  <RouterLink v-else :to="link as string">
    <slot></slot>
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IRouterLink',
  props: {
    external: {
      type: Boolean
    },
    link: {
      type: String
    },
    target: {
      type: String,
      default: '_blank'
    }
  }
})
</script>