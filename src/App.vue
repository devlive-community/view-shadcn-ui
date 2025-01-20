<template>
  <div class="p-32">
    <ShadcnMarquee @on-complete="handleComplete">
      这是一个基础的跑马灯效果
    </ShadcnMarquee>
  </div>
</template>

<script setup lang="ts">
const handleComplete = () => {
  console.log('动画播放完成')
}
</script>