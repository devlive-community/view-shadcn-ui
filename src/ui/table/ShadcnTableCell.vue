<template>
  <td :class="['text-sm whitespace-normal break-words relative',
              dark ? 'text-gray-300' : 'text-gray-500',
              TableCellSize[size],
              fixed && 'sticky',
              fixed === 'left' && [
                stripe ? (dark ? 'bg-gray-700' : 'bg-gray-50') : (dark ? 'bg-gray-800' : 'bg-white'),
                border && 'border-b',
                !border && 'border-b',
                'z-10',
                'transition-colors duration-200',
                dark ? 'group-hover:bg-gray-600' : 'group-hover:bg-gray-100',
                // The last left fixed column adds a special right border and shadow
                isLastLeftFixed && [
                  border && [
                      'after:absolute after:inset-y-0 after:border-r after:border-r-gray-200 after:right-0 after:w-[1px] after:shadow-left-side',
                      'before:absolute before:inset-y-0 before:border-r before:border-r-gray-200 before:left-0 before:w-[1px]'
                  ],
                  'shadow-left-side'
                ],
                // The other left pinned columns only have a right border
                !isLastLeftFixed && [
                  'after:absolute after:inset-y-0 after:border-r-gray-200 after:right-0 after:w-[1px]'
                ]
              ],
              fixed === 'right' && [
                stripe ? (dark ? 'bg-gray-700' : 'bg-gray-50') : (dark ? 'bg-gray-800' : 'bg-white'),
                border && 'border-b',
                !border && 'border-b',
                'z-10',
                'transition-colors duration-200',
                dark ? 'group-hover:bg-gray-600' : 'group-hover:bg-gray-100',
                // The first right fixed column adds a special left border and shadow
                isFirstRightFixed && [
                  border && [
                      'before:absolute before:inset-y-0 before:border-l before:border-l-gray-200 before:left-0 before:w-[1px] before:shadow-right-side',
                      'after:absolute after:inset-y-0 after:border-r after:border-r-gray-200 after:right-0 after:w-[1px]'
                  ],
                  'shadow-right-side'
                ],
                // The other right pinned columns only have a right border
                !isFirstRightFixed && [
                  'after:absolute after:inset-y-0 after:right-0 after:w-[1px]'
                ]
              ],
              !fixed && [
                !border && 'border-b',
                border && 'border-b border-l',
                stripe ? (dark ? 'bg-gray-700' : 'bg-gray-50') : (dark ? 'bg-gray-800' : 'bg-white'),
                'transition-colors duration-200',
                dark ? 'group-hover:bg-gray-600' : 'group-hover:bg-gray-100'
              ]
      ]"
      :style="{
              width: calcSize(width),
              minWidth: calcSize(width),
              maxWidth: calcSize(width),
              ...(fixed === 'left' && { left: calcSize(leftOffset) }),
              ...(fixed === 'right' && { right: calcSize(rightOffset) })
      }">
    <slot/>
  </td>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { calcSize } from '@/utils/common.ts'
import { ColumnProps, TableCellSize } from '@/ui/table/types.ts'

withDefaults(defineProps<ColumnProps>(), {
  border: false,
  stripe: false,
  fixed: undefined,
  width: 'auto',
  isLastLeftFixed: false,
  isFirstRightFixed: false,
  size: 'default',
  dark: false
})

const isTable = inject('ShadcnTable', false)
if (!isTable) {
  throw new Error('ShadcnTableCell must be used within ShadcnTable')
}
</script>
