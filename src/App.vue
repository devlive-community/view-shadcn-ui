<template>
  <div :class="['min-h-screen p-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnInputTag</h3>
        <div :class="['p-4 rounded-lg border', isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-200 bg-white']">
          <ShadcnInputTag v-model="tags" placeholder="输入标签后按回车" :dark="isDark" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnInputTag } from "@/ui/input-tag";

const isDark = ref(false)
const tags = ref(['Vue', 'React'])
</script>