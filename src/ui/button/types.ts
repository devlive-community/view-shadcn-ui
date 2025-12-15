import type { ButtonBackgroundType } from '@/ui/common/type'
import type { ButtonSize } from '@/ui/common/size'
import type { ArrangeDirection } from '@/ui/common/position'

export interface ButtonProps {
  text?: string
  size?: keyof typeof ButtonSize
  type?: keyof typeof ButtonBackgroundType
  round?: boolean
  circle?: boolean
  loading?: boolean
  color?: string
  disabled?: boolean
  ghost?: boolean
  submit?: boolean
  reset?: boolean
  to?: string
  dark?: boolean
  glass?: boolean
}

export interface ButtonGroupProps {
  direction?: keyof typeof ArrangeDirection
  size?: keyof typeof ButtonSize
  dark?: boolean
  glass?: boolean
}
