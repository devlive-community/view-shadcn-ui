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
        <ShadcnInput v-model="formData.username" />
      </ShadcnFormItem>
      <ShadcnFormItem name="email"
                      label="Email"
                      :rules="[
                        { required: true, message: 'Please input email!' },
                        { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email!' }
                      ]">
        <ShadcnInput v-model="formData.email" />
      </ShadcnFormItem>
      <ShadcnFormItem name="password"
                      label="Password"
                      :rules="[
                        { required: true, message: 'Please input password!' },
                        { min: 6, message: 'Password must be at least 6 characters' }
                      ]">
        <ShadcnInput type="password" v-model="formData.password" />
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
  password: ''
})

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
