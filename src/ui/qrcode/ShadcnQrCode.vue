<template>
  <div class="inline-flex items-center justify-center">
    <div class="relative bg-white shadow-sm ring-1 ring-slate-900/10"
         :class="{ 'rounded-lg' : rounded }"
         :style="{
                width: calcSize(containerSize),
                height: calcSize(containerSize),
                padding: calcSize(padding)
          }">

      <ShadcnSpin v-model="loading" fixed/>

      <canvas v-show="!loading"
              ref="qrCanvas"
              class="w-full h-full"
              :height="props.size"
              :width="props.size"
              :class="{ 'rounded-lg' : rounded }"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue'
import QRCode from 'qrcode'
import { type QrCodeEmits, type QrCodeProps } from './types'
import { calcSize } from '@/utils/common.ts'

const emit = defineEmits<QrCodeEmits>()
const props = withDefaults(defineProps<QrCodeProps>(), {
  size: 200,
  padding: 0,
  level: 'M',
  background: '#ffffff',
  foreground: '#000000',
  rounded: false
})

const qrCanvas = ref<HTMLCanvasElement | null>(null)
const loading = ref(false)

const containerSize = computed(() => {
  return props.size + (props.padding * 2)
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
    emit('on-complete')
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
