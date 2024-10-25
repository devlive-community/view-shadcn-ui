<template>
  <div class="w-full flex" :class="{ 'flex-row': direction === 'vertical', 'flex-col': direction !== 'vertical' }">
    <div :class="[direction !== 'vertical' ? 'border-b' : '',
                  direction === 'vertical' ? 'border-b-0 border-r flex-col' : 'flex justify-between',
                  card ? 'space-x-1' : ''
                ]"
         :style="{ width: direction === 'vertical' ? 'auto' : '100%' }">
      <div :class="[
                    direction === 'vertical' ? 'flex flex-col' : 'flex',
                    card && direction !== 'vertical' ? 'space-x-1' : '',
                    card && direction === 'vertical' ? 'space-y-1' : ''
                  ]">
        <div v-for="tab in tabs"
             :key="tab.value"
             :class="[
                  'py-2 transition-colors duration-200 flex group items-center',
                  direction === 'horizontal' ? 'px-4' : '',
                  card && direction === 'horizontal' ? [TabSize[size]] : '',
                  card && direction === 'vertical' ? 'py-2 px-2 h-auto' : '',
                  {
                    'border-b-2 cursor-pointer': activeTab === tab.value && !tab.disabled && direction !== 'vertical',
                    'border-r-2 cursor-pointer': activeTab === tab.value && !tab.disabled && direction === 'vertical',
                    [TextType[type]]: activeTab === tab.value && !tab.disabled,
                    [BorderType[type]]: activeTab === tab.value && !tab.disabled,
                    'text-gray-600 hover:border-b-2 hover:cursor-pointer': activeTab !== tab.value && !tab.disabled && direction !== 'vertical',
                    'text-gray-600 hover:border-r-2 hover:cursor-pointer': activeTab !== tab.value && !tab.disabled && direction === 'vertical',
                    [HoverTextType[type]]: activeTab !== tab.value && !tab.disabled,
                    [HoverType[type]]: activeTab !== tab.value && !tab.disabled,
                    'text-gray-400 cursor-not-allowed opacity-50': tab.disabled
                  },
                  {
                    'border-t border-l border-r rounded-t items-center': card && direction !== 'vertical',
                    'border-l border-t border-b rounded-l items-center': card && direction === 'vertical'
                  }
             ]"
             @click="!tab.disabled && setActiveTab(tab.value)">
          <div :class="['flex items-center',
                        direction === 'vertical' ? 'space-y-1' : 'space-x-1',
                ]"
               :style="direction === 'horizontal' ? {} : {
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  height: 'auto',
                  alignItems: 'center',
                }">
            <ShadcnIcon v-if="tab.icon" :icon="tab.icon"/>
            <div class="whitespace-nowrap">{{ tab.label }}</div>
            <ShadcnIcon v-if="closable && !tab.disabled"
                        icon="CircleX"
                        :class="{
                              'inline-block': activeTab === tab.value || closable && !tab.disabled,
                              'hidden group-hover:inline-block': activeTab !== tab.value && !tab.disabled
                        }"
                        :style="direction === 'vertical' ? {} : {marginLeft: '10px'}"
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

    <div :class="[direction === 'vertical' ? 'ml-4 flex-1' : 'py-2']">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue'
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
}

const emit = defineEmits(['update:modelValue', 'on-change', 'on-tab-remove'])

const props = withDefaults(defineProps<{
  modelValue?: string
  type?: keyof typeof TextType
  size?: keyof typeof TabSize
  card?: boolean
  closable?: boolean
  position?: keyof typeof ArrangePosition
  direction?: keyof typeof ArrangeDirection
}>(), {
  type: 'primary',
  size: 'default',
  card: false,
  closable: false,
  position: 'left',
  direction: 'horizontal',
})

const activeTab = ref('')
const tabs = ref<Tab[]>([])

const setActiveTab = (value: string) => {
  if (activeTab.value !== value) {
    activeTab.value = value
    emit('update:modelValue', value)
    emit('on-change', value)
  }
}

const registerTab = (label: string, value: string, disabled: boolean = false, icon?: string) => {
  if (!tabs.value.some(tab => tab.value === value)) {
    tabs.value.push({ label, value, disabled, icon })
  }
}

provide('activeTab', activeTab)
provide('registerTab', registerTab)

// Watch modelValue to update the active tab
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    setActiveTab(newValue)
  }
}, { immediate: true })

const onTabRemove = (value: string) => {
  tabs.value = tabs.value.filter(tab => tab.value !== value)
  emit('on-tab-remove', value)
}
</script>
