<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">基础用法</h3>
      <ShadcnTimePicker v-model="time1" />
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">不同格式</h3>
      <div class="space-y-4">
        <ShadcnTimePicker v-model="time2" format="HH:mm" />
        <ShadcnTimePicker v-model="time3" format="HH:mm:ss" />
        <ShadcnTimePicker v-model="time4" format="hh:mm A" />
        <ShadcnTimePicker v-model="time5" format="hh:mm:ss A" />
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">快捷时间</h3>
      <ShadcnTimePicker v-model="time6" :quickTimes="['09:00', '12:00', '18:00']" />
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">禁用状态</h3>
      <ShadcnTimePicker v-model="time7" disabled />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnTimePicker } from '@/ui/time-picker'

const time1 = ref('09:00')
const time2 = ref('10:30')
const time3 = ref('12:30:45')
const time4 = ref('02:30 PM')
const time5 = ref('03:45:30 PM')
const time6 = ref('14:00')
const time7 = ref('15:00')
</script>
