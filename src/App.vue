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
