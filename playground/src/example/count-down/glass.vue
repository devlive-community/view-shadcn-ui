<template>
  <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400">
    <ShadcnCountDown :time="new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)" glass title="倒计时" :show-progress="true" />
  </div>
</template>

<script setup lang="ts">
</script>
