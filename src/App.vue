<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6" style="height: 100vh;">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnSwitch - 液态玻璃效果</h3>
        <div class="space-y-6">
          <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
            <div class="flex flex-col gap-4">
              <ShadcnSwitch v-model="switchValue1" glass :dark="isDark" />
              <ShadcnSwitch v-model="switchValue2" glass type="success" :dark="isDark" />
              <ShadcnSwitch v-model="switchValue3" glass type="warning" :dark="isDark" />
              <ShadcnSwitch v-model="switchValue4" glass type="error" :dark="isDark" />
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
import { ShadcnSwitch } from "@/ui/switch";

const isDark = ref(false)
const switchValue1 = ref(true)
const switchValue2 = ref(false)
const switchValue3 = ref(true)
const switchValue4 = ref(false)
</script>