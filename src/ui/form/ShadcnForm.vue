<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <slot/>
  </form>
</template>

<script setup lang="ts">
import { provide, reactive, watch } from 'vue'
import Rule from '@/ui/form/rule.ts'

type FormState = {
  model: Record<string, any>
  items: Map<string, FormItemInstance>
  errors: Map<string, string>
}

interface FormItemInstance
{
  name: string
  value: any
  rules?: Rule[]
  validate: () => Promise<boolean>
}

// Props and emits
const props = defineProps<{ modelValue: Record<string, any> }>()
const emit = defineEmits<{
  'update:modelValue': [value: Record<string, any>]
  'on-submit': [value: Record<string, any>]
  'on-error': [value: Record<string, any>]
}>()

// Form state management
const formState = reactive<FormState>({
  model: { ...props.modelValue },
  items: new Map(),
  errors: new Map()
})

// Watch for model value changes
watch(
    () => props.modelValue,
    newVal => Object.assign(formState.model, newVal),
    { deep: true }
)

// Form validation
const validateField = async (name: string): Promise<boolean> => {
  const item = formState.items.get(name)
  if (!item) {
    return true
  }

  try {
    if (await item.validate()) {
      formState.errors.delete(name)
      return true
    }
    return false
  }
  catch (error) {
    formState.errors.set(name, (error as Error).message)
    return false
  }
}

// Form methods
const validate = async () => (await Promise.all(
    Array.from(formState.items.keys()).map(validateField)
)).every(Boolean)

const handleSubmit = async () => {
  const isValid = await validate()
  if (isValid) {
    emit('on-submit', { ...formState.model })
  }
  else {
    emit('on-error', Object.fromEntries(formState.errors))
  }
}

const reset = () => {
  formState.model = {}
  formState.errors.clear()
  emit('update:modelValue', {})
}

// Provide form context
provide('formContext', {
  model: formState.model,
  errors: formState.errors,
  updateModel: (name: string, value: any) => {
    formState.model[name] = value
    emit('update:modelValue', { ...formState.model })
  },
  registerFormItem: (item: FormItemInstance) => {
    formState.items.set(item.name, item)
    if (!(item.name in formState.model)) {
      formState.model[item.name] = props.modelValue[item.name] ?? ''
    }
  },
  unregisterFormItem: (name: string) => formState.items.delete(name),
  validateField
})

defineExpose({ validate, reset })
</script>
