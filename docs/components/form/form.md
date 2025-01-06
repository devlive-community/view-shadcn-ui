---
title: Shadcn Form
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnForm component.

- ShadcnForm
- ShadcnFormItem

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnForm ref="formRef"
                v-model="formData"
                @on-submit="onSubmit"
                @on-error="onError">
      <ShadcnFormItem name="username"
                      label="Username"
                      description="Username must be at least 3 characters and cannot exceed 20 characters."
                      :rules="[
                        { required: true, message: 'Please input username!' },
                        { min: 3, message: 'Username must be at least 3 characters' },
                        { max: 20, message: 'Username cannot exceed 20 characters' }
                      ]">
        <ShadcnInput v-model="formData.username"/>
      </ShadcnFormItem>
      <ShadcnFormItem name="username"
                      label="Username"
                      :rules="[
                        { required: true, message: 'Please input username!' },
                        { min: 3, message: 'Username must be at least 3 characters' },
                        { max: 20, message: 'Username cannot exceed 20 characters' }
                      ]">
        <ShadcnInput v-model="formData.username"/>
      </ShadcnFormItem>
      <ShadcnFormItem name="email"
                      label="Email"
                      :rules="[
                        { required: true, message: 'Please input email!' },
                        { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email!' }
                      ]">
        <ShadcnInput v-model="formData.email"/>
      </ShadcnFormItem>
      <ShadcnFormItem name="password"
                      label="Password"
                      :rules="[
                        { required: true, message: 'Please input password!' },
                        { min: 6, message: 'Password must be at least 6 characters' },
                        { validator: validatePassword }
                      ]">
        <ShadcnInput type="password" v-model="formData.password"/>
      </ShadcnFormItem>
      <ShadcnFormItem name="confirmPassword"
                      label="Confirm Password"
                      :rules="[
                        { required: true, message: 'Please confirm your password!' },
                        { validator: validateConfirmPassword }
                      ]">
        <ShadcnInput type="password" v-model="formData.confirmPassword"/>
      </ShadcnFormItem>
      <ShadcnFormItem name="role"
                      label="Role"
                      :rules="[{ required: true, message: 'Please select a role!' }]">
        <ShadcnSelect v-model="formData.role">
          <template #options>
            <ShadcnSelectOption v-for="i in 10"
                                :key="i"
                                :selected="formData.role === `Value ${i}`"
                                :disabled="i % 2 === 0"
                                :value="`Value ${i}`"
                                :label="`Option ${i}`"/>
          </template>
        </ShadcnSelect>
      </ShadcnFormItem>
      <ShadcnFormItem name="nickname"
                      label="Nickname"
                      :rules="[
                        { required: true, message: 'Please input nickname!' },
                        { validator: validateNicknameAsync }
                      ]">
        <ShadcnInput v-model="formData.nickname"/>
      </ShadcnFormItem>
      <div class="flex justify-end space-x-2 mt-6">
        <ShadcnButton reset @click="resetForm">
          Reset
        </ShadcnButton>
        <ShadcnButton submit>
          Submit
        </ShadcnButton>
      </div>
    </ShadcnForm>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="p-6 max-w-2xl mx-auto">
    <ShadcnForm ref="formRef"
                v-model="formData"
                @on-submit="onSubmit"
                @on-error="onError">
      <ShadcnFormItem name="username"
                      label="Username"
                      description="Username must be at least 3 characters and cannot exceed 20 characters."
                      :rules="[
                        { required: true, message: 'Please input username!' },
                        { min: 3, message: 'Username must be at least 3 characters' },
                        { max: 20, message: 'Username cannot exceed 20 characters' }
                      ]">
        <ShadcnInput v-model="formData.username"/>
      </ShadcnFormItem>
      <ShadcnFormItem name="username"
                      label="Username"
                      :rules="[
                        { required: true, message: 'Please input username!' },
                        { min: 3, message: 'Username must be at least 3 characters' },
                        { max: 20, message: 'Username cannot exceed 20 characters' }
                      ]">
        <ShadcnInput v-model="formData.username"/>
      </ShadcnFormItem>

      <ShadcnFormItem name="email"
                      label="Email"
                      :rules="[
                        { required: true, message: 'Please input email!' },
                        { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email!' }
                      ]">
        <ShadcnInput v-model="formData.email"/>
      </ShadcnFormItem>

      <ShadcnFormItem name="password"
                      label="Password"
                      :rules="[
                        { required: true, message: 'Please input password!' },
                        { min: 6, message: 'Password must be at least 6 characters' },
                        { validator: validatePassword }
                      ]">
        <ShadcnInput type="password" v-model="formData.password"/>
      </ShadcnFormItem>

      <ShadcnFormItem name="confirmPassword"
                      label="Confirm Password"
                      :rules="[
                        { required: true, message: 'Please confirm your password!' },
                        { validator: validateConfirmPassword }
                      ]">
        <ShadcnInput type="password" v-model="formData.confirmPassword"/>
      </ShadcnFormItem>

      <ShadcnFormItem name="role"
                      label="Role"
                      :rules="[{ required: true, message: 'Please select a role!' }]">

        <ShadcnSelect v-model="formData.role">
          <template #options>
            <ShadcnSelectOption v-for="i in 10"
                                :key="i"
                                :selected="formData.role === `Value ${i}`"
                                :disabled="i % 2 === 0"
                                :value="`Value ${i}`"
                                :label="`Option ${i}`"/>
          </template>
        </ShadcnSelect>
      </ShadcnFormItem>

      <ShadcnFormItem name="nickname"
                      label="Nickname"
                      :rules="[
                        { required: true, message: 'Please input nickname!' },
                        { validator: validateNicknameAsync }
                      ]">
        <ShadcnInput v-model="formData.nickname"/>
      </ShadcnFormItem>

      <div class="flex justify-end space-x-2 mt-6">
        <ShadcnButton reset @click="resetForm">
          Reset
        </ShadcnButton>
        <ShadcnButton submit>
          Submit
        </ShadcnButton>
      </div>
    </ShadcnForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formRef = ref()

