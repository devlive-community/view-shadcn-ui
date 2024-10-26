<template>
  <transition
      enter-active-class="transition-opacity duration-300 ease-in-out"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-300 ease-in-out"
      leave-to-class="opacity-0">
    <div v-if="isVisible" class="fixed inset-0 z-50 flex justify-end">
      <!-- Background mask layer -->
      <div class="fixed inset-0 bg-black bg-opacity-50" @click="onClose"/>

      <!-- Drawer body -->
      <div :class="['bg-white w-64 h-full shadow-lg flex flex-col transform transition-transform duration-300',
                  {
                    'translate-x-0': isVisible,
                    'translate-x-full': !isVisible
                  }
           ]">

        <!-- Drawer header -->
        <div class="p-2 border-b">
          <slot name="header">
            <span class="text-lg font-bold">Header</span>
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
import ShadcnButton from '@/ui/button'

const emit = defineEmits(['update:modelValue', 'on-close'])

const props = defineProps<{
  modelValue: boolean
}>()

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
</script>
