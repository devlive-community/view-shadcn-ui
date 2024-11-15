<template>
  <button :aria-checked="isSelected"
          :data-state="isSelected ? 'checked' : 'unchecked'"
          :disabled="isDisabled"
          :class="[
              'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              'px-1 py-1',
              isSelected && 'bg-accent text-accent-foreground',
              {
                'cursor-pointer': !isDisabled,
                'cursor-not-allowed opacity-50': isDisabled
              },
              ...($attrs.class ? [$attrs.class] : [WrapperSize[finalSize]]),
          ]"
          @click="onToggle">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { ToggleEmits, ToggleGroupContext, ToggleProps } from './types'
import { WrapperSize } from '@/ui/common/size.ts'

const props = withDefaults(defineProps<ToggleProps>(), {
  disabled: false,
  size: 'default'
})
const emit = defineEmits<ToggleEmits>()

const group = inject<ToggleGroupContext | null>('toggleGroup', null)

const finalSize = computed(() => group?.size.value ?? props.size)
const isDisabled = computed(() => group?.disabled.value ?? props.disabled)

const isSelected = computed(() => {
  if (group) {
    return group.modelValue.value?.includes(props.value) ?? false
  }
  return props.modelValue === props.value
})

const onToggle = () => {
  if (isDisabled.value) {
    return
  }

  if (group) {
    const currentValue = group.modelValue.value || []
    let newValue

    if (isSelected.value) {
      newValue = currentValue.filter(v => v !== props.value)
    }
    else {
      if (group.multiple.value) {
        newValue = [...currentValue, props.value]
      }
      else {
        newValue = [props.value]
      }
    }

    group.onChange(newValue)
  }
  else {
    const newValue = isSelected.value ? null : props.value
    emit('update:modelValue', newValue)
    emit('on-change', newValue)
  }
}
</script>
