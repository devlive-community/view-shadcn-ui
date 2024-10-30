<template>
  <div class="p-8 max-w-2xl mx-auto">
    <ShadcnTimeline>
      <ShadcnTimelineItem>
        This is a first step
      </ShadcnTimelineItem>

      <ShadcnTimelineItem>
        <template #dot>
          <ShadcnIcon icon="CheckCircle" :size="16"/>
        </template>
        <div class="flex items-center mb-1">
          <h3 class="text-lg font-semibold">Step 2</h3>
          <span class="ml-2 text-sm text-gray-500">10:00 AM</span>
        </div>
        <p v-for="i in 3">Step in progress {{ i }}</p>
      </ShadcnTimelineItem>

      <ShadcnTimelineItem>
        <div class="flex items-center mb-1">
          <h3 class="text-lg font-semibold">Step 3</h3>
          <span class="ml-2 text-sm text-gray-500">10:00 AM</span>
        </div>
        <p v-for="i in 3">Step in progress {{ i }}</p>
      </ShadcnTimelineItem>
    </ShadcnTimeline>
  </div>
</template>

<script setup lang="ts">
</script>
