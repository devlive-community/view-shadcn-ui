<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="icon">
        <BellRing :size="20"/>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <Card :class="cn('w-[380px] border-0 shadow-transparent', $attrs.class ?? '')">
        <CardHeader>
          <CardTitle>{{ $t('user.common.notification') }}</CardTitle>
          <CardDescription>{{ $t('user.tip.unreadNotification').replace('REPLACE_COUNT', notifications.length.toString()) }}</CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4">
          <div class="flex items-center space-x-4 rounded-md border p-4">
            <BellIcon/>
            <div class="flex-1 space-y-1">
              <p class="text-sm font-medium leading-none">{{ $t('user.common.pushNotification') }}</p>
              <p class="text-sm text-muted-foreground">{{ $t('user.tip.pushNotification') }}</p>
            </div>
            <Switch/>
          </div>
          <div>
            <div v-for="(notification, index) in notifications" :key="index" class="mb-4 grid grid-cols-[25px_minmax(0,1fr)] items-start last:mb-0 last:pb-0">
              <span :class="cn(`flex h-2 w-2 ${notification.isRead ? '' : 'translate-y-1 rounded-full bg-sky-500'}`)"/>
              <div class="space-y-1">
                <p class="text-sm font-medium leading-none">{{ notification.title }}</p>
                <p class="text-sm text-muted-foreground">{{ notification.description }}</p>
                <p class="text-sm text-muted-foreground">{{ formatDate(notification.createTime) }}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button class="w-full">
            <CheckIcon class="mr-2 h-4 w-4"/>
            {{ $t('user.common.markAllAsRead') }}
          </Button>
        </CardFooter>
      </Card>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { BellIcon, BellRing, CheckIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Switch } from '@/components/ui/switch'
import NotificationService from '@/services/Notification'

export default defineComponent({
  name: 'NotificationNavigation',
  components: {
    Switch,
    Button,
    DropdownMenu, DropdownMenuContent, DropdownMenuTrigger,
    Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
    BellRing, BellIcon, CheckIcon
  },
  setup()
  {
    const $dt = inject('$dt')
    const notifications = NotificationService.getNotifications()

    const formatDate = (value: any) => {
      // @ts-ignore
      return $dt(value).fromNow()
    }

    return {
      cn,
      formatDate,
      notifications
    }
  }
})
</script>
