<!-- ShadcnTable.vue -->
<template>
  <div :class="['w-full border-gray-200 relative', border && 'border']"
       :style="{ width: calcSize(width) }">
    <div class="overflow-auto relative">
      <div class="min-w-full inline-block align-middle">
        <table class="min-w-full divide-y divide-gray-200">
          <slot>
            <ShadcnTableHeader>
              <ShadcnTableRow>
                <ShadcnTableColumn v-for="(c, index) in columns"
                                   :key="c.key"
                                   :label="c.label"
                                   :border="border"
                                   :fixed="c.fixed"
                                   :width="c.width"
                                   :left-offset="getLeftOffset(index)"
                                   :right-offset="getRightOffset(index)"
                                   :isLastLeftFixed="isLastLeftFixed(index)"
                                   :isFirstRightFixed="isFirstRightFixed(index)"/>
              </ShadcnTableRow>
            </ShadcnTableHeader>

            <ShadcnTableBody>
              <ShadcnTableRow v-for="(row, rowIndex) in data"
                              :key="rowIndex"
                              :stripe="(stripe && rowIndex % 2 === 1)"
                              @click="onRowClick(row, rowIndex)">
                <template v-for="(col, colIndex) in columns" :key="col.key">
                  <ShadcnTableCell :border="border"
                                   :fixed="col.fixed"
                                   :stripe="(stripe && rowIndex % 2 === 1)"
                                   :width="col.width"
                                   :left-offset="getLeftOffset(colIndex)"
                                   :right-offset="getRightOffset(colIndex)"
                                   :isLastLeftFixed="isLastLeftFixed(colIndex)"
                                   :isFirstRightFixed="isFirstRightFixed(colIndex)">
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
                      {{ row[col.key] }}
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
import { provide, useSlots } from 'vue'
import ShadcnTableHeader from './ShadcnTableHeader.vue'
import ShadcnTableBody from './ShadcnTableBody.vue'
import ShadcnTableRow from './ShadcnTableRow.vue'
import ShadcnTableColumn from './ShadcnTableColumn.vue'
import ShadcnTableCell from './ShadcnTableCell.vue'
import { Column } from '@/ui/table/configure.ts'
import { calcSize } from '@/utils/common.ts'
import { toNumber } from 'lodash'

provide('ShadcnTable', true)

const emit = defineEmits(['on-row-click'])

const props = withDefaults(defineProps<{
  columns: Array<Column>
  data: Array<any>
  stripe?: boolean
  border: boolean
  width?: string | number
}>(), {
  stripe: false,
  border: false,
  width: '100%'
})

const slots = useSlots()

const hasSlot = (name: string) => {
  return !!slots[name]
}

const validateSlot = (column: Column) => {
  if (column.slot && !hasSlot(column.slot)) {
    throw new Error(`The slot "${ column.slot }" is required for column "${ column.label }" but not provided.`)
  }
  return ''
}

// Determine whether it is the last left fixed column
const isLastLeftFixed = (currentIndex: number) => {
  let isLast = true
  for (let i = currentIndex + 1; i < props.columns.length; i++) {
    if (props.columns[i].fixed === 'left') {
      isLast = false
      break
    }
  }
  return props.columns[currentIndex].fixed === 'left' && isLast
}

const getLeftOffset = (index: number) => {
  let offset = 0
  for (let i = 0; i < index; i++) {
    if (props.columns[i].fixed === 'left') {
      offset += toNumber(props.columns[i].width)
    }
  }
  return offset
}

const getRightOffset = (index: number) => {
  let offset = 0
  for (let i = props.columns.length - 1; i > index; i--) {
    if (props.columns[i].fixed === 'right') {
      offset += toNumber(props.columns[i].width)
    }
  }
  return offset
}

// Determine whether it is the first right fixed column
const isFirstRightFixed = (currentIndex: number) => {
  let isFirst = true
  for (let i = currentIndex - 1; i >= 0; i--) {
    if (props.columns[i].fixed === 'right') {
      isFirst = false
      break
    }
  }
  return props.columns[currentIndex].fixed === 'right' && isFirst
}

const onRowClick = (row: any, index: number) => {
  emit('on-row-click', row, index)
}
</script>
