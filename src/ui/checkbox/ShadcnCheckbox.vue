<template>
  <div :class="[
                'inline-flex items-center cursor-pointer',
        ]"
       @click="onChange">
    <!-- Hidden Checkbox Input -->
    <input type="checkbox"
           :checked="isChecked"
           class="sr-only"
           :value="value"/>

    <!-- Custom Checkbox Style -->
    <div :class="['w-4 h-4 flex items-center justify-center rounded border transition-colors duration-300',
                  {
                    'border-blue-500': isChecked,
                    'border-gray-300': !isChecked,
                    'bg-blue-500': isChecked,
                    'bg-white': !isChecked
                  }]">
      <svg v-if="isChecked"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor"
           class="w-3 h-3 text-white">
        <path stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"/>
      </svg>
    </div>

    <!-- Label Slot -->
    <div v-if="$slots.label" class="ml-2 text-sm">
      <slot name="label"/>
    </div>
    <div v-else class="ml-2 text-sm">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue', 'on-change'])

const props = withDefaults(defineProps<{
  modelValue?: any,
  value?: any,
}>(), {
  modelValue: null,
  value: true
})

// Computed property to check if the checkbox is checked based on modelValue and value
const isChecked = computed(() => props.modelValue === props.value)

const onChange = () => {
  const newValue = isChecked.value ? null : props.value
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
}
</script>
