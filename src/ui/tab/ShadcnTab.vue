<template>
  <div class="w-full flex"
       :class="{
         'flex-row': direction === 'vertical' && position !== 'right',
         'flex-row-reverse': direction === 'vertical' && position === 'right',
         'flex-col': direction !== 'vertical'
       }">
    <div :class="[
          direction !== 'vertical' ? '' : '',
          direction === 'vertical' ? (dark ? 'border-b-0 border-r border-gray-600 flex-col' : 'border-b-0 border-r border-slate-200 flex-col') : 'flex justify-between'
        ]"
         :style="{ width: direction === 'vertical' ? 'auto' : '100%' }">
      <div :class="direction === 'vertical' ? 'h-full' : 'w-full'" class="relative">
        <!-- Scroll buttons -->
        <button v-if="showScrollButtons && canScrollPrev"
                :class="[
                  direction === 'vertical' ? 'top-0 left-1/2 -translate-x-1/2 rotate-90' : 'left-0',
                  dark ? 'bg-gray-800/80' : 'bg-white/80'
                ]"
                class="absolute z-10 flex items-center justify-center w-8 h-full shadow-sm"
                @click="scroll('prev')">
          <ShadcnIcon class="h-4 w-4" icon="ChevronLeft"/>
        </button>

        <div ref="scrollContainer"
             :class="direction === 'vertical' ? 'h-full' : 'w-full'"
             class="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div ref="tabsWrapper"
               :class="[
                 direction === 'vertical' ? 'flex flex-col' : line ? 'flex inline-flex' : (dark ? 'flex bg-gray-700 p-1 rounded-lg inline-flex' : 'flex bg-slate-100 p-1 rounded-lg inline-flex'),
                 'transition-transform duration-300 ease-in-out'
               ]"
               :style="scrollStyle">
            <div v-for="tab in tabs"
                 :key="tab.value"
                 :class="[
                    'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all cursor-pointer',
                    direction === 'vertical' ? 'py-2 px-2' : line ? 'px-3 py-1.5' : 'px-3 py-1.5 rounded-md',
                    direction === 'horizontal' ? [TabSize[size]] : '',
                    dark && activeTab !== tab.value && !tab.disabled ? 'text-gray-300' : '',
                    {
                      'cursor-pointer shadow-sm': activeTab === tab.value && !tab.disabled && direction !== 'vertical' && !line,
                      'bg-white': activeTab === tab.value && !tab.disabled && direction !== 'vertical' && !line && !dark,
                      'bg-gray-800': activeTab === tab.value && !tab.disabled && direction !== 'vertical' && !line && dark,
                      'border-b-2 cursor-pointer -mb-px': activeTab === tab.value && !tab.disabled && direction !== 'vertical' && line,
                      [BorderType[type]]: activeTab === tab.value && !tab.disabled && (direction === 'vertical' || line),
                      'border-r-2 cursor-pointer': activeTab === tab.value && !tab.disabled && direction === 'vertical',
                      [TextType[type]]: activeTab === tab.value && !tab.disabled,
                      'hover:text-slate-900': activeTab !== tab.value && !tab.disabled && direction !== 'vertical' && !dark,
                      'hover:text-gray-200': activeTab !== tab.value && !tab.disabled && direction !== 'vertical' && dark,
                      'text-gray-600 hover:border-r-2 hover:cursor-pointer': activeTab !== tab.value && !tab.disabled && direction === 'vertical' && !dark,
                      'text-gray-300 hover:border-r-2 hover:cursor-pointer': activeTab !== tab.value && !tab.disabled && direction === 'vertical' && dark,
                      [HoverTextType[type]]: activeTab !== tab.value && !tab.disabled,
                      [HoverType[type]]: activeTab !== tab.value && !tab.disabled && direction === 'vertical',
                      'text-gray-400 cursor-not-allowed opacity-50': tab.disabled
                    }
                 ]"
                 @click="handleTabClick($event, tab)">
              <div :class="['flex items-center',
                        direction === 'vertical' ? 'space-y-1' : 'space-x-2',
                    ]"
                   :style="direction === 'vertical' ? {
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      height: 'auto',
                      alignItems: 'center',
                    } : {}">
                <ShadcnIcon v-if="tab.icon" :icon="tab.icon" size="16"/>
                <div class="whitespace-nowrap">
                  <component :is="tab.labelSlot" v-if="tab.labelSlot"/>
                  <template v-else>{{ tab.label }}</template>
                </div>
                <ShadcnIcon v-if="closable && !tab.disabled"
                            class="justify-center items-center opacity-70 hover:opacity-100"
                            icon="CircleX"
                            size="14"
                            @click.stop="onTabRemove(tab.value)"/>
              </div>
            </div>
          </div>
        </div>

        <button v-if="showScrollButtons && canScrollNext"
                :class="[
                  direction === 'vertical' ? 'bottom-0 left-1/2 -translate-x-1/2 rotate-90' : 'right-0 top-0',
                  dark ? 'bg-gray-800/80' : 'bg-white/80'
                ]"
                class="absolute z-10 flex items-center justify-center w-8 h-full shadow-sm"
                @click="scroll('next')">
          <ShadcnIcon class="h-4 w-4" icon="ChevronRight"/>
        </button>
      </div>

      <div v-if="$slots.extra"
           :class="['flex items-center ml-auto',
                    direction === 'vertical' ? 'mt-2' : '',
            ]">
        <slot name="extra"/>
      </div>
    </div>

    <div :class="[
          line ? 'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2' : 'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          direction === 'vertical' && position === 'right' ? 'mr-4 flex-1' : '',
          direction === 'vertical' && position !== 'right' ? 'ml-4 flex-1' : '',
          direction !== 'vertical' ? 'py-2' : ''
        ]">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, provide, ref, watch, watchEffect } from 'vue'
