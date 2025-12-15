<template>
  <ShadcnCarousel :items="items" height="300px"/>
</template>

<script setup lang="ts">
const items = [
  { src: 'https://picsum.photos/800/300?random=1', text: 'Slide 1' },
  { src: 'https://picsum.photos/800/300?random=2', text: 'Slide 2' },
  { src: 'https://picsum.photos/800/300?random=3', text: 'Slide 3' }
]
</script>
