
import express from 'express';
import bodyParser from 'body-parser';
import { filterAndStoreOrders } from "../routes/routes";
import  array  from "../routes/array";
import studentsRouter from '../routes/students';
import router from '../routes/tableCheck';


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/orders', filterAndStoreOrders);
app.use(array);
app.use('/students', studentsRouter);
app.use('/api', router );


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




