<template>
  <div :class="['min-h-screen p-8', isDark ? 'bg-gray-900' : 'bg-gray-50']">
    <div class="max-w-4xl mx-auto space-y-8">
      <div class="flex justify-end">
        <button @click="toggleDarkMode"
                :class="[
                  'px-4 py-2 rounded-lg transition-colors',
                  isDark
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                ]">
          {{ isDark ? '🌙 暗黑模式' : '☀️ 明亮模式' }}
        </button>
      </div>

      <div>
        <h1 :class="['text-3xl font-bold mb-2', isDark ? 'text-gray-100' : 'text-gray-900']">
          Message 组件示例
        </h1>
        <p :class="['text-sm', isDark ? 'text-gray-400' : 'text-gray-600']">
          点击按钮查看不同类型的消息提示
        </p>
      </div>

      <!-- 基础消息 -->
      <div :class="['p-6 rounded-lg', isDark ? 'bg-gray-800' : 'bg-white']">
        <h2 :class="['text-xl font-semibold mb-4', isDark ? 'text-gray-200' : 'text-gray-900']">
          基础消息
        </h2>
        <div class="flex flex-wrap gap-3">
          <button @click="showMessage('info')"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600', 'text-white']">
            Info 消息
          </button>
          <button @click="showMessage('success')"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600', 'text-white']">
            Success 消息
          </button>
          <button @click="showMessage('warning')"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-yellow-500 hover:bg-yellow-600', 'text-white']">
            Warning 消息
          </button>
          <button @click="showMessage('error')"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600', 'text-white']">
            Error 消息
          </button>
          <button @click="showMessage('loading')"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-500 hover:bg-gray-600', 'text-white']">
            Loading 消息
          </button>
        </div>
      </div>

      <!-- 带图标的消息 -->
      <div :class="['p-6 rounded-lg', isDark ? 'bg-gray-800' : 'bg-white']">
        <h2 :class="['text-xl font-semibold mb-4', isDark ? 'text-gray-200' : 'text-gray-900']">
          带图标的消息
        </h2>
        <div class="flex flex-wrap gap-3">
          <button @click="showMessageWithIcon('info')"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600', 'text-white']">
            Info + Icon
          </button>
          <button @click="showMessageWithIcon('success')"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600', 'text-white']">
            Success + Icon
          </button>
          <button @click="showMessageWithIcon('warning')"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-yellow-500 hover:bg-yellow-600', 'text-white']">
            Warning + Icon
          </button>
          <button @click="showMessageWithIcon('error')"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600', 'text-white']">
            Error + Icon
          </button>
        </div>
      </div>

      <!-- 带背景的消息 -->
      <div :class="['p-6 rounded-lg', isDark ? 'bg-gray-800' : 'bg-white']">
        <h2 :class="['text-xl font-semibold mb-4', isDark ? 'text-gray-200' : 'text-gray-900']">
          带背景色的消息
        </h2>
        <div class="flex flex-wrap gap-3">
          <button @click="showMessageWithBackground('info')"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600', 'text-white']">
            Info + Background
          </button>
          <button @click="showMessageWithBackground('success')"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600', 'text-white']">
            Success + Background
          </button>
          <button @click="showMessageWithBackground('warning')"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-yellow-500 hover:bg-yellow-600', 'text-white']">
            Warning + Background
          </button>
          <button @click="showMessageWithBackground('error')"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600', 'text-white']">
            Error + Background
          </button>
        </div>
      </div>

      <!-- 可关闭的消息 -->
      <div :class="['p-6 rounded-lg', isDark ? 'bg-gray-800' : 'bg-white']">
        <h2 :class="['text-xl font-semibold mb-4', isDark ? 'text-gray-200' : 'text-gray-900']">
          可关闭的消息
        </h2>
        <div class="flex flex-wrap gap-3">
          <button @click="showClosableMessage('info')"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600', 'text-white']">
            可关闭消息
          </button>
        </div>
      </div>

      <!-- 长时间显示的消息 -->
      <div :class="['p-6 rounded-lg', isDark ? 'bg-gray-800' : 'bg-white']">
        <h2 :class="['text-xl font-semibold mb-4', isDark ? 'text-gray-200' : 'text-gray-900']">
          长时间显示的消息
        </h2>
        <div class="flex flex-wrap gap-3">
          <button @click="showLongMessage()"
                  :class="['px-4 py-2 rounded-md', isDark ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600', 'text-white']">
            5秒后自动关闭
          </button>
        </div>
      </div>
    </div>

    <ShadcnMessage v-if="messageVisible"
             :type="messageType"
             :content="messageContent"
             :show-icon="messageShowIcon"
             :background="messageBackground"
             :closable="messageClosable"
             :duration="messageDuration"
             :dark="isDark"
             @on-close="handleMessageClose"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)
const messageVisible = ref(false)
const messageType = ref<'info' | 'success' | 'warning' | 'error' | 'loading'>('info')
const messageContent = ref('')
const messageShowIcon = ref(false)
const messageBackground = ref(false)
const messageClosable = ref(false)
const messageDuration = ref(1.5)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
}

const showMessage = (type: 'info' | 'success' | 'warning' | 'error' | 'loading') => {
  messageType.value = type
  messageContent.value = `这是一条 ${type} 消息`
  messageShowIcon.value = false
  messageBackground.value = false
  messageClosable.value = false
  messageDuration.value = 2
  messageVisible.value = true
}

const showMessageWithIcon = (type: 'info' | 'success' | 'warning' | 'error') => {
  messageType.value = type
  messageContent.value = `这是一条带图标的 ${type} 消息`
  messageShowIcon.value = true
  messageBackground.value = false
  messageClosable.value = false
  messageDuration.value = 2
  messageVisible.value = true
}

const showMessageWithBackground = (type: 'info' | 'success' | 'warning' | 'error') => {
  messageType.value = type
  messageContent.value = `这是一条带背景的 ${type} 消息`
  messageShowIcon.value = true
  messageBackground.value = true
  messageClosable.value = false
  messageDuration.value = 2
  messageVisible.value = true
}

const showClosableMessage = (type: 'info' | 'success' | 'warning' | 'error') => {
  messageType.value = type
  messageContent.value = '这是一条可关闭的消息，点击 X 关闭'
  messageShowIcon.value = true
  messageBackground.value = true
  messageClosable.value = true
  messageDuration.value = 0
  messageVisible.value = true
}

const showLongMessage = () => {
  messageType.value = 'success'
  messageContent.value = '这条消息将在 5 秒后自动关闭'
  messageShowIcon.value = true
  messageBackground.value = false
  messageClosable.value = true
  messageDuration.value = 5
  messageVisible.value = true
}

const handleMessageClose = () => {
  messageVisible.value = false
}
</script>