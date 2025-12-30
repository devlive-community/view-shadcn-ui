<template>
  <div v-if="modelValue"
       role="status"
       aria-label="loading"
       :class="['inline-flex items-center justify-center',
                fixed ? 'absolute inset-0' : 'relative'
       ]">
    <!-- Translucent background layer -->
    <div v-if="fixed"
         :class="['absolute inset-0 z-10',
                  glass ? 'backdrop-blur-xl backdrop-saturate-150' : 'opacity-65',
                  glass ? (dark ? 'bg-white/10' : 'bg-white/30') : (dark ? 'bg-gray-900' : 'bg-gray-50')
         ]"/>

    <!-- Loading layer -->
    <div class="z-20">
      <template v-if="$slots.default">
        <slot/>
      </template>
      <div v-else :class="['inline-block animate-spin rounded-full border-2',
                           'shadow-lg p-2',
                           glass ? 'bg-transparent backdrop-blur-sm' : (fixed ? 'bg-transparent' : (dark ? 'bg-gray-800' : 'bg-white')),
                           glass && 'shadow-black/5 border-opacity-60',
                           WrapperSize[size],
                           BorderRightType[type]
                   ]"/>
    </div>
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
  fixed?: boolean
  dark?: boolean
  glass?: boolean
}>(), {
  modelValue: true,
  type: 'primary',
  size: 'default',
  fixed: false,
  dark: false,
  glass: false
})

watch(() => props.modelValue, (newValue) => {
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
})
</script>