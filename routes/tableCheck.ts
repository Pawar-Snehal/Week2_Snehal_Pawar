import { Router, Request, Response } from 'express';
import { ensureTableExists } from './db';

const router = Router();

const tableName = 'my_table';
const createTableQuery = `
  CREATE TABLE my_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

router.post('/add-entity', async (req: Request, res: Response) => {
  try {
    await ensureTableExists(tableName, createTableQuery);
    
    res.status(200).send('Entity added successfully');
  } catch (err) {
    console.error('Error in /add-entity route', err);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
