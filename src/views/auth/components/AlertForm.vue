<template>
  <Alert variant="destructive">
    <AlertTitle>{{ $t('common.tip.inputAnyInfo') }}</AlertTitle>
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