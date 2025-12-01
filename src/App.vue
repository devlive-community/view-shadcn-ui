<template>
  <div :class="['min-h-screen p-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnTimePicker</h3>
        <div :class="['p-4 rounded-lg border space-y-2', isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-200 bg-white']">
          <ShadcnTimePicker v-model="time" :dark="isDark"/>
          <ShadcnTimePicker v-model="timeWithSeconds" format="HH:mm:ss" :dark="isDark"/>
        </div>
      </div>

      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnToggle</h3>
        <div :class="['p-4 rounded-lg border space-y-4', isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-200 bg-white']">
          <ShadcnToggleGroup v-model="toggleValue" :dark="isDark">
            <ShadcnToggle value="left">Left</ShadcnToggle>
            <ShadcnToggle value="center">Center</ShadcnToggle>
            <ShadcnToggle value="right">Right</ShadcnToggle>
          </ShadcnToggleGroup>
          <ShadcnToggleGroup v-model="multiToggle" :dark="isDark" multiple>
            <ShadcnToggle value="bold">Bold</ShadcnToggle>
            <ShadcnToggle value="italic">Italic</ShadcnToggle>
            <ShadcnToggle value="underline">Underline</ShadcnToggle>
          </ShadcnToggleGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnTimePicker } from "@/ui/time-picker";
import { ShadcnToggle, ShadcnToggleGroup } from "@/ui/toggle";

const isDark = ref(false)
const time = ref('10:30')
const timeWithSeconds = ref('14:25:30')
const toggleValue = ref('center')
const multiToggle = ref(['bold'])
</script>