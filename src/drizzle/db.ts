import { env } from "@/data/env/server"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

// Use DATABASE_URL directly from env
const connectionString = env.DATABASE_URL

// Supabase requires prepare: false in Transaction pool mode
export const client = postgres(connectionString, { prepare: false })

// Drizzle DB instance with schema
export const db = drizzle(client, { schema })
