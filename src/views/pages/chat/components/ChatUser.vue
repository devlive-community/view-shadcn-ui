<template>
  <Dialog v-model:open="visible" @update:open="!visible">
    <DialogContent class="gap-0 p-0 outline-none">
      <DialogHeader class="px-4 pb-4 pt-5">
        <DialogTitle>{{ $t('common.common.newMessage') }}</DialogTitle>
        <DialogDescription>{{ $t('common.tip.newMessage') }}</DialogDescription>
      </DialogHeader>
      <Command class="overflow-hidden rounded-t-none border-t"
               :filter-function="(list: any[], search: string) => list.filter(l => l.username?.toLowerCase().includes(search.toLowerCase()))">
        <CommandInput :placeholder="$t('common.common.search')"/>
        <CommandList>
          <CommandEmpty>{{ $t('common.common.notFoundItem') }}</CommandEmpty>
          <CommandGroup class="p-2">
            <CommandItem v-for="user in users" :key="user.email" :value="user" class="flex items-center px-2" @select="handlerSelect(user)">
              <Avatar>
                <AvatarImage :alt="user.username" src="https://www.shadcn-vue.com/avatars/01.png"/>
                <AvatarFallback>{{ user?.username?.substring(0, 1) }}</AvatarFallback>
              </Avatar>
              <div class="ml-2">
                <p class="text-sm font-medium leading-none">{{ user.username }}</p>
                <p class="text-sm text-muted-foreground">{{ user.email }}</p>
              </div>
              <CheckIcon v-if="selectedUsers.includes(user)" class="ml-auto flex h-5 w-5 text-primary"/>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <DialogFooter class="flex items-center border-t p-4 sm:justify-between">
        <div v-if="selectedUsers.length > 0" class="flex -space-x-2 overflow-hidden">
          <Avatar v-for="user in selectedUsers" :key="user.email" class="border-2 border-background">
            <AvatarImage :alt="user.username" src="https://www.shadcn-vue.com/avatars/01.png"/>
            <AvatarFallback>{{ user?.username?.substring(0, 1) }}</AvatarFallback>
          </Avatar>
        </div>
        <p v-else class="text-sm text-muted-foreground">{{ $t('common.tip.selectItem') }}</p>
        <Button :disabled="selectedUsers.length < 2" @click="handlerCancel">
          {{ $t('common.common.button') }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { UserModel } from '@/model/User'
import { createUsers } from '@/views/pages/chat/ChatUtils'
import { CheckIcon } from 'lucide-vue-next'

export default defineComponent({
  name: 'ChatUser',
  components: {
    Button,
    Avatar, AvatarFallback, AvatarImage,
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
    Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,
    CheckIcon
  },
  props: {
    visible: {
      type: Boolean
    }
  },
  data()
  {
    return {
      users: [] as UserModel[],
      selectedUsers: [] as UserModel[]
    }
  },
  created()
  {
    this.users = [...createUsers()]
  },
  methods: {
    handlerSelect(user: any)
    {
      const index = this.selectedUsers.findIndex(u => u === user)
      if (index !== -1) {
        this.selectedUsers.splice(index, 1)
      }
      else {
        this.selectedUsers.push(user)
      }
    },
    handlerCancel()
    {
      this.$emit('close', false)
    }
  }
})
</script>
