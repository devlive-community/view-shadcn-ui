<template>
  <Button class="w-full">Test Button</Button>
  <Button class="w-full">Test Button 2</Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'

export default defineComponent({
  name: 'HomeIndex',
  components: {Button}
})
</script>
