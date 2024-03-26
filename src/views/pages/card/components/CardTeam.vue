<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t('card.common.team') }}</CardTitle>
      <CardDescription>{{ $t('card.tip.team') }}</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-6">
      <div v-for="item in users" class="flex items-center justify-between space-x-4">
        <div class="flex items-center space-x-4">
          <Avatar>
            <AvatarImage :alt="item.username" :src="item.username as string"/>
            <AvatarFallback>{{ item.username?.substring(0, 4) }}</AvatarFallback>
          </Avatar>
          <div>
            <p class="text-sm font-medium leading-none">{{ item.username }}</p>
            <p class="text-sm text-muted-foreground">{{ item.email }}</p>
          </div>
        </div>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline" class="ml-auto">
              {{ item.role }}
              <ChevronDownIcon class="ml-2 h-4 w-4 text-muted-foreground"/>
            </Button>
          </PopoverTrigger>
          <PopoverContent class="p-0" align="end">
            <Command v-model="item.role">
              <CommandInput :placeholder="$t('card.tip.roleHolder')"/>
              <CommandList>
                <CommandEmpty>{{ $t('card.tip.roleNotHolder') }}</CommandEmpty>
                <CommandGroup>
                  <CommandItem :value="UserRole.Viewer" class="teamaspace-y-1 flex flex-col items-start px-4 py-2 cursor-pointer">
                    <p>{{ $t('card.common.viewer') }}</p>
                    <p class="text-sm text-muted-foreground">{{ $t('card.tip.viewer') }}</p>
                  </CommandItem>
                  <CommandItem :value="UserRole.Developer" class="teamaspace-y-1 flex flex-col items-start px-4 py-2 cursor-pointer">
                    <p>{{ $t('card.common.developer') }}</p>
                    <p class="text-sm text-muted-foreground">{{ $t('card.tip.developer') }}</p>
                  </CommandItem>
                  <CommandItem :value="UserRole.Billing" class="teamaspace-y-1 flex flex-col items-start px-4 py-2 cursor-pointer">
                    <p>{{ $t('card.common.billing') }}</p>
                    <p class="text-sm text-muted-foreground">{{ $t('card.tip.billing') }}</p>
                  </CommandItem>
                  <CommandItem :value="UserRole.Owner" class="teamaspace-y-1 flex flex-col items-start px-4 py-2 cursor-pointer">
                    <p>{{ $t('card.common.owner') }}</p>
                    <p class="text-sm text-muted-foreground">{{ $t('card.tip.owner') }}</p>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </CardContent>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import UserService from '@/services/User'
import { ChevronDownIcon } from 'lucide-vue-next'
import { UserRole } from '@/model/User.ts'

export default defineComponent({
  name: 'CardTeam',
  computed: {
    UserRole()
    {
      return UserRole
    }
  },
  components: {
    Avatar, AvatarFallback, AvatarImage,
    Button,
    Card, CardContent, CardDescription, CardHeader, CardTitle,
    Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,
    Popover, PopoverContent, PopoverTrigger,
    ChevronDownIcon
  },
  setup()
  {
    const users = UserService.getUsers()

    return {
      users
    }
  }
})
</script>
