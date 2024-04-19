<template>
  <ResizablePanelGroup direction="horizontal" class="h-full items-stretch">
    <ResizablePanel :default-size="defaultLayout[0] as number" :collapsed-size="collapsedSize" :collapsible="true" :min-size="24" :max-size="30"
                    @collapse="isCollapsed = true" @expand="isCollapsed = false"
                    :class="cn(
                      isCollapsed && 'min-w-[50px] md:min-w-[70px] transition-all duration-300 ease-in-out'
                    )">
      <ChatSidebar :collapsed="isCollapsed" :items="items"/>
    </ResizablePanel>
    <ResizableHandle with-handle/>
    <ResizablePanel></ResizablePanel>
  </ResizablePanelGroup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { cn } from '@/lib/utils.ts'
import ChatSidebar from '@/views/pages/chat/resizable/chat/components/ChatSidebar.vue'
import { ChatSidebarModel } from '@/views/pages/chat/resizable/chat/Chat.ts'

export default defineComponent({
  name: 'ChatContainer',
  components: {
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
      default: 8
    },
    items: {
      type: Array as () => ChatSidebarModel[],
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
