<template>
  <div class="p-32">
    <ShadcnSelect v-model="selected"
                  type="warning"
                  placeholder="Select options"
                  multiple
                  :options="options"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref([])
const options = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' }
]
</script>
