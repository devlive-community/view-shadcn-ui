<template>
  <div class="p-32 space-y-7">
    <ShadcnSelect multiple v-model="defaultSelect">
      <template #options>
        <ShadcnSelectGroup label="Group 1">
          <ShadcnSelectOption v-for="i in 2"
                              :key="i"
                              :label="`Option ${i}`"
                              :value="`Value ${i}`"/>
        </ShadcnSelectGroup>
        <ShadcnSelectOption v-for="i in 2"
                            :key="i"
                            :label="`Option ${i}`"
                            :value="`Value ${i}`"/>
      </template>
    </ShadcnSelect>

    Slider Value: {{ value }}
    <ShadcnSlider v-model="value" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultSelect = ref('')
const value = ref(50)
</script>