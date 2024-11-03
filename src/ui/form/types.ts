import Rule from '@/ui/form/rule.ts'

export interface FormItemProps
{
    name: string
    label?: string
    description?: string
    rules?: Rule[]
    validateOnBlur?: boolean
}
