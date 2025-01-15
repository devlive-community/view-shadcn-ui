<template>
  <div :style="{
         width: width,
         flex: 'none'
       }"
       @click.stop>
    <ShadcnSelect v-model="selectValue"
                  :options="options"
                  :placeholder="placeholder"
                  @on-change="handleChange">
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
  isRowEditing?: boolean
  fieldKey?: string
  onRowValueChange?: (key: string, value: any) => void
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

const handleChange = () => {
  if (props.isRowEditing && props.fieldKey && props.onRowValueChange) {
    // 行编辑模式：更新行编辑状态
    props.onRowValueChange(props.fieldKey, selectValue.value)
  }
  else {
    // 单元格编辑模式：直接保存
    if (selectValue.value !== props.value) {
      emit('save', selectValue.value)
    }
  }
}
</script>