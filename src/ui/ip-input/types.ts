export interface IPInputProps
{
    /**
     * Model value for v-model binding
     * v-model绑定的值
     */
    modelValue?: string
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