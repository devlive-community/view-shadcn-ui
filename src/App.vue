<template>
  <div class="p-32">
    <ShadcnTree v-model="value" :data="data">
      <template #label="{ node }">
        <div class="w-full flex items-center justify-center" @contextmenu.prevent="openMenu($event, node)">
          {{ node.label }}
        </div>
      </template>
    </ShadcnTree>
    <ShadcnContextMenu v-model="showMenu" :position="menuPosition">
      <ShadcnContextMenuItem @click="onItemClick('edit')">Edit</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('delete')">Delete</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('share')">Share</ShadcnContextMenuItem>
      <ShadcnContextMenuSub label="More Actions">
        <ShadcnContextMenuItem @click="onItemClick('move')">Move</ShadcnContextMenuItem>
        <ShadcnContextMenuItem @click="onItemClick('copy')">Copy</ShadcnContextMenuItem>
        <ShadcnContextMenuItem @click="onItemClick('print')">Print</ShadcnContextMenuItem>
      </ShadcnContextMenuSub>
      <ShadcnContextMenuSub label="Advanced">
        <ShadcnContextMenuItem @click="onItemClick('duplicate')">Duplicate</ShadcnContextMenuItem>
        <ShadcnContextMenuItem @click="onItemClick('duplicate-with-images')">
          Duplicate with images
        </ShadcnContextMenuItem>
      </ShadcnContextMenuSub>
    </ShadcnContextMenu>

    <ShadcnContextMenu v-model="showMenu1">
      <template #trigger>
        <div class="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
          Right click in this area to show menu
        </div>
      </template>
      <ShadcnContextMenuItem @click="onItemClick('edit')">Edit</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('delete')">Delete</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('copy')">Copy</ShadcnContextMenuItem>
      <ShadcnContextMenuSub label="More actions">
        <ShadcnContextMenuItem @click="onItemClick('move')">Move</ShadcnContextMenuItem>
        <ShadcnContextMenuItem @click="onItemClick('copy')">Copy</ShadcnContextMenuItem>
        <ShadcnContextMenuItem @click="onItemClick('print')">Print</ShadcnContextMenuItem>
        <ShadcnContextMenuSub>
          <template #title>
            <ShadcnIcon icon="Save" class="mr-2"/>
            More options
          </template>
          <ShadcnContextMenuItem @click="onItemClick('duplicate')">Duplicate</ShadcnContextMenuItem>
          <ShadcnContextMenuItem @click="onItemClick('duplicate-with-images-and-text')">Duplicate with images and text</ShadcnContextMenuItem>
        </ShadcnContextMenuSub>
      </ShadcnContextMenuSub>
      <ShadcnContextMenuItem @click="onItemClick('print')">Print</ShadcnContextMenuItem>
    </ShadcnContextMenu>
  </div>
</template>

<script setup>
import { ref } from "vue"

const value = ref([])
const data = [
  {
    value: 1,
    label: 'Parent Node 1',
    children: [
      {value: 2, label: 'Child Node 1.1'},
      {
        value: 3,
        label: 'Child Node 1.2',
        children: [
          {value: 4, label: 'Child Node 1.2.1'}
        ]
      }
    ]
  },
  {
    value: 5,
    label: 'Parent Node 2',
    children: [
      {value: 6, label: 'Child Node 2.1'}
    ]
  }
]

const showMenu = ref(false)
const showMenu1 = ref(false)
const menuPosition = ref({x: 0, y: 0})
const activeNode = ref(null)

const openMenu = (event, node) => {
  menuPosition.value = {
    x: event.clientX,
    y: event.clientY
  }
  activeNode.value = node
  showMenu.value = true
}

const onItemClick = (action) => {
  console.log(`Action: ${action}`, activeNode.value)
  showMenu.value = false
}
</script>
