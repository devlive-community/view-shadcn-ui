<template>
  <div class="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
    <div class="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
      <ICard class="rounded-xl p-5">
        <template #title>{{ $t('form.common.formBasic') }}</template>
        <template #description>{{ $t('form.tip.formBasic') }}</template>
        <template #content>
          <div class="grid gap-4 mt-3">
            <div class="grid gap-2">
              <Label for="email">{{ $t('user.common.email') }}</Label>
              <Input id="email" type="email" :placeholder="$t('user.tip.emailHolder')" required/>
            </div>
            <div class="grid gap-2">
              <Label for="password">{{ $t('user.common.password') }}</Label>
              <Input id="password" type="password" required :placeholder="$t('user.tip.passwordHolder')"/>
            </div>
          </div>
        </template>
        <template #footer>
          <Button class="w-full mt-3 border-none">{{ $t('common.common.signIn') }}</Button>
        </template>
      </ICard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ICard from '@/ui/card'

export default defineComponent({
  name: 'FormBasic',
  components: {
    ICard,
    Button,
    Input,
    Label
  }
})
</script>
