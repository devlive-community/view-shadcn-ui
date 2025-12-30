<template>
  <div class="space-y-4">
    <div class="relative">
      <div class="h-64 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <div class="flex gap-4">
          <ShadcnDropdown glass trigger="click">
            <template #trigger>
              <ShadcnButton>点击打开</ShadcnButton>
            </template>
            <ShadcnDropdownItem>新建文件</ShadcnDropdownItem>
            <ShadcnDropdownItem>打开文件</ShadcnDropdownItem>
            <ShadcnDropdownItem divided>保存</ShadcnDropdownItem>
            <ShadcnDropdownItem active>另存为</ShadcnDropdownItem>
            <ShadcnDropdownItem divided>退出</ShadcnDropdownItem>
          </ShadcnDropdown>

          <ShadcnDropdown glass trigger="hover" position="right">
            <template #trigger>
              <ShadcnButton>悬停打开</ShadcnButton>
            </template>
            <ShadcnDropdownItem>编辑</ShadcnDropdownItem>
            <ShadcnDropdownItem>复制</ShadcnDropdownItem>
            <ShadcnDropdownItem>粘贴</ShadcnDropdownItem>
            <ShadcnDropdownItem divided>删除</ShadcnDropdownItem>
            <ShadcnDropdownItem disabled>禁用项</ShadcnDropdownItem>
          </ShadcnDropdown>
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="h-64 rounded-lg bg-gradient-to-r from-green-400 to-teal-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <div class="flex gap-4">
          <ShadcnDropdown glass trigger="click" position="top">
            <template #trigger>
              <ShadcnButton type="success">上方菜单</ShadcnButton>
            </template>
            <ShadcnDropdownItem>选项 1</ShadcnDropdownItem>
            <ShadcnDropdownItem active>选项 2</ShadcnDropdownItem>
            <ShadcnDropdownItem>选项 3</ShadcnDropdownItem>
          </ShadcnDropdown>

          <ShadcnDropdown glass trigger="hover" position="bottom">
            <template #trigger>
              <ShadcnButton type="success">下方菜单</ShadcnButton>
            </template>
            <ShadcnDropdownItem>更多操作</ShadcnDropdownItem>
            <ShadcnDropdownItem divided>设置</ShadcnDropdownItem>
            <ShadcnDropdownItem>帮助</ShadcnDropdownItem>
          </ShadcnDropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
