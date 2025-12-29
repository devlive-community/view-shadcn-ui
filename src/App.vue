<template>
  <div :class="['min-h-screen px-6 pb-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark" class="mt-2">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 mt-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnMarkdown - 液态玻璃效果</h3>
        <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-400 to-purple-400']">
          <div :class="['p-8 rounded-lg', isDark ? 'bg-gray-800/50' : 'bg-white/50']">
            <ShadcnMarkdown v-model="content" mode="split" glass/>
          </div>
        </div>
      </div>
    </div>

    <ShadcnMenu :dark="isDark" direction="horizontal">
      <ShadcnMenuItem name="home">
        <template #icon>
          <ShadcnIcon icon="Home"/>
        </template>
        Home
      </ShadcnMenuItem>
      <ShadcnMenuSub name="profileSub">
        <template #title>Profile</template>
        <template #icon>
          <ShadcnIcon icon="User"/>
        </template>
        <ShadcnMenuGroup name="settingGroup" >
          <template #title>Settings</template>
          <ShadcnMenuItem name="username">Change</ShadcnMenuItem>
          <ShadcnMenuItem name="password">Change Password</ShadcnMenuItem>
        </ShadcnMenuGroup>
      </ShadcnMenuSub>
      <ShadcnMenuItem name="email">Change Email</ShadcnMenuItem>
      <ShadcnMenuItem name="logout">
        <template #icon>
          <ShadcnIcon icon="LogOut"/>
        </template>
        Logout
      </ShadcnMenuItem>
    </ShadcnMenu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnMarkdown } from "@/ui/markdown";

const isDark = ref(false)

const content = ref(`# 液态玻璃效果

支持液态玻璃效果的 Markdown 编辑器。`)
</script>
