---
title: 表单 (Form)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnForm` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnForm ref="formRef"
                v-model="formData"
                @on-submit="onSubmit"
                @on-error="onError" :dark="darkMode">
      <ShadcnFormItem name="username"
                      label="Username"
                      description="Username must be at least 3 characters and cannot exceed 20 characters."
                      :rules="[
                        { required: true, message: 'Please input username!' },
                        { min: 3, message: 'Username must be at least 3 characters' },
                        { max: 20, message: 'Username cannot exceed 20 characters' }
                      ]" :dark="darkMode">
        <ShadcnInput v-model="formData.username" :dark="darkMode" />
      </ShadcnFormItem>
      <ShadcnFormItem name="username"
                      label="Username"
                      :rules="[
                        { required: true, message: 'Please input username!' },
                        { min: 3, message: 'Username must be at least 3 characters' },
                        { max: 20, message: 'Username cannot exceed 20 characters' }
                      ]" :dark="darkMode">
        <ShadcnInput v-model="formData.username" :dark="darkMode" />
      </ShadcnFormItem>
      <ShadcnFormItem name="email"
                      label="Email"
                      :rules="[
                        { required: true, message: 'Please input email!' },
                        { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email!' }
                      ]" :dark="darkMode">
        <ShadcnInput v-model="formData.email" :dark="darkMode" />
      </ShadcnFormItem>
      <ShadcnFormItem name="password"
                      label="Password"
                      :rules="[
                        { required: true, message: 'Please input password!' },
                        { min: 6, message: 'Password must be at least 6 characters' },
                        { validator: validatePassword }
                      ]" :dark="darkMode">
        <ShadcnInput type="password" v-model="formData.password" :dark="darkMode" />
      </ShadcnFormItem>
      <ShadcnFormItem name="confirmPassword"
                      label="Confirm Password"
                      :rules="[
                        { required: true, message: 'Please confirm your password!' },
                        { validator: validateConfirmPassword }
                      ]" :dark="darkMode">
        <ShadcnInput type="password" v-model="formData.confirmPassword" :dark="darkMode" />
      </ShadcnFormItem>
      <ShadcnFormItem name="role"
                      label="Role"
                      :rules="[{ required: true, message: 'Please select a role!' }]" :dark="darkMode">
        <ShadcnSelect v-model="formData.role" :dark="darkMode">
          <template #options>
            <ShadcnSelectOption v-for="i in 10"
                                :key="i"
                                :selected="formData.role === `Value ${i}`"
                                :disabled="i % 2 === 0"
                                :value="`Value ${i}`"
                                :label="`Option ${i}`" :dark="darkMode" />
          </template>
        </ShadcnSelect>
      </ShadcnFormItem>
      <ShadcnFormItem name="nickname"
                      label="Nickname"
                      :rules="[
                        { required: true, message: 'Please input nickname!' },
                        { validator: validateNicknameAsync }
                      ]" :dark="darkMode">
        <ShadcnInput v-model="formData.nickname" :dark="darkMode" />
      </ShadcnFormItem>
      <div class="flex justify-end space-x-2 mt-6">
        <ShadcnButton reset @click="resetForm" :dark="darkMode">
          Reset
        </ShadcnButton>
        <ShadcnButton submit :dark="darkMode">
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
                @on-error="onError" :dark="darkMode">
      <ShadcnFormItem name="username"
                      label="Username"
                      description="Username must be at least 3 characters and cannot exceed 20 characters."
                      :rules="[
                        { required: true, message: 'Please input username!' },
                        { min: 3, message: 'Username must be at least 3 characters' },
                        { max: 20, message: 'Username cannot exceed 20 characters' }
                      ]" :dark="darkMode">
        <ShadcnInput v-model="formData.username" :dark="darkMode" />
      </ShadcnFormItem>
      <ShadcnFormItem name="username"
                      label="Username"
                      :rules="[
                        { required: true, message: 'Please input username!' },
                        { min: 3, message: 'Username must be at least 3 characters' },
                        { max: 20, message: 'Username cannot exceed 20 characters' }
                      ]" :dark="darkMode">
        <ShadcnInput v-model="formData.username" :dark="darkMode" />
      </ShadcnFormItem>

      <ShadcnFormItem name="email"
                      label="Email"
                      :rules="[
                        { required: true, message: 'Please input email!' },
                        { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email!' }
                      ]" :dark="darkMode">
        <ShadcnInput v-model="formData.email" :dark="darkMode" />
      </ShadcnFormItem>

      <ShadcnFormItem name="password"
                      label="Password"
                      :rules="[
                        { required: true, message: 'Please input password!' },
                        { min: 6, message: 'Password must be at least 6 characters' },
                        { validator: validatePassword }
                      ]" :dark="darkMode">
        <ShadcnInput type="password" v-model="formData.password" :dark="darkMode" />
      </ShadcnFormItem>

      <ShadcnFormItem name="confirmPassword"
                      label="Confirm Password"
                      :rules="[
                        { required: true, message: 'Please confirm your password!' },
                        { validator: validateConfirmPassword }
                      ]" :dark="darkMode">
        <ShadcnInput type="password" v-model="formData.confirmPassword" :dark="darkMode" />
      </ShadcnFormItem>

      <ShadcnFormItem name="role"
                      label="Role"
                      :rules="[{ required: true, message: 'Please select a role!' }]" :dark="darkMode">

        <ShadcnSelect v-model="formData.role" :dark="darkMode">
          <template #options>
            <ShadcnSelectOption v-for="i in 10"
                                :key="i"
                                :selected="formData.role === `Value ${i}`"
                                :disabled="i % 2 === 0"
                                :value="`Value ${i}`"
                                :label="`Option ${i}`" :dark="darkMode" />
          </template>
        </ShadcnSelect>
      </ShadcnFormItem>

      <ShadcnFormItem name="nickname"
                      label="Nickname"
                      :rules="[
                        { required: true, message: 'Please input nickname!' },
                        { validator: validateNicknameAsync }
                      ]" :dark="darkMode">
        <ShadcnInput v-model="formData.nickname" :dark="darkMode" />
      </ShadcnFormItem>

      <div class="flex justify-end space-x-2 mt-6">
        <ShadcnButton reset @click="resetForm" :dark="darkMode">
          Reset
        </ShadcnButton>
        <ShadcnButton submit :dark="darkMode">
          Submit
        </ShadcnButton>
      </div>
    </ShadcnForm>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)


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

## 液态玻璃效果 (Glass)

::: raw

<CodeRunner title="液态玻璃效果 (Glass)">
    <div class="p-6 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400">
      <div class="p-8 rounded-lg bg-white/50">
        <ShadcnForm v-model="glassFormData" glass :dark="darkMode" @on-submit="onGlassSubmit">
          <ShadcnFormItem label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]" :dark="darkMode">
            <ShadcnInput v-model="glassFormData.username" placeholder="请输入用户名" glass :dark="darkMode" />
          </ShadcnFormItem>
          <ShadcnFormItem label="邮箱" name="email" :rules="[{ required: true, message: '请输入邮箱' }, { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '请输入正确的邮箱格式' }]" :dark="darkMode">
            <ShadcnInput v-model="glassFormData.email" placeholder="请输入邮箱" glass :dark="darkMode" />
          </ShadcnFormItem>
          <ShadcnFormItem label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }, { min: 6, message: '密码长度至少6位' }]" :dark="darkMode">
            <ShadcnInput v-model="glassFormData.password" type="password" placeholder="请输入密码" glass :dark="darkMode" />
          </ShadcnFormItem>
          <ShadcnButton type="submit" glass :dark="darkMode">提交</ShadcnButton>
        </ShadcnForm>
      </div>
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="p-6 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400">
    <div class="p-8 rounded-lg bg-white/50">
      <ShadcnForm v-model="glassFormData" glass :dark="darkMode" @on-submit="onGlassSubmit">
        <ShadcnFormItem label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]" :dark="darkMode">
          <ShadcnInput v-model="glassFormData.username" placeholder="请输入用户名" glass :dark="darkMode" />
        </ShadcnFormItem>
        <ShadcnFormItem label="邮箱" name="email" :rules="[{ required: true, message: '请输入邮箱' }, { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '请输入正确的邮箱格式' }]" :dark="darkMode">
          <ShadcnInput v-model="glassFormData.email" placeholder="请输入邮箱" glass :dark="darkMode" />
        </ShadcnFormItem>
        <ShadcnFormItem label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }, { min: 6, message: '密码长度至少6位' }]" :dark="darkMode">
          <ShadcnInput v-model="glassFormData.password" type="password" placeholder="请输入密码" glass :dark="darkMode" />
        </ShadcnFormItem>
        <ShadcnButton type="submit" glass :dark="darkMode">提交</ShadcnButton>
      </ShadcnForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, ref } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const glassFormData = ref({
  username: '',
  email: '',
  password: ''
})

const onGlassSubmit = (data: any) => {
  console.log('提交数据:', data)
}
</script>
```

