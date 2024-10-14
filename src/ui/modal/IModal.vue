<template>
  <AlertDialog :open="modelValue" :default-open="modelValue" @update:open="handleClose">
    <AlertDialogContent class="sm:rounded-sm p-0">
      <AlertDialogHeader v-if="$slots.title || title" class="border-b p-2">
        <AlertDialogTitle>
          <span v-if="title">{{ title }}</span>
          <slot v-else name="title"/>
        </AlertDialogTitle>

        <AlertDialogDescription v-if="$slots.description || description">
          <span v-if="description">{{ description }}</span>
          <slot v-else name="description"/>
        </AlertDialogDescription>
      </AlertDialogHeader>

      <div class="p-2">
        <slot name="content"/>
      </div>

      <AlertDialogFooter class="border-t p-2">
        <slot v-if="$slots.footer" name="footer"/>
        <div class="space-x-2" v-else>
          <IButton type="danger" @click="onCancel">{{ cancelText }}</IButton>
          <IButton @click="onOk">{{ okText }}</IButton>
        </div>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<script setup lang="ts">
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import IButton from '@/ui/button'

const emit = defineEmits(['on-cancel', 'on-ok', 'update:modelValue'])

const props = withDefaults(defineProps<{
  modelValue: boolean
  title?: string
  description?: string
  okText?: string
  cancelText?: string
}>(), {
  okText: 'OK',
  cancelText: 'Cancel'
})

const onCancel = () => {
  emit('on-cancel')
  emit('update:modelValue', false)
}

const onOk = () => {
  emit('on-ok')
  emit('update:modelValue', false)
}

const handleClose = () => {
  emit('update:modelValue', false)
}
</script>
