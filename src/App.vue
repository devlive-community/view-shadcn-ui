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

      <ShadcnFormItem name="roles"
                      label="Role"
                      :rules="[
                          { required: true, message: 'Please select a role!' },
                          { max: 2, message: 'Maximum number of roles is 2' }
                      ]">
        <ShadcnCheckboxGroup v-model="formData.roles" name="roles">
          <ShadcnCheckbox v-for="item in data" :value="item">{{ item }}</ShadcnCheckbox>
        </ShadcnCheckboxGroup>
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

const data = ref(['Admin', 'User', 'Guest'])

const formRef = ref()

const formData = ref({
  username: null,
  roles: ['Admin']
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
