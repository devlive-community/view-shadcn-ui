<template>
  <component v-if="icon"
             :is="iconComponent"
             :size="size"
             :style="color ? { color: color } : ''"
             @click="onClick"/>
  <slot v-else name="icon"/>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const emit = defineEmits(['on-click'])

const props = withDefaults(defineProps<{
  icon?: string
  size?: number
  color?: string
}>(), {
  size: 20
})

const iconComponent = ref<any>(null)

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
  loadIconComponent(props.icon)
}

watch(() => props.icon, (newIcon) => {
  loadIconComponent(newIcon)
})

const onClick = () => {
  emit('on-click')
}
</script>
