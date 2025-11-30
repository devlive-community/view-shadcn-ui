<template>
  <!-- 每个组件的渲染容器 -->
  <div class="w-full h-full flex items-center justify-center">
    <!-- 根据组件类型渲染不同内容 -->
    <!-- Render different content based on component type -->
    <template v-if="type === 'text'">
      <div class="text-base">{{ getConfigValue('Text Group', 'Text Component') }}</div>
    </template>

    <template v-else-if="type === 'image'">
      <div class="space-y-2 w-full">
        <!-- Text Component -->
        <div class="text-sm">{{ getConfigValue('Text Group', 'Text Component') }}</div>

        <!-- Number Component -->
        <div class="text-sm">Number: {{ getConfigValue('Text Group', 'Number Component') }}</div>

        <!-- Textarea Component -->
        <div class="text-sm whitespace-pre-wrap">{{ getConfigValue('Text Group', 'Textarea Component') }}</div>

        <!-- Password Component (显示为掩码) -->
        <div class="text-sm">Password: {{ maskPassword(getConfigValue('Text Group', 'Password Component')) }}</div>

        <!-- Switch Component -->
        <div class="text-sm">
          Switch: {{ getConfigValue('Text Group', 'Switch Component') ? 'On' : 'Off' }}
        </div>

        <!-- Radio Component -->
        <div class="text-sm">
          Selected: {{ getConfigValue('Text Group', 'Radio Component') }}
        </div>

        <!-- Checkbox Component -->
        <div class="text-sm">
          Checked: {{ getConfigValue('Text Group', 'Checkbox Component')?.join(', ') }}
        </div>

        <!-- Select Component -->
        <div class="text-sm">
          Selected: {{ getConfigValue('Text Group', 'Select Component') }}
        </div>

        <!-- Slider Component -->
        <div class="text-sm">
          Value: {{ getConfigValue('Text Group', 'Slider Component') }}
        </div>

        <!-- Rate Component -->
        <div class="flex items-center space-x-1">
          <template v-for="i in 5" :key="i">
            <Icon
                icon="Star"
                :class="i <= getConfigValue('Text Group', 'Rate Component') ? 'text-yellow-400' : 'text-gray-300'"
                size="16"
            />
          </template>
        </div>
      </div>
    </template>

    <template v-else-if="type === 'chart'">
      <div class="text-gray-500">Chart Component</div>
    </template>

    <template v-else>
      <div class="text-gray-500">Unknown Component Type</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ItemConfigureGroupProps } from './types'

const props = defineProps<{
  type: string
  configure?: ItemConfigureGroupProps[]
}>()

// 获取指定分组和标签的配置值
// Get the configuration value for the specified group and label
const getConfigValue = (groupName: string, label: string) => {
  if (!props.configure) {
    return null
  }

  const group = props.configure.find(g => g.group === groupName)
  if (!group) {
    return null
  }

  const item = group.items?.find(item => item.label === label)
  return item?.value
}

// 密码掩码处理
// Password mask processing
const maskPassword = (password: string) => {
  if (!password) {
    return ''
  }
  return '•'.repeat(password.length)
}
</script>
