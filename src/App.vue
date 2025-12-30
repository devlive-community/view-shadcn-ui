<template>
  <div :class="['min-h-screen px-6 pb-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark" class="mt-2">
      切换暗黑模式
    </ShadcnButton>

    <div class="mt-6">
      <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-white' : 'text-gray-900']">Badge 液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400">
        <div class="p-8 rounded-lg bg-white/50 flex gap-6 items-center justify-center">
          <ShadcnBadge glass :dark="isDark" type="primary" text="5">
            <div :class="['px-6 py-3 rounded-lg', isDark ? 'bg-gray-800/50 text-gray-100' : 'bg-white/50 text-gray-900']">
              Primary
            </div>
          </ShadcnBadge>
          <ShadcnBadge glass :dark="isDark" type="success" text="10">
            <div :class="['px-6 py-3 rounded-lg', isDark ? 'bg-gray-800/50 text-gray-100' : 'bg-white/50 text-gray-900']">
              Success
            </div>
          </ShadcnBadge>
          <ShadcnBadge glass :dark="isDark" type="warning" text="99+">
            <div :class="['px-6 py-3 rounded-lg', isDark ? 'bg-gray-800/50 text-gray-100' : 'bg-white/50 text-gray-900']">
              Warning
            </div>
          </ShadcnBadge>
          <ShadcnBadge glass :dark="isDark" type="danger" text="New">
            <div :class="['px-6 py-3 rounded-lg', isDark ? 'bg-gray-800/50 text-gray-100' : 'bg-white/50 text-gray-900']">
              Danger
            </div>
          </ShadcnBadge>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnBadge } from "@/ui/badge";

const isDark = ref(false)
</script>
