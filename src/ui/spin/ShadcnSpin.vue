<template>
  <div v-if="modelValue"
       role="status"
       aria-label="loading"
       class="relative inline-flex items-center justify-center">
    <template v-if="$slots.default">
      <slot/>
    </template>
    <div v-else
         :class="['inline-block animate-spin rounded-full border-2',
                  WrapperSize[size],
                  BorderRightType[type]
          ]"/>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { BorderRightType } from '@/ui/common/type.ts'
import { WrapperSize } from '@/ui/common/size.ts'

const emit = defineEmits(['update:modelValue', 'on-change'])

const props = withDefaults(defineProps<{
  modelValue: boolean
  type?: keyof typeof BorderRightType
  size?: keyof typeof WrapperSize
}>(), {
  modelValue: true,
  type: 'primary',
  size: 'default'
})

watch(() => props.modelValue, (newValue) => {
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
})
</script>
