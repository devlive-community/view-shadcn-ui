<template>
  <div class="grid gap-6">
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="text" v-model="formState.username" v-bind="componentField" placeholder="Please enter your username"/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        </FormField>
      </div>
      <div class="grid gap-2 mt-1">
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <div class="flex items-center justify-between">
              <FormLabel>Password</FormLabel>
              <RouterLink to="/user/forgot/password" class="text-sm font-medium text-muted-foreground hover:opacity-75">
                Forgot password?
              </RouterLink>
            </div>
            <FormControl>
              <Input v-model="formState.password" v-bind="componentField" type="password" placeholder="Please enter your password"/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        </FormField>
      </div>
      <Button class="mt-3 w-full" type="submit" :disabled="loading">
        <Loader2 v-if="loading" class="mr-2 h-4 w-4 animate-spin"/>
        Sign in
      </Button>
    </form>
    <ThirdForm/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { User } from '@/views/auth/User'
import { Input } from '@/components/ui/input'
import { Facebook, Github, Loader2 } from 'lucide-vue-next'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { Button } from '@/components/ui/button'
import ThirdForm from '@/views/auth/components/ThirdForm.vue'

export default defineComponent({
  name: 'SigninForm',
  components: {
    ThirdForm,
    Button,
    Input,
    FormControl, FormField, FormItem, FormLabel, FormMessage,
    Loader2, Github, Facebook
  },
  setup()
  {
    let loading = ref(false)
    const formState = ref<User>({username: undefined, password: undefined})
    const validator = z
        .object({
          username: z.string({required_error: 'Username is required'})
              .min(2, 'Username must be at least 2 characters')
              .max(20, 'Username must be at most 20 characters'),
          password: z.string({required_error: 'Password is required'})
              .min(6, 'Password must be at least 6 characters')
              .max(20, 'Password must be at most 20 characters')
        })

    const {handleSubmit} = useForm({
      validationSchema: toTypedSchema(validator)
    })

    const onSubmit = handleSubmit(() => {
      loading.value = true
      setTimeout(() => {
        loading.value = false
      }, 3000)
    })

    return {
      loading,
      formState,
      onSubmit
    }
  }
})
</script>
