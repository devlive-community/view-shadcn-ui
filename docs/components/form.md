---
title: Shadcn Form
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnForm component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnForm ref="formRef"
                v-model="formData"
                @on-submit="onSubmit"
                @on-error="onError">
      <ShadcnFormItem name="username"
                      label="Username"
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

::: details Show code

```vue
<template>
  <div class="p-6 max-w-2xl mx-auto">
    <ShadcnForm ref="formRef"
                v-model="formData"
                @on-submit="onSubmit"
                @on-error="onError">
      <ShadcnFormItem name="username"
                      label="Username"
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

## Props

<ApiTable title="Form Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['modelValue', 'The value of the form', 'Any', '-', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Item Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['name', 'The name of the form item', 'String', '-', '-', '-'],
        ['label', 'The label of the form item', 'String', '-', '-', '-'],
        ['rules', 'The rules of the form item', 'Array', '-', '-', '-'],
        ['validateOnBlur', 'Whether to validate on blur', 'Boolean', 'true', '-', '-'],
    ]">
</ApiTable>

## Events

<ApiTable title="Form Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-submit', 'Triggered when the form is submitted', 'Object'],
        ['on-error', 'Triggered when the form is submitted with errors', 'Object'],
    ]">
</ApiTable>

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
