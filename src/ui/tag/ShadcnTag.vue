<template>
  <div :class="['inline-flex items-center rounded-sm text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
            TagBackgroundType[type],
            border && 'border',
            border && TagBorderType[type],
            [type === 'default' ? 'text-gray-800' : 'text-white'],
            [color && 'text-white'],
            TagSize[size]
        ]"
       :style="[
           color && { backgroundColor: color },
           color && border && { borderColor: getHoverColor(color) }
       ]">
    <slot>{{ text }}</slot>
    <ShadcnIcon v-if="closable"
                icon="X"
                :class="['ml-2 h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-500',
                    border && 'border'
                ]"
                @click.stop="onClose"
                @keydown.enter="onClose"/>
  </div>
</template>

<script setup lang="ts">
import { TagBackgroundType, TagBorderType } from '@/ui/common/type.ts'
import { TagSize } from '@/ui/common/size.ts'
import { getHoverColor } from '@/utils/color.ts'

interface Props
{
  text?: string
  type?: keyof typeof TagBackgroundType
  border?: boolean
  size?: keyof typeof TagSize
  closable?: boolean
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  border: false,
  size: 'default',
  closable: false
})

const emit = defineEmits<{
  (e: 'on-close', value?: string): void
  (e: 'update:modelValue', value: boolean): void
}>()

const onClose = (event: Event) => {
  event.preventDefault()
  emit('on-close', props.text)
  emit('update:modelValue', false)
}
</script>
