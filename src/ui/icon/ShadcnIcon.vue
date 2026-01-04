<template>
  <div
      :class="[
         'inline-flex shrink-0 items-center justify-center',
         background && 'rounded-lg p-2',
         background && glass && 'backdrop-blur-xl backdrop-saturate-150',
         background && glass && 'shadow-lg shadow-black/5',
         background && glass && (dark ? 'bg-white/10 border border-white/20' : 'bg-white/30 border border-gray-400/40'),
         background && !glass && (dark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-200')
       ]"
      :style="containerStyle">
    <component
        :is="iconComponent"
        v-if="icon"
        :size="iconSize"
        :style="iconStyle"
        :class="['shrink-0', glass && (dark ? 'text-gray-200' : 'text-gray-700'), !glass && (dark && !color ? 'text-gray-300' : '')]"
        @click="onClick"/>
    <slot v-else name="icon"/>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const emit = defineEmits(['on-click'])

const props = withDefaults(defineProps<{
  icon?: string
  size?: number | string
  color?: string
  dark?: boolean
  glass?: boolean
  background?: boolean
}>(), {
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
</script>