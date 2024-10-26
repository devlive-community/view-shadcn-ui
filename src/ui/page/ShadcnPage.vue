<template>
  <div class="flex items-center justify-center space-x-2">
    <button @click="onPrevPage"
            :class="['px-2 py-1 text-xs h-8 bg-gray-100 rounded',
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            ]"
            :disabled="currentPage === 1">
      {{ prevText }}
    </button>

    <span v-for="page in totalPages" :key="page">
      <button @click="goToPage(page)"
              :class="['px-2 py-1 text-xs rounded w-8 h-8 flex items-center justify-center',
                      page === currentPage ? 'bg-blue-400 text-white cursor-not-allowed' : 'bg-gray-100'
              ]"
              :disabled="page === currentPage">
        {{ page }}
      </button>
    </span>

    <button @click="onNextPage"
            :class="['px-2 py-1 text-xs h-8 bg-gray-100 rounded',
                    currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            ]"
            :disabled="currentPage === totalPages">
      {{ nextText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { toNumber } from 'lodash'

const emit = defineEmits(['update:modelValue', 'on-change', 'on-prev', 'on-next'])

const props = withDefaults(defineProps<{
  modelValue?: number | string
  total?: number | string
  pageSize?: number | string
  prevText?: string
  nextText?: string
}>(), {
  total: 100,
  pageSize: 10,
  prevText: 'Prev Page',
  nextText: 'Next Page'
})

const totalPages = computed(() => Math.ceil(toNumber(props.total) / toNumber(props.pageSize)))

const currentPage = ref(toNumber(props.modelValue))

watch(() => props.modelValue, (newValue) => {
  currentPage.value = toNumber(newValue)
})

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:modelValue', page)
    emit('on-change', page)
  }
}

const onPrevPage = () => {
  if (currentPage.value > 1) {
    const page = currentPage.value - 1
    emit('update:modelValue', page)
    emit('on-prev', page)
  }
}

const onNextPage = () => {
  if (currentPage.value < totalPages.value) {
    const page = currentPage.value + 1
    emit('update:modelValue', page)
    emit('on-next', page)
  }
}
</script>
