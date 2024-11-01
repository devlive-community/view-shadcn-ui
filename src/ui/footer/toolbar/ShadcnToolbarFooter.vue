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
import ShadcnButton from '@/ui/button'
import { ref, watch } from 'vue'

interface Props
{
  modelValue?: boolean
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'on-cancel'): void
  (e: 'on-ok'): void
}>()

const props = withDefaults(defineProps<Props>(), {
  modelValue: true
})

const isVisible = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
  isVisible.value = newValue
})

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
</script>
