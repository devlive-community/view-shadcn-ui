export interface UserModel
{
    username?: string
    email?: string
    role?: UserRole
}

export enum UserRole
{
    Viewer = 'viewer',
    Developer = 'developer',
    Billing = 'billing',
    Owner = 'owner'
}
