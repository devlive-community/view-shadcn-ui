<template>
  <div class="p-2 flex justify-between w-full items-center gap-2">
    <IButton circle class="h-9 w-9 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white">
      <File :size="18"/>
    </IButton>
    <IButton v-if="!message" circle class="h-9 w-9 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white">
      <Paperclip :size="18"/>
    </IButton>
    <div v-motion layout class="w-full relative"
         :initial="{ opacity: 0, scale: 1 }"
         :animate="{ opacity: 1, scale: 1 }"
         :exit="{ opacity: 0, scale: 1 }"
         :enter="{ opacity: 1, y: 0, scale: 1 }"
         :transition="{
                opacity: { duration: 0.05 },
                layout: { type: 'spring', bounce: 0.15 }
         }">
      <Textarea v-model="message as string" placeholder="Type a ..." class="w-full border rounded-full flex items-center h-9 min-h-9 resize-none overflow-hidden bg-background"/>
    </div>
    <IButton v-if="message" circle class="h-9 w-9 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white" @click="handlerSend(undefined)">
      <Send :size="18"/>
    </IButton>
    <IButton v-else circle class="h-9 w-9 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white" @click="handlerSend('👍')">
      <ThumbsUp :size="18"/>
    </IButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IButton from '@/ui/button/button.vue'
import { File, Paperclip, Send, ThumbsUp } from 'lucide-vue-next'
import { Textarea } from '@/components/ui/textarea'
import { Message } from '@/views/components/chat/Chat.ts'

export default defineComponent({
  name: 'ChatBottombar',
  components: {
    Textarea,
    File, Send, ThumbsUp, Paperclip,
    IButton
  },
  data()
  {
    return {
      message: null as string | null
    }
  },
  methods: {
    handlerSend(value?: string)
    {
      let content = this.message as string
      if (value) {
        content = value
      }
      const message: Message = {
        content: content,
        user: {
          name: 'devlive',
          avatar: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png'
        },
        type: 'sender'
      }
      this.$emit('send', message)
      this.message = null
    }
  }
})
</script>
