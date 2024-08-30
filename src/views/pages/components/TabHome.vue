<template>
  <ICard>
    <template #title>Horizontal</template>
    <div class="mt-2">
      <ITabs value="tab1" orientation="horizontal">
        <template #default>
          <ITab value="tab1">Tab 1</ITab>
          <ITab value="tab2">Tab 2</ITab>
        </template>
        <template #content>
          <ITabContent value="tab1">Content 1</ITabContent>
          <ITabContent value="tab2">Content 2</ITabContent>
        </template>
      </ITabs>
    </div>
  </ICard>
  <ICard>
    <template #title>Vertical</template>
    <div class="mt-2">
      <ITabs value="tab1" orientation="vertical">
        <template #default>
          <ITab value="tab1">Tab 1</ITab>
          <ITab value="tab2">Tab 2</ITab>
        </template>
        <template #content>
          <ITabContent value="tab1">Content 1</ITabContent>
          <ITabContent value="tab2">Content 2</ITabContent>
        </template>
      </ITabs>
    </div>
  </ICard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ICard from '@/ui/card/card.vue'
import ITab from '@/ui/tab/tab.vue'
import ITabs from '@/ui/tab/index.vue'
import ITabContent from '@/ui/tab/content.vue'

export default defineComponent({
  name: 'TabHome',
  components: {
    ITabContent, ITabs, ITab,
    ICard
  }
})
</script>
