export interface ContributionOption
{
    date: string
    count: number
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