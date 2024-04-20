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
            <CommandItem v-for="user in users" :key="user.email" :value="user" class="flex items-center px-2 cursor-pointer" @select="handlerSelect(user)">
              <IAvatar :src="user?.avatar" :alt="user?.name"/>
              <div class="ml-2">
                <p class="text-sm font-medium leading-none">{{ user.name }}</p>
                <p class="text-sm text-muted-foreground">{{ user.email }}</p>
              </div>
              <CheckIcon v-if="selectedUsers.includes(user)" class="ml-auto flex h-5 w-5 text-primary"/>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <DialogFooter class="flex items-center border-t p-4 sm:justify-between">
        <div v-if="selectedUsers.length > 0" class="flex -space-x-2 overflow-hidden">
          <IAvatar v-for="item in selectedUsers" :src="item?.avatar" :alt="item?.name" class="border-2 border-background"/>
        </div>
        <p v-else class="text-sm text-muted-foreground">{{ $t('common.tip.selectItem') }}</p>
        <IButton :disabled="selectedUsers.length < 2" @click="handlerCancel">
          {{ $t('common.common.button') }}
        </IButton>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { CheckIcon } from 'lucide-vue-next'
import { User } from '@/views/components/chat/Chat.ts'
import IButton from '@/ui/button/button.vue'
import IAvatar from '@/ui/avatar/index.vue'

export default defineComponent({
  name: 'ChatUser',
  components: {
    IAvatar,
    IButton,
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
    Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,
    CheckIcon
  },
  computed: {
    visible: {
      get(): boolean
      {
        return this.isVisible
      },
      set(value: boolean)
      {
        this.$emit('close', value)
      }
    }
  },
  props: {
    isVisible: {
      type: Boolean
    },
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
      selectedUsers: [] as User[]
    }
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
      this.visible = false
    }
  }
})
</script>
