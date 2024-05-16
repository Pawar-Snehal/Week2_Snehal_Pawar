import { Client } from 'pg';
import  {  query } from '../src/pgConfig';

const client = new Client('query');

export async function ensureTableExists(tableName: string, createTableQuery: string): Promise<void> {
  try {
    await client.connect();

    const tableCheckQuery = `
      SELECT EXISTS (
        SELECT 1
        FROM information_schema.tables
        WHERE table_schema = 'public'
        AND table_name = $1
      );
    `;
    
    const res = await client.query(tableCheckQuery, [tableName]);
    const tableExists = res.rows[0].exists;

    if (!tableExists) {
      console.log(`Table "${tableName}" does not exist. Creating...`);
      await client.query(createTableQuery);
      console.log(`Table "${tableName}" created successfully.`);
    } else {
      console.log(`Table "${tableName}" already exists.`);
    }
  } catch (err) {
    console.error('Error ensuring table exists', err);
  } finally {
    await client.end();
  }
}
