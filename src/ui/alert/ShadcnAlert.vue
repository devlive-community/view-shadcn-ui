<template>
  <div v-if="visible" :class="alertClasses">
    <div class="flex items-center gap-3">
      <div v-if="!banner && showIcon" class="flex-shrink-0">
        <ShadcnIcon
            :icon="IconMap[type]"
            :dark="dark"
            :glass="glass"
            :class="['h-5 w-5', iconClasses]"/>
      </div>
      <div v-else-if="$slots.icon" class="flex-shrink-0">
        <slot name="icon"/>
      </div>

      <div class="flex-1 min-w-0">
        <div v-if="!banner && (title || $slots.title)" :class="titleClasses">
          <span v-if="title">{{ title }}</span>
          <slot v-else-if="$slots.title" name="title"/>
        </div>
        <div :class="contentClasses">
          <slot/>
        </div>
      </div>

      <div v-if="closable" :class="closeClasses" @click="onClose">
        <slot v-if="$slots.close" name="close"/>
        <ShadcnIcon
            v-else
            icon="XCircle"
            class="h-4 w-4"
            :dark="dark"
            :glass="glass"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { getBorder, getGlassStyles, getText, getTypeColor, type ThemeMode } from '@/utils/theme'
import { ShadcnIcon } from '@/ui/icon'
import { AlertEmits, AlertProps } from '@/ui/alert/types.ts'

const IconMap = {
  primary: 'Info',
  success: 'CheckCircle',
  warning: 'AlertTriangle',
  error: 'XCircle',
  danger: 'XCircle',
  info: 'Info',
  default: 'Info',
  text: 'Info'
}

const emit = defineEmits<AlertEmits>()

const props = withDefaults(defineProps<AlertProps>(), {
  type: 'primary',
  closable: false,
  dark: false,
  glass: false
})

const visible = ref(true)

const onClose = () => {
  visible.value = false
  emit('on-close', visible.value)
}

const alertClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  const baseClasses = [
    'relative w-full py-2 px-3 border',
    !props.banner ? 'rounded-md' : 'rounded-none'
  ]

  if (props.glass) {
    return [
      ...baseClasses,
      ...getGlassStyles(mode, { type: props.type, withHover: false, withBorder: true, withText: false })
    ]
  }

  return [
    ...baseClasses,
    getBorder(mode),
    getTypeColor(props.type, mode)
  ]
})

const iconClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  return getText(mode)
})

const titleClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  return ['text-sm font-medium leading-none tracking-tight', getText(mode, 'primary')]
})

const contentClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  return ['text-sm', { 'mt-1': props.title || '$slots.title' }, getText(mode, 'secondary')]
})

const closeClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  return ['flex-shrink-0 mr-2 cursor-pointer', getText(mode, 'muted'), 'hover:' + getText(mode, 'primary')]
})
</script>