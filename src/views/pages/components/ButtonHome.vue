<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">
    <ICard body-class="pt-3">
      <template #title>Size</template>
      <div class="space-x-2">
        <IButton size="large">Large</IButton>
        <IButton size="default">Default</IButton>
        <IButton size="small">Small</IButton>
      </div>
    </ICard>
    <ICard body-class="pt-3">
      <template #title>Type</template>
      <div class="space-x-2 space-y-2">
        <IButton type="primary">Primary</IButton>
        <IButton type="success">Success</IButton>
        <IButton type="warning">Warning</IButton>
        <IButton type="danger">Danger</IButton>
        <IButton type="info">Info</IButton>
        <IButton type="text">Text</IButton>
      </div>
    </ICard>
    <ICard body-class="pt-3">
      <template #title>Icon</template>
      <div class="space-x-2 space-y-2">
        <IButton>
          <template #icon>
            <Save/>
          </template>
          Icon
        </IButton>
        <IButton type="success">
          <template #icon>
            <Save/>
          </template>
          Icon + Type
        </IButton>
        <IButton type="success" size="small">
          <template #icon>
            <Save/>
          </template>
          Icon + Type + Size
        </IButton>
      </div>
    </ICard>
    <ICard body-class="pt-3">
      <template #title>Round</template>
      <div class="space-x-2 space-y-2">
        <IButton round>Round</IButton>
        <IButton type="success" round>Round + Type</IButton>
        <IButton type="success" size="small" round>Round + Type + Size</IButton>
        <IButton type="success" round>
          <template #icon>
            <Save/>
          </template>
          Round + Type + Size + Icon
        </IButton>
      </div>
    </ICard>
    <ICard body-class="pt-3">
      <template #title>Disabled</template>
      <div class="space-x-2 space-y-2">
        <IButton disabled>Disabled</IButton>
        <IButton type="success" disabled>Disabled + Type</IButton>
        <IButton type="success" size="small" disabled>Disabled + Type + Size</IButton>
        <IButton type="success" disabled>
          <template #icon>
            <Save/>
          </template>
          Disabled + Type + Size + Icon
        </IButton>
      </div>
    </ICard>
    <ICard body-class="pt-3">
      <template #title>Circle</template>
      <div class="space-x-2 space-y-2">
        <IButton circle>1</IButton>
        <IButton type="success" circle>2</IButton>
        <IButton type="success" circle>
          <template #icon>
            <Save/>
          </template>
        </IButton>
      </div>
    </ICard>
    <ICard body-class="pt-3">
      <template #title>Loading</template>
      <div class="space-x-2 space-y-2">
        <IButton loading>Loading</IButton>
        <IButton type="success" loading>Loading + Type</IButton>
        <IButton type="success" size="small" loading>Loading + Type + Size</IButton>
        <IButton type="success">
          <template #loading>
            <Save/>
          </template>
          Custom Loading
        </IButton>
      </div>
    </ICard>
    <ICard body-class="pt-3">
      <template #title>Color</template>
      <div class="space-x-2 space-y-2">
        <IButton color="red">Red</IButton>
        <IButton color="green">Green</IButton>
        <IButton color="blue">Blue</IButton>
        <IButton color="yellow">Yellow</IButton>
        <IButton color="purple">Purple</IButton>
        <IButton color="pink">Pink</IButton>
        <IButton color="indigo">Indigo</IButton>
        <IButton color="cyan">Cyan</IButton>
        <IButton color="teal">Teal</IButton>
      </div>
    </ICard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ICard from '@/ui/card/card.vue'
import IButton from '@/ui/button/button.vue'
import { Save } from 'lucide-vue-next'

export default defineComponent({
  name: 'ButtonHome',
  components: {
    IButton,
    ICard,
    Save
  }
})
</script>