import { BorderType, HoverTextType, HoverType, TextType } from '@/ui/common/type.ts'
import { TabSize } from '@/ui/common/size.ts'
import { ShadcnIcon } from '@/ui/icon'
import { TabEmits, TabProps } from '@/ui/tab/types.ts'

interface Tab
{
  label: string
  value: string
  disabled?: boolean
  icon?: string
  labelSlot?: () => any
  onClick?: (e: MouseEvent) => void
}

const emit = defineEmits<TabEmits>()

const props = withDefaults(defineProps<TabProps>(), {
  type: 'primary',
  size: 'default',
  line: false,
  closable: false,
  position: 'left',
  direction: 'horizontal',
  showScrollButtons: true,
  dark: false
})

const activeTab = ref('')
const tabs = ref<Tab[]>([])
const scrollContainer = ref<HTMLElement | null>(null)
const tabsWrapper = ref<HTMLElement | null>(null)
const scrollPosition = ref(0)
const canScrollPrev = ref(false)
const canScrollNext = ref(false)
const scrollStyle = ref({})

const updateScrollButtons = () => {
  if (!scrollContainer.value || !tabsWrapper.value) {
    return
  }

  const container = scrollContainer.value
  const wrapper = tabsWrapper.value

  if (props.direction === 'vertical') {
    canScrollPrev.value = container.scrollTop > 0
    canScrollNext.value = wrapper.offsetHeight - container.offsetHeight > container.scrollTop
  }
  else {
    canScrollPrev.value = container.scrollLeft > 0
    canScrollNext.value = wrapper.offsetWidth - container.offsetWidth > container.scrollLeft
  }
}

const handleScroll = () => {
  if (scrollContainer.value) {
    if (props.direction === 'vertical') {
      scrollPosition.value = scrollContainer.value.scrollTop
    }
    else {
      scrollPosition.value = scrollContainer.value.scrollLeft
    }
    updateScrollButtons()
  }
}

