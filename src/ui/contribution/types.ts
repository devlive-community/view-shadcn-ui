export interface ContributionOption
{
    date: string
    count: number
    weekday: number
}

export interface ContributionProps
{
    data: Array<ContributionOption>
    colorScheme?: Array<string>
    yearCount?: number
    showLegend?: boolean
    showWeek?: boolean
    showMonth?: boolean
    cellSize?: number
    cellGap?: number
    year?: number
    dark?: boolean
    glass?: boolean
}

export type ContributionEmits = {
    (e: 'on-select', value: ContributionOption): void
}

export interface ContributionCellSlotProps
{
    item: ContributionOption
    color: string
}

export interface ContributionSlots
{
    cell?: (props: ContributionCellSlotProps) => any
}