<template>
  <div class="w-full space-y-4">
    <div class="flex flex-col gap-4">
      <div v-for="(condition, index) in localConditions"
           class="flex items-center gap-2 group"
           :key="index">

        <ShadcnSelect v-model="condition.field" class="min-w-48">
          <template #options>
            <ShadcnSelectOption v-for="field in fields"
                                :key="field.value"
                                :value="field.value"
                                :label="field.label"/>
          </template>
        </ShadcnSelect>

        <ShadcnSelect v-model="condition.operator" class="min-w-48" @change="onChange">
          <template #options>
            <ShadcnSelectOption v-for="op in defaultOperators"
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
    { label: t('dataFilter.text.eq'), value: 'eq' },
    { label: t('dataFilter.text.neq'), value: 'neq' },
    { label: t('dataFilter.text.gt'), value: 'gt' },
    { label: t('dataFilter.text.gte'), value: 'gte' },
    { label: t('dataFilter.text.lt'), value: 'lt' },
    { label: t('dataFilter.text.lte'), value: 'lte' },
    { label: t('dataFilter.text.in'), value: 'in' },
    { label: t('dataFilter.text.notIn'), value: 'notIn' },
    { label: t('dataFilter.text.between'), value: 'between' },
    { label: t('dataFilter.text.notBetween'), value: 'notBetween' },
    { label: t('dataFilter.text.isNull'), value: 'isNull' },
    { label: t('dataFilter.text.isNotNull'), value: 'isNotNull' },
    { label: t('dataFilter.text.like'), value: 'like' },
    { label: t('dataFilter.text.notLike'), value: 'notLike' },
    { label: t('dataFilter.text.regex'), value: 'regex' },
    { label: t('dataFilter.text.notRegex'), value: 'notRegex' },
    { label: t('dataFilter.text.isTrue'), value: 'isTrue' },
    { label: t('dataFilter.text.isFalse'), value: 'isFalse' }
  ]
})

const newCondition = () => {
  return {
    field: props.fields[0]?.value || undefined,
    operator: defaultOperators.value[0]?.value || undefined,
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
