<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">基础用法</h3>
      <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" />
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">多选</h3>
      <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" multiple />
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">禁用状态</h3>
      <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" disabled />
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">自定义描述</h3>
      <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" description="支持 .jpg, .png, .pdf 格式文件，最大 10MB" />
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">限制文件类型</h3>
      <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" accept="image/*" description="仅支持图片格式" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShadcnUpload } from '@/ui/upload'
</script>
