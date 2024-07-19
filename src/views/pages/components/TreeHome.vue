<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-2">
    <ICard body-class="pt-3">
      <template #title>Default</template>
      <div class="space-x-2 space-y-2">
        <div class="w-full space-y-2">
          <Label class="ml-2">Current Select Key: </Label>
          <div class="ml-4 text-xs text-gray-500">{{ selectedKey }}</div>
        </div>
        <Separator/>
        <DefaultTree :items="items" :selectedKey="selectedKey" @select-item="selectItem"/>
      </div>
    </ICard>
    <ICard body-class="pt-3">
      <template #title>With Context Menu</template>
      <div class="space-x-2 space-y-2">
        <div class="w-full space-y-2">
          <Label class="ml-2">Current Select Key: </Label>
          <div class="ml-4 text-xs text-gray-500">{{ selectedKey }}</div>
        </div>
        <Separator/>
        <DefaultTree :items="items" :selectedKey="selectedKey" @select-item="selectItem">
          <template #node="{ node }">
            <ContextMenu @update:open="selectedKey = node.key">
              <ContextMenuTrigger class="text-xs text-gray-500">{{ node.title }}</ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>Title: {{ node.title }}</ContextMenuItem>
                <ContextMenuItem>Key: {{ node.key }}</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </template>
        </DefaultTree>
      </div>
    </ICard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ICard from '@/ui/card/card.vue'
import DefaultTree from '@/views/components/tree/default/DefaultTree.vue'
import TreeNode from '@/views/components/tree/default/TreeNode.vue'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from '@/components/ui/context-menu'
import { Tree } from '@/views/components/tree/Tree.ts'

export default defineComponent({
  name: 'TreeHome',
  components: {
    Separator, Label, TreeNode, DefaultTree, ICard, ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger
  },
  data()
  {
    return {
      selectedKey: { key: 'Shadcn-UI-Components-Badge' } as Tree,
      items: [
        {
          title: 'Shadcn UI',
          key: 'Shadcn-UI',
          level: 0,
          children: [
            {
              title: 'Components',
              key: 'Shadcn-UI-Components',
              children: [
                {
                  title: 'Accordion',
                  key: 'Shadcn-UI-Components-Accordion'
                },
                {
                  title: 'Alert',
                  key: 'Shadcn-UI-Components-Alert'
                },
                {
                  title: 'Avatar',
                  key: 'Shadcn-UI-Components-Avatar'
                },
                {
                  title: 'Badge',
                  key: 'Shadcn-UI-Components-Badge'
                }
              ]
            }
          ]
        },
        {
          title: 'Tailwind CSS',
          key: 'Tailwind-CSS',
          level: 0
        },
        {
          title: 'Vue 3',
          key: 'Vue-3',
          level: 0
        }
      ] as Tree[]
    }
  },
  methods: {
    selectItem(key: Tree)
    {
      if (this.selectedKey !== key) {
        this.selectedKey = key
      }
    }
  }
})
</script>
