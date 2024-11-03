<template>
  <ShadcnPagination v-model="defaultValue" total="100" show-sizer/>
  <ShadcnPagination v-model="defaultValue" total="100" show-sizer :sizer-options="[5, 10, 20, 10000, 9988000]"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
