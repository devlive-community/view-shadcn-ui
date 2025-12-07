<template>
  <div class="w-full space-y-4">
    <div v-for="(group, groupIndex) in filterGroups" :key="groupIndex">
      <div class="space-y-2">
        <template v-if="group.items.length > 0">
          <div v-for="(item, itemIndex) in group.items" :key="itemIndex" class="relative">
            <div v-if="hasMultipleConditions(item)" class="absolute left-[42px] -top-2 h-full border-l-2 border-emerald-500">
              <div class="absolute -left-12 top-1/2 -translate-y-1/2">
                <ShadcnToggleGroup :model-value="getItemOperator(item)"
                                   :dark="dark"
                                   size="small"
                                   class="border rounded"
                                   orientation="vertical"
                                   @on-change="(value) => onItemOperatorChange(groupIndex, itemIndex, value as any)">
                  <ShadcnToggle value="and"
                                :dark="dark"
                                class="px-2 py-0.5 text-xs rounded-none"
                                :class="{ 'bg-emerald-500 text-white': getItemOperator(item) === 'and' }">
                    {{ t('dataFilter.text.and') }}
                  </ShadcnToggle>
                  <ShadcnToggle value="or"
                                :dark="dark"
                                class="px-2 py-0.5 text-xs rounded-none w-full"
                                :class="{ 'bg-emerald-500 text-white': getItemOperator(item) === 'or' }">
                    {{ t('dataFilter.text.or') }}
                  </ShadcnToggle>
                </ShadcnToggleGroup>
              </div>
            </div>

            <div class="flex items-start">
              <div v-if="itemIndex > 0 || groupIndex > 0" class="min-w-16"/>

              <div class="flex-1" :class="{ 'ml-[60px]': itemIndex === 0 && groupIndex === 0 }">
                <template v-if="item.type === 'group'">
                  <div class="w-full">
                    <ShadcnHierarchicalDataFilter
                        v-model="item.value"
                        :fields="fields"
                        :dark="dark"
                        @on-validation-change="onNestedValidationChange(groupIndex, itemIndex, $event)"/>
                  </div>
                </template>

                <template v-else>
                  <div class="flex items-center gap-2 w-full">
                    <ShadcnDataFilter v-model="item.value"
                                      :fields="fields as any"
                                      :dark="dark"
                                      @on-validation-change="onConditionValidationChange(groupIndex, itemIndex, $event)"/>
                    <ShadcnIcon :class="dark ? 'text-gray-500' : 'text-gray-400'"
                                class="cursor-pointer hover:text-red-600"
                                icon="Trash"
                                size="16"
                                :dark="dark"
                                @click="removeCondition(groupIndex, itemIndex)"/>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </template>

        <div class="ml-5 flex items-center gap-4">
          <ShadcnButton :dark="dark" type="text" @click="addConditionToGroup(groupIndex)">
            <div :class="['flex items-center gap-1', dark ? 'text-blue-400' : 'text-blue-500']">
              <ShadcnIcon :dark="dark" icon="Plus" size="14"/>
              <span class="text-sm">{{ t('dataFilter.text.addCondition') }}</span>
            </div>
          </ShadcnButton>

          <ShadcnButton :dark="dark" type="text" @click="addNestedGroup(groupIndex)">
            <div :class="['flex items-center gap-1', dark ? 'text-blue-400' : 'text-blue-500']">
              <ShadcnIcon :dark="dark" icon="Plus" size="14"/>
              <span class="text-sm">{{ t('dataFilter.text.addGroup') }}</span>
            </div>
          </ShadcnButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { t } from '@/utils/locale'
import { FilterGroup, FilterItem, HierarchicalDataFilterEmits, HierarchicalDataFilterProps, ValidationResult } from './types.ts'
import { ShadcnToggle, ShadcnToggleGroup } from "@/ui/toggle";
import ShadcnDataFilter from "@/ui/data-filter/ShadcnDataFilter.vue";
import { ShadcnIcon } from "@/ui/icon";
import { ShadcnButton } from "@/ui/button";

