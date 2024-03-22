<template>
  <div class="flex h-[var(--header-height)] flex-none items-center gap-4 bg-background p-4 md:px-8 border-b">
    I'm LayoutHeader
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'

export default defineComponent({
  name: 'LayoutHeader',
  components: {Button}
})
</script>