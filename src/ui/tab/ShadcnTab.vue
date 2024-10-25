<template>
  <div class="w-full">
    <div class="flex border-b">
      <div v-for="tab in tabs"
           type="button"
           :key="tab.value"
           :class="[
                'px-4 py-1 -mb-px transition-colors duration-200',
                [TabSize[size]],
                {
                  'border-b-2 cursor-pointer': activeTab === tab.value && !tab.disabled,
                  [TextType[type]]: activeTab === tab.value && !tab.disabled,
                  [BorderType[type]]: activeTab === tab.value && !tab.disabled,
                  'text-gray-600 hover:border-b-2 hover:cursor-pointer': activeTab !== tab.value && !tab.disabled,
                  [HoverTextType[type]]: activeTab !== tab.value && !tab.disabled,
                  [HoverType[type]]: activeTab !== tab.value && !tab.disabled,
                  'text-gray-400 cursor-not-allowed opacity-50': tab.disabled
                }
              ]"
           @click="!tab.disabled && setActiveTab(tab.value)">
        {{ tab.label }}
      </div>
    </div>
    <div class="py-2">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import { BorderType, HoverTextType, HoverType, TextType } from '@/ui/common/type.ts'
import { TabSize } from '@/ui/common/size.ts'

interface Tab
{
  label: string
  value: string
  disabled?: boolean
}

const emit = defineEmits(['update:modelValue', 'on-change'])

const props = withDefaults(defineProps<{
  modelValue?: string
  type?: keyof typeof TextType
  size?: keyof typeof TabSize
}>(), {
  type: 'primary',
  size: 'default'
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

const registerTab = (label: string, value: string, disabled: boolean = false) => {
  if (!tabs.value.some(tab => tab.value === value)) {
    tabs.value.push({ label, value, disabled })
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
</script>