const formData = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: '',
  nickname: ''
})

const validatePassword = (value: string) => {
  const hasNumber = /\d/.test(value)
  const hasLetter = /[a-zA-Z]/.test(value)
  if (!hasNumber || !hasLetter) {
    return Promise.reject(new Error('Password must contain both letters and numbers'))
  }
  return Promise.resolve(true)
}

const validateConfirmPassword = (value: string) => {
  if (value !== formData.value.password) {
    return Promise.reject(new Error('The two passwords do not match'))
  }
  return Promise.resolve(true)
}

const validateNicknameAsync = async (value: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 'admin') {
        reject(new Error('This nickname is already taken'))
      }
      else {
        resolve(true)
      }
    }, 1000)
  })
}

const onSubmit = async (data: any) => {
  console.log('Form submitted successfully:', data)
}

const onError = (errors: any) => {
  console.log('Form validation failed:', errors)
}

const resetForm = () => {
  formRef.value.reset()
}
</script>
```

:::

## Dynamic Form

::: raw

<CodeRunner title="Dynamic Form">
    <ShadcnButton @click="onAdd">Add Column</ShadcnButton>
    <ShadcnForm v-model="formState" class="mt-2" @on-submit="onSubmit2">
      <ShadcnFormItem v-for="(item, index) in formState.columns"
                      :name="`columns[${index}].name`"
                      :key="`column-${index}`"
                      :label="`Column ${index + 1}`"
                      :rules="[{ required: true, message: 'Please input column name!' }]">
        <ShadcnSpace class="items-center">
          <ShadcnInput v-model="formState.columns[index].name" :name="`columns[${index}].name`"/>
          <ShadcnIcon icon="MinusCircle" class="cursor-pointer" color="#f43f5e" @click="onRemove(index)"/>
        </ShadcnSpace>
      </ShadcnFormItem>
      <ShadcnButton submit>Submit</ShadcnButton>
    </ShadcnForm>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="p-32">
    <ShadcnButton @click="onAdd">Add Column</ShadcnButton>

    <ShadcnForm v-model="formState" class="mt-2" @on-submit="onSubmit">
      <ShadcnFormItem v-for="(item, index) in formState.columns"
                      :name="`columns[${index}].name`"
                      :key="`column-${index}`"
                      :label="`Column ${index + 1}`"
                      :rules="[{ required: true, message: 'Please input column name!' }]">
        <ShadcnSpace class="items-center">
          <ShadcnInput v-model="formState.columns[index].name" :name="`column-${index}`"/>
          <ShadcnIcon icon="MinusCircle" class="cursor-pointer" color="#f43f5e" @click="onRemove(index)"/>
        </ShadcnSpace>
      </ShadcnFormItem>

      <ShadcnButton submit>Submit</ShadcnButton>
    </ShadcnForm>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const formState = ref({
  columns: [] as any[]
})

const onAdd = () => {
  formState.value.columns.push({
    name: `Column ${ formState.value.columns.length + 1 }`,
    value: ''
  })
}

const onRemove = (index: number) => {
  formState.value.columns.splice(index, 1)
}

const onSubmit = () => console.log(formState.value)

onMounted(() => onAdd())
</script>
```

:::

## Form Props

<ApiTable title="Form Props"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['modelValue', 'The value of the form', 'Any', '-', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Item Props"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['name', 'The name of the form item', 'String', '-', '-', '-'],
        ['label', 'The label of the form item', 'String', '-', '-', '-'],
        ['description', 'The description of the form item', 'String', '-', '-', '-'],
        ['rules', 'The rules of the form item', 'Array', '-', '-', '-'],
        ['validateOnBlur', 'Whether to validate on blur', 'Boolean', 'true', '-', '-'],
    ]">
</ApiTable>

## Form Events

<ApiTable title="Form Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-submit', 'Triggered when the form is submitted', 'Object'],
        ['on-error', 'Triggered when the form is submitted with errors', 'Object'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from 'vue'

const formRef = ref()

const formData = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: '',
  nickname: ''
})

const validatePassword = (value: string) => {
  const hasNumber = /\d/.test(value)
  const hasLetter = /[a-zA-Z]/.test(value)
  if (!hasNumber || !hasLetter) {
    return Promise.reject(new Error('Password must contain both letters and numbers'))
  }
  return Promise.resolve(true)
}

const validateConfirmPassword = (value: string) => {
  if (value !== formData.value.password) {
    return Promise.reject(new Error('The two passwords do not match'))
  }
  return Promise.resolve(true)
}

const validateNicknameAsync = async (value: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 'admin') {
        reject(new Error('This nickname is already taken'))
      }
      else {
        resolve(true)
      }
    }, 1000)
  })
}

const onSubmit = async (data: any) => {
  console.log('Form submitted successfully:', data)
}

const onError = (errors: any) => {
  console.log('Form validation failed:', errors)
}

const resetForm = () => {
  formRef.value.reset()
}

const formState = ref({
  columns: [] as any[]
})

const onAdd = () => {
  formState.value.columns.push({
    name: undefined,
    value: ''
  })
}

const onRemove = (index: number) => {
  formState.value.columns.splice(index, 1)
}

const { proxy } = getCurrentInstance()!

const onSubmit2 = () => proxy?.$Message.success({
    content: formState.value,
    showIcon: true
})

onMounted(() => onAdd())
</script>
