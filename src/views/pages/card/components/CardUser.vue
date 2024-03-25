<template>
  <Card>
    <CardHeader class="space-y-1">
      <CardTitle class="text-2xl">{{ $t('common.common.signUp') }}</CardTitle>
      <CardDescription>{{ $t('user.tip.signUp') }}</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div class="grid grid-cols-2 gap-6">
        <Button variant="outline">
          <GithubIcon class="mr-2 h-4 w-4"/>
          Github
        </Button>
        <Button variant="outline">
          <FacebookIcon class="mr-2 h-4 w-4"/>
          Facebook
        </Button>
      </div>
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t"/>
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-background px-2 text-muted-foreground">{{ $t('user.common.continueWith') }}</span>
        </div>
      </div>
      <div class="grid gap-2">
        <Label for="email">{{ $t('user.common.email') }}</Label>
        <Input id="email" type="email" :placeholder="$t('user.tip.emailHolder')" required/>
      </div>
      <div class="grid gap-2">
        <Label for="password">{{ $t('user.common.password') }}</Label>
        <Input id="password" type="password" required :placeholder="$t('user.tip.passwordHolder')"/>
      </div>
      <div class="grid gap-2">
        <Label for="confirmPassword">{{ $t('user.common.confirmPassword') }}</Label>
        <Input id="confirmPassword" type="password" required :placeholder="$t('user.tip.confirmPasswordHolder')"/>
      </div>
    </CardContent>
    <CardFooter>
      <Button class="w-full">{{ $t('common.common.createAccount') }}</Button>
    </CardFooter>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FacebookIcon, GithubIcon } from 'lucide-vue-next'

export default defineComponent({
  name: 'CardUser',
  components: {
    Button,
    Input,
    Label,
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
    GithubIcon, FacebookIcon
  }
})
</script>
