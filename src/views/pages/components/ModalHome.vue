<template>
  <div class="flex w-full flex-col flex-row gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">
    <ICard>
      <template #title>Default</template>
      <template #description>Default Modal Value: <span class="font-bold">{{ defaultModal }}</span></template>
      <template #content>
        <div class="flex items-center justify-center h-32">
          <IButton type="primary" @click="defaultModal = true">Click</IButton>
        </div>
        <IModal v-model="defaultModal" title="Modal Title" description="This is a modal description">
          <template #content>
            <div class="flex items-center justify-center h-32">Content</div>
          </template>
        </IModal>
      </template>
    </ICard>

    <ICard>
      <template #title>Custom Title</template>
      <template #content>
        <div class="flex items-center justify-center h-32">
          <IButton type="primary" @click="titleModal = true">Click</IButton>
        </div>
        <IModal v-model="titleModal">
          <template #title>Custom Title</template>
          <template #content>
            <div class="flex items-center justify-center h-32">Content</div>
          </template>
        </IModal>
      </template>
    </ICard>

    <ICard>
      <template #title>Custom Footer</template>
      <template #content>
        <div class="flex items-center justify-center h-32">
          <IButton type="primary" @click="footerModal = true">Click</IButton>
        </div>
        <IModal v-model="footerModal">
          <template #title>Custom Footer</template>
          <template #content>
            <div class="flex items-center justify-center h-32">Content</div>
          </template>
          <template #footer>this is a footer</template>
        </IModal>
      </template>
    </ICard>

    <ICard>
      <template #title>Custom Content</template>
      <template #content>
        <div class="flex items-center justify-center h-32">
          <IButton type="primary" @click="contentModal = true">Click</IButton>
        </div>
        <IModal v-model="contentModal">
          <template #title>Custom Content</template>
          <template #content>
            <div class="flex items-center justify-center h-32">
              <IButton>Button</IButton>
            </div>
          </template>
        </IModal>
      </template>
    </ICard>

    <ICard>
      <template #title>No Title</template>
      <template #content>
        <div class="flex items-center justify-center h-32">
          <IButton type="primary" @click="noTitleModal = true">Click</IButton>
        </div>
        <IModal v-model="noTitleModal">
          <template #content>
            <div class="flex items-center justify-center h-32">Content</div>
          </template>
        </IModal>
      </template>
    </ICard>
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
      noTitleModal: false
    }
  }
})
</script>
