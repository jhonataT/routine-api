import express, { Request, Response } from 'express';

import { resolve } from 'path';
import routineRoutes from './routes/routine';

const app = express();

app.get('/', (req: Request, res: Response) => res.send('404 ROUTE'));
app.use('/routine', routineRoutes);

app.listen(process.env.port || 3000, () => {
  console.log('Server is running: 3000');
});