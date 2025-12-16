<template>
  <div class="flex flex-col gap-4">
    <ShadcnNumber v-model="numberValue1" placeholder="请输入数字" />
    <ShadcnNumber v-model="numberValue2" type="success" :min="0" :max="100" placeholder="范围 0-100" />
    <ShadcnNumber v-model="numberValue3" type="warning" clearable placeholder="可清除" />
    <ShadcnNumber v-model="numberValue4" type="error" :formatter="formatter" :parser="parser" placeholder="格式化显示" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const numberValue1 = ref(10)
const numberValue2 = ref(50)
const numberValue3 = ref(20)
const numberValue4 = ref(1000)

const formatter = (value: number) => `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
const parser = (value: string) => Number(value.replace(/¥\s?|(,*)/g, ''))
</script>
