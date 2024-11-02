<template>
  <div :class="['flex items-center text-sm p-2 hover:bg-gray-100 h-8 rounded-sm',
                 {
                   'cursor-not-allowed opacity-50': disabled,
                   'cursor-pointer': !disabled,
                   [TextType[type]]: isSelected
                 },
                 inGroup && 'ml-4'
       ]"
       :data-parent="parentName"
       @click="onSelect">
    {{ label }}
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, inject, onMounted, onUnmounted, watch } from 'vue'
import { TextType } from '@/ui/common/type.ts'
import { SelectOptionProps } from '@/ui/select/types.ts'

const props = withDefaults(defineProps<SelectOptionProps>(),
    {
      type: 'primary'
    })

const context = inject('selectContext') as {
  registerOption: (option: SelectOptionProps) => void
  unregisterOption: (value: any) => void
  selectOption: (option: SelectOptionProps) => void
  modelValue: any
  parentName: string
}

const inGroup = inject('inGroup', false)
const parentName = context.parentName

const isSelected = computed(() => {
  return context.modelValue.value === props.value
})

const onSelect = () => {
  if (!props.disabled) {
    context.selectOption({
      value: props.value,
      label: props.label,
      disabled: props.disabled,
      selected: isSelected.value,
      type: props.type,
      parentName
    })
  }
}

// Make sure to re-register whenever the attributes change
watch([() => props.value, () => props.label, () => props.disabled, () => props.type], () => {
  if (props.value !== undefined && props.label) {
    context.registerOption({
      value: props.value,
      label: props.label,
      disabled: props.disabled,
      selected: isSelected.value,
      type: props.type,
      parentName
    })
  }
}, { immediate: true })

onMounted(() => {
  if (props.value !== undefined && props.label) {
    context.registerOption({
      value: props.value,
      label: props.label,
      disabled: props.disabled,
      selected: isSelected.value,
      type: props.type,
      parentName
    })
  }
})

onUnmounted(() => {
  if (props.value !== undefined) {
    context.unregisterOption(props.value)
  }
})
</script>
