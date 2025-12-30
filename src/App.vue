<template>
  <div :class="['min-h-screen px-6 pb-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark" class="mt-2">
      切换暗黑模式
    </ShadcnButton>

    <div class="mt-6">
      <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-white' : 'text-gray-900']">Spin 液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400">
        <div class="p-8 rounded-lg bg-white/50 relative" style="height: 200px;">
          <ShadcnSpin :model-value="loading" glass :dark="isDark" fixed/>
          <ShadcnButton @click="loading = !loading" :dark="isDark">
            {{ loading ? '停止加载' : '开始加载' }}
          </ShadcnButton>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnSpin } from "@/ui/spin";

const isDark = ref(false)
const loading = ref(false)
</script>
