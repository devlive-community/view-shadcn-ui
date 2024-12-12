<template>
  <div class="space-y-2">
    <div class="space-y-2">
      <div v-for="(item, index) in modelValue" class="flex gap-2 items-start group" :key="index">
        <div class="flex-1 flex gap-2">
          <div class="flex-1 border rounded-md transition-colors duration-300"
               :class="[Size[finalSize], HoverType[type], { 'border-red-500 animate-pulse': duplicateKeys[index] || emptyKeys[index] }]">
            <input v-model="item.key"
                   type="text"
                   class="w-full h-full bg-transparent border-none focus:outline-none px-2"
                   :class="{ 'cursor-not-allowed opacity-50 bg-gray-100': disabled }"
                   :placeholder="t('map.placeholder.key')"
                   :disabled="disabled"
                   :name="name"
                   @input="updateValue(index, 'key', $event)"
                   @blur="validateDuplicate(index)">
          </div>

          <div class="flex-1 border rounded-md transition-colors duration-300"
               :class="[Size[finalSize], HoverType[type]]">
            <input v-model="item.value"
                   type="text"
                   class="w-full h-full bg-transparent border-none focus:outline-none px-2"
                   :class="{ 'cursor-not-allowed opacity-50 bg-gray-100': disabled }"
                   :disabled="disabled"
                   :placeholder="t('map.placeholder.value')"
                   @input="updateValue(index, 'value', $event)">
          </div>
        </div>

        <ShadcnIcon v-if="!disabled"
                    icon="CircleX"
                    class="text-gray-400 transition-opacity duration-200"
                    :class="[Size[finalSize],
                        'cursor-pointer hover:text-red-500 opacity-0 group-hover:opacity-100'
                    ]"
                    @click="onRemoveItem(index)"/>
      </div>
    </div>

    <div v-if="Object.values(emptyKeys).some(v => v)" class="text-red-500 text-sm">
      {{ t('map.validated.required') }}
    </div>

    <div v-if="Object.values(duplicateKeys).some(v => v)" class="text-red-500 text-sm">
      {{ t('map.validated.duplicate') }}
    </div>

    <ShadcnIcon v-if="!disabled && !isMaxReached"
                icon="CirclePlus"
                :class="['text-blue-600 hover:text-blue-700 focus:outline-none',
                    { 'cursor-pointer ': !Object.values(duplicateKeys).some(v => v) && !Object.values(emptyKeys).some(v => v) && !disabled },
                    { 'cursor-not-allowed opacity-50 text-gray-100': Object.values(duplicateKeys).some(v => v) || Object.values(emptyKeys).some(v => v) || disabled }
                ]"
                @click="(!Object.values(duplicateKeys).some(v => v) && !Object.values(emptyKeys).some(v => v)) && onAddItem()"/>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import { Size } from '@/ui/common/size.ts'
import { HoverType } from '@/ui/common/type.ts'
import { MapEmits, MapProps } from '@/ui/map/types.ts'
import { FormItemContext } from '@/ui/form/context.ts'

const emit = defineEmits<MapEmits>()
const props = withDefaults(defineProps<MapProps>(), {
  modelValue: () => [],
  size: 'default',
  type: 'primary',
  disabled: false,
  max: Infinity,
  name: undefined
})

const finalSize = computed(() => props.size)
const duplicateKeys = ref<Record<number, boolean>>({})
const emptyKeys = ref<Record<number, boolean>>({})

const formItemContext = inject<FormItemContext | null>(`form-item-${ props.name }`, null)

const isMaxReached = computed(() => {
  return props.max !== undefined && props.modelValue.length >= props.max
})

const validateDuplicate = (_: number) => {
  const keys = props.modelValue.map(item => item.key)
  duplicateKeys.value = {}
  emptyKeys.value = {}

  keys.forEach((key, index) => {
    // 检查空值
    // Check empty
    if (key === undefined || key === '') {
      emptyKeys.value[index] = true
    }
    // 检查重复（只针对非空值）
    // Check duplicate
    if (key && keys.indexOf(key) !== index) {
      duplicateKeys.value[index] = true
      duplicateKeys.value[keys.indexOf(key)] = true
    }
  })

  if (formItemContext) {
    formItemContext.onBlur()
  }
}

const onAddItem = () => {
  if (props.disabled || isMaxReached.value) {
    return
  }

  const addItem = { key: undefined, value: undefined }
  const newValue = [...props.modelValue, addItem]

  emit('update:modelValue', newValue)
  emit('on-add', addItem)
  emit('on-change', newValue)

  if (formItemContext) {
    formItemContext.onBlur()
  }
}

const onRemoveItem = (index: number) => {
  if (props.disabled) {
    return
  }
  const removedItem = props.modelValue[index]
  const newValue = props.modelValue.filter((_, i) => i !== index)

  emit('update:modelValue', newValue)
  emit('on-remove', removedItem)
  emit('on-change', newValue)
  validateDuplicate(index)

  if (formItemContext) {
    formItemContext.onBlur()
  }
}

const updateValue = (index: number, field: 'key' | 'value', event: Event) => {
  if (props.disabled) {
    return
  }
  const target = event.target as HTMLInputElement
  const newValue = [...props.modelValue]
  newValue[index] = {
    ...newValue[index],
    [field]: target.value
  }
  emit('update:modelValue', newValue)
  emit('on-change', newValue)

  if (field === 'key') {
    validateDuplicate(index)
  }

  if (formItemContext) {
    formItemContext.onBlur()
  }
}

watch(() => props.modelValue.length, (newLength) => {
  if (formItemContext && newLength === 0) {
    formItemContext.onBlur()
  }
})

watch(() => props.modelValue, () => {
  props.modelValue.forEach((_, index) => {
    validateDuplicate(index)
  })
}, { deep: true })
</script>
