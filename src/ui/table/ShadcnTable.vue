<template>
  <div :class="['w-full relative',
                glass && 'backdrop-blur-xl backdrop-saturate-150',
                glass && 'shadow-lg shadow-black/5',
                glass && (dark ? 'bg-white/10 border-white/20' : 'bg-white/30 border-gray-400/40'),
                !glass && (dark ? 'border-gray-600' : 'border-gray-200'),
                border && 'border']"
       :style="{ width: calcSize(width), height: calcSize(height), minHeight: calcSize(minHeight) }">
    <div class="overflow-auto relative h-full">
      <div class="min-w-full inline-block align-middle">
        <table :class="['min-w-full divide-y',
                        glass ? (dark ? 'divide-white/20' : 'divide-gray-400/40') : (dark ? 'divide-gray-600' : 'divide-gray-200')]">
          <slot>
            <ShadcnTableHeader :dark="dark">
              <ShadcnTableRow :dark="dark">
                <ShadcnTableColumn v-for="(c, index) in reorderedColumns"
                                   :key="c.key"
                                   :label="c.label"
                                   :border="border"
                                   :fixed="c.fixed"
                                   :width="c.width"
                                   :left-offset="getLeftOffset(index)"
                                   :right-offset="getRightOffset(index)"
                                   :isLastLeftFixed="isLastLeftFixed(index)"
                                   :isFirstRightFixed="isFirstRightFixed(index)"
                                   :dark="dark"
                                   :size="size"/>
              </ShadcnTableRow>
            </ShadcnTableHeader>

            <ShadcnTableBody>
              <ShadcnTableRow v-for="(row, rowIndex) in data"
                              :key="String(rowIndex)"
                              :stripe="(stripe && rowIndex % 2 === 1)"
                              :dark="dark"
                              @click="onRowClick(row, rowIndex)">
                <template v-for="(col, colIndex) in reorderedColumns" :key="col.key">
                  <ShadcnTableCell :border="border"
                                   :fixed="col.fixed"
                                   :stripe="(stripe && rowIndex % 2 === 1)"
                                   :width="col.width"
                                   :left-offset="getLeftOffset(colIndex)"
                                   :right-offset="getRightOffset(colIndex)"
                                   :isLastLeftFixed="isLastLeftFixed(colIndex)"
                                   :isFirstRightFixed="isFirstRightFixed(colIndex)"
                                   :dark="dark"
                                   :size="size">
                    <template v-if="col.slot">
                      <template v-if="hasSlot(col.slot)">
                        <slot :name="col.slot" :row="row" :index="rowIndex"/>
                      </template>
                      <template v-else>
                        <span class="text-red-500">
                          {{ validateSlot(col) }}
                        </span>
                      </template>
                    </template>
                    <template v-else>
                      {{ row[String(col.key)] }}
                    </template>
                  </ShadcnTableCell>
                </template>
              </ShadcnTableRow>
            </ShadcnTableBody>
          </slot>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, useSlots } from 'vue'
import ShadcnTableHeader from './ShadcnTableHeader.vue'
import ShadcnTableBody from './ShadcnTableBody.vue'
import ShadcnTableRow from './ShadcnTableRow.vue'
import ShadcnTableColumn from './ShadcnTableColumn.vue'
import ShadcnTableCell from './ShadcnTableCell.vue'
import { calcSize } from '@/utils/common.ts'
import { toNumber } from 'lodash'
import { ColumnProps, TableProps } from '@/ui/table/types.ts'

provide('ShadcnTable', true)

const emit = defineEmits(['on-row-click'])

const props = withDefaults(defineProps<TableProps>(), {
  stripe: false,
  border: false,
  width: '100%',
  height: 'auto',
  minHeight: 300,
  size: 'default',
  dark: false,
  glass: false
})

const slots = useSlots()

const hasSlot = (name: string) => {
  return !!slots[name]
}

const validateSlot = (column: ColumnProps) => {
  if (column.slot && !hasSlot(column.slot)) {
    throw new Error(`The slot "${ column.slot }" is required for column "${ column.label }" but not provided.`)
  }
  return ''
}

// Rearrange the sequence so that the fixed columns are placed on both sides
const reorderedColumns = computed(() => {
  const leftFixed = Array<ColumnProps>()
  const notFixed = Array<ColumnProps>()
  const rightFixed = Array<ColumnProps>()

  // Categorize the columns
  for (const col of props.columns) {
    if (col.fixed === 'left') {
      leftFixed.push(col)
    }
    else if (col.fixed === 'right') {
      rightFixed.push(col)
    }
    else {
      notFixed.push(col)
    }
  }

  // Merge all columns
  return [...leftFixed, ...notFixed, ...rightFixed]
})

const isLastLeftFixed = (currentIndex: number) => {
  const currentCol = reorderedColumns.value[currentIndex]
  if (currentCol.fixed !== 'left') {
    return false
  }

  // Check if the next column is not a left fixed column
  const nextCol = reorderedColumns.value[currentIndex + 1]
  return !nextCol || nextCol.fixed !== 'left'
}

const isFirstRightFixed = (currentIndex: number) => {
  const currentCol = reorderedColumns.value[currentIndex]
  if (currentCol.fixed !== 'right') {
    return false
  }

  // Check if the previous column is not a right-pinned column
  const prevCol = reorderedColumns.value[currentIndex - 1]
  return !prevCol || prevCol.fixed !== 'right'
}

const getLeftOffset = (index: number) => {
  if (!reorderedColumns.value[index].fixed || reorderedColumns.value[index].fixed !== 'left') {
    return 0
  }
  let offset = 0
  for (let i = 0; i < index; i++) {
    offset += toNumber(reorderedColumns.value[i].width)
  }
  return offset
}

const getRightOffset = (index: number) => {
  if (!reorderedColumns.value[index].fixed || reorderedColumns.value[index].fixed !== 'right') {
    return 0
  }
  let offset = 0
  for (let i = reorderedColumns.value.length - 1; i > index; i--) {
    offset += toNumber(reorderedColumns.value[i].width)
  }
  return offset
}

const onRowClick = (row: any, index: number) => {
  emit('on-row-click', row, index)
}
</script>
