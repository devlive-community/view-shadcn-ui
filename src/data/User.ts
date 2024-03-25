import UserService from '@/services/User'
import { UserModel, UserRole } from '@/model/User'

const createUser = (): void => {
    const user001: UserModel = {
        username: 'User 001',
        email: 'LJw5H@example.com',
        role: UserRole.Viewer
    }
    UserService.addUser(user001)

    const user002: UserModel = {
        username: 'User 002',
        email: 'LJw5H@example.com',
        role: UserRole.Developer
    }
    UserService.addUser(user002)

    const user003: UserModel = {
        username: 'User 003',
        email: 'LJw5H@example.com',
        role: UserRole.Billing
    }
    UserService.addUser(user003)

    const user004: UserModel = {
        username: 'User 004',
        email: 'LJw5H@example.com',
        role: UserRole.Owner
    }
    UserService.addUser(user004)

    const user005: UserModel = {
        username: 'User 005',
        email: 'LJw5H@example.com'
    }
    UserService.addUser(user005)
}

export {
    createUser
}
