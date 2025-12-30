<template>
  <div ref="menuRef"
       :class="dark ? 'bg-gray-800' : 'bg-white'"
       class="p-2"
       :style="{ width: direction === 'vertical' ? calcSize(props.width) : '100%' }">
    <div :class="['flex', directionClass]">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, provide, ref } from 'vue'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<{
  modelValue?: string
  width?: number | string
  direction?: 'horizontal' | 'vertical'
  dark?: boolean
  trigger?: 'click' | 'hover'
}>(), {
  width: 200,
  direction: 'vertical',
  dark: false,
  trigger: 'click'
})

const emit = defineEmits(['update:modelValue'])

const activeKey = ref<string>(String(props.modelValue))
const expandedKeys = ref<Set<string>>(new Set())
const menuRef = ref<HTMLElement | null>(null)

const directionClass = computed(() => {
  return props.direction === 'horizontal' ? 'flex-row items-center space-x-4' : 'flex-col space-y-2'
})

const updateActiveKey = (key: string) => {
  activeKey.value = key
  emit('update:modelValue', key)
}

const toggleExpandedKey = (key: string) => {
  if (expandedKeys.value.has(key)) {
    expandedKeys.value.delete(key)
  } else {
    expandedKeys.value.add(key)
  }
  expandedKeys.value = new Set(expandedKeys.value)
}

const isExpanded = (key: string) => {
  return expandedKeys.value.has(key)
}

const closeAllMenus = () => {
  expandedKeys.value.clear()
  expandedKeys.value = new Set(expandedKeys.value)
}

const handleClickOutside = (event: MouseEvent) => {
  if (props.direction === 'horizontal' && menuRef.value && !menuRef.value.contains(event.target as Node)) {
    closeAllMenus()
  }
}

onMounted(() => {
  if (props.direction === 'horizontal') {
    document.addEventListener('click', handleClickOutside)
  }
})

onUnmounted(() => {
  if (props.direction === 'horizontal') {
    document.removeEventListener('click', handleClickOutside)
  }
})

provide('menuContext', {
  activeKey,
  setActiveKey: updateActiveKey,
  direction: props.direction,
  expandedKeys,
  toggleExpandedKey,
  isExpanded,
  closeAllMenus,
  dark: computed(() => props.dark),
  trigger: props.trigger
})
</script>