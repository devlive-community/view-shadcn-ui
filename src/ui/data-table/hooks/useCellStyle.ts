import { CellStyleConfig, ColumnProps, GradientCondition } from '../types'

export interface CellStyleResult
{
    background?: string
    backgroundColor?: string
    color?: string
    borderColor?: string
    className?: string
}

export interface UseCellStyleReturn
{
    getCellStyle: (row: any, col: ColumnProps, rowIndex: number) => CellStyleResult
    hasCellStyle: (col: ColumnProps) => boolean
}

/**
 * 条件匹配引擎
 *
 * 支持的条件类型：
 * - gt: 大于
 * - gte: 大于等于
 * - lt: 小于
 * - lte: 小于等于
 * - eq: 等于
 * - neq: 不等于
 * - between: 区间范围
 * - in: 包含于集合
 * - notIn: 不包含于集合
 */
function checkCondition(condition: GradientCondition, value: any): boolean
{
    if (value === undefined || value === null) {
        return false
    }

    switch (condition.type) {
        case 'gt':
            return Number(value) > (condition.value as number)

        case 'gte':
            return Number(value) >= (condition.value as number)

        case 'lt':
            return Number(value) < (condition.value as number)

        case 'lte':
            return Number(value) <= (condition.value as number)

        case 'eq':
            return value === condition.value

        case 'neq':
            return value !== condition.value

        case 'between': {
            const [min, max] = condition.value as [number, number]
            const numValue = Number(value)
            return numValue >= min && numValue <= max
        }

        case 'in':
            return (condition.value as any[]).includes(value)

        case 'notIn':
            return !(condition.value as any[]).includes(value)

        default:
            return false
    }
}

function getFieldValue(row: any, col: ColumnProps): any
{
    const config = col.styleConfig
    if (!config) {
        return row[col.key]
    }

    const field = config.field || col.key

    if (field.includes('.')) {
        return field.split('.').reduce((obj, key) => obj?.[key], row)
    }

    return row[field]
}

function applyStyleConfig(
    config: CellStyleConfig,
    value: any
): CellStyleResult
{
    const result: CellStyleResult = {}

    for (const condition of config.conditions) {
        if (checkCondition(condition, value)) {
            if (condition.gradient) {
                result.background = condition.gradient
            }
            if (condition.backgroundColor) {
                result.backgroundColor = condition.backgroundColor
            }
            if (condition.textColor) {
                result.color = condition.textColor
            }
            if (condition.borderColor) {
                result.borderColor = condition.borderColor
            }
            if (condition.className) {
                result.className = condition.className
            }
            return result
        }
    }

    if (config.defaultGradient) {
        result.background = config.defaultGradient
    }
    if (config.defaultBackgroundColor) {
        result.backgroundColor = config.defaultBackgroundColor
    }
    if (config.defaultTextColor) {
        result.color = config.defaultTextColor
    }
    if (config.defaultClassName) {
        result.className = config.defaultClassName
    }

    return result
}

export function useCellStyle(): UseCellStyleReturn
{
    const getCellStyle = (
        row: any,
        col: ColumnProps,
        _rowIndex: number
    ): CellStyleResult => {
        if (!col.styleConfig) {
            return {}
        }

        const value = getFieldValue(row, col)
        return applyStyleConfig(col.styleConfig, value)
    }

    const hasCellStyle = (col: ColumnProps): boolean => {
        return !!(col.styleConfig && col.styleConfig.conditions.length > 0)
    }

    return {
        getCellStyle,
        hasCellStyle
    }
}