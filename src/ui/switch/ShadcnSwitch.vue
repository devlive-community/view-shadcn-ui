<template>
  <Switch :class="{
            'data-[state=checked]:bg-blue-400': type === 'primary',
            'data-[state=checked]:bg-green-400': type === 'success',
            'data-[state=checked]:bg-yellow-400': type === 'warning',
            'data-[state=checked]:bg-red-400': type === 'error'
          }"
          :default-checked="modelValue"
          :checked="modelValue"
          @update:checked="onChange">
  </Switch>
</template>

<script setup lang="ts">
import { Switch } from '@/components/ui/switch'

const emit = defineEmits(['update:modelValue', 'on-change'])

withDefaults(defineProps<{
  modelValue?: boolean
  type?: 'primary' | 'success' | 'warning' | 'error'
}>(), {
  modelValue: false,
  type: 'primary'
})

const onChange = (value: boolean) => {
  emit('update:modelValue', value)
  emit('on-change', value)
}
</script>
