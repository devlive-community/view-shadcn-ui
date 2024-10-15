<template>
  <div class="relative inline-flex items-center">
    <div v-if="$slots.icon" class="cursor-pointer" @click="onCopy">
      <slot name="icon"/>
    </div>
    <ShadcnIcon v-else class="cursor-pointer" :icon="icon" @click="onCopy"/>

    <transition v-if="tooltip" name="fade">
      <div v-if="showTooltip" class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded p-1.5">
        {{ tooltipMessage }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import ShadcnIcon from '@/ui/icon'
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  text: string
  tooltip?: boolean
}>(), {
  tooltip: true
})

const emit = defineEmits(['on-success', 'on-failed'])

const icon = ref<string>('Copy')
const showTooltip = ref<boolean>(false)
const tooltipMessage = ref<string>('Copied!')

const onCopy = async () => {
  try {
    await navigator.clipboard
                   .writeText(props.text)
    icon.value = 'Check'
    tooltipMessage.value = 'Copied!'
    showTooltip.value = true
    emit('on-success')
  }
  catch (error) {
    tooltipMessage.value = 'Copy failed!'
    showTooltip.value = true
    emit('on-failed')
  }
  finally {
    setTimeout(() => {
      icon.value = 'Copy'
      showTooltip.value = false
    }, 500)
  }
}
</script>
