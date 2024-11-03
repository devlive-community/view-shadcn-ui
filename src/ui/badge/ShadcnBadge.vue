<template>
  <div :class="['relative', $slots.default && 'inline-block']">
    <slot/>

    <div :class="cn('top-0 right-0 rounded-full w-fit text-white text-xs font-medium',
                    dot ? 'p-1' : 'px-1.5 py-0.5',
                    $slots.default && 'absolute translate-x-1/2 -translate-y-1/2',
                    ButtonBackgroundType[type]
          )">
      <slot name="text">
        {{ displayedText }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import { computed } from 'vue'
import { isNaN, toNumber } from 'lodash'
import { ButtonBackgroundType } from '@/ui/common/type.ts'

const props = withDefaults(defineProps<{
  text?: string | number
  type?: keyof typeof ButtonBackgroundType
  dot?: boolean
  max?: number | string
}>(), {
  type: 'primary',
  max: Infinity
})

const displayedText = computed(() => {
  if (typeof props.text === 'number' || !isNaN(toNumber(props.text))) {
    const textAsNumber = toNumber(props.text)
    const maxAsNumber = toNumber(props.max)
    return textAsNumber > maxAsNumber ? `${ maxAsNumber }+` : textAsNumber
  }
  return props.text
})
</script>
