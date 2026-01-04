<template>
  <ShadcnSpace :size="[10, 10]" wrap>
    <slot/>
  </ShadcnSpace>
</template>

<script lang="ts" setup>
import { computed, defineEmits, defineProps, provide, reactive, watch } from 'vue'
import { ShadcnSpace } from '@/ui/space'
import { CheckboxEmits, CheckboxProps } from '@/ui/checkbox/types.ts'

const props = withDefaults(defineProps<CheckboxProps>(), {
  dark: false,
  glass: false,
  type: 'primary',
  size: 'default'
})

const emit = defineEmits<CheckboxEmits>()

const checkboxGroupState = reactive({
  modelValue: props.modelValue || []
})

watch(() => props.modelValue, (newVal) => {
  checkboxGroupState.modelValue = newVal || []
})

const updateModelValue = (value: any, checked: boolean) => {
  let newValue = [...checkboxGroupState.modelValue]

  if (checked) {
    if (!newValue.includes(value)) {
      newValue.push(value)
    }
  }
  else {
    newValue = newValue.filter(v => v !== value)
  }

  checkboxGroupState.modelValue = newValue
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
}

provide('checkboxGroup', {
  modelValue: checkboxGroupState,
  updateModelValue
})

provide('checkboxGroupDark', computed(() => props.dark))
provide('checkboxGroupGlass', computed(() => props.glass))
provide('checkboxGroupType', computed(() => props.type))
provide('checkboxGroupSize', computed(() => props.size))
</script>