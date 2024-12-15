<template>
  <div class="inline-flex shrink-0" :style="containerStyle">
    <component v-if="icon"
               :is="iconComponent"
               :size="size"
               :style="color ? { color: color } : ''"
               class="shrink-0"
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
}>(), {
  size: 20
})

const iconComponent = ref<any>(null)

const containerStyle = computed(() => ({
  width: typeof props.size === 'number' ? `${ props.size }px` : props.size,
  height: typeof props.size === 'number' ? `${ props.size }px` : props.size
}))

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
