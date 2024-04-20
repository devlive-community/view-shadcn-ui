<template>
  <div class="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
    <div ref="messagesContainer" class="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
      <template v-for="item in messages">
        <div v-motion layout
             :initial="{ opacity: 1, scale: 1, y: 0, x: 0 }"
             :animate="{ opacity: 1, scale: 1, y: 0, x: 0 }"
             :exit="{ opacity: 0, scale: 1, y: 1, x: 0 }"
             :transition="{
                opacity: { duration: 0.1 },
                layout: { type: 'spring', bounce: 0.3, duration: messages.indexOf(item) * 0.05 + 0.2 }
              }"
             :class="cn('flex flex-col gap-2 p-4 whitespace-pre-wrap',
                item.type === 'sender' ? 'items-end' : 'items-start'
              )">
          <div class="flex gap-3 items-center">
            <IAvatar v-if="item.type === 'receiver'" :src="item.user?.avatar" :alt="item.user?.name" :width="6" :height="6" image-class="w-10 h-10"/>
            <span class="bg-accent p-3 rounded-md max-w-lg">{{ item.content }}</span>
            <IAvatar v-if="item.type === 'sender'" :src="item.user?.avatar" :alt="item.user?.name" :width="6" :height="6" image-class="w-10 h-10"/>
          </div>
        </div>
      </template>
    </div>
    <ChatBottombar @send="messages.push($event)"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue'
import { Message } from '@/views/components/chat/Chat.ts'
import { cn } from '@/lib/utils.ts'
import IAvatar from '@/ui/avatar/index.vue'
import ChatBottombar from '@/views/components/chat/basic/components/ChatBottombar.vue'

export default defineComponent({
  name: 'ChatContent',
  components: { ChatBottombar, IAvatar },
  props: {
    messages: {
      type: Array as () => Array<Message>,
      default: () => []
    }
  },
  setup()
  {
    return {
      cn
    }
  },
  created()
  {
    this.handlerInitialize()
    this.watchChange()
  },
  methods: {
    handlerInitialize()
    {
      onMounted(() => this.handlerGoBottom())
    },
    handlerGoBottom()
    {
      const messagesContainer = this.$refs.messagesContainer as any
      setTimeout(() => {
        messagesContainer.scrollTo({ top: messagesContainer.scrollHeight, behavior: 'smooth' })
      }, 0)
    },
    watchChange()
    {
      watch(this.messages, () => this.handlerGoBottom())
    }
  }
})
</script>
