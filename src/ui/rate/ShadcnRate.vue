<template>
  <div class="flex items-center">
    <span v-for="index in 5"
          :key="index"
          :class="['cursor-pointer',
                   index <= hoverValue ? 'text-blue-400' : 'text-gray-300'
                  ]"
          @click="onClick(index)"
          @mouseover="handleMouseOver(index)"
          @mouseleave="handleMouseLeave">
      <slot name="icon">
        ★
      </slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref, watch } from 'vue'

const props = defineProps<{
  modelValue: number
}>()

const emit = defineEmits(['update:modelValue', 'on-change'])

const hoverValue = ref(0)

const onClick = (index: number) => {
  emit('update:modelValue', index)
  emit('on-change', index)
}

const handleMouseOver = (index: number) => {
  hoverValue.value = index
}

const handleMouseLeave = () => {
  hoverValue.value = props.modelValue || 0
}

watch(() => props.modelValue, (newValue) => {
  hoverValue.value = newValue || 0
}, { immediate: true })
</script>
