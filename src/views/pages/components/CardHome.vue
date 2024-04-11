<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">
    <ICard title="Basic"/>
    <ICard>No Title</ICard>
    <ICard title="Title Class" title-class="text-red-500"/>
    <ICard body-class="text-red-500">Body Class</ICard>
    <ICard title="Extra">
      <template #extra>
        <IButton>Extra</IButton>
      </template>
    </ICard>
    <ICard>
      <template #title>
        <span>Footer</span>
      </template>
      <template #extra>
        <IButton>Extra</IButton>
      </template>
      <template #footer>
        <IButton>Footer</IButton>
      </template>
    </ICard>
    <ICard title="Shadow Never" shadow="never"/>
    <ICard title="Shadow Always" shadow="always"/>
    <ICard title="Shadow Hover" shadow="hover" body-class="p-10"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ICard from '@/ui/card/card.vue'
import IButton from '@/ui/button/button.vue'

export default defineComponent({
  name: 'CardHome',
  components: {
    ICard,
    IButton
  }
})
</script>
