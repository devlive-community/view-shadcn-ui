<template>
  <ShadcnContextMenu v-model="showMenu">
    <template #trigger>
      <div class="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
        Right click in this area to show menu
      </div>
    </template>
    <ShadcnContextMenuItem disabled @on-click="onItemClick('edit')">Edit</ShadcnContextMenuItem>
    <ShadcnContextMenuItem @on-click="onItemClick('copy')">Copy</ShadcnContextMenuItem>
    <ShadcnContextMenuSub label="More actions">
      <ShadcnContextMenuItem @on-click="onItemClick('move')">Move</ShadcnContextMenuItem>
    </ShadcnContextMenuSub>
    <ShadcnContextMenuSub disabled label="Disabled">
      <ShadcnContextMenuItem @on-click="onItemClick('duplicate')">Duplicate</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @on-click="onItemClick('duplicate-with-images-and-text')">Duplicate with images and text</ShadcnContextMenuItem>
    </ShadcnContextMenuSub>
    <ShadcnContextMenuItem @on-click="onItemClick('print')">Print</ShadcnContextMenuItem>
  </ShadcnContextMenu>
</template>

<script setup>
import { ref } from 'vue'

const showMenu = ref(false)

const onItemClick = (action) => console.log(`Clicked: ${action}`)
</script>
