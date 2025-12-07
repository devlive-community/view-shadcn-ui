export interface DataFilterProps
{
    modelValue: FilterCondition[]
    operators?: Operator[]
    fields: Field[]
    dark?: boolean
}

export interface FilterCondition
{
    field: string | null
    operator: string | null
    value?: any
}

export interface Field
{
    label: string
    value: string
    type: 'string' | 'number' | 'date' | 'boolean'
}

export interface Operator
{
    label: string
    value: string
    scope: string[]
}

export interface ValidationError
{
    fieldIndex: number
    field: string
    message: string
}

export interface ValidationResult
{
    isValid: boolean
    errors: ValidationError[]
}

export type DataFilterEmits = {
    (e: 'update:modelValue', conditions: FilterCondition[]): void
    (e: 'on-change', conditions: FilterCondition[]): void
    (e: 'on-add-condition', condition: FilterCondition): void
    (e: 'on-remove-condition', condition: FilterCondition): void
    (e: 'on-validation-change', result: ValidationResult): void
}

export interface FilterItem
{
    type: 'condition' | 'group'
    value: any
    operator?: 'and' | 'or'
    isValid?: boolean
}

export interface FilterGroup
{
    operator: 'and' | 'or'
    items: FilterItem[]
}

export interface HierarchicalDataFilterProps
{
    modelValue: FilterGroup[]
    fields: Field[]
    dark?: boolean
}

export type HierarchicalDataFilterEmits = {
    (e: 'update:modelValue', value: FilterGroup[]): void
    (e: 'on-validation-change', validation: ValidationResult): void
}
