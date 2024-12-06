<template>
  <div class="p-32">
    <ShadcnCountDown  title="Activity events"
                      toolbar
                      :time="new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)"/>
  </div>
</template>

<script setup>
</script>