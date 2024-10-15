<template>
  <div class="relative inline-flex items-center">
    <slot v-if="$slots.icon" name="icon"/>
    <ShadcnIcon v-else class="cursor-pointer" :icon="icon" @click="onCopy"/>
  </div>
</template>

<script setup lang="ts">
import ShadcnIcon from '@/ui/icon'
import { ref } from 'vue'

const props = defineProps<{
  text: string
}>()

const emit = defineEmits(['on-success', 'on-failed'])

const icon = ref<string>('Copy')

const onCopy = async () => {
  try {
    await navigator.clipboard
                   .writeText(props.text)
    icon.value = 'Check'
    emit('on-success')
  }
  catch (error) {
    emit('on-failed')
  }
  finally {
    setTimeout(() => {
      icon.value = 'Copy'
    }, 500)
  }
}
</script>
