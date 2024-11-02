<template>
  <div class="p-20 space-y-2">
    Default Value {{ language }}
    <ShadcnSelect v-model="language" style="width: 150px;">
      <template #options>
        <ShadcnSelectGroup label="Asia">
          <ShadcnSelectOption value="language_zh_cn" label="Chinese" :selected="language === 'language_zh_cn'"/>
        </ShadcnSelectGroup>
        <ShadcnSelectGroup label="Europe">
          <ShadcnSelectOption value="language_en" label="English" :selected="language === 'language_en'"/>
        </ShadcnSelectGroup>
      </template>
    </ShadcnSelect>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const language = ref('language_zh_cn')
</script>
