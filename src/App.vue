<template>
  <div class="p-32">
    <ShadcnCountDown title="Activity events"
                     toolbar
                     show-progress
                     :time="new Date(Date.now() + 6 * 1000)"/>
  </div>
</template>

<script setup>
</script>
