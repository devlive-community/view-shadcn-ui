<template>
  <Teleport to="body">
    <div v-if="modelValue"
         class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black/50 transition-opacity"
           @click="onClose"/>

      <!-- Dialog -->
      <div :class="cn('relative bg-white z-50 flex flex-col animate-in fade-in-0 zoom-in-95',
                      'w-full max-w-lg mx-auto rounded-sm',
                      width && `min-w-[${width}%] w-[${width}%] max-w-[${width}%]`,
                      height && `min-h-[${height}%] h-[${height}%] max-h-[${height}%]`)">
        <!-- Header -->
        <div v-if="$slots.title || title"
             class="border-b p-2">
          <div class="flex justify-between">
            <div>
              <!-- Title -->
              <h2 class="text-lg font-semibold">
                <span v-if="title">{{ title }}</span>
                <slot v-else name="title"/>
              </h2>

              <!-- Description -->
              <p v-if="$slots.description || description"
                 class="text-sm text-muted-foreground">
                <span v-if="description">{{ description }}</span>
                <slot v-else name="description"/>
              </p>
            </div>

            <!-- Close -->
            <div v-if="closable" class="flex items-center cursor-pointer" @click="onClose">
              <slot name="close">
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="w-5 h-5 text-gray-400 hover:text-muted-foreground">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </slot>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="p-2 flex-1 overflow-auto">
          <slot v-if="$slots.content" name="content"/>
          <slot v-else/>
        </div>

        <!-- Footer -->
        <div v-if="$slots.footer" class="border-t p-2 flex justify-end">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import { ModalProps } from '@/ui/modal/types.ts'

const validateWidthHeight = (value: number) => {
  return value >= 10 && value <= 100 && value % 10 === 0
}

const emit = defineEmits(['on-close', 'update:modelValue'])

const props = withDefaults(defineProps<ModalProps>(), {
  okText: 'OK',
  cancelText: 'Cancel',
  closable: true
})

if ((props.width && !validateWidthHeight(props.width)) || (props.height && !validateWidthHeight(props.height))) {
  console.error('Width or Height must be between 10 and 100 and multiples of 10.')
}

const onClose = () => {
  emit('on-close')
  emit('update:modelValue', false)
}
</script>
