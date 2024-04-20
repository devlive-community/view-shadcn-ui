<template>
  <div class="w-full h-20 flex p-4 justify-between items-center border-b">
    <div class="flex items-center gap-2">
      <div class="flex justify-center items-center space-x-2">
        <IAvatar :src="user?.avatar" :alt="user?.name" :width="6" :height="6" image-class="w-10 h-10"/>
        <div class="flex flex-col">
          <span class="font-medium">{{ user?.name }}</span>
          <span class="text-xs">Active 2 mins ago</span>
        </div>
      </div>
    </div>
    <div class="space-x-2">
      <IButton circle class="h-9 w-9 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white">
        <Phone :size="18"/>
      </IButton>
      <IButton circle class="h-9 w-9 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white">
        <Video :size="18"/>
      </IButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '@/views/components/chat/Chat.ts'
import IAvatar from '@/ui/avatar/index.vue'
import IButton from '@/ui/button/button.vue'
import { Phone, Video } from 'lucide-vue-next'

export default defineComponent({
  name: 'ChatTopbar',
  components: {
    IButton, IAvatar,
    Phone, Video
  },
  props: {
    user: {
      type: Object as () => User
    }
  }
})
</script>
