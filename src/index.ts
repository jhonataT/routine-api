import express, { Request, Response } from 'express';

import { resolve } from 'path';
import routes from './routes/api';

const app = express();

app.get('/', (req: Request, res: Response) => res.send('404 ROUTE'));
app.use('/api', routes);

app.listen(process.env.port || 3000, () => {
  console.log('Server is running: 3000');
});