<template>
  <div class="w-full border border-gray-200 rounded-md">
    <div class="overflow-auto">
      <div class="min-w-full inline-block align-middle">
        <table class="min-w-full divide-y divide-gray-200">
          <slot>
            <ShadcnTableHeader>
              <ShadcnTableRow>
                <ShadcnTableColumn v-for="c in columns" :key="c.key" :label="c.label"/>
              </ShadcnTableRow>
            </ShadcnTableHeader>

            <ShadcnTableBody>
              <ShadcnTableRow v-for="(row, rowIndex) in data"
                              :key="rowIndex"
                              :stripe="(stripe && rowIndex % 2 === 1)">
                <ShadcnTableCell v-for="col in columns" :key="col.key">
                  {{ row[col.key] }}
                </ShadcnTableCell>
              </ShadcnTableRow>
            </ShadcnTableBody>
          </slot>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import ShadcnTableHeader from './ShadcnTableHeader.vue'
import ShadcnTableBody from './ShadcnTableBody.vue'
import ShadcnTableRow from './ShadcnTableRow.vue'
import ShadcnTableColumn from './ShadcnTableColumn.vue'
import ShadcnTableCell from './ShadcnTableCell.vue'
import { Header } from '@/ui/table/configure.ts'

provide('ShadcnTable', true)

withDefaults(defineProps<{
  columns: Array<Header>
  data: Array<any>
  stripe?: boolean
}>(), {
  stripe: false
})
</script>
