<template>
  <div class="w-full h-20 flex p-4 justify-between items-center border-b">
    <div class="flex items-center space-x-4">
      <IAvatar :src="user?.avatar" :alt="user?.name" class="w-10 h-10"/>
      <div>
        <p class="text-sm font-medium leading-none">{{ user?.name }}</p>
        <p class="text-sm text-muted-foreground">{{ user?.email }}</p>
      </div>
    </div>
    <div>
      <ITooltip :content="$t('common.common.newMessage')" :duration="0">
        <IButton circle @click="visible = true">
          <PlusIcon class="w-4 h-4"/>
        </IButton>
      </ITooltip>
    </div>
  </div>
  <ChatUser :is-visible="visible" :user="user" :users="users" @close="visible = $event"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IAvatar from '@/ui/avatar/index.vue'
import ITooltip from '@/ui/tooltip/index.vue'
import IButton from '@/ui/button/button.vue'
import { User } from '@/views/components/chat/Chat.ts'
import ChatUser from '@/views/components/chat/basic/components/ChatUser.vue'
import { PlusIcon } from 'lucide-vue-next'

export default defineComponent({
  name: 'ChatTopbar',
  components: {
    IAvatar,
    ITooltip,
    IButton,
    PlusIcon,
    ChatUser
  },
  props: {
    user: {
      type: Object as () => User
    },
    users: {
      type: Array as () => User[],
      default: []
    }
  },
  data()
  {
    return {
      visible: false
    }
  }
})
</script>
