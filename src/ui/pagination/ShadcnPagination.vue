<template>
  <div :class="[
    'flex items-center justify-center space-x-2',
    glass && 'backdrop-blur-xl backdrop-saturate-150 rounded-lg p-3',
    glass && (dark ? 'bg-gray-800/30 border border-white/20' : 'bg-white/30 border border-gray-400/40')
  ]">
    <div v-if="showTotal || $slots.showTotal" :class="['text-sm', glass ? (dark ? 'text-gray-100' : 'text-gray-800') : (dark ? 'text-gray-400' : 'text-gray-600')]">
      <slot name="showTotal">
        {{ t('pagination.text.total', { total }) }}
      </slot>
    </div>

    <button @click="onPrevPage"
            :class="[
              'px-2 py-1 text-xs h-8 rounded transition-colors select-none',
              glass && !dark ? 'bg-white/50 text-gray-800 hover:bg-white/70' : '',
              glass && dark ? 'bg-white/20 text-gray-100 hover:bg-white/30' : '',
              !glass && dark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : '',
              !glass && !dark ? 'bg-gray-100 hover:bg-gray-200' : '',
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            ]"
            :disabled="currentPage === 1">
      {{ prevText }}
    </button>

    <template v-for="item in displayPages" :key="item">
      <span v-if="item === '...'" :class="['px-2 py-1', glass ? (dark ? 'text-gray-100' : 'text-gray-800') : (dark ? 'text-gray-400' : 'text-gray-600')]">...</span>
      <button v-else
              @click="goToPage(Number(item))"
              :class="[
                'px-2 py-1 text-xs rounded w-8 h-8 flex items-center justify-center transition-colors select-none',
                item === currentPage && !glass ? 'bg-blue-500 text-white cursor-not-allowed' : '',
                item === currentPage && glass ? (dark ? 'bg-blue-600/60 text-white cursor-not-allowed' : 'bg-blue-500/60 text-white cursor-not-allowed') : '',
                item !== currentPage && glass && !dark ? 'bg-white/50 text-gray-800 hover:bg-white/70' : '',
                item !== currentPage && glass && dark ? 'bg-white/20 text-gray-100 hover:bg-white/30' : '',
                item !== currentPage && !glass && dark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : '',
                item !== currentPage && !glass && !dark ? 'bg-gray-100 hover:bg-gray-200' : ''
              ]"
              :disabled="item === currentPage">
        {{ item }}
      </button>
    </template>

    <button @click="onNextPage"
            :class="[
              'px-2 py-1 text-xs h-8 rounded transition-colors select-none',
              glass && !dark ? 'bg-white/50 text-gray-800 hover:bg-white/70' : '',
              glass && dark ? 'bg-white/20 text-gray-100 hover:bg-white/30' : '',
              !glass && dark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : '',
              !glass && !dark ? 'bg-gray-100 hover:bg-gray-200' : '',
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            ]"
            :disabled="currentPage === totalPages">
      {{ nextText }}
    </button>

    <template v-if="showSizer">
      <slot name="sizer">
        <ShadcnSelect v-model="pageSize"
                      class="w-auto"
                      :dark="dark"
                      :glass="glass"
                      :options="sizerOptions"/>
      </slot>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import { ShadcnSelect } from '@/ui/select'

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
  dark?: boolean
  glass?: boolean
}>(), {
  total: 100,
  pageSize: 10,
  maxShowPage: 5,
  prevText: String(t('pagination.text.previous')),
  nextText: String(t('pagination.text.next')),
  showTotal: false,
  showSizer: false,
  sizerOptions: () => [10, 20, 50, 100],
  dark: false,
  glass: false
})

const currentPage = ref(Number(props.modelValue))
const pageSize = ref(Number(props.pageSize))

const totalPages = computed(() => Math.ceil(Number(props.total) / pageSize.value))

const displayPages = computed(() => {
  const maxShow = Number(props.maxShowPage)
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
      label: String(t('pagination.text.item', { item })),
      value: item
    })
  })
  return options
})

watch(() => props.modelValue, (newValue) => {
  currentPage.value = Number(newValue)
})

watch(() => props.pageSize, (newValue) => {
  pageSize.value = Number(newValue)
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
