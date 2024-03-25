<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t('card.common.setting') }}</CardTitle>
      <CardDescription>{{ $t('card.tip.setting') }}</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-6">
      <div class="flex items-center justify-between space-x-2">
        <Label for="necessary" class="flex flex-col space-y-1">
          <span>{{ $t('card.common.setting1') }}</span>
          <span class="font-normal leading-snug text-muted-foreground">{{ $t('card.tip.setting1') }}</span>
        </Label>
        <Switch id="necessary" default-checked/>
      </div>
      <div class="flex items-center justify-between space-x-2">
        <Label for="functional" class="flex flex-col space-y-1">
          <span>{{ $t('card.common.setting1') }}</span>
          <span class="font-normal leading-snug text-muted-foreground">{{ $t('card.tip.setting1') }}</span>
        </Label>
        <Switch id="functional"/>
      </div>
    </CardContent>
    <CardFooter>
      <Button variant="outline" class="w-full">{{ $t('common.common.button') }}</Button>
    </CardFooter>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export default defineComponent({
  name: 'CardSetting',
  components: {
    Button,
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
    Label, Switch
  }
})
</script>
