<template>
  <div class="p-32">
    <ShadcnTab closable>
      <ShadcnTabItem v-for="i in 100" :label="`Tab ${i}`" :value="`Tab ${i}`">Tab {{ i }} content</ShadcnTabItem>
    </ShadcnTab>

    <ShadcnTab type="primary" line>
      <ShadcnTabItem v-for="i in 20" :label="`Tab ${i}`" :value="`Tab ${i}`">Tab {{ i }} content</ShadcnTabItem>
    </ShadcnTab>
  </div>
</template>

<script setup lang="ts">
</script>