<template>
  <div class="p-32 space-y-2">
    <div>Default Value: {{ checked }}</div>
    <ShadcnSwitch v-model="checked">
      <template #open>ON</template>
      <template #close>OFF</template>
    </ShadcnSwitch>

    <div>Null Value: {{ checked2 }}</div>
    <ShadcnSwitch v-model="checked2" true-value="ON" false-value="OFF">
      <template #open>OFF</template>
      <template #close>ON</template>
    </ShadcnSwitch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
const checked2 = ref(null)
</script>
