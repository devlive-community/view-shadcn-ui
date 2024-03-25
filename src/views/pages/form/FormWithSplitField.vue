<template>
  <div class="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
    <div class="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
      <Card class="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle class="text-xl">{{ $t('form.common.formWithSplitField') }}</CardTitle>
          <CardDescription>{{ $t('form.tip.formWithSplitField') }}</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="grid gap-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <Label for="first-name">{{ $t('form.common.firstName') }}</Label>
                <Input id="first-name" :placeholder="$t('form.tip.firstNameHolder')" required/>
              </div>
              <div class="grid gap-2 mt-2">
                <Label for="last-name">{{ $t('form.common.lastName') }}</Label>
                <Input id="last-name" :placeholder="$t('form.tip.lastNameHolder')" required/>
              </div>
            </div>
            <div class="grid gap-2">
              <Label for="email">{{ $t('user.common.email') }}</Label>
              <Input id="email" type="email" :placeholder="$t('user.tip.emailHolder')" required/>
            </div>
            <div class="grid gap-2">
              <Label for="password">{{ $t('user.common.password') }}</Label>
              <Input id="password" type="password" :placeholder="$t('user.tip.passwordHolder')"/>
            </div>
            <Button type="submit" class="w-full">{{ $t('common.common.signUp') }}</Button>
            <Button variant="outline" class="w-full">{{ $t('form.common.signInWithGoogle') }}</Button>
          </div>
          <div class="mt-4 text-center text-sm">
            {{ $t('common.tip.signUpHasAccount') }}
            <a href="#" class="underline">{{ $t('common.common.signIn') }}</a>
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
  name: 'FormWithSplitField',
  components: {
    Button,
    Input,
    Label,
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
  }
})
</script>