:::

## 动态表单 (dynamic)

::: raw

<CodeRunner title="动态表单 (dynamic)">
    <ShadcnButton @click="onAdd" :dark="darkMode">Add Column</ShadcnButton>
    <ShadcnForm v-model="formState" class="mt-2" @on-submit="onSubmit2" :dark="darkMode">
      <ShadcnFormItem v-for="(item, index) in formState.columns"
                      :name="`columns[${index}].name`"
                      :key="`column-${index}`"
                      :label="`Column ${index + 1}`"
                      :rules="[{ required: true, message: 'Please input column name!' }]" :dark="darkMode">
        <ShadcnSpace class="items-center" :dark="darkMode">
          <ShadcnInput v-model="formState.columns[index].name" :name="`columns[${index}].name`" :dark="darkMode" />
          <ShadcnIcon icon="MinusCircle" class="cursor-pointer" color="#f43f5e" @click="onRemove(index)" :dark="darkMode" />
        </ShadcnSpace>
      </ShadcnFormItem>
      <ShadcnButton submit :dark="darkMode">Submit</ShadcnButton>
    </ShadcnForm>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="p-32">
    <ShadcnButton @click="onAdd" :dark="darkMode">Add Column</ShadcnButton>

    <ShadcnForm v-model="formState" class="mt-2" @on-submit="onSubmit" :dark="darkMode">
      <ShadcnFormItem v-for="(item, index) in formState.columns"
                      :name="`columns[${index}].name`"
                      :key="`column-${index}`"
                      :label="`Column ${index + 1}`"
                      :rules="[{ required: true, message: 'Please input column name!' }]" :dark="darkMode">
        <ShadcnSpace class="items-center" :dark="darkMode">
          <ShadcnInput v-model="formState.columns[index].name" :name="`column-${index}`" :dark="darkMode" />
          <ShadcnIcon icon="MinusCircle" class="cursor-pointer" color="#f43f5e" @click="onRemove(index)" :dark="darkMode" />
        </ShadcnSpace>
      </ShadcnFormItem>

      <ShadcnButton submit :dark="darkMode">Submit</ShadcnButton>
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

