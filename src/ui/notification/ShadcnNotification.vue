<template>
  <div class="relative">
    <!-- 触发器部分 -->
    <div class="w-fit h-fit" @click.stop="toggleNotification" v-if="trigger">
      <slot name="trigger">
        <ShadcnButton size="small" circle type="text">
          <ShadcnIcon class="hover:cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12 hover:text-primary"
                      icon="Bell"
                      size="20">
          </ShadcnIcon>
        </ShadcnButton>
      </slot>
    </div>

    <!-- 通知面板部分 -->
    <Transition enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 scale-95 -translate-y-2"
                enter-to-class="opacity-100 scale-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95">
      <div v-if="!trigger || (trigger && isOpen)"
           :class="[{'absolute z-10': trigger}, 'mt-2 origin-top-right']"
           v-click-outside="closeNotification"
           :style="{width: calcSize(width)}">
        <div class="w-full overflow-hidden overflow-x-auto overflow-y-auto bg-white dark:bg-gray-950 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
             :style="{height: calcSize(height), maxHeight: calcSize(height)}">
          <!-- Header -->
          <div class="px-3 py-2 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <h3 class="text-base font-medium text-gray-900 dark:text-gray-100">{{ t('notification.text.title') }}</h3>
            <slot name="actions">
              <div class="flex gap-2">
                <ShadcnButton @click="handleReadAll">{{ t('notification.text.markAllAsRead') }}</ShadcnButton>
                <ShadcnButton type="error" @click="handleClearAll">{{ t('notification.text.clearAll') }}</ShadcnButton>
              </div>
            </slot>
          </div>

          <!-- Content -->
          <div>
            <slot>
              <!-- 默认内容，当没有提供插槽内容时显示 -->
              <!-- Default content, displayed when no slot content is provided -->
              <slot name="empty">
                <ShadcnNotificationEmpty/>
              </slot>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NotificationEmits, NotificationProps } from './types'
import ShadcnNotificationEmpty from './ShadcnNotificationEmpty.vue'
import { t } from '@/utils/locale'
import ClickOutside from '@/directives/v-click-outside'
import { calcSize } from '@/utils/common.ts'

withDefaults(defineProps<NotificationProps>(), {
  trigger: false,
  width: '30%',
  height: 'auto'
})

const emit = defineEmits<NotificationEmits>()

// 控制通知面板的显示状态
const isOpen = ref(false)

// 切换通知面板显示状态
const toggleNotification = () => {
  isOpen.value = !isOpen.value
  emit('on-toggle', isOpen.value)
}

// 关闭通知面板
const closeNotification = () => {
  if (isOpen.value) {
    isOpen.value = false
    emit('on-toggle', isOpen.value)
  }
}

// Handle read all
// 处理全部已读
const handleReadAll = () => {
  emit('on-read-all')
}

// Handle clear all
// 处理清空全部
const handleClearAll = () => {
  emit('on-clear-all')
}

// 注册点击外部指令
const vClickOutside = ClickOutside
</script>