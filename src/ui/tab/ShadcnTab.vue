<template>
  <div class="w-full flex"
       :class="{
         'flex-row': direction === 'vertical' && position !== 'right',
         'flex-row-reverse': direction === 'vertical' && position === 'right',
         'flex-col': direction !== 'vertical'
       }">
    <div :class="[
          direction !== 'vertical' ? '' : '',
          direction === 'vertical' ? 'border-b-0 border-r border-slate-200 flex-col' : 'flex justify-between'
        ]"
         :style="{ width: direction === 'vertical' ? 'auto' : '100%' }">
      <div :class="[
            direction === 'vertical' ? 'flex flex-col' : line ? 'flex inline-flex' : 'flex bg-slate-100 p-1 rounded-lg inline-flex'
          ]">
        <div v-for="tab in tabs"
             :key="tab.value"
             :class="[
                'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all cursor-pointer',
                direction === 'vertical' ? 'py-2 px-2' : line ? 'px-3 py-1.5' : 'px-3 py-1.5 rounded-md',
                direction === 'horizontal' ? [TabSize[size]] : '',
                {
                  'bg-white cursor-pointer shadow-sm': activeTab === tab.value && !tab.disabled && direction !== 'vertical' && !line,
                  'border-b-2 cursor-pointer -mb-px': activeTab === tab.value && !tab.disabled && direction !== 'vertical' && line,
                  [BorderType[type]]: activeTab === tab.value && !tab.disabled && direction !== 'vertical' && line,
                  'border-r-2 cursor-pointer': activeTab === tab.value && !tab.disabled && direction === 'vertical',
                  [TextType[type]]: activeTab === tab.value && !tab.disabled,
                  [BorderType[type]]: activeTab === tab.value && !tab.disabled && direction === 'vertical',
                  'hover:text-slate-900': activeTab !== tab.value && !tab.disabled && direction !== 'vertical',
                  'text-gray-600 hover:border-r-2 hover:cursor-pointer': activeTab !== tab.value && !tab.disabled && direction === 'vertical',
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
            <ShadcnIcon v-if="tab.icon" :icon="tab.icon" class="h-4 w-4"/>
            <div class="whitespace-nowrap">
              <component v-if="tab.labelSlot" :is="tab.labelSlot"/>
              <template v-else>{{ tab.label }}</template>
            </div>
            <ShadcnIcon v-if="closable && !tab.disabled"
                        icon="CircleX"
                        size="14"
                        class="justify-center items-center opacity-70 hover:opacity-100"
                        @click.stop="onTabRemove(tab.value)"/>
          </div>
        </div>
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
import { provide, ref, watch, watchEffect } from 'vue'
import { BorderType, HoverTextType, HoverType, TextType } from '@/ui/common/type.ts'
import { TabSize } from '@/ui/common/size.ts'
import ShadcnIcon from '@/ui/icon'
import { ArrangeDirection, ArrangePosition } from '@/ui/common/position.ts'

interface Tab
{
  label: string
  value: string
  disabled?: boolean
  icon?: string
  labelSlot?: () => any
  onClick?: (e: MouseEvent) => void
}

const emit = defineEmits(['update:modelValue', 'on-change', 'on-tab-remove'])

const props = withDefaults(defineProps<{
  modelValue?: string
  type?: keyof typeof TextType
  size?: keyof typeof TabSize
  line?: boolean
  closable?: boolean
  position?: keyof typeof ArrangePosition
  direction?: keyof typeof ArrangeDirection
}>(), {
  type: 'primary',
  size: 'default',
  line: false,
  closable: false,
  position: 'left',
  direction: 'horizontal'
})

const activeTab = ref('')
const tabs = ref<Tab[]>([])

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
</script>