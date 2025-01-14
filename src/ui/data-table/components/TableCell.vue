<template>
  <div :style="{ width: calcSize(width) }">
    <ShadcnInput v-model="inputValue"
                 @blur="handleBlur"
                 @keydown.enter="handleBlur"
                 @keydown.esc="handleCancel">
    </ShadcnInput>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TextAlign } from '../types'
import ShadcnInput from '@/ui/input'
import { calcSize } from '@/utils/common.ts'

const props = defineProps<{
  value: any
  align?: TextAlign
  width: string
}>()

const emit = defineEmits<{
  'save': [value: any]
  'cancel': []
}>()

const inputValue = ref(props.value)

const handleBlur = () => {
  emit('save', inputValue.value)
}

const handleCancel = () => {
  emit('cancel')
}
</script>