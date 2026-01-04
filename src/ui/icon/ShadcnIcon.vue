<template>
  <div :class="containerClasses" :style="containerStyle">
    <component
        :is="iconComponent"
        v-if="icon"
        :size="iconSize"
        :style="iconStyle"
        :class="iconClasses"
        @click="onClick"/>
    <slot v-else name="icon"/>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { getBorder, getGlassStyles, getText, type ThemeMode } from '@/utils/theme'
import { IconEmits, IconProps } from '@/ui/icon/types'

const emit = defineEmits<IconEmits>()

const props = withDefaults(defineProps<IconProps>(), {
  size: 20,
  dark: false,
  glass: false,
  background: false
})

const iconComponent = ref<any>(null)

const iconSize = computed(() => {
  if (props.background) {
    return typeof props.size === 'number' ? props.size - 8 : props.size
  }
  return props.size
})

const containerStyle = computed(() => {
  if (props.background) {
    const baseSize = typeof props.size === 'number' ? props.size : parseInt(String(props.size))
    return {
      width: `${baseSize}px`,
      height: `${baseSize}px`
    }
  }
  return {
    width: typeof props.size === 'number' ? `${props.size}px` : props.size,
    height: typeof props.size === 'number' ? `${props.size}px` : props.size
  }
})

const iconStyle = computed(() => {
  if (props.color) {
    return { color: props.color }
  }
  return {}
})

const loadIconComponent = async (iconName: string) => {
  if (iconName) {
    try {
      const iconModule = await import('lucide-vue-next')
      iconComponent.value = iconModule[iconName] || null
    }
    catch (error) {
      console.error('Failed to load icon', error)
    }
  }
  else {
    iconComponent.value = null
  }
}

if (props.icon) {
  loadIconComponent(String(props.icon))
}

watch(() => props.icon, (newIcon) => {
  loadIconComponent(String(newIcon))
})

const onClick = () => {
  emit('on-click')
}

const containerClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  const baseClasses = ['inline-flex shrink-0 items-center justify-center']

  if (!props.background) {
    return baseClasses
  }

  baseClasses.push('rounded-lg p-2 border')

  if (props.glass) {
    return [
      ...baseClasses,
      ...getGlassStyles(mode, { withHover: false, withBorder: true, withText: false })
    ]
  }

  return [
    ...baseClasses,
    getBorder(mode),
    props.dark ? 'bg-gray-800' : 'bg-gray-100'
  ]
})

const iconClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  const baseClasses = ['shrink-0']

  if (props.color) {
    return baseClasses
  }

  if (props.glass) {
    baseClasses.push(getText(mode, 'secondary'))
  }
  else if (props.dark) {
    baseClasses.push(getText(mode, 'secondary'))
  }

  return baseClasses
})
</script>