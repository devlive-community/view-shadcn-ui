<template>
  <div class="space-y-4 p-12">
    <div class="flex items-center gap-4">
      <label class="w-24">24-hour:</label>
      <ShadcnTimePicker v-model="time1"
                        format="HH:mm"
                        :quick-times="['09:00', '12:00', '18:00']"/>
      <span>Value: {{ time1 }}</span>
    </div>

    <div class="flex items-center gap-4">
      <label class="w-24">24-hour with seconds:</label>
      <ShadcnTimePicker v-model="time2"
                        format="HH:mm:ss"
                        :quick-times="['09:00:00', '12:00:00', '18:00:00']"/>
      <span>Value: {{ time2 }}</span>
    </div>

    <div class="flex items-center gap-4">
      <label class="w-24">12-hour:</label>
      <ShadcnTimePicker v-model="time3"
                        format="hh:mm A"
                        :quick-times="['09:00 AM', '12:00 PM', '06:00 PM']"/>
      <span>Value: {{ time3 }}</span>
    </div>

    <div class="flex items-center gap-4">
      <label class="w-24">12-hour with seconds:</label>
      <ShadcnTimePicker v-model="time4"
                        format="hh:mm:ss A"
                        :quick-times="['09:00:00 AM', '12:00:00 PM', '06:00:00 PM']"/>
      <span>Value: {{ time4 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const time1 = ref('')
const time2 = ref('')
const time3 = ref('')
const time4 = ref('')
</script>