import pg from "pg"

export const pool = new pg.Pool({
  port: 5432,
  host: "localhost",
  user: "postgres",
  password: "123456",
  database: "fundonemosdb",
})

pool.on("connect", () => {
  console.log("Database connected")
})
