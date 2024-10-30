<template>
  <div class="p-8 max-w-2xl mx-auto space-y-10">
    <ShadcnTimeline split>
      <ShadcnTimelineItem title="Title 1">
        <p v-for="i in 3">Content {{ i }}</p>
      </ShadcnTimelineItem>
      <ShadcnTimelineItem title="Title 2">
        <p v-for="i in 3">Content {{ i }}</p>
      </ShadcnTimelineItem>
      <ShadcnTimelineItem title="Title 3">
        <p v-for="i in 3">Content {{ i }}</p>
      </ShadcnTimelineItem>
    </ShadcnTimeline>
  </div>
</template>

<script setup lang="ts">
</script>
