<template>
  <div class="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
    <div class="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
      <Card>
        <CardHeader>
          <CardTitle class="text-2xl">{{ $t('form.common.formWithAction') }}</CardTitle>
          <CardDescription>{{ $t('form.tip.formWithAction') }}</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="grid gap-4">
            <div class="grid gap-2">
              <Label for="email">{{ $t('user.common.email') }}</Label>
              <Input id="email" type="email" :placeholder="$t('user.tip.emailHolder')" required/>
            </div>
            <div class="grid gap-2">
              <div class="flex items-center">
                <Label for="password">{{ $t('user.common.password') }}</Label>
                <a href="#" class="ml-auto inline-block text-sm underline">{{ $t('common.common.forgotPassword') }}?</a>
              </div>
              <Input id="password" type="password" required :placeholder="$t('user.tip.passwordHolder')"/>
            </div>
            <Button type="submit" class="w-full">{{ $t('common.common.signIn') }}</Button>
            <Button variant="outline" class="w-full">{{ $t('form.common.signInWithGoogle') }}</Button>
          </div>
          <div class="mt-4 text-center text-sm">
            {{ $t('common.tip.signInNoAccount') }}
            <RouterLink to="#" class="underline">{{ $t('common.common.signUp') }}</RouterLink>
          </div>
        </CardContent>
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
  name: 'FormWithAction',
  components: {
    Button,
    Input,
    Label,
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
  }
})
</script>
