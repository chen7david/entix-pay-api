import * as dotenv from 'dotenv'
const nodeEnv = process.env.NODE_ENV || 'development'
const configPath = `/.env.${nodeEnv}`
dotenv.config({ path: configPath})

console.log(process.env)
