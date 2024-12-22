<template>
  <div class="relative w-full">
    <ShadcnInput type="date"
                 :value="formatDate(modelValue)"
                 :placeholder="placeholder"
                 @change="handleChange"/>
  </div>
</template>

<script setup lang="ts">
import { t } from '@/utils/locale'
import type { DatePickerEmits, DatePickerProps } from './types'

withDefaults(defineProps<DatePickerProps>(), {
  placeholder: t('datePicker.placeholder.date'),
  disabled: false
})

const emit = defineEmits<DatePickerEmits>()

// Format date to YYYY-MM-DD
// 格式化日期为 YYYY-MM-DD
const formatDate = (date: Date | undefined) => {
  if (!date) {
    return ''
  }
  return date.toISOString().split('T')[0]
}

// Handle date change event
// 处理日期变更事件
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const newDate = new Date(target.value)
  emit('update:modelValue', newDate)
  emit('on-change', newDate)
}
</script>