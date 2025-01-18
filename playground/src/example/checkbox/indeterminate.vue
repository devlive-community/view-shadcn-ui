<template>
  <div class="p-32">
    <ShadcnCheckbox :modelValue="checkAll"
                    :value="true"
                    :indeterminate="isIndeterminate"
                    @update:modelValue="onCheckAllChange">全选
    </ShadcnCheckbox>

    <ShadcnDivider/>

    <ShadcnCheckboxGroup v-model="checkedGroup">
      <ShadcnCheckbox value="Vue">Vue</ShadcnCheckbox>
      <ShadcnCheckbox value="Nuxt">Nuxt</ShadcnCheckbox>
    </ShadcnCheckboxGroup>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

// 所有选项
const options = ['Vue', 'Nuxt']

// 选中的值
const checkedGroup = ref<string[]>([])

// 全选状态
const checkAll = computed(() => {
  return checkedGroup.value.length === options.length
})

// 计算半选状态
const isIndeterminate = computed(() => {
  return checkedGroup.value.length > 0 && checkedGroup.value.length < options.length
})

// 全选/取消全选处理
const onCheckAllChange = (checked: boolean) => {
  checkedGroup.value = checked ? [...options] : []
}
</script>