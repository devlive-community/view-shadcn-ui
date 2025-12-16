<template>
  <ShadcnRadioGroup v-model="radioValue">
    <ShadcnRadio value="1">选项 1</ShadcnRadio>
    <ShadcnRadio value="2" type="success">选项 2</ShadcnRadio>
    <ShadcnRadio value="3" type="warning">选项 3</ShadcnRadio>
    <ShadcnRadio value="4" type="error">选项 4</ShadcnRadio>
  </ShadcnRadioGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radioValue = ref('1')
</script>
