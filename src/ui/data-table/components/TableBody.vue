<template>
  <tbody>
  <tr v-for="(row, index) in data"
      :key="index"
      :class="[ 'border-b hover:bg-gray-50',
        BaseSize[size]
      ]">
    <td v-for="col in columns"
        :key="col.key"
        :style="col.width ? { width: calcSize(col.width) } : {}"
        :class="[ TablePaddingSize[size],
          col.ellipsis !== false ? [ 'max-w-lg truncate whitespace-nowrap overflow-hidden' ] : [ 'break-words whitespace-normal' ]
        ]">
      {{ row[col.key] }}
    </td>
  </tr>
  </tbody>
</template>

<script setup lang="ts">
import { DataTableProps } from '../types'
import { BaseSize } from '@/ui/common/size.ts'
import { TablePaddingSize } from '@/ui/data-table/size.ts'
import { calcSize } from '@/utils/common.ts'

withDefaults(defineProps<DataTableProps>(), {
  size: 'default'
})
</script>