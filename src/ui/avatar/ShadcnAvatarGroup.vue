<template>
  <div class="flex -space-x-3">
    <template v-for="(item, _index) in displayItems" :key="_index">
      <ShadcnTooltip :content="item.name" :dark="dark">
        <ShadcnAvatar :class="['ring-2', dark ? 'ring-gray-800' : 'ring-background']"
                      :src="item.src"
                      :alt="item.name"
                      :size="size"
                      :square="square"
                      :dark="dark"/>
      </ShadcnTooltip>
    </template>
    <ShadcnAvatar v-if="remainingCount > 0"
                  :class="['text-sm font-thin', dark ? 'text-gray-400' : 'text-gray-500']"
                  :alt="`+${remainingCount}`"
                  :size="size"
                  :square="square"
                  :dark="dark"/>
  </div>
</template>

<script setup lang="ts">
import { ShadcnAvatar } from '@/ui/avatar'
import { AvatarGroupProps } from '@/ui/avatar/types.ts'
import { ShadcnTooltip } from '@/ui/tooltip'
import { computed } from 'vue'

const props = withDefaults(defineProps<AvatarGroupProps>(), {
  size: 'default',
  square: false,
  dark: false
})

const displayItems = computed(() => {
  return props.items?.slice(0, (Number(props.max) || Infinity))
})

const remainingCount = computed(() => {
  return Math.max(0, (props.items?.length ?? 0) - (Number(props.max) || Infinity))
})
</script>