export interface ModalProps
{
    modelValue: boolean
    title?: string
    description?: string
    width?: number | string
    height?: number | string
    okText?: string
    cancelText?: string
    closable?: boolean
    maskClosable?: boolean
    dark?: boolean
}

export type ModalEmits = {
    (e: 'update:modelValue', value: boolean): void
    (e: 'on-close'): void
}
