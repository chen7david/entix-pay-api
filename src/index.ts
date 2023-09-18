import * as dotenv from 'dotenv'
import * as path from 'path'
import { db } from './database'
const nodeEnv = process.env.NODE_ENV || 'development'
const configPath = path.join(__dirname,`../.env.${nodeEnv}`)

dotenv.config({ path: configPath})

console.log(process.env.USER_NOW)
console.log(configPath)
db('users').then(console.log)