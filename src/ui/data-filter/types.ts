export interface DataFilterProps
{
    conditions: FilterCondition[]
    operators: string[]
    fields: Field[]
}

export interface FilterCondition
{
    field: string
    operator: string
    value: any
}

export interface Field
{
    label: string
    value: string
    type: 'string' | 'number' | 'date' | 'boolean'
}

export type DataFilterEmits = {
    (e: 'update:modelValue', conditions: FilterCondition[]): void
    (e: 'on-change', conditions: FilterCondition[]): void
    (e: 'on-add-condition', condition: FilterCondition): void
    (e: 'on-remove-condition', index: number): void
}
