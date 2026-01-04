<template>
  <div
      :class="['min-h-screen px-6 pb-6 space-y-2 p-2', isGlass ? (isDark ? 'bg-gradient-to-br from-purple-900 via-pink-900 to-red-900' : 'bg-gradient-to-br from-purple-400 via-pink-500 to-red-500') : (isDark ? 'bg-gray-900' : 'bg-white')]">
    <div class="flex gap-2 space-x-3 items-center">
      <ShadcnButton :dark="isDark" :glass="isGlass" @click="isDark = !isDark">
        切换暗黑模式
      </ShadcnButton>
      <ShadcnButton :dark="isDark" :glass="isGlass" @click="isGlass = !isGlass">
        切换液态玻璃
      </ShadcnButton>
      <div :class="['ml-2', isDark ? 'text-white' : 'text-gray-900']">
        当前模式：{{ isDark ? '暗黑' : '亮色' }}，{{ isGlass ? '液态玻璃' : '普通' }}
      </div>
    </div>

    <ShadcnCheckboxGroup
        v-model="checkedGroup"
        type="warning"
        size="large"
        :dark="isDark"
        :glass="isGlass">
      <ShadcnCheckbox value="Vue">Vue</ShadcnCheckbox>
      <ShadcnCheckbox value="Nuxt">Nuxt</ShadcnCheckbox>
    </ShadcnCheckboxGroup>

    <ShadcnTransfer
        v-model="transferSelected1"
        :data="transferData1"
        :dark="isDark"
        :glass="isGlass"
        type="success"/>

    <ShadcnCard title="Transfer 基础用法" :dark="isDark" :glass="isGlass">
      <ShadcnTransfer
          v-model="transferSelected1"
          :data="transferData1"
          :dark="isDark"
          :glass="isGlass"
          type="success"/>
    </ShadcnCard>

    <ShadcnDropdown :dark="isDark" :glass="isGlass" trigger="click">
      <template #trigger>
        <ShadcnButton>点击打开</ShadcnButton>
      </template>
      <ShadcnDropdownItem>操作 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>操作 2</ShadcnDropdownItem>
      <ShadcnDropdownItem divided>操作 3</ShadcnDropdownItem>
      <ShadcnDropdownItem>操作 4</ShadcnDropdownItem>
    </ShadcnDropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnTransfer } from '@/ui/transfer'
import { ShadcnButton } from '@/ui/button'
import { ShadcnCard } from '@/ui/card'
import { ShadcnDropdown, ShadcnDropdownItem } from '@/ui/dropdown'
import { ShadcnCheckbox, ShadcnCheckboxGroup } from '@/ui/checkbox'

const isDark = ref(false)
const isGlass = ref(false)

const transferSelected1 = ref([2, 3])
const transferData1 = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2' },
  { key: 3, label: '选项 3', disabled: true },
  { key: 4, label: '选项 4' },
  { key: 5, label: '选项 5' }
])

const checkedGroup = ref([])
</script>
