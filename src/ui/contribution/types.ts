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
}

export type ContributionEmits = {
    (e: 'on-select', value: ContributionOption): void
}