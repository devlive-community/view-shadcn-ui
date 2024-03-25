<template>
  <div class="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
    <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div class="flex items-center justify-center py-12">
        <div class="mx-auto grid w-[350px] gap-6">
          <div class="grid gap-2 text-center">
            <h1 class="text-3xl font-bold">{{ $t('form.common.formWithImage') }}</h1>
            <p class="text-balance text-muted-foreground">{{ $t('form.tip.formWithImage') }}</p>
          </div>
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
        </div>
      </div>
      <div class="hidden bg-muted lg:block">
        <Image class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Image } from 'lucide-vue-next'

export default defineComponent({
  name: 'FormWithImage',
  components: {
    Button,
    Input,
    Label,
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
    Image
  }
})
</script>
