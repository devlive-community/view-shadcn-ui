<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t('card.common.issue') }}</CardTitle>
      <CardDescription>{{ $t('card.tip.issue') }}</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-6">
      <div class="grid grid-cols-2 gap-4">
        <div class="grid gap-2">
          <Label for="area">{{ $t('common.common.label') }}</Label>
          <Select>
            <SelectTrigger>
              <SelectValue :placeholder="$t('card.tip.roleHolder')"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="viewer">{{ $t('card.common.viewer') }}</SelectItem>
              <SelectItem value="developer">{{ $t('card.common.developer') }}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="grid gap-2">
          <Label for="security-level">{{ $t('common.common.label') }}</Label>
          <Select>
            <SelectTrigger>
              <SelectValue :placeholder="$t('card.tip.roleHolder')"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="viewer">{{ $t('card.common.viewer') }}</SelectItem>
              <SelectItem value="developer">{{ $t('card.common.developer') }}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div class="grid gap-2">
        <Label for="subject">{{ $t('common.common.label') }}</Label>
        <Input id="subject" :placeholder="$t('common.tip.holder')"/>
      </div>
      <div class="grid gap-2">
        <Label for="description">{{ $t('common.common.label') }}</Label>
        <Textarea id="description" :placeholder="$t('common.tip.holder')"/>
      </div>
    </CardContent>
    <CardFooter class="justify-between space-x-2">
      <Button variant="ghost">{{ $t('common.common.button') }}</Button>
      <Button>{{ $t('common.common.button') }}</Button>
    </CardFooter>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default defineComponent({
  name: 'CardTeamIssue',
  components: {
    Label,
    Input,
    Button,
    Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter,
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
    Textarea
  }
})
</script>
