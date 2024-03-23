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
      <div class="grid gap-2 mt-1">
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <div class="flex items-center justify-between">
              <FormLabel>{{ $t('user.common.password') }}</FormLabel>
              <RouterLink to="/user/forgot/password" class="text-sm font-medium text-muted-foreground hover:opacity-75">
                {{ $t('common.common.forgotPassword') }}?
              </RouterLink>
            </div>
            <FormControl>
              <Input v-model="formState.password" v-bind="componentField" type="password" :placeholder="$t('user.tip.passwordHolder')"/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        </FormField>
      </div>
      <Button class="mt-3 w-full" type="submit" :disabled="loading">
        <Loader2 v-if="loading" class="mr-2 h-4 w-4 animate-spin"/>
        {{ $t('common.common.signIn') }}
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
    const $t: any = inject('$t')
    let loading = ref(false)
    const formState = ref<User>({username: undefined, password: undefined})
    const validator = z
        .object({
          username: z.string({required_error: $t('user.validator.usernameRequired')})
              .min(2, $t('user.validator.usernameLengthLeast'))
              .max(20, $t('user.validator.usernameLengthMost')),
          password: z.string({required_error: $t('user.validator.passwordRequired')})
              .min(6, $t('user.validator.passwordLengthLeast'))
              .max(20, $t('user.validator.passwordLengthMost'))
        })

    const {handleSubmit} = useForm({
      validationSchema: toTypedSchema(validator)
    })

    const onSubmit = handleSubmit(() => {
      loading.value = true
      setTimeout(() => {
        loading.value = false
        router.push('/')
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
