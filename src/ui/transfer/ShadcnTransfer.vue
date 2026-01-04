<template>
  <div class="shadcn-transfer flex gap-4" :class="sizeClass">
    <!-- 左侧列表 -->
    <div class="flex-1 rounded-lg overflow-hidden" :class="[
      containerClass,
      glass && 'backdrop-blur-md'
    ]">
      <div class="border-b flex items-center justify-between" :class="[
        headerClass,
        sizeHeaderClass
      ]">
        <ShadcnCheckbox :modelValue="leftAllChecked ? true : null"
                        :value="true"
                        :indeterminate="leftIndeterminate"
                        @update:modelValue="toggleLeftAll"
                        :dark="dark"
                        :glass="glass"
                        :type="checkboxType"
                        :size="size">
          {{ computedLeftTitle }}
        </ShadcnCheckbox>
        <span :class="countClass">
          {{ leftCheckedCount }}/{{ leftData.length }}
        </span>
      </div>
      <div :class="['space-y-1 overflow-y-auto', contentClass]" :style="heightStyle">
        <div v-for="item in leftData"
             :key="item[props.keyProp]"
             class="rounded cursor-pointer transition-all"
             :class="[
              itemClass,
              sizeItemClass,
              leftChecked.includes(item[props.keyProp]) && selectedItemClass
            ]"
             @click.self="!item.disabled && toggleLeftItem(item[props.keyProp])">
          <ShadcnCheckbox :modelValue="leftChecked.includes(item[props.keyProp]) ? item[props.keyProp] : null"
                          :value="item[props.keyProp]"
                          :dark="dark"
                          :size="size"
                          :glass="glass"
                          :type="checkboxType"
                          :disabled="item.disabled">
            <slot name="item" :item="item">
              {{ item[props.labelProp] }}
            </slot>
          </ShadcnCheckbox>
        </div>
      </div>
    </div>

    <!-- 中间操作按钮 -->
    <div class="flex flex-col justify-center gap-2">
      <ShadcnButton :type="type"
                    :dark="dark"
                    :glass="glass"
                    :size="size"
                    :disabled="leftCheckedCount === 0"
                    @click="moveToRight"
                    class="!p-1.5">
        <ShadcnIcon icon="ChevronRight" :dark="dark" :glass="glass" :class="iconSizeClass"/>
      </ShadcnButton>
      <ShadcnButton :type="type"
                    :dark="dark"
                    :glass="glass"
                    :size="size"
                    :disabled="rightCheckedCount === 0"
                    @click="moveToLeft"
                    class="!p-1.5">
        <ShadcnIcon icon="ChevronLeft" :dark="dark" :glass="glass" :class="iconSizeClass"/>
      </ShadcnButton>
    </div>

    <!-- 右侧列表 -->
    <div class="flex-1 rounded-lg overflow-hidden" :class="[
      containerClass,
      glass && 'backdrop-blur-md'
    ]">
      <div class="border-b flex items-center justify-between" :class="[
        headerClass,
        sizeHeaderClass
      ]">
        <ShadcnCheckbox :modelValue="rightAllChecked ? true : null"
                        :value="true"
                        :indeterminate="rightIndeterminate"
                        @update:modelValue="toggleRightAll"
                        :type="checkboxType"
                        :glass="glass"
                        :dark="dark"
                        :size="size">
          {{ computedRightTitle }}
        </ShadcnCheckbox>
        <span :class="countClass">
          {{ rightCheckedCount }}/{{ rightData.length }}
        </span>
      </div>
      <div :class="['space-y-1 overflow-y-auto', contentClass]" :style="heightStyle">
        <div v-for="item in rightData"
             :key="item[props.keyProp]"
             class="rounded cursor-pointer transition-all"
             :class="[
                itemClass,
                sizeItemClass,
                rightChecked.includes(item[props.keyProp]) && selectedItemClass
              ]"
             @click.self="!item.disabled && toggleRightItem(item[props.keyProp])">
          <ShadcnCheckbox :modelValue="rightChecked.includes(item[props.keyProp]) ? item[props.keyProp] : null"
                          :value="item[props.keyProp]"
                          :dark="dark"
                          :type="checkboxType"
                          :glass="glass"
                          :size="size"
                          :disabled="item.disabled">
            <slot name="item" :item="item">
              {{ item[props.labelProp] }}
            </slot>
          </ShadcnCheckbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue'
import { ShadcnCheckbox } from '@/ui/checkbox'
import { ShadcnButton } from '@/ui/button'
import { ShadcnIcon } from '@/ui/icon'
import { t } from '@/utils/locale'
import type { TransferEmits, TransferProps } from './types'
import { calcSize } from "@/utils/common.ts";

enum HeaderSize
{
  small = 'px-3 py-2',
  default = 'px-4 py-2.5',
  large = 'px-5 py-3'
}

enum ContentSize
{
  small = 'p-2',
  default = 'p-3',
  large = 'p-4'
}

enum ItemSize
{
  small = 'px-2 py-1',
  default = 'px-3 py-2',
  large = 'px-4 py-2.5'
}

enum IconSize
{
  small = 'w-4 h-4',
  default = 'w-5 h-5',
  large = 'w-6 h-6'
}

enum TextSize
{
  small = 'text-sm',
  default = 'text-base',
  large = 'text-lg'
}

const props = withDefaults(defineProps<TransferProps>(), {
  keyProp: 'key',
  labelProp: 'label',
  dark: false,
  type: 'primary',
  size: 'default',
  height: 256
})

// Form context support
const formContext = inject<any>('formContext', null)

const emit = defineEmits<TransferEmits>()

