<template>
  <div class="p-20 space-y-2">
    <ShadcnSelect v-model="defaultSelect">
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultSelect = ref('')
</script>
