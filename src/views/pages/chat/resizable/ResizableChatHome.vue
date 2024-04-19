<template>
  <div class="flex h-[calc(90dvh)] flex-col items-center justify-center p-4 md:px-5 py-5 gap-4">
    <div class="z-10 border rounded-lg w-full h-full text-sm lg:flex">
      <ChatContainer/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChatContainer from '@/views/pages/chat/resizable/chat/ChatContainer.vue'

export default defineComponent({
  name: 'ResizableChatHome',
  components: { ChatContainer }
})
</script>
