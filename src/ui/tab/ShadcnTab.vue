<template>
  <div class="w-full">
    <div class="border-b border-gray-200">
      <div class="space-x-6">
        <button v-for="(tab, index) in tabs"
                :key="index"
                :class="['whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm',
                        activeTab === tab ? 'border-blue-400 text-blue-400' : 'border-transparent text-gray-400 hover:text-blue-400'
                ]"
                @click="selectTab(tab)">
          {{ tab.label }}
        </button>
      </div>
    </div>
    <div class="mt-4">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'

const tabs = ref<Array<{ label: string }>>([])
const activeTab = ref<{ label: string } | null>(null)

const addTab = (tab: { label: string }) => {
  tabs.value.push(tab)
  if (!activeTab.value) {
    activeTab.value = tab
  }
}

const removeTab = (tab: { label: string }) => {
  const index = tabs.value.indexOf(tab)
  tabs.value.splice(index, 1)
  if (activeTab.value === tab) {
    activeTab.value = tabs.value[0] || null
  }
}

const selectTab = (tab: { label: string }) => {
  activeTab.value = tab
}

provide('tabs', {
  addTab,
  removeTab,
  activeTab
})
</script>
