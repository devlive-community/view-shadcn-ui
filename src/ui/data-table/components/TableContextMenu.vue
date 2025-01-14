<template>
  <ShadcnContextMenu v-model="localVisible" :position="contextMenuState.position.value">
    <ShadcnContextMenuItem
        :disabled="!contextMenuState.selectedValue.value?.col.editable"
        @click="onItemClick('edit-cell')">
      {{ t('dataTable.text.editCell') }}
    </ShadcnContextMenuItem>
    <ShadcnContextMenuItem @click="onItemClick('edit-row')">
      {{ t('dataTable.text.editRow') }}
    </ShadcnContextMenuItem>

    <slot :actionsPosition="menuPosition"
          :position="contextMenuState.position.value"
          :selectedValue="currentValue as any"
          :visible="localVisible"
          name="contextMenu">
    </slot>
  </ShadcnContextMenu>

  <div v-if="editableState.editingRowState.value"
       :style="{
         position: 'fixed',
         left: `${calcSize(menuPosition.x)}`,
         top: `${calcSize(menuPosition.y)}`
       }"
       class="space-x-2">
    <ShadcnButtonGroup size="small">
      <ShadcnButton type="error" circle @click="onCancelRowEdit">
        <ShadcnIcon icon="X" size="15"/>
      </ShadcnButton>
      <ShadcnButton type="success" circle @click="onSaveRowEdit">
        <ShadcnIcon icon="Check" size="15"/>
      </ShadcnButton>
    </ShadcnButtonGroup>
  </div>
</template>

<script lang="ts" setup>
import { t } from '@/utils/locale'
import { ShadcnContextMenu, ShadcnContextMenuItem } from '@/ui/contextmenu'
import ShadcnButton from '@/ui/button'
import { computed, ref, watch } from 'vue'
import { useEditable } from '../hooks/useEditable'
import { CellPayload } from '../types'
import { calcSize } from '@/utils/common.ts'
import ShadcnIcon from '@/ui/icon'
import ShadcnButtonGroup from '@/ui/button/group'

const props = defineProps<{
  contextMenuState: any
  editableState: ReturnType<typeof useEditable>
}>()

const emits = defineEmits(['on-row-edit'])

const currentValue = ref<CellPayload | null>(null)
const menuPosition = ref({ x: 0, y: 0 })

watch(() => props.contextMenuState.selectedValue.value, (newVal) => {
  if (newVal) {
    currentValue.value = { ...newVal }
  }
}, { immediate: true })

watch(() => props.contextMenuState.actionsPosition.value, (newVal) => {
  if (newVal) {
    menuPosition.value = { ...newVal }
  }
}, { immediate: true })

const localVisible = computed({
  get: () => props.contextMenuState.visible.value,
  set: (value) => {
    if (!value) {
      props.contextMenuState.hide(true)
    }
  }
})

const onItemClick = (action: string) => {
  const selectedValue = currentValue.value
  if (!selectedValue) {
    return
  }

  switch (action) {
    case 'edit-cell':
      const { rowIndex, key, value, row, col } = selectedValue
      props.editableState.startEditing(rowIndex, key, value, row, col)
      props.contextMenuState.hide(false)
      break

    case 'edit-row':
      const { rowIndex: rowIdx, row: rowData } = selectedValue
      props.editableState.startRowEditing(rowIdx, { ...rowData })
      props.contextMenuState.hide(true)
      break
  }
}

const onSaveRowEdit = () => {
  const lastEditState = props.editableState.stopRowEditing()
  if (lastEditState) {
    emits('on-row-edit', lastEditState)
  }
}

const onCancelRowEdit = () => {
  props.editableState.stopRowEditing()
}
</script>