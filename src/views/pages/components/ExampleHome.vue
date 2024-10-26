<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 ">
    Default Page : {{ defaultValue }}
    <ShadcnPage v-model="defaultValue"
                total="130"
                max-show-page="8"
                page-size="10"
                show-total/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
