<template>
  <div class="relative w-full">
    <ShadcnInput type="date"
                 :disabled="disabled"
                 :readonly="readonly"
                 :model-value="inputValue"
                 :placeholder="placeholder"
                 @change="handleChange"/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { t } from '@/utils/locale'
import type { DatePickerEmits, DatePickerProps } from './types'

const props = withDefaults(defineProps<DatePickerProps>(), {
  placeholder: t('datePicker.placeholder.date'),
  disabled: false,
  readonly: false
})

const emit = defineEmits<DatePickerEmits>()

// Format date to YYYY-MM-DD
// 格式化日期为 YYYY-MM-DD
const formatDate = (date: Date | string | undefined) => {
  if (!date) {
    return ''
  }
  if (typeof date === 'string') {
    return date
  }
  return date.toISOString().split('T')[0]
}

// Compute input value
// 计算输入值
const inputValue = computed(() => formatDate(props.modelValue))

// Handle date change event
// 处理日期变更事件
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const newValue = target.value

  emit('update:modelValue', newValue)
  emit('on-change', newValue)
}
</script>