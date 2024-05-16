

import express from 'express';
import bodyParser from 'body-parser';
import { filterAndStoreOrders } from "../routes/routes";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/orders', filterAndStoreOrders);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




