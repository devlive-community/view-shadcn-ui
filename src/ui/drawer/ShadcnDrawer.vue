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
      <div :class="['bg-white shadow-lg flex flex-col transform transition-transform duration-300',
                  {
                    'w-64 h-full': position === 'left' || position === 'right',
                    'w-full h-64': position === 'top' || position === 'bottom',
                    'translate-x-0': isVisible && (position === 'left' || position === 'right'),
                    'translate-x-full': !isVisible && position === 'right',
                    '-translate-x-full': !isVisible && position === 'left',
                    'translate-y-0': isVisible && (position === 'top' || position === 'bottom'),
                    '-translate-y-full': !isVisible && position === 'top',
                    'translate-y-full': !isVisible && position === 'bottom'
                  }
           ]">

        <!-- Drawer header -->
        <div class="p-2 border-b flex items-center">
          <slot name="header">
            <span class="text-lg font-bold">{{ title }}</span>
            <ShadcnIcon v-if="closable"
                        icon="X"
                        class="ml-auto cursor-pointer"
                        @click="onClose"/>
          </slot>
        </div>

        <!-- Drawer body -->
        <div class="flex-grow p-4 overflow-y-auto">
          <slot/>
        </div>

        <!-- Drawer footer -->
        <footer class="p-2 border-t">
          <slot name="footer">
            <ShadcnButton @click="onClose">Close</ShadcnButton>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import ShadcnIcon from '@/ui/icon'
import ShadcnButton from '@/ui/button'
import { ArrangePosition } from '@/ui/common/position.ts'

const emit = defineEmits(['update:modelValue', 'on-close'])

const props = withDefaults(defineProps<{
  modelValue: boolean
  title?: string
  closable?: boolean
  maskClosable?: boolean
  position?: keyof typeof ArrangePosition
}>(), {
  closable: false,
  maskClosable: false,
  position: 'right'
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
</script>
