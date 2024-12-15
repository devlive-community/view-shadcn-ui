<template>
  <div class="w-full space-y-4">
    <div class="flex flex-col gap-4">
      <div v-for="(condition, index) in localConditions"
           class="flex items-center gap-2 group"
           :key="index">

        <ShadcnSelect v-model="condition.field" class="min-w-48 w-fit">
          <template #options>
            <ShadcnSelectOption v-for="field in fields"
                                :key="field.value"
                                :value="field.value"
                                :label="field.label"/>
          </template>
        </ShadcnSelect>

        <ShadcnSelect v-model="condition.operator" class="min-w-48 w-fit" @change="onChange">
          <template #options>
            <ShadcnSelectOption v-for="op in getOperatorsByField(condition.field)"
                                :key="op.value"
                                :value="op.value"
                                :label="op.label"/>
          </template>
        </ShadcnSelect>

        <ShadcnInput v-model="condition.value"
                     placeholder="Enter value"
                     @input="onChange"/>

        <ShadcnIcon class="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                    icon="Trash"
                    color="#ef4444"
                    size="18"
                    @click="onRemoveCondition(index)"/>
      </div>
    </div>

    <ShadcnButton type="text" @click="onAddCondition">
      <div class="flex items-center gap-2 text-blue-500">
        <ShadcnIcon icon="Plus" size="16"/>
        <span>{{ t('dataFilter.text.addCondition') }}</span>
      </div>
    </ShadcnButton>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import { DataFilterEmits, DataFilterProps, FilterCondition, Operator } from './types'

const emit = defineEmits<DataFilterEmits>()
const props = withDefaults(defineProps<DataFilterProps>(), {
  conditions: () => [],
  operators: () => [],
  fields: () => []
})

const defaultOperators = computed<Operator[]>(() => {
  if (props.operators.length > 0) {
    return props.operators
  }

  return [
    { label: t('dataFilter.text.eq'), value: 'eq', scope: ['string', 'number', 'date', 'boolean'] },
    { label: t('dataFilter.text.neq'), value: 'neq', scope: ['string', 'number', 'date', 'boolean'] },
    { label: t('dataFilter.text.gt'), value: 'gt', scope: ['number', 'date'] },
    { label: t('dataFilter.text.gte'), value: 'gte', scope: ['number', 'date'] },
    { label: t('dataFilter.text.lt'), value: 'lt', scope: ['number', 'date'] },
    { label: t('dataFilter.text.lte'), value: 'lte', scope: ['number', 'date'] },
    { label: t('dataFilter.text.in'), value: 'in', scope: ['string', 'number', 'date'] },
    { label: t('dataFilter.text.notIn'), value: 'notIn', scope: ['string', 'number', 'date'] },
    { label: t('dataFilter.text.between'), value: 'between', scope: ['number', 'date'] },
    { label: t('dataFilter.text.notBetween'), value: 'notBetween', scope: ['number', 'date'] },
    { label: t('dataFilter.text.isNull'), value: 'isNull', scope: ['string', 'number', 'date', 'boolean'] },
    { label: t('dataFilter.text.isNotNull'), value: 'isNotNull', scope: ['string', 'number', 'date', 'boolean'] },
    { label: t('dataFilter.text.like'), value: 'like', scope: ['string'] },
    { label: t('dataFilter.text.notLike'), value: 'notLike', scope: ['string'] },
    { label: t('dataFilter.text.regex'), value: 'regex', scope: ['string'] },
    { label: t('dataFilter.text.notRegex'), value: 'notRegex', scope: ['string'] },
    { label: t('dataFilter.text.isTrue'), value: 'isTrue', scope: ['boolean'] },
    { label: t('dataFilter.text.isFalse'), value: 'isFalse', scope: ['boolean'] }
  ]
})

const getFieldType = (fieldValue: string | null) => {
  const field = props.fields.find(f => f.value === fieldValue)
  return field?.type
}

const getOperatorsByField = (fieldValue: string | null) => {
  const fieldType = getFieldType(fieldValue)
  if (!fieldType) {
    return []
  }

  return defaultOperators.value.filter(op => op.scope.includes(fieldType))
}

const getDefaultOperatorForField = (fieldValue: string) => {
  const operators = getOperatorsByField(fieldValue)
  return operators[0]?.value
}

const newCondition = () => {
  const field = props.fields[0]?.value || null
  return {
    field,
    operator: field ? getDefaultOperatorForField(field) : null,
    value: undefined
  }
}

const localConditions = ref<FilterCondition[]>([...props.conditions])

onMounted(() => {
  if (localConditions.value.length === 0) {
    onAddCondition()
  }
})

watch(() => props.conditions, (newVal) => {
  localConditions.value = [...newVal]
}, { deep: true })

watch(
    () => localConditions.value.map(c => c.field),
    (newFields, oldFields) => {
      localConditions.value.forEach((condition, index) => {
        if (newFields[index] !== oldFields?.[index]) {
          const operators = getOperatorsByField(condition.field)
          if (!operators.find(op => op.value === condition.operator)) {
            condition.operator = operators[0]?.value
            condition.value = undefined
            onChange()
          }
        }
      })
    }
)

const onAddCondition = () => {
  const condition = newCondition()
  localConditions.value.push(condition)
  emit('on-add-condition', condition)

  onChange()
}

const onRemoveCondition = (index: number) => {
  const condition = localConditions.value[index]
  localConditions.value.splice(index, 1)
  emit('on-remove-condition', condition)

  onChange()
}

const onChange = () => {
  emit('update:modelValue', localConditions.value)
  emit('on-change', localConditions.value)
}
</script>
