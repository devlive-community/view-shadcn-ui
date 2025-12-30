<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 浅色模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400">
        <div class="space-y-4">
          <ShadcnUpload glass action="//jsonplaceholder.typicode.com/posts/" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 暗黑模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-900 to-purple-900">
        <div class="space-y-4">
          <ShadcnUpload glass dark action="//jsonplaceholder.typicode.com/posts/" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">多选 - 液态玻璃</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-green-400 to-teal-400">
        <div class="space-y-4">
          <ShadcnUpload glass multiple action="//jsonplaceholder.typicode.com/posts/" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑多选 - 液态玻璃</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-pink-900 to-rose-900">
        <div class="space-y-4">
          <ShadcnUpload glass dark multiple action="//jsonplaceholder.typicode.com/posts/" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">自定义描述 - 液态玻璃</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400">
        <div class="space-y-4">
          <ShadcnUpload glass action="//jsonplaceholder.typicode.com/posts/" description="支持 .jpg, .png, .pdf 格式文件" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShadcnUpload } from '@/ui/upload'
</script>
