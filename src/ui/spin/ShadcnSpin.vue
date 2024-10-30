<template>
  <div v-if="modelValue" class="inline-block animate-spin border-solid border-current rounded-full"
       role="status"
       aria-label="loading"
       :class="['h-4 w-4 border-2 border-l-transparent border-r-transparent border-t-transparent']">
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'

const emit = defineEmits(['update:modelValue', 'on-change'])

const props = withDefaults(defineProps<{
  modelValue: boolean
}>(), {
  modelValue: true
})

watch(() => props.modelValue, (newValue) => {
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
})
</script>
