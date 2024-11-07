<template>
  <ShadcnButton @click="defaultValue = !defaultValue">Open</ShadcnButton>
  <ShadcnDrawer v-model="defaultValue" title="Title">
    <ShadcnTooltip content="Position" position="top">
      <ShadcnButton>Top</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="bottom">
      <ShadcnButton>Bottom</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="left">
      <ShadcnButton>Left</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" class="mr-20" position="right">
      <ShadcnButton>Right</ShadcnButton>
    </ShadcnTooltip>
    <template #footer>
      <ShadcnButton @click="defaultValue = !defaultValue">Close</ShadcnButton>
    </template>
  </ShadcnDrawer>
  <ShadcnTooltip :content="content" position="top">
    <ShadcnButton>Top</ShadcnButton>
  </ShadcnTooltip>
  <div class="mt-12"/>
  <ShadcnTooltip :content="content" position="left">
    <ShadcnButton>Left</ShadcnButton>
  </ShadcnTooltip>

  <div class="flex h-screen bg-green-50">
    <div class="mx-36 my-36">
      <ShadcnSpace wrap>
        <ShadcnTooltip arrow content="Position" position="top">
          <ShadcnButton>Top</ShadcnButton>
        </ShadcnTooltip>
        <ShadcnTooltip arrow :content="content" position="top">
          <ShadcnButton>Top</ShadcnButton>
        </ShadcnTooltip>
        <ShadcnTooltip arrow :content="content" position="bottom">
          <ShadcnButton>Bottom</ShadcnButton>
        </ShadcnTooltip>
        <ShadcnTooltip arrow :content="content" position="left">
          <ShadcnButton>Left</ShadcnButton>
        </ShadcnTooltip>
        <ShadcnTooltip arrow :content="content" position="right">
          <ShadcnButton>Right</ShadcnButton>
        </ShadcnTooltip>
      </ShadcnSpace>
    </div>
  </div>
  <ShadcnButton @click="defaultValue = !defaultValue">Open</ShadcnButton>

  <ShadcnDrawer v-model="defaultValue" title="Title">
    <ShadcnTooltip arrow content="Position" position="top">
      <ShadcnButton>Top</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip arrow :content="content" position="top">
      <ShadcnButton>Top</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip arrow :content="content" position="bottom">
      <ShadcnButton>Bottom</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip arrow :content="content" position="left">
      <ShadcnButton>Left</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip arrow :content="content" position="right">
      <ShadcnButton>Right</ShadcnButton>
    </ShadcnTooltip>
    <template #footer>
      <ShadcnButton @click="defaultValue = !defaultValue">Close</ShadcnButton>
    </template>
  </ShadcnDrawer>
  <div class="mt-12"></div>
  <ShadcnTooltip :content="content" position="bottom">
    <ShadcnButton>Bottom</ShadcnButton>
  </ShadcnTooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(false)
const content = ref(
    'Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple\'s press conference was held in September 2017 was named Steve Jobs Theater after him.')
</script>
