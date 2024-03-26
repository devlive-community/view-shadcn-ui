export interface UserModel
{
    username?: string
    email?: string
    role?: UserRole
}

export enum UserRole
{
    Viewer = 'Viewer',
    Developer = 'Developer',
    Billing = 'Billing',
    Owner = 'Owner'
}
