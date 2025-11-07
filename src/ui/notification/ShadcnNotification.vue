<template>
  <div class="relative inline-block">
    <!-- 触发器部分 -->
    <div class="w-fit h-fit" @click.stop="toggleNotification" v-if="trigger" ref="triggerEl">
      <slot name="trigger">
        <ShadcnButton size="small" circle type="text">
          <Icon class="hover:cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12 hover:text-primary"
                      icon="Bell"
                      size="20">
          </Icon>
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
      <div v-if="(!trigger && true) || (trigger && isOpen)"
           :class="[
             'z-50',
             { 'fixed': hasFixedPosition, 'static': !hasFixedPosition }
           ]"
           v-click-outside="closeNotification"
           @click.stop
           :style="getPopoverStyle">
        <div class="w-full overflow-hidden overflow-x-auto overflow-y-auto bg-white dark:bg-gray-950 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
             :style="{height: calcSize(height), maxHeight: calcSize(height)}"
             @scroll="handleScroll">
          <!-- Header -->
          <div class="px-3 py-2 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <h3 class="text-base font-medium text-gray-900 dark:text-gray-100">{{ t('notification.text.title') }}</h3>
            <slot name="actions">
              <div class="flex gap-2">
                <ShadcnButton @click.stop="handleReadAll">{{ t('notification.text.markAllAsRead') }}</ShadcnButton>
                <ShadcnButton type="error" @click.stop="handleClearAll">{{ t('notification.text.clearAll') }}</ShadcnButton>
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

          <!-- 加载状态 -->
          <div v-if="loading" class="py-2 text-center text-gray-500">
            <ShadcnSpin type="primary" :model-value="loading"/>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import { NotificationEmits, NotificationProps } from './types'
import ShadcnNotificationEmpty from './ShadcnNotificationEmpty.vue'
import ShadcnSpin from '@/ui/spin/ShadcnSpin.vue'
import { t } from '@/utils/locale'
import ClickOutside from '@/directives/v-click-outside'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<NotificationProps>(), {
  trigger: true,
  width: '30%',
  height: 'auto',
  position: 'right',
  loadData: undefined
})

const emit = defineEmits<NotificationEmits>()

// 控制通知面板的显示状态
const isOpen = ref(false)
const triggerEl = ref<HTMLElement | null>(null)
const panelWidth = ref(0)
const loading = ref(false)

// 计算是否应该使用fixed定位
const hasFixedPosition = computed(() => {
  // 在触发模式下且打开状态，或者当没有触发器时，使用正常的fixed定位
  return (props.trigger && isOpen.value && triggerEl.value) ||
      (!props.trigger && false) // 非触发模式下不使用fixed定位
})

// 挂载后测量通知面板宽度
onMounted(() => {
  if (triggerEl.value) {
    updatePanelWidth()
  }
})

// 当宽度属性变化时更新测量
watch(() => props.width, () => {
  updatePanelWidth()
})

// 测量和更新面板宽度
const updatePanelWidth = () => {
  // 使用setTimeout确保在下一个DOM更新周期执行
  setTimeout(() => {
    // 创建一个临时元素来测量宽度
    const tempDiv = document.createElement('div')
    tempDiv.style.position = 'absolute'
    tempDiv.style.visibility = 'hidden'
    tempDiv.style.width = calcSize(props.width)
    document.body.appendChild(tempDiv)
    panelWidth.value = tempDiv.offsetWidth
    document.body.removeChild(tempDiv)
  }, 0)
}

// 获取弹出层样式
const getPopoverStyle = computed(() => {
  const baseStyle = {
    width: calcSize(props.width)
  }

  // 非触发模式下或未打开状态或没有触发器元素引用时，返回基本样式
  if (!hasFixedPosition.value) {
    return baseStyle
  }

  const rect = triggerEl.value!.getBoundingClientRect()
  const width = panelWidth.value || 300 // 使用测量的宽度，或回退到默认值

  if (props.position === 'left') {
    // 触发器左侧和内容框的左侧对齐
    return {
      ...baseStyle,
      top: calcSize(rect.bottom),
      left: calcSize(rect.left)
    }
  }
  else if (props.position === 'center') {
    // 触发器中心和内容框的中心对齐
    return {
      ...baseStyle,
      top: calcSize(rect.bottom),
      left: calcSize(rect.left + (rect.width / 2) - (width / 2))
    }
  }
  else { // position === 'right'
    // 触发器右侧和内容框的右侧对齐
    return {
      ...baseStyle,
      top: calcSize(rect.bottom),
      left: calcSize(rect.right - width)
    }
  }
})

// 检查是否达到底部
const isBottom = (el: HTMLElement) => {
  const { scrollHeight, scrollTop, clientHeight } = el
  return scrollHeight <= Math.ceil(scrollTop + clientHeight) + 5 // 添加5px的容差
}

// 处理滚动事件
const handleScroll = (e: Event) => {
  e.stopPropagation()

  if (loading.value || !props.loadData) {
    return
  }

  const target = e.target as HTMLElement
  if (isBottom(target)) {
    loadMoreData()
  }
}

// 加载更多数据
const loadMoreData = () => {
  if (!props.loadData || loading.value) {
    return
  }

  loading.value = true
  emit('on-load-data')

  // 调用加载数据函数
  props.loadData(() => {
    loading.value = false
    // 这里不需要处理数据，因为数据的处理应该在父组件中进行
    // 父组件应该监听on-load-data事件，并更新自己的数据
  })
}

// 切换通知面板显示状态
const toggleNotification = (event) => {
  // 确保我们有触发元素的引用
  if (event && event.currentTarget) {
    triggerEl.value = event.currentTarget
  }
  isOpen.value = !isOpen.value

  // 当打开面板时更新宽度测量
  if (isOpen.value) {
    updatePanelWidth()
  }

  // 阻止事件冒泡
  event?.stopPropagation()

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