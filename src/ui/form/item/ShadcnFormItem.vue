<template>
  <div class="space-y-2">
    <label v-if="label" :for="name"
           class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {{ label }}
    </label>

    <div class="relative">
      <slot/>
      <span v-if="errorMessage" class="text-sm text-red-500">
        {{ errorMessage }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, onUnmounted, provide, ref, watch } from 'vue'
import Rule from '@/ui/form/rule.ts'

interface Props
{
  name: string
  label?: string
  rules?: Rule[]
  validateOnBlur?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  validateOnBlur: true
})
const errorMessage = ref<string>('')

const formContext = inject('formContext') as any

// Validation rules
const validate = async (): Promise<boolean> => {
  if (!props.rules) {
    return true
  }

  const value = formContext.model[props.name]

  for (const rule of props.rules) {
    // Required check
    if (rule.required && !value) {
      errorMessage.value = rule.message || 'This field is required'
      return false
    }

    // Min length check
    if (rule.min !== undefined && String(value).length < rule.min) {
      errorMessage.value = rule.message || `Minimum length is ${ rule.min }`
      return false
    }

    // Max length check
    if (rule.max !== undefined && String(value).length > rule.max) {
      errorMessage.value = rule.message || `Maximum length is ${ rule.max }`
      return false
    }

    // Pattern check
    if (rule.pattern && !rule.pattern.test(String(value))) {
      errorMessage.value = rule.message || 'Invalid format'
      return false
    }

    // Custom validator
    if (rule.validator) {
      try {
        const result = await rule.validator(value)
        if (!result) {
          errorMessage.value = rule.message || 'Validation failed'
          return false
        }
      }
      catch (error) {
        errorMessage.value = (error as Error).message
        return false
      }
    }
  }

  errorMessage.value = ''
  return true
}

const onBlur = async () => {
  if (props.validateOnBlur) {
    await validate()
  }
}

provide(`form-item-${ props.name }`, {
  onBlur,
  name: props.name
})

onMounted(() => {
  formContext.registerFormItem({
    name: props.name,
    validate,
    rules: props.rules
  })
})

onUnmounted(() => {
  formContext.unregisterFormItem(props.name)
})

watch(
    () => formContext.errors.get(props.name),
    (error) => errorMessage.value = error || ''
)
</script>
