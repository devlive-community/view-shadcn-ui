<template>
  <div class="p-32 space-y-7 space-x-4">
    <div class="p-2 flex flex-col space-y-4 min-h-32 space-x-6 overflow-x-auto">
      <ShadcnCarousel :items="items"
                      :interval="5000"
                      @on-change="handleChange">
      </ShadcnCarousel>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  { text: 'Slide 1', src: 'https://picsum.photos/800/400' },
  { text: 'Slide 2', src: 'https://picsum.photos/800/400' },
  { text: 'Slide 3', src: 'https://picsum.photos/800/400' }
]

const handleChange = (index: number) => {
  console.log('Current slide:', index)
}
</script>