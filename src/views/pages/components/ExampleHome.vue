<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 ">
    <ShadcnSpace>
      <ShadcnButton @click="topValue = !topValue">Top</ShadcnButton>
      <ShadcnButton @click="buttomValue = !buttomValue">Buttom</ShadcnButton>
      <ShadcnButton @click="leftValue = !leftValue">Left</ShadcnButton>
      <ShadcnButton @click="rightValue = !rightValue">Right</ShadcnButton>
    </ShadcnSpace>
    <ShadcnDrawer v-model="topValue" title="Top" position="top"/>
    <ShadcnDrawer v-model="buttomValue" title="Buttom" position="bottom"/>
    <ShadcnDrawer v-model="leftValue" title="Left" position="left"/>
    <ShadcnDrawer v-model="rightValue" title="Right" position="right"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const topValue = ref(false)
const buttomValue = ref(false)
const leftValue = ref(false)
const rightValue = ref(false)
</script>
