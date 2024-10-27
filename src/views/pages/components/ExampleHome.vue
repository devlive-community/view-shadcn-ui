<template>
  <ShadcnSpace wrap>
    <ShadcnButton @click="info">Info</ShadcnButton>
  </ShadcnSpace>
</template>
<script>
export default {
  methods: {
    info() {
      this.$Message.info({
        content: 'This is an info tip',
        type: 'info',
        showIcon: true,
        duration: 0,
        closeable: true
      });
    }
  }
}
</script>
