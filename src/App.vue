<template>
  <div class="p-32 space-y-2">
    <ShadcnSelect v-model="selected"
                  type="warning"
                  placeholder="Select options"
                  size="small"
                  :options="options"/>
    <ShadcnSelect v-model="selected"
                  type="warning"
                  placeholder="Select options"
                  size="default"
                  :options="options"/>
    <ShadcnSelect v-model="selected"
                  type="warning"
                  placeholder="Select options"
                  size="large"
                  :options="options"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref([])

const generateRandomOptions = (count) => {
  const options = [] as any[]

  for (let i = 1; i <= count; i++) {
    options.push({
      value: i,
      label: `Option ${ i }`
    })
  }

  return options
}

const options = generateRandomOptions(30)

</script>
