<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t('card.common.payment') }}</CardTitle>
      <CardDescription>{{ $t('card.tip.payment') }}</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-6">
      <RadioGroup default-value="card" class="grid grid-cols-3 gap-4">
        <div>
          <RadioGroupItem id="card" value="card" class="peer sr-only"/>
          <Label for="card"
                 class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
            <CreditCard :size="35"/>
            Card
          </Label>
        </div>
        <div>
          <RadioGroupItem id="paypal" value="paypal" class="peer sr-only"/>
          <Label for="paypal"
                 class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
            <Bitcoin :size="35"/>
            Paypal
          </Label>
        </div>
        <div>
          <RadioGroupItem id="apple" value="apple" class="peer sr-only"/>
          <Label for="apple"
                 class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
            <Apple :size="35"/>
            Apple
          </Label>
        </div>
      </RadioGroup>
      <div class="grid gap-2">
        <Label for="name">{{ $t('form.common.firstName') }}</Label>
        <Input id="name" :placeholder="$t('form.tip.firstNameHolder')"/>
      </div>
      <div class="grid gap-2">
        <Label for="number">{{ $t('card.common.number') }}</Label>
        <Input id="number" :placeholder="$t('card.tip.numberHolder')"/>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="grid gap-2">
          <Label for="month">{{ $t('card.common.month') }}</Label>
          <Select>
            <SelectTrigger id="month">
              <SelectValue :placeholder="$t('card.tip.monthHolder')"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">{{ $t('card.common.january') }}</SelectItem>
              <SelectItem value="2">{{ $t('card.common.february') }}</SelectItem>
              <SelectItem value="3">{{ $t('card.common.march') }}</SelectItem>
              <SelectItem value="4">{{ $t('card.common.april') }}</SelectItem>
              <SelectItem value="5">{{ $t('card.common.may') }}</SelectItem>
              <SelectItem value="6">{{ $t('card.common.june') }}</SelectItem>
              <SelectItem value="7">{{ $t('card.common.july') }}</SelectItem>
              <SelectItem value="8">{{ $t('card.common.august') }}</SelectItem>
              <SelectItem value="9">{{ $t('card.common.september') }}</SelectItem>
              <SelectItem value="10">{{ $t('card.common.october') }}</SelectItem>
              <SelectItem value="11">{{ $t('card.common.november') }}</SelectItem>
              <SelectItem value="12">{{ $t('card.common.december') }}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="grid gap-2">
          <Label for="year">{{ $t('card.common.year') }}</Label>
          <Select>
            <SelectTrigger id="year">
              <SelectValue :placeholder="$t('card.tip.yearHolder')"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="i in 10" :key="i" :value="`${new Date().getFullYear() + i}`">
                {{ new Date().getFullYear() + i }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="grid gap-2">
          <Label for="cvc">{{ $t('card.common.cvc') }}</Label>
          <Input id="cvc" :placeholder="$t('card.tip.cvcHolder')"/>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button class="w-full">{{ $t('card.common.payment') }}</Button>
    </CardFooter>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Apple, Bitcoin, CreditCard } from 'lucide-vue-next'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default defineComponent({
  name: 'CardPayment',
  components: {
    Button,
    Input,
    Label,
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
    RadioGroup, RadioGroupItem,
    CreditCard, Apple, Bitcoin,
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
  }
})
</script>
