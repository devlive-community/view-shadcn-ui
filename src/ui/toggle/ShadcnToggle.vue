<template>
  <button :aria-checked="isSelected"
          :data-state="isSelected ? 'checked' : 'unchecked'"
          :class="[
              'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
              'h-10 w-10 px-1 py-1',
              isSelected && 'bg-accent text-accent-foreground'
          ]"
          @click="onToggle">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ToggleEmits, ToggleProps } from './types'

const props = defineProps<ToggleProps>()
const emit = defineEmits<ToggleEmits>()

const isSelected = computed(() => props.modelValue === props.value)

const onToggle = () => {
  emit('update:modelValue', props.value)
  emit('on-change', props.value)
}
</script>
