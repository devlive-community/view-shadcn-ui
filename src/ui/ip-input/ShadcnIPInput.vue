<template>
  <div class="flex items-center">
    <div class="flex items-center space-x-2">
      <input v-for="(part, index) in parts"
             ref="inputRefs"
             type="text"
             class="w-12 h-10 text-center rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
             maxlength="3"
             :key="index"
             :value="part"
             @input="handleInput($event, index)"
             @keydown="handleKeyDown($event, index)"
             @paste="handlePaste"
             @focus="handleFocus($event)"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { IPInputEmits, IPInputProps } from './types'

// Define props and emits
// 定义属性和事件
const props = defineProps<IPInputProps>()
const emit = defineEmits<IPInputEmits>()

// Initialize IP parts with empty strings or default value
// 用空字符串或默认值初始化IP部分
const parts = ref(['', '', '', ''])
const inputRefs = ref<HTMLInputElement[]>([])

// Set default value if provided
// 如果提供了默认值，则设置
onMounted(() => {
  if (props.modelValue) {
    const ipParts = props.modelValue.split('.')
    if (ipParts.length === 4) {
      parts.value = ipParts
    }
  }
})

// Compute full IP address from parts
// 从各部分计算完整IP地址
const ipAddress = computed(() => {
  return parts.value.join('.')
})

// Handle input changes
// 处理输入变化
const handleInput = (event: Event, index: number) => {
  // Stop event propagation to prevent bubbling
  // 阻止事件冒泡
  event.stopPropagation()

  const target = event.target as HTMLInputElement
  const value = target.value

  // Only allow numbers
  // 只允许数字
  const numericValue = value.replace(/[^0-9]/g, '')
  parts.value[index] = numericValue

  // If valid number and reached max value (255), move to next input
  // 如果是有效数字且达到最大值(255)，移动到下一个输入框
  const num = parseInt(numericValue, 10)
  if (num > 255) {
    parts.value[index] = '255'
  }

  // Auto-focus next input only when current input is complete (3 digits or value >= 100)
  // 仅当当前输入完成时（3位数字或值>=100）才自动聚焦下一个输入框
  if ((numericValue.length === 3 || num >= 100) && index < 3) {
    inputRefs.value[index + 1]?.focus()
  }

  // Emit updated value
  // 发送更新后的值
  emit('on-change', ipAddress.value)
  emit('update:modelValue', ipAddress.value)
}

// Handle key navigation
// 处理键盘导航
const handleKeyDown = (event: KeyboardEvent, index: number) => {
  // Stop event propagation to prevent bubbling
  // 阻止事件冒泡
  event.stopPropagation()

  if (event.key === 'Backspace' && !parts.value[index] && index > 0) {
    // Move to previous input on backspace when empty
    // 当空白时按退格键移动到上一个输入框
    inputRefs.value[index - 1]?.focus()
  }
  else if (event.key === 'ArrowLeft' && index > 0) {
    // Move to previous input on left arrow
    // 按左箭头移动到上一个输入框
    inputRefs.value[index - 1]?.focus()
  }
  else if (event.key === 'ArrowRight' && index < 3) {
    // Move to next input on right arrow
    // 按右箭头移动到下一个输入框
    inputRefs.value[index + 1]?.focus()
  }
  else if (event.key === '.') {
    // Move to next input on dot
    // 按点号移动到下一个输入框
    event.preventDefault()
    if (index < 3) {
      inputRefs.value[index + 1]?.focus()
    }
  }
}

// Handle focus event
// 处理聚焦事件
const handleFocus = (event: FocusEvent) => {
  // Stop event propagation to prevent bubbling
  // 阻止事件冒泡
  event.stopPropagation()

  const target = event.target as HTMLInputElement
  target.select()
}

// Handle paste event
// 处理粘贴事件
const handlePaste = (event: ClipboardEvent) => {
  // Stop event propagation to prevent bubbling
  // 阻止事件冒泡
  event.stopPropagation()

  event.preventDefault()
  const pastedData = event.clipboardData?.getData('text') || ''
  const ipPattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/
  const match = pastedData.match(ipPattern)

  if (match) {
    // Valid IP format
    // 有效的IP格式
    for (let i = 1; i <= 4; i++) {
      const num = parseInt(match[i], 10)
      parts.value[i - 1] = num > 255 ? '255' : String(num)
    }

    // Emit updated value
    // 发送更新后的值
    emit('on-change', ipAddress.value)
    emit('update:modelValue', ipAddress.value)
  }
}
</script>