<template>
  <div class="p-32">
    <ShadcnSwitch v-model="value">
    </ShadcnSwitch>

    <ShadcnSwitch v-model="value">
      <template #open>我是左面很长的一段信息</template>
      <template #close>我是右面很长的一段信息</template>
    </ShadcnSwitch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(null)
</script>