<template>
  <Alert variant="destructive">
    <AlertTitle>Enter your username and password at will</AlertTitle>
  </Alert>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Alert, AlertTitle } from '@/components/ui/alert';

export default defineComponent({
  name: 'AlertForm',
  components: {AlertTitle, Alert}
})
</script>