// Update form context when value changes
watch(() => props.modelValue, (newValue) => {
  if (formContext) {
    formContext.updateModel(props.keyProp, newValue)
  }
}, { deep: true })

const leftChecked = ref<(string | number)[]>([])
const rightChecked = ref<(string | number)[]>([])

const leftData = computed(() => {
  return props.data.filter(item => !props.modelValue.includes(item[props.keyProp]))
})

const rightData = computed(() => {
  return props.data.filter(item => props.modelValue.includes(item[props.keyProp]))
})

const leftCheckedCount = computed(() => leftChecked.value.length)
const rightCheckedCount = computed(() => rightChecked.value.length)

const leftAllChecked = computed(() => {
  return leftData.value.length > 0 && leftCheckedCount.value === leftData.value.filter(item => !item.disabled).length
})

const rightAllChecked = computed(() => {
  return rightData.value.length > 0 && rightCheckedCount.value === rightData.value.filter(item => !item.disabled).length
})

const leftIndeterminate = computed(() => {
  return leftCheckedCount.value > 0 && !leftAllChecked.value
})

const rightIndeterminate = computed(() => {
  return rightCheckedCount.value > 0 && !rightAllChecked.value
})

const toggleLeftItem = (key: string | number) => {
  const item = leftData.value.find(item => item[props.keyProp] === key)
  if (item?.disabled) {
    return
  }

  const index = leftChecked.value.indexOf(key)
  if (index > -1) {
    leftChecked.value.splice(index, 1)
  }
  else {
    leftChecked.value.push(key)
  }
}

const toggleRightItem = (key: string | number) => {
  const item = rightData.value.find(item => item[props.keyProp] === key)
  if (item?.disabled) {
    return
  }

  const index = rightChecked.value.indexOf(key)
  if (index > -1) {
    rightChecked.value.splice(index, 1)
  }
  else {
    rightChecked.value.push(key)
  }
}

const toggleLeftAll = (checked: boolean) => {
  if (checked) {
    leftChecked.value = leftData.value.filter(item => !item.disabled).map(item => item[props.keyProp])
  }
  else {
    leftChecked.value = []
  }
}

const toggleRightAll = (checked: boolean) => {
  if (checked) {
    rightChecked.value = rightData.value.filter(item => !item.disabled).map(item => item[props.keyProp])
  }
  else {
    rightChecked.value = []
  }
}

const moveToRight = () => {
  const newValue = [...props.modelValue, ...leftChecked.value]
  emit('update:modelValue', newValue)
  emit('on-change', newValue, 'right', [...leftChecked.value])
  leftChecked.value = []
}

const moveToLeft = () => {
  const newValue = props.modelValue.filter(key => !rightChecked.value.includes(key))
  emit('update:modelValue', newValue)
  emit('on-change', newValue, 'left', [...rightChecked.value])
  rightChecked.value = []
}

watch(() => props.modelValue, () => {
  leftChecked.value = leftChecked.value.filter(key => leftData.value.some(item => item[props.keyProp] === key))
  rightChecked.value = rightChecked.value.filter(key => rightData.value.some(item => item[props.keyProp] === key))
})

// 容器类名
const containerClass = computed(() => {
  const baseClass = 'border'
  const darkClass = props.dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
  const glassClass = props.glass
      ? (props.dark ? 'bg-gray-800/30 border-gray-700/50' : 'bg-white/30 border-gray-200/50')
      : darkClass
  return [baseClass, glassClass]
})

// 头部类名
const headerClass = computed(() => {
  if (props.glass) {
    return props.dark ? 'bg-gray-700/30 text-gray-100' : 'bg-gray-50/50 text-gray-900'
  }
  return props.dark ? 'bg-gray-700/50 text-gray-100' : 'bg-gray-50 text-gray-900'
})

// 内容区域类名
const contentClass = computed(() => {
  return props.dark ? 'text-gray-100' : 'text-gray-900'
})

// 列表项类名
const itemClass = computed(() => {
  let baseClass = 'flex items-center px-4 py-2'
  let hoverClass = ''

  if (props.glass) {
    hoverClass = props.dark ? 'hover:bg-white/10' : 'hover:bg-black/10'
  }
  else {
    hoverClass = props.dark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
  }

  if (props.size === 'small') {
    baseClass = 'flex items-center px-3 py-1'
  }

  return [baseClass, hoverClass]
})

// 选中项类名
const selectedItemClass = computed(() => {
  if (props.glass) {
    return props.dark ? 'bg-white/15' : 'bg-black/15'
  }
  return props.dark ? 'bg-gray-700/70' : 'bg-gray-100'
})

// 计数文本类名
const countClass = computed(() => {
  return props.dark ? 'text-gray-400 text-sm' : 'text-gray-500 text-sm'
})

// 尺寸类名
const sizeClass = computed(() => TextSize[props.size])
const sizeHeaderClass = computed(() => HeaderSize[props.size])
const sizeItemClass = computed(() => ItemSize[props.size])
const iconSizeClass = computed(() => IconSize[props.size])

// 高度样式
const heightStyle = computed(() => {
  return props.height ? { maxHeight: calcSize(props.height), minHeight: calcSize(props.height) } : {}
})

// 国际化标题
const computedLeftTitle = computed(() => {
  return props.leftTitle || String(t('transfer.text.leftTitle'))
})

const computedRightTitle = computed(() => {
  return props.rightTitle || String(t('transfer.text.rightTitle'))
})

// Checkbox type mapping
const checkboxType = computed(() => {
  const typeMap: Record<string, 'primary' | 'success' | 'warning' | 'error'> = {
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    danger: 'error',
    error: 'error',
    info: 'primary',
    text: 'primary'
  }
  return typeMap[props.type] || 'primary'
})
</script>
