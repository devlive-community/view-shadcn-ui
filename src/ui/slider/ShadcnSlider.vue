<template>
  <div class="flex items-center w-full">
    <input v-model="internalValue"
           type="range"
           class="w-full appearance-none h-2 rounded bg-gray-200"
           :min="min"
           :max="max"
           :step="1"
           @input="onChange"/>
    <span class="ml-4">{{ internalValue }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue', 'on-change'])

const props = withDefaults(defineProps<{
  modelValue: number | string
  min?: number | string
  max?: number | string
}>(), {
  min: 0,
  max: 100
})

const internalValue = ref(props.modelValue)

watch(() => props.modelValue, (newValue: number | string) => internalValue.value = Number(newValue))

const min = computed(() => Number(props.min) ?? 0)
const max = computed(() => Number(props.max) ?? 100)

const onChange = () => {
  emit('update:modelValue', internalValue.value)
  emit('on-change', internalValue.value)
}
</script>
