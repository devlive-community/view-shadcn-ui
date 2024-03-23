<template>
  <div class="grid gap-6">
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>{{ $t('user.common.email') }}</FormLabel>
            <FormControl>
              <Input type="email" v-model="formState.email" v-bind="componentField" :placeholder="$t('user.tip.emailHolder')"/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        </FormField>
      </div>
      <Button class="mt-3 w-full" type="submit" :disabled="loading">
        <Loader2 v-if="loading" class="mr-2 h-4 w-4 animate-spin"/>
        {{ $t('common.common.sendEmail') }}
      </Button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { User } from '@/views/auth/User'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-vue-next'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { Button } from '@/components/ui/button'
import router from '@/router'

export default defineComponent({
  name: 'ForgotPasswordForm',
  components: {
    Button,
    Input,
    FormControl, FormField, FormItem, FormLabel, FormMessage,
    Loader2
  },
  setup()
  {
    const $t: any = inject('$t')
    let loading = ref(false)
    const formState = ref<User>({email: undefined})
    const validator = z
        .object({
          email: z.string({required_error: $t('user.validator.emailRequired')})
              .email({message: $t('user.validator.emailInvalid')})
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
