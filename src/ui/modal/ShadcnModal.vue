<template>
  <Teleport to="body">
    <div v-if="modelValue"
         class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black/50 transition-opacity"
           @click="handleClose"/>

      <!-- Dialog -->
      <div :class="cn('relative bg-white z-50 flex flex-col animate-in fade-in-0 zoom-in-95',
                      'w-full max-w-lg mx-auto rounded-sm',
                      width && `min-w-[${width}%] w-[${width}%] max-w-[${width}%]`,
                      height && `min-h-[${height}%] h-[${height}%] max-h-[${height}%]`)">
        <!-- Header -->
        <div v-if="$slots.title || title"
             class="border-b p-2">
          <h2 class="text-lg font-semibold">
            <span v-if="title">{{ title }}</span>
            <slot v-else name="title"/>
          </h2>

          <p v-if="$slots.description || description"
             class="text-sm text-muted-foreground">
            <span v-if="description">{{ description }}</span>
            <slot v-else name="description"/>
          </p>
        </div>

        <!-- Content -->
        <div class="p-2 flex-1 overflow-auto">
          <slot name="content"/>
        </div>

        <!-- Footer -->
        <div class="border-t p-2 flex justify-end">
          <slot v-if="$slots.footer" name="footer"/>
          <div class="space-x-2" v-else>
            <ShadcnButton type="danger" @click="onCancel">
              {{ cancelText }}
            </ShadcnButton>
            <ShadcnButton @click="onOk">
              {{ okText }}
            </ShadcnButton>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import ShadcnButton from '@/ui/button'

const validateWidthHeight = (value: number) => {
  return value >= 10 && value <= 100 && value % 10 === 0
}

const emit = defineEmits(['on-cancel', 'on-ok', 'update:modelValue'])

interface Props
{
  modelValue: boolean
  title?: string
  description?: string
  width?: number
  height?: number
  okText?: string
  cancelText?: string
}

const props = withDefaults(defineProps<Props>(), {
  okText: 'OK',
  cancelText: 'Cancel'
})

if ((props.width && !validateWidthHeight(props.width)) || (props.height && !validateWidthHeight(props.height))) {
  console.error('Width or Height must be between 10 and 100 and multiples of 10.')
}

const onCancel = () => {
  emit('on-cancel')
  emit('update:modelValue', false)
}

const onOk = () => {
  emit('on-ok')
  emit('update:modelValue', false)
}

const handleClose = () => {
  emit('update:modelValue', false)
}
</script>
