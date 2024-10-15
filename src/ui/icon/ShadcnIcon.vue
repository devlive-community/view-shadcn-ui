<template>
  <component v-if="icon" :is="iconComponent" @click="onClick"/>
  <slot v-else name="icon"/>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const emit = defineEmits(['on-click'])

const props = defineProps<{
  icon: string
}>()

const iconComponent = ref<any>(null)

onMounted(async () => {
  try {
    const iconModule = await import('lucide-vue-next')
    iconComponent.value = iconModule[props.icon] || null
  }
  catch (error) {
    console.error('Failed to load icon', error)
  }
})

const onClick = () => {
  emit('on-click')
}
</script>
