<template>
  <div class="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
    <div class="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
      <div class="mb-4 flex items-center justify-center">
        <h1 class="text-xl font-medium">Shadcn Admin for Vue3</h1>
      </div>
      <AlertForm/>
      <Card class="p-6">
        <div class="mb-2 flex flex-col space-y-2 text-left">
          <h1 class="text-lg font-semibold tracking-tight text-center">
            Forgot Password
          </h1>
          <p class="text-sm text-muted-foreground text-center">
            Enter your registered email and we will send you a link to reset your password. <br/>
          </p>
        </div>
        <ForgotPasswordForm/>
        <div class="mt-4 px-8 text-center text-sm text-muted-foreground">
          Don't have an account?
          <RouterLink to='/auth/signup' class="underline underline-offset-4 hover:text-primary">
            Sign Up
          </RouterLink>
        </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AlertForm from '@/views/auth/components/AlertForm.vue'
import { Card } from '@/components/ui/card'
import ForgotPasswordForm from '@/views/pages/user/components/ForgotPasswordForm.vue'

export default defineComponent({
  name: 'ForgotPassword',
  components: {
    ForgotPasswordForm,
    Card,
    AlertForm
  }
})
</script>
