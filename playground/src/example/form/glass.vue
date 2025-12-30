<template>
  <div class="space-y-6">
    <div class="relative">
      <div class="p-6 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400">
        <div class="p-8 rounded-lg bg-white/50">
          <ShadcnForm v-model="formData" glass @on-submit="handleSubmit">
            <ShadcnFormItem label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]">
              <ShadcnInput v-model="formData.username" placeholder="请输入用户名" glass />
            </ShadcnFormItem>
            <ShadcnFormItem label="邮箱" name="email" :rules="[{ required: true, message: '请输入邮箱' }, { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '请输入正确的邮箱格式' }]">
              <ShadcnInput v-model="formData.email" placeholder="请输入邮箱" glass />
            </ShadcnFormItem>
            <ShadcnFormItem label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }, { min: 6, message: '密码长度至少6位' }]">
              <ShadcnInput v-model="formData.password" type="password" placeholder="请输入密码" glass />
            </ShadcnFormItem>
            <ShadcnButton type="submit" glass>提交</ShadcnButton>
          </ShadcnForm>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="p-6 rounded-lg bg-gradient-to-r from-pink-400 to-rose-400">
        <div class="p-8 rounded-lg bg-white/50">
          <ShadcnForm v-model="formData2" glass @on-submit="handleSubmit2">
            <ShadcnFormItem label="姓名" name="name" :rules="[{ required: true, message: '请输入姓名' }]">
              <ShadcnInput v-model="formData2.name" placeholder="请输入姓名" glass />
            </ShadcnFormItem>
            <ShadcnFormItem label="电话" name="phone" :rules="[{ required: true, message: '请输入电话' }, { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' }]">
              <ShadcnInput v-model="formData2.phone" placeholder="请输入电话" glass />
            </ShadcnFormItem>
            <ShadcnFormItem label="地址" name="address" :rules="[{ required: true, message: '请输入地址' }]">
              <ShadcnInput v-model="formData2.address" placeholder="请输入地址" glass />
            </ShadcnFormItem>
            <ShadcnButton type="submit" glass>提交</ShadcnButton>
          </ShadcnForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  username: '',
  email: '',
  password: ''
})

const formData2 = ref({
  name: '',
  phone: '',
  address: ''
})

const handleSubmit = (data: any) => {
  console.log('提交数据1:', data)
}

const handleSubmit2 = (data: any) => {
  console.log('提交数据2:', data)
}
</script>
