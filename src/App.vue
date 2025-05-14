<template>
  <div class="p-6">
    <div class="space-y-4">
      <div>
        <div class="text-sm text-gray-500 mb-1">默认格式:</div>
        <ShadcnTime/>
      </div>

      <div>
        <p class="text-sm text-gray-500 mb-1">自定义格式 (仅时分):</p>
        <ShadcnTime format="HH:mm"/>
      </div>

      <div>
        <p class="text-sm text-gray-500 mb-1">12小时制:</p>
        <ShadcnTime format="hh:mm:ss A"/>
      </div>

      <div>
        <p class="text-sm text-gray-500 mb-1">带日期:</p>
        <ShadcnTime format="YYYY-MM-DD HH:mm:ss"/>
      </div>

      <div v-if="lastChangeTime">
        <p class="text-sm text-gray-500 mb-1">上次时间变化:</p>
        <div class="text-sm">{{ lastChangeTime }}</div>
      </div>
      <div>
        <p class="text-sm text-gray-500 mb-1">相对于现在:</p>
        <ShadcnTime relative/>
      </div>

      <div>
        <p class="text-sm text-gray-500 mb-1">相对于过去时间 (10分钟前):
          <ShadcnTime relative :reference-time="tenMinutesAgo"/>
        </p>
        <p class="text-sm text-gray-500 mb-1">相对于未来时间 (一小时后):
          <ShadcnTime relative :reference-time="oneHourLater"/>
        </p>
        <p class="text-sm text-gray-500 mb-1">自定义更新间隔 (5秒):
          <ShadcnTime relative :interval="5000" @on-change="handleIntervalChange"/>
          <div v-if="lastIntervalChange">
            上次更新: {{ lastIntervalChange }}
          </div>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const lastChangeTime = ref('')
const lastIntervalChange = ref('')

const tenMinutesAgo = computed(() => {
  const date = new Date()
  date.setMinutes(date.getMinutes() - 10)
  return date
})

const oneHourLater = computed(() => {
  const date = new Date()
  date.setHours(date.getHours() + 1)
  return date
})

const handleIntervalChange = (time: Date) => {
  lastIntervalChange.value = new Date(time).toLocaleTimeString()
}
</script>