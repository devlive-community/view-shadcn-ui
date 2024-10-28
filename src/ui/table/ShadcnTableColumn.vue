<template>
  <th :class="['px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap break-words relative',
                fixed && 'sticky',
                fixed === 'left' && [
                  'bg-gray-50 z-10',
                  // The last left fixed column adds a special right border and shadow
                  isLastLeftFixed && [
                    border && [
                        'after:absolute after:inset-y-0 after:border-r after:border-r-gray-200 after:right-0 after:w-[1px] after:shadow-left-side',
                        'before:absolute before:inset-y-0 before:border-r before:border-r-gray-200 before:left-0 before:w-[1px]'
                    ],
                    'shadow-left-side'
                  ],
                  // The other left pinned columns only have a right border
                  !isLastLeftFixed && 'after:absolute after:inset-y-0 after:border-r-gray-200 after:right-0 after:w-[1px]'
                ],
                fixed === 'right' && [
                  'bg-gray-50 z-10',
                  // The first right fixed column adds a special left border and shadow
                  isFirstRightFixed && [
                      border && [
                          'before:absolute before:inset-y-0 before:border-l before:border-l-gray-200 before:left-0 before:w-[1px] before:shadow-right-side',
                          'after:absolute after:inset-y-0 after:border-r after:border-r-gray-200 after:right-0 after:w-[1px]'
                      ],
                    'shadow-right-side'
                  ],
                  // The other right pinned columns only have a right border
                  !isFirstRightFixed && 'after:absolute after:inset-y-0 after:border-r-gray-200 after:right-0 after:w-[1px]'
                ],
                border ? 'border-r border-r-gray-200' : 'border-b border-b-gray-200',
                'group-hover:bg-gray-50'
      ]"
      :style="{
              width: calcSize(width),
              minWidth: calcSize(width),
              maxWidth: calcSize(width),
              ...(fixed === 'left' && { left: calcSize(leftOffset) }),
              ...(fixed === 'right' && { right: calcSize(rightOffset) })
      }">
    <slot>
      {{ label }}
    </slot>
  </th>
</template>

<script setup lang="ts">
import { calcSize } from '@/utils/common.ts'

withDefaults(defineProps<{
  label?: string
  border?: boolean
  fixed?: 'left' | 'right'
  width?: string | number
  isLastLeftFixed?: boolean
  isFirstRightFixed?: boolean
  leftOffset?: number
  rightOffset?: number
}>(), {
  border: false,
  fixed: undefined,
  width: 'auto',
  isLastLeftFixed: false,
  isFirstRightFixed: false
})
</script>
