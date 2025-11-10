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

    <ShadcnAvatar alt="用户名" :dark="isDark"/>

    <ShadcnAvatarGroup :items="avatars" :max="3" :dark="isDark"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
}

const avatars = [
  { name: '张三', src: 'https://i.pravatar.cc/150?img=3' },
  { name: '李四', src: 'https://i.pravatar.cc/150?img=4' },
  { name: '王五', src: 'https://i.pravatar.cc/150?img=5' },
  { name: '赵六', src: 'https://i.pravatar.cc/150?img=6' },
  { name: '钱七', src: 'https://i.pravatar.cc/150?img=7' }
]
</script>