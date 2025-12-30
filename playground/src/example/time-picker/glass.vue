<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 浅色模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400">
        <div class="space-y-4">
          <ShadcnTimePicker v-model="time1" glass />
          <ShadcnTimePicker v-model="time2" glass format="HH:mm:ss" />
          <ShadcnTimePicker v-model="time3" glass :quickTimes="['09:00', '12:00', '18:00']" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 暗黑模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-indigo-900 to-purple-900">
        <div class="space-y-4">
          <ShadcnTimePicker v-model="time4" glass dark />
          <ShadcnTimePicker v-model="time5" glass dark format="HH:mm:ss" />
          <ShadcnTimePicker v-model="time6" glass dark :quickTimes="['09:00', '12:00', '18:00']" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">12小时格式 - 液态玻璃</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-pink-400 to-rose-400">
        <div class="space-y-4">
          <ShadcnTimePicker v-model="time7" glass format="hh:mm A" />
          <ShadcnTimePicker v-model="time8" glass format="hh:mm:ss A" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">带快捷时间 - 液态玻璃</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-green-400 to-teal-400">
        <ShadcnTimePicker v-model="time9" glass :quickTimes="['08:00', '10:00', '12:00', '14:00', '16:00', '18:00']" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnTimePicker } from '@/ui/time-picker'

const time1 = ref('09:00')
const time2 = ref('12:30:45')
const time3 = ref('14:00')
const time4 = ref('10:30')
const time5 = ref('15:45:30')
const time6 = ref('18:00')
const time7 = ref('02:30 PM')
const time8 = ref('03:45:30 PM')
const time9 = ref('10:00')
</script>
