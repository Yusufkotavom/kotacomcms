#!/usr/bin/env node

import { Client } from 'pg'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables from the correct path
const envPath = join(__dirname, '.env')
console.log('🔍 Looking for .env file at:', envPath)

// Read .env file manually if dotenv fails
import { readFileSync } from 'fs'
try {
  const envContent = readFileSync(envPath, 'utf8')
  console.log('📄 .env file content (first line):', envContent.split('\n')[0])
  
  // Parse DATABASE_URI manually
  const dbUriMatch = envContent.match(/DATABASE_URI=(.+)/)
  if (dbUriMatch) {
    process.env.DATABASE_URI = dbUriMatch[1].trim()
    console.log('✅ DATABASE_URI set manually')
  }
} catch (error) {
  console.log('❌ Error reading .env file:', error.message)
}

dotenv.config({ path: envPath })

const databaseUri = process.env.DATABASE_URI
console.log('🔍 Environment variables loaded:', Object.keys(process.env).filter(key => key.includes('DATABASE')))

if (!databaseUri) {
  console.error('❌ DATABASE_URI environment variable is not set')
  console.log('Please create a .env file with your Supabase connection string')
  process.exit(1)
}

async function testConnection() {
  const client = new Client({
    connectionString: databaseUri,
    ssl: databaseUri.includes('neon.tech') ? {
      rejectUnauthorized: false,
    } : databaseUri.includes('supabase.co') ? {
      rejectUnauthorized: false,
    } : false,
  })

  try {
    console.log('🔌 Testing database connection...')
    await client.connect()
    console.log('✅ Successfully connected to Supabase PostgreSQL!')
    
    // Test basic query
    const result = await client.query('SELECT version()')
    console.log('📊 Database version:', result.rows[0].version.split(' ')[0])
    
    // Check if tables exist
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `)
    
    console.log('📋 Existing tables:', tablesResult.rows.map(row => row.table_name))
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message)
    console.log('\n🔧 Troubleshooting tips:')
    console.log('1. Check your DATABASE_URI in .env file')
    console.log('2. Verify your Supabase project is active')
    console.log('3. Check your internet connection')
    console.log('4. Ensure the database password is correct')
  } finally {
    await client.end()
  }
}

testConnection()
