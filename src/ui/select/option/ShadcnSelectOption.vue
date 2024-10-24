<template>
  <div :class="['flex items-center p-2 hover:bg-gray-200 h-8',
                 {
                   'cursor-not-allowed opacity-50': disabled,
                   'cursor-pointer': !disabled,
                   [TextType[type]]: selected
                 }
               ]"
       @click="handleSelect">
    {{ label }}
  </div>
</template>

<script setup lang="ts">
import { defineProps, inject, onMounted, onUnmounted } from 'vue'
import { TextType } from '@/ui/common/type.ts'

const props = withDefaults(defineProps<{
  value: any
  label: string
  selected?: boolean
  disabled?: boolean
  type?: keyof typeof TextType
}>(), {
  type: 'primary'
})

const registerOption = inject('registerOption') as (option: ShadcnOption) => void
const unregisterOption = inject('unregisterOption') as (value: any) => void
const selectOption = inject('selectOption') as (option: ShadcnOption) => void

const handleSelect = () => {
  if (!props.disabled) {
    selectOption({
      value: props.value,
      label: props.label,
      disabled: props.disabled,
      selected: props.selected
    })
  }
}

onMounted(() => {
  registerOption({
    value: props.value,
    label: props.label,
    disabled: props.disabled,
    selected: props.selected
  })
})

onUnmounted(() => {
  unregisterOption(props.value)
})
</script>
