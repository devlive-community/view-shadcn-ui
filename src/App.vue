<template>
  <ShadcnSpace wrap>
    <ShadcnRow gutter="10">
      <ShadcnCol v-for="i in 40" :key="i" class="bg-blue-200 h-12">
        <div class="flex items-center justify-center h-full">
          {{ i }}
        </div>
      </ShadcnCol>
    </ShadcnRow>

    <ShadcnRow>
      <ShadcnCol class="bg-blue-200 h-12"></ShadcnCol>
      <ShadcnCol class="bg-blue-300 h-12"></ShadcnCol>
      <ShadcnCol class="bg-blue-400 h-12"></ShadcnCol>
      <ShadcnCol class="bg-blue-500 h-12"></ShadcnCol>
    </ShadcnRow>

    <ShadcnRow>
      <ShadcnCol class="bg-blue-200 h-12" span="2"></ShadcnCol>
      <ShadcnCol class="bg-blue-300 h-12" span="1"></ShadcnCol>
      <ShadcnCol class="bg-blue-400 h-12" span="3"></ShadcnCol>
      <ShadcnCol class="bg-blue-500 h-12" span="1"></ShadcnCol>
    </ShadcnRow>

    <ShadcnRow>
      <ShadcnCol class="bg-blue-200 h-12" order="2" span="3">1 | order 2</ShadcnCol>
      <ShadcnCol class="bg-blue-300 h-12" order="1" span="3">2 | order 1</ShadcnCol>
      <ShadcnCol class="bg-blue-400 h-12" order="3" span="3">3 | order 3</ShadcnCol>
      <ShadcnCol class="bg-blue-500 h-12" order="4" span="3">4 | order 4</ShadcnCol>
    </ShadcnRow>

    <ShadcnText type="h2">Align</ShadcnText>
    <ShadcnRow align="top">
      <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
      <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
      <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
      <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow align="middle">
      <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
      <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
      <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
      <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow align="bottom">
      <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
      <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
      <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
      <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>

    <ShadcnText type="h2">Justify</ShadcnText>
    <ShadcnRow justify="start">
      <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
      <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
      <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
      <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow justify="center">
      <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
      <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
      <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
      <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow justify="end">
      <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
      <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
      <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
      <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow justify="between">
      <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
      <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
      <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
      <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
  </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
