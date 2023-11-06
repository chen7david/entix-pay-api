import { BaseRepository } from "./base.repository"

export type TUserEntity = {
    username: string
    password: string
    email: string
    is_deleted: boolean
}

export class UserRepository extends BaseRepository {
    static tableName: string = 'users'
}