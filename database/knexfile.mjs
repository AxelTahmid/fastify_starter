import "dotenv/config"

export default {
    development: {
        client: "pg",
        connection: process.env.DB_URL,
        searchPath: ["knex", "public"],
        acquireConnectionTimeout: 10000,
        pool: {
            min: 1,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "migrations",
        },
        seeds: {
            directory: "seeds",
        },
        asyncStackTraces: true,
        debug: true,
    },
}
