export interface CollapseProps {
  modelValue?: string[]
  accordion?: boolean
  dark?: boolean
  glass?: boolean
}

export interface CollapseItemProps {
  title: string
  name: string
}

export interface CollapseEmits {
  (e: 'update:modelValue', value: string[]): void
  (e: 'on-change', value: { name: string; value: string[] }): void
}
