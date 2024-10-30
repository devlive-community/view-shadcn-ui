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
              @click="goToPage(Number(item))"
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

    <template v-if="showSizer">
      <slot name="sizer">
        <ShadcnSelect v-model="pageSize"
                      class="w-24"
                      :options="sizerOptions"/>
      </slot>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { toNumber } from 'lodash'
import ShadcnSelect from '@/ui/select'

interface ShadcnOption
{
  label: string
  value: number | string
}

const emit = defineEmits(['update:modelValue', 'on-change', 'on-prev', 'on-next', 'on-change-size'])

const props = withDefaults(defineProps<{
  modelValue?: number | string
  total?: number | string
  pageSize?: number | string
  maxShowPage?: number | string
  prevText?: string
  nextText?: string
  showTotal?: boolean
  showSizer?: boolean
  sizerOptions?: (number | string)[]
}>(), {
  total: 100,
  pageSize: 10,
  maxShowPage: 5,
  prevText: 'Prev Page',
  nextText: 'Next Page',
  showTotal: false,
  showSizer: false,
  sizerOptions: () => [10, 20, 50, 100]
})

const currentPage = ref(toNumber(props.modelValue))
const pageSize = ref(toNumber(props.pageSize))

const totalPages = computed(() => Math.ceil(toNumber(props.total) / pageSize.value))

const displayPages = computed(() => {
  const maxShow = toNumber(props.maxShowPage)
  const total = totalPages.value
  const current = currentPage.value

  if (total <= maxShow) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const sidePages = Math.floor((maxShow - 3) / 2)
  let leftPages: (number | string)[] = []
  let rightPages: (number | string)[] = []

  if (current <= sidePages + 2) {
    leftPages = Array.from({ length: maxShow - 2 }, (_, i) => i + 1)
    rightPages = ['...', total]
  }
  else if (current >= total - sidePages - 1) {
    leftPages = [1, '...']
    rightPages = Array.from({ length: maxShow - 2 }, (_, i) => total - (maxShow - 3) + i)
  }
  else {
    leftPages = [1, '...']
    const middleStart = current - Math.floor((maxShow - 4) / 2)
    const middlePages = Array.from({ length: maxShow - 4 }, (_, i) => middleStart + i)
    rightPages = ['...', total]
    return [...leftPages, ...middlePages, ...rightPages]
  }

  return [...leftPages, ...rightPages]
})

const sizerOptions = computed(() => {
  const options = Array<ShadcnOption>()
  props.sizerOptions.forEach((item) => {
    options.push({
      label: `${ item } items`,
      value: item
    })
  })
  return options
})

watch(() => props.modelValue, (newValue) => {
  currentPage.value = toNumber(newValue)
})

watch(() => props.pageSize, (newValue) => {
  pageSize.value = toNumber(newValue)
  currentPage.value = 1
  emit('update:modelValue', currentPage.value)
  emit('on-change', currentPage.value)
})

watch(pageSize, (newValue) => {
  emit('on-change-size', newValue)
  currentPage.value = 1
  emit('update:modelValue', currentPage.value)
  emit('on-change', currentPage.value)
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
