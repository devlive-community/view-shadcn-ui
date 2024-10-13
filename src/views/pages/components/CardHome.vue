<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">

    <ICard title="Simple"/>

    <ICard>
      <template #content>
        <div class="flex items-center justify-center h-32 w-full font-black text-blue-300">
          No Title
        </div>
      </template>
    </ICard>

    <ICard>
      <template #title>
        <span>Custom Title Slot</span>
      </template>
    </ICard>

    <ICard title="Description" description="Description"></ICard>

    <ICard>
      <template #title>
        <span>Custom Description Slot</span>
      </template>
      <template #description>
        <span class="text-blue-300">Description</span>
      </template>
    </ICard>

    <ICard>
      <template #title>
        <span>No Content</span>
      </template>
    </ICard>

    <ICard>
      <template #title>Custom Content Slot</template>
      <template #content>
        <span class="text-blue-300">Content</span>
      </template>
    </ICard>

    <ICard>
      <template #title>No Footer</template>
      <template #content>Content</template>
    </ICard>

    <ICard>
      <template #title>Custom Footer Slot</template>
      <template #content>Content</template>
      <template #footer>
        <IButton>Footer</IButton>
      </template>
    </ICard>

    <ICard>
      <template #title>Custom Extra Slot</template>
      <template #extra>
        <IButton>Extra</IButton>
      </template>
      <template #content>Content</template>
      <template #footer>
        <IButton>Footer</IButton>
      </template>
    </ICard>

    <ICard>
      <template #title>
        <div class="text-blue-300">Custom Title Class</div>
      </template>
      <template #content>Note that if the title attribute is set, the title slot will not take effect.</template>
    </ICard>

    <ICard>
      <template #title>
        <div>Custom Body Class</div>
      </template>
      <template #content>
        <div class="text-blue-300 p-3">Content</div>
      </template>
    </ICard>

    <ICard title="Shadow Never" shadow="never"/>

    <ICard title="Shadow Always" shadow="always"/>

    <ICard title="Shadow Hover" shadow="hover"/>

    <div class="flex flex-col gap-4">
      <ICard title="Loading" :loading="loading"/>
      <IButton @click="loading = !loading">{{ loading ? 'Stop Loading' : 'Start Loading' }}</IButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ICard } from '@/ui/card'
import IButton from '@/ui/button/button.vue'

export default defineComponent({
  name: 'CardHome',
  components: {
    ICard,
    IButton
  },
  data()
  {
    return {
      loading: false
    }
  }
})
</script>
