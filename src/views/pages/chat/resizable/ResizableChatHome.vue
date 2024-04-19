<template>
  <div class="flex h-[calc(90dvh)] flex-col items-center justify-center p-4 md:px-5 py-5 gap-4">
    <div class="z-10 border rounded-lg w-full h-full text-sm lg:flex">
      <ChatContainer :items="items"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChatContainer from '@/views/pages/chat/resizable/chat/ChatContainer.vue'
import { ChatSidebarModel } from '@/views/pages/chat/resizable/chat/Chat.ts'

export default defineComponent({
  name: 'ResizableChatHome',
  components: { ChatContainer },
  data()
  {
    return {
      items: [
        {
          name: 'devlive',
          avatar: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png',
          messages: [],
          selected: true
        },
        {
          name: 'datacap',
          avatar: 'https://github.com/devlive-community/datacap/raw/dev/core/datacap-ui/public/static/images/logo.png',
          messages: []
        },
        {
          name: 'qianmoQ',
          avatar: 'https://avatars.githubusercontent.com/u/20521442?s=64&v=4',
          messages: []
        }
      ] as ChatSidebarModel[]
    }
  }
})
</script>
