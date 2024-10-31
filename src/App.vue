<template>
  <div class="p-8 max-w-2xl mx-auto space-y-10">
    <ShadcnSpace wrap>
      <ShadcnTag text="Default Tag"/>
      <ShadcnTag text="Default Tag" size="default" closable @on-close="console.log('on-close')"/>
      <ShadcnTag text="Medium Tag" size="medium" closable/>
      <ShadcnTag text="Large Tag Width" size="large" closable/>
    </ShadcnSpace>
  </div>
</template>

<script setup lang="ts">
</script>
