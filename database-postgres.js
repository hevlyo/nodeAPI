import { randomUUID } from "node:crypto"
import { sql } from "./db.js"

export class DatabasePostgres {

    async list(search) {
        let videos

        if (search)
            videos = await sql`SELECT * FROM videos WHERE title ILIKE ${'%' + search + '%'}`
        else
            videos = await sql`SELECT * FROM videos`  

    return videos
    }

    async create(video) {
        const videoId = randomUUID();
        const { title, description, duration, url } = video

        await sql`insert into videos (id, title, description, duration, url) VALUES (${videoId}, ${title}, ${description}, ${duration}, ${url})`
    }

    async update(id, video) {
        const { title, description, duration, url } = video

        await sql`UPDATE videos SET title = ${title}, description = ${description}, duration = ${duration}, url = ${url} WHERE id = ${id}`
    }

    async delete(id) {
        await sql`DELETE FROM videos WHERE id = ${id}`
    }
}