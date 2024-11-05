export interface NumberProps
{
    modelValue?: number | string
}

export type NumberEmits = {
    'update:modelValue': [value: any]
    'on-change': [value: any]
}

