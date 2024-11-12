<template>
  <ShadcnSelect v-model="selectedValue"
                lazy
                :options="options"
                :load-data="loadMoreData"
                @update:options="handleOptionsUpdate"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedValue = ref()
const options = ref<any[]>([])
let page = 1

const generateChildNodes = () => {
  return Array.from({ length: 10 }, (_, index) => ({
    value: `value-${ page }-${ index }`,
    label: `Option ${ page }-${ index }`,
    disabled: false,
    type: 'primary'
  }))
}

const handleOptionsUpdate = (newOptions: SelectOptionProps[]) => {
  options.value = newOptions
}

const loadMoreData = (callback: (children: any[]) => void) => {
  setTimeout(() => {
    console.log('Loading page:', page)
    const children = generateChildNodes()
    callback(children)
    page++
  }, 1000)
}

loadMoreData((children) => {
  options.value = children
})
</script>
