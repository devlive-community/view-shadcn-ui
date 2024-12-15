<template>
  <div class="w-full space-y-1">
    <div class="flex flex-col gap-2">
      <div v-for="(condition, index) in localConditions" :key="index" class="flex items-center gap-2 group">
        <ShadcnSelect v-model="condition.field" class="min-w-48">
          <template #options>
            <ShadcnSelectOption v-for="field in fields"
                                :key="field.value"
                                :value="field.value"
                                :label="field.label"/>
          </template>
        </ShadcnSelect>

        <ShadcnSelect v-model="condition.operator"
                      class="min-w-48"
                      @change="onChange">
          <template #options>
            <ShadcnSelectOption v-for="op in getOperatorsByField(condition.field)"
                                :key="op.value"
                                :value="op.value"
                                :label="op.label"/>
          </template>
        </ShadcnSelect>

        <div v-if="shouldShowValueInput(condition.operator)" class="condition-value">
          <template v-if="getFieldType(condition.field) === 'number' && !['in', 'notIn', 'between', 'notBetween'].includes(condition.operator ?? '')">
            <ShadcnNumber v-model="condition.value"
                          :class="{'border border-red-500 rounded animate-pulse  transition-colors duration-300': hasError(index, 'value')}"
                          :placeholder="t('dataFilter.placeholder.value')"
                          @on-change="onChange"/>
          </template>
          <template v-else-if="getFieldType(condition.field) === 'boolean'">
            <div class="h-10 flex items-center">
              <ShadcnSwitch v-model="condition.value"
                            :class="{'border border-red-500 rounded animate-pulse  transition-colors duration-300': hasError(index, 'value')}"
                            @on-change="onChange"/>
            </div>
          </template>
          <template v-else-if="['string', 'number', 'date'].includes(getFieldType(condition.field) ?? '') && ['in', 'notIn'].includes(condition.operator ?? '')">
            <ShadcnInputTag v-model="condition.value"
                            :placeholder="t('dataFilter.placeholder.values')"
                            :class="{'border border-red-500 rounded animate-pulse  transition-colors duration-300': hasError(index, 'value')}"
                            @on-change="onChange"/>
          </template>
          <template v-else-if="getFieldType(condition.field) === 'number' && ['between', 'notBetween'].includes(condition.operator ?? '')">
            <div class="flex items-center gap-2">
              <ShadcnNumber v-model="condition.value[0]"
                            :placeholder="t('dataFilter.placeholder.minNumber')"
                            :class="{'border border-red-500 rounded animate-pulse  transition-colors duration-300': hasError(index, 'value')}"
                            @on-change="onBetweenChange(condition, 0)"/>
              <span>...</span>
              <ShadcnNumber v-model="condition.value[1]"
                            :placeholder="t('dataFilter.placeholder.maxNumber')"
                            :class="{'border border-red-500 rounded animate-pulse  transition-colors duration-300': hasError(index, 'value')}"
                            @on-change="onBetweenChange(condition, 1)"/>
            </div>
          </template>
          <template v-else-if="getFieldType(condition.field) === 'date' && ['between', 'notBetween'].includes(condition.operator ?? '')">
            <div class="flex items-center gap-2">
              <ShadcnInput v-model="condition.value[0]"
                           type="date"
                           :placeholder="t('dataFilter.placeholder.startDate')"
                           :class="{'border border-red-500 rounded animate-pulse  transition-colors duration-300': hasError(index, 'value')}"
                           @on-change="onBetweenChange(condition, 0)"/>
              <span>...</span>
              <ShadcnInput v-model="condition.value[1]"
                           type="date"
                           :placeholder="t('dataFilter.placeholder.endDate')"
                           :class="{'border border-red-500 rounded animate-pulse  transition-colors duration-300': hasError(index, 'value')}"
                           @on-change="onBetweenChange(condition, 1)"/>
            </div>
          </template>
          <template v-else>
            <ShadcnInput v-model="condition.value"
                         :placeholder="t('dataFilter.placeholder.value')"
                         :class="{'border border-red-500 rounded animate-pulse  transition-colors duration-300': hasError(index, 'value')}"
                         :type="getFieldType(condition.field) === 'date' ? 'date' : 'text'"
                         @on-change="onChange"/>
          </template>
        </div>

        <ShadcnIcon class="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                    icon="Trash"
                    color="#ef4444"
                    size="18"
                    @click="onRemoveCondition(index)"/>
      </div>
    </div>

    <ShadcnButton type="text" @click="onAddCondition">
      <div class="flex items-center gap-2 text-blue-500 -ml-4">
        <ShadcnIcon icon="Plus" size="16"/>
        <span>{{ t('dataFilter.text.addCondition') }}</span>
      </div>
    </ShadcnButton>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import { DataFilterEmits, DataFilterProps, FilterCondition, Operator, ValidationResult } from './types'

const emit = defineEmits<DataFilterEmits>()
const props = withDefaults(defineProps<DataFilterProps>(), {
  conditions: () => [],
  operators: () => [],
  fields: () => []
})

const validationErrors = ref<ValidationError[]>([])
const isValid = computed(() => validationErrors.value.length === 0)

const hasError = (conditionIndex: number, fieldName: string) => {
  return validationErrors.value.some(error => error.field === `${ conditionIndex }.${ fieldName }`)
}

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

const noValueOperators = ['isNull', 'isNotNull', 'isTrue', 'isFalse']

