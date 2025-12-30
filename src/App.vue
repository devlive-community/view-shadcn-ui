<template>
  <div :class="['min-h-screen px-6 pb-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark" class="mt-2">
      切换暗黑模式
    </ShadcnButton>

    <div class="mt-6">
      <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-white' : 'text-gray-900']">Upload 液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400">
        <div class="p-8 rounded-lg bg-white/50">
          <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" glass :dark="isDark" multiple />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnUpload } from "@/ui/upload";

const isDark = ref(false)
</script>
