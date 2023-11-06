import * as dotenv from 'dotenv'
import * as path from 'path'
import { db } from './database'
import { TUserEntity, UserRepository } from './repository/user.repository'
const nodeEnv = process.env.NODE_ENV || 'development'
const configPath = path.join(__dirname,`../.env.${nodeEnv}`)

dotenv.config({ path: configPath})

db('users').then(console.log)



const test = async () => {
    await UserRepository.create<TUserEntity>({
        username: 'lele3',
        email: 'lele@mail.com',
        password: '234242',
        is_deleted: false
    })
    const data = await UserRepository.getAll()
    console.log(data)
}

test()