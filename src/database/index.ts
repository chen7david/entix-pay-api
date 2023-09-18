import knex from 'knex'
import knexfile from './knexfile'

const env = process.env.NODE_ENV || 'development'
const knexConfig = knexfile[env]

export const db = knex(knexConfig)