const emit = defineEmits<HierarchicalDataFilterEmits>()
const props = withDefaults(defineProps<HierarchicalDataFilterProps>(), {
  modelValue: () => [],
  fields: () => [],
  dark: false
})

const filterGroups = ref<FilterGroup[]>([
  {
    operator: 'and',
    items: [] as FilterItem[]
  }
])

const getItemOperator = (item: FilterItem): string => {
  if (item.type === 'group') {
    return item.value?.[0]?.operator || 'and'
  }
  return item.operator || 'and'
}

const onItemOperatorChange = (groupIndex: number, itemIndex: number, value: 'and' | 'or') => {
  const item = filterGroups.value[groupIndex].items[itemIndex]
  if (item.type === 'group') {
    if (item.value?.[0]) {
      item.value[0].operator = value
    }
  }
  else {
    item.operator = value
  }
  updateModelValue()
}

const addConditionToGroup = (groupIndex: number) => {
  const newCondition = {
    type: 'condition',
    value: [],
    operator: 'and',
    isValid: false
  }

  filterGroups.value[groupIndex].items.push(newCondition as any)

  updateModelValue()
}

const addNestedGroup = (groupIndex: number) => {
  const newNestedGroup = {
    type: 'group',
    value: [{
      operator: 'and',
      items: [{
        type: 'condition',
        value: [],
        operator: 'and',
        isValid: false
      }]
    }],
    operator: 'and',
    isValid: false
  }

  filterGroups.value[groupIndex].items.push(newNestedGroup as any)

  updateModelValue()
}

const removeCondition = (groupIndex: number, itemIndex: number) => {
  filterGroups.value[groupIndex].items.splice(itemIndex, 1)
  updateModelValue()
}

const onConditionValidationChange = (groupIndex: number, itemIndex: number, validation: ValidationResult) => {
  filterGroups.value[groupIndex].items[itemIndex].isValid = validation.isValid
  emitValidationChange()
}

const onNestedValidationChange = (groupIndex: number, itemIndex: number, validation: ValidationResult) => {
  filterGroups.value[groupIndex].items[itemIndex].isValid = validation.isValid
  emitValidationChange()
}

const updateModelValue = () => {
  emit('update:modelValue', filterGroups.value)
}

const emitValidationChange = () => {
  const isValid = filterGroups.value.every(group =>
      group.items.every(item => item.isValid !== false)
  )
  emit('on-validation-change', { isValid, errors: [] })
}

const hasMultipleConditions = (item: FilterItem): boolean => {
  if (item.type === 'group') {
    return item.value?.some((group: FilterGroup) => group.items?.length > 1) || false
  }
  return item.value?.length > 1 || false
}

const initializeFilterGroups = () => {
  if (!props.modelValue || !Array.isArray(props.modelValue) || props.modelValue.length === 0) {
    filterGroups.value = [{
      operator: 'and',
      items: []
    }]
  }
  else {
    filterGroups.value = JSON.parse(JSON.stringify(props.modelValue))
  }
}

initializeFilterGroups()

watch(() => props.modelValue, (newValue) => {
  // 只有当外部值发生变化且不为空时才更新
  // Only update when external value changes and is not empty
  if (newValue && Array.isArray(newValue) && newValue.length > 0) {
    const current = JSON.stringify(filterGroups.value)
    const incoming = JSON.stringify(newValue)

    // 只有当值真正变化时才更新，避免循环更新
    // Only update when the value really changes, avoiding circular updates
    if (current !== incoming) {
      filterGroups.value = JSON.parse(JSON.stringify(newValue))
    }
  }
  else if (!newValue || newValue.length === 0) {
    // 处理空值情况
    // Handle empty values
    filterGroups.value = [{
      operator: 'and',
      items: []
    }]
  }
}, { deep: true })

defineExpose({
  validate: () => ({
    isValid: filterGroups.value.every(group =>
        group.items.every(item => item.isValid !== false)
    ),
    errors: []
  })
})
</script>
