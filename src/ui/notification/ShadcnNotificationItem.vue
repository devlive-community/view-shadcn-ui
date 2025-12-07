<template>
  <div :class="[
         !item.read ? (item.dark ? 'bg-gray-700/30' : 'bg-gray-50') : '',
         item.dark ? 'border-gray-600 hover:bg-gray-700/50' : 'border-gray-100 hover:bg-gray-50',
         'flex p-4 border-b cursor-pointer transition-colors'
       ]"
       @click="handleItemClick">
    <!-- Icon Section -->
    <div v-if="item?.icon || $slots.icon" class="flex-shrink-0 mr-4">
      <div class="h-10 w-10 rounded-full flex items-center justify-center">
        <slot name="icon">
          {{ item.icon }}
        </slot>
      </div>
    </div>

    <!-- Content Section -->
    <div class="flex-1 min-w-0">
      <div class="flex justify-between items-start">
        <!-- Title Slot with fallback -->
        <h4 :class="item.dark ? 'text-gray-200' : 'text-gray-900'"
            class="text-sm font-medium truncate">
          <slot name="title">
            {{ item.title }}
          </slot>
        </h4>

        <!-- Time Slot with fallback -->
        <span v-if="item.time || $slots.time" :class="item.dark ? 'text-gray-400' : 'text-gray-500'"
              class="text-xs ml-2">
          <slot name="time">
            {{ item.time }}
          </slot>
        </span>
      </div>

      <!-- Description Slot with fallback -->
      <p v-if="item.description || $slots.description" :class="item.dark ? 'text-gray-400' : 'text-gray-500'"
         class="text-sm mt-1">
        <slot name="description">
          {{ item.description }}
        </slot>
      </p>

      <!-- Action Button -->
      <div v-if="$slots.actions" class="mt-2">
        <slot name="actions"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NotificationItemEmits, NotificationItemProps } from './types'

const props = defineProps<{
  item: NotificationItemProps
}>()

const emit = defineEmits<NotificationItemEmits>()

// Handle item click
// 处理项目点击
const handleItemClick = () => {
  emit('on-click', props.item)
}
</script>