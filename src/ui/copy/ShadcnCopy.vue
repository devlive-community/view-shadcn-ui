<template>
  <div class="relative inline-flex items-center">
    <div v-if="$slots.icon" class="cursor-pointer" @click="onCopy">
      <slot name="icon"/>
    </div>
    <Icon v-else class="cursor-pointer" :icon="icon" @click="onCopy"/>

    <transition v-if="tooltip" name="fade">
      <div v-if="showTooltip"
           :class="cn('absolute transform bg-gray-700 text-white text-xs rounded p-1.5',
                    position === 'top' && 'bottom-full mb-2 left-1/2 -translate-x-1/2',
                    position === 'bottom' && 'top-full mt-2 left-1/2 -translate-x-1/2',
                    position === 'left' && 'right-full mr-2 top-1/2 -translate-y-1/2',
                    position === 'right' && 'left-full ml-2 top-1/2 -translate-y-1/2'
           )">
        {{ tooltipMessage }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/ui/icon'
import { ref } from 'vue'
import { cn } from '@/lib/utils.ts'
import { t } from '@/utils/locale'
import { CopyEmits, CopyProps } from '@/ui/copy/types.ts'

const props = withDefaults(defineProps<CopyProps>(), {
  tooltip: true,
  position: 'top'
})

const emit = defineEmits<CopyEmits>()

const icon = ref<string>('Copy')
const showTooltip = ref<boolean>(false)
const tooltipMessage = ref<string>('Copied!')

const onCopy = async () => {
  try {
    await navigator.clipboard
                   .writeText(props.text)
    icon.value = 'Check'
    tooltipMessage.value = t('copy.text.copied')
    showTooltip.value = true
    emit('on-success')
  }
  catch (error) {
    tooltipMessage.value = t('copy.text.failed')
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