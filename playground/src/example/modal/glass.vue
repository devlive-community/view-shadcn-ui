<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-orange-400 to-red-400">
        <div class="p-8 rounded-lg bg-white/50">
          <ShadcnButton @click="showModal = true">打开液态玻璃效果 Modal</ShadcnButton>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式</h3>
      <div class="p-6 bg-gray-900 rounded-lg">
        <div class="p-6 rounded-lg bg-gradient-to-r from-orange-900 to-red-900">
          <div class="p-8 rounded-lg bg-gray-800/50">
            <ShadcnButton @click="showDarkModal = true" dark>打开液态玻璃效果 Modal（暗黑）</ShadcnButton>
          </div>
        </div>
      </div>
    </div>

    <ShadcnModal
      v-model="showModal"
      glass
      title="液态玻璃效果"
      description="这是一个带有液态玻璃效果的模态框"
      width="500px"
    >
      <div class="space-y-4">
        <p class="text-sm text-gray-700">
          这个模态框使用了液态玻璃效果，背景具有模糊和半透明特性。
        </p>
        <p class="text-sm text-gray-700">
          您可以通过背景看到后面的内容，同时保持良好的可读性。
        </p>
      </div>
      <template #footer>
        <div class="flex gap-2 justify-end">
          <ShadcnButton @click="showModal = false">关闭</ShadcnButton>
          <ShadcnButton type="primary" @click="showModal = false">确定</ShadcnButton>
        </div>
      </template>
    </ShadcnModal>

    <ShadcnModal
      v-model="showDarkModal"
      glass
      dark
      title="液态玻璃效果（暗黑模式）"
      description="这是一个带有液态玻璃效果的暗黑模式模态框"
      width="500px"
    >
      <div class="space-y-4">
        <p class="text-sm text-gray-300">
          这个模态框使用了液态玻璃效果，背景具有模糊和半透明特性。
        </p>
        <p class="text-sm text-gray-300">
          您可以通过背景看到后面的内容，同时保持良好的可读性。
        </p>
      </div>
      <template #footer>
        <div class="flex gap-2 justify-end">
          <ShadcnButton @click="showDarkModal = false" dark>关闭</ShadcnButton>
          <ShadcnButton type="primary" @click="showDarkModal = false" dark>确定</ShadcnButton>
        </div>
      </template>
    </ShadcnModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from '@/ui/button'
import { ShadcnModal } from '@/ui/modal'

const showModal = ref(false)
const showDarkModal = ref(false)
</script>
