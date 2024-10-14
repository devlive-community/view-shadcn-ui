<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">
    <ICard title="Default" :description="`Model Value: ${defaultModel}`">
      <div class="flex items-center justify-center h-32 p-3">
        <IInput v-model="defaultModel" placeholder="Placeholder ..."/>
      </div>
    </ICard>

    <ICard title="Clearable" :description="`Model Value: ${clearableModel}`">
      <div class="flex items-center justify-center h-32 p-3">
        <IInput v-model="clearableModel" clearable placeholder="Placeholder ..."/>
      </div>
    </ICard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputHome',
  data()
  {
    return {
      defaultModel: '',
      clearableModel: ''
    }
  }
})
</script>
