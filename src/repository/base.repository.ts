import { db } from "../database";

export class BaseRepository {
    static tableName: string = 'tableName' 

    static async getAll(){
        return db(this.tableName)
    }

    static async create<T> (data: T) {
        return db(this.tableName).insert(data)
    }
}
