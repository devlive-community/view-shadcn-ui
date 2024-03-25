<template>
  <Card>
    <CardHeader class="pb-3">
      <CardTitle>{{ $t('card.common.notification') }}</CardTitle>
      <CardDescription>{{ $t('card.tip.notification') }}</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-1">
      <div class="cursor-pointer -mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
        <BellIcon class="mt-px h-5 w-5"/>
        <div class="space-y-1">
          <p class="text-sm font-medium leading-none">{{ $t('card.common.notification') }}</p>
          <p class="text-sm text-muted-foreground">{{ $t('card.tip.notification') }}</p>
        </div>
      </div>
      <div class="cursor-pointer -mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
        <PersonStandingIcon class="mt-px h-5 w-5"/>
        <div class="space-y-1">
          <p class="text-sm font-medium leading-none">{{ $t('card.common.available') }}</p>
          <p class="text-sm text-muted-foreground">{{ $t('card.tip.available') }}</p>
        </div>
      </div>
      <div class="cursor-pointer -mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
        <EyeOffIcon class="mt-px h-5 w-5"/>
        <div class="space-y-1">
          <p class="text-sm font-medium leading-none">{{ $t('card.common.ignored') }}</p>
          <p class="text-sm text-muted-foreground">{{ $t('card.tip.ignored') }}</p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BellIcon, EyeOffIcon, PersonStandingIcon } from 'lucide-vue-next'

export default defineComponent({
  name: 'CardNotification',
  components: {
    Card, CardContent, CardDescription, CardHeader, CardTitle,
    BellIcon, EyeOffIcon, PersonStandingIcon
  }
})
</script>