const scroll = (direction: 'prev' | 'next') => {
  if (!scrollContainer.value || !tabsWrapper.value) {
    return
  }

  const container = scrollContainer.value
  const scrollSize = props.direction === 'vertical' ? container.offsetHeight : container.offsetWidth
  const scrollDelta = scrollSize * 0.8

  if (props.direction === 'vertical') {
    container.scrollBy({
      top: direction === 'prev' ? -scrollDelta : scrollDelta,
      behavior: 'smooth'
    })
  }
  else {
    container.scrollBy({
      left: direction === 'prev' ? -scrollDelta : scrollDelta,
      behavior: 'smooth'
    })
  }

  updateScrollButtons()
}

const handleTabClick = (e: MouseEvent, tab: Tab) => {
  if (!tab.disabled) {
    tab.onClick?.(e)
    setActiveTab(tab.value)
  }
}

const setActiveTab = (value: string) => {
  if (activeTab.value !== value) {
    activeTab.value = value
    emit('update:modelValue', value)
    emit('on-change', value)

    // Scroll to make active tab visible
    nextTick(() => {
      const activeTabElement = tabsWrapper.value?.querySelector(`[data-value="${ value }"]`) as HTMLElement
      if (activeTabElement && scrollContainer.value) {
        const containerRect = scrollContainer.value.getBoundingClientRect()
        const tabRect = activeTabElement.getBoundingClientRect()

        if (props.direction === 'vertical') {
          if (tabRect.top < containerRect.top) {
            scroll('prev')
          }
          else if (tabRect.bottom > containerRect.bottom) {
            scroll('next')
          }
        }
        else {
          if (tabRect.left < containerRect.left) {
            scroll('prev')
          }
          else if (tabRect.right > containerRect.right) {
            scroll('next')
          }
        }
      }
    })
  }
}

const registerTab = (
    label: string,
    value: string,
    disabled: boolean = false,
    icon?: string,
    labelSlot?: () => any,
    onClick?: (e: MouseEvent) => void
) => {
  if (!value) {
    console.warn('Tab value must be a non-empty string')
    return
  }

  const existingTab = tabs.value.find(tab => tab.value === value)
  if (existingTab) {
    console.warn(`Tab with value "${ value }" already exists`)
    return
  }

  tabs.value.push({ label, value, disabled, icon, labelSlot, onClick })
  nextTick(updateScrollButtons)
}

const unregisterTab = (value: string) => {
  const index = tabs.value.findIndex(tab => tab.value === value)
  if (index !== -1) {
    if (activeTab.value === value) {
      const previousEnabledTab = [...tabs.value]
          .slice(0, index)
          .reverse()
          .find(tab => !tab.disabled)

      const nextEnabledTab = tabs.value
                                 .slice(index + 1)
                                 .find(tab => !tab.disabled)

      const newActiveTab = previousEnabledTab || nextEnabledTab

      if (newActiveTab) {
        setActiveTab(newActiveTab.value)
      }
      else {
        activeTab.value = ''
        emit('update:modelValue', '')
        emit('on-change', '')
      }
    }
    tabs.value.splice(index, 1)
    nextTick(updateScrollButtons)
  }
}

provide('activeTab', activeTab)
provide('registerTab', registerTab)
provide('unregisterTab', unregisterTab)

watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    setActiveTab(newValue)
  }
}, { immediate: true })

watchEffect(() => {
  if (props.direction === 'vertical' && !['left', 'right'].includes(props.position)) {
    console.warn('Invalid position for vertical tabs. Must be either "left" or "right"')
  }
})

const onTabRemove = (value: string) => {
  try {
    if (!tabs.value.some(tab => tab.value === value)) {
      console.warn(`Cannot remove non-existent tab: ${ value }`)
      return
    }

    emit('on-tab-remove', value)
    unregisterTab(value)
  }
  catch (error) {
    console.error('Error removing tab:', error)
  }
}

onMounted(() => {
  updateScrollButtons()
  window.addEventListener('resize', updateScrollButtons)
  scrollContainer.value?.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScrollButtons)
  scrollContainer.value?.removeEventListener('scroll', handleScroll)
})
</script>