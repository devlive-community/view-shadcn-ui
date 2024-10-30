export default interface Rule
{
    required?: boolean
    message?: string
    min?: number
    max?: number
    pattern?: RegExp
    validator?: (value: any) => boolean | Promise<boolean>
}
