<template>
  <div class="w-full">
    <div class="flex border-b border-gray-200">
      <div v-for="tab in tabs"
           type="button"
           :key="tab.value"
           :class="[
                'px-4 py-1 -mb-px transition-colors duration-200',
                {
                  'border-b-2 border-blue-500 text-blue-600 cursor-pointer': activeTab === tab.value && !tab.disabled,
                  'text-gray-600 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 hover:cursor-pointer': activeTab !== tab.value && !tab.disabled,
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
import { provide, ref } from 'vue'

interface Tab
{
  label: string
  value: string
  disabled?: boolean
}

const activeTab = ref('')
const tabs = ref<Tab[]>([])

const setActiveTab = (value: string) => {
  if (activeTab.value !== value) {
    activeTab.value = value
  }
}

const registerTab = (label: string, value: string, disabled: boolean = false) => {
  if (!tabs.value.some(tab => tab.value === value)) {
    tabs.value.push({ label, value, disabled })
  }
}

provide('activeTab', activeTab)
provide('registerTab', registerTab)
</script>
