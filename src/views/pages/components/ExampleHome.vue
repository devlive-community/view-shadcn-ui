<template>
  <ShadcnSpace wrap>
    <ShadcnButton @click="info">Info</ShadcnButton>
    <ShadcnButton @click="success">Success</ShadcnButton>
    <ShadcnButton @click="warning">Warning</ShadcnButton>
    <ShadcnButton @click="error">Error</ShadcnButton>
    <ShadcnButton @click="loading">Loading</ShadcnButton>
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
      });
    },
    success() {
      this.$Message.success({
        content: 'This is a success tip',
        type: 'success',
        showIcon: true,
        background: true
      });
    },
    warning() {
      this.$Message.warning({
        content: 'This is a warning tip',
        type: 'warning',
        showIcon: true,
        background: true
      });
    },
    error() {
      this.$Message.error({
        content: 'This is an error tip',
        type: 'error',
        showIcon: true,
        background: true
      });
    },
    loading() {
      this.$Message.loading({
        content: 'This is a loading tip',
        type: 'loading',
        showIcon: true,
        background: true
      });
    }
  }
}
</script>
