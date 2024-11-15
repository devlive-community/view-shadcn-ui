<template>
  <button :aria-checked="isSelected"
          :data-state="isSelected ? 'checked' : 'unchecked'"
          :disabled="disabled"
          :class="[
              'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              'px-1 py-1',
              isSelected && 'bg-accent text-accent-foreground',
              {
                'cursor-pointer': !disabled,
                'cursor-not-allowed opacity-50': disabled
              },
              WrapperSize[size]
          ]"
          @click="onToggle">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ToggleEmits, ToggleProps } from './types'
import { WrapperSize } from '@/ui/common/size.ts'

const props = withDefaults(defineProps<ToggleProps>(), {
  disabled: false,
  size: 'default'
})
const emit = defineEmits<ToggleEmits>()

const isSelected = computed(() => props.modelValue === props.value)

const onToggle = () => {
  if (!props.disabled) {
    emit('update:modelValue', isSelected.value ? null : props.value)
    emit('on-change', isSelected.value ? null : props.value)
  }
}
</script>
