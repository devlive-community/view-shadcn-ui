<template>
  <div :data-collapsed="collapsed" class="relative group flex flex-col h-full gap-4 p-2 data-[collapsed=true]:p-2">
    <nav class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
      <template v-for="item in items">
        <div v-if="collapsed" :class="cn(
              buttonVariants({ variant: item.selected ? 'secondary' : 'ghost', size: 'sm' }),
              item.selected && 'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink',
             'justify-start gap-4 py-8 cursor-pointer'
        )">
          <ITooltip :content="item.user?.name" side="right">
            <IAvatar class="flex justify-center items-center" :src="item.user?.avatar" :alt="item.user?.name" :width="6" :height="6" image-class="w-10 h-10"/>
          </ITooltip>
        </div>
        <div v-else :class="cn(
              buttonVariants({ variant: item.selected ? 'secondary' : 'ghost', size: 'lg' }),
              item.selected && 'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink',
             'justify-start gap-4 py-8 cursor-pointer'
          )">
          <IAvatar class="flex justify-center items-center" :src="item.user?.avatar" :alt="item.user?.name" :width="6" :height="6" image-class="w-10 h-10"/>
          <div class="flex flex-col max-w-36">
            <span>{{ item.user?.name }}</span>
            <span v-if="item.messages && item.messages.length > 0" class="text-zinc-400 text-xs truncate">
              {{ item.messages[item.messages.length - 1]?.content }}
            </span>
          </div>
        </div>
      </template>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Chat } from '@/views/components/chat/Chat.ts'
import Button from '@/ui/button/button.vue'
import { cn } from '@/lib/utils.ts'
import { buttonVariants } from '@/components/ui/button'
import IAvatar from '@/ui/avatar/index.vue'
import ITooltip from '@/ui/tooltip/index.vue'

export default defineComponent({
  name: 'ChatSidebar',
  components: { ITooltip, IAvatar, Button },
  props: {
    collapsed: {
      type: Boolean
    },
    items: {
      type: Array as () => Chat[],
      default: () => []
    }
  },
  setup()
  {
    return {
      cn,
      buttonVariants
    }
  }
})
</script>
