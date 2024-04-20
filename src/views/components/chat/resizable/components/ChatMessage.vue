<template>
  <div class="flex flex-col justify-between w-full h-full">
    <ChatTopbar :user="user"/>
    <ChatContent :messages="messages"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Message, User } from '@/views/components/chat/Chat.ts'
import ChatTopbar from '@/views/components/chat/resizable/components/ChatTopbar.vue'
import ChatContent from '@/views/components/chat/resizable/components/ChatContent.vue'

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
