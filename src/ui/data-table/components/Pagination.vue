<template>
  <div class="flex items-center justify-end space-x-8 px-4 py-1 bg-white border-t">
    <div class="flex items-center">
      <span class="text-sm text-gray-700 space-x-2">
        <span>{{ t('dataTable.text.pageSize') }}</span>
        <select v-model="localPageSize"
                class="mx-1 border rounded-sm"
                @change="handleSizeChange">
          <option v-for="size in pageSizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </span>
    </div>

    <div class="flex items-center space-x-4 justify-center">
      <ShadcnIcon icon="ChevronsLeft"
                  class="text-sm"
                  :class="{
                    'opacity-30 cursor-not-allowed': page === 1,
                    'cursor-pointer': page > 1
                  }"
                  @click="setCurrentPage(1)">
      </ShadcnIcon>

      <ShadcnIcon icon="ChevronLeft"
                  class="text-sm"
                  :class="{
                    'opacity-30 cursor-not-allowed': page === 1,
                    'cursor-pointer': page > 1
                  }"
                  @click="setCurrentPage(page - 1)">
      </ShadcnIcon>

      <span class="text-sm text-gray-700 flex items-center select-none">
        {{ page }} / {{ totalPages }}
      </span>

      <ShadcnIcon icon="ChevronRight"
                  class="text-sm"
                  :class="{
                    'opacity-30 cursor-not-allowed': page === totalPages,
                    'cursor-pointer': page < totalPages
                  }"
                  @click="setCurrentPage(page + 1)">
      </ShadcnIcon>

      <ShadcnIcon icon="ChevronsRight"
                  class="text-sm"
                  :class="{
                    'opacity-30 cursor-not-allowed': page === totalPages,
                    'cursor-pointer': page < totalPages
                  }"
                  @click="setCurrentPage(totalPages)">
      </ShadcnIcon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { t } from '@/utils/locale'
import { DataTablePaginationEmits } from '../types.ts'
import ShadcnIcon from '@/ui/icon'

const props = defineProps<{
  page: number
  size: number
  total: number
  totalPages: number
  options?: [10, 20, 50, 100]
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