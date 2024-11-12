<template>
  <div class="min-h-screen p-4">
    <ShadcnContextMenu v-model="showMenu">
      <template #trigger>
        <div class="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          Right click in this area to show menu
        </div>
      </template>

      <ShadcnContextMenuItem @click="onItemClick('edit')">Edit</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('delete')">Delete</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('share')">Share</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('move')">Move</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('copy')">Copy</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('print')">Print</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('duplicate')">Duplicate</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('duplicate-with-images-and-text')">Duplicate with images and text</ShadcnContextMenuItem>
    </ShadcnContextMenu>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showMenu = ref(false)

const onItemClick = (action) => console.log(`Clicked: ${action}`)
</script>
