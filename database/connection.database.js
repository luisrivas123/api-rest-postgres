import 'dotenv/config'
import pg from 'pg'
const { Pool } = pg
const connectionString = process.env.DATABASE_URL_PROD

export const db = new Pool({
  allowExitOnIdle: true,
  connectionString,
  ssl: {
    rejectUnauthorized: false // Permitir certificados autofirmados
  }
})

try {
  await db.query('SELECT NOW()')
  console.log('Database connected')
} catch (error) {
  console.log(error)
}
