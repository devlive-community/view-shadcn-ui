export interface DataFilterProps
{
    conditions: FilterCondition[]
    operators?: Operator[]
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

export interface Operator
{
    label: string
    value: string
}

export type DataFilterEmits = {
    (e: 'update:modelValue', conditions: FilterCondition[]): void
    (e: 'on-change', conditions: FilterCondition[]): void
    (e: 'on-add-condition', condition: FilterCondition): void
    (e: 'on-remove-condition', index: number): void
}
