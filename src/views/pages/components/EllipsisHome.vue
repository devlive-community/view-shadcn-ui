<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">
    <ShadcnCard title="Basic">
      <div class="p-3">
        <ShadcnEllipsis :text="text"/>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Multiple Line">
      <div class="p-3">
        <ShadcnEllipsis line="4">{{ text }}</ShadcnEllipsis>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Tooltip">
      <div class="p-3 space-y-2">
        <ShadcnEllipsis :text="text" tooltip/>

        <ShadcnEllipsis :text="text" tooltip line="2"/>
      </div>
    </ShadcnCard>
  </div>
</template>

<script setup lang="ts">
const text = 'Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple\'s press conference was held in September 2017 was named Steve Jobs Theater after him.'
</script>
