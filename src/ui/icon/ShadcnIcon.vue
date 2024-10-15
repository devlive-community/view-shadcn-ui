<template>
  <component v-if="icon"
             :is="iconComponent"
             :size="size"
             :style="color ? { color: color } : ''"
             @click="onClick"/>
  <slot v-else name="icon"/>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const emit = defineEmits(['on-click'])

const props = withDefaults(defineProps<{
  icon?: string
  size?: number
  color?: string
}>(), {
  size: 20
})

const iconComponent = ref<any>(null)

onMounted(async () => {
  if (props.icon) {
    try {
      const iconModule = await import('lucide-vue-next')
      iconComponent.value = iconModule[props.icon] || null
    }
    catch (error) {
      console.error('Failed to load icon', error)
    }
  }
})

const onClick = () => {
  emit('on-click')
}
</script>
