<template>
  <div :class="[
                'inline-flex items-center cursor-pointer',
        ]"
       @click="onChange">
    <!-- Radio Input -->
    <input type="radio"
           :value="value"
           :checked="modelValue === value"
           class="sr-only"/>

    <!-- Custom Radio Style -->
    <div :class="['w-4 h-4 flex items-center justify-center rounded-full border transition-colors duration-300',
                  {
                    'border-blue-500': modelValue === value,
                    'border-gray-300': modelValue !== value,
                    'bg-blue-500': modelValue === value,
                    'bg-white': modelValue !== value
                  }]">
      <div v-if="modelValue === value" class="w-2 h-2 bg-white rounded-full"/>
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
const emit = defineEmits(['update:modelValue', 'on-change'])

const props = withDefaults(defineProps<{
  modelValue?: any,
  value: any,
}>(), {
  modelValue: null,
  disabled: false
})

const onChange = () => {
  emit('update:modelValue', props.value)
  emit('on-change', props.value)
}
</script>
