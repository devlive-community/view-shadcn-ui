<template>
  <div v-if="modelValue"
       role="status"
       aria-label="loading"
       :class="['inline-block animate-spin rounded-full h-4 w-4 border-2',
                BorderRightType[type]
       ]">
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { BorderRightType } from '@/ui/common/type.ts'

const emit = defineEmits(['update:modelValue', 'on-change'])

const props = withDefaults(defineProps<{
  modelValue: boolean
  type?: keyof typeof BorderRightType
}>(), {
  modelValue: true,
  type: 'primary'
})

watch(() => props.modelValue, (newValue) => {
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
})
</script>
