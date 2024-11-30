// types.ts
export interface UploadProps
{
    accept?: string
    description?: string
    multiple?: boolean
    disabled?: boolean
    action: string
    headers?: Record<string, string>
    data?: Record<string, any>
    name?: string
    withCredentials?: boolean
    beforeUpload?: (file: File) => boolean | Promise<boolean>
}

export interface UploadFile
{
    uid: string
    name: string
    size: number
    status: 'ready' | 'uploading' | 'success' | 'error'
    percent?: number
    response?: any
    error?: string
    raw: File
}

export type UploadEmits = {
    (e: 'update:files', data: UploadFile[]): void
    (e: 'on-change', data: UploadFile[]): void
    (e: 'on-success', response: any, file: UploadFile): void
    (e: 'on-error', error: any, file: UploadFile): void
    (e: 'on-progress', progress: any, file: UploadFile): void
}
