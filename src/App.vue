<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6" style="height: 100vh;">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnToggle - 液态玻璃效果</h3>
        <div class="space-y-6">
          <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-blue-900 to-cyan-900' : 'bg-gradient-to-r from-blue-400 to-cyan-400']">
            <div class="flex flex-col gap-4">
              <div class="flex gap-2">
                <ShadcnToggle v-model="toggleValue1" value="bold" glass :dark="isDark">粗体</ShadcnToggle>
                <ShadcnToggle v-model="toggleValue2" value="italic" glass :dark="isDark">斜体</ShadcnToggle>
                <ShadcnToggle v-model="toggleValue3" value="underline" glass :dark="isDark">下划线</ShadcnToggle>
              </div>
              <div>
                <h4 :class="['text-sm font-medium mb-2', isDark ? 'text-gray-200' : 'text-gray-700']">多选模式</h4>
                <ShadcnToggleGroup v-model="toggleGroupValue" multiple glass :dark="isDark">
                  <ShadcnToggle value="left">左对齐</ShadcnToggle>
                  <ShadcnToggle value="center">居中</ShadcnToggle>
                  <ShadcnToggle value="right">右对齐</ShadcnToggle>
                  <ShadcnToggle value="justify">两端对齐</ShadcnToggle>
                </ShadcnToggleGroup>
              </div>
              <div>
                <h4 :class="['text-sm font-medium mb-2', isDark ? 'text-gray-200' : 'text-gray-700']">单选模式</h4>
                <ShadcnToggleGroup v-model="toggleSingleValue" glass :dark="isDark">
                  <ShadcnToggle value="small">小</ShadcnToggle>
                  <ShadcnToggle value="medium">中</ShadcnToggle>
                  <ShadcnToggle value="large">大</ShadcnToggle>
                </ShadcnToggleGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnToggle, ShadcnToggleGroup } from "@/ui/toggle";

const isDark = ref(false)
const toggleValue1 = ref(null)
const toggleValue2 = ref(null)
const toggleValue3 = ref(null)
const toggleGroupValue = ref([])
const toggleSingleValue = ref(null)
</script>