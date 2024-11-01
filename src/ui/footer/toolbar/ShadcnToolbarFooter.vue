<template>
  <footer v-if="isVisible"
          ref="footerRef"
          :class="['fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
              'transform transition-transform duration-200 ease-in-out',
              isVisible ? 'translate-y-0' : 'translate-y-full'
          ]">
    <div class="container flex h-16 items-center gap-4 px-4">
      <!-- Left Section -->
      <div class="flex flex-1 items-center gap-2">
        <slot name="left"/>
      </div>

      <!-- Right Section -->
      <div class="flex items-center gap-2">
        <slot name="right">
          <ShadcnButton type="danger"
                        @click="onCancel">
            Cancel
          </ShadcnButton>
          <ShadcnButton type="primary"
                        @click="onOk">
            Ok
          </ShadcnButton>
        </slot>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import ShadcnButton from '@/ui/button'

interface Props
{
  modelValue?: boolean
  autoHide?: boolean
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'on-cancel'): void
  (e: 'on-ok'): void
}>()

const props = withDefaults(defineProps<Props>(), {
  modelValue: true,
  autoHide: false
})

const isVisible = ref(props.modelValue)
let autoHideTimer: ReturnType<typeof setTimeout> | null = null

watch(() => props.modelValue, (newValue) => {
  isVisible.value = newValue
})

const startAutoHideTimer = () => {
  if (autoHideTimer) {
    clearTimeout(autoHideTimer)
  }
  autoHideTimer = setTimeout(() => {
    isVisible.value = false
    emit('update:modelValue', isVisible.value)
  }, 3000)
}

const onCancel = () => {
  isVisible.value = false
  emit('on-cancel')
  emit('update:modelValue', isVisible.value)
}

const onOk = () => {
  isVisible.value = false
  emit('on-ok')
  emit('update:modelValue', isVisible.value)
}

onMounted(() => {
  if (props.autoHide && isVisible.value) {
    startAutoHideTimer()
  }
})

onBeforeUnmount(() => {
  if (autoHideTimer) {
    clearTimeout(autoHideTimer)
  }
})
</script>
