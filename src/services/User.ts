import { UserModel } from '@/model/User'

class UserService
{
    private users: UserModel[] = []

    addUser(user: UserModel): void
    {
        this.users.push(user)
    }

    getUsers(): UserModel[]
    {
        return this.users
    }
}

export default new UserService()
