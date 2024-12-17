<template>
  <div class="p-32 space-y-2">
    <ShadcnInput v-model="value"/>
    <ShadcnQrCode v-model="value" :size="30" :padding="5">
      <template #img>
        <ShadcnAvatar src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" square size="small"/>
      </template>
    </ShadcnQrCode>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ShadcnAvatar from '@/ui/avatar'

const value = ref('Hello View Shadcn UI')
</script>
