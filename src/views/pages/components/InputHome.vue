<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">
    <ShadcnCard title="Default" :description="`Model Value: ${defaultModel}`">
      <div class="flex items-center justify-center h-32 p-3">
        <ShadcnInput v-model="defaultModel" placeholder="Placeholder ..."/>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Clearable" :description="`Model Value: ${clearableModel}`">
      <div class="flex items-center justify-center h-32 p-3">
        <ShadcnInput v-model="clearableModel" clearable placeholder="Placeholder ..."/>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Size" :description="`Model Value: ${sizeModel}`">
      <div class="p-3 space-y-2">
        <ShadcnInput v-model="sizeModel" placeholder="Default Size" size="default"/>
        <ShadcnInput v-model="sizeModel" placeholder="Small Size" size="small"/>
        <ShadcnInput v-model="sizeModel" placeholder="Large Size" size="large"/>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Word Count" :description="`Model Value: ${wordCountModel}`">
      <div class="flex items-center justify-center h-32 p-3">
        <ShadcnInput v-model="wordCountModel" word-count placeholder="Word Count"/>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Max Count" :description="`Model Value: ${maxCountModel}`">
      <div class="flex items-center justify-center h-32 p-3">
        <ShadcnInput v-model="maxCountModel" word-count :max-count="100" placeholder="Max Count"/>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Prefix and Suffix" :description="`Model Value: ${prefixModel}`">
      <div class="p-3 space-y-2">
        <ShadcnInput v-model="prefixModel" placeholder="Prefix">
          <template #prefix>
            <span class="text-xs text-gray-300">P</span>
          </template>
        </ShadcnInput>
        <ShadcnInput v-model="prefixModel" placeholder="Suffix">
          <template #suffix>
            <span class="text-xs text-gray-300">S</span>
          </template>
        </ShadcnInput>
        <ShadcnInput v-model="prefixModel" placeholder="Prefix and Suffix">
          <template #prefix>
            <span class="text-xs text-gray-300">P</span>
          </template>
          <template #suffix>
            <span class="text-xs text-gray-300">S</span>
          </template>
        </ShadcnInput>
      </div>
    </ShadcnCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultModel = ref('')
const clearableModel = ref('Hello View Shadcn UI')
const sizeModel = ref('')
const wordCountModel = ref('')
const maxCountModel = ref('')
const prefixModel = ref('')
</script>
