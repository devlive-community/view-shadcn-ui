<template>
  <footer v-if="isVisible"
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
  /**
   * Controls the visibility of the toolbar
   */
  modelValue?: boolean
  /**
   * Enables auto-hide functionality
   */
  autoHide?: boolean
  /**
   * Delay in ms before auto-hiding
   */
  autoHideDelay?: number
  /**
   * Enables scroll-based visibility control
   */
  hideOnScroll?: boolean
  /**
   * Delay in ms to wait before showing after scroll stops
   */
  scrollStopDelay?: number
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'on-cancel'): void
  (e: 'on-ok'): void
}>()

const props = withDefaults(defineProps<Props>(), {
  modelValue: true,
  autoHide: false,
  autoHideDelay: 3000,
  hideOnScroll: true,
  scrollStopDelay: 600
})

const isVisible = ref(props.modelValue)
let autoHideTimer: ReturnType<typeof setTimeout> | null = null
let scrollStopTimer: ReturnType<typeof setTimeout> | null = null
let lastScrollTop = 0
let isScrolling = ref(false)

// Watch for model value changes
watch(() => props.modelValue, (newValue) => {
  isVisible.value = newValue
})

/**
 * Starts auto-hide timer
 */
const startAutoHideTimer = () => {
  if (autoHideTimer) {
    clearTimeout(autoHideTimer)
  }
  autoHideTimer = setTimeout(() => {
    isVisible.value = false
    emit('update:modelValue', isVisible.value)
  }, props.autoHideDelay)
}

/**
 * Shows toolbar when scroll stops
 */
const handleScrollStop = () => {
  if (!isScrolling.value) {
    return
  }

  isScrolling.value = false
  isVisible.value = true
  emit('update:modelValue', isVisible.value)
}

/**
 * Handles scroll events
 */
const handleScroll = () => {
  if (!props.hideOnScroll) {
    return
  }

  // Clear existing scroll stop timer
  if (scrollStopTimer) {
    clearTimeout(scrollStopTimer)
  }

  const currentScrollTop = window.scrollY || document.documentElement.scrollTop
  const isScrollingDown = currentScrollTop > lastScrollTop

  isScrolling.value = true

  // Handle scroll down - hide toolbar
  if (isScrollingDown && isVisible.value) {
    isVisible.value = false
    emit('update:modelValue', isVisible.value)
  }

  // Start scroll stop detection timer
  scrollStopTimer = setTimeout(() => {
    handleScrollStop()
  }, props.scrollStopDelay)

  lastScrollTop = currentScrollTop
}

/**
 * Handle cancel button click
 */
const onCancel = () => {
  isVisible.value = false
  emit('on-cancel')
  emit('update:modelValue', isVisible.value)
}

/**
 * Handle ok button click
 */
const onOk = () => {
  isVisible.value = false
  emit('on-ok')
  emit('update:modelValue', isVisible.value)
}

// Lifecycle hooks
onMounted(() => {
  if (props.hideOnScroll) {
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initialize last scroll position
    lastScrollTop = window.scrollY || document.documentElement.scrollTop
  }

  if (props.autoHide && isVisible.value) {
    startAutoHideTimer()
  }
})

onBeforeUnmount(() => {
  // Clean up event listeners and timers
  if (props.hideOnScroll) {
    window.removeEventListener('scroll', handleScroll)
  }

  if (autoHideTimer) {
    clearTimeout(autoHideTimer)
  }

  if (scrollStopTimer) {
    clearTimeout(scrollStopTimer)
  }
})
</script>
