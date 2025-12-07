<template>
  <div :class="['inline-flex items-center rounded-sm text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
            !color && (dark ? getDarkBackgroundClass(type) : TagBackgroundType[type]),
            border && 'border',
            border && !color && (dark ? getDarkBorderClass(type) : TagBorderType[type]),
            !color && (type === 'default' ? (dark ? 'text-gray-200' : 'text-gray-800') : 'text-white'),
            color && 'text-white',
            TagSize[size]
        ]"
       :style="[
           color && { backgroundColor: color },
           color && border && { borderColor: getHoverColor(color) }
       ]">
    <slot>{{ text }}</slot>
    <ShadcnIcon v-if="closable"
                icon="X"
                :class="['ml-2 h-4 w-4 cursor-pointer']"
                @click.stop="onClose"
                @keydown.enter="onClose"/>
  </div>
</template>

<script setup lang="ts">
import { TagBackgroundType, TagBorderType } from '@/ui/common/type.ts'
import { TagSize } from '@/ui/common/size.ts'
import { getHoverColor } from '@/utils/color.ts'
import { ShadcnIcon } from "@/ui/icon";

interface Props
{
  text?: string
  name?: string
  type?: keyof typeof TagBackgroundType
  border?: boolean
  size?: keyof typeof TagSize
  closable?: boolean
  color?: string
  dark?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  border: false,
  size: 'default',
  closable: false,
  dark: false
})

const getDarkBackgroundClass = (type: keyof typeof TagBackgroundType) => {
  const darkClasses = {
    default: 'bg-gray-700',
    primary: 'bg-blue-700',
    success: 'bg-green-700',
    warning: 'bg-yellow-700',
    danger: 'bg-red-700'
  }
  return darkClasses[type] || darkClasses.default
}

const getDarkBorderClass = (type: keyof typeof TagBackgroundType) => {
  const darkClasses = {
    default: 'border-gray-600',
    primary: 'border-blue-600',
    success: 'border-green-600',
    warning: 'border-yellow-600',
    danger: 'border-red-600'
  }
  return darkClasses[type] || darkClasses.default
}

const emit = defineEmits<{
  (e: 'on-close', value?: string): void
  (e: 'update:modelValue', value: boolean): void
}>()

const onClose = (event: Event) => {
  event.preventDefault()
  emit('on-close', props.name || props.text)
  emit('update:modelValue', false)
}
</script>
