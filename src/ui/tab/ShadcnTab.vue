<template>
  <div class="w-full">
    <div :class="['flex justify-between border-b',
                  card ? 'space-x-1' : ''
         ]">
      <div :class="['flex', card ? 'space-x-1': '']">
        <div v-for="tab in tabs"
             :key="tab.value"
             :class="[
                  'px-4 py-1 -mb-px transition-colors duration-200 flex group',
                  [TabSize[size]],
                  {
                    'border-b-2 cursor-pointer': activeTab === tab.value && !tab.disabled,
                    [TextType[type]]: activeTab === tab.value && !tab.disabled,
                    [BorderType[type]]: activeTab === tab.value && !tab.disabled,
                    'text-gray-600 hover:border-b-2 hover:cursor-pointer': activeTab !== tab.value && !tab.disabled,
                    [HoverTextType[type]]: activeTab !== tab.value && !tab.disabled,
                    [HoverType[type]]: activeTab !== tab.value && !tab.disabled,
                    'text-gray-400 cursor-not-allowed opacity-50': tab.disabled
                  },
                  {
                    'border-t border-l border-r rounded-t items-center' : card
                  }
             ]"
             @click="!tab.disabled && setActiveTab(tab.value)">
          <div class="flex items-center space-x-1">
            <ShadcnIcon v-if="tab.icon" :icon="tab.icon"/>
            <div>{{ tab.label }}</div>
            <ShadcnIcon v-if="closable && !tab.disabled"
                        icon="CircleX"
                        :class="{
                              'inline-block': activeTab === tab.value || closable && !tab.disabled,
                              'hidden group-hover:inline-block': activeTab !== tab.value && !tab.disabled
                        }"
                        style="margin-left: 10px;"
                        @click.stop="onTabRemove(tab.value)"/>
          </div>
        </div>
      </div>
      <div v-if="$slots.extra" class="flex items-center">
        <slot name="extra"/>
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
import ShadcnIcon from '@/ui/icon'

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
}>(), {
  type: 'primary',
  size: 'default',
  card: false,
  closable: false
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
