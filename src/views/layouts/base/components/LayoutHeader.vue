<template>
  <div class="flex h-[var(--header-height)] flex-none items-center gap-4 bg-background p-4 md:px-8 border-b">
    I'm LayoutHeader
    <div class="ml-auto flex items-center space-x-4">
      <LanguageSwitcher/>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import LanguageSwitcher from '@/views/layouts/base/components/components/LanguageSwitcher.vue'

export default defineComponent({
  name: 'LayoutHeader',
  components: {
    LanguageSwitcher,
    Button
  }
})
</script>
