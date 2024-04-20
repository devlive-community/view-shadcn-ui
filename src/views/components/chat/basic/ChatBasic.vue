<template>
  <div class="flex flex-col justify-between w-full h-full">
    <ChatTopbar :user="items[0]?.user as any" :users="items.map(item => item.user) as any"/>
    <ChatContent :messages="items[0]?.messages"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Chat } from '@/views/components/chat/Chat.ts'
import ChatContent from '@/views/components/chat/basic/components/ChatContent.vue'
import ChatTopbar from '@/views/components/chat/basic/components/ChatTopbar.vue'

export default defineComponent({
  name: 'ChatBasic',
  components: {
    ChatTopbar,
    ChatContent
  },
  props: {
    items: {
      type: Array as () => Chat[],
      default: () => []
    }
  }
})
</script>
