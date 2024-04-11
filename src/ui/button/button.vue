<template>
  <Button :class="size">
    <span v-if="text">{{ text }}</span>
    <slot v-else name="text"/>
  </Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Size } from '@/ui/enum/Size.ts'
import { Button } from '@/components/ui/button'

export default defineComponent({
  name: 'IButton',
  components: {
    Button
  },
  props: {
    text: {
      type: String
    },
    size: {
      type: String,
      default: Size.default
    }
  }
})
</script>
