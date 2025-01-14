<template>
  <div :style="{
         width: width,
         flex: 'none'
       }"
       @click.stop>
    <ShadcnSelect v-model="selectValue"
                  :options="options"
                  :placeholder="placeholder"
                  @on-change="handleBlur">
    </ShadcnSelect>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import ShadcnSelect from '@/ui/select'

interface SelectOption
{
  label: string
  value: any
}

const props = defineProps<{
  value: any
  width: string
  options: SelectOption[]
  placeholder?: string
}>()

const emit = defineEmits<{
  'save': [value: any]
  'cancel': []
}>()

const selectValue = ref(props.value)

// 监听外部value变化
watch(() => props.value, (newValue) => {
  selectValue.value = newValue
})

const handleBlur = () => {
  if (selectValue.value !== props.value) {
    console.log(selectValue.value)
    emit('save', selectValue.value)
  }
}
</script>