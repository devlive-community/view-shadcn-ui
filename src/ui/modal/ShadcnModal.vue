<template>
  <AlertDialog :open="modelValue" :default-open="modelValue" @update:open="handleClose">
    <AlertDialogContent :class="cn('sm:rounded-sm p-0 flex flex-col',
                                  width && `min-w-[${width}%] w-[${width}%] max-w-[${width}%]`,
                                  height && `min-h-[${height}%] h-[${height}%] max-h-[${height}%]`)">
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

      <div class="p-2 flex-1 overflow-auto">
        <slot name="content"/>
      </div>

      <AlertDialogFooter class="border-t p-2 flex">
        <slot v-if="$slots.footer" name="footer"/>
        <div class="space-x-2" v-else>
          <ShadcnButton type="danger" @click="onCancel">{{ cancelText }}</ShadcnButton>
          <ShadcnButton @click="onOk">{{ okText }}</ShadcnButton>
        </div>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<script setup lang="ts">
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { cn } from '@/lib/utils.ts'
import ShadcnButton from '@/ui/button'

const validateWidthHeight = (value: number) => {
  return value >= 10 && value <= 100 && value % 10 === 0
}

const emit = defineEmits(['on-cancel', 'on-ok', 'update:modelValue'])

interface Props
{
  modelValue: boolean
  title?: string
  description?: string
  width?: number
  height?: number
  okText?: string
  cancelText?: string
}

const props = withDefaults(defineProps<Props>(), {
  okText: 'OK',
  cancelText: 'Cancel'
})

if ((props.width && !validateWidthHeight(props.width)) || (props.height && !validateWidthHeight(props.height))) {
  console.error('Width or Height must be between 10 and 100 and multiples of 10.')
}

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
