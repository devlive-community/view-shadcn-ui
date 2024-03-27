<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t('card.common.team') }}</CardTitle>
      <CardDescription>{{ $t('card.tip.team') }}</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex space-x-2">
        <Input default-value="https://shadcn.vue.devlive.org" read-only/>
        <Button variant="secondary" class="shrink-0">{{ $t('card.common.copyLink') }}</Button>
      </div>
      <Separator class="my-4"/>
      <div class="space-y-4">
        <h4 class="text-sm font-medium">{{ $t('common.common.list') }}</h4>
        <div class="grid gap-6">
          <div v-for="i in 3" class="flex items-center justify-between space-x-4">
            <div class="flex items-center space-x-4">
              <Avatar>
                <AvatarFallback>
                  <ChevronDownIcon/>
                </AvatarFallback>
              </Avatar>
              <div>
                <p class="text-sm font-medium leading-none">{{ `${$t('user.common.username')} ${i}` }}</p>
                <p class="text-sm text-muted-foreground">{{ `${$t('user.common.email')} ${i}` }}</p>
              </div>
            </div>
            <Select :default-value="i % 2 === 0 ? 'viewer' : 'developer'">
              <SelectTrigger class="ml-auto w-[110px]">
                <SelectValue :placeholder="$t('card.tip.roleHolder')"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="viewer">{{ $t('card.common.viewer') }}</SelectItem>
                <SelectItem value="developer">{{ $t('card.common.developer') }}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDownIcon } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default defineComponent({
  name: 'CardTeamDocument',
  components: {
    Separator,
    Input,
    Button,
    Card, CardContent, CardDescription, CardHeader, CardTitle,
    Avatar, AvatarFallback, AvatarImage,
    ChevronDownIcon,
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
  }
})
</script>
