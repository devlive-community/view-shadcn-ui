<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">
    <ShadcnCard title="Basic Usage">
      <template #content>
        <div class="flex items-center justify-center space-x-2 h-32 p-3">
          <ShadcnRow>
            <ShadcnCol class="bg-blue-200"></ShadcnCol>
            <ShadcnCol class="bg-blue-300"></ShadcnCol>
            <ShadcnCol class="bg-blue-400"></ShadcnCol>
            <ShadcnCol class="bg-blue-500"></ShadcnCol>
          </ShadcnRow>
        </div>
      </template>
    </ShadcnCard>

    <ShadcnCard title="Gutter">
      <template #content>
        <div class="flex items-center justify-center space-x-2 h-32 p-3">
          <ShadcnRow :gutter="30">
            <ShadcnCol class="bg-blue-200"></ShadcnCol>
            <ShadcnCol class="bg-blue-300"></ShadcnCol>
            <ShadcnCol class="bg-blue-400"></ShadcnCol>
            <ShadcnCol class="bg-blue-500"></ShadcnCol>
          </ShadcnRow>
        </div>
      </template>
    </ShadcnCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RowColHome'
})
</script>
