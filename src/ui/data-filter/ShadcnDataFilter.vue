<template>
  <div class="w-full space-y-4">
    <div class="flex flex-col gap-4">
      <div v-for="(condition, index) in localConditions" class="flex items-center gap-2" :key="index">

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
            <ShadcnSelectOption v-for="op in operators"
                                :key="op"
                                :value="op"
                                :label="op"/>
          </template>
        </ShadcnSelect>

        <ShadcnInput v-model="condition.value"
                     placeholder="Enter value"
                     @input="onChange"/>

        <ShadcnIcon class="cursor-pointer"
                    icon="Trash"
                    color="#ef4444"
                    size="18"
                    @click="onRemoveCondition(index)"/>
      </div>
    </div>

    <ShadcnButton type="text" @click="onAddCondition">
      <div class="flex items-center gap-2 text-blue-500">
        <ShadcnIcon icon="Plus" size="18"/>
        <span>Add Condition</span>
      </div>
    </ShadcnButton>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { type DataFilterEmits, type DataFilterProps, type FilterCondition } from './types'

const emit = defineEmits<DataFilterEmits>()
const props = withDefaults(defineProps<DataFilterProps>(), {
  conditions: () => [],
  operators: () => ['=', '!=', '>', '<', '>=', '<=', 'LIKE', 'IN'],
  fields: () => []
})

const newCondition = () => {
  return {
    field: props.fields[0]?.value || undefined,
    operator: props.operators[0] || undefined,
    value: undefined
  }
}

const localConditions = ref<FilterCondition[]>([...props.conditions])

if (localConditions.value.length === 0) {
  const condition = newCondition()
  localConditions.value.push(condition)
}

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
