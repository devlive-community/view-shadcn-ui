import { App } from 'vue'

declare module 'view-shadcn-ui'
{
    export const install: (app: App) => void

    export const ShadcnAlert: typeof import('@/ui/alert').default
    export const ShadcnCheckbox: typeof import('@/ui/checkbox').default
    export const ShadcnCheckboxGroup: typeof import('@/ui/checkbox').default
    export const ShadcnInput: typeof import('@/ui/input').default
    export const ShadcnIcon: typeof import('@/ui/icon').default
    export const ShadcnSwitch: typeof import('@/ui/switch').default
    export const ShadcnRadio: typeof import('@/ui/radio').default
    export const ShadcnRadioGroup: typeof import('@/ui/radio').default
    export const ShadcnSelect: typeof import('@/ui/select').default
    export const ShadcnSpin: typeof import('@/ui/spin').default

    export type { AlertProps, AlertEmits } from '@/ui/alert'
    export type { CheckboxProps, CheckboxEmits } from '@/ui/checkbox'
    export type { InputProps, InputEmits } from '@/ui/input'
    export type { IconProps, IconEmits } from '@/ui/icon'
    export type { SwitchProps, SwitchEmits } from '@/ui/switch'
    export type { RadioProps, RadioEmits } from '@/ui/radio'
    export type { RadioGroupProps, RadioGroupEmits } from '@/ui/radio'
    export type { SelectProps, SelectEmits } from '@/ui/select'
    export type { SpinProps, SpinEmits } from '@/ui/spin'
}
