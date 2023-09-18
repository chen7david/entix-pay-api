import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('roles', (table) => {
        table.increments('id').primary()
        table.string('name').unique().notNullable()
        table.string('short_description').notNullable()
        table.text('description')
        table.boolean('is_deleted')
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('roles')
}

