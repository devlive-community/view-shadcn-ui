<template>
  <div class="flex items-center justify-center space-x-2">
    <div v-if="showTotal || $slots.showTotal" class="text-sm text-gray-600">
      <slot name="showTotal">
        Total {{ total }} items
      </slot>
    </div>

    <button @click="onPrevPage"
            :class="['px-2 py-1 text-xs h-8 bg-gray-100 rounded',
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            ]"
            :disabled="currentPage === 1">
      {{ prevText }}
    </button>

    <template v-for="item in displayPages" :key="item">
      <span v-if="item === '...'" class="px-2 py-1">...</span>
      <button v-else
              @click="goToPage(item)"
              :class="['px-2 py-1 text-xs rounded w-8 h-8 flex items-center justify-center',
                      item === currentPage ? 'bg-blue-400 text-white cursor-not-allowed' : 'bg-gray-100'
              ]"
              :disabled="item === currentPage">
        {{ item }}
      </button>
    </template>

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
  maxShowPage?: number | string
  prevText?: string
  nextText?: string
  showTotal?: boolean
}>(), {
  total: 100,
  pageSize: 10,
  maxShowPage: 5,
  prevText: 'Prev Page',
  nextText: 'Next Page',
  showTotal: false
})

const totalPages = computed(() => Math.ceil(toNumber(props.total) / toNumber(props.pageSize)))
const currentPage = ref(toNumber(props.modelValue))

const displayPages = computed(() => {
  const maxShow = toNumber(props.maxShowPage)
  const total = totalPages.value
  const current = currentPage.value

  // If the total number of pages is less than or equal to the maximum display number, display all page numbers
  if (total <= maxShow) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  // Calculate the number of page numbers that should be displayed on the left and right sides
  const sidePages = Math.floor((maxShow - 3) / 2) // Subtract the first page, last page and current page

  let leftPages: (number | string)[] = []
  let rightPages: (number | string)[] = []

  // Dealing with situations close to the start
  if (current <= sidePages + 2) {
    leftPages = Array.from({ length: maxShow - 2 }, (_, i) => i + 1)
    rightPages = ['...', total]
  }
  // Dealing with the end situation
  else if (current >= total - sidePages - 1) {
    leftPages = [1, '...']
    rightPages = Array.from({ length: maxShow - 2 }, (_, i) => total - (maxShow - 3) + i)
  }
  // Dealing with the middle case
  else {
    leftPages = [1, '...']
    const middleStart = current - Math.floor((maxShow - 4) / 2)
    const middlePages = Array.from(
        { length: maxShow - 4 },
        (_, i) => middleStart + i
    )
    rightPages = ['...', total]
    return [...leftPages, ...middlePages, ...rightPages]
  }

  return [...leftPages, ...rightPages]
})

watch(() => props.modelValue, (newValue) => {
  currentPage.value = toNumber(newValue)
})

const goToPage = (page: number | string) => {
  page = toNumber(page)
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
