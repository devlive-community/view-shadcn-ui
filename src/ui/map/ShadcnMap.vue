<template>
  <div class="space-y-2">
    <div class="space-y-2">
      <div v-for="(item, index) in modelValue" class="flex gap-2 items-start group" :key="index">
        <div class="flex-1 flex gap-2">
          <div class="flex-1 border rounded-md transition-colors duration-300"
               :class="[Size[finalSize], HoverType[type], { 'border-red-500 animate-pulse': duplicateKeys[index] }]">
            <input v-model="item.key"
                   type="text"
                   :placeholder="t('map.placeholder.key')"
                   class="w-full h-full bg-transparent border-none focus:outline-none px-2"
                   @input="updateValue(index, 'key', $event)"
                   @blur="validateDuplicate(index)">
          </div>

          <div class="flex-1 border rounded-md transition-colors duration-300"
               :class="[Size[finalSize], HoverType[type]]">
            <input v-model="item.value"
                   type="text"
                   :placeholder="t('map.placeholder.value')"
                   class="w-full h-full bg-transparent border-none focus:outline-none px-2"
                   @input="updateValue(index, 'value', $event)">
          </div>
        </div>

        <ShadcnIcon icon="CircleX"
                    class="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                    :class="[Size[finalSize]]"
                    @click="onRemoveItem(index)"/>
      </div>
    </div>

    <div v-if="Object.values(duplicateKeys).some(v => v)" class="text-red-500 text-sm">
      {{ t('map.validated.duplicate') }}
    </div>

    <ShadcnIcon icon="CirclePlus"
                :class="[
                    Size[finalSize],
                    'text-blue-600 hover:text-blue-700 focus:outline-none',
                    { 'cursor-pointer ': !Object.values(duplicateKeys).some(v => v) },
                    { 'cursor-not-allowed opacity-50 text-gray-100': Object.values(duplicateKeys).some(v => v) }
                ]"
                @click="!Object.values(duplicateKeys).some(v => v) && onAddItem()"/>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import { Size } from '@/ui/common/size.ts'
import { HoverType } from '@/ui/common/type.ts'
import { MapEmits, MapProps } from '@/ui/map/types.ts'

const emit = defineEmits<MapEmits>()
const props = withDefaults(defineProps<MapProps>(), {
  modelValue: () => [],
  size: 'default',
  type: 'primary',
  disabled: false
})

const finalSize = computed(() => props.size)
const duplicateKeys = ref<Record<number, boolean>>({})

const validateDuplicate = (index: number) => {
  console.debug('Validate duplicate index', index)
  const keys = props.modelValue.map(item => item.key)
  duplicateKeys.value = {}

  keys.forEach((key, index) => {
    if (key && keys.indexOf(key) !== index) {
      duplicateKeys.value[index] = true
      duplicateKeys.value[keys.indexOf(key)] = true
    }
  })
}

const onAddItem = () => {
  if (props.disabled) {
    return
  }
  const addItem = { key: '', value: '' }
  const newValue = [...props.modelValue, addItem]

  emit('update:modelValue', newValue)
  emit('on-add', addItem)
}

const onRemoveItem = (index: number) => {
  if (props.disabled) {
    return
  }
  const removedItem = props.modelValue[index]
  const newValue = props.modelValue.filter((_, i) => i !== index)

  emit('update:modelValue', newValue)
  emit('on-remove', removedItem)
  validateDuplicate(index)
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

  if (field === 'key') {
    validateDuplicate(index)
  }
}

watch(() => props.modelValue, () => {
  props.modelValue.forEach((_, index) => {
    validateDuplicate(index)
  })
}, { deep: true })
</script>
