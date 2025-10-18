import { computed, ComputedRef } from 'vue'
import { BorderConfig } from '../types'

export interface UseBorderReturn
{
    hasOuterBorder: ComputedRef<boolean>
    hasInnerBorder: ComputedRef<boolean>
    hasHorizontalBorder: ComputedRef<boolean>
    hasVerticalBorder: ComputedRef<boolean>
    getContainerBorderClass: () => string
    getHeaderBorderClass: () => string
    getRowBorderClass: () => string
    getCellBorderClass: (isFixed?: boolean, fixedPosition?: 'left' | 'right') => string
}

export function useBorder(border?: boolean | BorderConfig): UseBorderReturn
{
    const normalizedConfig = computed<Required<BorderConfig>>(() => {
        if (border === undefined || border === false) {
            return {
                outer: false,
                inner: false,
                horizontal: false,
                vertical: false
            }
        }

        if (border === true) {
            return {
                outer: true,
                inner: true,
                horizontal: true,
                vertical: true
            }
        }

        return {
            outer: border.outer ?? false,
            inner: border.inner ?? false,
            horizontal: border.horizontal ?? false,
            vertical: border.vertical ?? false
        }
    })

    const hasOuterBorder = computed<boolean>(() => normalizedConfig.value.outer)
    const hasInnerBorder = computed<boolean>(() => normalizedConfig.value.inner)
    const hasHorizontalBorder = computed<boolean>(() => normalizedConfig.value.horizontal)
    const hasVerticalBorder = computed<boolean>(() => normalizedConfig.value.vertical)

    const getContainerBorderClass = (): string => {
        const classes: string[] = []

        if (hasOuterBorder.value) {
            classes.push('border', 'rounded-sm')
        }

        return classes.join(' ')
    }

    const getHeaderBorderClass = (): string => {
        const classes: string[] = []

        if (hasHorizontalBorder.value) {
            classes.push('border-b')
        }

        return classes.join(' ')
    }

    const getRowBorderClass = (): string => {
        const classes: string[] = []

        if (hasHorizontalBorder.value) {
            classes.push('border-b')
        }

        return classes.join(' ')
    }

    const getCellBorderClass = (
        isFixed: boolean = false,
        fixedPosition?: 'left' | 'right'
    ): string => {
        const classes: string[] = []

        if (isFixed && hasVerticalBorder.value) {
            if (fixedPosition === 'left') {
                classes.push('border-r-2', 'border-gray-300')
            }
            else if (fixedPosition === 'right') {
                classes.push('border-l-2', 'border-gray-300')
            }
        }
        else if (hasVerticalBorder.value && hasInnerBorder.value) {
            classes.push('border-r', 'border-gray-200')
        }

        return classes.join(' ')
    }

    return {
        hasOuterBorder,
        hasInnerBorder,
        hasHorizontalBorder,
        hasVerticalBorder,
        getContainerBorderClass,
        getHeaderBorderClass,
        getRowBorderClass,
        getCellBorderClass
    }
}