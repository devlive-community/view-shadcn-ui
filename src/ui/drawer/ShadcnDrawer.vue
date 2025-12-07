<template>
  <transition enter-active-class="transition-opacity duration-300 ease-in-out"
              enter-from-class="opacity-0"
              leave-active-class="transition-opacity duration-300 ease-in-out"
              leave-to-class="opacity-0">
    <div v-if="isVisible"
         :class="['fixed inset-0 z-50 flex',
                 {
                   'justify-start': position === 'left',
                   'justify-end': position === 'right',
                   'items-start': position === 'top',
                   'items-end': position === 'bottom'
                 }
          ]">
      <!-- Background mask layer -->
      <div class="fixed inset-0 bg-black bg-opacity-50" @click="handleMaskClick"/>

      <!-- Drawer body -->
      <div :class="[
                  'shadow-lg flex flex-col transform transition-transform duration-300',
                  dark ? 'bg-gray-800' : 'bg-white',
                  {
                    'h-full': position === 'left' || position === 'right',
                    'w-full': position === 'top' || position === 'bottom',
                    'translate-x-0': isVisible && (position === 'left' || position === 'right'),
                    'translate-x-full': !isVisible && position === 'right',
                    '-translate-x-full': !isVisible && position === 'left',
                    'translate-y-0': isVisible && (position === 'top' || position === 'bottom'),
                    '-translate-y-full': !isVisible && position === 'top',
                    'translate-y-full': !isVisible && position === 'bottom'
                  }
           ]"
           :style="{
                  width: (position === 'left' || position === 'right') ? calculateWidth() : undefined,
                  height: (position === 'top' || position === 'bottom') ? calculateHeight() : undefined
            }">

        <!-- Drawer header -->
        <div :class="['p-2 border-b flex justify-between', dark ? 'border-gray-600' : '']">
          <slot name="header">
            <div :class="['text-lg font-bold', dark ? 'text-gray-200' : '']">{{ title }}</div>
          </slot>

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

        <!-- Drawer body -->
        <div :class="['flex-grow p-4 overflow-y-auto', dark ? 'text-gray-200' : '']">
          <slot/>
        </div>

        <!-- Drawer footer -->
        <footer v-if="$slots.footer" :class="['p-2 border-t', dark ? 'border-gray-600' : '']">
          <slot name="footer"/>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { calcSize } from '@/utils/common.ts'

const emit = defineEmits(['update:modelValue', 'on-close'])

const props = withDefaults(defineProps<{
  modelValue: boolean
  title?: string
  closable?: boolean
  maskClosable?: boolean
  position?: 'top' | 'right' | 'bottom' | 'left'
  width?: string | number
  height?: string | number
  dark?: boolean
}>(), {
  closable: true,
  maskClosable: false,
  position: 'right',
  width: 300,
  height: 300,
  dark: false
})

const isVisible = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  isVisible.value = newVal
})

watch(isVisible, (newVal) => {
  emit('update:modelValue', newVal)
  emit('on-close', newVal)
})

const onClose = () => {
  isVisible.value = false
}

const handleMaskClick = () => {
  if (props.maskClosable) {
    onClose()
  }
}

const calculateWidth = () => {
  return calcSize(props.width)
}

const calculateHeight = () => {
  return calcSize(props.height)
}
</script>