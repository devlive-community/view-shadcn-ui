<template>
  <ShadcnCard>
    <template #content>
      <div class="p-2 border-b">
        <div class="font-bold">{{ title }}</div>
        <div class="text-sm text-muted-foreground">{{ description }}</div>
      </div>

      <div class="px-2" v-if="warning">
        <ShadcnAlert class="mt-2"
                     :title="warning"
                     type="warning"
                     show-icon
                     closable/>
      </div>

      <div class="p-2 space-x-2 space-y-2">
        <slot/>
      </div>
    </template>

    <template #footer>
      <div v-if="onlineLink" class="flex items-center justify-center p-2 border-t w-full">
        <ShadcnButton type="primary" @click="handleGoToOnline">{{ goToOnline }}</ShadcnButton>
      </div>
    </template>
  </ShadcnCard>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  title: String
  description?: String
  warning?: String
  onlineLink?: String
  goToOnline?: String
}>(), {
  goToOnline: 'Go to online'
})

const handleGoToOnline = () => {
  window.open(props.onlineLink)
}
</script>
