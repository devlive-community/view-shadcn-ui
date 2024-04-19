<template>
  <div class="flex flex-col justify-between w-full h-full">
    <ChatTopbar :user="user"/>
    <ChatContent :messages="messages"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Message, User } from '@/views/pages/chat/resizable/chat/Chat.ts'
import ChatTopbar from '@/views/pages/chat/resizable/chat/components/ChatTopbar.vue'
import ChatContent from '@/views/pages/chat/resizable/chat/components/ChatContent.vue'

export default defineComponent({
  name: 'ChatMessage',
  components: { ChatContent, ChatTopbar },
  props: {
    user: {
      type: Object as () => User
    },
    messages: {
      type: Array as () => Array<Message>,
      default: () => []
    }
  }
})
</script>
