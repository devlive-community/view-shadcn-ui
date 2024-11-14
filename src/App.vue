<template>
  <div class="p-32">
    <ShadcnButton @click="onAdd">Add Column</ShadcnButton>

    <ShadcnForm v-model="formState" class="mt-2" @on-submit="onSubmit">
      <ShadcnFormItem v-for="(item, index) in formState.columns"
                      :name="`columns[${index}].name`"
                      :key="`column-${index}`"
                      :label="`Column ${index + 1}`"
                      :rules="[{ required: true, message: 'Please input column name!' }]">
        <ShadcnSpace class="items-center">
          <ShadcnInput v-model="formState.columns[index].name" :name="`column-${index}`"/>
          <ShadcnIcon icon="MinusCircle" class="cursor-pointer" color="#f43f5e" @click="onRemove(index)"/>
        </ShadcnSpace>
      </ShadcnFormItem>

      <ShadcnButton submit>Submit</ShadcnButton>
    </ShadcnForm>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const formState = ref({
  columns: [] as any[]
})

const onAdd = () => {
  formState.value.columns.push({
    name: `Column ${ formState.value.columns.length + 1 }`,
    value: ''
  })
}

const onRemove = (index: number) => {
  formState.value.columns.splice(index, 1)
}

const onSubmit = () => console.log(formState.value)

onMounted(() => onAdd())
</script>
