<template>
  <div class="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
    <div class="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
      <Card>
        <CardHeader>
          <CardTitle class="text-2xl">{{ $t('form.common.formBasic') }}</CardTitle>
          <CardDescription>{{ $t('form.tip.formBasic') }}</CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">{{ $t('user.common.email') }}</Label>
            <Input id="email" type="email" :placeholder="$t('user.tip.emailHolder')" required/>
          </div>
          <div class="grid gap-2">
            <Label for="password">{{ $t('user.common.password') }}</Label>
            <Input id="password" type="password" required :placeholder="$t('user.tip.passwordHolder')"/>
          </div>
        </CardContent>
        <CardFooter>
          <Button class="w-full">{{ $t('common.common.signIn') }}</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default defineComponent({
  name: 'FormBasic',
  components: {
    Button,
    Input,
    Label,
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
  }
})
</script>
