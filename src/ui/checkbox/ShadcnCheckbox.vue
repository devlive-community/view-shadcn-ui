<template>
  <div
      :class="[
                'inline-flex items-center w-fit',
                {
                  'cursor-pointer': !disabled,
                  'cursor-not-allowed opacity-50': disabled
                }
        ]"
      @click="onChange">
    <input
        :checked="isChecked"
        :value="value"
        class="sr-only"
        type="checkbox"/>

    <div :class="checkboxClasses">
      <svg
          v-if="indeterminate"
          :key="`indeterminate-${isChecked}`"
          :class="iconClasses"
          fill="none"
          stroke="currentColor"
          style="animation: checkboxPop 0.3s ease-in-out;"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5 12h14"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"/>
      </svg>
      <svg
          v-else-if="isChecked"
          :key="`checked-${isChecked}`"
          :class="iconClasses"
          fill="none"
          stroke="currentColor"
          style="animation: checkboxPop 0.3s ease-in-out;"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5 13l4 4L19 7"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"/>
      </svg>
    </div>

    <div v-if="$slots.label" :class="labelClasses">
      <slot name="label"/>
    </div>
    <div v-else :class="labelClasses">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { type ComponentType, getComponentSize, getGlassStyles, getText, getTypeColor, type ThemeMode } from '@/utils/theme'
import { CheckboxEmits, CheckboxProps } from '@/ui/checkbox/types.ts'

const emit = defineEmits<CheckboxEmits>()

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: null,
  disabled: false,
  size: 'default',
  type: 'primary',
  indeterminate: false,
  dark: false,
  glass: false
})

const checkboxGroup = inject<{ modelValue: { modelValue: any[] }, updateModelValue: Function } | null>('checkboxGroup', null)
const groupDark = inject<any>('checkboxGroupDark', false)
const groupGlass = inject<any>('checkboxGroupGlass', false)
const groupType = inject<any>('checkboxGroupType', null)
const groupSize = inject<any>('checkboxGroupSize', null)
const isDark = computed(() => props.dark || (typeof groupDark === 'object' && groupDark.value !== undefined ? groupDark.value : groupDark))
const glass = computed(() => props.glass || (typeof groupGlass === 'object' && groupGlass.value !== undefined ? groupGlass.value : groupGlass))
const currentType = computed(() => {
  if (groupType && typeof groupType === 'object' && groupType.value !== undefined) {
    return groupType.value
  }
  return props.type
})
const currentSize = computed(() => {
  if (groupSize && typeof groupSize === 'object' && groupSize.value !== undefined) {
    return groupSize.value
  }
  return props.size
})

const isChecked = computed(() => {
  if (checkboxGroup) {
    return checkboxGroup.modelValue.modelValue.includes(props.value)
  }
  return props.modelValue === props.value
})

const onChange = () => {
  if (!props.disabled) {
    if (checkboxGroup) {
      checkboxGroup.updateModelValue(props.value, !isChecked.value)
    }
    else {
      const newValue = isChecked.value ? null : props.value
      emit('update:modelValue', newValue)
      emit('on-change', newValue)
    }
  }
}

const checkboxClasses = computed(() => {
  const mode: ThemeMode = { dark: isDark.value, glass: glass.value }
  const baseClasses = ['flex items-center justify-center rounded border transition-all duration-300 ease-in-out', getComponentSize('checkbox', currentSize.value)]

  if (glass.value) {
    const componentType: ComponentType = currentType.value === 'error' ? 'danger' : currentType.value
    if (isChecked.value || props.indeterminate) {
      return [
        ...baseClasses,
        ...getGlassStyles(mode, { type: componentType, withHover: false, withBorder: true, withText: false })
      ]
    }
    return [
      ...baseClasses,
      ...getGlassStyles(mode, { withHover: false, withBorder: true, withText: false })
    ]
  }

  return [
    ...baseClasses,
    {
      [getTypeColor(currentType.value === 'error' ? 'danger' : currentType.value, mode)]: isChecked.value || props.indeterminate,
      'bg-white': !isChecked.value && !props.indeterminate && !isDark.value,
      'bg-gray-800 border-gray-600': !isChecked.value && !props.indeterminate && isDark.value
    }
  ]
})

const iconClasses = computed(() => {
  const mode: ThemeMode = { dark: isDark.value, glass: glass.value }
  const baseClasses = [getComponentSize('checkboxIcon', currentSize.value)]
  if (glass.value) {
    return [...baseClasses, getText(mode)]
  }
  return [...baseClasses, 'text-white']
})

const labelClasses = computed(() => {
  const mode: ThemeMode = { dark: isDark.value, glass: glass.value }
  return ['ml-2 text-sm text-nowrap', isDark.value && getText(mode, 'primary')]
})
</script>