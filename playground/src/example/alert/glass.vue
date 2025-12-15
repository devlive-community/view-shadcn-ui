<template>
  <div class="space-y-4">
    <div class="relative">
      <div class="h-32 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <ShadcnAlert title="液态玻璃效果提示" glass show-icon type="primary">
          这是一个使用液态玻璃效果的 Alert 组件，通过半透明背景和背景模糊创建现代化的视觉效果。
        </ShadcnAlert>
      </div>
    </div>

    <div class="relative">
      <div class="h-32 rounded-lg bg-gradient-to-r from-green-400 to-teal-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <ShadcnAlert title="成功提示" glass show-icon type="success" closable>
          操作已成功完成！液态玻璃效果让提示框更加优雅。
        </ShadcnAlert>
      </div>
    </div>

    <div class="relative">
      <div class="h-32 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <ShadcnAlert title="警告提示" glass show-icon type="warning">
          请注意：液态玻璃效果在彩色背景上表现最佳。
        </ShadcnAlert>
      </div>
    </div>

    <div class="relative">
      <div class="h-32 rounded-lg bg-gradient-to-r from-red-400 to-pink-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <ShadcnAlert title="错误提示" glass show-icon type="error" closable>
          发生错误！液态玻璃效果同样适用于错误提示。
        </ShadcnAlert>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
