<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">
    <ShadcnCard title="Default">
      <div class="flex items-center justify-center h-32 p-3">
        <ShadcnIcon icon="Ban"/>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Custom">
      <div class="flex items-center justify-center h-32 p-3">
        <ShadcnIcon>
          <template #icon>
            <Ban/>
          </template>
        </ShadcnIcon>
      </div>
    </ShadcnCard>
  </div>
</template>

<script setup lang="ts">
import { Ban } from 'lucide-vue-next'
</script>
