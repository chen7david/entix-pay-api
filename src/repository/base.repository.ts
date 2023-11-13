import { db } from "../database";

export class BaseRepository {
    static tableName: string = 'tableName' 

    static async getAll(){
        return db(this.tableName)
    }

    static async create<T> (data: T) {
        return db(this.tableName).insert(data)
    }

    static async delete<T> (id: number | string) {
        return db(this.tableName).delete().where('id', id)
    }

    static async update<T>(id: number | string, data: T) {
        const item = await db(this.tableName).where('id', id).first() as T
        if(!item) throw(new Error(`could not find ${this.tableName} with id ${id}`))
        return db(this.tableName).update(data).where('id', id)
    }

    static async softDelete<T extends { is_deleted?: boolean }>(id: number | string) {
        return this.update(id, {is_deleted: true})
    }

    static async unDelete<T extends { is_deleted?: boolean }>(id: number | string) {
        return this.update(id, {is_deleted: false})
    }
}
