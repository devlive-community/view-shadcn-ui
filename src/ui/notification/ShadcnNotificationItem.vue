<template>
  <div :class="{ 'bg-gray-50 dark:bg-gray-800/30': !item.read }"
       class="flex p-4 border-b border-gray-100 dark:border-gray-800 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
       @click="handleItemClick">
    <!-- Icon Section -->
    <div class="flex-shrink-0 mr-4">
      <div class="h-10 w-10 rounded-full flex items-center justify-center">
        <slot name="icon">
          {{ item.icon }}
        </slot>
      </div>
    </div>

    <!-- Content Section -->
    <div class="flex-1 min-w-0">
      <div class="flex justify-between items-start">
        <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{{ item.title }}</h4>
        <span v-if="item.time" class="text-xs text-gray-500 dark:text-gray-400 ml-2">{{ item.time }}</span>
      </div>
      <p v-if="item.description" class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ item.description }}</p>

      <!-- Action Button -->
      <div v-if="$slots.actions" class="mt-2">
        <slot name="actions"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NotificationItem, NotificationItemEmits } from './types'

const props = defineProps<{
  item: NotificationItem
}>()

const emit = defineEmits<NotificationItemEmits>()

// Handle item click
// 处理项目点击
const handleItemClick = () => {
  emit('on-click', props.item)
}
</script>