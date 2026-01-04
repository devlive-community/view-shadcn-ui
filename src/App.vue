<template>
  <div
      :class="['min-h-screen px-6 pb-6 space-y-2 p-2', isGlass ? (isDark ? 'bg-gradient-to-br from-purple-900 via-pink-900 to-red-900' : 'bg-gradient-to-br from-purple-400 via-pink-500 to-red-500') : (isDark ? 'bg-gray-900' : 'bg-white')]">
    <div class="flex gap-2 space-x-3 items-center">
      <ShadcnButton :dark="isDark" :glass="isGlass" @click="isDark = !isDark">
        切换暗黑模式
      </ShadcnButton>
      <ShadcnButton :dark="isDark" :glass="isGlass" @click="isGlass = !isGlass">
        切换液态玻璃
      </ShadcnButton>
      <div :class="['ml-2', isDark ? 'text-white' : 'text-gray-900']">
        当前模式：{{ isDark ? '暗黑' : '亮色' }}，{{ isGlass ? '液态玻璃' : '普通' }}
      </div>
    </div>

    <ShadcnInput
        v-model="inputValue"
        type="success"
        show-icon
        :dark="isDark"
        :disabled="true"
        :glass="isGlass">
    </ShadcnInput>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from '@/ui/button'
import { ShadcnInput } from '@/ui/input'

const isDark = ref(false)
const isGlass = ref(false)

const inputValue = ref('')
</script>