## 表单 (Form) 属性

<ApiTable title="表单 (Form) 属性"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['modelValue', '当前组件的值', 'any', '-', '-', '-'],
        ['dark', '是否为暗黑模式', 'boolean', 'false', '-', '-'],
        ['glass', '是否启用液态玻璃效果', 'boolean', 'false', '-', '-'],
    ]">
</ApiTable>

## 表单项 (Form Item) 属性

<ApiTable title="表单项 (Form Item) 属性"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['name', '表单项的名称', 'string', '-', '-', '-'],
        ['label', '表单项的标签', 'string', '-', '-', '-'],
        ['description', '表单项的描述', 'string', '-', '-', '-'],
        ['rules', '表单项的验证规则', 'array', '-', '-', '-'],
        ['validateOnBlur', '是否在失去焦点时进行验证', 'boolean', 'true', '-', '-'],
    ]">
</ApiTable>

## 表单 (Form) 事件

<ApiTable title="表单 (Form) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-submit', '当表单提交时触发', 'object'],
        ['on-error', '当表单验证失败时触发', 'object'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from 'vue'
import { useData } from 'vitepress' 
import { computed } from 'vue' 
const { isDark } = useData()
const darkMode = computed(() => isDark.value)

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

const glassFormData = ref({
  username: '',
  email: '',
  password: ''
})

const onGlassSubmit = (data: any) => {
  console.log('提交数据:', data)
}
</script>