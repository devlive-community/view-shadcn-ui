<template>
  <div :class="['flex items-center text-sm p-2 hover:bg-gray-100 h-8 rounded-sm',
                 {
                   'cursor-not-allowed opacity-50': disabled,
                   'cursor-pointer': !disabled,
                   [TextType[type]]: isSelected,
                   'bg-gray-50': isSelected
                 },
                 inGroup && 'ml-4'
       ]"
       :data-parent="parentName"
       @click="onSelect">
    <div :class="['flex items-center gap-2']">
      <div v-if="context.multiple"
           class="w-4 h-4 border rounded flex items-center justify-center">
        <svg v-if="isSelected"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             class="w-3 h-3">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, inject, onMounted, onUnmounted, watch } from 'vue'
import { TextType } from '@/ui/common/type.ts'
import { SelectOptionProps } from '@/ui/select/types.ts'

const props = withDefaults(defineProps<SelectOptionProps>(), {
  type: 'primary'
})

const context = inject('selectContext') as {
  registerOption: (option: SelectOptionProps) => void
  unregisterOption: (value: any) => void
  selectOption: (option: SelectOptionProps) => void
  modelValue: any
  multiple: boolean
  parentName: string
}

const inGroup = inject('inGroup', false)
const parentName = context.parentName

const isSelected = computed(() => {
  if (context.multiple) {
    return Array.isArray(context.modelValue.value) &&
        context.modelValue.value.includes(props.value)
  }
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
