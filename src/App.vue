<template>
  <div :class="['min-h-screen p-8 space-y-8', isDark ? 'bg-gray-900' : 'bg-gray-50']">
    <div class="mx-auto space-y-8">
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
    </div>

    <ShadcnAlert type="success" title="成功" :dark="isDark" show-icon>
      操作已成功完成！
    </ShadcnAlert>

    <ShadcnAlert type="error" :dark="isDark" closable>
      发生了一个错误
    </ShadcnAlert>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
}
</script>