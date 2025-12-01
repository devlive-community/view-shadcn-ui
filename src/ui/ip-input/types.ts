import { Size } from '@/ui/common/size.ts'
import { HoverType } from '@/ui/common/type.ts'

export interface IPInputProps
{
    /**
     * Model value for v-model binding
     * v-model绑定的值
     */
    modelValue?: string

    /**
     * Disables the input
     * 禁用输入
     */
    disabled?: boolean

    /**
     * Size of the input
     * 输入框尺寸
     */
    size?: keyof typeof Size

    /**
     * Type of the input
     * 输入框类型
     */
    type?: keyof typeof HoverType

    /**
     * Name of the input
     * 输入框名称，用于表单
     */
    name?: string

    /**
     * Separator of the input
     * 输入框分隔符
     */
    separator?: string

    /**
     * Dark mode
     * 暗黑模式
     */
    dark?: boolean
}

export type IPInputEmits = {
    /**
     * Emitted when IP address changes
     * IP地址变化时触发
     */
    (e: 'on-change', value: string): void

    /**
     * Update model value
     * 更新模型值
     */
    (e: 'update:modelValue', value: string): void
}