<template>
  <div class="flex flex-1 flex-col">
    <div class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader class="flex flex-row items-center justify-between">
          <div class="flex items-center space-x-4">
            <Avatar>
              <AvatarImage alt="SUA" src="https://www.shadcn-vue.com/avatars/01.png"/>
              <AvatarFallback>SUA</AvatarFallback>
            </Avatar>
            <div>
              <p class="text-sm font-medium leading-none">Shadcn UI Admin</p>
              <p class="text-sm text-muted-foreground">community@devlive.org</p>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip :delay-duration="200">
              <TooltipTrigger as-child>
                <Button variant="outline" class="rounded-full p-2.5 flex items-center justify-center" @click="visible = true">
                  <PlusIcon class="w-4 h-4"/>
                </Button>
              </TooltipTrigger>
              <TooltipContent :side-offset="10">{{ $t('common.common.newMessage') }}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardHeader>
        <Separator/>
        <CardContent class="mt-3">
          <div class="space-y-4">
            <div v-for="(message, index) in messages" :key="index"
                 :class="cn( 'flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm', message.role === 'user' ? 'ml-auto bg-primary text-primary-foreground' : 'bg-muted')">
              {{ `${message.content} ${index + 1}` }}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <form class="flex w-full items-center space-x-2" @submit.prevent="handlerSubmit">
            <Input v-model="inputValue as string" :placeholder="$t('common.tip.inputMessage')" class="flex-1"/>
            <Button class="p-2.5 flex items-center justify-center" :disabled="!inputValue">
              <Send class="w-4 h-4"/>
              <span class="sr-only">{{ $t('common.common.send') }}</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
    <ChatUser :visible="visible" @close="visible = $event"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { PlusIcon, Send } from 'lucide-vue-next'
import { createMessages } from '@/views/pages/chat/ChatUtils'
import { useI18n } from 'vue-i18n'
import { Separator } from '@/components/ui/separator'
import ChatUser from '@/views/pages/chat/components/ChatUser.vue'

export default defineComponent({
  name: 'ChatHome',
  components: {
    ChatUser,
    Separator,
    Card, CardContent, CardFooter, CardHeader,
    Avatar, AvatarFallback, AvatarImage,
    Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
    Button,
    Input,
    PlusIcon, Send
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
      inputValue: null as string | null,
      messages: [] as any[],
      visible: false
    }
  },
  created()
  {
    this.messages = [...createMessages(useI18n())]
  },
  methods: {
    handlerSubmit()
    {
      const sendMessage = {
        role: 'user',
        content: this.inputValue as string
      }
      this.messages.push(sendMessage)
      this.inputValue = null

      const replyMessage = {
        role: 'assistant',
        content: this.$t('common.common.replyMessage')
      }
      this.messages.push(replyMessage)
    }
  }
})
</script>
