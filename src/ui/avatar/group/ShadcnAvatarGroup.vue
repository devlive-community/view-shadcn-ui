<template>
  <div class="flex -space-x-2">
    <template v-for="(item, _index) in items" :key="_index">
      <ShadcnTooltip :content="item.name">
        <ShadcnAvatar class="ring-2 ring-background"
                      :src="item.src"
                      :alt="item.name"
                      :size="size"/>
      </ShadcnTooltip>
    </template>
  </div>
</template>

<script setup lang="ts">
import ShadcnAvatar from '@/ui/avatar'
import { AvatarGroupProps } from '@/ui/avatar/types.ts'
import ShadcnTooltip from '@/ui/tooltip'

withDefaults(defineProps<AvatarGroupProps>(), {
  size: 'default'
})
</script>
