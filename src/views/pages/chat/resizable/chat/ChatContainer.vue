<template>
  <ResizablePanelGroup direction="horizontal" class="h-full items-stretch">
    <ResizablePanel :default-size="defaultLayout[0] as number" :collapsed-size="collapsedSize" :collapsible="true" :min-size="16" :max-size="22"
                    @collapse="isCollapsed = true" @expand="isCollapsed = false"
                    :class="cn(
                      isCollapsed && 'min-w-[50px] md:min-w-[70px] transition-all duration-300 ease-in-out'
                    )">
      <ChatSidebar :collapsed="isCollapsed" :items="items"/>
    </ResizablePanel>
    <ResizableHandle with-handle/>
    <ResizablePanel>
      <ChatMessage :user="items[0].user" :messages="items[0].messages"/>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { cn } from '@/lib/utils.ts'
import ChatSidebar from '@/views/pages/chat/resizable/chat/components/ChatSidebar.vue'
import { Chat } from '@/views/pages/chat/resizable/chat/Chat.ts'
import ChatMessage from '@/views/pages/chat/resizable/chat/components/ChatMessage.vue'

export default defineComponent({
  name: 'ChatContainer',
  components: {
    ChatMessage,
    ChatSidebar,
    ResizableHandle, ResizablePanel, ResizablePanelGroup
  },
  props: {
    defaultLayout: {
      type: Array,
      default: () => [320, 480]
    },
    collapsedSize: {
      type: Number,
      default: 5
    },
    items: {
      type: Array as () => Chat[],
      default: () => []
    }
  },
  setup()
  {
    return {
      cn
    }
  },
  data()
  {
    return {
      isCollapsed: false
    }
  }
})
</script>
