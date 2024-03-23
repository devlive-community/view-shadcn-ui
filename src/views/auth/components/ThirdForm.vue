<template>
  <div class="relative my-2">
    <div class="absolute inset-0 flex items-center">
      <span class="w-full border-t"/>
    </div>
    <div class="relative flex justify-center text-xs uppercase">
      <span class="bg-background px-2 text-muted-foreground">{{ $t('user.common.continueWith') }}</span>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <Button variant='outline' class="w-full">
      <Github class="mr-2 h-4 w-4"/>
      GitHub
    </Button>
    <Button variant='outline' class="w-full">
      <Facebook class="mr-2 h-4 w-4"/>
      Facebook
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import { Facebook, Github } from 'lucide-vue-next'

export default defineComponent({
  name: 'ThirdForm',
  components: {Facebook, Github, Button}
})
</script>
