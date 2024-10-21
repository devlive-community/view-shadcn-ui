<template>
  <Switch :default-checked="modelValue"
          :checked="modelValue"
          @update:checked="onChange">
  </Switch>
</template>

<script setup lang="ts">
import { Switch } from '@/components/ui/switch'

const emit = defineEmits(['update:modelValue', 'on-change'])

withDefaults(defineProps<{
  modelValue?: boolean
}>(), {
  modelValue: false
})

const onChange = (value: boolean) => {
  emit('update:modelValue', value)
  emit('on-change', value)
}
</script>
