<template>
  <div class="space-y-2">
    <div class="flex items-center">
      <label v-if="label"
             class="text-sm text-gray-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
             :for="name">
        {{ label }}
      </label>

      <div v-if="description" class="ml-auto">
        <p class="text-sm text-muted-foreground">
          <ShadcnTooltip :content="description">
            <ShadcnIcon icon="HelpCircle"/>
          </ShadcnTooltip>
        </p>
      </div>
    </div>

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
import { FormItemContext } from '@/ui/form/context.ts'
import { FormItemProps } from '@/ui/form/types.ts'
import ShadcnTooltip from '@/ui/tooltip'
import ShadcnIcon from '@/ui/icon'
import { isEmpty } from 'lodash'

const props = withDefaults(defineProps<FormItemProps>(), {
  validateOnBlur: true
})
const errorMessage = ref<string>('')

const formContext = inject('formContext') as any

// Check from nested object
const getValue = (obj: any, path: string) => {
  const parts = path.match(/^(\w+)\[(\d+)\]\.(\w+)$/)
  if (parts) {
    const [_, array, index, prop] = parts
    return obj[array]?.[Number(index)]?.[prop]
  }
  return obj[path]
}

const validate = async (): Promise<{ isValid: boolean; errorMessage?: string }> => {
  if (!props.rules) {
    return { isValid: true }
  }

  const value = getValue(formContext.model, props.name)

  for (const rule of props.rules) {
    // Required check
    if (rule.required && isEmpty(value)) {
      return {
        isValid: false,
        errorMessage: rule.message || 'This field is required'
      }
    }

    let length = String(value || '').length
    if (value instanceof Array) {
      length = value.length
    }

    // Min length check
    if (rule.min !== undefined && length < rule.min) {
      return {
        isValid: false,
        errorMessage: rule.message || `Minimum length is ${ rule.min }`
      }
    }

    // Max length check
    if (rule.max !== undefined && length > rule.max) {
      return {
        isValid: false,
        errorMessage: rule.message || `Maximum length is ${ rule.max }`
      }
    }

    // Pattern check
    if (rule.pattern && !rule.pattern.test(String(value || ''))) {
      return {
        isValid: false,
        errorMessage: rule.message || 'Invalid format'
      }
    }

    // Custom validator
    if (rule.validator) {
      try {
        const result = await rule.validator(value)
        if (!result) {
          return {
            isValid: false,
            errorMessage: rule.message || 'Validation failed'
          }
        }
      }
      catch (error) {
        return {
          isValid: false,
          errorMessage: (error as Error).message
        }
      }
    }
  }

  return { isValid: true }
}

const onBlur = async () => {
  if (props.validateOnBlur) {
    const { isValid, errorMessage: validationError } = await validate()
    if (!isValid) {
      errorMessage.value = validationError || ''
    }
    else {
      errorMessage.value = ''
    }
  }
}

provide<FormItemContext>(`form-item-${ props.name }`, {
  onBlur,
  name: props.name
})

onMounted(() => {
  formContext?.registerFormItem({
    name: props.name,
    validate,
    rules: props.rules
  })
})

onUnmounted(() => {
  formContext?.unregisterFormItem(props.name)
})

watch(
    () => formContext?.errors?.get(props.name),
    (error) => errorMessage.value = error || ''
)
</script>
