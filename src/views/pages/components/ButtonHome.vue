<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">
    <ShadcnCard body-class="pt-3">
      <template #title>Size</template>
      <div class="space-x-2">
        <ShadcnButton size="large">Large</ShadcnButton>
        <ShadcnButton size="default">Default</ShadcnButton>
        <ShadcnButton size="small">Small</ShadcnButton>
      </div>
    </ShadcnCard>
    <ShadcnCard body-class="pt-3">
      <template #title>Type</template>
      <div class="space-x-2 space-y-2">
        <ShadcnButton type="primary">Primary</ShadcnButton>
        <ShadcnButton type="success">Success</ShadcnButton>
        <ShadcnButton type="warning">Warning</ShadcnButton>
        <ShadcnButton type="danger">Danger</ShadcnButton>
        <ShadcnButton type="info">Info</ShadcnButton>
        <ShadcnButton type="text">Text</ShadcnButton>
      </div>
    </ShadcnCard>
    <ShadcnCard body-class="pt-3">
      <template #title>Icon</template>
      <div class="space-x-2 space-y-2">
        <ShadcnButton>
          <template #icon>
            <Save/>
          </template>
          Icon
        </ShadcnButton>
        <ShadcnButton type="success">
          <template #icon>
            <Save/>
          </template>
          Icon + Type
        </ShadcnButton>
        <ShadcnButton type="success" size="small">
          <template #icon>
            <Save/>
          </template>
          Icon + Type + Size
        </ShadcnButton>
      </div>
    </ShadcnCard>
    <ShadcnCard body-class="pt-3">
      <template #title>Round</template>
      <div class="space-x-2 space-y-2">
        <ShadcnButton round>Round</ShadcnButton>
        <ShadcnButton type="success" round>Round + Type</ShadcnButton>
        <ShadcnButton type="success" size="small" round>Round + Type + Size</ShadcnButton>
        <ShadcnButton type="success" round>
          <template #icon>
            <Save/>
          </template>
          Round + Type + Size + Icon
        </ShadcnButton>
      </div>
    </ShadcnCard>
    <ShadcnCard body-class="pt-3">
      <template #title>Disabled</template>
      <div class="space-x-2 space-y-2">
        <ShadcnButton disabled>Disabled</ShadcnButton>
        <ShadcnButton type="success" disabled>Disabled + Type</ShadcnButton>
        <ShadcnButton type="success" size="small" disabled>Disabled + Type + Size</ShadcnButton>
        <ShadcnButton type="success" disabled>
          <template #icon>
            <Save/>
          </template>
          Disabled + Type + Size + Icon
        </ShadcnButton>
      </div>
    </ShadcnCard>
    <ShadcnCard body-class="pt-3">
      <template #title>Circle</template>
      <div class="space-x-2 space-y-2">
        <ShadcnButton circle>1</ShadcnButton>
        <ShadcnButton type="success" circle>2</ShadcnButton>
        <ShadcnButton type="success" circle>
          <template #icon>
            <Save/>
          </template>
        </ShadcnButton>
      </div>
    </ShadcnCard>
    <ShadcnCard body-class="pt-3">
      <template #title>Loading</template>
      <div class="space-x-2 space-y-2">
        <ShadcnButton loading>Loading</ShadcnButton>
        <ShadcnButton type="success" loading>Loading + Type</ShadcnButton>
        <ShadcnButton type="success" size="small" loading>Loading + Type + Size</ShadcnButton>
        <ShadcnButton type="success">
          <template #loading>
            <Save/>
          </template>
          Custom Loading
        </ShadcnButton>
      </div>
    </ShadcnCard>
    <ShadcnCard body-class="pt-3">
      <template #title>Color</template>
      <div class="space-x-2 space-y-2">
        <ShadcnButton color="red">Red</ShadcnButton>
        <ShadcnButton color="green">Green</ShadcnButton>
        <ShadcnButton color="blue">Blue</ShadcnButton>
        <ShadcnButton color="yellow">Yellow</ShadcnButton>
        <ShadcnButton color="purple">Purple</ShadcnButton>
        <ShadcnButton color="pink">Pink</ShadcnButton>
        <ShadcnButton color="indigo">Indigo</ShadcnButton>
        <ShadcnButton color="cyan">Cyan</ShadcnButton>
        <ShadcnButton color="teal">Teal</ShadcnButton>
      </div>
    </ShadcnCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Save } from 'lucide-vue-next'

export default defineComponent({
  name: 'ButtonHome',
  components: {
    Save
  }
})
</script>
