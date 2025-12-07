<template>
  <div class="inline-flex items-center justify-center">
    <div :class="[
           { 'rounded-lg' : rounded },
           dark ? 'bg-gray-800 ring-1 ring-gray-700' : 'bg-white ring-1 ring-slate-900/10'
         ]"
         class="relative shadow-sm"
         :style="{
                width: calcSize(containerSize),
                height: calcSize(containerSize),
                padding: calcSize(padding)
          }">

      <ShadcnSpin v-model="loading" :dark="dark" fixed/>

      <canvas v-show="!loading"
              ref="qrCanvas"
              class="w-full h-full"
              :height="props.size"
              :width="props.size"
              :class="{ 'rounded-lg' : rounded }"/>

      <div v-if="slots.img" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <slot name="img"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, useSlots, watchEffect } from 'vue'
import QRCode from 'qrcode'
import { type QrCodeEmits, type QrCodeProps, type QrCodeSlots } from './types'
import { calcSize } from '@/utils/common.ts'
import { ShadcnSpin } from "@/ui/spin";

const slots = useSlots() as QrCodeSlots
const emit = defineEmits<QrCodeEmits>()
const props = withDefaults(defineProps<QrCodeProps>(), {
  size: 200,
  padding: 0,
  margin: 0,
  level: 'H',
  background: '#ffffff',
  foreground: '#000000',
  rounded: false,
  dark: false
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
    const canvas = qrCanvas.value
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }

    const qrOptions = {
      width: props.size,
      margin: props.margin,
      color: {
        dark: props.dark ? '#ffffff' : props.foreground,
        light: props.dark ? '#1f2937' : props.background
      }
    }

    if (slots.img) {
      // 第一步：生成带有中心定位点的空白区域的二维码
      // Step 1: Generate a QR code with a center position
      const imageSize = Math.floor(props.size * 0.3)  // 中心图片区域大小 | Center image area
      const quietZone = Math.floor(props.size * 0.15)  // 安全区域大小 | Safe area

      // 先生成一个临时的遮罩图案
      // Create a temporary mask
      const maskCanvas = document.createElement('canvas')
      maskCanvas.width = props.size
      maskCanvas.height = props.size
      const maskCtx = maskCanvas.getContext('2d')
      if (!maskCtx) {
        return
      }

      // 创建一个渐变的遮罩，以减少对二维码的影响
      // Create a gradient mask to reduce the impact of the QR code
      const gradient = maskCtx.createRadialGradient(
          props.size / 2, props.size / 2, quietZone,
          props.size / 2, props.size / 2, imageSize
      )
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

      maskCtx.fillStyle = gradient
      maskCtx.fillRect(0, 0, props.size, props.size)

      // 生成二维码
      // Generate QR code
      QRCode.toCanvas(canvas, props.modelValue, {
        ...qrOptions,
        errorCorrectionLevel: 'H' as const
      }).then(() => {
        // 应用遮罩
        // Apply the mask
        const centerX = props.size / 2
        const centerY = props.size / 2
        const radius = imageSize / 2

        ctx.globalCompositeOperation = 'destination-out'
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalCompositeOperation = 'source-over'

        emit('on-complete')
        loading.value = false
      })
    }
    else {
      // 如果没有中心图片，正常生成二维码
      // If there is no center image, generate the QR code normally
      QRCode.toCanvas(canvas, props.modelValue, {
        ...qrOptions,
        errorCorrectionLevel: props.level
      }).then(() => {
        emit('on-complete')
        loading.value = false
      })
    }
  }
  catch (error) {
    console.error('Error generating QR code:', error)
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
