<template>
  <div v-if="visible"
       :class="['relative w-full border py-2 px-3',
                !banner ? 'rounded-md' : 'rounded-none',
                BorderType[type],
                BackgroundType[type]
       ]">
    <div class="flex items-center gap-3">
      <!-- Icon -->
      <div v-if="!banner && showIcon" class="flex-shrink-0">
        <Icon :icon="IconMap[type]"
                    :class="['h-5 w-5',
                            TextType[type]
                    ]"/>
      </div>
      <div v-else-if="$slots.icon" class="flex-shrink-0">
        <slot name="icon"/>
      </div>

      <!-- Content -->
      <div class="flex-1 min-w-0">
        <div v-if="!banner && (title || $slots.title)"
             class="text-sm font-medium leading-none tracking-tight">
          <span v-if="title">{{ title }}</span>
          <slot v-else-if="$slots.title" name="title"/>
        </div>
        <div class="text-sm" :class="{ 'mt-1': title || $slots.title }">
          <slot/>
        </div>
      </div>

      <!-- Close the button -->
      <div v-if="closable"
           class="flex-shrink-0 mr-2 cursor-pointer text-gray-500 hover:text-gray-700"
           @click="onClose">
        <slot v-if="$slots.close" name="close"/>
        <Icon icon="XCircle" v-else class="h-4 w-4"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BackgroundType, BorderType, TextType } from '@/ui/common/type.ts'
import Icon from '@/ui/icon'

const IconMap = {
  primary: 'Info',
  success: 'CheckCircle',
  warning: 'AlertTriangle',
  error: 'XCircle'
}

const emit = defineEmits(['on-close'])

withDefaults(defineProps<{
  title?: string
  type?: keyof typeof BackgroundType
  showIcon?: boolean
  banner?: boolean
  closable?: boolean
}>(), {
  type: 'primary',
  closable: false
})

const visible = ref(true)

const onClose = () => {
  visible.value = false
  emit('on-close', visible.value)
}
</script>
