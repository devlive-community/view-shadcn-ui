<template>
  <div class="inline-flex items-center justify-center">
    <div class="relative rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/10"
         :style="{ width: calcSize(containerSize), height: calcSize(containerSize) }">

      <ShadcnSpin v-model="loading" fixed/>

      <canvas v-show="!loading"
              ref="qrCanvas"
              :height="props.size"
              :width="props.size"
              class="w-full h-full"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watchEffect } from 'vue'
import QRCode from 'qrcode'
import { type QrCodeEmits, type QrCodeProps } from './types'
import { calcSize } from '@/utils/common.ts'

const emit = defineEmits<QrCodeEmits>()
const props = withDefaults(defineProps<QrCodeProps>(), {
  size: 200,
  level: 'M',
  background: '#ffffff',
  foreground: '#000000'
})

const qrCanvas = ref<HTMLCanvasElement | null>(null)
const loading = ref(false)

const containerSize = computed(() => {
  return props.size + 32
})

const generateQR = () => {
  if (!qrCanvas.value) {
    return
  }

  loading.value = true
  try {
    QRCode.toCanvas(qrCanvas.value, props.modelValue, {
      width: props.size,
      margin: 0,
      color: {
        dark: props.foreground,
        light: props.background
      },
      errorCorrectionLevel: props.level
    })
    emit('on-generate')
  }
  catch (error) {
    console.error('Error generating QR code:', error)
  }
  finally {
    loading.value = false
  }
}

watchEffect(() => {
  generateQR()
})

onMounted(() => {
  generateQR()
})
</script>
