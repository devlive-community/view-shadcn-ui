<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">
    <ShadcnCard title="Default">
      <div class="flex items-center justify-center h-32 p-3">
        <ShadcnCopy :text="text"/>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Custom">
      <div class="flex items-center justify-center h-32 p-3">
        <ShadcnCopy :text="text">
          <template #icon>
            <HomeIcon class="cursor-pointer"/>
          </template>
        </ShadcnCopy>
      </div>
    </ShadcnCard>
  </div>
</template>

<script setup lang="ts">
import { HomeIcon } from 'lucide-vue-next'

const text = 'Hello View Shadcn UI'
</script>
