<template>
  <div class="p-6">
    <ShadcnForm v-model="formState">
      <ShadcnFormItem name="ip" label="IP 地址" :rules="[{ required: true, message: '请输入IP地址' }]">
        <ShadcnIPInput v-model="formState.ip" name="ip"/>
      </ShadcnFormItem>
    </ShadcnForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formState = ref({ ip: null })
</script>