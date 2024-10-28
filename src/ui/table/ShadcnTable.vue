<!-- ShadcnTable.vue -->
<template>
  <div :class="['w-full border-gray-200 relative', border && 'border']"
       :style="{ width: calcSize(width) }">
    <div class="overflow-auto relative"> <!-- 设置 relative 和 overflow -->
      <div class="min-w-full inline-block align-middle">
        <table class="min-w-full divide-y divide-gray-200">
          <slot>
            <ShadcnTableHeader>
              <ShadcnTableRow>
                <ShadcnTableColumn v-for="c in columns"
                                   :key="c.key"
                                   :label="c.label"
                                   :border="border"
                                   :fixed="c.fixed"
                                   :width="c.width"/>
              </ShadcnTableRow>
            </ShadcnTableHeader>

            <ShadcnTableBody>
              <ShadcnTableRow v-for="(row, rowIndex) in data"
                              :key="rowIndex"
                              :stripe="(stripe && rowIndex % 2 === 1)"
                              @click="onRowClick(row, rowIndex)">
                <template v-for="col in columns" :key="col.key">
                  <ShadcnTableCell :border="border"
                                   :fixed="col.fixed"
                                   :stripe="(stripe && rowIndex % 2 === 1)"
                                   :width="col.width">
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

provide('ShadcnTable', true)

const emit = defineEmits(['on-row-click'])

withDefaults(defineProps<{
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

const onRowClick = (row: any, index: number) => {
  emit('on-row-click', row, index)
}
</script>
