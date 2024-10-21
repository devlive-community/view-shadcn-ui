<template>
  <Alert v-if="visible"
         :class="cn('flex items-center space-x-2',
                    banner && 'rounded-none')"
         :style="{ backgroundColor: Type[type] }">
    <div v-if="!banner && showIcon">
      <ShadcnIcon :icon="Icon[type]"/>
    </div>
    <div v-else-if="$slots.icon">
      <slot name="icon"/>
    </div>
    <div class="flex-1">
      <AlertTitle v-if="!banner && (title || $slots.title)">
        <span v-if="title">{{ title }}</span>
        <slot v-else-if="$slots.title" name="title"/>
      </AlertTitle>
      <AlertDescription>
        <slot/>
      </AlertDescription>
    </div>

    <div v-if="closable" class="ml-auto text-gray-500 hover:text-gray-700 cursor-pointer" @click="onClose">
      <slot v-if="$slots.close" name="close"/>
      <ShadcnIcon v-else icon="XCircle"/>
    </div>
  </Alert>
</template>

<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { cn } from '@/lib/utils.ts'
import { ref } from 'vue'

enum Type
{
  info = '#f0faff',
  success = '#edfff3',
  warning = '#fff9e6',
  error = '#ffefe6'
}

enum Icon
{
  info = 'Info',
  success = 'CheckCircle',
  warning = 'TriangleAlert',
  error = 'XCircle'
}

const emit = defineEmits(['on-close'])

withDefaults(defineProps<{
  title?: string
  type?: keyof typeof Type
  showIcon?: boolean
  banner?: boolean
  closable?: boolean
}>(), {
  type: 'info',
  closable: false
})

const visible = ref(true)

const onClose = () => {
  visible.value = false
  emit('on-close', visible.value)
}
</script>
