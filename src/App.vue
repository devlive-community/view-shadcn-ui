<template>
  <div class="p-8 max-w-2xl mx-auto space-y-10">
    {{ expandedItems }}

    <ShadcnCollapse v-model="expandedItems" @on-change="console.log($event)">
      <ShadcnCollapseItem title="Section 1" name="1">
        Content for section 1
      </ShadcnCollapseItem>
      <ShadcnCollapseItem title="Section 2" name="2">
        Content for section 2
      </ShadcnCollapseItem>
    </ShadcnCollapse>

    <ShadcnCollapse v-model="expandedItems" accordion>
      <ShadcnCollapseItem title="Section 1" name="1">
        Content for section 1
      </ShadcnCollapseItem>
      <ShadcnCollapseItem title="Section 2" name="2">
        Content for section 2
      </ShadcnCollapseItem>
    </ShadcnCollapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expandedItems = ref<string[]>([])
</script>
