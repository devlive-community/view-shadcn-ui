<template>
  <div :style="{ width: calcSize(width) }">
    <ShadcnInput v-model="inputValue"
                 :dark="dark"
                 @on-blur="handleBlur"
                 @keydown.enter="handleBlur"
                 @keydown.esc="handleCancel">
    </ShadcnInput>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { ShadcnInput } from '@/ui/input'
import { calcSize } from '@/utils/common.ts'

const props = defineProps<{
  value: any
  width: string
  isRowEditing?: boolean
  fieldKey?: string
  dark?: boolean
  onRowValueChange?: (key: string, value: any) => void
}>()

const emit = defineEmits<{
  'save': [value: any]
  'cancel': []
}>()

const inputValue = ref(props.value)

watch(() => props.value, (newValue) => {
  inputValue.value = newValue
})

const handleBlur = () => {
  if (props.isRowEditing && props.fieldKey && props.onRowValueChange) {
    // 行编辑模式：更新行编辑状态
    props.onRowValueChange(props.fieldKey, inputValue.value)
  }
  else {
    // 单元格编辑模式：直接保存
    emit('save', inputValue.value)
  }
}

const handleCancel = () => {
  emit('cancel')
}
</script>