const getFieldType = (fieldValue: string | null) => {
  const field = props.fields.find(f => f.value === fieldValue)
  return field?.type as 'string' | 'number' | 'date' | 'boolean' | undefined
}

const getOperatorsByField = (fieldValue: string | null) => {
  const fieldType = getFieldType(fieldValue)
  if (!fieldType) {
    return []
  }

  return defaultOperators.value.filter(op => op.scope.includes(fieldType))
}

const shouldShowValueInput = (operator?: string | null) => {
  if (!operator) {
    return true
  }
  return !noValueOperators.includes(operator)
}

const getDefaultOperatorForField = (fieldValue: string) => {
  const operators = getOperatorsByField(fieldValue)
  return operators[0]?.value
}

const newCondition = () => {
  const field = props.fields[0]?.value || null
  const operator = field ? getDefaultOperatorForField(field) : null
  const condition: FilterCondition = {
    field,
    operator
  }

  // 只在非 noValueOperators 情况下添加 value 属性
  // Only add value attribute if not in noValueOperators
  if (!noValueOperators.includes(operator ?? '')) {
    condition.value = ['between', 'notBetween'].includes(operator ?? '') ?
        [undefined, undefined] :
        undefined
  }

  return condition
}

const localConditions = ref<FilterCondition[]>([...props.conditions])

const onBetweenChange = (condition: FilterCondition, _index: number) => {
  if (!Array.isArray(condition.value)) {
    condition.value = [undefined, undefined]
  }
  onChange()
}

onMounted(() => {
  if (localConditions.value.length === 0) {
    onAddCondition()
  }
})

watch(() => props.conditions, (newVal) => {
  localConditions.value = [...newVal]
}, { deep: true })

watch(
    () => localConditions.value.map(c => ({ field: c.field, operator: c.operator })),
    (newVals, oldVals) => {
      localConditions.value.forEach((condition, index) => {
        const newVal = newVals[index]
        const oldVal = oldVals?.[index]

        if (newVal.field !== oldVal?.field || newVal.operator !== oldVal?.operator) {
          const operators = getOperatorsByField(condition.field)
          if (!operators.find(op => op.value === condition.operator)) {
            condition.operator = operators[0]?.value
          }

          if (noValueOperators.includes(condition.operator ?? '')) {
            delete condition.value
          }
          else if (['between', 'notBetween'].includes(condition.operator ?? '')) {
            condition.value = [undefined, undefined]
          }
          else {
            condition.value = undefined
          }

          onChange()
        }
      })
    },
    { deep: true }
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

const validateCondition = (condition: FilterCondition, index: number): ValidationError[] => {
  const errors: ValidationError[] = []
  const field = props.fields.find(f => f.value === condition.field)

  if (!field) {
    errors.push({
      field: `${ index }.field`,
      message: t('dataFilter.validated.invalid')
    })
    return errors
  }

  if (!condition.field) {
    errors.push({
      field: `${ index }.field`,
      message: t('dataFilter.validated.required')
    })
  }

  if (!condition.operator) {
    errors.push({
      field: `${ index }.operator`,
      message: t('dataFilter.validated.operatorRequired')
    })
  }

  if (!shouldShowValueInput(condition.operator)) {
    return errors
  }

  if (condition.value === undefined || condition.value === '') {
    errors.push({
      field: `${ index }.value`,
      message: t('dataFilter.validated.valueRequired')
    })
  }

  if (field && condition.value !== undefined && condition.value !== '') {
    switch (field.type) {
      case 'number':
        if (['between', 'notBetween'].includes(condition.operator ?? '')) {
          const [min, max] = condition.value as [number?, number?]
          if (min === undefined || max === undefined) {
            errors.push({
              field: `${ index }.value`,
              message: t('dataFilter.validated.rangeRequired')
            })
          }
          else if (min > max) {
            errors.push({
              field: `${ index }.value`,
              message: t('dataFilter.validated.invalidRange')
            })
          }
        }
        break
      case 'date':
        if (['between', 'notBetween'].includes(condition.operator ?? '')) {
          const [startDate, endDate] = condition.value as [string?, string?]
          if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
            errors.push({
              field: `${ index }.value`,
              message: t('dataFilter.validated.invalidDateRange')
            })
          }
        }
        break
      case 'string':
        if (condition.operator === 'regex') {
          try {
            new RegExp(condition.value as string)
          }
          catch {
            errors.push({
              field: `${ index }.value`,
              message: t('dataFilter.validated.invalidRegex')
            })
          }
        }
        break
    }
  }

  return errors
}

const validateAllConditions = (): ValidationResult => {
  const allErrors: ValidationError[] = []

  localConditions.value.forEach((condition, index) => {
    const conditionErrors = validateCondition(condition, index)
    allErrors.push(...conditionErrors)
  })

  return {
    isValid: allErrors.length === 0,
    errors: allErrors
  }
}

const onChange = () => {
  const validationResult = validateAllConditions()
  validationErrors.value = validationResult.errors

  emit('update:modelValue', localConditions.value)
  emit('on-change', localConditions.value)
  emit('on-validation-change', {
    isValid: validationResult.isValid,
    errors: validationResult.errors
  })
}

const validate = (): ValidationResult => {
  const result = validateAllConditions()
  validationErrors.value = result.errors
  return result
}

defineExpose({
  validate,
  isValid,
  validationErrors
})
</script>
