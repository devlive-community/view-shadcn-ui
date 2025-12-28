<template>
  <div :class="['min-h-screen p-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnModal - 液态玻璃效果</h3>
        <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-orange-900 to-red-900' : 'bg-gradient-to-r from-orange-400 to-red-400']">
          <div :class="['p-8 rounded-lg', isDark ? 'bg-gray-800/50' : 'bg-white/50']">
            <ShadcnButton @click="showModal = true" :dark="isDark">
              打开液态玻璃效果 Modal
            </ShadcnButton>
          </div>
        </div>
      </div>
    </div>

    <ShadcnModal
      v-model="showModal"
      glass
      :dark="isDark"
      title="液态玻璃效果"
      description="这是一个带有液态玻璃效果的模态框"
      width="500px"
    >
      <div class="space-y-4">
        <p :class="['text-sm', isDark ? 'text-gray-300' : 'text-gray-700']">
          这个模态框使用了液态玻璃效果，背景具有模糊和半透明特性。
        </p>
        <p :class="['text-sm', isDark ? 'text-gray-300' : 'text-gray-700']">
          您可以通过背景看到后面的内容，同时保持良好的可读性。
        </p>
      </div>
      <template #footer>
        <div class="flex gap-2 justify-end">
          <ShadcnButton @click="showModal = false" :dark="isDark">
            关闭
          </ShadcnButton>
          <ShadcnButton type="primary" @click="showModal = false" :dark="isDark">
            确定
          </ShadcnButton>
        </div>
      </template>
    </ShadcnModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnModal } from "@/ui/modal";

const isDark = ref(false)
const showModal = ref(false)
</script>