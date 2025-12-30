<template>
  <div :class="['min-h-screen px-6 pb-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark" class="mt-2">
      切换暗黑模式
    </ShadcnButton>

    <div class="mt-6">
      <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-white' : 'text-gray-900']">Tab 液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400">
        <div class="p-8 rounded-lg bg-white/50 flex flex-col items-center gap-6">
          <ShadcnTab glass :dark="isDark">
            <ShadcnTabItem label="Tab 1" value="Tab 1">
              <p :class="[isDark ? 'text-white' : 'text-gray-900']">Tab 1 content</p>
            </ShadcnTabItem>
            <ShadcnTabItem label="Tab 2" value="Tab 2">
              <p :class="[isDark ? 'text-white' : 'text-gray-900']">Tab 2 content</p>
            </ShadcnTabItem>
            <ShadcnTabItem label="Tab 3" value="Tab 3">
              <p :class="[isDark ? 'text-white' : 'text-gray-900']">Tab 3 content</p>
            </ShadcnTabItem>
          </ShadcnTab>
          <ShadcnTab glass :dark="isDark" type="success">
            <ShadcnTabItem label="Success 1" value="Success 1">Success content</ShadcnTabItem>
            <ShadcnTabItem label="Success 2" value="Success 2">Success content</ShadcnTabItem>
          </ShadcnTab>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnTab, ShadcnTabItem } from "@/ui/tab";

const isDark = ref(false)
</script>
