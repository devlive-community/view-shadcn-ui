<template>
  <div :class="['min-h-screen px-6 pb-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark" class="mt-2">
      切换暗黑模式
    </ShadcnButton>

    <div class="mt-6">
      <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-white' : 'text-gray-900']">Form 液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400">
        <div class="p-8 rounded-lg bg-white/50">
          <ShadcnForm v-model="formData" glass :dark="isDark" @on-submit="handleSubmit">
            <ShadcnFormItem label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]">
              <ShadcnInput v-model="formData.username" placeholder="请输入用户名" glass :dark="isDark" />
            </ShadcnFormItem>
            <ShadcnFormItem label="邮箱" name="email" :rules="[{ required: true, message: '请输入邮箱' }, { type: 'email', message: '请输入正确的邮箱格式' }]">
              <ShadcnInput v-model="formData.email" placeholder="请输入邮箱" glass :dark="isDark" />
            </ShadcnFormItem>
            <ShadcnFormItem label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }, { min: 6, message: '密码长度至少6位' }]">
              <ShadcnInput v-model="formData.password" type="password" placeholder="请输入密码" glass :dark="isDark" />
            </ShadcnFormItem>
            <ShadcnButton type="submit" glass :dark="isDark">提交</ShadcnButton>
          </ShadcnForm>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button"
import { ShadcnForm, ShadcnFormItem } from "@/ui/form"
import { ShadcnInput } from "@/ui/input"

const isDark = ref(false)
const formData = ref({
  username: '',
  email: '',
  password: ''
})

const handleSubmit = (data: any) => {
  console.log('提交数据:', data)
}
</script>
