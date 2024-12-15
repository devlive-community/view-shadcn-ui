export interface DataFilterProps
{
    conditions: FilterCondition[]
    operators: Operator[]
    fields: Field[]
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
