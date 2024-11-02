<template>
  <div :class="['flex items-center text-sm p-2 hover:bg-gray-100 h-8 rounded-sm',
                 {
                   'cursor-not-allowed opacity-50': disabled,
                   'cursor-pointer': !disabled,
                   [TextType[type]]: selected
                 },
                 inGroup && 'ml-4'
       ]"
       @click="handleSelect">
    {{ label }}
  </div>
</template>

<script setup lang="ts">
import { defineProps, inject, onMounted, onUnmounted } from 'vue'
import { TextType } from '@/ui/common/type.ts'
import { SelectOptionProps } from '@/ui/select/types.ts'

const props = withDefaults(defineProps<SelectOptionProps>(), {
  type: 'primary'
})

const registerOption = inject('registerOption') as (option: SelectOptionProps) => void
const unregisterOption = inject('unregisterOption') as (value: any) => void
const selectOption = inject('selectOption') as (option: SelectOptionProps) => void
const inGroup = inject('inGroup', false)

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
