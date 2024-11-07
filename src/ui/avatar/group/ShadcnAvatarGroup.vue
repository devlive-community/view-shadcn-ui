<template>
  <div class="flex -space-x-3">
    <template v-for="(item, _index) in displayItems" :key="_index">
      <ShadcnTooltip :content="item.name">
        <ShadcnAvatar class="ring-2 ring-background"
                      :src="item.src"
                      :alt="item.name"
                      :size="size"
                      :square="square"/>
      </ShadcnTooltip>
    </template>
    <ShadcnAvatar v-if="remainingCount > 0" class="text-gray-500 text-sm font-thin"
                  :alt="`+${remainingCount}`"
                  :size="size"
                  :square="square"/>
  </div>
</template>

<script setup lang="ts">
import ShadcnAvatar from '@/ui/avatar'
import { AvatarGroupProps } from '@/ui/avatar/types.ts'
import ShadcnTooltip from '@/ui/tooltip'
import { computed } from 'vue'

const props = withDefaults(defineProps<AvatarGroupProps>(), {
  size: 'default',
  square: false
})

const displayItems = computed(() => {
  return props.items?.slice(0, (Number(props.max) || Infinity))
})

const remainingCount = computed(() => {
  return Math.max(0, (props.items?.length ?? 0) - (Number(props.max) || Infinity))
})
</script>
