<template>
  <Teleport to="body">
    <div v-if="modelValue"
         class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black/50 transition-opacity"
           @click="onMaskClick"/>

      <!-- Dialog -->
      <div :class="[
                  'relative z-50 flex flex-col animate-in fade-in-0 zoom-in-95 w-full max-w-lg mx-auto rounded-sm',
                  glass && 'backdrop-blur-xl backdrop-saturate-150',
                  glass && 'shadow-lg shadow-black/5',
                  glass && (dark ? 'bg-white/10 border border-white/20' : 'bg-white/30 border border-gray-400/40'),
                  !glass && (dark ? 'bg-gray-800' : 'bg-white')
           ]"
           :style="[
               { width: calcSize(width), minWidth: calcSize(width), maxWidth: calcSize(width) },
               { height: calcSize(height), minHeight: calcSize(height), maxHeight: calcSize(height) }
           ]">
        <!-- Header -->
        <div v-if="$slots.title || title"
             :class="['border-b p-2', dark ? 'border-gray-600' : '']">
          <div class="flex justify-between">
            <div>
              <!-- Title -->
              <h2 :class="['text-lg font-semibold', dark ? 'text-gray-200' : '']">
                <span v-if="title">{{ title }}</span>
                <slot v-else name="title"/>
              </h2>

              <!-- Description -->
              <p v-if="$slots.description || description"
                 :class="['text-sm', dark ? 'text-gray-400' : 'text-muted-foreground']">
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
                     :class="['w-5 h-5', dark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-muted-foreground']">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </slot>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div :class="['p-2 flex-1 overflow-auto', dark ? 'text-gray-200' : '']">
          <slot v-if="$slots.content" name="content"/>
          <slot v-else/>
        </div>

        <!-- Footer -->
        <div v-if="$slots.footer" :class="['border-t p-2 flex justify-end', dark ? 'border-gray-600' : '']">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { t } from '@/utils/locale'
import { ModalEmits, ModalProps } from '@/ui/modal/types.ts'
import { calcSize } from '@/utils/common.ts'

const emit = defineEmits<ModalEmits>()

const props = withDefaults(defineProps<ModalProps>(), {
  okText: String(t('modal.text.ok')),
  cancelText: String(t('modal.text.cancel')),
  closable: true,
  width: '30%',
  height: 'auto',
  maskClosable: true,
  dark: false,
  glass: false
})

const onMaskClick = () => {
  if (props.maskClosable) {
    onClose()
  }
}

const onClose = () => {
  emit('on-close')
  emit('update:modelValue', false)
}
</script>
