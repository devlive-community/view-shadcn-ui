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
            Sign In
          </h1>
          <p class="text-sm text-muted-foreground text-center">
            Enter your information to sign in to your account. <br/>
            Not have an account?
            <RouterLink to='/auth/signup' class="underline underline-offset-4 hover:text-primary">
              Sign Up
            </RouterLink>
          </p>
        </div>
        <SigninForm/>
        <p class="mt-4 px-8 text-center text-sm text-muted-foreground">
          By creating an account, you agree to our
          <a class="underline underline-offset-4 hover:text-primary">Terms of Service</a>
          and
          <a class="underline underline-offset-4 hover:text-primary">Privacy Policy</a>.
        </p>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Card } from '@/components/ui/card'
import SigninForm from '@/views/auth/components/SigninForm.vue'
import AlertForm from '@/views/auth/components/AlertForm.vue'

export default defineComponent({
  name: 'AuthSignin',
  components: {
    AlertForm,
    SigninForm,
    Card
  }
})
</script>
