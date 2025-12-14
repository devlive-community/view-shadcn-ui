<template>
  <ShadcnCard :dark="darkMode">
    <template #content>
      <div class="p-2 border-b">
        <div class="font-bold">{{ title }}</div>
        <div :class="['text-sm text-muted-foreground', darkMode ? 'text-muted-foreground' : 'text-gray-500']">{{ description }}</div>
      </div>

      <div class="px-2" v-if="warning">
        <ShadcnAlert class="mt-2"
                     :title="warning as string"
                     :dark="darkMode"
                     type="warning"
                     show-icon
                     closable/>
      </div>

      <div class="p-2 flex flex-col space-y-4 min-h-32 overflow-x-auto">
        <slot/>
      </div>
    </template>

    <template #footer>
      <a v-if="codeKey"
         class="flex items-center justify-center p-2 border-t w-full"
         target="_blank"
         :href="`https://playground.view-shadcn-ui.devlive.org/?codeKey=${codeKey}`">
        <ShadcnButton type="primary" :dark="darkMode">在演练场中打开</ShadcnButton>
      </a>
    </template>
  </ShadcnCard>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

withDefaults(defineProps<{
  title: String
  description?: String
  warning?: String
  codeKey?: String
}>(), {})

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>
