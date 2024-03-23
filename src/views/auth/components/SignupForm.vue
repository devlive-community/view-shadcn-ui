<template>
  <div class="grid gap-6">
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>{{ $t('user.common.username') }}</FormLabel>
            <FormControl>
              <Input type="text" v-model="formState.username" v-bind="componentField" :placeholder="$t('user.tip.usernameHolder')"/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        </FormField>
      </div>
      <div class="grid gap-2">
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel>{{ $t('user.common.password') }}</FormLabel>
            <FormControl>
              <Input v-model="formState.password" v-bind="componentField" type="password" :placeholder="$t('user.tip.passwordHolder')"/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        </FormField>
      </div>
      <div class="grid gap-2">
        <FormField v-slot="{ componentField }" name="confirmPassword">
          <FormItem>
            <FormLabel>{{ $t('user.common.confirmPassword') }}</FormLabel>
            <FormControl>
              <Input v-model="formState.confirmPassword" v-bind="componentField" type="password" :placeholder="$t('user.tip.confirmPasswordHolder')"/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        </FormField>
      </div>
      <Button class="mt-3 w-full" type="submit" :disabled="loading">
        <Loader2 v-if="loading" class="mr-2 h-4 w-4 animate-spin"/>
        {{ $t('common.common.createAccount') }}
      </Button>
    </form>
    <ThirdForm/>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { User } from '@/views/auth/User'
import { Input } from '@/components/ui/input'
import { Facebook, Github, Loader2 } from 'lucide-vue-next'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { Button } from '@/components/ui/button'
import ThirdForm from '@/views/auth/components/ThirdForm.vue'
import router from '@/router'

export default defineComponent({
  name: 'SignupForm',
  components: {
    ThirdForm,
    Button,
    Input,
    FormControl, FormField, FormItem, FormLabel, FormMessage,
    Loader2, Github, Facebook
  },
  setup()
  {
    const $t: any = inject('$t')
    let loading = ref(false)
    const formState = ref<User>({username: undefined, password: undefined, confirmPassword: undefined})
    const validator = z
        .object({
          username: z.string({required_error: $t('user.validator.usernameRequired')})
              .min(2, $t('user.validator.usernameLengthLeast'))
              .max(20, $t('user.validator.usernameLengthMost')),
          password: z.string({required_error: $t('user.validator.passwordRequired')})
              .min(6, $t('user.validator.passwordLengthLeast'))
              .max(20, $t('user.validator.passwordLengthMost')),
          confirmPassword: z.string({required_error: $t('user.validator.passwordRequired')})
              .min(6, $t('user.validator.passwordLengthLeast'))
              .max(20, $t('user.validator.passwordLengthMost'))
        })
        .refine((data) => data.password === data.confirmPassword, {
          message: $t('user.validator.passwordNotMatch'),
          path: ['confirmPassword']
        })

    const {handleSubmit} = useForm({
      validationSchema: toTypedSchema(validator)
    })

    const onSubmit = handleSubmit(() => {
      loading.value = true
      setTimeout(() => {
        loading.value = false
        router.push('/auth/signin')
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
