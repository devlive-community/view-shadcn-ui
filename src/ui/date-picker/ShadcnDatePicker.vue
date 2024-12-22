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
import { formatDate } from '@/utils/date.ts'

const props = withDefaults(defineProps<DatePickerProps>(), {
  placeholder: t('datePicker.placeholder.date'),
  disabled: false,
  readonly: false,
  format: 'YYYY-MM-DD'
})

const emit = defineEmits<DatePickerEmits>()

// Compute input value
// 计算输入值
const inputValue = computed(() => {
  if (!props.modelValue) {
    return ''
  }
  return formatDate(props.modelValue, props.format)
})

// Handle date change event
// 处理日期变更事件
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const newValue = target.value

  emit('update:modelValue', newValue)
  emit('on-change', newValue)
}
</script>