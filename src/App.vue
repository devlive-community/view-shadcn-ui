<template>
  <div :class="['min-h-screen px-6 pb-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark" class="mt-2">
      切换暗黑模式
    </ShadcnButton>

    <div class="mt-6">
      <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-white' : 'text-gray-900']">Dropdown 液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400">
        <div class="p-8 rounded-lg bg-white/50">
          <ShadcnDropdown glass :dark="isDark">
            <template #trigger>
              <ShadcnButton :dark="isDark">打开菜单</ShadcnButton>
            </template>
            <ShadcnDropdownItem>操作 1</ShadcnDropdownItem>
            <ShadcnDropdownItem>操作 2</ShadcnDropdownItem>
            <ShadcnDropdownItem divided>操作 3</ShadcnDropdownItem>
            <ShadcnDropdownItem>操作 4</ShadcnDropdownItem>
          </ShadcnDropdown>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnDropdown, ShadcnDropdownItem } from "@/ui/dropdown";

const isDark = ref(false)
</script>
