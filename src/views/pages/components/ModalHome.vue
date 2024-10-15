<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">
    <ShadcnCard>
      <template #title>Default</template>
      <template #description>Default Modal Value: <span class="font-bold">{{ defaultModal }}</span></template>
      <template #content>
        <div class="flex items-center justify-center h-32">
          <ShadcnButton type="primary" @click="defaultModal = true">Click</ShadcnButton>
        </div>
        <ShadcnModal v-model="defaultModal" title="Modal Title" description="This is a modal description">
          <template #content>
            <div class="flex items-center justify-center h-32">Content</div>
          </template>
        </ShadcnModal>
      </template>
    </ShadcnCard>

    <ShadcnCard>
      <template #title>Custom Title</template>
      <template #content>
        <div class="flex items-center justify-center h-32">
          <ShadcnButton type="primary" @click="titleModal = true">Click</ShadcnButton>
        </div>
        <ShadcnModal v-model="titleModal">
          <template #title>Custom Title</template>
          <template #content>
            <div class="flex items-center justify-center h-32">Content</div>
          </template>
        </ShadcnModal>
      </template>
    </ShadcnCard>

    <ShadcnCard>
      <template #title>Custom Footer</template>
      <template #content>
        <div class="flex items-center justify-center h-32">
          <ShadcnButton type="primary" @click="footerModal = true">Click</ShadcnButton>
        </div>
        <ShadcnModal v-model="footerModal">
          <template #title>Custom Footer</template>
          <template #content>
            <div class="flex items-center justify-center h-32">Content</div>
          </template>
          <template #footer>this is a footer</template>
        </ShadcnModal>
      </template>
    </ShadcnCard>

    <ShadcnCard>
      <template #title>Custom Content</template>
      <template #content>
        <div class="flex items-center justify-center h-32">
          <ShadcnButton type="primary" @click="contentModal = true">Click</ShadcnButton>
        </div>
        <ShadcnModal v-model="contentModal">
          <template #title>Custom Content</template>
          <template #content>
            <div class="flex items-center justify-center h-32">
              <ShadcnButton>Button</ShadcnButton>
            </div>
          </template>
        </ShadcnModal>
      </template>
    </ShadcnCard>

    <ShadcnCard>
      <template #title>No Title</template>
      <template #content>
        <div class="flex items-center justify-center h-32">
          <ShadcnButton type="primary" @click="noTitleModal = true">Click</ShadcnButton>
        </div>
        <ShadcnModal v-model="noTitleModal">
          <template #content>
            <div class="flex items-center justify-center h-32">Content</div>
          </template>
        </ShadcnModal>
      </template>
    </ShadcnCard>

    <ShadcnCard>
      <template #title>Custom Width</template>
      <template #content>
        <div class="flex items-center justify-center h-32">
          <ShadcnButton type="primary" @click="widthModal = true">Click</ShadcnButton>
        </div>
        <ShadcnModal v-model="widthModal" title="Custom Width" :width="20">
          <template #content>
            <div class="flex items-center justify-center">Content</div>
          </template>
        </ShadcnModal>
      </template>
    </ShadcnCard>

    <ShadcnCard>
      <template #title>Custom Height</template>
      <template #content>
        <div class="flex items-center justify-center h-32">
          <ShadcnButton type="primary" @click="heightModal = true">Click</ShadcnButton>
        </div>
        <ShadcnModal v-model="heightModal" title="Custom Height" :height="80">
          <template #content>
            <div class="flex items-center justify-center">Content</div>
          </template>
        </ShadcnModal>
      </template>
    </ShadcnCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ModalHome',
  data()
  {
    return {
      defaultModal: false,
      titleModal: false,
      footerModal: false,
      contentModal: false,
      noTitleModal: false,
      widthModal: false,
      heightModal: false
    }
  }
})
</script>
