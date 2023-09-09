import { sql } from './db.js';

/* sql`DROP TABLE IF EXISTS videos;`.then(() => {
    console.log('Table dropped');
    });
 */
sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    duration INTEGER,
    url TEXT
);
`.then(() => {
    console.log('Table created')
    }).catch((err) => {
        console.log(err)
        }).finally(() => {
            sql.end()
            });
