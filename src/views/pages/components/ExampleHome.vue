<template>
  <div>
    <ShadcnButton @click="handleClick">Show Message</ShadcnButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    handleClick() {
      (this as any).$Message.info({
        content: 'This is an info message',
        duration: 2000,
        showIcon: true
      });
    }
  }
});
</script>
