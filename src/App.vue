<template>
  <div :class="['min-h-screen px-6 pb-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark" class="mt-2">
      切换暗黑模式
    </ShadcnButton>

    <div class="mt-3">
      <ShadcnTooltip content="This is a tooltip" :dark="isDark">
        <ShadcnButton :dark="isDark">Hover</ShadcnButton>
      </ShadcnTooltip>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";

const isDark = ref(false)
</script>
