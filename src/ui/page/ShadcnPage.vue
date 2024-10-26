<template>
  <div class="flex items-center justify-center space-x-2">
    <span v-for="page in totalPages" :key="page">
      <button @click="goToPage(page)"
              :class="['px-2 py-1 text-xs rounded w-6 h-6 flex items-center justify-center',
                      page === currentPage ? 'bg-blue-400 text-white' : 'bg-gray-100'
              ]">
        {{ page }}
      </button>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { toNumber } from 'lodash'

const emit = defineEmits(['update:modelValue', 'on-change'])

const props = withDefaults(defineProps<{
  modelValue?: number | string
  total?: number | string
  pageSize?: number | string
}>(), {
  total: 100,
  pageSize: 10
})

const totalPages = computed(() => Math.ceil(toNumber(props.total) / toNumber(props.pageSize)))

const currentPage = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  currentPage.value = newVal
})

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:modelValue', page)
    emit('on-change', page)
  }
}
</script>
