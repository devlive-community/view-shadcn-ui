<template>
  <div :class="[
    'flex items-center justify-end space-x-8 px-4 py-1 border-t',
    dark ? 'bg-gray-900 border-gray-700' : 'bg-white'
  ]">
    <div class="flex items-center">
      <span :class="['text-sm space-x-2', dark ? 'text-gray-300' : 'text-gray-700']">
        <span>{{ t('dataTable.text.pageSize') }}</span>
        <select v-model="localPageSize"
                :class="[
                  'mx-1 border rounded-sm',
                  dark ? 'bg-gray-800 border-gray-600 text-gray-200' : 'bg-white border-gray-300'
                ]"
                @change="handleSizeChange">
          <option v-for="size in pageSizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </span>
    </div>

    <div class="flex items-center space-x-4 justify-center">
      <Icon icon="ChevronsLeft"
            class="text-sm"
            :class="{
                    'opacity-30 cursor-not-allowed': page === 1,
                    'cursor-pointer': page > 1
                  }"
            :dark="dark"
            @click="setCurrentPage(1)">
      </Icon>

      <Icon icon="ChevronLeft"
            class="text-sm"
            :class="{
              'opacity-30 cursor-not-allowed': page === 1,
              'cursor-pointer': page > 1
            }"
            :dark="dark"
            @click="setCurrentPage(page - 1)">
      </Icon>

      <span :class="['text-sm flex items-center select-none', dark ? 'text-gray-300' : 'text-gray-700']">
        {{ page }} / {{ totalPages }}
      </span>

      <Icon icon="ChevronRight"
            class="text-sm"
            :class="{
              'opacity-30 cursor-not-allowed': page === totalPages,
              'cursor-pointer': page < totalPages
            }"
            :dark="dark"
            @click="setCurrentPage(page + 1)">
      </Icon>

      <Icon icon="ChevronsRight"
            class="text-sm"
            :class="{
              'opacity-30 cursor-not-allowed': page === totalPages,
              'cursor-pointer': page < totalPages
            }"
            :dark="dark"
            @click="setCurrentPage(totalPages)">
      </Icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { t } from '@/utils/locale'
import { DataTablePaginationEmits } from '../types.ts'
import Icon from '@/ui/icon'

const props = defineProps<{
  page: number
  size: number
  total: number
  totalPages: number
  options?: [10, 20, 50, 100]
  dark?: boolean
}>()

const emit = defineEmits<DataTablePaginationEmits>()

const pageSizes = ref(props.options || [10, 20, 50, 100])
const localPageSize = ref(props.size)

const setCurrentPage = (page: number) => {
  emit('on-page-change', page)
}

const handleSizeChange = () => {
  emit('on-size-change', localPageSize.value)
}

watch(() => props.size, (newSize) => {
  localPageSize.value = newSize
})
</script>