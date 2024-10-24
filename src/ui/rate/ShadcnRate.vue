<template>
  <div class="flex items-center">
    <ShadcnSpace>
      <span v-for="index in toNumber(max)"
            :key="index"
            :class="['relative flex text-xl',
                    {
                      'cursor-not-allowed': disabled,
                      'cursor-pointer': !disabled
                    }
            ]"
            @click="onClick(index, $event)"
            @mousemove="handleMouseOver(index, $event)"
            @mouseleave="handleMouseLeave">
        <span class="relative block">
          <!-- Left -->
          <span :class="getStarClass(index, true)"
                class="absolute left-0 top-0 h-full overflow-hidden"
                :style="{ width: isHalfStar(index) ? '50%' : '100%' }">
            <slot name="character">★</slot>
          </span>
          <!-- Right -->
          <span :class="disabled ? 'text-gray-400' : 'text-gray-300'">
            <slot name="character">★</slot>
          </span>
        </span>
      </span>
      <span v-if="showText"
            :class="['ml-2 text-sm flex items-center',
                      TextType[props.type]
               ]">
        <ShadcnSpace :size="[0, 4]" class="flex items-center">
          <span>{{ modelValue }}</span>
          <slot name="text"/>
        </ShadcnSpace>
      </span>
    </ShadcnSpace>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref, watch } from 'vue'
import { toNumber } from 'lodash'
import ShadcnSpace from '@/ui/space'
import { TextType } from '@/ui/common/type.ts'

const props = withDefaults(defineProps<{
  modelValue: number
  max?: number | string
  allowHalf?: boolean
  type?: keyof typeof TextType
  disabled?: boolean
  showText?: boolean
}>(), {
  max: 5,
  allowHalf: false,
  type: 'primary',
  disabled: false,
  showText: false
})

const emit = defineEmits(['update:modelValue', 'on-change'])

const hoverValue = ref(0)
const isHalf = ref(false)

const isLeftHalf = (event: MouseEvent) => {
  const { offsetX, target } = event
  const width = (target as HTMLElement).clientWidth
  return offsetX < width / 2
}

const onClick = (index: number, event: MouseEvent) => {
  if (!props.disabled) {
    let newValue = index
    if (props.allowHalf && isLeftHalf(event)) {
      newValue -= 0.5
    }
    emit('update:modelValue', newValue)
    emit('on-change', newValue)
  }
}

const handleMouseOver = (index: number, event: MouseEvent) => {
  if (!props.disabled) {
    if (props.allowHalf && isLeftHalf(event)) {
      hoverValue.value = index - 0.5
      isHalf.value = true
    }
    else {
      hoverValue.value = index
      isHalf.value = false
    }
  }
}

const handleMouseLeave = () => {
  if (!props.disabled) {
    hoverValue.value = props.modelValue || 0
    isHalf.value = props.modelValue % 1 !== 0
  }
}

watch(() => props.modelValue, (newValue) => {
  hoverValue.value = newValue || 0
  isHalf.value = newValue % 1 !== 0
}, { immediate: true })

const isHalfStar = (index: number) => {
  return index === Math.ceil(hoverValue.value) && isHalf.value
}

const getStarClass = (index: number, isLeft: boolean) => {
  const isFull = index <= hoverValue.value
  const isHalf = isHalfStar(index) && isLeft

  return [
    'transition-all duration-150',
    (isFull || isHalf) ? TextType[props.type] : 'text-gray-300'
  ]
}
</script>
