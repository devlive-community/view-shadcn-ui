<template>
  <div class="w-full space-y-4">
    <div v-for="(group, groupIndex) in filterGroups" :key="groupIndex">
      <div class="space-y-2">
        <template v-if="group.items.length > 0">
          <div v-for="(item, itemIndex) in group.items" :key="itemIndex" class="relative">
            <div v-if="hasMultipleConditions(item)" class="absolute left-[42px] -top-2 h-full border-l-2 border-emerald-500">
              <div class="absolute -left-10 top-1/2 -translate-y-1/2">
                <ShadcnToggleGroup :model-value="getItemOperator(item)"
                                   size="small"
                                   class="border rounded"
                                   orientation="vertical"
                                   @on-change="(value) => onItemOperatorChange(groupIndex, itemIndex, value)">
                  <ShadcnToggle value="and"
                                class="px-2 py-0.5 text-xs rounded-none"
                                :class="{ 'bg-emerald-500 text-white': getItemOperator(item) === 'and' }">
                    且
                  </ShadcnToggle>
                  <ShadcnToggle value="or"
                                class="px-2 py-0.5 text-xs rounded-none"
                                :class="{ 'bg-emerald-500 text-white': getItemOperator(item) === 'or' }">
                    或
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
                        @on-validation-change="onNestedValidationChange(groupIndex, itemIndex, $event)"/>
                  </div>
                </template>

                <template v-else>
                  <div class="flex items-center gap-2 w-full">
                    <ShadcnDataFilter v-model="item.value"
                                      :fields="fields"
                                      @on-validation-change="onConditionValidationChange(groupIndex, itemIndex, $event)"/>
                    <ShadcnIcon class="cursor-pointer text-gray-400 hover:text-red-600"
                                icon="Trash"
                                size="16"
                                @click="removeCondition(groupIndex, itemIndex)"/>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </template>

        <div class="ml-5 flex items-center gap-4">
          <ShadcnButton type="text" @click="addConditionToGroup(groupIndex)">
            <div class="flex items-center gap-1 text-blue-500">
              <ShadcnIcon icon="Plus" size="14"/>
              <span class="text-sm">{{ t('dataFilter.text.addCondition') }}</span>
            </div>
          </ShadcnButton>

          <ShadcnButton type="text" @click="addNestedGroup(groupIndex)">
            <div class="flex items-center gap-1 text-blue-500">
              <ShadcnIcon icon="Plus" size="14"/>
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

const emit = defineEmits<HierarchicalDataFilterEmits>()
const props = withDefaults(defineProps<HierarchicalDataFilterProps>(), {
  modelValue: () => [],
  fields: () => []
})

const filterGroups = ref<FilterGroup[]>([
  {
    operator: 'and',
    items: []
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
  filterGroups.value[groupIndex].items.push({
    type: 'condition',
    value: [],
    operator: 'and'
  })
  updateModelValue()
}

const addNestedGroup = (groupIndex: number) => {
  filterGroups.value[groupIndex].items.push({
    type: 'group',
    value: [{
      operator: 'and',
      items: [{
        type: 'condition',
        value: [],
        operator: 'and'
      }]
    }],
    operator: 'and'
  })
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

watch(() => props.modelValue, (newValue) => {
  if (newValue && Array.isArray(newValue)) {
    filterGroups.value = newValue
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
